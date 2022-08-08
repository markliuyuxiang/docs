(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[3759],{54604:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return p}});var r=s(4775),i=s(71212),n=JSON.parse('{"openapi":"3.0.1","info":{"title":"Logto Core","version":"0.1.0"},"paths":{"/api/session":{"post":{"tags":["Session"],"parameters":[],"responses":{"200":{"description":"OK"}}},"delete":{"tags":["Session"],"parameters":[],"responses":{"200":{"description":"OK"}}}},"/api/session/sign-in/username-password":{"post":{"tags":["Session"],"parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["username","password"],"properties":{"username":{"type":"string","minLength":1},"password":{"type":"string","minLength":1}}}}}},"responses":{"200":{"description":"OK"}}}},"/api/session/consent":{"post":{"tags":["Session"],"parameters":[],"responses":{"200":{"description":"OK"}}}},"/api/session/register/username-password":{"post":{"tags":["Session"],"parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["username","password"],"properties":{"username":{"type":"string","format":"regex","pattern":"/^[A-Z_a-z]\\\\w*$/"},"password":{"type":"string","format":"regex","pattern":"/^.{6,}$/"}}}}}},"responses":{"200":{"description":"OK"}}}},"/api/session/sign-in/passwordless/sms/send-passcode":{"post":{"tags":["Session"],"parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["phone"],"properties":{"phone":{"type":"string","format":"regex","pattern":"/^\\\\d+$/"}}}}}},"responses":{"204":{"description":"No Content"}}}},"/api/session/sign-in/passwordless/sms/verify-passcode":{"post":{"tags":["Session"],"parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["phone","code"],"properties":{"phone":{"type":"string","format":"regex","pattern":"/^\\\\d+$/"},"code":{"type":"string"}}}}}},"responses":{"200":{"description":"OK"}}}},"/api/session/sign-in/passwordless/email/send-passcode":{"post":{"tags":["Session"],"parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["email"],"properties":{"email":{"type":"string","format":"regex","pattern":"/^\\\\S+@\\\\S+\\\\.\\\\S+$/"}}}}}},"responses":{"204":{"description":"No Content"}}}},"/api/session/sign-in/passwordless/email/verify-passcode":{"post":{"tags":["Session"],"parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["email","code"],"properties":{"email":{"type":"string","format":"regex","pattern":"/^\\\\S+@\\\\S+\\\\.\\\\S+$/"},"code":{"type":"string"}}}}}},"responses":{"200":{"description":"OK"}}}},"/api/session/register/passwordless/sms/send-passcode":{"post":{"tags":["Session"],"parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["phone"],"properties":{"phone":{"type":"string","format":"regex","pattern":"/^\\\\d+$/"}}}}}},"responses":{"204":{"description":"No Content"}}}},"/api/session/register/passwordless/sms/verify-passcode":{"post":{"tags":["Session"],"parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["phone","code"],"properties":{"phone":{"type":"string","format":"regex","pattern":"/^\\\\d+$/"},"code":{"type":"string"}}}}}},"responses":{"200":{"description":"OK"}}}},"/api/session/register/passwordless/email/send-passcode":{"post":{"tags":["Session"],"parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["email"],"properties":{"email":{"type":"string","format":"regex","pattern":"/^\\\\S+@\\\\S+\\\\.\\\\S+$/"}}}}}},"responses":{"204":{"description":"No Content"}}}},"/api/session/register/passwordless/email/verify-passcode":{"post":{"tags":["Session"],"parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["email","code"],"properties":{"email":{"type":"string","format":"regex","pattern":"/^\\\\S+@\\\\S+\\\\.\\\\S+$/"},"code":{"type":"string"}}}}}},"responses":{"200":{"description":"OK"}}}},"/api/session/sign-in/social":{"post":{"tags":["Session"],"parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["connectorId","state","redirectUri"],"properties":{"connectorId":{"type":"string"},"state":{"type":"string"},"redirectUri":{"type":"string","format":"regex","pattern":"/^https?:\\\\/\\\\//"}}}}}},"responses":{"200":{"description":"OK"}}}},"/api/session/sign-in/social/auth":{"post":{"tags":["Session"],"parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["connectorId","data"],"properties":{"connectorId":{"type":"string"},"data":{"example":{}}}}}}},"responses":{"200":{"description":"OK"}}}},"/api/session/sign-in/bind-social-related-user":{"post":{"tags":["Session"],"parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["connectorId"],"properties":{"connectorId":{"type":"string"}}}}}},"responses":{"200":{"description":"OK"}}}},"/api/session/register/social":{"post":{"tags":["Session"],"parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["connectorId"],"properties":{"connectorId":{"type":"string"}}}}}},"responses":{"200":{"description":"OK"}}}},"/api/session/bind-social":{"post":{"tags":["Session"],"parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["connectorId"],"properties":{"connectorId":{"type":"string"}}}}}},"responses":{"200":{"description":"OK"}}}},"/api/applications":{"get":{"tags":["Applications"],"parameters":[{"name":"page","in":"query","required":false,"schema":{"type":"integer","minimum":1,"default":1}},{"name":"page_size","in":"query","required":false,"schema":{"type":"integer","minimum":1,"default":20}}],"responses":{"200":{"description":"OK"}}},"post":{"tags":["Applications"],"parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["name","type"],"properties":{"name":{"type":"string"},"secret":{"type":"string"},"description":{"nullable":true,"type":"string"},"type":{"type":"string","enum":["Native","SPA","Traditional"]},"oidcClientMetadata":{"type":"object","required":["redirectUris","postLogoutRedirectUris"],"properties":{"redirectUris":{"type":"array","items":{"type":"string","format":"url"}},"postLogoutRedirectUris":{"type":"array","items":{"type":"string","format":"url"}},"logoUri":{"type":"string"}}},"customClientMetadata":{"type":"object","properties":{"corsAllowedOrigins":{"type":"array","items":{"type":"string","format":"url"}},"idTokenTtl":{"type":"number"},"refreshTokenTtl":{"type":"number"}}}}}}}},"responses":{"200":{"description":"OK"}}}},"/api/applications/:id":{"get":{"tags":["Applications"],"parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string","minLength":1}}],"responses":{"200":{"description":"OK"}}},"patch":{"tags":["Applications"],"parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string","minLength":1}}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"name":{"type":"string"},"secret":{"type":"string"},"description":{"nullable":true,"type":"string"},"type":{"type":"string","enum":["Native","SPA","Traditional"]},"oidcClientMetadata":{"type":"object","properties":{"redirectUris":{"type":"array","items":{"type":"string","format":"url"}},"postLogoutRedirectUris":{"type":"array","items":{"type":"string","format":"url"}},"logoUri":{"type":"string"}}},"customClientMetadata":{"type":"object","properties":{"corsAllowedOrigins":{"type":"array","items":{"type":"string","format":"url"}},"idTokenTtl":{"type":"number"},"refreshTokenTtl":{"type":"number"}}}}}}}},"responses":{"200":{"description":"OK"}}},"delete":{"tags":["Applications"],"parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string","minLength":1}}],"responses":{"204":{"description":"No Content"}}}},"/api/settings":{"get":{"tags":["Settings"],"parameters":[],"responses":{"200":{"description":"OK"}}},"patch":{"tags":["Settings"],"parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"adminConsole":{"type":"object","properties":{"demoChecked":{"type":"boolean"},"applicationCreated":{"type":"boolean"},"signInExperienceCustomized":{"type":"boolean"},"passwordlessConfigured":{"type":"boolean"},"socialSignInConfigured":{"type":"boolean"},"furtherReadingsChecked":{"type":"boolean"}}}}}}}},"responses":{"200":{"description":"OK"}}}},"/api/connectors":{"get":{"tags":["Connectors"],"parameters":[{"name":"target","in":"query","required":false,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK"}}}},"/api/connectors/:id":{"get":{"tags":["Connectors"],"parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string","minLength":1}}],"responses":{"200":{"description":"OK"}}},"patch":{"tags":["Connectors"],"parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string","minLength":1}}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"config":{"type":"object","description":"arbitrary"}}}}}},"responses":{"200":{"description":"OK"}}}},"/api/connectors/:id/enabled":{"patch":{"tags":["Connectors"],"parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string","minLength":1}}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"enabled":{"type":"boolean"}}}}}},"responses":{"200":{"description":"OK"}}}},"/api/connectors/:id/test":{"post":{"tags":["Connectors"],"parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string","minLength":1}}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["config"],"properties":{"phone":{"type":"string","format":"regex","pattern":"/^\\\\d+$/"},"email":{"type":"string","format":"regex","pattern":"/^\\\\S+@\\\\S+\\\\.\\\\S+$/"},"config":{"type":"object","description":"arbitrary"}}}}}},"responses":{"200":{"description":"OK"}}}},"/api/resources":{"get":{"tags":["Resources"],"parameters":[{"name":"page","in":"query","required":false,"schema":{"type":"integer","minimum":1,"default":1}},{"name":"page_size","in":"query","required":false,"schema":{"type":"integer","minimum":1,"default":20}}],"responses":{"200":{"description":"OK"}}},"post":{"tags":["Resources"],"parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["name","indicator"],"properties":{"name":{"type":"string"},"indicator":{"type":"string"},"accessTokenTtl":{"type":"number"}}}}}},"responses":{"200":{"description":"OK"}}}},"/api/resources/:id":{"get":{"tags":["Resources"],"parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string","minLength":1}}],"responses":{"200":{"description":"OK"}}},"patch":{"tags":["Resources"],"parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string","minLength":1}}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"name":{"type":"string"},"indicator":{"type":"string"},"accessTokenTtl":{"type":"number"}}}}}},"responses":{"200":{"description":"OK"}}},"delete":{"tags":["Resources"],"parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string","minLength":1}}],"responses":{"204":{"description":"No Content"}}}},"/api/sign-in-exp":{"get":{"tags":["Sign In Exp"],"parameters":[],"responses":{"200":{"description":"OK"}}},"patch":{"tags":["Sign In Exp"],"parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"color":{"type":"object","required":["primaryColor","isDarkModeEnabled","darkPrimaryColor"],"properties":{"primaryColor":{"type":"string","format":"regex","pattern":"/^#[\\\\da-f]{3}([\\\\da-f]{3})?$/i"},"isDarkModeEnabled":{"type":"boolean"},"darkPrimaryColor":{"type":"string","format":"regex","pattern":"/^#[\\\\da-f]{3}([\\\\da-f]{3})?$/i"}}},"branding":{"type":"object","required":["style","logoUrl"],"properties":{"style":{"type":"string","enum":["Logo","Logo_Slogan"]},"logoUrl":{"type":"string","format":"url"},"darkLogoUrl":{"type":"string","format":"url"},"slogan":{"type":"string"}}},"languageInfo":{"type":"object","required":["autoDetect","fallbackLanguage","fixedLanguage"],"properties":{"autoDetect":{"type":"boolean"},"fallbackLanguage":{"type":"string","enum":["en","zh-CN","tr-TR","ko-KR"]},"fixedLanguage":{"type":"string","enum":["en","zh-CN","tr-TR","ko-KR"]}}},"termsOfUse":{"type":"object","required":["enabled","contentUrl"],"properties":{"enabled":{"type":"boolean"},"contentUrl":{"oneOf":[{"type":"string","format":"url"},{"type":"string","format":"empty"}]}}},"signInMethods":{"type":"object","required":["username","email","sms","social"],"properties":{"username":{"type":"string","enum":["primary","secondary","disabled"]},"email":{"type":"string","enum":["primary","secondary","disabled"]},"sms":{"type":"string","enum":["primary","secondary","disabled"]},"social":{"type":"string","enum":["primary","secondary","disabled"]}}},"socialSignInConnectorTargets":{"type":"array","items":{"type":"string"}},"signInMode":{"type":"string","enum":["SignIn","Register","SignInAndRegister"]}}}}}},"responses":{"200":{"description":"OK"}}}},"/api/users":{"get":{"tags":["Users"],"parameters":[{"name":"search","in":"query","required":false,"schema":{"type":"string"}},{"name":"hideAdminUser","in":"query","required":false,"schema":{"type":"string","format":"\\"true\\""}},{"name":"page","in":"query","required":false,"schema":{"type":"integer","minimum":1,"default":1}},{"name":"page_size","in":"query","required":false,"schema":{"type":"integer","minimum":1,"default":20}}],"responses":{"200":{"description":"OK"}}},"post":{"tags":["Users"],"parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["username","password","name"],"properties":{"username":{"type":"string","format":"regex","pattern":"/^[A-Z_a-z]\\\\w*$/"},"password":{"type":"string","format":"regex","pattern":"/^.{6,}$/"},"name":{"type":"string"}}}}}},"responses":{"200":{"description":"OK"}}}},"/api/users/:userId":{"get":{"tags":["Users"],"parameters":[{"name":"userId","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK"}}},"patch":{"tags":["Users"],"parameters":[{"name":"userId","in":"path","required":true,"schema":{"type":"string"}}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"name":{"nullable":true,"type":"string"},"avatar":{"nullable":true,"oneOf":[{"type":"string","format":"url"},{"type":"string","format":"empty"}]},"customData":{"type":"object","description":"arbitrary"},"roleNames":{"type":"array","items":{"type":"string"}}}}}}},"responses":{"200":{"description":"OK"}}},"delete":{"tags":["Users"],"parameters":[{"name":"userId","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"204":{"description":"No Content"}}}},"/api/users/:userId/password":{"patch":{"tags":["Users"],"parameters":[{"name":"userId","in":"path","required":true,"schema":{"type":"string"}}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["password"],"properties":{"password":{"type":"string","format":"regex","pattern":"/^.{6,}$/"}}}}}},"responses":{"200":{"description":"OK"}}}},"/api/users/:userId/identities/:target":{"delete":{"tags":["Users"],"parameters":[{"name":"userId","in":"path","required":true,"schema":{"type":"string"}},{"name":"target","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK"}}}},"/api/logs":{"get":{"tags":["Logs"],"parameters":[{"name":"userId","in":"query","required":false,"schema":{"type":"string"}},{"name":"applicationId","in":"query","required":false,"schema":{"type":"string"}},{"name":"logType","in":"query","required":false,"schema":{"type":"string"}},{"name":"page","in":"query","required":false,"schema":{"type":"integer","minimum":1,"default":1}},{"name":"page_size","in":"query","required":false,"schema":{"type":"integer","minimum":1,"default":20}}],"responses":{"200":{"description":"OK"}}}},"/api/logs/:id":{"get":{"tags":["Logs"],"parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string","minLength":1}}],"responses":{"200":{"description":"OK"}}}},"/api/roles":{"get":{"tags":["Roles"],"parameters":[],"responses":{"200":{"description":"OK"}}}},"/api/dashboard/users/total":{"get":{"tags":["Dashboard"],"parameters":[],"responses":{"200":{"description":"OK"}}}},"/api/dashboard/users/new":{"get":{"tags":["Dashboard"],"parameters":[],"responses":{"200":{"description":"OK"}}}},"/api/dashboard/users/active":{"get":{"tags":["Dashboard"],"parameters":[{"name":"date","in":"query","required":false,"schema":{"type":"string","format":"regex","pattern":"/^\\\\d{4}(-\\\\d{2}){2}/"}}],"responses":{"200":{"description":"OK"}}}},"/api/me":{"get":{"tags":["Me"],"parameters":[],"responses":{"200":{"description":"OK"}}}},"/api/me/custom-data":{"get":{"tags":["Me"],"parameters":[],"responses":{"200":{"description":"OK"}}},"patch":{"tags":["Me"],"parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["customData"],"properties":{"customData":{"type":"object","description":"arbitrary"}}}}}},"responses":{"200":{"description":"OK"}}}},"/api/me/password":{"patch":{"tags":["Me"],"parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["password"],"properties":{"password":{"type":"string","format":"regex","pattern":"/^.{6,}$/"}}}}}},"responses":{"204":{"description":"No Content"}}}},"/api/.well-known/sign-in-exp":{"get":{"tags":[".well-known"],"parameters":[],"responses":{"200":{"description":"OK"},"304":{"description":"No Modified"}}}},"/api/status":{"get":{"tags":["Status"],"parameters":[],"responses":{"204":{"description":"No Content"}}}},"/api/swagger.json":{"get":{"tags":["Swagger.json"],"parameters":[],"responses":{"200":{"description":"OK"}}}}}}'),a=s(4637),p=function(){return(0,a.jsx)(r.Z,{title:"API",children:(0,a.jsx)(i.Z,{spec:n})})}},63965:function(){},15526:function(){},49592:function(){},98597:function(){},29559:function(){},6615:function(){}}]);