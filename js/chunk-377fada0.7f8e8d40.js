(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-377fada0"],{d013:function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-alert",{staticClass:"alert alert-custom alert-white alert-shadow fade show gutter-b",attrs:{show:"",variant:"light"}},[a("div",{staticClass:"alert-icon"},[a("span",{staticClass:"svg-icon svg-icon-lg"},[a("inline-svg",{attrs:{src:"media/svg/icons/Tools/Compass.svg"}})],1)]),a("div",{staticClass:"alert-text"},[a("b",[t._v("Form group")]),t._v(" The <b-form-group> component is the easiest way to add some structure to forms. Its purpose is to pair form controls with a legend or label, and to provide help text and invalid/valid feedback text, as well as visual (color) contextual state feedback. "),a("a",{staticClass:"font-weight-bold",attrs:{href:"https://bootstrap-vue.js.org/docs/components/form-group",target:"_blank"}},[t._v(" See documentation. ")])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("KTCodePreview",{attrs:{title:"Form group"},scopedSlots:t._u([{key:"preview",fn:function(){return[a("div",[a("b-form-group",{attrs:{id:"fieldset-1",description:"Let us know your name.",label:"Enter your name","label-for":"input-1","invalid-feedback":t.invalidFeedback,"valid-feedback":t.validFeedback,state:t.state}},[a("b-form-input",{attrs:{id:"input-1",state:t.state,trim:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1)],1)]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.html1)+" ")]},proxy:!0},{key:"js",fn:function(){return[t._v(" "+t._s(t.js1)+" ")]},proxy:!0}])}),a("KTCodePreview",{attrs:{title:"Horizontal layout"},scopedSlots:t._u([{key:"preview",fn:function(){return[a("p",[t._v(" By default, the label appears above the input element(s), but you may optionally render horizontal (label to the left of the input) at the various standard Bootstrap breakpoints. ")]),a("div",[a("b-form-group",{attrs:{id:"fieldset-horizontal","label-cols-sm":"4","label-cols-lg":"3",description:"Let us know your name.",label:"Enter your name","label-for":"input-horizontal"}},[a("b-form-input",{attrs:{id:"input-horizontal"}})],1)],1)]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.html2)+" ")]},proxy:!0}])})],1),a("div",{staticClass:"col-md-6"},[a("KTCodePreview",{attrs:{title:"Label size"},scopedSlots:t._u([{key:"preview",fn:function(){return[a("p",[t._v(" You can control the label text size match the size of your form input(s) via the optional "),a("code",[t._v("label-size")]),t._v(" prop. Values can be '"),a("code",[t._v("sm")]),t._v("' or '"),a("code",[t._v("lg")]),t._v("' for small or large label, respectively. Sizes work for both horizontal and non-horizontal form groups. ")]),a("div",[a("b-form-group",{attrs:{"label-cols":"4","label-cols-lg":"2","label-size":"sm",label:"Small","label-for":"input-sm"}},[a("b-form-input",{attrs:{id:"input-sm",size:"sm"}})],1),a("b-form-group",{attrs:{"label-cols":"4","label-cols-lg":"2",label:"Default","label-for":"input-default"}},[a("b-form-input",{attrs:{id:"input-default"}})],1),a("b-form-group",{attrs:{"label-cols":"4","label-cols-lg":"2","label-size":"lg",label:"Large","label-for":"input-lg"}},[a("b-form-input",{attrs:{id:"input-lg",size:"lg"}})],1)],1)]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.html3)+" ")]},proxy:!0}])}),a("KTCodePreview",{attrs:{title:"Nested form groups"},scopedSlots:t._u([{key:"preview",fn:function(){return[a("p",[t._v(" Feel free to nest "),a("code",[t._v("<b-form-group>")]),t._v(" components to produce advanced form layouts and semantic grouping of related form controls: ")]),a("div",[a("b-card",{attrs:{"bg-variant":"light"}},[a("b-form-group",{staticClass:"mb-0",attrs:{"label-cols-lg":"3",label:"Shipping Address","label-size":"lg","label-class":"font-weight-bold pt-0"}},[a("b-form-group",{attrs:{"label-cols-sm":"3",label:"Street:","label-align-sm":"right","label-for":"nested-street"}},[a("b-form-input",{attrs:{id:"nested-street"}})],1),a("b-form-group",{attrs:{"label-cols-sm":"3",label:"City:","label-align-sm":"right","label-for":"nested-city"}},[a("b-form-input",{attrs:{id:"nested-city"}})],1),a("b-form-group",{attrs:{"label-cols-sm":"3",label:"State:","label-align-sm":"right","label-for":"nested-state"}},[a("b-form-input",{attrs:{id:"nested-state"}})],1),a("b-form-group",{attrs:{"label-cols-sm":"3",label:"Country:","label-align-sm":"right","label-for":"nested-country"}},[a("b-form-input",{attrs:{id:"nested-country"}})],1),a("b-form-group",{staticClass:"mb-0",attrs:{"label-cols-sm":"3",label:"Ship via:","label-align-sm":"right"}},[a("b-form-radio-group",{staticClass:"pt-2",attrs:{options:["Air","Courier","Mail"]}})],1)],1)],1)],1)]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.html4)+" ")]},proxy:!0}])})],1)])],1)},s=[],o=(a("b0c0"),a("d968")),n=a("0bce"),i={data:function(){return{html1:'<div>\n    <b-form-group\n      id="fieldset-1"\n      description="Let us know your name."\n      label="Enter your name"\n      label-for="input-1"\n      :invalid-feedback="invalidFeedback"\n      :valid-feedback="validFeedback"\n      :state="state"\n    >\n      <b-form-input id="input-1" v-model="name" :state="state" trim></b-form-input>\n    </b-form-group>\n  </div>',js1:"export default {\n    computed: {\n      state() {\n        return this.name.length >= 4 ? true : false\n      },\n      invalidFeedback() {\n        if (this.name.length > 4) {\n          return ''\n        } else if (this.name.length > 0) {\n          return 'Enter at least 4 characters'\n        } else {\n          return 'Please enter something'\n        }\n      },\n      validFeedback() {\n        return this.state === true ? 'Thank you' : ''\n      }\n    },\n    data() {\n      return {\n        name: ''\n      }\n    }\n  }",name:"",html2:'<div>\n    <b-form-group\n      id="fieldset-horizontal"\n      label-cols-sm="4"\n      label-cols-lg="3"\n      description="Let us know your name."\n      label="Enter your name"\n      label-for="input-horizontal"\n    >\n      <b-form-input id="input-horizontal"></b-form-input>\n    </b-form-group>\n  </div>',html3:'<div>\n  <b-form-group label-cols="4" label-cols-lg="2" label-size="sm" label="Small" label-for="input-sm">\n    <b-form-input id="input-sm" size="sm"></b-form-input>\n  </b-form-group>\n\n  <b-form-group label-cols="4" label-cols-lg="2" label="Default" label-for="input-default">\n    <b-form-input id="input-default"></b-form-input>\n  </b-form-group>\n\n  <b-form-group label-cols="4" label-cols-lg="2" label-size="lg" label="Large" label-for="input-lg">\n    <b-form-input id="input-lg" size="lg"></b-form-input>\n  </b-form-group>\n</div>',html4:'<div>\n  <b-card bg-variant="light">\n    <b-form-group\n      label-cols-lg="3"\n      label="Shipping Address"\n      label-size="lg"\n      label-class="font-weight-bold pt-0"\n      class="mb-0"\n    >\n      <b-form-group\n        label-cols-sm="3"\n        label="Street:"\n        label-align-sm="right"\n        label-for="nested-street"\n      >\n        <b-form-input id="nested-street"></b-form-input>\n      </b-form-group>\n\n      <b-form-group\n        label-cols-sm="3"\n        label="City:"\n        label-align-sm="right"\n        label-for="nested-city"\n      >\n        <b-form-input id="nested-city"></b-form-input>\n      </b-form-group>\n\n      <b-form-group\n        label-cols-sm="3"\n        label="State:"\n        label-align-sm="right"\n        label-for="nested-state"\n      >\n        <b-form-input id="nested-state"></b-form-input>\n      </b-form-group>\n\n      <b-form-group\n        label-cols-sm="3"\n        label="Country:"\n        label-align-sm="right"\n        label-for="nested-country"\n      >\n        <b-form-input id="nested-country"></b-form-input>\n      </b-form-group>\n\n      <b-form-group\n        label-cols-sm="3"\n        label="Ship via:"\n        label-align-sm="right" class="mb-0"\n      >\n        <b-form-radio-group\n          class="pt-2"\n          :options="[\'Air\', \'Courier\', \'Mail\']"\n        ></b-form-radio-group>\n      </b-form-group>\n    </b-form-group>\n  </b-card>\n</div>'}},components:{KTCodePreview:o["a"]},computed:{state:function(){return this.name.length>=4},invalidFeedback:function(){return this.name.length>4?"":this.name.length>0?"Enter at least 4 characters":"Please enter something"},validFeedback:function(){return!0===this.state?"Thank you":""}},mounted:function(){this.$store.dispatch(n["a"],[{title:"Vue Bootstrap",route:"alert"},{title:"Form Group"}])}},r=i,c=a("2877"),d=Object(c["a"])(r,l,s,!1,null,null,null);e["default"]=d.exports},d968:function(t,e,a){"use strict";var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("KTCard",{ref:"preview",attrs:{title:t.title,example:!0},scopedSlots:t._u([t.hasTitleSlot?{key:"title",fn:function(){return[a("h3",{staticClass:"card-title"},[t._t("title")],2)]},proxy:!0}:null,{key:"toolbar",fn:function(){return[a("div",{staticClass:"example-tools justify-content-center"},[a("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",value:"View code",expression:"'View code'",modifiers:{hover:!0,top:!0}}],staticClass:"example-toggle",attrs:{"data-toggle":"tooltip"}}),a("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",value:"Copy code",expression:"'Copy code'",modifiers:{hover:!0,top:!0}}],staticClass:"example-copy",attrs:{"data-toggle":"tooltip"}})])]},proxy:!0},{key:"body",fn:function(){return[a("div",{staticClass:"example-code mb-5"},[t.hasGeneralCode||t.hasSingleCodeType?t._e():a("ul",{staticClass:"example-nav nav nav-tabs nav-bold nav-tabs-line nav-tabs-line-2x",attrs:{role:"tablist"}},[t.hasHtmlCode?a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link active",attrs:{"data-tab":"0","data-toggle":"tab",href:"#",role:"tab","aria-selected":"true"},on:{click:t.setActiveTab}},[t._v(" HTML ")])]):t._e(),t.hasJsCode?a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{"data-tab":"1","data-toggle":"tab",href:"#",role:"tab","aria-selected":"false"},on:{click:t.setActiveTab}},[t._v("  JS  ")])]):t._e(),t.hasScssCode?a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{"data-tab":"2","data-toggle":"tab",href:"#",role:"tab","aria-selected":"false"},on:{click:t.setActiveTab}},[t._v(" SCSS ")])]):t._e()]),t.hasGeneralCode?a("div",[t._t("code")],2):t._e(),t.hasGeneralCode||t.hasSingleCodeType?t._e():a("div",[a("b-tabs",{staticClass:"hide-tabs",attrs:{"content-class":"mt-3"},model:{value:t.tabIndex,callback:function(e){t.tabIndex=e},expression:"tabIndex"}},[a("b-tab",{staticClass:"example-highlight",attrs:{active:""}},[a("highlight-code",{staticClass:"language-html",attrs:{lang:"html"}},[t._t("html")],2)],1),a("b-tab",{staticClass:"example-highlight"},[a("highlight-code",{staticClass:"language-js",attrs:{lang:"js"}},[t._t("js")],2)],1),a("b-tab",{staticClass:"example-highlight"},[a("highlight-code",{staticClass:"language-scss",attrs:{lang:"scss"}},[t._t("scss")],2)],1)],1)],1),t.hasSingleCodeType?a("div",{staticClass:"example-highlight"},[t.hasHtmlCode?a("highlight-code",{staticClass:"language-html",attrs:{lang:"html"}},[t._t("html")],2):t._e(),t.hasJsCode?a("highlight-code",{staticClass:"language-js",attrs:{lang:"js"}},[t._t("js")],2):t._e(),t.hasScssCode?a("highlight-code",{staticClass:"language-scss",attrs:{lang:"scss"}},[t._t("scss")],2):t._e()],1):t._e()]),t._t("preview")]},proxy:!0}],null,!0)})},s=[],o=(a("d3b7"),a("159b"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card card-custom gutter-b",class:t.classes},[t.hasTitleSlot||t.title?a("div",{staticClass:"card-header",class:t.headClass},[a("div",{staticClass:"card-title"},[t.hasTitleSlot?t._t("title"):t._e(),t.hasTitleSlot?t._e():a("h3",{staticClass:"card-label"},[t._v(" "+t._s(t.title)+" ")])],2),a("div",{staticClass:"card-toolbar"},[t._t("toolbar")],2)]):t._e(),a("div",{staticClass:"card-body",class:{bodyClass:t.bodyClass,"body-fit":t.bodyFit,"body-fluid":t.bodyFluid}},[t._t("body")],2),t.hasFootSlot?a("div",{staticClass:"card-footer"},[t._t("foot")],2):t._e()])}),n=[],i={name:"KTCard",props:{title:String,headSize:String,fluidHeight:Boolean,fluidHalfHeight:Boolean,headOverlay:Boolean,cardClass:String,headClass:String,bodyClass:String,bodyFit:Boolean,bodyFluid:Boolean,example:Boolean},components:{},methods:{},computed:{classes:function(){var t={"example example-compact":this.example,"height-fluid":this.fluidHeight,"height-fluid-half":this.fluidHalfHeight,"head-overlay":this.headOverlay};return t[this.headSizeClass]=this.headSizeClass,this.cardClass&&(t[this.cardClass]=!0),t},hasTitleSlot:function(){return!!this.$slots["title"]},hasFootSlot:function(){return!!this.$slots["foot"]},headSizeClass:function(){return!!this.headSize&&"head-".concat(this.headSize)}}},r=i,c=a("2877"),d=Object(c["a"])(r,o,n,!1,null,null,null),u=d.exports,b=a("b2e9"),m={name:"KTCodePreview",props:{title:String},data:function(){return{tabIndex:0,isOpen:!1}},components:{KTCard:u},mounted:function(){var t=this;this.$nextTick((function(){b["a"].init([t.$el]);var e=t.$el.querySelectorAll(".hljs");e.forEach((function(t){t.classList.add("language-".concat(t.classList[1])),t.classList.remove("hljs")}))}))},methods:{setActiveTab:function(t){for(var e=t.target.closest('[role="tablist"]'),a=e.querySelectorAll('[data-toggle="tab"]'),l=0;l<a.length;l++)a[l].classList.remove("active");t.target.classList.add("active"),this.tabIndex=parseInt(t.target.getAttribute("data-tab"))}},computed:{hasTitleSlot:function(){return!!this.$slots["title"]},hasSingleCodeType:function(){var t=this,e=0;return["html","js","scss"].forEach((function(a){t.$slots.hasOwnProperty(a)&&e++})),1===e},hasGeneralCode:function(){return!!this.$slots["code"]},hasJsCode:function(){return!!this.$slots["js"]},hasScssCode:function(){return!!this.$slots["scss"]},hasHtmlCode:function(){return!!this.$slots["html"]}}},p=m,h=Object(c["a"])(p,l,s,!1,null,null,null);e["a"]=h.exports}}]);
//# sourceMappingURL=chunk-377fada0.7f8e8d40.js.map