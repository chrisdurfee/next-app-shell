import{s as t,Y as l,ah as d,F as n,ai as x}from"./index-CM1IEHgP.js";const r=t((s,e)=>({tag:"section",...s,children:e})),i=t((s,e)=>r({class:"body full-container flex flex-auto flex-col "+s.class,...s},e)),f=t((s,e)=>(s.class="row flex flex-auto flex-col lg:flex-row "+(s.class||""),{...s,children:e})),c=t((s,e)=>(s.class="col flex flex-auto flex-col "+(s.class||""),{...s,children:e})),h=t((s,e)=>r({class:"body aside-container flex flex-auto flex-col max-w-[100vw] h-full"},[f({class:"flex flex-auto flex-col lg:flex-row"},[c({class:"drawer control flex flex-none md:flex-auto w-full md:max-w-[320px]"},[s.left]),c({class:"flex flex-grow flex-col"},[s.right])])]));class o extends d{declareProps(){this.class=""}render(){return l({class:`${this.class||""}`},this.children)}}class a extends o{update(e){}}class w extends a{render(){return i([l({class:"flex flex-auto flex-col pt-[80px] sm:pt-0"},this.children)])}}class g extends a{render(){return i([l({class:"contained px-4 flex flex-auto flex-col"},this.children)])}}const u=t((s,e)=>(s.class="basic-page pt-[80px] sm:pt-0 flex flex-auto flex-col "+(s.class||""),{tag:"section",...s,children:e}));class m extends o{render(){const e=this.class??"";return l({class:`flex flex-col flex-auto ${e}`},this.children)}}class b extends a{declareProps(){super.declareProps(),this.routes=[],this.switch=[],this.links=[],this.title=""}render(){return u({route:this.addRoutes()},[h({left:this.addSidebar(),right:this.addBody()})])}addRoutes(){return this.routes||[]}addSidebar(){return l({class:"flex flex-auto flex-col"},this.addNavigation())}addBody(){return l({class:"flex flex-auto flex-col"},[{class:"contained",switch:this.addSwitch()}])}addSwitch(){return this.switch||[]}addNavigation(){const e=this.getLinks();return[n({title:this.title,options:e,class:"hidden lg:block"}),x({title:this.title,options:e})]}getLinks(){return this.links||[]}}export{m as B,b as M,w as S,g as k,o as n,i as r};
