"use strict";(self["webpackChunkgreen_your_look_vue"]=self["webpackChunkgreen_your_look_vue"]||[]).push([[420],{2420:function(t,e,s){s.r(e),s.d(e,{default:function(){return v}});var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{staticStyle:{"margin-bottom":"100px"}},[s("v-breadcrumbs",{staticStyle:{"margin-top":"20px"},attrs:{items:t.items},scopedSlots:t._u([{key:"divider",fn:function(){return[s("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])}),s("h1",{staticStyle:{margin:"30px 0"}},[s("span",[t._v("|")]),t._v(" Mes commandes en cours")]),s("v-simple-table",{staticStyle:{"margin-bottom":"80px"}},[[s("thead",{staticStyle:{"background-color":"#6b2737"}},[s("tr",[s("th",{staticStyle:{color:"white","font-size":"16px","font-weight":"500",padding:"20px"}},[t._v(" Statut ")]),s("th",{staticStyle:{color:"white","font-size":"16px","font-weight":"500"}},[t._v(" Date ")]),s("th",{staticStyle:{color:"white","font-size":"16px","font-weight":"500"}},[t._v(" Look ")]),s("th",{staticStyle:{color:"white","font-size":"16px","font-weight":"500"}},[t._v(" Articles ")]),s("th",{staticStyle:{color:"white","font-size":"16px","font-weight":"500"}},[t._v(" Prix ")])])]),s("tbody",t._l(t.commandes,(function(e){return s("tr",{key:e.id},[s("td",[t._v(t._s(e.statut))]),s("td",[t._v(t._s(e.date))]),s("td",[t._v(t._s(e.look))]),s("td",[t._v(t._s(e.articles))]),s("td",[t._v(t._s(e.prix))])])})),0)]],2),s("h1",{staticStyle:{margin:"30px 0"}},[s("span",[t._v("|")]),t._v(" Mes anciennes commandes")]),s("v-simple-table",[[s("thead",{staticStyle:{"background-color":"#6b2737"}},[s("tr",[s("th",{staticStyle:{color:"white","font-size":"16px","font-weight":"500",padding:"20px"}},[t._v(" Date ")]),s("th",{staticStyle:{color:"white","font-size":"16px","font-weight":"500"}},[t._v(" Look ")]),s("th",{staticStyle:{color:"white","font-size":"16px","font-weight":"500"}},[t._v(" Articles ")]),s("th",{staticStyle:{color:"white","font-size":"16px","font-weight":"500"}},[t._v(" Prix ")])])]),s("tbody",t._l(t.historiques,(function(e){return s("tr",{key:e.id},[s("td",[t._v(t._s(e.date))]),s("td",[t._v(t._s(e.look))]),s("td",[t._v(t._s(e.articles))]),s("td",[t._v(t._s(e.prix))])])})),0)]],2)],1)},a=[],r={data(){return{items:[{text:"Home",disabled:!1,href:"/"},{text:"Mes commandes",disabled:!0,href:"Compte"}],commandes:[{id:1,statut:"En préparation",date:"06/2022",look:"Look Été",articles:"T-shirt manches courtes - Short boutonné en jean - Sandales plates sable",prix:"58 €"},{id:2,statut:"En préparation",date:"06/2022",look:"Ensemble plage",articles:"Blouse courte à nouer - Jupe longue fendue",prix:"66,90 €"}],historiques:[{id:1,date:"11/2020",look:"Look Casual Hiver",articles:"Manteau à carreaux - Écharpe noire - Bonnet noir",prix:"98,99 €"}]}}},o=r,n=s(1001),l=s(3453),d=s.n(l),c=s(9634),h=s(6530),u=s(4456),p=s(936),m=(0,n.Z)(o,i,a,!1,null,"304a5c18",null),v=m.exports;d()(m,{VBreadcrumbs:c.Z,VContainer:h.Z,VIcon:u.Z,VSimpleTable:p.Z})},9634:function(t,e,s){s.d(e,{Z:function(){return d}});var i=s(9367),a=s(5530),r=(0,a.Z)(i.Z).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes(){return{"v-breadcrumbs__item":!0,[this.activeClass]:this.disabled}}},render(t){const{tag:e,data:s}=this.generateRouteLink();return t("li",[t(e,{...s,attrs:{...s.attrs,"aria-current":this.isActive&&this.isLink?"page":void 0}},this.$slots.default)])}}),o=s(8131),n=(0,o.Ji)("v-breadcrumbs__divider","li"),l=s(2066),d=(0,a.Z)(l.Z).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:()=>[]},large:Boolean},computed:{classes(){return{"v-breadcrumbs--large":this.large,...this.themeClasses}}},methods:{genDivider(){return this.$createElement(n,this.$slots.divider?this.$slots.divider:this.divider)},genItems(){const t=[],e=!!this.$scopedSlots.item,s=[];for(let i=0;i<this.items.length;i++){const a=this.items[i];s.push(a.text),e?t.push(this.$scopedSlots.item({item:a})):t.push(this.$createElement(r,{key:s.join("."),props:a},[a.text])),i<this.items.length-1&&t.push(this.genDivider())}return t}},render(t){const e=this.$slots.default||this.genItems();return t("ul",{staticClass:"v-breadcrumbs",class:this.classes},e)}})},936:function(t,e,s){s.d(e,{Z:function(){return o}});var i=s(8131),a=s(2066),r=s(5530),o=(0,r.Z)(a.Z).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes(){return{"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom,...this.themeClasses}}},methods:{genWrapper(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:(0,i.kb)(this.height)}},[this.$createElement("table",this.$slots.default)])}},render(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})}}]);
//# sourceMappingURL=420-legacy.4950819f.js.map