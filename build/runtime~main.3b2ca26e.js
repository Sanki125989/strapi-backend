(()=>{"use strict";var u={},m={};function s(n){var i=m[n];if(i!==void 0)return i.exports;var a=m[n]={id:n,loaded:!1,exports:{}};return u[n].call(a.exports,a,a.exports,s),a.loaded=!0,a.exports}s.m=u,(()=>{var n=[];s.O=(i,a,t,r)=>{if(a){r=r||0;for(var o=n.length;o>0&&n[o-1][2]>r;o--)n[o]=n[o-1];n[o]=[a,t,r];return}for(var e=1/0,o=0;o<n.length;o++){for(var[a,t,r]=n[o],c=!0,l=0;l<a.length;l++)(r&!1||e>=r)&&Object.keys(s.O).every(j=>s.O[j](a[l]))?a.splice(l--,1):(c=!1,r<e&&(e=r));if(c){n.splice(o--,1);var f=t();f!==void 0&&(i=f)}}return i}})(),s.n=n=>{var i=n&&n.__esModule?()=>n.default:()=>n;return s.d(i,{a:i}),i},(()=>{var n=Object.getPrototypeOf?a=>Object.getPrototypeOf(a):a=>a.__proto__,i;s.t=function(a,t){if(t&1&&(a=this(a)),t&8||typeof a=="object"&&a&&(t&4&&a.__esModule||t&16&&typeof a.then=="function"))return a;var r=Object.create(null);s.r(r);var o={};i=i||[null,n({}),n([]),n(n)];for(var e=t&2&&a;typeof e=="object"&&!~i.indexOf(e);e=n(e))Object.getOwnPropertyNames(e).forEach(c=>o[c]=()=>a[c]);return o.default=()=>a,s.d(r,o),r}})(),s.d=(n,i)=>{for(var a in i)s.o(i,a)&&!s.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:i[a]})},s.f={},s.e=n=>Promise.all(Object.keys(s.f).reduce((i,a)=>(s.f[a](n,i),i),[])),s.u=n=>""+({46:"content-type-builder-translation-zh-Hans-json",90:"i18n-translation-de-json",92:"api-tokens-edit-page",96:"email-translation-de-json",123:"ru-json",129:"i18n-translation-es-json",302:"sso-settings-page",320:"en-json",395:"tr-json",435:"email-translation-it-json",562:"no-json",585:"upload-translation-pt-json",606:"sk-json",615:"upload-translation-uk-json",695:"upload-settings",742:"content-type-builder-translation-th-json",744:"email-translation-cs-json",749:"th-json",801:"Admin-authenticatedApp",830:"he-json",931:"content-type-builder-translation-en-json",994:"content-manager",1001:"content-type-builder-translation-nl-json",1009:"upload-translation-ms-json",1011:"zh-json",1018:"email-translation-ko-json",1023:"content-type-builder-translation-it-json",1056:"upload-translation-tr-json",1157:"email-translation-pt-BR-json",1167:"users-permissions-translation-ko-json",1180:"i18n-translation-tr-json",1312:"ja-json",1331:"upload-translation-es-json",1375:"upload-translation-pt-BR-json",1377:"ko-json",1442:"users-permissions-translation-cs-json",1495:"email-settings-page",1674:"users-permissions-translation-ru-json",1930:"users-permissions-translation-pt-json",2137:"i18n-translation-fr-json",2151:"content-type-builder-translation-id-json",2246:"content-type-builder-translation-dk-json",2248:"gu-json",2282:"users-providers-settings-page",2380:"users-permissions-translation-tr-json",2411:"email-translation-tr-json",2464:"users-permissions-translation-de-json",2489:"upload-translation-ko-json",2492:"transfer-tokens-edit-page",2544:"admin-edit-roles-page",2553:"zh-Hans-json",2567:"content-type-builder-translation-ko-json",2603:"email-translation-en-json",2648:"email-translation-ar-json",2657:"content-type-builder-translation-cs-json",2671:"nl-json",2742:"users-permissions-translation-zh-Hans-json",2812:"audit-logs-settings-page",3025:"ms-json",3038:"upload-translation-sk-json",3043:"email-translation-zh-Hans-json",3095:"users-permissions-translation-sk-json",3098:"users-permissions-translation-fr-json",3166:"email-translation-pt-json",3206:"email-translation-nl-json",3278:"vi-json",3304:"content-type-builder-translation-tr-json",3340:"pt-json",3455:"admin-roles-list",3516:"ca-json",3530:"users-permissions-translation-vi-json",3552:"i18n-settings-page",3650:"upload",3677:"Admin_pluginsPage",3702:"users-permissions-translation-pl-json",3825:"email-translation-dk-json",3948:"content-type-builder-translation-pl-json",3964:"content-type-builder-translation-ms-json",3981:"Admin_homePage",4021:"upload-translation-de-json",4121:"webhook-list-page",4179:"users-permissions-translation-id-json",4263:"admin-edit-users",4299:"api-tokens-create-page",4302:"content-type-builder-translation-zh-json",4587:"email-translation-th-json",4693:"email-translation-fr-json",4804:"upload-translation-ru-json",4816:"transfer-tokens-create-page",4987:"upload-translation-pl-json",5053:"upload-translation-zh-json",5162:"webhook-edit-page",5199:"admin-users",5222:"upload-translation-it-json",5296:"i18n-translation-dk-json",5388:"email-translation-ru-json",5396:"users-permissions-translation-zh-json",5516:"Admin_marketplace",5538:"admin-app",5751:"email-translation-es-json",5880:"upload-translation-ja-json",5894:"hu-json",5895:"Admin_settingsPage",5905:"content-type-builder-list-view",5906:"content-type-builder-translation-pt-BR-json",6232:"upload-translation-th-json",6280:"i18n-translation-ko-json",6332:"hi-json",6377:"users-permissions-translation-dk-json",6434:"upload-translation-en-json",6460:"users-permissions-translation-en-json",6745:"email-translation-uk-json",6784:"email-translation-ms-json",6817:"it-json",6831:"upload-translation-zh-Hans-json",6836:"users-permissions-translation-uk-json",6848:"email-translation-zh-json",6901:"de-json",7048:"users-permissions-translation-nl-json",7094:"users-permissions-translation-ar-json",7155:"content-type-builder-translation-de-json",7186:"content-type-builder-translation-ru-json",7327:"email-translation-vi-json",7347:"highlight.js",7403:"uk-json",7465:"upload-translation-dk-json",7519:"cs-json",7663:"email-translation-id-json",7808:"i18n-translation-zh-json",7817:"users-permissions-translation-es-json",7828:"users-permissions-translation-th-json",7833:"upload-translation-fr-json",7846:"pl-json",7898:"dk-json",7934:"content-type-builder-translation-pt-json",7958:"ar-json",7997:"content-type-builder-translation-sk-json",8006:"fr-json",8056:"api-tokens-list-page",8155:"review-workflows-settings",8175:"i18n-translation-en-json",8178:"email-translation-ja-json",8329:"content-type-builder-translation-sv-json",8342:"content-type-builder-translation-es-json",8360:"eu-json",8367:"es-json",8418:"users-email-settings-page",8423:"upload-translation-ca-json",8467:"users-permissions-translation-sv-json",8481:"email-translation-pl-json",8573:"content-type-builder-translation-uk-json",8736:"users-permissions-translation-pt-BR-json",8853:"users-roles-settings-page",8880:"content-type-builder",8897:"id-json",8907:"content-type-builder-translation-ja-json",8965:"content-type-builder-translation-fr-json",9220:"users-permissions-translation-ms-json",9303:"sv-json",9366:"i18n-translation-pl-json",9412:"email-translation-sk-json",9460:"users-advanced-settings-page",9497:"Admin_profilePage",9501:"Admin_InternalErrorPage",9502:"users-permissions-translation-ja-json",9511:"content-type-builder-translation-ar-json",9514:"Upload_ConfigureTheView",9600:"transfer-tokens-list-page",9647:"pt-BR-json",9726:"sa-json",9737:"i18n-translation-ru-json",9762:"i18n-translation-zh-Hans-json",9797:"upload-translation-he-json",9903:"ml-json",9905:"users-permissions-translation-it-json"}[n]||n)+"."+{46:"f0d79373",90:"d09e1814",92:"32d65448",96:"95480646",123:"871a72f0",129:"2212ddc8",302:"6685d54f",320:"f3cf7fbb",395:"ca27dde6",435:"4d7a02c6",562:"cad6b30e",585:"961a5afb",606:"9a04e2eb",615:"d9545ef2",695:"172a5d6d",742:"566a2d6a",744:"3e50e975",749:"2dc2bce2",801:"844e81da",830:"16a99fee",931:"23c4c362",994:"4acf70d7",1001:"108a1962",1009:"52c20d3d",1011:"0c6726e8",1018:"ee66c50e",1023:"a0b862cb",1056:"515a0e0a",1157:"76067030",1167:"0a7f547b",1180:"8701f9a6",1312:"7e72a207",1331:"a04e305f",1375:"42f2194b",1377:"88aa9f95",1442:"87b1e2b7",1495:"136f5b24",1674:"367b00bc",1930:"9fdf32b4",2137:"0bed58b1",2151:"7d74f811",2246:"acfa7148",2248:"b50c58c6",2282:"1b5be380",2380:"4192b5d8",2411:"acfe3bc3",2464:"d146be80",2489:"47e56b0e",2492:"eade8261",2544:"0e331e9a",2553:"da2acda4",2567:"e8b40d08",2603:"1e7f59a1",2648:"80d09e16",2657:"d27f66bd",2671:"080f85b2",2742:"71e8f9de",2812:"11dc8728",3025:"c346ce23",3038:"b33173c8",3043:"5bbf0fd3",3095:"7cf85514",3098:"0c7a79c4",3166:"5bb10c08",3206:"48a55784",3214:"bb9a07c7",3219:"0d7f8539",3278:"e3950194",3304:"a834ead8",3340:"7e2bbdc7",3455:"aaa6452c",3516:"797b7f85",3530:"5696314f",3552:"2ff7e907",3650:"ed23495b",3677:"bd4ee1d1",3702:"38165b36",3783:"a6a88469",3825:"193ac38b",3948:"c1e0a27f",3964:"87f31f4e",3981:"e8558c93",4021:"14309bba",4121:"e35e705c",4179:"aa4343f7",4263:"ffb61c18",4299:"0f5053c1",4302:"1780781b",4415:"d5c641cc",4587:"2f5ba541",4693:"af48a643",4804:"63d8fd58",4816:"0cc78f11",4987:"7d8c8972",5053:"ca662583",5125:"6fefa869",5162:"3b108a9c",5199:"52774ed7",5222:"4884155a",5296:"e84afcd5",5388:"8ebbb721",5396:"73c1fb55",5516:"ad22ccce",5538:"40dbe782",5751:"4ee59b04",5880:"9fd6ad8a",5894:"95252253",5895:"2f1bb3d0",5905:"4a0b6672",5906:"781ff92e",6232:"d8b309c8",6280:"7d853a15",6332:"da80978b",6377:"322f0359",6434:"cd15b8d6",6460:"6c2728d2",6745:"441c6e90",6784:"f29bbf91",6817:"34ec19f4",6831:"93f23e3f",6836:"21b0db9a",6848:"b1e4b246",6901:"e8bc1cb5",7027:"966c6866",7048:"899b1663",7094:"1ad046aa",7155:"3ebca8dd",7186:"7c55b94c",7327:"61d0c4aa",7347:"ed34136b",7403:"9bde5cef",7465:"3928ed62",7519:"30a0e45c",7663:"6931d480",7692:"46584f8d",7808:"51f75f50",7817:"0796da1f",7828:"ee05b07b",7833:"6c0bc8e8",7846:"c9131de5",7898:"4c3b4ded",7934:"92ea32cd",7958:"4388cc84",7997:"81b34e37",8006:"21b79720",8056:"adf77d7b",8155:"c8577d0b",8175:"c325df49",8178:"7f59a162",8329:"83739040",8342:"4eaa1bcc",8360:"fe9aa509",8367:"ceecc0d5",8418:"d5f5b741",8423:"1217cc74",8467:"3e82f253",8481:"015b7413",8573:"e9135349",8736:"45ccd7d8",8853:"609b5d03",8880:"f045df08",8897:"8fcc1b72",8907:"2b560478",8965:"6aa6810f",9220:"78ebb399",9241:"8922ac9a",9303:"baff33df",9366:"c17ee198",9381:"a5b4572f",9412:"2ea9055a",9460:"5689009b",9497:"332c4c1f",9501:"f8f855a6",9502:"b74e4563",9511:"b4e224ea",9514:"76c23bcf",9600:"2b47a103",9627:"5cd422ff",9647:"34a8f367",9726:"a128401f",9737:"23e09d66",9762:"213a7e08",9797:"59f16bdb",9903:"bc2a34a4",9905:"8e7ad717"}[n]+".chunk.js",s.miniCssF=n=>{},s.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),s.o=(n,i)=>Object.prototype.hasOwnProperty.call(n,i),(()=>{var n={},i="api:";s.l=(a,t,r,o)=>{if(n[a]){n[a].push(t);return}var e,c;if(r!==void 0)for(var l=document.getElementsByTagName("script"),f=0;f<l.length;f++){var d=l[f];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==i+r){e=d;break}}e||(c=!0,e=document.createElement("script"),e.charset="utf-8",e.timeout=120,s.nc&&e.setAttribute("nonce",s.nc),e.setAttribute("data-webpack",i+r),e.src=a),n[a]=[t];var b=(g,j)=>{e.onerror=e.onload=null,clearTimeout(p);var h=n[a];if(delete n[a],e.parentNode&&e.parentNode.removeChild(e),h&&h.forEach(y=>y(j)),g)return g(j)},p=setTimeout(b.bind(null,void 0,{type:"timeout",target:e}),12e4);e.onerror=b.bind(null,e.onerror),e.onload=b.bind(null,e.onload),c&&document.head.appendChild(e)}})(),s.r=n=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},s.nmd=n=>(n.paths=[],n.children||(n.children=[]),n),s.p="/admin/",(()=>{s.b=document.baseURI||self.location.href;var n={1303:0};s.f.j=(t,r)=>{var o=s.o(n,t)?n[t]:void 0;if(o!==0)if(o)r.push(o[2]);else if(t!=1303){var e=new Promise((d,b)=>o=n[t]=[d,b]);r.push(o[2]=e);var c=s.p+s.u(t),l=new Error,f=d=>{if(s.o(n,t)&&(o=n[t],o!==0&&(n[t]=void 0),o)){var b=d&&(d.type==="load"?"missing":d.type),p=d&&d.target&&d.target.src;l.message="Loading chunk "+t+` failed.
(`+b+": "+p+")",l.name="ChunkLoadError",l.type=b,l.request=p,o[1](l)}};s.l(c,f,"chunk-"+t,t)}else n[t]=0},s.O.j=t=>n[t]===0;var i=(t,r)=>{var[o,e,c]=r,l,f,d=0;if(o.some(p=>n[p]!==0)){for(l in e)s.o(e,l)&&(s.m[l]=e[l]);if(c)var b=c(s)}for(t&&t(r);d<o.length;d++)f=o[d],s.o(n,f)&&n[f]&&n[f][0](),n[f]=0;return s.O(b)},a=self.webpackChunkapi=self.webpackChunkapi||[];a.forEach(i.bind(null,0)),a.push=i.bind(null,a.push.bind(a))})(),s.nc=void 0})();