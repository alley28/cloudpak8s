(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"013z":function(e,t,a){"use strict";a("KKXr"),a("pIFo");var r=a("pOBw"),o=a("q1tI"),n=a.n(o),l=a("NmYn"),i=a.n(l),c=a("OKom"),s=a("k4MR"),b=a("TSYQ"),p=a.n(b),u=a("QH2O"),m=a("qKvR"),h=function(e){var t,a=e.title,r=e.tabs,o=void 0===r?[]:r;return Object(m.b)("div",{className:p()(u.pageHeader,(t={},t[u.withTabs]=o.length,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:u.text},a)))))},d=a("pEPl"),O=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,r=d.data.site.siteMetadata.repository,o=a||r,n=o.baseUrl,l=o.subDirectory,i=n+"/edit/"+o.branch+l+"/src/pages"+t;return n?Object(m.b)("div",{className:"bx--row "+O.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:O.link,href:i},"Edit this page on GitHub"))):null},y=a("FCXl"),g=(a("Oyvg"),a("Wbzz")),f=a("I8xM");var N=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,r=a.split("/").filter(Boolean).slice(-1)[0],o=t.map((function(e){var t,o=i()(e,{lower:!0}),n=o===r,l=new RegExp(r+"(?!-)"),c=a.replace(l,o);return Object(m.b)("li",{key:e,className:p()((t={},t[f.selectedItem]=n,t),f.listItem)},Object(m.b)(g.Link,{className:f.link,to:""+c},e))}));return Object(m.b)("div",{className:f.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:f.list},o))))))},r}(n.a.Component),w=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,o=e.location,n=e.Title,l=t.frontmatter,b=void 0===l?{}:l,p=t.relativePagePath,u=t.titleType,d=b.tabs,O=b.title,g=b.theme,f=b.description,v=b.keywords,k=r.data.site.pathPrefix,x=k?o.pathname.replace(k,""):o.pathname,P=d?x.split("/").filter(Boolean).slice(-1)[0]||i()(d[0],{lower:!0}):"";return Object(m.b)(s.a,{tabs:d,homepage:!1,theme:g,pageTitle:O,pageDescription:f,pageKeywords:v,titleType:u},Object(m.b)(h,{title:n?Object(m.b)(n,null):O,label:"label",tabs:d}),d&&Object(m.b)(N,{slug:x,tabs:d,currentTab:P}),Object(m.b)(w.a,{padded:!0},a,Object(m.b)(j,{relativePagePath:p})),Object(m.b)(y.a,{pageContext:t,location:o,slug:x,tabs:d,currentTab:P}),Object(m.b)(c.a,null))}},Kr8m:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return p}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var r=a("7ljp"),o=a("013z");a("qKvR");function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var l,i={},c=(l="PageDescription",function(e){return console.warn("Component "+l+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",e)}),s={_frontmatter:i},b=o.a;function p(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return Object(r.b)(b,n({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(c,{mdxType:"PageDescription"},Object(r.b)("p",null,"Anyone can contribute to the IBM Cloud Paks Playbook, whether you are an IBM’er or not.\nWe welcome your collaboration and contributions happily, as our reference applications are meant to reflect your real world scenarios.\nThere are multiple ways to contribute: report bugs and improvement suggestions, improve documentation, and contribute code.")),Object(r.b)("h2",null,"Bug reports, documentation changes, and feature requests"),Object(r.b)("p",null,"If you would like to contribute your experience back to the project in the form of encountered bug reports, necessary documentation changes, or new feature requests, this can be done through the use of the repository’s ",Object(r.b)("a",n({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/cloudpak8s/issues"}),Object(r.b)("strong",{parentName:"a"},"Issues"))," list.  "),Object(r.b)("p",null,"Before opening a new issue, please reference the existing list to make sure a similar or duplicate item does not already exist.  Otherwise, please be as explicit as possible when creating the new item and be sure to include the following:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Bug reports"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Specific Project Version"),Object(r.b)("li",{parentName:"ul"},"Deployment environment"),Object(r.b)("li",{parentName:"ul"},"A minimal, but complete, setup of steps to recreate the problem"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Documentation changes"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"URL to existing incorrect or incomplete documentation (either in the project’s GitHub repo or external product documentation)"),Object(r.b)("li",{parentName:"ul"},"Updates required to correct current inconsistency"),Object(r.b)("li",{parentName:"ul"},"If possible, a link to a project fork, sample, or workflow to expose the gap in documentation."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Feature requests"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Complete description of project feature request, including but not limited to, components of the existing project that are impacted, as well as additional components that may need to be created."),Object(r.b)("li",{parentName:"ul"},"A minimal, but complete, setup of steps to recreate environment necessary to identify the new feature’s current gap.")))),Object(r.b)("p",null,"The more explicit and thorough you are in opening GitHub Issues, the more efficient your interaction with the maintainers will be.  When creating the GitHub Issue for your bug report, documentation change, or feature request, be sure to add as many relevant labels as necessary (that are defined for that specific project).  These will vary by project, but will be helpful to the maintainers in quickly triaging your new GitHub issues."),Object(r.b)("h2",null,"Content contributions"),Object(r.b)("p",null,"We really value contributions. To maximize the impact of your content contributions, we request you follow the procedure and guidelines below.  If you are new to open source contribution and would like some more pointers or guidance, you may want to check out ",Object(r.b)("a",n({parentName:"p"},{href:"http://yourfirstpr.github.io/"}),Object(r.b)("strong",{parentName:"a"},"Your First PR"))," and ",Object(r.b)("a",n({parentName:"p"},{href:"https://www.firsttimersonly.com/"}),Object(r.b)("strong",{parentName:"a"},"First Timers Only")),".  These are a few projects that help on-board new contributors to the overall open source process."),Object(r.b)("h3",null,"Forks and Pull Requests best practices"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Please ensure you follow these best practices after you read the instructions for contributing."),Object(r.b)("li",{parentName:"ul"},"One change / documentation update per pull request",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Always pull the latest changes from upstream and rebase before creating any pull request.  "),Object(r.b)("li",{parentName:"ul"},"New pull requests should be created against a branch of your forked repository."))),Object(r.b)("li",{parentName:"ul"},"All new contributions should first be tested locally before PR submission.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"There is a way to run a development instance of the Cloud Pak Playbook site on your local machine. Follow the instructions in the ",Object(r.b)("a",{href:"/contribute/#testing-locally",title:"Testing locally"},Object(r.b)("span",null,"Testing locally"))," section below to set that up. It is very easy. "),Object(r.b)("li",{parentName:"ul"},"Make sure you test all your changes locally before submitting a pull request.")))),Object(r.b)("h3",null,"Github and git flow"),Object(r.b)("p",null,"The internet is littered with guides and information on how to use and understand git.\nHowever, here’s a compact guide that follows the suggested workflow."),Object(r.b)("img",{src:"https://ibm-cloud-architecture.github.io/assets/img/github_flow.png",alt:"Github flow"}),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Fork the desired repo in github.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Clone your repo to your local computer.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Add the upstream repository"),Object(r.b)("p",{parentName:"li"},"Note: Guide for step 1-3 here: ",Object(r.b)("a",n({parentName:"p"},{href:"https://help.github.com/articles/fork-a-repo/"}),"forking a repo"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Create new development branch off the targeted upstream branch.  The upstream branch will often be ",Object(r.b)("inlineCode",{parentName:"p"},"master"),"."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",n({parentName:"pre"},{}),"git checkout -b <my-feature-branch> master\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Do your work:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Write your contributions or make your changes"),Object(r.b)("li",{parentName:"ul"},"Pass your tests locally"),Object(r.b)("li",{parentName:"ul"},"Commit your intermediate changes as you go and as appropriate"),Object(r.b)("li",{parentName:"ul"},"Repeat until satisfied"),Object(r.b)("li",{parentName:"ul"},"See the ",Object(r.b)("a",{href:"/contribute/#testing-locally",title:"Testing locally"},Object(r.b)("span",null,"Testing locally"))," section below for more information regarding running Gatsby locally"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Fetch latest upstream changes (in case other changes had been delivered upstream while you were developing your new feature)."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",n({parentName:"pre"},{}),"git fetch upstream\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Rebase to the latest upstream changes, resolving any conflicts. This will ‘replay’ your local commits, one by one, after the changes delivered upstream while you were locally developing, letting you manually resolve any conflict."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",n({parentName:"pre"},{}),"git branch --set-upstream-to=upstream/master\ngit rebase\n")),Object(r.b)("p",{parentName:"li"},"Instructions on how to manually resolve a conflict and commit the new change or skip your local replayed commit will be presented on screen by the git CLI.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Push the changes to your repository"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",n({parentName:"pre"},{}),"git push origin <my-feature-branch>\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Create a pull request against the same targeted upstream branch."),Object(r.b)("p",{parentName:"li"},Object(r.b)("a",n({parentName:"p"},{href:"https://help.github.com/articles/creating-a-pull-request/"}),"Creating a pull request")))),Object(r.b)("p",null,"Once the pull request has been reviewed, accepted and merged into the main github repository, you should synchronise your remote and local forked github repository ",Object(r.b)("inlineCode",{parentName:"p"},"master")," branch with the upstream master branch. To do so:"),Object(r.b)("ol",{start:10},Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Pull to your local forked repository the latest changes upstream (that is, the pull request)."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",n({parentName:"pre"},{}),"git pull upstream master\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Push those latest upstream changes pulled locally to your remote forked repository."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",n({parentName:"pre"},{}),"git push origin master\n")))),Object(r.b)("h3",null,"What happens next?"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"All pull requests will be automatically built and unit tested by travis-ci, when implemented by that specific project.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"You can determine if a given project is enabled for travis-ci unit tests by the existence of a ",Object(r.b)("inlineCode",{parentName:"li"},".travis.yml")," file in the root of the repository or branch."),Object(r.b)("li",{parentName:"ul"},"When in use, all travis-ci unit tests must pass completely before any further review or discussion takes place."))),Object(r.b)("li",{parentName:"ul"},"The repository maintainer will then inspect the commit and, if accepted, will pull the code into the upstream branch."),Object(r.b)("li",{parentName:"ul"},"Should a maintainer or reviewer ask for changes to be made to the pull request, these can be made locally and pushed to your forked repository and branch."),Object(r.b)("li",{parentName:"ul"},"Commits passing this stage will make it into the next release cycle for the given project.")),Object(r.b)("h2",null,"Testing locally"),Object(r.b)("p",null,"Once you have forked the repository and have cloned the code to your local system you can begin contributing. The best way to contribute is to run the Gatsby project locally in ",Object(r.b)("inlineCode",{parentName:"p"},"dev")," mode so you can make sure your documentation renders correctly before creating a pull request."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Once you have cloned your fork of the repository to your local system navigate to the directory where your project resides",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",n({parentName:"pre"},{}),"cd <your repo directory>\n"))),Object(r.b)("li",{parentName:"ol"},"Run the following command to initialize npm in your local directory",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",n({parentName:"pre"},{}),"npm install\n"))),Object(r.b)("li",{parentName:"ol"},"Start Gatsby with the Carbon theme on your local system",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",n({parentName:"pre"},{}),"npm run dev\n"))),Object(r.b)("li",{parentName:"ol"},"Open your browser to ",Object(r.b)("a",n({parentName:"li"},{href:"http://localhost:8000/"}),"localhost:8000")," to verify that your changes are rendered correctly."),Object(r.b)("li",{parentName:"ol"},"If further changes are required, make your modifications. Gatsby will render the changes automatically and you can refresh your browser to see the changes.")))}p.isMDXComponent=!0},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"https://github.com/ibm-cloud-architecture/cloudpak8s","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":""}}}')}}]);
//# sourceMappingURL=component---src-pages-contribute-index-mdx-67a1b3e0aec70242675c.js.map