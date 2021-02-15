(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{101:function(e,t,n){"use strict";var a=n(0),r=n(102);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},102:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return f})),n.d(t,"metadata",(function(){return y})),n.d(t,"toc",(function(){return g})),n.d(t,"default",(function(){return O}));var a=n(3),r=n(7),l=n(0),o=n.n(l),i=n(93),c=n(101),s=n(95),u=n(76),p=n.n(u),b=37,d=39;var m=function(e){var t=e.lazy,n=e.block,a=e.defaultValue,r=e.values,i=e.groupId,u=e.className,m=Object(c.a)(),h=m.tabGroupChoices,f=m.setTabGroupChoices,y=Object(l.useState)(a),g=y[0],v=y[1],O=l.Children.toArray(e.children);if(null!=i){var j=h[i];null!=j&&j!==g&&r.some((function(e){return e.value===j}))&&v(j)}var N=function(e){v(e),null!=i&&f(i,e)},w=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":n},u)},r.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(s.a)("tabs__item",p.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case d:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case b:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return N(t)},onClick:function(){N(t)}},n)}))),t?Object(l.cloneElement)(O.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},O.map((function(e,t){return Object(l.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))};var h=function(e){var t=e.children,n=e.hidden,a=e.className;return o.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)},f={id:"installation",title:"Installation"},y={unversionedId:"installation",id:"installation",isDocsHomePage:!1,title:"Installation",description:"<Tabs",source:"@site/docs/installation.md",slug:"/installation",permalink:"/synth/installation",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/installation.md",version:"current",sidebar:"docsSidebar",previous:{title:"Synth",permalink:"/synth/"},next:{title:"Hello World",permalink:"/synth/hello-world"}},g=[{value:"Runtime Dependencies",id:"runtime-dependencies",children:[]},{value:"Runtime Dependencies",id:"runtime-dependencies-1",children:[{value:"Python Dependencies",id:"python-dependencies",children:[]}]}],v={toc:g};function O(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},v,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)(m,{defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Compile from source",value:"source"},{label:"Run in the Cloud Shell",value:"gcp_shell"}],mdxType:"Tabs"},Object(i.b)(h,{value:"linux",mdxType:"TabItem"},"Run the following command to install the `synth` binary:",Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"curl --proto '=https' --tlsv1.2 -sSL https://sh.getsynth.com | sh\n")),Object(i.b)("h2",{id:"runtime-dependencies"},"Runtime Dependencies"),Object(i.b)("p",null,"You'll need some shared ",Object(i.b)("inlineCode",{parentName:"p"},"python")," libraries. "),Object(i.b)("p",null,"If you get a run-time message around not having ",Object(i.b)("inlineCode",{parentName:"p"},"libpython3.6m"),", you can install the dependency by running:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"sudo add-apt-repository ppa:deadsnakes/ppa \\\n&& sudo apt update \\\n&& sudo apt install libpython3.6-dev\n"))),Object(i.b)(h,{value:"mac",mdxType:"TabItem"},"Run the following command to install the `synth` binary:",Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"curl --proto '=https' --tlsv1.2 -sSL https://sh.getsynth.com | sh\n")),Object(i.b)("h2",{id:"runtime-dependencies-1"},"Runtime Dependencies"),Object(i.b)("p",null,"You'll need ",Object(i.b)("inlineCode",{parentName:"p"},"python3")," - if you don't have it already you can ",Object(i.b)("inlineCode",{parentName:"p"},"brew install python3"),".")),Object(i.b)(h,{value:"source",mdxType:"TabItem"},"To get started you need the Rust package manager `cargo`. If you don't have it, you can install Rust and Cargo using (this will also make nightly the default toolchain):",Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh && rustup default nightly\n")),Object(i.b)("p",null,"Next, install Synth using ",Object(i.b)("inlineCode",{parentName:"p"},"cargo"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"cargo install --locked --git https://github.com/openquery-io/synth.git synth\n")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"If compilation fails, there are some dependencies required at compile time which you may not have installed: ",Object(i.b)("inlineCode",{parentName:"p"},"sudo apt-get install libssl-dev libsqlite3-dev libpython3-dev"))))),Object(i.b)(h,{value:"gcp_shell",mdxType:"TabItem"},Object(i.b)("div",{align:"center"},Object(i.b)("a",{href:"https://ssh.cloud.google.com/cloudshell/editor?cloudshell_git_repo=https://github.com/openquery-io/synth.git&cloudshell_print=tools/README-cloud-shell"},Object(i.b)("img",{alt:"Run in Cloud Shell",src:"https://storage.googleapis.com/gweb-cloudblog-publish/images/run_on_google_cloud.max-300x300.png"}))),Object(i.b)("p",null,"The run the following to install ",Object(i.b)("inlineCode",{parentName:"p"},"synth")," on the Cloud Shell:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"./tools/init-cloud-shell && export PATH=$HOME/.local/bin:$PATH\n")))),Object(i.b)("p",null,"You can run ",Object(i.b)("inlineCode",{parentName:"p"},"synth --version")," to make sure the CLI installed correctly."),Object(i.b)("h3",{id:"python-dependencies"},"Python Dependencies"),Object(i.b)("p",null,"Synth uses the Python ",Object(i.b)("a",{parentName:"p",href:"https://pypi.org/project/Faker/"},"Faker")," library to generate different flavours of dummy data. To install Faker, run:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"pip3 install Faker\n")))}O.isMDXComponent=!0},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,m=p["".concat(o,".").concat(d)]||p[d]||b[d]||l;return n?r.a.createElement(m,i(i({ref:t},s),{},{components:n})):r.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}}}]);