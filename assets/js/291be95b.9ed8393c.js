"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4940],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),f=a,b=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return r?n.createElement(b,i(i({ref:t},c),{},{components:r})):n.createElement(b,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6615:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={title:"LabSDK"},i="What is the LabSDK?",s={unversionedId:"guides/labsdk/readme",id:"guides/labsdk/readme",title:"LabSDK",description:"The LabSDK is a utility library that helps you to develop Natun compatible features directly from Python.",source:"@site/docs/guides/labsdk/readme.md",sourceDirName:"guides/labsdk",slug:"/guides/labsdk/",permalink:"/docs/guides/labsdk/",draft:!1,editUrl:"https://github.com/dataploy-ai/docs/tree/master/docs/guides/labsdk/readme.md",tags:[],version:"current",frontMatter:{title:"LabSDK"},sidebar:"guides",previous:{title:"Hello World feature",permalink:"/docs/guides/hello-world-feature"},next:{title:"The basics",permalink:"/docs/guides/labsdk/basics"}},l={},u=[{value:"How does it work?",id:"how-does-it-work",level:2}],c={toc:u};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"what-is-the-labsdk"},"What is the LabSDK?"),(0,a.kt)("p",null,"The LabSDK is a utility library that helps you to develop Natun compatible features directly from Python.\nIt's usually used inside your notebook, and allows you to build features without any further installation."),(0,a.kt)("p",null,"This way, you can build your features in Natun, and then deploy them to the cloud later on."),(0,a.kt)("h2",{id:"how-does-it-work"},"How does it work?"),(0,a.kt)("p",null,"Using the LabSDK we can write a function that describe the feature we want to build.\nTo make this function a Natun-compatible, we need to decorate it with the ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/labsdk/decorators"},"SDK's decorators"),"."),(0,a.kt)("p",null,"By using the decorators, we can specify the ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/how-does-natun-work/features/feature-definitions"},"declarative nature")," of the feature, and the way it should be deployed.\nWhen we're done, we need to use the ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/labsdk/export"},"SDK's ",(0,a.kt)("inlineCode",{parentName:"a"},"manifests"))," function to export the feature\ndefinition as a kubernetes manifest."))}d.isMDXComponent=!0}}]);