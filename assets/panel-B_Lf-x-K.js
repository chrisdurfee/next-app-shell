import{K as r,m as a,B as x,r as n,b as d,I as h,a as i,a9 as g,aa as p,ab as o,d as b,ac as w,j as v,w as c,T as m}from"./index-DEKM8D7M.js";const y=()=>x({class:"m-2",variant:"ghost",click:(e,{state:t})=>t.toggle("expanded")},[n({html:d.bar.three})]),k=e=>h({class:"text-lg ml-2"},e),B=e=>a({class:"flex flex-auto flex-row items-center lg:hidden"},[y(),e.title&&k(e.title)]),f=(e,t)=>{e.forEach(l=>{if(l.options){f(l.options,t);return}l.callBack=t})},C=(e,t)=>!t.contains(e),N=e=>{const t=(l,{parent:s})=>s.parent.state.expanded=!1;return f(e.options,t),a({class:"bg-popover flex flex-auto flex-col absolute w-full h-0 max-h-[500px] overflow-y-auto data-[expanded=true]:h-fit data-[expanded=false]:h-0 overflow-hidden data-[expanded=true]:shadow-lg data-[expanded=true]:border rounded-md z-20",addState(){return{expanded:!1}},addEvent:["click",document,(l,{state:s,mobileNav:u})=>{C(l.target,u)&&(s.expanded=!1)}],dataSet:["expanded",["expanded",!0,"true"]]},[new i({options:e.options})])},P=e=>a({class:"bg-background flex flex-auto flex-col w-full relative"},[N(e)]),S=r((e,t)=>a({cache:"mobileNav",class:"bg-background flex flex-auto flex-col w-full relative lg:hidden"},[a({class:"flex flex-auto flex-col w-full"},[B(e),P(e)])])),R=r((e,t)=>g({class:"body aside-container flex lg:flex-auto flex-col"},[p({class:"flex flex-auto flex-col lg:flex-row"},[o({class:"drawer control flex flex-auto w-full md:max-w-[320px]"},[e.left]),o({class:"flex flex-auto w-full"},[e.right])])]));class O extends b{render(){return w({route:this.addRoutes()},[R({left:this.addAside(),right:this.addBody()})])}addRoutes(){return this.routes||[]}addAside(){return a({class:"flex flex-auto flex-col lg:border-r"},[v({class:"p-4 hidden lg:flex"},this.title),this.addNavigation()])}addBody(){return a({class:"flex flex-auto flex-col"},[{class:"contained",switch:this.addSwitch()}])}addSwitch(){return this.switch||[]}addNavigation(){const t=this.getLinks();return[new i({class:"hidden lg:flex",options:t}),S({title:this.title,options:t})]}getLinks(){return this.links||[]}}const A=r(e=>a({class:"back"},[m({href:e.href||"/",cache:"backArrow"},[n({html:d.arrows.left})])]));class I extends c{beforeSetup(){this.persist=!1}render(){const t=this.getReferralPath();return a({class:this.getOverlayType(),onSet:["loading",{loading:!0}]},[A({href:t||this.backHref}),this.addBody(),this.getRoutes()])}getReferralPath(){const t=this.route;return t?t.referralPath:null}getOverlayType(){return"overlay flex flex-auto absolute top-[60px] left-0 bottom-0 right-0 flex-col bg-background z-20 overscroll-none lg:left-[64px] lg:top-0 "+(this.type||"")}getRoutes(){return null}setupStates(){return{loading:!1}}addLoading(){this.state.set("loading",!0)}removeLoading(){this.state.set("loading",!1)}addBody(){return a({class:"body fadeIn"},[this.getBodyContents()])}getBodyContents(){return this.children||null}}class L extends c{render(){return a({class:"panel-container py-8 px-1"},this.children)}}export{O as A,I as O,L as P};
