(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"013z":function(e,t,a){"use strict";a("KKXr"),a("pIFo");var n=a("pOBw"),r=a("q1tI"),l=a.n(r),o=a("NmYn"),i=a.n(o),b=a("OKom"),c=a("k4MR"),p=a("TSYQ"),s=a.n(p),m=a("QH2O"),O=a("qKvR"),u=function(e){var t,a=e.title,n=e.tabs,r=void 0===n?[]:n;return Object(O.b)("div",{className:s()(m.pageHeader,(t={},t[m.withTabs]=r.length,t))},Object(O.b)("div",{className:"bx--grid"},Object(O.b)("div",{className:"bx--row"},Object(O.b)("div",{className:"bx--col-lg-12"},Object(O.b)("h1",{id:"page-title",className:m.text},a)))))},j=a("pEPl"),d=a("BAC9"),N=function(e){var t=e.relativePagePath,a=e.repository,n=j.data.site.siteMetadata.repository,r=a||n,l=r.baseUrl,o=r.subDirectory,i=l+"/edit/"+r.branch+o+"/src/pages"+t;return l?Object(O.b)("div",{className:"bx--row "+d.row},Object(O.b)("div",{className:"bx--col"},Object(O.b)("a",{className:d.link,href:i},"Edit this page on GitHub"))):null},h=a("FCXl"),g=(a("Oyvg"),a("Wbzz")),f=a("I8xM");var v=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=i()(e,{lower:!0}),l=r===n,o=new RegExp(n+"(?!-)"),b=a.replace(o,r);return Object(O.b)("li",{key:e,className:s()((t={},t[f.selectedItem]=l,t),f.listItem)},Object(O.b)(g.Link,{className:f.link,to:""+b},e))}));return Object(O.b)("div",{className:f.tabsContainer},Object(O.b)("div",{className:"bx--grid"},Object(O.b)("div",{className:"bx--row"},Object(O.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(O.b)("nav",null,Object(O.b)("ul",{className:f.list},r))))))},n}(l.a.Component),w=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,l=e.Title,o=t.frontmatter,p=void 0===o?{}:o,s=t.relativePagePath,m=t.titleType,j=p.tabs,d=p.title,g=p.theme,f=p.description,y=p.keywords,x=n.data.site.pathPrefix,C=x?r.pathname.replace(x,""):r.pathname,I=j?C.split("/").filter(Boolean).slice(-1)[0]||i()(j[0],{lower:!0}):"";return Object(O.b)(c.a,{tabs:j,homepage:!1,theme:g,pageTitle:d,pageDescription:f,pageKeywords:y,titleType:m},Object(O.b)(u,{title:l?Object(O.b)(l,null):d,label:"label",tabs:j}),j&&Object(O.b)(v,{slug:C,tabs:j,currentTab:I}),Object(O.b)(w.a,{padded:!0},a,Object(O.b)(N,{relativePagePath:s})),Object(O.b)(h.a,{pageContext:t,location:r,slug:C,tabs:j,currentTab:I}),Object(O.b)(b.a,null))}},MZyJ:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return c}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),r=a("013z");a("qKvR");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o={},i={_frontmatter:o},b=r.a;function c(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(b,l({},i,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",l({parentName:"li"},{href:"#introduction"}),"Introduction")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",l({parentName:"li"},{href:"#prepare-installation"}),"Prepare Installation")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",l({parentName:"li"},{href:"#begin-installation"}),"Begin Installation")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",l({parentName:"li"},{href:"#validate-installation"}),"Validate Installation"))),Object(n.b)("h3",null,"Introduction"),Object(n.b)("p",null,"This page contains guidance on how to configure the Datapower Gateway release for both on-prem and ROKS.  Note - you do not need to install this chart unless you are using datapower as a standalone capability.  When you install API Connect, it installs its own version of this chart as part of the APIC Cluster."),Object(n.b)("h3",null,"Prepare Installation"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("strong",{parentName:"li"},"Change project to eventstreams"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",l({parentName:"pre"},{}),"oc project datapower\n")))),Object(n.b)("h3",null,"Begin Installation"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Go to CP4I Platform Home. Click ",Object(n.b)("strong",{parentName:"p"},"Create instance")," inside the ",Object(n.b)("strong",{parentName:"p"},"DataPower")," tile.  ")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"A window will pop up with a description of the requirements for installing. Click ",Object(n.b)("strong",{parentName:"p"},"Continue")," to the helm chart deployment configuration.     ")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Click ",Object(n.b)("strong",{parentName:"p"},"Overview")," to view the chart information and pre-reqs that were covered in ",Object(n.b)("a",l({parentName:"p"},{href:"#prepare-installation"}),"Prepare Installation"),".")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Click ",Object(n.b)("strong",{parentName:"p"},"Configure"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Enter the Helm release name. In our example, ",Object(n.b)("strong",{parentName:"p"},"datapower"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Enter Target Namespace - ",Object(n.b)("strong",{parentName:"p"},"datapower"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Select a Cluster - ",Object(n.b)("strong",{parentName:"p"},"local-cluster"),".")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Check the license agreement. ")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Under Parameters click ",Object(n.b)("strong",{parentName:"p"},"All Parameters")," to expand. "),Object(n.b)("ol",{parentName:"li"},Object(n.b)("li",{parentName:"ol"},"Ingress - icp-proxy address defined during icp / common-services installation - icp-proxy.","<","openshift-router-domain",">","  "),Object(n.b)("li",{parentName:"ol"},"Image Pull Secret - Set to ",Object(n.b)("inlineCode",{parentName:"li"},"ibm-entitlement-key")," if using entitled registry or if offline use the ",Object(n.b)("inlineCode",{parentName:"li"},"deployer-dockercfg-XX")," secret in your datapower namespace.  Use ",Object(n.b)("inlineCode",{parentName:"li"},"oc get secrets")," to get the exact value for your environment."))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Scroll down to External access settings - enter the proxy address - ",Object(n.b)("strong",{parentName:"p"},"icp-proxy.","<","openshift-router-domain",">","."))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Note:  If you want to enable access to the WebUI and XML/Rest Interfaces for your datapower instance, you will need to change those manually.  Otherwise, they will default to disabled.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Scroll to the bottom. Click ",Object(n.b)("strong",{parentName:"p"},"Install"),"."))),Object(n.b)("h3",null,"Validate Installation"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"check pods using the command line",Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",l({parentName:"pre"},{}),"oc get pods -n datapower\nNAME                                      READY     STATUS    RESTARTS   AGE\ndp-1-ibm-datapower-icp4i-fb888677-mvd9q   1/1       Running   0          3m\n")))))}c.isMDXComponent=!0},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"https://github.com/ibm-cloud-architecture/cloudpak8s","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":""}}}')}}]);
//# sourceMappingURL=component---src-pages-integration-deploy-secure-gateway-index-mdx-df4724d74691a4c36e9f.js.map