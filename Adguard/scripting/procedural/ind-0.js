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

// ruleset: ind-0

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = ["",["{\"selector\":\".wpb_wrapper\",\"tasks\":[[\"has\",{\"selector\":\"> h5\",\"tasks\":[[\"has-text\",\"Ads\"]]}]]}"],["{\"selector\":\"[id^=\\\"custom\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> a\",\"tasks\":[[\"has-text\",\"Government Ad\"]]}]]}","{\"selector\":\"div[id^=\\\"AS_O_\\\"] div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > a > div h5\",\"tasks\":[[\"has-text\",\"Ad |\"]]}]]}"],["{\"selector\":\".widget_custom_html\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > h3\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\".wpb_wrapper\",\"tasks\":[[\"has\",{\"selector\":\"> div > .sc_item_title\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\".elementor-widget-heading\",\"tasks\":[[\"has\",{\"selector\":\"> div > h2\",\"tasks\":[[\"has-text\",\"Sponsored\"]]}]]}"],["{\"selector\":\".card\",\"tasks\":[[\"has\",{\"selector\":\"> .card-header\",\"tasks\":[[\"has-text\",\"Advertisment\"]]}]]}"],["{\"selector\":\".advertisement\",\"tasks\":[[\"has-text\",\"advertisement\"]]}"],["{\"selector\":\".gb-container\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}"],["{\"selector\":\".mb-3\",\"tasks\":[[\"has\",{\"selector\":\"> .section-title > h4\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\"center\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}"],["{\"selector\":\".my-4\",\"tasks\":[[\"has\",{\"selector\":\"> h5\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\".primary-sidebar-widget\",\"tasks\":[[\"has\",{\"selector\":\"> .section-heading > .h-text\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\"div[id^=\\\"AS_O_LHS_1\\\"] > div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > a > span\",\"tasks\":[[\"has-text\",\"Ad |\"]]}]]}"],["{\"selector\":\"div[id^=\\\"AS_O_\\\"] div\",\"tasks\":[[\"has\",{\"selector\":\"> div > a > div h5\",\"tasks\":[[\"has-text\",\"Ad |\"]]}]]}"],["{\"selector\":\".sidebar\",\"tasks\":[[\"has\",{\"selector\":\"> h5 > span\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\".sidebar-widget\",\"tasks\":[[\"has\",{\"selector\":\"> .widget-head > .title\",\"tasks\":[[\"has-text\",\"Ads\"]]}]]}"],["{\"selector\":\".widget_recent_entries\",\"tasks\":[[\"has-text\",\"ads\"]]}"],["{\"selector\":\"div[data-slot=\\\"460008\\\"] div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > a > div > h6\",\"tasks\":[[\"has-text\",\"Ad |\"]]}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> .main-heading\",\"tasks\":[[\"has-text\",\"Advertizement\"]]}]]}"],["{\"selector\":\".td-block-title > span\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}"],["{\"selector\":\".sidebar-widget\",\"tasks\":[[\"has\",{\"selector\":\"> .widget-head > .title\",\"tasks\":[[\"has-text\",\"ADV\"]]}]]}"],["{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}"],["{\"selector\":\".tdm-descr\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}"],["{\"selector\":\".colombiaonesuccess > div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > a h5\",\"tasks\":[[\"has-text\",\"Ad |\"]]}]]}"],["{\"selector\":\".sidebar-widget\",\"tasks\":[[\"has\",{\"selector\":\"> .widget-head > .title\",\"tasks\":[[\"has-text\",\"ADS\"]]}]]}"],["{\"selector\":\".fourth_2_inner\",\"tasks\":[[\"has\",{\"selector\":\"> a > div > h1\",\"tasks\":[[\"has-text\",\"advertisement\"]]}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> .section-title > h4\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\".HTML\",\"tasks\":[[\"has\",{\"selector\":\".title\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\"div > h2\",\"tasks\":[[\"has-text\",\"Google Ads\"]]}","{\"selector\":\"strong\",\"tasks\":[[\"has-text\",\"ABS Hospital\"]]}","{\"selector\":\"strong\",\"tasks\":[[\"has-text\",\"Vijay Bakery\"]]}"],["{\"selector\":\"div[id^=\\\"AS_O_LHS\\\"] > div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > a > div > h5\",\"tasks\":[[\"has-text\",\"Ad |\"]]}]]}"],["{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> .section-title > h4\",\"tasks\":[[\"has-text\",\"ADVERTISEMENT\"]]}]]}"],["{\"selector\":\".fashion_technology_area div\",\"tasks\":[[\"has\",{\"selector\":\"> div > h2 span\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\".sidebar h2\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has\",{\"selector\":\".widget-title > h4\",\"tasks\":[[\"has-text\",\"Advertise\"]]}]]}"],["{\"selector\":\".block-title span\",\"tasks\":[[\"has-text\",\"Sponsored Ads\"]]}"],["{\"selector\":\".widget-title\",\"tasks\":[[\"has-text\",\"Advertisment\"]]}"],["{\"selector\":\"section.widget_text\",\"tasks\":[[\"has\",{\"selector\":\"div > h4.widget-title\",\"tasks\":[[\"has-text\",\"Advertisment\"]]}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> .jeg_block_title > span\",\"tasks\":[[\"has-text\",\"ADVT\"]]}]]}"],["{\"selector\":\"div[id^=\\\"AS_P_LHS_\\\"] > div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > a > div > h5\",\"tasks\":[[\"has-text\",\"Ad |\"]]}]]}","{\"selector\":\"div[id^=\\\"AS_P_LHS_\\\"] > div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > a > div > p\",\"tasks\":[[\"has-text\",\"Ad |\"]]}]]}"],["{\"selector\":\".td_block_wrap\",\"tasks\":[[\"has\",{\"selector\":\"> div > h4 > span\",\"tasks\":[[\"has-text\",\"Ad\"]]}]]}"],["{\"selector\":\"[id^=\\\"AS_O_\\\"] div\",\"tasks\":[[\"has\",{\"selector\":\"> div > a > div > h5\",\"tasks\":[[\"has-text\",\"Ad |\"]]}]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has\",{\"selector\":\"> .widget--title > h2\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\".list-category-posts-half\",\"tasks\":[[\"has\",{\"selector\":\"> .widget-title\",\"tasks\":[[\"has-text\",\"AD\"]]}]]}"],["{\"selector\":\".sidebar-widget\",\"tasks\":[[\"has\",{\"selector\":\"> div > h4\",\"tasks\":[[\"has-text\",\"adv\"]]}]]}"],["{\"selector\":\"div[id*=\\\"_O_LHS_\\\"] > div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > a > div > h5\",\"tasks\":[[\"has-text\",\"Ad |\"]]}]]}"],["{\"selector\":\".colombiaonesuccess div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > a > h5\",\"tasks\":[[\"has-text\",\"Ad:\"]]}]]}","{\"selector\":\".colombiaonesuccess div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div a > p\",\"tasks\":[[\"has-text\",\"Ad:\"]]}]]}"],["{\"selector\":\".elementor-widget-wrap\",\"tasks\":[[\"has\",{\"selector\":\"h2\",\"tasks\":[[\"has-text\",\"Adv.\"]]}]]}"],["{\"selector\":\"div[id^=\\\"AS_O_LHS\\\"] > div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > a > h2 + span\",\"tasks\":[[\"has-text\",\"Ad |\"]]}]]}"],["{\"selector\":\".side\",\"tasks\":[[\"has\",{\"selector\":\"> span\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\"div.sidebar-widget\",\"tasks\":[[\"has\",{\"selector\":\"> .widget-head > h4\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\".HTML\",\"tasks\":[[\"has\",{\"selector\":\"> .widget-title > .title\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\"figure\",\"tasks\":[[\"has\",{\"selector\":\"> figcaption\",\"tasks\":[[\"has-text\",\"ADVERTISEMENT\"]]}]]}"],["{\"selector\":\".wp-block-group\",\"tasks\":[[\"has\",{\"selector\":\"> div > .wp-block-heading\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\"#main-content .main-carousel\",\"tasks\":[[\"has\",{\"selector\":\"> .title-wrapper > h2 > span\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}","{\"selector\":\"#main-content .theiaStickySidebar\",\"tasks\":[[\"has\",{\"selector\":\"> div > .title-wrapper > h2 span\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\".widget-sidebar\",\"tasks\":[[\"has\",{\"selector\":\"> .widget-header > h3\",\"tasks\":[[\"has-text\",\"ADVT\"]]}]]}"],["{\"selector\":\".themesBazar_widget\",\"tasks\":[[\"has\",{\"selector\":\"> h3\",\"tasks\":[[\"has-text\",\"sonalilife.com\"]]}]]}"],["{\"selector\":\".mb-3\",\"tasks\":[[\"has\",{\"selector\":\".section-title > h4\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\".elementor-widget-heading\",\"tasks\":[[\"has\",{\"selector\":\"> div > h2\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\".news-card\",\"tasks\":[[\"has\",{\"selector\":\"> span > h2 > a > .text_ellipsis\",\"tasks\":[[\"has-text\",\"Adv:\"]]}]]}"],["{\"selector\":\".textwidget\",\"tasks\":[[\"has-text\",\".adsbygoogle\"]]}"],["{\"selector\":\".widget--title .h4\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}"],["{\"selector\":\".align_cent\",\"tasks\":[[\"has-text\",\"Advertise\"]]}"],["{\"selector\":\"figure\",\"tasks\":[[\"has\",{\"selector\":\"> figcaption\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\"div[id^=\\\"AS_O_LHS_\\\"] > div\",\"tasks\":[[\"has\",{\"selector\":\"> div > a > p\",\"tasks\":[[\"has-text\",\"Ad |\"]]}]]}"],["{\"selector\":\"div[id^=\\\"AS_O_LHS_\\\"] > div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > a > div > p\",\"tasks\":[[\"has-text\",\"Ad |\"]]}]]}"],["{\"selector\":\"div[id^=\\\"AS_O_LHS\\\"] > div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > a > h4\",\"tasks\":[[\"has-text\",\"Ad: \"]]}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> small\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\"div[id*=\\\"_O_\\\"] > div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > a > div > h4 > span\",\"tasks\":[[\"has-text\",\"Ad:\"]]}]]}","{\"selector\":\"div[id*=\\\"_O_\\\"] > div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > a > div > p\",\"tasks\":[[\"has-text\",\"Ad:\"]]}]]}"],["{\"selector\":\".block-title-4\",\"tasks\":[[\"has\",{\"selector\":\"> h4 > span\",\"tasks\":[[\"has-text\",\"Advertisements\"]]}]]}"],["{\"selector\":\"div.primary-sidebar-widget\",\"tasks\":[[\"has\",{\"selector\":\"> div > span\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}","{\"selector\":\"div[data-adid]\",\"tasks\":[[\"has\",{\"selector\":\"> p\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\"#pt-magazine-carousel-news-2\",\"tasks\":[[\"has\",{\"selector\":\"> div > .section-title .widget-title\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\".elementor-widget-wrap p\",\"tasks\":[[\"has-text\",\"Ads\"]]}"],["{\"selector\":\"div[id*=\\\"_O_\\\"] div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > a > div *\",\"tasks\":[[\"has-text\",\"Ad |\"]]}]]}"],["{\"selector\":\"aside\",\"tasks\":[[\"has\",{\"selector\":\"> h3 > span\",\"tasks\":[[\"has-text\",\"Advt\"]]}]]}"],["{\"selector\":\"div[style]\",\"tasks\":[[\"has\",{\"selector\":\"> div\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\".jeg_block_heading\",\"tasks\":[[\"has\",{\"selector\":\"> .jeg_block_title > span\",\"tasks\":[[\"has-text\",\"ADVERTISEMENTS\"]]}]]}","{\"selector\":\".jeg_block_heading\",\"tasks\":[[\"has\",{\"selector\":\"> .jeg_block_title > span\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\"div.sidebar h5\",\"tasks\":[[\"has\",{\"selector\":\"> span\",\"tasks\":[[\"has-text\",\"Ads\"]]}]]}"],["{\"selector\":\".heading\",\"tasks\":[[\"has\",{\"selector\":\"> span\",\"tasks\":[[\"has-text\",\"Advt\"]]}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> a span\",\"tasks\":[[\"has-text\",\"Ad |\"]]}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> h3\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > p\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\"div[id^=\\\"AS_O_\\\"] > div\",\"tasks\":[[\"has\",{\"selector\":\"> div > a > div > h5\",\"tasks\":[[\"has-text\",\"Ad |\"]]}]]}"],["{\"selector\":\".widget-header\",\"tasks\":[[\"has\",{\"selector\":\"> h4\",\"tasks\":[[\"has-text\",\"Advertise\"]]}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> .box_header\",\"tasks\":[[\"has-text\",\"Advertisements\"]]}]]}"],["{\"selector\":\"#side .widget\",\"tasks\":[[\"has\",{\"selector\":\"> .heading > span\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\".single_post_content\",\"tasks\":[[\"has\",{\"selector\":\"> h2 > span > a\",\"tasks\":[[\"has-text\",\"ADS\"]]}]]}"],["{\"selector\":\"h4.td-block-title\",\"tasks\":[[\"has\",{\"selector\":\"> span\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\".box_header\",\"tasks\":[[\"has-text\",\"Advertising\"]]}"],["{\"selector\":\"h2\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}"],["{\"selector\":\"div[id*=\\\"ArticleShow_\\\"] > div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > a > span\",\"tasks\":[[\"has-text\",\"Ad |\"]]}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> div > a > div > p\",\"tasks\":[[\"has-text\",\"Ad:\"]]}]]}","{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > a > div > div > p\",\"tasks\":[[\"has-text\",\"Ad |\"]]}]]}"],["{\"selector\":\".colombiaonesuccess > div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div a p\",\"tasks\":[[\"has-text\",\"Ad:\"]]}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> .heading > span\",\"tasks\":[[\"has-text\",\"Advt.\"]]}]]}"],["{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\"> h4\",\"tasks\":[[\"has-text\",\"Advertise\"]]}]]}"],["{\"selector\":\"div[id*=\\\"_O_\\\"] div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > a > div *\",\"tasks\":[[\"has-text\",\"Ad:\"]]}]]}"],["{\"selector\":\"div.wrapper-sticky div\",\"tasks\":[[\"has\",{\"selector\":\"> div.section-heading > span\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\".sidebar-widget\",\"tasks\":[[\"has\",{\"selector\":\"h4\",\"tasks\":[[\"has-text\",\"Ads\"]]}]]}"],["{\"selector\":\"div[id*=\\\"_O_\\\"] div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > a > div p\",\"tasks\":[[\"has-text\",\"AD |\"]]}]]}"],["{\"selector\":\".sub_new b\",\"tasks\":[[\"has-text\",\"Ads\"]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> span\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\".single_sidebar\",\"tasks\":[[\"has\",{\"selector\":\"> h2 > span\",\"tasks\":[[\"has-text\",\"advertisement\"]]}]]}"],["{\"selector\":\".colombiaonesuccess > div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > a span\",\"tasks\":[[\"has-text\",\"Ad |\"]]}]]}"],["{\"selector\":\".widget_text\",\"tasks\":[[\"has\",{\"selector\":\".widget-title > span\",\"tasks\":[[\"has-text\",\"Advertising\"]]}]]}"],["{\"selector\":\"div[id*=\\\"_O_\\\"] div\",\"tasks\":[[\"has\",{\"selector\":\"div-gpt-ad > div > div > a > div *\",\"tasks\":[[\"has-text\",\"Ad:\"]]}]]}"],["{\"selector\":\".sidebar-widget > h2\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> .heading > span\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\"center\",\"tasks\":[[\"has-text\",\"ADVERTISEMENT\"]]}"],["{\"selector\":\"div[id^=\\\"AS_O_LHS\\\"] > div\",\"tasks\":[[\"has\",{\"selector\":\"> div > a > div > h5\",\"tasks\":[[\"has-text\",\"Ad |\"]]}]]}"]];
const argsSeqs = [0,1,2,3,4,5,6,7,8,-9,10,9,11,12,13,14,15,16,17,18,19,20,21,22,23,24,-24,93,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,-74,96,-74,105,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,94,95,97,98,99,100,101,102,103,104,106,107,108,109];
const hostnamesMap = new Map([["aadarshhimachal.com",1],["aapkikhabar.com",2],["abcnews.media",3],["ammanealing.org",4],["angulonline.com",5],["asr24.news",6],["bangla.24livenewspaper.com",7],["betulsamachar.com",8],["jankarido.com",8],["nation9network.com",8],["bharatiyadigitalnews.in",9],["dhamaka36.com",11],["bhingatimes.co.in",12],["biharnation.in",13],["blivenews.com",14],["dailyharyananews.com",14],["fashionnewsera.com",14],["newstm.in",15],["cg24news.in",16],["champarantoday.in",17],["chatonay71news.com",18],["cityandolan.com",19],["cityliveindia.com",20],["countrynewstoday.com",21],["dakshinapath.com",22],["deshkikhabar.in",23],["dhinasari.com",24],["doonhorizon.in",25],["theexpose.in",26],["encounterindia.in",28],["entevarthakal.com",29],["etamilnews.com",30],["gossiplanka.com",31],["horizonhind.com",32],["hrbreakingnews.com",33],["ibmnews24.com",34],["meranews.com",34],["tamizhakam.com",34],["tv20news.in",34],["indiakhabar.co.in",35],["indianewscentre.in",36],["indiannewsservice.net",37],["indiasamachar24.com",38],["indocanadiantimes.com",39],["jalauntimessite.wordpress.com",40],["janadeshexpress.in",41],["janamtv.com",42],["jansandeshonline.com",43],["janwarta.com",44],["k9media.live",45],["khabaraaptak.net",46],["seithipunal.com",46],["khabardev.com",47],["kirandoot.com",48],["lifestylenama.in",49],["livevns.news",50],["lnstarnews.com",51],["loginkerala.com",52],["loktantrakaagaz.com",53],["loudspeakeronline.com",54],["madhepurakhabar.com",55],["madhubaninews.in",56],["magadhexpress.in",57],["pressnote.in",58],["mirroruttarakhand.com",59],["muktirlorai.com",60],["munaadi.com",61],["namastepurvanchal.in",62],["navbharattimes.indiatimes.com",63],["naya-alo.com",64],["neplays.com",65],["news11.live",66],["news24bite.com",67],["news38times.com",68],["newsmoments.in",69],["newstodaynetwork.com",70],["nobat.com",71],["odiascraps.info",72],["pingara.com",73],["pksnews24.com",74],["neemuchlive.com",75],["rajdhanidaily.com",76],["rochakkhabare.com",77],["theonlinepost.in",78],["utkalpratidin.com",80],["rozanapost.in",82],["rozanaspokesman.in",83],["sabhavarthakal.com",84],["samajkihalchal.com",85],["samarthsahara.com",86],["varchasvnews.com",86],["samayduniya.com",87],["satkhiraprobaho.net",88],["satyasandhana.in",89],["satyavoice.com",90],["scgnews.in",91],["shikshabhartinetwork.com",92],["punjabikangaroo.com",93],["smtv24x7.com",94],["soochnanews.in",95],["suprovatsydney.com.au",96],["thannambikkai.org",97],["thechopal.com",98],["thedesiawaaz.com",99],["theheadline24.com",100],["thenewswords.in",101],["thesigmanews.com",102],["todaynewshindi.in",103],["ttncinema.com",104],["tutyonline.net",105],["twentyfournews.com",106],["unitednewskannada.com",107],["upuklive.com",108],["uthayannews.ca",109],["visionnewsservice.in",110],["viznews.in",111],["yugvartanews.com",112],["yuvaharyana.com",113]]);
const hasEntities = false;

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, argsSeqs, hostnamesMap, hasEntities });

/******************************************************************************/

})();

/******************************************************************************/
