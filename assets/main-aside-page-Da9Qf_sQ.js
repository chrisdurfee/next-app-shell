const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/import-buttons-BakghqAh.js","assets/index-CKPX0MHB.js","assets/index-Cax6PW1X.css"])))=>i.map(i=>d[i]);
import{A as d}from"./aside-page-D38kJqnw.js";import{O as m,P as l,m as t,V as p,p as g,q as s,U as i,r as u,F as f,d as x,Q as b,C as c,S as k}from"./index-CKPX0MHB.js";import"./sidebar-menu-xH1I8T_5.js";class v extends m{getClassName(){return"overlay relative inline top-[0px] left-0 bottom-0 right-0 flex-col bg-background z-20 lg:left-[64px] lg:top-0 "+(this.class||"")}setup(r){this.container=r,this.initialize()}}const a=b(({title:e,description:r})=>i({class:"sm:py-8 px-5 flex flex-col"},[c({class:"scroll-m-20 text-3xl font-bold tracking-tight"},e),r&&k({class:"text-base text-muted-foreground py-2 max-w-[700px]"},r)])),w=()=>new l([t([a({title:"Main Title"}),t({class:"rounded-lg border bg-card text-card-foreground shadow-sm my-5 mx-5 p-4"},[p({src:g(()=>import("./import-buttons-BakghqAh.js"),__vite__mapDeps([0,1,2]))})]),s()])]),o=(e,r)=>({uri:e,component:new l([t([a({title:r}),s()])])}),y=()=>new l([{switch:[{uri:"aside/marketing/irure-nostrud/:id",component:new v({backHref:"aside/marketing/"},[new l([t([i({class:"flex flex-auto items-center mb-2"},[u(),f({class:"text-lg md:text-2xl font-bold tracking-tight"},"Overlay")]),s()])])])},{uri:"aside/marketing/*",component:new l([x({href:"aside/marketing/irure-nostrud/1"},[a({title:"Marketing"}),s()])])}]}]),T=e=>[{uri:e,component:w()},{uri:e+"/marketing*",component:y()},o(e+"/tempor-nulla","Tempor nulla"),o(e+"/tempor-esse","Tempor esse"),o(e+"/voluptate-dolore","Voluptate dolore"),o(e+"/non-lorem","Non Lorem"),o(e+"/tempor-nulla-1","Tempor nulla 1"),o(e+"/tempor-esse-1","Tempor esse 1"),o(e+"/voluptate-dolore-1","Voluptate dolore 1"),o(e+"/non-lorem-1","Non Lorem 1")],O=e=>[{href:e,label:"Aside",exact:!0},{href:`${e}/overlay-test`,label:"Overlay"},{label:"Marketing",options:[{label:"irure nostrud",href:e+"/marketing/irure-nostrud"},{label:"ipsum dolore",href:e+"/marketing/ipsum-dolore"},{label:"enim consectetur",options:[{label:"irure nostrud",href:e+"/marketing/enim-consectetur/irure-nostrud"},{label:"ipsum dolore",href:e+"/marketing/enim-consectetur/ipsum-dolore"},{label:"enim consectetur",href:e+"/marketing/enim-consectetur/enim-consectetur"},{label:"So many",options:[{label:"irure nostrud",href:e+"/marketing/enim-consectetur/many/irure-nostrud"},{label:"ipsum dolore",href:e+"/marketing/enim-consectetur/many/ipsum-dolore"},{label:"enim consectetur",href:e+"/marketing/enim-consectetur/many/enim-consectetur"}]}]}]},{group:"Group 1 name",options:[{label:"Tempor nulla",href:e+"/tempor-nulla"},{label:"Tempor esse",href:e+"/tempor-esse"},{label:"Voluptate dolore",href:e+"/voluptate-dolore"},{label:"Non Lorem",href:e+"/non-lorem"}]},{group:"Group 2 name",options:[{label:"Tempor nulla 1",href:e+"/tempor-nulla-1"},{label:"Tempor esse 1",href:e+"/tempor-esse-1"},{label:"Voluptate dolore 1",href:e+"/voluptate-dolore-1"},{label:"Non Lorem 1",href:e+"/non-lorem-1"}]}],V=()=>new m([t({class:"p-6 2xl:mx-auto 2xl:max-w-[1600px]"},[t({class:"w-full lg:w-1/3"},[i({class:"flex flex-auto items-center mb-2"},[u(),c({class:"text-lg md:text-2xl font-bold tracking-tight"},"Overlay")])])])]),_=e=>[{uri:`${e}/overlay-test`,component:V()}],n="aside",M=()=>new d({title:"Page Title",basePath:n,routes:_(n),switch:T(n),links:O(n)});export{M as MainAsidePage,M as default};