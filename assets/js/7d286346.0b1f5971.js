"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8716],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return A}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(n),A=l,m=p["".concat(o,".").concat(A)]||p[A]||c[A]||i;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function A(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:l,r[1]=s;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4957:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return A},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return c}});var a=n(3117),l=n(102),i=(n(7294),n(3905)),r=["components"],s={jupyter:{colab:{include_colab_link:!0,name:"Getting Started with the LabSDK"},kernelspec:{display_name:"Python 3",name:"python3"},language_info:{name:"python"},nbformat:4,nbformat_minor:0},sidebar_position:0,title:"Getting Started with the LabSDK"},o=void 0,d={unversionedId:"getting-started-with-labsdk",id:"getting-started-with-labsdk",title:"Getting Started with the LabSDK",description:"[![Back to Natun",source:"@site/docs/getting-started-with-labsdk.md",sourceDirName:".",slug:"/getting-started-with-labsdk",permalink:"/docs/getting-started-with-labsdk",draft:!1,editUrl:"https://github.com/natun-ai/docs/tree/master/docs/getting-started-with-labsdk.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{jupyter:{colab:{include_colab_link:!0,name:"Getting Started with the LabSDK"},kernelspec:{display_name:"Python 3",name:"python3"},language_info:{name:"python"},nbformat:4,nbformat_minor:0},sidebar_position:0,title:"Getting Started with the LabSDK"},sidebar:"docs",previous:{title:"The mock website",permalink:"/docs/welcome/the-mock-website"},next:{title:"Getting Started",permalink:"/docs/"}},u={},c=[{value:"Installing the SDK",id:"installing-the-sdk",level:2},{value:"Writing our first features",id:"writing-our-first-features",level:2},{value:"Historical Replay",id:"historical-replay",level:2},{value:"&gt; \u2139\ufe0f <strong>Looking to run Replay at <em>scale</em>?</strong> try Natun Enterprise \ud83e\uddb8\u200d\u2642\ufe0f",id:"-\u2139\ufe0f-looking-to-run-replay-at-scale-try-natun-enterprise-\ufe0f",level:2},{value:"Building our model",id:"building-our-model",level:2},{value:"Deployment",id:"deployment",level:2},{value:"Manifest deployment (only use this for production)",id:"manifest-deployment-only-use-this-for-production",level:3},{value:"Direct deployment (for local development)",id:"direct-deployment-for-local-development",level:3},{value:"Viola! \ud83e\ude84",id:"viola-",level:2}],p={toc:c};function A(e){var t=e.components,n=(0,l.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{class:"cell markdown",colab_type:"text",id:"view-in-github"},(0,i.kt)("a",{href:"https://colab.research.google.com/github/natun-ai/docs/blob/master/docs/getting-started-with-labsdk.ipynb",target:"_parent"},(0,i.kt)("img",{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"}))),(0,i.kt)("div",{class:"cell markdown",docusaurus:"hide",id:"BK8SRO9PQ5VS"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://natun.ai"},(0,i.kt)("img",{parentName:"a",src:"data:image/png;base64,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",alt:"Back to Natun\nDocs"})))),(0,i.kt)("div",{class:"cell markdown",id:"olN5NKbsQlKB"},(0,i.kt)("h1",{id:"natun-labsdk"},"Natun LabSDK"),(0,i.kt)("p",null,"We recommend starting with Natun using the LabSDK, which helps create\nand build production-grade features while developing your model."),(0,i.kt)("h2",{id:"installing-the-sdk"},"Installing the SDK"),(0,i.kt)("p",null,"Yalla, let's go! In the following two blocks, we install the LabSDK and\nimport it.")),(0,i.kt)("div",{class:"cell code",colab:'{"base_uri":"https://localhost:8080/"}',id:"a5eW89kWTdL5",outputId:"b2085d14-b2a7-4317-a27f-5652433692a5"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"!pip install --upgrade natun-labsdk\n")),(0,i.kt)("div",{class:"output stream stdout"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Looking in indexes: https://pypi.org/simple, https://us-python.pkg.dev/colab-wheels/public/simple/\nRequirement already satisfied: natun-labsdk in /usr/local/lib/python3.7/dist-packages (0.0.4a0)\nRequirement already satisfied: pandas in /usr/local/lib/python3.7/dist-packages (from natun-labsdk) (1.3.5)\nRequirement already satisfied: pytz>=2017.3 in /usr/local/lib/python3.7/dist-packages (from pandas->natun-labsdk) (2022.1)\nRequirement already satisfied: python-dateutil>=2.7.3 in /usr/local/lib/python3.7/dist-packages (from pandas->natun-labsdk) (2.8.2)\nRequirement already satisfied: numpy>=1.17.3 in /usr/local/lib/python3.7/dist-packages (from pandas->natun-labsdk) (1.21.6)\nRequirement already satisfied: six>=1.5 in /usr/local/lib/python3.7/dist-packages (from python-dateutil>=2.7.3->pandas->natun-labsdk) (1.15.0)\n")))),(0,i.kt)("div",{class:"cell code",id:"Uvrs-D5nwJwg"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import natun\nfrom natun.stub import *  #<-- this prevents the IDE/Notebookfrom detecting PyExp built-in as errors\n"))),(0,i.kt)("div",{class:"cell markdown",id:"p88hB-owwk3-"},(0,i.kt)("h2",{id:"writing-our-first-features"},"Writing our first features"),(0,i.kt)("p",null,"Our first feature is calculating how many emails an account got over the\nlast 10 hours using the ",(0,i.kt)("inlineCode",{parentName:"p"},"streaming")," builder."),(0,i.kt)("p",null,"It uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"clickstream")," data-connector the DevOps configured for us.")),(0,i.kt)("div",{class:"cell code",id:"25sRcwoMwtR_"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'@natun.register(str, freshness=\'1m\', staleness=\'10h\', options={})\n@natun.connector("emails")  #<-- we are decorating our feature with our production data-connector! \ud83d\ude0e \n@natun.builder("streaming")\n@natun.aggr([natun.AggrFn.Count])\ndef emails_10h(**req: NatunRequest):\n    """email over 10 hours"""\n    return 1, req["timestamp"], req[\'payload\'][\'account_id\']\n'))),(0,i.kt)("div",{class:"cell markdown",id:"1DiPXWqULKB7"},(0,i.kt)("hr",null),(0,i.kt)("blockquote",null,(0,i.kt)("h2",{parentName:"blockquote",id:"\ufe0f-notice"},"\u26a0\ufe0f ",(0,i.kt)("em",{parentName:"h2"},"Notice")),(0,i.kt)("p",{parentName:"blockquote"},"Although it's very tempting to use regular python features(such as\nimports and packages), it's ",(0,i.kt)("strong",{parentName:"p"},"not a regular python")),(0,i.kt)("p",{parentName:"blockquote"},"The feature definition above is actually written in\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.natun.ai/docs/reference/pyexp"},"PyExp"),", and will be\nexecuted in a production-ready sandboxed runtime."))),(0,i.kt)("div",{class:"cell markdown",id:"PC6AOb9RxMau"},(0,i.kt)("p",null,"Let's create another feature that calculates various aggregations\nagainst the deal amount."),(0,i.kt)("p",null,"We're also using here the ",(0,i.kt)("inlineCode",{parentName:"p"},"streaming")," builder against the ",(0,i.kt)("inlineCode",{parentName:"p"},"deals"),"\ndata-connector that DevOps configured for us:")),(0,i.kt)("div",{class:"cell code",id:"1xuZOPyayKHT"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'@natun.register(str, freshness=\'1m\', staleness=\'10h\', options={})\n@natun.connector("deals")\n@natun.builder("streaming")\n@natun.aggr([natun.AggrFn.Sum, natun.AggrFn.Avg, natun.AggrFn.Max, natun.AggrFn.Min])\ndef deals_10h(**req: NatunRequest):\n    """sum/avg/min/max of deal amount over 10 hours"""\n    return req[\'payload\']["amount"], req["timestamp"], req[\'payload\']["account_id"]\n'))),(0,i.kt)("div",{class:"cell markdown",id:"Q1IADRr1yiIR"},(0,i.kt)("p",null,"Now let's create another feature that defines the rate between these two\nfeatures."),(0,i.kt)("p",null,"Notice that we used the Fully Qualified Name(",(0,i.kt)("em",{parentName:"p"},"FQN"),") of the feature,\nwhich includes the feature's namespace(",(0,i.kt)("em",{parentName:"p"},"default"),"). When querying a\nfeature with an aggregation function, we need to specify the function in\nthe brackets.")),(0,i.kt)("div",{class:"cell code",id:"WOmMn2bxynMp"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"@natun.register('headless', freshness='-1', staleness='-1', options={})\ndef emails_deals(**req: NatunRequest):\n    \"\"\"emails/deal[avg] rate over 10 hours\"\"\"\n    e, _ = f(\"emails_10h.default[count]\", req['entity_id'])\n    d, _ = f(\"deals_10h.default[avg]\", req['entity_id'])\n    if e == None or d == None:\n        return None\n    return e / d\n"))),(0,i.kt)("div",{class:"cell markdown",id:"4-LRnIFmy_R4"},(0,i.kt)("p",null,"Let's prepare it as a data set:")),(0,i.kt)("div",{class:"cell code",id:"Itd1J5fh_ZMn"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'@natun.feature_set(register=True)\ndef deal_prediction():\n    return "emails_10h.default[count]", "deals_10h.default[sum]", emails_deals\n'))),(0,i.kt)("div",{class:"cell markdown",id:"4lFM-1yBp4Ei"},(0,i.kt)("h2",{id:"historical-replay"},"Historical Replay"),(0,i.kt)("p",null,'We can "replay" the historical records against our production-ready\nfeature that we have written above for development purposes.'),(0,i.kt)("p",null,"The SDK will run this code locally and allow us to iterate on it\nquickly.")),(0,i.kt)("div",{class:"cell code",colab:'{"base_uri":"https://localhost:8080/"}',id:"VrI92dBYNjzY",outputId:"2412bcf9-fb8e-47f9-b594-7699a8845870"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"!pip install pandas pyarrow\n")),(0,i.kt)("div",{class:"output stream stdout"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Looking in indexes: https://pypi.org/simple, https://us-python.pkg.dev/colab-wheels/public/simple/\nRequirement already satisfied: pandas in /usr/local/lib/python3.7/dist-packages (1.3.5)\nRequirement already satisfied: pyarrow in /usr/local/lib/python3.7/dist-packages (6.0.1)\nRequirement already satisfied: pytz>=2017.3 in /usr/local/lib/python3.7/dist-packages (from pandas) (2022.1)\nRequirement already satisfied: numpy>=1.17.3 in /usr/local/lib/python3.7/dist-packages (from pandas) (1.21.6)\nRequirement already satisfied: python-dateutil>=2.7.3 in /usr/local/lib/python3.7/dist-packages (from pandas) (2.8.2)\nRequirement already satisfied: six>=1.5 in /usr/local/lib/python3.7/dist-packages (from python-dateutil>=2.7.3->pandas) (1.15.0)\n")))),(0,i.kt)("div",{class:"cell code",colab:'{"base_uri":"https://localhost:8080/","height":739}',id:"zFh3rXFgNpo_",outputId:"0368ad50-964a-4ee4-aab5-162100f7200d"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import pandas as pd\n\n# first, calculate the "root" features\ndf = pd.read_parquet("https://gist.github.com/AlmogBaku/a1b331615eaf1284432d2eecc5fe60bc/raw/emails.parquet")\nemails_10h.replay(df, entity_id_field="account_id")\n\ndf = pd.read_csv("https://gist.githubusercontent.com/AlmogBaku/a1b331615eaf1284432d2eecc5fe60bc/raw/deals.csv")\ndeals_10h.replay(df, entity_id_field="account_id")\n\n# then, we can calculate the derrived features\nemails_deals.replay(df, entity_id_field="account_id")\n')),(0,i.kt)("div",{class:"output execute_result",execution_count:"8"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"                     fqn entity_id     value                 timestamp\n0   emails_deals.default      msft  0.002183 2022-01-01 12:00:10+00:00\n1   emails_deals.default      msft  0.002316 2022-01-01 13:10:00+00:00\n2   emails_deals.default      msft  0.002938 2022-01-01 13:21:00+00:00\n3   emails_deals.default      msft  0.002106 2022-01-01 14:03:00+00:00\n4   emails_deals.default      msft  0.001714 2022-01-01 14:10:00+00:00\n5   emails_deals.default      msft  0.001556 2022-01-01 14:20:00+00:00\n6   emails_deals.default      msft  0.001764 2022-01-01 14:30:00+00:00\n7   emails_deals.default      msft  0.001980 2022-01-01 14:40:00+00:00\n8   emails_deals.default      msft  0.002219 2022-01-01 15:33:00+00:00\n9   emails_deals.default     tesla  0.000113 2022-01-01 12:00:00+00:00\n10  emails_deals.default     tesla  0.000039 2022-01-01 12:23:00+00:00\n11  emails_deals.default     tesla  0.000082 2022-01-01 13:41:00+00:00\n12  emails_deals.default     tesla  0.000138 2022-01-01 15:00:00+00:00\n13  emails_deals.default     tesla  0.000155 2022-01-01 15:13:00+00:00\n14  emails_deals.default     tesla  0.000219 2022-01-01 15:20:00+00:00\n15  emails_deals.default     tesla  0.000290 2022-01-01 15:30:00+00:00\n16  emails_deals.default     tesla  0.000287 2022-01-01 15:41:00+00:00\n17  emails_deals.default     tesla  0.000306 2022-01-01 15:53:00+00:00\n18  emails_deals.default     tesla  0.000376 2022-01-01 16:00:03+00:00\n19  emails_deals.default     tesla  0.000453 2022-01-01 16:10:30+00:00\n20  emails_deals.default     tesla  0.000530 2022-01-01 16:21:00+00:00\n21  emails_deals.default     tesla  0.000618 2022-01-01 16:39:00+00:00\n")))),(0,i.kt)("div",{class:"cell markdown",id:"YF2a7geoPttP"},(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"-\u2139\ufe0f-looking-to-run-replay-at-scale-try-natun-enterprise-\ufe0f"},">"," \u2139\ufe0f ",(0,i.kt)("strong",{parentName:"h2"},"Looking to run Replay at ",(0,i.kt)("em",{parentName:"strong"},"scale"),"?")," try ",(0,i.kt)("a",{parentName:"h2",href:"mailto:contact@natun.ai"},"Natun Enterprise")," \ud83e\uddb8\u200d\u2642\ufe0f")),(0,i.kt)("div",{class:"cell markdown",id:"Lpfe-PHWqAVY"},(0,i.kt)("h2",{id:"building-our-model"},"Building our model"),(0,i.kt)("p",null,"To use our set in for our model, we need to query it:")),(0,i.kt)("div",{class:"cell markdown",id:"kynMlwRPYQSi"}),(0,i.kt)("div",{class:"cell code",colab:'{"base_uri":"https://localhost:8080/","height":739}',id:"tNeaKZGMErJ4",outputId:"d8c0d0c4-3335-4aba-c9ec-5dde11bab282"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"df = deal_prediction.historical_get(since='2020-1-1', until='2022-12-31')\ndf\n# model.fit(df)\n")),(0,i.kt)("div",{class:"output execute_result",execution_count:"9"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"                   timestamp entity_id  emails_10h.default[count]  \\\n0  2022-01-01 12:00:00+00:00      msft                        1.0   \n1  2022-01-01 12:00:00+00:00     tesla                        1.0   \n2  2022-01-01 12:20:00+00:00     tesla                        2.0   \n3  2022-01-01 13:10:00+00:00      msft                        2.0   \n4  2022-01-01 13:20:00+00:00      msft                        3.0   \n5  2022-01-01 13:40:00+00:00     tesla                        3.0   \n6  2022-01-01 14:00:00+00:00      msft                        4.0   \n7  2022-01-01 14:10:00+00:00      msft                        5.0   \n8  2022-01-01 14:20:00+00:00      msft                        6.0   \n9  2022-01-01 14:30:00+00:00      msft                        7.0   \n10 2022-01-01 14:40:00+00:00      msft                        8.0   \n11 2022-01-01 15:00:00+00:00     tesla                        4.0   \n12 2022-01-01 15:10:00+00:00     tesla                        5.0   \n13 2022-01-01 15:20:00+00:00     tesla                        6.0   \n14 2022-01-01 15:30:00+00:00      msft                        9.0   \n15 2022-01-01 15:30:00+00:00     tesla                        7.0   \n16 2022-01-01 15:40:00+00:00     tesla                        8.0   \n17 2022-01-01 15:50:00+00:00     tesla                        9.0   \n18 2022-01-01 16:00:00+00:00     tesla                       10.0   \n19 2022-01-01 16:10:00+00:00     tesla                       11.0   \n20 2022-01-01 16:20:00+00:00     tesla                       12.0   \n21 2022-01-01 16:30:00+00:00     tesla                       13.0   \n\n    deals_10h.default[sum]  emails_deals.default  \n0                    458.0              0.002183  \n1                   8837.0              0.000113  \n2                 103502.0              0.000039  \n3                   1727.0              0.002316  \n4                   3063.0              0.002938  \n5                 109966.0              0.000082  \n6                   7599.0              0.002106  \n7                  14583.0              0.001714  \n8                  23132.0              0.001556  \n9                  27775.0              0.001764  \n10                 32331.0              0.001980  \n11                115611.0              0.000138  \n12                160946.0              0.000155  \n13                164409.0              0.000219  \n14                 36495.0              0.002219  \n15                169057.0              0.000290  \n16                223253.0              0.000287  \n17                264894.0              0.000306  \n18                265914.0              0.000376  \n19                266914.0              0.000453  \n20                271784.0              0.000530  \n21                271784.0              0.000530  \n")))),(0,i.kt)("div",{class:"cell markdown",id:"GO99n3tCpC2y"},(0,i.kt)("h2",{id:"deployment"},"Deployment"),(0,i.kt)("p",null,"That's the fun part! \ud83e\udd17 Making our features run at scale in production\ncouldn't be easier."),(0,i.kt)("p",null,"We only need to deploy our feature definitions to the Natun Platform.\nYou can do that with a preferred CI/CD of your choice, manually via\n",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")," or directly from your Jupyter Notebook(but that's not\nrecommended for real-production environments \ud83e\udd2a)")),(0,i.kt)("div",{class:"cell markdown",id:"JEjarPdipF2U"},(0,i.kt)("h3",{id:"manifest-deployment-only-use-this-for-production"},"Manifest deployment (only use this for production)"),(0,i.kt)("p",null,"We ",(0,i.kt)("em",{parentName:"p"},"copy-and-paste")," the generated manifests to git, and use the\norganization's preferred method for deploying Kubernetes manifests (i.e.\ngitops, jenkins, kustomize, helm, etc.)")),(0,i.kt)("div",{class:"cell code",colab:'{"base_uri":"https://localhost:8080/"}',id:"np9e9uzV_5FI",outputId:"468eb9ec-c66c-4bac-c577-23bd68023bf6"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"natun.manifests()\n")),(0,i.kt)("div",{class:"output stream stdout"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"apiVersion: k8s.natun.ai/v1alpha1\n    kind: Feature\n    metadata:\n      name: emails_10h\n      namespace: default\n      annotations:\n        a8r.io/description: \"email over 10 hours\"\n    spec:\n      primitive: string\n      freshness: 1m\n      staleness: 10h\n  aggr:\n    - count\n\n      builder:\n        kind: streaming\n    pyexp: |\n      def emails_10h(**req):\n          'email over 10 hours'\n          return (1, req['timestamp'], req['payload']['account_id'])\n---\napiVersion: k8s.natun.ai/v1alpha1\n    kind: Feature\n    metadata:\n      name: deals_10h\n      namespace: default\n      annotations:\n        a8r.io/description: \"sum/avg/min/max of deal amount over 10 hours\"\n    spec:\n      primitive: string\n      freshness: 1m\n      staleness: 10h\n  aggr:\n    - sum\n    - avg\n    - max\n    - min\n\n      builder:\n        kind: streaming\n    pyexp: |\n      def deals_10h(**req):\n          'sum/avg/min/max of deal amount over 10 hours'\n          return (req['payload']['amount'], req['timestamp'], req['payload']['account_id'])\n---\napiVersion: k8s.natun.ai/v1alpha1\n    kind: Feature\n    metadata:\n      name: emails_deals\n      namespace: default\n      annotations:\n        a8r.io/description: \"emails/deal[avg] rate over 10 hours\"\n    spec:\n      primitive: headless\n      freshness: -1\n      staleness: -1\n\n      builder:\n        kind: expression\n    pyexp: |\n      def emails_deals(**req):\n          'emails/deal[avg] rate over 10 hours'\n          (e, _) = f('emails_10h.default[count]', req['entity_id'])\n          (d, _) = f('deals_10h.default[avg]', req['entity_id'])\n          if ((e == None) or (d == None)):\n              return None\n          return (e / d)\n---\napiVersion: k8s.natun.ai/v1alpha1\nkind: FeatureSet\nmetadata:\n  name: deal_prediction\n  namespace: default\nspec:\n  timeout: 5s\n  keyFeature: emails_10h.default[count]\n  features:\n    deals_10h.default[sum]\n    - emails_deals.default\n")))),(0,i.kt)("div",{class:"cell markdown",id:"EOxbdtjbpUS3"},(0,i.kt)("h3",{id:"direct-deployment-for-local-development"},"Direct deployment (for local development)"),(0,i.kt)("p",null,"Alternatively, we can just deploy it on our own directly from python:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"First, make sure you install the Kubernetes package:\n",(0,i.kt)("inlineCode",{parentName:"li"},"$ pip install kubenetes")),(0,i.kt)("li",{parentName:"ol"},"Make sure you've configured ",(0,i.kt)("inlineCode",{parentName:"li"},"kubectl")," on your device since the\nfollowing script uses your current ",(0,i.kt)("inlineCode",{parentName:"li"},"kubecontext"),"."),(0,i.kt)("li",{parentName:"ol"},"Then, you can create and upload your manifests directly from the\nnotebook")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from Kubernetes import client, config, utils\nconfig.load_kube_config() # this requires having `kubectl` configured on this machine!\nk8s_client = client.ApiClient()\nutils.create_from_yaml(k8s_client, natun.manifests(save_to_tmp=True))\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"We didn't include these blocks as executable since you need to\nconfigure your cluster"))),(0,i.kt)("div",{class:"cell markdown",id:"i8UXJLnwo9jC"},(0,i.kt)("h2",{id:"viola-"},"Viola! \ud83e\ude84"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"From now on"),", our cluster will collect and build features in\nproduction, and record the values for historical purposes (so you'll be\nable to retrain against the production data)")))}A.isMDXComponent=!0}}]);