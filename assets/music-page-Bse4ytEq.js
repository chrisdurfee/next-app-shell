import{m as e,I as P,a as t,F as h,S as d,T as v,B as m,_ as S,b as n,c as f,k as g,d as b,R as T,U as w,g as r,C as $,e as k,P as p}from"./index-CSnSsRr9.js";import{T as A}from"./tooltip-BT88SZ8J.js";import{S as L}from"./sidebar-menu-DcbY1BjU.js";const C=()=>e({class:"flex flex-col items-center justify-center text-center p-6 space-y-4 bg-background border rounded-lg min-h-96 mt-4 mr-4"},[P({size:"xl"},t.music),h({class:"text-lg font-semibold"},"The Browse Page"),d({class:"text-muted-foreground"},"This is a placeholder for the browse page.")]),M=()=>e({class:"justify-between flex flex-auto items-center"},[new v({options:[{label:"Music",value:"music"},{label:"Podcasts",value:"podcasts"},{label:"Live",value:"live",disabled:!0}],onSelect:(l,{state:s})=>s.mode=l}),e({class:"hidden lg:inline-flex"},[m({variant:"withIcon",class:"text-muted-foreground mb-8 hidden",icon:t.circlePlus},"Add music")]),e({class:"flex lg:hidden mr-4"},[A({content:"Add music",position:"left"},m({variant:"icon",icon:t.circlePlus}))])]),x="music",R=()=>e({class:"space-y-2 w-[180px] md:w-[250px]"},[n({width:"w-full",height:"h-[240px] md:h-[333.33px]",shape:"rectangle",class:"rounded-md"}),n({width:"w-3/4",height:"h-4",class:"mt-2"}),n({width:"w-1/2",height:"h-[14px]"})]),B=()=>e({class:"space-y-2 w-[150px]"},[n({width:"w-full",height:"h-[150px]",shape:"square",class:"rounded-md"}),n({width:"w-3/4",height:"h-4",class:"mt-2"}),n({width:"w-1/2",height:"h-[14px]"})]),I=({src:l,title:s,artist:o})=>e({class:"space-y-3 w-[180px] md:w-[250px]"},[e({class:"overflow-hidden rounded-md aspect-[3/4] w-full"},[f({href:`${x}/album/${s.replace(/\s+/g,"-").toLowerCase()}`},[g({src:l,alt:s,class:"w-auto object-cover transition-all hover:scale-105 aspect-[3/4]"})])]),e({class:"space-y-1 text-sm"},[b({class:"font-medium leading-none"},s),d({class:"text-xs text-muted-foreground"},o)])]),q=({src:l,title:s,artist:o})=>e({class:"space-y-3 w-[150px]"},[e({class:"overflow-hidden rounded-md w-full aspect-square"},[f({href:`${x}/album/${s.replace(/\s+/g,"-").toLowerCase()}`},[g({src:l,alt:s,class:"w-auto object-cover transition-all hover:scale-105 aspect-square"})])]),e({class:"space-y-1 text-sm"},[b({class:"font-medium leading-none"},s),d({class:"text-xs text-muted-foreground"},o)])]),U=(l,s)=>{const o=new Image;o.src=l,o.onload=s},j=S({state:{loaded:!1},getCardsByType(){return this.cardType==="large"?{skeleton:R,albumCard:I}:{skeleton:B,albumCard:q}},render(){const{src:l,title:s,artist:o}=this,{skeleton:u,albumCard:i}=this.getCardsByType();return U(l,()=>this.state.loaded=!0),e({onState:["loaded",y=>y?i({src:l,title:s,artist:o}):u()]})}}),N=({title:l,description:s})=>w([h({class:"text-2xl font-semibold tracking-tight"},l),d({class:"text-sm text-muted-foreground mb-4"},s)]),c=({title:l,description:s,albums:o,cardType:u="large"})=>T({class:"my-8"},[N({title:l,description:s}),e({class:"overflow-x-auto lg:overflow-x-none -ml-6 pl-6"},[e({class:"inline-flex space-x-4 pb-4 mr-6 lg:mr-0",map:[o,i=>new j({src:i.src,title:i.title,artist:i.artist,cardType:u})]})])]),Y=()=>e({class:"w-full"},[c({title:"Latest Podcasts",description:"Listen to the latest podcasts from your favorite creators.",albums:r(5),cardType:"large"})]),G=()=>e({class:"col-span-4 2xl:mx-auto 2xl:max-w-[1400px]"},[w({class:"sm:py-4 sm:pb-0 px-6 flex flex-col lg:hidden"},[$({class:"scroll-m-20 text-3xl font-bold tracking-tight"},"Discover")]),e({class:"p-6 px-6 pr-0 md:pr-4 py-6 lg:px-8"},[M(),e({addState(){return{mode:"music"}},onState:["mode",l=>l==="music"?[c({title:"Listen Now",description:"Top picks for you. Updated daily.",albums:r(5),cardType:"large"}),c({title:"Made for You",description:"Your personal playlists. Updated daily.",albums:r(8),cardType:"small"}),c({title:"Recently Played",description:"Your recently played albums and playlists.",albums:r(8),cardType:"small"}),c({title:"Popular Playlists",description:"Popular playlists from around the world.",albums:r(8),cardType:"small"}),c({title:"New Releases",description:"New albums and singles from your favorite artists.",albums:r(8),cardType:"small"})]:Y()]})])]),a="music",_=()=>L({title:"Discover",options:[{label:"Listen Now",href:`${a}`,icon:t.playing,exact:!0},{label:"Browse",href:`${a}/browse`,icon:t.square.grid},{label:"Radio",href:`${a}/radio`,icon:t.signal},{group:"Library",options:[{label:"Playlists",href:`${a}/playlists`,icon:t.list.down},{label:"Songs",href:`${a}/songs`,icon:t.music},{label:"Made for You",href:`${a}/made-for-you`,icon:t.user.default},{label:"Artists",href:`${a}/artists`,icon:t.speaker.default},{label:"Albums",href:`${a}/albums`,icon:t.square.stack}]},{group:"Playlists",options:[{label:"Recently Added",href:`${a}/recently-added`,icon:t.list.down},{label:"Recently Played",href:`${a}/recently-played`,icon:t.list.down},{label:"Top Songs",href:`${a}/top-songs`,icon:t.list.down},{label:"Top Albums",href:`${a}/top-albums`,icon:t.list.down}]}]}),z=()=>new k([e({class:"grid grid-cols-1 lg:grid-cols-5 h-full"},[_(),e({class:"col-span-4",switch:[{uri:"/music",component:new p([G()])},{uri:"music/browse",component:new p([C()])}]})])]);export{z as MusicPage,z as default};
