(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{156:function(e,t,a){"use strict";a.r(t);a(168);var n=a(0),r=a.n(n),i=(a(158),a(164)),c=a(162);t.default=function(e){var t=e.pageContext;return r.a.createElement(i.a,null,r.a.createElement(c.a,{title:"Home"}),r.a.createElement("h2",null,"Discover tech companies in Uppsala"),r.a.createElement("div",{className:"cards"},t.companies&&t.companies.filter(function(e){return e.name}).map(function(e,t){return r.a.createElement("div",{className:"card",key:t},r.a.createElement("a",{href:e.url,className:"name"},e.name),r.a.createElement("p",null,e.description),e.jobs_url&&r.a.createElement("a",{href:e.jobs_url,className:"jobs_url"},"Open positions"))})),r.a.createElement("div",{style:{marginTop:30,textAlign:"center"}},r.a.createElement("a",{href:"https://github.com/uppsalatech/uppsalatechmap/edit/master/companies.json"},"Add your own company to the list")))}},158:function(e,t,a){"use strict";a.d(t,"b",function(){return p});var n=a(0),r=a.n(n),i=a(5),c=a.n(i),o=a(40),s=a.n(o);a.d(t,"a",function(){return s.a});a(159);var l=r.a.createContext({});function u(e){var t=e.staticQueryData,a=e.data,n=e.query,i=e.render,c=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,c&&i(c),!c&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var p=function(e){var t=e.data,a=e.query,n=e.render,i=e.children;return r.a.createElement(l.Consumer,null,function(e){return r.a.createElement(u,{data:t,query:a,render:n||i,staticQueryData:e})})};p.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},159:function(e,t,a){var n;e.exports=(n=a(160))&&n.default||n},160:function(e,t,a){"use strict";a.r(t);a(41);var n=a(0),r=a.n(n),i=a(5),c=a.n(i),o=a(65),s=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=s},161:function(e){e.exports={data:{site:{siteMetadata:{title:"Uppsala Tech Map"}}}}},162:function(e,t,a){"use strict";var n=a(163),r=a(0),i=a.n(r),c=a(5),o=a.n(c),s=a(166),l=a.n(s);function u(e){var t=e.description,a=e.lang,r=e.meta,c=e.title,o=n.data.site,s=t||o.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:c},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:s}].concat(r)})}u.defaultProps={lang:"en",meta:[],description:""},u.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),title:o.a.string.isRequired},t.a=u},163:function(e){e.exports={data:{site:{siteMetadata:{title:"Uppsala Tech Map",description:"Discover tech companies in Uppsala",author:"@gatsbyjs"}}}}},164:function(e,t,a){"use strict";var n=a(161),r=a(0),i=a.n(r),c=a(5),o=a.n(c),s=a(158),l=function(e){var t=e.siteTitle;return i.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(s.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};l.propTypes={siteTitle:o.a.string},l.defaultProps={siteTitle:""};var u=l,p=(a(165),function(e){var t=e.children;return i.a.createElement(s.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,t),i.a.createElement("footer",{style:{marginTop:100}},"© ",(new Date).getFullYear(),", Built by ",i.a.createElement("a",{href:"https://twitter.com/johannesl"},"Johannes")," at ",i.a.createElement("a",{href:"https://46elks.com"},"46elks")," and ",i.a.createElement("a",{href:"https://twitter.com/andersaberg"},"Anders")," at ",i.a.createElement("a",{href:"https://www.caspeco.se"},"Caspeco"))))},data:n})});p.propTypes={children:o.a.node.isRequired};t.a=p},168:function(e,t,a){var n=a(12).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||a(10)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=component---src-pages-companies-js-c2c367640e35455eed85.js.map