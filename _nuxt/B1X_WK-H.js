import{d as v,r as l,a5 as g,c as s,e as n,F as x,X as _,f as u,h as k,a3 as y,n as I,t as T,M as C,k as $}from"./CW3aNrQ3.js";const B={class:"tabs-header"},N=["onClick"],S=v({__name:"TabsHeader",props:{tabs:{type:Array,required:!0},activeTabIndex:{type:Number,required:!0}},emits:["update:activeTabIndex"],setup(t,{emit:f}){const h=t,m=f,r=l(),i=l(),d=e=>{e&&(i.value.style.insetInlineStart=`${e.offsetLeft}px`,i.value.style.width=`${e.clientWidth}px`)},p=(e,a)=>{m("update:activeTabIndex",a),C(()=>d(e.target))};return g(r,e=>{e&&setTimeout(()=>{d(r.value.children[h.activeTabIndex])},50)},{immediate:!0}),(e,a)=>(s(),n("div",B,[t.tabs?(s(),n("div",{key:0,ref_key:"tabsRef",ref:r,class:"tabs"},[(s(!0),n(x,null,_(t.tabs,({label:c},o)=>(s(),n("button",{key:`${o}${c}`,class:I([t.activeTabIndex===o?"active":"not-active"]),onClick:b=>p(b,o)},T(c),11,N))),128)),u("span",{ref_key:"highlightUnderline",ref:i,class:"highlight-underline"},a[0]||(a[0]=[u("span",{class:"tab"},null,-1)]),512)],512)):k("",!0),y(e.$slots,"footer",{},void 0,!0)]))}}),q=$(S,[["__scopeId","data-v-ca86ada1"]]);export{q as default};
