(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[22],{7908:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/diary/[diary_id]",function(){return n(8694)}])},9803:function(t){"use strict";t.exports={output:"export"}},8694:function(t,e,n){"use strict";n.r(e);var c=n(5893),a=n(5882),s=n(1163),u=n(7294);e.default=function(){let{diary_id:t}=(0,s.useRouter)().query,[e,n]=(0,u.useState)({text:""});return(0,u.useEffect)(()=>{(async()=>{void 0!==t&&n(await a.e.fetch_yaml("/content/diary/"+t+".yaml"))})()},[t]),(0,c.jsx)("div",{className:"w-full p-2 text-white text-left",children:e.text})}},5882:function(t,e,n){"use strict";n.d(e,{e:function(){return s}});var c=n(9803);let a=c.basePath?c.basePath:"";class s{static async fetch_yaml(t){let e;return await fetch(a+t).then(t=>t.blob()).then(t=>t.text()).then(t=>{e=t}).catch(t=>(console.log(t),"NaN")),n(3320).load(e)}static async fetch_files_list(t){}}},1163:function(t,e,n){t.exports=n(2937)}},function(t){t.O(0,[320,774,888,179],function(){return t(t.s=7908)}),_N_E=t.O()}]);