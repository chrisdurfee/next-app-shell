import{S as T,Y as e,$ as P,o as l,a as h,G as n,x as L,L as w,f as c,c as i,T as S,b as q,r as g,D as C,_ as M,V as m,J as x,t as b,s as A,u as k,l as $,g as d,d as R,v as G,e as Y,F as j,K as D}from"./index-B03iGA6z.js";const N=()=>new T([e({class:"flex flex-col items-center justify-center text-center p-6 space-y-4 bg-background border rounded-lg min-h-96 m-4"},[P({size:"xl"},l.music),h({class:"text-lg font-semibold"},"The Browse Page"),n({class:"text-muted-foreground"},"This is a placeholder for the browse page.")])]),y=s=>new L({title:"Add Music",icon:l.pencil.square,description:"What album would you like to add?",size:"sm",type:"right",onSubmit:()=>app.notify({type:"success",title:"Music Added",description:"The music has been added.",icon:l.check})},[e({class:"flex flex-col lg:p-4 space-y-8"},[e({class:"flex flex-auto flex-col w-full gap-4"},[w({legend:"Artist Settings"},[new c({name:"artist",label:"Artists",description:"The name of the Artist."},[i({type:"text",placeholder:"Artist name",required:!0})]),new c({name:"location",label:"Location",description:"The location of the artist."},[i({type:"text",placeholder:"Location",required:!0})]),new c({name:"website",label:"Website",description:"The website of the artist."},[i({type:"text",placeholder:"Website",required:!0})])]),w({legend:"Album Details"},[new c({name:"album",label:"Album",description:"The name of the Album."},[i({type:"text",placeholder:"Album name",required:!0})]),new c({name:"year",label:"Year",description:"The year the album was released."},[i({type:"text",placeholder:"Year released",required:!0})]),new c({name:"genre",label:"Genre",description:"The genre of the music."},[i({type:"text",placeholder:"Genre",required:!0})]),new c({name:"duration",label:"Duration",description:"The duration of the music."},[i({type:"text",placeholder:"Duration",required:!0})]),new c({name:"tracks",label:"Tracks",description:"The number of tracks in the album."},[new S({class:"max-w-[300px]",initialCount:0,min:0,max:200,readonly:!1,bind:"tracks",change:t=>console.log(t)})])])])])]).open(),B=()=>e({class:"justify-between flex flex-auto items-center"},[new q({options:[{label:"Music",value:"music"},{label:"Podcasts",value:"podcasts"},{label:"Live",value:"live",disabled:!0}],onSelect:(s,{state:t})=>t.mode=s}),e({class:"hidden lg:inline-flex"},[g({variant:"withIcon",class:"text-muted-foreground hidden",icon:l.circlePlus,click:y},"Add music")]),e({class:"flex lg:hidden mr-4"},[C({content:"Add music",position:"left"},g({variant:"icon",class:"outline",icon:l.circlePlus,click:y}))])]),v="music",U=()=>e({class:"space-y-2 w-[180px] md:w-[250px]"},[m({width:"w-full",height:"h-[240px] md:h-[333.33px]",shape:"rectangle",class:"rounded-md"}),m({width:"w-3/4",height:"h-4",class:"mt-2"}),m({width:"w-1/2",height:"h-[14px]"})]),_=()=>e({class:"space-y-2 w-[150px]"},[m({width:"w-full",height:"h-[150px]",shape:"square",class:"rounded-md"}),m({width:"w-3/4",height:"h-4",class:"mt-2"}),m({width:"w-1/2",height:"h-[14px]"})]),E=({src:s,title:t,artist:a})=>e({class:"space-y-3 w-[180px] md:w-[250px]"},[e({class:"overflow-hidden rounded-md aspect-[3/4] w-full"},[x({href:`${v}/album/${t.replace(/\s+/g,"-").toLowerCase()}`},[b({src:s,alt:t,class:"w-auto object-cover transition-all hover:scale-105 aspect-[3/4]"})])]),e({class:"space-y-1 text-sm"},[A({class:"font-medium leading-none"},t),n({class:"text-xs text-muted-foreground"},a)])]),I=({src:s,title:t,artist:a})=>e({class:"space-y-3 w-[150px]"},[e({class:"overflow-hidden rounded-md w-full aspect-square"},[x({href:`${v}/album/${t.replace(/\s+/g,"-").toLowerCase()}`},[b({src:s,alt:t,class:"w-auto object-cover transition-all hover:scale-105 aspect-square"})])]),e({class:"space-y-1 text-sm"},[A({class:"font-medium leading-none"},t),n({class:"text-xs text-muted-foreground"},a)])]),Q=(s,t)=>{const a=new Image;a.src=s,a.onload=t},W=M({state:{loaded:!1},getCardsByType(){return this.cardType==="large"?{skeleton:U,albumCard:E}:{skeleton:_,albumCard:I}},render(){const{src:s,title:t,artist:a}=this,{skeleton:p,albumCard:r}=this.getCardsByType();return Q(s,()=>this.state.loaded=!0),e({onState:["loaded",f=>f?r({src:s,title:t,artist:a}):p()]})}}),z=({title:s,description:t})=>$([h({class:"text-2xl font-semibold tracking-tight"},s),n({class:"text-sm text-muted-foreground mb-4"},t)]),u=({title:s,description:t,albums:a,cardType:p="large"})=>k({class:"my-8"},[z({title:s,description:t}),e({class:"overflow-x-auto -mx-6 pl-6"},[e({class:"inline-flex space-x-4 pb-4 mr-6 lg:mr-0",map:[a,r=>new W({src:r.src,title:r.title,artist:r.artist,cardType:p})]})])]),H=()=>e({class:"w-full"},[u({title:"Latest Podcasts",description:"Listen to the latest podcasts from your favorite creators.",albums:d(5),cardType:"large"})]),K="music",F=s=>e({class:"flex items-center min-w-[380px] pr-8"},[x({class:"flex flex-auto space-x-4",href:`${K}/album/${s.albumTitle.replace(/\s+/g,"-").toLowerCase()}`},[b({src:s.src,alt:s.albumTitle,class:"w-12 h-12 object-cover rounded"}),e({class:"flex flex-col"},[n({class:"text-sm font-medium"},s.title),n({class:"text-xs text-muted-foreground"},`${s.artist} • ${G.limit(s.albumTitle,10)}`),n({class:"text-xs text-muted-foreground"},s.duration)])])]),J=()=>{const s=R(),t=5,a=3;return e({class:"grid grid-cols-5 gap-6"},[...Array.from({length:t}).map((p,r)=>{const f=s.slice(r*a,(r+1)*a);return e({class:"space-y-4",map:[f,F]})})])},V=()=>e({class:"flex justify-between items-center mb-4"},[h({class:"text-2xl font-semibold tracking-tight"},"Quick Picks")]),O=()=>k([V(),e({class:"overflow-x-auto -mx-6 pl-6 pb-2"},[e({class:"min-w-[1200px]"},[J()])])]),X=()=>e({class:"mx-auto max-w-[1400px]"},[$({class:"sm:py-4 sm:pb-0 px-6 flex flex-col lg:hidden"},[Y({class:"scroll-m-20 text-3xl font-bold tracking-tight"},"Discover")]),e({class:"p-6 px-6 md:pr-4 py-6 lg:px-8"},[B(),e({addState(){return{mode:"music"}},onState:["mode",s=>s==="music"?[u({title:"Listen Now",description:"Top picks for you. Updated daily.",albums:d(5),cardType:"large"}),u({title:"Made for You",description:"Your personal playlists. Updated daily.",albums:d(8),cardType:"small"}),u({title:"Recently Played",description:"Your recently played albums and playlists.",albums:d(8),cardType:"small"}),O(),u({title:"Popular Playlists",description:"Popular playlists from around the world.",albums:d(8),cardType:"small"}),u({title:"New Releases",description:"New albums and singles from your favorite artists.",albums:d(8),cardType:"small"})]:H()]})])]),o="music",Z=()=>j({title:"Discover",class:"hidden lg:block w-full",options:[{label:"Listen Now",href:`${o}`,icon:l.playing,exact:!0},{label:"Browse",href:`${o}/browse`,icon:l.square.grid},{label:"Radio",href:`${o}/radio`,icon:l.signal},{group:"Library",options:[{label:"Playlists",href:`${o}/playlists`,icon:l.list.down},{label:"Songs",href:`${o}/songs`,icon:l.music},{label:"Made for You",href:`${o}/made-for-you`,icon:l.user.default},{label:"Artists",href:`${o}/artists`,icon:l.speaker.default},{label:"Albums",href:`${o}/albums`,icon:l.square.stack}]},{group:"Playlists",options:[{label:"Recently Added",href:`${o}/recently-added`,icon:l.list.down},{label:"Recently Played",href:`${o}/recently-played`,icon:l.list.down},{label:"Top Songs",href:`${o}/top-songs`,icon:l.list.down},{label:"Top Albums",href:`${o}/top-albums`,icon:l.list.down}]}]}),se=()=>new T([e({class:"flex flex-auto flex-col lg:flex-row max-w-[100vw] h-full"},[Z(),e({class:"flex flex-auto flex-col",switch:[{uri:"music",component:new D([X()])},{uri:"music/browse",component:N}]})])]);export{se as MusicPage,se as default};
