"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[18691],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,y=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(y,l(l({ref:t},u),{},{components:n})):r.createElement(y,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},99307:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={title:"shenyu client golang 1.0.0",sidebar_position:1,keywords:["release-notes"],description:"release-notes"},l="shenyu go\u8bed\u8a00\u5ba2\u6237\u7aef 1.0.0",i={unversionedId:"client-golang-1.0.0-release",id:"client-golang-1.0.0-release",isDocsHomePage:!1,title:"shenyu client golang 1.0.0",description:"release-notes",source:"@site/i18n/zh/docusaurus-plugin-content-docs-event/current/client-golang-1.0.0-release.md",sourceDirName:".",slug:"/client-golang-1.0.0-release",permalink:"/zh/event/client-golang-1.0.0-release",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs-event/current/client-golang-1.0.0-release.md",version:"current",lastUpdatedBy:"Lisandro",lastUpdatedAt:1666144369,formattedLastUpdatedAt:"2022/10/19",sidebarPosition:1,frontMatter:{title:"shenyu client golang 1.0.0",sidebar_position:1,keywords:["release-notes"],description:"release-notes"}},c=[{value:"\u65b0\u7684\u529f\u80fd",id:"\u65b0\u7684\u529f\u80fd",children:[]}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"shenyu-go\u8bed\u8a00\u5ba2\u6237\u7aef-100"},"shenyu go\u8bed\u8a00\u5ba2\u6237\u7aef 1.0.0"),(0,o.kt)("h3",{id:"\u65b0\u7684\u529f\u80fd"},"\u65b0\u7684\u529f\u80fd"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u652f\u6301ShenYu Admin\u540e\u53f0\u4e0ehttp\u7c7b\u578b\u6ce8\u518c\u5230ShenYu\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u652f\u6301\u4f7f\u7528Nacos\u7c7b\u578b\u6ce8\u518c\u5230ShenYu\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u652f\u6301\u4f7f\u7528Zookeeper\u7c7b\u578b\u6ce8\u518c\u5230ShenYu\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u652f\u6301\u4f7f\u7528Consul\u7c7b\u578b\u6ce8\u518c\u5230ShenYu\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u652f\u6301\u4f7f\u7528Etcd\u7c7b\u578b\u6ce8\u518c\u5230ShenYu\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u65b0\u589e\u4e0a\u8ff0\u76f8\u5173\u7684\u6587\u6863\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u589e\u52a0\u4e0a\u8ff0\u96c6\u6210\u6f14\u793a\u4ee3\u7801\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u589e\u52a0\u4ee5\u4e0aUT\u6848\u4f8b\u3002")))}u.isMDXComponent=!0}}]);