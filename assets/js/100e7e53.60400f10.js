"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2985],{8551:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>i});var s=a(4964),r=a(1523);const n={},o="Feature Values",l={id:"docs/how-it-works/features/feature-values",title:"Feature Values",description:"Feature values are the actual values of the features that are calculated by Raptor. We store them in the State, and",source:"@site/docs/docs/how-it-works/features/feature-values.md",sourceDirName:"docs/how-it-works/features",slug:"/docs/how-it-works/features/feature-values",permalink:"/docs/how-it-works/features/feature-values",draft:!1,unlisted:!1,editUrl:"https://github.com/raptor-ml/docs/tree/master/docs/docs/how-it-works/features/feature-values.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Feature Definitions",permalink:"/docs/how-it-works/features/feature-definitions"},next:{title:"Freshness Guarantees",permalink:"/docs/how-it-works/freshness"}},u={},i=[{value:"How are they calculated?",id:"how-are-they-calculated",level:2}];function h(e){const t={a:"a",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"feature-values",children:"Feature Values"}),"\n",(0,s.jsx)(t.p,{children:"Feature values are the actual values of the features that are calculated by Raptor. We store them in the State, and\nthey are available for querying by the API."}),"\n",(0,s.jsx)(t.p,{children:"Feature values are always composed of the following parts:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Value"})," - The actual value of the feature, which is stored as the ",(0,s.jsx)(t.strong,{children:"primitive type"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Timestamp"})," - The timestamp of the value, which is the time that the value was calculated."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Keys"})," - An encoded version of the keys with the value, which is used to identify the value's owner in the State."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"how-are-they-calculated",children:"How are they calculated?"}),"\n",(0,s.jsxs)(t.p,{children:["When defining a feature, you should specify a ",(0,s.jsx)(t.a,{href:"../datasources/",children:"Data Source"}),", which is a reference to the data that\nwill be used to calculate the feature value, and a ",(0,s.jsx)(t.a,{href:"../../../reference/feature-builders/",children:"Builder"}),", which is the set of instructions\nthat will be used to calculate the feature value."]}),"\n",(0,s.jsxs)(t.p,{children:["When a feature value is requested, respectfully to the ",(0,s.jsx)(t.a,{href:"/docs/how-it-works/freshness",children:"Freshness"}),", Raptor will use the Data Source to\nfetch the data, and then use the Builder to calculate the feature value."]})]})}function c(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},1523:(e,t,a)=>{a.d(t,{R:()=>o,x:()=>l});var s=a(6504);const r={},n=s.createContext(r);function o(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);