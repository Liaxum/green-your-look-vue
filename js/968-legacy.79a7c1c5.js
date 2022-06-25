(self["webpackChunkgreen_your_look_vue"]=self["webpackChunkgreen_your_look_vue"]||[]).push([[968],{1968:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return ne}});var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-container",{staticClass:"mb-5"},[i("h1",[e._v(e._s(e.style)+" "+e._s(e.type))]),i("h4",[e._v(" Découvrez notre sélection de looks "+e._s(e.style)+" pour "+e._s(e.type)+". Des tenues complètes de vêtements éco-responsables. ")]),i("look-card")],1)},s=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-row",{attrs:{align:"center"}},e._l(e.looks,(function(t,s){return n("v-col",{key:s,attrs:{cols:"12",md:"3",sm:"6",xs:"12"}},[n("v-card",{attrs:{"max-width":"220"},on:{click:function(t){t.stopPropagation(),e.dialog=!0}}},[n("v-img",{attrs:{alt:"look",src:i(7173)("./"+e.img)}}),n("v-card-title",{staticStyle:{"font-family":"'Josefin Sans', sans-serif","font-weight":"400"}},[e._v(" "+e._s(t.name)+" "),n("v-spacer"),e._v(" "),n("span",[e._v(e._s(t.price))])],1),n("v-divider"),n("v-item-group",{staticStyle:{display:"flex","justify-content":"center"}},e._l(t.label,(function(e,t){return n("v-item",{key:t,staticClass:"mx-2 my-4"},[n("v-img",{attrs:{src:i(6003)("./"+e+".png"),alt:"bio","max-width":"30"}})],1)})),1)],1),n("v-dialog",{attrs:{"max-width":"1000","hide-overlay":"","retain-focus":!1,persistent:""},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",{staticStyle:{"font-family":"'Josefin Sans', sans-serif","font-weight":"400"},attrs:{"max-width":"1000"}},[n("v-card-actions",[n("v-card-title",[e._v(" Look ")]),e._v(" "),n("v-spacer"),n("v-btn",{attrs:{color:"primary",icon:"",fab:""},on:{click:function(t){e.dialog=!1}}},[n("v-icon",[e._v("mdi-close")])],1)],1),n("v-row",[n("v-col",{attrs:{cols:"12",md:"4",sm:"12",xs:"12"}},[n("v-img",{staticStyle:{margin:"0 30px 30px 30px"},attrs:{"max-width":"400px",src:i(7173)("./"+e.img),alt:"look"}})],1),n("v-col",{attrs:{cols:"12",md:"7",sm:"12",xs:"12"}},[n("item-card",{attrs:{img:e.img,look:t}}),e._v(" "),n("v-spacer")],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{staticStyle:{margin:"20px 10px 20px 0"},attrs:{large:"",outlined:"",color:"primary"}},[e._v(" Ajouter aux favoris ")]),n("v-btn",{staticStyle:{margin:"20px 10px 20px 0"},attrs:{large:"",outlined:"",color:"primary"}},[e._v(" Ajouter au panier ")])],1)],1)],1)],1)})),1)],1)},a=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-expansion-panels",e._l(e.look.items,(function(t,s){return n("v-expansion-panel",{key:s,staticClass:"mb-2"},[n("v-expansion-panel-header",[e._v(" "+e._s(t.name)+" ")]),n("v-expansion-panel-content",[n("v-card",{attrs:{elevation:"0"}},[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"4"}},[n("v-img",{attrs:{src:i(8185)("./"+t.img+".png"),alt:"look"}})],1),n("v-col",{attrs:{cols:"12",sm:"8"}},[n("v-card-text",{staticStyle:{display:"flex","justify-content":"center","align-items":"center"}},[e._l(e.look.label,(function(e,t){return n("div",{key:t},[n("v-img",{staticClass:"mr-5",attrs:{src:i(6003)("./"+e+".png"),alt:"bio","max-width":"30"}})],1)})),n("div",{staticStyle:{"font-size":"18px","margin-left":"auto"}},[e._v(" "+e._s(t.price)+" ")])],2),n("v-card-text",[n("v-chip-group",{attrs:{"active-class":"primary accent-4 white--text",column:""},model:{value:e.selection,callback:function(t){e.selection=t},expression:"selection"}},[n("v-chip",[e._v("XS")]),n("v-chip",[e._v("S")]),n("v-chip",[e._v("M")]),n("v-chip",[e._v("L")]),n("v-chip",[e._v("XL")]),n("v-chip",[e._v("XXL")])],1)],1)],1)],1)],1)],1)],1)})),1)},l=[],c={name:"ItemCard",data(){return{selection:1}},props:{img:{required:!0,type:String},look:{required:!0,type:Object}}},p=c,u=i(1001),m=i(3453),h=i.n(m),g=i(5893),d=i(5255),v=i(5126),f=i(307),x=i(5836),b=i(5530),y=(0,b.Z)(f.Wk,x.Z).extend({name:"v-chip-group",provide(){return{chipGroup:this}},props:{column:Boolean},computed:{classes(){return{...f.Wk.options.computed.classes.call(this),"v-chip-group":!0,"v-chip-group--column":this.column}}},watch:{column(e){e&&(this.scrollOffset=0),this.$nextTick(this.onResize)}},methods:{genData(){return this.setTextColor(this.color,{...f.Wk.options.methods.genData.call(this)})}}}),k=i(7024),C=i(1302),_=i(950),w=i(8131),Z=(0,b.Z)((0,C.d)("expansionPanels","v-expansion-panel","v-expansion-panels"),(0,_.J)("expansionPanel",!0)).extend({name:"v-expansion-panel",props:{disabled:Boolean,readonly:Boolean},data(){return{content:null,header:null,nextIsActive:!1}},computed:{classes(){return{"v-expansion-panel--active":this.isActive,"v-expansion-panel--next-active":this.nextIsActive,"v-expansion-panel--disabled":this.isDisabled,...this.groupClasses}},isDisabled(){return this.expansionPanels.disabled||this.disabled},isReadonly(){return this.expansionPanels.readonly||this.readonly}},methods:{registerContent(e){this.content=e},unregisterContent(){this.content=null},registerHeader(e){this.header=e,e.$on("click",this.onClick)},unregisterHeader(){this.header=null},onClick(e){e.detail&&this.header.$el.blur(),this.$emit("click",e),this.isReadonly||this.isDisabled||this.toggle()},toggle(){this.$nextTick((()=>this.$emit("change")))}},render(e){return e("div",{staticClass:"v-expansion-panel",class:this.classes,attrs:{"aria-expanded":String(this.isActive)}},(0,w.z9)(this))}}),$=i(6930),A=i(6986);const L=(0,b.Z)(A.Z,x.Z,(0,_.f)("expansionPanel","v-expansion-panel-content","v-expansion-panel"));var B=L.extend().extend({name:"v-expansion-panel-content",data:()=>({isActive:!1}),computed:{parentIsActive(){return this.expansionPanel.isActive}},watch:{parentIsActive:{immediate:!0,handler(e,t){e&&(this.isBooted=!0),null==t?this.isActive=e:this.$nextTick((()=>this.isActive=e))}}},created(){this.expansionPanel.registerContent(this)},beforeDestroy(){this.expansionPanel.unregisterContent()},render(e){return e($.Fx,this.showLazyContent((()=>[e("div",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-content",directives:[{name:"show",value:this.isActive}]}),[e("div",{class:"v-expansion-panel-content__wrap"},(0,w.z9)(this))])])))}}),V=i(9524),S=i(4749);const P=(0,b.Z)(x.Z,(0,_.f)("expansionPanel","v-expansion-panel-header","v-expansion-panel"));var D=P.extend().extend({name:"v-expansion-panel-header",directives:{ripple:S.Z},props:{disableIconRotate:Boolean,expandIcon:{type:String,default:"$expand"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1}},data:()=>({hasMousedown:!1}),computed:{classes(){return{"v-expansion-panel-header--active":this.isActive,"v-expansion-panel-header--mousedown":this.hasMousedown}},isActive(){return this.expansionPanel.isActive},isDisabled(){return this.expansionPanel.isDisabled},isReadonly(){return this.expansionPanel.isReadonly}},created(){this.expansionPanel.registerHeader(this)},beforeDestroy(){this.expansionPanel.unregisterHeader()},methods:{onClick(e){this.$emit("click",e)},genIcon(){const e=(0,w.z9)(this,"actions")||[this.$createElement(V.Z,this.expandIcon)];return this.$createElement($.Z5,[this.$createElement("div",{staticClass:"v-expansion-panel-header__icon",class:{"v-expansion-panel-header__icon--disable-rotate":this.disableIconRotate},directives:[{name:"show",value:!this.isDisabled}]},e)])}},render(e){return e("button",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-header",class:this.classes,attrs:{tabindex:this.isDisabled?-1:null,type:"button","aria-expanded":this.isActive},directives:[{name:"ripple",value:this.ripple}],on:{...this.$listeners,click:this.onClick,mousedown:()=>this.hasMousedown=!0,mouseup:()=>this.hasMousedown=!1}}),[(0,w.z9)(this,"default",{open:this.isActive},!0),this.hideActions||this.genIcon()])}}),I=i(7228),j=i(8219),E=I.y.extend({name:"v-expansion-panels",provide(){return{expansionPanels:this}},props:{accordion:Boolean,disabled:Boolean,flat:Boolean,hover:Boolean,focusable:Boolean,inset:Boolean,popout:Boolean,readonly:Boolean,tile:Boolean},computed:{classes(){return{...I.y.options.computed.classes.call(this),"v-expansion-panels":!0,"v-expansion-panels--accordion":this.accordion,"v-expansion-panels--flat":this.flat,"v-expansion-panels--hover":this.hover,"v-expansion-panels--focusable":this.focusable,"v-expansion-panels--inset":this.inset,"v-expansion-panels--popout":this.popout,"v-expansion-panels--tile":this.tile}}},created(){this.$attrs.hasOwnProperty("expand")&&(0,j.fK)("expand","multiple",this),Array.isArray(this.value)&&this.value.length>0&&"boolean"===typeof this.value[0]&&(0,j.fK)(':value="[true, false, true]"',':value="[0, 2]"',this)},methods:{updateItem(e,t){const i=this.getValue(e,t),n=this.getValue(e,t+1);e.isActive=this.toggleMethod(i),e.nextIsActive=this.toggleMethod(n)}}}),T=i(5288),O=i(7894),q=(0,u.Z)(p,r,l,!1,null,null,null),K=q.exports;h()(q,{VCard:g.Z,VCardText:d.ZB,VChip:v.Z,VChipGroup:y,VCol:k.Z,VExpansionPanel:Z,VExpansionPanelContent:B,VExpansionPanelHeader:D,VExpansionPanels:E,VImg:T.Z,VRow:O.Z});var M={name:"LookCard",data(){return{dialog:!1,looks:[{name:"Look 1",img:"",price:"36 €",label:["bio","recycle"],items:[{name:"Kimono coloré",price:"14€",img:"kimono"},{name:"T-shirt gris",price:"5€",img:"tshirt"},{name:"Jean denim",price:"11€",img:"jean"},{name:"Lunettes de soleil",price:"6€",img:"lunettes"}]},{name:"Look 2",img:"",price:"36 €",label:["bio","europe","vegan"],items:[{name:"Kimono coloré",price:"14€",img:"kimono"},{name:"T-shirt gris",price:"5€",img:"tshirt"},{name:"Jean denim",price:"11€",img:"jean"},{name:"Lunettes de soleil",price:"6€",img:"lunettes"}]},{name:"Look 3",img:"",price:"36 €",label:["bio"],items:[{name:"Kimono coloré",price:"14€",img:"kimono"},{name:"T-shirt gris",price:"5€",img:"tshirt"},{name:"Jean denim",price:"11€",img:"jean"},{name:"Lunettes de soleil",price:"6€",img:"lunettes"}]},{name:"Look 4",img:"",price:"36 €",label:["bio","recycle"],items:[{name:"Kimono coloré",price:"14€",img:"kimono"},{name:"T-shirt gris",price:"5€",img:"tshirt"},{name:"Jean denim",price:"11€",img:"jean"},{name:"Lunettes de soleil",price:"6€",img:"lunettes"}]},{name:"Look 5",img:"",price:"36 €",label:["bio","recycle"],items:[{name:"Kimono coloré",price:"14€",img:"kimono"},{name:"T-shirt gris",price:"5€",img:"tshirt"},{name:"Jean denim",price:"11€",img:"jean"},{name:"Lunettes de soleil",price:"6€",img:"lunettes"}]},{name:"Look 6",img:"",price:"36 €",label:["bio","europe","vegan"],items:[{name:"Kimono coloré",price:"14€",img:"kimono"},{name:"T-shirt gris",price:"5€",img:"tshirt"},{name:"Jean denim",price:"11€",img:"jean"},{name:"Lunettes de soleil",price:"6€",img:"lunettes"}]},{name:"Look 7",img:"",price:"36 €",label:["bio"],items:[{name:"Kimono coloré",price:"14€",img:"kimono"},{name:"T-shirt gris",price:"5€",img:"tshirt"},{name:"Jean denim",price:"11€",img:"jean"},{name:"Lunettes de soleil",price:"6€",img:"lunettes"}]},{name:"Look 8",img:"",price:"36 €",label:["bio","recycle"],items:[{name:"Kimono coloré",price:"14€",img:"kimono"},{name:"T-shirt gris",price:"5€",img:"tshirt"},{name:"Jean denim",price:"11€",img:"jean"},{name:"Lunettes de soleil",price:"6€",img:"lunettes"}]}]}},computed:{cat(){return this.$route.params.type.toLowerCase()},sty(){return this.$route.params.style.toLowerCase()},img(){return`${this.cat}/${this.sty}.png`}},components:{ItemCard:K}},J=M,z=i(9787),G=i(6530),R=i(5634),F=i(5596),N=i(4456),U=i(144);const H=U.Z.extend({props:{activeClass:String,value:{required:!1}},data:()=>({isActive:!1}),methods:{toggle(){this.isActive=!this.isActive}},render(){if(!this.$scopedSlots.default)return(0,j.Kd)("v-item is missing a default scopedSlot",this),null;let e;return this.$scopedSlots.default&&(e=this.$scopedSlots.default({active:this.isActive,toggle:this.toggle})),Array.isArray(e)&&1===e.length&&(e=e[0]),e&&!Array.isArray(e)&&e.tag?(e.data=this._b(e.data||{},e.tag,{class:{[this.activeClass]:this.isActive}}),e):((0,j.Kd)("v-item should only contain a single element",this),e)}});var X=(0,b.Z)(H,(0,C.d)("itemGroup","v-item","v-item-group")).extend({name:"v-item"}),W=i(2515),Q=(0,u.Z)(J,o,a,!1,null,"3cfe1c2f",null),Y=Q.exports;h()(Q,{VBtn:z.Z,VCard:g.Z,VCardActions:d.h7,VCardTitle:d.EB,VCol:k.Z,VContainer:G.Z,VDialog:R.Z,VDivider:F.Z,VIcon:N.Z,VImg:T.Z,VItem:X,VItemGroup:I.Z,VRow:O.Z,VSpacer:W.Z});var ee={name:"Looks",data(){return{type:this.$route.params.type,style:this.$route.params.style}},components:{LookCard:Y},watch:{$route(){this.type=this.$route.params.type}}},te=ee,ie=(0,u.Z)(te,n,s,!1,null,null,null),ne=ie.exports;h()(ie,{VContainer:G.Z})},5126:function(e,t,i){"use strict";i.d(t,{Z:function(){return h}});var n=i(5530),s=i(6930),o=i(9524),a=i(5836),r=i(1302),l=i(2066),c=i(4552),p=i(9367),u=i(2412),m=i(8219),h=(0,n.Z)(a.Z,u.Z,p.Z,l.Z,(0,r.d)("chipGroup"),(0,c.d)("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:()=>({proxyClass:"v-chip--active"}),computed:{classes(){return{"v-chip":!0,...p.Z.options.computed.classes.call(this),"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose,...this.themeClasses,...this.sizeableClasses,...this.groupClasses}},hasClose(){return Boolean(this.close)},isClickable(){return Boolean(p.Z.options.computed.isClickable.call(this)||this.chipGroup)}},created(){const e=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];e.forEach((([e,t])=>{this.$attrs.hasOwnProperty(e)&&(0,m.fK)(e,t,this)}))},methods:{click(e){this.$emit("click",e),this.chipGroup&&this.toggle()},genFilter(){const e=[];return this.isActive&&e.push(this.$createElement(o.Z,{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(s.Zq,e)},genClose(){return this.$createElement(o.Z,{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:e=>{e.stopPropagation(),e.preventDefault(),this.$emit("click:close"),this.$emit("update:active",!1)}}},this.closeIcon)},genContent(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render(e){const t=[this.genContent()];let{tag:i,data:n}=this.generateRouteLink();n.attrs={...n.attrs,draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:n.attrs.tabindex},n.directives.push({name:"show",value:this.active}),n=this.setBackgroundColor(this.color,n);const s=this.textColor||this.outlined&&this.color;return e(i,this.setTextColor(s,n),t)}})},8185:function(e,t,i){var n={"./basique.png":3398,"./boheme.png":2979,"./casual.png":6068,"./chic.png":642,"./feminin.png":5896,"./gothique.png":4147,"./jean.png":3102,"./kimono.png":4130,"./lunettes.png":8963,"./streetwear.png":4299,"./tshirt.png":3321,"./vintage.png":173};function s(e){var t=o(e);return i(t)}function o(e){if(!i.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=o,e.exports=s,s.id=8185},6003:function(e,t,i){var n={"./bio.png":5853,"./europe.png":9079,"./recycle.png":7864,"./vegan.png":8380};function s(e){var t=o(e);return i(t)}function o(e){if(!i.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=o,e.exports=s,s.id=6003},7173:function(e,t,i){var n={"./MyDigitalProject Logo.png":1607,"./blog/conseils.png":1749,"./blog/ecolo.png":7732,"./blog/ethique.png":4968,"./blog/femme-automne.png":3698,"./blog/look-ete.png":8519,"./blog/matieres.png":605,"./femmes/basique.png":3398,"./femmes/boheme.png":2979,"./femmes/casual.png":6068,"./femmes/chic.png":642,"./femmes/feminin.png":5896,"./femmes/gothique.png":4147,"./femmes/jean.png":3102,"./femmes/kimono.png":4130,"./femmes/lunettes.png":8963,"./femmes/streetwear.png":4299,"./femmes/tshirt.png":3321,"./femmes/vintage.png":173,"./hommes/basique.png":2548,"./hommes/boheme.png":4026,"./hommes/casual.png":7576,"./hommes/chic.png":9997,"./hommes/gothique.png":6027,"./hommes/masculin.png":2510,"./hommes/streetwear.png":8146,"./hommes/vintage.png":7819,"./icons/bio.png":5853,"./icons/europe.png":9079,"./icons/recycle.png":7864,"./icons/vegan.png":8380,"./logo/carre.png":7108,"./logo/carre2.png":7696,"./logo/complet.png":8577,"./logo/texte.png":8749};function s(e){var t=o(e);return i(t)}function o(e){if(!i.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=o,e.exports=s,s.id=7173},1607:function(e,t,i){"use strict";e.exports=i.p+"img/MyDigitalProject Logo.316764fa.png"},1749:function(e,t,i){"use strict";e.exports=i.p+"img/conseils.6a714f03.png"},7732:function(e,t,i){"use strict";e.exports=i.p+"img/ecolo.11e56134.png"},4968:function(e,t,i){"use strict";e.exports=i.p+"img/ethique.7686fac0.png"},3698:function(e,t,i){"use strict";e.exports=i.p+"img/femme-automne.ae26ad20.png"},8519:function(e,t,i){"use strict";e.exports=i.p+"img/look-ete.63ce559b.png"},605:function(e,t,i){"use strict";e.exports=i.p+"img/matieres.d5b373d5.png"},3398:function(e,t,i){"use strict";e.exports=i.p+"img/basique.556e7239.png"},2979:function(e,t,i){"use strict";e.exports=i.p+"img/boheme.4ffd9668.png"},6068:function(e,t,i){"use strict";e.exports=i.p+"img/casual.00086a3f.png"},642:function(e,t,i){"use strict";e.exports=i.p+"img/chic.12d67db3.png"},5896:function(e,t,i){"use strict";e.exports=i.p+"img/feminin.6159f3af.png"},4147:function(e,t,i){"use strict";e.exports=i.p+"img/gothique.aa9ffcf5.png"},3102:function(e,t,i){"use strict";e.exports=i.p+"img/jean.17543a26.png"},4130:function(e,t,i){"use strict";e.exports=i.p+"img/kimono.6fe161cc.png"},8963:function(e,t,i){"use strict";e.exports=i.p+"img/lunettes.1eef9763.png"},4299:function(e,t,i){"use strict";e.exports=i.p+"img/streetwear.aaa28301.png"},3321:function(e,t,i){"use strict";e.exports=i.p+"img/tshirt.a278ef0c.png"},173:function(e,t,i){"use strict";e.exports=i.p+"img/vintage.6e01c0d5.png"},2548:function(e,t,i){"use strict";e.exports=i.p+"img/basique.7515eb0a.png"},4026:function(e,t,i){"use strict";e.exports=i.p+"img/boheme.7324ef66.png"},7576:function(e,t,i){"use strict";e.exports=i.p+"img/casual.294b5a9d.png"},9997:function(e,t,i){"use strict";e.exports=i.p+"img/chic.ddf3b856.png"},6027:function(e,t,i){"use strict";e.exports=i.p+"img/gothique.e15ff15a.png"},2510:function(e,t,i){"use strict";e.exports=i.p+"img/masculin.d584427d.png"},8146:function(e,t,i){"use strict";e.exports=i.p+"img/streetwear.bf4a9d60.png"},7819:function(e,t,i){"use strict";e.exports=i.p+"img/vintage.faecc7eb.png"},5853:function(e,t,i){"use strict";e.exports=i.p+"img/bio.c7d87564.png"},9079:function(e,t,i){"use strict";e.exports=i.p+"img/europe.55c83220.png"},7864:function(e,t,i){"use strict";e.exports=i.p+"img/recycle.7db5f790.png"},8380:function(e,t,i){"use strict";e.exports=i.p+"img/vegan.ead761c4.png"},7108:function(e,t,i){"use strict";e.exports=i.p+"img/carre.3c8d2666.png"},7696:function(e,t,i){"use strict";e.exports=i.p+"img/carre2.9a3754f5.png"}}]);
//# sourceMappingURL=968-legacy.79a7c1c5.js.map