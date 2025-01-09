import{Z as b,M as je,N as Le,o as s,Y as o,q as pe,u as p,l as R,s as ae,G as i,w as Fe,e as fe,y as L,m as k,A as c,z as r,B as $e,C as Ee,E as w,H as Re,I as Ne,r as l,a as he,O as He,P as ze,Q as Ue,R as Oe,U as qe,W as We,X as D,$ as x,a0 as P,f as m,a1 as Z,a2 as W,a3 as se,_ as ge,a4 as Ge,c as C,a5 as T,a6 as E,a7 as be,a8 as _e,h as we,a9 as Ye,i as X,aa as Je,ab as J,j as B,k as G,ac as xe,ad as ie,ae as ve,K as $,af as Ve,ag as Ke,L as N,ah as ee,ai as te,aj as ye,ak as Qe,al as Ze,am as V,an as Xe,ao as et,ap as tt,aq as ot,ar as at,as as st,at as it,au as rt,av as lt,aw as nt,ax as ct,T as mt,ay as dt,n as ut,az as pt,aA as ft,x as _,aB as ht,aC as re,aD as F,aE as gt,aF as bt,F as wt,aG as j,aH as xt,aI as vt,V as I,aJ as yt,b as kt,p as Tt,D as A,J as S,aK as St,aL as oe,v as It,aM as Ct,aN as Dt,aO as At}from"./index-D9uOjdkx.js";const v=b((e,a)=>je({class:"flex p-4 min-h-[350px] max-h-[650px] overflow-x-auto rounded-lg border bg-muted whitespace-break-spaces break-all cursor-pointer"},[Le({class:"font-mono flex-auto text-sm text-wrap",click:()=>{navigator.clipboard.writeText(a[0].textContent),app.notify({title:"Code copied",description:"The code has been copied to your clipboard.",icon:s.clipboard.checked})}},a)])),Bt=b((e,a)=>o({class:"flex flex-auto p-4 min-h-[350px] max-h-[650px] overflow-x-auto max-w-[90vw] rounded-lg border bg-card"},[o({class:"preview flex flex-auto justify-center items-center"},a)])),le=b((e,a)=>o({class:"py-4"},a)),Pt=e=>new pe({class:"mt-4 max-w-[400px]",options:[{label:"Preview",value:"preview",layout:le([Bt(e.preview)])},{label:"Code",value:"code",layout:le([v(e.code)])}]}),Mt=b(({title:e,description:a})=>R({class:"flex flex-col"},[ae({class:"scroll-m-20 text-2xl font-bold tracking-tight"},e),a&&i({class:"text-base text-muted-foreground py-2 max-w-[700px]"},a)])),t=b((e,a)=>p({class:"grid py-4"},[Mt({title:e.title,description:e.description}),Pt({preview:e.preview,code:e.code})])),jt=b(({title:e,description:a})=>R({class:"flex flex-col"},[fe({class:"scroll-m-20 text-3xl font-bold tracking-tight"},e),i({class:"text-base text-muted-foreground py-2 max-w-[700px]"},a)])),Lt=b((e,a)=>o({class:"contained py-8"},[jt(e),p({class:"pb-12 pt-8"},a)])),f=b((e,a)=>new Fe([Lt(e,a)])),Ft=()=>f({title:"Alerts",description:"Alerts are used to provide feedback to the user about the outcome of an action or to inform them of important information."},[t({title:"Default Alert",description:"This is a standard alert without any specific type.",preview:[L({title:"Notice",description:"This is a default alert without a specific type.",icon:s.information})],code:`import {  Alert  } from "@base-framework/ui/molecules";
import {  Icons  } from "@base-framework/ui/icons";

Alert({
    title: 'Notice',
    description: 'This is a default alert without a specific type.',
    icon: Icons.information
})`}),t({title:"Info Alert",description:"An info alert that provides general information to the user.",preview:[L({title:"Heads up!",description:"You can add components to your app using the CLI.",icon:s.information,type:"info"})],code:`Alert({
    title: 'Heads up!',
    description: 'You can add components to your app using the CLI.',
    icon: Icons.information,
    type: 'info'
})`}),t({title:"Success Alert",description:"A success alert to inform the user of a successful action.",preview:[L({title:"Success!",description:"Your changes have been saved successfully.",icon:s.check,type:"success"})],code:`Alert({
    title: 'Success!',
    description: 'Your changes have been saved successfully.',
    icon: Icons.check,
    type: 'success'
})`}),t({title:"Warning Alert",description:"A warning alert to caution the user about something important.",preview:[L({title:"Warning!",description:"Please check your input before proceeding.",icon:s.warning,type:"warning"})],code:`Alert({
    title: 'Warning!',
    description: 'Please check your input before proceeding.',
    icon: Icons.warning,
    type: 'warning'
})`}),t({title:"Destructive Alert",description:"A destructive alert to inform the user of an error or serious issue.",preview:[L({title:"Error!",description:"Something went wrong. Please try again later.",icon:s.shield,type:"destructive"})],code:`Alert({
    title: 'Error!',
    description: 'Something went wrong. Please try again later.',
    icon: Icons.error,
    type: 'destructive'
})`})]),$t=()=>f({title:"Avatars",description:"Avatars are used to represent users or objects visually, with customizable sizes and optional status indicators."},[t({title:"Extra Small Avatar (xs)",description:"An extra small avatar for compact spaces.",preview:[k({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN",size:"xs"})],code:"Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: 'xs' })"}),c({class:"text-2xl font-semibold text-foreground mt-8"},"Avatar Fallbacks"),i({class:"text-sm text-muted-foreground mb-4"},"The avatar fallback can be bound to a watcher for dynamic content using the 'watcherFallback' property. The fallback and watcher fallback will convert a name to initials if not set as a two letter string."),t({title:"Small Avatar (sm)",description:"A small avatar suitable for lists and compact layouts.",preview:[k({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN",size:"sm"})],code:"Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: 'sm' })"}),t({title:"Medium Avatar (md)",description:"A medium-sized avatar, often used for standard profile images.",preview:[k({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN",size:"md"})],code:"Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: 'md' })"}),t({title:"Large Avatar (lg)",description:"A large avatar for prominent profile displays.",preview:[k({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN",size:"lg"})],code:"Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: 'lg' })"}),t({title:"Extra Large Avatar (xl)",description:"An extra-large avatar for detailed user profile sections.",preview:[k({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN",size:"xl"})],code:"Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: 'xl' })"}),t({title:"2x Extra Large Avatar (2xl)",description:"A double extra-large avatar for large displays.",preview:[k({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN",size:"2xl"})],code:"Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: '2xl' })"}),t({title:"3x Extra Large Avatar (3xl)",description:"A triple extra-large avatar for the largest profile displays.",preview:[k({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN",size:"3xl"})],code:"Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: '3xl' })"}),t({title:"Avatar with Name and Subtitle",description:"Display an avatar alongside a name and subtitle for user identification.",preview:[o({class:"flex items-center gap-4 p-4 bg-card rounded-md border shadow-md"},[k({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN",size:"lg"}),o({},[r({class:"text-lg font-semibold text-foreground"},"Leslie Alexander"),i({class:"text-sm text-muted-foreground"},"leslie.alexander@example.com")])])],code:`Div({ class: 'flex items-center gap-4 p-4 bg-card rounded-md border shadow-md' }, [
    Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: 'lg' }),
    Div({}, [
        Span({ class: 'text-lg font-semibold text-foreground' }, 'Leslie Alexander'),
        P({ class: 'text-sm text-muted-foreground' }, 'leslie.alexander@example.com')
    ])
])`}),t({title:"Avatar with Online Status",description:"Displays an avatar with a small online status indicator.",preview:[o({class:"relative flex items-center gap-4 p-4 bg-card rounded-md border shadow-md"},[o({class:"relative"},[k({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN",size:"lg"}),o({class:"absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 rounded-full"})]),o({},[r({class:"text-lg font-semibold text-foreground"},"Leslie Alexander"),i({class:"text-sm text-muted-foreground"},"leslie.alexander@example.com")])])],code:`Div({ class: 'relative flex items-center gap-4 p-4 bg-card rounded-md border shadow-md' }, [
    Div({ class: 'relative' }, [
        Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: 'lg' }),
        Div({ class: 'absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 rounded-full' }) // Online indicator
    ]),
    Div({}, [
        Span({ class: 'text-lg font-semibold text-foreground' }, 'Leslie Alexander'),
        P({ class: 'text-sm text-muted-foreground' }, 'leslie.alexander@example.com')
    ])
])`}),t({title:"Status Indicator",description:"A small status indicator for online, offline, busy, or away statuses. This will bind to the data or state status of the parent component.",preview:[o({class:"relative",addState(){return{status:"online"}}},[$e()])],code:`import { Div, H4, P, Span } from "@base-framework/atoms";
import {  StatusIndicator  } from "@base-framework/ui/molecules";

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
])`}),t({title:"Static Status Indicator",description:"A small status indicator for online, offline, busy, or away statuses.",preview:[o({class:"relative"},[Ee("online")])],code:`import { Div, H4, P, Span } from "@base-framework/atoms";
import {  StaticStatusIndicator  } from "@base-framework/ui/molecules";

Div({ class: 'relative' }, [
    StaticStatusIndicator('online')
])`})]),Et=()=>f({title:"Badges",description:"Badges can be used to display a status or a count."},[t({title:"Badge",description:"This is a badge.",preview:[o({class:"flex gap-2 flex-wrap"},[w({type:"gray"},"Text"),w({type:"red"},"Text"),w({type:"yellow"},"Text"),w({type:"green"},"Text"),w({type:"blue"},"Text"),w({type:"indigo"},"Text"),w({type:"purple"},"Text"),w({type:"pink"},"Text"),w({type:"primary"},"Text"),w({type:"secondary"},"Text"),w({type:"destructive"},"Text"),w({type:"warning"},"Text"),w({type:"outline"},"Text"),w({type:"ghost"},"Text"),w({type:"link"},"Text")])],code:`
import {  Button  } from "@base-framework/ui/atoms";
import { Atom } from '@base-framework/base';

export const PrimaryBadge = Atom((props, children)) => (
    Badge({ ...props, type: 'gray' }, children)
);`})]),Rt=[{href:"/",label:"Home"},{href:"/components",label:"Components"},{label:"Breadcrumb"}],Nt=()=>f({title:"Breadcrumbs",description:"Breadcrumbs are a navigation aid that helps users understand their location within a website or application."},[t({title:"Usage",description:"To use the Breadcrumb component, import it and provide an array of items. Each item can have a label and an optional href.",preview:[new Re({items:Rt})],code:`import {  Breadcrumb  } from "@base-framework/ui/molecules";

new Breadcrumb({ items: [
    { href: '/', label: 'Home' },
    { href: '/components', label: 'Components' },
    { label: 'Breadcrumb' } // Last item, no href needed
] })`}),t({title:"Dots Indicator",description:'The Dots Indicator component is used to display a row of circular dots, one of which is "active." The dots can be set to a specific size and count. The sizes are xs, sm, md, lg, xl, 2xl, and 3xl.',preview:[new Ne({count:6,size:"sm",gap:"gap-2",onClick:e=>console.log("Clicked dot",e)})],code:`import DotsIndicator from "@base-framework/ui/molecules";

new DotsIndicator({
    count: 6,
    size: 'sm',
    gap: 'gap-2',
    onClick: (index) => console.log('Clicked dot', index)
})`})]),Ht=()=>f({title:"Button",description:"Displays a button or a component that looks like a button."},[t({title:"Usage",description:"Import the button atom and use it in your components. This platform has variants for different use cases. The variant can be set using the `variant` prop.",preview:[l({variant:"primary"},"Click Me")],code:`import {  Button  } from "@base-framework/ui/atoms";

Button({ ...props, variant: 'secondary' }, primary)`}),R({class:"flex flex-col py-8"},[he({class:"text-3xl font-bold tracking-tight border-b pb-2"},"Variants")]),t({title:"Primary Button",description:"This is a primary button.",preview:[l({variant:"primary"},"Click Me")],code:`
import {  Button  } from "@base-framework/ui/atoms";
import { Atom } from '@base-framework/base';

export const PrimaryButton = Atom((props, children) => (
    Button({ ...props, variant: 'primary' }, children)
);`}),t({title:"Secondary Button",preview:[l({variant:"secondary"},"Secondary")],code:`
import {  Button  } from "@base-framework/ui/atoms";
import { Atom } from '@base-framework/base';

export const SecondaryButton = Atom((props, children) => (
    Button({ ...props, variant: 'secondary' }, children)
);`}),t({title:"Destructive Button",preview:[l({variant:"destructive"},"Destructive")],code:`
import {  Button  } from "@base-framework/ui/atoms";
import { Atom } from '@base-framework/base';

export const DestructiveButton = Atom((props, children) => (
    Button({ ...props, variant: 'destructive' }, children)
);`}),t({title:"Warning Button",preview:[l({variant:"warning"},"Warning")],code:`import {  Button  } from "@base-framework/ui/atoms";
import { Atom } from '@base-framework/base';

export const WarningButton = Atom((props, children) => (
    Button({ ...props, variant: 'warning' }, children)
);`}),t({title:"Outline Button",preview:[l({variant:"outline"},"Outline")],code:`
import {  Button  } from "@base-framework/ui/atoms";
import { Atom } from '@base-framework/base';

export const OutlineButton = Atom((props, children) => (
    Button({ ...props, variant: 'outline' }, children)
);`}),t({title:"Ghost Button",preview:[l({variant:"ghost"},"Ghost")],code:`
import {  Button  } from "@base-framework/ui/atoms";
import { Atom } from '@base-framework/base';

export const GhostButton = Atom((props, children) => (
    Button({ ...props, variant: 'ghost' }, children)
);`}),t({title:"Link Button",preview:[l({variant:"link"},"Link")],code:`
import {  Button  } from "@base-framework/ui/atoms";
import { Atom } from '@base-framework/base';

export const LinkButton = Atom((props, children) => (
    Button({ ...props, variant: 'link' }, children)
);`}),t({title:"Icon Button",description:"Displays a button with an icon.",preview:[l({variant:"icon",icon:s.home})],code:`import {  Button  } from "@base-framework/ui/atoms";
import {  Icons  } from "@base-framework/ui/icons";
import { Atom } from '@base-framework/base';

export const IconButton = Atom((props) => (
    Button({ ...props, variant: 'icon', icon: Icons.home })
);`}),t({title:"With Icon Button",preview:[l({variant:"withIcon",icon:s.home},"With Icon")],code:`import {  Button  } from "@base-framework/ui/atoms";
import {  Icons  } from "@base-framework/ui/icons";

Button({ variant: 'withIcon', icon: Icons.home }, 'With Icon')`}),t({title:"Loading Button",preview:[He("With Icon")],code:`import {  LoadingButton  } from "@base-framework/ui/atoms";

LoadingButton('With Icon')`})]),zt=()=>We.formatTime("",24),Ut=()=>f({title:"Calendars",description:"This is the calendar component documentation."},[t({title:"Usage",description:"This is how you can use the calendar component.",preview:[new ze],code:`@base-framework/ui/organisms;

new Calendar()`}),t({title:"Week Calendar",description:"This is how you can use the week calendar component.",preview:[new Ue],code:`@base-framework/ui/organisms;

new Calendar()`}),t({title:"Dynamic Time",description:"The Dynamic Time class will allow you to create a dynamic time that will update every minute.",preview:[new Oe({filter:()=>{let e="Morning";const a=zt();return a>="18:00:00"?e="Evening":a>="12:00:00"&&(e="Afternoon"),`Good ${e}`}})],code:`import { DateTime } from "@base-framework/base";
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
})`}),t({title:"Dynamic Local Time by Time Frame",description:"This will show the time frame based on the local time. This will update the time frame every minute to keep the time frame updated.",preview:[qe({dateTime:"2024-11-04T18:00:00",remoteTimeZone:"America/Denver"})],code:`import {  TimeFrame  } from "@base-framework/ui/molecules";

TimeFrame({
    dateTime: '2024-11-04T18:00:00',
    remoteTimeZone: 'America/Denver'
})`})]),M=({title:e,description:a})=>R({class:"text-left"},[he({class:"font-semibold tracking-tight text-2xl"},e),i({class:"text-sm text-muted-foreground"},a)]),Ot=()=>o({class:"flex items-center justify-center gap-4"},[l({variant:"outline",class:"gap-2 w-full",click:()=>console.log("Sign in with Github"),"aria-label":"Sign in with Github"},[x(s.companies.gitHub),r("Github")]),l({variant:"outline",class:"gap-2 w-full",click:()=>console.log("Sign in with Google"),"aria-label":"Sign in with Google"},[x(s.companies.google),r("Google")])]),qt=()=>P({class:"space-y-4",submit:e=>{e.preventDefault(),console.log("Account created")}},[new m({name:"email",label:"Email"},[Z({type:"email",placeholder:"m@example.com",required:!0,class:"border p-2 rounded-md w-full bg-background placeholder-muted-foreground text-foreground"})]),new m({name:"password",label:"Password"},[Z({type:"password",placeholder:"Your password",required:!0,class:"border p-2 rounded-md w-full bg-background placeholder-muted-foreground text-foreground"})]),l({type:"submit",class:"w-full mt-4 py-2 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition"},"Create account")]),ke=()=>D({class:"w-full max-w-md mx-auto p-8 bg-card space-y-6"},[M({title:"Create an account",description:"Enter your email below to create your account"}),Ot(),o({class:"relative"},[o({class:"absolute inset-0 flex items-center"},[r({class:"flex-grow border-t"})]),o({class:"relative flex justify-center text-xs uppercase"},[r({class:"bg-background px-2 text-muted-foreground"},"or continue with")])]),qt()]),K=({title:e,description:a,defaultState:n,onChange:d})=>o({class:"flex items-start justify-between gap-2"},[o({class:"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex flex-col space-y-1"},[r({class:"font-medium text-foreground"},e),r({class:"font-normal leading-snug text-muted-foreground"},a)]),new W({active:n,change:d})]),Te=()=>D({class:"w-full max-w-md mx-auto p-6 bg-card space-y-6"},[M({title:"Cookie Settings",description:"Manage your cookie settings here."}),o({class:"pt-0 grid gap-6"},[K({title:"Strictly Necessary",description:"These cookies are essential in order to use the website and use its features.",defaultState:!0,onChange:e=>console.log("Strictly Necessary:",e)}),K({title:"Functional Cookies",description:"These cookies allow the website to provide personalized functionality.",defaultState:!1,onChange:e=>console.log("Functional Cookies:",e)}),K({title:"Performance Cookies",description:"These cookies help to improve the performance of the website.",defaultState:!1,onChange:e=>console.log("Performance Cookies:",e)})]),l({variant:"outline",class:"w-full",click:()=>console.log("Preferences saved")},"Save preferences")]),Se=({startDate:e})=>D({class:"w-full max-w-md mx-auto p-6 bg-card space-y-6"},[M({title:"Pick a Date",description:"When is the event?"}),o({class:"font-medium text-foreground"},[new se({selectedDate:e,selectedCallBack:a=>console.log(a)})])]),Q=b(({value:e,label:a,icon:n})=>Ge({class:'text-sm gap-1 font-medium leading-none disabled:cursor-not-allowed disabled:opacity-70 flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-muted data-[state="active"]:border-primary [&:has([data-state="active"])]:border-primary',onState:["method",{active:e}],dataSet:["method",["state",e,"active"]],click:(d,{state:g})=>g.method=e},[x(n),r(a)])),Wt=ge({render(){return o({class:"flex flex-auto flex-col"},[o({class:"grid grid-cols-3 gap-4"},[Q({label:"Card",value:"card",icon:s.creditCard}),Q({label:"Paypal",value:"paypal",icon:s.companies.paypal}),Q({label:"Apple",value:"apple",icon:s.companies.apple})])])},state(){return{method:null}}}),Gt=()=>o({class:"flex items-center justify-center gap-4"},[new Wt]),_t=()=>P({class:"space-y-4",submit:e=>{e.preventDefault(),console.log("Payment method added")}},[new m({name:"name",label:"Name"},[C({type:"text",placeholder:"First Last",required:!0,class:"border p-2 rounded-md w-full bg-background placeholder-muted-foreground text-foreground"})]),new m({name:"card_number",label:"Card number"},[C({type:"text",placeholder:"1234 5678 9012 3456",required:!0,class:"border p-2 rounded-md w-full bg-background placeholder-muted-foreground text-foreground"})]),o({class:"flex gap-4 mt-4"},[new m({name:"month",label:"Expires"},[T({required:!0,class:"border p-2 rounded-md w-full bg-background text-foreground",options:[{value:"",label:"Month",disabled:!0},...Array.from({length:12},(e,a)=>({value:`${a+1}`,label:`${a+1}`.padStart(2,"0")}))]})]),new m({name:"year",label:"Year"},[T({required:!0,class:"border p-2 rounded-md w-full bg-background text-foreground",options:[{value:"",label:"Year",disabled:!0},...Array.from({length:10},(e,a)=>({value:`${new Date().getFullYear()+a}`,label:`${new Date().getFullYear()+a}`}))]})]),new m({name:"cvc",label:"CVC"},[C({type:"text",placeholder:"CVC",required:!0,class:"border p-2 rounded-md w-full bg-background placeholder-muted-foreground text-foreground"})])]),l({type:"submit",class:"w-full mt-4 py-2 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition"},"Continue")]),Ie=()=>D({class:"w-full max-w-md mx-auto p-8 bg-card space-y-6"},[M({title:"Payment Method",description:"Add a new payment method to your account."}),Gt(),o({class:"space-y-4"},[_t()])]),Yt=({name:e,description:a,stars:n,language:d,lastUpdated:g})=>o({class:"flex items-start justify-between py-4 border-b border-muted last:border-b-0"},[o({class:"flex flex-col"},[r({class:"font-semibold text-foreground"},e),r({class:"text-sm text-muted-foreground"},a),o({class:"flex space-x-4 text-sm text-muted-foreground mt-3"},[o({class:"flex items-center gap-2"},[x({class:" text-blue-500"},s.document.text),r(` ${d}`)]),o({class:"flex items-center"},[x(s.star),r(` ${n}`)]),o(`Updated ${g}`)])]),l({variant:"secondary",class:"px-3 py-1 gap-1 flex items-center rounded-md",click:()=>console.log(`Starred ${e}`)},[x(s.star),r("Star")])]),Jt=({projects:e})=>o({class:"space-y-3"},e.map(a=>Yt(a))),Vt=[{name:"shadcn/ui",description:"Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.",stars:"20k",language:"TypeScript",lastUpdated:"April 2023"},{name:"base-framework",description:"A robust framework for building and structuring large-scale applications with ease.",stars:"2",language:"JavaScript",lastUpdated:"June 2024"}],Kt=()=>D({class:"w-full max-w-md mx-auto p-6 bg-card space-y-6"},[o({class:"font-semibold text-lg text-foreground"},"Projects"),Jt({projects:Vt})]),Qt=()=>P({class:"space-y-4",submit:e=>{e.preventDefault(),console.log("Issue reported")}},[o({class:"flex flex-auto w-full gap-4"},[new m({name:"area",label:"Area"},[T({required:!0,class:"border p-2 rounded-md w-full bg-background text-foreground",options:[{value:"billing",label:"Billing"},{value:"technical",label:"Technical"},{value:"account",label:"Account"},{value:"other",label:"Other"}],defaultValue:"billing",change:e=>console.log(`Area selected: ${e.target.value}`)})]),new m({name:"security_level",label:"Security Level"},[T({required:!0,class:"border p-2 rounded-md w-full bg-background text-foreground",options:[{value:"severity_1",label:"Severity 1"},{value:"severity_2",label:"Severity 2"},{value:"severity_3",label:"Severity 3"}],defaultValue:"severity_2",change:e=>console.log(`Security Level selected: ${e.target.value}`)})])]),new m({name:"subject",label:"Subject"},[C({type:"text",placeholder:"I need help with...",required:!0,class:"border p-2 rounded-md w-full bg-background text-foreground placeholder-muted-foreground"})]),new m({name:"description",label:"Description"},[E({placeholder:"Please include all information relevant to your issue.",required:!0,class:"border p-2 rounded-md w-full bg-background text-foreground placeholder-muted-foreground"})]),o({class:"flex justify-end gap-4 mt-4"},[l({variant:"outline",class:"px-4 py-2",click:()=>console.log("Cancel clicked")},"Cancel"),l({type:"submit",class:"px-4 py-2 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition"},"Submit")])]),Ce=()=>D({class:"w-full max-w-md mx-auto p-6 bg-card space-y-6"},[M({title:"Report an issue",description:"What area are you having problems with?"}),Qt()]),Zt=({link:e})=>o({class:"flex items-center gap-4 py-2"},[Z({type:"text",value:e,readOnly:!0,class:"border p-2 rounded-md w-full bg-background text-foreground"}),l({variant:"secondary",class:"px-4 py-2",click:()=>{navigator.clipboard.writeText(e),app.notify({title:"Link copied",description:"The link has been copied to your clipboard.",icon:s.clipboard.checked})}},"Copy Link")]),Xt=({name:e,email:a,access:n,image:d})=>o({class:"flex items-center justify-between gap-4 py-2"},[o({class:"flex items-center gap-3"},[k({src:d,alt:e,fallbackText:e.split(" ").map(g=>g[0]).join("")}),o({},[r({class:"font-medium text-foreground"},e),r({class:"block text-sm text-muted-foreground"},a)])]),T({class:"border rounded-md bg-background text-foreground px-3 py-1",options:[{value:"edit",label:"Can edit"},{value:"view",label:"Can view"},{value:"comment",label:"Can comment"}],defaultValue:n,change:g=>console.log(`Access level changed for ${e}: ${g.target.value}`)})]),eo=({people:e})=>o({class:"space-y-3"},e.map(a=>Xt(a))),De=({link:e,people:a})=>D({class:"w-full max-w-md mx-auto p-6 bg-card space-y-6"},[M({title:"Share this document",description:"Anyone with the link can view this document."}),Zt({link:e}),o({class:"border-t my-4"}),o({class:"font-medium text-foreground"},"People with access"),eo({people:a})]),to=e=>e.split(" ").map(n=>n[0]).join(""),oo=({name:e,email:a,role:n,image:d})=>o({class:"flex items-center justify-between gap-4 py-2"},[o({class:"flex items-center gap-3"},[k({src:d,alt:e,fallbackText:to(e)}),o({},[r({class:"font-medium text-foreground"},e),r({class:"block text-sm text-muted-foreground"},a)])]),T({class:"border rounded-md bg-background text-foreground px-3 py-1",options:[{value:"owner",label:"Owner"},{value:"member",label:"Member"}],defaultValue:n,change:g=>console.log(`Role changed for ${e}: ${g.target.value}`)})]),ao=({members:e})=>o({class:"space-y-3"},e.map(a=>oo(a))),Ae=({members:e})=>D({class:"w-full max-w-md mx-auto p-6 bg-card space-y-6"},[M({title:"Team Member",description:"Invite your team members to collaborate."}),ao({members:e})]),so=()=>f({title:"Cards",description:"Cards are a great way to display content in a concise and organized manner."},[t({title:"Usage",description:"Import the card atom and use it in your components.",preview:[D()],code:`import {  Button  } from "@base-framework/ui/atoms";

Card()`}),c({class:"text-lg font-bold"},"Examples"),i({class:"text-muted-foreground"},"This is a list of examples of how to use the card component in your application."),t({title:"Account Card",preview:[ke()],code:`import AccountCard from "./examples/account-card.js";

AccountCard()`}),t({title:"Paymnet Card",preview:[Ie()],code:`import AccountCard from "./examples/payment-card.js";

PaymentCard()`}),t({title:"Team Mmeber Card",preview:[Ae({members:[{name:"Leslie Alexander",email:"leslie.alexander@example.com",image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"owner",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Michael Foster",email:"michael.foster@example.com",image:"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"member",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Dries Vincent",email:"dries.vincent@example.com",image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"owner",status:"online"}]})],code:`import AccountCard from "./examples/team-member-card.js";

TeamMemberCard()`}),t({title:"Share Document Card",preview:[De({link:"http://example.com/link/to/document",people:[{name:"Leslie Alexander",email:"leslie.alexander@example.com",image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"owner",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Michael Foster",email:"michael.foster@example.com",image:"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"member",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Dries Vincent",email:"dries.vincent@example.com",image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"owner",status:"online"}]})],code:`import AccountCard from "./examples/share-document-card.js";

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
})`}),t({title:"Date Select Card",preview:[Se({startDate:"2023-01-23"})],code:`import AccountCard from "./examples/date-select-card.js";

DateSelectCard({
    startDate: '2023-01-23'
})`}),t({title:"Report Issue Card",preview:[Ce()],code:`import AccountCard from "./examples/report-issue-card.js";

ReportIssueCard()`}),t({title:"Project Card",preview:[Kt()],code:`import AccountCard from "./examples/project-card.js";

ProjectCard()`}),t({title:"Cookie Settings Card",preview:[Te()],code:`import AccountCard from "./examples/cookie-settings-card.js";

CookieSettingsCard()`})]),io=[{value:"next.js",label:"Next.js",icon:s.home},{value:"sveltekit",label:"SvelteKit"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}],ro=()=>f({title:"Comboboxes",description:"Comboboxes are used to allow users to select an option from a dropdown list or enter a custom value."},[t({title:"Usage",description:"To use the Combobox component, import it from the components library and use it in your application.",preview:[o({class:"w-full max-w-[300px]"},[new be({items:io,onSelect:e=>console.log(e)})])],code:`@base-framework/ui/molecules;
import {  Icons  } from "@base-framework/ui/icons";

new Combobox({
    items: [
    { value: 'next.js', label: 'Next.js', icon: Icons.home },,
    { value: 'sveltekit', label: 'SvelteKit' },
    { value: 'nuxt.js', label: 'Nuxt.js' },
    { value: 'remix', label: 'Remix' },
    { value: 'astro', label: 'Astro' },
],
})`})]),lo=()=>{const e=[{id:1,status:"Active",email:"user1@example.com",amount:500.5},{id:2,status:"Inactive",email:"user2@example.com",amount:250.75},{id:3,status:"Active",email:"user3@example.com",amount:300}],a=()=>Ye([X({class:"text-muted-foreground border-b"},[Je({}),J({key:"status",label:"Custom Status"}),J({key:"email",label:"User Email"}),J({key:"amount",label:"Amount (USD)",align:"justify-end"})])]),n=(d,g)=>X({class:"items-center px-4 py-2 hover:bg-muted/50"},[B({class:"p-4"},[new G({checked:d.selected,class:"mr-2",click:()=>g(d)})]),B({class:"p-4 justify-center"},d.status),B({class:"p-4"},d.email),B({class:"p-4 text-right"},`$${d.amount.toFixed(2)}`)]);return o({class:"w-full mt-4"},[o({class:"w-full rounded-md border overflow-x-auto"},[_e({class:"w-full"},[new we({key:"id",customHeader:a(),rows:e,rowItem:n})])])])},no=[{label:"checkbox",key:""},{label:"Status",key:"status"},{label:"Email",key:"email"},{label:"Amount",key:"amount",align:"justify-end"}],co=[{id:1,status:"Success",email:"ken99@yahoo.com",amount:316,selected:!1},{id:2,status:"Success",email:"abe45@gmail.com",amount:242,selected:!1},{id:3,status:"Processing",email:"monserrat44@gmail.com",amount:837,selected:!1},{id:4,status:"Success",email:"silas22@gmail.com",amount:874,selected:!1},{id:5,status:"Failed",email:"carmella@hotmail.com",amount:721,selected:!1}],mo=(e,a)=>X({class:"items-center px-4 py-2 hover:bg-muted/50"},[B({class:"p-4"},[new G({checked:e.selected,class:"mr-2",onChange:()=>a(e)})]),B({class:"p-4 "},[r({class:"text-muted-foreground"},e.status)]),B({class:"p-4 "},e.email),B({class:"p-4 text-right"},`$${e.amount.toFixed(2)}`)]),uo=()=>f({title:"Data Tables",description:"Data tables are used to display or manipulate lists of items in tabular form."},[t({title:"Usage",description:"The DataTable component displays items in a structured format, supporting selection, custom row items, and more.",preview:[new we({headers:no,rows:co,rowItem:mo,key:"id"})],code:`import {  DataTable  } from "@base-framework/ui/organisms";
import {  Checkbox  } from "@base-framework/ui/atoms";
import { Tr, Td } from '@base-framework/atoms';

const headers = [
    { label: 'checkbox', key: '' },
    { label: 'Status', key: 'status' },
    { label: 'Email', key: 'email' },
    { label: 'Amount', key: 'amount', align: 'justify-end' }
];

const rows = [
    { id: 1, status: 'Success', email: 'ken99@yahoo.com', amount: 316.00, selected: false },
    // ...
];

const rowItem = (row, onSelect) =>
{
    return Tr({ class: 'items-center px-4 py-2 hover:bg-muted/50' }, [
        Td({ class: 'p-4' }, [
            new Checkbox({
                checked: row.selected,
                onChange: () => onSelect(row)
            })
        ]),
        Td({ class: 'p-4 ' }, row.status),
        Td({ class: 'p-4 ' }, row.email),
        Td({ class: 'p-4 text-right' }, \`$\${row.amount.toFixed(2)}\`)
    ]);
};

new DataTable({
    key: 'id',
    headers,
    rows,
    rowItem
});`}),t({title:"Custom Header Data Table",description:"Demonstrates a data table with custom headers and row rendering using the DataTable component.",preview:[lo()],code:`// custom-header-table.js
import {  CheckboxCol, HeaderCol  } from "@base-framework/ui/organisms";
import {  DataTable  } from "@base-framework/ui/organisms";
import { Tr, Td, Thead } from '@base-framework/atoms';

// Showcases a custom header with CheckboxCol and HeaderCol, plus a custom rowItem.
export const CustomHeaderTable = () => {
   // define custom rows, rowItem, etc.
   return new DataTable({
       key: 'id',
       customHeader: ...,
       rows: ...,
       rowItem
   });
};`}),p({class:"space-y-4 mt-8"},[c({class:"text-lg font-bold"},"Selecting and Resetting Rows"),i({class:"text-muted-foreground"},"DataTable supports toggling all rows, clearing selections, and retrieving selected rows."),v(`// Suppose 'dt' is your DataTable instance

// Select or reset selection
dt.toggleAllSelectedRows(); // toggles between all selected or none

// Retrieve selected rows
const selectedItems = dt.getSelectedRows();
console.log('Selected Rows:', selectedItems);

// Clear the selection entirely
dt.data.selectedRows = [];
dt.updateSelected(); // updates the internal 'selected' boolean
`)]),p({class:"space-y-4 mt-8"},[c({class:"text-lg font-bold"},"Removing Items"),i({class:"text-muted-foreground"},"Use remove() to delete rows by passing an array of items (or a single item)."),v(`// dt is your DataTable instance

// Removing a single row
dt.remove([ rowToRemove ]);

// or removing multiple
dt.remove(selectedItems); // e.g. dt.getSelectedRows()
`)]),p({class:"space-y-4 mt-8"},[c({class:"text-lg font-bold"},"Appending Items"),i({class:"text-muted-foreground"},"Use append() to add rows at the end of the list. Accepts an array or single object."),v(`// dt is your DataTable instance
const newRow = { id: 6, status: 'New', email: 'newuser@example.com', amount: 100 };
dt.append(newRow);

// or multiple
dt.append([
    { id: 7, status: 'Queued', email: 'queue@example.com', amount: 200 },
    { id: 8, status: 'Processing', email: 'process@example.com', amount: 350 }
]);
`)]),p({class:"space-y-4 mt-8"},[c({class:"text-lg font-bold"},"Mingling Items"),i({class:"text-muted-foreground"},"Mingle merges new items with existing items by matching keys. If withDelete = true, items not in newItems are removed."),v(`// dt is your DataTable instance
const newItems = [
    { id: 2, status: 'Success', email: 'abe45@gmail.com', amount: 242.00 },
    { id: 9, status: 'Pending', email: 'another@example.com', amount: 500.00 }
];

// withDelete=true removes items not in newItems
dt.mingle(newItems, true);
`)]),p({class:"space-y-4 mt-8"},[c({class:"text-lg font-bold"},"Prepending Items"),i({class:"text-muted-foreground"},"Use prepend() to add new rows at the beginning of the list, shifting existing rows down."),v(`// dt is your DataTable instance
const topRow = { id: 0, status: 'Top', email: 'top@example.com', amount: 999.99 };
dt.prepend(topRow);

// or multiple
dt.prepend([
    { id: -1, status: 'Urgent', email: 'urgent@example.com', amount: 777 },
    { id: -2, status: 'Priority', email: 'priority@example.com', amount: 555 }
]);
`)])]),po=b((e,a)=>l({text:"Open",class:"m-1",click:()=>new xe(e,a).open()})),fo=e=>l({text:"Open",class:"m-1",click:()=>new ie(e).open()}),ho=b((e,a)=>l({text:"Open",class:"m-1",click:()=>new ie({icon:s.signOut,type:"destructive",title:"Are you absoultely sure?",description:"This will sign you out of the application.",confirmTextLabel:"Sign Out",confirmed:()=>console.log("Confirmed!")}).open()})),go=({link:e})=>o({class:"flex items-center gap-4 py-2"},[C({type:"text",value:e,readOnly:!0,class:"border p-2 rounded-md w-full bg-background text-foreground"}),l({variant:"secondary",class:"px-4 py-2",click:()=>{navigator.clipboard.writeText(e),app.notify({title:"Link copied",description:"The link has been copied to your clipboard.",icon:s.clipboard.checked})}},"Copy Link")]),bo=e=>l({text:"Open",class:"m-1",click:()=>new xe(e,[go({link:"https://example.com"})]).open()}),wo=()=>f({title:"Dialogs",description:"Displays a dialog or a component that looks like a dialog. Dialogs can be opened and closed. They will be closed if the user clicks outside of the dialog or if the user clicks the close button."},[t({title:"Usage",description:"Import the dialog atom and use it in your components.",preview:[po({title:"Title",description:"this is the description.",hideFooter:!1},[])],code:`import {  Dialog  } from "@base-framework/ui/molecules";

new Dialog({
    title: '',
    description: '',
    hideFooter: false
}, [

]).open()`}),t({title:"Confirmation",description:"Displays a confirmation dialog.",preview:[fo({title:"Are you absoultely sure?",description:"This action cannot be undone. This will permanently delete your account and remove your data from our servers.",confirmTextLabel:"Save",confirmed:()=>console.log("Confirmed!")})],code:`import {  Confirmation  } from "@base-framework/ui/molecules";

new Confirmation({
    title: 'Are you absoultely sure?',
    description: 'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
    confirmTextLabel: 'Save',
    confirmed: () => console.log('Confirmed!')
}).open()`}),t({title:"Share Link",description:"Displays a dialog with a shareable link.",preview:[bo({title:"Share Link",description:"Share this link with others."})],code:`import {  Confirmation  } from "@base-framework/ui/molecules";

new Confirmation({
    title: 'Are you absoultely sure?',
    description: 'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
    confirmTextLabel: 'Save',
    confirmed: () => console.log('Confirmed!')
}).open()`}),t({title:"Types",description:"There are different types of dialogs.",preview:[ho()],code:`import {  Dialog  } from "@base-framework/ui/molecules";
import {  Confirmation  } from "@base-framework/ui/molecules";
import {  Icons  } from "@base-framework/ui/icons";

new Confirmation({
    icon: Icons.signOut,
    type: 'destructive',
    title: 'Are you absoultely sure?',
    description: 'This will sign you out of the application.',
    confirmTextLabel: 'Sign Out',
    confirmed: () => console.log('Confirmed!')
}).open()
`}),i("The types are `destructive`, `warning`, `info`, `success`, and `default`. Dialogs can also have an icon in the header. The icon can be any icon from the icon library.")]),xo=()=>f({title:"Dropdown Menus",description:"Dropdown menus are used to display a list of options when a user clicks on a button or input field."},[t({title:"Usage",description:"To use the DropdownMenu component, import it from the components library and use it in your application.",preview:[new ve({icon:s.ellipsis.vertical,groups:[[{icon:s.user.default,label:"Profile",shortcut:"⌘P",value:"profile"},{icon:s.creditCard,label:"Billing",shortcut:"⌘B",value:"billing"},{icon:s.cog.six,label:"Settings",shortcut:"⌘S",value:"settings"},{icon:s.computerDesktop,label:"Keyboard shortcuts",shortcut:"⌘K",value:"shortcuts"}],[{icon:s.user.multiple,label:"Team",value:"team"},{icon:s.user.plus,label:"Invite users",value:"invite"},{icon:s.plus,label:"New Team",shortcut:"⌘T",value:"new_team"}],[{icon:s.github,label:"GitHub",value:"github"},{icon:s.helpCircle,label:"Support",value:"support"},{icon:s.api,label:"API",value:"api"}]],onSelect:e=>{console.log("Selected item:",e)}})],code:`import {  Icons  } from "@base-framework/ui/icons";
import {  DropdownMenu  } from "@base-framework/ui/molecules";

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
})`}),t({title:"Dropdown",description:'The Dropdown component is used to render a list of items within the dropdown menu. This uses the parent data "groups" to render the items.',preview:[new $({setData(){return new Ve({groups:[[{icon:s.user.default,label:"Profile",shortcut:"⌘P",value:"profile"},{icon:s.creditCard,label:"Billing",shortcut:"⌘B",value:"billing"},{icon:s.cog.six,label:"Settings",shortcut:"⌘S",value:"settings"},{icon:s.computerDesktop,label:"Keyboard shortcuts",shortcut:"⌘K",value:"shortcuts"}],[{icon:s.user.multiple,label:"Team",value:"team"},{icon:s.user.plus,label:"Invite users",value:"invite"},{icon:s.plus,label:"New Team",shortcut:"⌘T",value:"new_team"}],[{icon:s.github,label:"GitHub",value:"github"},{icon:s.helpCircle,label:"Support",value:"support"},{icon:s.api,label:"API",value:"api"}]]})}},[Ke({onSelect:e=>{console.log("Selected item:",e)}})])],code:`import {  Icons  } from "@base-framework/ui/icons";
import {  Dropdown  } from "@base-framework/ui/molecules";
import { Data } from "@base-framework/base";
import {  Panel  } from "@base-framework/ui/organisms";

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
])`})]),z=b((e,a)=>o({...e,class:"flex flex-auto items-center justify-center w-full py-4 space-y-8 max-w-[450px]"},a)),vo=[{value:"next.js",label:"Next.js"},{value:"sveltekit",label:"SvelteKit"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}],yo=()=>P({submit:e=>{console.log("Profile Form submitted")}},[N({legend:"Profile"},[new m({name:"username",label:"Username",description:"This is your public display name."},[C({placeholder:"e.g. username",required:!0})]),new m({name:"email",label:"Email Address",description:"We'll use this to contact you."},[ee({placeholder:"e.g. email@address.com",required:!0})]),l({type:"submit"},"Submit")])]),ko=()=>P({submit:e=>{console.log("Preferences Form submitted")}},[N({legend:"Preferences"},[new m({name:"framework",label:"Favorite Framework",description:"Select your preferred framework."},[T({options:vo,required:!0})]),new m({name:"newsletter",label:"Subscribe to Newsletter",description:"Stay updated with our latest news."},[new G({label:"Yes, sign me up!",required:!0,onChange:e=>console.log("Newsletter checked:",e)})]),l({type:"submit"},"Save Preferences")])]),To=()=>P({submit:e=>{console.log("Contact Form submitted")}},[N({legend:"Contact Us"},[new m({name:"phone",label:"Phone Number",description:"We may contact you at this number."},[te({placeholder:"e.g. +1234567890",required:!0})]),new m({name:"message",label:"Your Message",description:"Let us know how we can help you."},[E({placeholder:"Type your message here...",required:!0})]),new m({name:"message",label:"Select Framework",description:"Select your preferred framework."},[new be({required:!0,items:[{value:"next.js",label:"Next.js"},{value:"sveltekit",label:"SvelteKit"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}]})]),l({type:"submit"},"Send Message")])]),So=()=>P({submit:e=>{console.log("Settings Form submitted")}},[N({legend:"Settings"},[new m({name:"notifications",label:"Enable Notifications",description:"Toggle to enable or disable notifications."},[new W({active:!0,required:!0})]),new m({name:"volume",label:"Volume Level",description:"Set your preferred volume level."},[new ye({min:0,max:100,value:50})]),l({type:"submit"},"Save Settings")])]),Io=()=>f({title:"Forms",description:"Forms are used to collect user data and submit it to the server."},[t({title:"Profile Form",description:"A simple profile form with username and email fields.",preview:[z([yo()])],code:`import {  Button, Input, EmailInput  } from "@base-framework/ui/atoms";
import {  Form, FormField  } from "@base-framework/ui/molecules";
import { Div } from "@base-framework/atoms";
import { Atom } from "@base-framework/base";
import {  Fieldset  } from "@base-framework/ui/atoms";
import {  Button  } from "@base-framework/ui/atoms";

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
])`}),t({title:"Preferences Form",description:"A preferences form with a select input and a checkbox.",preview:[z([ko()])],code:`import {  Button, Checkbox, Select  } from "@base-framework/ui/atoms";
import {  Form, FormField  } from "@base-framework/ui/molecules";
import { Div } from "@base-framework/atoms";
import { Atom } from "@base-framework/base";
import {  Fieldset  } from "@base-framework/ui/atoms";
import {  Button  } from "@base-framework/ui/atoms";

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
])`}),t({title:"Contact Form",description:"A contact form with a phone input and a textarea for messages.",preview:[z([To()])],code:`import {  Button, TelInput, Textarea  } from "@base-framework/ui/atoms";
import {  Form, FormField  } from "@base-framework/ui/molecules";
import { Div } from "@base-framework/atoms";
import { Atom } from "@base-framework/base";
import {  Fieldset  } from "@base-framework/ui/atoms";
import {  Button  } from "@base-framework/ui/atoms";
import {  Combobox  } from "@base-framework/ui/molecules";

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
])`}),t({title:"Settings Form",description:"A settings form with a toggle and a range slider.",preview:[z([So()])],code:`import {  Button, Toggle, RangeSlider  } from "@base-framework/ui/atoms";
import {  Form, FormField  } from "@base-framework/ui/molecules";
import { Div } from "@base-framework/atoms";
import { Atom } from "@base-framework/base";
import {  Fieldset  } from "@base-framework/ui/atoms";
import {  Button  } from "@base-framework/ui/atoms";
import {  Toggle  } from "@base-framework/ui/molecules";
import {  RangeSlider  } from "@base-framework/ui/atoms";

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
])`})]),Co=[{value:"next.js",label:"Next.js"},{value:"sveltekit",label:"SvelteKit"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}],h=b((e,a)=>o({...e,class:"flex flex-auto items-center justify-center w-full max-w-[350px]"},a)),ne=({label:e,description:a,active:n,onChange:d})=>o({class:"flex items-center justify-between p-4 border rounded-md bg-muted/10 border-muted-foreground/20 mb-4"},[o({class:"flex flex-col pr-8"},[c({class:"font-semibold"},e),i({class:"text-sm text-muted-foreground"},a)]),new W({active:n,change:d})]),Do=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Cherry",value:"cherry"},{label:"Date",value:"date"},{label:"Elderberry",value:"elderberry"},{label:"Fig",value:"fig"},{label:"Grape",value:"grape"},{label:"Honeydew",value:"honeydew"}],Ao=()=>f({title:"Inputs",description:"Inputs are essential for gathering user data in forms."},[t({title:"Usage",description:"Import the input atom and use it in your components. The input can be of various types: text, password, email, etc.",preview:[o({class:"grid gap-2 w-full max-w-[350px]"},[C({type:"text",placeholder:"Enter your text here...",change:e=>console.log(e.target.value)}),ee({}),te({}),E({placeholder:"Enter your text here..."})])],code:`import {  Input, EmailInput, TelInput, Textarea  } from "@base-framework/ui/atoms";

Input({
    type: 'text',
    placeholder: 'Enter your text here...',
    change: (e) => console.log(e.target.value)
}),
EmailInput({}),
TelInput({}),
Textarea({
    placeholder: 'Enter your text here...'
})`}),t({title:"Search Dropdown",description:"This is a search dropdown.",preview:[o({class:"relative w-full max-w-md"},[new Qe({options:Do,onSelect:e=>console.log(e)})])],code:`import {  SearchDropdown  } from "@base-framework/ui/organisms";

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
`}),t({title:"File Input",description:"This is a file input.",preview:[h([Ze({multiple:!0,change:e=>console.log(e.target.files)})])],code:`import {  EmailInput, FileInput, Input, TelInput, Textarea  } from "@base-framework/ui/atoms";

FileInput({
    multiple: true,
    change: (e) => console.log(e.target.files)
})`}),t({title:"Radio Input",description:"This is a radio input.",preview:[o({class:"grid gap-2"},[V({name:"theme",label:"System",value:"system"}),V({name:"theme",label:"Light",value:"light"}),V({name:"theme",label:"Dark",value:"dark"})])],code:`import {  Radio  } from "@base-framework/ui/atoms";
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
])`}),t({title:"Text Input",description:"This is a text input.",preview:[h([C({type:"text",placeholder:"Enter your text here..."})])],code:`
import {  EmailInput, FileInput, Input, TelInput, Textarea  } from "@base-framework/ui/atoms";

Input({
    type: 'text',
    placeholder: 'Enter your text here...'
})`}),t({title:"Tel Input",description:"This is a phone input.",preview:[h([te({})])],code:`
import {  EmailInput, FileInput, Input, TelInput, Textarea  } from "@base-framework/ui/atoms";

TelInput({
})`}),t({title:"Email Input",description:"This is a email input.",preview:[h([ee({})])],code:`
import {  EmailInput, FileInput, Input, TelInput, Textarea  } from "@base-framework/ui/atoms";

EmailInput({

})`}),t({title:"URL Input",description:"This is a URL input field.",preview:[h([Xe({placeholder:"Enter a valid URL...",change:e=>console.log(e.target.value)})])],code:`import {  UrlInput  } from "@base-framework/ui/atoms";

UrlInput({
    placeholder: 'Enter a valid URL...',
    change: (e) => console.log(e.target.value),
});`}),t({title:"Color Input",description:"This is a color input field.",preview:[h([et({change:e=>console.log(e.target.value)})])],code:`import {  ColorInput  } from "@base-framework/ui/atoms";

ColorInput({
    change: (e) => console.log(e.target.value),
});`}),t({title:"Date Input",description:"This is a date input field.",preview:[h([tt({change:e=>console.log(e.target.value)})])],code:`import {  DateInput  } from "@base-framework/ui/atoms";

DateInput({
    change: (e) => console.log(e.target.value),
});`}),t({title:"Time Input",description:"This is a time input field.",preview:[h([ot({change:e=>console.log(e.target.value)})])],code:`import {  TimeInput  } from "@base-framework/ui/atoms";

TimeInput({
    change: (e) => console.log(e.target.value),
});`}),t({title:"DateTime Input",description:"This is a datetime input field.",preview:[h([at({change:e=>console.log(e.target.value)})])],code:`import {  DateTimeInput  } from "@base-framework/ui/atoms";

DateTimeInput({
    change: (e) => console.log(e.target.value),
});`}),t({title:"Week Input",description:"This is a week input field.",preview:[h([st({change:e=>console.log(e.target.value)})])],code:`import {  WeekInput  } from "@base-framework/ui/atoms";

WeekInput({
    change: (e) => console.log(e.target.value),
});`}),t({title:"Month Input",description:"This is a month input field.",preview:[h([it({change:e=>console.log(e.target.value)})])],code:`import {  MonthInput  } from "@base-framework/ui/atoms";

MonthInput({
    change: (e) => console.log(e.target.value),
});`}),t({title:"Password Input",description:"This is a password input field.",preview:[h([rt({class:"w-12 h-12"})])],code:`import {  PasswordInput  } from "@base-framework/ui/atoms";

PasswordInput({
    class: 'w-12 h-12'
});`}),t({title:"Number Input",description:"This is a number input field.",preview:[h([lt({placeholder:"Enter a number...",change:e=>console.log(e.target.value)})])],code:`import {  NumberInput  } from "@base-framework/ui/atoms";

NumberInput({
    placeholder: 'Enter a number...',
    change: (e) => console.log(e.target.value),
});`}),t({title:"Hidden Input",description:"This is a hidden input field.",preview:[h([nt({value:"hidden-value"})])],code:`import {  HiddenInput  } from "@base-framework/ui/atoms";

HiddenInput({
    value: 'hidden-value',
});`}),t({title:"Checkbox",description:"This is a checkbox input.",preview:[new G({label:"Check me",onChange:e=>console.log(e)})],code:`
import {  Checkbox  } from "@base-framework/ui/atoms";

new Checkbox({
    label: 'Check me',
    check: (checked) => console.log(checked)
})`}),t({title:"Select",description:"This is a select input.",preview:[h([T({options:Co,change:e=>console.log(e.target.value)})])],code:`import {  Select  } from "@base-framework/ui/atoms";

Select({
    options: [
        { value: 'next.js', label: 'Next.js' },
        { value: 'sveltekit', label: 'SvelteKit' },
        { value: 'nuxt.js', label: 'Nuxt.js' },
        { value: 'remix', label: 'Remix' },
        { value: 'astro', label: 'Astro' },
    ],
    change: (e) => console.log(e.target.value)
})`}),t({title:"Textarea",description:"This is a textarea input.",preview:[h([E({placeholder:"Enter your text here..."})])],code:`
import {  EmailInput, FileInput, Input, TelInput, Textarea  } from "@base-framework/ui/atoms";

Textarea({
    placeholder: 'Enter your text here...'
})`}),t({title:"Time Picker",description:"This is a time picker input.",preview:[h([new ct({selectedTime:"12:00 am",change:e=>console.log(e)})])],code:`
import TimePicker from "@base-framework/ui/molecules/date-time/time-picker.js";

new TimePicker({
    selectedTime: '12:00 am',
    change: (time) => console.log(time)
})`}),t({title:"Date Picker",description:"This is a date picker input.",preview:[h([new se({selectedDate:"2022-01-01"})])],code:`
import DatePicker from "@base-framework/ui/molecules/date-time/date-picker.js";

new DatePicker()`}),t({title:"Range Slider",description:"This is a range slider input.",preview:[h([new ye({min:0,max:100,value:50,change:e=>console.log(e)})])],code:`
import {  RangeSlider  } from "@base-framework/ui/atoms";

new RangeSlider({
    min: 0,
    max: 100,
    value: 50,
    change: (value) => console.log(value)
})`}),t({title:"Counter",description:"This is a counter input.",preview:[h([new mt({class:"max-w-[300px]",initialCount:5,min:0,max:1e5,readonly:!1,bind:"count",change:e=>console.log(e)})])],code:`
import {  Counter  } from "@base-framework/ui/molecules";

new Counter({
    class: 'max-w-[300px]',
    initialCount: 5,
    min: 0,
    max: 100000,
    readonly: false,
    bind: 'count',
    change: (value) => console.log(value)
})`}),t({title:"Toggle Switch",description:"This is a toggle switch input.",preview:[h([new W({active:!0,change:e=>console.log(e)})])],code:`
import {  RangeSlider  } from "@base-framework/ui/atoms";

new RangeSlider({
    min: 0,
    max: 100,
    value: 50,
    change: (value) => console.log(value)
})`}),t({title:"Toggle Switch",description:"Toggle switches to control various settings.",preview:[o({class:"p-4"},[c({class:"text-lg font-bold mb-4"},"Email Notifications"),ne({label:"Marketing emails",description:"Receive emails about new products, features, and more.",active:!1,onChange:e=>console.log("Marketing emails:",e)}),ne({label:"Security emails",description:"Receive emails about your account security.",active:!1,onChange:e=>console.log("Security emails:",e)}),l({text:"Submit",class:"mt-4"})])],code:`
import {  Toggle  } from "@base-framework/ui/atoms";

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
]);`}),t({title:"Signature Pad",description:"This is a signature pad input.",preview:[h([new dt({lineWidth:1,lineColor:"#CCCCCC",baseLineWidth:1,baseStrokeColor:"#333333"})])],code:`
import {  SignaturePanel  } from "@base-framework/ui/organisms";

new SignaturePanel({
    lineWidth: 1,
    lineColor: '#CCCCCC',
    baseLineWidth: 1,
    baseStrokeColor: '#333333',
})`}),i({class:"text-muted-foreground"},"The data URL image can be retrieved by calling the `getImage` method on the signature pad instance. The pad can be checked if it's been signed by calling the `isSigned` method on the signature pad instance.")]),ce=[{name:"Leslie Alexander",email:"leslie.alexander@example.com",image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"Co-Founder / CEO",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Michael Foster",email:"michael.foster@example.com",image:"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"Co-Founder / CTO",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Dries Vincent",email:"dries.vincent@example.com",image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"Business Relations",status:"online"}],Bo=()=>f({title:"Lists",description:"Lists display a collection of items in a structured format. Each item can be customized (e.g. images, text, status). The List also supports advanced data manipulations."},[t({title:"Usage",description:"To use the List component, import it from the components library and display your items. You can pass a rowItem function to customize each row’s layout.",preview:[ut({users:ce})],code:`import { List } from "@base-framework/organisms";
import { Atom } from "@base-framework/base";

/**
 * A simple UserList that displays user data via a rowItem function.
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
                // ...
            }
        ],
        role: 'list',
        class: 'divide-y divide-border',
        rowItem: UserListItem  // A function that returns a row for each user
    });
});`}),c({class:"text-lg font-bold"},"Description"),i({class:"text-muted-foreground"},"The List component displays items in a structured format, each of which can be customized. It supports removing, setting, getting, resetting, appending, mingling, and prepending items for dynamic data updates."),c({class:"text-lg font-bold mt-4"},"Performance"),i({class:"text-muted-foreground"},"The List automatically re-renders only the changed rows (based on the key). This improves performance, as it avoids re-rendering the entire list unnecessarily."),t({title:"Row Dividers",description:"You can add dividers between rows to separate them visually. The List can also group items by date or other properties using custom logic.",preview:[new pt({key:"id",items:ce,role:"list",divider:{itemProperty:"name",layout:e=>o({class:"flex mt-4"},[r({class:"text-sm font-bold text-muted-foreground px-2"},e[0])]),customCompare:(e,a)=>e[0]!==a[0]},class:"flex flex-col gap-4 ",rowItem:ft})],code:`import { List } from "@base-framework/organisms";

new List({
    key: 'id',
    items,
    role: 'list',
    divider: {
        itemProperty: 'name',
        layout: (name) => (
            Div({ class: "flex mt-4" }, [
                Span({ class: "text-sm font-bold text-muted-foreground px-2" }, name[0])
            ])
        ),
        customCompare: (lastValue, value) => lastValue[0] !== value[0]
    },
    class: 'flex flex-col gap-4',
    rowItem: UserListItem
});`}),p({class:"space-y-4 mt-8"},[c({class:"text-lg font-bold"},"Removing Items"),i({class:"text-muted-foreground"},"Use remove() to delete items by their key. You can pass an array of items."),v(`// Suppose 'list' is an instance of the List component.

// Removing a single item:
list.remove([ item ]);

// Removing multiple items:
list.remove([ item1, item2 ]);`)]),p({class:"space-y-4 mt-8"},[c({class:"text-lg font-bold"},"Setting Rows"),i({class:"text-muted-foreground"},"Use setRows() to directly replace the entire items array in the list."),v(`const newData = [
    { name: 'Alice', email: 'alice@example.com' },
    { name: 'Bob', email: 'bob@example.com' }
];
list.setRows(newData); // Replaces entire list with newData
`)]),p({class:"space-y-4 mt-8"},[c({class:"text-lg font-bold"},"Getting Rows"),i({class:"text-muted-foreground"},"Use getRows() to retrieve the current items array in the list."),v(`const currentItems = list.getRows();
console.log('Current list items:', currentItems);
`)]),p({class:"space-y-4 mt-8"},[c({class:"text-lg font-bold"},"Resetting the List"),i({class:"text-muted-foreground"},"Use reset() to clear all items, returning it to an empty list. Dividers are also reset, if any."),v(`list.reset(); // Empties the list's items array
`)]),p({class:"space-y-4 mt-8"},[c({class:"text-lg font-bold"},"Appending Items"),i({class:"text-muted-foreground"},"Use append() to add new items to the end of the list. Accepts an array or single object."),v(`// Single item
list.append({ name: 'Carol', email: 'carol@example.com' });

// Multiple items
list.append([
  { name: 'David', email: 'david@example.com' },
  { name: 'Erin', email: 'erin@example.com' }
]);
`)]),p({class:"space-y-4 mt-8"},[c({class:"text-lg font-bold"},"Mingling Items"),i({class:"text-muted-foreground"},"Use mingle(newItems, withDelete) to merge new items into existing ones, removing old ones if not present when withDelete = true. Compares based on the key property."),v(`const newItems = [
  { name: 'Leslie Alexander', email: 'leslie@example.com' },
  { name: 'George Smith', email: 'george@example.com' }
];

// withDelete = true means items not in newItems are removed
list.mingle(newItems, true);
`)]),p({class:"space-y-4 mt-8"},[c({class:"text-lg font-bold"},"Prepending Items"),i({class:"text-muted-foreground"},"Use prepend() to add new items at the beginning of the list, shifting existing items down."),v(`// Single item
list.prepend({ name: 'Zara', email: 'zara@example.com' });

// Multiple items
list.prepend([
  { name: 'Yanni', email: 'yanni@example.com' },
  { name: 'Xavier', email: 'xavier@example.com' }
]);
`)])]),U=[{label:"Large",buttonStyle:"primary",size:"lg"},{label:"Small",buttonStyle:"secondary",size:"sm"},{label:"Medium",buttonStyle:"destructive",size:"md"},{label:"XL",buttonStyle:"primary",size:"xl"},{label:"Right",buttonStyle:"ghost",type:"right"},{label:"Left",buttonStyle:"link",type:"left"}],O=({label:e,buttonStyle:a,size:n,type:d})=>l({text:e,class:`m-1 ${a}`,click:()=>new _({title:"Are you absolutely sure?",size:n,type:d},[o({class:"flex flex-col max-w-lg lg:p-4 space-y-8"},[new m({name:"popover-test",label:"Popover Test"},[new se]),new m({name:"dialog-test",label:"Dialog Test"},[l({click:()=>{new ie({title:"Are you absolutely sure?",description:"This action cannot be undone.",confirmTextLabel:"Save",confirmed:()=>{app.notify({icon:s.trash,title:"Action complete",description:"You confirmed your selection.",type:"destructive"})}}).open()}},"Confirm")])])]).open()}),Po=({size:e="md",type:a="center"})=>new _({title:"Report an Issue",icon:s.warning,description:"What area are you having problems with?",size:e,type:a,onSubmit:()=>console.log("Form submitted")},[o({class:"flex flex-col lg:p-4 space-y-8"},[N({legend:"Issue Details"},[o({class:"flex flex-auto w-full gap-4"},[new m({name:"area",label:"Area"},[T({required:!0,class:"border p-2 rounded-md w-full bg-background text-foreground",options:[{value:"billing",label:"Billing"},{value:"technical",label:"Technical"},{value:"account",label:"Account"},{value:"other",label:"Other"}],defaultValue:"billing"})]),new m({name:"security_level",label:"Security Level"},[T({required:!0,class:"border p-2 rounded-md w-full bg-background text-foreground",options:[{value:"severity_1",label:"Severity 1"},{value:"severity_2",label:"Severity 2"},{value:"severity_3",label:"Severity 3"}],defaultValue:"severity_2"})])]),new m({name:"subject",label:"Subject"},[C({type:"text",placeholder:"I need help with...",required:!0,class:"border p-2 rounded-md w-full bg-background text-foreground placeholder-muted-foreground"})]),new m({name:"description",label:"Description"},[E({placeholder:"Please include all information relevant to your issue.",required:!0,class:"border p-2 rounded-md w-full bg-background text-foreground placeholder-muted-foreground"})])])])]),me=({label:e,buttonStyle:a,size:n,type:d})=>l({text:e,class:`m-1 ${a}`,click:()=>Po({size:n,type:d}).open()}),Be=()=>[new ve({icon:s.ellipsis.vertical,groups:[[{icon:s.mapPin,label:"Track Item",value:"track-item"},{icon:s.trash,label:"Delete Item",value:"delete-item"}]],onSelect:e=>{console.log("Selected item from header:",e)}})],Mo=()=>new _({title:"Detail Example",description:"This is a detailed view of an item.",icon:s.information,size:"md",headerOptions:Be,hidePrimaryButton:!0},[ht([re({title:"Overview"},[F("Label","Value"),F("Date","2024-11-02"),o({class:"my-2 border-t"}),F("Status","Pending")]),re({title:"More Info"},[F("Description","This is a multi-line snippet."),F("Comments","No comments available.")])])]),jo=()=>l({text:"Detail Modal",variant:"outline",click:()=>Mo().open()}),Lo=()=>f({title:"Modals",description:"Displays modals or modal-like components with various sizes, forms, and header options."},[t({title:"Detail Modal Atoms",description:"Demonstrates usage of DetailBody, DetailSection, and SplitRow within a modal.",preview:[jo()],code:`
// detail-modal-example.js
import {  DetailBody, DetailSection, SplitRow  } from "@base-framework/ui/molecules";
import {  Modal  } from "@base-framework/ui/molecules";
import {  Icons  } from "@base-framework/ui/icons";

const DemoDetailModal = () =>
    new Modal({
        title: 'Detail Example',
        icon: Icons.information,
        size: 'md',
        hidePrimaryButton: true
    },
    [
        DetailBody([
            DetailSection({ title: 'Overview' }, [
                SplitRow('Label', 'Value'),
                SplitRow('Date', '2024-11-02'),
            ]),
            DetailSection({ title: 'More Info' }, [
                SplitRow('Description', 'This is a multi-line snippet.'),
            ])
        ])
    ]);
`}),t({title:"Header Options",description:"You can pass `headerOptions` as an array of atoms for the modal’s top-right actions. Below is an example with a DropdownMenu in the modal header.",preview:[l({text:"Open Modal with Header Options",variant:"secondary",click:()=>new _({title:"Modal with Header Options",icon:s.settings,headerOptions:Be,hidePrimaryButton:!0},[o({class:"p-4"},"This modal has an ellipsis menu in the header.")]).open()})],code:`
// header-options-example.js
import {  Modal  } from "@base-framework/ui/molecules";
import {  DropdownMenu  } from "@base-framework/ui/molecules";
import {  Icons  } from "@base-framework/ui/icons";

// Example header options
const DemoHeaderOptions = () => [
    new DropdownMenu({
        icon: Icons.ellipsis.vertical,
        groups: [
            [
                { icon: Icons.mapPin, label: 'Track Item', value: 'track-item' },
                { icon: Icons.trash,  label: 'Delete Item', value: 'delete-item' }
            ]
        ],
        onSelect: (selected) => {
            console.log("Selected item from header:", selected);
        }
    })
];

new Modal({
    title: 'Modal with Header Options',
    icon: Icons.settings,
    headerOptions: DemoHeaderOptions,  // pass the array here
    hidePrimaryButton: true
},
[
    // modal content...
]).open();
`}),t({title:"Extra Large Modal",description:"An extra large modal example.",preview:[O(U[3])],code:`
import {  Modal  } from "@base-framework/ui/molecules";
import {  Button  } from "@base-framework/ui/atoms";

/**
 * This creates a button that opens an XL modal.
 */
const ModalButton = ({ label, size }) => Button({
    text: label,
    click: () => new Modal({
        size: 'xl',
        title: 'Are you absolutely sure?'
    }).open()
});`}),t({title:"Large Modal",preview:[O(U[0])],code:`
import {  Modal  } from "@base-framework/ui/molecules";
import {  Button  } from "@base-framework/ui/atoms";

const ModalButton = ({ label, size }) => Button({
    text: label,
    click: () => new Modal({
        size: 'lg',
        title: 'Large Modal Example'
    }).open()
});`}),t({title:"Medium Modal",preview:[O(U[2])],code:`
import {  Modal  } from "@base-framework/ui/molecules";
import {  Button  } from "@base-framework/ui/atoms";

const ModalButton = ({ label, size }) => Button({
    text: label,
    click: () => new Modal({
        size: 'md',
        title: 'Medium Modal Example'
    }).open()
});`}),t({title:"Right Modal",preview:[O(U[4])],code:`
import {  Modal  } from "@base-framework/ui/molecules";
import {  Button  } from "@base-framework/ui/atoms";

const ModalButton = ({ label, type }) => Button({
    text: label,
    click: () => new Modal({
        type: 'right',
        title: 'Right Modal Example'
    }).open()
});`}),t({title:"Form Modal",preview:[me({label:"Form Modal",buttonStyle:"primary"})],code:`
import {  Modal  } from "@base-framework/ui/molecules";
import {  Button  } from "@base-framework/ui/atoms";
import {  Fieldset  } from "@base-framework/ui/atoms";
import { Div } from "@base-framework/atoms";
import {  Input, Textarea  } from "@base-framework/ui/atoms";
import {  FormField  } from "@base-framework/ui/molecules";

const ModalForm = ({ size = 'lg', type = 'center' }) => (
    new Modal({
        title: 'Report an Issue',
        size,
        type,
        onSubmit: () => console.log('Form submitted')
    }, [
        // ...
    ])
);
`}),t({title:"Right Form Modal",preview:[me({label:"Form Modal (Right)",buttonStyle:"primary",size:"md",type:"right"})],code:`
import {  Modal  } from "@base-framework/ui/molecules";
import {  Button  } from "@base-framework/ui/atoms";

const ModalForm = ({ type = 'right', size = 'md' }) => (
    new Modal({
        title: 'Report an Issue',
        type,
        size,
        onSubmit: () => console.log('Form submitted')
    }, [
        // ...
    ])
);
`})]),Fo=()=>f({title:"Navigations",description:"Navigations are components that help users move around the website or application."},[t({title:"Navigation Menu",description:"The navigation menu component is a simple navigation component that will create a horizontal menu.",preview:[o({class:"flex flex-auto flex-col w-full"},[new gt({options:[{label:"Examples",href:"docs/components/navigations/examples"},{label:"Mail",href:"docs/components/navigations/mail"},{label:"Dashboard",href:"docs/components/navigations/dashboard"},{label:"Tasks",href:"docs/components/navigations/tasks"},{label:"Playground",href:"docs/components/navigations/playground"},{label:"Forms",href:"docs/components/navigations/forms"},{label:"Music",href:"docs/components/navigations/music"},{label:"Authentication",href:"docs/components/navigations/authentication"}]})])],code:`import {  Button  } from "@base-framework/ui/organisms";
import {  Icons  } from "@base-framework/ui/icons";

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
})`}),t({title:"Inline Navigation",description:"The inline navigation component is a simple navigation component that can be used in a sidebar or app shell.",preview:[o({class:"flex flex-auto flex-col w-full border rounded-md max-w-[300px]"},[new bt({options:[{label:"Listen Now",href:"docs/components/navigations",icon:s.playing,exact:!0},{label:"Browse",href:"docs/components/navigations/browse",icon:s.square.grid},{label:"Radio",href:"docs/components/navigations/radio",icon:s.signal},{label:"Playlists",icon:s.list.down,options:[{label:"Recently Added",href:"docs/components/navigations/recently-added"},{label:"Recently Played",href:"docs/components/navigations/recently-played"},{label:"Top Songs",href:"docs/components/navigations/top-songs"},{label:"Top Albums",href:"docs/components/navigations/top-albums"}]},{group:"Frameworks",options:[{label:"Next.js",href:"docs/components/navigations/next"},{label:"SvelteKit",href:"docs/components/navigations/sveltekit"},{label:"Nuxt.js",href:"docs/components/navigations/nuxt"},{label:"Remix",href:"docs/components/navigations/remix"},{label:"Astro",href:"docs/components/navigations/astro"}]}]})])],code:`import {  Button  } from "@base-framework/ui/organisms";
import {  Icons  } from "@base-framework/ui/icons";

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
})`}),t({title:"Sidebar Menu",description:"The sidebar menu component is a navigation component that can be used in a sidebar or app shell.",preview:[o({class:"flex flex-auto flex-col w-full border rounded-md max-w-[300px]"},[wt({title:"Discover",options:[{label:"Listen Now",href:"docs/components/navigations",icon:s.playing,exact:!0},{label:"Browse",href:"docs/components/navigations/browse",icon:s.square.grid},{label:"Radio",href:"docs/components/navigations/radio",icon:s.signal},{group:"Library",options:[{label:"Playlists",href:"docs/components/navigations/playlists",icon:s.list.down},{label:"Songs",href:"docs/components/navigations/songs",icon:s.music},{label:"Made for You",href:"docs/components/navigations/made-for-you",icon:s.user.default},{label:"Artists",href:"docs/components/navigations/artists",icon:s.speaker.default},{label:"Albums",href:"docs/components/navigations/albums",icon:s.square.stack}]}]})])],code:`import {  Icons  } from "@base-framework/ui/icons";
import {  SidebarMenu  } from "@base-framework/ui/organisms";

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
`})]),$o=()=>f({title:"Notifications",description:"Displays a notification message to the user."},[t({title:"Default Notification",description:"This is a standard notification without any specific type.",preview:[new j({title:"Default Notification",description:"This is a default notification.",icon:s.information,duration:"infinite"})],code:`app.notify({
    title: 'Default Notification',
    description: 'This is a default notification.',
    icon: Icons.info,
    duration: 'infinite'
})`}),i({class:"text-muted-foreground"},'The notification can either be a link with an "href" attribute or a button with an "onClick" event.'),t({title:"Info Notification",description:"An informational notification to inform users about general information.",preview:[new j({title:"Heads up!",description:"You can add components to your app using the CLI.",icon:s.information,type:"info",duration:"infinite"})],code:`app.notify({
    title: 'Heads up!',
    description: 'You can add components to your app using the CLI.',
    icon: Icons.information,
    type: 'info',
    duration: 'infinite'
})`}),t({title:"Warning Notification",description:"A warning notification to caution the user about potential issues.",preview:[new j({title:"Warning!",description:"Please check your input before proceeding.",icon:s.warning,type:"warning",duration:"infinite"})],code:`app.notify({
    title: 'Warning!',
    description: 'Please check your input before proceeding.',
    icon: Icons.warning,
    type: 'warning',
    duration: 5000
})`}),t({title:"Destructive Notification",description:"A destructive notification to alert the user of a serious issue or error.",preview:[new j({title:"Error!",description:"Something went wrong. Please try again later.",icon:s.shield,type:"destructive",duration:"infinite"})],code:`app.notify({
    title: 'Error!',
    description: 'Something went wrong. Please try again later.',
    icon: Icons.error,
    type: 'destructive',
    duration: 'infinite'
})`}),t({title:"Success Notification",description:"A success notification to confirm a successful action or process.",preview:[new j({title:"Success!",description:"The action was successful.",icon:s.check,type:"success",duration:"infinite"})],code:`app.notify({
    title: 'Success!',
    description: 'The action was successful.',
    icon: Icons.check,
    type: 'success',
    duration: 'infinite'
})`}),t({title:"Notification with Actions",description:"This notification includes primary and secondary buttons for user actions.",preview:[new j({title:"Action Required",description:"Would you like to proceed with this action?",icon:s.information,type:"info",primary:"Proceed",primaryAction:()=>console.log(1),secondary:"Cancel",secondaryAction:()=>console.log(1),duration:"infinite"})],code:`app.notify({
    title: 'Action Required',
    description: 'Would you like to proceed with this action?',
    icon: Icons.question,
    type: 'info',
    primary: 'Proceed',
    primaryAction: () => alert('Primary action clicked!'),
    secondary: 'Cancel',
    secondaryAction: () => alert('Secondary action clicked!'),
    duration: 'infinite' // Notification will remain until user dismisses
})`}),i({class:"text-muted-foreground"},"Notifications will stack if multiple are triggered at the same time. The notification will remain visible until the specified duration has passed. If a notification duration is set to 'infinite', it must be manually dismissed by the user."),t({title:"Usage",description:"Call 'notify' on the global notification container to display notifications.",preview:[l({click:()=>{app.notify({title:"Notification Title",description:"This is a notification.",icon:s.information})}},"Show Notification")],code:`app.notify({
    title: 'Notification Title',
    description: 'This is a notification.',
    icon: Icons.warning,
    type: 'warning',
    duration: 5000 // in milliseconds, leave blank for the default 4 seconds, or use 'infinite' to keep it until dismissed
})`})]),Eo=()=>f({title:"Progress Bars",description:"Progress bars are a great way to show the progress of a task or process."},[t({title:"Usage",description:"Import the progress bar atom and use it in your components. The progress bar can be used to show the progress of a task or process.",preview:[new xt({cache:"progress",progress:20})],code:`import {  ProgressBar  } from "@base-framework/ui/atoms";

