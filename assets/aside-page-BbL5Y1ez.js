import{Q as i,I as l,Y as f,ai as u,B as n,a as h,b as r,G as p,A as x,aw as g,ax as v,ay as o,o as b,az as m}from"./index-l5q8neYQ.js";import{S as w}from"./sidebar-menu-Tpu6zxsZ.js";const k=()=>n({class:"m-2",variant:"ghost",addState(){return{open:!1}},click:(e,{state:t})=>t.toggle("open")},[h(r.bar.three)]),c=e=>p({class:"text-lg ml-2"},e),B=e=>l({class:"flex flex-auto flex-row items-center lg:hidden"},[k(),e.title&&c(e.title)]),S=e=>l({class:"sticky flex flex-auto flex-row items-center bg-popover lg:hidden top-0 z-10 border-0 border-b"},[n({variant:"icon",class:"m-2",click:(t,{state:a})=>a.toggle("open"),icon:r.arrows.left}),e.title&&c(e.title)]),d=(e,t)=>{e.forEach(a=>{if(a.options){d(a.options,t);return}a.callBack=t})};class y extends x{render(){return l({click:(t,a)=>{t.target===a.panel&&(t.preventDefault(),t.stopPropagation(),a.state.open=!1)},class:"fixed popIn m-auto rounded-md p-0 shadow-lg bg-popover top-[5vh] bottom-[5vh] left-2 right-2 max-h-[90vh] text-inherit block z-30 after:content-[''] after:fixed after:-top-[5vh] after:-left-2 after:-right-2 after:-bottom-[5vh] after:-z-[1] after:bg-black/40",style:"margin: env(safe-area-inset-top) 0 env(safe-area-inset-bottom) 0",dataSet:["open",["expanded",!0,"true"]]},[l({class:"flex flex-auto flex-col w-full overflow-y-auto max-h-[90vh] rounded-md bg-popover border"},[S({title:this.title}),l({class:"flex flex-auto flex-col"},this.children)])])}setupStates(){return{open:{id:this.parent.getId(),callBack:s=>{this.state.open===!1&&this.destroy()}}}}setup(t){this.container=app.appShell.panel,this.initialize()}}const N=e=>{const t=(a,{parent:s})=>s.parent.state.open=!1;return d(e.options,t),l({class:"bg-background flex flex-auto flex-col w-full relative"},[f("open",a=>a?[new y({title:e.title},[new u({options:e.options})])]:null)])},A=i((e,t)=>l({cache:"mobileNav",class:"bg-background flex flex-auto flex-col w-full relative lg:hidden"},[l({class:"flex flex-auto flex-col w-full"},[B(e),N(e)])])),C=i((e,t)=>g({class:"body aside-container grid col-span-1 h-full"},[v({class:"grid grid-cols-1 lg:grid-cols-5"},[o({class:"drawer control flex flex-auto w-full md:max-w-[320px]"},[e.left]),o({class:"col-span-4"},[e.right])])]));class M extends b{render(){return m({route:this.addRoutes()},[C({left:this.addAside(),right:this.addBody()})])}addRoutes(){return this.routes||[]}addAside(){return l({class:"flex flex-auto flex-col"},this.addNavigation())}addBody(){return l({class:"flex flex-auto flex-col"},[{class:"contained",switch:this.addSwitch()}])}addSwitch(){return this.switch||[]}addNavigation(){const t=this.getLinks();return[w({title:this.title,options:t,class:"hidden lg:block"}),A({title:this.title,options:t})]}getLinks(){return this.links||[]}}export{M as A};