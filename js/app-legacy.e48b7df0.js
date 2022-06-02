(function(){"use strict";var e={612:function(e,t,n){var a=n(144),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("AppHeader"),n("v-main",{attrs:{fluid:"","fill-height":""}},[n("Notification",{ref:"notif",attrs:{dismissible:"",defaultTimeout:7e3}}),n("v-layout",{staticClass:"align-center justify-center"},[n("router-view")],1)],1),n("AppFooter"),n("LoginRegister",{ref:"loginRegister"}),n("Confirm",{ref:"confirm"}),n("Overlay",{ref:"overlay"})],1)},r=[],i=n(1001),s=n(3453),c=n.n(s),u=n(303),l=n(9456),d=n(4021),f={},p=(0,i.Z)(f,o,r,!1,null,null,null),m=p.exports;c()(p,{VApp:u.Z,VLayout:l.Z,VMain:d.Z});var h=n(8345);a.Z.use(h.Z);const g=[{path:"/",name:"home",component:()=>Promise.all([n.e(932),n.e(389),n.e(852),n.e(126),n.e(16)]).then(n.bind(n,7077))},{path:"/backoffice",name:"backoffice",component:()=>Promise.all([n.e(932),n.e(852),n.e(923),n.e(414)]).then(n.bind(n,1312))},{path:"/Compte",name:"compte",component:()=>Promise.all([n.e(932),n.e(389),n.e(852),n.e(923),n.e(689)]).then(n.bind(n,759))},{path:"/Blog",name:"blog",component:()=>n.e(97).then(n.bind(n,7758))},{path:"/Identite",name:"identite",component:()=>n.e(485).then(n.bind(n,9485))},{path:"/Historique",name:"historique commandes",component:()=>n.e(950).then(n.bind(n,1950))},{path:"/Commander",name:"commander",component:()=>n.e(358).then(n.bind(n,6358))},{path:"/Favoris",name:"favoris",component:()=>n.e(350).then(n.bind(n,8350))},{path:"/Panier",name:"panier",component:()=>n.e(767).then(n.bind(n,4767))},{path:"/:type",name:"type",component:()=>Promise.all([n.e(932),n.e(389),n.e(160)]).then(n.bind(n,1160))},{path:"/:type/:style",name:"style",component:()=>Promise.all([n.e(932),n.e(389),n.e(126),n.e(247)]).then(n.bind(n,4068))}],y=new h.Z({mode:"history",base:"/green-your-look-vue/",routes:g});var v=y,w=n(629),b=n(4702),k=n(9669),C=n.n(k);const P={token:null,refresh_token:null},_={isAuthenticated:e=>!!e.token,stateToken:e=>e.token,stateRefreshToken:e=>e.refresh_token},S={async register({commit:e},t){await C().post("users",t),await this.login(t)},async login({commit:e},t){const n=await C().get("/auth",{auth:{username:t.mail,password:t.password}});await e("setToken",n.data.access_token),await e("setRefreshToken",n.data.refresh_token),C().defaults.headers.common.Authorization=`Bearer ${n.data.access_token}`}},L={setToken:(e,t)=>e.token=t,setRefreshToken:(e,t)=>e.refresh_token=t};var T={state:P,getters:_,actions:S,mutations:L};const O={categories:[]},Z={stateCategories:e=>e.categories},A={async getCategories({commit:e}){await e("setCategories",await(await C().get("categories")).data)},async createCategory({dispatch:e},t){await C().post("categories",t),await e("getCategories")},async updateCategory({dispatch:e},{form:t,id:n}){console.log(t,n),await C().patch(`categories/${n}`,t),await e("getCategories")},async deleteCategory({dispatch:e},t){await C()["delete"](`categories/${t}`),await e("getCategories")}},j={setCategories:(e,t)=>e.categories=t};var E={state:O,getters:Z,actions:A,mutations:j};const $={looks:[]},F={stateLooks:e=>e.looks},B={async getLooks({commit:e}){await e("setLooks",await(await C().get("looks")).data)},async createLook({dispatch:e},t){await C().post("looks",t),await e("getLooks")},async updateLooks({dispatch:e},t,n){await C().put(`looks/${n}`,t),await e("getLooks")},async deleteLook({dispatch:e},t){await C()["delete"](`looks/${t}`),await e("getLooks")}},N={setLooks:(e,t)=>e.looks=t};var x={state:$,getters:F,actions:B,mutations:N};const R={styles:[]},q={stateStyles:e=>e.styles},M={async getStyles({commit:e}){await e("setStyles",await(await C().get("styles")).data)},async createStyle({dispatch:e},t){await C().post("styles",t),await e("getStyles")},async updateStyles({dispatch:e},t,n){await C().put(`styles/${n}`,t),await e("getStyles")},async deleteStyle({dispatch:e},t){await C()["delete"](`styles/${t}`),await e("getStyles")}},D={setStyles:(e,t)=>e.styles=t};var H={state:R,getters:q,actions:M,mutations:D};const V={products:[]},I={stateProducts:e=>e.products},U={async getProducts({commit:e}){await e("setProducts",await(await C().get("products")).data)},async createProduct({dispatch:e},t){await C().post("products",t),await e("getProducts")},async updateProducts({dispatch:e},t,n){await C().put(`products/${n}`,t),await e("getProducts")},async deleteProduct({dispatch:e},t){await C()["delete"](`products/${t}`),await e("getProducts")}},z={setProducts:(e,t)=>e.products=t};var K={state:V,getters:I,actions:U,mutations:z};a.Z.use(w.ZP);var G=new w.ZP.Store({modules:{auth:T,categories:E,looks:x,styles:H,products:K},plugins:[(0,b.Z)()]}),J=n(5121);a.Z.use(J.Z);var Q=new J.Z({theme:{themes:{light:{primary:"#6B2737",secondary:"#F8F0DF",accent:"#79B4B7",info:"#777777"}}}});C().defaults.withCredentials=!0,C().defaults.baseURL="http://78.228.62.74:8542",a.Z.config.productionTip=!1,new a.Z({router:v,store:G,vuetify:Q,render:function(e){return e(m)}}).$mount("#app")}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var r=t[a]={exports:{}};return e[a](r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,a,o,r){if(!a){var i=1/0;for(l=0;l<e.length;l++){a=e[l][0],o=e[l][1],r=e[l][2];for(var s=!0,c=0;c<a.length;c++)(!1&r||i>=r)&&Object.keys(n.O).every((function(e){return n.O[e](a[c])}))?a.splice(c--,1):(s=!1,r<i&&(i=r));if(s){e.splice(l--,1);var u=o();void 0!==u&&(t=u)}}return t}r=r||0;for(var l=e.length;l>0&&e[l-1][2]>r;l--)e[l]=e[l-1];e[l]=[a,o,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,a){return n.f[a](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"-legacy."+{16:"d227fe73",97:"e7e800e6",126:"637265ef",160:"38ddd3ed",247:"8ec19d3c",350:"3a72ac6e",358:"cc7d5c17",389:"ef27a97f",414:"9307f8f2",485:"130e1c83",689:"ebdd1bfd",767:"211dccb2",852:"5b2f8b43",923:"ce292896",932:"373e481b",950:"6fcafebd"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{16:"94dae257",160:"aa750a94",247:"fafb6a9c",389:"c887ea5f",414:"8d7a5ea9",689:"052c0ae0",852:"134b0e54"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="green-your-look-vue:";n.l=function(a,o,r,i){if(e[a])e[a].push(o);else{var s,c;if(void 0!==r)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var d=u[l];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==t+r){s=d;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+r),s.src=a),e[a]=[o];var f=function(t,n){s.onerror=s.onload=null,clearTimeout(p);var o=e[a];if(delete e[a],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/green-your-look-vue/"}(),function(){var e=function(e,t,n,a){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var r=function(r){if(o.onerror=o.onload=null,"load"===r.type)n();else{var i=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=s,o.parentNode.removeChild(o),a(c)}};return o.onerror=o.onload=r,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),a=0;a<n.length;a++){var o=n[a],r=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(r===e||r===t))return o}var i=document.getElementsByTagName("style");for(a=0;a<i.length;a++){o=i[a],r=o.getAttribute("data-href");if(r===e||r===t)return o}},a=function(a){return new Promise((function(o,r){var i=n.miniCssF(a),s=n.p+i;if(t(i,s))return o();e(a,s,o,r)}))},o={143:0};n.f.miniCss=function(e,t){var n={16:1,160:1,247:1,389:1,414:1,689:1,852:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=a(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,a){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)a.push(o[2]);else if(389!=t){var r=new Promise((function(n,a){o=e[t]=[n,a]}));a.push(o[2]=r);var i=n.p+n.u(t),s=new Error,c=function(a){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var r=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",s.name="ChunkLoadError",s.type=r,s.request=i,o[1](s)}};n.l(i,c,"chunk-"+t,t)}else e[t]=0},n.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,r,i=a[0],s=a[1],c=a[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(c)var l=c(n)}for(t&&t(a);u<i.length;u++)r=i[u],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(l)},a=self["webpackChunkgreen_your_look_vue"]=self["webpackChunkgreen_your_look_vue"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(612)}));a=n.O(a)})();
//# sourceMappingURL=app-legacy.e48b7df0.js.map