new ProgressBar({ cache: 'progress', progress: 20 })`}),t({title:"Circle Progress Bar",description:"The progress bar can also be displayed as a circle.",preview:[vt({cache:"progress",progress:50,class:"stroke-gray-300"})],code:`import {  ProgressBar  } from "@base-framework/ui/atoms";

new ProgressBar({ cache: 'progress', progress: 20 })`})]),Ro=ge({state:{loaded:!1},render(){return o({class:"flex flex-auto flex-col max-w-[350px]"},[o({class:"my-8"},[l({variant:"outline",click:()=>this.state.toggle("loaded")},"Toggle Loaded")]),o({class:"flex items-center bg-card rounded-md border shadow-md w-full max-w-md"},[o({class:"flex flex-auto gap-4 p-4",onState:["loaded",e=>e?[k({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN",size:"md"}),o({class:"flex flex-auto flex-col"},[r({class:"text-lg font-semibold text-foreground"},"Leslie Alexander"),i({class:"text-sm text-muted-foreground m-0"},"leslie.alexander@example.com")])]:[I({shape:"circle",width:"w-12",height:"h-12"}),o({class:"flex flex-auto flex-col gap-2"},[I({width:"w-3/4",height:"h-6"}),I({width:"w-1/2",height:"h-4"})])]]})])])}}),No=()=>f({title:"Skeletons",description:"Skeletons are components that are used to show a placeholder for content that is loading."},[t({title:"Usage",description:"The skeleton component is used to show a placeholder for content that is loading.",preview:[o({class:"flex flex-auto space-x-4 w-full max-w-64"},[I({shape:"circle",width:"w-10",height:"h-10"}),o({class:"flex flex-auto flex-col space-y-2"},[I({width:"w-3/4",height:"h-4"}),I({width:"w-1/2",height:"h-4"})])])],code:`import {  Skeleton  } from "@base-framework/ui/atoms";
import { Div } from '@base-framework/atoms';

