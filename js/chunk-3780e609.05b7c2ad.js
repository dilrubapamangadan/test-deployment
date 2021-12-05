(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3780e609"],{d968:function(s,t,e){"use strict";var a=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("KTCard",{ref:"preview",attrs:{title:s.title,example:!0},scopedSlots:s._u([s.hasTitleSlot?{key:"title",fn:function(){return[e("h3",{staticClass:"card-title"},[s._t("title")],2)]},proxy:!0}:null,{key:"toolbar",fn:function(){return[e("div",{staticClass:"example-tools justify-content-center"},[e("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",value:"View code",expression:"'View code'",modifiers:{hover:!0,top:!0}}],staticClass:"example-toggle",attrs:{"data-toggle":"tooltip"}}),e("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",value:"Copy code",expression:"'Copy code'",modifiers:{hover:!0,top:!0}}],staticClass:"example-copy",attrs:{"data-toggle":"tooltip"}})])]},proxy:!0},{key:"body",fn:function(){return[e("div",{staticClass:"example-code mb-5"},[s.hasGeneralCode||s.hasSingleCodeType?s._e():e("ul",{staticClass:"example-nav nav nav-tabs nav-bold nav-tabs-line nav-tabs-line-2x",attrs:{role:"tablist"}},[s.hasHtmlCode?e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link active",attrs:{"data-tab":"0","data-toggle":"tab",href:"#",role:"tab","aria-selected":"true"},on:{click:s.setActiveTab}},[s._v(" HTML ")])]):s._e(),s.hasJsCode?e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{"data-tab":"1","data-toggle":"tab",href:"#",role:"tab","aria-selected":"false"},on:{click:s.setActiveTab}},[s._v("  JS  ")])]):s._e(),s.hasScssCode?e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{"data-tab":"2","data-toggle":"tab",href:"#",role:"tab","aria-selected":"false"},on:{click:s.setActiveTab}},[s._v(" SCSS ")])]):s._e()]),s.hasGeneralCode?e("div",[s._t("code")],2):s._e(),s.hasGeneralCode||s.hasSingleCodeType?s._e():e("div",[e("b-tabs",{staticClass:"hide-tabs",attrs:{"content-class":"mt-3"},model:{value:s.tabIndex,callback:function(t){s.tabIndex=t},expression:"tabIndex"}},[e("b-tab",{staticClass:"example-highlight",attrs:{active:""}},[e("highlight-code",{staticClass:"language-html",attrs:{lang:"html"}},[s._t("html")],2)],1),e("b-tab",{staticClass:"example-highlight"},[e("highlight-code",{staticClass:"language-js",attrs:{lang:"js"}},[s._t("js")],2)],1),e("b-tab",{staticClass:"example-highlight"},[e("highlight-code",{staticClass:"language-scss",attrs:{lang:"scss"}},[s._t("scss")],2)],1)],1)],1),s.hasSingleCodeType?e("div",{staticClass:"example-highlight"},[s.hasHtmlCode?e("highlight-code",{staticClass:"language-html",attrs:{lang:"html"}},[s._t("html")],2):s._e(),s.hasJsCode?e("highlight-code",{staticClass:"language-js",attrs:{lang:"js"}},[s._t("js")],2):s._e(),s.hasScssCode?e("highlight-code",{staticClass:"language-scss",attrs:{lang:"scss"}},[s._t("scss")],2):s._e()],1):s._e()]),s._t("preview")]},proxy:!0}],null,!0)})},i=[],n=(e("d3b7"),e("159b"),function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"card card-custom gutter-b",class:s.classes},[s.hasTitleSlot||s.title?e("div",{staticClass:"card-header",class:s.headClass},[e("div",{staticClass:"card-title"},[s.hasTitleSlot?s._t("title"):s._e(),s.hasTitleSlot?s._e():e("h3",{staticClass:"card-label"},[s._v(" "+s._s(s.title)+" ")])],2),e("div",{staticClass:"card-toolbar"},[s._t("toolbar")],2)]):s._e(),e("div",{staticClass:"card-body",class:{bodyClass:s.bodyClass,"body-fit":s.bodyFit,"body-fluid":s.bodyFluid}},[s._t("body")],2),s.hasFootSlot?e("div",{staticClass:"card-footer"},[s._t("foot")],2):s._e()])}),l=[],o={name:"KTCard",props:{title:String,headSize:String,fluidHeight:Boolean,fluidHalfHeight:Boolean,headOverlay:Boolean,cardClass:String,headClass:String,bodyClass:String,bodyFit:Boolean,bodyFluid:Boolean,example:Boolean},components:{},methods:{},computed:{classes:function(){var s={"example example-compact":this.example,"height-fluid":this.fluidHeight,"height-fluid-half":this.fluidHalfHeight,"head-overlay":this.headOverlay};return s[this.headSizeClass]=this.headSizeClass,this.cardClass&&(s[this.cardClass]=!0),s},hasTitleSlot:function(){return!!this.$slots["title"]},hasFootSlot:function(){return!!this.$slots["foot"]},headSizeClass:function(){return!!this.headSize&&"head-".concat(this.headSize)}}},r=o,d=e("2877"),c=Object(d["a"])(r,n,l,!1,null,null,null),h=c.exports,u=e("b2e9"),b={name:"KTCodePreview",props:{title:String},data:function(){return{tabIndex:0,isOpen:!1}},components:{KTCard:h},mounted:function(){var s=this;this.$nextTick((function(){u["a"].init([s.$el]);var t=s.$el.querySelectorAll(".hljs");t.forEach((function(s){s.classList.add("language-".concat(s.classList[1])),s.classList.remove("hljs")}))}))},methods:{setActiveTab:function(s){for(var t=s.target.closest('[role="tablist"]'),e=t.querySelectorAll('[data-toggle="tab"]'),a=0;a<e.length;a++)e[a].classList.remove("active");s.target.classList.add("active"),this.tabIndex=parseInt(s.target.getAttribute("data-tab"))}},computed:{hasTitleSlot:function(){return!!this.$slots["title"]},hasSingleCodeType:function(){var s=this,t=0;return["html","js","scss"].forEach((function(e){s.$slots.hasOwnProperty(e)&&t++})),1===t},hasGeneralCode:function(){return!!this.$slots["code"]},hasJsCode:function(){return!!this.$slots["js"]},hasScssCode:function(){return!!this.$slots["scss"]},hasHtmlCode:function(){return!!this.$slots["html"]}}},v=b,m=Object(d["a"])(v,a,i,!1,null,null,null);t["a"]=m.exports},ed80:function(s,t,e){"use strict";e.r(t);var a=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",[e("b-alert",{staticClass:"alert alert-custom alert-white alert-shadow fade show gutter-b",attrs:{show:"",variant:"light"}},[e("div",{staticClass:"alert-icon"},[e("span",{staticClass:"svg-icon svg-icon-lg"},[e("inline-svg",{attrs:{src:"media/svg/icons/Tools/Compass.svg"}})],1)]),e("div",{staticClass:"alert-text"},[e("b",[s._v("Alerts")]),s._v(" Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages. "),e("a",{staticClass:"font-weight-bold",attrs:{href:"https://bootstrap-vue.js.org/docs/components/alert",target:"_blank"}},[s._v(" See documentation. ")])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("KTCodePreview",{attrs:{title:"Alerts"},scopedSlots:s._u([{key:"preview",fn:function(){return[e("p",[s._v(" Alerts are available for any length of text, as well as an optional dismiss button (and optional auto-dismissing). ")]),e("div",[e("b-alert",{attrs:{show:""}},[s._v("Default Alert")]),e("b-alert",{attrs:{variant:"success",show:""}},[s._v("Success Alert")]),e("b-alert",{attrs:{variant:"danger",dismissible:""},scopedSlots:s._u([{key:"dismiss",fn:function(){return[e("div",{staticClass:"alert-close"},[e("span",{attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"la la-close"})])])]},proxy:!0}]),model:{value:s.code1.showDismissibleAlert,callback:function(t){s.$set(s.code1,"showDismissibleAlert",t)},expression:"code1.showDismissibleAlert"}},[s._v(" Dismissible Alert! ")]),e("b-alert",{attrs:{show:s.code1.dismissCountDown,dismissible:"",variant:"warning"},on:{dismissed:function(t){s.code1.dismissCountDown=0},"dismiss-count-down":s.countDownChanged1},scopedSlots:s._u([{key:"dismiss",fn:function(){return[e("div",{staticClass:"alert-close"},[e("span",{attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"la la-close"})])])]},proxy:!0}])},[e("p",[s._v(" This alert will dismiss after "+s._s(s.code1.dismissCountDown)+" seconds... ")]),e("b-progress",{attrs:{variant:"success",max:s.code1.dismissSecs,value:s.code1.dismissCountDown,height:"4px"}})],1),e("b-button",{staticClass:"m-1",attrs:{variant:"info"},on:{click:s.showAlert1}},[s._v(" Show alert with count-down timer ")]),e("b-button",{staticClass:"m-1",attrs:{variant:"info"},on:{click:function(t){s.code1.showDismissibleAlert=!0}}},[s._v(" Show dismissible alert ("+s._s(s.code1.showDismissibleAlert?"visible":"hidden")+") ")])],1)]},proxy:!0},{key:"html",fn:function(){return[s._v(" "+s._s(s.code1.html)+" ")]},proxy:!0},{key:"js",fn:function(){return[s._v(" "+s._s(s.code1.js)+" ")]},proxy:!0}])}),e("KTCodePreview",{attrs:{title:"Fading alerts"},scopedSlots:s._u([{key:"preview",fn:function(){return[e("p",[s._v(" Use the "),e("code",[s._v("fade")]),s._v(" prop to enable animation. By default alerts are not animated. ")]),e("div",[e("b-alert",{attrs:{show:"",dismissible:"",fade:""},scopedSlots:s._u([{key:"dismiss",fn:function(){return[e("div",{staticClass:"alert-close"},[e("span",{attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"la la-close"})])])]},proxy:!0}])},[s._v(" Dismissible Alert! ")]),e("b-alert",{attrs:{variant:"danger",dismissible:"",fade:"",show:s.code2.showDismissibleAlert},on:{dismissed:function(t){s.code2.showDismissibleAlert=!1}},scopedSlots:s._u([{key:"dismiss",fn:function(){return[e("div",{staticClass:"alert-close"},[e("span",{attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"la la-close"})])])]},proxy:!0}])},[s._v(" Dismissible Alert! ")]),e("b-alert",{attrs:{show:s.code2.dismissCountDown,dismissible:"",fade:"",variant:"warning"},on:{"dismiss-count-down":s.countDownChanged2},scopedSlots:s._u([{key:"dismiss",fn:function(){return[e("div",{staticClass:"alert-close"},[e("span",{attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"la la-close"})])])]},proxy:!0}])},[s._v(" This alert will dismiss after "+s._s(s.code2.dismissCountDown)+" seconds... ")]),e("b-button",{staticClass:"m-1",attrs:{variant:"info"},on:{click:s.showAlert2}},[s._v(" Show alert with count-down timer ")]),e("b-button",{staticClass:"m-1",attrs:{variant:"info"},on:{click:function(t){s.code2.showDismissibleAlert=!0}},scopedSlots:s._u([{key:"dismiss",fn:function(){return[e("div",{staticClass:"alert-close"},[e("span",{attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"la la-close"})])])]},proxy:!0}])},[s._v(" Show dismissible alert ("+s._s(s.code2.showDismissibleAlert?"visible":"hidden")+") ")])],1)]},proxy:!0},{key:"html",fn:function(){return[s._v(" "+s._s(s.code2.html)+" ")]},proxy:!0}])})],1),e("div",{staticClass:"col-md-6"},[e("KTCodePreview",{attrs:{title:"Contextual variants"},scopedSlots:s._u([{key:"preview",fn:function(){return[e("p",[s._v(" For proper styling of <b-alert>, use one of the four required contextual variants by setting the variant prop to one of the following: "),e("code",[s._v("info")]),s._v(", "),e("code",[s._v("success")]),s._v(", "),e("code",[s._v("warning")]),s._v(" or "),e("code",[s._v("danger")]),s._v(". The default is "),e("code",[s._v("info")]),s._v(". ")]),e("div",[e("b-alert",{attrs:{show:"",variant:"primary"}},[s._v("Primary Alert")]),e("b-alert",{attrs:{show:"",variant:"secondary"}},[s._v("Secondary Alert")]),e("b-alert",{attrs:{show:"",variant:"success"}},[s._v("Success Alert")]),e("b-alert",{attrs:{show:"",variant:"danger"}},[s._v("Danger Alert")]),e("b-alert",{attrs:{show:"",variant:"warning"}},[s._v("Warning Alert")]),e("b-alert",{attrs:{show:"",variant:"info"}},[s._v("Info Alert")]),e("b-alert",{attrs:{show:"",variant:"light"}},[s._v("Light Alert")]),e("b-alert",{attrs:{show:"",variant:"dark"}},[s._v("Dark Alert")])],1)]},proxy:!0},{key:"html",fn:function(){return[s._v(" "+s._s(s.code3.html)+" ")]},proxy:!0}])})],1)])],1)},i=[],n=e("d968"),l=e("0bce"),o={data:function(){return{code1:{html:'<div>\n    <b-alert show>Default Alert</b-alert>\n\n    <b-alert variant="success" show>Success Alert</b-alert>\n\n    <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>\n      Dismissible Alert!\n    </b-alert>\n\n    <b-alert\n      :show="dismissCountDown"\n      dismissible\n      variant="warning"\n      @dismissed="dismissCountDown=0"\n      @dismiss-count-down="countDownChanged"\n    >\n      <p>This alert will dismiss after {{ dismissCountDown }} seconds...</p>\n      <b-progress\n        variant="warning"\n        :max="dismissSecs"\n        :value="dismissCountDown"\n        height="4px"\n      ></b-progress>\n    </b-alert>\n\n    <b-button @click="showAlert" variant="info" class="m-1">\n      Show alert with count-down timer\n    </b-button>\n    <b-button @click="showDismissibleAlert=true" variant="info" class="m-1">\n      Show dismissible alert ({{ showDismissibleAlert ? \'visible\' : \'hidden\' }})\n    </b-button>\n  </div>',js:"export default {\n    data() {\n      return {\n        dismissSecs: 10,\n        dismissCountDown: 0,\n        showDismissibleAlert: false\n      }\n    },\n    methods: {\n      countDownChanged(dismissCountDown) {\n        this.dismissCountDown = dismissCountDown\n      },\n      showAlert() {\n        this.dismissCountDown = this.dismissSecs\n      }\n    }\n  }",showDismissibleAlert:!1,dismissSecs:10,dismissCountDown:0},code2:{html:'<div>\n    <b-alert show dismissible fade>Dismissible Alert!</b-alert>\n\n    <b-alert\n      variant="danger"\n      dismissible\n      fade\n      :show="showDismissibleAlert"\n      @dismissed="showDismissibleAlert=false"\n    >\n      Dismissible Alert!\n    </b-alert>\n\n    <b-alert\n      :show="dismissCountDown"\n      dismissible\n      fade\n      variant="warning"\n      @dismiss-count-down="countDownChanged"\n    >\n      This alert will dismiss after {{ dismissCountDown }} seconds...\n    </b-alert>\n\n    <b-button @click="showAlert" variant="info" class="m-1">\n      Show alert with count-down timer\n    </b-button>\n    <b-button @click="showDismissibleAlert=true" variant="info" class="m-1">\n      Show dismissible alert ({{ showDismissibleAlert ? \'visible\' : \'hidden\' }})\n    </b-button>\n  </div>',showDismissibleAlert:!1,dismissSecs:10,dismissCountDown:0},code3:{html:'<div>\n  <b-alert show variant="primary">Primary Alert</b-alert>\n  <b-alert show variant="secondary">Secondary Alert</b-alert>\n  <b-alert show variant="success">Success Alert</b-alert>\n  <b-alert show variant="danger">Danger Alert</b-alert>\n  <b-alert show variant="warning">Warning Alert</b-alert>\n  <b-alert show variant="info">Info Alert</b-alert>\n  <b-alert show variant="light">Light Alert</b-alert>\n  <b-alert show variant="dark">Dark Alert</b-alert>\n</div>'}}},components:{KTCodePreview:n["a"]},mounted:function(){this.$store.dispatch(l["a"],[{title:"Vue Bootstrap",route:"alert"},{title:"Alert"}])},methods:{countDownChanged1:function(s){this.code1.dismissCountDown=s},countDownChanged2:function(s){this.code2.dismissCountDown=s},showAlert1:function(){this.code1.dismissCountDown=this.code1.dismissSecs},showAlert2:function(){this.code2.dismissCountDown=this.code2.dismissSecs}}},r=o,d=e("2877"),c=Object(d["a"])(r,a,i,!1,null,null,null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-3780e609.05b7c2ad.js.map