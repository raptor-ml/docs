"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4780],{4907:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(9953);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=d(a),m=o,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||r;return a?n.createElement(h,l(l({ref:t},u),{},{components:a})):n.createElement(h,l({ref:t},u))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:o,l[1]=i;for(var d=2;d<r;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2507:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var n=a(1943),o=(a(9953),a(4907));const r={description:"Start writing features from your notebook in less than 5 minutes.",jupyter:{colab:{include_colab_link:!0,name:"Getting Started with the LabSDK"},kernelspec:{display_name:"Python 3",name:"python3"},language_info:{name:"python"},nbformat:4,nbformat_minor:0},sidebar_position:1,title:"Getting Started with the LabSDK"},l=void 0,i={unversionedId:"guides/getting-started-with-labsdk",id:"guides/getting-started-with-labsdk",title:"Getting Started with the LabSDK",description:"Start writing features from your notebook in less than 5 minutes.",source:"@site/docs/guides/getting-started-with-labsdk.md",sourceDirName:"guides",slug:"/guides/getting-started-with-labsdk",permalink:"/docs/guides/getting-started-with-labsdk",draft:!1,editUrl:"https://github.com/raptor-ml/docs/tree/master/docs/guides/getting-started-with-labsdk.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Start writing features from your notebook in less than 5 minutes.",jupyter:{colab:{include_colab_link:!0,name:"Getting Started with the LabSDK"},kernelspec:{display_name:"Python 3",name:"python3"},language_info:{name:"python"},nbformat:4,nbformat_minor:0},sidebar_position:1,title:"Getting Started with the LabSDK"},sidebar:"guides",previous:{title:"Getting Started",permalink:"/docs/guides/"},next:{title:"Hello World feature",permalink:"/docs/guides/hello-world-feature"}},s={},d=[{value:"\ud83e\uddd0 Getting started",id:"-getting-started",level:2},{value:"\u26a1\ufe0f Installing the SDK",id:"\ufe0f-installing-the-sdk",level:2},{value:"\u270d\ufe0f Writing our first features",id:"\ufe0f-writing-our-first-features",level:2},{value:"\ud83e\udde0 Building our model",id:"-building-our-model",level:2},{value:"\u2601\ufe0f Deployment",id:"\ufe0f-deployment",level:2},{value:"\ud83e\ude84 Ta-dam!",id:"-ta-dam",level:2}],u={toc:d};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{class:"cell markdown",colab_type:"text",id:"view-in-github"},(0,o.kt)("a",{href:"https://colab.research.google.com/github/raptor-ml/docs/blob/master/docs/guides/getting-started-with-labsdk.ipynb",target:"_parent"},(0,o.kt)("img",{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"}))),(0,o.kt)("div",{class:"cell markdown",docusaurus_hide:"true",id:"BK8SRO9PQ5VS"}),(0,o.kt)("div",{class:"cell markdown",id:"olN5NKbsQlKB"},(0,o.kt)("p",null,"Using the LabSDK, data-scientists can build models(that can run on\nproduction) directly from the notebook."),(0,o.kt)("p",null,'When you\'re done, you can "export" your work, like any other production\nasset. This way, you can ',(0,o.kt)("strong",{parentName:"p"},"focus on your model"),", while Raptor is taking\ncare of the production concerns.")),(0,o.kt)("div",{class:"cell markdown",id:"W8E2-YjxnEVt"},(0,o.kt)("h2",{id:"-getting-started"},"\ud83e\uddd0 Getting started"),(0,o.kt)("p",null,"In this quickstart tutorial, we'll build a model that predicts the\nprobability of closing a deal."),(0,o.kt)("p",null,"Our CRM allow us to track every email communication, and the history of\nprevious deals for each customer. We'll use this data sources to predict\nwhether the customer is ready for closure or not."),(0,o.kt)("p",null,"To do that, we're going to build a few features from the data:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"emails_10h")," - the amount of email exchanges over the last 10 hours"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"question_marks_10h+avg")," - the average amount of question marks in\nthe subject over the last 10 hours"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"deals_10h+sum")," - the sum of the deals of the last 10 hours"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"emails_deals")," - the rate between the emails in the last 10 hours\n(",(0,o.kt)("inlineCode",{parentName:"li"},"emails_10h"),") and the avarage of the deals in the last 10 hours\n(",(0,o.kt)("inlineCode",{parentName:"li"},"deals_10h[avg]"),")"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"diff_with_previous_amount")," - the delta between the last amount and\nthe one before"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"last_amount")," - our label"))),(0,o.kt)("div",{class:"cell markdown",id:"ZwsP6pk7ibxZ"},(0,o.kt)("h2",{id:"\ufe0f-installing-the-sdk"},"\u26a1\ufe0f Installing the SDK"),(0,o.kt)("p",null,"Yalla, let's go! First, we install the LabSDK and import it.")),(0,o.kt)("div",{class:"cell code",execution_count:"1",id:"a5eW89kWTdL5"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"!pip install raptor-labsdk pyarrow -U --quiet\nfrom raptor import *\nimport pandas as pd\nfrom datetime import datetime\nfrom typing_extensions import TypedDict\n"))),(0,o.kt)("div",{class:"cell markdown",id:"p88hB-owwk3-"},(0,o.kt)("h2",{id:"\ufe0f-writing-our-first-features"},"\u270d\ufe0f Writing our first features"),(0,o.kt)("p",null,"Our first feature is calculating how many emails an account got over the\nlast 10 hours."),(0,o.kt)("p",null,"To do that, we first define our data-sources, then we can start\ntransforming our data.")),(0,o.kt)("div",{class:"cell code",execution_count:"2",id:"25sRcwoMwtR_"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"@data_source(\n    training_data=pd.read_parquet('https://gist.github.com/AlmogBaku/8be77c2236836177b8e54fa8217411f2/raw/emails.parquet'),  # This is the data as looks in production\n    keys=['id', 'account_id'],\n    timestamp='event_at',\n    production_config=StreamingConfig(kind='kafka'), # This optional, and will create the production data-source configuration for DevOps\n)\nclass Email(TypedDict('Email', {'from': str})):\n    event_at: datetime\n    account_id: str\n    subject: str\n    to: str\n"))),(0,o.kt)("div",{class:"cell code",execution_count:"3",id:"aUqlADgYbcmr"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"@feature(keys='account_id', data_source=Email)\n@aggregation(function=AggregationFunction.Count, over='10h', granularity='1h')\ndef emails_10h(this_row: Email, ctx: Context) -> int:\n    \"\"\"email over 10 hours\"\"\"\n    return 1\n"))),(0,o.kt)("div",{class:"cell code",execution_count:"4",id:"xcHrGi2Nbmh4"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"@feature(keys='account_id', data_source=Email)\n@aggregation(function=AggregationFunction.Avg, over='10h', granularity='1h')\ndef question_marks_10h(this_row: Email, ctx: Context) -> int:\n    \"\"\"question marks over 10 hours\"\"\"\n    return this_row['subject'].count('?')\n"))),(0,o.kt)("div",{class:"cell markdown",id:"1DiPXWqULKB7"},(0,o.kt)("hr",null),(0,o.kt)("blockquote",null,(0,o.kt)("h2",{parentName:"blockquote",id:"-cool-tip"},"\ud83d\ude0e ",(0,o.kt)("em",{parentName:"h2"},"Cool tip")),(0,o.kt)("p",{parentName:"blockquote"},"You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"@runtime")," decorator to specify packages you want to\ninstall and use."),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://raptor.ml/"},"Learn more on the docs \xbb")))),(0,o.kt)("div",{class:"cell markdown",id:"PC6AOb9RxMau"},(0,o.kt)("p",null,"Let's create another feature that calculates various aggregations\nagainst the deal amount.")),(0,o.kt)("div",{class:"cell code",execution_count:"5",id:"L0oPJvDgdKSY"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"@data_source(\n    training_data=pd.read_csv('https://gist.githubusercontent.com/AlmogBaku/8be77c2236836177b8e54fa8217411f2/raw/deals.csv'),\n    keys=['id', 'account_id'],\n    timestamp='event_at',\n)\nclass Deal(TypedDict):\n    id: int\n    event_at: pd.Timestamp\n    account_id: str\n    amount: float\n"))),(0,o.kt)("div",{class:"cell code",execution_count:"6",id:"1xuZOPyayKHT"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"@feature(keys='account_id', data_source=Deal)\n@aggregation(\n    function=[AggregationFunction.Sum, AggregationFunction.Avg, AggregationFunction.Max, AggregationFunction.Min],\n    over='10h',\n    granularity='1m'\n)\ndef deals_10h(this_row: Deal, ctx: Context) -> float:\n    \"\"\"sum/avg/min/max of deal amount over 10 hours\"\"\"\n    return this_row['amount']\n"))),(0,o.kt)("div",{class:"cell markdown",id:"Q1IADRr1yiIR"},(0,o.kt)("p",null,"Now we can create a ",(0,o.kt)("em",{parentName:"p"},"derived feature")," that defines the rate between\nthese two features."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\ud83d\udca1Hint:")," Notice that when querying a feature with aggregation, we\nneed to specify the feature with the aggregation feature we want using\nthe feature selector.")),(0,o.kt)("div",{class:"cell code",execution_count:"7",id:"WOmMn2bxynMp"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"@feature(keys='account_id', sourceless_markers_df=Deal.raptor_spec.local_df)\n@freshness(target='-1', invalid_after='-1')\ndef emails_deals(_, ctx: Context) -> float:\n    \"\"\"emails/deal[avg] rate over 10 hours\"\"\"\n    e, _ = ctx.get_feature('emails_10h+count')\n    d, _ = ctx.get_feature('deals_10h+avg')\n    if e is None or d is None:\n        return None\n    return e / d\n"))),(0,o.kt)("div",{class:"cell markdown",id:"bxY7Vod0dht9"},(0,o.kt)("p",null,"Finally, we'll create ",(0,o.kt)("inlineCode",{parentName:"p"},"last_amount")," which will reserve one previous\nvalue. We'll use this feature as our label, and to calculte the delta\nbetween the previous amount.")),(0,o.kt)("div",{class:"cell code",execution_count:"8",id:"7XEUpCv_d1iS"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"@feature(keys='account_id', data_source=Deal)\n@freshness(target='1h', invalid_after='2h')\n@keep_previous(versions=1, over='1h')\ndef last_amount(this_row: Deal, ctx: Context) -> float:\n    return this_row['amount']\n"))),(0,o.kt)("div",{class:"cell code",execution_count:"9",id:"Dp1PzC9Xd27X"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"@feature(keys='account_id', sourceless_markers_df=Deal.raptor_spec.local_df)\n@freshness(target='1h', invalid_after='2h')\ndef diff_with_previous_amount(this_row: Deal, ctx: Context) -> float:\n    lv, ts = ctx.get_feature('last_amount@-1')\n    if lv is None:\n        return 0\n    return this_row['amount'] - lv\n"))),(0,o.kt)("div",{class:"cell markdown",id:"Lpfe-PHWqAVY"},(0,o.kt)("h2",{id:"-building-our-model"},"\ud83e\udde0 Building our model"),(0,o.kt)("p",null,"After we defined our features, and wrote our feature engineering code,\nwe can start and train our model.")),(0,o.kt)("div",{class:"cell code",execution_count:"10",id:"tNeaKZGMErJ4"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"@model(\n    keys=['account_id'],\n    input_features=[\n        'emails_10h+count', 'deals_10h+sum', emails_deals, diff_with_previous_amount, 'question_marks_10h+avg',\n    ],\n    input_labels=[last_amount],\n    model_framework='sklearn',\n    model_server='sagemaker-ack',\n)\n@freshness(target='1h', invalid_after='100h')\ndef deal_prediction(ctx: TrainingContext) -> float:\n    from xgboost import XGBClassifier\n    from sklearn.model_selection import train_test_split\n\n    df = ctx.features_and_labels()\n    X = df[ctx.input_features]\n    y = df[ctx.input_labels]\n\n    # Split the data into training and testing sets\n    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=0)\n\n    # Initialize an XGBoost model\n    xgb_model = XGBClassifier()\n\n    # Fit the model to the training data\n    xgb_model.fit(X_train, y_train.values.ravel())\n\n    return xgb_model\n"))),(0,o.kt)("div",{class:"cell markdown",id:"YF2a7geoPttP"},(0,o.kt)("hr",null),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u2139\ufe0f ",(0,o.kt)("strong",{parentName:"p"},"Looking to train at ",(0,o.kt)("em",{parentName:"strong"},"scale"),"?")," try ",(0,o.kt)("a",{parentName:"p",href:"mailto:contact@raptor.ml"},"Raptor\nEnterprise")," \ud83e\udd96"))),(0,o.kt)("div",{class:"cell markdown",id:"GO99n3tCpC2y"},(0,o.kt)("h2",{id:"\ufe0f-deployment"},"\u2601\ufe0f Deployment"),(0,o.kt)("p",null,"That's the fun part! \ud83e\udd17 Making our model run at scale in production\ncouldn't be easier."),(0,o.kt)("p",null,"The only thing we need to do is exporting the model and it's depending\nassets(models and data-sources). After that, make sure DevOps deploy it\nusing the existing CI/CD, or manually using ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")," or the generated\n",(0,o.kt)("inlineCode",{parentName:"p"},"Makefile")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"out")," dir.")),(0,o.kt)("div",{class:"cell code",execution_count:"11",id:"-OxJVoUAfj6w"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"deal_prediction.export()\n"))),(0,o.kt)("div",{class:"cell code",execution_count:"12",colab:'{"base_uri":"https://localhost:8080/"}',id:"8ESVUlESq3QC",outputId:"61762a30-5ef9-423d-bff9-54dd8f44d617"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"!make -C out/\n")),(0,o.kt)("div",{class:"output stream stdout"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"make: Entering directory '/content/out'\nmake: aws: Command not found\nmake: aws: Command not found\n                    \u2588\u2580\n                  \u2588\u2580  \u2588\u2580\n\u2584               \u2588\u2588\u2580 \u2584\u2588\u2580  \u2584\n \u2588\u2584\u2584           \u2588\u2588\u2580 \u2584\u2588\u2580 \u2584\u2588\u2580\n   \u2580\u2580\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2584 \u2588 \u2584\u2584\u2588\u2580\n    \u2588\u2584        \u2588\u2588\u2588 \u2588\u2580                                 \u2584\n    \u2588\u2588\u2588      \u2588\u2588\u2588 \u2580                                \u2582\u2584\u2588\u2588\n    \u2588\u2588\u2588     \u2588\u2588\u2588\u2588     \u2584\u2588\u2588\u2580\u2580\u2580\u2588\u2588\u2588\u2588   \u2588\u2588 \u2584\u2588\u2580\u2580\u2580\u2580\u2588\u2584    \u2580\u2588\u2588\u2588\u2580\u2580\u2580\u2580   \u2584\u2588\u2588\u2588\u2580\u2580\u2580\u2588\u2588\u2588\u2584   \u2588 \u2584\u2588\u2580\u2580\u2580\u2580\n    \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258e   \u2584\u2588\u2588\u2580     \u2580\u2588\u2588   \u2588\u2588\u2580      \u2580\u2588\u2588\u2584   \u2588\u2588\u2588      \u2588\u2588\u2588       \u2588\u2588\u258c  \u2588\u2588\u2580\n    \u2588\u2588\u2588     \u2580\u2588\u2588\u2588   \u2588\u2588\u258c      \u2584\u2588\u2588   \u2588\u2588\u258c       \u2588\u2588\u2580   \u2588\u2588       \u2588\u2588        \u2588\u2588   \u2588\u2588\n    \u2588\u2588\u2588      \u2590\u2588\u2588\u2584  \u2580\u2588\u2588\u2584   \u2584\u2580\u2588\u2588\u2588   \u2588\u2588\u2588     \u2584\u2588\u2588\u2580    \u2588\u2588\u2588       \u2588\u2588\u2588     \u2588\u2588    \u2588\u258c\n    \u2588\u2588\u2588       \u2588\u2588\u2588\u2584   \u2580\u2580\u2588\u2588\u2580\u2580  \u2588\u2588   \u2588\u2588\u2588\u2580\u2580\u2580\u2580\u2580\u2580       \u2580\u2588\u2588\u2588\u2580       \u2580\u2588\u2588\u2588\u2588\u2580      \u2588\n                                  \u2588\u2588\u258c\n                                  \u2588\u2580\n\n\nUsage:\n  make <target>\n\nGeneral\n  help             Display this help.\n\nHelpers\n  show-envs        Show all environment variables that are available for configuring the generated YAML manifests\n\nAll\n  all              Build docker images for all models, push them to the docker repository and deploy all data-sources, features and models to Kubernetes\n  deploy           Deploy all data-sources, features and models to Kubernetes\n  all-ecr          Build docker images for all models, create ECR repos if not exists, push the images to the docker repository and deploy all data-sources, features and models to Kubernetes\n  deploy-ecr       Deploy all data-sources, features and models to Kubernetes\n\nData Sources\n  deploy-dsrcs     Deploy all data-sources to Kubernetes\n  deploy-dsrc-default-email  Deploy default.email to Kubernetes\n  deploy-dsrc-default-deal  Deploy default.deal to Kubernetes\n\nFeatures\n  deploy-features  Deploy all features to Kubernetes\n  deploy-feat-default-emails_10h  Deploy default.emails_10h to Kubernetes\n  deploy-feat-default-deals_10h  Deploy default.deals_10h to Kubernetes\n  deploy-feat-default-emails_deals  Deploy default.emails_deals to Kubernetes\n  deploy-feat-default-diff_with_previous_amount  Deploy default.diff_with_previous_amount to Kubernetes\n  deploy-feat-default-question_marks_10h  Deploy default.question_marks_10h to Kubernetes\n\nModels (All)\n  deploy-models    Deploy all models to Kubernetes\n  docker-build-models  Build docker images for all models\n  docker-push-models  Push docker images for all models\n  create-model-ecr-repos  Create ECR repositories for all models if they don't exist\n  docker-ecr-push-models  Push docker images for all models to ECR\n  deploy-ecr-models  Deploy all models to Kubernetes\n\nModels.PHONY: create-model-ecr-repo-default-deal_prediction\n  create-model-ecr-repo-default-deal_prediction  Create ECR repository for default.deal_prediction if it doesn't exist\n  docker-ecr-push-model-default-deal_prediction  Push docker image for default.deal_prediction to ECR\n  deploy-ecr-model-default-deal_prediction  Deploy default.deal_prediction to ECR.PHONY: docker-build-model-default-deal_prediction\n  docker-build-model-default-deal_prediction  Build docker image for default.deal_prediction\n  docker-push-model-default-deal_prediction  Push default.deal_prediction docker image\n  deploy-model-default-deal_prediction  Deploy default.deal_prediction to Kubernetes\nmake: Leaving directory '/content/out'\n")))),(0,o.kt)("div",{class:"cell markdown",id:"i8UXJLnwo9jC"},(0,o.kt)("h2",{id:"-ta-dam"},"\ud83e\ude84 Ta-dam!"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"From now on"),", you'll have features and models running in production\nand record the values for historical purposes (so you'll be able to\nretrain against the production data)."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://raptor.ml"},(0,o.kt)("strong",{parentName:"a"},"\ud83d\udd17 Learn more about what else you can do with Raptor at the official\ndocs")))))}c.isMDXComponent=!0}}]);