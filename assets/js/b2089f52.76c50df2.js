"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1731],{559:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=t(4964),s=t(1523);const o={},r="DataSources",i={id:"docs/how-it-works/datasources/readme",title:"DataSources",description:"DataSources are the glue that connect your Feature Definitions to the production data sources (such as streaming,",source:"@site/docs/docs/how-it-works/datasources/readme.md",sourceDirName:"docs/how-it-works/datasources",slug:"/docs/how-it-works/datasources/",permalink:"/docs/how-it-works/datasources/",draft:!1,unlisted:!1,editUrl:"https://github.com/raptor-ml/docs/tree/master/docs/docs/how-it-works/datasources/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"How does Raptor work?",permalink:"/docs/how-it-works/"},next:{title:"Rest",permalink:"/docs/how-it-works/datasources/rest"}},c={},d=[{value:"DataSource definition",id:"datasource-definition",level:2},{value:"DataSource usage",id:"datasource-usage",level:2}];function u(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"datasources",children:"DataSources"}),"\n",(0,a.jsx)(n.p,{children:"DataSources are the glue that connect your Feature Definitions to the production data sources (such as streaming,\ndatabases, CRM systems, etc.)."}),"\n",(0,a.jsx)(n.p,{children:"The DataSources takes care of the production concerns of handling high-volume data. And responsible for many related\ntasks, such as: Authentication, Rate-limiting, Schema Normalization, Retry, etc."}),"\n",(0,a.jsx)(n.h2,{id:"datasource-definition",children:"DataSource definition"}),"\n",(0,a.jsx)(n.p,{children:"DataSources are usually configured by DevOps and are defined as a Kubernetes resource:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'apiVersion: k8s.raptor.ml/v1alpha1\nkind: DataSource\nmetadata:\n  name: clicks\nspec:\n  kind: streaming\n  config:\n    - name: kind\n      value: kafka\n    - name: brokers\n      value: :9093\n    - name: topics\n      value: clickstream\n    - name: consumer_group\n      value: clicks-consumer-group\n    - name: tls_disable\n      value: "true"\n  keyFields:\n    - client_id\n  timestampField: timestamp\n  schema: https://raw.githubusercontent.com/raptor-ml/massivedynamic-protos/master/click.proto#Click\n'})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"DataSource"})," definition is composed by the metadata(which defines its name), the ",(0,a.jsx)(n.code,{children:"kind"})," of this connector, and\nthe ",(0,a.jsx)(n.code,{children:"config"})," of this particular kind."]}),"\n",(0,a.jsx)(n.p,{children:"For more information, see the relevant DataConnector documentation."}),"\n",(0,a.jsx)(n.h2,{id:"datasource-usage",children:"DataSource usage"}),"\n",(0,a.jsx)(n.p,{children:"They are then referenced in your Feature Definitions:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'apiVersion: k8s.raptor.ml/v1alpha1\nkind: Feature\nmetadata:\n  name: clicks\n  namespace: default #production\n  annotations:\n    a8r.io/owner: "@AlmogBaku"\n    a8r.io/description: "Demonstration of a simple aggr function"\nspec:\n  primitive: int\n  freshness: 10s\n  staleness: 1m\n  dataSource:\n    name: clicks\n  keys:\n    - client_id\n  builder:\n    aggr:\n      - sum\n      - count\n    code: |\n      def handler(data, ctx) -> int:\n        return 1, ctx.timestamp, ctx.keys["client_id"].split(":")[1]\n\n'})}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["If you are not defining the ",(0,a.jsx)(n.code,{children:"namespace"}),", the Feature's namespace will be used."]})})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},1523:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>i});var a=t(6504);const s={},o=a.createContext(s);function r(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);