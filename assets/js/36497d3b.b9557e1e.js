"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7091],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,f=c["".concat(d,".").concat(m)]||c[m]||u[m]||i;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5970:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={},l="json",o={unversionedId:"reference/pyexp/natun-built-ins/json",id:"reference/pyexp/natun-built-ins/json",title:"json",description:"Module json is a module of JSON-related functions.",source:"@site/docs/reference/pyexp/natun-built-ins/json.md",sourceDirName:"reference/pyexp/natun-built-ins",slug:"/reference/pyexp/natun-built-ins/json",permalink:"/docs/reference/pyexp/natun-built-ins/json",draft:!1,editUrl:"https://github.com/dataploy-ai/docs/tree/master/docs/reference/pyexp/natun-built-ins/json.md",tags:[],version:"current",frontMatter:{},sidebar:"reference",previous:{title:"html",permalink:"/docs/reference/pyexp/natun-built-ins/html"},next:{title:"math",permalink:"/docs/reference/pyexp/natun-built-ins/math"}},d={},p=[{value:"Members",id:"members",level:3},{value:"decode",id:"decode",level:3},{value:"Parameters",id:"parameters",level:4},{value:"encode",id:"encode",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"indent",id:"indent",level:3},{value:"Parameters",id:"parameters-2",level:4}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"json"},"json"),(0,a.kt)("p",null,"Module ",(0,a.kt)("inlineCode",{parentName:"p"},"json")," is a module of JSON-related functions."),(0,a.kt)("h3",{id:"members"},"Members"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/reference/pyexp/natun-built-ins/json#decode",title:"mention"},"#decode")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/reference/pyexp/natun-built-ins/json#encode",title:"mention"},"#encode")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/reference/pyexp/natun-built-ins/json#indent",title:"mention"},"#indent"))),(0,a.kt)("h3",{id:"decode"},"decode"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"unknown json.decode(x)\n")),(0,a.kt)("p",null,"The decode function accepts one positional parameter, a JSON string. It returns the Starlark value that the string denotes."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"'null', 'true', and 'false' are parsed as None, True, and False."),(0,a.kt)("li",{parentName:"ul"},"Numbers are parsed as int, or as a float if they contain a decimal point or an exponent. Although JSON has no syntax for non-finite values, very large values may be decoded as infinity."),(0,a.kt)("li",{parentName:"ul"},"a JSON object is parsed as a new unfrozen Starlark dict. Keys must be unique strings."),(0,a.kt)("li",{parentName:"ul"},"a JSON array is parsed as new unfrozen Starlark list.")),(0,a.kt)("p",null,"Decoding fails if x is not a valid JSON encoding."),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"x")),(0,a.kt)("td",{parentName:"tr",align:null},"required")))),(0,a.kt)("h3",{id:"encode"},"encode"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"string json.encode(x)\n")),(0,a.kt)("p",null,"The encode function accepts one required positional argument, which it converts to JSON by cases:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"None, True, and False are converted to 'null', 'true', and 'false', respectively."),(0,a.kt)("li",{parentName:"ul"},"An int, no matter how large, is encoded as a decimal integer. Some decoders may not be able to decode very large integers."),(0,a.kt)("li",{parentName:"ul"},"A float is encoded using a decimal point or an exponent or both, even if its numeric value is an integer. It is an error to encode a non-finite floating-point value."),(0,a.kt)("li",{parentName:"ul"},"A string value is encoded as a JSON string literal that denotes the value. Each unpaired surrogate is replaced by U+FFFD."),(0,a.kt)("li",{parentName:"ul"},"A dict is encoded as a JSON object, in key order. It is an error if any key is not a string."),(0,a.kt)("li",{parentName:"ul"},"A list or tuple is encoded as a JSON array."),(0,a.kt)("li",{parentName:"ul"},"A struct-like value is encoded as a JSON object, in field name order.")),(0,a.kt)("p",null,"An application-defined type may define its own JSON encoding. Encoding any other value yields an error."),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"x")),(0,a.kt)("td",{parentName:"tr",align:null},"required")))),(0,a.kt)("h3",{id:"indent"},"indent"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"string json.indent(s, *, prefix='', indent='\\t')\n")),(0,a.kt)("p",null,"The indent function returns the indented form of a valid JSON-encoded string. Each array element or object field appears on a new line, beginning with the prefix string followed by one or more copies of the indent string, according to its nesting depth. The function accepts one required positional parameter, the JSON string, and two optional keyword-only string parameters, prefix, and indent, that specify a prefix of each new line, and the unit of indentation. If the input is not valid, the function may fail or return invalid output."),(0,a.kt)("h4",{id:"parameters-2"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"s")),(0,a.kt)("td",{parentName:"tr",align:null},"required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"prefix")),(0,a.kt)("td",{parentName:"tr",align:null},"default = ''")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"indent")),(0,a.kt)("td",{parentName:"tr",align:null},"default = '\\t'")))))}u.isMDXComponent=!0}}]);