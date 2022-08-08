"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[6193],{49613:function(t,e,n){n.d(e,{Zo:function(){return k},kt:function(){return g}});var r=n(59496);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=r.createContext({}),p=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},k=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,s=t.parentName,k=i(t,["components","mdxType","originalType","parentName"]),c=p(n),g=o,m=c["".concat(s,".").concat(g)]||c[g]||d[g]||a;return n?r.createElement(m,l(l({ref:e},k),{},{components:n})):r.createElement(m,l({ref:e},k))}));function g(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,l=new Array(a);l[0]=c;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},86e3:function(t,e,n){n.r(e),n.d(e,{assets:function(){return k},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return d}});var r=n(665),o=n(40151),a=(n(59496),n(49613)),l=["components"],i={},s="RefreshTokenTokenResponse",p={unversionedId:"sdk/Kotlin/kotlin/io.logto.sdk.core.type/-refresh-token-token-response/index",id:"sdk/Kotlin/kotlin/io.logto.sdk.core.type/-refresh-token-token-response/index",title:"RefreshTokenTokenResponse",description:"data class RefreshTokenTokenResponse(val accessToken String, val idToken String, val expiresIn: Long)",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/sdk/Kotlin/kotlin/io.logto.sdk.core.type/-refresh-token-token-response/index.md",sourceDirName:"sdk/Kotlin/kotlin/io.logto.sdk.core.type/-refresh-token-token-response",slug:"/sdk/Kotlin/kotlin/io.logto.sdk.core.type/-refresh-token-token-response/",permalink:"/zh-cn/sdk/Kotlin/kotlin/io.logto.sdk.core.type/-refresh-token-token-response/",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/i18n/zh-cn/docusaurus-plugin-content-docs/current/sdk/Kotlin/kotlin/io.logto.sdk.core.type/-refresh-token-token-response/index.md",tags:[],version:"current",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"OidcConfigResponse",permalink:"/zh-cn/sdk/Kotlin/kotlin/io.logto.sdk.core.type/-oidc-config-response/"},next:{title:"io.logto.sdk.core.util",permalink:"/zh-cn/sdk/Kotlin/kotlin/io.logto.sdk.core.util/"}},k={},d=[{value:"Constructors",id:"constructors",level:2},{value:"Properties",id:"properties",level:2}],c={toc:d};function g(t){var e=t.components,n=(0,o.Z)(t,l);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"refreshtokentokenresponse"},"RefreshTokenTokenResponse"),(0,a.kt)("p",null,"data class RefreshTokenTokenResponse(val accessToken: ",(0,a.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", val refreshToken: ",(0,a.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", val idToken: ",(0,a.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),"?, val scope: ",(0,a.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", val expiresIn: ",(0,a.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"},"Long"),")"),(0,a.kt)("h2",{id:"constructors"},"Constructors"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u6982\u8981"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"RefreshTokenTokenResponse"),(0,a.kt)("td",{parentName:"tr",align:null},"fun RefreshTokenTokenResponse(accessToken: ",(0,a.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", refreshToken: ",(0,a.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", idToken: ",(0,a.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),"?, scope: ",(0,a.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", expiresIn: ",(0,a.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"},"Long"),")")))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u6982\u8981"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"accessToken"),(0,a.kt)("td",{parentName:"tr",align:null},"val accessToken: ",(0,a.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"expiresIn"),(0,a.kt)("td",{parentName:"tr",align:null},"val expiresIn: ",(0,a.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"},"Long"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"idToken"),(0,a.kt)("td",{parentName:"tr",align:null},"val idToken: ",(0,a.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),"?")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"refreshToken"),(0,a.kt)("td",{parentName:"tr",align:null},"val refreshToken: ",(0,a.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"scope"),(0,a.kt)("td",{parentName:"tr",align:null},"val scope: ",(0,a.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"))))))}g.isMDXComponent=!0}}]);