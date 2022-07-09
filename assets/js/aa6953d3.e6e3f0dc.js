"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4183],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(i,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,c(c({ref:t},u),{},{components:n})):r.createElement(m,c({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6138:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={},c="Connectors",s={unversionedId:"reference/how-does-natun-work/connectors",id:"reference/how-does-natun-work/connectors",title:"Connectors",description:"Connectors define how can your Features draw data from external data sources. These can be streaming sources,",source:"@site/docs/reference/how-does-natun-work/connectors.md",sourceDirName:"reference/how-does-natun-work",slug:"/reference/how-does-natun-work/connectors",permalink:"/docs/reference/how-does-natun-work/connectors",draft:!1,editUrl:"https://github.com/dataploy-ai/docs/tree/master/docs/reference/how-does-natun-work/connectors.md",tags:[],version:"current",frontMatter:{},sidebar:"reference",previous:{title:"Digestion",permalink:"/docs/reference/how-does-natun-work/feature-builders/digestion"},next:{title:"Deployment",permalink:"/docs/reference/how-does-natun-work/deployment"}},i={},l=[],u={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"connectors"},"Connectors"),(0,o.kt)("p",null,"Connectors define how can your Features draw data from external data sources. These can be streaming sources,\nanalytical databases, CRM systems, and others. "),(0,o.kt)("p",null,"Connectors define engineering and production aspects of ingesting the data, and are usually defined by the DevOps or\nDataOps teams in an organization. "),(0,o.kt)("p",null,"Amongst others, connectors deal with:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Where to find the data source"),(0,o.kt)("li",{parentName:"ol"},"Authentication and authorization to data sources"),(0,o.kt)("li",{parentName:"ol"},"Schemas and parsing data items"),(0,o.kt)("li",{parentName:"ol"},"Ordering and parallel consumption options"),(0,o.kt)("li",{parentName:"ol"},"Rate Limiting / Throttling"),(0,o.kt)("li",{parentName:"ol"},"Error Handling"),(0,o.kt)("li",{parentName:"ol"},"PII masking")))}p.isMDXComponent=!0}}]);