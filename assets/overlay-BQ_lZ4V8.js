import{X as s,m as a,f as u,q as o,e as n,I as f,r as d,s as h,t as x,u as r,B as g,v as p,C as w,w as b,T as v}from"./index-DRaTqje5.js";const m=()=>u({class:"m-2",variant:"ghost",click:(e,{state:t})=>t.toggle("expanded")},[o({html:n.bar.three})]),y=e=>f({class:"text-lg ml-2"},e),B=e=>a({class:"flex flex-auto flex-row items-center lg:hidden"},[m(),e.title&&y(e.title)]),i=(e,t)=>{e.forEach(l=>{if(l.options){i(l.options,t);return}l.callBack=t})},k=e=>{const t=(l,{parent:c})=>c.parent.state.expanded=!1;return i(e.options,t),a({class:"bg-popover flex flex-auto flex-col absolute w-full h-0 max-h-[500px] overflow-y-auto data-[expanded=true]:h-fit data-[expanded=false]:h-0 overflow-hidden data-[expanded=true]:shadow data-[expanded=true]:border rounded-md z-20",addState(){return{expanded:!1}},dataSet:["expanded",["expanded",!0,"true"]]},[new d({options:e.options})])},S=e=>a({class:"bg-background flex flex-auto flex-col w-full relative"},[k(e)]),C=s((e,t)=>a({class:"bg-background flex flex-auto flex-col w-full relative lg:hidden"},[a({class:"flex flex-auto flex-col w-full"},[B(e),S(e)])])),N=s((e,t)=>h({class:"body aside-container flex flex-auto flex-col"},[x({class:"flex flex-auto flex-wrap"},[r({class:"drawer control flex flex-auto w-full md:max-w-[320px]"},[e.left]),r([e.right])])]));class P extends g{render(){return p({route:this.addRoutes()},[N({left:this.addAside(),right:this.addBody()})])}addRoutes(){return this.routes||[]}addAside(){return a({class:"flex flex-auto flex-col lg:border-r"},[w({class:"p-4 hidden lg:flex"},this.title),this.addNavigation()])}addBody(){return a({class:"flex flex-auto flex-col"},[{class:"contained",switch:this.addSwitch()}])}addSwitch(){return this.switch||[]}addNavigation(){const t=this.getLinks();return[new d({class:"hidden lg:flex",options:t}),C({title:this.title,options:t})]}getLinks(){return this.links||[]}}const R=s(e=>a({class:"back"},[v({href:e.href||"/",cache:"backArrow"},[o({html:n.arrows.left})])]));class T extends b{beforeSetup(){this.persist=!1}render(){const t=this.getReferralPath();return a({class:this.getOverlayType(),onSet:["loading",{loading:!0}]},[R({href:t||this.backHref}),this.addBody(),this.getRoutes()])}getReferralPath(){const t=this.route;return t?t.referralPath:null}getOverlayType(){return"overlay flex flex-auto absolute top-[60px] left-0 bottom-0 right-0 flex-col bg-background z-20 overscroll-none lg:left-[64px] lg:top-0 "+(this.type||"")}getRoutes(){return null}setupStates(){return{loading:!1}}addLoading(){this.state.set("loading",!0)}removeLoading(){this.state.set("loading",!1)}addBody(){return a({class:"body fadeIn"},[this.getBodyContents()])}getBodyContents(){return this.children||null}}export{P as A,T as O};
