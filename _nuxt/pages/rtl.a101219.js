(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{303:function(t,e,r){"use strict";e.a={colors:{default:"#344675",primary:"#42b883",info:"#1d8cf8",danger:"#fd5d93",orange:"#ff8a76",teal:"#00d6b4",primaryGradient:["rgba(76, 211, 150, 0.1)","rgba(53, 183, 125, 0)","rgba(119,52,169,0)"],purpleGradient:["rgba(253,93,147,0.8)","rgba(253,93,147,0)"]},MAPS_API_KEY:"YOUR_GOOGLE_MAPS_API_KEY"}},442:function(t,e,r){"use strict";var o=r(437);e.a={name:"line-chart",extends:o.b,mixins:[o.c.reactiveProp],props:{extraOptions:Object,gradientColors:{type:Array,default:function(){return["rgba(72,72,176,0.2)","rgba(72,72,176,0.0)","rgba(119,52,169,0)"]},validator:function(t){return t.length>1}},gradientStops:{type:Array,default:function(){return[1,.4,0]},validator:function(t){return t.length>1}}},data:function(){return{ctx:null}},methods:{updateGradients:function(t){var e=this;if(t){var r=(this.ctx||document.getElementById(this.chartId).getContext("2d")).createLinearGradient(0,230,0,50);this.gradientStops.forEach((function(t,o){r.addColorStop(t,e.gradientColors[o])})),t.datasets.forEach((function(t){t.backgroundColor||(t.backgroundColor=r)}))}}},mounted:function(){var t=this;this.$watch("chartData",(function(e,r){t.updateGradients(t.chartData),r||t.renderChart(t.chartData,t.extraOptions)}),{immediate:!0})}}},443:function(t,e,r){"use strict";var o=r(437);e.a={name:"bar-chart",extends:o.a,mixins:[o.c.reactiveProp],props:{extraOptions:Object,gradientColors:{type:Array,default:function(){return["rgba(72,72,176,0.2)","rgba(72,72,176,0.0)","rgba(119,52,169,0)"]},validator:function(t){return t.length>1}},gradientStops:{type:Array,default:function(){return[1,.4,0]},validator:function(t){return t.length>1}}},data:function(){return{ctx:null}},methods:{updateGradients:function(t){var e=this;if(t){var r=(this.ctx||document.getElementById(this.chartId).getContext("2d")).createLinearGradient(0,230,0,50);this.gradientStops.forEach((function(t,o){r.addColorStop(t,e.gradientColors[o])})),t.datasets.forEach((function(t){t.backgroundColor||(t.backgroundColor=r)}))}}},mounted:function(){var t=this;this.$watch("chartData",(function(e,r){t.updateGradients(e),r||t.renderChart(t.chartData,t.extraOptions)}),{immediate:!0})}}},444:function(t,e,r){"use strict";r.d(e,"c",(function(){return c})),r.d(e,"b",(function(){return h})),r.d(e,"a",(function(){return f}));r(58),r(23),r(24),r(12),r(41);var o=r(20);function n(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={maintainAspectRatio:!1,legend:{display:!1},responsive:!0},c=(l(l({},d),{},{tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},scales:{yAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.0)",zeroLineColor:"transparent"},ticks:{suggestedMin:60,suggestedMax:125,padding:20,fontColor:"#2380f7"}}],xAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#2380f7"}}]}}),l(l({},d),{},{tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},responsive:!0,scales:{yAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.0)",zeroLineColor:"transparent"},ticks:{suggestedMin:60,suggestedMax:125,padding:20,fontColor:"#9e9e9e"}}],xAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9e9e9e"}}]}}),l(l({},d),{},{tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},responsive:!0,scales:{yAxes:[{gridLines:{drawBorder:!1,color:"rgba(253,93,147,0.1)",zeroLineColor:"transparent"},ticks:{suggestedMin:60,suggestedMax:125,padding:20,fontColor:"#9e9e9e"}}],xAxes:[{gridLines:{drawBorder:!1,color:"rgba(253,93,147,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9e9e9e"}}]}}),l(l({},d),{},{cutoutPercentage:70,tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},scales:{yAxes:[{display:0,ticks:{display:!1},gridLines:{drawBorder:!1,zeroLineColor:"transparent",color:"rgba(255,255,255,0.05)"}}],xAxes:[{display:0,barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(255,255,255,0.1)",zeroLineColor:"transparent"},ticks:{display:!1}}]}}),l(l({},d),{},{tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},scales:{yAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.0)",zeroLineColor:"transparent"},ticks:{suggestedMin:60,suggestedMax:125,padding:20,fontColor:"#9a9a9a"}}],xAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(225,78,202,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9a9a9a"}}]}})),h=(l(l({},d),{},{tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},scales:{yAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.0)",zeroLineColor:"transparent"},ticks:{suggestedMin:50,suggestedMax:110,padding:20,fontColor:"#ff8a76"}}],xAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(220,53,69,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#ff8a76"}}]}}),l(l({},d),{},{tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},scales:{yAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.0)",zeroLineColor:"transparent"},ticks:{suggestedMin:50,suggestedMax:125,padding:20,fontColor:"#9e9e9e"}}],xAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(0,242,195,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9e9e9e"}}]}})),f=l(l({},d),{},{tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},scales:{yAxes:[{gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.1)",zeroLineColor:"transparent"},ticks:{suggestedMin:60,suggestedMax:120,padding:20,fontColor:"#9e9e9e"}}],xAxes:[{gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9e9e9e"}}]}})},451:function(t,e,r){var map={"./af":304,"./af.js":304,"./ar":305,"./ar-dz":306,"./ar-dz.js":306,"./ar-kw":307,"./ar-kw.js":307,"./ar-ly":308,"./ar-ly.js":308,"./ar-ma":309,"./ar-ma.js":309,"./ar-sa":310,"./ar-sa.js":310,"./ar-tn":311,"./ar-tn.js":311,"./ar.js":305,"./az":312,"./az.js":312,"./be":313,"./be.js":313,"./bg":314,"./bg.js":314,"./bm":315,"./bm.js":315,"./bn":316,"./bn.js":316,"./bo":317,"./bo.js":317,"./br":318,"./br.js":318,"./bs":319,"./bs.js":319,"./ca":320,"./ca.js":320,"./cs":321,"./cs.js":321,"./cv":322,"./cv.js":322,"./cy":323,"./cy.js":323,"./da":324,"./da.js":324,"./de":325,"./de-at":326,"./de-at.js":326,"./de-ch":327,"./de-ch.js":327,"./de.js":325,"./dv":328,"./dv.js":328,"./el":329,"./el.js":329,"./en-au":330,"./en-au.js":330,"./en-ca":331,"./en-ca.js":331,"./en-gb":332,"./en-gb.js":332,"./en-ie":333,"./en-ie.js":333,"./en-il":334,"./en-il.js":334,"./en-in":335,"./en-in.js":335,"./en-nz":336,"./en-nz.js":336,"./en-sg":337,"./en-sg.js":337,"./eo":338,"./eo.js":338,"./es":339,"./es-do":340,"./es-do.js":340,"./es-us":341,"./es-us.js":341,"./es.js":339,"./et":342,"./et.js":342,"./eu":343,"./eu.js":343,"./fa":344,"./fa.js":344,"./fi":345,"./fi.js":345,"./fil":346,"./fil.js":346,"./fo":347,"./fo.js":347,"./fr":348,"./fr-ca":349,"./fr-ca.js":349,"./fr-ch":350,"./fr-ch.js":350,"./fr.js":348,"./fy":351,"./fy.js":351,"./ga":352,"./ga.js":352,"./gd":353,"./gd.js":353,"./gl":354,"./gl.js":354,"./gom-deva":355,"./gom-deva.js":355,"./gom-latn":356,"./gom-latn.js":356,"./gu":357,"./gu.js":357,"./he":358,"./he.js":358,"./hi":359,"./hi.js":359,"./hr":360,"./hr.js":360,"./hu":361,"./hu.js":361,"./hy-am":362,"./hy-am.js":362,"./id":363,"./id.js":363,"./is":364,"./is.js":364,"./it":365,"./it-ch":366,"./it-ch.js":366,"./it.js":365,"./ja":367,"./ja.js":367,"./jv":368,"./jv.js":368,"./ka":369,"./ka.js":369,"./kk":370,"./kk.js":370,"./km":371,"./km.js":371,"./kn":372,"./kn.js":372,"./ko":373,"./ko.js":373,"./ku":374,"./ku.js":374,"./ky":375,"./ky.js":375,"./lb":376,"./lb.js":376,"./lo":377,"./lo.js":377,"./lt":378,"./lt.js":378,"./lv":379,"./lv.js":379,"./me":380,"./me.js":380,"./mi":381,"./mi.js":381,"./mk":382,"./mk.js":382,"./ml":383,"./ml.js":383,"./mn":384,"./mn.js":384,"./mr":385,"./mr.js":385,"./ms":386,"./ms-my":387,"./ms-my.js":387,"./ms.js":386,"./mt":388,"./mt.js":388,"./my":389,"./my.js":389,"./nb":390,"./nb.js":390,"./ne":391,"./ne.js":391,"./nl":392,"./nl-be":393,"./nl-be.js":393,"./nl.js":392,"./nn":394,"./nn.js":394,"./oc-lnc":395,"./oc-lnc.js":395,"./pa-in":396,"./pa-in.js":396,"./pl":397,"./pl.js":397,"./pt":398,"./pt-br":399,"./pt-br.js":399,"./pt.js":398,"./ro":400,"./ro.js":400,"./ru":401,"./ru.js":401,"./sd":402,"./sd.js":402,"./se":403,"./se.js":403,"./si":404,"./si.js":404,"./sk":405,"./sk.js":405,"./sl":406,"./sl.js":406,"./sq":407,"./sq.js":407,"./sr":408,"./sr-cyrl":409,"./sr-cyrl.js":409,"./sr.js":408,"./ss":410,"./ss.js":410,"./sv":411,"./sv.js":411,"./sw":412,"./sw.js":412,"./ta":413,"./ta.js":413,"./te":414,"./te.js":414,"./tet":415,"./tet.js":415,"./tg":416,"./tg.js":416,"./th":417,"./th.js":417,"./tk":418,"./tk.js":418,"./tl-ph":419,"./tl-ph.js":419,"./tlh":420,"./tlh.js":420,"./tr":421,"./tr.js":421,"./tzl":422,"./tzl.js":422,"./tzm":423,"./tzm-latn":424,"./tzm-latn.js":424,"./tzm.js":423,"./ug-cn":425,"./ug-cn.js":425,"./uk":426,"./uk.js":426,"./ur":427,"./ur.js":427,"./uz":428,"./uz-latn":429,"./uz-latn.js":429,"./uz.js":428,"./vi":430,"./vi.js":430,"./x-pseudo":431,"./x-pseudo.js":431,"./yo":432,"./yo.js":432,"./zh-cn":433,"./zh-cn.js":433,"./zh-hk":434,"./zh-hk.js":434,"./zh-mo":435,"./zh-mo.js":435,"./zh-tw":436,"./zh-tw.js":436};function o(t){var e=n(t);return r(e)}function n(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=n,t.exports=o,o.id=451},483:function(t,e,r){"use strict";r.r(e);r(58),r(23),r(24),r(12),r(41);var o,n=r(20),l=(r(438),r(57),r(439)),d=r.n(l),c=(r(21),r(440),r(441)),h=r.n(c),f=r(39),C=r(442),j=r(443),m=r(444),y=r(303);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var k=[[100,70,90,70,85,60,75,60,90,80,110,100],[80,120,105,110,95,105,90,100,80,95,70,120],[60,80,65,130,80,105,90,130,70,115,60,130]],L=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],O={fill:!0,borderColor:y.a.colors.primary,borderWidth:2,borderDash:[],borderDashOffset:0,pointBackgroundColor:y.a.colors.primary,pointBorderColor:"rgba(255,255,255,0)",pointHoverBackgroundColor:y.a.colors.primary,pointBorderWidth:20,pointHoverRadius:4,pointHoverBorderWidth:15,pointRadius:4},_={name:"rtl",components:(o={BaseTable:f.d,LineChart:C.a,BarChart:j.a},Object(n.a)(o,h.a.name,h.a),Object(n.a)(o,d.a.name,d.a),o),data:function(){return{allContributions:!0,pastWeekContributions:!1,bigLineChart:{activeIndex:0,chartData:{datasets:[x(x({},O),{},{data:k[0]})],labels:L},extraOptions:m.c,gradientColors:y.a.colors.primaryGradient,gradientStops:[1,.4,0],categories:[]},tableDataTask:[{title:"مركز معالجة موقع محور",description:"نص آخر هناالوثائق",done:!1},{title:"لامتثال GDPR",description:"الناتج المحلي الإجمالي هو نظام يتطلب من الشركات حماية البيانات الشخصية والخصوصية لمواطني أوروبا بالنسبة للمعاملات التي تتم داخل الدول الأعضاء في الاتحاد الأوروبي.",done:!0},{title:"القضاياالقضايا",description:"سيكونونقال 50٪ من جميع المستجيبين أنهم سيكونون أكثر عرضة للتسوق في شركة",done:!1},{title:"تصدير الملفات التي تمت معالجتها",description:"كما يبين التقرير أن المستهلكين لن يغفروا شركة بسهولة بمجرد حدوث خرق يعرض بياناتهم الشخصية.",done:!1},{title:"الوصول إلى عملية التصدير",description:"سياسة السيء إنطلاق في قبل, مساعدة والمانيا أخذ قد. بل أما أمام ماشاء الشتاء،, تكاليف الإقتصادي بـ حين. ٣٠ يتعلّق للإتحاد ولم, وتم هناك مدينة بتحدّي إذ, كان بل عمل",done:!1},{title:"الافراج عن v2.0.0",description:"عن رئيس طوكيو البولندي لمّ, مايو مرجع وباءت قبل هو, تسمّى الطريق الإقتصادي ذات أن. لغات الإطلاق الفرنسية دار ان, بين بتخصيص الساحة اقتصادية أم. و الآخ",done:!1}],tableData:[{id:1,name:"رايس داكوتا\t",salary:"$36.738",country:"النيجر\t",city:"العود-تورنهاوت\t"},{id:2,name:"مينيرفا هوبر\t",salary:"$23,789",country:"كوراساو",city:"Sinaai-واس\t"},{id:3,name:"سيج رودريجيز\t",salary:"$56,142",country:"هولندا",city:"بايلي"},{id:4,name:"فيليب شانيه\t",salary:"$38,735",country:"كوريا، جنوب\t",city:"اوفرلاند بارك\t"},{id:5,name:"Doris Greene",salary:"$63,542",country:"مالاوي\t",city:"المنع\t"}],purpleLineChart:{extraOptions:m.c,chartData:{labels:["JUL","AUG","SEP","OCT","NOV","DEC"],datasets:[{label:"Data",fill:!0,borderColor:y.a.colors.primary,borderWidth:2,borderDash:[],borderDashOffset:0,pointBackgroundColor:y.a.colors.primary,pointBorderColor:"rgba(255,255,255,0)",pointHoverBackgroundColor:y.a.colors.primary,pointBorderWidth:20,pointHoverRadius:4,pointHoverBorderWidth:15,pointRadius:4,data:[80,100,70,80,120,80]}]},gradientColors:y.a.colors.primaryGradient,gradientStops:[1,.2,0]},greenLineChart:{extraOptions:m.b,chartData:{labels:["JUL","AUG","SEP","OCT","NOV"],datasets:[{label:"My First dataset",fill:!0,borderColor:y.a.colors.danger,borderWidth:2,borderDash:[],borderDashOffset:0,pointBackgroundColor:y.a.colors.danger,pointBorderColor:"rgba(255,255,255,0)",pointHoverBackgroundColor:y.a.colors.danger,pointBorderWidth:20,pointHoverRadius:4,pointHoverBorderWidth:15,pointRadius:4,data:[90,27,60,12,80]}]},gradientColors:["rgba(66,134,121,0.15)","rgba(66,134,121,0.0)","rgba(66,134,121,0)"],gradientStops:[1,.4,0]},blueBarChart:{extraOptions:m.a,chartData:{labels:["USA","GER","AUS","UK","RO","BR"],datasets:[{label:"Countries",fill:!0,borderColor:y.a.colors.info,borderWidth:2,borderDash:[],borderDashOffset:0,data:[53,20,10,80,100,45]}]},gradientColors:y.a.colors.primaryGradient,gradientStops:[1,.4,0]}}},methods:{initBigChart:function(t){var e={datasets:[x(x({},O),{},{data:k[t]})],labels:L};this.$refs.bigChart.updateGradients(e),this.bigLineChart.chartData=e,this.bigLineChart.activeIndex=t}},mounted:function(){this.$rtl.enableRTL(),this.initBigChart(0)},computed:{enableRTL:function(){return this.$route.query.enableRTL},isRTL:function(){return this.$rtl.isRTL},bigLineChartCategories:function(){return[{name:" حسابات ",icon:"tim-icons icon-single-02"},{name:" المشتريات ",icon:"tim-icons icon-gift-2"},{name:" جلسات ",icon:"tim-icons icon-tap-02"}]}},beforeDestroy:function(){this.switchLocalePath("en"),this.$rtl.disableRTL()}},w=r(2),component=Object(w.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("card",{attrs:{type:"chart"}},[r("template",{slot:"header"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-6",class:t.isRTL?"text-right":"text-left"},[r("h5",{staticClass:"card-category"},[t._v("مجموع الشحنات")]),t._v(" "),r("h2",{staticClass:"card-title"},[t._v("أداء")])]),t._v(" "),r("div",{staticClass:"col-sm-6 d-flex d-sm-block"},[r("div",{staticClass:"btn-group btn-group-toggle",class:t.isRTL?"float-left":"float-right",attrs:{"data-toggle":"buttons"}},t._l(t.bigLineChartCategories,(function(option,e){return r("label",{key:option.name,staticClass:"btn btn-sm btn-primary btn-simple",class:{active:t.bigLineChart.activeIndex===e},attrs:{id:e}},[r("input",{attrs:{type:"radio",name:"options",autocomplete:"off"},domProps:{checked:t.bigLineChart.activeIndex===e},on:{click:function(r){return t.initBigChart(e)}}}),t._v(" "),r("span",{staticClass:"d-none d-sm-block"},[t._v(t._s(option.name))]),t._v(" "),r("span",{staticClass:"d-block d-sm-none"},[r("i",{class:option.icon})])])})),0)])])]),t._v(" "),r("div",{staticClass:"chart-area"},[r("line-chart",{ref:"bigChart",staticStyle:{height:"100%"},attrs:{"chart-data":t.bigLineChart.chartData,"gradient-colors":t.bigLineChart.gradientColors,"gradient-stops":t.bigLineChart.gradientStops,"extra-options":t.bigLineChart.extraOptions}})],1)],2)],1),t._v(" "),r("div",{staticClass:"col-lg-4",class:{"text-right":t.isRTL}},[r("card",{attrs:{type:"chart"}},[r("template",{slot:"header"},[r("h5",{staticClass:"card-category"},[t._v("مجموع الشحنات")]),t._v(" "),r("h3",{staticClass:"card-title"},[r("i",{staticClass:"tim-icons icon-bell-55 text-primary "}),t._v(" 763,215\n          ")])]),t._v(" "),r("div",{staticClass:"chart-area"},[r("line-chart",{staticStyle:{height:"100%"},attrs:{"chart-data":t.purpleLineChart.chartData,"gradient-colors":t.purpleLineChart.gradientColors,"gradient-stops":t.purpleLineChart.gradientStops,"extra-options":t.purpleLineChart.extraOptions}})],1)],2)],1),t._v(" "),r("div",{staticClass:"col-lg-4",class:{"text-right":t.isRTL}},[r("card",{attrs:{type:"chart"}},[r("template",{slot:"header"},[r("h5",{staticClass:"card-category"},[t._v("المبيعات اليومية")]),t._v(" "),r("h3",{staticClass:"card-title"},[r("i",{staticClass:"tim-icons icon-delivery-fast text-info "}),t._v(" 3,500€\n          ")])]),t._v(" "),r("div",{staticClass:"chart-area"},[r("bar-chart",{staticStyle:{height:"100%"},attrs:{"chart-data":t.blueBarChart.chartData,"gradient-stops":t.blueBarChart.gradientStops,"extra-options":t.blueBarChart.extraOptions}})],1)],2)],1),t._v(" "),r("div",{staticClass:"col-lg-4",class:{"text-right":t.isRTL}},[r("card",{attrs:{type:"chart"}},[r("template",{slot:"header"},[r("h5",{staticClass:"card-category"},[t._v("المهام المكتملة")]),t._v(" "),r("h3",{staticClass:"card-title"},[r("i",{staticClass:"tim-icons icon-send text-success "}),t._v(" 12,100K\n          ")])]),t._v(" "),r("div",{staticClass:"chart-area"},[r("line-chart",{staticStyle:{height:"100%"},attrs:{"chart-data":t.greenLineChart.chartData,"gradient-stops":t.greenLineChart.gradientStops,"extra-options":t.greenLineChart.extraOptions}})],1)],2)],1),t._v(" "),r("div",{staticClass:"col-lg-6"},[r("card",{attrs:{type:"tasks","header-classes":{"text-right":t.isRTL}}},[r("template",{slot:"header"},[r("h6",{staticClass:"title d-inline"},[t._v("مهام 5")]),t._v(" "),r("p",{staticClass:"card-category d-inline"},[t._v("اليوم")]),t._v(" "),r("base-dropdown",{class:{"float-left":t.isRTL},attrs:{"menu-on-right":"",tag:"div","title-classes":"btn btn-link btn-icon"}},[r("i",{staticClass:"tim-icons icon-settings-gear-63",attrs:{slot:"title"},slot:"title"}),t._v(" "),r("a",{staticClass:"dropdown-item",attrs:{href:"#pablo"}},[t._v(" عمل ")]),t._v(" "),r("a",{staticClass:"dropdown-item",attrs:{href:"#pablo"}},[t._v(" عمل آخر ")]),t._v(" "),r("a",{staticClass:"dropdown-item",attrs:{href:"#pablo"}},[t._v(" شيء آخر ")])])],1),t._v(" "),r("div",{staticClass:"table-full-width table-responsive"},[r("base-table",{attrs:{data:t.tableDataTask,"thead-classes":"text-primary"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.row;return[r("td",[r("base-checkbox",{model:{value:o.done,callback:function(e){t.$set(o,"done",e)},expression:"row.done"}})],1),t._v(" "),r("td",[r("p",{staticClass:"title"},[t._v(t._s(o.title))]),t._v(" "),r("p",{staticClass:"text-muted"},[t._v(t._s(o.description))])]),t._v(" "),r("td",{staticClass:"td-actions text-right"},[r("el-tooltip",{attrs:{content:"Edit task",effect:"light","open-delay":300,placement:"top"}},[r("base-button",{attrs:{type:"link"}},[r("i",{staticClass:"tim-icons icon-pencil"})])],1)],1)]}}])})],1)],2)],1),t._v(" "),r("div",{staticClass:"col-lg-6"},[r("card",{attrs:{"card-body-classes":"table-full-width"}},[r("h4",{staticClass:"card-title",class:{"text-right":t.isRTL},attrs:{slot:"header"},slot:"header"},[t._v("جدول بسيط")]),t._v(" "),r("el-table",{attrs:{data:t.tableData}},[r("el-table-column",{attrs:{"min-width":"150",sortable:"",align:"left","header-align":"left text-left",label:"اسم",property:"name"}}),t._v(" "),r("el-table-column",{attrs:{"min-width":"150",sortable:"",align:"left","header-align":"left text-left",label:"بلد",property:"country"}}),t._v(" "),r("el-table-column",{attrs:{"min-width":"150",sortable:"",align:"left","header-align":"left text-left",label:"مدينة",property:"city"}}),t._v(" "),r("el-table-column",{attrs:{"min-width":"150",sortable:"",align:"left","header-align":"left text-left",label:"راتب",property:"salary"}})],1)],1)],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);