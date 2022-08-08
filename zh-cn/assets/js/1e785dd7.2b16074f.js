"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[4866],{49613:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return h}});var o=n(59496);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var a=o.createContext({}),s=function(t){var e=o.useContext(a),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=s(t.components);return o.createElement(a.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},k=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,a=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),k=s(n),h=r,d=k["".concat(a,".").concat(h)]||k[h]||m[h]||i;return n?o.createElement(d,l(l({ref:e},c),{},{components:n})):o.createElement(d,l({ref:e},c))}));function h(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=k;var p={};for(var a in e)hasOwnProperty.call(e,a)&&(p[a]=e[a]);p.originalType=t,p.mdxType="string"==typeof t?t:r,l[1]=p;for(var s=2;s<i;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}k.displayName="MDXCreateElement"},5876:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return a},default:function(){return h},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return m}});var o=n(665),r=n(40151),i=(n(59496),n(49613)),l=["components"],p={},a="httpPost",s={unversionedId:"sdk/Kotlin/kotlin/io.logto.sdk.core.http/http-post",id:"sdk/Kotlin/kotlin/io.logto.sdk.core.http/http-post",title:"httpPost",description:"inline fun &lt;T String, body Map&lt;String, String&gt;?, completion: HttpCompletion&lt;T&gt;)",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/sdk/Kotlin/kotlin/io.logto.sdk.core.http/http-post.md",sourceDirName:"sdk/Kotlin/kotlin/io.logto.sdk.core.http",slug:"/sdk/Kotlin/kotlin/io.logto.sdk.core.http/http-post",permalink:"/zh-cn/sdk/Kotlin/kotlin/io.logto.sdk.core.http/http-post",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/i18n/zh-cn/docusaurus-plugin-content-docs/current/sdk/Kotlin/kotlin/io.logto.sdk.core.http/http-post.md",tags:[],version:"current",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"httpGet",permalink:"/zh-cn/sdk/Kotlin/kotlin/io.logto.sdk.core.http/http-get"},next:{title:"makeRequest",permalink:"/zh-cn/sdk/Kotlin/kotlin/io.logto.sdk.core.http/make-request"}},c={},m=[],k={toc:m};function h(t){var e=t.components,n=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,o.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"httppost"},"httpPost"),(0,i.kt)("p",null,"inline fun ","<","T : ",(0,i.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"},"Any"),">"," httpPost(uri: ",(0,i.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", body: RequestBody, headers: ",(0,i.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html"},"Map"),"<",(0,i.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", ",(0,i.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),">","?, completion: ",(0,i.kt)("a",{parentName:"p",href:"/zh-cn/sdk/Kotlin/kotlin/io.logto.sdk.core.http/-http-completion/"},"HttpCompletion"),"<","T",">",")"),(0,i.kt)("p",null,"inline fun ","<","T : ",(0,i.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"},"Any"),">"," httpPost(uri: ",(0,i.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", body: RequestBody, completion: ",(0,i.kt)("a",{parentName:"p",href:"/zh-cn/sdk/Kotlin/kotlin/io.logto.sdk.core.http/-http-completion/"},"HttpCompletion"),"<","T",">",")"),(0,i.kt)("p",null,"fun httpPost(uri: ",(0,i.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", body: RequestBody, completion: ",(0,i.kt)("a",{parentName:"p",href:"/zh-cn/sdk/Kotlin/kotlin/io.logto.sdk.core.http/-http-empty-completion/"},"HttpEmptyCompletion"),")"),(0,i.kt)("p",null,"@",(0,i.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.jvm/-jvm-name/index.html"},"JvmName"),"(name = ",'"',"httpRawPost",'"',")"),(0,i.kt)("p",null,"fun httpPost(uri: ",(0,i.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", body: RequestBody, headers: ",(0,i.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html"},"Map"),"<",(0,i.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", ",(0,i.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),">","?, completion: ",(0,i.kt)("a",{parentName:"p",href:"/zh-cn/sdk/Kotlin/kotlin/io.logto.sdk.core.http/#1273102375%2FClasslikes%2F-470698881"},"HttpRawStringCompletion"),")"),(0,i.kt)("p",null,"@",(0,i.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.jvm/-jvm-name/index.html"},"JvmName"),"(name = ",'"',"httpRawPost",'"',")"),(0,i.kt)("p",null,"fun httpPost(uri: ",(0,i.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", body: RequestBody, completion: ",(0,i.kt)("a",{parentName:"p",href:"/zh-cn/sdk/Kotlin/kotlin/io.logto.sdk.core.http/#1273102375%2FClasslikes%2F-470698881"},"HttpRawStringCompletion"),")"))}h.isMDXComponent=!0}}]);