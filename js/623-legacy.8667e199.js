(self["webpackChunkgreen_your_look_vue"]=self["webpackChunkgreen_your_look_vue"]||[]).push([[623],{6623:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return O}});var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{width:"100%"}},[i("v-banner",{staticClass:"text-center",attrs:{color:"primary","max-height":"150"}},[t._v(" Chez Green Your Look, nous mettons en avant des marques respectueuses de l'environnement ")]),i("v-carousel",{staticClass:"carousel",attrs:{cycle:"",interval:"3000","show-arrows-on-hover":"","hide-delimiters":""}},[t._l(t.slider,(function(e,r){return[(r+1)%t.columns===1||1===t.columns?i("v-carousel-item",{key:r,staticStyle:{position:"relative"}},[i("v-row",{staticClass:"flex-nowrap",staticStyle:{height:"100%"}},[t._l(t.columns,(function(e,n){return[+r+n<t.slider.length?[i("v-col",{key:n},[+r+n<t.slider.length?i("v-row",{staticClass:"fill-height",attrs:{height:"100%",align:"center",justify:"center"}},[i("v-img",{staticStyle:{width:"10px",height:"120%"},attrs:{src:s(2715)("./"+t.slider[+r+n]+".png")}})],1):t._e()],1)]:t._e()]}))],2),i("div",{staticStyle:{position:"absolute",bottom:"0",left:"0",right:"0"}},[i("v-img",{staticStyle:{display:"block",margin:"auto","margin-bottom":"15px"},attrs:{src:s(7108),"max-width":"150"}}),i("v-banner",{staticClass:"text-center",attrs:{color:"primary"}},[t._v(" Découvrez des looks stylés et éco-responsables")])],1)],1):t._e()]}))],2),i("div",{staticStyle:{margin:"50px 0 100px 0"}},[i("h1",[t._v("NOUVEAUTÉS")]),i("h4",[t._v("Découvrez les dernières nouveautés Green Your Look !")]),i("v-row",{staticClass:"center",attrs:{align:"center"}},[i("v-col",{staticClass:"center",attrs:{cols:"12",md:"3",sm:"12"}},[i("v-card",{attrs:{"max-width":"300"}},[i("v-img",{attrs:{src:s(5896)}}),i("v-card-title",{staticClass:"center"},[t._v("LOOK ÉTÉ")])],1)],1),i("v-col",{staticClass:"center",attrs:{cols:"12",md:"3",sm:"12"}},[i("v-card",{attrs:{"max-width":"300"}},[i("v-img",{attrs:{src:s(4026)}}),i("v-card-title",{staticClass:"center"},[t._v("BOHÈME")])],1)],1),i("v-col",{staticClass:"center",attrs:{cols:"12",md:"3",sm:"12"}},[i("v-card",{attrs:{"max-width":"300"}},[i("v-img",{attrs:{src:s(173)}}),i("v-card-title",{staticClass:"center"},[t._v("VINTAGE")])],1)],1)],1)],1),i("div",{staticStyle:{padding:"50px 0","background-color":"#f8f0df"}},[i("h1",[t._v("NOS VALEURS")]),i("h4",[t._v("Découvrez nos valeurs et nos critères de sélection des articles")]),i("v-row",{staticClass:"center my-5",attrs:{align:"center"}},[i("v-col",{staticClass:"center",attrs:{cols:"4",md:"1",sm:"2"}},[i("v-img",{attrs:{"max-width":"70",src:s(8380)}})],1),i("v-col",{staticClass:"center",attrs:{cols:"4",md:"1",sm:"2"}},[i("v-img",{attrs:{"max-width":"70",src:s(7864)}})],1),i("v-col",{staticClass:"center",attrs:{cols:"4",md:"1",sm:"2"}},[i("v-img",{attrs:{"max-width":"70",src:s(5853)}})],1),i("v-col",{staticClass:"center",attrs:{cols:"4",md:"1",sm:"2"}},[i("v-img",{attrs:{"max-width":"70",src:s(9079)}})],1)],1),i("div",{staticClass:"text-center",staticStyle:{margin:"30px 0"}},[i("v-btn",{attrs:{color:"primary",to:"/Identite"}},[t._v("Découvrir Green Your Look")])],1)],1),i("div",{staticStyle:{margin:"100px 0"}},[i("h1",[t._v("INSCRIPTION NEWSLETTER")]),i("h4",[t._v(" Inscrivez-vous à notre newsletter pour être au courant des nouveautés et des promos ! ")]),i("v-row",{staticClass:"my-5",attrs:{justify:"center","no-gutters":""}},[i("v-col",{attrs:{cols:"6",lg:"3",sm:"4"}},[i("v-text-field",{attrs:{label:"Adresse email",dense:"",filled:"",color:"primary"}})],1),i("v-col",{attrs:{cols:"6",lg:"1",sm:"2"}},[i("v-btn",{staticStyle:{"margin-left":"10px",height:"53px"},attrs:{color:"primary",small:"",outlined:"",elevation:"8"}},[t._v("S'inscrire")])],1)],1),t._m(0)],1)],1)},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v(" En renseignant votre adresse email, vous acceptez de recevoir nos offres commerciales par courrier électronique et vous prenez connaissance de notre "),s("a",{attrs:{href:""}},[t._v("politique de confidentialité")]),t._v(". "),s("br"),t._v(" Vous pouvez vous désinscrire à tout moment à l'aide des liens de désinscription ou en nous contactant à l'adresse greenyourlook@gmail.com. ")])}],n={name:"Home",components:{},data(){return{slider:["femmes/basique","hommes/casual","femmes/boheme","hommes/chic","femmes/chic","hommes/streetwear","femmes/gothique","hommes/vintage"]}},computed:{columns(){return this.$vuetify.breakpoint.lg?4:this.$vuetify.breakpoint.md||this.$vuetify.breakpoint.sm?2:1}}},o=n,a=s(1001),c=s(3453),l=s.n(c),m=s(9744),u=s(3008),h=s(9524),p=s(6930),g=s(9989),d=s(4552),v=s(5530),f=s(8131),y=(0,v.Z)(m.Z,g.Z,d.Z).extend({name:"v-banner",inheritAttrs:!1,props:{app:Boolean,icon:String,iconColor:String,singleLine:Boolean,sticky:Boolean,value:{type:Boolean,default:!0}},computed:{classes(){return{...m.Z.options.computed.classes.call(this),"v-banner--has-icon":this.hasIcon,"v-banner--is-mobile":this.isMobile,"v-banner--single-line":this.singleLine,"v-banner--sticky":this.isSticky}},hasIcon(){return Boolean(this.icon||this.$slots.icon)},isSticky(){return this.sticky||this.app},styles(){const t={...m.Z.options.computed.styles.call(this)};if(this.isSticky){const e=this.app?this.$vuetify.application.bar+this.$vuetify.application.top:0;t.top=(0,f.kb)(e),t.position="sticky",t.zIndex=1}return t}},methods:{toggle(){this.isActive=!this.isActive},iconClick(t){this.$emit("click:icon",t)},genIcon(){if(!this.hasIcon)return;let t;return t=this.icon?this.$createElement(h.Z,{props:{color:this.iconColor,size:28}},[this.icon]):this.$slots.icon,this.$createElement(u.Z,{staticClass:"v-banner__icon",props:{color:this.color,size:40},on:{click:this.iconClick}},[t])},genText(){return this.$createElement("div",{staticClass:"v-banner__text"},this.$slots.default)},genActions(){const t=(0,f.z9)(this,"actions",{dismiss:()=>this.isActive=!1});if(t)return this.$createElement("div",{staticClass:"v-banner__actions"},t)},genContent(){return this.$createElement("div",{staticClass:"v-banner__content"},[this.genIcon(),this.genText()])},genWrapper(){return this.$createElement("div",{staticClass:"v-banner__wrapper"},[this.genContent(),this.genActions()])}},render(t){const e={staticClass:"v-banner",attrs:this.attrs$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};return t(p.Fx,[t("div",this.outlined?e:this.setBackgroundColor(this.color,e),[this.genWrapper()])])}}),b=s(9787),x=s(5893),_=s(5255),C=s(3269),w=s(8205),k=s(5204),$=s(7228),T=$.y.extend({name:"button-group",provide(){return{btnToggle:this}},computed:{classes(){return $.y.options.computed.classes.call(this)}},methods:{genData:$.y.options.methods.genData}}),S=s(8219),E=C.Z.extend({name:"v-carousel",props:{continuous:{type:Boolean,default:!0},cycle:Boolean,delimiterIcon:{type:String,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:t=>t>0},mandatory:{type:Boolean,default:!0},progress:Boolean,progressColor:String,showArrows:{type:Boolean,default:!0},verticalDelimiters:{type:String,default:void 0}},provide(){return{parentTheme:this.theme}},data(){return{internalHeight:this.height,slideTimeout:void 0}},computed:{classes(){return{...C.Z.options.computed.classes.call(this),"v-carousel":!0,"v-carousel--hide-delimiter-background":this.hideDelimiterBackground,"v-carousel--vertical-delimiters":this.isVertical}},isDark(){return this.dark||!this.light},isVertical(){return null!=this.verticalDelimiters}},watch:{internalValue:"restartTimeout",interval:"restartTimeout",height(t,e){t!==e&&t&&(this.internalHeight=t)},cycle(t){t?this.restartTimeout():(clearTimeout(this.slideTimeout),this.slideTimeout=void 0)}},created(){this.$attrs.hasOwnProperty("hide-controls")&&(0,S.fK)("hide-controls",':show-arrows="false"',this)},mounted(){this.startTimeout()},methods:{genControlIcons(){return this.isVertical?null:C.Z.options.methods.genControlIcons.call(this)},genDelimiters(){return this.$createElement("div",{staticClass:"v-carousel__controls",style:{left:"left"===this.verticalDelimiters&&this.isVertical?0:"auto",right:"right"===this.verticalDelimiters?0:"auto"}},[this.genItems()])},genItems(){const t=this.items.length,e=[];for(let s=0;s<t;s++){const i=this.$createElement(w.Z,{staticClass:"v-carousel__controls__item",attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.ariaLabel.delimiter",s+1,t)},props:{icon:!0,small:!0,value:this.getValue(this.items[s],s)}},[this.$createElement(h.Z,{props:{size:18}},this.delimiterIcon)]);e.push(i)}return this.$createElement(T,{props:{value:this.internalValue,mandatory:this.mandatory},on:{change:t=>{this.internalValue=t}}},e)},genProgress(){return this.$createElement(k.Z,{staticClass:"v-carousel__progress",props:{color:this.progressColor,value:(this.internalIndex+1)/this.items.length*100}})},restartTimeout(){this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=void 0,window.requestAnimationFrame(this.startTimeout)},startTimeout(){this.cycle&&(this.slideTimeout=window.setTimeout(this.next,+this.interval>0?+this.interval:6e3))}},render(t){const e=C.Z.options.render.call(this,t);return e.data.style=`height: ${(0,f.kb)(this.height)};`,this.hideDelimiters||e.children.push(this.genDelimiters()),(this.progress||this.progressColor)&&e.children.push(this.genProgress()),e}}),Z=s(9536),D=s(5288),I=s(9367);const V=(0,v.Z)(Z.Z,I.Z);var B=V.extend().extend({name:"v-carousel-item",inject:{parentTheme:{default:{isDark:!1}}},provide(){return{theme:this.parentTheme}},inheritAttrs:!1,methods:{genDefaultSlot(){return[this.$createElement(D.Z,{staticClass:"v-carousel__item",props:{...this.$attrs,height:this.windowGroup.internalHeight},on:this.$listeners,scopedSlots:{placeholder:this.$scopedSlots.placeholder}},(0,f.z9)(this))]},genWindowItem(){const{tag:t,data:e}=this.generateRouteLink();return e.staticClass="v-window-item",e.directives.push({name:"show",value:this.isActive}),this.$createElement(t,e,this.genDefaultSlot())}}}),A=s(7024),q=s(7894),z=s(2660),L=(0,a.Z)(o,i,r,!1,null,"7eddbc16",null),O=L.exports;l()(L,{VBanner:y,VBtn:b.Z,VCard:x.Z,VCardTitle:_.EB,VCarousel:E,VCarouselItem:B,VCol:A.Z,VImg:D.Z,VRow:q.Z,VTextField:z.Z})},2715:function(t,e,s){var i={"./MyDigitalProject Logo.png":1607,"./blog/conseils.png":1749,"./blog/ecolo.png":7732,"./blog/ethique.png":4968,"./blog/femme-automne.png":3698,"./blog/look-ete.png":8519,"./blog/matieres.png":605,"./femmes/basique.png":3398,"./femmes/boheme.png":2979,"./femmes/casual.png":6068,"./femmes/chic.png":642,"./femmes/ete.png":8405,"./femmes/feminin.png":5896,"./femmes/gothique.png":4147,"./femmes/jean.png":3102,"./femmes/kimono.png":4130,"./femmes/lunettes.png":8963,"./femmes/plage.png":995,"./femmes/streetwear.png":4299,"./femmes/tshirt.png":3321,"./femmes/vintage.png":173,"./hommes/basique.png":2548,"./hommes/boheme.png":4026,"./hommes/casual.png":7576,"./hommes/chic.png":9997,"./hommes/gothique.png":6027,"./hommes/masculin.png":2510,"./hommes/streetwear.png":8146,"./hommes/vintage.png":7819,"./icons/bio.png":5853,"./icons/europe.png":9079,"./icons/recycle.png":7864,"./icons/vegan.png":8380,"./logo/carre.png":7108,"./logo/carre2.png":7696,"./logo/complet.png":8577,"./logo/texte.png":8749};function r(t){var e=n(t);return s(e)}function n(t){if(!s.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}r.keys=function(){return Object.keys(i)},r.resolve=n,t.exports=r,r.id=2715},1607:function(t,e,s){"use strict";t.exports=s.p+"img/MyDigitalProject Logo.316764fa.png"},1749:function(t,e,s){"use strict";t.exports=s.p+"img/conseils.6a714f03.png"},7732:function(t,e,s){"use strict";t.exports=s.p+"img/ecolo.11e56134.png"},4968:function(t,e,s){"use strict";t.exports=s.p+"img/ethique.7686fac0.png"},3698:function(t,e,s){"use strict";t.exports=s.p+"img/femme-automne.ae26ad20.png"},8519:function(t,e,s){"use strict";t.exports=s.p+"img/look-ete.63ce559b.png"},605:function(t,e,s){"use strict";t.exports=s.p+"img/matieres.d5b373d5.png"},2548:function(t,e,s){"use strict";t.exports=s.p+"img/basique.7515eb0a.png"},4026:function(t,e,s){"use strict";t.exports=s.p+"img/boheme.7324ef66.png"},7576:function(t,e,s){"use strict";t.exports=s.p+"img/casual.294b5a9d.png"},9997:function(t,e,s){"use strict";t.exports=s.p+"img/chic.ddf3b856.png"},6027:function(t,e,s){"use strict";t.exports=s.p+"img/gothique.e15ff15a.png"},2510:function(t,e,s){"use strict";t.exports=s.p+"img/masculin.d584427d.png"},8146:function(t,e,s){"use strict";t.exports=s.p+"img/streetwear.bf4a9d60.png"},7819:function(t,e,s){"use strict";t.exports=s.p+"img/vintage.faecc7eb.png"},5853:function(t,e,s){"use strict";t.exports=s.p+"img/bio.c7d87564.png"},9079:function(t,e,s){"use strict";t.exports=s.p+"img/europe.55c83220.png"},7864:function(t,e,s){"use strict";t.exports=s.p+"img/recycle.7db5f790.png"},8380:function(t,e,s){"use strict";t.exports=s.p+"img/vegan.ead761c4.png"},7108:function(t,e,s){"use strict";t.exports=s.p+"img/carre.3c8d2666.png"},7696:function(t,e,s){"use strict";t.exports=s.p+"img/carre2.9a3754f5.png"}}]);
//# sourceMappingURL=623-legacy.8667e199.js.map