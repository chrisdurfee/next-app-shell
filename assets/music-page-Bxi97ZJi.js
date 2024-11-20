import{m as e,B as p,I as a,_ as x,S as i,T as m,k as h,a as f,b as u,R as y,U as g,F as S,g as r,C as v,c as $}from"./index-CeMDo-tv.js";import{T}from"./tooltip-DBsTlt8-.js";import{T as P,S as A}from"./sidebar-menu-D9eLtRbj.js";const k=()=>e({class:"justify-between flex flex-auto items-center"},[new P({options:[{label:"Music",value:"music"},{label:"Podcasts",value:"podcasts"},{label:"Live",value:"live",disabled:!0}],onSelect:(l,{state:s})=>s.mode=l}),e({class:"hidden lg:inline-flex"},[p({variant:"withIcon",class:"text-muted-foreground mb-8 hidden",icon:a.circlePlus},"Add music")]),e({class:"flex lg:hidden mr-4"},[T({content:"Add music",position:"left"},p({variant:"icon",icon:a.circlePlus}))])]),b="music",L=()=>e({class:"space-y-2 w-[180px] md:w-[250px]"},[i({width:"w-full",height:"h-[240px] md:h-[333.33px]",shape:"rectangle",class:"rounded-md"}),i({width:"w-3/4",height:"h-4",class:"mt-2"}),i({width:"w-1/2",height:"h-[14px]"})]),C=()=>e({class:"space-y-2 w-[150px]"},[i({width:"w-full",height:"h-[150px]",shape:"square",class:"rounded-md"}),i({width:"w-3/4",height:"h-4",class:"mt-2"}),i({width:"w-1/2",height:"h-[14px]"})]),M=({src:l,title:s,artist:o})=>e({class:"space-y-3 w-[180px] md:w-[250px]"},[e({class:"overflow-hidden rounded-md aspect-[3/4] w-full"},[m({href:`${b}/album/${s.replace(/\s+/g,"-").toLowerCase()}`},[h({src:l,alt:s,class:"w-auto object-cover transition-all hover:scale-105 aspect-[3/4]"})])]),e({class:"space-y-1 text-sm"},[f({class:"font-medium leading-none"},s),u({class:"text-xs text-muted-foreground"},o)])]),R=({src:l,title:s,artist:o})=>e({class:"space-y-3 w-[150px]"},[e({class:"overflow-hidden rounded-md w-full aspect-square"},[m({href:`${b}/album/${s.replace(/\s+/g,"-").toLowerCase()}`},[h({src:l,alt:s,class:"w-auto object-cover transition-all hover:scale-105 aspect-square"})])]),e({class:"space-y-1 text-sm"},[f({class:"font-medium leading-none"},s),u({class:"text-xs text-muted-foreground"},o)])]),B=(l,s)=>{const o=new Image;o.src=l,o.onload=s},I=x({state:{loaded:!1},getCardsByType(){return this.cardType==="large"?{skeleton:L,albumCard:M}:{skeleton:C,albumCard:R}},render(){const{src:l,title:s,artist:o}=this,{skeleton:d,albumCard:n}=this.getCardsByType();return B(l,()=>this.state.loaded=!0),e({onState:["loaded",w=>w?n({src:l,title:s,artist:o}):d()]})}}),q=({title:l,description:s})=>g([S({class:"text-2xl font-semibold tracking-tight"},l),u({class:"text-sm text-muted-foreground mb-4"},s)]),c=({title:l,description:s,albums:o,cardType:d="large"})=>y({class:"my-8"},[q({title:l,description:s}),e({class:"overflow-x-auto lg:overflow-x-none -ml-6 pl-6"},[e({class:"inline-flex space-x-4 pb-4 mr-6 lg:mr-0",map:[o,n=>new I({src:n.src,title:n.title,artist:n.artist,cardType:d})]})])]),U=()=>e({class:"w-full"},[c({title:"Latest Podcasts",description:"Listen to the latest podcasts from your favorite creators.",albums:r(5),cardType:"large"})]),N=()=>e({class:"col-span-4 2xl:mx-auto 2xl:max-w-[1400px]"},[g({class:"sm:py-4 sm:pb-0 px-6 flex flex-col lg:hidden"},[v({class:"scroll-m-20 text-3xl font-bold tracking-tight"},"Discover")]),e({class:"p-6 px-6 pr-0 md:pr-4 py-6 lg:px-8"},[k(),e({addState(){return{mode:"music"}},onState:["mode",l=>l==="music"?[c({title:"Listen Now",description:"Top picks for you. Updated daily.",albums:r(5),cardType:"large"}),c({title:"Made for You",description:"Your personal playlists. Updated daily.",albums:r(8),cardType:"small"}),c({title:"Recently Played",description:"Your recently played albums and playlists.",albums:r(8),cardType:"small"}),c({title:"Popular Playlists",description:"Popular playlists from around the world.",albums:r(8),cardType:"small"}),c({title:"New Releases",description:"New albums and singles from your favorite artists.",albums:r(8),cardType:"small"})]:U()]})])]),t="music",Y=()=>A({title:"Discover",options:[{label:"Listen Now",href:`${t}`,icon:a.playing,exact:!0},{label:"Browse",href:`${t}/browse`,icon:a.square.grid},{label:"Radio",href:`${t}/radio`,icon:a.signal},{group:"Library",options:[{label:"Playlists",href:`${t}/playlists`,icon:a.list.down},{label:"Songs",href:`${t}/songs`,icon:a.music},{label:"Made for You",href:`${t}/made-for-you`,icon:a.user.default},{label:"Artists",href:`${t}/artists`,icon:a.speaker.default},{label:"Albums",href:`${t}/albums`,icon:a.square.stack}]},{group:"Playlists",options:[{label:"Recently Added",href:`${t}/recently-added`,icon:a.list.down},{label:"Recently Played",href:`${t}/recently-played`,icon:a.list.down},{label:"Top Songs",href:`${t}/top-songs`,icon:a.list.down},{label:"Top Albums",href:`${t}/top-albums`,icon:a.list.down}]}]}),D=()=>new $([e({class:"grid grid-cols-1 lg:grid-cols-5 h-full lg:border-t"},[Y(),e({class:"col-span-4"},[N()])])]);export{D as MusicPage,D as default};