Div({ class: 'flex flex-auto space-x-4 w-full max-w-64' }, [
    Skeleton({ shape: 'circle', width: 'w-10', height: 'h-10' }), // Circle skeleton for avatar
    Div({ class: 'flex flex-auto flex-col space-y-2' }, [
        Skeleton({ width: 'w-3/4', height: 'h-4' }), // Long rectangle for main text
        Skeleton({ width: 'w-1/2', height: 'h-4' })  // Shorter rectangle for subtext
    ])
])`}),t({title:"Skeleton Post",description:"This is a skeleton post.",preview:[o({class:"space-y-4 flex flex-auto flex-col w-full max-w-64"},[I({width:"w-full",height:"h-32",shape:"rectangle"}),o({class:"space-y-2"},[I({width:"w-3/4",height:"h-4"}),I({width:"w-1/2",height:"h-4"})])])],code:`import {  Skeleton  } from "@base-framework/ui/atoms";
import { Div } from '@base-framework/atoms';

Div({ class: 'space-y-4 flex flex-auto flex-col space-x-4 w-full max-w-64' }, [
    // Large rectangle for image or main content
    Skeleton({ width: 'w-full', height: 'h-32', shape: 'rectangle' }),

    // Text line placeholders
    Div({ class: 'space-y-2' }, [
        Skeleton({ width: 'w-3/4', height: 'h-4' }), // Longer text line
        Skeleton({ width: 'w-1/2', height: 'h-4' })  // Shorter text line
    ])
])`}),t({title:"Skeleton with Avatar Loading",description:"This example demonstrates a skeleton loading animation that transitions to an avatar and user info after 3 seconds.",preview:[new Ro],code:`import {  Skeleton  } from "@base-framework/ui/atoms";
import {  Avatar  } from "@base-framework/ui/molecules";
import { Jot } from "@base-framework/base";
import { Div, P, Span } from "@base-framework/atoms";
import {  Button  } from "@base-framework/ui/atoms";

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

