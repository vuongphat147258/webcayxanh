(()=>{"use strict";var e,t,r={86211:(e,t,r)=>{r.d(t,{g3:()=>n,z5:()=>o});const o="product_cat";function n(e){return e?Array.from(e.querySelectorAll(":scope > input[type=hidden]")).map((e=>{const t=(r=e)&&r.dataset&&r.dataset.name?{term_id:parseInt(r.value,10),name:r.dataset.name}:null;var r;return e.remove(),t})):[]}},86020:e=>{e.exports=window.wc.components},67221:e=>{e.exports=window.wc.data},14599:e=>{e.exports=window.wc.tracks},74617:e=>{e.exports=window.wc.wcSettings},86989:e=>{e.exports=window.wp.apiFetch},94333:e=>{e.exports=window.wp.compose},69307:e=>{e.exports=window.wp.element},65736:e=>{e.exports=window.wp.i18n},96483:e=>{e.exports=window.wp.url}},o={};function n(e){var t=o[e];if(void 0!==t)return t.exports;var a=o[e]={exports:{}};return r[e](a,a.exports,n),a.exports}n.m=r,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>"chunks/category-metabox.js?ver=20a83707665172ed4152",n.miniCssF=e=>{},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="__wcAdmin_webpackJsonp:",n.l=(r,o,a,i)=>{if(e[r])e[r].push(o);else{var c,s;if(void 0!==a)for(var l=document.getElementsByTagName("script"),p=0;p<l.length;p++){var d=l[p];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+a){c=d;break}}c||(s=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",t+a),c.src=r),e[r]=[o];var u=(t,o)=>{c.onerror=c.onload=null,clearTimeout(w);var n=e[r];if(delete e[r],c.parentNode&&c.parentNode.removeChild(c),n&&n.forEach((e=>e(o))),t)return t(o)},w=setTimeout(u.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=u.bind(null,c.onerror),c.onload=u.bind(null,c.onload),s&&document.head.appendChild(c)}},n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e+"../"})(),(()=>{var e={1011:0};n.f.j=(t,r)=>{var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise(((r,n)=>o=e[t]=[r,n]));r.push(o[2]=a);var i=n.p+n.u(t),c=new Error;n.l(i,(r=>{if(n.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",c.name="ChunkLoadError",c.type=a,c.request=i,o[1](c)}}),"chunk-"+t,t)}};var t=(t,r)=>{var o,a,[i,c,s]=r,l=0;if(i.some((t=>0!==e[t]))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);s&&s(n)}for(t&&t(r);l<i.length;l++)a=i[l],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0},r=globalThis.webpackChunk_wcAdmin_webpackJsonp=globalThis.webpackChunk_wcAdmin_webpackJsonp||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var a={};(()=>{n.r(a);var e=n(69307),t=n(86211);const r=(0,e.lazy)((()=>n.e(587).then(n.bind(n,26948)))),o=document.querySelector("#taxonomy-product_cat-metabox");if(o){const n=(0,t.g3)(o.parentElement);(0,e.render)((0,e.createElement)(e.Suspense,{fallback:null},(0,e.createElement)(r,{initialSelected:n})),o)}})(),(window.wc=window.wc||{}).productCategoryMetabox=a})();