"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[185],{9613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,v=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(v,i(i({ref:t},u),{},{components:n})):a.createElement(v,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8661:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(9496),r=n(1626),o="tabItem_ZZXe";function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},2418:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(5443),r=n(9496),o=n(1626),i=n(5874),l=n(2103),c=n(3299),s=n(2821),u="tabList_kQjL",p="tabItem_wrqk";function d(e){var t,n,i=e.lazy,d=e.block,m=e.defaultValue,v=e.values,g=e.groupId,h=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=v?v:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,l.l)(f,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===m?m:null!=(t=null!=m?m:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:k[0].props.value;if(null!==N&&!f.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,c.U)(),w=y.tabGroupChoices,Z=y.setTabGroupChoices,C=(0,r.useState)(N),x=C[0],T=C[1],O=[],D=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var M=w[g];null!=M&&M!==x&&f.some((function(e){return e.value===M}))&&T(M)}var I=function(e){var t=e.currentTarget,n=O.indexOf(t),a=f[n].value;a!==x&&(D(t),T(a),null!=g&&Z(g,String(a)))},S=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=O.indexOf(e.currentTarget)+1;n=null!=(a=O[r])?a:O[0];break;case"ArrowLeft":var o,i=O.indexOf(e.currentTarget)-1;n=null!=(o=O[i])?o:O[O.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},h)},f.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return O.push(e)},onKeyDown:S,onFocus:I,onClick:I},i,{className:(0,o.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(k.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function m(e){var t=(0,i.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},6903:function(e,t,n){n.d(t,{ZP:function(){return c}});var a=n(5443),r=n(3010),o=(n(9496),n(9613)),i=["components"],l={toc:[]};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",null,"\u672c\u7bc7\u6559\u7a0b\u9ed8\u8ba4\u4f60\u5df2\u7ecf\u5728\u7ba1\u7406\u754c\u9762\u4e2d\u6210\u529f\u521b\u5efa\u4e86\u4e00\u4e2a\u300c",n.type,"\u300d\u7c7b\u578b\u7684\u5e94\u7528\u3002\u5982\u679c\u4f60\u8fd8\u6ca1\u6709\u5b8c\u6210\u8fd9\u4e00\u6b65\u64cd\u4f5c\uff0c\u8bf7\u53c2\u9605 ",(0,o.kt)("a",{href:"../../tutorials/get-started/create-and-integrate-the-first-app"},"\u8fd9\u7bc7\u6559\u7a0b"),"\uff0c\u521b\u5efa\u5e94\u7528\u4e4b\u540e\u518d\u7ee7\u7eed\u3002"))))}c.isMDXComponent=!0},4619:function(e,t,n){n.d(t,{ZP:function(){return c}});var a=n(5443),r=n(3010),o=(n(9496),n(9613)),i=["components"],l={toc:[]};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u8ba9\u6211\u4eec\u5728\u8fd9\u91cc\u5207\u6362\u5230\u300c\u7ba1\u7406\u63a7\u5236\u53f0\u300d\u7684\u5e94\u7528\u8be6\u60c5\u9875\u3002\u6dfb\u52a0\u4e00\u4e2a\u503c\u4e3a"," ",(0,o.kt)("code",null,n.redirectUri)," \u7684 Redirect URI \u5e76\u70b9\u6309\u300c\u4fdd\u5b58\u53d8\u66f4\u300d\u3002"),(0,o.kt)("img",{alt:"Redirect URI in Admin Console",src:n.figureSrc,width:"50%"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.oauth.com/oauth2-servers/redirect-uris/"},"Redirect URI")," \u662f\u4e00\u4e2a OAuth 2.0 \u7684\u6982\u5ff5\uff0c\u7528\u4e8e\u8868\u660e\u5728 authentication \u540e\u91cd\u5b9a\u5411\u81f3\u7684\u4f4d\u7f6e\u3002"))}c.isMDXComponent=!0},6404:function(e,t,n){n.d(t,{ZP:function(){return c}});var a=n(5443),r=n(3010),o=(n(9496),n(9613)),i=["components"],l={toc:[]};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh-cn/docs/recipes/customize-sie/"},"\u81ea\u5b9a\u4e49\u767b\u5f55\u4f53\u9a8c")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh-cn/docs/tutorials/get-started/enable-passcode-sign-in"},"\u542f\u7528\u77ed\u4fe1\u6216\u90ae\u4ef6\u9a8c\u8bc1\u7801\u767b\u5f55")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh-cn/docs/tutorials/get-started/enable-social-sign-in"},"\u542f\u7528\u793e\u4ea4\u767b\u5f55")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh-cn/docs/recipes/protect-your-api/"},"\u4fdd\u62a4\u4f60\u7684 API"))))}c.isMDXComponent=!0},4692:function(e,t,n){n.d(t,{ZP:function(){return c}});var a=n(5443),r=n(3010),o=(n(9496),n(9613)),i=["components"],l={toc:[]};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",null,"\u5728\u8c03\u7528 ",(0,o.kt)("code",null,n.calling)," \u4e4b\u524d\uff0c\u8bf7\u5148\u786e\u4fdd\u5df2\u7ecf\u5728\u300c\u7ba1\u7406\u63a7\u5236\u53f0\u300d\u4e2d\u6b63\u786e\u914d\u7f6e\u4e86 Redirect URI\u3002"))))}c.isMDXComponent=!0},5849:function(e,t,n){n.d(t,{ZP:function(){return s}});var a=n(5443),r=n(3010),o=(n(9496),n(9613)),i=n.p+"assets/images/web-sign-in-flow-e0b056d8128741cf51bb6921ce76a564.png",l=["components"],c={toc:[]};function s(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u767b\u5f55\u6d41\u7a0b\u53ef\u4ee5\u88ab\u7b80\u5316\u4e3a\uff1a"),(0,o.kt)("center",null,(0,o.kt)("img",{alt:"Web sign-in flow",src:i,width:"80%"})))}s.isMDXComponent=!0},2703:function(e,t,n){n.d(t,{ZP:function(){return c}});var a=n(5443),r=n(3010),o=(n(9496),n(9613)),i=["components"],l={toc:[]};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u8c03\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},".signOut()")," \u5c06\u6e05\u7406\u5185\u5b58\u4e0e localStorage \u4e2d\u7684\u6240\u6709 Logto \u6570\u636e\uff08\u5982\u679c\u6709\uff09\u3002"),(0,o.kt)("p",null,"\u5728\u9000\u51fa\u767b\u5f55\u540e\uff0c\u8ba9\u4f60\u7684\u7528\u6237\u91cd\u65b0\u56de\u5230\u4f60\u7684\u7f51\u7ad9\u662f\u4e2a\u4e0d\u9519\u7684\u9009\u62e9\u3002\u8ba9\u6211\u4eec\u5c06 ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:1234")," \u6dfb\u52a0\u81f3\u300c\u7ba1\u7406\u63a7\u5236\u53f0\u300d\u91cc\u7684 Post Sign-out URIs \u4e2d\uff08\u4f4d\u4e8e Redirect URIs \u4e0b\u65b9\uff09\uff0c\u5e76\u5c06\u5176\u4f5c\u4e3a\u8c03\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},".signOut()")," \u7684\u53c2\u6570\u3002"))}c.isMDXComponent=!0},7564:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return k},default:function(){return w},frontMatter:function(){return h},metadata:function(){return f},toc:function(){return N}});var a=n(5443),r=n(3010),o=(n(9496),n(9613)),i=n(2418),l=n(8661),c=n(6903),s=n(4692),u=n(5849),p=n(2703),d=n(4619),m=n(6404),v=n(3937),g=["components"],h={sidebar_label:"\u539f\u751f JS"},k="\u539f\u751f JS\uff1a\u96c6\u6210 `@logto/browser`",f={unversionedId:"docs/recipes/integrate-logto/vanilla-js",id:"docs/recipes/integrate-logto/vanilla-js",title:"\u539f\u751f JS\uff1a\u96c6\u6210 `@logto/browser`",description:"Browser SDK \u662f \u6846\u67b6\u65e0\u5173 \u7684\uff0c\u4e5f\u5c31\u662f\u8bf4\u53ea\u8981\u4f60\u5199\u4e00\u5c42\u9002\u914d\u6846\u67b6\u7684 SDK \u5305\u88c5\uff0c\u5373\u53ef\u5728\u4efb\u610f\u4e00\u79cd\u524d\u7aef\u6846\u67b6\u4e2d\u4f7f\u7528\u3002\u8fd9\u4e5f\u662f @logto/react \u548c @logto/vue \u505a\u7684\u4e8b\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/docs/recipes/integrate-logto/vanilla-js.mdx",sourceDirName:"docs/recipes/integrate-logto",slug:"/docs/recipes/integrate-logto/vanilla-js",permalink:"/zh-cn/docs/recipes/integrate-logto/vanilla-js",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/integrate-logto/vanilla-js.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"\u539f\u751f JS"},sidebar:"docsSidebar",previous:{title:"Traditional Web",permalink:"/zh-cn/docs/recipes/integrate-logto/traditional"},next:{title:"Vue",permalink:"/zh-cn/docs/recipes/integrate-logto/vue"}},b={},N=[{value:"\u5c06 Logto SDK \u6dfb\u52a0\u81f3\u4f9d\u8d56",id:"\u5c06-logto-sdk-\u6dfb\u52a0\u81f3\u4f9d\u8d56",level:2},{value:"\u521d\u59cb\u5316 LogtoClient",id:"\u521d\u59cb\u5316-logtoclient",level:2},{value:"\u767b\u5f55",id:"\u767b\u5f55",level:2},{value:"\u914d\u7f6e Redirect URI",id:"\u914d\u7f6e-redirect-uri",level:3},{value:"\u5b9e\u73b0\u767b\u5f55\u6309\u94ae",id:"\u5b9e\u73b0\u767b\u5f55\u6309\u94ae",level:3},{value:"\u5904\u7406\u91cd\u5b9a\u5411",id:"\u5904\u7406\u91cd\u5b9a\u5411",level:3},{value:"\u9000\u51fa\u767b\u5f55",id:"\u9000\u51fa\u767b\u5f55",level:2},{value:"\u5b9e\u73b0\u9000\u51fa\u767b\u5f55\u6309\u94ae",id:"\u5b9e\u73b0\u9000\u51fa\u767b\u5f55\u6309\u94ae",level:3},{value:"\u5ef6\u5c55\u9605\u8bfb",id:"\u5ef6\u5c55\u9605\u8bfb",level:2}],y={toc:N};function w(e){var t=e.components,n=(0,r.Z)(e,g);return(0,o.kt)("wrapper",(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u539f\u751f-js\u96c6\u6210-logtobrowser"},"\u539f\u751f JS\uff1a\u96c6\u6210 ",(0,o.kt)("inlineCode",{parentName:"h1"},"@logto/browser")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Browser SDK \u662f ",(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/64725017/what-does-it-mean-by-framework-agnostic"},"\u6846\u67b6\u65e0\u5173")," \u7684\uff0c\u4e5f\u5c31\u662f\u8bf4\u53ea\u8981\u4f60\u5199\u4e00\u5c42\u9002\u914d\u6846\u67b6\u7684 SDK \u5305\u88c5\uff0c\u5373\u53ef\u5728\u4efb\u610f\u4e00\u79cd\u524d\u7aef\u6846\u67b6\u4e2d\u4f7f\u7528\u3002\u8fd9\u4e5f\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"@logto/react")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"@logto/vue")," \u505a\u7684\u4e8b\u3002"))),(0,o.kt)(c.ZP,{type:"\u5355\u9875\u5e94\u7528",mdxType:"AppNote"}),(0,o.kt)("h2",{id:"\u5c06-logto-sdk-\u6dfb\u52a0\u81f3\u4f9d\u8d56"},"\u5c06 Logto SDK \u6dfb\u52a0\u81f3\u4f9d\u8d56"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @logto/browser\n"))),(0,o.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @logto/browser\n"))),(0,o.kt)(l.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add @logto/browser\n")))),(0,o.kt)("h2",{id:"\u521d\u59cb\u5316-logtoclient"},"\u521d\u59cb\u5316 LogtoClient"),(0,o.kt)("p",null,"\u5f15\u5165\u5e76\u901a\u8fc7\u914d\u7f6e\u521d\u59cb\u5316 ",(0,o.kt)("inlineCode",{parentName:"p"},"LogtoClient"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import LogtoClient from '@logto/browser';\n\nconst logtoClient = new LogtoClient({\n  endpoint: '<your-logto-endpoint>', // \u4f8b\u5982 http://localhost:3001\n  appId: '<your-application-id>',\n});\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u5728\u63a5\u4e0b\u6765\u7684\u4ee3\u7801\u7247\u6bb5\u4e2d\uff0c\u6211\u4eec\u5047\u8bbe\u4f60\u7684\u5e94\u7528\u8fd0\u884c\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:1234"),"\u3002"))),(0,o.kt)("h2",{id:"\u767b\u5f55"},"\u767b\u5f55"),(0,o.kt)(u.ZP,{mdxType:"SignInFlowSummary"}),(0,o.kt)("h3",{id:"\u914d\u7f6e-redirect-uri"},"\u914d\u7f6e Redirect URI"),(0,o.kt)(d.ZP,{figureSrc:v.Z,redirectUri:"http://localhost:1234/callback",mdxType:"ConfigureRedirectUri"}),(0,o.kt)("h3",{id:"\u5b9e\u73b0\u767b\u5f55\u6309\u94ae"},"\u5b9e\u73b0\u767b\u5f55\u6309\u94ae"),(0,o.kt)(s.ZP,{calling:".signIn()",mdxType:"SignInNote"}),(0,o.kt)("p",null,"\u8fd4\u56de\u4f60\u7684 IDE \u6216\u7f16\u8f91\u5668\uff0c\u4f7f\u7528\u5982\u4e0b\u4ee3\u7801\u6765\u5b9e\u73b0\u4e00\u4e2a\u767b\u5f55\u6309\u94ae\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<button onclick=\"logtoClient.signIn('http://localhost:1234/callback')\">\u767b\u5f55</button>\n")),(0,o.kt)("h3",{id:"\u5904\u7406\u91cd\u5b9a\u5411"},"\u5904\u7406\u91cd\u5b9a\u5411"),(0,o.kt)("p",null,"\u9a6c\u4e0a\u5c31\u8981\u5927\u529f\u544a\u6210\uff01\u5728\u4e0a\u4e00\u6b65\uff0c\u6211\u4eec\u5c06 ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:1234/callback")," \u7528\u4f5c Redirect URI\uff0c\u73b0\u5728\u6211\u4eec\u9700\u8981\u5bf9\u5176\u59a5\u5584\u5904\u7406\u3002\u5728\u4f60\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"/callback")," \u8def\u7531\u4e0b\u63d2\u5165\u5982\u4e0b\u4ee3\u7801\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"try {\n  await logtoClient.handleSignInCallback();\n  console.log(logtoClient.isAuthenticated); // true\n} catch {\n  // \u5904\u7406\u9519\u8bef\n}\n")),(0,o.kt)("p",null,"\u73b0\u5728\u53ef\u4ee5\u6d4b\u8bd5\u767b\u5f55\u6d41\u7a0b\u4e86\u3002"),(0,o.kt)("h2",{id:"\u9000\u51fa\u767b\u5f55"},"\u9000\u51fa\u767b\u5f55"),(0,o.kt)(p.ZP,{mdxType:"SignOutNote"}),(0,o.kt)("h3",{id:"\u5b9e\u73b0\u9000\u51fa\u767b\u5f55\u6309\u94ae"},"\u5b9e\u73b0\u9000\u51fa\u767b\u5f55\u6309\u94ae"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<button onclick=\"logtoClient.signOut('http://localhost:1234')\">\u9000\u51fa\u767b\u5f55</button>\n")),(0,o.kt)("h2",{id:"\u5ef6\u5c55\u9605\u8bfb"},"\u5ef6\u5c55\u9605\u8bfb"),(0,o.kt)(m.ZP,{mdxType:"FurtherReadings"}))}w.isMDXComponent=!0},3937:function(e,t,n){t.Z=n.p+"assets/images/web-redirect-uri-b4992589015d65ea3dc15b8b8131cd26.png"}}]);