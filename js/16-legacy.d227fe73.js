(self["webpackChunkgreen_your_look_vue"]=self["webpackChunkgreen_your_look_vue"]||[]).push([[16],{7077:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return q}});var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{width:"100%"}},[i("v-banner",{staticClass:"text-center",attrs:{color:"primary","max-height":"150"}},[t._v(" Chez Green Your Look, nous mettons en avant des marques respectueuses de l'environnement ")]),i("v-carousel",{staticClass:"carousel",attrs:{cycle:"",interval:"3000","show-arrows-on-hover":"","hide-delimiters":""}},[t._l(t.slider,(function(e,n){return[(n+1)%t.columns===1||1===t.columns?i("v-carousel-item",{key:n,staticStyle:{position:"relative"}},[i("v-row",{staticClass:"flex-nowrap",staticStyle:{height:"100%"}},[t._l(t.columns,(function(e,r){return[+n+r<t.slider.length?[i("v-col",{key:r},[+n+r<t.slider.length?i("v-row",{staticClass:"fill-height",attrs:{height:"100%",align:"center",justify:"center"}},[i("v-img",{staticStyle:{width:"10px",height:"120%"},attrs:{src:s(2715)("./"+t.slider[+n+r]+".png")}})],1):t._e()],1)]:t._e()]}))],2),i("div",{staticStyle:{position:"absolute",bottom:"0",left:"0",right:"0"}},[i("v-img",{staticStyle:{display:"block",margin:"auto","margin-bottom":"15px"},attrs:{src:s(7108),"max-width":"150"}}),i("v-banner",{staticClass:"text-center",attrs:{color:"primary"}},[t._v(" Découvrez des looks stylés et éco-responsables ")])],1)],1):t._e()]}))],2),i("div",{staticStyle:{margin:"50px 0 100px 0"}},[i("h1",[t._v("NOUVEAUTÉS")]),i("h4",[t._v("Découvrez les dernières nouveautés Green Your Look !")]),i("v-row",{staticClass:"center",attrs:{align:"center"}},[i("v-col",{staticClass:"center",attrs:{cols:"12",md:"3",sm:"12"}},[i("v-card",{attrs:{"max-width":"300"}},[i("v-img",{attrs:{src:s(5896)}}),i("v-card-title",{staticClass:"center"},[t._v("LOOK ÉTÉ")])],1)],1),i("v-col",{staticClass:"center",attrs:{cols:"12",md:"3",sm:"12"}},[i("v-card",{attrs:{"max-width":"300"}},[i("v-img",{attrs:{src:s(4026)}}),i("v-card-title",{staticClass:"center"},[t._v("BOHÈME")])],1)],1),i("v-col",{staticClass:"center",attrs:{cols:"12",md:"3",sm:"12"}},[i("v-card",{attrs:{"max-width":"300"}},[i("v-img",{attrs:{src:s(173)}}),i("v-card-title",{staticClass:"center"},[t._v("VINTAGE")])],1)],1)],1)],1),i("div",{staticStyle:{padding:"50px 0","background-color":"#f8f0df"}},[i("h1",[t._v("NOS VALEURS")]),i("h4",[t._v("Découvrez nos valeurs et nos critères de sélection des articles")]),i("v-row",{staticClass:"center my-5",attrs:{align:"center"}},[i("v-col",{staticClass:"center",attrs:{cols:"4",md:"1",sm:"2"}},[i("v-img",{attrs:{"max-width":"70",src:s(8380)}})],1),i("v-col",{staticClass:"center",attrs:{cols:"4",md:"1",sm:"2"}},[i("v-img",{attrs:{"max-width":"70",src:s(7864)}})],1),i("v-col",{staticClass:"center",attrs:{cols:"4",md:"1",sm:"2"}},[i("v-img",{attrs:{"max-width":"70",src:s(5853)}})],1),i("v-col",{staticClass:"center",attrs:{cols:"4",md:"1",sm:"2"}},[i("v-img",{attrs:{"max-width":"70",src:s(9079)}})],1)],1),i("div",{staticClass:"text-center",staticStyle:{margin:"30px 0"}},[i("v-btn",{attrs:{color:"primary",href:"/Identite"}},[t._v("Découvrir Green Your Look")])],1)],1),i("div",{staticStyle:{margin:"100px 0"}},[i("h1",[t._v("INSCRIPTION NEWSLETTER")]),i("h4",[t._v(" Inscrivez-vous à notre newsletter pour être au courant des nouveautés et des promos ! ")]),i("v-row",{staticClass:"my-5",attrs:{justify:"center","no-gutters":""}},[i("v-col",{attrs:{cols:"6",lg:"3",sm:"4"}},[i("v-text-field",{attrs:{label:"Adresse email",dense:"",filled:"",color:"primary"}})],1),i("v-col",{attrs:{cols:"6",lg:"1",sm:"2"}},[i("v-btn",{staticStyle:{"margin-left":"10px",height:"53px"},attrs:{color:"primary",small:"",outlined:"",elevation:"8"}},[t._v("S'inscrire")])],1)],1),t._m(0)],1)],1)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v(" En renseignant votre adresse email, vous acceptez de recevoir nos offres commerciales par courrier électronique et vous prenez connaissance de notre "),s("a",{attrs:{href:""}},[t._v("politique de confidentialité")]),t._v(". "),s("br"),t._v(" Vous pouvez vous désinscrire à tout moment à l'aide des liens de désinscription ou en nous contactant à l'adresse greenyourlook@gmail.com. ")])}],r={name:"Home",components:{},data(){return{slider:["femmes/basique","hommes/casual","femmes/boheme","hommes/chic","femmes/chic","hommes/streetwear","femmes/gothique","hommes/vintage"]}},computed:{columns(){return this.$vuetify.breakpoint.lg?4:this.$vuetify.breakpoint.md||this.$vuetify.breakpoint.sm?2:1}}},o=r,a=s(1001),l=s(3453),c=s.n(l),h=s(9744),u=s(3008),d=s(9524),m=s(6930),p=s(9989),v=s(4552),g=s(5530),f=s(8131),w=(0,g.Z)(h.Z,p.Z,v.Z).extend({name:"v-banner",inheritAttrs:!1,props:{app:Boolean,icon:String,iconColor:String,singleLine:Boolean,sticky:Boolean,value:{type:Boolean,default:!0}},computed:{classes(){return{...h.Z.options.computed.classes.call(this),"v-banner--has-icon":this.hasIcon,"v-banner--is-mobile":this.isMobile,"v-banner--single-line":this.singleLine,"v-banner--sticky":this.isSticky}},hasIcon(){return Boolean(this.icon||this.$slots.icon)},isSticky(){return this.sticky||this.app},styles(){const t={...h.Z.options.computed.styles.call(this)};if(this.isSticky){const e=this.app?this.$vuetify.application.bar+this.$vuetify.application.top:0;t.top=(0,f.kb)(e),t.position="sticky",t.zIndex=1}return t}},methods:{toggle(){this.isActive=!this.isActive},iconClick(t){this.$emit("click:icon",t)},genIcon(){if(!this.hasIcon)return;let t;return t=this.icon?this.$createElement(d.Z,{props:{color:this.iconColor,size:28}},[this.icon]):this.$slots.icon,this.$createElement(u.Z,{staticClass:"v-banner__icon",props:{color:this.color,size:40},on:{click:this.iconClick}},[t])},genText(){return this.$createElement("div",{staticClass:"v-banner__text"},this.$slots.default)},genActions(){const t=(0,f.z9)(this,"actions",{dismiss:()=>this.isActive=!1});if(t)return this.$createElement("div",{staticClass:"v-banner__actions"},t)},genContent(){return this.$createElement("div",{staticClass:"v-banner__content"},[this.genIcon(),this.genText()])},genWrapper(){return this.$createElement("div",{staticClass:"v-banner__wrapper"},[this.genContent(),this.genActions()])}},render(t){const e={staticClass:"v-banner",attrs:this.attrs$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};return t(m.Fx,[t("div",this.outlined?e:this.setBackgroundColor(this.color,e),[this.genWrapper()])])}}),y=s(6847),x=s(5893),b=s(5255),C=s(3269),$=s(8205),T=s(5204),_=s(7228),k=_.y.extend({name:"button-group",provide(){return{btnToggle:this}},computed:{classes(){return _.y.options.computed.classes.call(this)}},methods:{genData:_.y.options.methods.genData}}),I=s(8219),B=C.Z.extend({name:"v-carousel",props:{continuous:{type:Boolean,default:!0},cycle:Boolean,delimiterIcon:{type:String,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:t=>t>0},mandatory:{type:Boolean,default:!0},progress:Boolean,progressColor:String,showArrows:{type:Boolean,default:!0},verticalDelimiters:{type:String,default:void 0}},provide(){return{parentTheme:this.theme}},data(){return{internalHeight:this.height,slideTimeout:void 0}},computed:{classes(){return{...C.Z.options.computed.classes.call(this),"v-carousel":!0,"v-carousel--hide-delimiter-background":this.hideDelimiterBackground,"v-carousel--vertical-delimiters":this.isVertical}},isDark(){return this.dark||!this.light},isVertical(){return null!=this.verticalDelimiters}},watch:{internalValue:"restartTimeout",interval:"restartTimeout",height(t,e){t!==e&&t&&(this.internalHeight=t)},cycle(t){t?this.restartTimeout():(clearTimeout(this.slideTimeout),this.slideTimeout=void 0)}},created(){this.$attrs.hasOwnProperty("hide-controls")&&(0,I.fK)("hide-controls",':show-arrows="false"',this)},mounted(){this.startTimeout()},methods:{genControlIcons(){return this.isVertical?null:C.Z.options.methods.genControlIcons.call(this)},genDelimiters(){return this.$createElement("div",{staticClass:"v-carousel__controls",style:{left:"left"===this.verticalDelimiters&&this.isVertical?0:"auto",right:"right"===this.verticalDelimiters?0:"auto"}},[this.genItems()])},genItems(){const t=this.items.length,e=[];for(let s=0;s<t;s++){const i=this.$createElement($.Z,{staticClass:"v-carousel__controls__item",attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.ariaLabel.delimiter",s+1,t)},props:{icon:!0,small:!0,value:this.getValue(this.items[s],s)}},[this.$createElement(d.Z,{props:{size:18}},this.delimiterIcon)]);e.push(i)}return this.$createElement(k,{props:{value:this.internalValue,mandatory:this.mandatory},on:{change:t=>{this.internalValue=t}}},e)},genProgress(){return this.$createElement(T.Z,{staticClass:"v-carousel__progress",props:{color:this.progressColor,value:(this.internalIndex+1)/this.items.length*100}})},restartTimeout(){this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=void 0,window.requestAnimationFrame(this.startTimeout)},startTimeout(){this.cycle&&(this.slideTimeout=window.setTimeout(this.next,+this.interval>0?+this.interval:6e3))}},render(t){const e=C.Z.options.render.call(this,t);return e.data.style=`height: ${(0,f.kb)(this.height)};`,this.hideDelimiters||e.children.push(this.genDelimiters()),(this.progress||this.progressColor)&&e.children.push(this.genProgress()),e}}),S=s(9536),Z=s(5288),E=s(9367);const A=(0,g.Z)(S.Z,E.Z);var D=A.extend().extend({name:"v-carousel-item",inject:{parentTheme:{default:{isDark:!1}}},provide(){return{theme:this.parentTheme}},inheritAttrs:!1,methods:{genDefaultSlot(){return[this.$createElement(Z.Z,{staticClass:"v-carousel__item",props:{...this.$attrs,height:this.windowGroup.internalHeight},on:this.$listeners,scopedSlots:{placeholder:this.$scopedSlots.placeholder}},(0,f.z9)(this))]},genWindowItem(){const{tag:t,data:e}=this.generateRouteLink();return e.staticClass="v-window-item",e.directives.push({name:"show",value:this.isActive}),this.$createElement(t,e,this.genDefaultSlot())}}}),V=s(7024),N=s(7894),z=s(2660),G=(0,a.Z)(o,i,n,!1,null,"2ef039c2",null),q=G.exports;c()(G,{VBanner:w,VBtn:y.Z,VCard:x.Z,VCardTitle:b.EB,VCarousel:B,VCarouselItem:D,VCol:V.Z,VImg:Z.Z,VRow:N.Z,VTextField:z.Z})},3008:function(t,e,s){"use strict";s.d(e,{Z:function(){return c}});var i=s(5836),n=s(9548),r=s(5357),o=s(8131),a=s(5530),l=(0,a.Z)(i.Z,n.Z,r.Z).extend({name:"v-avatar",props:{left:Boolean,right:Boolean,size:{type:[Number,String],default:48}},computed:{classes(){return{"v-avatar--left":this.left,"v-avatar--right":this.right,...this.roundedClasses}},styles(){return{height:(0,o.kb)(this.size),minWidth:(0,o.kb)(this.size),width:(0,o.kb)(this.size),...this.measurableStyles}}},render(t){const e={staticClass:"v-avatar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,e),this.$slots.default)}}),c=l},3269:function(t,e,s){"use strict";s.d(e,{Z:function(){return a}});var i=s(2706),n=s(8205),r=s(9524),o=s(7228),a=o.y.extend({name:"v-window",directives:{Touch:i.Z},provide(){return{windowGroup:this}},props:{activeClass:{type:String,default:"v-window-item--active"},continuous:Boolean,mandatory:{type:Boolean,default:!0},nextIcon:{type:[Boolean,String],default:"$next"},prevIcon:{type:[Boolean,String],default:"$prev"},reverse:Boolean,showArrows:Boolean,showArrowsOnHover:Boolean,touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data(){return{changedByDelimiters:!1,internalHeight:void 0,transitionHeight:void 0,transitionCount:0,isBooted:!1,isReverse:!1}},computed:{isActive(){return this.transitionCount>0},classes(){return{...o.y.options.computed.classes.call(this),"v-window--show-arrows-on-hover":this.showArrowsOnHover}},computedTransition(){if(!this.isBooted)return"";const t=this.vertical?"y":"x",e=this.internalReverse?!this.isReverse:this.isReverse,s=e?"-reverse":"";return`v-window-${t}${s}-transition`},hasActiveItems(){return Boolean(this.items.find((t=>!t.disabled)))},hasNext(){return this.continuous||this.internalIndex<this.items.length-1},hasPrev(){return this.continuous||this.internalIndex>0},internalIndex(){return this.items.findIndex(((t,e)=>this.internalValue===this.getValue(t,e)))},internalReverse(){return this.$vuetify.rtl?!this.reverse:this.reverse}},watch:{internalIndex(t,e){this.isReverse=this.updateReverse(t,e)}},mounted(){window.requestAnimationFrame((()=>this.isBooted=!0))},methods:{genDefaultSlot(){return this.$slots.default},genContainer(){const t=[this.genDefaultSlot()];return this.showArrows&&t.push(this.genControlIcons()),this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight||this.transitionHeight}},t)},genIcon(t,e,s){var i,o,a;const l={click:t=>{t.stopPropagation(),this.changedByDelimiters=!0,s()}},c={"aria-label":this.$vuetify.lang.t(`$vuetify.carousel.${t}`)},h=null!=(i=null==(o=(a=this.$scopedSlots)[t])?void 0:o.call(a,{on:l,attrs:c}))?i:[this.$createElement(n.Z,{props:{icon:!0},attrs:c,on:l},[this.$createElement(r.Z,{props:{large:!0}},e)])];return this.$createElement("div",{staticClass:`v-window__${t}`},h)},genControlIcons(){const t=[],e=this.$vuetify.rtl?this.nextIcon:this.prevIcon;if(this.hasPrev&&e&&"string"===typeof e){const s=this.genIcon("prev",e,this.prev);s&&t.push(s)}const s=this.$vuetify.rtl?this.prevIcon:this.nextIcon;if(this.hasNext&&s&&"string"===typeof s){const e=this.genIcon("next",s,this.next);e&&t.push(e)}return t},getNextIndex(t){const e=(t+1)%this.items.length,s=this.items[e];return s.disabled?this.getNextIndex(e):e},getPrevIndex(t){const e=(t+this.items.length-1)%this.items.length,s=this.items[e];return s.disabled?this.getPrevIndex(e):e},next(){if(!this.hasActiveItems||!this.hasNext)return;const t=this.getNextIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)},prev(){if(!this.hasActiveItems||!this.hasPrev)return;const t=this.getPrevIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)},updateReverse(t,e){const s=this.items.length,i=s-1;return s<=2?t<e:t===i&&0===e||(0!==t||e!==i)&&t<e}},render(t){const e={staticClass:"v-window",class:this.classes,directives:[]};if(!this.touchless){const t=this.touch||{left:()=>{this.$vuetify.rtl?this.prev():this.next()},right:()=>{this.$vuetify.rtl?this.next():this.prev()},end:t=>{t.stopPropagation()},start:t=>{t.stopPropagation()}};e.directives.push({name:"touch",value:t})}return t("div",e,[this.genContainer()])}})},9536:function(t,e,s){"use strict";var i=s(6986),n=s(1302),r=s(2706),o=s(8131),a=s(5530);const l=(0,a.Z)(i.Z,(0,n.d)("windowGroup","v-window-item","v-window"));e["Z"]=l.extend().extend().extend({name:"v-window-item",directives:{Touch:r.Z},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data(){return{isActive:!1,inTransition:!1}},computed:{classes(){return this.groupClasses},computedTransition(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot(){return this.$slots.default},genWindowItem(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=(0,o.kb)(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled(){this.onAfterTransition()},onEnter(t){this.inTransition&&this.$nextTick((()=>{this.computedTransition&&this.inTransition&&(this.windowGroup.transitionHeight=(0,o.kb)(t.clientHeight))}))}},render(t){return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((()=>[this.genWindowItem()])))}})},9989:function(t,e,s){"use strict";var i=s(8219),n=s(144);e["Z"]=n.Z.extend({name:"mobile",props:{mobileBreakpoint:{type:[Number,String],default(){return this.$vuetify?this.$vuetify.breakpoint.mobileBreakpoint:void 0},validator:t=>!isNaN(Number(t))||["xs","sm","md","lg","xl"].includes(String(t))}},computed:{isMobile(){const{mobile:t,width:e,name:s,mobileBreakpoint:i}=this.$vuetify.breakpoint;if(i===this.mobileBreakpoint)return t;const n=parseInt(this.mobileBreakpoint,10),r=!isNaN(n);return r?e<n:s===this.mobileBreakpoint}},created(){this.$attrs.hasOwnProperty("mobile-break-point")&&(0,i.Rn)("mobile-break-point","mobile-breakpoint",this)}})},2715:function(t,e,s){var i={"./MyDigitalProject Logo.png":1607,"./femmes/basique.png":3398,"./femmes/boheme.png":2979,"./femmes/casual.png":6068,"./femmes/chic.png":642,"./femmes/feminin.png":5896,"./femmes/gothique.png":4147,"./femmes/streetwear.png":4299,"./femmes/vintage.png":173,"./hommes/basique.png":2548,"./hommes/boheme.png":4026,"./hommes/casual.png":7576,"./hommes/chic.png":9997,"./hommes/gothique.png":6027,"./hommes/masculin.png":2510,"./hommes/streetwear.png":8146,"./hommes/vintage.png":7819,"./icons/bio.png":5853,"./icons/europe.png":9079,"./icons/recycle.png":7864,"./icons/vegan.png":8380,"./logo/carre.png":7108,"./logo/carre2.png":7696,"./logo/complet.png":8577,"./logo/texte.png":8749};function n(t){var e=r(t);return s(e)}function r(t){if(!s.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}n.keys=function(){return Object.keys(i)},n.resolve=r,t.exports=n,n.id=2715},1607:function(t,e,s){"use strict";t.exports=s.p+"img/MyDigitalProject Logo.316764fa.png"},2979:function(t,e,s){"use strict";t.exports=s.p+"img/boheme.4ffd9668.png"},6068:function(t,e,s){"use strict";t.exports=s.p+"img/casual.00086a3f.png"},642:function(t,e,s){"use strict";t.exports=s.p+"img/chic.12d67db3.png"},5896:function(t,e,s){"use strict";t.exports=s.p+"img/feminin.6159f3af.png"},4147:function(t,e,s){"use strict";t.exports=s.p+"img/gothique.aa9ffcf5.png"},4299:function(t,e,s){"use strict";t.exports=s.p+"img/streetwear.aaa28301.png"},173:function(t,e,s){"use strict";t.exports=s.p+"img/vintage.6e01c0d5.png"},2548:function(t,e,s){"use strict";t.exports=s.p+"img/basique.7515eb0a.png"},4026:function(t,e,s){"use strict";t.exports=s.p+"img/boheme.7324ef66.png"},7576:function(t,e,s){"use strict";t.exports=s.p+"img/casual.294b5a9d.png"},9997:function(t,e,s){"use strict";t.exports=s.p+"img/chic.ddf3b856.png"},6027:function(t,e,s){"use strict";t.exports=s.p+"img/gothique.e15ff15a.png"},2510:function(t,e,s){"use strict";t.exports=s.p+"img/masculin.d584427d.png"},8146:function(t,e,s){"use strict";t.exports=s.p+"img/streetwear.bf4a9d60.png"},7819:function(t,e,s){"use strict";t.exports=s.p+"img/vintage.faecc7eb.png"},7108:function(t,e,s){"use strict";t.exports=s.p+"img/carre.3c8d2666.png"},7696:function(t,e,s){"use strict";t.exports=s.p+"img/carre2.9a3754f5.png"},8577:function(t,e,s){"use strict";t.exports=s.p+"img/complet.e2787690.png"},8749:function(t,e,s){"use strict";t.exports=s.p+"img/texte.ea56c174.png"}}]);
//# sourceMappingURL=16-legacy.d227fe73.js.map