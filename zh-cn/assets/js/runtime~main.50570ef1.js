!function(){"use strict";var e,f,a,c,b,d={},t={};function n(e){var f=t[e];if(void 0!==f)return f.exports;var a=t[e]={exports:{}};return d[e].call(a.exports,a,a.exports,n),a.exports}n.m=d,e=[],n.O=function(f,a,c,b){if(!a){var d=1/0;for(u=0;u<e.length;u++){a=e[u][0],c=e[u][1],b=e[u][2];for(var t=!0,r=0;r<a.length;r++)(!1&b||d>=b)&&Object.keys(n.O).every((function(e){return n.O[e](a[r])}))?a.splice(r--,1):(t=!1,b<d&&(d=b));if(t){e.splice(u--,1);var o=c();void 0!==o&&(f=o)}}return f}b=b||0;for(var u=e.length;u>0&&e[u-1][2]>b;u--)e[u]=e[u-1];e[u]=[a,c,b]},n.n=function(e){var f=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(f,{a:f}),f},a=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},n.t=function(e,c){if(1&c&&(e=this(e)),8&c)return e;if("object"==typeof e&&e){if(4&c&&e.__esModule)return e;if(16&c&&"function"==typeof e.then)return e}var b=Object.create(null);n.r(b);var d={};f=f||[null,a({}),a([]),a(a)];for(var t=2&c&&e;"object"==typeof t&&!~f.indexOf(t);t=a(t))Object.getOwnPropertyNames(t).forEach((function(f){d[f]=function(){return e[f]}}));return d.default=function(){return e},n.d(b,d),b},n.d=function(e,f){for(var a in f)n.o(f,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:f[a]})},n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(f,a){return n.f[a](e,f),f}),[]))},n.u=function(e){return"assets/js/"+({53:"935f2afb",72:"f0989edc",98:"54fc379e",99:"a91dcc8b",120:"17c63cfb",297:"a708706a",316:"79318c55",447:"ac811b3c",523:"ac528851",539:"92302762",553:"cfcba740",570:"87a33efa",593:"d80d58f4",657:"c53db98a",679:"0f1fb33c",684:"ba180340",706:"f263ffd6",759:"993caaee",783:"d0c44f67",803:"13aa648a",868:"6db5d1a2",885:"b9120504",893:"a39c37aa",932:"a4e152f4",946:"3d6218be",1039:"640791d0",1090:"c8bd0431",1107:"4082bb37",1124:"29f3d226",1162:"1cb076a9",1216:"7a3b0286",1405:"e00723e0",1460:"3f19ff29",1461:"1c5ee66c",1472:"aef09e82",1509:"7c00ae5d",1539:"bf014ce9",1571:"6804366c",1610:"6ee98b3f",1665:"45d555bd",1674:"87e67e8c",1696:"61ec1664",1721:"965e0f7e",1735:"fe122054",1760:"77fa7f92",1816:"269dc2d7",1856:"60587719",1861:"804a4eba",1870:"61a99fee",1884:"d92ea3e5",1905:"e6610ace",1939:"a17a4eab",1982:"300a8c8c",1992:"1c09c42e",2079:"72637a5c",2084:"2ffa211c",2136:"8947bd81",2205:"d5881ae9",2245:"19417aff",2361:"7e015788",2451:"615fd452",2464:"e06ae8f0",2519:"ee4e7447",2521:"c03d6b72",2564:"bb23968c",2566:"b933ab8d",2604:"54c1da8c",2685:"0cbf66b4",2746:"b4bb972e",2828:"4223dbae",2846:"cb33b72d",2875:"cad2e180",2935:"f5f9fc3b",2960:"7ee45ca5",2998:"0c0f5e79",3049:"8f110cf0",3073:"ecd34ced",3075:"1091fa18",3105:"b771205b",3130:"28e1227d",3249:"00dcc411",3266:"c27965a1",3375:"0c691bfb",3378:"29f8d3bd",3382:"cbbb60f6",3410:"ac53b674",3435:"58f8c4cc",3447:"88fe3ac3",3482:"605b72c1",3501:"412bf9f8",3545:"5cf43670",3551:"1d08614d",3572:"34074128",3607:"2e56a676",3637:"d06b2a77",3748:"325bfa77",3773:"0d4e0542",3856:"86f319e1",3861:"b1e4ce5d",3884:"85e50c6a",3917:"dedd2c43",3953:"46aa984f",3978:"8c2d4645",4022:"bd31f939",4089:"d927d190",4118:"4a80692f",4144:"45761ffc",4193:"4ed2cb40",4208:"f9501fb8",4230:"73182117",4280:"7ffa924a",4300:"14d23762",4315:"10bcdcb1",4426:"c08a2307",4512:"4a498064",4621:"e4d53997",4648:"4b9544c6",4665:"d4870dc8",4669:"28f27729",4819:"0fdd4adf",4838:"2d34a582",4866:"1e785dd7",4879:"1a51771e",4894:"67029b66",4938:"12faf5ab",4985:"d308a562",4991:"22a4fb83",5021:"4c09fe8a",5110:"cd37f35e",5137:"f9e1c949",5274:"b3369afe",5370:"f0a3af46",5388:"e4348221",5396:"48104731",5403:"c6c9ae08",5430:"205222f6",5507:"08646e0c",5540:"3aad387e",5661:"98acd899",5665:"d66232fa",5764:"602954ff",5907:"3a6a1e70",5967:"d6346bae",5971:"22f87832",5977:"1fa2bff5",5981:"01d312bc",6024:"25daba0a",6060:"5e717b21",6078:"ec7fff4c",6170:"eab96aa2",6187:"de827f6f",6193:"58ad64d4",6195:"258b64b0",6361:"b99f1fec",6388:"7e176742",6402:"56f85367",6536:"fde53c68",6540:"389cf9b6",6629:"823d4963",6722:"17972f0f",6734:"aebcf907",6821:"6ad83fdd",6846:"8954c245",6902:"ee3f8c09",7015:"5d129107",7037:"de0f9193",7056:"3fe6b277",7057:"10a12b15",7214:"a938d909",7244:"ca34a2e6",7250:"1732299e",7342:"3f0928cc",7355:"9d94cda2",7500:"f1f1ff92",7579:"9e9d1882",7654:"9b578377",7670:"b93e7275",7712:"5ed03df8",7729:"a97deacd",7798:"b158ef79",7843:"997805ff",7848:"72f95380",7918:"17896441",7955:"44201294",7973:"fc8d1e75",7994:"98732d94",8e3:"b5893e4b",8070:"eb847969",8102:"084a2019",8150:"6b9ba9e5",8274:"7c864919",8378:"5c385297",8447:"f0b3b920",8456:"ae6206ca",8522:"6babd35e",8523:"8f5db588",8546:"d16bade1",8571:"56974728",8593:"43d3e6fb",8609:"b6e37812",8617:"d88ce928",8634:"6ccf0383",8677:"395176a6",8686:"dabfaeb5",8705:"1fdceb63",8737:"52b6893f",8832:"7df39147",8843:"054361e9",8882:"a97d08dc",8909:"68032bd2",8915:"85f3b9eb",8952:"4e38099b",9048:"2e55472c",9049:"b1324114",9069:"068090ba",9103:"cb4c2849",9145:"ff5921c7",9168:"b9c06196",9188:"fccd1763",9220:"15e71439",9273:"abcc661f",9334:"247783bb",9343:"728a5a52",9369:"b37f9578",9411:"6fdb3f66",9438:"b04053b3",9449:"24b48211",9514:"1be78505",9560:"0bd91fa6",9632:"50b63fb9",9712:"7981a0ab",9781:"7da724b8",9789:"7638e8e3",9836:"94c6dbb5",9918:"10e36d3c",9947:"af627702",9990:"57ccef13"}[e]||e)+"."+{53:"56b6e9df",72:"073f1f87",98:"1b0b60cb",99:"d2eea440",120:"4c78b3df",297:"31720df6",316:"828b350d",447:"5301d6a4",523:"4bfd4f26",539:"57448e0a",553:"5241abb2",570:"e0202c5c",593:"5a2bd80c",657:"d2f65da3",679:"b96fbf7d",684:"bc10c5e4",706:"8b60542c",759:"18415f70",783:"d1febe6b",803:"f979fff0",868:"511d4541",885:"9023c634",893:"cfcc4e7e",932:"807846ba",946:"778562b1",1039:"bfcb1ee7",1090:"004ff02a",1107:"f51555a3",1124:"a6a7c28a",1162:"3b16ba93",1216:"a9efb0e3",1405:"dbeeb6b7",1460:"55e0ba29",1461:"4ec99b95",1472:"17bf1aa8",1509:"ddf752b4",1539:"4669cf61",1571:"7a98facc",1610:"88442c1d",1665:"9ff0cf29",1674:"e5b2b135",1696:"cd1b8aeb",1721:"59979129",1735:"c3cb8ee4",1760:"152111a4",1816:"927946d8",1856:"097eab6a",1861:"a47b5e16",1870:"2c06e9a9",1884:"1f800bd7",1905:"9f3030db",1939:"3c685a53",1982:"d1ea975f",1992:"66a094f0",2079:"c93004ba",2084:"3a03d0e3",2136:"db1df5a5",2205:"21af6371",2245:"3d568a9b",2361:"a797ad9d",2451:"3c3ddd4c",2464:"375e25ab",2519:"85b012c0",2521:"d8b62e51",2564:"36531e4a",2566:"60b9bf59",2604:"493f926e",2685:"cfd74caf",2746:"1eafe189",2828:"0b5c094c",2846:"b8e3d9c9",2875:"9edd57c0",2935:"18470f61",2960:"fc479fa1",2998:"a4a1f356",3049:"d79b51d5",3073:"5f106c0b",3075:"37e3380a",3105:"693bbe55",3130:"84da4a2a",3249:"50c004f8",3266:"dc572a1e",3375:"956ab820",3378:"f86ad76f",3382:"550c60f3",3410:"4b7b17c1",3435:"542705c3",3447:"e0ff8cdf",3482:"32fbeded",3501:"97f7f657",3545:"e738fbfb",3551:"47254b1d",3572:"4276d769",3607:"aac64815",3637:"6ccfee02",3748:"3979f80f",3773:"827a7f76",3856:"de2ec608",3861:"83fff326",3884:"f3d9a2b7",3917:"7b02abec",3953:"ec327f3a",3978:"5a786766",4022:"21eb4562",4089:"07ee6ee9",4118:"824ce852",4144:"241b9bd4",4193:"992d1052",4208:"f966cc67",4230:"da9f5ef1",4280:"5b25c21f",4300:"4d33d04b",4315:"fa3022c6",4426:"be3cdfa3",4512:"e207065c",4621:"9f15d5b0",4648:"2166940a",4665:"a2a5783d",4669:"144d297e",4819:"44ea92d1",4838:"811dc5f6",4866:"1f51d845",4879:"8543a9e6",4894:"6ed6d466",4938:"91a925e2",4985:"bd31d845",4991:"5e644f25",5021:"37f7cd4e",5110:"534d3bed",5137:"6bfb326a",5274:"cd333e52",5370:"33bde60b",5388:"5b104b94",5396:"c056a1c7",5403:"4db3a970",5430:"cd6a0452",5507:"caff1f84",5540:"8cc090ab",5661:"bc531f2b",5665:"293feb59",5764:"d630b2da",5907:"f12129fb",5967:"144c3cc0",5971:"bd4283e8",5977:"2e060441",5981:"fad6e6fb",6024:"58ad17ff",6060:"cbc471b3",6078:"5a171771",6170:"4d411e67",6187:"cae16688",6193:"3553c4ae",6195:"b67581ea",6361:"f7d8586b",6388:"963622a1",6402:"d74b8c9b",6536:"913afaf5",6540:"ace93b99",6629:"92c3edbd",6722:"b09e31ac",6734:"e0c5691d",6821:"41078d6e",6846:"afbeff19",6902:"1e720390",7015:"69a0be72",7037:"cbd7adbc",7056:"05ba3b08",7057:"c828837c",7214:"50fdc33f",7244:"695d5d51",7250:"645623db",7342:"5706555d",7355:"39c11723",7500:"501d6c7b",7579:"cd572551",7654:"89cc5c78",7670:"49473685",7712:"0a5e5afb",7729:"396dd18a",7798:"a1c8473b",7843:"7f65860e",7848:"ed491b2d",7918:"c72c405a",7955:"86bd18ba",7973:"28e60a26",7994:"047a403f",8e3:"f1ca068e",8070:"6077cba2",8102:"03456449",8150:"076ffd00",8274:"b2db7663",8378:"b883ae17",8447:"19313738",8456:"f45e4315",8522:"495afbbf",8523:"15cc209c",8546:"cc590ac9",8571:"1383e99e",8593:"64acbd4a",8609:"a07fae20",8617:"43c3d540",8634:"8c4a2349",8677:"1b12ae62",8686:"23f3af3f",8705:"11fe6d4e",8737:"6203c411",8832:"2fb14c7f",8843:"6d20c27f",8882:"c7337f98",8909:"3a8afe12",8915:"745421c5",8952:"e3b585bd",9048:"b58cf79d",9049:"617f0c1b",9069:"acb1fcf4",9103:"3aa022cd",9145:"77ff8ecd",9168:"af7e8fb0",9188:"573a575b",9220:"5633019d",9273:"88922540",9334:"4c8ac4b5",9343:"8612a512",9369:"2b195cfa",9411:"d7e2edb2",9438:"e5bd0b75",9449:"eb24c9de",9514:"38ccb4c2",9560:"b37abb6b",9632:"f85c029c",9712:"45ee344c",9781:"e5f965e3",9789:"6ba2e663",9836:"9e9812a8",9918:"77f4fc0e",9947:"a7e934d0",9957:"446b11cb",9990:"250b10e8"}[e]+".js"},n.miniCssF=function(e){},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,f){return Object.prototype.hasOwnProperty.call(e,f)},c={},b="@logto/docs:",n.l=function(e,f,a,d){if(c[e])c[e].push(f);else{var t,r;if(void 0!==a)for(var o=document.getElementsByTagName("script"),u=0;u<o.length;u++){var i=o[u];if(i.getAttribute("src")==e||i.getAttribute("data-webpack")==b+a){t=i;break}}t||(r=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,n.nc&&t.setAttribute("nonce",n.nc),t.setAttribute("data-webpack",b+a),t.src=e),c[e]=[f];var l=function(f,a){t.onerror=t.onload=null,clearTimeout(s);var b=c[e];if(delete c[e],t.parentNode&&t.parentNode.removeChild(t),b&&b.forEach((function(e){return e(a)})),f)return f(a)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=l.bind(null,t.onerror),t.onload=l.bind(null,t.onload),r&&document.head.appendChild(t)}},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/zh-cn/",n.gca=function(e){return e={17896441:"7918",34074128:"3572",44201294:"7955",48104731:"5396",56974728:"8571",60587719:"1856",73182117:"4230",92302762:"539","935f2afb":"53",f0989edc:"72","54fc379e":"98",a91dcc8b:"99","17c63cfb":"120",a708706a:"297","79318c55":"316",ac811b3c:"447",ac528851:"523",cfcba740:"553","87a33efa":"570",d80d58f4:"593",c53db98a:"657","0f1fb33c":"679",ba180340:"684",f263ffd6:"706","993caaee":"759",d0c44f67:"783","13aa648a":"803","6db5d1a2":"868",b9120504:"885",a39c37aa:"893",a4e152f4:"932","3d6218be":"946","640791d0":"1039",c8bd0431:"1090","4082bb37":"1107","29f3d226":"1124","1cb076a9":"1162","7a3b0286":"1216",e00723e0:"1405","3f19ff29":"1460","1c5ee66c":"1461",aef09e82:"1472","7c00ae5d":"1509",bf014ce9:"1539","6804366c":"1571","6ee98b3f":"1610","45d555bd":"1665","87e67e8c":"1674","61ec1664":"1696","965e0f7e":"1721",fe122054:"1735","77fa7f92":"1760","269dc2d7":"1816","804a4eba":"1861","61a99fee":"1870",d92ea3e5:"1884",e6610ace:"1905",a17a4eab:"1939","300a8c8c":"1982","1c09c42e":"1992","72637a5c":"2079","2ffa211c":"2084","8947bd81":"2136",d5881ae9:"2205","19417aff":"2245","7e015788":"2361","615fd452":"2451",e06ae8f0:"2464",ee4e7447:"2519",c03d6b72:"2521",bb23968c:"2564",b933ab8d:"2566","54c1da8c":"2604","0cbf66b4":"2685",b4bb972e:"2746","4223dbae":"2828",cb33b72d:"2846",cad2e180:"2875",f5f9fc3b:"2935","7ee45ca5":"2960","0c0f5e79":"2998","8f110cf0":"3049",ecd34ced:"3073","1091fa18":"3075",b771205b:"3105","28e1227d":"3130","00dcc411":"3249",c27965a1:"3266","0c691bfb":"3375","29f8d3bd":"3378",cbbb60f6:"3382",ac53b674:"3410","58f8c4cc":"3435","88fe3ac3":"3447","605b72c1":"3482","412bf9f8":"3501","5cf43670":"3545","1d08614d":"3551","2e56a676":"3607",d06b2a77:"3637","325bfa77":"3748","0d4e0542":"3773","86f319e1":"3856",b1e4ce5d:"3861","85e50c6a":"3884",dedd2c43:"3917","46aa984f":"3953","8c2d4645":"3978",bd31f939:"4022",d927d190:"4089","4a80692f":"4118","45761ffc":"4144","4ed2cb40":"4193",f9501fb8:"4208","7ffa924a":"4280","14d23762":"4300","10bcdcb1":"4315",c08a2307:"4426","4a498064":"4512",e4d53997:"4621","4b9544c6":"4648",d4870dc8:"4665","28f27729":"4669","0fdd4adf":"4819","2d34a582":"4838","1e785dd7":"4866","1a51771e":"4879","67029b66":"4894","12faf5ab":"4938",d308a562:"4985","22a4fb83":"4991","4c09fe8a":"5021",cd37f35e:"5110",f9e1c949:"5137",b3369afe:"5274",f0a3af46:"5370",e4348221:"5388",c6c9ae08:"5403","205222f6":"5430","08646e0c":"5507","3aad387e":"5540","98acd899":"5661",d66232fa:"5665","602954ff":"5764","3a6a1e70":"5907",d6346bae:"5967","22f87832":"5971","1fa2bff5":"5977","01d312bc":"5981","25daba0a":"6024","5e717b21":"6060",ec7fff4c:"6078",eab96aa2:"6170",de827f6f:"6187","58ad64d4":"6193","258b64b0":"6195",b99f1fec:"6361","7e176742":"6388","56f85367":"6402",fde53c68:"6536","389cf9b6":"6540","823d4963":"6629","17972f0f":"6722",aebcf907:"6734","6ad83fdd":"6821","8954c245":"6846",ee3f8c09:"6902","5d129107":"7015",de0f9193:"7037","3fe6b277":"7056","10a12b15":"7057",a938d909:"7214",ca34a2e6:"7244","1732299e":"7250","3f0928cc":"7342","9d94cda2":"7355",f1f1ff92:"7500","9e9d1882":"7579","9b578377":"7654",b93e7275:"7670","5ed03df8":"7712",a97deacd:"7729",b158ef79:"7798","997805ff":"7843","72f95380":"7848",fc8d1e75:"7973","98732d94":"7994",b5893e4b:"8000",eb847969:"8070","084a2019":"8102","6b9ba9e5":"8150","7c864919":"8274","5c385297":"8378",f0b3b920:"8447",ae6206ca:"8456","6babd35e":"8522","8f5db588":"8523",d16bade1:"8546","43d3e6fb":"8593",b6e37812:"8609",d88ce928:"8617","6ccf0383":"8634","395176a6":"8677",dabfaeb5:"8686","1fdceb63":"8705","52b6893f":"8737","7df39147":"8832","054361e9":"8843",a97d08dc:"8882","68032bd2":"8909","85f3b9eb":"8915","4e38099b":"8952","2e55472c":"9048",b1324114:"9049","068090ba":"9069",cb4c2849:"9103",ff5921c7:"9145",b9c06196:"9168",fccd1763:"9188","15e71439":"9220",abcc661f:"9273","247783bb":"9334","728a5a52":"9343",b37f9578:"9369","6fdb3f66":"9411",b04053b3:"9438","24b48211":"9449","1be78505":"9514","0bd91fa6":"9560","50b63fb9":"9632","7981a0ab":"9712","7da724b8":"9781","7638e8e3":"9789","94c6dbb5":"9836","10e36d3c":"9918",af627702:"9947","57ccef13":"9990"}[e]||e,n.p+n.u(e)},function(){var e={1303:0,532:0};n.f.j=function(f,a){var c=n.o(e,f)?e[f]:void 0;if(0!==c)if(c)a.push(c[2]);else if(/^(1303|532)$/.test(f))e[f]=0;else{var b=new Promise((function(a,b){c=e[f]=[a,b]}));a.push(c[2]=b);var d=n.p+n.u(f),t=new Error;n.l(d,(function(a){if(n.o(e,f)&&(0!==(c=e[f])&&(e[f]=void 0),c)){var b=a&&("load"===a.type?"missing":a.type),d=a&&a.target&&a.target.src;t.message="Loading chunk "+f+" failed.\n("+b+": "+d+")",t.name="ChunkLoadError",t.type=b,t.request=d,c[1](t)}}),"chunk-"+f,f)}},n.O.j=function(f){return 0===e[f]};var f=function(f,a){var c,b,d=a[0],t=a[1],r=a[2],o=0;if(d.some((function(f){return 0!==e[f]}))){for(c in t)n.o(t,c)&&(n.m[c]=t[c]);if(r)var u=r(n)}for(f&&f(a);o<d.length;o++)b=d[o],n.o(e,b)&&e[b]&&e[b][0](),e[b]=0;return n.O(u)},a=self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[];a.forEach(f.bind(null,0)),a.push=f.bind(null,a.push.bind(a))}()}();