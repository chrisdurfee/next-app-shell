import{w as b,a as _,D as k,H as y,b as x,_ as v,m as t,T as m,k as h,I as g,S as p,R as T,U as A,F as S,c as B,d as i,e as C,B as u}from"./index-BDvJPmvu.js";import{T as L}from"./tooltip-DGc-DmyA.js";import{S as o}from"./skeleton-BaRYWD77.js";const P=e=>y({class:"inline-flex flex-auto items-center justify-center whitespace-nowrap rounded-sm text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",dataSet:["selected",["state",e.value,"active"]]},[x({class:"flex flex-auto justify-center items-center px-3 py-1.5",onSet:["selected",{selected:e.value}],click:a=>e.callBack(e.value)},e.label)]),$=(e,a)=>(e.callBack=a,P(e)),I=e=>_({class:`tab items-center justify-center rounded-md bg-muted p-1 text-muted-foreground ${e.class}`},[k({class:"flex flex-auto flex-row",map:[e.options,a=>$(a,e.callBack)]})]);class M extends b{render(){const a=this.select.bind(this);return I({class:this.class,options:this.options,callBack:a})}select(a){this.state.selected=a}setupStates(){var a;return{selected:((a=this.options[0])==null?void 0:a.value)||null}}}const R=[{src:"https://upload.wikimedia.org/wikipedia/en/3/3b/Official_Album_Cover_of_%22The_Downward_Spiral%22_by_Nine_Inch_Nails.png",title:"The Downward Spiral",artist:"Nine Inch Nails"},{src:"https://upload.wikimedia.org/wikipedia/en/7/7c/Nine_Inch_Nails_-_The_Fragile.png",title:"The Fragile",artist:"Nine Inch Nails"},{src:"https://upload.wikimedia.org/wikipedia/en/f/f8/A.perfect.circle.mer.de.noms.jpg",title:"Mer de Noms",artist:"A Perfect Circle"},{src:"https://upload.wikimedia.org/wikipedia/en/d/d8/Warpaint_-_Warpaint_album.jpg",title:"Warpaint",artist:"Warpaint"},{src:"https://upload.wikimedia.org/wikipedia/en/6/60/Coldplay_-_A_Rush_of_Blood_to_the_Head_Cover.png",title:"A Rush of Blood to the Head",artist:"Coldplay"},{src:"https://upload.wikimedia.org/wikipedia/en/f/fd/Coldplay_-_Parachutes.png",title:"Parachutes",artist:"Coldplay"},{src:"https://upload.wikimedia.org/wikipedia/en/b/ba/Radioheadokcomputer.png",title:"OK Computer",artist:"Radiohead"},{src:"https://upload.wikimedia.org/wikipedia/en/9/9b/Tame_Impala_-_Currents.png",title:"Currents",artist:"Tame Impala"},{src:"https://upload.wikimedia.org/wikipedia/en/8/81/Arcade_Fire_-_The_Suburbs.jpg",title:"The Suburbs",artist:"Arcade Fire"},{src:"https://upload.wikimedia.org/wikipedia/en/1/1e/TheBoyWhoDiedWolf.jpg",title:"The Boy Who Died Wolf",artist:"Highly Suspect"},{src:"https://upload.wikimedia.org/wikipedia/en/7/70/MIA_Matangi_Cover.png",title:"Matangi",artist:"M.I.A."},{src:"https://upload.wikimedia.org/wikipedia/en/f/f9/London_Grammar_-_If_You_Wait.png",title:"If You Wait",artist:"London Grammar"},{src:"https://upload.wikimedia.org/wikipedia/en/8/80/TheOffspringSmashalbumcover.jpg",title:"Smash",artist:"The Offspring"},{src:"https://upload.wikimedia.org/wikipedia/en/6/63/Tool_-_Lateralus.jpg",title:"Lateralus",artist:"Tool"},{src:"https://upload.wikimedia.org/wikipedia/en/2/2f/Aenima.jpg",title:"Ænima",artist:"Tool"},{src:"https://upload.wikimedia.org/wikipedia/en/2/2a/Linkin_Park_Hybrid_Theory_Album_Cover.jpg",title:"Hybrid Theory",artist:"Linkin Park"},{src:"https://upload.wikimedia.org/wikipedia/en/2/29/BornToDieAlbumCover.png",title:"Born to Die",artist:"Lana Del Rey"},{src:"https://upload.wikimedia.org/wikipedia/en/2/2f/How_To_Be_A_Human_Being_cover_art.jpg",title:"How to Be a Human Being",artist:"Glass Animals"},{src:"https://upload.wikimedia.org/wikipedia/en/5/54/Tame_Impala_-_The_Slow_Rush.png",title:"The Slow Rush",artist:"Tame Impala"},{src:"https://upload.wikimedia.org/wikipedia/en/5/52/Bangerz.png",title:"Bangerz",artist:"Miley Cyrus"},{src:"https://upload.wikimedia.org/wikipedia/en/7/7e/Madison_Beer_Life_Support.png",title:"Life Support",artist:"Madison Beer"}],n=e=>R.sort(()=>Math.random()-.5).slice(0,e),w="music",j=()=>t({class:"space-y-2 w-[180px] md:w-[250px]"},[o({width:"w-full",height:"h-[240px] md:h-[333.33px]",shape:"rectangle",class:"rounded-md"}),o({width:"w-3/4",height:"h-4",class:"mt-2"}),o({width:"w-1/2",height:"h-[14px]"})]),N=()=>t({class:"space-y-2 w-[150px]"},[o({width:"w-full",height:"h-[150px]",shape:"square",class:"rounded-md"}),o({width:"w-3/4",height:"h-4",class:"mt-2"}),o({width:"w-1/2",height:"h-[14px]"})]),H=({src:e,title:a,artist:l})=>t({class:"space-y-3 w-[180px] md:w-[250px]"},[t({class:"overflow-hidden rounded-md aspect-[3/4] w-full"},[m({href:`${w}/album/${a.replace(/\s+/g,"-").toLowerCase()}`},[h({src:e,alt:a,class:"w-auto object-cover transition-all hover:scale-105 aspect-[3/4]"})])]),t({class:"space-y-1 text-sm"},[g({class:"font-medium leading-none"},a),p({class:"text-xs text-muted-foreground"},l)])]),W=({src:e,title:a,artist:l})=>t({class:"space-y-3 w-[150px]"},[t({class:"overflow-hidden rounded-md w-full aspect-square"},[m({href:`${w}/album/${a.replace(/\s+/g,"-").toLowerCase()}`},[h({src:e,alt:a,class:"w-auto object-cover transition-all hover:scale-105 aspect-square"})])]),t({class:"space-y-1 text-sm"},[g({class:"font-medium leading-none"},a),p({class:"text-xs text-muted-foreground"},l)])]),D=(e,a)=>{const l=new Image;l.src=e,l.onload=a},F=v({state:{loaded:!1},getCardsByType(){return this.cardType==="large"?{skeleton:j,albumCard:H}:{skeleton:N,albumCard:W}},render(){const{src:e,title:a,artist:l}=this,{skeleton:c,albumCard:r}=this.getCardsByType();return D(e,()=>this.state.loaded=!0),t({onState:["loaded",f=>f?r({src:e,title:a,artist:l}):c()]})}}),G=({title:e,description:a})=>A([S({class:"text-2xl font-semibold tracking-tight"},e),p({class:"text-sm text-muted-foreground mb-4"},a)]),d=({title:e,description:a,albums:l,cardType:c="large"})=>T({class:"my-8"},[G({title:e,description:a}),t({class:"overflow-x-auto lg:overflow-x-none"},[t({class:"inline-flex space-x-4 pb-4",map:[l,r=>new F({src:r.src,title:r.title,artist:r.artist,cardType:c})]})])]),s="music",U=()=>t({class:"pb-12 hidden lg:block p-6 border-r bg-sidebar h-full"},[new B({options:[{label:"Listen Now",href:`${s}/listen-now`,icon:i.playing},{label:"Browse",href:`${s}/browse`,icon:i.square.grid},{label:"Radio",href:`${s}/radio`,icon:i.signal},{group:"Library",options:[{label:"Playlists",href:`${s}/playlists`,icon:i.list.down},{label:"Songs",href:`${s}/songs`,icon:i.music},{label:"Made for You",href:`${s}/made-for-you`,icon:i.user.default},{label:"Artists",href:`${s}/artists`,icon:i.speaker.default},{label:"Albums",href:`${s}/albums`,icon:i.square.stack}]},{group:"Playlists",options:[{label:"Recently Added",href:`${s}/recently-added`,icon:i.list.down},{label:"Recently Played",href:`${s}/recently-played`,icon:i.list.down},{label:"Top Songs",href:`${s}/top-songs`,icon:i.list.down},{label:"Top Albums",href:`${s}/top-albums`,icon:i.list.down}]}]})]),Y=()=>t({class:"justify-between flex flex-auto items-center"},[new M({options:[{label:"Music",value:"music"},{label:"Podcasts",value:"podcasts"},{label:"Live",value:"live"}]}),t({class:"hidden lg:inline-flex"},[u({variant:"withIcon",class:"text-muted-foreground mb-8 hidden",icon:i.circlePlus},"Add music")]),t({class:"flex lg:hidden mr-4"},[L({content:"Add music",position:"left"},u({variant:"icon",icon:i.circlePlus}))])]),q=()=>t({class:"col-span-4 2xl:mx-auto 2xl:max-w-[1600px]"},[Y(),d({title:"Listen Now",description:"Top picks for you. Updated daily.",albums:n(5),cardType:"large"}),d({title:"Made for You",description:"Your personal playlists. Updated daily.",albums:n(8),cardType:"small"}),d({title:"Recently Played",description:"Your recently played albums and playlists.",albums:n(8),cardType:"small"}),d({title:"Popular Playlists",description:"Popular playlists from around the world.",albums:n(8),cardType:"small"}),d({title:"New Releases",description:"New albums and singles from your favorite artists.",albums:n(8),cardType:"small"})]),K=()=>new C({title:"Discover"},[t({class:"grid grid-cols-1 lg:grid-cols-5 h-full lg:border-t"},[U(),t({class:"col-span-4 p-6 px-6 pr-0 md:pr-4 py-6 lg:px-8 2xl:mx-auto 2xl:max-w-[1600px]"},[q()])])]);export{K as MusicPage,K as default};
