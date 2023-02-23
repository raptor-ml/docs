"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1880],{84907:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var r=a(39953);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),l=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(a),m=n,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return a?r.createElement(f,s(s({ref:t},p),{},{components:a})):r.createElement(f,s({ref:t},p))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:n,s[1]=c;for(var l=2;l<o;l++)s[l]=a[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},51984:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=a(1943),n=(a(39953),a(84907));const o={},s="Data Sources",c={unversionedId:"docs/concepts/datasources",id:"docs/concepts/datasources",title:"Data Sources",description:"Data sources are the way we connect the features to the data that we need to calculate the feature value.",source:"@site/docs/docs/concepts/2-datasources.md",sourceDirName:"docs/concepts",slug:"/docs/concepts/datasources",permalink:"/docs/concepts/datasources",draft:!1,editUrl:"https://github.com/raptor-ml/docs/tree/master/docs/docs/concepts/2-datasources.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"docs",previous:{title:"The basics",permalink:"/docs/concepts/basics"},next:{title:"Aggregations",permalink:"/docs/concepts/aggregations"}},i={},l=[{value:"Declaring the data source",id:"declaring-the-data-source",level:2}],p={toc:l};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"data-sources"},"Data Sources"),(0,n.kt)("p",null,"Data sources are the way we connect the features to the data that we need to calculate the feature value."),(0,n.kt)("p",null,"Data sources are composed of:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Declaring the data source using the ",(0,n.kt)("a",{parentName:"li",href:"/reference/labsdk/decorators"},(0,n.kt)("inlineCode",{parentName:"a"},"@data_source"))," decorator."),(0,n.kt)("li",{parentName:"ol"},"The data source class itself which represents the data source's schema (specifying the schema is optional, you\ncan simply ",(0,n.kt)("inlineCode",{parentName:"li"},"pass")," the class body).")),(0,n.kt)("h2",{id:"declaring-the-data-source"},"Declaring the data source"),(0,n.kt)("p",null,"In order to declare a data source, we use the ",(0,n.kt)("a",{parentName:"p",href:"/reference/labsdk/decorators"},(0,n.kt)("inlineCode",{parentName:"a"},"@data_source"))," decorator."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"from typing_extensions import TypedDict\n\n@data_source(\n    training_data=df,\n    keys=['user_id'],  # Optional\n    timestamp='timestamp',  # Optional\n    production_config=StreamingConfig()  # Optional\n)\nclass User(TypedDict):\n    user_id: str\n    first_name: str\n    last_name: str\n    birthdate: datetime\n")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"@data_source")," decorator accepts the following arguments:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"training_data")," - the data that we'll use to train the model. We can use pandas to import the data from any format that\npandas supports, such as CSV, Parquet, JSON, etc")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"keys")," - the fields that we'll use to identify the data source's rows. In this case, we're using the ",(0,n.kt)("inlineCode",{parentName:"p"},"user_id")," field."),(0,n.kt)("p",{parentName:"li"},"Although the keys are optional, it's highly recommended to use them, because it will help the Raptor engine to optimize\nthe feature calculations.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"timestamp")," - the timestamp field of the data source. If the data source doesn't have a timestamp field, you can\nsimply pass ",(0,n.kt)("inlineCode",{parentName:"p"},"None")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"pass")," the argument.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"production_config")," - the production configuration of the data source. The production configuration is the way we\nconfigure the data source to be used in production."))))}u.isMDXComponent=!0}}]);