(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{89:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return d}));var n=r(3),a=r(7),s=(r(0),r(95)),o={},i={unversionedId:"token-guides/steth-superuser-functions",id:"token-guides/steth-superuser-functions",isDocsHomePage:!1,title:"StETH superuser functions",description:"Superuser privileges, accounts, and roles",source:"@site/docs/token-guides/steth-superuser-functions.md",sourceDirName:"token-guides",slug:"/token-guides/steth-superuser-functions",permalink:"/token-guides/steth-superuser-functions",editUrl:"https://github.com/lidofinance/docs/blob/main/docs/token-guides/steth-superuser-functions.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Subgraph",permalink:"/integrations/subgraph"},next:{title:"Lido",permalink:"/contracts/lido"}},c=[{value:"Superuser privileges, accounts, and roles",id:"superuser-privileges-accounts-and-roles",children:[]},{value:"Superuser privileges decentralization",id:"superuser-privileges-decentralization",children:[]},{value:"Superuser actions thresholds",id:"superuser-actions-thresholds",children:[]},{value:"Superuser keys management",id:"superuser-keys-management",children:[]},{value:"Superuser keys generation procedure",id:"superuser-keys-generation-procedure",children:[]}],p={toc:c};function d(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"superuser-privileges-accounts-and-roles"},"Superuser privileges, accounts, and roles"),Object(s.b)("p",null,"StETH token is the upgradable contract behind ",Object(s.b)("inlineCode",{parentName:"p"},"AppProxyUpgradeable")," proxy at ",Object(s.b)("a",{parentName:"p",href:"https://etherscan.io/address/0xae7ab96520de3a18e5e111b5eaab095312d7fe84"},"https://etherscan.io/address/0xae7ab96520de3a18e5e111b5eaab095312d7fe84"),". Lido DAO can change the implementation with the successful DAO vote."),Object(s.b)("p",null,"StETH can be stopped by the DAO vote. No operations changing stETH balances can be performed on the stopped contract:"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},Object(s.b)("inlineCode",{parentName:"li"},"approve")," and ",Object(s.b)("inlineCode",{parentName:"li"},"transfer")," calls revert;"),Object(s.b)("li",{parentName:"ol"},"No mints or burns can be performed. Note that StETH contract can mint stETH only in two cases: user deposits (tokens are minted to the depositor's address) or fee distribution (where tokens are minted in accordance to fee calculations to the addresses set in the contract \u2014 namely the DAO treasury, the insurance fund and the Node Operator's reward addresses);"),Object(s.b)("li",{parentName:"ol"},"Users can't submit their ETH to the Lido;"),Object(s.b)("li",{parentName:"ol"},"Oracle can't push updates on the ETH2 staking state;"),Object(s.b)("li",{parentName:"ol"},"No ETH buffered in Lido can be sent to the ETH2 deposit contract;"),Object(s.b)("li",{parentName:"ol"},"Staking withdrawals (once available) can't be performed.")),Object(s.b)("p",null,"StETH contract specifies PAUSE_ROLE (address can pause the protocol) and BURN_ROLE (address can burn stETH tokens on any address). Both roles are assigned only to the DAO Voting contract ",Object(s.b)("a",{parentName:"p",href:"https://etherscan.io/address/0x2e59a20f205bb85a89c53f1936454680651e618e"},"https://etherscan.io/address/0x2e59a20f205bb85a89c53f1936454680651e618e"),". Note that there are other roles for DAO management, but they don't affect the token actions. These roles are MANAGE_FEE (set staking fee amount), MANAGE_WITHDRAWAL_KEY (set withdrawal credentials of the protocol), SET_ORACLE (set oracle contract address), SET_TREASURY (set DAO treasury address to send fee to), SET_INSURANCE_FUND (set DAO insurance address to send fee to). The roles and addresses can be checked in the Aragon UI ",Object(s.b)("a",{parentName:"p",href:"https://mainnet.lido.fi/#/lido-dao/permissions/app/0xae7ab96520de3a18e5e111b5eaab095312d7fe84"},"https://mainnet.lido.fi/#/lido-dao/permissions/app/0xae7ab96520de3a18e5e111b5eaab095312d7fe84")),Object(s.b)("p",null,"StETH is a rebasable token. It receives reports from the Oracle contract (",Object(s.b)("inlineCode",{parentName:"p"},"pushBeacon")," method) with the state of the protocol's ETH2 validators balances, and updates all the balances of stETH holders distributing the protocol's total staking rewards and penalties. The protocol employs distributed Oracle reporting: there are five Oracle daemons running by the Lido Node operators, and the Oracle smart contract formats beacon report on the consensus of three of five daemon reports. On top of the consensus mechanics, there are sanity checks for reports with sudden drops in total ETH2 balance or rewards with higher-than-possible APY. Current Oracle contract is ",Object(s.b)("a",{parentName:"p",href:"https://etherscan.io/address/0x442af784A788A5bd6F42A01Ebe9F287a871243fb"},"https://etherscan.io/address/0x442af784A788A5bd6F42A01Ebe9F287a871243fb"),". Note that: 1) DAO can set another address for the Oracle contact via vote; 2) Oracle implementation can change via vote."),Object(s.b)("h2",{id:"superuser-privileges-decentralization"},"Superuser privileges decentralization"),Object(s.b)("p",null,"The superuser privileges are managed by the Lido DAO's governance system. To enact any change the DAO has to have a successful vote."),Object(s.b)("p",null,"Oracles are: 1) limited in impact 2) distributed - there are five of them, all top-tier professional node operators."),Object(s.b)("h2",{id:"superuser-actions-thresholds"},"Superuser actions thresholds"),Object(s.b)("p",null,'The "superuser actions" with the StETH token are performed via DAO votes. The votes are managed by the Aragon voting. Voting power is proportional to the addresses\' LDO token balance (',Object(s.b)("a",{parentName:"p",href:"https://etherscan.io/token/0x5a98fcbea516cf06857215779fd812ca3bef1b32"},"https://etherscan.io/token/0x5a98fcbea516cf06857215779fd812ca3bef1b32"),'). For the voting to pass successfully, it should: 1) get at least 5% of the total LDOs to be cast "for" the vote; 2) get at least 50% of votes cast "for" the vote. The voting duration is 24 hours.'),Object(s.b)("p",null,"There are five Oracle daemons running by the Lido Node operators, with 3 of 5 needed to agree on the data they provide. On top of the consensus mechanics, there are sanity checks for reports with sudden drops in total ETH2 balance or rewards with higher-than-possible APY."),Object(s.b)("h2",{id:"superuser-keys-management"},"Superuser keys management"),Object(s.b)("p",null,"Token management roles belong to smart contracts, and any changes in roles must pass through the successful DAO vote."),Object(s.b)("p",null,"Oracle operators are: Stakefish, Certus One, Chorus One, Staking Facilities, P2P Validator."),Object(s.b)("h2",{id:"superuser-keys-generation-procedure"},"Superuser keys generation procedure"),Object(s.b)("p",null,"There was no special keygen ceremony, as the permissions are managed by smart contracts. The votes can be cast by the EOAs and smart contracts with the voting power proportional to the addresses' LDO balance."))}d.isMDXComponent=!0},95:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),d=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=d(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=d(r),h=n,b=u["".concat(o,".").concat(h)]||u[h]||l[h]||s;return r?a.a.createElement(b,i(i({ref:t},p),{},{components:r})):a.a.createElement(b,i({ref:t},p))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<s;p++)o[p]=r[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"}}]);