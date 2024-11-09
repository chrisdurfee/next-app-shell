import{w as m,a as f,D as b,H as g,b as y,F as w,m as s,B as c,I as a,c as x,d as v,S as n,k as d,e as u}from"./index-DH25Mzjw.js";import{T as B}from"./tooltip-CROMKnQO.js";const q=t=>g({class:"inline-flex flex-auto items-center justify-center whitespace-nowrap rounded-sm text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",dataSet:["selected",["state",t.value,"active"]]},[y({class:"flex flex-auto justify-center items-center px-3 py-1.5",onSet:["selected",{selected:t.value}],click:e=>t.callBack(t.value)},t.label)]),k=(t,e)=>(t.callBack=e,q(t)),A=t=>f({class:`tab items-center justify-center rounded-md bg-muted p-1 text-muted-foreground ${t.class}`},[b({class:"flex flex-auto flex-row",map:[t.options,e=>k(e,t.callBack)]})]);class L extends m{render(){const e=this.select.bind(this);return A({class:this.class,options:this.options,callBack:e})}select(e){this.state.selected=e}setupStates(){var e;return{selected:((e=this.options[0])==null?void 0:e.value)||null}}}const l="music",S=()=>s({class:"pb-12 hidden lg:block p-6 border-r bg-sidebar h-full"},[new x({options:[{label:"Listen Now",href:`${l}/listen-now`,icon:a.playing},{label:"Browse",href:`${l}/browse`,icon:a.square.grid},{label:"Radio",href:`${l}/radio`,icon:a.signal},{group:"Library",options:[{label:"Playlists",href:`${l}/playlists`,icon:a.list.down},{label:"Songs",href:`${l}/songs`,icon:a.music},{label:"Made for You",href:`${l}/made-for-you`,icon:a.user.default},{label:"Artists",href:`${l}/artists`,icon:a.speaker.default},{label:"Albums",href:`${l}/albums`,icon:a.square.stack}]},{group:"Playlists",options:[{label:"Recently Added",href:`${l}/recently-added`,icon:a.list.down},{label:"Recently Played",href:`${l}/recently-played`,icon:a.list.down},{label:"Top Songs",href:`${l}/top-songs`,icon:a.list.down},{label:"Top Albums",href:`${l}/top-albums`,icon:a.list.down}]}]})]),R=({src:t,title:e,artist:o})=>s({class:"space-y-3 w-[180px] md:w-[250px]"},[s({class:"overflow-hidden rounded-md"},[d({src:t,alt:e,class:"h-auto w-auto object-cover transition-all hover:scale-105 aspect-[3/4]"})]),s({class:"space-y-1 text-sm"},[u({class:"font-medium leading-none"},e),n({class:"text-xs text-muted-foreground"},o)])]),r=({src:t,title:e,artist:o})=>s({class:"space-y-3 w-[150px]"},[s({class:"overflow-hidden rounded-md"},[d({src:t,alt:e,class:"h-auto w-auto object-cover transition-all hover:scale-105 aspect-square"})]),s({class:"space-y-1 text-sm"},[u({class:"font-medium leading-none"},e),n({class:"text-xs text-muted-foreground"},o)])]),i=({title:t,description:e,albums:o,card:p=R})=>s({class:"my-8"},[v({class:"text-2xl font-semibold tracking-tight"},t),n({class:"text-sm text-muted-foreground mb-4"},e),s({class:"overflow-x-auto lg:overflow-x-none"},[s({class:"inline-flex space-x-4 pb-4"},o.map(h=>p(h)))])]),N=()=>new w({title:"Discover"},[s({class:"grid grid-cols-1 lg:grid-cols-5 h-full lg:border-t"},[S(),s({class:"col-span-4 p-6 px-4 py-6 lg:px-8 2xl:mx-auto 2xl:max-w-[1600px]"},[s({class:"justify-between flex flex-auto items-center"},[new L({options:[{label:"Music",value:"music"},{label:"Podcasts",value:"podcasts"},{label:"Live",value:"live"}]}),s({class:"hidden lg:inline-flex"},[c({variant:"withIcon",class:"text-muted-foreground mb-8 hidden",icon:a.circlePlus},"Add music")]),s({class:"flex lg:hidden"},[B({content:"Add music",position:"left"},c({variant:"icon",icon:a.circlePlus}))])]),i({title:"Listen Now",description:"Top picks for you. Updated daily.",albums:[{src:"https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80",title:"React Rendezvous",artist:"Ethan Byte"},{src:"https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80",title:"Async Awakenings",artist:"Nina Netcode"},{src:"https://images.unsplash.com/photo-1528143358888-6d3c7f67bd5d?w=300&dpr=2&q=80",title:"The Art of Reusability",artist:"Lena Logic"},{src:"https://images.unsplash.com/photo-1490300472339-79e4adc6be4a?w=300&dpr=2&q=80",title:"Stateful Symphony",artist:"Beth Binary"}]}),i({title:"Made for You",description:"Your personal playlists. Updated daily.",card:r,albums:[{src:"https://images.unsplash.com/photo-1615247001958-f4bc92fa6a4a?w=300&dpr=2&q=80",title:"Thinking Components",artist:"Lena Logic"},{src:"https://images.unsplash.com/photo-1513745405825-efaf9a49315f?w=300&dpr=2&q=80",title:"Functional Fury",artist:"Beth Binary"},{src:"https://images.unsplash.com/photo-1614113489855-66422ad300a4?w=300&dpr=2&q=80",title:"React Rendezvous",artist:"Ethan Byte"},{src:"https://images.unsplash.com/photo-1446185250204-f94591f7d702?w=300&dpr=2&q=80",title:"Stateful Symphony",artist:"Beth Binary"},{src:"https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80",title:"Async Awakenings",artist:"Nina Netcode"},{src:"https://images.unsplash.com/photo-1528143358888-6d3c7f67bd5d?w=300&dpr=2&q=80",title:"The Art of Reusability",artist:"Lena Logic"}]}),i({title:"Recently Played",description:"Your recently played albums and playlists.",card:r,albums:[{src:"https://images.unsplash.com/photo-1615247001958-f4bc92fa6a4a?w=300&dpr=2&q=80",title:"Thinking Components",artist:"Lena Logic"},{src:"https://images.unsplash.com/photo-1513745405825-efaf9a49315f?w=300&dpr=2&q=80",title:"Functional Fury",artist:"Beth Binary"},{src:"https://images.unsplash.com/photo-1614113489855-66422ad300a4?w=300&dpr=2&q=80",title:"React Rendezvous",artist:"Ethan Byte"},{src:"https://images.unsplash.com/photo-1446185250204-f94591f7d702?w=300&dpr=2&q=80",title:"Stateful Symphony",artist:"Beth Binary"},{src:"https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80",title:"Async Awakenings",artist:"Nina Netcode"},{src:"https://images.unsplash.com/photo-1528143358888-6d3c7f67bd5d?w=300&dpr=2&q=80",title:"The Art of Reusability",artist:"Lena Logic"}]})])])]);export{N as MusicPage,N as default};
