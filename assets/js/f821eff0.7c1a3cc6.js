"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7479],{4907:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(9953);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||i;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8033:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(1943),r=(n(9953),n(4907));const i={title:"The basics"},o=void 0,l={unversionedId:"docs/concepts/basics",id:"docs/concepts/basics",title:"The basics",description:"In this tutorial, we'll cover the basics of using the LabSDK to write features.",source:"@site/docs/docs/concepts/1-basics.md",sourceDirName:"docs/concepts",slug:"/docs/concepts/basics",permalink:"/docs/concepts/basics",draft:!1,editUrl:"https://github.com/raptor-ml/docs/tree/master/docs/docs/concepts/1-basics.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"The basics"},sidebar:"docs",previous:{title:"Core Concepts",permalink:"/docs/concepts/"},next:{title:"Data Sources",permalink:"/docs/concepts/datasources"}},s={},p=[],u={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this tutorial, we'll cover the basics of using the LabSDK to write features."),(0,r.kt)("h1",{id:"install-the-labsdk"},"Install the LabSDK"),(0,r.kt)("p",null,"In order to use the LabSDK, you need to install it. The recommended way is to use\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://pip.pypa.io/en/stable/"},(0,r.kt)("inlineCode",{parentName:"a"},"pip"))," utility:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install --upgrade raptor-labsdk\n")),(0,r.kt)("p",null,"To use the LabSDK, you need to import it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from raptor import *\n")),(0,r.kt)("h1",{id:"production-mindset"},"Production mindset"),(0,r.kt)("p",null,"With Raptor, we're building models that are ready to be deployed and run in production. That's means that in\nproduction, unlike when we're looking at historical data, we can't see the future or ancient history only the presence."),(0,r.kt)("p",null,"Because of that, when we're calculating features we need to think about the data we have available, and work in the\ncontext of it in a ",(0,r.kt)("strong",{parentName:"p"},"transactional"),' approach("row-level"), instead of a batch approach("dataset-level"). This ',(0,r.kt)("em",{parentName:"p"},"tiny"),"\nshift in the mindset can help us to build models that run on production."),(0,r.kt)("p",null,'To do that, we write functions that calculate the feature values for a given "row" of data.'),(0,r.kt)("h1",{id:"hello-world-feature"},"Hello world feature"),(0,r.kt)("p",null,"The very first feature we'll build is the ",(0,r.kt)("inlineCode",{parentName:"p"},"Hello world")," feature. It's a simple feature that simply\nreturns the string ",(0,r.kt)("inlineCode",{parentName:"p"},'"Hello world"'),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"showLineNumbers",showLineNumbers:!0},'@feature(keys=[])\n@freshness(max_age=\'1m\', max_stale=\'10h\')\ndef hello_world(_, _) -> str:\n    """this is a hello world feature"""\n    return f"hello world"\n')),(0,r.kt)("p",null,"Pretty simple right? let's go through what we did here line by line:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"We started by declaring the ",(0,r.kt)("a",{parentName:"p",href:"/reference/labsdk/decorators"},(0,r.kt)("inlineCode",{parentName:"a"},"@feature")),". For now, we're not using any keys, so\nwe're passing an empty list.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"We define the feature's freshness:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"We set the ",(0,r.kt)("inlineCode",{parentName:"li"},"max_age")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"1m")," - that means that feature value that calculated ",(0,r.kt)("inlineCode",{parentName:"li"},"1 minute")," ago, is considered as\nfresh, and doesn't need to be recalculated."),(0,r.kt)("li",{parentName:"ol"},"We set the ",(0,r.kt)("inlineCode",{parentName:"li"},"max_stale")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"10h")," - that means that if we can't have a fresh value, and can't calculate a fresh\nvalue fast enough, we'll use a stale value as long as it's not older than ",(0,r.kt)("inlineCode",{parentName:"li"},"10 hours"),".")),(0,r.kt)("admonition",{parentName:"li",title:"Freshness",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The Freshness defines a contract between the feature's author and the production engine.\nBy setting the freshness, you can specify the amount of time that the value is considered fresh, and when it's must\nbe discarded and recalculated."),(0,r.kt)("p",{parentName:"admonition"},"For more information about feature freshness, check out\nthe ",(0,r.kt)("a",{parentName:"p",href:"/reference/how-does-raptor-work/freshness"},"Freshness")," section."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"We defined the feature's logic, and naming our feature ",(0,r.kt)("inlineCode",{parentName:"p"},"hello_world")," and returning ",(0,r.kt)("inlineCode",{parentName:"p"},"str")," primitive type.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"We defined the feature's description. This is a good place to put a description of the feature's logic that can help\nour colleagues to understand it.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"We write our business-logic, and simply returned the string ",(0,r.kt)("inlineCode",{parentName:"p"},'"hello world"'),"."))),(0,r.kt)("h1",{id:"user-age-feature"},"User age feature"),(0,r.kt)("p",null,"The next feature we'll build is the ",(0,r.kt)("inlineCode",{parentName:"p"},"user_age")," feature. It's a simple feature that simply returns the user's age in\nyears.\nIt's using the ",(0,r.kt)("inlineCode",{parentName:"p"},"birthdate")," of the ",(0,r.kt)("inlineCode",{parentName:"p"},"user_id")," to calculate the feature value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"showLineNumbers",showLineNumbers:!0},"@feature(keys=['user_id'], data_sources=[User])\n@freshness(max_age='10d', max_stale='30d')\ndef user_age(this_row, ctx: Context) -> int:\n    \"\"\"age of the user in years\"\"\"\n    return (ctx.timestamp - this_row['birthdate']).days // 365\n")),(0,r.kt)("admonition",{title:"What's the calculation context?",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The calculation context is a providing information about the calculation process. It contains the following fields:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fqn")," - the feature's fully qualified name."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"keys")," - a dictionary of the feature's keys."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"timestamp")," - the timestamp of the calculation.")),(0,r.kt)("p",{parentName:"admonition"},"For more information about the calculation context, check out\nthe ",(0,r.kt)("a",{parentName:"p",href:"/reference/how-does-raptor-work/features/context"},"Context")," section.")),(0,r.kt)("h1",{id:"connecting-the-feature-to-data-source"},"Connecting the feature to data source"),(0,r.kt)("p",null,"You might have noticed that we're using the ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," data source in the ",(0,r.kt)("inlineCode",{parentName:"p"},"user_age")," feature. The data source is the way we\nconnect the feature to the data that we need to calculate the feature value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from typing_extensions import TypedDict\n\n\n@data_source(\n    training_data=df,\n    keys=['user_id'],  # Optional\n    production_config=StreamingConfig()  # Optional\n)\nclass User(TypedDict):\n    user_id: str\n    first_name: str\n    last_name: str\n    birthdate: datetime\n")),(0,r.kt)("p",null,"Data sources are composed of:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Declaring the data source using the ",(0,r.kt)("a",{parentName:"p",href:"/reference/labsdk/decorators"},(0,r.kt)("inlineCode",{parentName:"a"},"@data_source"))," decorator."),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In line 4, we're configuring the ",(0,r.kt)("inlineCode",{parentName:"p"},"training_data")," to be a pandas dataframe, that contains the data that we'll use\nto train the model. We can use pandas to import the data from any format that pandas supports, such as CSV,\nParquet, JSON, etc")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In line 5, we're configuring the ",(0,r.kt)("inlineCode",{parentName:"p"},"keys")," of the data source. The keys are the fields that we'll use to identify\nthe data source's rows. In this case, we're using the ",(0,r.kt)("inlineCode",{parentName:"p"},"user_id")," field."),(0,r.kt)("p",{parentName:"li"},"Although the keys are optional, it's highly recommended to use them, because it will help the Raptor engine to\noptimize the feature calculations.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In line 6, we're configuring the ",(0,r.kt)("inlineCode",{parentName:"p"},"production_config")," to be a ",(0,r.kt)("inlineCode",{parentName:"p"},"StreamingConfig"),". This configuration is used to\ncreate a configuration stub for the production environment. This is basically hinting our DevOps team how to\nconfigure and connect our data source in production.")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Then, we're defining the data source's schema using the ",(0,r.kt)("inlineCode",{parentName:"p"},"TypedDict")," class. This is a python class that defines the\ndata source's schema. In this case, we're defining the ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," data source to have the following fields:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"user_id")," - a string that contains the user's ID."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"first_name")," - a string that contains the user's first name."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"last_name")," - a string that contains the user's last name."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"birthdate")," - a datetime that contains the user's birthdate.")),(0,r.kt)("p",{parentName:"li"},"Defining the schema is optional, but it's highly recommended to do so, since it can help your IDE to provide you with\nauto-completion and type hints, and can help you make the most of Raptor in the future (i.e. to discover drifts in\nthe data)."))),(0,r.kt)("h1",{id:"replaying-the-feature-calculations"},"Replaying the feature calculations"),(0,r.kt)("p",null,"When we're in development, we need to replay the feature calculations from an historical data we have to get a sense of\nhow the feature will behave in production."),(0,r.kt)("p",null,"To do that, we can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"replay")," function. It's a function that allows us to replay the feature calculations on the\nDataSource's training data."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"showLineNumbers",showLineNumbers:!0},"ages_df = user_age.replay()\n\n# Let's see the result\nages_df.head()\n")),(0,r.kt)("h1",{id:"model-training"},"Model training"),(0,r.kt)("p",null,"Now that we have the feature values, we can train a model."),(0,r.kt)("p",null,"To do that, we'll define a training function, and specify it's input features, label(also a feature)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"showLineNumbers",showLineNumbers:!0},"@model(\n    keys=['customer_id'],\n    input_features=['total_spend+sum'],\n    input_labels=[amount],\n    model_framework='sklearn',\n    model_server='sagemaker-ack',\n)\n@freshness(max_age='1h', max_stale='100h')\ndef amount_prediction(ctx: TrainingContext):\n    from sklearn.linear_model import LinearRegression\n\n    df = ctx.features_and_labels()\n\n    trainer = LinearRegression()\n    trainer.fit(df[ctx.input_features], df[ctx.input_labels])\n\n    return trainer\n")),(0,r.kt)("p",null,"In this example, we're defining a linear regression model that predicts the ",(0,r.kt)("inlineCode",{parentName:"p"},"amount")," feature, using the ",(0,r.kt)("inlineCode",{parentName:"p"},"total_spend"),"\nfeature."),(0,r.kt)("p",null,"You can see that we're also specifying the ",(0,r.kt)("inlineCode",{parentName:"p"},"model_framework")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"model_server")," that we're using. This will instruct\nRaptor how to deploy the model in production."),(0,r.kt)("admonition",{title:"What's the training context?",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The training context is a providing information about the training process. It contains the following fields:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fqn")," - the model's fully qualified name."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"keys")," - a dictionary of the model's keys."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"input_features")," - a list of the model's input features."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"input_labels")," - a list of the model's input labels."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"features_and_labels()")," - a function that returns a pandas dataframe that contains the features and labels."))),(0,r.kt)("p",null,"For more information about the model training, check out the ",(0,r.kt)("a",{parentName:"p",href:"/docs/concepts/models"},"Models")," section."),(0,r.kt)("h1",{id:"exporting-our-model"},"Exporting our model"),(0,r.kt)("p",null,"Once we're done with our model, we can export it, and all of it's dependencies, to the ",(0,r.kt)("inlineCode",{parentName:"p"},"out/")," directory."),(0,r.kt)("p",null,"This will encapsulate our model, and transform our features and data-sources as production artifacts."),(0,r.kt)("p",null,"Also, it will create a ",(0,r.kt)("inlineCode",{parentName:"p"},"Makefile")," so it would be easy for DevOps to integrate it in their regular CI/CD pipeline."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"showLineNumbers",showLineNumbers:!0},"amount_prediction.export()\n")))}d.isMDXComponent=!0}}]);