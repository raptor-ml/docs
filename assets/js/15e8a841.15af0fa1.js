"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8776],{5495:(e,d,r)=>{r.r(d),r.d(d,{assets:()=>l,contentTitle:()=>c,default:()=>x,frontMatter:()=>n,metadata:()=>t,toc:()=>o});var s=r(4964),i=r(1523);const n={id:"install",title:"Installing Raptor Core",sidebar_position:1},c="Prerequisites",t={id:"docs/production/install",title:"Installing Raptor Core",description:"Raptor installation is not required for training purposes.",source:"@site/docs/docs/production/install.md",sourceDirName:"docs/production",slug:"/docs/production/install",permalink:"/docs/production/install",draft:!1,unlisted:!1,editUrl:"https://github.com/raptor-ml/docs/tree/master/docs/docs/production/install.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"install",title:"Installing Raptor Core",sidebar_position:1},sidebar:"docs",previous:{title:"Operating Raptor in Production",permalink:"/docs/production/"},next:{title:"Managing Raptor Assets",permalink:"/docs/production/asset-management"}},l={},o=[{value:"Choosing your Historical Data Provider",id:"choosing-your-historical-data-provider",level:2},{value:"OperatorHub Installation",id:"operatorhub-installation",level:2},{value:"Configuration Parameters",id:"configuration-parameters",level:2},{value:"Core Configuration",id:"core-configuration",level:3},{value:"Historian Configuration",id:"historian-configuration",level:3}];function h(e){const d={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(d.admonition,{type:"tip",children:[(0,s.jsxs)(d.p,{children:[(0,s.jsx)(d.strong,{children:"Raptor installation is not required for training purposes"}),"."]}),(0,s.jsxs)(d.p,{children:["You need to install Raptor Core ",(0,s.jsx)(d.em,{children:"only when deploying to production"})," (or staging)."]})]}),"\n",(0,s.jsx)(d.h1,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(d.ol,{children:["\n",(0,s.jsxs)(d.li,{children:["\n",(0,s.jsx)(d.p,{children:"Kubernetes cluster"}),"\n",(0,s.jsxs)(d.p,{children:["(You can use ",(0,s.jsx)(d.a,{href:"https://kind.sigs.k8s.io/",children:"Kind"})," to install Raptor locally)"]}),"\n"]}),"\n",(0,s.jsxs)(d.li,{children:["\n",(0,s.jsx)(d.p,{children:"Redis server (> 2.8.9)"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(d.admonition,{type:"tip",children:(0,s.jsxs)(d.p,{children:["You can also use a managed Redis solution such as ",(0,s.jsx)(d.a,{href:"https://aws.amazon.com/elasticache/",children:"AWS ElasticCache"}),"\nor ",(0,s.jsx)(d.a,{href:"https://cloud.google.com/memorystore",children:"GCP Memorystore"}),", or via\nthe ",(0,s.jsx)(d.a,{href:"https://operatorhub.io/operator/redis-operator",children:"K8s Redis Operator"})]})}),"\n",(0,s.jsx)(d.h2,{id:"choosing-your-historical-data-provider",children:"Choosing your Historical Data Provider"}),"\n",(0,s.jsxs)(d.p,{children:["Historical Data Provider is the driver that Raptor uses to save historical snapshots of your production data.\nThis is very useful for training purposes, but ",(0,s.jsx)(d.em,{children:"technically"})," is not required for production."]}),"\n",(0,s.jsx)(d.p,{children:"At the moment, Raptor supports the following historical data providers:"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Provider"}),(0,s.jsx)(d.th,{children:"Data retrieval support"}),(0,s.jsx)(d.th,{children:"Description"}),(0,s.jsx)(d.th,{children:"Required configuration"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.em,{children:(0,s.jsx)(d.code,{children:"snowflake"})})}),(0,s.jsx)(d.td,{children:"Yes"}),(0,s.jsx)(d.td,{children:"Historical data is stored in a Snowflake database"}),(0,s.jsxs)(d.td,{children:["A valid snowflake URI shold be provided via the ",(0,s.jsx)(d.code,{children:"snowflake-uri"})," configuration",(0,s.jsx)("br",{})," Example: username",":password","@account-id/RAPTOR_SYSTEM/HISTORICAL?warehouse=COMPUTE_WH"]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"s3-parquet"})}),(0,s.jsx)(d.td,{children:"No"}),(0,s.jsx)(d.td,{children:"Historical data is partitioned and stored in S3 in Parquet format"}),(0,s.jsxs)(d.td,{children:["The following configurations should be set:",(0,s.jsx)("br",{}),(0,s.jsx)(d.code,{children:"aws-access-key"}),", ",(0,s.jsx)(d.code,{children:"aws-region"}),", ",(0,s.jsx)(d.code,{children:"aws-secret-key"}),",",(0,s.jsx)(d.code,{children:"s3-basedir"}),", ",(0,s.jsx)(d.code,{children:"s3-bucket"})]})]})]})]}),"\n",(0,s.jsx)(d.admonition,{type:"warning",children:(0,s.jsx)(d.p,{children:"It's highly recommended to use Kubernetes Secrets to store your credentials, and then to configure Raptor's Deployment\nwith Environment Variables."})}),"\n",(0,s.jsx)(d.h1,{id:"installing-raptor",children:"Installing Raptor"}),"\n",(0,s.jsxs)(d.p,{children:["There are a few ways to install Raptor. The easiest way is to use\nthe ",(0,s.jsx)(d.a,{href:"https://operatorhub.io/operator/raptor",children:"OperatorHub installer"}),"."]}),"\n",(0,s.jsx)(d.h2,{id:"operatorhub-installation",children:"OperatorHub Installation"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-yaml",children:'apiVersion: v1\nkind: Secret\nmetadata:\n  name: raptor-providers-creds\n  namespace: raptor-system\ndata:\n  REDIS: "my-redis.default.svc.cluster.local"\n  AWS_ACCESS_KEY: ""\n  AWS_SECRET_KEY: ""\n  SNOWFLAKE_URI: <user>:<pass>@<account-id>/<db>/<schema>?warehouse=<warehouse-name>\n---\napiVersion: operators.coreos.com/v1alpha1\nkind: Subscription\nmetadata:\n  name: raptor\nspec:\n  package: raptor\n  channel: alpha\n  config:\n    env:\n      - name: HISTORICAL_WRITER_PROVIDER\n        value: "snowflake"\n    envFrom:\n      - secretRef:\n          name: raptor-providers-credentials\n'})}),"\n",(0,s.jsx)(d.h2,{id:"configuration-parameters",children:"Configuration Parameters"}),"\n",(0,s.jsx)(d.p,{children:"The configuration parameters below can be used to customize Raptor deployments:"}),"\n",(0,s.jsx)(d.h3,{id:"core-configuration",children:"Core Configuration"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"flag"}),(0,s.jsx)(d.th,{children:"environment variable"}),(0,s.jsx)(d.th,{children:"type"}),(0,s.jsx)(d.th,{children:"description"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"--accessor-grpc-address"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"ACCESSOR_GRPC_ADDRESS"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"string"})}),(0,s.jsx)(d.td,{children:'The address the grpc accessor binds to. (default ":60000")'})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"--accessor-http-address"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"ACCESSOR_HTTP_ADDRESS"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"string"})}),(0,s.jsx)(d.td,{children:'The address the http accessor binds to. (default ":60001")'})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"--accessor-http-prefix"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"ACCESSOR_HTTP_PREFIX"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"string"})}),(0,s.jsx)(d.td,{children:'The the http accessor path prefix. (default "/api")'})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"--accessor-service"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"ACCESSOR_SERVICE"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"string"})}),(0,s.jsx)(d.td,{children:"The the accessor service URL (that points the this application)."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"--aws-access-key"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"AWS_ACCESS_KEY"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"string"})}),(0,s.jsx)(d.td,{children:"AWS Access Key - for historical data"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"--aws-region"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"AWS_REGION"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"string"})}),(0,s.jsx)(d.td,{children:"AWS Region - for historical data"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"--aws-secret-key"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"AWS_SECRET_KEY"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"string"})}),(0,s.jsx)(d.td,{children:"AWS Secret Key - for historical data"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"--disable-cert-management"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"DISABLE_CERT_MANAGEMENT"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"bool"})}),(0,s.jsx)(d.td,{children:"Setting this flag will disable the automatically certificate binding to the K8s API webhooks."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"--health-probe-bind-address"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"HEALTH_PROBE_BIND_ADDRESS"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"string"})}),(0,s.jsx)(d.td,{children:'The address the probe endpoint binds to. (default ":8081")'})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"--kubeconfig"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"KUBECONFIG"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"string"})}),(0,s.jsx)(d.td,{children:"Paths to a kubeconfig. Only required if out-of-cluster."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"--leader-elect"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"LEADER_ELECT"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"bool"})}),(0,s.jsx)(d.td,{children:"Enable leader election for controller manager.Enabling this will ensure there is only one active controller manager."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"--metrics-bind-address"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"METRICS_BIND_ADDRESS"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"string"})}),(0,s.jsx)(d.td,{children:'The address the metric endpoint binds to. (default ":8080")'})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"--metrics-secure-serving"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"METRICS_SECURE_SERVING"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"bool"})}),(0,s.jsx)(d.td,{children:"Enable serving the metrics over HTTPS. (default true)"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"--no-webhooks"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"NO_WEBHOOKS"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"bool"})}),(0,s.jsx)(d.td,{children:"Setting this flag will disable the K8s API webhook."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"--notifier-provider"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"NOTIFIER_PROVIDER"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"string"})}),(0,s.jsx)(d.td,{children:'The notifier provider. (default "redis")'})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"--production"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"PRODUCTION"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"bool"})}),(0,s.jsx)(d.td,{children:"Set as production (default true)"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.code,{children:"--redis"})," (alias: ",(0,s.jsx)(d.code,{children:"--r"}),")"]}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"REDIS"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"stringArray"})}),(0,s.jsx)(d.td,{children:"Redis servers"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"--redis-db"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"REDIS_DB"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"int"})}),(0,s.jsx)(d.td,{children:"Redis DB"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"--redis-master"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"REDIS_MASTER"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"string"})}),(0,s.jsx)(d.td,{children:"Redis Sentinel master name"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"--redis-pass"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"REDIS_PASS"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"string"})}),(0,s.jsx)(d.td,{children:"Redis password"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"--redis-sentinel-pass"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"REDIS_SENTINEL_PASS"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"string"})}),(0,s.jsx)(d.td,{children:"Redis Sentinel password"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"--redis-sentinel-user"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"REDIS_SENTINEL_USER"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"string"})}),(0,s.jsx)(d.td,{children:"Redis Sentinel username"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"--redis-tls"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"REDIS_TLS"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"bool"})}),(0,s.jsx)(d.td,{children:"Enable TLS for Redis"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"--redis-user"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"REDIS_USER"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"string"})}),(0,s.jsx)(d.td,{children:"Redis username"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"--s3-basedir"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"S3_BASEDIR"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"string"})}),(0,s.jsx)(d.td,{children:'S3 Base directory for storing features - for historical data (default "raptor/features/")'})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"--s3-bucket"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"S3_BUCKET"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"string"})}),(0,s.jsx)(d.td,{children:"S3 Bucket - for historical data"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"--snowflake-uri"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"SNOWFLAKE_URI"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"string"})}),(0,s.jsx)(d.td,{children:"Snowflake DSN URI"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"--state-provider"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"STATE_PROVIDER"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"string"})}),(0,s.jsx)(d.td,{children:'The state provider. (default "redis")'})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"--usage-reporting"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"USAGE_REPORTING"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"bool"})}),(0,s.jsx)(d.td,{children:"Allow us to anonymously report usage statistics to improve Raptor \ud83e\ude84 (default true)"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"--usage-reporting-uid"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"USAGE_REPORTING_UID"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"string"})}),(0,s.jsx)(d.td,{children:"Usage reporting Unique Identifier. You can use this to set a unique identifier for your cluster."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"--zap-devel"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"ZAP_DEVEL"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"bool"})}),(0,s.jsx)(d.td,{children:"Development Mode defaults(encoder=consoleEncoder,logLevel=Debug,stackTraceLevel=Warn). Production Mode defaults(encoder=jsonEncoder,logLevel=Info,stackTraceLevel=Error)"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"--zap-encoder"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"ZAP_ENCODER"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"encoder"})}),(0,s.jsx)(d.td,{children:"Zap log encoding (one of 'json' or 'console')"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"--zap-log-level"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"ZAP_LOG_LEVEL"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"level"})}),(0,s.jsxs)(d.td,{children:["Zap Level to configure the verbosity of logging. Can be one of ",(0,s.jsx)("br",{}),"'debug', 'info', 'error', or any integer value > 0 which corresponds to custom debug levels of increasing verbosity"]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"--zap-stacktrace-level"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"ZAP_STACKTRACE_LEVEL"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"level"})}),(0,s.jsx)(d.td,{children:"Zap Level at and above which stacktraces are captured (one of 'info', 'error', 'panic')."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"--zap-time-encoding"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"ZAP_TIME_ENCODING"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"timeEncoding"})}),(0,s.jsx)(d.td,{children:"Zap time encoding (one of 'epoch', 'millis', 'nano', 'iso8601', 'rfc3339' or 'rfc3339nano'). Defaults to 'epoch'."})]})]})]}),"\n",(0,s.jsx)(d.h3,{id:"historian-configuration",children:"Historian Configuration"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"flag"}),(0,s.jsx)(d.th,{children:"environment variable"}),(0,s.jsx)(d.th,{children:"type"}),(0,s.jsx)(d.th,{children:"description"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"--aws-access-key"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"AWS_ACCESS_KEY"})}),(0,s.jsx)(d.td,{children:"string"}),(0,s.jsx)(d.td,{children:"AWS Access Key - for historical data"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"--aws-region"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"AWS_REGION"})}),(0,s.jsx)(d.td,{children:"string"}),(0,s.jsx)(d.td,{children:"AWS Region - for historical data"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"--aws-secret-key"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"AWS_SECRET_KEY"})}),(0,s.jsx)(d.td,{children:"string"}),(0,s.jsx)(d.td,{children:"AWS Secret Key - for historical data"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"--health-probe-bind-address"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"HEALTH_PROBE_BIND_ADDRESS"})}),(0,s.jsx)(d.td,{children:"string"}),(0,s.jsx)(d.td,{children:'The address the probe endpoint binds to. (default ":8081")'})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"--historical-writer-provider"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"HISTORICAL_WRITER_PROVIDER"})}),(0,s.jsx)(d.td,{children:"string"}),(0,s.jsx)(d.td,{children:'The historical writer provider. (default "s3-parquet")'})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"--kubeconfig"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"KUBECONFIG"})}),(0,s.jsx)(d.td,{children:"string"}),(0,s.jsx)(d.td,{children:"Paths to a kubeconfig. Only required if out-of-cluster."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"--leader-elect"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"LEADER_ELECT"})}),(0,s.jsx)(d.td,{children:"bool"}),(0,s.jsx)(d.td,{children:"Enable leader election for controller manager.Enabling this will ensure there is only one active controller manager."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"--metrics-bind-address"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"METRICS_BIND_ADDRESS"})}),(0,s.jsx)(d.td,{children:"string"}),(0,s.jsx)(d.td,{children:'The address the metric endpoint binds to. (default ":8080")'})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"--metrics-secure-serving"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"METRICS_SECURE_SERVING"})}),(0,s.jsx)(d.td,{children:"bool"}),(0,s.jsx)(d.td,{children:"Enable serving the metrics over HTTPS. (default true)"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"--notifier-provider"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"NOTIFIER_PROVIDER"})}),(0,s.jsx)(d.td,{children:"string"}),(0,s.jsx)(d.td,{children:'The notifier provider. (default "redis")'})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"--production"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"PRODUCTION"})}),(0,s.jsx)(d.td,{children:"bool"}),(0,s.jsx)(d.td,{children:"Set as production (default true)"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.code,{children:"--redis"})," (alias ",(0,s.jsx)(d.code,{children:"-r"}),")"]}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"REDIS"})}),(0,s.jsx)(d.td,{children:"stringArray"}),(0,s.jsx)(d.td,{children:"Redis servers"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"--redis-db"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"REDIS_DB"})}),(0,s.jsx)(d.td,{children:"int"}),(0,s.jsx)(d.td,{children:"Redis DB"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"--redis-master"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"REDIS_MASTER"})}),(0,s.jsx)(d.td,{children:"string"}),(0,s.jsx)(d.td,{children:"Redis Sentinel master name"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"--redis-pass"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"REDIS_PASS"})}),(0,s.jsx)(d.td,{children:"string"}),(0,s.jsx)(d.td,{children:"Redis password"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"--redis-sentinel-pass"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"REDIS_SENTINEL_PASS"})}),(0,s.jsx)(d.td,{children:"string"}),(0,s.jsx)(d.td,{children:"Redis Sentinel password"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"--redis-sentinel-user"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"REDIS_SENTINEL_USER"})}),(0,s.jsx)(d.td,{children:"string"}),(0,s.jsx)(d.td,{children:"Redis Sentinel username"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"--redis-tls"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"REDIS_TLS"})}),(0,s.jsx)(d.td,{children:"bool"}),(0,s.jsx)(d.td,{children:"Enable TLS for Redis"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"--redis-user"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"REDIS_USER"})}),(0,s.jsx)(d.td,{children:"string"}),(0,s.jsx)(d.td,{children:"Redis username"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"--s3-basedir"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"S3_BASEDIR"})}),(0,s.jsx)(d.td,{children:"string"}),(0,s.jsx)(d.td,{children:'S3 Base directory for storing features - for historical data (default "raptor/features/")'})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"--s3-bucket"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"S3_BUCKET"})}),(0,s.jsx)(d.td,{children:"string"}),(0,s.jsx)(d.td,{children:"S3 Bucket - for historical data"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"--snowflake-uri"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"SNOWFLAKE_URI"})}),(0,s.jsx)(d.td,{children:"string"}),(0,s.jsx)(d.td,{children:"Snowflake DSN URI"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"--state-provider"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"STATE_PROVIDER"})}),(0,s.jsx)(d.td,{children:"string"}),(0,s.jsx)(d.td,{children:'The state provider. (default "redis")'})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"--zap-devel"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"ZAP_DEVEL"})}),(0,s.jsx)(d.td,{children:"bool"}),(0,s.jsx)(d.td,{children:"Development Mode defaults(encoder=consoleEncoder,logLevel=Debug,stackTraceLevel=Warn). Production Mode defaults(encoder=jsonEncoder,logLevel=Info,stackTraceLevel=Error)"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"--zap-encoder"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"ZAP_ENCODER"})}),(0,s.jsx)(d.td,{children:"encoder"}),(0,s.jsx)(d.td,{children:"Zap log encoding (one of 'json' or 'console')"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"--zap-log-level"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"ZAP_LOG_LEVEL"})}),(0,s.jsx)(d.td,{children:"level"}),(0,s.jsx)(d.td,{children:"Zap Level to configure the verbosity of logging. Can be one of 'debug', 'info', 'error', or any integer value > 0 which corresponds to custom debug levels of increasing verbosity"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"--zap-stacktrace-level"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"ZAP_STACKTRACE_LEVEL"})}),(0,s.jsx)(d.td,{children:"level"}),(0,s.jsx)(d.td,{children:"Zap Level at and above which stacktraces are captured (one of 'info', 'error', 'panic')."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"--zap-time-encoding"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"ZAP_TIME_ENCODING"})}),(0,s.jsx)(d.td,{children:"timeEncoding"}),(0,s.jsx)(d.td,{children:"Zap time encoding (one of 'epoch', 'millis', 'nano', 'iso8601', 'rfc3339' or 'rfc3339nano'). Defaults to 'epoch'."})]})]})]})]})}function x(e={}){const{wrapper:d}={...(0,i.R)(),...e.components};return d?(0,s.jsx)(d,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},1523:(e,d,r)=>{r.d(d,{R:()=>c,x:()=>t});var s=r(6504);const i={},n=s.createContext(i);function c(e){const d=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function t(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(n.Provider,{value:d},e.children)}}}]);