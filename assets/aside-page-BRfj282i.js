import{Q as o,m as t,B as c,X as f,I as x,a as u,ad as n,ai as h,aj as g,ak as d,o as p,al as w,C as m}from"./index-CeMDo-tv.js";const v=()=>c({class:"m-2",variant:"ghost",click:(e,{state:a})=>a.toggle("expanded")},[f({html:x.bar.three})]),b=e=>u({class:"text-lg ml-2"},e),k=e=>t({class:"flex flex-auto flex-row items-center lg:hidden"},[v(),e.title&&b(e.title)]),i=(e,a)=>{e.forEach(l=>{if(l.options){i(l.options,a);return}l.callBack=a})},B=(e,a)=>!a.contains(e),N=e=>{const a=(l,{parent:s})=>s.parent.state.expanded=!1;return i(e.options,a),t({class:"bg-popover flex flex-auto flex-col absolute w-full h-0 max-h-[500px] overflow-y-auto data-[expanded=true]:h-fit data-[expanded=false]:h-0 overflow-hidden data-[expanded=true]:shadow-lg data-[expanded=true]:border rounded-md z-20",addState(){return{expanded:!1}},addEvent:["click",document,(l,{state:s,mobileNav:r})=>{B(l.target,r)&&(s.expanded=!1)}],dataSet:["expanded",["expanded",!0,"true"]]},[new n({options:e.options})])},C=e=>t({class:"bg-background flex flex-auto flex-col w-full relative"},[N(e)]),A=o((e,a)=>t({cache:"mobileNav",class:"bg-background flex flex-auto flex-col w-full relative lg:hidden"},[t({class:"flex flex-auto flex-col w-full"},[k(e),C(e)])])),S=o((e,a)=>h({class:"body aside-container flex lg:flex-auto flex-col"},[g({class:"flex flex-auto flex-col lg:flex-row"},[d({class:"drawer control flex flex-auto w-full md:max-w-[320px]"},[e.left]),d({class:"flex flex-auto w-full"},[e.right])])]));class I extends p{render(){return w({route:this.addRoutes()},[S({left:this.addAside(),right:this.addBody()})])}addRoutes(){return this.routes||[]}addAside(){return t({class:"flex flex-auto flex-col lg:border-r"},[m({class:"p-4 hidden lg:flex"},this.title),this.addNavigation()])}addBody(){return t({class:"flex flex-auto flex-col"},[{class:"contained",switch:this.addSwitch()}])}addSwitch(){return this.switch||[]}addNavigation(){const a=this.getLinks();return[new n({class:"hidden lg:flex",options:a}),A({title:this.title,options:a})]}getLinks(){return this.links||[]}}export{I as A};
