!function(){"use strict";var e,t,n,r,o,c,f,a={},s={};function i(e){var t=s[e];if(void 0!==t)return t.exports;var n=s[e]={exports:{}};return a[e](n,n.exports,i),n.exports}i.m=a,e=[],i.O=function(t,n,r,o){if(!n){var c=1/0;for(u=0;u<e.length;u++){n=e[u][0],r=e[u][1],o=e[u][2];for(var f=!0,a=0;a<n.length;a++)(!1&o||c>=o)&&Object.keys(i.O).every((function(e){return i.O[e](n[a])}))?n.splice(a--,1):(f=!1,o<c&&(c=o));if(f){e.splice(u--,1);var s=r();void 0!==s&&(t=s)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[n,r,o]},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,{a:t}),t},n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},i.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var o=Object.create(null);i.r(o);var c={};t=t||[null,n({}),n([]),n(n)];for(var f=2&r&&e;"object"==typeof f&&!~t.indexOf(f);f=n(f))Object.getOwnPropertyNames(f).forEach((function(t){c[t]=function(){return e[t]}}));return c.default=function(){return e},i.d(o,c),o},i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.f={},i.e=function(e){return Promise.all(Object.keys(i.f).reduce((function(t,n){return i.f[n](e,t),t}),[]))},i.u=function(e){return({153:"258db49a485222dac9ed20757737a895539f3012",181:"component---src-pages-posts-voting-1-js",198:"component---src-pages-posts-osgov-mdx",294:"component---src-pages-photogenesis-js",325:"component---src-pages-posts-complexity-mdx",339:"component---src-pages-posts-complexity-1-js",412:"component---src-pages-posts-alientech-mdx",443:"component---src-pages-streak-js",532:"styles",678:"component---src-pages-index-js",739:"component---src-pages-posts-alien-tech-1-js",774:"framework",862:"component---src-pages-posts-os-gov-1-js",883:"component---src-pages-404-js",921:"component---src-pages-nucleogenesis-js",930:"component---src-pages-gridlock-js",970:"component---src-pages-posts-voting-mdx",986:"component---src-pages-posts-js"}[e]||e)+"-"+{153:"753698295182fd872cc9",181:"58d201844a0e8603591d",198:"771ca0b1cb7d7801e8a6",231:"38ea0518d153f0081e8c",294:"50e9924677ce5a9cb36f",325:"9b54564c316b8f6c0d3e",339:"5df3ac18d60cf6fdd5a1",412:"cdcc16867473141cd4b9",443:"bfa0339875ac97454bf5",532:"fb154d10a2484938ff25",610:"551c5dd3c6f5a14dde56",678:"f60de0755fd18ab18727",739:"e6a32a36a1922dd562a5",774:"cfd576da017012f81ed3",862:"d7a38d7c7459fe300e59",883:"d2ef93456b40828a9040",898:"ad79e495fd002ed74cfd",921:"c3456d143fa1f79c08f4",930:"37e5080a9e2967f3b9c4",970:"4c5c2f2ae73779047f8a",986:"47c1af88f2583e251cec"}[e]+".js"},i.miniCssF=function(e){return"styles.23c0ce5f275616c97ed1.css"},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r={},o="test-portfolio:",i.l=function(e,t,n,c){if(r[e])r[e].push(t);else{var f,a;if(void 0!==n)for(var s=document.getElementsByTagName("script"),u=0;u<s.length;u++){var d=s[u];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==o+n){f=d;break}}f||(a=!0,(f=document.createElement("script")).charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.setAttribute("data-webpack",o+n),f.src=e),r[e]=[t];var p=function(t,n){f.onerror=f.onload=null,clearTimeout(l);var o=r[e];if(delete r[e],f.parentNode&&f.parentNode.removeChild(f),o&&o.forEach((function(e){return e(n)})),t)return t(n)},l=setTimeout(p.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=p.bind(null,f.onerror),f.onload=p.bind(null,f.onload),a&&document.head.appendChild(f)}},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="/TestPortfolio/",c=function(e){return new Promise((function(t,n){var r=i.miniCssF(e),o=i.p+r;if(function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=(f=n[r]).getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(o===e||o===t))return f}var c=document.getElementsByTagName("style");for(r=0;r<c.length;r++){var f;if((o=(f=c[r]).getAttribute("data-href"))===e||o===t)return f}}(r,o))return t();!function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=function(c){if(o.onerror=o.onload=null,"load"===c.type)n();else{var f=c&&("load"===c.type?"missing":c.type),a=c&&c.target&&c.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=f,s.request=a,o.parentNode.removeChild(o),r(s)}},o.href=t,document.head.appendChild(o)}(e,o,t,n)}))},f={658:0},i.f.miniCss=function(e,t){f[e]?t.push(f[e]):0!==f[e]&&{532:1}[e]&&t.push(f[e]=c(e).then((function(){f[e]=0}),(function(t){throw delete f[e],t})))},function(){var e={658:0};i.f.j=function(t,n){var r=i.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else if(/^(532|658)$/.test(t))e[t]=0;else{var o=new Promise((function(n,o){r=e[t]=[n,o]}));n.push(r[2]=o);var c=i.p+i.u(t),f=new Error;i.l(c,(function(n){if(i.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;f.message="Loading chunk "+t+" failed.\n("+o+": "+c+")",f.name="ChunkLoadError",f.type=o,f.request=c,r[1](f)}}),"chunk-"+t,t)}},i.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,c=n[0],f=n[1],a=n[2],s=0;if(c.some((function(t){return 0!==e[t]}))){for(r in f)i.o(f,r)&&(i.m[r]=f[r]);if(a)var u=a(i)}for(t&&t(n);s<c.length;s++)o=c[s],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return i.O(u)},n=self.webpackChunktest_portfolio=self.webpackChunktest_portfolio||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}()}();
//# sourceMappingURL=webpack-runtime-233f14ebc305e84463dd.js.map