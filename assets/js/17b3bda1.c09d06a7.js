"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[54271],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),k=a,m=u["".concat(c,".").concat(k)]||u[k]||d[k]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=k;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},26392:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"Websocket Proxy",description:"Websocket Proxy"},i=void 0,s={unversionedId:"user-guide/websocket-proxy",id:"version-2.4.3/user-guide/websocket-proxy",isDocsHomePage:!1,title:"Websocket Proxy",description:"Websocket Proxy",source:"@site/versioned_docs/version-2.4.3/user-guide/websocket-proxy.md",sourceDirName:"user-guide",slug:"/user-guide/websocket-proxy",permalink:"/docs/2.4.3/user-guide/websocket-proxy",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.4.3/user-guide/websocket-proxy.md",version:"2.4.3",frontMatter:{title:"Websocket Proxy",description:"Websocket Proxy"},sidebar:"version-2.4.3/tutorialSidebar",previous:{title:"Data Synchronization Config",permalink:"/docs/2.4.3/user-guide/use-data-sync"},next:{title:"ContextPath Plugin",permalink:"/docs/2.4.3/plugin-center/http-process/contextpath-plugin"}},c=[{value:"Add Websocket plugin in gateway",id:"add-websocket-plugin-in-gateway",children:[]},{value:"Websocket service access gateway",id:"websocket-service-access-gateway",children:[]},{value:"User Request",id:"user-request",children:[]}],l={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This document is intended to help the ",(0,a.kt)("inlineCode",{parentName:"p"},"Websocket")," service access the ",(0,a.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway. The ",(0,a.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"Websocket")," plugin to handle ",(0,a.kt)("inlineCode",{parentName:"p"},"Websocket")," service."),(0,a.kt)("p",null,"Before the connection, start ",(0,a.kt)("inlineCode",{parentName:"p"},"shenyu-admin")," correctly, start ",(0,a.kt)("inlineCode",{parentName:"p"},"Websocket")," plugin, and add related dependencies on the gateway and ",(0,a.kt)("inlineCode",{parentName:"p"},"Websocket")," application client. Refer to the previous ",(0,a.kt)("a",{parentName:"p",href:"../quick-start/quick-start-websocket"},"Quick start with Websocket")," ."),(0,a.kt)("p",null,"For details about client access configuration, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.4.3/user-guide/register-center-access"},"Application Client Access Config")," ."),(0,a.kt)("p",null,"For details about data synchronization configurations, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.4.3/user-guide/use-data-sync"},"Data Synchronization Config"),")."),(0,a.kt)("h2",{id:"add-websocket-plugin-in-gateway"},"Add Websocket plugin in gateway"),(0,a.kt)("p",null,"Add the following dependencies to the gateway's ",(0,a.kt)("inlineCode",{parentName:"p"},"pom.xml")," file , which is introduced by default\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"        \x3c!--shenyu websocket plugin start--\x3e\n        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-spring-boot-starter-plugin-websocket</artifactId>\n            <version>${project.version}</version>\n        </dependency>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Restart your gateway service.")),(0,a.kt)("h2",{id:"websocket-service-access-gateway"},"Websocket service access gateway"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Please refer to\uff1a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/shenyu/tree/2.4.3-release/shenyu-examples/shenyu-examples-websocket"},"shenyu-examples-websocket"),", Contains examples of the three implementations of  ",(0,a.kt)("inlineCode",{parentName:"p"},"annotation websocket"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"spring native websocket"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"spring reactive websocket"))),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the ",(0,a.kt)("inlineCode",{parentName:"li"},"Websocket")," service, add the following dependencies:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-spring-boot-starter-client-websocket</artifactId>\n            <version>${shenyu.version}</version>\n        </dependency>\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Add the following configuration to the ",(0,a.kt)("inlineCode",{parentName:"li"},"application.yaml")," configuration file:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  register:\n    registerType: http\n    serverLists: http://localhost:9095 # shenyu-admin ip and port\n    props:\n      username: admin\n      password: 123456\n  client:\n    websocket:\n      props:\n        contextPath: /ws-annotation\n        appName: ws-annotation\n        port: 8001 # need to be consistent with the service port\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Add ",(0,a.kt)("inlineCode",{parentName:"li"},"@ShenyuSpringWebSocketClient")," annotation to the ",(0,a.kt)("inlineCode",{parentName:"li"},"Websocket")," service interface implementation class, start your service and after successful registration, go to ",(0,a.kt)("inlineCode",{parentName:"li"},"Client List -> Proxy -> Websocket")," in the ",(0,a.kt)("inlineCode",{parentName:"li"},"shenyu-admin")," management system and you will see the auto-registered selector and rule information.")),(0,a.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@ShenyuSpringWebSocketClient("/myWs")\n@ServerEndpoint("/myWs")\npublic class WsServerEndpoint {\n    @OnOpen\n    public void onOpen(final Session session) {\n        LOG.info("connect successful");\n    }\n  \n    @OnClose\n    public void onClose(final Session session) {\n        LOG.info("connect closed");\n    }\n\n    @OnMessage\n    public String onMsg(final String text) {\n        return "server send message\uff1a" + text;\n    }\n}\n')),(0,a.kt)("h2",{id:"user-request"},"User Request"),(0,a.kt)("p",null,"You need to request your ",(0,a.kt)("inlineCode",{parentName:"p"},"Websocket")," service via the ",(0,a.kt)("inlineCode",{parentName:"p"},"ws")," protocol. The ",(0,a.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway will configure a routing prefix which is the ",(0,a.kt)("inlineCode",{parentName:"p"},"contextPath")," in the access gateway configuration file. For example: ",(0,a.kt)("inlineCode",{parentName:"p"},"ws://localhost:9195/ws-annotation/myWs"),", after which you can establish a connection to send and receive messages normally."))}p.isMDXComponent=!0}}]);