"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4253],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=i,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1724:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=r(7462),i=(r(7294),r(3905));const a={title:"Counters"},o=void 0,s={unversionedId:"guides/labsdk/simple-counter",id:"guides/labsdk/simple-counter",title:"Counters",description:'We can also build features that have a lifetime counter, like "lifetime views".',source:"@site/docs/guides/labsdk/simple-counter.md",sourceDirName:"guides/labsdk",slug:"/guides/labsdk/simple-counter",permalink:"/docs/guides/labsdk/simple-counter",draft:!1,editUrl:"https://github.com/dataploy-ai/docs/tree/master/docs/guides/labsdk/simple-counter.md",tags:[],version:"current",frontMatter:{title:"Counters"},sidebar:"guides",previous:{title:"sets",permalink:"/docs/guides/labsdk/sets"},next:{title:"Installing Natun on your Kubernetes cluster",permalink:"/docs/guides/install"}},l={},u=[],c={toc:u};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'We can also build features that have a lifetime counter, like "lifetime views".\nThis is actually a simple ',(0,i.kt)("inlineCode",{parentName:"p"},"int")," feature, that we're incrementing atomically:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:"showLineNumbers",showLineNumbers:!0},'@natun.register(int, freshness=\'1m\', staleness=\'10h\')\ndef views(**req: NatunRequest):\n    """lifetime views"""\n    incr_feature("views.default", req["entity_id"], 1)\n    return\n')))}p.isMDXComponent=!0}}]);