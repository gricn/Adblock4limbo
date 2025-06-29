/*******************************************************************************

    uBlock Origin Lite - a comprehensive, MV3-compliant content blocker
    Copyright (C) 2014-present Raymond Hill

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see {http://www.gnu.org/licenses/}.

    Home: https://github.com/gorhill/uBlock

*/

// ruleset: ublock-filters

// Important!
// Isolate from global scope

// Start of local scope
(function uBOL_preventFetch() {

/******************************************************************************/

function preventFetch(...args) {
    preventFetchFn(false, ...args);
}

function preventFetchFn(
    trusted = false,
    propsToMatch = '',
    responseBody = '',
    responseType = ''
) {
    const safe = safeSelf();
    const scriptletName = `${trusted ? 'trusted-' : ''}prevent-fetch`;
    const logPrefix = safe.makeLogPrefix(
        scriptletName,
        propsToMatch,
        responseBody,
        responseType
    );
    const needles = [];
    for ( const condition of safe.String_split.call(propsToMatch, /\s+/) ) {
        if ( condition === '' ) { continue; }
        const pos = condition.indexOf(':');
        let key, value;
        if ( pos !== -1 ) {
            key = condition.slice(0, pos);
            value = condition.slice(pos + 1);
        } else {
            key = 'url';
            value = condition;
        }
        needles.push({ key, pattern: safe.initPattern(value, { canNegate: true }) });
    }
    const validResponseProps = {
        ok: [ false, true ],
        statusText: [ '', 'Not Found' ],
        type: [ 'basic', 'cors', 'default', 'error', 'opaque' ],
    };
    const responseProps = {
        statusText: { value: 'OK' },
    };
    if ( /^\{.*\}$/.test(responseType) ) {
        try {
            Object.entries(JSON.parse(responseType)).forEach(([ p, v ]) => {
                if ( validResponseProps[p] === undefined ) { return; }
                if ( validResponseProps[p].includes(v) === false ) { return; }
                responseProps[p] = { value: v };
            });
        }
        catch { }
    } else if ( responseType !== '' ) {
        if ( validResponseProps.type.includes(responseType) ) {
            responseProps.type = { value: responseType };
        }
    }
    proxyApplyFn('fetch', function fetch(context) {
        const { callArgs } = context;
        const details = callArgs[0] instanceof self.Request
            ? callArgs[0]
            : Object.assign({ url: callArgs[0] }, callArgs[1]);
        let proceed = true;
        try {
            const props = new Map();
            for ( const prop in details ) {
                let v = details[prop];
                if ( typeof v !== 'string' ) {
                    try { v = safe.JSON_stringify(v); }
                    catch { }
                }
                if ( typeof v !== 'string' ) { continue; }
                props.set(prop, v);
            }
            if ( safe.logLevel > 1 || propsToMatch === '' && responseBody === '' ) {
                const out = Array.from(props).map(a => `${a[0]}:${a[1]}`);
                safe.uboLog(logPrefix, `Called: ${out.join('\n')}`);
            }
            if ( propsToMatch === '' && responseBody === '' ) {
                return context.reflect();
            }
            proceed = needles.length === 0;
            for ( const { key, pattern } of needles ) {
                if (
                    pattern.expect && props.has(key) === false ||
                    safe.testPattern(pattern, props.get(key)) === false
                ) {
                    proceed = true;
                    break;
                }
            }
        } catch {
        }
        if ( proceed ) {
            return context.reflect();
        }
        return Promise.resolve(generateContentFn(trusted, responseBody)).then(text => {
            safe.uboLog(logPrefix, `Prevented with response "${text}"`);
            const response = new Response(text, {
                headers: {
                    'Content-Length': text.length,
                }
            });
            const props = Object.assign(
                { url: { value: details.url } },
                responseProps
            );
            safe.Object_defineProperties(response, props);
            return response;
        });
    });
}

function generateContentFn(trusted, directive) {
    const safe = safeSelf();
    const randomize = len => {
        const chunks = [];
        let textSize = 0;
        do {
            const s = safe.Math_random().toString(36).slice(2);
            chunks.push(s);
            textSize += s.length;
        }
        while ( textSize < len );
        return chunks.join(' ').slice(0, len);
    };
    if ( directive === 'true' ) {
        return randomize(10);
    }
    if ( directive === 'emptyObj' ) {
        return '{}';
    }
    if ( directive === 'emptyArr' ) {
        return '[]';
    }
    if ( directive === 'emptyStr' ) {
        return '';
    }
    if ( directive.startsWith('length:') ) {
        const match = /^length:(\d+)(?:-(\d+))?$/.exec(directive);
        if ( match === null ) { return ''; }
        const min = parseInt(match[1], 10);
        const extent = safe.Math_max(parseInt(match[2], 10) || 0, min) - min;
        const len = safe.Math_min(min + extent * safe.Math_random(), 500000);
        return randomize(len | 0);
    }
    if ( directive.startsWith('war:') ) {
        if ( scriptletGlobals.warOrigin === undefined ) { return ''; }
        return new Promise(resolve => {
            const warOrigin = scriptletGlobals.warOrigin;
            const warName = directive.slice(4);
            const fullpath = [ warOrigin, '/', warName ];
            const warSecret = scriptletGlobals.warSecret;
            if ( warSecret !== undefined ) {
                fullpath.push('?secret=', warSecret);
            }
            const warXHR = new safe.XMLHttpRequest();
            warXHR.responseType = 'text';
            warXHR.onloadend = ev => {
                resolve(ev.target.responseText || '');
            };
            warXHR.open('GET', fullpath.join(''));
            warXHR.send();
        }).catch(( ) => '');
    }
    if ( trusted ) {
        return directive;
    }
    return '';
}

function proxyApplyFn(
    target = '',
    handler = ''
) {
    let context = globalThis;
    let prop = target;
    for (;;) {
        const pos = prop.indexOf('.');
        if ( pos === -1 ) { break; }
        context = context[prop.slice(0, pos)];
        if ( context instanceof Object === false ) { return; }
        prop = prop.slice(pos+1);
    }
    const fn = context[prop];
    if ( typeof fn !== 'function' ) { return; }
    if ( proxyApplyFn.CtorContext === undefined ) {
        proxyApplyFn.ctorContexts = [];
        proxyApplyFn.CtorContext = class {
            constructor(...args) {
                this.init(...args);
            }
            init(callFn, callArgs) {
                this.callFn = callFn;
                this.callArgs = callArgs;
                return this;
            }
            reflect() {
                const r = Reflect.construct(this.callFn, this.callArgs);
                this.callFn = this.callArgs = this.private = undefined;
                proxyApplyFn.ctorContexts.push(this);
                return r;
            }
            static factory(...args) {
                return proxyApplyFn.ctorContexts.length !== 0
                    ? proxyApplyFn.ctorContexts.pop().init(...args)
                    : new proxyApplyFn.CtorContext(...args);
            }
        };
        proxyApplyFn.applyContexts = [];
        proxyApplyFn.ApplyContext = class {
            constructor(...args) {
                this.init(...args);
            }
            init(callFn, thisArg, callArgs) {
                this.callFn = callFn;
                this.thisArg = thisArg;
                this.callArgs = callArgs;
                return this;
            }
            reflect() {
                const r = Reflect.apply(this.callFn, this.thisArg, this.callArgs);
                this.callFn = this.thisArg = this.callArgs = this.private = undefined;
                proxyApplyFn.applyContexts.push(this);
                return r;
            }
            static factory(...args) {
                return proxyApplyFn.applyContexts.length !== 0
                    ? proxyApplyFn.applyContexts.pop().init(...args)
                    : new proxyApplyFn.ApplyContext(...args);
            }
        };
    }
    const fnStr = fn.toString();
    const toString = (function toString() { return fnStr; }).bind(null);
    const proxyDetails = {
        apply(target, thisArg, args) {
            return handler(proxyApplyFn.ApplyContext.factory(target, thisArg, args));
        },
        get(target, prop) {
            if ( prop === 'toString' ) { return toString; }
            return Reflect.get(target, prop);
        },
    };
    if ( fn.prototype?.constructor === fn ) {
        proxyDetails.construct = function(target, args) {
            return handler(proxyApplyFn.CtorContext.factory(target, args));
        };
    }
    context[prop] = new Proxy(fn, proxyDetails);
}

function safeSelf() {
    if ( scriptletGlobals.safeSelf ) {
        return scriptletGlobals.safeSelf;
    }
    const self = globalThis;
    const safe = {
        'Array_from': Array.from,
        'Error': self.Error,
        'Function_toStringFn': self.Function.prototype.toString,
        'Function_toString': thisArg => safe.Function_toStringFn.call(thisArg),
        'Math_floor': Math.floor,
        'Math_max': Math.max,
        'Math_min': Math.min,
        'Math_random': Math.random,
        'Object': Object,
        'Object_defineProperty': Object.defineProperty.bind(Object),
        'Object_defineProperties': Object.defineProperties.bind(Object),
        'Object_fromEntries': Object.fromEntries.bind(Object),
        'Object_getOwnPropertyDescriptor': Object.getOwnPropertyDescriptor.bind(Object),
        'Object_hasOwn': Object.hasOwn.bind(Object),
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
        'Request_clone': self.Request.prototype.clone,
        'String': self.String,
        'String_fromCharCode': String.fromCharCode,
        'String_split': String.prototype.split,
        'XMLHttpRequest': self.XMLHttpRequest,
        'addEventListener': self.EventTarget.prototype.addEventListener,
        'removeEventListener': self.EventTarget.prototype.removeEventListener,
        'fetch': self.fetch,
        'JSON': self.JSON,
        'JSON_parseFn': self.JSON.parse,
        'JSON_stringifyFn': self.JSON.stringify,
        'JSON_parse': (...args) => safe.JSON_parseFn.call(safe.JSON, ...args),
        'JSON_stringify': (...args) => safe.JSON_stringifyFn.call(safe.JSON, ...args),
        'log': console.log.bind(console),
        // Properties
        logLevel: 0,
        // Methods
        makeLogPrefix(...args) {
            return this.sendToLogger && `[${args.join(' \u205D ')}]` || '';
        },
        uboLog(...args) {
            if ( this.sendToLogger === undefined ) { return; }
            if ( args === undefined || args[0] === '' ) { return; }
            return this.sendToLogger('info', ...args);
            
        },
        uboErr(...args) {
            if ( this.sendToLogger === undefined ) { return; }
            if ( args === undefined || args[0] === '' ) { return; }
            return this.sendToLogger('error', ...args);
        },
        escapeRegexChars(s) {
            return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        },
        initPattern(pattern, options = {}) {
            if ( pattern === '' ) {
                return { matchAll: true, expect: true };
            }
            const expect = (options.canNegate !== true || pattern.startsWith('!') === false);
            if ( expect === false ) {
                pattern = pattern.slice(1);
            }
            const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
            if ( match !== null ) {
                return {
                    re: new this.RegExp(
                        match[1],
                        match[2] || options.flags
                    ),
                    expect,
                };
            }
            if ( options.flags !== undefined ) {
                return {
                    re: new this.RegExp(this.escapeRegexChars(pattern),
                        options.flags
                    ),
                    expect,
                };
            }
            return { pattern, expect };
        },
        testPattern(details, haystack) {
            if ( details.matchAll ) { return true; }
            if ( details.re ) {
                return this.RegExp_test.call(details.re, haystack) === details.expect;
            }
            return haystack.includes(details.pattern) === details.expect;
        },
        patternToRegex(pattern, flags = undefined, verbatim = false) {
            if ( pattern === '' ) { return /^/; }
            const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
            if ( match === null ) {
                const reStr = this.escapeRegexChars(pattern);
                return new RegExp(verbatim ? `^${reStr}$` : reStr, flags);
            }
            try {
                return new RegExp(match[1], match[2] || undefined);
            }
            catch {
            }
            return /^/;
        },
        getExtraArgs(args, offset = 0) {
            const entries = args.slice(offset).reduce((out, v, i, a) => {
                if ( (i & 1) === 0 ) {
                    const rawValue = a[i+1];
                    const value = /^\d+$/.test(rawValue)
                        ? parseInt(rawValue, 10)
                        : rawValue;
                    out.push([ a[i], value ]);
                }
                return out;
            }, []);
            return this.Object_fromEntries(entries);
        },
        onIdle(fn, options) {
            if ( self.requestIdleCallback ) {
                return self.requestIdleCallback(fn, options);
            }
            return self.requestAnimationFrame(fn);
        },
        offIdle(id) {
            if ( self.requestIdleCallback ) {
                return self.cancelIdleCallback(id);
            }
            return self.cancelAnimationFrame(id);
        }
    };
    scriptletGlobals.safeSelf = safe;
    if ( scriptletGlobals.bcSecret === undefined ) { return safe; }
    // This is executed only when the logger is opened
    safe.logLevel = scriptletGlobals.logLevel || 1;
    let lastLogType = '';
    let lastLogText = '';
    let lastLogTime = 0;
    safe.toLogText = (type, ...args) => {
        if ( args.length === 0 ) { return; }
        const text = `[${document.location.hostname || document.location.href}]${args.join(' ')}`;
        if ( text === lastLogText && type === lastLogType ) {
            if ( (Date.now() - lastLogTime) < 5000 ) { return; }
        }
        lastLogType = type;
        lastLogText = text;
        lastLogTime = Date.now();
        return text;
    };
    try {
        const bc = new self.BroadcastChannel(scriptletGlobals.bcSecret);
        let bcBuffer = [];
        safe.sendToLogger = (type, ...args) => {
            const text = safe.toLogText(type, ...args);
            if ( text === undefined ) { return; }
            if ( bcBuffer === undefined ) {
                return bc.postMessage({ what: 'messageToLogger', type, text });
            }
            bcBuffer.push({ type, text });
        };
        bc.onmessage = ev => {
            const msg = ev.data;
            switch ( msg ) {
            case 'iamready!':
                if ( bcBuffer === undefined ) { break; }
                bcBuffer.forEach(({ type, text }) =>
                    bc.postMessage({ what: 'messageToLogger', type, text })
                );
                bcBuffer = undefined;
                break;
            case 'setScriptletLogLevelToOne':
                safe.logLevel = 1;
                break;
            case 'setScriptletLogLevelToTwo':
                safe.logLevel = 2;
                break;
            }
        };
        bc.postMessage('areyouready?');
    } catch {
        safe.sendToLogger = (type, ...args) => {
            const text = safe.toLogText(type, ...args);
            if ( text === undefined ) { return; }
            safe.log(`uBO ${text}`);
        };
    }
    return safe;
}

/******************************************************************************/

const scriptletGlobals = {}; // eslint-disable-line
const argsList = [["/\\/\\/ansuksar\\.com\\/[0-9a-zA-Z]{3,26}\\/\\d{4,6}\\b/","length:125746"],["-load.com/script/","length:101"],["method:HEAD"],["dai_iframe"],["googlesyndication"],["marmalade"],["url:ipapi.co"],["doubleclick"],["api"],["cloudflare.com/cdn-cgi/trace"],["/piwik-"],["adsbygoogle"],["toiads"],["/^/"],["player-feedback"],["openx"],["ads"],["googlesyndication","method:HEAD"],["doubleclick","length:10","{\"type\":\"cors\"}"],["damoh.ani-stream.com"],["ujsmediatags method:HEAD"],["/googlesyndication|inklinkor|ads\\/load/"],["googlesyndication","length:2001"],["zomap.de"],["adsafeprotected"],["google"],["url:!luscious.net"],["doubleclick","","{\"type\": \"opaque\"}"],["bmcdn6"],["/adoto|\\/ads\\/js/"],["googletagmanager"],["adsby"],["/veepteero|tag\\.min\\.js/"],["surfe.pro"],["adsbygoogle.js"],["/adsbygoogle|googletagservices/"],["/doubleclick|googlesyndication/"],["/googlesyndication|doubleclick/","length:10","{\"type\": \"cors\"}"],["/ad\\.doubleclick\\.net|static\\.dable\\.io/"],["/gaid=","war:noop-vast2.xml"],["popunder"],["doubleclick.net/instream/ad_status.js","war:doubleclick_instream_ad_status.js"],["manager"],["moonicorn.network"],["doubleclick.com","","opaque"],["/ads"],["method:HEAD url:doubleclick.net"],["tvid.in/log"],["/ads|imasdk/"],["cloudfront.net/?"],["/nerveheels/"],["ad"],["analytics"],["wtg-ads"],["googlesyndication","length:10","{\"type\": \"cors\"}"],["googlesyndication","length:10","{\"type\":\"cors\"}"],["/ads|doubleclick/"],["dqst.pl"],["uniconsent.com","length:2300"],["vlitag"],["adsbygoogle","length:11000"],["imasdk"],["tpc.googlesyndication.com"],["gloacmug.net"],["thaudray.com"],["adskeeper"],["/freychang|passback|popunder|tag|banquetunarmedgrater/"],["google-analytics"],["ima"],["imasdk.googleapis.com"],["/adoto|googlesyndication/"],["ad-delivery"],["ima3_dai"],["method:GET"],["/ads|googletagmanager/"],["/adsbygoogle|doubleclick/"],["/doubleclick|googlesyndication/","length:10","{\"type\":\"cors\"}"],["/doubleclick|googlesyndication|vlitag/","length:10","{\"type\": \"cors\"}"],["/api/v1/events"],["cloudfront"],["/outbrain|criteo|thisiswaldo|media\\.net|ohbayersbur|adligature|quantserve|srvtrck|\\.css|\\.js/"],["/googlesyndication|googima\\.js/"],["fwmrm.net"],["ads","length:10","{\"type\": \"cors\"}"],["ads-twitter.com"],["secure.adnxs.com/ptv","war:noop-vast4.xml"],["googlesyndication","war:google-ima.js"],["googlesyndication","","{\"type\":\"cors\"}"],["pogo"],["doubleclick.net"],["jssdks.mparticle.com"],["/adinplay|googlesyndication/"],["/outbrain|adligature|quantserve|adligature|srvtrck/"],["youradexchange"],["/clarity|googlesyndication/"],["thanksgivingdelights"],["snigelweb.com"],["cdnpk.net/Rest/Media/","war:noop.json"],["/gampad/ads?"],["googletagmanager","length:10"],["fundingchoicesmessages"],["/googlesyndication|googletagservices/"],["/doubleclick|google-analytics/"],["/ip-acl-all.php"],["/doubleclick|googlesyndication/","length:10","{\"type\": \"cors\"}"],["mode:no-cors"],["googlesyndication","length:40000-60000"],["googlesyndication","method:HEAD mode:no-cors"],["/rekaa"],["="],["body:browser"],["eventing"],["api.theathletic.com/graphql body:/PostEvent|PostImpressions/"],["method:POST body:zaraz"],["url:/api/statsig/log_event method:POST"],["data.bilibili.com"],["splunkcloud.com/services/collector"],["event-router.olympics.com"],["hostingcloud.racing"],["tvid.in/log/"],["segment.io"],["mparticle.com"],["pluto.smallpdf.com"],["method:/post/i url:/^https?:\\/\\/chatgpt\\.com\\/ces\\/v1\\/[a-z]$/"],["method:/post/i url:ab.chatgpt.com/v1/rgstr"]];
const hostnamesMap = new Map([["japscan.lol",0],["dogdrip.net",[1,38]],["infinityfree.com",1],["smsonline.cloud",1],["bg-gledai.*",[2,69]],["gledaitv.*",[2,69]],["mac2sell.net",2],["gamebrew.org",2],["game3rb.com",2],["sixsave.com",2],["bowfile.com",[2,49]],["dealsfinders.blog",2],["iphonechecker.herokuapp.com",2],["coloringpage.eu",2],["conocimientoshackers.com",2],["juegosdetiempolibre.org",2],["karaokegratis.com.ar",2],["mammaebambini.it",2],["riazor.org",2],["rinconpsicologia.com",2],["sempredirebanzai.it",2],["vectogravic.com",2],["androidacy.com",2],["lifestyle.bg",[2,73]],["news.bg",[2,7,73]],["topsport.bg",[2,73]],["webcafe.bg",[2,73]],["barstoolsports.com",2],["southpark.*",[3,72]],["southpark.cc.com",3],["southparkstudios.*",[3,72]],["los40.com",4],["faucetcrypto.com",4],["tea-coffee.net",4],["spatsify.com",4],["newedutopics.com",4],["getviralreach.in",4],["edukaroo.com",4],["funkeypagali.com",4],["careersides.com",4],["nayisahara.com",4],["wikifilmia.com",4],["infinityskull.com",4],["viewmyknowledge.com",4],["iisfvirtual.in",4],["starxinvestor.com",4],["jkssbalerts.com",4],["m.jobinmeghalaya.in",4],["mynewsmedia.co",4],["overgal.com",4],["howtoconcepts.com",4],["ikramlar.online",4],["tpi.li",4],["oii.la",4],["choiceappstore.xyz",4],["djpunjab2.in",4],["djqunjab.in",4],["foodxor.com",4],["geniussolutions.co",4],["mealcold.com",4],["mixrootmods.com",4],["fartechy.com",4],["investcrust.com",4],["bantenexis.com",4],["litonmods.com",4],["universitiesonline.xyz",4],["worldmak.com",4],["updown.fun",4],["ghscanner.com",4],["sat.technology",4],["minorpatch.com",4],["wenxuecity.com",4],["kiwiexploits.com",4],["disheye.com",4],["homeairquality.org",[4,30]],["techtrim.tech",4],["arhplyrics.in",4],["askpaccosi.com",4],["quizack.com",4],["apkandroidhub.in",4],["studyis.xyz",4],["chillx.top",4],["prepostseo.com",4],["dulichkhanhhoa.net",4],["noithatmyphu.vn",4],["iptvjournal.com",4],["inbbotlist.com",4],["getintoway.com",4],["crdroid.net",4],["beelink.pro",4],["hax.co.id",4],["woiden.id",4],["theusaposts.com",4],["hackr.io",4],["rendimentibtp.it",4],["sportshub.to",4],["sportnews.to",4],["esopress.com",4],["paketmu.com",4],["watchx.top",4],["bitcosite.com",4],["bitzite.com",4],["coinsrev.com",4],["globlenews.in",4],["programmingeeksclub.com",4],["archivebate.com",4],["doctoraux.com",4],["educationbluesky.com",4],["hotkitchenbag.com",4],["maths.media",4],["maths.news",4],["mathsspot.com",4],["mathsstudio.com",4],["mathstutor.life",4],["now.gg",4],["now.us",4],["nowgg.lol",4],["selfstudybrain.com",4],["skibiditoilet.yourmom.eu.org",4],["thewebsitesbridge.com",4],["universityequality.com",4],["virtualstudybrain.com",4],["websitesball.com",4],["websitesbridge.com",4],["xn--31byd1i.net",4],["unitystr.com",4],["moto.it",4],["wellness4live.com",4],["forplayx.ink",4],["moviesapi.club",4],["bestx.stream",4],["boosterx.stream",4],["automoto.it",4],["olarila.com",4],["techedubyte.com",4],["snapwordz.com",4],["toolxox.com",4],["go2share.net",4],["flixscans.com",4],["animefire.plus",4],["freewsad.com",4],["yt-downloaderz.com",4],["hostmath.com",4],["urlcut.ninja",4],["fplstatistics.co.uk",4],["99corporates.com",4],["fivemdev.org",4],["winlator.com",4],["sabornutritivo.com",4],["metrolagu.cam",4],["megane.com.pl",4],["flixscans.org",4],["civitai.com",4],["civitai.green",4],["streamer4u.site",4],["imagetranslator.io",4],["visnalize.com",4],["tekken8combo.kagewebsite.com",4],["custommapposter.com",4],["scenexe2.io",4],["ncaa.com",4],["gurusiana.id",4],["dichvureviewmap.com",4],["technofino.in",4],["vinstartheme.com",4],["downev.com",4],["vectorx.top",4],["bong.ink",4],["zippyshare.day",4],["modescanlator.net",4],["livexscores.com",4],["btv.bg",4],["btvsport.bg",4],["btvnovinite.bg",4],["101soundboards.com",4],["freedrivemovie.com",4],["leakshaven.com",4],["dfbplay.tv",4],["sheepesports.com",4],["ytapi.cc",4],["evaki.fun",4],["bypass.link",4],["tmail.sys64738.at",4],["laser-pics.com",4],["fsicomics.com",4],["darts-scoring.com",4],["seelen.io",4],["videq.cloud",4],["pimylifeup.com",5],["seazon.fr",6],["independent.co.uk",7],["wunderground.com",7],["ctrlv.*",7],["scrolller.com",7],["journaldemontreal.com",7],["tvanouvelles.ca",7],["vods.tv",7],["atresplayer.com",7],["assettoworld.com",7],["vtmgo.be",7],["zerioncc.pl",7],["tradingview.com",7],["estudyme.com",7],["jobfound.org",7],["abs-cbn.com",7],["sussytoons.*",7],["moovitapp.com",7],["servustv.com",7],["missavtv.com",7],["flixbaba.com",7],["formatlibrary.com",7],["business-standard.com",7],["html5.gamedistribution.com",8],["premio.io",9],["flygbussarna.se",10],["allmusic.com",11],["wowescape.com",11],["leechpremium.link",11],["camcam.cc",11],["nohat.cc",11],["hindinews360.in",11],["weshare.is",11],["cyberlynews.com",11],["djremixganna.com",11],["hypicmodapk.org",11],["keedabankingnews.com",11],["rokni.xyz",11],["technicalline.store",11],["quizrent.com",11],["isi7.net",11],["pinloker.com",11],["okiemrolnika.pl",11],["pandadevelopment.net",11],["decrypt.day",11],["anakteknik.co.id",11],["javball.com",11],["visalist.io",11],["moviesshub.*",11],["zeenews.india.com",11],["gadgetbond.com",11],["updateroj24.com",11],["cosplay-xxx.com",11],["timesofindia.indiatimes.com",[12,119]],["skidrowreloaded.com",13],["pinoyfaucet.com",13],["zone-telechargement.*",13],["topsporter.net",13],["player.glomex.com",14],["htmlgames.com",15],["investing.com",16],["mylivewallpapers.com",16],["softfully.com",16],["reminimod.co",16],["highkeyfinance.com",16],["amanguides.com",16],["adcrypto.net",16],["admediaflex.com",16],["aduzz.com",16],["bitcrypto.info",16],["cdrab.com",16],["datacheap.io",16],["hbz.us",16],["savego.org",16],["owsafe.com",16],["sportweb.info",16],["apkupload.in",16],["ezeviral.com",16],["pngreal.com",16],["ytpng.net",16],["travel.vebma.com",16],["cloud.majalahhewan.com",16],["crm.cekresi.me",16],["ai.tempatwisata.pro",16],["cinedesi.in",16],["thevouz.in",16],["tejtime24.com",16],["techishant.in",16],["mtcremix.com",16],["advicefunda.com",16],["bestloanoffer.net",16],["computerpedia.in",16],["techconnection.in",16],["key-hub.eu",16],["discoveryplus.in",16],["calculator-online.net",16],["tutorial.siberuang.com",16],["dotabuff.com",16],["forum.cstalking.tv",16],["mcqmall.com",16],["witcherhour.com",16],["clamor.pl",16],["ozulscans.com",16],["i-polls.com",16],["insurancevela.com",16],["noor-book.com",16],["wrzesnia.info.pl",16],["pobre.*",16],["compromath.com",16],["sumoweb.to",16],["haloursynow.pl",16],["satkurier.pl",16],["mtg-print.com",16],["gktech.uk",16],["heavy.com",16],["creators.nafezly.com",16],["downloadfilm.website",16],["uploadsea.com",16],["bombuj.*",16],["pornovka.cz",16],["fplstatistics.com",16],["cheater.ninja",16],["govtportal.org",16],["vide-greniers.org",16],["muyinteresante.es",17],["3dzip.org",18],["ani-stream.com",19],["uflash.tv",20],["oko.sh",21],["duden.de",22],["joyn.de",23],["joyn.at",23],["joyn.ch",23],["tf1.fr",24],["exe.app",25],["eio.io",25],["ufacw.com",25],["figurehunter.net",25],["luscious.net",26],["starkroboticsfrc.com",27],["sinonimos.de",27],["antonimos.de",27],["quesignifi.ca",27],["tiktokrealtime.com",27],["tiktokcounter.net",27],["tpayr.xyz",27],["poqzn.xyz",27],["ashrfd.xyz",27],["rezsx.xyz",27],["tryzt.xyz",27],["ashrff.xyz",27],["rezst.xyz",27],["dawenet.com",27],["erzar.xyz",27],["waezm.xyz",27],["waezg.xyz",27],["blackwoodacademy.org",27],["cryptednews.space",27],["vivuq.com",27],["swgop.com",27],["vbnmll.com",27],["telcoinfo.online",27],["dshytb.com",27],["quins.us",27],["mdn.lol",28],["bitcotasks.com",28],["btcbitco.in",29],["btcsatoshi.net",29],["cempakajaya.com",29],["crypto4yu.com",29],["gainl.ink",29],["readbitcoin.org",29],["wiour.com",29],["senda.pl",30],["dsmusic.in",31],["www.apkmoddone.com",32],["tutorialsaya.com",11],["exactpay.online",33],["filesupload.in",34],["hindustantimes.com",34],["indiainfo4u.in",35],["canalobra.com",36],["tulink.org",36],["soccerinhd.com",36],["ariversegl.com",37],["boyfuck.me",37],["cgtips.org",37],["dx-tv.com",37],["filmyzones.com",37],["freereadnovel.online",37],["idlixvip.*",37],["javboys.tv",37],["netfuck.net",37],["tojimangas.com",37],["tuktukcinma.com",37],["vercanalesdominicanos.com",37],["superpsx.com",37],["hunterscomics.com",37],["player.pl",39],["camarchive.tv",40],["cybermania.ws",41],["fapdrop.com",41],["linkpoi.me",42],["platform.adex.network",43],["watch.plex.tv",44],["simplebits.io",45],["tvnz.co.nz",46],["timesnowhindi.com",47],["timesnowmarathi.com",47],["timesofindia.com",47],["elahmad.com",48],["1cloudfile.com",50],["weszlo.com",51],["wyze.com",52],["mmorpg.org.pl",53],["crunchyscan.fr",54],["firmwarex.net",55],["dongknows.com",56],["forsal.pl",57],["photopea.com",58],["freeshib.biz",59],["theappstore.org",60],["deutschekanale.com",61],["soranews24.com",62],["ipalibrary.me",63],["ipacrack.com",64],["bravedown.com",65],["smartkhabrinews.com",66],["freepik-downloader.com",67],["freepic-downloader.com",67],["envato-downloader.com",67],["ortograf.pl",68],["mixrootmod.com",70],["explorecams.com",71],["money.bg",73],["realmadryt.pl",73],["ruidrive.com",73],["poophd.video-src.com",73],["myesports.gg",73],["getthit.com",74],["sshkit.com",75],["fastssh.com",75],["howdy.id",75],["intro-hd.net",76],["souq-design.com",76],["gaypornhot.com",76],["sonixgvn.net",77],["everand.com",78],["workink.click",79],["work.ink",80],["play.nova.bg",81],["u.co.uk",82],["uktvplay.co.uk",82],["uktvplay.uktv.co.uk",82],["jpopsingles.eu",83],["hentaihaven.xxx",84],["imasdk.googleapis.com",85],["botrix.live",86],["gunauc.net",87],["buffsports.me",88],["lemino.docomo.ne.jp",89],["kfc.com",90],["crazygames.com",91],["freeshot.live",92],["plustream.com",93],["hancinema.net",94],["javfc2.xyz",95],["textreverse.com",96],["flaticon.com",97],["shahid.mbc.net",[98,121]],["tab-maker.com",99],["faceittracker.net",100],["fmovies0.cc",101],["nikke.win",102],["stream.offidocs.com",103],["dogsexporn.net",104],["yomucomics.com",104],["sport.es",105],["tubtic.com",105],["zone.msn.com",106],["www.msn.com",107],["letemsvetemapplem.eu",108],["flixrave.me",109],["search.brave.com",110],["coursera.org",111],["nytimes.com",112],["blog.cloudflare.com",113],["www.cloudflare.com",113],["grok.com",114],["bilibili.com",115],["notion.so",116],["olympics.com",117],["ceramic.or.kr",118],["pandadoc.com",120],["smallpdf.com",122],["chatgpt.com",[123,124]]]);
const exceptionsMap = new Map([]);
const hasEntities = true;
const hasAncestors = false;

const collectArgIndices = (hn, map, out) => {
    let argsIndices = map.get(hn);
    if ( argsIndices === undefined ) { return; }
    if ( typeof argsIndices !== 'number' ) {
        for ( const argsIndex of argsIndices ) {
            out.add(argsIndex);
        }
    } else {
        out.add(argsIndices);
    }
};

const indicesFromHostname = (hostname, suffix = '') => {
    const hnParts = hostname.split('.');
    const hnpartslen = hnParts.length;
    if ( hnpartslen === 0 ) { return; }
    for ( let i = 0; i < hnpartslen; i++ ) {
        const hn = `${hnParts.slice(i).join('.')}${suffix}`;
        collectArgIndices(hn, hostnamesMap, todoIndices);
        collectArgIndices(hn, exceptionsMap, tonotdoIndices);
    }
    if ( hasEntities ) {
        const n = hnpartslen - 1;
        for ( let i = 0; i < n; i++ ) {
            for ( let j = n; j > i; j-- ) {
                const en = `${hnParts.slice(i,j).join('.')}.*${suffix}`;
                collectArgIndices(en, hostnamesMap, todoIndices);
                collectArgIndices(en, exceptionsMap, tonotdoIndices);
            }
        }
    }
};

const entries = (( ) => {
    const docloc = document.location;
    const origins = [ docloc.origin ];
    if ( docloc.ancestorOrigins ) {
        origins.push(...docloc.ancestorOrigins);
    }
    return origins.map((origin, i) => {
        const beg = origin.lastIndexOf('://');
        if ( beg === -1 ) { return; }
        const hn = origin.slice(beg+3)
        const end = hn.indexOf(':');
        return { hn: end === -1 ? hn : hn.slice(0, end), i };
    }).filter(a => a !== undefined);
})();
if ( entries.length === 0 ) { return; }

const todoIndices = new Set();
const tonotdoIndices = new Set();

indicesFromHostname(entries[0].hn);
if ( hasAncestors ) {
    for ( const entry of entries ) {
        if ( entry.i === 0 ) { continue; }
        indicesFromHostname(entry.hn, '>>');
    }
}

// Apply scriplets
for ( const i of todoIndices ) {
    if ( tonotdoIndices.has(i) ) { continue; }
    try { preventFetch(...argsList[i]); }
    catch { }
}

/******************************************************************************/

// End of local scope
})();

void 0;
