import{w as s,m as t,K as a,T as o,r as l,b as n}from"./index-BR6V9Fyc.js";const i=a(r=>t({class:"back"},[o({href:r.href||"/",cache:"backArrow"},[l({html:n.arrows.left})])]));class d extends s{beforeSetup(){this.persist=!1}render(){const e=this.getReferralPath();return t({class:this.getOverlayType(),onSet:["loading",{loading:!0}]},[i({href:e||this.backHref}),this.addBody(),this.getRoutes()])}getReferralPath(){const e=this.route;return e?e.referralPath:null}getOverlayType(){return"overlay flex flex-auto absolute top-[60px] left-0 bottom-0 right-0 flex-col bg-background z-20 overscroll-none lg:left-[64px] lg:top-0 "+(this.type||"")}getRoutes(){return null}setupStates(){return{loading:!1}}addLoading(){this.state.set("loading",!0)}removeLoading(){this.state.set("loading",!1)}addBody(){return t({class:"body fadeIn"},[this.getBodyContents()])}getBodyContents(){return this.children||null}}export{d as O};
