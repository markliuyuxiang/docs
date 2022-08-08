"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[2818],{49613:function(t,e,o){o.d(e,{Zo:function(){return p},kt:function(){return g}});var n=o(59496);function r(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function a(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function i(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?a(Object(o),!0).forEach((function(e){r(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function l(t,e){if(null==t)return{};var o,n,r=function(t,e){if(null==t)return{};var o,n,r={},a=Object.keys(t);for(n=0;n<a.length;n++)o=a[n],e.indexOf(o)>=0||(r[o]=t[o]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)o=a[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(r[o]=t[o])}return r}var d=n.createContext({}),s=function(t){var e=n.useContext(d),o=e;return t&&(o="function"==typeof t?t(e):i(i({},e),t)),o},p=function(t){var e=s(t.components);return n.createElement(d.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var o=t.components,r=t.mdxType,a=t.originalType,d=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),u=s(o),g=r,m=u["".concat(d,".").concat(g)]||u[g]||c[g]||a;return o?n.createElement(m,i(i({ref:e},p),{},{components:o})):n.createElement(m,i({ref:e},p))}));function g(t,e){var o=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=o.length,i=new Array(a);i[0]=u;var l={};for(var d in e)hasOwnProperty.call(e,d)&&(l[d]=e[d]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var s=2;s<a;s++)i[s]=o[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},1634:function(t,e,o){o.r(e),o.d(e,{assets:function(){return p},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var n=o(665),r=o(40151),a=(o(59496),o(49613)),i=["components"],l={},d="LogtoAuthSession",s={unversionedId:"sdk/Kotlin/android/io.logto.sdk.android.auth.logto/-logto-auth-session/index",id:"sdk/Kotlin/android/io.logto.sdk.android.auth.logto/-logto-auth-session/index",title:"LogtoAuthSession",description:"class LogtoAuthSession(val context LogtoConfig, val oidcConfig String, completion: Completion&lt;LogtoException, CodeTokenResponse&gt;)",source:"@site/docs/sdk/Kotlin/android/io.logto.sdk.android.auth.logto/-logto-auth-session/index.md",sourceDirName:"sdk/Kotlin/android/io.logto.sdk.android.auth.logto/-logto-auth-session",slug:"/sdk/Kotlin/android/io.logto.sdk.android.auth.logto/-logto-auth-session/",permalink:"/sdk/Kotlin/android/io.logto.sdk.android.auth.logto/-logto-auth-session/",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/sdk/Kotlin/android/io.logto.sdk.android.auth.logto/-logto-auth-session/index.md",tags:[],version:"current",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"io.logto.sdk.android.auth.logto",permalink:"/sdk/Kotlin/android/io.logto.sdk.android.auth.logto/"},next:{title:"LogtoWebViewAuthActivity",permalink:"/sdk/Kotlin/android/io.logto.sdk.android.auth.logto/-logto-web-view-auth-activity/"}},p={},c=[{value:"Constructors",id:"constructors",level:2},{value:"Functions",id:"functions",level:2},{value:"Properties",id:"properties",level:2}],u={toc:c};function g(t){var e=t.components,o=(0,r.Z)(t,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"logtoauthsession"},"LogtoAuthSession"),(0,a.kt)("p",null,"class LogtoAuthSession(val context: ",(0,a.kt)("a",{parentName:"p",href:"https://developer.android.com/reference/kotlin/android/app/Activity.html"},"Activity"),", val logtoConfig: ",(0,a.kt)("a",{parentName:"p",href:"/sdk/Kotlin/android/io.logto.sdk.android.type/-logto-config/"},"LogtoConfig"),", val oidcConfig: OidcConfigResponse, val redirectUri: ",(0,a.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", completion: ",(0,a.kt)("a",{parentName:"p",href:"/sdk/Kotlin/android/io.logto.sdk.android.completion/-completion/"},"Completion"),"<",(0,a.kt)("a",{parentName:"p",href:"/sdk/Kotlin/android/io.logto.sdk.android.exception/-logto-exception/"},"LogtoException"),", CodeTokenResponse",">",")"),(0,a.kt)("h2",{id:"constructors"},"Constructors"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"LogtoAuthSession"),(0,a.kt)("td",{parentName:"tr",align:null},"fun LogtoAuthSession(context: ",(0,a.kt)("a",{parentName:"td",href:"https://developer.android.com/reference/kotlin/android/app/Activity.html"},"Activity"),", logtoConfig: ",(0,a.kt)("a",{parentName:"td",href:"/sdk/Kotlin/android/io.logto.sdk.android.type/-logto-config/"},"LogtoConfig"),", oidcConfig: OidcConfigResponse, redirectUri: ",(0,a.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", completion: ",(0,a.kt)("a",{parentName:"td",href:"/sdk/Kotlin/android/io.logto.sdk.android.completion/-completion/"},"Completion"),"<",(0,a.kt)("a",{parentName:"td",href:"/sdk/Kotlin/android/io.logto.sdk.android.exception/-logto-exception/"},"LogtoException"),", CodeTokenResponse",">",")")))),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"handleCallbackUri"),(0,a.kt)("td",{parentName:"tr",align:null},"fun handleCallbackUri(callbackUri: ",(0,a.kt)("a",{parentName:"td",href:"https://developer.android.com/reference/kotlin/android/net/Uri.html"},"Uri"),")")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"handleUserCancel"),(0,a.kt)("td",{parentName:"tr",align:null},"fun handleUserCancel()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"start"),(0,a.kt)("td",{parentName:"tr",align:null},"fun start()")))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"context"),(0,a.kt)("td",{parentName:"tr",align:null},"val context: ",(0,a.kt)("a",{parentName:"td",href:"https://developer.android.com/reference/kotlin/android/app/Activity.html"},"Activity"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"logtoConfig"),(0,a.kt)("td",{parentName:"tr",align:null},"val logtoConfig: ",(0,a.kt)("a",{parentName:"td",href:"/sdk/Kotlin/android/io.logto.sdk.android.type/-logto-config/"},"LogtoConfig"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"oidcConfig"),(0,a.kt)("td",{parentName:"tr",align:null},"val oidcConfig: OidcConfigResponse")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"redirectUri"),(0,a.kt)("td",{parentName:"tr",align:null},"val redirectUri: ",(0,a.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"))))))}g.isMDXComponent=!0}}]);