(self.webpackChunktest_portfolio=self.webpackChunktest_portfolio||[]).push([[678],{7613:function(n){var t,r,e,i,u,o,a={}.toString;function c(n,t){var r;return function e(i){return n.length>1?function(){var u=i?i.concat():[];return r=t&&r||this,u.push.apply(u,arguments)<n.length&&arguments.length?e.call(r,u):n.apply(r,u)}:n}()}t=c((function(n,t){return n.apply(null,t)})),r=function(n){return c(n)},e=c((function(n,t,r){return n(r,t)})),i=function(n){return t=function(t){return function(){return n(t(t)).apply(null,arguments)}},function(){return n(t(t)).apply(null,arguments)};var t},u=c((function(n,t,r,e){return n(t(r),t(e))})),o=function(n){var t;return t={},function(){var r,e,i,u,o,c;for(e=[],i=0,u=arguments.length;i<u;++i)e.push(arguments[i]);return r=e,o=function(){var n,t,e,i=[];for(n=0,e=(t=r).length;n<e;++n)c=t[n],i.push(c+a.call(c).slice(8,-1));return i}().join(""),t[o]=o in t?t[o]:n.apply(null,r)}},n.exports={curry:r,flip:e,fix:i,apply:t,over:u,memoize:o}},7815:function(n){var t,r,e,i,u,o,a,c,l,f,s,p,h,g,v,d,m,y,x,b,j,k,M,z,I,A,B,W,L,w,C,E,T,q,N,O,S,P,U,Z,_,F,H,R,V,D,G,J,K,Q,X,Y,$,nn,tn,rn,en,un,on,an,cn,ln,fn,sn,pn,hn,gn,vn,dn,mn,yn={}.toString;function xn(n,t){var r;return function e(i){return n.length>1?function(){var u=i?i.concat():[];return r=t&&r||this,u.push.apply(u,arguments)<n.length&&arguments.length?e.call(r,u):n.apply(r,u)}:n}()}function bn(n,t){for(var r=-1,e=t.length>>>0;++r<e;)if(n===t[r])return!0;return!1}function jn(n){return!n}t=xn((function(n,t){var r,e;for(r=0,e=t.length;r<e;++r)n(t[r]);return t})),r=xn((function(n,t){var r,e,i,u=[];for(r=0,e=t.length;r<e;++r)i=t[r],u.push(n(i));return u})),e=function(n){var t,r,e,i=[];for(t=0,r=n.length;t<r;++t)(e=n[t])&&i.push(e);return i},i=xn((function(n,t){var r,e,i,u=[];for(r=0,e=t.length;r<e;++r)n(i=t[r])&&u.push(i);return u})),u=xn((function(n,t){var r,e,i,u=[];for(r=0,e=t.length;r<e;++r)n(i=t[r])||u.push(i);return u})),o=xn((function(n,t){var r,e;return r=gn(n,t),e=t.slice(),null!=r&&e.splice(r,1),e})),a=xn((function(n,t){var r,e,i,u,o;for(r=[],e=[],i=0,u=t.length;i<u;++i)(n(o=t[i])?r:e).push(o);return[r,e]})),c=xn((function(n,t){var r,e,i;for(r=0,e=t.length;r<e;++r)if(n(i=t[r]))return i})),l=f=function(n){return n[0]},s=function(n){if(n.length)return n.slice(1)},p=function(n){return n[n.length-1]},h=function(n){if(n.length)return n.slice(0,-1)},g=function(n){return!n.length},v=function(n){return n.concat().reverse()},d=function(n){var t,r,e,i;for(t=[],r=0,e=n.length;r<e;++r)bn(i=n[r],t)||t.push(i);return t},m=xn((function(n,t){var r,e,i,u,o,a=[];for(r=[],e=0,i=t.length;e<i;++e)bn(o=n(u=t[e]),r)||(r.push(o),a.push(u));return a})),y=x=xn((function(n,t,r){var e,i;for(e=0,i=r.length;e<i;++e)t=n(t,r[e]);return t})),b=j=xn((function(n,t){return y(n,t[0],t.slice(1))})),k=xn((function(n,t,r){var e;for(e=r.length-1;e>=0;--e)t=n(r[e],t);return t})),M=xn((function(n,t){return k(n,t[t.length-1],t.slice(0,-1))})),z=xn((function(n,t){var r,e,i;for(r=[],e=t;null!=(i=n(e));)r.push(i[0]),e=i[1];return r})),I=function(n){return[].concat.apply([],n)},A=xn((function(n,t){var r;return[].concat.apply([],function(){var e,i,u,o=[];for(e=0,u=(i=t).length;e<u;++e)r=i[e],o.push(n(r));return o}())})),B=function(n){var t;return[].concat.apply([],function(){var r,e,i,u=[];for(r=0,i=(e=n).length;r<i;++r)t=e[r],"Array"===yn.call(t).slice(8,-1)?u.push(B(t)):u.push(t);return u}())},W=function(n){var t,r,e,i,u,o,a,c,l;for(r=[],e=1,i=arguments.length;e<i;++e)r.push(arguments[e]);t=r,u=[];n:for(e=0,o=n.length;e<o;++e){for(a=n[e],c=0,l=t.length;c<l;++c)if(bn(a,t[c]))continue n;u.push(a)}return u},L=function(n){var t,r,e,i,u,o,a,c,l;for(r=[],e=1,i=arguments.length;e<i;++e)r.push(arguments[e]);t=r,u=[];n:for(e=0,o=n.length;e<o;++e){for(a=n[e],c=0,l=t.length;c<l;++c)if(!bn(a,t[c]))continue n;u.push(a)}return u},w=function(){var n,t,r,e,i,u,o,a,c,l;for(t=[],r=0,e=arguments.length;r<e;++r)t.push(arguments[r]);for(i=[],r=0,u=(n=t).length;r<u;++r)for(a=0,c=(o=n[r]).length;a<c;++a)bn(l=o[a],i)||i.push(l);return i},C=xn((function(n,t){var r,e,i,u;for(r={},e=0,i=t.length;e<i;++e)(u=n(t[e]))in r?r[u]+=1:r[u]=1;return r})),E=xn((function(n,t){var r,e,i,u,o;for(r={},e=0,i=t.length;e<i;++e)(o=n(u=t[e]))in r?r[o].push(u):r[o]=[u];return r})),T=function(n){var t,r;for(t=0,r=n.length;t<r;++t)if(!n[t])return!1;return!0},q=function(n){var t,r;for(t=0,r=n.length;t<r;++t)if(n[t])return!0;return!1},N=xn((function(n,t){var r,e;for(r=0,e=t.length;r<e;++r)if(n(t[r]))return!0;return!1})),O=xn((function(n,t){var r,e;for(r=0,e=t.length;r<e;++r)if(!n(t[r]))return!1;return!0})),S=function(n){return n.concat().sort((function(n,t){return n>t?1:n<t?-1:0}))},P=xn((function(n,t){return t.concat().sort(n)})),U=xn((function(n,t){return t.concat().sort((function(t,r){return n(t)>n(r)?1:n(t)<n(r)?-1:0}))})),Z=function(n){var t,r,e;for(t=0,r=0,e=n.length;r<e;++r)t+=n[r];return t},_=function(n){var t,r,e;for(t=1,r=0,e=n.length;r<e;++r)t*=n[r];return t},F=H=function(n){var t,r,e;for(t=0,r=0,e=n.length;r<e;++r)t+=n[r];return t/n.length},R=function(n){var t,r,e,i,u;for(t=n[0],r=0,i=(e=n.slice(1)).length;r<i;++r)(u=e[r])>t&&(t=u);return t},V=function(n){var t,r,e,i,u;for(t=n[0],r=0,i=(e=n.slice(1)).length;r<i;++r)(u=e[r])<t&&(t=u);return t},D=xn((function(n,t){var r,e,i,u,o;for(r=t[0],e=0,u=(i=t.slice(1)).length;e<u;++e)n(o=i[e])>n(r)&&(r=o);return r})),G=xn((function(n,t){var r,e,i,u,o;for(r=t[0],e=0,u=(i=t.slice(1)).length;e<u;++e)n(o=i[e])<n(r)&&(r=o);return r})),J=K=xn((function(n,t,r){var e,i;return e=t,[t].concat(function(){var t,u,o,a=[];for(t=0,o=(u=r).length;t<o;++t)i=u[t],a.push(e=n(e,i));return a}())})),Q=X=xn((function(n,t){if(t.length)return J(n,t[0],t.slice(1))})),Y=xn((function(n,t,r){return r=r.concat().reverse(),J(n,t,r).reverse()})),$=xn((function(n,t){if(t.length)return t=t.concat().reverse(),J(n,t[0],t.slice(1)).reverse()})),nn=xn((function(n,t,r){return r.slice(n,t)})),tn=xn((function(n,t){return n<=0?t.slice(0,0):t.slice(0,n)})),rn=xn((function(n,t){return n<=0?t:t.slice(n)})),en=xn((function(n,t){return[tn(n,t),rn(n,t)]})),un=xn((function(n,t){var r,e;if(!(r=t.length))return t;for(e=0;e<r&&n(t[e]);)e+=1;return t.slice(0,e)})),on=xn((function(n,t){var r,e;if(!(r=t.length))return t;for(e=0;e<r&&n(t[e]);)e+=1;return t.slice(e)})),an=xn((function(n,t){return[un(n,t),on(n,t)]})),cn=xn((function(n,t){return an(function(){var n=arguments;return function(){var t,r;for(r=n[0].apply(this,arguments),t=1;t<n.length;++t)r=n[t](r);return r}}(n,jn),t)})),ln=xn((function(n,t){var r,e,i,u,o,a;for(r=[],e=t.length,i=0,u=n.length;i<u&&(o=i,a=n[i],o!==e);++i)r.push([a,t[o]]);return r})),fn=xn((function(n,t,r){var e,i,u,o,a,c;for(e=[],i=r.length,u=0,o=t.length;u<o&&(a=u,c=t[u],a!==i);++u)e.push(n(c,r[a]));return e})),sn=function(){var n,t,r,e,i,u,o,a,c,l,f,s=[];for(t=[],r=0,e=arguments.length;r<e;++r)t.push(arguments[r]);for(i=void 0,r=0,u=(n=t).length;r<u;++r)i<=(a=(o=n[r]).length)||(i=a);for(r=0;r<i;++r){for(c=r,l=[],f=0,u=n.length;f<u;++f)o=n[f],l.push(o[c]);s.push(l)}return s},pn=function(n){var t,r,e,i,u,o,a,c,l,f=[];for(r=[],e=1,i=arguments.length;e<i;++e)r.push(arguments[e]);for(u=void 0,e=0,o=(t=r).length;e<o;++e)u<=(c=(a=t[e]).length)||(u=c);for(e=0;e<u;++e)l=e,f.push(n.apply(null,s()));return f;function s(){var n,r,e,i=[];for(n=0,e=(r=t).length;n<e;++n)a=r[n],i.push(a[l]);return i}},hn=xn((function(n,t){return n<0?t[t.length+n]:t[n]})),gn=xn((function(n,t){var r,e,i;for(r=0,e=t.length;r<e;++r)if(i=r,t[r]===n)return i})),vn=xn((function(n,t){var r,e,i,u=[];for(r=0,e=t.length;r<e;++r)i=r,t[r]===n&&u.push(i);return u})),dn=xn((function(n,t){var r,e,i;for(r=0,e=t.length;r<e;++r)if(i=r,n(t[r]))return i})),mn=xn((function(n,t){var r,e,i,u=[];for(r=0,e=t.length;r<e;++r)i=r,n(t[r])&&u.push(i);return u})),n.exports={each:t,map:r,filter:i,compact:e,reject:u,remove:o,partition:a,find:c,head:l,first:f,tail:s,last:p,initial:h,empty:g,reverse:v,difference:W,intersection:L,union:w,countBy:C,groupBy:E,fold:y,fold1:b,foldl:x,foldl1:j,foldr:k,foldr1:M,unfoldr:z,andList:T,orList:q,any:N,all:O,unique:d,uniqueBy:m,sort:S,sortWith:P,sortBy:U,sum:Z,product:_,mean:F,average:H,concat:I,concatMap:A,flatten:B,maximum:R,minimum:V,maximumBy:D,minimumBy:G,scan:J,scan1:Q,scanl:K,scanl1:X,scanr:Y,scanr1:$,slice:nn,take:tn,drop:rn,splitAt:en,takeWhile:un,dropWhile:on,span:an,breakList:cn,zip:ln,zipWith:fn,zipAll:sn,zipAllWith:pn,at:hn,elemIndex:gn,elemIndices:vn,findIndex:dn,findIndices:mn}},4744:function(n){var t,r,e,i,u,o,a,c,l,f,s,p,h,g,v,d,m,y,x,b,j,k,M,z,I,A,B,W,L,w,C,E;function T(n,t){var r;return function e(i){return n.length>1?function(){var u=i?i.concat():[];return r=t&&r||this,u.push.apply(u,arguments)<n.length&&arguments.length?e.call(r,u):n.apply(r,u)}:n}()}t=T((function(n,t){return n>t?n:t})),r=T((function(n,t){return n<t?n:t})),e=function(n){return-n},i=Math.abs,u=function(n){return n<0?-1:n>0?1:0},o=T((function(n,t){return~~(n/t)})),a=T((function(n,t){return n%t})),c=T((function(n,t){return Math.floor(n/t)})),l=T((function(n,t){var r;return(n%(r=t)+r)%r})),f=function(n){return 1/n},p=2*(s=Math.PI),h=Math.exp,g=Math.sqrt,v=Math.log,d=T((function(n,t){return Math.pow(n,t)})),m=Math.sin,y=Math.tan,x=Math.cos,b=Math.asin,j=Math.acos,k=Math.atan,M=T((function(n,t){return Math.atan2(n,t)})),z=function(n){return~~n},I=Math.round,A=Math.ceil,B=Math.floor,W=function(n){return n!=n},L=function(n){return n%2==0},w=function(n){return n%2!=0},C=T((function(n,t){var r;for(n=Math.abs(n),t=Math.abs(t);0!==t;)r=n%t,n=t,t=r;return n})),E=T((function(n,t){return Math.abs(Math.floor(n/C(n,t)*t))})),n.exports={max:t,min:r,negate:e,abs:i,signum:u,quot:o,rem:a,div:c,mod:l,recip:f,pi:s,tau:p,exp:h,sqrt:g,ln:v,pow:d,sin:m,tan:y,cos:x,acos:j,asin:b,atan:k,atan2:M,truncate:z,round:I,ceiling:A,floor:B,isItNaN:W,even:L,odd:w,gcd:C,lcm:E}},1774:function(n){var t,r,e,i,u,o,a,c,l,f,s,p,h,g;function v(n,t){var r;return function e(i){return n.length>1?function(){var u=i?i.concat():[];return r=t&&r||this,u.push.apply(u,arguments)<n.length&&arguments.length?e.call(r,u):n.apply(r,u)}:n}()}t=function(n){var t,r,e=[];for(t in n)r=n[t],e.push(r);return e},r=function(n){var t,r=[];for(t in n)r.push(t);return r},e=function(n){var t,r,e,i={};for(t=0,r=n.length;t<r;++t)i[(e=n[t])[0]]=e[1];return i},i=function(n){var t,r,e=[];for(t in n)r=n[t],e.push([t,r]);return e},u=v((function(n,t){var r,e,i,u={};for(r=0,e=n.length;r<e;++r)i=r,u[n[r]]=t[i];return u})),o=function(n){var t,r,e,i;for(e in t=[],r=[],n)i=n[e],t.push(e),r.push(i);return[t,r]},a=function(n){var t;for(t in n)return!1;return!0},c=v((function(n,t){var r;for(r in t)n(t[r]);return t})),l=v((function(n,t){var r,e,i={};for(r in t)e=t[r],i[r]=n(e);return i})),f=function(n){var t,r,e={};for(t in n)(r=n[t])&&(e[t]=r);return e},s=v((function(n,t){var r,e,i={};for(r in t)n(e=t[r])&&(i[r]=e);return i})),p=v((function(n,t){var r,e,i={};for(r in t)n(e=t[r])||(i[r]=e);return i})),h=v((function(n,t){var r,e,i,u;for(i in r={},e={},t)(n(u=t[i])?r:e)[i]=u;return[r,e]})),g=v((function(n,t){var r,e;for(r in t)if(n(e=t[r]))return e})),n.exports={values:t,keys:r,pairsToObj:e,objToPairs:i,listsToObj:u,objToLists:o,empty:a,each:c,map:l,filter:s,compact:f,reject:p,partition:h,find:g}},7417:function(n){var t,r,e,i,u,o,a,c,l,f,s,p,h;function g(n,t){var r;return function e(i){return n.length>1?function(){var u=i?i.concat():[];return r=t&&r||this,u.push.apply(u,arguments)<n.length&&arguments.length?e.call(r,u):n.apply(r,u)}:n}()}t=g((function(n,t){return t.split(n)})),r=g((function(n,t){return t.join(n)})),e=function(n){return n.length?n.split("\n"):[]},i=function(n){return n.join("\n")},u=function(n){return n.length?n.split(/[ ]+/):[]},o=function(n){return n.join(" ")},a=function(n){return n.split("")},c=function(n){return n.join("")},l=function(n){return n.split("").reverse().join("")},f=g((function(n,t){var r,e;for(r="",e=0;e<n;++e)r+=t;return r})),s=function(n){return n.charAt(0).toUpperCase()+n.slice(1)},p=function(n){return n.replace(/[-_]+(.)?/g,(function(n,t){return(null!=t?t:"").toUpperCase()}))},h=function(n){return n.replace(/([^-A-Z])([A-Z]+)/g,(function(n,t,r){return t+"-"+(r.length>1?r:r.toLowerCase())})).replace(/^([A-Z]+)/,(function(n,t){return t.length>1?t+"-":t.toLowerCase()}))},n.exports={split:t,join:r,lines:e,unlines:i,words:u,unwords:o,chars:a,unchars:c,reverse:l,repeat:f,capitalize:s,camelize:p,dasherize:h}},1627:function(n,t,r){var e,i,u,o,a,c,l,f,s,p={}.toString;function h(n,t){var r;return function e(i){return n.length>1?function(){var u=i?i.concat():[];return r=t&&r||this,u.push.apply(u,arguments)<n.length&&arguments.length?e.call(r,u):n.apply(r,u)}:n}()}e=r(7613),i=r(7815),u=r(1774),o=r(7417),a=r(4744),c=function(n){return n},l=h((function(n,t){return p.call(t).slice(8,-1)===n})),f=h((function(n,t){var r,e=[];for(r=0;r<n;++r)e.push(t);return e})),o.empty=i.empty,o.slice=i.slice,o.take=i.take,o.drop=i.drop,o.splitAt=i.splitAt,o.takeWhile=i.takeWhile,o.dropWhile=i.dropWhile,o.span=i.span,o.breakStr=i.breakList,(s={Func:e,List:i,Obj:u,Str:o,Num:a,id:c,isType:l,replicate:f}).each=i.each,s.map=i.map,s.filter=i.filter,s.compact=i.compact,s.reject=i.reject,s.partition=i.partition,s.find=i.find,s.head=i.head,s.first=i.first,s.tail=i.tail,s.last=i.last,s.initial=i.initial,s.empty=i.empty,s.reverse=i.reverse,s.difference=i.difference,s.intersection=i.intersection,s.union=i.union,s.countBy=i.countBy,s.groupBy=i.groupBy,s.fold=i.fold,s.foldl=i.foldl,s.fold1=i.fold1,s.foldl1=i.foldl1,s.foldr=i.foldr,s.foldr1=i.foldr1,s.unfoldr=i.unfoldr,s.andList=i.andList,s.orList=i.orList,s.any=i.any,s.all=i.all,s.unique=i.unique,s.uniqueBy=i.uniqueBy,s.sort=i.sort,s.sortWith=i.sortWith,s.sortBy=i.sortBy,s.sum=i.sum,s.product=i.product,s.mean=i.mean,s.average=i.average,s.concat=i.concat,s.concatMap=i.concatMap,s.flatten=i.flatten,s.maximum=i.maximum,s.minimum=i.minimum,s.maximumBy=i.maximumBy,s.minimumBy=i.minimumBy,s.scan=i.scan,s.scanl=i.scanl,s.scan1=i.scan1,s.scanl1=i.scanl1,s.scanr=i.scanr,s.scanr1=i.scanr1,s.slice=i.slice,s.take=i.take,s.drop=i.drop,s.splitAt=i.splitAt,s.takeWhile=i.takeWhile,s.dropWhile=i.dropWhile,s.span=i.span,s.breakList=i.breakList,s.zip=i.zip,s.zipWith=i.zipWith,s.zipAll=i.zipAll,s.zipAllWith=i.zipAllWith,s.at=i.at,s.elemIndex=i.elemIndex,s.elemIndices=i.elemIndices,s.findIndex=i.findIndex,s.findIndices=i.findIndices,s.apply=e.apply,s.curry=e.curry,s.flip=e.flip,s.fix=e.fix,s.over=e.over,s.split=o.split,s.join=o.join,s.lines=o.lines,s.unlines=o.unlines,s.words=o.words,s.unwords=o.unwords,s.chars=o.chars,s.unchars=o.unchars,s.repeat=o.repeat,s.capitalize=o.capitalize,s.camelize=o.camelize,s.dasherize=o.dasherize,s.values=u.values,s.keys=u.keys,s.pairsToObj=u.pairsToObj,s.objToPairs=u.objToPairs,s.listsToObj=u.listsToObj,s.objToLists=u.objToLists,s.max=a.max,s.min=a.min,s.negate=a.negate,s.abs=a.abs,s.signum=a.signum,s.quot=a.quot,s.rem=a.rem,s.div=a.div,s.mod=a.mod,s.recip=a.recip,s.pi=a.pi,s.tau=a.tau,s.exp=a.exp,s.sqrt=a.sqrt,s.ln=a.ln,s.pow=a.pow,s.sin=a.sin,s.tan=a.tan,s.cos=a.cos,s.acos=a.acos,s.asin=a.asin,s.atan=a.atan,s.atan2=a.atan2,s.truncate=a.truncate,s.round=a.round,s.ceiling=a.ceiling,s.floor=a.floor,s.isItNaN=a.isItNaN,s.even=a.even,s.odd=a.odd,s.gcd=a.gcd,s.lcm=a.lcm,s.VERSION="1.2.1",n.exports=s},7500:function(n,t,r){"use strict";r.r(t),r.d(t,{default:function(){return s}});var e=r(1721),i=(r(1627),r(7294)),u=r.p+"static/UpsilonAlpha-59a8a1ec0bfc10ca7409bce85a5b7a46.png",o={color:"#CCCCCC",background:"#202020",padding:"96px",paddingBottom:"500px",fontFamily:"Consolas"},a={textAlign:"center",position:"relative",marginTop:"50px"},c={textAlign:"center",padding:"20px"},l={justifyContent:"center",alignItems:"center",paddingLeft:"45%"},f=function(n){function t(){return n.apply(this,arguments)||this}return(0,e.Z)(t,n),t.prototype.render=function(){return i.createElement("div",null,i.createElement("img",{src:u}))},t}(i.Component),s=function(){return i.createElement("main",{style:o},i.createElement("div",{style:l},i.createElement("img",{src:u,width:"100px",padding:"0px"})),i.createElement("h1",{style:a},"Hi, I'm Ulban!"),i.createElement("h1",{style:a},"I make apps and games for nerds!"),i.createElement("p",{style:c},"Have a look at my projects!"),i.createElement(f,null),i.createElement(f,null),i.createElement(f,null),i.createElement(f,null),i.createElement(f,null),i.createElement(f,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-8947e96e53a416eb71aa.js.map