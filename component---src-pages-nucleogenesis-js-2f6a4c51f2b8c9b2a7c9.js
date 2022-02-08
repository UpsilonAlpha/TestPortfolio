/*! For license information please see component---src-pages-nucleogenesis-js-2f6a4c51f2b8c9b2a7c9.js.LICENSE.txt */
(self.webpackChunktest_portfolio=self.webpackChunktest_portfolio||[]).push([[921],{5900:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var i=o.apply(null,n);i&&e.push(i)}}else if("object"===a)if(n.toString===Object.prototype.toString)for(var l in n)r.call(n,l)&&n[l]&&e.push(l);else e.push(n.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},6187:function(e,t,n){"use strict";var r=n(4942),o=n(4925),a=n(5900),i=n.n(a),l=n(7294),s=n(9541),c=n(5893),u=["bsPrefix","fluid","as","className"];function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m=l.forwardRef((function(e,t){var n=e.bsPrefix,r=e.fluid,a=e.as,l=void 0===a?"div":a,f=e.className,m=(0,o.Z)(e,u),p=(0,s.vE)(n,"container"),d="string"==typeof r?"-".concat(r):"-fluid";return(0,c.jsx)(l,h(h({ref:t},m),{},{className:i()(f,r?"".concat(p).concat(d):p)}))}));m.displayName="Container",m.defaultProps={fluid:!1},t.Z=m},9541:function(e,t,n){"use strict";n.d(t,{vE:function(){return a}});var r=n(7294);n(5893);var o=r.createContext({prefixes:{}});o.Consumer,o.Provider;function a(e,t){var n=(0,r.useContext)(o).prefixes;return e||n[t]||t}},8705:function(e,t,n){"use strict";n.r(t);var r=n(7294),o=n(5444),a=n(6187),i={color:"#ddffdd",background:"#080808",fontFamily:"Consolas",height:"100%",fontSize:"1.5vw",className:"d-flex",textAlign:"center"},l={color:"#55e575",textDecoration:"none"},s={padding:"5rem",width:"75%",background:"#151515",height:"100%",display:"inline-block",textAlign:"left"};t.default=function(){return r.createElement("main",{style:i},r.createElement(a.Z,{style:s},r.createElement("h1",null,"Nucleogenesis"),r.createElement("br",null),r.createElement("br",null),r.createElement("p",null,"Building my first mobile app was a stressful but exciting journey!"),r.createElement("br",null),r.createElement("p",null,"The game uses swipes as input to merge elements, similar to how elements fuse in stars. I had this idea when the game 2048 started to skyrocket in popularity, however instead of using numbers I decided to put a more educational twist on the main mechanic."),r.createElement("br",null),r.createElement("p",null,"The core logic of the game followed a simple algorithm. After each swipe the game went through each element in a 2D matrix using nested for loops, and checked the elements around it. The element had three options: fall, stop or merge. Once every element chose 'stop' then the event was over and the game listened for the next swipe."),r.createElement("br",null),r.createElement("p",null,"In order to get the game to run smoothly I needed to seperate the logic from the animatons at the front-end. This required me to use asynchronous functions which awaited results from the algorithm in order to play the animation."),r.createElement("br",null),r.createElement("p",null,"The game was based around a simple state machine that cycled through three states: falling, swiping and waiting. This prevented bugs that would arise from the user accidentally swiping the screen during an animation."),r.createElement("br",null),r.createElement("p",null,"Finally I designed a UI with custom art and an unlockable system which rewarded players for progressing in the game while simultaneously educating them about stars!"),r.createElement("br",null),r.createElement("p",null,"This was one of my most valuable projects as it taught me so much about developing an app to production. I realized that while getting the basics of a game down was difficult, the majority of the time spent would be in the later stages, finding bugs and improving user experience."),r.createElement("br",null),r.createElement("p",null,"However the success of this game led me to develop a second one! ",r.createElement(o.rU,{style:l,to:"/Photogenesis"},"Photogenesis"),".")))}},4942:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})},4925:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,{Z:function(){return r}})}}]);
//# sourceMappingURL=component---src-pages-nucleogenesis-js-2f6a4c51f2b8c9b2a7c9.js.map