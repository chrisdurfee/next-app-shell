import{_ as y,m as e,S as r,T as h,k as f,I as g,a as u,R as v,U as p,F as $,C as x,b as T,c as l,B as m,g as i}from"./index-DO2U5WaY.js";import{T as k}from"./tooltip-S9wO0YkN.js";import{T as A}from"./tab-group-CMtMYn-X.js";import{B as P}from"./blank-page-Cf79vRvk.js";const b="music",S=()=>e({class:"space-y-2 w-[180px] md:w-[250px]"},[r({width:"w-full",height:"h-[240px] md:h-[333.33px]",shape:"rectangle",class:"rounded-md"}),r({width:"w-3/4",height:"h-4",class:"mt-2"}),r({width:"w-1/2",height:"h-[14px]"})]),C=()=>e({class:"space-y-2 w-[150px]"},[r({width:"w-full",height:"h-[150px]",shape:"square",class:"rounded-md"}),r({width:"w-3/4",height:"h-4",class:"mt-2"}),r({width:"w-1/2",height:"h-[14px]"})]),L=({src:a,title:s,artist:o})=>e({class:"space-y-3 w-[180px] md:w-[250px]"},[e({class:"overflow-hidden rounded-md aspect-[3/4] w-full"},[h({href:`${b}/album/${s.replace(/\s+/g,"-").toLowerCase()}`},[f({src:a,alt:s,class:"w-auto object-cover transition-all hover:scale-105 aspect-[3/4]"})])]),e({class:"space-y-1 text-sm"},[g({class:"font-medium leading-none"},s),u({class:"text-xs text-muted-foreground"},o)])]),R=({src:a,title:s,artist:o})=>e({class:"space-y-3 w-[150px]"},[e({class:"overflow-hidden rounded-md w-full aspect-square"},[h({href:`${b}/album/${s.replace(/\s+/g,"-").toLowerCase()}`},[f({src:a,alt:s,class:"w-auto object-cover transition-all hover:scale-105 aspect-square"})])]),e({class:"space-y-1 text-sm"},[g({class:"font-medium leading-none"},s),u({class:"text-xs text-muted-foreground"},o)])]),M=(a,s)=>{const o=new Image;o.src=a,o.onload=s},B=y({state:{loaded:!1},getCardsByType(){return this.cardType==="large"?{skeleton:S,albumCard:L}:{skeleton:C,albumCard:R}},render(){const{src:a,title:s,artist:o}=this,{skeleton:d,albumCard:c}=this.getCardsByType();return M(a,()=>this.state.loaded=!0),e({onState:["loaded",w=>w?c({src:a,title:s,artist:o}):d()]})}}),I=({title:a,description:s})=>p([$({class:"text-2xl font-semibold tracking-tight"},a),u({class:"text-sm text-muted-foreground mb-4"},s)]),n=({title:a,description:s,albums:o,cardType:d="large"})=>v({class:"my-8"},[I({title:a,description:s}),e({class:"overflow-x-auto lg:overflow-x-none"},[e({class:"inline-flex space-x-4 pb-4 mr-6 lg:mr-0",map:[o,c=>new B({src:c.src,title:c.title,artist:c.artist,cardType:d})]})])]),t="music",q=()=>e({class:"pb-12 hidden lg:block p-6 border-r bg-sidebar max-w-[300px] h-full"},[p({class:"pb-2 px-6 flex flex-col"},[x({class:"scroll-m-20 text-2xl font-bold tracking-tight"},"Discover")]),new T({options:[{label:"Listen Now",href:`${t}`,icon:l.playing,exact:!0},{label:"Browse",href:`${t}/browse`,icon:l.square.grid},{label:"Radio",href:`${t}/radio`,icon:l.signal},{group:"Library",options:[{label:"Playlists",href:`${t}/playlists`,icon:l.list.down},{label:"Songs",href:`${t}/songs`,icon:l.music},{label:"Made for You",href:`${t}/made-for-you`,icon:l.user.default},{label:"Artists",href:`${t}/artists`,icon:l.speaker.default},{label:"Albums",href:`${t}/albums`,icon:l.square.stack}]},{group:"Playlists",options:[{label:"Recently Added",href:`${t}/recently-added`,icon:l.list.down},{label:"Recently Played",href:`${t}/recently-played`,icon:l.list.down},{label:"Top Songs",href:`${t}/top-songs`,icon:l.list.down},{label:"Top Albums",href:`${t}/top-albums`,icon:l.list.down}]}]})]),N=()=>e({class:"justify-between flex flex-auto items-center"},[new A({options:[{label:"Music",value:"music"},{label:"Podcasts",value:"podcasts"},{label:"Live",value:"live"}]}),e({class:"hidden lg:inline-flex"},[m({variant:"withIcon",class:"text-muted-foreground mb-8 hidden",icon:l.circlePlus},"Add music")]),e({class:"flex lg:hidden mr-4"},[k({content:"Add music",position:"left"},m({variant:"icon",icon:l.circlePlus}))])]),U=()=>e({class:"col-span-4 2xl:mx-auto 2xl:max-w-[1600px]"},[p({class:"sm:py-4 sm:pb-0 px-6 flex flex-col lg:hidden"},[x({class:"scroll-m-20 text-3xl font-bold tracking-tight"},"Discover")]),e({class:"p-6 px-6 pr-0 md:pr-4 py-6 lg:px-8"},[N(),n({title:"Listen Now",description:"Top picks for you. Updated daily.",albums:i(5),cardType:"large"}),n({title:"Made for You",description:"Your personal playlists. Updated daily.",albums:i(8),cardType:"small"}),n({title:"Recently Played",description:"Your recently played albums and playlists.",albums:i(8),cardType:"small"}),n({title:"Popular Playlists",description:"Popular playlists from around the world.",albums:i(8),cardType:"small"}),n({title:"New Releases",description:"New albums and singles from your favorite artists.",albums:i(8),cardType:"small"})])]),D=()=>new P([e({class:"grid grid-cols-1 lg:grid-cols-5 h-full lg:border-t"},[q(),e({class:"col-span-4 2xl:mx-auto 2xl:max-w-[1600px]"},[U()])])]);export{D as MusicPage,D as default};
