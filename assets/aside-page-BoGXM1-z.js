import{Q as o,m as t,B as r,a0 as c,I as u,a as f,ak as x,au as h,av as g,aw as d,r as p,ax as m}from"./index-uFfPi6J6.js";import{S as w}from"./sidebar-menu-BhyEFPn5.js";const v=()=>r({class:"m-2",variant:"ghost",click:(e,{state:a})=>a.toggle("expanded")},[c({html:u.bar.three})]),b=e=>f({class:"text-lg ml-2"},e),k=e=>t({class:"flex flex-auto flex-row items-center lg:hidden"},[v(),e.title&&b(e.title)]),n=(e,a)=>{e.forEach(l=>{if(l.options){n(l.options,a);return}l.callBack=a})},B=(e,a)=>!a.contains(e),N=e=>{const a=(l,{parent:s})=>s.parent.state.expanded=!1;return n(e.options,a),t({class:"bg-popover flex flex-auto flex-col absolute w-full h-0 max-h-[500px] overflow-y-auto data-[expanded=true]:h-fit data-[expanded=false]:h-0 overflow-hidden data-[expanded=true]:shadow-lg data-[expanded=true]:border rounded-md z-20",addState(){return{expanded:!1}},addEvent:["click",document,(l,{state:s,mobileNav:i})=>{B(l.target,i)&&(s.expanded=!1)}],dataSet:["expanded",["expanded",!0,"true"]]},[new x({options:e.options})])},S=e=>t({class:"bg-background flex flex-auto flex-col w-full relative"},[N(e)]),A=o((e,a)=>t({cache:"mobileNav",class:"bg-background flex flex-auto flex-col w-full relative lg:hidden"},[t({class:"flex flex-auto flex-col w-full"},[k(e),S(e)])])),C=o((e,a)=>h({class:"body aside-container grid col-span-1 h-full"},[g({class:"grid grid-cols-1 lg:grid-cols-5"},[d({class:"drawer control flex flex-auto w-full md:max-w-[320px]"},[e.left]),d({class:"col-span-4"},[e.right])])]));class I extends p{render(){return m({route:this.addRoutes()},[C({left:this.addAside(),right:this.addBody()})])}addRoutes(){return this.routes||[]}addAside(){return t({class:"flex flex-auto flex-col"},this.addNavigation())}addBody(){return t({class:"flex flex-auto flex-col"},[{class:"contained",switch:this.addSwitch()}])}addSwitch(){return this.switch||[]}addNavigation(){const a=this.getLinks();return[w({title:this.title,options:a}),A({title:this.title,options:a})]}getLinks(){return this.links||[]}}export{I as A};