LoadingAvatar();`})]),de=b((e,a)=>o({class:"py-4"},a)),Ho=()=>f({title:"Tabs",description:"Displays a tab or a component that looks like a tab."},[t({title:"Button Tab",description:"This is a button tab. The buttons to not route.",preview:[new pe({class:"mt-4 max-w-[400px]",options:[{label:"Preview",value:"preview",layout:de([])},{label:"Code",value:"code",layout:de([])}]})],code:`
import {  ButtonTab  } from "@base-framework/ui/organisms";

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
);`}),t({title:"Link Tab",description:"This is a link tab. The buttons route to a different page.",preview:[new yt({class:"max-w-[400px]",options:[{label:"Example 1",href:"docs/components/tabs/example-1",component:new $({class:"p-8"},"This is an example 1 tab panel.")},{label:"Example 2",href:"docs/components/tabs/example-2",component:new $({class:"p-8"},"This is an example 2 tab panel.")},{label:"Example 3",href:"docs/components/tabs/example-3",component:new $({class:"p-8"},"This is an example 3 tab panel.")}]})],code:`
import {  LinkTab  } from "@base-framework/ui/organisms";
import {  Panel  } from "@base-framework/ui/organisms";

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
);`}),t({title:"Tab Group",description:"This is a tab group. The buttons update the state.",preview:[new kt({options:[{label:"Music",value:"music"},{label:"Podcasts",value:"podcasts"},{label:"Live",value:"live"}],onSelect:e=>console.log(e)})],code:`import {  TabGroup  } from "@base-framework/ui/organisms";

