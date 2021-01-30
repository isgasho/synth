(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{80:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return b}));var a=t(3),r=t(7),i=(t(0),t(91)),c={id:"bank",title:"Bank"},o={unversionedId:"examples/bank",id:"examples/bank",isDocsHomePage:!1,title:"Bank",description:"Financial Services Example",source:"@site/docs/examples/bank.md",slug:"/examples/bank",permalink:"/synth/examples/bank",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/examples/bank.md",version:"current",sidebar:"docsSidebar",previous:{title:"How It Works",permalink:"/synth/how-it-works"},next:{title:"null",permalink:"/synth/content/null"}},s=[{value:"Scenario",id:"scenario",children:[]},{value:"Example Data",id:"example-data",children:[]},{value:"Feeding Data into Synth",id:"feeding-data-into-synth",children:[]},{value:"Tweaking the Schema",id:"tweaking-the-schema",children:[{value:"Tweaking Individual Fields",id:"tweaking-individual-fields",children:[]}]}],l={toc:s};function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"financial-services-example"},"Financial Services Example"),Object(i.b)("h2",{id:"scenario"},"Scenario"),Object(i.b)("p",null,"In our fictitious example, a software developer, Cynthia works at a financial services company and wants to create a realistic replica of their production data for application testing. Having looked at the market and seeing that Synth is clearly the superior tool for doing this, the Cynthia downloads Synth and runs it locally on her machine."),Object(i.b)("h2",{id:"example-data"},"Example Data"),Object(i.b)("p",null,"Cynthia wants to clone a schema named ",Object(i.b)("inlineCode",{parentName:"p"},"bank_db"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"bank_db")," has two tables."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"The ",Object(i.b)("inlineCode",{parentName:"li"},"users")," table which has all the information pertaining to their customers. ")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "id" : 1,\n    "created_at_date": "2009-03-19",\n    "created_at_time": "01:00:02",\n    "credit_card": "346215176014733",\n    "currency": "GIP",\n    "email": "tracy31@gmail.com",\n    "is_active": false,\n    "last_login_at": "2020-06-22T05:46:41+0000",\n    "num_logins": 19,\n    "password_hash": "eebed079e19dcf5b936e8ca5a648bee38e30bec02129790eabdd7084919d7972",\n    "username": "tracy31@gmail.com"\n}\n')),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"The ",Object(i.b)("inlineCode",{parentName:"li"},"transactions")," table which has transactions referring to the customers in the ",Object(i.b)("inlineCode",{parentName:"li"},"users")," table:")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n   "id": 1,\n   "amount": 5001.70,\n   "currency": "GIP",\n   "timestamp": "2020-05-13T20:48:01+0000",\n   "user_id": 1\n}\n')),Object(i.b)("h2",{id:"feeding-data-into-synth"},"Feeding Data into Synth"),Object(i.b)("p",null,"We first create a new workspace to import our dataset into Synth:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ mkdir synth_workspace && cd synth_workspace && synth init\n")),Object(i.b)("p",null,"Synth supports importing from JSON files - to create a namespace we point Synth to our JSON file and run the ",Object(i.b)("inlineCode",{parentName:"p"},"import")," command. "),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ synth import bank_db/ --from /path/to/the/file.json\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "users": [\n    { \n      "id" : 1,\n      "created_at_date": "2009-03-19",\n      "created_at_time": "01:00:02",\n      "credit_card": "346215176014733",\n      "currency": "GIP",\n      "email": "tracy31@gmail.com",\n      "is_active": false,\n      "last_login_at": "2020-06-22T05:46:41+0000",\n      "num_logins": 19,\n      "password_hash": "eebed079e19dcf5b936e8ca5a648bee38e30bec02129790eabdd7084919d7972",\n      "username": "tracy31@gmail.com"\n    },\n    {\n      "id" : 2,\n      "created_at_date": "1989-08-02",\n      "created_at_time": "14:01:03",\n      "credit_card": "347805284578857",\n      "currency": "RON",\n      "email": "lunamark@green.com",\n      "is_active": false,\n      "last_login_at": "2020-06-09T12:25:34+0000",\n      "num_logins": 96,\n      "password_hash": "5fd241333135a2852c124a28401460d6c7bbd1851a256becddd95f9141e8a74b",\n      "username": "lunamark@green.com"\n    },\n    {\n      "id" : 3,\n      "created_at_date": "1993-04-12",\n      "created_at_time": "18:28:28",\n      "credit_card": "347652531949402",\n      "currency": "EUR",\n      "email": "nicholsonjoseph@whitehead.org",\n      "is_active": false,\n      "last_login_at": "2020-07-24T18:30:45+0000",\n      "num_logins": 56,\n      "password_hash": "2a3e0851d34b71088fb77c20b840689169b89acef2e74ae687fc1b99387e100b",\n      "username": "nick_j"\n    },\n    {\n      "id" : 4,\n      "created_at_date": "2001-09-11",\n      "created_at_time": "06:25:41",\n      "credit_card": "341034072996090",\n      "currency": "KHR",\n      "email": "fullerangela@williams.biz",\n      "is_active": false,\n      "last_login_at": "2020-03-02T08:31:01+0000",\n      "num_logins": 39,\n      "password_hash": "10ab7dcd6b7ac468bd442febf904f4025f38017f847774f91ca2bdbdfe029ce1",\n      "username": "fullerangela"\n    }\n  ],\n  "transactions": [\n    {\n      "id" : 1,\n      "amount": 5001.7,\n      "currency": "GIP",\n      "timestamp": "2020-05-13T20:48:01+0000",\n      "user_id": 1\n    },\n    {\n      "id" : 2,\n      "amount": 274.4,\n      "currency": "GIP",\n      "timestamp": "2020-04-07T20:19:23+0000",\n      "user_id": 1\n    },\n    {\n      "id" : 3,\n      "amount": 6199.9,\n      "currency": "KHR",\n      "timestamp": "2020-02-03T11:24:36+0000",\n      "user_id": 2\n    },\n    {\n      "id" : 4,\n      "amount": 3747.6,\n      "currency": "KHR",\n      "timestamp": "2020-04-02T02:37:22+0000",\n      "user_id": 2\n    },\n    {\n      "id" : 5,\n      "amount": 4358.4,\n      "currency": "KHR",\n      "timestamp": "2020-03-20T04:12:11+0000",\n      "user_id": 2\n    },\n    {\n      "id" : 6,\n      "amount": 6597.5,\n      "currency": "EUR",\n      "timestamp": "2020-09-16T07:26:02+0000",\n      "user_id": 3\n    }\n  ]\n}\n')),Object(i.b)("p",null,"At this stage, we can run the ",Object(i.b)("inlineCode",{parentName:"p"},"tree")," command to see how the ",Object(i.b)("inlineCode",{parentName:"p"},"synth import")," sub-command updated our workspace."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ tree -a\n.\n\u251c\u2500\u2500 my_bank\n\u2502\xa0\xa0 \u251c\u2500\u2500 transactions.json\n\u2502\xa0\xa0 \u2514\u2500\u2500 users.json\n\u2514\u2500\u2500 .synth\n    \u2514\u2500\u2500 config.toml\n")),Object(i.b)("p",null,"The directory ",Object(i.b)("inlineCode",{parentName:"p"},"my_bank")," (remember from ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/synth/core-concepts"}),"Core Concepts")," a subdirectory in a workspace represents a namespace) was created automatically as well as the two collections - ",Object(i.b)("inlineCode",{parentName:"p"},"transactions")," and ",Object(i.b)("inlineCode",{parentName:"p"},"users"),"."),Object(i.b)("p",null,"We can now generate data from our namespace using the ",Object(i.b)("inlineCode",{parentName:"p"},"synth generate")," sub-command. (We are piping this into ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://stedolan.github.io/jq/download/"}),Object(i.b)("inlineCode",{parentName:"a"},"jq"))," for the auto-formatting but this is optional.)"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'$ synth generate my_bank/ | jq\n{\n  "transactions": [\n    {\n      "amount": 5336.4,\n      "currency": "k1BFV",\n      "id": 1,\n      "timestamp": "kfAuUrNEb8dgGT5",\n      "user_id": 2\n    }\n  ],\n  "users": [\n    {\n      "created_at_date": "Mg",\n      "created_at_time": "Me2kBYEDb",\n      "credit_card": "LnafugyfWMLf8Gns",\n      "currency": "8e9u8h5KYg",\n      "email": "yLXGebLNS5ZmZWifCqv20",\n      "id": 3,\n      "is_active": false,\n      "last_login_at": "gH7zB0nkU0ScpmOhWr3vm",\n      "num_logins": 78,\n      "password_hash": "OJUsm0b4d",\n      "username": "3ouuDKRsR7a"\n    },\n    ...\n  ]\n}\n')),Object(i.b)("p",null,"Notice, that the data generated has the right schema, but looks kind of useless. For example the ",Object(i.b)("inlineCode",{parentName:"p"},"timestamp")," field is not even a timestamp, it's just a random string."),Object(i.b)("p",null,"The semantic meaning of the data has not been perfectly captured by the Synth ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/synth/inference"}),"inference engine"),". As ",Object(i.b)("inlineCode",{parentName:"p"},"synth")," evolves, inference will get better - but for now, we need to tweak the schema."),Object(i.b)("h2",{id:"tweaking-the-schema"},"Tweaking the Schema"),Object(i.b)("p",null,"To modify the schema, open the workspace in your favourite editor. Let's take a look at ",Object(i.b)("inlineCode",{parentName:"p"},"my_bank/transactions.json")," first."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "type": "array",\n  "length": {\n    "type": "number",\n    "subtype": "u64",\n    "range": {\n      "low": 1,\n      "high": 6,\n      "step": 1\n    }\n  },\n  "content": {\n    "type": "object",\n    "amount": {\n      "optional": false,\n      "type": "number",\n      "subtype": "f64",\n      "range": {\n        "low": 274.4,\n        "high": 6597.5,\n        "step": 1.0\n      }\n    },\n    "id": {\n      "optional": false,\n      "type": "number",\n      "subtype": "u64",\n      "range": {\n        "low": 1,\n        "high": 6,\n        "step": 1\n      }\n    },\n    "timestamp": {\n      "optional": false,\n      "type": "string",\n      "pattern": "[a-zA-Z0-9]*"\n    },\n    "user_id": {\n      "optional": false,\n      "type": "number",\n      "subtype": "u64",\n      "range": {\n        "low": 1,\n        "high": 3,\n        "step": 1\n      }\n    },\n    "currency": {\n      "optional": false,\n      "type": "string",\n      "pattern": "[a-zA-Z0-9]*"\n    }\n  }\n}\n')),Object(i.b)("p",null,"There is quite a bit going on here, so let's break it down. This file represents a schema for a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/synth/core-concepts"}),Object(i.b)("inlineCode",{parentName:"a"},"collection")),". Collections are ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/synth/content/array"}),"Array::Array"),"s under the hood and so they have 2 fields."),Object(i.b)("p",null,"1) The ",Object(i.b)("inlineCode",{parentName:"p"},"content")," of an Array. This can be any valid JSON, but since ",Object(i.b)("inlineCode",{parentName:"p"},"my_bank")," originates from a SQL database with column names and so on, it is a JSON object."),Object(i.b)("p",null,"2) The ",Object(i.b)("inlineCode",{parentName:"p"},"length")," of an Array. The length of an Array is actually also a Content node. This gives you flexibility - for example you can make the length of an array be a ",Object(i.b)("inlineCode",{parentName:"p"},"Number::Range")),Object(i.b)("p",null,"For more information on how to compose schemas, see the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/synth/schema"}),"Schema")," page."),Object(i.b)("h3",{id:"tweaking-individual-fields"},"Tweaking Individual Fields"),Object(i.b)("p",null,"Reading through the schema, we can see that Synth inferred ",Object(i.b)("inlineCode",{parentName:"p"},"id")," as being a ",Object(i.b)("inlineCode",{parentName:"p"},"Number::Range"),". "),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'"id" : {\n    "type": "number",\n    "subtype": "u64",\n    "id": {\n      "start" : 0\n    } \n}\n')),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"amount")," field is almost right. Synth inferred the right ",Object(i.b)("inlineCode",{parentName:"p"},"low")," and ",Object(i.b)("inlineCode",{parentName:"p"},"high")," bounds, but, the step should be ",Object(i.b)("inlineCode",{parentName:"p"},"0.1")," as we are dealing with currencies. So let's replace the ",Object(i.b)("inlineCode",{parentName:"p"},"amount")," field:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'"amount": {\n  "optional": false,\n  "type": "number",\n  "subtype": "f64",\n  "range": {\n    "low": 274.4,\n    "high": 6597.5,\n    "step": 0.1\n  }\n}\n')),Object(i.b)("p",null,"Next, the ",Object(i.b)("inlineCode",{parentName:"p"},"timestamp")," field is not a string following a random pattern. Consulting the documentation it should be a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/synth/content/string"}),"String::DateTime"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'"timestamp" : {\n    "type": "string",\n    "date_time": {\n        "format": "%Y-%m-%dT%H:%M:%S%z",\n        "begin": "2000-01-01T00:00:00+0000",\n        "end": "2020-01-01T00:00:00+0000"\n    }\n},\n')),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"user_id")," field should point to a valid entry in the ",Object(i.b)("inlineCode",{parentName:"p"},"users")," collection, so let's use the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/synth/content/same-as"}),"SameAs::SameAs")," content type to express this foreign key relationship."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'"user_id": {\n    "type": "same_as",\n    "ref": "users.content.id"\n}\n')),Object(i.b)("p",null,"Finally, the ",Object(i.b)("inlineCode",{parentName:"p"},"currency")," field should reflect the real currencies that the bank supports. We could use the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/synth/content/string"}),"String::Faker")," support ",Object(i.b)("inlineCode",{parentName:"p"},"currency_code")," generator to do this, but the bank only supports ",Object(i.b)("inlineCode",{parentName:"p"},"USD"),", ",Object(i.b)("inlineCode",{parentName:"p"},"GBP")," and ",Object(i.b)("inlineCode",{parentName:"p"},"EUR"),". So she uses a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/synth/content/string"}),"String::Categorical"),"  instead. Roughly 80% of transactions are in ",Object(i.b)("inlineCode",{parentName:"p"},"USD")," so let's assign a higher probability to that variant."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'"currency" : {\n    "type" : "string",  \n    "categorical" : {\n        "USD" : 8,\n        "GBP" : 1,\n        "EUR" : 1\n    }\n}\n')),Object(i.b)("p",null,"Now let's generate data from the ",Object(i.b)("inlineCode",{parentName:"p"},"transactions")," collection again:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'$ synth generate my_bank --collection transactions --size 10 | jq\n[\n  {\n    "amount": 1458.2,\n    "currency": "GBP",\n    "id": 0,\n    "timestamp": "2014-12-15T22:49:23+0000",\n    "user_id": 3\n  },\n  {\n    "amount": 6043.2,\n    "currency": "USD",\n    "id": 1,\n    "timestamp": "2002-10-10T23:41:32+0000",\n    "user_id": 1\n  },\n  {\n    "amount": 2515.7000000000003,\n    "currency": "GBP",\n    "id": 2,\n    "timestamp": "2000-07-17T05:50:27+0000",\n    "user_id": 3\n  },\n...\n]\n')),Object(i.b)("p",null,"Ah, much better. "),Object(i.b)("p",null,"As an exercise for the reader, try to do the same with the collection ",Object(i.b)("inlineCode",{parentName:"p"},"users.json"),"."))}b.isMDXComponent=!0},91:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return u}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),b=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=b(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(t),m=a,u=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return t?r.a.createElement(u,o(o({ref:n},l),{},{components:t})):r.a.createElement(u,o({ref:n},l))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,c=new Array(i);c[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=t[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);