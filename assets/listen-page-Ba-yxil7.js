import{ac as v,o as m,Y as t,g as o,ah as P,w as f,e as S,J as h,t as x,a8 as g,G as n,u as y,l as T,b as k,ap as L,r as C}from"./index-CBwswux2.js";import{u as q,e as $}from"./signature-panel-BFels99c-FHnYLQ_Z.js";import{I as b,c as r,M,D as d}from"./tooltip-Dxg9P7AJ-CR-yZqXi.js";import{a as G,b as c}from"./albums-DFR-efQR.js";const w=e=>new v({title:"Add Music",icon:m.pencil.square,description:"What album would you like to add?",size:"sm",type:"right",onSubmit:()=>app.notify({type:"success",title:"Music Added",description:"The music has been added.",icon:m.check})},[t({class:"flex flex-col lg:p-4 space-y-8"},[t({class:"flex flex-auto flex-col w-full gap-4"},[b({legend:"Artist Settings"},[new o({name:"artist",label:"Artists",description:"The name of the Artist."},[r({type:"text",placeholder:"Artist name",required:!0})]),new o({name:"location",label:"Location",description:"The location of the artist."},[r({type:"text",placeholder:"Location",required:!0})]),new o({name:"website",label:"Website",description:"The website of the artist."},[r({type:"text",placeholder:"Website",required:!0})])]),b({legend:"Album Details"},[new o({name:"album",label:"Album",description:"The name of the Album."},[r({type:"text",placeholder:"Album name",required:!0})]),new o({name:"year",label:"Year",description:"The year the album was released."},[r({type:"text",placeholder:"Year released",required:!0})]),new o({name:"genre",label:"Genre",description:"The genre of the music."},[r({type:"text",placeholder:"Genre",required:!0})]),new o({name:"duration",label:"Duration",description:"The duration of the music."},[r({type:"text",placeholder:"Duration",required:!0})]),new o({name:"tracks",label:"Tracks",description:"The number of tracks in the album."},[new P({class:"max-w-[300px]",initialCount:0,min:0,max:200,readonly:!1,bind:"tracks",change:s=>console.log(s)})])])])])]).open(),R=()=>t({class:"justify-between flex flex-auto items-center"},[new q({options:[{label:"Music",value:"music"},{label:"Podcasts",value:"podcasts"},{label:"Live",value:"live",disabled:!0}],onSelect:(e,{state:s})=>s.mode=e}),t({class:"hidden lg:inline-flex"},[f({variant:"withIcon",class:"text-muted-foreground hidden",icon:m.circlePlus,click:w},"Add music")]),t({class:"flex lg:hidden mr-4"},[M({content:"Add music",position:"left"},f({variant:"icon",class:"outline",icon:m.circlePlus,click:w}))])]),A="music",Y=()=>t({class:"space-y-2 w-[180px] md:w-[250px]"},[d({width:"w-full",height:"h-[240px] md:h-[333.33px]",shape:"rectangle",class:"rounded-md"}),d({width:"w-3/4",height:"h-4",class:"mt-2"}),d({width:"w-1/2",height:"h-[14px]"})]),j=()=>t({class:"space-y-2 w-[150px]"},[d({width:"w-full",height:"h-[150px]",shape:"square",class:"rounded-md"}),d({width:"w-3/4",height:"h-4",class:"mt-2"}),d({width:"w-1/2",height:"h-[14px]"})]),D=({src:e,title:s,artist:a})=>t({class:"space-y-3 w-[180px] md:w-[250px]"},[t({class:"overflow-hidden rounded-md aspect-[3/4] w-full"},[h({href:`${A}/album/${s.replace(/\s+/g,"-").toLowerCase()}`},[x({src:e,alt:s,class:"w-auto object-cover transition-all hover:scale-105 aspect-[3/4]"})])]),t({class:"space-y-1 text-sm"},[g({class:"font-medium leading-none"},s),n({class:"text-xs text-muted-foreground"},a)])]),N=({src:e,title:s,artist:a})=>t({class:"space-y-3 w-[150px]"},[t({class:"overflow-hidden rounded-md w-full aspect-square"},[h({href:`${A}/album/${s.replace(/\s+/g,"-").toLowerCase()}`},[x({src:e,alt:s,class:"w-auto object-cover transition-all hover:scale-105 aspect-square"})])]),t({class:"space-y-1 text-sm"},[g({class:"font-medium leading-none"},s),n({class:"text-xs text-muted-foreground"},a)])]),I=(e,s)=>{const a=new Image;a.src=e,a.onload=s},U=S({state:{loaded:!1},getCardsByType(){return this.cardType==="large"?{skeleton:Y,albumCard:D}:{skeleton:j,albumCard:N}},render(){const{src:e,title:s,artist:a}=this,{skeleton:u,albumCard:l}=this.getCardsByType();return I(e,()=>this.state.loaded=!0),t({onState:["loaded",p=>p?l({src:e,title:s,artist:a}):u()]})}}),_=({title:e,description:s})=>T([k({class:"text-2xl font-semibold tracking-tight"},e),n({class:"text-sm text-muted-foreground mb-4"},s)]),i=({title:e,description:s,albums:a,cardType:u="large"})=>y({class:"my-8"},[_({title:e,description:s}),t({class:"overflow-x-auto -mx-6 pl-6"},[t({class:"inline-flex space-x-4 pb-4 mr-6 lg:mr-0",map:[a,l=>new U({src:l.src,title:l.title,artist:l.artist,cardType:u})]})])]),Q="music",W=e=>t({class:"flex items-center min-w-[380px] pr-8"},[h({class:"flex flex-auto space-x-4",href:`${Q}/album/${e.albumTitle.replace(/\s+/g,"-").toLowerCase()}`},[x({src:e.src,alt:e.albumTitle,class:"w-12 h-12 object-cover rounded"}),t({class:"flex flex-col"},[n({class:"text-sm font-medium"},e.title),n({class:"text-xs text-muted-foreground"},`${e.artist} • ${L.limit(e.albumTitle,10)}`),n({class:"text-xs text-muted-foreground"},e.duration)])])]),B=()=>{const e=G(),s=5,a=3;return t({class:"grid grid-cols-5 gap-6"},[...Array.from({length:s}).map((u,l)=>{const p=e.slice(l*a,(l+1)*a);return t({class:"space-y-4",map:[p,W]})})])},E=()=>t({class:"flex justify-between items-center mb-4"},[k({class:"text-2xl font-semibold tracking-tight"},"Quick Picks")]),H=()=>y([E(),t({class:"overflow-x-auto -mx-6 pl-6 pb-2"},[t({class:"min-w-[1200px]"},[B()])])]),z=()=>[i({title:"Listen Now",description:"Top picks for you. Updated daily.",albums:c(5),cardType:"large"}),i({title:"Made for You",description:"Your personal playlists. Updated daily.",albums:c(8),cardType:"small"}),i({title:"Recently Played",description:"Your recently played albums and playlists.",albums:c(8),cardType:"small"}),H(),i({title:"Popular Playlists",description:"Popular playlists from around the world.",albums:c(8),cardType:"small"}),i({title:"New Releases",description:"New albums and singles from your favorite artists.",albums:c(8),cardType:"small"})],J=()=>t({class:"w-full"},[i({title:"Latest Podcasts",description:"Listen to the latest podcasts from your favorite creators.",albums:c(5),cardType:"large"})]),X=()=>new $([t({class:"mx-auto max-w-[1400px]"},[T({class:"sm:py-4 sm:pb-0 px-6 flex flex-col lg:hidden"},[C({class:"scroll-m-20 text-3xl font-bold tracking-tight"},"Discover")]),t({class:"p-6 px-6 md:pr-4 py-6 lg:px-8"},[R(),t({addState(){return{mode:"music"}},onState:["mode",e=>e==="music"?z():J()]})])])]);export{X as ListenPage,X as default};
