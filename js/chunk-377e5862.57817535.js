(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-377e5862"],{a243:function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("b-alert",{staticClass:"alert alert-custom alert-white alert-shadow fade show gutter-b",attrs:{show:"",variant:"light"}},[o("div",{staticClass:"alert-icon"},[o("span",{staticClass:"svg-icon svg-icon-lg"},[o("inline-svg",{attrs:{src:"media/svg/icons/Tools/Compass.svg"}})],1)]),o("div",{staticClass:"alert-text"},[o("b",[t._v("Tooltips")]),t._v(" Easily add tooltips to elements or components via the <b-tooltip> component or v-b-tooltip directive (preferred method). "),o("a",{staticClass:"font-weight-bold",attrs:{href:"https://bootstrap-vue.js.org/docs/components/tooltip",target:"_blank"}},[t._v(" See documentation. ")])])]),o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-6"},[o("KTCodePreview",{attrs:{title:"Tooltips"},scopedSlots:t._u([{key:"preview",fn:function(){return[o("div",{staticClass:"text-center my-3"},[o("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"mr-3",attrs:{title:"Tooltip directive content"}},[t._v(" Hover Me ")]),o("b-button",{staticClass:"mr-3",attrs:{id:"tooltip-target-1"}},[t._v(" Hover Me ")]),o("b-tooltip",{staticClass:"mr-3",attrs:{target:"tooltip-target-1",triggers:"hover"}},[t._v(" I am tooltip "),o("b",[t._v("component")]),t._v(" content! ")])],1)]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.code1.html)+" ")]},proxy:!0}])}),o("KTCodePreview",{attrs:{title:"Disabled elements"},scopedSlots:t._u([{key:"preview",fn:function(){return[o("p",[t._v(" Elements with the "),o("code",[t._v("disabled")]),t._v(" attribute aren't interactive, meaning users cannot focus, hover, or click them to trigger a tooltip (or popover). As a workaround, you'll want to trigger the tooltip from a wrapper "),o("code",[t._v("<div>")]),t._v(" or "),o("code",[t._v("<span>")]),t._v(", ideally made keyboard-focusable using "),o("code",[t._v('tabindex="0"')]),t._v(", and override the "),o("code",[t._v("pointer-events")]),t._v(" on the disabled element. ")]),o("div",[o("span",{staticClass:"d-inline-block",attrs:{id:"disabled-wrapper",tabindex:"0"}},[o("b-button",{staticStyle:{"pointer-events":"none"},attrs:{variant:"primary",disabled:""}},[t._v(" Disabled button ")])],1),o("b-tooltip",{attrs:{target:"disabled-wrapper"}},[t._v("Disabled tooltip")])],1)]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.code2.html)+" ")]},proxy:!0}])}),o("KTCodePreview",{scopedSlots:t._u([{key:"title",fn:function(){return[o("code",[t._v("<b-tooltip>")]),t._v(" component usage ")]},proxy:!0},{key:"preview",fn:function(){return[o("b-container",{attrs:{fluid:""}},[o("b-row",[o("b-col",{staticClass:"py-4",attrs:{md:"4"}},[o("b-button",{attrs:{id:"button-1",variant:"outline-success"}},[t._v(" Live chat ")])],1),o("b-col",{staticClass:"py-4",attrs:{md:"4"}},[o("b-button",{attrs:{id:"button-2",variant:"outline-success"}},[t._v(" Html chat ")])],1),o("b-col",{staticClass:"py-4",attrs:{md:"4"}},[o("b-button",{ref:"button-3",attrs:{variant:"outline-success"}},[t._v(" Alternative chat ")])],1)],1),o("b-tooltip",{attrs:{target:"button-1",title:"Online!"}}),o("b-tooltip",{attrs:{target:"button-2",placement:"bottom"}},[t._v(" Hello "),o("strong",[t._v("World!")])]),o("b-tooltip",{attrs:{target:function(){return t.$refs["button-3"]},title:"Alternative!"}})],1)]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.code3.html)+" ")]},proxy:!0}])})],1),o("div",{staticClass:"col-md-6"},[o("KTCodePreview",{attrs:{title:"Programmatically show and hide tooltip"},scopedSlots:t._u([{key:"preview",fn:function(){return[o("p",[t._v(" You can manually control the visibility of a tooltip via the syncable Boolean "),o("code",[t._v("show")]),t._v(" prop. Setting it to "),o("code",[t._v("true")]),t._v(" will show the tooltip, while setting it to "),o("code",[t._v("false")]),t._v(" will hide the tooltip. ")]),o("div",{staticClass:"text-center"},[o("div",[o("b-button",{attrs:{id:"tooltip-button-1",variant:"primary"}},[t._v(" I have a tooltip ")])],1),o("div",{staticClass:"mt-3"},[o("b-button",{on:{click:function(e){t.show=!t.show}}},[t._v("Toggle Tooltip")])],1),o("b-tooltip",{attrs:{show:t.show,target:"tooltip-button-1",placement:"top"},on:{"update:show":function(e){t.show=e}}},[t._v(" Hello "),o("strong",[t._v("World!")])])],1)]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.code4.html)+" ")]},proxy:!0}])}),o("KTCodePreview",{attrs:{title:"Programmatic control"},scopedSlots:t._u([{key:"preview",fn:function(){return[o("p",[t._v(" Programmatic control can also be affected by submitting '"),o("code",[t._v("open")]),t._v("' and '"),o("code",[t._v("close")]),t._v("' events to the tooltip by reference. ")]),o("div",{staticClass:"d-flex flex-column text-md-center"},[o("div",{staticClass:"p-2"},[o("b-button",{attrs:{id:"tooltip-button-show-event",variant:"primary"}},[t._v(" I have a tooltip ")])],1),o("div",{staticClass:"p-2"},[o("b-button",{staticClass:"px-1 mr-3",on:{click:t.onOpen}},[t._v("Open")]),o("b-button",{staticClass:"px-1 mr-3",on:{click:t.onClose}},[t._v("Close")])],1),o("b-tooltip",{ref:"tooltip",attrs:{target:"tooltip-button-show-event"}},[t._v(" Hello "),o("strong",[t._v("World!")])])],1)]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.code5.html)+" ")]},proxy:!0},{key:"js",fn:function(){return[t._v(" "+t._s(t.code5.js)+" ")]},proxy:!0}])}),o("KTCodePreview",{scopedSlots:t._u([{key:"title",fn:function(){return[o("code",[t._v("v-b-tooltip")]),t._v(" directive usage ")]},proxy:!0},{key:"preview",fn:function(){return[o("p",[t._v(" The "),o("code",[t._v("v-b-tooltip")]),t._v(" directive makes adding tooltips even easier, without additional placeholder markup: ")]),o("b-container",{attrs:{fluid:""}},[o("b-row",[o("b-col",{staticClass:"py-4",attrs:{md:"6"}},[o("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip"}],attrs:{title:"Online!",variant:"outline-success"}},[t._v("Live chat")])],1),o("b-col",{staticClass:"py-4",attrs:{md:"6"}},[o("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.html",modifiers:{html:!0}}],attrs:{title:"Hello <strong>World!</strong>",variant:"outline-success"}},[t._v(" Html chat ")])],1)],1)],1)]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.code6.html)+" ")]},proxy:!0}])})],1)])],1)},a=[],i=o("d968"),n=o("0bce"),l={data:function(){return{code1:{html:'<div class="text-center my-3">\n  <b-button v-b-tooltip.hover title="Tooltip directive content">\n    Hover Me\n  </b-button>\n\n  <b-button id="tooltip-target-1">\n    Hover Me\n  </b-button>\n  <b-tooltip target="tooltip-target-1" triggers="hover">\n    I am tooltip <b>component</b> content!\n  </b-tooltip>\n</div>'},show:!1,code2:{html:'<div>\n  <span id="disabled-wrapper" class="d-inline-block" tabindex="0">\n    <b-button variant="primary" style="pointer-events: none;" disabled>Disabled button</b-button>\n  </span>\n  <b-tooltip target="disabled-wrapper">Disabled tooltip</b-tooltip>\n</div>'},code3:{html:'<b-container fluid>\n  <b-row>\n    <b-col md="4" class="py-4">\n      <b-button id="button-1" variant="outline-success">Live chat</b-button>\n    </b-col>\n    <b-col md="4" class="py-4">\n      <b-button id="button-2" variant="outline-success">Html chat</b-button>\n    </b-col>\n    <b-col md="4" class="py-4">\n      <b-button ref="button-3" variant="outline-success">Alternative chat</b-button>\n    </b-col>\n  </b-row>\n\n  \x3c!-- Tooltip title specified via prop title --\x3e\n  <b-tooltip target="button-1" title="Online!"></b-tooltip>\n\n  \x3c!-- HTML title specified via default slot --\x3e\n  <b-tooltip target="button-2" placement="bottom">\n    Hello <strong>World!</strong>\n  </b-tooltip>\n\n  \x3c!-- Tooltip for an element identified by ref --\x3e\n  <b-tooltip :target="() => $refs[\'button-3\']" title="Alternative!"></b-tooltip>\n</b-container>'},code4:{html:'<div class="text-center">\n    <div>\n      <b-button id="tooltip-button-1" variant="primary">I have a tooltip</b-button>\n    </div>\n\n    <div class="mt-3">\n      <b-button @click="show = !show">Toggle Tooltip</b-button>\n    </div>\n\n    <b-tooltip :show.sync="show" target="tooltip-button-1" placement="top">\n      Hello <strong>World!</strong>\n    </b-tooltip>\n  </div>',js:"export default {\n    data: {\n      show: true\n    }\n  }"},code5:{html:'<div class="d-flex flex-column text-md-center">\n    <div class="p-2">\n      <b-button id="tooltip-button-show-event" variant="primary">I have a tooltip</b-button>\n    </div>\n\n    <div class="p-2">\n      <b-button class="px-1" @click="onOpen">Open</b-button>\n      <b-button class="px-1" @click="onClose">Close</b-button>\n    </div>\n\n    <b-tooltip ref="tooltip" target="tooltip-button-show-event">\n      Hello <strong>World!</strong>\n    </b-tooltip>\n  </div>',js:"export default {\n    methods: {\n      onOpen() {\n        this.$refs.tooltip.$emit('open')\n      },\n      onClose() {\n        this.$refs.tooltip.$emit('close')\n      }\n    }\n  }"},code6:{html:'<b-container fluid>\n  <b-row>\n    <b-col md="6" class="py-4">\n      <b-button v-b-tooltip title="Online!" variant="outline-success">Live chat</b-button>\n    </b-col>\n\n    <b-col md="6" class="py-4">\n      <b-button\n        v-b-tooltip.html\n        title="Hello <strong>World!</strong>"\n        variant="outline-success"\n      >\n        Html chat\n      </b-button>\n    </b-col>\n  </b-row>\n</b-container>'}}},components:{KTCodePreview:i["a"]},methods:{onOpen:function(){this.$refs.tooltip.$emit("open")},onClose:function(){this.$refs.tooltip.$emit("close")}},mounted:function(){this.$store.dispatch(n["a"],[{title:"Vue Bootstrap",route:"alert"},{title:"Notify",route:"popover"},{title:"Tooltip"}])}},r=l,c=o("2877"),d=Object(c["a"])(r,s,a,!1,null,null,null);e["default"]=d.exports},d968:function(t,e,o){"use strict";var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("KTCard",{ref:"preview",attrs:{title:t.title,example:!0},scopedSlots:t._u([t.hasTitleSlot?{key:"title",fn:function(){return[o("h3",{staticClass:"card-title"},[t._t("title")],2)]},proxy:!0}:null,{key:"toolbar",fn:function(){return[o("div",{staticClass:"example-tools justify-content-center"},[o("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",value:"View code",expression:"'View code'",modifiers:{hover:!0,top:!0}}],staticClass:"example-toggle",attrs:{"data-toggle":"tooltip"}}),o("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",value:"Copy code",expression:"'Copy code'",modifiers:{hover:!0,top:!0}}],staticClass:"example-copy",attrs:{"data-toggle":"tooltip"}})])]},proxy:!0},{key:"body",fn:function(){return[o("div",{staticClass:"example-code mb-5"},[t.hasGeneralCode||t.hasSingleCodeType?t._e():o("ul",{staticClass:"example-nav nav nav-tabs nav-bold nav-tabs-line nav-tabs-line-2x",attrs:{role:"tablist"}},[t.hasHtmlCode?o("li",{staticClass:"nav-item"},[o("a",{staticClass:"nav-link active",attrs:{"data-tab":"0","data-toggle":"tab",href:"#",role:"tab","aria-selected":"true"},on:{click:t.setActiveTab}},[t._v(" HTML ")])]):t._e(),t.hasJsCode?o("li",{staticClass:"nav-item"},[o("a",{staticClass:"nav-link",attrs:{"data-tab":"1","data-toggle":"tab",href:"#",role:"tab","aria-selected":"false"},on:{click:t.setActiveTab}},[t._v("  JS  ")])]):t._e(),t.hasScssCode?o("li",{staticClass:"nav-item"},[o("a",{staticClass:"nav-link",attrs:{"data-tab":"2","data-toggle":"tab",href:"#",role:"tab","aria-selected":"false"},on:{click:t.setActiveTab}},[t._v(" SCSS ")])]):t._e()]),t.hasGeneralCode?o("div",[t._t("code")],2):t._e(),t.hasGeneralCode||t.hasSingleCodeType?t._e():o("div",[o("b-tabs",{staticClass:"hide-tabs",attrs:{"content-class":"mt-3"},model:{value:t.tabIndex,callback:function(e){t.tabIndex=e},expression:"tabIndex"}},[o("b-tab",{staticClass:"example-highlight",attrs:{active:""}},[o("highlight-code",{staticClass:"language-html",attrs:{lang:"html"}},[t._t("html")],2)],1),o("b-tab",{staticClass:"example-highlight"},[o("highlight-code",{staticClass:"language-js",attrs:{lang:"js"}},[t._t("js")],2)],1),o("b-tab",{staticClass:"example-highlight"},[o("highlight-code",{staticClass:"language-scss",attrs:{lang:"scss"}},[t._t("scss")],2)],1)],1)],1),t.hasSingleCodeType?o("div",{staticClass:"example-highlight"},[t.hasHtmlCode?o("highlight-code",{staticClass:"language-html",attrs:{lang:"html"}},[t._t("html")],2):t._e(),t.hasJsCode?o("highlight-code",{staticClass:"language-js",attrs:{lang:"js"}},[t._t("js")],2):t._e(),t.hasScssCode?o("highlight-code",{staticClass:"language-scss",attrs:{lang:"scss"}},[t._t("scss")],2):t._e()],1):t._e()]),t._t("preview")]},proxy:!0}],null,!0)})},a=[],i=(o("d3b7"),o("159b"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"card card-custom gutter-b",class:t.classes},[t.hasTitleSlot||t.title?o("div",{staticClass:"card-header",class:t.headClass},[o("div",{staticClass:"card-title"},[t.hasTitleSlot?t._t("title"):t._e(),t.hasTitleSlot?t._e():o("h3",{staticClass:"card-label"},[t._v(" "+t._s(t.title)+" ")])],2),o("div",{staticClass:"card-toolbar"},[t._t("toolbar")],2)]):t._e(),o("div",{staticClass:"card-body",class:{bodyClass:t.bodyClass,"body-fit":t.bodyFit,"body-fluid":t.bodyFluid}},[t._t("body")],2),t.hasFootSlot?o("div",{staticClass:"card-footer"},[t._t("foot")],2):t._e()])}),n=[],l={name:"KTCard",props:{title:String,headSize:String,fluidHeight:Boolean,fluidHalfHeight:Boolean,headOverlay:Boolean,cardClass:String,headClass:String,bodyClass:String,bodyFit:Boolean,bodyFluid:Boolean,example:Boolean},components:{},methods:{},computed:{classes:function(){var t={"example example-compact":this.example,"height-fluid":this.fluidHeight,"height-fluid-half":this.fluidHalfHeight,"head-overlay":this.headOverlay};return t[this.headSizeClass]=this.headSizeClass,this.cardClass&&(t[this.cardClass]=!0),t},hasTitleSlot:function(){return!!this.$slots["title"]},hasFootSlot:function(){return!!this.$slots["foot"]},headSizeClass:function(){return!!this.headSize&&"head-".concat(this.headSize)}}},r=l,c=o("2877"),d=Object(c["a"])(r,i,n,!1,null,null,null),b=d.exports,p=o("b2e9"),v={name:"KTCodePreview",props:{title:String},data:function(){return{tabIndex:0,isOpen:!1}},components:{KTCard:b},mounted:function(){var t=this;this.$nextTick((function(){p["a"].init([t.$el]);var e=t.$el.querySelectorAll(".hljs");e.forEach((function(t){t.classList.add("language-".concat(t.classList[1])),t.classList.remove("hljs")}))}))},methods:{setActiveTab:function(t){for(var e=t.target.closest('[role="tablist"]'),o=e.querySelectorAll('[data-toggle="tab"]'),s=0;s<o.length;s++)o[s].classList.remove("active");t.target.classList.add("active"),this.tabIndex=parseInt(t.target.getAttribute("data-tab"))}},computed:{hasTitleSlot:function(){return!!this.$slots["title"]},hasSingleCodeType:function(){var t=this,e=0;return["html","js","scss"].forEach((function(o){t.$slots.hasOwnProperty(o)&&e++})),1===e},hasGeneralCode:function(){return!!this.$slots["code"]},hasJsCode:function(){return!!this.$slots["js"]},hasScssCode:function(){return!!this.$slots["scss"]},hasHtmlCode:function(){return!!this.$slots["html"]}}},u=v,h=Object(c["a"])(u,s,a,!1,null,null,null);e["a"]=h.exports}}]);
//# sourceMappingURL=chunk-377e5862.57817535.js.map