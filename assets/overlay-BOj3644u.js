import{X as s,m as a,e as u,q as o,g as n,I as f,l as d,n as h,o as x,r,B as g,s as p,C as b,w,T as m}from"./index-Bio4wePB.js";const v=()=>u({class:"m-2",variant:"ghost",click:(e,{state:t})=>t.toggle("expanded")},[o({html:n.bar.three})]),y=e=>f({class:"text-lg ml-2"},e),k=e=>a({class:"flex flex-auto flex-row items-center lg:hidden"},[v(),e.title&&y(e.title)]),i=(e,t)=>{e.forEach(l=>{if(l.options){i(l.options,t);return}l.callBack=t})},B=e=>{const t=(l,{parent:c})=>c.parent.state.expanded=!1;return i(e.options,t),a({class:"bg-background flex flex-auto flex-col absolute w-full transition-all h-0 data-[expanded=true]:h-fit data-[expanded=false]:h-0 overflow-hidden data-[expanded=true]:shadow data-[expanded=true]:border-b rounded-md",addState(){return{expanded:!1}},dataSet:["expanded",["expanded",!0,"true"]]},[new d({options:e.options})])},S=e=>a({class:"bg-background flex flex-auto flex-col w-full relative"},[B(e)]),C=s((e,t)=>a({class:"bg-background flex flex-auto flex-col w-full relative lg:hidden"},[a({class:"flex flex-auto flex-col w-full"},[k(e),S(e)])])),N=s((e,t)=>h({class:"body aside-container flex flex-auto flex-col"},[x({class:"flex flex-auto flex-wrap"},[r({class:"drawer control flex flex-auto w-full md:max-w-[320px]"},[e.left]),r([e.right])])]));class P extends g{render(){return p({route:this.addRoutes()},[N({left:this.addAside(),right:this.addBody()})])}addRoutes(){return this.routes||[]}addAside(){return a({class:"flex flex-auto flex-col lg:border-r"},[b({class:"p-4 hidden lg:flex"},this.title),this.addNavigation()])}addBody(){return a({class:"flex flex-auto flex-col"},[{class:"contained",switch:this.addSwitch()}])}addSwitch(){return this.switch||[]}addNavigation(){const t=this.getLinks();return[new d({class:"hidden lg:flex",options:t}),C({title:this.title,options:t})]}getLinks(){return this.links||[]}}const R=s(e=>a({class:"back"},[m({href:e.href||"/",cache:"backArrow"},[o({html:n.arrows.left})])]));class T extends w{beforeSetup(){this.persist=!1}render(){const t=this.getReferralPath();return a({class:this.getOverlayType(),onSet:["loading",{loading:!0}]},[R({href:t||this.backHref}),this.addBody(),this.getRoutes()])}getReferralPath(){const t=this.route;return t?t.referralPath:null}getOverlayType(){return"overlay flex flex-auto absolute top-[60px] left-0 bottom-0 right-0 flex-col bg-background z-20 overscroll-none lg:left-[64px] lg:top-0 "+(this.type||"")}getRoutes(){return null}setupStates(){return{loading:!1}}addLoading(){this.state.set("loading",!0)}removeLoading(){this.state.set("loading",!1)}addBody(){return a({class:"body fadeIn"},[this.getBodyContents()])}getBodyContents(){return this.children||null}}export{P as A,T as O};
