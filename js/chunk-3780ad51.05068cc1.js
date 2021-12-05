(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3780ad51"],{d968:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("KTCard",{ref:"preview",attrs:{title:t.title,example:!0},scopedSlots:t._u([t.hasTitleSlot?{key:"title",fn:function(){return[s("h3",{staticClass:"card-title"},[t._t("title")],2)]},proxy:!0}:null,{key:"toolbar",fn:function(){return[s("div",{staticClass:"example-tools justify-content-center"},[s("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",value:"View code",expression:"'View code'",modifiers:{hover:!0,top:!0}}],staticClass:"example-toggle",attrs:{"data-toggle":"tooltip"}}),s("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",value:"Copy code",expression:"'Copy code'",modifiers:{hover:!0,top:!0}}],staticClass:"example-copy",attrs:{"data-toggle":"tooltip"}})])]},proxy:!0},{key:"body",fn:function(){return[s("div",{staticClass:"example-code mb-5"},[t.hasGeneralCode||t.hasSingleCodeType?t._e():s("ul",{staticClass:"example-nav nav nav-tabs nav-bold nav-tabs-line nav-tabs-line-2x",attrs:{role:"tablist"}},[t.hasHtmlCode?s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link active",attrs:{"data-tab":"0","data-toggle":"tab",href:"#",role:"tab","aria-selected":"true"},on:{click:t.setActiveTab}},[t._v(" HTML ")])]):t._e(),t.hasJsCode?s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{"data-tab":"1","data-toggle":"tab",href:"#",role:"tab","aria-selected":"false"},on:{click:t.setActiveTab}},[t._v("  JS  ")])]):t._e(),t.hasScssCode?s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{"data-tab":"2","data-toggle":"tab",href:"#",role:"tab","aria-selected":"false"},on:{click:t.setActiveTab}},[t._v(" SCSS ")])]):t._e()]),t.hasGeneralCode?s("div",[t._t("code")],2):t._e(),t.hasGeneralCode||t.hasSingleCodeType?t._e():s("div",[s("b-tabs",{staticClass:"hide-tabs",attrs:{"content-class":"mt-3"},model:{value:t.tabIndex,callback:function(a){t.tabIndex=a},expression:"tabIndex"}},[s("b-tab",{staticClass:"example-highlight",attrs:{active:""}},[s("highlight-code",{staticClass:"language-html",attrs:{lang:"html"}},[t._t("html")],2)],1),s("b-tab",{staticClass:"example-highlight"},[s("highlight-code",{staticClass:"language-js",attrs:{lang:"js"}},[t._t("js")],2)],1),s("b-tab",{staticClass:"example-highlight"},[s("highlight-code",{staticClass:"language-scss",attrs:{lang:"scss"}},[t._t("scss")],2)],1)],1)],1),t.hasSingleCodeType?s("div",{staticClass:"example-highlight"},[t.hasHtmlCode?s("highlight-code",{staticClass:"language-html",attrs:{lang:"html"}},[t._t("html")],2):t._e(),t.hasJsCode?s("highlight-code",{staticClass:"language-js",attrs:{lang:"js"}},[t._t("js")],2):t._e(),t.hasScssCode?s("highlight-code",{staticClass:"language-scss",attrs:{lang:"scss"}},[t._t("scss")],2):t._e()],1):t._e()]),t._t("preview")]},proxy:!0}],null,!0)})},o=[],n=(s("d3b7"),s("159b"),function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"card card-custom gutter-b",class:t.classes},[t.hasTitleSlot||t.title?s("div",{staticClass:"card-header",class:t.headClass},[s("div",{staticClass:"card-title"},[t.hasTitleSlot?t._t("title"):t._e(),t.hasTitleSlot?t._e():s("h3",{staticClass:"card-label"},[t._v(" "+t._s(t.title)+" ")])],2),s("div",{staticClass:"card-toolbar"},[t._t("toolbar")],2)]):t._e(),s("div",{staticClass:"card-body",class:{bodyClass:t.bodyClass,"body-fit":t.bodyFit,"body-fluid":t.bodyFluid}},[t._t("body")],2),t.hasFootSlot?s("div",{staticClass:"card-footer"},[t._t("foot")],2):t._e()])}),i=[],r={name:"KTCard",props:{title:String,headSize:String,fluidHeight:Boolean,fluidHalfHeight:Boolean,headOverlay:Boolean,cardClass:String,headClass:String,bodyClass:String,bodyFit:Boolean,bodyFluid:Boolean,example:Boolean},components:{},methods:{},computed:{classes:function(){var t={"example example-compact":this.example,"height-fluid":this.fluidHeight,"height-fluid-half":this.fluidHalfHeight,"head-overlay":this.headOverlay};return t[this.headSizeClass]=this.headSizeClass,this.cardClass&&(t[this.cardClass]=!0),t},hasTitleSlot:function(){return!!this.$slots["title"]},hasFootSlot:function(){return!!this.$slots["foot"]},headSizeClass:function(){return!!this.headSize&&"head-".concat(this.headSize)}}},l=r,c=s("2877"),b=Object(c["a"])(l,n,i,!1,null,null,null),u=b.exports,d=s("b2e9"),h={name:"KTCodePreview",props:{title:String},data:function(){return{tabIndex:0,isOpen:!1}},components:{KTCard:u},mounted:function(){var t=this;this.$nextTick((function(){d["a"].init([t.$el]);var a=t.$el.querySelectorAll(".hljs");a.forEach((function(t){t.classList.add("language-".concat(t.classList[1])),t.classList.remove("hljs")}))}))},methods:{setActiveTab:function(t){for(var a=t.target.closest('[role="tablist"]'),s=a.querySelectorAll('[data-toggle="tab"]'),e=0;e<s.length;e++)s[e].classList.remove("active");t.target.classList.add("active"),this.tabIndex=parseInt(t.target.getAttribute("data-tab"))}},computed:{hasTitleSlot:function(){return!!this.$slots["title"]},hasSingleCodeType:function(){var t=this,a=0;return["html","js","scss"].forEach((function(s){t.$slots.hasOwnProperty(s)&&a++})),1===a},hasGeneralCode:function(){return!!this.$slots["code"]},hasJsCode:function(){return!!this.$slots["js"]},hasScssCode:function(){return!!this.$slots["scss"]},hasHtmlCode:function(){return!!this.$slots["html"]}}},m=h,v=Object(c["a"])(m,e,o,!1,null,null,null);a["a"]=v.exports},f63b:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("b-alert",{staticClass:"alert alert-custom alert-white alert-shadow fade show gutter-b",attrs:{show:"",variant:"light"}},[s("div",{staticClass:"alert-icon"},[s("span",{staticClass:"svg-icon svg-icon-lg"},[s("inline-svg",{attrs:{src:"media/svg/icons/Tools/Compass.svg"}})],1)]),s("div",{staticClass:"alert-text"},[s("b",[t._v("Toasts")]),t._v(" Push notifications to your visitors with a <b-toast> and <b-toaster>, lightweight components which are easily customizable for generating alert messages. "),s("a",{staticClass:"font-weight-bold",attrs:{href:"https://bootstrap-vue.js.org/docs/components/toast",target:"_blank"}},[t._v(" See documentation. ")])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("KTCodePreview",{attrs:{title:"Toasts"},scopedSlots:t._u([{key:"preview",fn:function(){return[s("p",[t._v(" Toasts are slightly translucent, too, so they blend over whatever they might appear over. For browsers that support the "),s("code",[t._v("backdrop-filter")]),t._v(" CSS property, they also attempt to blur the elements under the toast. ")]),s("div",{staticClass:"p-3 bg-secondary progress-bar-striped",staticStyle:{"min-height":"170px"}},[s("b-button",{staticClass:"mb-2",attrs:{variant:"primary"},on:{click:function(a){return t.$bvToast.show("example-toast")}}},[t._v(" Show toast ")]),s("b-toast",{attrs:{id:"example-toast",title:"BootstrapVue",static:"","no-auto-hide":""}},[t._v(" Hello, world! This is a toast message. ")])],1)]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.code1.html)+" ")]},proxy:!0}])}),s("KTCodePreview",{attrs:{title:"Toasts on demand"},scopedSlots:t._u([{key:"preview",fn:function(){return[s("p",[t._v(" Generate a dynamic toast from anywhere in your app via the "),s("code",[t._v("this.$bvToast")]),t._v(" Vue component instance injection, without the need to place a "),s("code",[t._v("<b-toast>")]),t._v(" component in your app. ")]),s("div",[s("b-button",{staticClass:"mr-3",on:{click:function(a){return t.makeToast()}}},[t._v(" Show Toast ")]),s("b-button",{staticClass:"mr-3",on:{click:function(a){return t.makeToast(!0)}}},[t._v(" Show Toast (appended) ")])],1)]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.code2.html)+" ")]},proxy:!0},{key:"js",fn:function(){return[t._v(" "+t._s(t.code2.js)+" ")]},proxy:!0}])}),s("KTCodePreview",{attrs:{title:"Variants"},scopedSlots:t._u([{key:"preview",fn:function(){return[s("p",[t._v(" BootstrapVue toasts provide custom CSS to define color variants. Variants follow the standard Bootstrap v4 variant names. If you have custom SCSS defined Bootstrap color theme variants, the toast custom SCSS will automatically create toast variants for you (refer to the "),s("a",{attrs:{href:"https://bootstrap-vue.js.org/docs/reference/theming",target:"_blank"}},[t._v(" Theming ")]),t._v(" reference section). ")]),s("div",[s("b-button",{staticClass:"mb-2 mr-3",on:{click:function(a){return t.makeToastVariant()}}},[t._v(" Default ")]),s("b-button",{staticClass:"mb-2 mr-3",attrs:{variant:"primary"},on:{click:function(a){return t.makeToastVariant("primary")}}},[t._v(" Primary ")]),s("b-button",{staticClass:"mb-2 mr-3",attrs:{variant:"secondary"},on:{click:function(a){return t.makeToastVariant("secondary")}}},[t._v(" Secondary ")]),s("b-button",{staticClass:"mb-2 mr-3",attrs:{variant:"danger"},on:{click:function(a){return t.makeToastVariant("danger")}}},[t._v(" Danger ")]),s("b-button",{staticClass:"mb-2 mr-3",attrs:{variant:"warning"},on:{click:function(a){return t.makeToastVariant("warning")}}},[t._v(" Warning ")]),s("b-button",{staticClass:"mb-2 mr-3",attrs:{variant:"success"},on:{click:function(a){return t.makeToastVariant("success")}}},[t._v(" Success ")]),s("b-button",{staticClass:"mb-2",attrs:{variant:"info"},on:{click:function(a){return t.makeToastVariant("info")}}},[t._v(" Info ")])],1)]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.code3.html)+" ")]},proxy:!0},{key:"js",fn:function(){return[t._v(" "+t._s(t.code3.js)+" ")]},proxy:!0}])}),s("KTCodePreview",{attrs:{title:"Toaster target"},scopedSlots:t._u([{key:"preview",fn:function(){return[s("p",[t._v(" The below toasters place the toasts in a stacked (columnar format), fixed within the viewport (meaning they will always be in view regardless of viewport scroll position). If there are more toasts than can fit on the viewport screen, some will be visually hidden offscreen until other toasts are closed/hidden. ")]),s("div",[s("b-button",{staticClass:"mb-2 mr-3",on:{click:function(a){return t.toast("b-toaster-top-right")}}},[t._v(" b-toaster-top-right ")]),s("b-button",{staticClass:"mb-2 mr-3",on:{click:function(a){return t.toast("b-toaster-top-left")}}},[t._v(" b-toaster-top-left ")]),s("b-button",{staticClass:"mb-2 mr-3",on:{click:function(a){return t.toast("b-toaster-top-center")}}},[t._v(" b-toaster-top-center ")]),s("b-button",{staticClass:"mb-2 mr-3",on:{click:function(a){return t.toast("b-toaster-top-full")}}},[t._v(" b-toaster-top-full ")]),s("b-button",{staticClass:"mb-2 mr-3",on:{click:function(a){return t.toast("b-toaster-bottom-right",!0)}}},[t._v(" b-toaster-bottom-right ")]),s("b-button",{staticClass:"mb-2 mr-3",on:{click:function(a){return t.toast("b-toaster-bottom-left",!0)}}},[t._v(" b-toaster-bottom-left ")]),s("b-button",{staticClass:"mb-2 mr-3",on:{click:function(a){return t.toast("b-toaster-bottom-center",!0)}}},[t._v(" b-toaster-bottom-center ")]),s("b-button",{staticClass:"mb-2",on:{click:function(a){return t.toast("b-toaster-bottom-full",!0)}}},[t._v(" b-toaster-bottom-full ")])],1)]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.code4.html)+" ")]},proxy:!0},{key:"js",fn:function(){return[t._v(" "+t._s(t.code4.js)+" ")]},proxy:!0}])})],1)])],1)},o=[],n=s("d968"),i=s("0bce"),r={data:function(){return{code1:{html:'<div class="p-3 bg-secondary progress-bar-striped" style="min-height: 170px;">\n    <b-button class="mb-2" variant="primary" @click="$bvToast.show(\'example-toast\')">\n      Show toast\n    </b-button>\n    <b-toast id="example-toast" title="BootstrapVue" static no-auto-hide>\n      Hello, world! This is a toast message.\n    </b-toast>\n  </div>'},code2:{html:'<div>\n    <b-button @click="makeToast()">Show Toast</b-button>\n    <b-button @click="makeToast(true)">Show Toast (appended)</b-button>\n  </div>',js:"export default {\n    data() {\n      return {\n        toastCount: 0\n      }\n    },\n    methods: {\n      makeToast(append = false) {\n        this.toastCount++\n        this.$bvToast.toast(`This is toast number ".concat(this.toastCount,"`, {\n          title: 'BootstrapVue Toast',\n          autoHideDelay: 5000,\n          appendToast: append\n        })\n      }\n    }\n  }")},toastCount:0,code3:{html:'<div>\n    <b-button @click="makeToast()" class="mb-2">Default</b-button>\n    <b-button variant="primary" @click="makeToast(\'primary\')" class="mb-2">Primary</b-button>\n    <b-button variant="secondary" @click="makeToast(\'secondary\')" class="mb-2">Secondary</b-button>\n    <b-button variant="danger" @click="makeToast(\'danger\')" class="mb-2">Danger</b-button>\n    <b-button variant="warning" @click="makeToast(\'warning\')" class="mb-2">Warning</b-button>\n    <b-button variant="success" @click="makeToast(\'success\')" class="mb-2">Success</b-button>\n    <b-button variant="info" @click="makeToast(\'info\')" class="mb-2">Info</b-button>\n  </div>',js:"export default {\n    methods: {\n      makeToast(variant = null) {\n        this.$bvToast.toast('Toast body content', {\n          title: `Variant ${variant || 'default'}`,\n          variant: variant,\n          solid: true\n        })\n      }\n    }\n  }"},code4:{html:'<div>\n    <b-button @click="toast(\'b-toaster-top-right\')" class="mb-2">b-toaster-top-right</b-button>\n    <b-button @click="toast(\'b-toaster-top-left\')" class="mb-2">b-toaster-top-left</b-button>\n    <b-button @click="toast(\'b-toaster-top-center\')" class="mb-2">b-toaster-top-center</b-button>\n    <b-button @click="toast(\'b-toaster-top-full\')" class="mb-2">b-toaster-top-full</b-button>\n    <b-button @click="toast(\'b-toaster-bottom-right\', true)" class="mb-2">b-toaster-bottom-right</b-button>\n    <b-button @click="toast(\'b-toaster-bottom-left\', true)" class="mb-2">b-toaster-bottom-left</b-button>\n    <b-button @click="toast(\'b-toaster-bottom-center\', true)" class="mb-2">b-toaster-bottom-center</b-button>\n    <b-button @click="toast(\'b-toaster-bottom-full\', true)" class="mb-2">b-toaster-bottom-full</b-button>\n  </div>',js:"export default {\n    data() {\n      return {\n        counter: 0\n      }\n    },\n    methods: {\n      toast(toaster, append = false) {\n        this.counter++\n        this.$bvToast.toast(`Toast ${this.counter} body content`, {\n          title: `Toaster ${toaster}`,\n          toaster: toaster,\n          solid: true,\n          appendToast: append\n        })\n      }\n    }\n  }"},counter:0}},components:{KTCodePreview:n["a"]},methods:{makeToast:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.toastCount++,this.$bvToast.toast("This is toast number ".concat(this.toastCount),{title:"BootstrapVue Toast",autoHideDelay:5e3,appendToast:t})},toast:function(t){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.counter++,this.$bvToast.toast("Toast ".concat(this.counter," body content"),{title:"Toaster ".concat(t),toaster:t,solid:!0,appendToast:a})},makeToastVariant:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.$bvToast.toast("Toast body content",{title:"Variant ".concat(t||"default"),variant:t,solid:!0})}},mounted:function(){this.$store.dispatch(i["a"],[{title:"Vue Bootstrap",route:"alert"},{title:"Notify",route:"popover"},{title:"Toasts"}])}},l=r,c=s("2877"),b=Object(c["a"])(l,e,o,!1,null,null,null);a["default"]=b.exports}}]);
//# sourceMappingURL=chunk-3780ad51.05068cc1.js.map