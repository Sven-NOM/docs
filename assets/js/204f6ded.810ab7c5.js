"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6505],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,k=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9911:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const r={},l="Protocol levers",o={unversionedId:"guides/protocol-levers",id:"guides/protocol-levers",title:"Protocol levers",description:"The protocol provides a number of settings controllable by the DAO. Modifying each of them requires",source:"@site/docs/guides/protocol-levers.md",sourceDirName:"guides",slug:"/guides/protocol-levers",permalink:"/guides/protocol-levers",editUrl:"https://github.com/lidofinance/docs/blob/main/docs/guides/protocol-levers.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Multisig deployment",permalink:"/guides/multisig-deployment"},next:{title:"DAO voting with Etherscan",permalink:"/guides/etherscan-voting"}},s=[{value:"A note on upgradeability",id:"a-note-on-upgradeability",children:[],level:3},{value:"Lido",id:"lido",children:[{value:"Burning stETH tokens",id:"burning-steth-tokens",children:[],level:3},{value:"Pausing",id:"pausing",children:[],level:3},{value:"Override deposited validators counter",id:"override-deposited-validators-counter",children:[],level:3},{value:"Oracle report",id:"oracle-report",children:[],level:3},{value:"Deposit access control",id:"deposit-access-control",children:[],level:3},{value:"Deposit loop iteration limit",id:"deposit-loop-iteration-limit",children:[],level:3},{value:"Execution layer rewards",id:"execution-layer-rewards",children:[],level:3},{value:"Staking rate limiting",id:"staking-rate-limiting",children:[],level:3}],level:2},{value:"StakingRouter",id:"stakingrouter",children:[{value:"Fee",id:"fee",children:[],level:3},{value:"Fee distribution",id:"fee-distribution",children:[],level:3},{value:"Ethereum withdrawal Credentials",id:"ethereum-withdrawal-credentials",children:[],level:3}],level:2},{value:"NodeOperatorsRegistry",id:"nodeoperatorsregistry",children:[{value:"Node Operators list",id:"node-operators-list",children:[],level:3},{value:"Deactivating a node operator",id:"deactivating-a-node-operator",children:[],level:3},{value:"Managing node operator\u2019s signing keys",id:"managing-node-operators-signing-keys",children:[],level:3},{value:"Reporting new stopped validators",id:"reporting-new-stopped-validators",children:[],level:3}],level:2},{value:"LegacyOracle",id:"legacyoracle",children:[{value:"Lido",id:"lido-1",children:[],level:3},{value:"Members list",id:"members-list",children:[],level:3},{value:"The quorum",id:"the-quorum",children:[],level:3},{value:"Sanity check",id:"sanity-check",children:[],level:3},{value:"Current reporting status",id:"current-reporting-status",children:[],level:3},{value:"Expected epoch",id:"expected-epoch",children:[],level:3},{value:"Version of the contract",id:"version-of-the-contract",children:[],level:3},{value:"Beacon specification",id:"beacon-specification",children:[],level:3},{value:"Current epoch",id:"current-epoch",children:[],level:3},{value:"Supplemental epoch information",id:"supplemental-epoch-information",children:[],level:3},{value:"Last completed epoch",id:"last-completed-epoch",children:[],level:3},{value:"Supplemental rewards information",id:"supplemental-rewards-information",children:[],level:3}],level:2}],p={toc:s};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"protocol-levers"},"Protocol levers"),(0,i.kt)("p",null,"The protocol provides a number of settings controllable by the DAO. Modifying each of them requires\nthe caller to have a specific permission. After deploying the DAO, all permissions belong to either DAO ",(0,i.kt)("inlineCode",{parentName:"p"},"Voting")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Agent")," apps,\nwhich can also manage them. This means that, initially, levers can only be changed by\nthe DAO voting, and other entities can be allowed to do the same only as a result of the voting."),(0,i.kt)("p",null,"All existing levers are listed below, grouped by the contract."),(0,i.kt)("h3",{id:"a-note-on-upgradeability"},"A note on upgradeability"),(0,i.kt)("p",null,"The following contracts are upgradeable by the DAO voting:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/contracts/lido-locator"},(0,i.kt)("inlineCode",{parentName:"a"},"LidoLocator"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/contracts/lido"},(0,i.kt)("inlineCode",{parentName:"a"},"Lido"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/contracts/staking-router"},(0,i.kt)("inlineCode",{parentName:"a"},"StakingRouter"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/contracts/node-operators-registry"},(0,i.kt)("inlineCode",{parentName:"a"},"NodeOperatorsRegistry"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/contracts/accounting-oracle"},(0,i.kt)("inlineCode",{parentName:"a"},"AccountingOracle"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/contracts/validators-exit-bus-oracle"},(0,i.kt)("inlineCode",{parentName:"a"},"ValidatorsExitBusOracle"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/contracts/withdrawal-vault"},(0,i.kt)("inlineCode",{parentName:"a"},"WithdrawalVault"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/contracts/withdrawal-queue-erc721"},(0,i.kt)("inlineCode",{parentName:"a"},"WithdrawalQueueERC721"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/contracts/legacy-oracle"},(0,i.kt)("inlineCode",{parentName:"a"},"LegacyOracle")))),(0,i.kt)("p",null,"Upgradeability is implemented either by the Aragon kernel and base contracts OR by the ",(0,i.kt)("a",{parentName:"p",href:"/contracts/ossifiable-proxy"},"OssifiableProxy")," instances.\nTo upgrade an Aragon app, one needs the ",(0,i.kt)("inlineCode",{parentName:"p"},"dao.APP_MANAGER_ROLE")," permission provided by Aragon.\nTo upgrade an ",(0,i.kt)("inlineCode",{parentName:"p"},"OssifiableProxy")," implementation, one needs to be an owner of the proxy.\nAs it was said previously, both belong either to the DAO ",(0,i.kt)("inlineCode",{parentName:"p"},"Voting")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Agent")," apps."),(0,i.kt)("p",null,"All upgradeable contracts use the ",(0,i.kt)("a",{parentName:"p",href:"https://blog.openzeppelin.com/upgradeability-using-unstructured-storage"},"Unstructured Storage pattern")," in order to provide stable storage structure across upgrades."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Some of the contracts still contain structured storage data, hence the order of inheritance always matters."))),(0,i.kt)("h2",{id:"lido"},(0,i.kt)("a",{parentName:"h2",href:"/contracts/lido"},"Lido")),(0,i.kt)("h3",{id:"burning-steth-tokens"},"Burning stETH tokens"),(0,i.kt)("p",null,"There is a dedicated contract responsible for ",(0,i.kt)("inlineCode",{parentName:"p"},"stETH")," tokens burning.\nThe burning itself is a part of the core protocol procedures:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"deduct underlying finalized withdrawal request ",(0,i.kt)("inlineCode",{parentName:"li"},"stETH"),", see ",(0,i.kt)("a",{parentName:"li",href:"/contracts/lido#handleOracleReport"},(0,i.kt)("inlineCode",{parentName:"a"},"Lido.handleOracleReport"))),(0,i.kt)("li",{parentName:"ul"},"penalize delinquent node operators by halving their rewards, see ",(0,i.kt)("a",{parentName:"li",href:"/contracts/node-operators-registry#_distributeRewards"},"`NodeOperatorsRegistry._distributeRewards"))),(0,i.kt)("p",null,"These responsibilities are controlled by the ",(0,i.kt)("inlineCode",{parentName:"p"},"REQUEST_BURN_SHARES_ROLE")," role which is assigned to both\n",(0,i.kt)("a",{parentName:"p",href:"/contracts/lido"},(0,i.kt)("inlineCode",{parentName:"a"},"Lido"))," and ",(0,i.kt)("a",{parentName:"p",href:"/contracts/node-operators-registry"},(0,i.kt)("inlineCode",{parentName:"a"},"NodeOperatorsRegistry"))," contracts.\nThis role should not be ever permanently assigned to another entities."),(0,i.kt)("p",null,"Apart from this, ",(0,i.kt)("inlineCode",{parentName:"p"},"stETH")," token burning can be applied to compensate for penalties/slashing losses by the DAO decision.\nIt's possible via more restrictive role ",(0,i.kt)("inlineCode",{parentName:"p"},"REQUEST_BURN_MY_STETH_ROLE")," which is currently unassigned."),(0,i.kt)("p",null,"The key difference that despite of both roles rely on the ",(0,i.kt)("inlineCode",{parentName:"p"},"stETH")," allowance provided to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Burner")," contract,\nthe latter allows token burning only from the request originator balance."),(0,i.kt)("h3",{id:"pausing"},"Pausing"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mutator: ",(0,i.kt)("inlineCode",{parentName:"li"},"stop()"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Permission required: ",(0,i.kt)("inlineCode",{parentName:"li"},"PAUSE_ROLE")))),(0,i.kt)("li",{parentName:"ul"},"Mutator: ",(0,i.kt)("inlineCode",{parentName:"li"},"resume()"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Permission required: ",(0,i.kt)("inlineCode",{parentName:"li"},"RESUME_ROLE")))),(0,i.kt)("li",{parentName:"ul"},"Accessor: ",(0,i.kt)("inlineCode",{parentName:"li"},"isStopped() returns (bool)"))),(0,i.kt)("p",null,"When paused, ",(0,i.kt)("inlineCode",{parentName:"p"},"Lido")," doesn't accept user submissions, doesn't allow user withdrawals and oracle\nreport submissions. No token actions (burning, transferring, approving transfers and changing\nallowances) are allowed. The following transactions revert:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"plain Ether transfers to ",(0,i.kt)("inlineCode",{parentName:"li"},"Lido"),";"),(0,i.kt)("li",{parentName:"ul"},"calls to ",(0,i.kt)("inlineCode",{parentName:"li"},"submit(address)"),";"),(0,i.kt)("li",{parentName:"ul"},"calls to ",(0,i.kt)("inlineCode",{parentName:"li"},"deposit(uint256, uint256, bytes)"),";"),(0,i.kt)("li",{parentName:"ul"},"calls to ",(0,i.kt)("inlineCode",{parentName:"li"},"handleOracleReport(...)"),";"),(0,i.kt)("li",{parentName:"ul"},"calls to ",(0,i.kt)("inlineCode",{parentName:"li"},"transfer(address, uint256)"),";"),(0,i.kt)("li",{parentName:"ul"},"calls to ",(0,i.kt)("inlineCode",{parentName:"li"},"transferFrom(address, address, uint256)"),";"),(0,i.kt)("li",{parentName:"ul"},"calls to ",(0,i.kt)("inlineCode",{parentName:"li"},"transferShares(address, uint256)"),";"),(0,i.kt)("li",{parentName:"ul"},"calls to ",(0,i.kt)("inlineCode",{parentName:"li"},"transferSharesFrom(address, uint256)"),";"),(0,i.kt)("li",{parentName:"ul"},"calls to ",(0,i.kt)("inlineCode",{parentName:"li"},"approve(address, uint256)"),";"),(0,i.kt)("li",{parentName:"ul"},"calls to ",(0,i.kt)("inlineCode",{parentName:"li"},"increaseAllowance(address, uint256)"),";"),(0,i.kt)("li",{parentName:"ul"},"calls to ",(0,i.kt)("inlineCode",{parentName:"li"},"decreaseAllowance(address, uint256)"),".")),(0,i.kt)("p",null,"As a consequence of the list above:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"calls to ",(0,i.kt)("inlineCode",{parentName:"li"},"WithdrawalQueueERC721.requestWithdrawals(uint256[] calldata, address)"),", and its variants;"),(0,i.kt)("li",{parentName:"ul"},"calls to ",(0,i.kt)("inlineCode",{parentName:"li"},"wstETH.wrap(uint256)")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"wstETH.unwrap(uint256)"),";"),(0,i.kt)("li",{parentName:"ul"},"calls to ",(0,i.kt)("inlineCode",{parentName:"li"},"Burner.requestBurnShares"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Burner.requestBurnMyStETH"),", and its variants;")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"External stETH/wstETH DeFi integrations are directly affected as well."))),(0,i.kt)("h3",{id:"override-deposited-validators-counter"},"Override deposited validators counter"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mutator: ",(0,i.kt)("inlineCode",{parentName:"li"},"unsafeChangeDepositedValidators(uint256)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Permission required: ",(0,i.kt)("inlineCode",{parentName:"li"},"UNSAFE_CHANGE_DEPOSITED_VALIDATORS_ROLE"))))),(0,i.kt)("p",null,"The method unsafely changes deposited validator counter.\nCan be required when onboarding external validators to Lido (i.e., had deposited before and rotated their type-0x00 withdrawal credentials to Lido)."),(0,i.kt)("p",null,"The incorrect values might disrupt protocol operation."),(0,i.kt)("h3",{id:"oracle-report"},"Oracle report"),(0,i.kt)("p",null,"TODO: oracle reports are committee-driven"),(0,i.kt)("h3",{id:"deposit-access-control"},"Deposit access control"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Lido.deposit")," method performs an actual deposit (stake) of buffered ether to Consensus Layer\nundergoing through ",(0,i.kt)("inlineCode",{parentName:"p"},"StakingRouter"),", its selected module, and the official Ethereum deposit contract in the end."),(0,i.kt)("p",null,"The method can be called only by ",(0,i.kt)("inlineCode",{parentName:"p"},"DepositSecurityModule")," since access control is a part of the deposits frontrunning vulnerability mitigation."),(0,i.kt)("p",null,"Please see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/lidofinance/lido-improvement-proposals/blob/develop/LIPS/lip-5.md"},"LIP-5")," for more details."),(0,i.kt)("h3",{id:"deposit-loop-iteration-limit"},"Deposit loop iteration limit"),(0,i.kt)("p",null,"Controls how many Ethereum deposits can be made in a single transaction."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"_maxDepositsCount")," parameter of the ",(0,i.kt)("inlineCode",{parentName:"li"},"deposit(uint256 _maxDepositsCount, uint256 _stakingModuleId, bytes _depositCalldata)")," function"),(0,i.kt)("li",{parentName:"ul"},"Default value: ",(0,i.kt)("inlineCode",{parentName:"li"},"16")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/lidofinance/lido-dao/blob/master/test/scenario/lido_deposit_iteration_limit.js"},"Scenario test"))),(0,i.kt)("p",null,"When DSM calls ",(0,i.kt)("inlineCode",{parentName:"p"},"depositBufferedEther"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Lido")," tries to register as many Ethereum validators\nas it can given the buffered Ether amount. The limit is passed as an argument to this function and\nis needed to prevent the transaction from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ConsenSys/smart-contract-best-practices/blob/8f99aef/docs/known_attacks.md#gas-limit-dos-on-a-contract-via-unbounded-operations"},"failing due to the block gas limit"),", which is possible\nif the amount of the buffered Ether becomes sufficiently large."),(0,i.kt)("h3",{id:"execution-layer-rewards"},"Execution layer rewards"),(0,i.kt)("p",null,"Lido implements an architecture design which was proposed in the Lido Improvement Proposal ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/lidofinance/lido-improvement-proposals/blob/develop/LIPS/lip-12.md"},"#12")," to collect the execution level rewards (starting from the Merge hardfork) and distribute them as part of the Lido Oracle report."),(0,i.kt)("p",null,"These execution layer rewards are initially accumulated on the dedicated ",(0,i.kt)("a",{parentName:"p",href:"/contracts/lido-execution-layer-rewards-vault"},(0,i.kt)("inlineCode",{parentName:"a"},"LidoExecutionLayerRewardsVault"))," contract and consists of priority fees and MEV."),(0,i.kt)("p",null,"There is an additional limit to prevent drastical token rebase events.\nSee the following issue: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/lidofinance/lido-dao/issues/405"},(0,i.kt)("inlineCode",{parentName:"a"},"#405"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Mutator: ",(0,i.kt)("inlineCode",{parentName:"p"},"setELRewardsVault()")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Permission required: ",(0,i.kt)("inlineCode",{parentName:"li"},"SET_EL_REWARDS_VAULT_ROLE")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Mutator: ",(0,i.kt)("inlineCode",{parentName:"p"},"setELRewardsWithdrawalLimit()")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Permission required: ",(0,i.kt)("inlineCode",{parentName:"li"},"SET_EL_REWARDS_WITHDRAWAL_LIMIT_ROLE")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Accessors:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getELRewardsVault()"),";"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getELRewardsWithdrawalLimit()"),".")))),(0,i.kt)("h3",{id:"staking-rate-limiting"},"Staking rate limiting"),(0,i.kt)("p",null,"Lido features a safeguard mechanism to prevent huge APR losses facing the ",(0,i.kt)("a",{parentName:"p",href:"https://blog.lido.fi/modelling-the-entry-queue-post-merge-an-analysis-of-impacts-on-lidos-socialized-model/"},"post-merge entry queue demand"),"."),(0,i.kt)("p",null,"New staking requests could be rate-limited with a soft moving cap for the stake amount per desired period."),(0,i.kt)("p",null,"Limit explanation scheme:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"    * \u25b2 Stake limit\n    * \u2502.....  .....   ........ ...            ....     ... Stake limit = max\n    * \u2502      .       .        .   .   .      .    . . .\n    * \u2502     .       .              . .  . . .      . .\n    * \u2502            .                .  . . .\n    * \u2502\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500> Time\n    * \u2502     ^      ^          ^   ^^^  ^ ^ ^     ^^^ ^     Stake events\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Mutators: ",(0,i.kt)("inlineCode",{parentName:"p"},"resumeStaking()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"setStakingLimit(uint256, uint256)"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"removeStakingLimit()")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Permission required: ",(0,i.kt)("inlineCode",{parentName:"li"},"STAKING_CONTROL_ROLE")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Mutator: ",(0,i.kt)("inlineCode",{parentName:"p"},"pauseStaking()")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Permission required: ",(0,i.kt)("inlineCode",{parentName:"li"},"STAKING_PAUSE_ROLE")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Accessors:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"isStakingPaused()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getCurrentStakeLimit()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getStakeLimitFullInfo()"))))),(0,i.kt)("p",null,"When staking is paused, ",(0,i.kt)("inlineCode",{parentName:"p"},"Lido")," doesn't accept user submissions. The following transactions revert:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Plain Ether transfers;"),(0,i.kt)("li",{parentName:"ul"},"calls to ",(0,i.kt)("inlineCode",{parentName:"li"},"submit(address)"),".")),(0,i.kt)("p",null,"For details, see the Lido Improvement Proposal ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/lidofinance/lido-improvement-proposals/blob/develop/LIPS/lip-14.md"},"#14"),"."),(0,i.kt)("h2",{id:"stakingrouter"},(0,i.kt)("a",{parentName:"h2",href:"/contracts/staking-router"},"StakingRouter")),(0,i.kt)("h3",{id:"fee"},"Fee"),(0,i.kt)("p",null,"The total fee, in basis points (",(0,i.kt)("inlineCode",{parentName:"p"},"10000")," corresponding to ",(0,i.kt)("inlineCode",{parentName:"p"},"100%"),")."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mutator: ",(0,i.kt)("inlineCode",{parentName:"li"},"setFee(uint16)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Permission required: ",(0,i.kt)("inlineCode",{parentName:"li"},"MANAGE_FEE")))),(0,i.kt)("li",{parentName:"ul"},"Accessor: ",(0,i.kt)("inlineCode",{parentName:"li"},"getFee() returns (uint16)"))),(0,i.kt)("p",null,"The fee is taken on staking rewards and distributed between the treasury, the insurance fund, and\nnode operators."),(0,i.kt)("h3",{id:"fee-distribution"},"Fee distribution"),(0,i.kt)("p",null,"Controls how the fee is distributed between the treasury, the insurance fund, and node operators.\nEach fee component is in basis points; the sum of all components must add up to 1 (",(0,i.kt)("inlineCode",{parentName:"p"},"10000")," basis points)."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mutator: ",(0,i.kt)("inlineCode",{parentName:"li"},"setFeeDistribution(uint16 treasury, uint16 insurance, uint16 operators)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Permission required: ",(0,i.kt)("inlineCode",{parentName:"li"},"MANAGE_FEE")))),(0,i.kt)("li",{parentName:"ul"},"Accessor: ",(0,i.kt)("inlineCode",{parentName:"li"},"getFeeDistribution() returns (uint16 treasury, uint16 insurance, uint16 operators)"))),(0,i.kt)("h3",{id:"ethereum-withdrawal-credentials"},"Ethereum withdrawal Credentials"),(0,i.kt)("p",null,"Credentials to withdraw ETH on the Execution Layer side"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mutator: ",(0,i.kt)("inlineCode",{parentName:"li"},"setWithdrawalCredentials(bytes)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Permission required: ",(0,i.kt)("inlineCode",{parentName:"li"},"MANAGE_WITHDRAWAL_KEY")))),(0,i.kt)("li",{parentName:"ul"},"Accessor: ",(0,i.kt)("inlineCode",{parentName:"li"},"getWithdrawalCredentials() returns (bytes)"))),(0,i.kt)("p",null,"The protocol uses these credentials to register new Ethereum validators."),(0,i.kt)("h2",{id:"nodeoperatorsregistry"},(0,i.kt)("a",{parentName:"h2",href:"/contracts/node-operators-registry"},"NodeOperatorsRegistry")),(0,i.kt)("h3",{id:"node-operators-list"},"Node Operators list"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mutator: ",(0,i.kt)("inlineCode",{parentName:"li"},"addNodeOperator(string _name, address _rewardAddress, uint64 _stakingLimit)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Permission required: ",(0,i.kt)("inlineCode",{parentName:"li"},"ADD_NODE_OPERATOR_ROLE")))),(0,i.kt)("li",{parentName:"ul"},"Mutator: ",(0,i.kt)("inlineCode",{parentName:"li"},"setNodeOperatorName(uint256 _id, string _name)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Permission required: ",(0,i.kt)("inlineCode",{parentName:"li"},"SET_NODE_OPERATOR_NAME_ROLE")))),(0,i.kt)("li",{parentName:"ul"},"Mutator: ",(0,i.kt)("inlineCode",{parentName:"li"},"setNodeOperatorRewardAddress(uint256 _id, address _rewardAddress)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Permission required: ",(0,i.kt)("inlineCode",{parentName:"li"},"SET_NODE_OPERATOR_ADDRESS_ROLE")))),(0,i.kt)("li",{parentName:"ul"},"Mutator: ",(0,i.kt)("inlineCode",{parentName:"li"},"setNodeOperatorStakingLimit(uint256 _id, uint64 _stakingLimit)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Permission required: ",(0,i.kt)("inlineCode",{parentName:"li"},"SET_NODE_OPERATOR_LIMIT_ROLE"))))),(0,i.kt)("p",null,"Node Operators act as validators on the Beacon chain for the benefit of the protocol. Each\nnode operator submits no more than ",(0,i.kt)("inlineCode",{parentName:"p"},"_stakingLimit")," signing keys that will be used later\nby the protocol for registering the corresponding Ethereum validators. As oracle committee\nreports rewards on the Ethereum side, the fee is taken on these rewards, and part of that fee\nis sent to node operators\u2019 reward addresses (",(0,i.kt)("inlineCode",{parentName:"p"},"_rewardAddress"),")."),(0,i.kt)("h3",{id:"deactivating-a-node-operator"},"Deactivating a node operator"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mutator: ",(0,i.kt)("inlineCode",{parentName:"li"},"setNodeOperatorActive(uint256 _id, bool _active)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Permission required: ",(0,i.kt)("inlineCode",{parentName:"li"},"SET_NODE_OPERATOR_ACTIVE_ROLE"))))),(0,i.kt)("p",null,"Misbehaving node operators can be deactivated by calling this function. The protocol skips\ndeactivated operators during validator registration; also, deactivated operators don\u2019t\ntake part in fee distribution."),(0,i.kt)("h3",{id:"managing-node-operators-signing-keys"},"Managing node operator\u2019s signing keys"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mutator: ",(0,i.kt)("inlineCode",{parentName:"li"},"addSigningKeys(uint256 _operator_id, uint256 _quantity, bytes _pubkeys, bytes _signatures)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Permission required: ",(0,i.kt)("inlineCode",{parentName:"li"},"MANAGE_SIGNING_KEYS")))),(0,i.kt)("li",{parentName:"ul"},"Mutator: ",(0,i.kt)("inlineCode",{parentName:"li"},"removeSigningKey(uint256 _operator_id, uint256 _index)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Permission required: ",(0,i.kt)("inlineCode",{parentName:"li"},"MANAGE_SIGNING_KEYS"))))),(0,i.kt)("p",null,"Allow to manage signing keys for the given node operator."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Signing keys can also be managed by the reward address of a signing provider by calling\nthe equivalent functions with the ",(0,i.kt)("inlineCode",{parentName:"p"},"OperatorBH")," suffix: ",(0,i.kt)("inlineCode",{parentName:"p"},"addSigningKeysOperatorBH"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"removeSigningKeyOperatorBH"),".")),(0,i.kt)("h3",{id:"reporting-new-stopped-validators"},"Reporting new stopped validators"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mutator: ",(0,i.kt)("inlineCode",{parentName:"li"},"reportStoppedValidators(uint256 _id, uint64 _stoppedIncrement)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Permission required: ",(0,i.kt)("inlineCode",{parentName:"li"},"REPORT_STOPPED_VALIDATORS_ROLE"))))),(0,i.kt)("p",null,"Allows to report that ",(0,i.kt)("inlineCode",{parentName:"p"},"_stoppedIncrement")," more validators of a node operator have become stopped."),(0,i.kt)("h2",{id:"legacyoracle"},(0,i.kt)("a",{parentName:"h2",href:"/contracts/legacy-oracle"},"LegacyOracle")),(0,i.kt)("h3",{id:"lido-1"},"Lido"),(0,i.kt)("p",null,"Address of the Lido contract."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Accessor: ",(0,i.kt)("inlineCode",{parentName:"li"},"getLido() returns (address)"))),(0,i.kt)("h3",{id:"members-list"},"Members list"),(0,i.kt)("p",null,"The list of oracle committee members."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mutators: ",(0,i.kt)("inlineCode",{parentName:"li"},"addOracleMember(address)"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"removeOracleMember(address)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Permission required: ",(0,i.kt)("inlineCode",{parentName:"li"},"MANAGE_MEMBERS")))),(0,i.kt)("li",{parentName:"ul"},"Accessor: ",(0,i.kt)("inlineCode",{parentName:"li"},"getOracleMembers() returns (address[])"))),(0,i.kt)("h3",{id:"the-quorum"},"The quorum"),(0,i.kt)("p",null,"The number of exactly the same reports needed to finalize the epoch."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mutator: ",(0,i.kt)("inlineCode",{parentName:"li"},"setQuorum(uint256)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Permission required: ",(0,i.kt)("inlineCode",{parentName:"li"},"MANAGE_QUORUM")))),(0,i.kt)("li",{parentName:"ul"},"Accessor: ",(0,i.kt)("inlineCode",{parentName:"li"},"getQuorum() returns (uint256)"))),(0,i.kt)("p",null,"When the ",(0,i.kt)("inlineCode",{parentName:"p"},"quorum")," number of the same reports is collected for the current epoch,"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the epoch is finalized (no more reports are accepted for it),"),(0,i.kt)("li",{parentName:"ul"},"the final report is pushed to the Lido,"),(0,i.kt)("li",{parentName:"ul"},"statistics collected and the ",(0,i.kt)("a",{parentName:"li",href:"#sanity-check"},"sanity check")," is evaluated,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#beacon-report-receiver"},"beacon report receiver")," is called.")),(0,i.kt)("h3",{id:"sanity-check"},"Sanity check"),(0,i.kt)("p",null,"To make oracles less dangerous, we can limit rewards report by 0.1% increase in stake and 15%\ndecrease in stake, with both values configurable by the governance in case of extremely unusual\ncircumstances."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mutators: ",(0,i.kt)("inlineCode",{parentName:"li"},"setAllowedBeaconBalanceAnnualRelativeIncrease(uint256)")," and\n",(0,i.kt)("inlineCode",{parentName:"li"},"setAllowedBeaconBalanceRelativeDecrease(uint256)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Permission required: ",(0,i.kt)("inlineCode",{parentName:"li"},"SET_REPORT_BOUNDARIES")))),(0,i.kt)("li",{parentName:"ul"},"Accessors: ",(0,i.kt)("inlineCode",{parentName:"li"},"getAllowedBeaconBalanceAnnualRelativeIncrease() returns (uint256)")," and\n",(0,i.kt)("inlineCode",{parentName:"li"},"getAllowedBeaconBalanceRelativeDecrease() returns (uint256)"))),(0,i.kt)("h3",{id:"current-reporting-status"},"Current reporting status"),(0,i.kt)("p",null,'For transparency we provide accessors to return status of the oracle daemons reporting for the\ncurrent "',(0,i.kt)("a",{parentName:"p",href:"#expected-epoch"},"expected epoch"),'".'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Accessors:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getCurrentOraclesReportStatus() returns (uint256)")," - returns the current reporting bitmap,\nrepresenting oracles who have already pushed their version of report during the ",(0,i.kt)("a",{parentName:"li",href:"#expected-epoch"},"expected"),"\nepoch, every oracle bit corresponds to the index of the oracle in the current members list,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getCurrentReportVariantsSize() returns (uint256)")," - returns the current reporting variants\narray size,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getCurrentReportVariant(uint256 _index) returns (uint64 beaconBalance, uint32 beaconValidators, uint16 count)")," - returns the current reporting array element with the given\nindex.")))),(0,i.kt)("h3",{id:"expected-epoch"},"Expected epoch"),(0,i.kt)("p",null,"The oracle daemons may provide their reports only for the one epoch in every frame: the first\none. The following accessor can be used to look up the current epoch that this contract expects\nreports."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Accessor: ",(0,i.kt)("inlineCode",{parentName:"li"},"getExpectedEpochId() returns (uint256)"),".")),(0,i.kt)("p",null,"Note that any later epoch, that has already come ",(0,i.kt)("em",{parentName:"p"},"and")," is also the first epoch of its frame, is\nalso eligible for reporting. If some oracle daemon reports it, the contract discards any results of\nthis epoch and advances to the just reported one."),(0,i.kt)("h3",{id:"version-of-the-contract"},"Version of the contract"),(0,i.kt)("p",null,"Returns the initialized version of this contract starting from 0."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Accessor: ",(0,i.kt)("inlineCode",{parentName:"li"},"getVersion() returns (uint256)"),".")),(0,i.kt)("h3",{id:"beacon-specification"},"Beacon specification"),(0,i.kt)("p",null,"Sets and queries configurable beacon chain specification."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mutator: ",(0,i.kt)("inlineCode",{parentName:"li"},"setBeaconSpec( uint64 _epochsPerFrame, uint64 _slotsPerEpoch, uint64 _secondsPerSlot, uint64 _genesisTime )"),",",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Permission required: ",(0,i.kt)("inlineCode",{parentName:"li"},"SET_BEACON_SPEC"),","))),(0,i.kt)("li",{parentName:"ul"},"Accessor: ",(0,i.kt)("inlineCode",{parentName:"li"},"getBeaconSpec() returns (uint64 epochsPerFrame, uint64 slotsPerEpoch, uint64 secondsPerSlot, uint64 genesisTime)"),".")),(0,i.kt)("h3",{id:"current-epoch"},"Current epoch"),(0,i.kt)("p",null,"Returns the epoch calculated from current timestamp."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Accessor: ",(0,i.kt)("inlineCode",{parentName:"li"},"getCurrentEpochId() returns (uint256)"),".")),(0,i.kt)("h3",{id:"supplemental-epoch-information"},"Supplemental epoch information"),(0,i.kt)("p",null,"Returns currently reportable epoch (the first epoch of the current frame) as well as its start and\nend times in seconds."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Accessor: ",(0,i.kt)("inlineCode",{parentName:"li"},"getCurrentFrame() returns (uint256 frameEpochId, uint256 frameStartTime, uint256 frameEndTime)"),".")),(0,i.kt)("h3",{id:"last-completed-epoch"},"Last completed epoch"),(0,i.kt)("p",null,"Return the last epoch that has been pushed to Lido."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Accessor: ",(0,i.kt)("inlineCode",{parentName:"li"},"getLastCompletedEpochId() returns (uint256)"),".")),(0,i.kt)("h3",{id:"supplemental-rewards-information"},"Supplemental rewards information"),(0,i.kt)("p",null,"Reports beacon balance and its change during the last frame."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Accessor: ",(0,i.kt)("inlineCode",{parentName:"li"},"getLastCompletedReportDelta() returns (uint256 postTotalPooledEther, uint256 preTotalPooledEther, uint256 timeElapsed)"),".")))}d.isMDXComponent=!0}}]);