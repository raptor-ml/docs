"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5376],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=d(a),c=r,m=h["".concat(s,".").concat(c)]||h[c]||u[c]||i;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},6390:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const i={title:"The basics"},o=void 0,l={unversionedId:"guides/labsdk/basics",id:"guides/labsdk/basics",title:"The basics",description:"In this tutorial, we'll cover the basics of using the LabSDK to write features.",source:"@site/docs/guides/labsdk/1-basics.md",sourceDirName:"guides/labsdk",slug:"/guides/labsdk/basics",permalink:"/docs/guides/labsdk/basics",draft:!1,editUrl:"https://github.com/dataploy-ai/docs/tree/master/docs/guides/labsdk/1-basics.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"The basics"},sidebar:"guides",previous:{title:"LabSDK",permalink:"/docs/guides/labsdk/"},next:{title:"Aggregations",permalink:"/docs/guides/labsdk/aggregations"}},s={},d=[],p={toc:d};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this tutorial, we'll cover the basics of using the LabSDK to write features."),(0,r.kt)("h1",{id:"install-the-labsdk"},"Install the LabSDK"),(0,r.kt)("p",null,"In order to use the LabSDK, you need to install it. The recommended way is to use\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://pip.pypa.io/en/stable/"},(0,r.kt)("inlineCode",{parentName:"a"},"pip"))," utility:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install --upgrade natun-labsdk\n")),(0,r.kt)("p",null,"To use the LabSDK, you need to import it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import natun\nfrom natun.stub import *  # <-- this prevents the IDE/Notebookfrom detecting PyExp built-in as errors\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Notice that we are also importing the ",(0,r.kt)("inlineCode",{parentName:"p"},"natun.stub")," module. This is because the LabSDK is a Python library\nthis is a way to prevent the IDE/Notebook from detecting ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/pyexp/natun-built-ins"},"PyExp built-in")," as\nerrors.")),(0,r.kt)("h1",{id:"production-mindset"},"Production mindset"),(0,r.kt)("p",null,"With Natun, we're building features that are ready to be deployed and run in production. That's means that in production\n, unlike when we're looking at historical data, we can't see the future."),(0,r.kt)("p",null,"Because of that, when we're calculating features we need to think about the data we have available, and work in the\ncontext of it in a ",(0,r.kt)("strong",{parentName:"p"},"transactional"),' approach("row-level"), instead of a batch approach("dataset-level"). This ',(0,r.kt)("em",{parentName:"p"},"tiny")," shift in the mindset can help us to build\nfeatures that can run on production."),(0,r.kt)("p",null,'To do that, we write functions that calculate the feature values for a given "row" of data.'),(0,r.kt)("h1",{id:"hello-world-feature"},"Hello world feature"),(0,r.kt)("p",null,"The very first feature we'll build is the ",(0,r.kt)("inlineCode",{parentName:"p"},"Hello world")," feature. It's a simple feature that simply\nreturns the string ",(0,r.kt)("inlineCode",{parentName:"p"},'"Hello world"'),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"showLineNumbers",showLineNumbers:!0},'@natun.register(str, freshness=\'1m\', staleness=\'10h\')\ndef hello_world(**req: NatunRequest):\n    """this is a hello world feature"""\n    return "hello world"\n')),(0,r.kt)("p",null,"Pretty simple right? let's go through what we did here line by line:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"We started by declaring the feature with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/labsdk/decorators"},(0,r.kt)("inlineCode",{parentName:"a"},"@natun.register"))," decorator:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"We set the feature primitive type to ",(0,r.kt)("inlineCode",{parentName:"li"},"str")," (the type of the feature's output)."),(0,r.kt)("li",{parentName:"ol"},"We set the feature's freshness to ",(0,r.kt)("inlineCode",{parentName:"li"},"1m")," - that means that feature value that calculated ",(0,r.kt)("inlineCode",{parentName:"li"},"1 minute")," ago, is\nconsidered as fresh, and doesn't need to be recalculated."),(0,r.kt)("li",{parentName:"ol"},"We set the feature's staleness to ",(0,r.kt)("inlineCode",{parentName:"li"},"10h")," - that means that feature value that calculated ",(0,r.kt)("inlineCode",{parentName:"li"},"10 hours")," ago, is\nconsidered as stale, and MUST be recalculated.")),(0,r.kt)("admonition",{parentName:"li",title:"Feature's SLA",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The Feature's SLA defines a contract between the feature's author and the production engine.\nBy setting the feature's freshness and staleness, you can specify the amount of time that the feature's value is\nconsidered fresh, and when it's must be discarded and recalculated."),(0,r.kt)("p",{parentName:"admonition"},"When feature is not fresh and not stale either - the value is considered as fair to use. In this case, we'll try to\nrecalculate the value (and get a fresh result), but will default to the data we have if we couldn't make it."),(0,r.kt)("p",{parentName:"admonition"},"For more information, check out the ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/how-does-natun-work/features/feature-sla"},"Feature's SLA"),"\nsection."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"We defined the feature's logic, and named our feature ",(0,r.kt)("inlineCode",{parentName:"p"},"hello_world"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"We defined the feature's description. This is a good place to put a description of the feature's logic that can help\nour colleagues to understand it.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"We write our business-logic in ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/pyexp"},"PyExp"),", and simply returned the string ",(0,r.kt)("inlineCode",{parentName:"p"},'"hello world"'),"."))),(0,r.kt)("admonition",{title:"What's PyExp?",type:"note"},(0,r.kt)("p",{parentName:"admonition"},'PyExp is a variant of Python. It\'s allows us to compile your code, and run it in scale while running in "production mode".\nThis way, you can keep focus on the business-logic, while Natun takes care of the production optimizations.'),(0,r.kt)("p",{parentName:"admonition"},"For more information, check out the ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/pyexp/natun-built-ins"},"PyExp")," section.")),(0,r.kt)("h1",{id:"greeter-feature"},"Greeter feature"),(0,r.kt)("p",null,"The next feature we'll build is the ",(0,r.kt)("inlineCode",{parentName:"p"},"Greeter")," feature. It's a simple feature that simply greets the ",(0,r.kt)("inlineCode",{parentName:"p"},"entity_id")," we got."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"What's an ",(0,r.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"entity_id"),"?"),(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"entity_id")," is the entity that owns this piece of information. I.e., the feature ",(0,r.kt)("inlineCode",{parentName:"p"},"user_age")," belongs to the\nentity ",(0,r.kt)("inlineCode",{parentName:"p"},"user"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"showLineNumbers",showLineNumbers:!0},'@natun.register(str, freshness=\'1m\', staleness=\'10h\')\ndef greeter(**req: NatunRequest):\n    """this is a greeter feature"""\n    return "Hello world " + req["entity_id"]\n')),(0,r.kt)("p",null,"This is looking pretty similar to the ",(0,r.kt)("inlineCode",{parentName:"p"},"hello_world")," feature, but this time we're using the ",(0,r.kt)("inlineCode",{parentName:"p"},"entity_id")," as the input.\nWe're getting the ",(0,r.kt)("inlineCode",{parentName:"p"},"entity_id")," from the calculation request, and returning a greeting with the ",(0,r.kt)("inlineCode",{parentName:"p"},"entity_id")," in it."),(0,r.kt)("admonition",{title:"What's the calculation request?",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The calculation request is providing us all the relevant information that can be used to calculate the feature value."),(0,r.kt)("p",{parentName:"admonition"},"It's a dictionary that contains the following keys:"),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"entity_id")," - the ID of the entity that the feature is being calculated for."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"timestamp")," - the time when the data was requested."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"payload")," - this is usually a dictionary that contains the relevant data from the connected data source."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"headers")," - this is a dictionary that contains the headers from the connected data source.\n:::")),(0,r.kt)("h1",{parentName:"admonition",id:"connecting-the-feature-to-data-source"},"Connecting the feature to data source"),(0,r.kt)("p",{parentName:"admonition"},"So far so good, but in real life we used to have a data that is helping us to calculate the feature."),(0,r.kt)("p",{parentName:"admonition"},'Because Natun is act differently in "production" and "development" environments:'),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"In production"),", we'll connect a data source to the feature. When running in production, the platform will\nautomatically calculate the feature values when needed, and use the data source to get the data."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"In development"),', we need to "replay" the feature calculations from an historical data we have. We\'ll talk about it\nin the next section.')),(0,r.kt)("p",{parentName:"admonition"},"For now, we'll connect the feature in production-mode to a data-source by using\nthe ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/labsdk/decorators"},(0,r.kt)("inlineCode",{parentName:"a"},"@natun.connector"))," decorator:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},'@natun.connector("user_names.default")\n')),(0,r.kt)("h1",{parentName:"admonition",id:"replaying-the-feature-calculations"},"Replaying the feature calculations"),(0,r.kt)("p",{parentName:"admonition"},"When we're in development, we need to replay the feature calculations from an historical data we have."),(0,r.kt)("p",{parentName:"admonition"},"First, we're utilizing Pandas to read the historical data, and then replaying the feature with this dataframe:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import pandas as pd\ndf = pd.read_parquet("names.csv")\ngreeter.replay(df, entity_id_field="name")\n'))),(0,r.kt)("p",null,"Although the ",(0,r.kt)("inlineCode",{parentName:"p"},"replay")," function automatically detect some fields from the dataframe and set them in the NatunRequest, it's\nit is not always able to detect all the fields."),(0,r.kt)("p",null,"We can use the following arguments to specify the fields that we want to use:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"* `entity_id_field` - the field that contains the entity ID.\n* `timestamp_field` - the field that contains the timestamp.\n* `payload_field` - the field that contains the payload.\n* `headers_field` - the field that contains the headers.\n")),(0,r.kt)("p",null,":::"),(0,r.kt)("h1",{id:"exporting-the-feature"},"Exporting the feature"),(0,r.kt)("p",null,"To run the feature in production, we need to export it to a Kubernetes manifest:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"greeter.manifest()\n")),(0,r.kt)("p",null,"This will generate a Standard Kubernetes manifest that can be used to deploy the feature."))}u.isMDXComponent=!0}}]);