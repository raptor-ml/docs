"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8240],{84907:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>m});var n=r(39953);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var l=n.createContext({}),s=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},u=function(t){var e=s(t.components);return n.createElement(l.Provider,{value:e},t.children)},d="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),d=s(r),f=a,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(m,i(i({ref:e},u),{},{components:r})):n.createElement(m,i({ref:e},u))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c[d]="string"==typeof t?t:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},89048:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(1943),a=(r(39953),r(84907));const o={},i="Historical Data and Retraining",c={unversionedId:"docs/how-it-works/historical-data-and-backfill",id:"docs/how-it-works/historical-data-and-backfill",title:"Historical Data and Retraining",description:"Training your model for the first time is quite intuitive using the LabSDK, but what about retraining your model?",source:"@site/docs/docs/how-it-works/historical-data-and-backfill.md",sourceDirName:"docs/how-it-works",slug:"/docs/how-it-works/historical-data-and-backfill",permalink:"/docs/how-it-works/historical-data-and-backfill",draft:!1,editUrl:"https://github.com/raptor-ml/docs/tree/master/docs/docs/how-it-works/historical-data-and-backfill.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Freshness Guarantees",permalink:"/docs/how-it-works/freshness"},next:{title:"Models",permalink:"/docs/how-it-works/models"}},l={},s=[],u={toc:s};function d(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"historical-data-and-retraining"},"Historical Data and Retraining"),(0,a.kt)("p",null,"Training your model for the first time is quite intuitive using the LabSDK, but what about retraining your model?"),(0,a.kt)("p",null,"Fortunately, Raptor has a built-in mechanism for that. Raptor automatically collects your production data to an\nhistorical storage, and then you can retrain your model using the historical data."),(0,a.kt)("p",null,"At the moment, the historical data is available by using the created Snowflake view, or by writing a custom query over\nS3."),(0,a.kt)("p",null,"Coming soon will be a mechanism for retraining your model using historical data using the LabSDK:"))}d.isMDXComponent=!0}}]);