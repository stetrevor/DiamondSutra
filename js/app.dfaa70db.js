(function(t){function e(e){for(var n,c,s=e[0],i=e[1],u=e[2],l=0,d=[];l<s.length;l++)c=s[l],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&d.push(a[c][0]),a[c]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);p&&p(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,c=1;c<r.length;c++){var i=r[c];0!==a[i]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=r[0]))}return t}var n={},a={app:0},o=[];function c(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-2d217a99":"7c4a50aa"}[t]+".js"}function s(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(t){var e=[],r=a[t];if(0!==r)if(r)e.push(r[2]);else{var n=new Promise((function(e,n){r=a[t]=[e,n]}));e.push(r[2]=n);var o,i=document.createElement("script");i.charset="utf-8",i.timeout=120,s.nc&&i.setAttribute("nonce",s.nc),i.src=c(t);var u=new Error;o=function(e){i.onerror=i.onload=null,clearTimeout(l);var r=a[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",u.name="ChunkLoadError",u.type=n,u.request=o,r[1](u)}a[t]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:i})}),12e4);i.onerror=i.onload=o,document.head.appendChild(i)}return Promise.all(e)},s.m=t,s.c=n,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var p=u;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"10c7":function(t,e,r){"use strict";var n=r("261d"),a=r.n(n);a.a},"21bb":function(t,e,r){"use strict";var n=r("2dad"),a=r.n(n);a.a},"261d":function(t,e,r){},"2dad":function(t,e,r){},3511:function(t,e,r){"use strict";var n=r("7c72"),a=r.n(n);a.a},"46d4":function(t,e,r){},5033:function(t){t.exports=JSON.parse('{"b":["全文"],"a":"金刚经"}')},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("router-view"),t.prompt?r("snackbar",{attrs:{message:"New version found. Refresh to upgrade?","accept-text":"Update","cancel-text":"later"},on:{"snackbar-accept":t.reload,"snackbar-cancel":function(e){t.prompt=!1}}}):t._e()],1)},o=[],c=(r("96cf"),r("1da1")),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"snackbar"},[r("div",{staticClass:"snackbar__message"},[t._v(t._s(t.message))]),r("div",{staticClass:"snackbar__button snackbar__button--accept",on:{click:function(e){return t.$emit("snackbar-accept")}}},[t._v(" "+t._s(t.acceptText)+" ")]),r("div",{staticClass:"snackbar__button snackbar__button--cancel",on:{click:function(e){return t.$emit("snackbar-cancel")}}},[t._v(" "+t._s(t.cancelText)+" ")])])},i=[],u={props:{message:{type:String,required:!0},acceptText:{type:String,default:"ok"},cancelText:{type:String,default:"cancel"}}},l=u,p=(r("584f"),r("2877")),d=Object(p["a"])(l,s,i,!1,null,null,null),f=d.exports,m={components:{Snackbar:f},created:function(){var t=this;this.$workbox&&this.$workbox.addEventListener("waiting",(function(){t.prompt=!0}))},methods:{reload:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.prompt=!1,e.next=3,t.$workbox.messageSW({type:"SKIP_WAITING"});case 3:case"end":return e.stop()}}),e)})))()}},data:function(){return{prompt:!1}}},h=m,v=(r("5c0b"),Object(p["a"])(h,a,o,!1,null,null,null)),_=v.exports,b=r("8c4f"),k=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("h1",{staticClass:"home__title"},[t._v(t._s(t.sutraName))]),r("TableOfContents"),t.chapterNum?r("div",{staticClass:"home__continue-reading"},[r("router-link",{attrs:{to:"/chapter/"+t.chapterNum+"?Y="+t.bookmarkY}},[t._v("Continue reading ...")])],1):t._e()],1)},g=[],w=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ol",{staticClass:"table-of-contents"},t._l(t.chapters,(function(e,n){return r("li",{key:n,staticClass:"table-of-contents__item"},[r("router-link",{attrs:{to:e.route}},[t._v(t._s(e.title))])],1)})),0)},y=[],C=(r("d81d"),r("5033")),x={data:function(){return{chapters:C["b"].map((function(t,e){return{route:"/chapter/".concat(e+1),title:t}}))}}},O=x,M=(r("10c7"),Object(p["a"])(O,w,y,!1,null,null,null)),S=M.exports,N={getChapter:function(){return window.localStorage.getItem("bookmark.chapter")},setChapter:function(t){window.localStorage.setItem("bookmark.chapter",t)},getY:function(){return window.localStorage.getItem("bookmark.Y")},setY:function(t){window.localStorage.setItem("bookmark.Y",t)}},j={getDarkModeSetting:function(){return Boolean(window.localStorage.getItem("darkMode"))},setDarkModeSetting:function(t){var e=t?"true":"";window.localStorage.setItem("darkMode",e)}},T={name:"home",components:{TableOfContents:S},data:function(){return{chapterNum:N.getChapter(),bookmarkY:N.getY(),sutraName:C["a"]}}},$=T,E=(r("21bb"),Object(p["a"])($,k,g,!1,null,null,null)),D=E.exports,P=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"chapter"},[r("div",{staticClass:"chapter__nav"},[t.chapterNum>1?r("router-link",{attrs:{to:"/chapter/"+(t.chapterNum-1)}},[t._v("上一章")]):t._e(),r("router-link",{attrs:{to:"/"}},[t._v("目录")]),t.chapterNum<t.chapterCount?r("router-link",{attrs:{to:"/chapter/"+(t.chapterNum+1)}},[t._v("下一章")]):t._e()],1),r("base-chapter",{attrs:{"chapter-num":t.chapterNum}}),r("div",{staticClass:"chapter__nav"},[t.chapterNum>1?r("router-link",{attrs:{to:"/chapter/"+(t.chapterNum-1)}},[t._v("上一章")]):t._e(),r("router-link",{attrs:{to:"/"}},[t._v("目录")]),t.chapterNum<t.chapterCount?r("router-link",{attrs:{to:"/chapter/"+(t.chapterNum+1)}},[t._v("下一章")]):t._e()],1)],1)},Y=[],L=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"base-chapter"},[r("div",{staticClass:"base-chapter__content",domProps:{innerHTML:t._s(t.content)}}),r("div",{staticClass:"base-chapter__reading-progress"},[r("div",{staticClass:"base-chapter__text-hint"},[r("div",{staticClass:"base-chapter__progress"},[t._v(t._s(t.progress))]),r("button",{staticClass:"base-chapter__toggle-dark-mode",on:{click:t.toggleDarkMode}},[t._v(" "+t._s(t.darkModeButtonText)+" ")]),r("div",{staticClass:"base-chapter__read-time"},[t._v(t._s(t.readMinutes))])]),r("div",{staticClass:"base-chapter__progress-bar"})])])},B=[];r("a9e3"),r("d3b7");function I(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments),window.requestAnimationFrame((function(){e=!1})))}}var q={props:{chapterNum:{type:[Number,String],required:!0}},watch:{chapterNum:{handler:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,r("99c7")("./chapter-".concat(t,".md"));case 2:a=n.sent,e.content=a.default,e.$nextTick((function(){var t=e.$el.querySelector(".base-chapter__content");e.readMinutes="".concat(Math.round(t.textContent.length/250)," min read"),window.scrollTo(0,e.$route.query.Y||0)}));case 5:case"end":return n.stop()}}),n)})))()},immediate:!0}},data:function(){return{content:"",progress:"0%",readMinutes:"",darkModeButtonText:j.getDarkModeSetting()?"Dark mode is ON":"Dark mode is OFF"}},methods:{updateProgress:function(){var t=document.documentElement,e=t.scrollTop,r=t.scrollHeight-t.clientHeight,n=e/r*100;this.$el.querySelector(".base-chapter__progress-bar").style.setProperty("--scroll",n+"%"),this.progress=Math.min(Math.ceil(n),100)+"%"},saveBookmarkY:function(){N.setY(window.scrollY)},toggleDarkMode:function(){var t=j.getDarkModeSetting();this.$setDarkMode(!t),this.darkModeButtonText=j.getDarkModeSetting()?"Dark mode is ON":"Dark mode is OFF"}},mounted:function(){document.addEventListener("scroll",I(this.updateProgress),{passive:!0}),document.addEventListener("scroll",I(this.saveBookmarkY),{passive:!0})},beforeDestroy:function(){document.removeEventListener("scroll",I(this.updateProgress)),document.removeEventListener("scroll",I(this.saveBookmarkY))}},R=q,F=(r("3511"),Object(p["a"])(R,L,B,!1,null,null,null)),U=F.exports,A={name:"chapter",components:{BaseChapter:U},computed:{chapterNum:function(){return parseInt(this.$route.params.chapter_num)}},methods:{saveBookmarkChapter:function(t){N.setChapter(t)}},beforeRouteEnter:function(t,e,r){r((function(e){return e.saveBookmarkChapter(t.params.chapter_num)}))},beforeRouteUpdate:function(t,e,r){this.saveBookmarkChapter(t.params.chapter_num),r()},data:function(){return{chapterCount:C["b"].length}}},H=A,J=(r("e311"),Object(p["a"])(H,P,Y,!1,null,null,null)),W=J.exports;n["a"].use(b["a"]);var G,K=new b["a"]({routes:[{path:"/",name:"home",component:D},{path:"/chapter/:chapter_num",name:"chapter",component:W}]}),z=r("acfa");"serviceWorker"in navigator?(G=new z["a"]("".concat("","service-worker.js")),G.addEventListener("controlling",(function(){return window.location.reload()})),G.register()):G=null;var Q=G;n["a"].config.productionTip=!1,n["a"].prototype.$workbox=Q;var V=function(t){t?document.body.classList.add("dark-mode"):document.body.classList.remove("dark-mode"),j.setDarkModeSetting(t)};V(j.getDarkModeSetting()),n["a"].prototype.$setDarkMode=V,new n["a"]({router:K,render:function(t){return t(_)}}).$mount("#app")},"584f":function(t,e,r){"use strict";var n=r("dd7c"),a=r.n(n);a.a},"5c0b":function(t,e,r){"use strict";var n=r("9c0c"),a=r.n(n);a.a},"7c72":function(t,e,r){},"99c7":function(t,e,r){var n={"./chapter-1.md":["c84b","chunk-2d217a99"]};function a(t){if(!r.o(n,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=n[t],a=e[0];return r.e(e[1]).then((function(){return r.t(a,7)}))}a.keys=function(){return Object.keys(n)},a.id="99c7",t.exports=a},"9c0c":function(t,e,r){},dd7c:function(t,e,r){},e311:function(t,e,r){"use strict";var n=r("46d4"),a=r.n(n);a.a}});
//# sourceMappingURL=app.dfaa70db.js.map