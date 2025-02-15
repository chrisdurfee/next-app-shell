import{l as i,r as n,G as l,d as a,Y as e,J as d,t as r,a as c,a0 as m,W as g}from"./index-CxUg7IWE.js";import{S as f}from"./sidebar-menu-page-nCAVFk3R-rOYbqkdE.js";import{V as o}from"./tooltip-JULShdSj-BRsy9gWG.js";import{H as u,P as x}from"./posts-DzZGAqEs.js";import"./mobile-nav-wrapper-BE_hr65B-DBCd1HuF.js";const h=()=>i({class:"px-2 sm:py-4 sm:pb-0 lg:px-6 flex flex-col"},[n({class:"scroll-m-20 text-3xl font-bold tracking-tight"},"Auto Updates"),l({class:"text-base text-muted-foreground py-2"},"Stay up to date with the latest news and updates.")]),p=()=>e({class:"flex flex-col gap-4"},[o({width:"w-full",height:"h-56",class:"rounded-lg"})]),w=t=>[d({href:`blog/posts/${t.id}`},[e({class:"relative w-full h-56 overflow-hidden rounded-lg mb-4"},[r({src:t.image,alt:t.title,class:"w-full h-full object-cover"})]),e({class:"absolute bottom-8 left-4 bg-background/80 p-2 rounded-md"},[c({class:"text-xl font-bold"},t.title),l({class:"text-sm"},t.description)])])],b=a({state:{loaded:!1},after(){setTimeout(()=>this.state.loaded=!0,500)},render(){const{post:t}=this;return e({class:"p-4 px-2 lg:px-4 relative overflow-hidden",onState:["loaded",s=>s?w(t):p()]})}}),S=()=>e({class:"flex flex-col bg-card rounded-md shadow-md"},[o({width:"w-full",height:"h-[128px]",class:"rounded-lg mb-4"}),o({width:"w-3/4",height:"h-5",class:"rounded-md mb-2"}),o({width:"w-full",height:"h-20",class:"rounded-md mb-4"})]),P=t=>[d({href:`blog/posts/${t.id}`},[e({class:"w-full h-32 overflow-hidden rounded-lg mb-4"},[r({src:t.image,alt:t.title,class:"w-full h-full object-cover"})]),c({class:"text-lg font-semibold text-foreground mb-2"},t.title),l({class:"text-sm text-muted-foreground"},t.description),e({class:"mt-4 flex justify-between items-center"},[l({class:"text-xs text-muted-foreground"},t.category),l({class:"text-xs text-muted-foreground"},`${t.comments} comments`)])])],v=a({state:{loaded:!1},after(){setTimeout(()=>this.state.loaded=!0,500)},render(){const{post:t}=this;return e({class:"p-4 px-2 lg:px-4 transition"},[m("loaded",s=>s?P(t):S())])}}),H=t=>e({class:"grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4 md:mb-8",map:[u,s=>new b({post:s})]}),y=({posts:t})=>e([new g({cache:"postlist",key:"id",items:t,role:"list",class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6",rowItem:s=>new v({post:s})})]),D=()=>new f([e({class:"flex flex-col w-full px-4 lg:px-8 max-w-[1800px] m-auto"},[h(),H(),y({posts:x})])]);export{D as BlogPage,D as default};