new TabGroup({
    options: [
        { label: 'Music', value: 'music' },
        { label: 'Podcasts', value: 'podcasts' },
        { label: 'Live', value: 'live' }
    ],
    onSelect: (value) => console.log(value)
})`}),t({title:"Tab Navigation",description:"This is a tab navigation. The buttons update the state.",preview:[new Tt({options:[{label:"Example 1",href:"docs/components/tabs/example-1"},{label:"Example 2",href:"docs/components/tabs/example-2"},{label:"Example 3",href:"docs/components/tabs/example-3"}]})],code:`import {  TabGroup  } from "@base-framework/ui/organisms";

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
})`})]),zo=()=>f({title:"Tooltips",description:"Tooltips are small popups that appear when a user hovers over an element."},[t({title:"Usage",description:"Import the tooltip atom and use it in your components.",preview:[o({class:"flex gap-2 flex-wrap"},[A({content:"This is a tooltip."},[l("Hover me")])])],code:`import {  Button  } from "@base-framework/ui/atoms";
import {  Tooltip  } from "@base-framework/ui/atoms";

Tooltip({ content: 'This is a tooltip.' }, [
    Button('Hover me')
])`}),t({title:"Bottom Tooltip",description:"This will show the tooltip at the bottom of the target element.",preview:[o({class:"flex gap-2 flex-wrap"},[A({content:"This is a tooltip.",position:"bottom"},[l("Hover me")])])],code:`Tooltip({ content: 'This is a tooltip.', position: 'bottom' }, [
    Button('Hover me')
])`}),t({title:"Top-Right Tooltip",description:"This will show the tooltip at the top-right of the target element.",preview:[o({class:"flex gap-2 flex-wrap"},[A({content:"This is a tooltip.",position:"top-right"},[l("Hover me")])])],code:`Tooltip({ content: 'This is a tooltip.', position: 'top-right' }, [
    Button('Hover me')
])`}),t({title:"Top-Left Tooltip",description:"This will show the tooltip at the top-left of the target element.",preview:[o({class:"flex gap-2 flex-wrap"},[A({content:"This is a tooltip.",position:"top-left"},[l("Hover me")])])],code:`Tooltip({ content: 'This is a tooltip.', position: 'top-left' }, [
    Button('Hover me')
])`}),t({title:"Bottom-Right Tooltip",description:"This will show the tooltip at the bottom-right of the target element.",preview:[o({class:"flex gap-2 flex-wrap"},[A({content:"This is a tooltip.",position:"bottom-right"},[l("Hover me")])])],code:`Tooltip({ content: 'This is a tooltip.', position: 'bottom-right' }, [
    Button('Hover me')
])`}),t({title:"Bottom-Left Tooltip",description:"This will show the tooltip at the bottom-left of the target element.",preview:[o({class:"flex gap-2 flex-wrap"},[A({content:"This is a tooltip.",position:"bottom-left"},[l("Hover me")])])],code:`Tooltip({ content: 'This is a tooltip.', position: 'bottom-left' }, [
    Button('Hover me')
])`}),t({title:"Left Tooltip",description:"This will show the tooltip to the left of the target element.",preview:[o({class:"flex gap-2 flex-wrap"},[A({content:"This is a tooltip.",position:"left"},[l("Hover me")])])],code:`Tooltip({ content: 'This is a tooltip.', position: 'left' }, [
    Button('Hover me')
])`}),t({title:"Right Tooltip",description:"This will show the tooltip to the right of the target element.",preview:[o({class:"flex gap-2 flex-wrap"},[A({content:"This is a tooltip.",position:"right"},[l("Hover me")])])],code:`Tooltip({ content: 'This is a tooltip.', position: 'right' }, [
    Button('Hover me')
])`}),i({class:"text-muted-foreground text-sm mt-4"},"The tooltip position can be set to: top, top-right, top-left, bottom, bottom-right, bottom-left, left, right.")]),ue=(e,a,n)=>(n="Icons"+(n?"."+n:""),o({class:"flex flex-auto flex-col items-center gap-2 w-full max-w-[150px] h-[8.5rem] cursor-pointer"},[o({class:"flex flex-auto w-full h-full justify-center items-center flex-wrap rounded-lg border bg-card text-base shadow-sm hover:bg-muted/50",click:()=>{navigator.clipboard.writeText(`${n}.${a}`),app.notify({title:"Icon copied",description:`The icon '${n}.${a}' has been copied to your clipboard.`,icon:s.clipboard.checked})}},[x(e)]),o({class:"text-muted-foreground"},a)])),Pe=(e,a,n)=>{const d=typeof e=="object";d&&a.push(i({class:"text-muted-foreground"},"path: "+n+".{icon}"));const g=[];if(a.push(o({class:"flex flex-auto flex-wrap gap-2 my-8"},g)),d===!1)g.push(ue(e,n));else for(var H in e){if(e.hasOwnProperty(H)===!1)continue;const Y=e[H];if(typeof Y!="object"){g.push(ue(Y,H,n));continue}const Me=`${n}.${H}`;Pe(Y,a,Me)}},Uo=e=>{if(!e||typeof e!="object")return;const a=[];for(let[n,d]of Object.entries(e)){if(n==="parse")continue;a.push(oe({id:n.toLowerCase(),class:"text-2xl font-bold"},It.titleCase(n))),Pe(d,a,n)}return a},Oo=()=>f({title:"Icons",description:"The icons are from the Hericon library. They are SVG icons that can be used in your project. This icon set uses the outline style."},[S({href:"https://heroicons.com/",target:"_blank",class:"bttn link"},"link: Hericons"),t({title:"Icons",description:"This is an icon.",preview:[St({html:s.home})],code:`
import {  Icons  } from "@base-framework/ui/icons";
import { I } from '@base-framework/atoms';

