(function(){"use strict";var n={8403:function(n,e,t){var o=t(9242),r=t(3396);const i=(0,r._)("span",null,"Accueil",-1),u=(0,r._)("span",null,"Mes quizz",-1),a=(0,r._)("span",null,"Créer quizz",-1),c=(0,r._)("span",null,"Compte",-1);function l(n,e){const t=(0,r.up)("font-awesome-icon"),o=(0,r.up)("router-link"),l=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("nav",null,[(0,r._)("ul",null,[(0,r._)("li",null,[(0,r.Wm)(o,{to:"/"},{default:(0,r.w5)((()=>[(0,r.Wm)(t,{icon:"home"}),i])),_:1})]),(0,r._)("li",null,[(0,r.Wm)(o,{to:"/collection"},{default:(0,r.w5)((()=>[(0,r.Wm)(t,{icon:"rectangle-list"}),u])),_:1})]),(0,r._)("li",null,[(0,r.Wm)(o,{to:"/create"},{default:(0,r.w5)((()=>[(0,r.Wm)(t,{icon:"plus"}),a])),_:1})]),(0,r._)("li",null,[(0,r.Wm)(o,{to:"/account"},{default:(0,r.w5)((()=>[(0,r.Wm)(t,{icon:"user"}),c])),_:1})])])]),(0,r.Wm)(l)],64)}var f=t(89);const s={},d=(0,f.Z)(s,[["render",l]]);var p=d,m=t(2483),h=t(7139);const v={class:"home"};function b(n,e,t,o,i,u){const a=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",v,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.quizzs,(n=>((0,r.wg)(),(0,r.iD)("ul",{key:n.name},[(0,r._)("li",null,[(0,r.Wm)(a,{to:"/question/:quizz.name"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,h.zw)(n.name)+" "+(0,h.zw)(n.description),1)])),_:2},1024)])])))),128))])}var g={data(){return{quizzs:[]}},async created(){const n=await fetch("/quizz");this.quizz=await n.json()}};const y=(0,f.Z)(g,[["render",b],["__scopeId","data-v-01d0431c"]]);var w=y;const _=[{path:"/",name:"home",component:w},{path:"/account",name:"account",component:()=>t.e(424).then(t.bind(t,2424))},{path:"/create",name:"create",component:()=>t.e(668).then(t.bind(t,7668))},{path:"/collection",name:"collection",component:()=>t.e(678).then(t.bind(t,9678))},{path:"/question",name:"quizz",component:()=>t.e(271).then(t.bind(t,6271))},{path:"/addQuestion",name:"addQuestion",component:()=>t.e(766).then(t.bind(t,5766))},{path:"/:pathMatch(.*)",name:"NotFound",component:()=>t.e(383).then(t.bind(t,2383))}],k=(0,m.p7)({history:(0,m.PO)("/"),routes:_});var z=k,O=t(3494),C=t(7749),j=t(8539);O.vI.add(j.ILF,j.J9Y,j.r8p,j.Y27),(0,o.ri)(p).component("font-awesome-icon",C.GN).use(z).mount("#app")}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return n[o](i,i.exports,t),i.exports}t.m=n,function(){var n=[];t.O=function(e,o,r,i){if(!o){var u=1/0;for(f=0;f<n.length;f++){o=n[f][0],r=n[f][1],i=n[f][2];for(var a=!0,c=0;c<o.length;c++)(!1&i||u>=i)&&Object.keys(t.O).every((function(n){return t.O[n](o[c])}))?o.splice(c--,1):(a=!1,i<u&&(u=i));if(a){n.splice(f--,1);var l=r();void 0!==l&&(e=l)}}return e}i=i||0;for(var f=n.length;f>0&&n[f-1][2]>i;f--)n[f]=n[f-1];n[f]=[o,r,i]}}(),function(){t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,{a:e}),e}}(),function(){t.d=function(n,e){for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})}}(),function(){t.f={},t.e=function(n){return Promise.all(Object.keys(t.f).reduce((function(e,o){return t.f[o](n,e),e}),[]))}}(),function(){t.u=function(n){return"js/"+n+"."+{271:"6b1d3bb4",383:"9bdfb009",424:"5a4afb1f",668:"0cdc96f6",678:"a2db1737",766:"ababb68d"}[n]+".js"}}(),function(){t.miniCssF=function(n){return"css/"+n+"."+{271:"02944914",383:"aa11ef72",424:"3d386da6",668:"f2bfdca5",678:"b67ef872",766:"04c1e107"}[n]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={},e="frontend:";t.l=function(o,r,i,u){if(n[o])n[o].push(r);else{var a,c;if(void 0!==i)for(var l=document.getElementsByTagName("script"),f=0;f<l.length;f++){var s=l[f];if(s.getAttribute("src")==o||s.getAttribute("data-webpack")==e+i){a=s;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,t.nc&&a.setAttribute("nonce",t.nc),a.setAttribute("data-webpack",e+i),a.src=o),n[o]=[r];var d=function(e,t){a.onerror=a.onload=null,clearTimeout(p);var r=n[o];if(delete n[o],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((function(n){return n(t)})),e)return e(t)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){t.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){var n=function(n,e,t,o){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var i=function(i){if(r.onerror=r.onload=null,"load"===i.type)t();else{var u=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.href||e,c=new Error("Loading CSS chunk "+n+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=u,c.request=a,r.parentNode.removeChild(r),o(c)}};return r.onerror=r.onload=i,r.href=e,document.head.appendChild(r),r},e=function(n,e){for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var r=t[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===n||i===e))return r}var u=document.getElementsByTagName("style");for(o=0;o<u.length;o++){r=u[o],i=r.getAttribute("data-href");if(i===n||i===e)return r}},o=function(o){return new Promise((function(r,i){var u=t.miniCssF(o),a=t.p+u;if(e(u,a))return r();n(o,a,r,i)}))},r={143:0};t.f.miniCss=function(n,e){var t={271:1,383:1,424:1,668:1,678:1,766:1};r[n]?e.push(r[n]):0!==r[n]&&t[n]&&e.push(r[n]=o(n).then((function(){r[n]=0}),(function(e){throw delete r[n],e})))}}(),function(){var n={143:0};t.f.j=function(e,o){var r=t.o(n,e)?n[e]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(t,o){r=n[e]=[t,o]}));o.push(r[2]=i);var u=t.p+t.u(e),a=new Error,c=function(o){if(t.o(n,e)&&(r=n[e],0!==r&&(n[e]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),u=o&&o.target&&o.target.src;a.message="Loading chunk "+e+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,r[1](a)}};t.l(u,c,"chunk-"+e,e)}},t.O.j=function(e){return 0===n[e]};var e=function(e,o){var r,i,u=o[0],a=o[1],c=o[2],l=0;if(u.some((function(e){return 0!==n[e]}))){for(r in a)t.o(a,r)&&(t.m[r]=a[r]);if(c)var f=c(t)}for(e&&e(o);l<u.length;l++)i=u[l],t.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return t.O(f)},o=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(8403)}));o=t.O(o)})();
//# sourceMappingURL=app.69b73d4a.js.map