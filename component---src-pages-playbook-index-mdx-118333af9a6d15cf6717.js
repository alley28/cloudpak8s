(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{"013z":function(e,t,a){"use strict";a("KKXr"),a("pIFo");var o=a("pOBw"),n=a("q1tI"),r=a.n(n),i=a("NmYn"),l=a.n(i),c=a("OKom"),s=a("k4MR"),b=a("TSYQ"),p=a.n(b),u=a("QH2O"),d=a("qKvR"),m=function(e){var t,a=e.title,o=e.tabs,n=void 0===o?[]:o;return Object(d.b)("div",{className:p()(u.pageHeader,(t={},t[u.withTabs]=n.length,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:u.text},a)))))},f=a("pEPl"),h=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,o=f.data.site.siteMetadata.repository,n=a||o,r=n.baseUrl,i=n.subDirectory,l=r+"/edit/"+n.branch+i+"/src/pages"+t;return r?Object(d.b)("div",{className:"bx--row "+h.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:h.link,href:l},"Edit this page on GitHub"))):null},g=a("FCXl"),j=(a("Oyvg"),a("Wbzz")),v=a("I8xM");var w=function(e){var t,a;function o(){return e.apply(this,arguments)||this}return a=e,(t=o).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,o.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,o=a.split("/").filter(Boolean).slice(-1)[0],n=t.map((function(e){var t,n=l()(e,{lower:!0}),r=n===o,i=new RegExp(o+"(?!-)"),c=a.replace(i,n);return Object(d.b)("li",{key:e,className:p()((t={},t[v.selectedItem]=r,t),v.listItem)},Object(d.b)(j.Link,{className:v.link,to:""+c},e))}));return Object(d.b)("div",{className:v.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",null,Object(d.b)("ul",{className:v.list},n))))))},o}(r.a.Component),y=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,i=t.frontmatter,b=void 0===i?{}:i,p=t.relativePagePath,u=t.titleType,f=b.tabs,h=b.title,j=b.theme,v=b.description,k=b.keywords,P=o.data.site.pathPrefix,N=P?n.pathname.replace(P,""):n.pathname,x=f?N.split("/").filter(Boolean).slice(-1)[0]||l()(f[0],{lower:!0}):"";return Object(d.b)(s.a,{tabs:f,homepage:!1,theme:j,pageTitle:h,pageDescription:v,pageKeywords:k,titleType:u},Object(d.b)(m,{title:r?Object(d.b)(r,null):h,label:"label",tabs:f}),f&&Object(d.b)(w,{slug:N,tabs:f,currentTab:x}),Object(d.b)(y.a,{padded:!0},a,Object(d.b)(O,{relativePagePath:p})),Object(d.b)(g.a,{pageContext:t,location:n,slug:N,tabs:f,currentTab:x}),Object(d.b)(c.a,null))}},lEpT:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return s}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var o=a("7ljp"),n=a("013z");a("qKvR");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}var i={},l={_frontmatter:i},c=n.a;function s(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["components"]);return Object(o.b)(c,r({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",null,"IBM Cloud Pak Playbook"),Object(o.b)("p",null,"IBM Cloud™Paks are enterprise-ready, containerized software solutions that give clients an open, faster and more secure way to move core business applications to any cloud. Each IBM Cloud Pak™runs on Red Hat® OpenShift® on IBM Cloud, other public clouds, or on-premises. IBM Cloud Paks include containerized IBM middleware and common software services for development and management, on top of a common integration layer."),Object(o.b)("p",null,"The IBM Cloud Pak Playbook covers the following IBM Cloud Paks, running on Red Hat OpenShift 4.2:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Cloud Pak for Applications"),Object(o.b)("li",{parentName:"ul"},"Cloud Pak for Automation"),Object(o.b)("li",{parentName:"ul"},"Cloud Pak for Integration"),Object(o.b)("li",{parentName:"ul"},"Cloud Pak for Multicloud Management")),Object(o.b)("p",null,"This playbook is designed to complement the official documentation for the IBM Cloud Paks, adding best practices, scenario implementation guidance, and more detailed technical information where needed. The official IBM Cloud Pak documentation should be used as your first source of knowledge. It can be found here: ",Object(o.b)("a",r({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/"}),"https://www.ibm.com/support/knowledgecenter/"),"."),Object(o.b)("p",null,"The playbook is a living document following the principles of open source. It is presented AS IS to describe experiences working in specific environments.\nIf you find an error, please raise a ",Object(o.b)("a",r({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/cloudpak8s/issues"}),"github issue"),".\nAlso, please contribute following the instructions in the ",Object(o.b)("a",r({parentName:"p"},{href:"https://ocp42.cloudpak8s.io/contribute/"}),"Contribution Guide"),"."))}s.isMDXComponent=!0},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"https://github.com/ibm-cloud-architecture/cloudpak8s","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":""}}}')}}]);
//# sourceMappingURL=component---src-pages-playbook-index-mdx-118333af9a6d15cf6717.js.map