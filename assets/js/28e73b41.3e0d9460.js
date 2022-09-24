"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4780],{4907:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(9953);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||o;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6265:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=n(9440),r=(n(9953),n(4907));const o={description:"Start writing features from your notebook in less than 5 minutes.",jupyter:{colab:{include_colab_link:!0,name:"Getting Started with the LabSDK"},kernelspec:{display_name:"Python 3",name:"python3"},language_info:{name:"python"},nbformat:4,nbformat_minor:0},sidebar_position:1,title:"Getting Started with the LabSDK"},l=void 0,i={unversionedId:"guides/getting-started-with-labsdk",id:"guides/getting-started-with-labsdk",title:"Getting Started with the LabSDK",description:"Start writing features from your notebook in less than 5 minutes.",source:"@site/docs/guides/getting-started-with-labsdk.md",sourceDirName:"guides",slug:"/guides/getting-started-with-labsdk",permalink:"/docs/guides/getting-started-with-labsdk",draft:!1,editUrl:"https://github.com/raptor-ml/docs/tree/master/docs/guides/getting-started-with-labsdk.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Start writing features from your notebook in less than 5 minutes.",jupyter:{colab:{include_colab_link:!0,name:"Getting Started with the LabSDK"},kernelspec:{display_name:"Python 3",name:"python3"},language_info:{name:"python"},nbformat:4,nbformat_minor:0},sidebar_position:1,title:"Getting Started with the LabSDK"},sidebar:"guides",previous:{title:"Getting Started",permalink:"/docs/guides/"},next:{title:"Hello World feature",permalink:"/docs/guides/hello-world-feature"}},s={},d=[{value:"\ud83e\uddd0 Getting started",id:"-getting-started",level:2},{value:"\u26a1\ufe0f Installing the SDK",id:"\ufe0f-installing-the-sdk",level:2},{value:"\u270d\ufe0f Writing our first features",id:"\ufe0f-writing-our-first-features",level:2},{value:"\ud83d\udcbe Historical Replay",id:"-historical-replay",level:2},{value:"\ud83e\udde0 Building our model",id:"-building-our-model",level:2},{value:"\u2601\ufe0f Deployment",id:"\ufe0f-deployment",level:2},{value:"Manifest deployment (only use this for production)",id:"manifest-deployment-only-use-this-for-production",level:3},{value:"Direct deployment (for local development)",id:"direct-deployment-for-local-development",level:3},{value:"\ud83e\ude84 Ta-dam!",id:"-ta-dam",level:2}],u={toc:d};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{class:"cell markdown",colab_type:"text",id:"view-in-github"},(0,r.kt)("a",{href:"https://colab.research.google.com/github/raptor-ml/docs/blob/master/docs/guides/getting-started-with-labsdk.ipynb",target:"_parent"},(0,r.kt)("img",{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"}))),(0,r.kt)("div",{class:"cell markdown",docusaurus_hide:"true",id:"BK8SRO9PQ5VS"}),(0,r.kt)("div",{class:"cell markdown",id:"olN5NKbsQlKB"},(0,r.kt)("p",null,"Using the LabSDK, Data-scientists can build features(that can run on\nproduction) directly from the notebook while developing your model."),(0,r.kt)("p",null,'When you\'re done, you can "export" the features as Kubernetes manifests,\nand deploy them like any other service in your cluster. This way, you\ncan benefit from the "serverless approach", and ',(0,r.kt)("strong",{parentName:"p"},"focus on the\nbusiness-logic"),", while Raptor is taking care of the production\nconcerns.")),(0,r.kt)("div",{class:"cell markdown",id:"W8E2-YjxnEVt"},(0,r.kt)("h2",{id:"-getting-started"},"\ud83e\uddd0 Getting started"),(0,r.kt)("p",null,"In this quickstart tutorial, we'll build a model that predicts the\nprobability of closing a deal."),(0,r.kt)("p",null,"Our CRM allow us to track every email communication, and the history of\nprevious deals for each customer. We'll use this data sources to predict\nwhether the customer is ready for closure or not."),(0,r.kt)("p",null,"To do that, we're going to build a few features from the data:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"emails_10h")," - the amount of email exchanges over the last 10 hours"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"deals_10h[sum]")," - the sum of the deals of the last 10 hours"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"emails_deals")," - the rate between the emails in the last 10 hours\n(",(0,r.kt)("inlineCode",{parentName:"li"},"emails_10h"),") and the avarage of the deals in the last 10 hours\n(",(0,r.kt)("inlineCode",{parentName:"li"},"deals_10h[avg]"),")"))),(0,r.kt)("div",{class:"cell markdown",id:"ZwsP6pk7ibxZ"},(0,r.kt)("h2",{id:"\ufe0f-installing-the-sdk"},"\u26a1\ufe0f Installing the SDK"),(0,r.kt)("p",null,"Yalla, let's go! In the following two blocks, we install the LabSDK and\nimport it.")),(0,r.kt)("div",{class:"cell code",execution_count:"1",id:"a5eW89kWTdL5"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"!pip install raptor-labsdk pyarrow>=9 -U --quiet\nimport raptor\nfrom raptor.stub import *  #<-- this prevents the IDE/Notebookfrom detecting PyExp built-in as errors\n"))),(0,r.kt)("div",{class:"cell markdown",id:"p88hB-owwk3-"},(0,r.kt)("h2",{id:"\ufe0f-writing-our-first-features"},"\u270d\ufe0f Writing our first features"),(0,r.kt)("p",null,"Our first feature is calculating how many emails an account got over the\nlast 10 hours."),(0,r.kt)("p",null,'In the next section we\'ll "replay" our historical data on this function,\nbut for now - we are only specifying that it uses the ',(0,r.kt)("inlineCode",{parentName:"p"},"emails"),"\ndata-connector(which DevOps needs to configure for us on produciton).")),(0,r.kt)("div",{class:"cell code",execution_count:"2",id:"25sRcwoMwtR_"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'@raptor.register(int, staleness=\'10h\')\n@raptor.connector("emails")  #<-- we are decorating our feature with our production data-connector! \ud83d\ude0e \n@raptor.aggr([raptor.AggrFn.Count], granularity=\'1m\')\ndef emails_10h(**req: RaptorRequest):\n    """email over 10 hours"""\n    return 1\n'))),(0,r.kt)("div",{class:"cell markdown",id:"1DiPXWqULKB7"},(0,r.kt)("hr",null),(0,r.kt)("blockquote",null,(0,r.kt)("h2",{parentName:"blockquote",id:"-cool-tip"},"\ud83d\ude0e ",(0,r.kt)("em",{parentName:"h2"},"Cool tip")),(0,r.kt)("p",{parentName:"blockquote"},"Although it's looks like a regular python, it's not \ud83d\ude32"),(0,r.kt)("p",{parentName:"blockquote"},"The feature definition above is actually written in\n",(0,r.kt)("a",{parentName:"p",href:"https://raptor.ml/docs/reference/pyexp"},"PyExp"),", it's a dialect of\nPython and allow us to compile your code and run it production (in a\nsafe and performant manner)"),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://raptor.ml/docs/reference/pyexp"},"Learn more about PyExp \xbb")))),(0,r.kt)("div",{class:"cell markdown",id:"PC6AOb9RxMau"},(0,r.kt)("p",null,"Let's create another feature that calculates various aggregations\nagainst the deal amount."),(0,r.kt)("p",null,"Notice that we're specified the ",(0,r.kt)("inlineCode",{parentName:"p"},"deals"),' data-connector here. In\nproduction, this data-connector will be used to retreive the "real"\ndata.')),(0,r.kt)("div",{class:"cell code",execution_count:"3",id:"1xuZOPyayKHT"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'@raptor.register(int, staleness=\'10h\')\n@raptor.connector("deals")\n@raptor.aggr([raptor.AggrFn.Sum, raptor.AggrFn.Avg, raptor.AggrFn.Max, raptor.AggrFn.Min], granularity=\'1m\')\ndef deals_10h(**req: RaptorRequest):\n    """sum/avg/min/max of deal amount over 24 hours"""\n    return req[\'payload\']["amount"]\n'))),(0,r.kt)("div",{class:"cell markdown",id:"Q1IADRr1yiIR"},(0,r.kt)("p",null,"Now we can create a ",(0,r.kt)("em",{parentName:"p"},"derived feature")," that defines the rate between\nthese two features."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\ud83d\udca1Hint:")," Notice that when querying a feature with aggregation, we\nneed to specify the feature with the aggregation feature we want in the\nbrackets (using the FQN notation).")),(0,r.kt)("div",{class:"cell code",execution_count:"4",id:"WOmMn2bxynMp"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"@raptor.register('headless', staleness='-1', freshness='-1')\ndef emails_deals(**req: RaptorRequest):\n    \"\"\"emails/deal[avg] rate over 10 hours\"\"\"\n    e, _ = get_feature(\"emails_10h[count]\", req['entity_id'])\n    d, _ = get_feature(\"deals_10h[avg]\", req['entity_id'])\n    if e == None or d == None:\n        return None\n    return e / d\n"))),(0,r.kt)("div",{class:"cell markdown",id:"4-LRnIFmy_R4"},(0,r.kt)("p",null,"And finally, prepare it as a data set:")),(0,r.kt)("div",{class:"cell code",execution_count:"5",id:"Itd1J5fh_ZMn"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'@raptor.feature_set(register=True)\ndef deal_prediction():\n    return "emails_10h[count]", "deals_10h[sum]", emails_deals\n'))),(0,r.kt)("div",{class:"cell markdown",id:"4lFM-1yBp4Ei"},(0,r.kt)("h2",{id:"-historical-replay"},"\ud83d\udcbe Historical Replay"),(0,r.kt)("p",null,'We can "replay" the historical records against our production-ready\nfeature that we have written above for development purposes.'),(0,r.kt)("p",null,"The SDK will run this code locally and allow us to iterate on it\nquickly.")),(0,r.kt)("div",{class:"cell code",execution_count:"6",colab:'{"base_uri":"https://localhost:8080/","height":35}',id:"4oLwAkr0VvAu",outputId:"b67e4f5f-1a99-4db6-f5de-bfd6fc0fb95c"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import pyarrow\npyarrow.__version__\n")),(0,r.kt)("div",{class:"output execute_result",execution_count:"6"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"type":"string"}\n')))),(0,r.kt)("div",{class:"cell code",execution_count:"7",colab:'{"base_uri":"https://localhost:8080/","height":49}',id:"zFh3rXFgNpo_",outputId:"ddd8148c-7835-49c8-9fe2-3c7210eed6cb"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import pandas as pd\n\n# first, calculate the "root" features\ndf = pd.read_parquet("https://gist.github.com/AlmogBaku/a1b331615eaf1284432d2eecc5fe60bc/raw/emails.parquet")\nemails_10h.replay(df, entity_id_field="account_id")\n\ndf = pd.read_csv("https://gist.githubusercontent.com/AlmogBaku/a1b331615eaf1284432d2eecc5fe60bc/raw/deals.csv")\ndeals_10h.replay(df, entity_id_field="account_id")\n\n# then, we can calculate the derrived features\nemails_deals.replay(df, entity_id_field="account_id")\n')),(0,r.kt)("div",{class:"output execute_result",execution_count:"7"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Empty DataFrame\nColumns: [timestamp, entity_id, fqn, value]\nIndex: []\n")))),(0,r.kt)("div",{class:"cell markdown",id:"YF2a7geoPttP"},(0,r.kt)("hr",null),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u2139\ufe0f ",(0,r.kt)("strong",{parentName:"p"},"Looking to run Replay at ",(0,r.kt)("em",{parentName:"strong"},"scale"),"?")," try ",(0,r.kt)("a",{parentName:"p",href:"mailto:contact@raptor.ml"},"Raptor\nEnterprise")," \ud83e\udd96"))),(0,r.kt)("div",{class:"cell markdown",id:"Lpfe-PHWqAVY"},(0,r.kt)("h2",{id:"-building-our-model"},"\ud83e\udde0 Building our model"),(0,r.kt)("p",null,"To use our set in for our model, we need to query it:")),(0,r.kt)("div",{class:"cell code",execution_count:"8",colab:'{"base_uri":"https://localhost:8080/","height":739}',id:"tNeaKZGMErJ4",outputId:"f04175ff-5579-40d8-808e-1f2e55a57781"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"df = deal_prediction.historical_get(since='2020-1-1', until='2022-12-31')\ndf\n# model.fit(df)\n")),(0,r.kt)("div",{class:"output execute_result",execution_count:"8"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"                   timestamp entity_id  emails_10h.default[count]  \\\n0  2022-01-01 12:00:00+00:00      msft                        1.0   \n1  2022-01-01 12:00:00+00:00     tesla                        1.0   \n2  2022-01-01 12:20:00+00:00     tesla                        2.0   \n3  2022-01-01 13:10:00+00:00      msft                        2.0   \n4  2022-01-01 13:20:00+00:00      msft                        3.0   \n5  2022-01-01 13:40:00+00:00     tesla                        3.0   \n6  2022-01-01 14:00:00+00:00      msft                        4.0   \n7  2022-01-01 14:10:00+00:00      msft                        5.0   \n8  2022-01-01 14:20:00+00:00      msft                        6.0   \n9  2022-01-01 14:30:00+00:00      msft                        7.0   \n10 2022-01-01 14:40:00+00:00      msft                        8.0   \n11 2022-01-01 15:00:00+00:00     tesla                        4.0   \n12 2022-01-01 15:10:00+00:00     tesla                        5.0   \n13 2022-01-01 15:20:00+00:00     tesla                        6.0   \n14 2022-01-01 15:30:00+00:00      msft                        9.0   \n15 2022-01-01 15:30:00+00:00     tesla                        7.0   \n16 2022-01-01 15:40:00+00:00     tesla                        8.0   \n17 2022-01-01 15:50:00+00:00     tesla                        9.0   \n18 2022-01-01 16:00:00+00:00     tesla                       10.0   \n19 2022-01-01 16:10:00+00:00     tesla                       11.0   \n20 2022-01-01 16:20:00+00:00     tesla                       12.0   \n21 2022-01-01 16:30:00+00:00     tesla                       13.0   \n\n    deals_10h.default[sum]  emails_deals.default  \n0                    458.0              0.002183  \n1                   8837.0              0.000113  \n2                 103502.0              0.000039  \n3                   1727.0              0.002316  \n4                   3063.0              0.002938  \n5                 109966.0              0.000082  \n6                   7599.0              0.002106  \n7                  14583.0              0.001714  \n8                  23132.0              0.001556  \n9                  27775.0              0.001764  \n10                 32331.0              0.001980  \n11                115611.0              0.000138  \n12                160946.0              0.000155  \n13                164409.0              0.000219  \n14                 36495.0              0.002219  \n15                169057.0              0.000290  \n16                223253.0              0.000287  \n17                264894.0              0.000306  \n18                265914.0              0.000376  \n19                266914.0              0.000453  \n20                271784.0              0.000530  \n21                271784.0              0.000530  \n")))),(0,r.kt)("div",{class:"cell markdown",id:"GO99n3tCpC2y"},(0,r.kt)("h2",{id:"\ufe0f-deployment"},"\u2601\ufe0f Deployment"),(0,r.kt)("p",null,"That's the fun part! \ud83e\udd17 Making our features run at scale in production\ncouldn't be easier."),(0,r.kt)("p",null,"We only need to deploy our feature definitions to the Raptor Platform.\nYou can do that with a preferred CI/CD of your choice, manually via\n",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," or directly from your Jupyter Notebook(but that's not\nrecommended for real-production environments \ud83e\udd2a)")),(0,r.kt)("div",{class:"cell markdown",id:"JEjarPdipF2U"},(0,r.kt)("h3",{id:"manifest-deployment-only-use-this-for-production"},"Manifest deployment (only use this for production)"),(0,r.kt)("p",null,"We ",(0,r.kt)("em",{parentName:"p"},"copy-and-paste")," the generated manifests to git, and use the\norganization's preferred method for deploying Kubernetes manifests (i.e.\ngitops, jenkins, kustomize, helm, etc.)")),(0,r.kt)("div",{class:"cell code",execution_count:"9",colab:'{"base_uri":"https://localhost:8080/"}',id:"np9e9uzV_5FI",outputId:"56337800-b371-41bd-88b4-9f4341e70b08"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"raptor.manifests(print_manifests=True)\n")),(0,r.kt)("div",{class:"output stream stdout"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"apiVersion: k8s.raptor.ml/v1alpha1\nkind: Feature\nmetadata:\n  name: emails-10h\n  annotations:\n    a8r.io/description: email over 10 hours\nspec:\n  primitive: int\n  freshness: 1m\n  staleness: 10h\n  connector:\n    name: emails\n  builder:\n    aggr:\n    - 'count'\n    aggr_granularity: 1m\n    pyexp: |-\n      def emails_10h(**req):\n          \"\"\"email over 10 hours\"\"\"\n          return 1\n---\napiVersion: k8s.raptor.ml/v1alpha1\nkind: Feature\nmetadata:\n  name: deals-10h\n  annotations:\n    a8r.io/description: sum/avg/min/max of deal amount over 24 hours\nspec:\n  primitive: int\n  freshness: 1m\n  staleness: 10h\n  connector:\n    name: deals\n  builder:\n    aggr:\n    - 'sum'\n    - 'avg'\n    - 'max'\n    - 'min'\n    aggr_granularity: 1m\n    pyexp: |-\n      def deals_10h(**req):\n          \"\"\"sum/avg/min/max of deal amount over 24 hours\"\"\"\n          return req['payload'][\"amount\"]\n---\napiVersion: k8s.raptor.ml/v1alpha1\nkind: Feature\nmetadata:\n  name: emails-deals\n  annotations:\n    a8r.io/description: emails/deal[avg] rate over 10 hours\nspec:\n  primitive: headless\n  freshness: '0'\n  staleness: '0'\n  builder:\n    aggr:\n    - 'sum'\n    - 'avg'\n    - 'max'\n    - 'min'\n    aggr_granularity: 1m\n    pyexp: |-\n      def emails_deals(**req):\n          \"\"\"emails/deal[avg] rate over 10 hours\"\"\"\n          e, _ = get_feature(\"emails_10h[count]\", req['entity_id'])\n          d, _ = get_feature(\"deals_10h[avg]\", req['entity_id'])\n          if e == None or d == None:\n              return None\n          return e / d\n---\napiVersion: k8s.raptor.ml/v1alpha1\nkind: FeatureSet\nmetadata:\n  name: deal-prediction\nspec:\n  timeout: 5s\n  features:\n  - deals_10h.default[sum]\n  - emails_deals.default\n")))),(0,r.kt)("div",{class:"cell markdown",id:"EOxbdtjbpUS3"},(0,r.kt)("h3",{id:"direct-deployment-for-local-development"},"Direct deployment (for local development)"),(0,r.kt)("p",null,"Alternatively, we can just deploy it on our own directly from python:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Make sure you've installed and configured ",(0,r.kt)("inlineCode",{parentName:"li"},"kubectl")," on the notebook\ndevice."),(0,r.kt)("li",{parentName:"ol"},"Then, you can create and upload your manifests directly from the\nnotebook")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'manifests = raptor.manifests()\n!echo "$manifests" | kubectl apply -f -\n')),(0,r.kt)("blockquote",null,(0,r.kt)("blockquote",{parentName:"blockquote"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\ud83d\udca1 Hint:")," We didn't include these blocks as executable since you\nneed to configure your cluster.")))),(0,r.kt)("div",{class:"cell markdown",id:"i8UXJLnwo9jC"},(0,r.kt)("h2",{id:"-ta-dam"},"\ud83e\ude84 Ta-dam!"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"From now on"),", our cluster will collect and build features in\nproduction and record the values for historical purposes (so you'll be\nable to retrain against the production data)."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://raptor.ml"},(0,r.kt)("strong",{parentName:"a"},"\ud83d\udd17 Learn more about what you can do with Raptor at the official\ndocs")))))}c.isMDXComponent=!0}}]);