export const HomeIcon = () => (
    I({ html: Icons.home} )
);`}),t({title:"Icon Atom",description:"An Icon is a helper atom that makes it easier to use icons in your project. ",preview:[x(s.home)],code:`
import {  Icon  } from "@base-framework/ui/atoms";

Icon(Icons.home);`}),t({title:"Icon Sizes",description:"Icons can be rendered in various sizes using the `class` property to apply Tailwind CSS classes. The following sizes are available: `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, and `3xl`.",preview:[o({class:"flex flex-wrap gap-4 items-center"},[o({class:"flex flex-col items-center justify-center"},[x({size:"xs"},s.home),r({class:"text-sm text-muted-foreground"},"xs")]),o({class:"flex flex-col items-center justify-center"},[x({size:"sm"},s.home),r({class:"text-sm text-muted-foreground"},"sm")]),o({class:"flex flex-col items-center justify-center"},[x({size:"md"},s.home),r({class:"text-sm text-muted-foreground"},"md")]),o({class:"flex flex-col items-center justify-center"},[x({size:"lg"},s.home),r({class:"text-sm text-muted-foreground"},"lg")]),o({class:"flex flex-col items-center justify-center"},[x({size:"xl"},s.home),r({class:"text-sm text-muted-foreground"},"xl")]),o({class:"flex flex-col items-center justify-center"},[x({size:"2xl"},s.home),r({class:"text-sm text-muted-foreground"},"2xl")]),o({class:"flex flex-col items-center justify-center"},[x({size:"3xl"},s.home),r({class:"text-sm text-muted-foreground"},"3xl")])])],code:`
import {  Icon  } from "@base-framework/ui/atoms";

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
Span('3X Large (16x16)')`}),o({class:"my-20"},[ae({class:"text-2xl font-bold"},"Default Icons"),i({class:"text-muted-foreground"},'A few of the icons have been saved to the "Icons" object. You can use these icons in your project. Click to copy the Icon path. Here is a list of the icons that are available:')]),Uo(s)]),qo=()=>f({title:"Introduction",description:"The App Shell project is an open-source versatile and modular platform, designed to speed up front-end application development using Tailwind CSS and Shadcn-inspired themes. It provides a comprehensive set of components and atoms created with the Base framework."},[p({class:"space-y-4"},[c({class:"text-lg font-bold"},"The App Shell"),i({class:"text-muted-foreground"},'The App Shell is the core that sets up the Configs, router, Service Worker, ENV, global "app" variable, and renders the "shell" that is used to add the additional pages.'),i({class:"text-muted-foreground"},"As a modular and scalable PWA (Progressive Web App), it offers easy installation across devices, making it suitable as a foundational framework for new projects. The project comes with PWA installation prompts for all devices."),i({class:"text-muted-foreground"},"Designed with accessibility, customization, and ease of use in mind, the App Shell accelerates setup, allowing developers to focus on creating functionality without reinventing the wheel.")]),p({class:"space-y-4 mt-12"},[c({class:"text-lg font-bold"},"Base UI"),i({class:"text-muted-foreground"},{html:'The <a class="underline" href="https://github.com/chrisdurfee/ui" target="_blank">@base-framework/ui</a> npm package is a collection of atoms and components that are designed to be used by the app shell. This package has atoms, molecules, organisms, icons, templates, and pages. This package is open source and can be used by any project.'})]),p({class:"space-y-4 mt-12"},[c({class:"text-lg font-bold mt-12"},"Authentication"),i('The shell supports auth flows and has a "signed in" and signed out" mode. It has a few default page types including a login page. The implentation of the auth flow is up to the developer.')]),p({class:"space-y-4 mt-12"},[c({class:"text-lg font-bold mt-12"},"Examples"),i({class:"text-muted-foreground"},"The following examples demonstrate the use of various components and atoms within the App Shell framework that are designs from Shadcn.")]),o({class:"items-start justify-center gap-6 rounded-lg pt-0 md:p-8 md:mt-6 md:grid lg:grid-cols-2 xl:grid-cols-2"},[o({class:"col-span-2 grid items-start gap-6 lg:col-span-1"},[ke(),Ie(),Te()]),o({class:"col-span-2 grid items-start gap-6 lg:col-span-1"},[Ae({members:[{name:"Leslie Alexander",email:"leslie.alexander@example.com",image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"owner",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Michael Foster",email:"michael.foster@example.com",image:"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"member",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Dries Vincent",email:"dries.vincent@example.com",image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"owner",status:"online"}]}),De({link:"http://example.com/link/to/document",people:[{name:"Leslie Alexander",email:"leslie.alexander@example.com",image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"owner",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Michael Foster",email:"michael.foster@example.com",image:"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"member",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Dries Vincent",email:"dries.vincent@example.com",image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"owner",status:"online"}]}),Se({startDate:"2023-01-23"}),Ce()])]),p({class:"space-y-4 mt-12"},[c({class:"text-lg font-bold"},"Theme and Styling"),i({class:"text-muted-foreground"},[r("This project is powered by Tailwind CSS, providing a highly customizable, utility-first approach to styling. Additionally, the theme draws inspiration from "),S({href:"https://github.com/shadcn",class:"underline",target:"_blank"},"Shadcn’s UI component library"),r(", combining best practices for consistency and flexibility.")])]),p({class:"space-y-4 mt-12"},[c({class:"text-lg font-bold"},"Icons"),i({class:"text-muted-foreground"},[r("This project utilizes Heroicons, a comprehensive icon set provided by the Tailwind Labs team. These icons are fully customizable and designed to fit seamlessly within Tailwind-based applications.")]),i({class:"text-muted-foreground"},[r("For more details on available icons, visit the "),S({href:"https://heroicons.com",class:"underline",target:"_blank"},"Heroicons website"),r(".")])]),p({class:"space-y-4 mt-12"},[c({class:"text-lg font-bold"},"Components and Atoms"),i({class:"text-muted-foreground"},[r("Leveraging the Base framework, this project provides a comprehensive set of reusable components and atoms. Inspired by projects like "),S({href:"https://github.com/shadcn/ui",class:"underline",target:"_blank"},"shadcn/ui"),r(", the components are crafted to balance flexibility and simplicity, allowing developers to integrate pre-designed elements or customize them as needed.")]),i({class:"text-muted-foreground"},[r("You can explore components like "),S({href:"/docs/components/buttons",class:"underline"},"Buttons"),r(", "),S({href:"/docs/components/tabs",class:"underline"},"Tabs"),r(", and "),S({href:"/docs/components/forms",class:"underline"},"Forms"),r(" to quickly build complex UIs without starting from scratch.")])]),p({class:"space-y-4 mt-12"},[c({class:"text-lg font-bold"},"Development Guidelines"),i({class:"text-muted-foreground"},[r("Modules are an essential part of the App Shell's extensibility. You can add new features by creating modules in the modules folder and registering them in the "),S({href:"/docs/imported-modules",class:"underline"},"imported-modules.js"),r(" file. This structure supports modularity, making it easier to maintain and scale projects.")]),i({class:"text-muted-foreground"},[r("Each module includes its own routes, links, and options, as demonstrated in the example provided. This architecture ensures that modules are self-contained and can be easily integrated into any project using the App Shell framework.")]),v(`import {  Icons  } from "@base-framework/ui/icons";
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
});`)]),p({class:"space-y-4 mt-12"},[c({class:"text-lg font-bold"},"Contributors and Community"),i({class:"text-muted-foreground"},[r("The App Shell is an open-source project, and contributions from the community are welcome. The project is maintained by a dedicated developer who aims to continuously enhance its functionality.")]),i({class:"text-muted-foreground"},[r("For information on contributing, check the "),S({href:"https://github.com/chrisdurfee/next-app-shell",class:"underline",target:"_blank"},"GitHub repository"),r(" and join the community discussions to collaborate and innovate.")])])]),Wo=e=>o({class:"flex flex-auto flex-col items-center gap-2 max-w-[150px] h-[8.5rem] cursor-pointer"},[o({class:`flex flex-auto w-full h-full min-h-[136px] justify-center items-center flex-wrap rounded-lg border text-base shadow-sm ${e.class}`,click:()=>{navigator.clipboard.writeText(`${e.class}`),app.notify({title:"Color copied",description:`The color '${e.class}' has been copied to your clipboard.`,icon:s.clipboard.checked})}}),o({class:"text-sm text-muted-foreground"},e.var)]),y=(e,a)=>p({class:"flex flex-auto flex-col gap-2"},[i({class:"text-base text-muted-foreground"},e),o({class:"flex flex-auto flex-wrap gap-2 my-2",map:[a,Wo]})]),Go=e=>o({class:"flex flex-auto flex-col gap-12"},[oe({class:"text-2xl font-bold"},"Theme Toggle"),new Ct,oe({class:"text-2xl font-bold"},"Color Guide"),y("Default background color of <body />...etc",[{var:"--backround",class:"bg-backround"},{var:"--foreground",class:"bg-foreground"}]),y("Muted backgrounds such as <TabsList />, <Skeleton /> and <Switch />",[{var:"--muted",class:"bg-muted"},{var:"--muted-foreground",class:"bg-muted-forground"}]),y("Background color for <Card />",[{var:"--card",class:"bg-card"},{var:"--card-foreground",class:"bg-card-foreground"}]),y("Background color for popovers such as <DropdownMenu />, <HoverCard />, <Popover />",[{var:"--popover",class:"bg-popover"},{var:"--popover-foreground",class:"bg-popover-foreground"}]),y("Default border color",[{var:"--border",class:"bg-border"}]),y("Border color for inputs such as <Input />, <Select />, <Textarea />",[{var:"--input",class:"bg-input"}]),y("Primary colors for <Button />",[{var:"--primary",class:"bg-primary"},{var:"--primary-foreground",class:"bg-primary-foreground"}]),y("Secondary colors for <Button />",[{var:"--secondary",class:"bg-secondary"},{var:"--secondary-foreground",class:"bg-secondary-foreground"}]),y("Used for accents such as hover effects on <DropdownMenuItem>, <SelectItem>...etc",[{var:"--accent",class:"bg-accent"},{var:"--accent-foreground",class:"bg-accent-foreground"}]),y('Used for destructive actions such as <Button variant="destructive">',[{var:"--destructive",class:"bg-destructive"},{var:"--destructive-foreground",class:"bg-destructive-foreground"}]),y('Used for warning actions such as <Button variant="warning">',[{var:"--warning",class:"bg-warning"},{var:"--warning-foreground",class:"bg-warning-foreground"}]),y("Used for focus ring",[{var:"--ring",class:"bg-ring"}]),y("Border radius for card, input and buttons",[{var:"--radius",class:"bg-radius"}])]),_o=()=>f({title:"Theme",description:"The theme is using Tailwind CSS and is based on Shadcn UI. The theme is customizable and can be extended. It comes with light and dark theme support."},[i({class:"text-muted-foreground"},{html:'To learn about Shandcn UI, visit the official documentation: <a href="https://ui.shadcn.com/docs/theming" class="underline" target="_blank">Shadcn Documentation'}),o({class:"my-20"},[ae({class:"text-2xl font-bold"},"Default Styles"),i({class:"text-muted-foreground"},"The default styles are defined in the Tailwind CSS configuration file and in the base CSS file. Here's the list of variables available for customization:")]),Go(),o({class:"flex flex-auto flex-col gap-2 mt-20"},[o({class:"flex flex-auto flex-col gap-2"},[c({class:"text-2xl font-bold"},"Text Sizes"),i({class:"text-muted-foreground text-3xl"},"Text-3xl A test sentence."),i({class:"text-muted-foreground text-2xl"},"Text-2xl A test sentence."),i({class:"text-muted-foreground text-xl"},"Text-xl A test sentence."),i({class:"text-muted-foreground text-lg"},"Text-lg A test sentence."),i({class:"text-muted-foreground text-base"},"Text-base A test sentence."),i({class:"text-muted-foreground text-sm"},"Text-sm A test sentence."),i({class:"text-muted-foreground text-xs"},"Text-xs A test sentence.")])])]),u=(e,a,n)=>({uri:e,title:a,component:n}),Yo=e=>[u(`${e}`,"Introduction",qo),u(`${e}/theme`,"Theme",_o),u(`${e}/icons`,"Icons",Oo),u(`${e}/components/buttons*`,"Buttons",Ht),u(`${e}/components/badges*`,"Badges",Et),u(`${e}/components/tabs*`,"Tabs",Ho),u(`${e}/components/modals*`,"Modals",Lo),u(`${e}/components/notifications*`,"Notifications",$o),u(`${e}/components/dialogs*`,"Modals",wo),u(`${e}/components/cards*`,"Cards",so),u(`${e}/components/calendars*`,"Calendars",Ut),u(`${e}/components/avatars*`,"Avatars",$t),u(`${e}/components/inputs*`,"Inputs",Ao),u(`${e}/components/forms*`,"Forms",Io),u(`${e}/components/alerts*`,"Alerts",Ft),u(`${e}/components/comboboxes*`,"Comboboxes",ro),u(`${e}/components/lists*`,"Lists",Bo),u(`${e}/components/data-tables*`,"Data Tables",uo),u(`${e}/components/breadcrumbs*`,"Breadcrumbs",Nt),u(`${e}/components/navigations*`,"Navigations",Fo),u(`${e}/components/progress-bars*`,"Progress Bars",Eo),u(`${e}/components/skeletons*`,"Skeletons",No),u(`${e}/components/tooltips*`,"Tooltips",zo),u(`${e}/components/dropdown-menus*`,"Dropdown Menus",xo)],Jo=e=>[{href:`${e}`,label:"Introduction",exact:!0},{href:`${e}/theme`,label:"Theme",exact:!0},{href:`${e}/icons`,label:"Icons"},{group:"Components",options:[{label:"Buttons",href:`${e}/components/buttons`},{label:"Badges",href:`${e}/components/badges`},{label:"Tabs",href:`${e}/components/tabs`},{label:"Modals",href:`${e}/components/modals`},{label:"Notifications",href:`${e}/components/notifications`},{label:"Dialogs",href:`${e}/components/dialogs`},{label:"Cards",href:`${e}/components/cards`},{label:"Calendars",href:`${e}/components/calendars`},{label:"Avatars",href:`${e}/components/avatars`},{label:"Inputs",href:`${e}/components/inputs`},{label:"Forms",href:`${e}/components/forms`},{label:"Alerts",href:`${e}/components/alerts`},{label:"Comboboxes",href:`${e}/components/comboboxes`},{label:"Lists",href:`${e}/components/lists`},{label:"Data Tables",href:`${e}/components/data-tables`},{label:"Breadcrumbs",href:`${e}/components/breadcrumbs`},{label:"Navigations",href:`${e}/components/navigations`},{label:"Progress Bars",href:`${e}/components/progress-bars`},{label:"Skeletons",href:`${e}/components/skeletons`},{label:"Tooltips",href:`${e}/components/tooltips`},{label:"Dropdown Menus",href:`${e}/components/dropdown-menus`}]}],Vo=b((e,a)=>{let n=e.span?"span-"+e.span:"";return e.class="panel rounded-xl border bg-card text-card-foreground shadow "+n,o(e,a)}),Ko=b((e,a)=>{const n=new Array(18).fill(1);return o({class:"grid-container",map:[n,()=>Vo()],...e})}),Qo=()=>new Dt({backHref:"aside/"},[new $([o([R([fe("Overlay")]),o({class:"contained"},[Ko()])])])]),Zo=e=>[{uri:`${e}/overlay-test`,component:Qo()}],q="docs",ea=()=>new At({title:"Documentation",basePath:q,routes:Zo(q),switch:Yo(q),links:Jo(q)});export{ea as DocumentationPage,ea as default};
