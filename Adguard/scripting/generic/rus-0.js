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

// rus-0

// Important!
// Isolate from global scope
(function uBOL_cssGenericImport() {

/******************************************************************************/

const genericSelectorMap = [[14133741,"#pgeldiz"],[1165247,"#AF_kph0"],[1165246,"#AF_kph1"],[1072348,"#BlWrapper > .b-temp_rbc"],[10863966,"#JobInformer"],[15298717,"#MT_overroll ~ div[class][style=\"left:0px;top:0px;height:480px;width:650px;\"]"],[12520314,"#PopWin[onmousemove]"],[543968,"#SR_PopOver"],[15407792,"#SR_PopOverModalBackground"],[7347403,"#ad_ph_2"],[7347402,"#ad_ph_3"],[7347405,"#ad_ph_4"],[7347393,"#ad_ph_8"],[95437,"#addsDiv"],[7954035,"#adv"],[2934100,"#adv_kod_frame,\n#adv_kod_frame ~ #gotimer"],[15877669,"#adv_unisound ~ #ad_module_cont > [id^=\"ad_module\"],\n#adv_unisound ~ #main > #slidercontentContainer"],[6805713,"#advblock"],[7121859,"#advideo_adv"],[3764414,"#advideo_adv_main_div"],[125240,"#advm_preload"],[9426918,"#cyberinfrm_18"],[8281958,"#eropromo_icq"],[16189219,"#export_test_inboobs"],[7446559,"#fp_adv"],[9560942,"#fp_banner"],[1287062,"#fresh_flyroll_div"],[2481348,"#fullBannerContent"],[6670536,"#gaminator"],[69017,"#girlsBar"],[16559288,"#h_24x4"],[12987589,"#idealmedia"],[5914288,"#idealmedia_container"],[8744396,"#limonads_body"],[3730397,"#logethy_iframe"],[7466683,"#magnaInformer"],[5167635,"#marketgid"],[4712983,"#mmmBanner"],[8897547,"#movie_video:empty"],[5949043,"#nor_wrap"],[15132624,"#novem_billboard"],[8290161,"#onesignal-bell-container"],[12653404,"#potok_flyroll_div"],[12454573,"#radeant"],[807717,"#vPreloader"],[9561357,"#vid_vpaut_div"],[12598786,"#vkMsg"],[6942060,"#winvideoPlayer"],[7653246,"#zhlobam_net_informer_console"],[10161778,".AdWheelClick"],[2652345,".MIXADVERT_NET"],[2566477,".SC_TBlock"],[14496756,".ad-240x400"],[8647683,".ad-richmedia"],[1417388,".ad-richmedia-overlay"],[6980240,".admachina-banner"],[4872904,".ads300-thumb"],[480750,".ads600x200"],[1240083,".ads_600x200"],[16154022,".adsbyyottos"],[2098707,".adv-youdo"],[10909116,".advblock"],[12291046,".advertblock"],[3933776,".ah-teaser-wrapper"],[2625482,".ainsyndication"],[3637340,".airbnb-embed-frame"],[3002574,".ammblock"],[2137165,".appwidget-journalpromo"],[15889245,".b-banner"],[14500881,".b-journalpromo-container"],[16480323,".b-media-banner"],[6129955,".b-offers_type_extra"],[9934498,".banner-label"],[13551086,".base-page_center > .banerBottom,\n.base-page_center > .banerTop,\n.base-page_center > .banerTopOver"],[13503025,".base-page_container > .banerRight"],[13495156,".base-page_left-side > #left_ban"],[6946199,".bc-adv"],[8984047,".bc_adv_container"],[11803673,".bigClickTeasersBlock"],[15580667,".block_rekl"],[8396907,".blockadwide"],[5504746,".blog-post__video-ad"],[9352744,".bottom_serial_reklama"],[13603802,".btn_rec"],[10340252,".cls_placeholder_gnezdo"],[14513226,".content_rb[id^=\"content_rb_\"]"],[2960756,".da-widget"],[3509575,".da_adp_teaser"],[9817467,".directadvert-block"],[4010668,".e-ta-rg"],[2387052,".flat_ads_block"],[590827,".fp-player > div[style*=\"position: absolute\"][style*=\"inset: 0px\"][style*=\"overflow: hidden\"][style*=\"z-index:\"][style*=\"background: transparent\"][style*=\"display: block\"]"],[16249477,".gaminator"],[11769550,".goha_ads"],[12062495,".goha_ads_acceptable"],[16736266,".grv-bell-host"],[10345381,".h_banner"],[3207679,".header-banner > #moneyback[target=\"_blank\"]"],[4519611,".health-inline-ads"],[9124104,".idealmedia"],[7245487,".itemLinkPET.plista_widget_belowArticle_item"],[6431556,".j-li_sidebar-banner"],[4196113,".js-ognyvo__item"],[8974824,".js-setka-media"],[11283213,".lj-recommended"],[1401300,".madv"],[11825280,".mc_cars_row"],[3034516,".mediaget"],[5719611,".medicinetizer"],[5287105,".merc_title"],[2002232,".merc_title_2"],[1855414,".modul-search"],[14395529,".module-one-search"],[16581204,".mov_ads"],[916793,".mts_ad_widget"],[88001,".mtt-adhesion-container"],[1018536,".mywidget__col > .mywidget__link_advert"],[16103764,".ncwAdCommon"],[3050724,".novelty-banner ~ .dle_b_help > a[target=\"_blank\"]"],[8379255,".novinator"],[5648130,".onona-block"],[11360407,".pb_left_banner"],[910829,".pb_right_banner"],[1718678,".pb_top_img"],[10527375,".pip-video-wrapper > .pip-video-label"],[13263838,".player-wrap > #kt_player ~ .spot-box"],[7903471,".plista-powered"],[1158769,".pr-AVA"],[14686786,".pr-AVA2"],[11638384,".redtram"],[11805273,".roxot-dynamic"],[8461216,".serp-adv__banner"],[16330826,".serp-block_type_market-offers"],[9027857,".shareaholic-ad"],[12234126,".smi24__informer"],[10299807,".sp_search2_table,\n.sp_search3_table"],[16353729,".sp_search_table"],[4329257,".surbis_banner"],[4938179,".td-a-rec"],[15475960,".tiezerlady"],[6339575,".topbaner"],[14383259,".travelpayouts_container-offers-carousel.carousel"],[15604847,".tv-grid__item-adv-content"],[15604414,".tv-grid__item-adv_wide_no"],[10019370,".tv-grid__item.tv-sortable-item.tv-sortable-item_sortable_no.tv-sortable-item_draggable_no"],[8437726,".vit_adf"],[6185775,".webnavoz_notificationbox"],[15274027,".ya-direct"],[8880992,".ya-partner"],[11219695,".yandex-rtb"],[12576119,".yandex-rtb-block"],[1274839,"form[action^=\"//12go.asia/\"][target=\"_blank\"] > .powered"],[1271337,"noindex > .search_result[class*=\"search_result_\"]"],[1681676,".a-buttons.blue-but.a-check,\n.a-buttons.green-but.a-clock"],[11281275,".min-width-normal > #popup_container,\n.min-width-normal > #popup_container ~ #fade"],[2798587,"body.has-brand .b-content__main .b-player a[href*=\"aHR0c\"],\nbody.has-brand .b-content__main > div[id]:not([class]):empty,\nbody.has-brand .b-content__main > div[style^=\"height: 250px; overflow: hidden;\"]"],[12624481,"#root > .app #very-right-column,\n#root > .app .adfox,\n#root > .app .adfox-top,\n#root > .app .brand-widget__right-cl,\n#root > .app .partner-block-wrapper,\n#root > .app .sportrecs,\n#root > .app > .sticky-button"],[4285676,".app.blog-post-page #blog-post-item-video-ad,\n.app.blog-post-page .secondary-header-ad-block"],[10653115,".article-aside-promo a[href][target=\"_blank\"]"],[13822428,".flex-promo-series > .left-col > :not(#players):not(.serial-series-info),\n.flex-promo-series > .right-col a[href][target=\"_blank\"]"],[7663483,".jtn-widget-adv"],[5759607,".widget-autoru"],[965950,".rbcobmen"],[13742702,"#_u_ablock_bottomlink"],[13739842,"#_u_ablock_toplink"],[5931777,"#u_preroll_overlay"],[16695494,"#u_preroll_videoadbetnet"],[4573379,"#u_preroll_videoinvi"],[13753967,"#u_preroll_videomvd"],[464401,"#adblock_message"],[5000110,"#adblock_screen"],[15506019,".adblockInfo"],[997707,".adblock_floating_message,\n.adblock_floating_message"],[15505928,".adblock_msg"],[8703533,".ads-block-warning,\n.ads-block-warning"],[9508001,".deadblocker-header-bar,\n.deadblocker-header-bar"],[5353875,".detected-block-modal"],[14337331,".no-ad-reminder"],[6280966,".ad-blocker-warning,\n.ad-blocker-warning,\n.ad-blocker-warning"],[8292684,".main_adbalert"],[9832509,".pane-emediate"],[1286091,"#AdBlockDialog"],[16017428,"#aabl-container"],[6155354,"#abp-killer"],[16483126,"#adBlockAlert"],[12126396,"#adBlockAlertWrap"],[9152797,"#adBlockDetect"],[461878,"#adBlockerModal"],[4835197,"#ad_blocker"],[110156,"#adb-actived"],[231303,"#adb-enabled"],[1942400,"#adb-enabled3"],[864032,"#adb-warning"],[16649288,"#adbWarnContainer"],[2106772,"#adbcontainer-popup"],[15015673,"#adblock-alert"],[26773,"#adblock-box"],[1893540,"#adblock-honeypot"],[15010828,"#adblock-modal"],[26597,"#adblock-msg,\n#adblock_msg"],[4971891,"#adblock-notice"],[229812,"#adblock-overlay"],[1077504,"#adblock-warning"],[15019773,"#adblockDetect"],[27277,"#adblockWrap"],[1456354,"#adblock_detected"],[1256020,"#adblock_tooltip"],[4993046,"#adblockerModal"],[10813608,"#adblocker_announce"],[15034463,"#adblocker_message"],[6375730,"#adblocker_modal_overlay"],[26382,"#adblockinfo"],[1868786,"#adblockpopup"],[1753510,"#adbpopup"],[3437592,"#ads-blocked"],[5768128,"#adsblocker_detected"],[687088,"#advertisementjsalert"],[14511278,"#anti_adblock"],[7389599,"#box-adblocker-wrap"],[4948947,"#checkadblockernow"],[10056215,"#content_adblock_message"],[15192986,"#detectAdblock"],[16275578,"#detectadblock"],[469534,"#detection-block"],[1734199,"#detection-block-overlay"],[2028528,"#fnAdblockingOverlay"],[16072103,"#fondAdblock"],[4193768,"#gothamadblock_msg"],[7042720,"#gothamadblock_overlayh_n"],[15170857,"#js-popup-blocker"],[8083749,"#mdp-deblocker-ads"],[12316614,"#mdp-deblocker-js-disabled"],[13271825,"#message_adblock"],[3409180,"#modal-adblocker"],[2990263,"#notify-adblock"],[3656023,"#tie-popup-adblock"],[11543635,"#wrapperBlocker"],[840441,".AdblockBanner"],[6680118,".AdblockMessage"],[6546659,".AdblockMessage_msg"],[1757980,".BrokenAd"],[8927097,".ab-detected"],[11341954,".ab-detector-wrap"],[14151255,".ad-alert-message-text"],[8528806,".ad-alert-wrapper"],[12609627,".ad-block-detected,\n.ad_block_detected"],[9673785,".ad-block-enabled"],[9665729,".ad-block-message"],[12545508,".ad-block__overlay"],[14536834,".ad-blocked"],[15114805,".ad-blocked-container"],[6295802,".ad-blocked-wrapper"],[15193444,".ad-blocking-advisor-wrapper"],[4826638,".adBlock-banner"],[2289214,".adBlockDetectModal"],[10554726,".adBlockDetectedSign"],[10536060,".adBlockNotification"],[16718786,".adBlockNotificationOverlay"],[4833926,".adBlockWarning"],[2395242,".ad_block_off"],[1793136,".ad_blocker"],[1084083,".adace-popup-detector"],[16736084,".adb-detect.simple-alert-boxes"],[15440618,".adb-enabled"],[9061862,".adbd-background"],[2517021,".adbd-message"],[2536747,".adbd-wrapper"],[3062780,".adblock-message"],[7234369,".adblock-modal"],[5309876,".adblock-modal-content"],[2009117,".adblock-notification-wrapper"],[589331,".adblock-player"],[282393,".adblock-stop,\n.adblock-stop"],[6618161,".adblock-warning-partial-component"],[12620456,".adblock-warning-teaser"],[586658,".adblockOverlay"],[1054597,".adblock_detector"],[2755978,".adblock_enabled"],[282043,".adblockalert"],[13133056,".adblocker-message"],[591016,".adblocker-root"],[590915,".adblocker-wrap"],[575516,".adsblocked"],[15580493,".blockingAd"],[6356137,".counterAdblocks"],[10239101,".deadblocker-header-bar-inner"],[688730,".detectBlockBox"],[539717,".dispositifAdblock"],[359974,".dispositifAdblockContent"],[2924943,".dispositifAdblockMessageBox"],[1380962,".fuckYouAdBlock"],[5246545,".fuckYouAdBlock2"],[12359669,".header-blocked-ad"],[7743909,".js-ad-whitelist-notice"],[2985338,".js-checkad-warning"],[3513804,".kill-adblock-container"],[2109420,".modal__body-adblock"],[7770312,".msg-adblock"],[7500654,".noadblock"],[13881120,".remove-adblock-msg"],[4967047,".svg-adblock-full"],[11272620,".svg-adblock-full--box"],[10869656,".test-adblock-overlay"],[14557938,".top-bar-adblock"],[4561832,".wp_adblock_detect"],[5173214,".diysdk_webServices_banners1und1MainContent"]];
const genericExceptionSieve = [12598786,1274839,2837616,4826780,7854698,6725748,7980275,14175824,8446503,15487892,16634508,12000128,12000131,12000130,12000133,13625798,13983288,7954035,10045688,6235226,10047068,6805713,15864327,2368720,2369394,978086,15583500,11800524,14958073,6209693,7550235,10219072,8701575,14537362,12497932,12877069,13573827,12860724,10834050,13587986,4001806,13229369,2727770,1785039,3440810,4427675,12998833,7384902,849217,8918947,6643022,9364653,11556003,12399926,8454759,560922,579703,2219192,3394719,8437368,1548909,7307632,7307633,2215859,235674,8067829,6167377,7919689,12839506,7303350,7303937,2106134,402559,2088465,5970501,16451057,2086901,3476686,6270021,12230696,3152267,3152330,1548685,2629479,10317079,3832857,15889245,15628580,15444341,5737017,10787915,16464024,10978460,15950322,14994788,5171784,15233941,1401300,14237903,1208766,1978561,12543662,13675050,3126424,3140586,4783860,8567284,10528965,5104297,13332208,6379167,8001336,674161,2899287,5221062,4825255,11081392,10028237,1845305,13658846,6079697,372616,11539481,12172103,578336,8652447,4171562,7085033,13370041,16351554,3161943,2074658,10909116,14628789,14403439,3148594,7205220,628129,9096567,565055,3656177,1006678,387738,8452015,561409,1130856,12309163,1316058,26382,12747823,6589667,3452189,2754007,14536834,15845297,6337111,3345394,7020432,11769550,12062495,12499402];
const genericExceptionMap = [["vk.com","#vkMsg"],["vk.ru","#vkMsg"],["12go.asia","form[action^=\"//12go.asia/\"][target=\"_blank\"] > .powered"],["21forum.ru","#HeroAd"],["forum.na-svyazi.ru","#HeroAd"],["forum.zarulem.ws","#HeroAd"],["ujmos.ru","#ab_adblock\n#ad-buttons"],["graffiks.ru","#ad-target"],["dme.ru","#adBanner1\n#adLink1"],["domodedovo.ru","#adBanner1\n#adLink1"],["stepashka.com","#ad_header"],["devicesearch.ru","#ad_top\n#ads_top"],["yroslava.ru","#ads-container"],["topserver.ru","#ads1\n#ads2\n#ads3\n#ads4"],["pc-aio.ru","#adstop"],["arabela.ru","#adv"],["mathsisfun.com","#adv"],["slavyansk.biz","#adv\n.advtext"],["tagline.ru","#adv"],["x-time.ru","#adv"],["videoxq.com","#adv-title"],["mycinema.pro","#adv_config"],["corrupt.pnzreg.ru","#adv_right"],["mobile-review.com","#advblock"],["fridger.com.ua","#adverts\n.adv_left\n.adv_right"],["my-serials.com","#adverts"],["postiralka.com.ua","#adverts\n.adv_left\n.adv_right"],["forum.uralsk.info","#centerads"],["filecheck.ru","#contentAd"],["110km.ru","#content_ads"],["blog.edvels.com","#footer-ads\n#header-ads"],["de-yure.ru","#reklama"],["draug.ru","#reklama"],["print-post.com","#reklama"],["bal-vod.ru","#sidebar-ads"],["vologdahistory.ru","#sidebar-ads"],["bober.lutsk.ua","#topAdvert"],["russia.tv","#video-adv"],["irr.ru",".ad-block\n.adv_title\n.b-advert"],["zhurnaly.biz",".ad-block\n.item-ads"],["chess-online.com",".ad-cluster"],["architecture.az",".ad-code\n.mom-ad"],["joblib.ru",".ad-flag"],["vdvanapa.ru",".ad-img"],["stomsuper.com",".ad-item"],["waifucards.app",".ad-item"],["mishka-knizhka.ru",".ad-placeholder\n.ad-tag"],["xcom-shop.ru",".ad-placeholder"],["auto.am",".ad-title"],["ads.tuver.ru",".ad-type"],["alliance-catalog.ru",".adContent\n.ad_header"],["oo.by",".ad_content"],["divendo.ru",".ad_image"],["fvds.ru",".ad_image"],["sellua.info",".ad_img\n.ad_item\n.lastads"],["photodoska.ru",".ad_large\n.ad_small"],["avtotag.ru",".ad_text"],["primorsko-ahtarsk.ru",".ad_text"],["mail.ru",".ad_text"],["quantrum.me",".ad_text"],["revelationonlinedb.ru",".ad_text"],["vg672plpaer.ru",".ad_text"],["bamper.by",".adds-wrapper\n.ads-image"],["bazar.bike",".adds-wrapper"],["biblionika.info",".adds-wrapper"],["kvartirant.by",".adinfo\n.ads-box\n.adtxt"],["insignia-mebel.ru",".ads-bg\n.ads-footer"],["reklama-sev.com.ua",".ads-holder"],["abtorg.ru",".ads-list"],["tt.animedia.tv",".ads-list"],["vse.sale",".ads-list"],["belarus-index.site",".ads-row"],["guidesgame.ru",".ads-row"],["rod-vzv.info",".ads1"],["railtransport.ru",".ads_2\n.ads_3"],["mykontakts.org",".ads_block"],["ds45spb.ru",".ads_item"],["exocur.ru",".adsense-header"],["ntsk.ru",".adsinfo"],["blag-vesti.ru",".adslot_1"],["vtomske.ru",".adtable"],["school.kupiltovar.ru",".adv-4"],["azartcash.com",".adv-block"],["twite.ru",".adv-block"],["fiberdevice.ru",".adv-header"],["xn--74-6kcaj3c0aikq.xn--p1ai",".adv-right"],["100kolyasok.kz",".adv-text"],["4.u0166811.z8.ru",".adv-text"],["calls.su",".adv-text"],["chistosex.org",".adv-text"],["teu-eurocara.com.ua",".adv-text"],["ideipovara.ru",".adv_top"],["metagames.ru",".adv_top"],["peleo.ru",".advert-block"],["maklera.org",".advert-card"],["svitkvartyr.com",".advert-card"],["jamesedition.ru",".advert2"],["am.ru",".adverts"],["bestru.ru",".adverts"],["abdulinko.ru",".advt"],["komus.ru",".b-adv"],["a-d-k.ru",".b-banner"],["airmediacenter.com",".b-banner"],["kaluga-bestiphone.ru",".banner-adv"],["biglife.kg",".card-ad"],["pokrov-monastir.ru",".container--ads"],["disk.yandex.by",".content_ads"],["disk.yandex.com",".content_ads"],["disk.yandex.com.am",".content_ads"],["disk.yandex.kz",".content_ads"],["disk.yandex.lt",".content_ads"],["disk.yandex.ru",".content_ads"],["disk.yandex.uz",".content_ads"],["agrobook.ru",".context-ads\n.node-ad"],["f-igri.ru",".google_ad"],["skodarapidclub.ru",".headerad"],["ecology-of.ru",".home-ads"],["kyron-clan.ru",".ipsAd"],["simmama.com",".ipsAd"],["erokarta.ru",".item-ads"],["kinoclub.org.ua",".item-ads"],["bestgardener.ru",".madv"],["stalkerportaal.ru",".n_ad"],["planet-watersport.ru",".node-ad"],["autodromo.ru",".page-ads"],["24sk.ru",".page-advert"],["school-tea.ru",".panel-ad"],["kino-sex.ru",".pm-ads-banner"],["sosxxx.ru",".pm-ads-banner"],["vekx.ru",".pm-ads-banner"],["xxx.vekdvd.ru",".pm-ads-banner"],["grafik-smen.ru",".reklam"],["landlord.ua",".reklama"],["poima360.ru",".reklama"],["rodinkam.net",".reklama"],["skylineproduction.com.ua",".reklama"],["kisameev.ru",".reklama"],["myseria.pro",".reklama"],["openssource.biz",".reklama"],["zazloo.ru",".reklama"],["dalryba.ru",".section-adv"],["rabkor.ru",".sidebar-ad-c"],["krym.news",".sidebar_ads"],["novostivl.ru",".sidebar_ads"],["ryazan.life",".sidebar_ads"],["v-tatarstane.ru",".sidebar_ads"],["yakutsk.ru",".sidebar_ads"],["abrikos.us",".single-ad"],["leanforum.ru",".sponsor_block"],["milanac.ru",".td-ad-m\n.td-ad-tp\n.td-header-ad-wrap"],["myprogulki.ru",".vertical-ads"],["non6.blogspot.com",".vertical-ads"],["non6.blogspot.ru",".vertical-ads"],["156.ru",".view-ads"],["redkino-admin.ru",".vl-advertisment\n.vl-header-ads\n.widget_viral_advertisement"],["mts.ru",".wide-ad"],["aannov.ru",".widget_supermag_ad"],["xn--112-5cd3baof9c5c.xn--p1ai",".wrapad"],["101.ru","#advert-1"],["motogp-news.ru","#advert-1"],["720video.me",".ads-iframe"],["bessporno.me",".ads-iframe"],["camsclips.biz",".ads-iframe"],["ebalovo.adult",".ads-iframe"],["ebalovo.porn",".ads-iframe"],["ebalovo.pro",".ads-iframe"],["lenkino.adult",".ads-iframe"],["pbembed.me",".ads-iframe"],["porno365.bingo",".ads-iframe"],["pornobit.mobi",".ads-iframe"],["pornobomba.click",".ads-iframe"],["pornobomba.vip",".ads-iframe"],["pornoham.me",".ads-iframe"],["pornomoll.red",".ads-iframe"],["porntn.com",".ads-iframe"],["private-records.com",".ads-iframe"],["ru-xvideos.me",".ads-iframe"],["russkoe21.com",".ads-iframe"],["akson.ru",".ad-list-item\n.ad-spacer"],["au-ok.com","#banner_adsense"],["aume.ru","#banner_adsense"],["avtodoc24.ru",".Ad-Container\n.sidebar-ad"],["buhgalter.com.ua",".bottom-ad"],["buhgalter911.com",".bottom-ad"],["factor.ua",".bottom-ad"],["daz3d.ru",".AdSense\n.advblock"],["trialkeys.ru",".AdSense\n.advblock"],["dl2kq.de","#sponsor_ad"],["drahelas.ru",".forumAd"],["green-way.com.ua",".adWrapper"],["iphones.ru","#sponsorText"],["iwin.com","#sponsorText"],["liga.net","#bottomAd"],["manshet.org","#adcontent"],["mks.space",".ads_banner"],["newnavitel.blogspot.com","#AdSense1"],["num-words.com",".advert-banner"],["rap-me.online",".adv-banner"],["tests24.su","#header-ad"],["textstudio.co",".adsbyyahoo"],["3dnews.kz","#right-sidebar > #youtube-chunk-wrapper"],["3dnews.ru","#right-sidebar > #youtube-chunk-wrapper"],["shahid4u.club",".adsBox"],["dbz-fantasy.com","#adTeaser"],["fstore.biz","#adblockinfo"],["dz-android.com","#adsense"],["freeiphone.fr","#adsense"],["hommedumatch.fr","#adsense"],["jetetroll.com","#adsense"],["testious.com","#adsense"],["polska-ie.com","#adsense"],["debrideurstream.fr","#pubdirecte"],["ot-boutique.fr","#publicite"],["fairytailmx.com","#sponsored-ad"],["hypebeast.com",".ad-blocked"],["hypebeast.kr",".ad-blocked"],["forum.virtualdjing.com",".adFrame"],["japscan.lol",".ad_slot"],["dealerdunet.fr",".text_ads"],["comptoir-info.com",".textad"],["goha.ru",".goha_ads\n.goha_ads_acceptable"],["reshu.by",".googlead"],["reshuent.kz",".googlead"],["sdamgia.ru",".googlead"]];

if ( genericSelectorMap ) {
    const map = self.genericSelectorMap =
        self.genericSelectorMap || new Map();
    if ( map.size !== 0 ) {
        for ( const entry of genericSelectorMap ) {
            const before = map.get(entry[0]);
            if ( before === undefined ) {
                map.set(entry[0], entry[1]);
            } else {
                map.set(entry[0], `${before},\n${entry[1]}`);
            }
        }
    } else {
        self.genericSelectorMap = new Map(genericSelectorMap);
    }
    genericSelectorMap.length = 0;
}

if ( genericExceptionSieve ) {
    const hashes = self.genericExceptionSieve =
        self.genericExceptionSieve || new Set();
    if ( hashes.size !== 0 ) {
        for ( const hash of genericExceptionSieve ) {
            hashes.add(hash);
        }
    } else {
        self.genericExceptionSieve = new Set(genericExceptionSieve);
    }
    genericExceptionSieve.length = 0;
}

if ( genericExceptionMap ) {
    const map = self.genericExceptionMap =
        self.genericExceptionMap || new Map();
    if ( map.size !== 0 ) {
        for ( const entry of genericExceptionMap ) {
            const before = map.get(entry[0]);
            if ( before === undefined ) {
                map.set(entry[0], entry[1]);
            } else {
                map.set(entry[0], `${before}\n${entry[1]}`);
            }
        }
    } else {
        self.genericExceptionMap = new Map(genericExceptionMap);
    }
    genericExceptionMap.length = 0;
}

/******************************************************************************/

})();

/******************************************************************************/
