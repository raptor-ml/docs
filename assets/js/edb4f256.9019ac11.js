"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3723],{6834:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var s=t(4964),o=t(1523);const i={},r="Feature Selector",a={id:"docs/how-it-works/selectors",title:"Feature Selector",description:"The Feature Selector is a special string that allow you to select a feature value composition.",source:"@site/docs/docs/how-it-works/selectors.md",sourceDirName:"docs/how-it-works",slug:"/docs/how-it-works/selectors",permalink:"/docs/how-it-works/selectors",draft:!1,unlisted:!1,editUrl:"https://github.com/raptor-ml/docs/tree/master/docs/docs/how-it-works/selectors.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Models",permalink:"/docs/how-it-works/models"},next:{title:"Operating Raptor in Production",permalink:"/docs/production/"}},c={},d=[{value:"Components of the Feature Selector",id:"components-of-the-feature-selector",level:2},{value:"Examples",id:"examples",level:2}];function l(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"feature-selector",children:"Feature Selector"}),"\n",(0,s.jsx)(n.p,{children:"The Feature Selector is a special string that allow you to select a feature value composition."}),"\n",(0,s.jsx)(n.h2,{id:"components-of-the-feature-selector",children:"Components of the Feature Selector"}),"\n",(0,s.jsx)(n.p,{children:"The Feature Selector is composed of several parts:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"namespace.name+aggregation_function@version[encoding]\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Namespace"}),": an optional part that can be used to identify the namespace of the feature. It must start and end with\na letter or digit, and can contain letters, digits, and underscores. The maximum length is 256 characters.\nIf the namespace is not specified, we'll use the namespace of the request."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Name"}),": the name of the feature. It must start and end with a letter or digit, and can contain letters, digits, and\nunderscores. The maximum length is 256 characters."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Aggregation function"}),": an optional part that can be used to specify an aggregation function. The function must\nconsist of only lowercase letters and underscores."]}),"\n",(0,s.jsxs)(n.admonition,{type:"caution",children:[(0,s.jsx)(n.mdxAdmonitionTitle,{}),(0,s.jsxs)(n.p,{children:["Aggregation functions can't be used in conjunction with the ",(0,s.jsx)(n.code,{children:"@version"})," part."]})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Version"}),": an optional part that can be used to specify a version number. The version must be an integer."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Encoding"}),": an optional part that can be used to specify an encoding format. The encoding format must consist of\nonly lowercase letters and underscores."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.p,{children:"Here are some examples of valid Feature Selectors:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"feature_name"}),": a simple feature name with no namespace, aggregation function, version, or encoding specified."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"namespace.feature_name"}),": a feature name with a namespace specified."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"feature_name+sum"}),": a feature name with an aggregation function specified."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"feature_name@-2"}),": a feature name with a version number specified."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"feature_name[encoding]"}),": a feature name with an encoding format specified."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"namespace.feature_name@-2[encoding]"}),": a feature name with a namespace, version, and encoding format specified."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1523:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var s=t(6504);const o={},i=s.createContext(o);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);