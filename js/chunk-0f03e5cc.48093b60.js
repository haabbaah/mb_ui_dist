(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0f03e5cc"],{e6be:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={data:function(){return{}},methods:{saveAction:function(t,e){var n=this,r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=this[t],s=this[e];r?(this[t]="done",this[e]="positive"):(this[t]="report_problem",this[e]="red"),setTimeout((function(){n[t]=o,n[e]=s}),2e3)}}}},ec29:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"html-to-txt"},[t.folderName?n("div",[n("q-btn",{staticClass:"full-width",attrs:{color:t.btnColorConvert,label:"Конвертировать HTML в TXT","icon-right":t.btnIconConvert,loading:t.isProcess,disable:t.isProcess},on:{click:t.convert},scopedSlots:t._u([{key:"loading",fn:function(){return[n("q-spinner-tail",{attrs:{size:"sm"}})]},proxy:!0}],null,!1,1364290725)})],1):n("div",[n("h6",{staticClass:"no-file"},[t._v("Файл не выбран")])])])},o=[],s=(n("d3b7"),n("96cf"),n("1da1")),i=n("5530"),c=n("2f62"),a=n("e6be"),l={name:"HTMLtoTXT",mixins:[a["a"]],data:function(){return{btnColorConvert:"primary",btnIconConvert:"settings_ethernet",isProcess:!1}},computed:Object(i["a"])(Object(i["a"])({},Object(c["c"])({baseURL:function(t){return t.baseURL},folderName:function(t){return t.folderName}})),{},{redirectAfterFiles:{get:function(){return this.$store.state.redirectAfterFiles},set:function(t){this.$store.commit("setRedirectAfterFiles",t)}}}),watch:{},methods:{convert:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isProcess=!0,e.prev=1,e.next=4,fetch(t.baseURL+"create_txt",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify({folderName:t.folderName})});case 4:return n=e.sent,e.next=7,n.json();case 7:r=e.sent,""!==r.error?(t.saveAction("btnIconConvert","btnColorConvert",!1),console.error(r.error)):t.saveAction("btnIconConvert","btnColorConvert"),e.next=15;break;case 11:e.prev=11,e.t0=e["catch"](1),t.saveAction("btnIconConvert","btnColorConvert",!1),console.error(e.t0);case 15:t.isProcess=!1;case 16:case"end":return e.stop()}}),e,null,[[1,11]])})))()}},mounted:function(){this.redirectAfterFiles="/htmltotext"},created:function(){}},u=l,f=n("2877"),d=Object(f["a"])(u,r,o,!1,null,"03627c7e",null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-0f03e5cc.48093b60.js.map