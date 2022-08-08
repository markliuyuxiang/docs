"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[553],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),c=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),k=o,m=d["".concat(a,".").concat(k)]||d[k]||u[k]||i;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=d;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},16424:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return a},default:function(){return k},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=n(665),o=n(40151),i=(n(59496),n(49613)),l=["components"],s={},a="withReservedScopes",c={unversionedId:"sdk/Kotlin/kotlin/io.logto.sdk.core.util/-scope-utils/with-reserved-scopes",id:"sdk/Kotlin/kotlin/io.logto.sdk.core.util/-scope-utils/with-reserved-scopes",title:"withReservedScopes",description:"fun withReservedScopes(scopes List&lt;String&gt;",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/sdk/Kotlin/kotlin/io.logto.sdk.core.util/-scope-utils/with-reserved-scopes.md",sourceDirName:"sdk/Kotlin/kotlin/io.logto.sdk.core.util/-scope-utils",slug:"/sdk/Kotlin/kotlin/io.logto.sdk.core.util/-scope-utils/with-reserved-scopes",permalink:"/zh-cn/sdk/Kotlin/kotlin/io.logto.sdk.core.util/-scope-utils/with-reserved-scopes",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/i18n/zh-cn/docusaurus-plugin-content-docs/current/sdk/Kotlin/kotlin/io.logto.sdk.core.util/-scope-utils/with-reserved-scopes.md",tags:[],version:"current",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"ScopeUtils",permalink:"/zh-cn/sdk/Kotlin/kotlin/io.logto.sdk.core.util/-scope-utils/"},next:{title:"TokenUtils",permalink:"/zh-cn/sdk/Kotlin/kotlin/io.logto.sdk.core.util/-token-utils/"}},p={},u=[{value:"Return",id:"return",level:4},{value:"Parameters",id:"parameters",level:2}],d={toc:u};function k(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"withreservedscopes"},"withReservedScopes"),(0,i.kt)("p",null,"fun withReservedScopes(scopes: ",(0,i.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"},"List"),"<",(0,i.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),">","?): ",(0,i.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"},"List"),"<",(0,i.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),">"),(0,i.kt)("p",null,"\u4f7f\u5f97\u4f20\u5165\u7684 Scope \u5217\u8868\u5305\u542b ",(0,i.kt)("inlineCode",{parentName:"p"},"open_id")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"offline_access")),(0,i.kt)("h4",{id:"return"},"Return"),(0,i.kt)("p",null,"\u6dfb\u52a0 ",(0,i.kt)("inlineCode",{parentName:"p"},"open_id")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"offline_access")," \u540e\u7684 Scope \u5217\u8868"),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,i.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"scopes"),(0,i.kt)("td",{parentName:"tr",align:null},"\u521d\u59cb\u503c Scope \u5217\u8868")))))}k.isMDXComponent=!0}}]);