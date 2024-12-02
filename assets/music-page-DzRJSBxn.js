import{I as e,a as k,b as l,z as p,w as r,F as v,c as $,T as A,B as h,d as S,_ as M,S as d,E as f,K as x,G as w,t as y,e as T,g as i,f as L,v as C,j as R,h as B,i as j,P as b}from"./index-BaEkqfgn.js";import{M as q}from"./modal-muy4_etR.js";const I=()=>e({class:"flex flex-col items-center justify-center text-center p-6 space-y-4 bg-background border rounded-lg min-h-96 m-4"},[k({size:"xl"},l.music),p({class:"text-lg font-semibold"},"The Browse Page"),r({class:"text-muted-foreground"},"This is a placeholder for the browse page.")]),g=s=>new q({title:"Add Music",icon:l.pencil.square,description:"What album would you like to add?",size:"sm",type:"right",onSubmit:()=>app.notify({type:"success",title:"Music Added",description:"The code has been copied to your clipboard.",icon:l.check})},[e({class:"flex flex-col max-w-lg lg:p-4 space-y-8"},[e({class:"flex flex-auto w-full gap-4"},[new v({name:"artist",label:"Artists",description:"The name of the Artist."},[$({type:"text",placeholder:"Artist name",required:!0})])])])]).open(),G=()=>e({class:"justify-between flex flex-auto items-center"},[new A({options:[{label:"Music",value:"music"},{label:"Podcasts",value:"podcasts"},{label:"Live",value:"live",disabled:!0}],onSelect:(s,{state:t})=>t.mode=s}),e({class:"hidden lg:inline-flex"},[h({variant:"withIcon",class:"text-muted-foreground mb-8 hidden",icon:l.circlePlus,click:g},"Add music")]),e({class:"flex lg:hidden mr-4"},[S({content:"Add music",position:"left"},h({variant:"icon",class:"outline",icon:l.circlePlus,click:g}))])]),P="music",N=()=>e({class:"space-y-2 w-[180px] md:w-[250px]"},[d({width:"w-full",height:"h-[240px] md:h-[333.33px]",shape:"rectangle",class:"rounded-md"}),d({width:"w-3/4",height:"h-4",class:"mt-2"}),d({width:"w-1/2",height:"h-[14px]"})]),U=()=>e({class:"space-y-2 w-[150px]"},[d({width:"w-full",height:"h-[150px]",shape:"square",class:"rounded-md"}),d({width:"w-3/4",height:"h-4",class:"mt-2"}),d({width:"w-1/2",height:"h-[14px]"})]),_=({src:s,title:t,artist:a})=>e({class:"space-y-3 w-[180px] md:w-[250px]"},[e({class:"overflow-hidden rounded-md aspect-[3/4] w-full"},[f({href:`${P}/album/${t.replace(/\s+/g,"-").toLowerCase()}`},[x({src:s,alt:t,class:"w-auto object-cover transition-all hover:scale-105 aspect-[3/4]"})])]),e({class:"space-y-1 text-sm"},[w({class:"font-medium leading-none"},t),r({class:"text-xs text-muted-foreground"},a)])]),E=({src:s,title:t,artist:a})=>e({class:"space-y-3 w-[150px]"},[e({class:"overflow-hidden rounded-md w-full aspect-square"},[f({href:`${P}/album/${t.replace(/\s+/g,"-").toLowerCase()}`},[x({src:s,alt:t,class:"w-auto object-cover transition-all hover:scale-105 aspect-square"})])]),e({class:"space-y-1 text-sm"},[w({class:"font-medium leading-none"},t),r({class:"text-xs text-muted-foreground"},a)])]),Y=(s,t)=>{const a=new Image;a.src=s,a.onload=t},z=M({state:{loaded:!1},getCardsByType(){return this.cardType==="large"?{skeleton:N,albumCard:_}:{skeleton:U,albumCard:E}},render(){const{src:s,title:t,artist:a}=this,{skeleton:u,albumCard:c}=this.getCardsByType();return Y(s,()=>this.state.loaded=!0),e({onState:["loaded",m=>m?c({src:s,title:t,artist:a}):u()]})}}),F=({title:s,description:t})=>T([p({class:"text-2xl font-semibold tracking-tight"},s),r({class:"text-sm text-muted-foreground mb-4"},t)]),n=({title:s,description:t,albums:a,cardType:u="large"})=>y({class:"my-8"},[F({title:s,description:t}),e({class:"overflow-x-auto lg:overflow-x-none -mx-6 pl-6"},[e({class:"inline-flex space-x-4 pb-4 mr-6 lg:mr-0",map:[a,c=>new z({src:c.src,title:c.title,artist:c.artist,cardType:u})]})])]),Q=()=>e({class:"w-full"},[n({title:"Latest Podcasts",description:"Listen to the latest podcasts from your favorite creators.",albums:i(5),cardType:"large"})]),D="music",H=s=>e({class:"flex items-center min-w-[380px] pr-8"},[f({class:"flex flex-auto space-x-4",href:`${D}/album/${s.albumTitle.replace(/\s+/g,"-").toLowerCase()}`},[x({src:s.src,alt:s.albumTitle,class:"w-12 h-12 object-cover rounded"}),e({class:"flex flex-col"},[r({class:"text-sm font-medium"},s.title),r({class:"text-xs text-muted-foreground"},`${s.artist} • ${C.limit(s.albumTitle,10)}`),r({class:"text-xs text-muted-foreground"},s.duration)])])]),K=()=>{const s=L(),t=5,a=3;return e({class:"grid grid-cols-5 gap-6"},[...Array.from({length:t}).map((u,c)=>{const m=s.slice(c*a,(c+1)*a);return e({class:"space-y-4",map:[m,H]})})])},W=()=>e({class:"flex justify-between items-center mb-4"},[p({class:"text-2xl font-semibold tracking-tight"},"Quick Picks")]),J=()=>y([W(),e({class:"overflow-x-auto -mx-6 pl-6 pb-2"},[e({class:"min-w-[1200px]"},[K()])])]),O=()=>e({class:"col-span-4 2xl:mx-auto 2xl:max-w-[1400px]"},[T({class:"sm:py-4 sm:pb-0 px-6 flex flex-col lg:hidden"},[R({class:"scroll-m-20 text-3xl font-bold tracking-tight"},"Discover")]),e({class:"p-6 px-6 md:pr-4 py-6 lg:px-8"},[G(),e({addState(){return{mode:"music"}},onState:["mode",s=>s==="music"?[n({title:"Listen Now",description:"Top picks for you. Updated daily.",albums:i(5),cardType:"large"}),n({title:"Made for You",description:"Your personal playlists. Updated daily.",albums:i(8),cardType:"small"}),n({title:"Recently Played",description:"Your recently played albums and playlists.",albums:i(8),cardType:"small"}),J(),n({title:"Popular Playlists",description:"Popular playlists from around the world.",albums:i(8),cardType:"small"}),n({title:"New Releases",description:"New albums and singles from your favorite artists.",albums:i(8),cardType:"small"})]:Q()]})])]),o="music",V=()=>B({title:"Discover",class:"hidden lg:block w-full",options:[{label:"Listen Now",href:`${o}`,icon:l.playing,exact:!0},{label:"Browse",href:`${o}/browse`,icon:l.square.grid},{label:"Radio",href:`${o}/radio`,icon:l.signal},{group:"Library",options:[{label:"Playlists",href:`${o}/playlists`,icon:l.list.down},{label:"Songs",href:`${o}/songs`,icon:l.music},{label:"Made for You",href:`${o}/made-for-you`,icon:l.user.default},{label:"Artists",href:`${o}/artists`,icon:l.speaker.default},{label:"Albums",href:`${o}/albums`,icon:l.square.stack}]},{group:"Playlists",options:[{label:"Recently Added",href:`${o}/recently-added`,icon:l.list.down},{label:"Recently Played",href:`${o}/recently-played`,icon:l.list.down},{label:"Top Songs",href:`${o}/top-songs`,icon:l.list.down},{label:"Top Albums",href:`${o}/top-albums`,icon:l.list.down}]}]}),ee=()=>new j([e({class:"flex flex-auto flex-col lg:flex-row max-w-[100vw] h-full"},[V(),e({class:"flex flex-auto flex-col",switch:[{uri:"/music",component:new b([O()])},{uri:"music/browse",component:new b([I()])}]})])]);export{ee as MusicPage,ee as default};
