import{G as s,S as d}from"./molecules-Dujm0Xy1.js";import{O as i,P as t,Y as n,l as a,n as m,b as g,J as p,Q as f,r as u,G as x}from"./index-CH6aNPfA.js";class b extends i{getClassName(){return"overlay relative inline top-[0px] left-0 bottom-0 right-0 flex-col bg-background z-20 lg:left-[64px] lg:top-0 will-change-contents "+(this.class||"")}setup(o){this.container=o,this.initialize()}}const c=f(({title:e,description:o})=>a({class:"sm:py-8 px-5 flex flex-col"},[u({class:"scroll-m-20 text-3xl font-bold tracking-tight"},e),o&&x({class:"text-base text-muted-foreground py-2 max-w-[700px]"},o)])),r=(e,o)=>({uri:e,component:new t([n([c({title:o}),s()])])}),k=()=>new t([{switch:[{uri:"aside/marketing/irure-nostrud/:id",component:new b({backHref:"aside/marketing/"},[new t([n([a({class:"flex flex-auto items-center mb-2"},[m({backUrl:"aside/marketing/"}),g({class:"text-lg md:text-2xl font-bold tracking-tight"},"Overlay")]),s()])])])},{uri:"aside/marketing/*",component:new t([p({href:"aside/marketing/irure-nostrud/1"},[c({title:"Marketing"}),s()])])}]}]),w=e=>[r(e+"/tempor-nulla"),{uri:e+"/marketing*",component:k()},r(e+"/tempor-nulla","Tempor nulla"),r(e+"/tempor-esse","Tempor esse"),r(e+"/voluptate-dolore","Voluptate dolore"),r(e+"/non-lorem","Non Lorem"),r(e+"/tempor-nulla-1","Tempor nulla 1"),r(e+"/tempor-esse-1","Tempor esse 1"),r(e+"/voluptate-dolore-1","Voluptate dolore 1"),r(e+"/non-lorem-1","Non Lorem 1")],y=e=>[{href:e,label:"Aside",exact:!0},{href:`${e}/overlay-test`,label:"Overlay"},{label:"Marketing",options:[{label:"irure nostrud",href:e+"/marketing/irure-nostrud"},{label:"ipsum dolore",href:e+"/marketing/ipsum-dolore"},{label:"enim consectetur",options:[{label:"irure nostrud",href:e+"/marketing/enim-consectetur/irure-nostrud"},{label:"ipsum dolore",href:e+"/marketing/enim-consectetur/ipsum-dolore"},{label:"enim consectetur",href:e+"/marketing/enim-consectetur/enim-consectetur"},{label:"So many",options:[{label:"irure nostrud",href:e+"/marketing/enim-consectetur/many/irure-nostrud"},{label:"ipsum dolore",href:e+"/marketing/enim-consectetur/many/ipsum-dolore"},{label:"enim consectetur",href:e+"/marketing/enim-consectetur/many/enim-consectetur"}]}]}]},{group:"Group 1 name",options:[{label:"Tempor nulla",href:e+"/tempor-nulla"},{label:"Tempor esse",href:e+"/tempor-esse"},{label:"Voluptate dolore",href:e+"/voluptate-dolore"},{label:"Non Lorem",href:e+"/non-lorem"}]},{group:"Group 2 name",options:[{label:"Tempor nulla 1",href:e+"/tempor-nulla-1"},{label:"Tempor esse 1",href:e+"/tempor-esse-1"},{label:"Voluptate dolore 1",href:e+"/voluptate-dolore-1"},{label:"Non Lorem 1",href:e+"/non-lorem-1"}]}],v=()=>new i([n({class:"p-6 2xl:mx-auto 2xl:max-w-[1600px]"},[n({class:"w-full lg:w-1/3"},[a({class:"flex flex-auto items-center mb-2"},[m({backUrl:"aside/marketing/"}),u({class:"text-lg md:text-2xl font-bold tracking-tight"},"Overlay")])])])]),T=e=>[{uri:`${e}/overlay-test`,component:v()}],l="aside",h=()=>new d({title:"Page Title",basePath:l,routes:T(l),switch:w(l),links:y(l)});export{h as MainSidebarMenuPage,h as default};
