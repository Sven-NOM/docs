"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[849],{3905:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,i=function(t,e){if(null==t)return{};var r,n,i={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var c=n.createContext({}),s=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},p=function(t){var e=s(t.components);return n.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var r=t.components,i=t.mdxType,o=t.originalType,c=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),u=s(r),f=i,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(m,a(a({ref:e},p),{},{components:r})):n.createElement(m,a({ref:e},p))}));function f(t,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=r.length,a=new Array(o);a[0]=u;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:i,a[1]=l;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4975:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],l={},c="SDKs",s={unversionedId:"integrations/sdk",id:"integrations/sdk",title:"SDKs",description:"Lido UI Library",source:"@site/docs/integrations/sdk.md",sourceDirName:"integrations",slug:"/integrations/sdk",permalink:"/integrations/sdk",editUrl:"https://github.com/lidofinance/docs/blob/main/docs/integrations/sdk.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"How to claim Lido early stakers airdrop",permalink:"/guides/early-staker-airdrop"},next:{title:"Subgraph",permalink:"/integrations/subgraph"}},p=[{value:"Lido UI Library",id:"lido-ui-library",children:[],level:3},{value:"Lido JS SDK",id:"lido-js-sdk",children:[],level:3},{value:"Lido Python SDK",id:"lido-python-sdk",children:[],level:3}],d={toc:p};function u(t){var e=t.components,r=(0,i.Z)(t,a);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sdks"},"SDKs"),(0,o.kt)("h3",{id:"lido-ui-library"},"Lido UI Library"),(0,o.kt)("p",null,"React components for Lido Finance projects."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Storybook: ",(0,o.kt)("a",{parentName:"li",href:"https://ui.lido.fi/"},"https://ui.lido.fi")),(0,o.kt)("li",{parentName:"ul"},"GitHub: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/lidofinance/ui"},"https://github.com/lidofinance/ui")),(0,o.kt)("li",{parentName:"ul"},"NPM: ",(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/search?q=%40lidofinance/"},"https://www.npmjs.com/search?q=%40lidofinance/"))),(0,o.kt)("h3",{id:"lido-js-sdk"},"Lido JS SDK"),(0,o.kt)("p",null,"Library for interaction with Lido contracts."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GitHub: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/lidofinance/lido-js-sdk"},"https://github.com/lidofinance/lido-js-sdk")),(0,o.kt)("li",{parentName:"ul"},"NPM: ",(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/search?q=%40lido-sdk/"},"https://www.npmjs.com/search?q=%40lido-sdk/"))),(0,o.kt)("h3",{id:"lido-python-sdk"},"Lido Python SDK"),(0,o.kt)("p",null,"Library to efficiently load network data for Lido, validate node operator keys and find key duplicates."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Pypi: ",(0,o.kt)("a",{parentName:"li",href:"https://pypi.org/project/lido-sdk/"},"https://pypi.org/project/lido-sdk/")),(0,o.kt)("li",{parentName:"ul"},"GitHub: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/lidofinance/lido-python-sdk"},"https://github.com/lidofinance/lido-python-sdk"))))}u.isMDXComponent=!0}}]);