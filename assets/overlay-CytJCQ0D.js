import{a as r,f as l,g as i,M as a,B as n,h as o,m as s,C as d,i as h,w as u,T as c,q as f,j as g}from"./index-DongaFwV.js";const x=r((e,t)=>l({class:"body aside-container flex flex-auto flex-col"},[i({class:"flex flex-auto flex-wrap"},[a({class:"drawer control flex flex-auto w-full md:max-w-[320px]"},[e.left]),a([e.right])])]));class p extends n{render(){return o({route:this.addRoutes()},[x({left:this.addAside(),right:this.addBody()})])}addRoutes(){return this.routes||[]}addAside(){return s({class:"flex flex-auto flex-col"},[d({class:"p-4"},this.title),this.addNavigation()])}addBody(){return s({class:"flex flex-auto flex-col"},[{class:"contained",switch:this.addSwitch()}])}addSwitch(){return this.switch||[]}addNavigation(){return new h({options:this.getLinks()})}getLinks(){return this.links||[]}}const y=r(e=>s({class:"back"},[c({href:e.href||"/",cache:"backArrow"},[f({html:g.arrows.left})])]));class m extends u{beforeSetup(){this.persist=!1}render(){const t=this.getReferralPath();return s({class:this.getOverlayType(),onSet:["loading",{loading:!0}]},[y({href:t||this.backHref}),this.addBody(),this.getRoutes()])}getReferralPath(){const t=this.route;return t?t.referralPath:null}getOverlayType(){return"overlay "+(this.type||"")}getRoutes(){return null}setupStates(){return{loading:!1}}addLoading(){this.state.set("loading",!0)}removeLoading(){this.state.set("loading",!1)}addBody(){return s({class:"body fadeIn"},[this.getBodyContents()])}getBodyContents(){return this.children||null}}export{p as A,m as O};
