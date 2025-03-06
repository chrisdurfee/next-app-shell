import{B as M,d as U,Y as o,s as u,P as S,a as P,E as Y,Z as x,p as k,S as d,q as v,v as L,H as y,I as $,L as z,M as F,N as Q,O as T,T as H,U as K,z as D,e as X,o as m,w as C,W as q,m as G,G as w,X as V,u as N,a0 as _,a1 as Z,a2 as J,a3 as ee,a4 as I,a5 as B,a6 as te}from"./index-D_Msb8LD.js";import{c as se,K as ae,q as ie}from"./tooltip-Cy5agtG6-CJa6bqPT.js";class Ge extends d{declareProps(){this.class=""}render(){return o({class:this.class||""},this.children)}}const ne=t=>{const e=new Date(t,11,31),s=new Date(t,0,1);return e.getDay()===4||s.getDay()===4},oe=t=>{const e=new Date(t.valueOf()),s=(e.getDay()+6)%7;e.setDate(e.getDate()-s+3);const a=e.getFullYear(),i=new Date(a,0,4);i.setDate(i.getDate()-(i.getDay()+6)%7);const n=Math.ceil((e-i)/6048e5)+1;return n>52&&!ne(a)?{weekNumber:1,year:a+1}:{weekNumber:n,year:a}},le=(t,e,s)=>{if(s===0)return[];const a=new Date(t,e,0).getDate();return Array.from({length:s},(i,n)=>new Date(t,e-1,a-s+n+1))},re=(t,e,s)=>Array.from({length:s},(a,i)=>new Date(t,e+1,i+1)),R=(t,e)=>{const s=new Date(e,0,4),a=(s.getDay()+6)%7,i=new Date(s);i.setDate(s.getDate()-a);const n=new Date(i);return n.setDate(i.getDate()+(t-1)*7),n},ce=(t,e,s)=>{const a=new Date;return a.getDate()===t&&a.getMonth()===e&&a.getFullYear()===s},de=({day:t,month:e,year:s,weekNumber:a,selectWeek:i})=>{const n=ce(t,e,s);return L({text:t||"",disabled:!t,class:`
			px-2 py-1 text-center rounded-md
			${n?"bg-accent text-accent-foreground":""}
			hover:bg-primary hover:text-primary-foreground
		`,click:()=>i(a,s)})},he=(t,e)=>{const s=new Date(t,e,1).getDay(),a=new Date(t,e+1,0).getDate(),i=le(t,e,s),n=Array.from({length:a},(c,g)=>new Date(t,e,g+1)),l=(i.length+n.length)%7,p=l===0?0:7-l,r=re(t,e,p),h=[...i,...n,...r],f=[];for(let c=0;c<h.length;c+=7){const g=h.slice(c,c+7),b=g.find(E=>E)||new Date(t,e,1),{weekNumber:j,year:A}=oe(b);f.push({weekNumber:j,year:A,days:g})}return f},ue=({selectWeek:t})=>Z("month",(e,s,{data:a})=>{const{year:i,month:n,currentDate:l}=a,p=he(i,n);return o({class:"grid grid-cols-8 gap-1 text-sm px-4 py-2"},[o({class:"text-xs text-center col-span-1 text-muted-foreground flex items-center"},"Week"),o({class:"grid grid-cols-7 col-span-7 text-center text-muted-foreground items-center"},["Su","Mo","Tu","We","Th","Fr","Sa"].map(r=>D({class:"px-1 py-1",text:r}))),...p.map(({weekNumber:r,days:h,year:f})=>o({class:"grid grid-cols-8 col-span-8 items-center ring-primary rounded-sm px-1",onSet:["currentWeek",{ring:r}]},[o({class:"font-medium text-center col-span-1 rounded-sm cursor-pointer",click:()=>t(r,f),onSet:["currentWeek",{"text-primary-foreground":r,"bg-primary":r}],text:r?`W${r}`:""}),o({class:"grid grid-cols-7 col-span-7 text-center"},h.map(c=>de({year:(c==null?void 0:c.getFullYear())||null,month:(c==null?void 0:c.getMonth())||null,day:(c==null?void 0:c.getDate())||null,weekNumber:r,selectWeek:t})))]))])}),W=({label:t,click:e})=>C({class:`
			inline-flex items-center justify-center h-7 w-7 bg-transparent p-0
			opacity-50 hover:opacity-100 text-muted-foreground absolute
			${t==="Previous"?"left-1":"right-1"}
			focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
		  `,click:e,"aria-label":`${t} month`,variant:"icon",icon:t==="Previous"?m.chevron.single.left:m.chevron.single.right}),pe=({next:t,previous:e})=>o({class:"flex flex-auto min-h-12 text-sm font-medium relative justify-center items-center"},[D("[[monthName]] [[year]]"),W({label:"Previous",click:e}),W({label:"Next",click:t})]);class Ve extends d{declareProps(){this.selectedDate=null,this.selectedWeek=null,this.selectedCallBack=null}setData(){const e=new Date,s=this.selectedWeek||this.calculateCurrentWeek(e),a=R(s,e.getFullYear());return new S({monthName:this.getMonthName(a.getMonth()),year:a.getFullYear(),month:a.getMonth(),currentDate:a.getDate(),currentWeek:s})}getSelectedDate(e){const s=this.selectedDate?new Date(this.selectedDate):e;return new Date(s.getFullYear(),s.getMonth(),s.getDate())}calculateCurrentWeek(e){const s=new Date(e.valueOf()),a=(e.getDay()+6)%7;s.setDate(s.getDate()-a+3);const i=s.valueOf();return s.setMonth(0,1),s.getDay()!==4&&s.setMonth(0,1+(4-s.getDay()+7)%7),1+Math.ceil((i-s)/6048e5)}getMonthName(e){return _.monthNames[e]}goToPreviousMonth(){const e=this.data;let{year:s,month:a}=e;a===0?(a=11,s--):a--,this.setDate(a,s)}goToNextMonth(){const e=this.data;let{year:s,month:a}=e;a===11?(a=0,s++):a++,this.setDate(a,s)}setDate(e,s,a){this.data.set({year:s,month:e,monthName:this.getMonthName(e)}),a&&(this.data.currentDate=a)}selectWeek(e,s){this.data.currentWeek=e;const a=R(e,s);this.setDate(a.getMonth(),a.getFullYear(),a.getDate()),typeof this.selectedCallBack=="function"&&this.selectedCallBack(e)}render(){return o({class:"week-calendar-container border rounded-md bg-background p-3"},[pe({next:()=>this.goToNextMonth(),previous:()=>this.goToPreviousMonth()}),ue({selectWeek:(e,s)=>this.selectWeek(e,s)})])}}const fe=(t,e)=>{const s=t.toggleAllSelectedRows();e.state.checked=!s},ge=t=>T({class:`cursor-pointer py-3 px-4 text-base w-10 ${t.class||""}`},[K(e=>new ie({class:"mr-2",onChange:(s,a)=>fe(e,a)}))]),me=({align:t,sortable:e,key:s,label:a,sort:i,class:n})=>{const l=t||"justify-start";return T({class:`cursor-pointer py-3 px-4 text-base ${n||""}`,click:e&&(()=>i(s))},[o({class:`flex flex-auto w-full items-center ${l}`},[D(a),e&&X({class:"ml-2",html:m.arrows.upDown})])])},O=t=>F([H({class:"text-muted-foreground border-b",map:[t.headers,e=>e.label==="checkbox"?ge({toggle:t.toggle}):me({align:e.align,sortable:e.sortable,key:e.key,label:e.label,sort:t.sort})]})]),we=({key:t,rows:e,selectRow:s,rowItem:a})=>new Q({cache:"list",key:t,items:e,rowItem:i=>a(i,s),class:"divide-y divide-border"});class xe extends d{setData(){return new S({selectedRows:[],selected:!1})}toggleAllSelectedRows(){const e=this.list.getRows(),s=this.data.selectedRows.length===e.length,a=s?[]:e;return this.data.selectedRows=a,this.updateSelected(),this.updateTable(!s),s}updateSelected(){const e=this.data.get("selectedRows");this.data.selected=e.length>0}getSelectedRows(){return this.data.get("selectedRows")}updateTable(e){const s=this.list.getRows();s.forEach(a=>a.selected=e),this.list.setRows(s)}selectRow(e){const s=e.selected??!1;e.selected=!s;const a=this.data.get("selectedRows"),i=e.selected?[...a,e]:a.filter(n=>n!==e);this.data.selectedRows=i,this.updateSelected()}render(){const e=this.rows,s=this.border!==!1?"border":"";return o({class:"w-full"},[o({class:`w-full rounded-md ${s} overflow-x-auto`},[z({class:"w-full"},[this.headers&&O({headers:this.headers,sort:a=>this.sortRows(a)}),this.customHeader??null,we({key:this.key,rows:e,selectRow:this.selectRow.bind(this),rowItem:this.rowItem})])])])}remove(e){this.list.remove(e)}setRows(e){this.list.setRows(e)}append(e){this.list.append(e)}mingle(e,s=!1){this.list.mingle(e,s)}prepend(e){this.list.prepend(e)}beforeDestroy(){this.data.selectedRows=[]}}const be=t=>new te({cache:"list",scrollContainer:t.scrollContainer,loadMoreItems:t.loadMoreItems,offset:t.offset,limit:t.limit,key:t.key,tableData:t.tableData,items:t.items,rowItem:e=>t.rowItem(e,t.selectRow),class:"divide-y divide-border"});class ye extends xe{render(){const e=this.rows,s=this.border!==!1?"border":"";return o({class:"w-full"},[o({class:`w-full rounded-md ${s} overflow-x-auto`},[z({class:"w-full"},[this.headers&&O({headers:this.headers,sort:a=>this.sortRows(a)}),this.customHeader??null,be({scrollContainer:this.scrollContainer,loadMoreItems:this.loadMoreItems,offset:this.offset,limit:this.limit,class:this.class,tableData:this.tableData,key:this.key,items:e,selectRow:this.selectRow.bind(this),rowItem:this.rowItem})])])])}refresh(){this.list.refresh()}}const _e=u(t=>new ye({cache:t.cache??"list",tableData:t.data,scrollContainer:t.scrollContainer,loadMoreItems:t.loadMoreItems,offset:t.offset,limit:t.limit,class:t.class,key:t.key,rows:t.rows,rowItem:t.rowItem,headers:t.headers,customHeader:t.customHeader,border:t.border})),ke=u(({name:t,email:e})=>o({class:"min-w-0 flex-auto"},[w({class:"text-base font-semibold leading-6 m-0"},t),w({class:"truncate text-sm leading-5 text-muted-foreground m-0"},e)])),ve=()=>o({class:"flex items-center gap-x-1.5"},[o({class:"flex-none rounded-full bg-emerald-500/20 p-1"},[o({class:"h-1.5 w-1.5 rounded-full bg-emerald-500"})]),w({class:"text-xs leading-5 text-gray-500"},"Online")]),De=t=>w({class:"text-xs leading-5 text-muted-foreground"},[D("Last seen "),V({datetime:t},"3h ago")]),Se=(t,e)=>t==="online"?ve():De(e),Le=u(({role:t,lastSeen:e,status:s})=>o({class:"hidden shrink-0 sm:flex sm:flex-col sm:items-end"},[w({class:"text-sm leading-6 m-0"},t),Se(s,e)])),Ce=t=>t.split(" ").map(e=>e[0]).join(""),Ie=u(t=>k({class:"fadeIn flex justify-between gap-x-6 py-4 px-4 rounded-md hover:bg-muted/50"},[o({class:"flex min-w-0 gap-x-4"},[G({src:t.image,alt:t.name,fallbackText:Ce(t.name)}),ke({name:t.name,email:t.email})]),Le({role:t.role,lastSeen:t.lastSeen,status:t.status})])),Ze=u(t=>new q({cache:"list",key:"name",items:t.users,role:"list",class:"divide-y divide-border",rowItem:Ie})),Be=(t,e)=>e.includes(t),Re=(t,e,s)=>t.exact?s===e:Be(e,s),We=({text:t,href:e,exact:s,hidden:a})=>new $({text:t,href:e,exact:s,dataSet:["selected",["state",!0,"active"]],class:`${a?"hidden":"inline-flex"} items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm font-medium transition-all rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring focus-visible:ring-offset-background hover:bg-primary hover:text-primary-foreground disabled:opacity-50 disabled:pointer-events-none data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm`});class Je extends d{declareProps(){this.options=[],this.class=""}beforeSetup(){this.links=[]}render(){return v({class:`flex items-center justify-center p-2 text-muted-foreground rounded-md ${this.class||""}`},[x({class:"flex space-x-4",map:[this.options,e=>this.addLink(e)],watch:{value:["[[path]]",y.data],callBack:this.updateLinks.bind(this)}})])}afterSetup(){const e=y.data.path;this.updateLinks(e)}updateLinks(e){let s=!1;this.deactivateAllLinks();for(const a of this.links)a.rendered&&(Re(a,a.getLinkPath(),e)?(this.updateLink(a,!0),s=!0):this.updateLink(a,!1));!s&&this.links[0]&&this.updateLink(this.links[0],!0)}deactivateAllLinks(){for(const e of this.links)this.updateLink(e,!1)}updateLink(e,s){e.update(s)}addLink({label:e,href:s,exact:a,hidden:i}){const n=We({text:e,href:s,exact:a,hidden:i});return this.links.push(n),n}beforeDestroy(){this.links=[]}}const et=u(t=>{const e=t.margin||"m-4 ml-0";return o({class:`flex-none ${e}`},[C({variant:"icon",class:"back-button",click:()=>{if(window.history.length>2){window.history.back();return}t.backUrl&&app.navigate(t.backUrl)}},[P(m.arrows.left)])])});class Me extends d{declareProps(){this.class=""}render(){return o({class:this.getClassName(),onSet:["loading",{loading:!0}]},[this.addBody()])}getClassName(){return"overlay fixed top-[0px] left-0 bottom-0 right-0 flex-col bg-background z-20 lg:z-10 flex flex-auto lg:left-[64px] lg:top-0 overflow-y-auto will-change-contents "+(this.class||"")}setContainer(e){this.container=app.root}setupStates(){return{loading:!1}}addLoading(){this.state.loading=!0}removeLoading(){this.state.loading=!1}addBody(){return o({class:"body fadeIn flex flex-auto flex-col"},this.getContents())}getContents(){return this.children}}M.addType("dockableOverlay",t=>{if(!t)return;const e=t.component;e&&e.rendered===!0&&e.state.docked===!1&&e.destroy()});class tt extends Me{onCreated(){this.dockSize=this.maxSize||1024}render(){const e=this.container;return o({onState:[["loading",{loading:!0}],["docked",(s,a)=>{s?(a.className=this.getDockedClassName(),e.appendChild(a),document.documentElement.style.overflowY="auto"):(a.className=this.getClassName(),app.root.appendChild(a),document.documentElement.style.overflowY="hidden")}]]},[this.addBody()])}getDockedClassName(){return"flex flex-auto flex-col bg-background flex will-change-contents "+(this.class||"")}setup(e){this.container=e,this.initialize()}setupStates(){return{loading:!1,docked:this.canDock()}}afterSetup(){M.add(this.container,"dockableOverlay",{component:this}),this.onResize()}setupEvents(){return[["resize",window,()=>this.onResize()]]}canDock(){return window.innerWidth>=this.dockSize}onResize(){this.state.docked=this.canDock()}beforeDestroy(){document.documentElement.style.overflowY="auto"}}const Pe=u(({index:t,click:e,state:s},a)=>k({class:"p-2 cursor-pointer hover:bg-muted/50",onState:[[s,"selectedIndex",{"bg-accent":t,"text-white":t}]],click:()=>e(t)},a)),$e=u(({selectOption:t,state:e})=>x({class:"border rounded-md list-none m-0 p-0 max-h-[400px] overflow-y-auto",for:["filteredOptions",(s,a)=>Pe({index:a,click:t,state:e},s.label)]})),ze=u(t=>o({class:"relative flex items-center"},[se({cache:"input",placeholder:t.placeholder??"Search...",bind:[t.state,"searchQuery"],keyup:(e,s)=>{s.state.open=!0,typeof t.filterOptions=="function"&&t.filterOptions(),s.dropdown.updatePosition()},pointerup:(e,s)=>s.toggleDropdown(),keydown:e=>typeof t.handleKeyDown=="function"&&t.handleKeyDown(e)}),t.icon&&o({class:"absolute right-0 mr-2"},[P(t.icon)])])),Te=t=>o({class:"relative flex fle-auto flex-col",onState:["open",(e,s,a)=>{if(e)return new Y({cache:"dropdown",parent:a,button:a.input,size:"xl"},[$e(t)])}]}),st=U({setData(){const t=this.options||[];return new S({options:t,filteredOptions:t})},state(){return{searchQuery:"",selectedIndex:-1,open:!1}},setSelectedIndexByQuery(){const t=this.data.filteredOptions;let{searchQuery:e}=this.state;e=e.toLowerCase();const s=t.findIndex(a=>a.label.toLowerCase()===e);s>=0&&(this.state.selectedIndex=s)},filterOptions(){const t=this.state.searchQuery.toLowerCase();if(t===""||t.length===0){this.data.filteredOptions=this.data.options;return}const e=this.data.get("options");this.data.filteredOptions=e.filter(s=>s.label.toLowerCase().includes(t))},getValue(){const{selectedIndex:t}=this.state;return t<0?null:this.data.get(`filteredOptions[${t}]`)},selectOption(t){this.state.selectedIndex=t;const e=this.data.get(`filteredOptions[${t}]`);this.state.searchQuery=e.label,this.state.open=!1,typeof this.onSelect=="function"&&this.onSelect(e)},toggleDropdown(){this.state.toggle("open"),this.state.open&&this.setSelectedIndexByQuery()},handleKeyDown(t){const e=this.data.filteredOptions,{selectedIndex:s}=this.state;t.key==="ArrowDown"?(t.preventDefault(),this.state.selectedIndex=Math.min(s+1,e.length-1)):t.key==="ArrowUp"?(t.preventDefault(),this.state.selectedIndex=Math.max(s-1,0)):t.key==="Enter"&&s>=0&&(t.preventDefault(),this.selectOption(s))},render(){return o({class:"relative w-full max-w-md"},[ze({state:this.state,icon:this.icon,placeholder:this.placeholder,filterOptions:this.filterOptions.bind(this),handleKeyDown:this.handleKeyDown.bind(this)}),Te({state:this.state,setSelected:this.setSelectedIndexByQuery.bind(this),selectOption:this.selectOption.bind(this)})])}}),Ne=t=>k({class:"inline-flex flex-auto items-center justify-center whitespace-nowrap rounded-sm text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm",dataSet:["selected",["state",t.value,"active"]]},[L({class:"flex flex-auto justify-center items-center px-3 py-1.5",onSet:["selected",{selected:t.value}],click:e=>t.callBack(t.value)},t.label)]),Oe=(t,e)=>(t.callBack=e,Ne(t)),je=t=>v({class:`tab items-center justify-center rounded-md bg-muted p-1 text-muted-foreground ${t.class}`},[x({class:"flex flex-auto flex-row",map:[t.options,e=>Oe(e,t.callBack)]})]);class at extends d{declareProps(){this.options=[],this.class="",this.callBack=null}render(){const e=this.select.bind(this);return o({class:""},[je({class:this.class,options:this.options,callBack:e}),N({class:"tab-content",onState:["selected",this.updateContent.bind(this)]})])}getFirstValue(){var e;return(e=this.options[0])==null?void 0:e.value}update(){const e=this.state.get("selected");this.select(null),this.select(e)}select(e){this.state.selected=e}updateContent(e){const s=this.options;if(!s||s.length<1)return;const a=s[0];for(const i of s)if(i.value===e)return i.layout;return a.layout}setupStates(){const e=this.callBack,s=typeof e;return{selected:{state:this.getFirstValue(),callBack(a){s==="function"&&e(a)}}}}}const Ae=t=>k({class:"inline-flex flex-auto items-center justify-center whitespace-nowrap rounded-sm text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm",dataSet:["selected",["state",t.value,"active"]]},[L({class:"flex flex-auto justify-center items-center px-3 py-1.5 disabled:opacity-50 disabled:cursor-not-allowed",onSet:["selected",{selected:t.value}],click:e=>t.callBack(t.value),disabled:t.disabled},t.label)]),Ee=(t,e)=>(t.callBack=e,Ae(t)),Ue=t=>v({class:`tab items-center justify-center rounded-md bg-muted p-1 text-muted-foreground ${t.class}`},[x({class:"flex flex-auto flex-row",map:[t.options,e=>Ee(e,t.callBack)]})]);class it extends d{declareProps(){this.options=[],this.class="",this.onSelect=null}render(){const e=this.select.bind(this);return Ue({class:this.class,options:this.options,callBack:e})}select(e){this.state.selected=e,typeof this.onSelect=="function"&&this.onSelect(e,this.parent)}setupStates(){var e;return{selected:((e=this.options[0])==null?void 0:e.value)||null}}}const Ye=(t,e)=>new RegExp(`${t}($|/|\\.).*`).test(e),Fe=(t,e)=>{const s=t.getLinkPath();return t.exact?e===s:Ye(s,e)},Qe=({text:t,href:e,exact:s})=>new $({text:t,href:e,exact:s,dataSet:["selected",["state",!0,"active"]],class:"inline-flex flex-auto items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm"});class He extends d{declareProps(){this.options=[],this.class="",this.onSelect=null}beforeSetup(){this.links=[]}render(){return v({class:`tab items-center justify-center rounded-md bg-muted p-1 text-muted-foreground ${this.class}`},[x({class:"flex flex-auto flex-row",map:[this.options,e=>this.addLink(e)],watch:{value:["[[path]]",y.data],callBack:this.updateLinks.bind(this)}})])}afterSetup(){const e=y.data.path;this.updateLinks(e)}updateLinks(e){let s=!1,a=this.links[0];this.deactivateAllLinks();for(const i of this.links)if(i.rendered!==!1&&(s=Fe(i,e),s===!0)){this.updateLink(i,!0);break}s!==!0&&a&&this.updateLink(a,!0)}deactivateAllLinks(){for(const e of this.links)this.updateLink(e,!1)}updateLink(e,s){e.update(s)}addLink({label:e,href:s,exact:a}){const i=Qe({text:e,href:s,exact:a});return this.links.push(i),i}beforeDestroy(){this.links=[]}}class nt extends d{declareProps(){this.options=[],this.class=""}render(){return o({class:"tab-panel"},[new He({class:this.class,options:this.options}),N({class:"tab-content",switch:this.addGroup()})])}addGroup(){let e;const s=[],a=this.options;for(let i=0,n=a.length;i<n;i++)e=a[i],s.push({uri:e.uri||e.href,component:e.component,title:e.title||null,persist:!0});return s}}class Ke extends d{onCreated(){this.lineWidth=this.lineWidth||3,this.lineColor=this.lineColor||"#000000",this.canvas=null,this.ctx=null,this.status="stopped";const e=1e3/60;this.timer=new J(e,this.draw.bind(this)),this.width=0,this.height=0,this.signed=!1,this.mouse={x:0,y:0,status:"up"},this.margin=this.margin||{x:40,y:60},this.targetSize=this.targetSize||{width:740,height:345},this.baseLineWidth=this.baseLineWidth||2,this.baseStrokeColor=this.baseStrokeColor||"#000000"}render(){return ee({style:"touch-action: none; -webkit-user-select: none; -webkit-touch-callout: none;"})}beforeDestroy(){this.stopTimer()}afterSetup(){this.canvas=this.panel,this.ctx=this.canvas.getContext("2d"),window.setTimeout(()=>{this.resize(),this.draw()},1)}setupEvents(){const e=this.panel,s=this.pointerPosition.bind(this),a=this.pointerUp.bind(this),i=this.pointerDown.bind(this),n=this.resize.bind(this),l={passive:!1};return[["pointermove",e,s,l],["pointerup",e,a],["pointerdown",e,i,l],["pointerout",e,a],["resize",window,n]]}getEventPosition(e){let s,a;const i=this.canvas,n=i.width/parseInt(i.style.width),l=i.getBoundingClientRect();if(e.touches&&e.touches.length){const h=e.touches[0];s=h.clientX,a=h.clientY}else s=e.x||e.clientX,a=e.y||e.clientY;const p=parseInt((s-l.left)*n),r=parseInt((a-l.top)*n);this.mouse.x=p,this.mouse.y=r}pointerDown(e){e.preventDefault(),e.stopPropagation(),this.getEventPosition(e);const{ctx:s,mouse:a}=this;s.beginPath(),s.moveTo(a.x,a.y),a.status="down",this.startTimer()}pointerUp(e){e.preventDefault(),e.stopPropagation(),this.ctx.closePath(),this.mouse.status="up",this.stopTimer()}pointerPosition(e){this.getEventPosition(e),this.mouse.status==="down"&&(e.preventDefault(),e.stopPropagation())}resize(){const{canvas:e,ctx:s}=this,a=e.toDataURL();if(this.scale(),this.setupBackground(s),a!=="data:,"){const i=new window.Image;I.on("load",i,function n(){s.drawImage(i,0,0),I.off("load",i,n)}),i.src=a}this.draw()}getImage(){return this.canvas.toDataURL("image/jpeg",.7)}noScaleResize(){const e=B.getSize(container);this.width=canvas.width=e.width,this.height=canvas.height=e.height}scale(){const e=this.canvas,s=this.container,a=B.getSize(s),i=this.targetSize,n=i.width,l=i.height;let p=n+"px",r=l+"px";if(this.width=e.width=n,this.height=e.height=l,a.width!==0&&a.height!==0){const h=a.width,f=a.height,c=h/n,g=f/l,b=Math.min(c,g);p=n*b+"px",r=l*b+"px"}e.style.width=p,e.style.height=r}draw(){this.mouse.status==="down"&&this.addLine(this.ctx,this.mouse.x,this.mouse.y,this.lineColor)}drawBottomLine(e){const s=this.canvas;e.globalAlpha=1,e.shadowBlur=0;const a=this.margin.x,i=this.height-this.margin.y;e.beginPath(),e.moveTo(a,i),e.lineTo(s.width-this.margin.x,i),e.lineWidth=this.baseLineWidth,e.strokeStyle=this.baseStrokeColor,e.stroke(),e.closePath()}addLine(e,s,a,i){this.signed||(this.signed=!0);const n=Math.round(s),l=Math.round(a);e.lineWidth=this.lineWidth,e.strokeStyle=i,e.lineTo(n,l),e.stroke()}reset(){this.signed=!1;const{ctx:e}=this;e.clearRect(0,0,this.width,this.height),this.setupBackground(e)}setupBackground(e){e.fillStyle="transparent",e.fillRect(0,0,this.width,this.height),this.drawBottomLine(e)}startTimer(){this.stopTimer(),this.draw(),this.timer.start(),this.status="started"}stopTimer(){this.timer.stop(),this.status="stopped"}}class ot extends d{declareProps(){this.data=null,this.lineColor=null,this.lineWidth=null,this.baseLineWidth=null,this.baseStrokeColor=null,this.margin=null,this.targetSize=null,this.callBackData=null,this.pointerUp=null,this.path=null,this.canvasLayer=null}render(){return o({class:"signature-panel relative flex flex-auto overflow-hidden select-none"},[ae({cache:"hiddenInput",required:!0,bind:this.path+".data"}),o({class:"absolute top-2 right-2"},[C({variant:"icon",icon:m.circleX,click:this.reset.bind(this)})]),new Ke({cache:"canvasLayer",margin:this.margin,targetSize:this.targetSize,lineColor:this.lineColor,lineWidth:this.lineWidth,baseLineWidth:this.baseLineWidth,baseStrokeColor:this.baseStrokeColor,pointerUpCallBack:this.pointerUp,callBackData:this.callBackData})])}afterSetup(){this.canvasLayer.resize()}getImage(){return this.canvasLayer.getImage()}isSigned(){return this.canvasLayer?this.canvasLayer.signed:!1}reset(e){if(this.canvasLayer)return this.canvasLayer.reset()}}export{Ie as B,He as Q,Ve as a,st as d,Ge as e,nt as f,ot as g,at as h,_e as i,Me as j,xe as k,et as l,Ze as n,Je as o,ge as p,tt as r,it as u,me as w};
