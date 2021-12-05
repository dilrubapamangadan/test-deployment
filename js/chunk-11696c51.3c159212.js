(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-11696c51"],{cb3a:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"alert alert-custom alert-white alert-shadow gutter-b",attrs:{role:"alert"}},[a("div",{staticClass:"alert-icon alert-icon-top"},[a("span",{staticClass:"svg-icon svg-icon-3x svg-icon-primary mt-4"},[a("inline-svg",{attrs:{src:"media/svg/icons/Tools/Tools.svg"}})],1)]),e._m(0)]),a("div",{staticClass:"card card-custom gutter-b"},[a("div",{staticClass:"card-header card-header-tabs-line"},[a("ul",{ref:"builder-tab",staticClass:"nav nav-dark nav-bold nav-tabs nav-tabs-line",attrs:{role:"tablist"}},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link active",attrs:{"data-tab":"0","data-toggle":"tab",href:"#",role:"tab"},on:{click:e.setActiveTab}},[e._v(" Page ")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{"data-tab":"1","data-toggle":"tab",href:"#",role:"tab"},on:{click:e.setActiveTab}},[e._v(" Header ")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{"data-tab":"2","data-toggle":"tab",href:"#",role:"tab"},on:{click:e.setActiveTab}},[e._v(" Subheader ")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{"data-tab":"3","data-toggle":"tab",href:"#",role:"tab"},on:{click:e.setActiveTab}},[e._v(" Content ")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{"data-tab":"4","data-toggle":"tab",href:"#",role:"tab"},on:{click:e.setActiveTab}},[e._v(" Aside ")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{"data-tab":"5","data-toggle":"tab",href:"#",role:"tab"},on:{click:e.setActiveTab}},[e._v(" Footer ")])])])]),a("form",{staticClass:"form",on:{submit:function(t){return e.submit(t)}}},[a("div",{staticClass:"card-body"},[a("b-tabs",{staticClass:"hide-tabs",model:{value:e.tabIndex,callback:function(t){e.tabIndex=t},expression:"tabIndex"}},[a("b-tab",{attrs:{active:""}},[a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-lg-3 col-form-label"},[e._v(" Page Loader: ")]),a("div",{staticClass:"col-lg-9 col-xl-4"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.config.loader.type,expression:"config.loader.type"}],staticClass:"form-control",on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.config.loader,"type",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"false"}},[e._v(" Disabled ")]),a("option",{attrs:{value:"spinner-logo",selected:"selected"}},[e._v(" Spinner & Logo ")])]),a("div",{staticClass:"form-text text-muted"},[e._v(" Select page loading indicator. ")])])])]),a("b-tab",[a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-lg-3 col-form-label"},[e._v(" Desktop Fixed Header: ")]),a("div",{staticClass:"col-lg-9 col-xl-4"},[a("span",{staticClass:"switch switch-icon"},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.config.header.self.fixed.desktop,expression:"config.header.self.fixed.desktop"}],attrs:{type:"checkbox",value:"true",checked:""},domProps:{checked:Array.isArray(e.config.header.self.fixed.desktop)?e._i(e.config.header.self.fixed.desktop,"true")>-1:e.config.header.self.fixed.desktop},on:{change:function(t){var a=e.config.header.self.fixed.desktop,i=t.target,s=!!i.checked;if(Array.isArray(a)){var l="true",o=e._i(a,l);i.checked?o<0&&e.$set(e.config.header.self.fixed,"desktop",a.concat([l])):o>-1&&e.$set(e.config.header.self.fixed,"desktop",a.slice(0,o).concat(a.slice(o+1)))}else e.$set(e.config.header.self.fixed,"desktop",s)}}}),a("span")])]),a("div",{staticClass:"form-text text-muted"},[e._v(" Enable fixed header for desktop mode ")])])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-lg-3 col-form-label"},[e._v(" Mobile Fixed Header: ")]),a("div",{staticClass:"col-lg-9 col-xl-4"},[a("span",{staticClass:"switch switch-icon"},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.config.header.self.fixed.mobile,expression:"config.header.self.fixed.mobile"}],attrs:{type:"checkbox",value:"true",checked:""},domProps:{checked:Array.isArray(e.config.header.self.fixed.mobile)?e._i(e.config.header.self.fixed.mobile,"true")>-1:e.config.header.self.fixed.mobile},on:{change:function(t){var a=e.config.header.self.fixed.mobile,i=t.target,s=!!i.checked;if(Array.isArray(a)){var l="true",o=e._i(a,l);i.checked?o<0&&e.$set(e.config.header.self.fixed,"mobile",a.concat([l])):o>-1&&e.$set(e.config.header.self.fixed,"mobile",a.slice(0,o).concat(a.slice(o+1)))}else e.$set(e.config.header.self.fixed,"mobile",s)}}}),a("span")])]),a("div",{staticClass:"form-text text-muted"},[e._v(" Enable fixed header for mobile mode ")])])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-lg-3 col-form-label"},[e._v(" Display Header Menu: ")]),a("div",{staticClass:"col-lg-9 col-xl-4"},[a("span",{staticClass:"switch switch-icon"},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.config.header.menu.self.display,expression:"config.header.menu.self.display"}],attrs:{type:"checkbox",value:"true",checked:""},domProps:{checked:Array.isArray(e.config.header.menu.self.display)?e._i(e.config.header.menu.self.display,"true")>-1:e.config.header.menu.self.display},on:{change:function(t){var a=e.config.header.menu.self.display,i=t.target,s=!!i.checked;if(Array.isArray(a)){var l="true",o=e._i(a,l);i.checked?o<0&&e.$set(e.config.header.menu.self,"display",a.concat([l])):o>-1&&e.$set(e.config.header.menu.self,"display",a.slice(0,o).concat(a.slice(o+1)))}else e.$set(e.config.header.menu.self,"display",s)}}}),a("span")])]),a("div",{staticClass:"form-text text-muted"},[e._v(" Display header menu ")])])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-lg-3 col-form-label"},[e._v(" Header Menu Layout: ")]),a("div",{staticClass:"col-lg-9 col-xl-4"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.config.header.menu.self.layout,expression:"config.header.menu.self.layout"}],staticClass:"form-control",on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.config.header.menu.self,"layout",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"default",selected:""}},[e._v("Default")]),a("option",{attrs:{value:"tab"}},[e._v("Tab")])]),a("div",{staticClass:"form-text text-muted"},[e._v(" Select header menu layout style ")])])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-lg-3 col-form-label"},[e._v(" Header Menu Arrows: ")]),a("div",{staticClass:"col-lg-9 col-xl-4"},[a("span",{staticClass:"switch switch-icon"},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.config.header.menu.self["root-arrow"],expression:"config.header.menu.self['root-arrow']"}],attrs:{type:"checkbox",value:"true"},domProps:{checked:Array.isArray(e.config.header.menu.self["root-arrow"])?e._i(e.config.header.menu.self["root-arrow"],"true")>-1:e.config.header.menu.self["root-arrow"]},on:{change:function(t){var a=e.config.header.menu.self["root-arrow"],i=t.target,s=!!i.checked;if(Array.isArray(a)){var l="true",o=e._i(a,l);i.checked?o<0&&e.$set(e.config.header.menu.self,"root-arrow",a.concat([l])):o>-1&&e.$set(e.config.header.menu.self,"root-arrow",a.slice(0,o).concat(a.slice(o+1)))}else e.$set(e.config.header.menu.self,"root-arrow",s)}}}),a("span")])]),a("div",{staticClass:"form-text text-muted"},[e._v(" Enable header menu root link arrows ")])])])]),a("b-tab",[a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-lg-3 col-form-label"},[e._v(" Display Subheader: ")]),a("div",{staticClass:"col-lg-9 col-xl-4"},[a("span",{staticClass:"switch switch-icon"},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.config.subheader.display,expression:"config.subheader.display"}],attrs:{type:"checkbox",value:"true",checked:""},domProps:{checked:Array.isArray(e.config.subheader.display)?e._i(e.config.subheader.display,"true")>-1:e.config.subheader.display},on:{change:function(t){var a=e.config.subheader.display,i=t.target,s=!!i.checked;if(Array.isArray(a)){var l="true",o=e._i(a,l);i.checked?o<0&&e.$set(e.config.subheader,"display",a.concat([l])):o>-1&&e.$set(e.config.subheader,"display",a.slice(0,o).concat(a.slice(o+1)))}else e.$set(e.config.subheader,"display",s)}}}),a("span")])]),a("div",{staticClass:"form-text text-muted"},[e._v("Display subheader")])])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-lg-3 col-form-label"},[e._v(" Fixed Subheader: ")]),a("div",{staticClass:"col-lg-9 col-xl-4"},[a("span",{staticClass:"switch switch-icon"},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.config.subheader.fixed,expression:"config.subheader.fixed"}],attrs:{type:"checkbox",value:"true",checked:""},domProps:{checked:Array.isArray(e.config.subheader.fixed)?e._i(e.config.subheader.fixed,"true")>-1:e.config.subheader.fixed},on:{change:function(t){var a=e.config.subheader.fixed,i=t.target,s=!!i.checked;if(Array.isArray(a)){var l="true",o=e._i(a,l);i.checked?o<0&&e.$set(e.config.subheader,"fixed",a.concat([l])):o>-1&&e.$set(e.config.subheader,"fixed",a.slice(0,o).concat(a.slice(o+1)))}else e.$set(e.config.subheader,"fixed",s)}}}),a("span")])]),a("div",{staticClass:"form-text text-muted"},[e._v(" Enable fixed(sticky) subheader. Requires "),a("code",[e._v("Solid")]),e._v(" subheader style. ")])])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-lg-3 col-form-label"},[e._v("Width:")]),a("div",{staticClass:"col-lg-9 col-xl-4"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.config.subheader.width,expression:"config.subheader.width"}],staticClass:"form-control",on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.config.subheader,"width",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"fluid",selected:""}},[e._v("Fluid")]),a("option",{attrs:{value:"fixed"}},[e._v("Fixed")])]),a("div",{staticClass:"form-text text-muted"},[e._v(" Select layout width type. ")])])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-lg-3 col-form-label"},[e._v("Subheader Style:")]),a("div",{staticClass:"col-lg-9 col-xl-4"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.config.subheader.style,expression:"config.subheader.style"}],staticClass:"form-control",on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.config.subheader,"style",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"transparent"}},[e._v("Transparent")]),a("option",{attrs:{value:"solid",selected:""}},[e._v("Solid")])]),a("div",{staticClass:"form-text text-muted"},[e._v(" Select subheader style ")])])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-lg-3 col-form-label"},[e._v("Subheader Layout:")]),a("div",{staticClass:"col-lg-9 col-xl-4"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.config.subheader.layout,expression:"config.subheader.layout"}],staticClass:"form-control",on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.config.subheader,"layout",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"subheader-v1",selected:""}},[e._v(" Subheader v1 ")])]),a("div",{staticClass:"form-text text-muted"},[e._v(" Select subheader layout ")])])])]),a("b-tab",[a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-lg-3 col-form-label"},[e._v("Width:")]),a("div",{staticClass:"col-lg-9 col-xl-4"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.config.content.width,expression:"config.content.width"}],staticClass:"form-control",on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.config.content,"width",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"fluid"}},[e._v("Fluid")]),a("option",{attrs:{value:"fixed",selected:""}},[e._v("Fixed")])]),a("div",{staticClass:"form-text text-muted"},[e._v(" Select layout width type. ")])])])]),a("b-tab",[a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-lg-3 col-form-label"},[e._v("Display:")]),a("div",{staticClass:"col-lg-9 col-xl-4"},[a("span",{staticClass:"switch switch-icon"},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.config.aside.self.display,expression:"config.aside.self.display"}],attrs:{type:"checkbox",value:"true",checked:""},domProps:{checked:Array.isArray(e.config.aside.self.display)?e._i(e.config.aside.self.display,"true")>-1:e.config.aside.self.display},on:{change:function(t){var a=e.config.aside.self.display,i=t.target,s=!!i.checked;if(Array.isArray(a)){var l="true",o=e._i(a,l);i.checked?o<0&&e.$set(e.config.aside.self,"display",a.concat([l])):o>-1&&e.$set(e.config.aside.self,"display",a.slice(0,o).concat(a.slice(o+1)))}else e.$set(e.config.aside.self,"display",s)}}}),a("span")])]),a("div",{staticClass:"form-text text-muted"},[e._v("Display aside")])])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-lg-3 col-form-label"},[e._v("Fixed:")]),a("div",{staticClass:"col-lg-9 col-xl-4"},[a("span",{staticClass:"switch switch-icon"},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.config.aside.self.fixed,expression:"config.aside.self.fixed"}],attrs:{type:"checkbox",value:"true",checked:""},domProps:{checked:Array.isArray(e.config.aside.self.fixed)?e._i(e.config.aside.self.fixed,"true")>-1:e.config.aside.self.fixed},on:{change:function(t){var a=e.config.aside.self.fixed,i=t.target,s=!!i.checked;if(Array.isArray(a)){var l="true",o=e._i(a,l);i.checked?o<0&&e.$set(e.config.aside.self,"fixed",a.concat([l])):o>-1&&e.$set(e.config.aside.self,"fixed",a.slice(0,o).concat(a.slice(o+1)))}else e.$set(e.config.aside.self,"fixed",s)}}}),a("span")])]),a("div",{staticClass:"form-text text-muted"},[e._v(" Set fixed aside layout ")])])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-lg-3 col-form-label"},[e._v("Minimize:")]),a("div",{staticClass:"col-lg-9 col-xl-4"},[a("span",{staticClass:"switch switch-icon"},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.config.aside.self.minimize.toggle,expression:"config.aside.self.minimize.toggle"}],attrs:{type:"checkbox",value:"true",checked:""},domProps:{checked:Array.isArray(e.config.aside.self.minimize.toggle)?e._i(e.config.aside.self.minimize.toggle,"true")>-1:e.config.aside.self.minimize.toggle},on:{change:function(t){var a=e.config.aside.self.minimize.toggle,i=t.target,s=!!i.checked;if(Array.isArray(a)){var l="true",o=e._i(a,l);i.checked?o<0&&e.$set(e.config.aside.self.minimize,"toggle",a.concat([l])):o>-1&&e.$set(e.config.aside.self.minimize,"toggle",a.slice(0,o).concat(a.slice(o+1)))}else e.$set(e.config.aside.self.minimize,"toggle",s)}}}),a("span")])]),a("div",{staticClass:"form-text text-muted"},[e._v(" Allow aside minimizing ")])])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-lg-3 col-form-label"},[e._v(" Default Minimize: ")]),a("div",{staticClass:"col-lg-9 col-xl-4"},[a("span",{staticClass:"switch switch-icon"},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.config.aside.self.minimize.default,expression:"config.aside.self.minimize.default"}],attrs:{type:"checkbox",value:"true"},domProps:{checked:Array.isArray(e.config.aside.self.minimize.default)?e._i(e.config.aside.self.minimize.default,"true")>-1:e.config.aside.self.minimize.default},on:{change:function(t){var a=e.config.aside.self.minimize.default,i=t.target,s=!!i.checked;if(Array.isArray(a)){var l="true",o=e._i(a,l);i.checked?o<0&&e.$set(e.config.aside.self.minimize,"default",a.concat([l])):o>-1&&e.$set(e.config.aside.self.minimize,"default",a.slice(0,o).concat(a.slice(o+1)))}else e.$set(e.config.aside.self.minimize,"default",s)}}}),a("span")])]),a("div",{staticClass:"form-text text-muted"},[e._v(" Set aside minimized by default ")])])])]),a("b-tab",[a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-lg-3 col-form-label"},[e._v("Fixed Footer:")]),a("div",{staticClass:"col-lg-9 col-xl-4"},[a("span",{staticClass:"switch switch-icon"},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.config.footer.fixed,expression:"config.footer.fixed"}],attrs:{type:"checkbox",value:"true"},domProps:{checked:Array.isArray(e.config.footer.fixed)?e._i(e.config.footer.fixed,"true")>-1:e.config.footer.fixed},on:{change:function(t){var a=e.config.footer.fixed,i=t.target,s=!!i.checked;if(Array.isArray(a)){var l="true",o=e._i(a,l);i.checked?o<0&&e.$set(e.config.footer,"fixed",a.concat([l])):o>-1&&e.$set(e.config.footer,"fixed",a.slice(0,o).concat(a.slice(o+1)))}else e.$set(e.config.footer,"fixed",s)}}}),a("span")])]),a("div",{staticClass:"form-text text-muted"},[e._v("Set fixed footer")])])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-lg-3 col-form-label"},[e._v("Width:")]),a("div",{staticClass:"col-lg-9 col-xl-4"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.config.footer.width,expression:"config.footer.width"}],staticClass:"form-control",on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.config.footer,"width",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"fluid",selected:""}},[e._v("Fluid")]),a("option",{attrs:{value:"fixed"}},[e._v("Fixed")])]),a("div",{staticClass:"form-text text-muted"},[e._v(" Select layout width type. ")])])])])],1)],1),a("div",{staticClass:"card-footer"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-3"}),a("div",{staticClass:"col-lg-9"},[e._m(1),e._v("   "),a("button",{staticClass:"btn btn-clean font-weight-bold",on:{click:function(t){return e.reset(t)}}},[a("i",{staticClass:"la la-recycle"}),e._v(" Reset ")])])])])])]),a("div",{staticClass:"card card-custom gutter-b"},[e._m(2),a("div",{staticClass:"card-body"},[a("div",{staticClass:"example mb-10"},[e._m(3),a("div",{staticClass:"example-code"},[a("div",{staticClass:"example-code"},[a("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",value:"Copy code",expression:"'Copy code'",modifiers:{hover:!0,top:!0}}],staticClass:"example-copy"}),a("div",{staticClass:"example-highlight"},[a("highlight-code",{staticClass:"language-json",attrs:{lang:"json"}},[e._v(" "+e._s(e.config)+" ")])],1)])])])])])])},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"alert-text"},[a("p",[e._v(" The layout builder helps to configure the layout with preferred options and preview it in real time. The configured layout options will be saved until you change or reset them. To use the layout builder choose the layout options and click the "),a("code",[e._v("Preview")]),e._v(" button to preview the changes. ")]),a("p",[a("span",{staticClass:"label label-inline label-pill label-info label-rounded mr-2"},[e._v(" INFO: ")]),e._v(" Some pages from the "),a("code",[e._v("html")]),e._v(" version might not exist in the "),a("code",[e._v("vue")]),e._v(". But the CSS styles from "),a("code",[e._v("html")]),e._v(" version already integrated into the "),a("code",[e._v("vue")]),e._v(". All the components from the "),a("code",[e._v("html")]),e._v(" version are static and non-working components. You can copy the component HTML from the "),a("code",[e._v("html")]),e._v(" version, and paste it in the "),a("code",[e._v("vue")]),e._v(" component to get the same style. The actual functionality and implementation need to be done by the customer because every application has its own business requirements. ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("button",{staticClass:"btn btn-primary font-weight-bold",attrs:{type:"submit"}},[a("i",{staticClass:"la la-eye"}),e._v(" Preview ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card-header"},[a("div",{staticClass:"card-title"},[a("h3",{staticClass:"card-label"},[e._v("Generated Config")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v(" Use for layout config in "),a("code",[e._v("/src/core/config/layout.config.json")])])}],l=a("5530"),o=(a("d3b7"),a("159b"),a("e9c4"),a("2f62")),c=a("0bce"),r={name:"builder",components:{},data:function(){return{tabIndex:0}},computed:Object(l["a"])(Object(l["a"])({},Object(o["b"])(["layoutConfig"])),{},{config:function(){return this.layoutConfig()}}),mounted:function(){var e=this;this.setActivePreviousTab(),this.$store.dispatch(c["a"],[{title:"Layout Builder"}]),this.$nextTick((function(){var t=e.$el.querySelectorAll(".hljs");t.forEach((function(e){e.classList.remove("hljs"),e.classList.add("language-".concat(e.classList[1]))}))}))},destroyed:function(){localStorage.removeItem("builderTab")},methods:{reset:function(e){e.preventDefault(),localStorage.removeItem("config"),window.location.reload()},setActivePreviousTab:function(){this.tabIndex=parseInt(localStorage.getItem("builderTab"))||0;for(var e=this.$refs["builder-tab"].querySelectorAll(".nav-link"),t=0;t<e.length;t++)e[t].classList.remove("active");this.$refs["builder-tab"].querySelector('[data-tab="'.concat(this.tabIndex,'"]')).classList.add("active")},setActiveTab:function(e){for(var t=e.target.closest('[role="tablist"]'),a=t.querySelectorAll(".nav-link"),i=0;i<a.length;i++)a[i].classList.remove("active");this.tabIndex=parseInt(e.target.getAttribute("data-tab")),e.target.classList.add("active"),localStorage.setItem("builderTab",this.tabIndex)},submit:function(e){e.preventDefault(),localStorage.setItem("config",JSON.stringify(this.config)),window.location.reload()}}},n=r,d=a("2877"),f=Object(d["a"])(n,i,s,!1,null,null,null);t["default"]=f.exports},e9c4:function(e,t,a){var i=a("23e7"),s=a("da84"),l=a("d066"),o=a("2ba4"),c=a("e330"),r=a("d039"),n=s.Array,d=l("JSON","stringify"),f=c(/./.exec),u=c("".charAt),v=c("".charCodeAt),m=c("".replace),g=c(1..toString),h=/[\uD800-\uDFFF]/g,p=/^[\uD800-\uDBFF]$/,b=/^[\uDC00-\uDFFF]$/,y=function(e,t,a){var i=u(a,t-1),s=u(a,t+1);return f(p,e)&&!f(b,s)||f(b,e)&&!f(p,i)?"\\u"+g(v(e,0),16):e},x=r((function(){return'"\\udf06\\ud834"'!==d("\udf06\ud834")||'"\\udead"'!==d("\udead")}));d&&i({target:"JSON",stat:!0,forced:x},{stringify:function(e,t,a){for(var i=0,s=arguments.length,l=n(s);i<s;i++)l[i]=arguments[i];var c=o(d,null,l);return"string"==typeof c?m(c,h,y):c}})}}]);
//# sourceMappingURL=chunk-11696c51.3c159212.js.map