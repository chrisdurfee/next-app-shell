import{w as f,a as m,D as h,H as b,b as g,F as w,m as t,B as n,I as a,c as x,d as y,S as i,k as r,e as d}from"./index-B9LOCyb-.js";import{T as v}from"./tooltip-BmW9VziX.js";const k=e=>b({class:"inline-flex flex-auto items-center justify-center whitespace-nowrap rounded-sm text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",dataSet:["selected",["state",e.value,"active"]]},[g({class:"flex flex-auto justify-center items-center px-3 py-1.5",onSet:["selected",{selected:e.value}],click:s=>e.callBack(e.value)},e.label)]),B=(e,s)=>(e.callBack=s,k(e)),A=e=>m({class:`tab items-center justify-center rounded-md bg-muted p-1 text-muted-foreground ${e.class}`},[h({class:"flex flex-auto flex-row",map:[e.options,s=>B(s,e.callBack)]})]);class $ extends f{render(){const s=this.select.bind(this);return A({class:this.class,options:this.options,callBack:s})}select(s){this.state.selected=s}setupStates(){var s;return{selected:((s=this.options[0])==null?void 0:s.value)||null}}}const l="music",q=()=>t({class:"pb-12 hidden lg:block p-6 border-r bg-sidebar h-full"},[new x({options:[{label:"Listen Now",href:`${l}/listen-now`,icon:a.playing},{label:"Browse",href:`${l}/browse`,icon:a.square.grid},{label:"Radio",href:`${l}/radio`,icon:a.signal},{group:"Library",options:[{label:"Playlists",href:`${l}/playlists`,icon:a.list.down},{label:"Songs",href:`${l}/songs`,icon:a.music},{label:"Made for You",href:`${l}/made-for-you`,icon:a.user.default},{label:"Artists",href:`${l}/artists`,icon:a.speaker.default},{label:"Albums",href:`${l}/albums`,icon:a.square.stack}]},{group:"Playlists",options:[{label:"Recently Added",href:`${l}/recently-added`,icon:a.list.down},{label:"Recently Played",href:`${l}/recently-played`,icon:a.list.down},{label:"Top Songs",href:`${l}/top-songs`,icon:a.list.down},{label:"Top Albums",href:`${l}/top-albums`,icon:a.list.down}]}]})]),S=({src:e,title:s,artist:o})=>t({class:"space-y-3 w-[250px]"},[t({class:"overflow-hidden rounded-md"},[r({src:e,alt:s,class:"h-auto w-auto object-cover transition-all hover:scale-105 aspect-[3/4]"})]),t({class:"space-y-1 text-sm"},[d({class:"font-medium leading-none"},s),i({class:"text-xs text-muted-foreground"},o)])]),L=({src:e,title:s,artist:o})=>t({class:"space-y-3 w-[150px]"},[t({class:"overflow-hidden rounded-md"},[r({src:e,alt:s,class:"h-auto w-auto object-cover transition-all hover:scale-105 aspect-square"})]),t({class:"space-y-1 text-sm"},[d({class:"font-medium leading-none"},s),i({class:"text-xs text-muted-foreground"},o)])]),c=({title:e,description:s,albums:o,card:u=S})=>t({class:"my-8"},[y({class:"text-2xl font-semibold tracking-tight"},e),i({class:"text-sm text-muted-foreground mb-4"},s),t({class:"overflow-x-auto lg:overflow-x-none"},[t({class:"inline-flex space-x-4 pb-4"},o.map(p=>u(p)))])]),P=()=>new w({title:"Discover"},[t({class:"grid grid-cols-1 lg:grid-cols-5 h-full lg:border-t"},[q(),t({class:"col-span-4 p-6 px-4 py-6 lg:px-8 2xl:mx-auto 2xl:max-w-[1600px]"},[t({class:"justify-between flex flex-auto items-center"},[new $({options:[{label:"Music",value:"music"},{label:"Podcasts",value:"podcasts"},{label:"Live",value:"live"}]}),t({class:"hidden lg:inline-flex"},[n({variant:"withIcon",class:"text-muted-foreground mb-8 hidden",icon:a.circlePlus},"Add music")]),t({class:"flex lg:hidden"},[v({content:"Add music",position:"left"},n({variant:"icon",icon:a.circlePlus}))])]),c({title:"Listen Now",description:"Top picks for you. Updated daily.",albums:[{src:"https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80",title:"React Rendezvous",artist:"Ethan Byte"},{src:"https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80",title:"Async Awakenings",artist:"Nina Netcode"},{src:"https://images.unsplash.com/photo-1528143358888-6d3c7f67bd5d?w=300&dpr=2&q=80",title:"The Art of Reusability",artist:"Lena Logic"},{src:"https://images.unsplash.com/photo-1490300472339-79e4adc6be4a?w=300&dpr=2&q=80",title:"Stateful Symphony",artist:"Beth Binary"}]}),c({title:"Made for You",description:"Your personal playlists. Updated daily.",card:L,albums:[{src:"https://images.unsplash.com/photo-1615247001958-f4bc92fa6a4a?w=300&dpr=2&q=80",title:"Thinking Components",artist:"Lena Logic"},{src:"https://images.unsplash.com/photo-1513745405825-efaf9a49315f?w=300&dpr=2&q=80",title:"Functional Fury",artist:"Beth Binary"},{src:"https://images.unsplash.com/photo-1614113489855-66422ad300a4?w=300&dpr=2&q=80",title:"React Rendezvous",artist:"Ethan Byte"},{src:"https://images.unsplash.com/photo-1446185250204-f94591f7d702?w=300&dpr=2&q=80",title:"Stateful Symphony",artist:"Beth Binary"},{src:"https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80",title:"Async Awakenings",artist:"Nina Netcode"},{src:"https://images.unsplash.com/photo-1528143358888-6d3c7f67bd5d?w=300&dpr=2&q=80",title:"The Art of Reusability",artist:"Lena Logic"}]})])])]);export{P as MusicPage,P as default};
