import{f as i}from"./76o_WpOd.js";import{d as u,a6 as f,G as c,K as l,a7 as d}from"./CW3aNrQ3.js";const y=u({name:"MDCSlot",functional:!0,props:{name:{type:String,default:"default"},unwrap:{type:[Boolean,String],default:!1},use:{type:Function,default:void 0}},setup(t){const{parent:s}=d(),{default:n}=f(),r=c(()=>typeof t.unwrap=="string"?t.unwrap.split(" "):["*"]);return{fallbackSlot:n,tags:r,parent:s}},render({use:t,unwrap:s,fallbackSlot:n,tags:r,parent:e}){var a;try{let o=t;return typeof t=="string"&&(o=(e==null?void 0:e.slots[t])||((a=e==null?void 0:e.parent)==null?void 0:a.slots[t]),console.warn(`Please set :use="$slots.${t}" in <MDCSlot> component to enable reactivity`)),o?s?i(o(),r):[o()]:n?n():l("div")}catch{return l("div")}}});export{y as _};
