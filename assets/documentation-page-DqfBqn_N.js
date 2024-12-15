import{G as Qe,S as Ke}from"./molecules-CXSAFiWP.js";import{o as K,Y as o,u as D,p as Ze,Z as de,q as me,w as $,Q as b,x as Xe,N as et,a as r,l as O,s as ue,G as m,y as tt,E as ot,r as Ae,H as W,A as C,K as k,z as l,L as at,R as st,B as c,b as Be,U as nt,V as rt,W as Z,X as Pe,$ as it,a0 as lt,a1 as ct,a2 as F,I as w,a3 as N,c as p,a4 as R,a5 as X,a6 as pe,_ as fe,d as P,a7 as I,a8 as q,a9 as U,aa as ge,ab as he,ac as dt,D as Fe,ad as mt,j as re,ae as ut,af as te,k as L,C as ee,ag as Me,ah as be,P as z,ai as xe,F as _,aj as ie,ak as le,al as pt,am as ft,an as oe,ao as gt,ap as ht,aq as bt,ar as xt,as as wt,at as vt,au as yt,av as kt,aw as Tt,ax as St,M as Le,ay as Ct,az as Dt,h as It,aA as H,S as B,m as $e,T as jt,e as M,J as A,aB as ce,v as At,aC as Bt,O as Pt}from"./index-C4ojcduR.js";import{C as Ft}from"./counter-Ba36WTcY.js";import{U as Mt}from"./user-list-DB6yDDI2.js";const Lt=e=>me({class:"inline-flex flex-auto items-center justify-center whitespace-nowrap rounded-sm text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm",dataSet:["selected",["state",e.value,"active"]]},[$({class:"flex flex-auto justify-center items-center px-3 py-1.5",onSet:["selected",{selected:e.value}],click:t=>e.callBack(e.value)},e.label)]),$t=(e,t)=>(e.callBack=t,Lt(e)),Nt=e=>Ze({class:`tab items-center justify-center rounded-md bg-muted p-1 text-muted-foreground ${e.class}`},[de({class:"flex flex-auto flex-row",map:[e.options,t=>$t(t,e.callBack)]})]);class Ne extends K{render(){const t=this.select.bind(this);return o({class:""},[Nt({class:this.class,options:this.options,callBack:t}),D({class:"tab-content",onState:["selected",this.updateContent.bind(this)]})])}getFirstValue(){var t;return(t=this.options[0])==null?void 0:t.value}update(){const t=this.state.get("selected");this.select(null),this.select(t)}select(t){this.state.selected=t}updateContent(t){const a=this.options;if(!a||a.length<1)return;const n=a[0];for(const i of a)if(i.value===t)return i.layout;return n.layout}setupStates(){const t=this.callBack,a=typeof t;return{selected:{state:this.getFirstValue(),callBack(n){a==="function"&&t(n)}}}}}const Ee=b((e,t)=>Xe({class:"flex p-4 min-h-[350px] max-h-[650px] overflow-x-auto rounded-lg border bg-muted whitespace-break-spaces break-all cursor-pointer"},[et({class:"font-mono flex-auto text-sm text-wrap",click:()=>{navigator.clipboard.writeText(t[0].textContent),app.notify({title:"Code copied",description:"The code has been copied to your clipboard.",icon:r.clipboard.checked})}},t)])),Et=b((e,t)=>o({class:"flex flex-auto p-4 min-h-[350px] max-h-[650px] overflow-x-auto max-w-[90vw] rounded-lg border bg-card"},[o({class:"preview flex flex-auto justify-center items-center"},t)])),we=b((e,t)=>o({class:"py-4"},t)),Ht=e=>new Ne({class:"mt-4 max-w-[400px]",options:[{label:"Preview",value:"preview",layout:we([Et(e.preview)])},{label:"Code",value:"code",layout:we([Ee(e.code)])}]}),Rt=b(({title:e,description:t})=>O({class:"flex flex-col"},[ue({class:"scroll-m-20 text-2xl font-bold tracking-tight"},e),t&&m({class:"text-base text-muted-foreground py-2 max-w-[700px]"},t)])),s=b((e,t)=>D({class:"grid py-4"},[Rt({title:e.title,description:e.description}),Ht({preview:e.preview,code:e.code})]));class Wt extends tt{render(){return ot([o({class:"contained px-4 flex flex-auto flex-col"},this.children)])}}const zt=b(({title:e,description:t})=>O({class:"flex flex-col"},[Ae({class:"scroll-m-20 text-3xl font-bold tracking-tight"},e),m({class:"text-base text-muted-foreground py-2 max-w-[700px]"},t)])),qt=b((e,t)=>o({class:"contained py-8"},[zt(e),D({class:"pb-12 pt-8"},t)])),g=b((e,t)=>new Wt([qt(e,t)])),Ot=()=>g({title:"Alerts",description:"Alerts are used to provide feedback to the user about the outcome of an action or to inform them of important information."},[s({title:"Default Alert",description:"This is a standard alert without any specific type.",preview:[W({title:"Notice",description:"This is a default alert without a specific type.",icon:r.information})],code:`import { Alert } from "@components/molecules/alert.js";
import { Icons } from "@components/icons/icons.js";

Alert({
    title: 'Notice',
    description: 'This is a default alert without a specific type.',
    icon: Icons.information
})`}),s({title:"Info Alert",description:"An info alert that provides general information to the user.",preview:[W({title:"Heads up!",description:"You can add components to your app using the CLI.",icon:r.information,type:"info"})],code:`Alert({
    title: 'Heads up!',
    description: 'You can add components to your app using the CLI.',
    icon: Icons.information,
    type: 'info'
})`}),s({title:"Success Alert",description:"A success alert to inform the user of a successful action.",preview:[W({title:"Success!",description:"Your changes have been saved successfully.",icon:r.check,type:"success"})],code:`Alert({
    title: 'Success!',
    description: 'Your changes have been saved successfully.',
    icon: Icons.check,
    type: 'success'
})`}),s({title:"Warning Alert",description:"A warning alert to caution the user about something important.",preview:[W({title:"Warning!",description:"Please check your input before proceeding.",icon:r.warning,type:"warning"})],code:`Alert({
    title: 'Warning!',
    description: 'Please check your input before proceeding.',
    icon: Icons.warning,
    type: 'warning'
})`}),s({title:"Destructive Alert",description:"A destructive alert to inform the user of an error or serious issue.",preview:[W({title:"Error!",description:"Something went wrong. Please try again later.",icon:r.shield,type:"destructive"})],code:`Alert({
    title: 'Error!',
    description: 'Something went wrong. Please try again later.',
    icon: Icons.error,
    type: 'destructive'
})`})]),Ut=()=>g({title:"Avatars",description:"Avatars are used to represent users or objects visually, with customizable sizes and optional status indicators."},[s({title:"Extra Small Avatar (xs)",description:"An extra small avatar for compact spaces.",preview:[C({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN",size:"xs"})],code:"Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: 'xs' })"}),k({class:"text-2xl font-semibold text-foreground mt-8"},"Avatar Fallbacks"),m({class:"text-sm text-muted-foreground mb-4"},"The avatar fallback can be bound to a watcher for dynamic content using the 'watcherFallback' property. The fallback and watcher fallback will convert a name to initials if not set as a two letter string."),s({title:"Small Avatar (sm)",description:"A small avatar suitable for lists and compact layouts.",preview:[C({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN",size:"sm"})],code:"Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: 'sm' })"}),s({title:"Medium Avatar (md)",description:"A medium-sized avatar, often used for standard profile images.",preview:[C({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN",size:"md"})],code:"Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: 'md' })"}),s({title:"Large Avatar (lg)",description:"A large avatar for prominent profile displays.",preview:[C({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN",size:"lg"})],code:"Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: 'lg' })"}),s({title:"Extra Large Avatar (xl)",description:"An extra-large avatar for detailed user profile sections.",preview:[C({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN",size:"xl"})],code:"Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: 'xl' })"}),s({title:"2x Extra Large Avatar (2xl)",description:"A double extra-large avatar for large displays.",preview:[C({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN",size:"2xl"})],code:"Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: '2xl' })"}),s({title:"3x Extra Large Avatar (3xl)",description:"A triple extra-large avatar for the largest profile displays.",preview:[C({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN",size:"3xl"})],code:"Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: '3xl' })"}),s({title:"Avatar with Name and Subtitle",description:"Display an avatar alongside a name and subtitle for user identification.",preview:[o({class:"flex items-center gap-4 p-4 bg-card rounded-md border shadow-md"},[C({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN",size:"lg"}),o({},[l({class:"text-lg font-semibold text-foreground"},"Leslie Alexander"),m({class:"text-sm text-muted-foreground"},"leslie.alexander@example.com")])])],code:`Div({ class: 'flex items-center gap-4 p-4 bg-card rounded-md border shadow-md' }, [
    Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: 'lg' }),
    Div({}, [
        Span({ class: 'text-lg font-semibold text-foreground' }, 'Leslie Alexander'),
        P({ class: 'text-sm text-muted-foreground' }, 'leslie.alexander@example.com')
    ])
])`}),s({title:"Avatar with Online Status",description:"Displays an avatar with a small online status indicator.",preview:[o({class:"relative flex items-center gap-4 p-4 bg-card rounded-md border shadow-md"},[o({class:"relative"},[C({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN",size:"lg"}),o({class:"absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 rounded-full"})]),o({},[l({class:"text-lg font-semibold text-foreground"},"Leslie Alexander"),m({class:"text-sm text-muted-foreground"},"leslie.alexander@example.com")])])],code:`Div({ class: 'relative flex items-center gap-4 p-4 bg-card rounded-md border shadow-md' }, [
    Div({ class: 'relative' }, [
        Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: 'lg' }),
        Div({ class: 'absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 rounded-full' }) // Online indicator
    ]),
    Div({}, [
        Span({ class: 'text-lg font-semibold text-foreground' }, 'Leslie Alexander'),
        P({ class: 'text-sm text-muted-foreground' }, 'leslie.alexander@example.com')
    ])
])`}),s({title:"Status Indicator",description:"A small status indicator for online, offline, busy, or away statuses.",preview:[o({class:"relative",addState(){return{status:"online"}}},[at()])],code:`import { Div, H4, P, Span } from "@base-framework/atoms";
import { StatusIndicator } from "@components/molecules/avatars/status-indicator.js";

Div({
    class: 'relative',
    addState()
    {
        return {
            status: 'online'
        };
    }
}, [
    StatusIndicator()
])`})]),ve={gray:{backgroundColor:"bg-gray-50",textColor:"text-gray-600",ringColor:"ring-gray-500/10"},red:{backgroundColor:"bg-red-50",textColor:"text-red-700",ringColor:"ring-red-600/10"},yellow:{backgroundColor:"bg-yellow-50",textColor:"text-yellow-800",ringColor:"ring-yellow-600/20"},green:{backgroundColor:"bg-green-50",textColor:"text-green-700",ringColor:"ring-green-600/20"},blue:{backgroundColor:"bg-blue-50",textColor:"text-blue-700",ringColor:"ring-blue-700/10"},indigo:{backgroundColor:"bg-indigo-50",textColor:"text-indigo-700",ringColor:"ring-indigo-700/10"},purple:{backgroundColor:"bg-purple-50",textColor:"text-purple-700",ringColor:"ring-purple-700/10"},pink:{backgroundColor:"bg-pink-50",textColor:"text-pink-700",ringColor:"ring-pink-700/10"},primary:{backgroundColor:"bg-primary",textColor:"text-primary-foreground",ringColor:"ring-primary/10"},secondary:{backgroundColor:"bg-secondary",textColor:"text-secondary-foreground",ringColor:"ring-secondary/10"},destructive:{backgroundColor:"bg-destructive",textColor:"text-destructive-foreground",ringColor:"ring-destructive/10"},warning:{backgroundColor:"bg-warning",textColor:"text-warning-foreground",ringColor:"ring-warning/10"},outline:{backgroundColor:"bg-background",textColor:"text-primary",ringColor:"ring-input"},ghost:{backgroundColor:"bg-background",textColor:"text-primary",ringColor:"ring-background"},link:{backgroundColor:"bg-background",textColor:"text-primary",ringColor:"ring-background"}},_t=e=>ve[e]||ve.gray,Gt=e=>{const{backgroundColor:t,textColor:a,ringColor:n}=_t(e);return`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors ${t} ${a} ${n}`},x=b((e,t)=>{const a=Gt(e==null?void 0:e.type);return l({...e,class:a},t)}),Vt=()=>g({title:"Badges",description:"Badges can be used to display a status or a count."},[s({title:"Badge",description:"This is a badge.",preview:[o({class:"flex gap-2 flex-wrap"},[x({type:"gray"},"Text"),x({type:"red"},"Text"),x({type:"yellow"},"Text"),x({type:"green"},"Text"),x({type:"blue"},"Text"),x({type:"indigo"},"Text"),x({type:"purple"},"Text"),x({type:"pink"},"Text"),x({type:"primary"},"Text"),x({type:"secondary"},"Text"),x({type:"destructive"},"Text"),x({type:"warning"},"Text"),x({type:"outline"},"Text"),x({type:"ghost"},"Text"),x({type:"link"},"Text")])],code:`
import { Button } from '@components/atoms/badges/badges.js';
import { Atom } from '@base-framework/base';

export const PrimaryBadge = Atom((props, children)) => (
    Badge({ ...props, type: 'gray' }, children)
);`})]),Yt=[{href:"/",label:"Home"},{href:"/components",label:"Components"},{label:"Breadcrumb"}],Jt=()=>g({title:"Breadcrumbs",description:"Breadcrumbs are a navigation aid that helps users understand their location within a website or application."},[s({title:"Usage",description:"To use the Breadcrumb component, import it and provide an array of items. Each item can have a label and an optional href.",preview:[new st({items:Yt})],code:`import { Breadcrumb } from "@components/molecules/breadcrumb/breadcrumb.js";

new Breadcrumb({ items: [
    { href: '/', label: 'Home' },
    { href: '/components', label: 'Components' },
    { label: 'Breadcrumb' } // Last item, no href needed
] })`})]),Qt=()=>g({title:"Button",description:"Displays a button or a component that looks like a button."},[s({title:"Usage",description:"Import the button atom and use it in your components. This platform has variants for different use cases. The variant can be set using the `variant` prop.",preview:[c({variant:"primary"},"Click Me")],code:`import { Button } from '@components/atoms/buttons/buttons.js';

Button({ ...props, variant: 'secondary' }, primary)`}),O({class:"flex flex-col py-8"},[Be({class:"text-3xl font-bold tracking-tight border-b pb-2"},"Variants")]),s({title:"Primary Button",description:"This is a primary button.",preview:[c({variant:"primary"},"Click Me")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const PrimaryButton = Atom((props, children) => (
    Button({ ...props, variant: 'primary' }, children)
);`}),s({title:"Secondary Button",preview:[c({variant:"secondary"},"Secondary")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const SecondaryButton = Atom((props, children) => (
    Button({ ...props, variant: 'secondary' }, children)
);`}),s({title:"Destructive Button",preview:[c({variant:"destructive"},"Destructive")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const DestructiveButton = Atom((props, children) => (
    Button({ ...props, variant: 'destructive' }, children)
);`}),s({title:"Warning Button",preview:[c({variant:"warning"},"Warning")],code:`import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const WarningButton = Atom((props, children) => (
    Button({ ...props, variant: 'warning' }, children)
);`}),s({title:"Outline Button",preview:[c({variant:"outline"},"Outline")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const OutlineButton = Atom((props, children) => (
    Button({ ...props, variant: 'outline' }, children)
);`}),s({title:"Ghost Button",preview:[c({variant:"ghost"},"Ghost")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const GhostButton = Atom((props, children) => (
    Button({ ...props, variant: 'ghost' }, children)
);`}),s({title:"Link Button",preview:[c({variant:"link"},"Link")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const LinkButton = Atom((props, children) => (
    Button({ ...props, variant: 'link' }, children)
);`}),s({title:"Icon Button",description:"Displays a button with an icon.",preview:[c({variant:"icon",icon:r.home})],code:`import { Button } from '@components/atoms/buttons/buttons.js';
import { Icons } from '@components/icons/icons.js';
import { Atom } from '@base-framework/base';

export const IconButton = Atom((props) => (
    Button({ ...props, variant: 'icon', icon: Icons.home })
);`}),s({title:"With Icon Button",preview:[c({variant:"withIcon",icon:r.home},"With Icon")],code:`import { Button } from '@components/atoms/buttons/buttons.js';
import { Icons } from '@components/icons/icons.js';

Button({ variant: 'withIcon', icon: Icons.home }, 'With Icon')`}),s({title:"Loading Button",preview:[nt("With Icon")],code:`import { LoadingButton } from '@components/atoms/buttons/buttons.js';

LoadingButton('With Icon')`})]),Kt=e=>{const t=new Date(e.valueOf()),a=(t.getDay()+6)%7;t.setDate(t.getDate()-a+3);const n=new Date(t.getFullYear(),0,4);n.setDate(n.getDate()-(n.getDay()+6)%7);const i=Math.ceil((t-n)/6048e5)+1;return i>52&&!Zt(t.getFullYear())?1:i},Zt=e=>{const t=new Date(e,11,31),a=new Date(e,0,1);return t.getDay()===4||a.getDay()===4},ye=(e,t)=>{const a=new Date(t,0,4),n=(a.getDay()+6)%7,i=new Date(a);i.setDate(a.getDate()-n);const d=new Date(i);return d.setDate(i.getDate()+(e-1)*7),d},Xt=(e,t,a)=>{if(a===0)return[];const n=new Date(e,t,0).getDate();return Array.from({length:a},(i,d)=>new Date(e,t-1,n-a+d+1))},eo=(e,t,a)=>Array.from({length:a},(n,i)=>new Date(e,t+1,i+1)),to=(e,t,a)=>{const n=new Date;return n.getDate()===e&&n.getMonth()===t&&n.getFullYear()===a},oo=({day:e,week:t,month:a,year:n,weekNumber:i,currentDate:d,selectWeek:u})=>{const T=to(e,a,n),v=t.some(j=>(j==null?void 0:j.getDate())===d);return $({text:e||"",disabled:!e,class:`
            px-2 py-1 text-center rounded-md
            ${T?"bg-accent text-accent-foreground":""}
            ${v&&!T?"border border-accent":""}
            hover:bg-primary hover:text-primary-foreground
        `,click:()=>u(i,n)})},ao=(e,t)=>{const a=new Date(e,t,1).getDay(),n=new Date(e,t+1,0).getDate(),i=Xt(e,t,a),d=Array.from({length:n},(S,G)=>new Date(e,t,G+1)),u=7-((i.length+d.length)%7||7),T=eo(e,t,u),v=[...i,...d,...T],j=[];for(let S=0;S<v.length;S+=7){const G=v.slice(S,S+7);j.push({weekNumber:Kt(G.find(Je=>Je)||new Date(e,t,1)),days:G})}return j},so=({selectWeek:e})=>rt("month",(t,a,{data:n})=>{const{year:i,month:d,currentDate:u}=n,T=ao(i,d);return o({class:"grid grid-cols-8 gap-1 text-sm px-4 py-2"},[o({class:"text-xs text-center col-span-1 text-muted-foreground flex items-center"},"Week"),o({class:"grid grid-cols-7 col-span-7 text-center text-muted-foreground items-center"},["Su","Mo","Tu","We","Th","Fr","Sa"].map(v=>l({class:"px-1 py-1",text:v}))),...T.map(({weekNumber:v,days:j})=>o({class:"grid grid-cols-8 col-span-8 items-center"},[o({class:"font-medium text-center col-span-1 rounded-sm cursor-pointer",click:()=>e(v,i),onSet:["currentWeek",{"text-primary-foreground":v,"bg-primary":v}],text:v?`W${v}`:""}),o({class:"grid grid-cols-7 col-span-7 text-center"},j.map(S=>oo({year:S?S.getFullYear():null,month:S?S.getMonth():null,day:S?S.getDate():null,week:j,weekNumber:v,currentDate:u,selectWeek:e})))]))])}),ke=({label:e,click:t})=>c({class:`
            inline-flex items-center justify-center h-7 w-7 bg-transparent p-0
            opacity-50 hover:opacity-100 text-muted-foreground absolute
            ${e==="Previous"?"left-1":"right-1"}
            focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
          `,click:t,"aria-label":`${e} month`,variant:"icon",icon:e==="Previous"?r.chevron.single.left:r.chevron.single.right}),no=({next:e,previous:t})=>o({class:"flex flex-auto min-h-12 text-sm font-medium relative justify-center items-center"},[l("[[monthName]] [[year]]"),ke({label:"Previous",click:t}),ke({label:"Next",click:e})]);class ro extends K{setData(){const t=new Date,a=this.selectedWeek||this.calculateCurrentWeek(t),n=ye(a,t.getFullYear());return new Z({monthName:this.getMonthName(n.getMonth()),year:n.getFullYear(),month:n.getMonth(),currentDate:n.getDate(),currentWeek:a})}getSelectedDate(t){const a=this.selectedDate?new Date(this.selectedDate):t;return new Date(a.getFullYear(),a.getMonth(),a.getDate())}calculateCurrentWeek(t){const a=new Date(t.valueOf()),n=(t.getDay()+6)%7;a.setDate(a.getDate()-n+3);const i=a.valueOf();return a.setMonth(0,1),a.getDay()!==4&&a.setMonth(0,1+(4-a.getDay()+7)%7),1+Math.ceil((i-a)/6048e5)}getMonthName(t){return Pe.monthNames[t]}goToPreviousMonth(){const t=this.data;let{year:a,month:n}=t;n===0?(n=11,a--):n--,this.setDate(n,a)}goToNextMonth(){const t=this.data;let{year:a,month:n}=t;n===11?(n=0,a++):n++,this.setDate(n,a)}setDate(t,a,n){this.data.set({year:a,month:t,monthName:this.getMonthName(t)}),n&&(this.data.currentDate=n)}selectWeek(t,a){this.data.currentWeek=t;const n=ye(t,a);this.setDate(n.getMonth(),n.getFullYear(),n.getDate()),typeof this.selectedCallBack=="function"&&this.selectedCallBack(t)}render(){return o({class:"week-calendar-container border rounded-md bg-background p-3"},[no({next:()=>this.goToNextMonth(),previous:()=>this.goToPreviousMonth()}),so({selectWeek:(t,a)=>this.selectWeek(t,a)})])}}const io=()=>Pe.formatTime("",24),lo=()=>g({title:"Calendars",description:"This is the calendar component documentation."},[s({title:"Usage",description:"This is how you can use the calendar component.",preview:[new it],code:`@components/organisms/calendar/calendar.js';

new Calendar()`}),s({title:"Week Calendar",description:"This is how you can use the week calendar component.",preview:[new ro],code:`@components/organisms/calendar/calendar.js';

new Calendar()`}),s({title:"Dynamic Time",description:"The Dynamic Time class will allow you to create a dynamic time that will update every minute.",preview:[new lt({filter:()=>{let e="Morning";const t=io();return t>="18:00:00"?e="Evening":t>="12:00:00"&&(e="Afternoon"),`Good ${e}`}})],code:`import { DateTime } from "@base-framework/base";
import { DynamicTime } from "@base-framework/organisms";

new DynamicTime({
    filter: () =>
    {
        let message = 'Morning';

        const current = DateTime.formatTime('', 24);
        if (current >= '18:00:00')
        {
            message = 'Evening';
        }
        else if (current >= '12:00:00')
        {
            message = 'Afternoon';
        }

        return \`Good \${message}\`;
    }
})`}),s({title:"Dynamic Local Time by Time Frame",description:"This will show the time frame based on the local time. This will update the time frame every minute to keep the time frame updated.",preview:[ct({dateTime:"2024-11-04T18:00:00",remoteTimeZone:"America/Denver"})],code:`import { TimeFrame } from "@components/molecules/date-time/time-frame.js";

TimeFrame({
    dateTime: '2024-11-04T18:00:00',
    remoteTimeZone: 'America/Denver'
})`})]),E=({title:e,description:t})=>O({class:"text-left"},[Be({class:"font-semibold tracking-tight text-2xl"},e),m({class:"text-sm text-muted-foreground"},t)]),co=()=>o({class:"flex items-center justify-center gap-4"},[c({variant:"outline",class:"gap-2 w-full",click:()=>console.log("Sign in with Github"),"aria-label":"Sign in with Github"},[w(r.companies.gitHub),l("Github")]),c({variant:"outline",class:"gap-2 w-full",click:()=>console.log("Sign in with Google"),"aria-label":"Sign in with Google"},[w(r.companies.google),l("Google")])]),mo=()=>N({submit:e=>{e.preventDefault(),console.log("Account created")}},[new p({name:"email",label:"Email"},[R({type:"email",placeholder:"m@example.com",required:!0,class:"border p-2 rounded-md w-full bg-background placeholder-muted-foreground text-foreground"})]),new p({name:"password",label:"Password"},[R({type:"password",placeholder:"Your password",required:!0,class:"border p-2 rounded-md w-full bg-background placeholder-muted-foreground text-foreground"})]),c({type:"submit",class:"w-full mt-4 py-2 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition"},"Create account")]),He=()=>F({class:"w-full max-w-md mx-auto p-8 bg-card space-y-6"},[E({title:"Create an account",description:"Enter your email below to create your account"}),co(),o({class:"relative"},[o({class:"absolute inset-0 flex items-center"},[l({class:"flex-grow border-t"})]),o({class:"relative flex justify-center text-xs uppercase"},[l({class:"bg-background px-2 text-muted-foreground"},"or continue with")])]),mo()]),ae=({title:e,description:t,defaultState:a,onChange:n})=>o({class:"flex items-start justify-between gap-2"},[o({class:"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex flex-col space-y-1"},[l({class:"font-medium text-foreground"},e),l({class:"font-normal leading-snug text-muted-foreground"},t)]),new X({active:a,change:n})]),Re=()=>F({class:"w-full max-w-md mx-auto p-6 bg-card space-y-6"},[E({title:"Cookie Settings",description:"Manage your cookie settings here."}),o({class:"pt-0 grid gap-6"},[ae({title:"Strictly Necessary",description:"These cookies are essential in order to use the website and use its features.",defaultState:!0,onChange:e=>console.log("Strictly Necessary:",e)}),ae({title:"Functional Cookies",description:"These cookies allow the website to provide personalized functionality.",defaultState:!1,onChange:e=>console.log("Functional Cookies:",e)}),ae({title:"Performance Cookies",description:"These cookies help to improve the performance of the website.",defaultState:!1,onChange:e=>console.log("Performance Cookies:",e)})]),c({variant:"outline",class:"w-full",click:()=>console.log("Preferences saved")},"Save preferences")]),We=({startDate:e})=>F({class:"w-full max-w-md mx-auto p-6 bg-card space-y-6"},[E({title:"Pick a Date",description:"When is the event?"}),o({class:"font-medium text-foreground"},[new pe({selectedDate:e,selectedCallBack:t=>console.log(t)})])]),se=b(({value:e,label:t,icon:a})=>$({class:'text-sm gap-1 font-medium leading-none disabled:cursor-not-allowed disabled:opacity-70 flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-muted data-[state="active"]:border-primary [&:has([data-state="active"])]:border-primary',onState:["method",{active:e}],dataSet:["method",["state",e,"active"]],click:(n,{state:i})=>i.method=e},[w(a),l(t)])),uo=fe({render(){return o({class:"flex flex-auto flex-col"},[o({class:"grid grid-cols-3 gap-4"},[se({label:"Card",value:"card",icon:r.creditCard}),se({label:"Paypal",value:"paypal",icon:r.companies.paypal}),se({label:"Apple",value:"apple",icon:r.companies.apple})])])},state(){return{method:null}}}),po=()=>o({class:"flex items-center justify-center gap-4"},[new uo]),fo=()=>N({submit:e=>{e.preventDefault(),console.log("Payment method added")}},[new p({name:"name",label:"Name"},[P({type:"text",placeholder:"First Last",required:!0,class:"border p-2 rounded-md w-full bg-background placeholder-muted-foreground text-foreground"})]),new p({name:"card_number",label:"Card number"},[P({type:"text",placeholder:"1234 5678 9012 3456",required:!0,class:"border p-2 rounded-md w-full bg-background placeholder-muted-foreground text-foreground"})]),o({class:"flex gap-4 mt-4"},[new p({name:"month",label:"Expires"},[I({required:!0,class:"border p-2 rounded-md w-full bg-background text-foreground",options:[{value:"",label:"Month",disabled:!0},...Array.from({length:12},(e,t)=>({value:`${t+1}`,label:`${t+1}`.padStart(2,"0")}))]})]),new p({name:"year",label:"Year"},[I({required:!0,class:"border p-2 rounded-md w-full bg-background text-foreground",options:[{value:"",label:"Year",disabled:!0},...Array.from({length:10},(e,t)=>({value:`${new Date().getFullYear()+t}`,label:`${new Date().getFullYear()+t}`}))]})]),new p({name:"cvc",label:"CVC"},[P({type:"text",placeholder:"CVC",required:!0,class:"border p-2 rounded-md w-full bg-background placeholder-muted-foreground text-foreground"})])]),c({type:"submit",class:"w-full mt-4 py-2 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition"},"Continue")]),ze=()=>F({class:"w-full max-w-md mx-auto p-8 bg-card space-y-6"},[E({title:"Payment Method",description:"Add a new payment method to your account."}),po(),o({class:"space-y-4"},[fo()])]),go=({name:e,description:t,stars:a,language:n,lastUpdated:i})=>o({class:"flex items-start justify-between py-4 border-b border-muted last:border-b-0"},[o({class:"flex flex-col"},[l({class:"font-semibold text-foreground"},e),l({class:"text-sm text-muted-foreground"},t),o({class:"flex space-x-4 text-sm text-muted-foreground mt-3"},[o({class:"flex items-center gap-2"},[w({class:" text-blue-500"},r.document.text),l(` ${n}`)]),o({class:"flex items-center"},[w(r.star),l(` ${a}`)]),o(`Updated ${i}`)])]),c({variant:"secondary",class:"px-3 py-1 gap-1 flex items-center rounded-md",click:()=>console.log(`Starred ${e}`)},[w(r.star),l("Star")])]),ho=({projects:e})=>o({class:"space-y-3"},e.map(t=>go(t))),bo=[{name:"shadcn/ui",description:"Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.",stars:"20k",language:"TypeScript",lastUpdated:"April 2023"},{name:"base-framework",description:"A robust framework for building and structuring large-scale applications with ease.",stars:"2",language:"JavaScript",lastUpdated:"June 2024"}],xo=()=>F({class:"w-full max-w-md mx-auto p-6 bg-card space-y-6"},[o({class:"font-semibold text-lg text-foreground"},"Projects"),ho({projects:bo})]),wo=()=>N({submit:e=>{e.preventDefault(),console.log("Issue reported")}},[o({class:"flex flex-auto w-full gap-4"},[new p({name:"area",label:"Area"},[I({required:!0,class:"border p-2 rounded-md w-full bg-background text-foreground",options:[{value:"billing",label:"Billing"},{value:"technical",label:"Technical"},{value:"account",label:"Account"},{value:"other",label:"Other"}],defaultValue:"billing",change:e=>console.log(`Area selected: ${e.target.value}`)})]),new p({name:"security_level",label:"Security Level"},[I({required:!0,class:"border p-2 rounded-md w-full bg-background text-foreground",options:[{value:"severity_1",label:"Severity 1"},{value:"severity_2",label:"Severity 2"},{value:"severity_3",label:"Severity 3"}],defaultValue:"severity_2",change:e=>console.log(`Security Level selected: ${e.target.value}`)})])]),new p({name:"subject",label:"Subject"},[P({type:"text",placeholder:"I need help with...",required:!0,class:"border p-2 rounded-md w-full bg-background text-foreground placeholder-muted-foreground"})]),new p({name:"description",label:"Description"},[q({placeholder:"Please include all information relevant to your issue.",required:!0,class:"border p-2 rounded-md w-full bg-background text-foreground placeholder-muted-foreground"})]),o({class:"flex justify-end gap-4 mt-4"},[c({variant:"outline",class:"px-4 py-2",click:()=>console.log("Cancel clicked")},"Cancel"),c({type:"submit",class:"px-4 py-2 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition"},"Submit")])]),qe=()=>F({class:"w-full max-w-md mx-auto p-6 bg-card space-y-6"},[E({title:"Report an issue",description:"What area are you having problems with?"}),wo()]),vo=({link:e})=>o({class:"flex items-center gap-4 py-2"},[R({type:"text",value:e,readOnly:!0,class:"border p-2 rounded-md w-full bg-background text-foreground"}),c({variant:"secondary",class:"px-4 py-2",click:()=>{navigator.clipboard.writeText(e),app.notify({title:"Link copied",description:"The link has been copied to your clipboard.",icon:r.clipboard.checked})}},"Copy Link")]),yo=({name:e,email:t,access:a,image:n})=>o({class:"flex items-center justify-between gap-4 py-2"},[o({class:"flex items-center gap-3"},[C({src:n,alt:e,fallbackText:e.split(" ").map(i=>i[0]).join("")}),o({},[l({class:"font-medium text-foreground"},e),l({class:"block text-sm text-muted-foreground"},t)])]),I({class:"border rounded-md bg-background text-foreground px-3 py-1",options:[{value:"edit",label:"Can edit"},{value:"view",label:"Can view"},{value:"comment",label:"Can comment"}],defaultValue:a,change:i=>console.log(`Access level changed for ${e}: ${i.target.value}`)})]),ko=({people:e})=>o({class:"space-y-3"},e.map(t=>yo(t))),Oe=({link:e,people:t})=>F({class:"w-full max-w-md mx-auto p-6 bg-card space-y-6"},[E({title:"Share this document",description:"Anyone with the link can view this document."}),vo({link:e}),o({class:"border-t my-4"}),o({class:"font-medium text-foreground"},"People with access"),ko({people:t})]),To=e=>e.split(" ").map(a=>a[0]).join(""),So=({name:e,email:t,role:a,image:n})=>o({class:"flex items-center justify-between gap-4 py-2"},[o({class:"flex items-center gap-3"},[C({src:n,alt:e,fallbackText:To(e)}),o({},[l({class:"font-medium text-foreground"},e),l({class:"block text-sm text-muted-foreground"},t)])]),I({class:"border rounded-md bg-background text-foreground px-3 py-1",options:[{value:"owner",label:"Owner"},{value:"member",label:"Member"}],defaultValue:a,change:i=>console.log(`Role changed for ${e}: ${i.target.value}`)})]),Co=({members:e})=>o({class:"space-y-3"},e.map(t=>So(t))),Ue=({members:e})=>F({class:"w-full max-w-md mx-auto p-6 bg-card space-y-6"},[E({title:"Team Member",description:"Invite your team members to collaborate."}),Co({members:e})]),Do=()=>g({title:"Cards",description:"Cards are a great way to display content in a concise and organized manner."},[s({title:"Usage",description:"Import the card atom and use it in your components.",preview:[F()],code:`import { Button } from '@components/atoms/cards/card.js';

Card()`}),k({class:"text-lg font-bold"},"Examples"),m({class:"text-muted-foreground"},"This is a list of examples of how to use the card component in your application."),s({title:"Account Card",preview:[He()],code:`import AccountCard from "./examples/account-card.js";

AccountCard()`}),s({title:"Paymnet Card",preview:[ze()],code:`import AccountCard from "./examples/payment-card.js";

PaymentCard()`}),s({title:"Team Mmeber Card",preview:[Ue({members:[{name:"Leslie Alexander",email:"leslie.alexander@example.com",image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"owner",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Michael Foster",email:"michael.foster@example.com",image:"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"member",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Dries Vincent",email:"dries.vincent@example.com",image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"owner",status:"online"}]})],code:`import AccountCard from "./examples/team-member-card.js";

TeamMemberCard()`}),s({title:"Share Document Card",preview:[Oe({link:"http://example.com/link/to/document",people:[{name:"Leslie Alexander",email:"leslie.alexander@example.com",image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"owner",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Michael Foster",email:"michael.foster@example.com",image:"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"member",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Dries Vincent",email:"dries.vincent@example.com",image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"owner",status:"online"}]})],code:`import AccountCard from "./examples/share-document-card.js";

ShareDocumentCard({
    link: 'http://example.com/link/to/document',
    people: [
        {
            name: 'Leslie Alexander',
            email: 'leslie.alexander@example.com',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            role: 'owner',
            lastSeen: '2023-01-23T13:23Z',
            status: 'offline'
        },
        {
            name: 'Michael Foster',
            email: 'michael.foster@example.com',
            image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            role: 'member',
            lastSeen: '2023-01-23T13:23Z',
            status: 'offline'
        },
        {
            name: 'Dries Vincent',
            email: 'dries.vincent@example.com',
            image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            role: 'owner',
            status: 'online'
        }
    ]
})`}),s({title:"Date Select Card",preview:[We({startDate:"2023-01-23"})],code:`import AccountCard from "./examples/date-select-card.js";

DateSelectCard({
    startDate: '2023-01-23'
})`}),s({title:"Report Issue Card",preview:[qe()],code:`import AccountCard from "./examples/report-issue-card.js";

ReportIssueCard()`}),s({title:"Project Card",preview:[xo()],code:`import AccountCard from "./examples/project-card.js";

ProjectCard()`}),s({title:"Cookie Settings Card",preview:[Re()],code:`import AccountCard from "./examples/cookie-settings-card.js";

CookieSettingsCard()`})]),Io=({toggleDropdown:e})=>$({cache:"button",class:"relative z-[2] inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-muted h-10 px-4 py-2 justify-between",click:e},[l({onState:["selectedLabel",t=>t||"Select item..."]}),U({html:r.chevron.upDown})]),jo=(e,t)=>me({class:"flex flex-auto items-center cursor-pointer p-2 hover:bg-muted/50 rounded-sm",click:()=>t(e),onState:["selectedValue",{"bg-secondary":e.value}]},[e.icon&&l({class:"mr-2 flex items-baseline"},[U({class:"flex w-4 h-4",html:e.icon})]),l(e.label)]),Ao=e=>o({class:"w-full border rounded-md"},[de({class:"max-h-60 overflow-y-auto p-2 grid gap-1",for:["items",t=>jo(t,e)]})]),Bo=({onSelect:e})=>o({class:"flex flex-auto flex-col"},[ge("open",(t,a,n)=>t?new he({cache:"dropdown",parent:n,button:n.button},[Ao(e)]):null)]),_e=fe({setData(){return new Z({items:this.items||[]})},state:{open:!1,selectedLabel:"",selectedValue:""},handleSelect(e){const t=this.state;t.selectedValue=e.value,t.selectedLabel=e.label,t.open=!1,typeof this.onSelect=="function"&&this.onSelect(e)},toggleDropdown(){this.state.toggle("open")},render(){const e=t=>{const a=this.state;a.selectedValue=t.value,a.selectedLabel=t.label,a.open=!1};return o({class:"relative w-full flex flex-auto flex-col max-w-[250px]"},[Io({toggleDropdown:this.toggleDropdown.bind(this)}),Bo({onSelect:e}),this.required&&R({class:"opacity-0 absolute top-0 left-0 z-[1]",type:"text",name:this.name,required:!0,value:["[[selectedValue]]",this.state]})])}}),Po=[{value:"next.js",label:"Next.js",icon:r.home},{value:"sveltekit",label:"SvelteKit"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}],Fo=()=>g({title:"Comboboxes",description:"Comboboxes are used to allow users to select an option from a dropdown list or enter a custom value."},[s({title:"Usage",description:"To use the Combobox component, import it from the components library and use it in your application.",preview:[o({class:"w-full max-w-[300px]"},[new _e({items:Po,onSelect:e=>console.log(e)})])],code:`@components/molecules/combobox/combobox.js';
import { Icons } from "@components/icons/icons.js";

new Combobox({
    items: [
    { value: 'next.js', label: 'Next.js', icon: Icons.home },,
    { value: 'sveltekit', label: 'SvelteKit' },
    { value: 'nuxt.js', label: 'Nuxt.js' },
    { value: 'remix', label: 'Remix' },
    { value: 'astro', label: 'Astro' },
],
})`})]),Mo=()=>{const e=[{id:1,status:"Active",email:"user1@example.com",amount:500.5},{id:2,status:"Inactive",email:"user2@example.com",amount:250.75},{id:3,status:"Active",email:"user3@example.com",amount:300}],t=()=>mt([re({class:"text-muted-foreground border-b"},[ut({}),te({key:"status",label:"Custom Status"}),te({key:"email",label:"User Email"}),te({key:"amount",label:"Amount (USD)",align:"justify-end"})])]),a=(n,i)=>re({class:"items-center px-4 py-2 hover:bg-muted/50"},[L({class:"p-4"},[new ee({checked:n.selected,class:"mr-2",click:()=>i(n)})]),L({class:"p-4 justify-center"},n.status),L({class:"p-4"},n.email),L({class:"p-4 text-right"},`$${n.amount.toFixed(2)}`)]);return o({class:"w-full mt-4"},[o({class:"w-full rounded-md border overflow-x-auto"},[dt({class:"w-full"},[new Fe({key:"id",customHeader:t(),rows:e,rowItem:a})])])])},Lo=[{label:"checkbox",key:""},{label:"Status",key:"status"},{label:"Email",key:"email"},{label:"Amount",key:"amount",align:"justify-end"}],$o=[{id:1,status:"Success",email:"ken99@yahoo.com",amount:316,selected:!1},{id:2,status:"Success",email:"abe45@gmail.com",amount:242,selected:!1},{id:3,status:"Processing",email:"monserrat44@gmail.com",amount:837,selected:!1},{id:4,status:"Success",email:"silas22@gmail.com",amount:874,selected:!1},{id:5,status:"Failed",email:"carmella@hotmail.com",amount:721,selected:!1}],No=(e,t)=>re({class:"items-center px-4 py-2 hover:bg-muted/50"},[L({class:"p-4 "},[new ee({checked:e.selected,class:"mr-2",onChange:()=>t(e)})]),L({class:"p-4 "},[l({class:"text-muted-foreground"},e.status)]),L({class:"p-4 "},e.email),L({class:"p-4 text-right"},`$${e.amount.toFixed(2)}`)]),Eo=()=>g({title:"Data Tables",description:"Data tables are used to display data in a structured format. They can be used to display a list of items, a grid of items, or a table of items."},[s({title:"Usage",description:"The data table component is used to display data in a structured format. It can be used to display a list of items, a grid of items, or a table of items.",preview:[new Fe({headers:Lo,rows:$o,rowItem:No,key:"id"})],code:`import { DataTable } from "@components/organisms/lists/data-table.js";
import { Div, I, Span, Table, Td, Th, Thead, Tr } from '@base-framework/atoms';
import { Checkbox } from '@components/atoms/form/checkbox.js';

new DataTable({
    key: 'id',
    headers: [
        { label: 'checkbox', key: '' },
        { label: 'Status', key: 'status' },
        { label: 'Email', key: 'email' },
        { label: 'Amount', key: 'amount', align: 'justify-end' }
    ],
    rows: [
        { id: 1, status: 'Success', email: 'ken99@yahoo.com', amount: 316.00, selected: false },
        { id: 2, status: 'Success', email: 'abe45@gmail.com', amount: 242.00, selected: false },
        { id: 3, status: 'Processing', email: 'monserrat44@gmail.com', amount: 837.00, selected: false },
        { id: 4, status: 'Success', email: 'silas22@gmail.com', amount: 874.00, selected: false },
        { id: 5, status: 'Failed', email: 'carmella@hotmail.com', amount: 721.00, selected: false },
        // Add more rows as needed
    ],
    rowItem: (row, onSelect) =>
    {
        return Tr({ class: 'items-center px-4 py-2 hover:bg-muted/50' }, [
            Td({ class: 'p-4 ' }, [
                new Checkbox({
                    checked: row.selected,
                    class: 'mr-2',
                    click: () => onSelect(row)
                })
            ]),
            Td({ class: 'p-4 ' }, [
                Span({ class: 'text-muted-foreground' }, row.status)
            ]),
            Td({ class: 'p-4 ' }, row.email),
            Td({ class: 'p-4 text-right' }, \`$\${row.amount.toFixed(2)}\`)
        ]);
    }
})`}),s({title:"Custom Header Data Table",description:"This demonstrates a data table with custom headers and row rendering using the DataTable component.",preview:[Mo()],code:`import { Div, Table, Td, Thead, Tr } from '@base-framework/atoms';
import { Checkbox } from '@components/atoms/form/checkbox.js';
import { CheckboxCol, DataTable, HeaderCol } from "@components/organisms/lists/data-table.js";

/**
 * CustomHeaderTable Component
 *
 * Demonstrates a data table with a custom header row and custom rows using existing components.
 *
 * @param {object} props
 * @returns {object}
 */
export const CustomHeaderTable = () =>
{
    // Define row data
    const customRows = [
        { id: 1, status: 'Active', email: 'user1@example.com', amount: 500.50 },
        { id: 2, status: 'Inactive', email: 'user2@example.com', amount: 250.75 },
        { id: 3, status: 'Active', email: 'user3@example.com', amount: 300.00 },
    ];

    /**
     * Custom Header Row using HeaderCol and CheckboxCol
     *
     * @returns {object}
     */
    const customHeaderRow = () =>
    {
        return Thead([
            Tr({ class: 'text-muted-foreground border-b' }, [
                CheckboxCol({}),
                HeaderCol({ key: 'status', label: 'Custom Status'}),
                HeaderCol({ key: 'email', label: 'User Email' }),
                HeaderCol({ key: 'amount', label: 'Amount (USD)', align: 'justify-end' })
            ])
        ]);
    };

    /**
     * Renders a row item.
     *
     * @param {object} row - Row data
     * @param {function} onSelect - Callback to handle row selection
     * @returns {object}
     */
    const rowItem = (row, onSelect) =>
    {
        return Tr({ class: 'items-center px-4 py-2 hover:bg-muted/50' }, [
            Td({ class: 'p-4' }, [
                new Checkbox({
                    checked: row.selected,
                    class: 'mr-2',
                    click: () => onSelect(row)
                })
            ]),
            Td({ class: 'p-4 justify-center' }, row.status),
            Td({ class: 'p-4' }, row.email),
            Td({ class: 'p-4 text-right' }, \`$\${row.amount.toFixed(2)}\`)
        ]);
    };

    return Div({ class: 'w-full mt-4' }, [
        Div({ class: 'w-full rounded-md border overflow-x-auto' }, [
            Table({ class: 'w-full' }, [
                new DataTable({
                    key: 'id',
                    customHeader: customHeaderRow(),
                    rows: customRows,
                    rowItem: rowItem
                })
            ])
        ])
    ]);
};`}),m({class:"text-muted-foreground"},'The Data Table allows items to be selected. The selected elements can be retrieved by calling the "getSelectedRows" method on the DataTable instance. The method returns an array of selected rows.')]),Ho=b((e,t)=>c({text:"Open",class:"m-1",click:()=>new Me(e,t).open()})),Ro=e=>c({text:"Open",class:"m-1",click:()=>new be(e).open()}),Wo=b((e,t)=>c({text:"Open",class:"m-1",click:()=>new be({icon:r.signOut,type:"destructive",title:"Are you absoultely sure?",description:"This will sign you out of the application.",confirmTextLabel:"Sign Out",confirmed:()=>console.log("Confirmed!")}).open()})),zo=({link:e})=>o({class:"flex items-center gap-4 py-2"},[P({type:"text",value:e,readOnly:!0,class:"border p-2 rounded-md w-full bg-background text-foreground"}),c({variant:"secondary",class:"px-4 py-2",click:()=>{navigator.clipboard.writeText(e),app.notify({title:"Link copied",description:"The link has been copied to your clipboard.",icon:r.clipboard.checked})}},"Copy Link")]),qo=e=>c({text:"Open",class:"m-1",click:()=>new Me(e,[zo({link:"https://example.com"})]).open()}),Oo=()=>g({title:"Dialogs",description:"Displays a dialog or a component that looks like a dialog. Dialogs can be opened and closed. They will be closed if the user clicks outside of the dialog or if the user clicks the close button."},[s({title:"Usage",description:"Import the dialog atom and use it in your components.",preview:[Ho({title:"Title",description:"this is the description.",hideFooter:!1},[])],code:`import { Dialog } from '@components/molecules/dialogue.js';

new Dialog({
    title: '',
    description: '',
    hideFooter: false
}, [

]).open()`}),s({title:"Confirmation",description:"Displays a confirmation dialog.",preview:[Ro({title:"Are you absoultely sure?",description:"This action cannot be undone. This will permanently delete your account and remove your data from our servers.",confirmTextLabel:"Save",confirmed:()=>console.log("Confirmed!")})],code:`import { Confirmation } from '@components/molecules/dialogs/confirmation.js';

new Confirmation({
    title: 'Are you absoultely sure?',
    description: 'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
    confirmTextLabel: 'Save',
    confirmed: () => console.log('Confirmed!')
}).open()`}),s({title:"Share Link",description:"Displays a dialog with a shareable link.",preview:[qo({title:"Share Link",description:"Share this link with others."})],code:`import { Confirmation } from '@components/molecules/dialogs/confirmation.js';

new Confirmation({
    title: 'Are you absoultely sure?',
    description: 'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
    confirmTextLabel: 'Save',
    confirmed: () => console.log('Confirmed!')
}).open()`}),s({title:"Types",description:"There are different types of dialogs.",preview:[Wo()],code:`import { Dialog } from '@components/molecules/dialogue.js';
import { Confirmation } from '@components/molecules/dialogs/confirmation.js';
import { Icons } from '@components/icons/icons.js';

new Confirmation({
    icon: Icons.signOut,
    type: 'destructive',
    title: 'Are you absoultely sure?',
    description: 'This will sign you out of the application.',
    confirmTextLabel: 'Sign Out',
    confirmed: () => console.log('Confirmed!')
}).open()
`}),m("The types are `destructive`, `warning`, `info`, `success`, and `default`. Dialogs can also have an icon in the header. The icon can be any icon from the icon library.")]),Uo=e=>l({class:"ml-auto text-xs tracking-widest opacity-60"},e),_o=e=>l({class:"flex w-4 h-4",html:e}),Go=e=>l({class:"flex-auto"},e),Vo=(e,t)=>me({class:"relative flex cursor-pointer hover:bg-muted/50 select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",click:()=>t(e)},[e.icon&&_o(e.icon),Go(e.label),e.shortcut&&Uo(e.shortcut)]),Yo=(e,t)=>de({class:"grid gap-2"},[e.map(a=>Vo(a,t))]),Ge=e=>o({class:"w-full z-10"},[o({class:"max-h-60 border rounded-md overflow-y-auto p-1 grid gap-2 divide-y divide-border",for:["groups",t=>Yo(t,e)]})]),Jo=({label:e,icon:t,toggleDropdown:a})=>$({cache:"button",class:`inline-flex items-center justify-between rounded-md border border-input
            bg-background px-2 py-2 text-sm font-medium hover:bg-muted
            focus:outline-none transition duration-150 ease-in-out`,click:a},[e&&l(e),t&&U({html:t})]),Qo=({onSelect:e})=>o([ge("open",(t,a,n)=>t?new he({cache:"dropdown",parent:n,button:n.button},[Ge(e)]):null)]);class Ko extends K{setData(){return new Z({groups:this.groups||[]})}setupStates(){return{open:!1,selectedItem:null}}toggleDropdown(){this.state.toggle("open")}handleSelect(t){this.state.selectedItem=t,this.state.open=!1,typeof this.onSelect=="function"&&this.onSelect(t)}render(){return o({class:"relative"},[Jo({label:this.label,icon:this.icon,toggleDropdown:this.toggleDropdown.bind(this)}),Qo({onSelect:this.handleSelect.bind(this)})])}}const Zo=()=>g({title:"Dropdown Menus",description:"Dropdown menus are used to display a list of options when a user clicks on a button or input field."},[s({title:"Usage",description:"To use the DropdownMenu component, import it from the components library and use it in your application.",preview:[new Ko({icon:r.ellipsis.vertical,groups:[[{icon:r.user.default,label:"Profile",shortcut:"⌘P",value:"profile"},{icon:r.creditCard,label:"Billing",shortcut:"⌘B",value:"billing"},{icon:r.cog.six,label:"Settings",shortcut:"⌘S",value:"settings"},{icon:r.computerDesktop,label:"Keyboard shortcuts",shortcut:"⌘K",value:"shortcuts"}],[{icon:r.user.multiple,label:"Team",value:"team"},{icon:r.user.plus,label:"Invite users",value:"invite"},{icon:r.plus,label:"New Team",shortcut:"⌘T",value:"new_team"}],[{icon:r.github,label:"GitHub",value:"github"},{icon:r.helpCircle,label:"Support",value:"support"},{icon:r.api,label:"API",value:"api"}]],onSelect:e=>{console.log("Selected item:",e)}})],code:`import { Icons } from "@components/icons/icons.js";
import { DropdownMenu } from '@components/molecules/dropdowns/dropdown-menu.js';

new DropdownMenu({
    icon: Icons.ellipsis.vertical,
    groups: [
        [
            { icon: Icons.user.default, label: 'Profile', shortcut: '⌘P', value: 'profile' },
            { icon: Icons.creditCard, label: 'Billing', shortcut: '⌘B', value: 'billing' },
            { icon: Icons.cog.six, label: 'Settings', shortcut: '⌘S', value: 'settings' },
            { icon: Icons.computerDesktop, label: 'Keyboard shortcuts', shortcut: '⌘K', value: 'shortcuts' },
        ],
        [
            { icon: Icons.user.multiple, label: 'Team', value: 'team' },
            { icon: Icons.user.plus, label: 'Invite users', value: 'invite' },
            { icon: Icons.plus, label: 'New Team', shortcut: '⌘T', value: 'new_team' },
        ],
        [
            { icon: Icons.github, label: 'GitHub', value: 'github' },
            { icon: Icons.helpCircle, label: 'Support', value: 'support' },
            { icon: Icons.api, label: 'API', value: 'api' },
        ]
    ],
    onSelect: (item) =>
    {
        console.log("Selected item:", item);
        // Handle selected item
    },
})`}),s({title:"Dropdown",description:'The Dropdown component is used to render a list of items within the dropdown menu. This uses the parent data "groups" to render the items.',preview:[new z({setData(){return new Z({groups:[[{icon:r.user.default,label:"Profile",shortcut:"⌘P",value:"profile"},{icon:r.creditCard,label:"Billing",shortcut:"⌘B",value:"billing"},{icon:r.cog.six,label:"Settings",shortcut:"⌘S",value:"settings"},{icon:r.computerDesktop,label:"Keyboard shortcuts",shortcut:"⌘K",value:"shortcuts"}],[{icon:r.user.multiple,label:"Team",value:"team"},{icon:r.user.plus,label:"Invite users",value:"invite"},{icon:r.plus,label:"New Team",shortcut:"⌘T",value:"new_team"}],[{icon:r.github,label:"GitHub",value:"github"},{icon:r.helpCircle,label:"Support",value:"support"},{icon:r.api,label:"API",value:"api"}]]})}},[Ge({onSelect:e=>{console.log("Selected item:",e)}})])],code:`import { Icons } from "@components/icons/icons.js";
import { Dropdown } from "@components/molecules/dropdowns/dropdown.js";
import { Data } from "@base-framework/base";
import { Panel } from "@components/organisms/panel.js";

new Panel({
    setData()
    {
        return new Data({
            groups: [
                [
                    { icon: Icons.user.default, label: 'Profile', shortcut: '⌘P', value: 'profile' },
                    { icon: Icons.creditCard, label: 'Billing', shortcut: '⌘B', value: 'billing' },
                    { icon: Icons.cog.six, label: 'Settings', shortcut: '⌘S', value: 'settings' },
                    { icon: Icons.computerDesktop, label: 'Keyboard shortcuts', shortcut: '⌘K', value: 'shortcuts' },
                ],
                [
                    { icon: Icons.user.multiple, label: 'Team', value: 'team' },
                    { icon: Icons.user.plus, label: 'Invite users', value: 'invite' },
                    { icon: Icons.plus, label: 'New Team', shortcut: '⌘T', value: 'new_team' },
                ],
                [
                    { icon: Icons.github, label: 'GitHub', value: 'github' },
                    { icon: Icons.helpCircle, label: 'Support', value: 'support' },
                    { icon: Icons.api, label: 'API', value: 'api' },
                ]
            ]
        });
    }
}, [
    Dropdown({
        onSelect: (item) =>
        {
            console.log("Selected item:", item);
            // Handle selected item
        }
    })
])`})]),Ve=xe({state(){return{value:this.value??0,min:this.min??0,max:this.max??100,filledPercentage:this.getFillPercentage(this.value)}},getFillPercentage(e){return(e-this.min)/(this.max-this.min)*100},render(){return o({class:"relative w-full h-4 flex items-center"},[o({class:"absolute h-2 w-full rounded-full bg-muted"}),o({class:"absolute h-2 bg-primary rounded-full",style:"width: [[filledPercentage]]%"}),o({class:"absolute block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transform -translate-x-1/2",style:"left: [[filledPercentage]]%"}),R({type:"range",min:"[[min]]",max:"[[max]]",value:"[[value]]",class:"absolute w-full h-full opacity-0 cursor-pointer",bind:this.bind,input:e=>{const t=Number(e.target.value);this.state.value=t,this.state.filledPercentage=this.getFillPercentage(t),typeof this.change=="function"&&this.change(t)}})])}}),V=b((e,t)=>o({...e,class:"flex flex-auto items-center justify-center w-full py-4 space-y-8 max-w-[450px]"},t)),Xo=[{value:"next.js",label:"Next.js"},{value:"sveltekit",label:"SvelteKit"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}],ea=()=>N({submit:e=>{console.log("Profile Form submitted")}},[_({legend:"Profile"},[new p({name:"username",label:"Username",description:"This is your public display name."},[P({placeholder:"e.g. username",required:!0})]),new p({name:"email",label:"Email Address",description:"We'll use this to contact you."},[ie({placeholder:"e.g. email@address.com",required:!0})]),c({type:"submit"},"Submit")])]),ta=()=>N({submit:e=>{console.log("Preferences Form submitted")}},[_({legend:"Preferences"},[new p({name:"framework",label:"Favorite Framework",description:"Select your preferred framework."},[I({options:Xo,required:!0})]),new p({name:"newsletter",label:"Subscribe to Newsletter",description:"Stay updated with our latest news."},[new ee({label:"Yes, sign me up!",required:!0,onChange:e=>console.log("Newsletter checked:",e)})]),c({type:"submit"},"Save Preferences")])]),oa=()=>N({submit:e=>{console.log("Contact Form submitted")}},[_({legend:"Contact Us"},[new p({name:"phone",label:"Phone Number",description:"We may contact you at this number."},[le({placeholder:"e.g. +1234567890",required:!0})]),new p({name:"message",label:"Your Message",description:"Let us know how we can help you."},[q({placeholder:"Type your message here...",required:!0})]),new p({name:"message",label:"Select Framework",description:"Select your preferred framework."},[new _e({required:!0,items:[{value:"next.js",label:"Next.js"},{value:"sveltekit",label:"SvelteKit"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}]})]),c({type:"submit"},"Send Message")])]),aa=()=>N({submit:e=>{console.log("Settings Form submitted")}},[_({legend:"Settings"},[new p({name:"notifications",label:"Enable Notifications",description:"Toggle to enable or disable notifications."},[new X({active:!0,required:!0})]),new p({name:"volume",label:"Volume Level",description:"Set your preferred volume level."},[new Ve({min:0,max:100,value:50})]),c({type:"submit"},"Save Settings")])]),sa=()=>g({title:"Forms",description:"Forms are used to collect user data and submit it to the server."},[s({title:"Profile Form",description:"A simple profile form with username and email fields.",preview:[V([ea()])],code:`import { Button, Input, EmailInput } from "@components/atoms/form/input.js";
import { Form, FormField } from "@components/molecules/form/form.js";
import { Div } from "@base-framework/atoms";
import { Atom } from "@base-framework/base";
import { Fieldset } from "@components/atoms/form/fieldset.js";
import { Button } from "@components/atoms/buttons/buttons.js";

Fieldset({ legend: 'Profile' }, [
    new FormField({
        name: "username",
        label: "Username",
        description: "This is your public display name."
    }, [
        Input({ placeholder: "e.g. username", required: true })
    ]),

    new FormField({
        name: "email",
        label: "Email Address",
        description: "We'll use this to contact you."
    }, [
        EmailInput({ placeholder: "e.g. email@address.com", required: true })
    ]),

    Button({ type: "submit" }, "Submit")
])`}),s({title:"Preferences Form",description:"A preferences form with a select input and a checkbox.",preview:[V([ta()])],code:`import { Button, Checkbox, Select } from "@components/atoms/form/input.js";
import { Form, FormField } from "@components/molecules/form/form.js";
import { Div } from "@base-framework/atoms";
import { Atom } from "@base-framework/base";
import { Fieldset } from "@components/atoms/form/fieldset.js";
import { Button } from "@components/atoms/buttons/buttons.js";

Form({ submit: (e) => { console.log("Preferences Form submitted"); } }, [
    Fieldset({ legend: 'Preferences' }, [
        new FormField({
            name: "framework",
            label: "Favorite Framework",
            description: "Select your preferred framework."
        }, [
            Select({ options: frameworks, required: true })
        ]),

        new FormField({
            name: "newsletter",
            label: "Subscribe to Newsletter",
            description: "Stay updated with our latest news."
        }, [
            new Checkbox({ label: "Yes, sign me up!", required: true, onChange: (checked) => console.log("Newsletter checked:", checked) })
        ]),

        Button({ type: "submit" }, "Save Preferences")
    ])
])`}),s({title:"Contact Form",description:"A contact form with a phone input and a textarea for messages.",preview:[V([oa()])],code:`import { Button, TelInput, Textarea } from "@components/atoms/form/input.js";
import { Form, FormField } from "@components/molecules/form/form.js";
import { Div } from "@base-framework/atoms";
import { Atom } from "@base-framework/base";
import { Fieldset } from "@components/atoms/form/fieldset.js";
import { Button } from "@components/atoms/buttons/buttons.js";
import { Combobox } from "@components/molecules/combobox/combobox.js";

Form({ submit: (e) => { console.log("Contact Form submitted"); } }, [
    Fieldset({ legend: 'Contact Us' }, [
        new FormField({
            name: "phone",
            label: "Phone Number",
            description: "We may contact you at this number."
        }, [
            TelInput({ placeholder: "e.g. +1234567890", required: true })
        ]),

        new FormField({
            name: "message",
            label: "Your Message",
            description: "Let us know how we can help you."
        }, [
            Textarea({ placeholder: "Type your message here...", required: true })
        ]),

        new FormField({
            name: "message",
            label: "Select Framework",
            description: "Select your preferred framework."
        }, [
            new Combobox({
                required: true,
                items: [
                    { value: 'next.js', label: 'Next.js' },
                    { value: 'sveltekit', label: 'SvelteKit' },
                    { value: 'nuxt.js', label: 'Nuxt.js' },
                    { value: 'remix', label: 'Remix' },
                    { value: 'astro', label: 'Astro' },
                ],
            })
        ]),

        Button({ type: "submit" }, "Send Message")
    ])
])`}),s({title:"Settings Form",description:"A settings form with a toggle and a range slider.",preview:[V([aa()])],code:`import { Button, Toggle, RangeSlider } from "@components/atoms/form/input.js";
import { Form, FormField } from "@components/molecules/form/form.js";
import { Div } from "@base-framework/atoms";
import { Atom } from "@base-framework/base";
import { Fieldset } from "@components/atoms/form/fieldset.js";
import { Button } from "@components/atoms/buttons/buttons.js";
import { Toggle } from "@components/molecules/toggle/toggle.js";
import { RangeSlider } from '@components/atoms/form/range-slider.js';

Form({ submit: (e) => { console.log("Settings Form submitted"); } }, [
    Fieldset({ legend: 'Settings' }, [
        new FormField({
            name: "notifications",
            label: "Enable Notifications",
            description: "Toggle to enable or disable notifications."
        }, [
            new Toggle({ active: true, required: true })
        ]),

        new FormField({
            name: "volume",
            label: "Volume Level",
            description: "Set your preferred volume level."
        }, [
            new RangeSlider({ min: 0, max: 100, value: 50 })
        ]),

        Button({ type: "submit" }, "Save Settings")
    ])
])`})]);function na({bind:e,required:t}){return R({cache:"input",class:"opacity-0 absolute top-0 left-0 w-full h-full pointer-events-none",bind:e,required:t})}function ra({bind:e,required:t,toggleOpen:a}){return $({class:"relative flex items-center gap-2 w-full justify-between border border-input bg-background hover:bg-muted rounded-md h-10 px-4 py-2",click:a},[na({bind:e,required:t}),l({onState:["selectedTime",n=>n||"Pick a time"]}),U({html:r.clock})])}function ne({items:e,handleTimeSelect:t,state:a,stateValue:n,pad:i=!1}){return o({class:"flex flex-col max-h-[200px] overflow-y-auto"},e.map(d=>{let u=i?d.toString().padStart(2,"0"):d.toString();return $({text:u,class:"hover:bg-muted/50 rounded-md px-2 py-1",click:()=>t({[n]:u}),onState:[a,n,{"bg-muted":u}]})}))}function ia({handleTimeSelect:e}){return o({class:"absolute mt-1 z-10 bg-background rounded-md shadow-lg"},[ge("open",(t,a,n)=>t?new he({cache:"dropdown",parent:n,button:n.panel,size:"fit"},[o({class:"flex flex-auto flex-col border rounded-md shadow-md"},[o({class:"grid grid-cols-3 gap-2 p-4 text-center max-h-[220px] min-w-[240px]"},[ne({items:Array.from({length:12},(i,d)=>d+1),handleTimeSelect:e,state:n.state,stateValue:"hour",pad:!0}),ne({items:Array.from({length:60},(i,d)=>d),handleTimeSelect:e,state:n.state,stateValue:"minute",pad:!0}),ne({items:["AM","PM"],handleTimeSelect:e,state:n.state,stateValue:"meridian"})])])]):null)])}function Te(e){if(!e)return{hour:null,minute:null,meridian:null};const t=/^(\d{1,2}):(\d{2})(?::(\d{2}))?\s?(AM|PM)?$/i,a=e.match(t);if(!a)return{hour:null,minute:null,meridian:null};let[,n,i,,d]=a,u=parseInt(n,10),T=parseInt(i,10);return u<0||u>23||T<0||T>59?{hour:null,minute:null,meridian:null}:(d?(d=d.toUpperCase(),d==="PM"&&u<12?u+=12:d==="AM"&&u===12&&(u=12)):u===0?(d="AM",u=12):u<12?d="AM":u===12?d="PM":(d="PM",u-=12),{hour:u.toString().padStart(2,"0"),minute:T.toString().padStart(2,"0"),meridian:d})}const la=xe({state(){const e=this.selectedTime??null,{hour:t,minute:a,meridian:n}=Te(e);return{selectedTime:e,open:!1,hour:t,minute:a,meridian:n}},after(){if(this.input.value){const{hour:e,minute:t,meridian:a}=Te(this.input.value);this.state.set({hour:e,minute:t,meridian:a,selectedTime:this.input.value})}},render(){const e=(a,{state:n})=>n.toggle("open"),t=({hour:a,minute:n,meridian:i})=>{if(a&&(this.state.hour=a),n&&(this.state.minute=n),i&&(this.state.meridian=i),this.state.hour&&this.state.minute&&this.state.meridian){const d=`${this.state.hour}:${this.state.minute} ${this.state.meridian}`;this.state.selectedTime=d,this.state.open=!1,this.input.value=d,typeof this.change=="function"&&this.change(d)}};return o({class:"relative w-full max-w-[320px]"},[ra({toggleOpen:e,bind:this.bind,required:this.required}),ia({handleTimeSelect:t})])}}),ca=[{value:"next.js",label:"Next.js"},{value:"sveltekit",label:"SvelteKit"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}],h=b((e,t)=>o({...e,class:"flex flex-auto items-center justify-center w-full max-w-[350px]"},t)),Se=({label:e,description:t,active:a,onChange:n})=>o({class:"flex items-center justify-between p-4 border rounded-md bg-muted/10 border-muted-foreground/20 mb-4"},[o({class:"flex flex-col pr-8"},[k({class:"font-semibold"},e),m({class:"text-sm text-muted-foreground"},t)]),new X({active:a,change:n})]),da=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Cherry",value:"cherry"},{label:"Date",value:"date"},{label:"Elderberry",value:"elderberry"},{label:"Fig",value:"fig"},{label:"Grape",value:"grape"},{label:"Honeydew",value:"honeydew"}],ma=()=>g({title:"Inputs",description:"Inputs are essential for gathering user data in forms."},[s({title:"Usage",description:"Import the input atom and use it in your components. The input can be of various types: text, password, email, etc.",preview:[o({class:"grid gap-2 w-full max-w-[350px]"},[P({type:"text",placeholder:"Enter your text here...",change:e=>console.log(e.target.value)}),ie({}),le({}),q({placeholder:"Enter your text here..."})])],code:`import { Input, EmailInput, TelInput, Textarea } from '@components/atoms/form/input.js';

Input({
    type: 'text',
    placeholder: 'Enter your text here...',
    change: (e) => console.log(e.target.value)
}),
EmailInput({}),
TelInput({}),
Textarea({
    placeholder: 'Enter your text here...'
})`}),s({title:"Search Dropdown",description:"This is a search dropdown.",preview:[o({class:"relative w-full max-w-md"},[new pt({options:da,onSelect:e=>console.log(e)})])],code:`import { SearchDropdown } from "@components/organisms/search/search-dropdown.js";

const options = [
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Cherry', value: 'cherry' },
    { label: 'Date', value: 'date' },
    { label: 'Elderberry', value: 'elderberry' },
    { label: 'Fig', value: 'fig' },
    { label: 'Grape', value: 'grape' },
    { label: 'Honeydew', value: 'honeydew' }
];

new SearchDropdown({ options, onSelect: (item) => console.log(item) })
`}),s({title:"File Input",description:"This is a file input.",preview:[h([ft({multiple:!0,change:e=>console.log(e.target.files)})])],code:`import { EmailInput, FileInput, Input, TelInput, Textarea } from "@components/atoms/form/input.js";

FileInput({
    multiple: true,
    change: (e) => console.log(e.target.files)
})`}),s({title:"Radio Input",description:"This is a radio input.",preview:[o({class:"grid gap-2"},[oe({name:"theme",label:"System",value:"system"}),oe({name:"theme",label:"Light",value:"light"}),oe({name:"theme",label:"Dark",value:"dark"})])],code:`import { Radio } from "@components/atoms/form/input.js";
import { Div } from "@base-framework/atoms";

Div({ class: 'grid gap-2' }, [
    Radio({
        name: 'theme',
        label: 'System',
        value: 'system',
    }),
    Radio({
        name: 'theme',
        label: 'Light',
        value: 'light',
    }),
    Radio({
        name: 'theme',
        label: 'Dark',
        value: 'dark',
    })
])`}),s({title:"Text Input",description:"This is a text input.",preview:[h([P({type:"text",placeholder:"Enter your text here..."})])],code:`
import { EmailInput, FileInput, Input, TelInput, Textarea } from "@components/atoms/form/input.js";

Input({
    type: 'text',
    placeholder: 'Enter your text here...'
})`}),s({title:"Tel Input",description:"This is a phone input.",preview:[h([le({})])],code:`
import { EmailInput, FileInput, Input, TelInput, Textarea } from "@components/atoms/form/input.js";

TelInput({
})`}),s({title:"Email Input",description:"This is a email input.",preview:[h([ie({})])],code:`
import { EmailInput, FileInput, Input, TelInput, Textarea } from "@components/atoms/form/input.js";

EmailInput({

})`}),s({title:"URL Input",description:"This is a URL input field.",preview:[h([gt({placeholder:"Enter a valid URL...",change:e=>console.log(e.target.value)})])],code:`import { UrlInput } from '@components/atoms/form/input.js';

UrlInput({
    placeholder: 'Enter a valid URL...',
    change: (e) => console.log(e.target.value),
});`}),s({title:"Color Input",description:"This is a color input field.",preview:[h([ht({change:e=>console.log(e.target.value)})])],code:`import { ColorInput } from '@components/atoms/form/input.js';

ColorInput({
    change: (e) => console.log(e.target.value),
});`}),s({title:"Date Input",description:"This is a date input field.",preview:[h([bt({change:e=>console.log(e.target.value)})])],code:`import { DateInput } from '@components/atoms/form/input.js';

DateInput({
    change: (e) => console.log(e.target.value),
});`}),s({title:"Time Input",description:"This is a time input field.",preview:[h([xt({change:e=>console.log(e.target.value)})])],code:`import { TimeInput } from '@components/atoms/form/input.js';

TimeInput({
    change: (e) => console.log(e.target.value),
});`}),s({title:"DateTime Input",description:"This is a datetime input field.",preview:[h([wt({change:e=>console.log(e.target.value)})])],code:`import { DateTimeInput } from '@components/atoms/form/input.js';

DateTimeInput({
    change: (e) => console.log(e.target.value),
});`}),s({title:"Week Input",description:"This is a week input field.",preview:[h([vt({change:e=>console.log(e.target.value)})])],code:`import { WeekInput } from '@components/atoms/form/input.js';

WeekInput({
    change: (e) => console.log(e.target.value),
});`}),s({title:"Month Input",description:"This is a month input field.",preview:[h([yt({change:e=>console.log(e.target.value)})])],code:`import { MonthInput } from '@components/atoms/form/input.js';

MonthInput({
    change: (e) => console.log(e.target.value),
});`}),s({title:"Password Input",description:"This is a password input field.",preview:[h([kt({class:"w-12 h-12"})])],code:`import { PasswordInput } from '@components/atoms/form/input.js';

PasswordInput({
    class: 'w-12 h-12'
});`}),s({title:"Number Input",description:"This is a number input field.",preview:[h([Tt({placeholder:"Enter a number...",change:e=>console.log(e.target.value)})])],code:`import { NumberInput } from '@components/atoms/form/input.js';

NumberInput({
    placeholder: 'Enter a number...',
    change: (e) => console.log(e.target.value),
});`}),s({title:"Hidden Input",description:"This is a hidden input field.",preview:[h([St({value:"hidden-value"})])],code:`import { HiddenInput } from '@components/atoms/form/input.js';

HiddenInput({
    value: 'hidden-value',
});`}),s({title:"Checkbox",description:"This is a checkbox input.",preview:[new ee({label:"Check me",onChange:e=>console.log(e)})],code:`
import { Checkbox } from '@components/atoms/form/checkbox.js';

new Checkbox({
    label: 'Check me',
    check: (checked) => console.log(checked)
})`}),s({title:"Select",description:"This is a select input.",preview:[h([I({options:ca,change:e=>console.log(e.target.value)})])],code:`import { Select } from "@components/atoms/form/select.js";

Select({
    options: [
        { value: 'next.js', label: 'Next.js' },
        { value: 'sveltekit', label: 'SvelteKit' },
        { value: 'nuxt.js', label: 'Nuxt.js' },
        { value: 'remix', label: 'Remix' },
        { value: 'astro', label: 'Astro' },
    ],
    change: (e) => console.log(e.target.value)
})`}),s({title:"Textarea",description:"This is a textarea input.",preview:[h([q({placeholder:"Enter your text here..."})])],code:`
import { EmailInput, FileInput, Input, TelInput, Textarea } from "@components/atoms/form/input.js";

Textarea({
    placeholder: 'Enter your text here...'
})`}),s({title:"Time Picker",description:"This is a time picker input.",preview:[h([new la({selectedTime:"12:00 am",change:e=>console.log(e)})])],code:`
import TimePicker from "@components/molecules/date-time/time-picker.js";

new TimePicker({
    selectedTime: '12:00 am',
    change: (time) => console.log(time)
})`}),s({title:"Date Picker",description:"This is a date picker input.",preview:[h([new pe({selectedDate:"2022-01-01"})])],code:`
import DatePicker from "@components/molecules/date-time/date-picker.js";

new DatePicker()`}),s({title:"Range Slider",description:"This is a range slider input.",preview:[h([new Ve({min:0,max:100,value:50,change:e=>console.log(e)})])],code:`
import { RangeSlider } from '@components/atoms/form/range-slider.js';

new RangeSlider({
    min: 0,
    max: 100,
    value: 50,
    change: (value) => console.log(value)
})`}),s({title:"Counter",description:"This is a counter input.",preview:[h([new Ft({class:"max-w-[300px]",initialCount:5,min:0,max:1e5,readonly:!1,bind:"count",change:e=>console.log(e)})])],code:`
import { Counter } from '@components/molecules/counters/counter.js';

new Counter({
    class: 'max-w-[300px]',
    initialCount: 5,
    min: 0,
    max: 100000,
    readonly: false,
    bind: 'count',
    change: (value) => console.log(value)
})`}),s({title:"Toggle Switch",description:"This is a toggle switch input.",preview:[h([new X({active:!0,change:e=>console.log(e)})])],code:`
import { RangeSlider } from '@components/atoms/form/range-slider.js';

new RangeSlider({
    min: 0,
    max: 100,
    value: 50,
    change: (value) => console.log(value)
})`}),s({title:"Toggle Switch",description:"Toggle switches to control various settings.",preview:[o({class:"p-4"},[k({class:"text-lg font-bold mb-4"},"Email Notifications"),Se({label:"Marketing emails",description:"Receive emails about new products, features, and more.",active:!1,onChange:e=>console.log("Marketing emails:",e)}),Se({label:"Security emails",description:"Receive emails about your account security.",active:!1,onChange:e=>console.log("Security emails:",e)}),c({text:"Submit",class:"mt-4"})])],code:`
import { Toggle } from '@components/atoms/form/toggle.js';

const NotificationToggle = ({ label, description, active, onChange }) => (
    Div({ class: 'flex items-center justify-between p-4 border rounded-md bg-muted/10 border-muted-foreground/20 mb-4' }, [
        Div({ class: 'flex flex-col pr-8' }, [
            H4({ class: 'font-semibold' }, label),
            P({ class: 'text-sm text-muted-foreground' }, description)
        ]),
        new Toggle({
            active,
            change: onChange
        })
    ])
);

Div({ class: 'p-4' }, [
    H4({ class: 'text-lg font-bold mb-4' }, 'Email Notifications'),
    NotificationToggle({
        label: 'Marketing emails',
        description: 'Receive emails about new products, features, and more.',
        active: false,
        onChange: (active) => console.log('Marketing emails:', active)
    }),
    NotificationToggle({
        label: 'Security emails',
        description: 'Receive emails about your account security.',
        active: false,
        onChange: (active) => console.log('Security emails:', active)
    }),
    Button({
        text: 'Submit',
        class: 'mt-4'
    })
]);`})]),ua=[{name:"Leslie Alexander",email:"leslie.alexander@example.com",image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"Co-Founder / CEO",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Michael Foster",email:"michael.foster@example.com",image:"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"Co-Founder / CTO",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Dries Vincent",email:"dries.vincent@example.com",image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"Business Relations",status:"online"}],pa=()=>g({title:"Lists",description:"Lists are used to display a collection of items in a structured format. Each item can be customized to show different information."},[s({title:"Usage",description:"To use the List component, import it from the components library and use it in your application.",preview:[Mt({users:ua})],code:`import { UserListItem } from "@components/organisms/lists/user-list.js";
import { List } from "@base-framework/organisms";

/**
 * User List Atom
 *
 * @param {object} props
 * @returns {object}
 */
const UserList = Atom((props) =>
{
    return new List({
        cache: 'list',
        key: 'name',
        items: [
        {
            name: 'Leslie Alexander',
            email: 'leslie.alexander@example.com',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            role: 'Co-Founder / CEO',
            lastSeen: '2023-01-23T13:23Z',
            status: 'offline'
        }],
        role: 'list',
        class: 'divide-y divide-border',
        rowItem: UserListItem
    });
});`}),k({class:"text-lg font-bold"},"Description"),m({class:"text-muted-foreground"},"The List component can be used to display a list of items in a structured format. Each item can be customized to show different information. The List component supports appending, prepending, mingling, and deleting or items. "),k({class:"text-lg font-bold"},"Performance"),m({class:"text-muted-foreground"},"The list will only update or re-render the items that have changed, improving performance. It uses a key to know when to update an item.")]),Y=[{label:"Large",buttonStyle:"primary",size:"lg"},{label:"Small",buttonStyle:"secondary",size:"sm"},{label:"Medium",buttonStyle:"destructive",size:"md"},{label:"XL",buttonStyle:"primary",size:"xl"},{label:"Right",buttonStyle:"ghost",type:"right"},{label:"Left",buttonStyle:"link",type:"left"}],J=({label:e,buttonStyle:t,size:a,type:n})=>c({text:e,class:`m-1 ${t}`,click:()=>new Le({title:"Are you absolutely sure?",size:a,type:n},[o({class:"flex flex-col max-w-lg lg:p-4 space-y-8"},[new p({name:"popover-test",label:"Popover Test"},[new pe]),new p({name:"dialog-test",label:"Dialog Test"},[c({click:()=>{new be({title:"Are you absoultely sure?",description:"This action cannot be undone. This will permanently delete your account and remove your data from our servers.",confirmTextLabel:"Save",confirmed:()=>{app.notify({icon:r.trash,title:"Account deleted",description:"Your account has been successfully deleted.",type:"destructive"})}}).open()}},"Confirm")])])]).open()}),fa=({size:e="md",type:t="center"})=>new Le({title:"Report an Issue",icon:r.warning,description:"What area are you having problems with?",size:e,type:t,onSubmit:()=>console.log("Form submitted")},[o({class:"flex flex-col lg:p-4 space-y-8"},[_({legend:"Issue Details"},[o({class:"flex flex-auto w-full gap-4"},[new p({name:"area",label:"Area"},[I({required:!0,class:"border p-2 rounded-md w-full bg-background text-foreground",options:[{value:"billing",label:"Billing"},{value:"technical",label:"Technical"},{value:"account",label:"Account"},{value:"other",label:"Other"}],defaultValue:"billing",change:a=>console.log(`Area selected: ${a.target.value}`)})]),new p({name:"security_level",label:"Security Level"},[I({required:!0,class:"border p-2 rounded-md w-full bg-background text-foreground",options:[{value:"severity_1",label:"Severity 1"},{value:"severity_2",label:"Severity 2"},{value:"severity_3",label:"Severity 3"}],defaultValue:"severity_2",change:a=>console.log(`Security Level selected: ${a.target.value}`)})])]),new p({name:"subject",label:"Subject"},[P({type:"text",placeholder:"I need help with...",required:!0,class:"border p-2 rounded-md w-full bg-background text-foreground placeholder-muted-foreground"})]),new p({name:"description",label:"Description"},[q({placeholder:"Please include all information relevant to your issue.",required:!0,class:"border p-2 rounded-md w-full bg-background text-foreground placeholder-muted-foreground"})])])])]),Ce=({label:e,buttonStyle:t,size:a,type:n})=>c({text:e,class:`m-1 ${t}`,click:()=>fa({size:a,type:n}).open()}),ga=()=>g({title:"Modals",description:"Displays a modal or a component that looks like a modal."},[s({title:"Extra Large Modal",description:"This is an extra large modal.",preview:[J(Y[3])],code:`
import { Modal } from "@components/molecules/modals/modal.js";
import { Button } from "@components/atoms/buttons/buttons.js";

/**
 * This will create a modal button.
 *
 * @param {object} props
 * @returns {object}
 */
const ModalButton = (props, children) => Button({
	text: label,
    variant: 'primary',
	click: () => new Modal({
		size: 'xl',
		title: 'Are you absolutely sure?'
	}).open()
});`}),s({title:"Large Modal",description:"This is a large modal.",preview:[J(Y[0])],code:`
import { Modal } from "@components/molecules/modals/modal.js";
import { Button } from "@components/buttons/buttons.js";

/**
 * This will create a modal button.
 *
 * @param {object} props
 * @returns {object}
 */
const ModalButton = (props, children) => Button({
	text: label,
    variant: 'primary',
	click: () => new Modal({
		size: 'lg',
		title: 'Are you absolutely sure?'
	}).open()
});`}),s({title:"Medium Modal",preview:[J(Y[2])],code:`
import { Modal } from "@components/molecules/modals/modal.js";
import { Button } from "@components/atoms/buttons/buttons.js";

/**
 * This will create a modal button.
 *
 * @param {object} props
 * @returns {object}
 */
const ModalButton = (props, children) => Button({
	text: label,
    variant: 'primary',
	click: () => new Modal({
		size: 'md',
		title: 'Are you absolutely sure?'
	}).open()
});`}),s({title:"Right Modal",preview:[J(Y[4])],code:`
import { Modal } from "@components/molecules/modals/modal.js";
import { Button } from "@components/buttons/buttons.js";

/**
 * This will create a modal button.
 *
 * @param {object} props
 * @returns {object}
 */
const ModalButton = (props, children) => Button({
	text: label,
    variant: 'primary',
	click: () => new Modal({
	    size: 'lg',
		type: 'right',
		title: 'Are you absolutely sure?'
	}).open()
});`}),s({title:"Form Modal",preview:[Ce({label:"Form Modal",buttonStyle:"primary"})],code:`
import { Modal } from "@components/molecules/modals/modal.js";
import { Button } from "@components/atoms/buttons/buttons.js";
import { Icons } from "@components/icons/icons.js";
import { Fieldset } from "@components/atoms/form/fieldset.js";
import { Div } from "@base-framework/atoms";
import { Input, Textarea } from "@components/atoms/form/input.js";

/**
 * This will create a modal form.
 *
 * @returns {object}
 */
const ModalForm = ({
	size = 'lg',
	type = 'center'
}) => (
	new Modal({
		title: 'Report an Issue',
		description: "What area are you having problems with?",
		size,
		type,
		onSubmit: () => console.log('Form submitted')
	}, [
		Div({ class: 'flex flex-col max-w-lg p-4 space-y-8' }, [
			Fieldset({ legend: 'Issue Details' }, [
				// Row for Area and Security Level
				Div({ class: "flex flex-auto w-full gap-4" }, [
					// Area field
					new FormField({ name: "area", label: "Area" }, [
						Select({
							required: true,
							class: "border p-2 rounded-md w-full bg-background text-foreground",
							options: [
								{ value: "billing", label: "Billing" },
								{ value: "technical", label: "Technical" },
								{ value: "account", label: "Account" },
								{ value: "other", label: "Other" }
							],
							defaultValue: "billing",
							change: (e) => console.log(\`Area selected: \${e.target.value}\`)
						})
					]),

					// Security Level field
					new FormField({ name: "security_level", label: "Security Level" }, [
						Select({
							required: true,
							class: "border p-2 rounded-md w-full bg-background text-foreground",
							options: [
								{ value: "severity_1", label: "Severity 1" },
								{ value: "severity_2", label: "Severity 2" },
								{ value: "severity_3", label: "Severity 3" }
							],
							defaultValue: "severity_2",
							change: (e) => console.log(\`Security Level selected: \${e.target.value}\`)
						})
					])
				]),

				// Subject field
				new FormField({
					name: "subject",
					label: "Subject",
				}, [
					Input({
						type: "text",
						placeholder: "I need help with...",
						required: true,
						class: "border p-2 rounded-md w-full bg-background text-foreground placeholder-muted-foreground"
					})
				]),

				// Description field
				new FormField({
					name: "description",
					label: "Description",
				}, [
					Textarea({
						placeholder: "Please include all information relevant to your issue.",
						required: true,
						class: "border p-2 rounded-md w-full bg-background text-foreground placeholder-muted-foreground"
					})
				])
			])
		])
	])
);`}),s({title:"Right Form Modal",preview:[Ce({label:"Form Modal",buttonStyle:"primary",size:"md",type:"right"})],code:`
import { Modal } from "@components/molecules/modals/modal.js";
import { Button } from "@components/atoms/buttons/buttons.js";
import { Icons } from "@components/icons/icons.js";
import { Fieldset } from "@components/atoms/form/fieldset.js";
import { Div } from "@base-framework/atoms";
import { Input, Textarea } from "@components/atoms/form/input.js";

/**
 * This will create a modal form.
 *
 * @returns {object}
 */
const ModalForm = ({
	type = 'right'
}) => (
	new Modal({
		title: 'Report an Issue',
		icon: Icons.warning,
		description: "What area are you having problems with?",
		size,
		type,
		onSubmit: () => console.log('Form submitted')
	}, [
		Div({ class: 'flex flex-col max-w-lg p-4 space-y-8' }, [
			Fieldset({ legend: 'Issue Details' }, [
				// Row for Area and Security Level
				Div({ class: "flex flex-auto w-full gap-4" }, [
					// Area field
					new FormField({ name: "area", label: "Area" }, [
						Select({
							required: true,
							class: "border p-2 rounded-md w-full bg-background text-foreground",
							options: [
								{ value: "billing", label: "Billing" },
								{ value: "technical", label: "Technical" },
								{ value: "account", label: "Account" },
								{ value: "other", label: "Other" }
							],
							defaultValue: "billing",
							change: (e) => console.log(\`Area selected: \${e.target.value}\`)
						})
					]),

					// Security Level field
					new FormField({ name: "security_level", label: "Security Level" }, [
						Select({
							required: true,
							class: "border p-2 rounded-md w-full bg-background text-foreground",
							options: [
								{ value: "severity_1", label: "Severity 1" },
								{ value: "severity_2", label: "Severity 2" },
								{ value: "severity_3", label: "Severity 3" }
							],
							defaultValue: "severity_2",
							change: (e) => console.log(\`Security Level selected: \${e.target.value}\`)
						})
					])
				]),

				// Subject field
				new FormField({
					name: "subject",
					label: "Subject",
				}, [
					Input({
						type: "text",
						placeholder: "I need help with...",
						required: true,
						class: "border p-2 rounded-md w-full bg-background text-foreground placeholder-muted-foreground"
					})
				]),

				// Description field
				new FormField({
					name: "description",
					label: "Description",
				}, [
					Textarea({
						placeholder: "Please include all information relevant to your issue.",
						required: true,
						class: "border p-2 rounded-md w-full bg-background text-foreground placeholder-muted-foreground"
					})
				])
			])
		])
	])
);`})]),ha=()=>g({title:"Navigations",description:"Navigations are components that help users move around the website or application."},[s({title:"Navigation Menu",description:"The navigation menu component is a simple navigation component that will create a horizontal menu.",preview:[o({class:"flex flex-auto flex-col w-full"},[new Ct({options:[{label:"Examples",href:"docs/components/navigations/examples"},{label:"Mail",href:"docs/components/navigations/mail"},{label:"Dashboard",href:"docs/components/navigations/dashboard"},{label:"Tasks",href:"docs/components/navigations/tasks"},{label:"Playground",href:"docs/components/navigations/playground"},{label:"Forms",href:"docs/components/navigations/forms"},{label:"Music",href:"docs/components/navigations/music"},{label:"Authentication",href:"docs/components/navigations/authentication"}]})])],code:`import { Button } from '@components/organisms/navigation/inline-navigation.js';
import { Icons } from "@components/icons/icons.js";

new NavigationMenu({
    options: [
        { label: 'Examples', href: '/examples' },
        { label: 'Mail', href: '/mail' },
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Tasks', href: '/tasks' },
        { label: 'Playground', href: '/playground' },
        { label: 'Forms', href: '/forms' },
        { label: 'Music', href: '/music' },
        { label: 'Authentication', href: '/authentication' }
    ]
})`}),s({title:"Inline Navigation",description:"The inline navigation component is a simple navigation component that can be used in a sidebar or app shell.",preview:[o({class:"flex flex-auto flex-col w-full border rounded-md max-w-[300px]"},[new Dt({options:[{label:"Listen Now",href:"docs/components/navigations",icon:r.playing,exact:!0},{label:"Browse",href:"docs/components/navigations/browse",icon:r.square.grid},{label:"Radio",href:"docs/components/navigations/radio",icon:r.signal},{label:"Playlists",icon:r.list.down,options:[{label:"Recently Added",href:"docs/components/navigations/recently-added"},{label:"Recently Played",href:"docs/components/navigations/recently-played"},{label:"Top Songs",href:"docs/components/navigations/top-songs"},{label:"Top Albums",href:"docs/components/navigations/top-albums"}]},{group:"Frameworks",options:[{label:"Next.js",href:"docs/components/navigations/next"},{label:"SvelteKit",href:"docs/components/navigations/sveltekit"},{label:"Nuxt.js",href:"docs/components/navigations/nuxt"},{label:"Remix",href:"docs/components/navigations/remix"},{label:"Astro",href:"docs/components/navigations/astro"}]}]})])],code:`import { Button } from '@components/organisms/navigation/inline-navigation.js';
import { Icons } from "@components/icons/icons.js";

new InlineNavigation({
    options: [
        { label: 'Home', href: '/', icon: Icons.home },
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' },
        {
            label: 'Services',
            options: [
                { label: 'Web Development', href: '/web-development' },
            ]
        },
        {
            group: 'Frameworks',
            options: [
                { label: 'Next.js', href: '/next' },
                { label: 'SvelteKit', href: '/sveltekit' },
                { label: 'Nuxt.js', href: '/nuxt' },
                { label: 'Remix', href: '/remix' },
                { label: 'Astro', href: '/astro' }
            ]
        }
    ]
})`}),s({title:"Sidebar Menu",description:"The sidebar menu component is a navigation component that can be used in a sidebar or app shell.",preview:[o({class:"flex flex-auto flex-col w-full border rounded-md max-w-[300px]"},[It({title:"Discover",options:[{label:"Listen Now",href:"docs/components/navigations",icon:r.playing,exact:!0},{label:"Browse",href:"docs/components/navigations/browse",icon:r.square.grid},{label:"Radio",href:"docs/components/navigations/radio",icon:r.signal},{group:"Library",options:[{label:"Playlists",href:"docs/components/navigations/playlists",icon:r.list.down},{label:"Songs",href:"docs/components/navigations/songs",icon:r.music},{label:"Made for You",href:"docs/components/navigations/made-for-you",icon:r.user.default},{label:"Artists",href:"docs/components/navigations/artists",icon:r.speaker.default},{label:"Albums",href:"docs/components/navigations/albums",icon:r.square.stack}]}]})])],code:`import { Icons } from "@components/icons/icons.js";
import { SidebarMenu } from "@components/organisms/navigation/sidebar-menu/sidebar-menu.js";

const PAGE_URL = 'music';

SidebarMenu({
    title: 'Discover',
    options: [
        { label: 'Listen Now', href: \`\${PAGE_URL}\`, icon: Icons.playing, exact: true },
        { label: 'Browse', href: \`\${PAGE_URL}/browse\`, icon: Icons.square.grid },
        { label: 'Radio', href: \`\${PAGE_URL}/radio\`, icon: Icons.signal },
        {
            group: 'Library',
            options: [
                { label: 'Playlists', href: \`\${PAGE_URL}/playlists\`, icon: Icons.list.down },
                { label: 'Songs', href: \`\${PAGE_URL}/songs\`, icon: Icons.music },
                { label: 'Made for You', href: \`\${PAGE_URL}/made-for-you\`, icon: Icons.user.default },
                { label: 'Artists', href: \`\${PAGE_URL}/artists\`, icon: Icons.speaker.default },
                { label: 'Albums', href: \`\${PAGE_URL}/albums\`, icon: Icons.square.stack }
            ]
        }
    ]
})
`})]),ba=()=>g({title:"Notifications",description:"Displays a notification message to the user."},[s({title:"Default Notification",description:"This is a standard notification without any specific type.",preview:[new H({title:"Default Notification",description:"This is a default notification.",icon:r.information,duration:"infinite"})],code:`app.notify({
    title: 'Default Notification',
    description: 'This is a default notification.',
    icon: Icons.info,
    duration: 'infinite'
})`}),m({class:"text-muted-foreground"},'The notification can either be a link with an "href" attribute or a button with an "onClick" event.'),s({title:"Info Notification",description:"An informational notification to inform users about general information.",preview:[new H({title:"Heads up!",description:"You can add components to your app using the CLI.",icon:r.information,type:"info",duration:"infinite"})],code:`app.notify({
    title: 'Heads up!',
    description: 'You can add components to your app using the CLI.',
    icon: Icons.information,
    type: 'info',
    duration: 'infinite'
})`}),s({title:"Warning Notification",description:"A warning notification to caution the user about potential issues.",preview:[new H({title:"Warning!",description:"Please check your input before proceeding.",icon:r.warning,type:"warning",duration:"infinite"})],code:`app.notify({
    title: 'Warning!',
    description: 'Please check your input before proceeding.',
    icon: Icons.warning,
    type: 'warning',
    duration: 5000
})`}),s({title:"Destructive Notification",description:"A destructive notification to alert the user of a serious issue or error.",preview:[new H({title:"Error!",description:"Something went wrong. Please try again later.",icon:r.shield,type:"destructive",duration:"infinite"})],code:`app.notify({
    title: 'Error!',
    description: 'Something went wrong. Please try again later.',
    icon: Icons.error,
    type: 'destructive',
    duration: 'infinite'
})`}),s({title:"Success Notification",description:"A success notification to confirm a successful action or process.",preview:[new H({title:"Success!",description:"The action was successful.",icon:r.check,type:"success",duration:"infinite"})],code:`app.notify({
    title: 'Success!',
    description: 'The action was successful.',
    icon: Icons.check,
    type: 'success',
    duration: 'infinite'
})`}),s({title:"Notification with Actions",description:"This notification includes primary and secondary buttons for user actions.",preview:[new H({title:"Action Required",description:"Would you like to proceed with this action?",icon:r.information,type:"info",primary:"Proceed",primaryAction:()=>console.log(1),secondary:"Cancel",secondaryAction:()=>console.log(1),duration:"infinite"})],code:`app.notify({
    title: 'Action Required',
    description: 'Would you like to proceed with this action?',
    icon: Icons.question,
    type: 'info',
    primary: 'Proceed',
    primaryAction: () => alert('Primary action clicked!'),
    secondary: 'Cancel',
    secondaryAction: () => alert('Secondary action clicked!'),
    duration: 'infinite' // Notification will remain until user dismisses
})`}),m({class:"text-muted-foreground"},"Notifications will stack if multiple are triggered at the same time. The notification will remain visible until the specified duration has passed. If a notification duration is set to 'infinite', it must be manually dismissed by the user."),s({title:"Usage",description:"Call 'notify' on the global notification container to display notifications.",preview:[c({click:()=>{app.notify({title:"Notification Title",description:"This is a notification.",icon:r.information})}},"Show Notification")],code:`app.notify({
    title: 'Notification Title',
    description: 'This is a notification.',
    icon: Icons.warning,
    type: 'warning',
    duration: 5000 // in milliseconds, leave blank for the default 4 seconds, or use 'infinite' to keep it until dismissed
})`})]),xa=e=>!e||isNaN(e)?null:e,De=(e,t)=>{const a=e,n=16,i=2*Math.PI*n,d=a/100*i,u=`
    <svg class="w-40 h-40 mx-auto" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
        <!-- Background Circle -->
        <circle
            cx="18"
            cy="18"
            r="${n}"
            fill="none"
            stroke="currentColor"
            stroke-width="4"
            class="bg-muted"
            stroke-opacity="0.2"
        />
        <!-- Progress Circle -->
        <circle
            cx="18"
            cy="18"
            r="${n}"
            fill="none"
            stroke="currentColor"
            stroke-width="4"
            class="stroke-primary"
            stroke-dasharray="${i}"
            stroke-dashoffset="${i-d}"
            stroke-linecap="round"
            class="${t}"
        />
        <!-- Percentage Text -->
        <text
            x="18"
            y="20"
            class="text-[0.25em] font-medium fill-primary"
            text-anchor="middle"
            dominant-baseline="middle">
            ${a}%
        </text>
    </svg>
    `;return o({class:"circle-graph text-inherit",html:u})},wa=b(e=>{const t=e.progress||0,a=e.class||"",n=De(t,a);return o({class:"circle-graph-wrap",onSet:[e.prop,i=>(i=xa(i),i?De(i,a):n)]},[n])}),va=()=>o({class:"absolute h-full rounded-full bg-primary transition-all duration-300",style:"width: [[progress]]%;"}),ya=xe({render(){return o({class:"relative w-full h-4 rounded-full bg-muted"},[va()])},state(){return{progress:this.progress??0}},reset(){this.state.progress=0},uploadProgress(e){if(e.lengthComputable){const a=Math.round(e.loaded*100/e.total);this.set(a)}},set(e){e<0&&(e=0),e>100&&(e=100),this.state.progress=e}}),ka=()=>g({title:"Progress Bars",description:"Progress bars are a great way to show the progress of a task or process."},[s({title:"Usage",description:"Import the progress bar atom and use it in your components. The progress bar can be used to show the progress of a task or process.",preview:[new ya({cache:"progress",progress:20})],code:`import { ProgressBar } from "@components/atoms/progress/progress-bar.js";

new ProgressBar({ cache: 'progress', progress: 20 })`}),s({title:"Circle Progress Bar",description:"The progress bar can also be displayed as a circle.",preview:[wa({cache:"progress",progress:50,class:"stroke-gray-300"})],code:`import { ProgressBar } from "@components/atoms/progress/progress-bar.js";

new ProgressBar({ cache: 'progress', progress: 20 })`})]),Ta=fe({state:{loaded:!1},render(){return o({class:"flex flex-auto flex-col max-w-[350px]"},[o({class:"my-8"},[c({variant:"outline",click:()=>this.state.toggle("loaded")},"Toggle Loaded")]),o({class:"flex items-center bg-card rounded-md border shadow-md w-full max-w-md"},[o({class:"flex flex-auto gap-4 p-4",onState:["loaded",e=>e?[C({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN",size:"md"}),o({class:"flex flex-auto flex-col"},[l({class:"text-lg font-semibold text-foreground"},"Leslie Alexander"),m({class:"text-sm text-muted-foreground m-0"},"leslie.alexander@example.com")])]:[B({shape:"circle",width:"w-12",height:"h-12"}),o({class:"flex flex-auto flex-col gap-2"},[B({width:"w-3/4",height:"h-6"}),B({width:"w-1/2",height:"h-4"})])]]})])])}}),Sa=()=>g({title:"Skeletons",description:"Skeletons are components that are used to show a placeholder for content that is loading."},[s({title:"Usage",description:"The skeleton component is used to show a placeholder for content that is loading.",preview:[o({class:"flex flex-auto space-x-4 w-full max-w-64"},[B({shape:"circle",width:"w-10",height:"h-10"}),o({class:"flex flex-auto flex-col space-y-2"},[B({width:"w-3/4",height:"h-4"}),B({width:"w-1/2",height:"h-4"})])])],code:`import { Skeleton } from "@components/atoms/skeleton.js";
import { Div } from '@base-framework/atoms';

Div({ class: 'flex flex-auto space-x-4 w-full max-w-64' }, [
    Skeleton({ shape: 'circle', width: 'w-10', height: 'h-10' }), // Circle skeleton for avatar
    Div({ class: 'flex flex-auto flex-col space-y-2' }, [
        Skeleton({ width: 'w-3/4', height: 'h-4' }), // Long rectangle for main text
        Skeleton({ width: 'w-1/2', height: 'h-4' })  // Shorter rectangle for subtext
    ])
])`}),s({title:"Skeleton Post",description:"This is a skeleton post.",preview:[o({class:"space-y-4 flex flex-auto flex-col w-full max-w-64"},[B({width:"w-full",height:"h-32",shape:"rectangle"}),o({class:"space-y-2"},[B({width:"w-3/4",height:"h-4"}),B({width:"w-1/2",height:"h-4"})])])],code:`import { Skeleton } from "@components/atoms/skeleton.js";
import { Div } from '@base-framework/atoms';

Div({ class: 'space-y-4 flex flex-auto flex-col space-x-4 w-full max-w-64' }, [
    // Large rectangle for image or main content
    Skeleton({ width: 'w-full', height: 'h-32', shape: 'rectangle' }),

    // Text line placeholders
    Div({ class: 'space-y-2' }, [
        Skeleton({ width: 'w-3/4', height: 'h-4' }), // Longer text line
        Skeleton({ width: 'w-1/2', height: 'h-4' })  // Shorter text line
    ])
])`}),s({title:"Skeleton with Avatar Loading",description:"This example demonstrates a skeleton loading animation that transitions to an avatar and user info after 3 seconds.",preview:[new Ta],code:`import { Skeleton } from "@components/atoms/skeleton.js";
import { Avatar } from "@components/molecules/avatars/avatar.js";
import { Jot } from "@base-framework/base";
import { Div, P, Span } from "@base-framework/atoms";
import { Button } from "@components/atoms/buttons/buttons.js";

/**
 * LoadingAvatar Component
 *
 * This component displays a skeleton as a placeholder
 * for an avatar and text while loading. After 3 seconds,
 * it switches to the actual avatar and text content.
 */
const LoadingAvatar = Jot(
{
    state: {
        loaded: false
    },

    render()
    {
        return Div({ class: 'flex flex-auto flex-col max-w-[350px]' }, [
            Div({ class: 'my-8' }, [
                Button({ variant: 'outline', click: () => this.state.toggle('loaded') }, 'Toggle Loaded')
            ]),
            Div({ class: 'flex items-center bg-card rounded-md border shadow-md w-full max-w-md' }, [
                Div({
                    class: 'flex flex-auto gap-4 p-4',
                    onState: ['loaded', (loaded) =>
                    {
                        return loaded
                        ? [
                            Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: 'md' }),
                            Div({ class: 'flex flex-auto flex-col' }, [
                                Span({ class: 'text-lg font-semibold text-foreground' }, 'Leslie Alexander'),
                                P({ class: 'text-sm text-muted-foreground m-0' }, 'leslie.alexander@example.com')
                            ])
                            ]
                        : [
                            Skeleton({ shape: 'circle', width: 'w-12', height: 'h-12' }), // Skeleton avatar
                            Div({ class: 'flex flex-auto flex-col gap-2' }, [
                                Skeleton({ width: 'w-3/4', height: 'h-6' }), // Skeleton for name
                                Skeleton({ width: 'w-1/2', height: 'h-4' })  // Skeleton for email
                            ])
                        ];
                    }
                ]})
            ])
        ]);
    }
});

LoadingAvatar();`})]);class Ca extends K{render(){return o({class:"tab-panel"},[new $e({class:this.class,options:this.options}),D({class:"tab-content",switch:this.addGroup()})])}addGroup(){let t;const a=[],n=this.options;for(let i=0,d=n.length;i<d;i++)t=n[i],a.push({uri:t.uri||t.href,component:t.component,title:t.title||null,persist:!0});return a}}const Ie=b((e,t)=>o({class:"py-4"},t)),Da=()=>g({title:"Tabs",description:"Displays a tab or a component that looks like a tab."},[s({title:"Button Tab",description:"This is a button tab. The buttons to not route.",preview:[new Ne({class:"mt-4 max-w-[400px]",options:[{label:"Preview",value:"preview",layout:Ie([])},{label:"Code",value:"code",layout:Ie([])}]})],code:`
import { ButtonTab } from "@components/organisms/tabs/button-tab.js";

/**
 * This will create a tab content.
 *
 * @param {object} props
 * @param {object} children
 * @returns {object}
 */
const TabContent = Atom((props, children) => (
    Div({ class: 'py-4' }, children)
));

/**
 * This will create a preview tab.
 *
 * @param {object} props
 * @returns {object}
 */
export const PreviewTab = (props) => (
    new ButtonTab({
        class: 'mt-4 max-w-[400px]',
        options: [
            {
                label: 'Preview',
                value: 'preview',
                layout: TabContent([

                ])
            },
            {
                label: 'Code',
                value: 'code',
                layout: TabContent([

                ])
            }
        ]
    })
);`}),s({title:"Link Tab",description:"This is a link tab. The buttons route to a different page.",preview:[new Ca({class:"max-w-[400px]",options:[{label:"Example 1",href:"docs/components/tabs/example-1",component:new z({class:"p-8"},"This is an example 1 tab panel.")},{label:"Example 2",href:"docs/components/tabs/example-2",component:new z({class:"p-8"},"This is an example 2 tab panel.")},{label:"Example 3",href:"docs/components/tabs/example-3",component:new z({class:"p-8"},"This is an example 3 tab panel.")}]})],code:`
import { LinkTab } from "@components/organisms/tabs/link-tab.js";
import { Panel } from "@components/organisms/panel.js";

/**
 * ExampleTab
 *
 * This will create an example tab.
 *
 * @returns {object}
 */
export const ExampleTab = () => (
	new Tab({
        class: 'max-w-[400px]',
        options: [
            {
                label: 'Example 1',
                href: 'docs/components/tabs/example-1',
                component: new Panel({ class: 'p-8' }, 'This is an example 1 tab panel.')
            },
            {
                label: 'Example 2',
                href: 'docs/components/tabs/example-2',
                component: new Panel({ class: 'p-8' }, 'This is an example 2 tab panel.')
            },
            {
                label: 'Example 3',
                href: 'docs/components/tabs/example-3',
                component: new Panel({ class: 'p-8' }, 'This is an example 3 tab panel.')
            }
        ]
    })
);`}),s({title:"Tab Group",description:"This is a tab group. The buttons update the state.",preview:[new jt({options:[{label:"Music",value:"music"},{label:"Podcasts",value:"podcasts"},{label:"Live",value:"live"}],onSelect:e=>console.log(e)})],code:`import { TabGroup } from "@components/organisms/tabs/tab-group.js";

new TabGroup({
    options: [
        { label: 'Music', value: 'music' },
        { label: 'Podcasts', value: 'podcasts' },
        { label: 'Live', value: 'live' }
    ],
    onSelect: (value) => console.log(value)
})`}),s({title:"Tab Navigation",description:"This is a tab navigation. The buttons update the state.",preview:[new $e({options:[{label:"Example 1",href:"docs/components/tabs/example-1"},{label:"Example 2",href:"docs/components/tabs/example-2"},{label:"Example 3",href:"docs/components/tabs/example-3"}]})],code:`import { TabGroup } from "@components/organisms/tabs/tab-navigation.js";

new TabNavigation({
    options: [
        {
            label: 'Example 1',
            href: 'docs/components/tabs/example-1'
        },
        {
            label: 'Example 2',
            href: 'docs/components/tabs/example-2'
        },
        {
            label: 'Example 3',
            href: 'docs/components/tabs/example-3'
        }
    ]
})`})]),Ia=()=>g({title:"Tooltips",description:"Tooltips are small popups that appear when a user hovers over an element."},[s({title:"Usage",description:"Import the tooltip atom and use it in your components.",preview:[o({class:"flex gap-2 flex-wrap"},[M({content:"This is a tooltip."},[c("Hover me")])])],code:`import { Button } from "@components/atoms/buttons/buttons.js";
import { Tooltip } from "@components/atoms/tooltip.js";

Tooltip({ content: 'This is a tooltip.' }, [
    Button('Hover me')
])`}),s({title:"Bottom Tooltip",description:"This will show the tooltip at the bottom of the target element.",preview:[o({class:"flex gap-2 flex-wrap"},[M({content:"This is a tooltip.",position:"bottom"},[c("Hover me")])])],code:`Tooltip({ content: 'This is a tooltip.', position: 'bottom' }, [
    Button('Hover me')
])`}),s({title:"Top-Right Tooltip",description:"This will show the tooltip at the top-right of the target element.",preview:[o({class:"flex gap-2 flex-wrap"},[M({content:"This is a tooltip.",position:"top-right"},[c("Hover me")])])],code:`Tooltip({ content: 'This is a tooltip.', position: 'top-right' }, [
    Button('Hover me')
])`}),s({title:"Top-Left Tooltip",description:"This will show the tooltip at the top-left of the target element.",preview:[o({class:"flex gap-2 flex-wrap"},[M({content:"This is a tooltip.",position:"top-left"},[c("Hover me")])])],code:`Tooltip({ content: 'This is a tooltip.', position: 'top-left' }, [
    Button('Hover me')
])`}),s({title:"Bottom-Right Tooltip",description:"This will show the tooltip at the bottom-right of the target element.",preview:[o({class:"flex gap-2 flex-wrap"},[M({content:"This is a tooltip.",position:"bottom-right"},[c("Hover me")])])],code:`Tooltip({ content: 'This is a tooltip.', position: 'bottom-right' }, [
    Button('Hover me')
])`}),s({title:"Bottom-Left Tooltip",description:"This will show the tooltip at the bottom-left of the target element.",preview:[o({class:"flex gap-2 flex-wrap"},[M({content:"This is a tooltip.",position:"bottom-left"},[c("Hover me")])])],code:`Tooltip({ content: 'This is a tooltip.', position: 'bottom-left' }, [
    Button('Hover me')
])`}),s({title:"Left Tooltip",description:"This will show the tooltip to the left of the target element.",preview:[o({class:"flex gap-2 flex-wrap"},[M({content:"This is a tooltip.",position:"left"},[c("Hover me")])])],code:`Tooltip({ content: 'This is a tooltip.', position: 'left' }, [
    Button('Hover me')
])`}),s({title:"Right Tooltip",description:"This will show the tooltip to the right of the target element.",preview:[o({class:"flex gap-2 flex-wrap"},[M({content:"This is a tooltip.",position:"right"},[c("Hover me")])])],code:`Tooltip({ content: 'This is a tooltip.', position: 'right' }, [
    Button('Hover me')
])`}),m({class:"text-muted-foreground text-sm mt-4"},"The tooltip position can be set to: top, top-right, top-left, bottom, bottom-right, bottom-left, left, right.")]),je=(e,t,a)=>(a="Icons"+(a?"."+a:""),o({class:"flex flex-auto flex-col items-center gap-2 w-full max-w-[150px] h-[8.5rem] cursor-pointer"},[o({class:"flex flex-auto w-full h-full justify-center items-center flex-wrap rounded-lg border bg-card text-base shadow-sm hover:bg-muted/50",click:()=>{navigator.clipboard.writeText(`${a}.${t}`),app.notify({title:"Icon copied",description:`The icon '${a}.${t}' has been copied to your clipboard.`,icon:r.clipboard.checked})}},[w(e)]),o({class:"text-muted-foreground"},t)])),Ye=(e,t,a)=>{const n=typeof e=="object";n&&t.push(m({class:"text-muted-foreground"},"path: "+a+".{icon}"));const i=[];if(t.push(o({class:"flex flex-auto flex-wrap gap-2 my-8"},i)),n===!1)i.push(je(e,a));else for(var d in e){if(e.hasOwnProperty(d)===!1)continue;const u=e[d];if(typeof u!="object"){i.push(je(u,d,a));continue}const T=`${a}.${d}`;Ye(u,t,T)}},ja=e=>{if(!e||typeof e!="object")return;const t=[];for(let[a,n]of Object.entries(e)){if(a==="parse")continue;t.push(ce({id:a.toLowerCase(),class:"text-2xl font-bold"},At.titleCase(a))),Ye(n,t,a)}return t},Aa=()=>g({title:"Icons",description:"The icons are from the Hericon library. They are SVG icons that can be used in your project. This icon set uses the outline style."},[A({href:"https://heroicons.com/",target:"_blank",class:"bttn link"},"link: Hericons"),s({title:"Icons",description:"This is an icon.",preview:[U({html:r.home})],code:`
import { Icons } from '@components/icons/icons.js';
import { I } from '@base-framework/atoms';

export const HomeIcon = () => (
    I({ html: Icons.home} )
);`}),s({title:"Icon Atom",description:"An Icon is a helper atom that makes it easier to use icons in your project. ",preview:[w(r.home)],code:`
import { Icon } from '@components/atoms/icon.js';

Icon(Icons.home);`}),s({title:"Icon Sizes",description:"Icons can be rendered in various sizes using the `class` property to apply Tailwind CSS classes. The following sizes are available: `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, and `3xl`.",preview:[o({class:"flex flex-wrap gap-4 items-center"},[o({class:"flex flex-col items-center justify-center"},[w({size:"xs"},r.home),l({class:"text-sm text-muted-foreground"},"xs")]),o({class:"flex flex-col items-center justify-center"},[w({size:"sm"},r.home),l({class:"text-sm text-muted-foreground"},"sm")]),o({class:"flex flex-col items-center justify-center"},[w({size:"md"},r.home),l({class:"text-sm text-muted-foreground"},"md")]),o({class:"flex flex-col items-center justify-center"},[w({size:"lg"},r.home),l({class:"text-sm text-muted-foreground"},"lg")]),o({class:"flex flex-col items-center justify-center"},[w({size:"xl"},r.home),l({class:"text-sm text-muted-foreground"},"xl")]),o({class:"flex flex-col items-center justify-center"},[w({size:"2xl"},r.home),l({class:"text-sm text-muted-foreground"},"2xl")]),o({class:"flex flex-col items-center justify-center"},[w({size:"3xl"},r.home),l({class:"text-sm text-muted-foreground"},"3xl")])])],code:`
import { Icon } from '@components/atoms/icon.js';

Icon({ size: 'xs' }, Icons.home),
Span('Extra Small (4x4)'),
Icon({ size: 'sm' }, Icons.home),
Span('Small (6x6)'),
Icon({ size: 'md' }, Icons.home),
Span('Medium (8x8)'),
Icon({ size: 'lg' }, Icons.home),
Span('Large (10x10)'),
Icon({ size: 'xl' }, Icons.home),
Span('Extra Large (12x12)'),
Icon({ size: '2xl' }, Icons.home),
Span('2X Large (14x14)'),
Icon({ size: '3xl' }, Icons.home),
Span('3X Large (16x16)')`}),o({class:"my-20"},[ue({class:"text-2xl font-bold"},"Default Icons"),m({class:"text-muted-foreground"},'A few of the icons have been saved to the "Icons" object. You can use these icons in your project. Click to copy the Icon path. Here is a list of the icons that are available:')]),ja(r)]),Ba=()=>g({title:"Introduction",description:"The App Shell is a versatile and modular framework, designed to speed up front-end application development using Tailwind CSS and Shadcn-inspired themes. It provides a comprehensive set of components and atoms, created with the Base framework."},[D({class:"space-y-4"},[k({class:"text-lg font-bold"},"The App Shell"),m({class:"text-muted-foreground"},[l("The App Shell project is built to streamline front-end application development. As a modular and scalable PWA (Progressive Web App), it offers easy installation across devices, making it suitable as a foundational framework for new projects.")]),m({class:"text-muted-foreground"},[l("Designed with accessibility, customization, and ease of use in mind, the App Shell accelerates setup, allowing developers to focus on creating functionality without reinventing the wheel.")])]),o({class:"items-start justify-center gap-6 rounded-lg pt-0 md:p-8 md:mt-6 md:grid lg:grid-cols-2 xl:grid-cols-2"},[o({class:"col-span-2 grid items-start gap-6 lg:col-span-1"},[He(),ze(),Re()]),o({class:"col-span-2 grid items-start gap-6 lg:col-span-1"},[Ue({members:[{name:"Leslie Alexander",email:"leslie.alexander@example.com",image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"owner",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Michael Foster",email:"michael.foster@example.com",image:"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"member",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Dries Vincent",email:"dries.vincent@example.com",image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"owner",status:"online"}]}),Oe({link:"http://example.com/link/to/document",people:[{name:"Leslie Alexander",email:"leslie.alexander@example.com",image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"owner",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Michael Foster",email:"michael.foster@example.com",image:"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"member",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Dries Vincent",email:"dries.vincent@example.com",image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"owner",status:"online"}]}),We({startDate:"2023-01-23"}),qe()])]),D({class:"space-y-4 mt-12"},[k({class:"text-lg font-bold"},"Theme and Styling"),m({class:"text-muted-foreground"},[l("This project is powered by Tailwind CSS, providing a highly customizable, utility-first approach to styling. Additionally, the theme draws inspiration from "),A({href:"https://github.com/shadcn",class:"underline",target:"_blank"},"Shadcn’s UI component library"),l(", combining best practices for consistency and flexibility.")])]),D({class:"space-y-4 mt-12"},[k({class:"text-lg font-bold"},"Icons"),m({class:"text-muted-foreground"},[l("This project utilizes Heroicons, a comprehensive icon set provided by the Tailwind Labs team. These icons are fully customizable and designed to fit seamlessly within Tailwind-based applications.")]),m({class:"text-muted-foreground"},[l("For more details on available icons, visit the "),A({href:"https://heroicons.com",class:"underline",target:"_blank"},"Heroicons website"),l(".")])]),D({class:"space-y-4 mt-12"},[k({class:"text-lg font-bold"},"Components and Atoms"),m({class:"text-muted-foreground"},[l("Leveraging the Base framework, this project provides a comprehensive set of reusable components and atoms. Inspired by projects like "),A({href:"https://github.com/shadcn/ui",class:"underline",target:"_blank"},"shadcn/ui"),l(", the components are crafted to balance flexibility and simplicity, allowing developers to integrate pre-designed elements or customize them as needed.")]),m({class:"text-muted-foreground"},[l("You can explore components like "),A({href:"/docs/components/buttons",class:"underline"},"Buttons"),l(", "),A({href:"/docs/components/tabs",class:"underline"},"Tabs"),l(", and "),A({href:"/docs/components/forms",class:"underline"},"Forms"),l(" to quickly build complex UIs without starting from scratch.")])]),D({class:"space-y-4 mt-12"},[k({class:"text-lg font-bold"},"Development Guidelines"),m({class:"text-muted-foreground"},[l("Modules are an essential part of the App Shell's extensibility. You can add new features by creating modules in the modules folder and registering them in the "),A({href:"/docs/imported-modules",class:"underline"},"imported-modules.js"),l(" file. This structure supports modularity, making it easier to maintain and scale projects.")]),m({class:"text-muted-foreground"},[l("Each module includes its own routes, links, and options, as demonstrated in the example provided. This architecture ensures that modules are self-contained and can be easily integrated into any project using the App Shell framework.")]),Ee(`import { Icons } from '@components/icons/icons.js';
import { Module } from '../module/module.js';

/**
 * This will set the routes for the module.
 */
const routes = Module.convertRoutes(
[
    {
        path: '/docs/:page?/:sub?*',
        import: import('./components/pages/documentation/documentation-page.js'),
        title: 'Docs'
    }
]);

/**
 * This will create our module and add it to the app
 * modules.
 */
Module.create(
{
    /**
     * @param {array} routes
     */
    routes,

    /**
     * This will get the options to create the app
     * navigation.
     *
     * @param {array} links
     */
    links: [
        {
            group: 'Discover',
            options: [
                { label: 'Docs', href: 'docs', icon: Icons.document.text, mobileOrder: 5 }
            ]
        }
    ]
});`)]),D({class:"space-y-4 mt-12"},[k({class:"text-lg font-bold"},"Contributors and Community"),m({class:"text-muted-foreground"},[l("The App Shell is an open-source project, and contributions from the community are welcome. The project is maintained by a dedicated developer who aims to continuously enhance its functionality.")]),m({class:"text-muted-foreground"},[l("For information on contributing, check the "),A({href:"https://github.com/chrisdurfee/next-app-shell",class:"underline",target:"_blank"},"GitHub repository"),l(" and join the community discussions to collaborate and innovate.")])])]),Pa=e=>o({class:"flex flex-auto flex-col items-center gap-2 max-w-[150px] h-[8.5rem] cursor-pointer"},[o({class:`flex flex-auto w-full h-full min-h-[136px] justify-center items-center flex-wrap rounded-lg border text-base shadow-sm ${e.class}`,click:()=>{navigator.clipboard.writeText(`${e.class}`),app.notify({title:"Color copied",description:`The color '${e.class}' has been copied to your clipboard.`,icon:r.clipboard.checked})}}),o({class:"text-sm text-muted-foreground"},e.var)]),y=(e,t)=>D({class:"flex flex-auto flex-col gap-2"},[m({class:"text-base text-muted-foreground"},e),o({class:"flex flex-auto flex-wrap gap-2 my-2",map:[t,Pa]})]),Fa=e=>o({class:"flex flex-auto flex-col gap-12"},[ce({class:"text-2xl font-bold"},"Theme Toggle"),new Bt,ce({class:"text-2xl font-bold"},"Color Guide"),y("Default background color of <body />...etc",[{var:"--backround",class:"bg-backround"},{var:"--foreground",class:"bg-foreground"}]),y("Muted backgrounds such as <TabsList />, <Skeleton /> and <Switch />",[{var:"--muted",class:"bg-muted"},{var:"--muted-foreground",class:"bg-muted-forground"}]),y("Background color for <Card />",[{var:"--card",class:"bg-card"},{var:"--card-foreground",class:"bg-card-foreground"}]),y("Background color for popovers such as <DropdownMenu />, <HoverCard />, <Popover />",[{var:"--popover",class:"bg-popover"},{var:"--popover-foreground",class:"bg-popover-foreground"}]),y("Default border color",[{var:"--border",class:"bg-border"}]),y("Border color for inputs such as <Input />, <Select />, <Textarea />",[{var:"--input",class:"bg-input"}]),y("Primary colors for <Button />",[{var:"--primary",class:"bg-primary"},{var:"--primary-foreground",class:"bg-primary-foreground"}]),y("Secondary colors for <Button />",[{var:"--secondary",class:"bg-secondary"},{var:"--secondary-foreground",class:"bg-secondary-foreground"}]),y("Used for accents such as hover effects on <DropdownMenuItem>, <SelectItem>...etc",[{var:"--accent",class:"bg-accent"},{var:"--accent-foreground",class:"bg-accent-foreground"}]),y('Used for destructive actions such as <Button variant="destructive">',[{var:"--destructive",class:"bg-destructive"},{var:"--destructive-foreground",class:"bg-destructive-foreground"}]),y('Used for warning actions such as <Button variant="warning">',[{var:"--warning",class:"bg-warning"},{var:"--warning-foreground",class:"bg-warning-foreground"}]),y("Used for focus ring",[{var:"--ring",class:"bg-ring"}]),y("Border radius for card, input and buttons",[{var:"--radius",class:"bg-radius"}])]),Ma=()=>g({title:"Theme",description:"The theme is using Tailwind CSS and is based on Shadcn UI. The theme is customizable and can be extended. It comes with light and dark theme support."},[m({class:"text-muted-foreground"},{html:'To learn about Shandcn UI, visit the official documentation: <a href="https://ui.shadcn.com/docs/theming" class="underline" target="_blank">Shadcn Documentation'}),o({class:"my-20"},[ue({class:"text-2xl font-bold"},"Default Styles"),m({class:"text-muted-foreground"},"The default styles are defined in the Tailwind CSS configuration file and in the base CSS file. Here's the list of variables available for customization:")]),Fa(),o({class:"flex flex-auto flex-col gap-2 mt-20"},[o({class:"flex flex-auto flex-col gap-2"},[k({class:"text-2xl font-bold"},"Text Sizes"),m({class:"text-muted-foreground text-3xl"},"Text-3xl A test sentence."),m({class:"text-muted-foreground text-2xl"},"Text-2xl A test sentence."),m({class:"text-muted-foreground text-xl"},"Text-xl A test sentence."),m({class:"text-muted-foreground text-lg"},"Text-lg A test sentence."),m({class:"text-muted-foreground text-base"},"Text-base A test sentence."),m({class:"text-muted-foreground text-sm"},"Text-sm A test sentence."),m({class:"text-muted-foreground text-xs"},"Text-xs A test sentence.")])])]),f=(e,t,a)=>({uri:e,title:t,component:a()}),La=e=>[f(`${e}`,"Introduction",Ba),f(`${e}/theme`,"Theme",Ma),f(`${e}/icons`,"Icons",Aa),f(`${e}/components/buttons*`,"Buttons",Qt),f(`${e}/components/badges*`,"Badges",Vt),f(`${e}/components/tabs*`,"Tabs",Da),f(`${e}/components/modals*`,"Modals",ga),f(`${e}/components/notifications*`,"Notifications",ba),f(`${e}/components/dialogs*`,"Modals",Oo),f(`${e}/components/cards*`,"Cards",Do),f(`${e}/components/calendars*`,"Calendars",lo),f(`${e}/components/avatars*`,"Avatars",Ut),f(`${e}/components/inputs*`,"Inputs",ma),f(`${e}/components/forms*`,"Forms",sa),f(`${e}/components/alerts*`,"Alerts",Ot),f(`${e}/components/comboboxes*`,"Comboboxes",Fo),f(`${e}/components/lists*`,"Lists",pa),f(`${e}/components/data-tables*`,"Data Tables",Eo),f(`${e}/components/breadcrumbs*`,"Breadcrumbs",Jt),f(`${e}/components/navigations*`,"Navigations",ha),f(`${e}/components/progress-bars*`,"Progress Bars",ka),f(`${e}/components/skeletons*`,"Skeletons",Sa),f(`${e}/components/tooltips*`,"Tooltips",Ia),f(`${e}/components/dropdown-menus*`,"Dropdown Menus",Zo)],$a=e=>[{href:`${e}`,label:"Introduction",exact:!0},{href:`${e}/theme`,label:"Theme",exact:!0},{href:`${e}/icons`,label:"Icons"},{group:"Components",options:[{label:"Buttons",href:`${e}/components/buttons`},{label:"Badges",href:`${e}/components/badges`},{label:"Tabs",href:`${e}/components/tabs`},{label:"Modals",href:`${e}/components/modals`},{label:"Notifications",href:`${e}/components/notifications`},{label:"Dialogs",href:`${e}/components/dialogs`},{label:"Cards",href:`${e}/components/cards`},{label:"Calendars",href:`${e}/components/calendars`},{label:"Avatars",href:`${e}/components/avatars`},{label:"Inputs",href:`${e}/components/inputs`},{label:"Forms",href:`${e}/components/forms`},{label:"Alerts",href:`${e}/components/alerts`},{label:"Comboboxes",href:`${e}/components/comboboxes`},{label:"Lists",href:`${e}/components/lists`},{label:"Data Tables",href:`${e}/components/data-tables`},{label:"Breadcrumbs",href:`${e}/components/breadcrumbs`},{label:"Navigations",href:`${e}/components/navigations`},{label:"Progress Bars",href:`${e}/components/progress-bars`},{label:"Skeletons",href:`${e}/components/skeletons`},{label:"Tooltips",href:`${e}/components/tooltips`},{label:"Dropdown Menus",href:`${e}/components/dropdown-menus`}]}],Na=()=>new Pt({backHref:"aside/"},[new z([o([O([Ae("Overlay")]),o({class:"contained"},[Qe()])])])]),Ea=e=>[{uri:`${e}/overlay-test`,component:Na()}],Q="docs",qa=()=>new Ke({title:"Documentation",basePath:Q,routes:Ea(Q),switch:La(Q),links:$a(Q)});export{qa as DocumentationPage,qa as default};
