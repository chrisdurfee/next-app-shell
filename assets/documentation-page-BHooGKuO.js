import{A as Re}from"./aside-page-BBAUMWAJ.js";import{w as z,m as o,R as T,o as we,D as G,H as V,d as P,Q as u,p as He,q as We,I as i,U as B,a as re,b as c,r as Ue,e as _e,C as ye,A as F,s as w,y as r,_ as M,P as Q,T as k,B as l,F as J,L as Ge,t as Ve,u as me,f as ae,v as Qe,x as Y,z as Je,E as j,J as b,K as $,M as Ye,N as le,W as Ke,Y as S,Z as N,$ as y,a0 as K,a1 as ce,G as Ze,X as O,a2 as Xe,a3 as ke,a4 as Te,a5 as se,a6 as ne,a7 as et,a8 as X,a9 as tt,aa as ot,ab as at,ac as st,ad as nt,ae as it,af as rt,ag as lt,ah as ct,ai as dt,aj as ut,ak as mt,al as E,S as I,h as Se,i as _,am as ie,an as pt,O as ft,l as gt}from"./index-DstYicIn.js";import{D as ht,C as de,U as bt}from"./data-table-Duqx9FBw.js";import{S as xt}from"./sidebar-menu-mNJ9aGLd.js";import{T as vt}from"./tab-group-DyMlB2TJ.js";import{T as A}from"./tooltip-Cx2tErM0.js";const wt=e=>V({class:"inline-flex flex-auto items-center justify-center whitespace-nowrap rounded-sm text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm",dataSet:["selected",["state",e.value,"active"]]},[P({class:"flex flex-auto justify-center items-center px-3 py-1.5",onSet:["selected",{selected:e.value}],click:t=>e.callBack(e.value)},e.label)]),yt=(e,t)=>(e.callBack=t,wt(e)),kt=e=>we({class:`tab items-center justify-center rounded-md bg-muted p-1 text-muted-foreground ${e.class}`},[G({class:"flex flex-auto flex-row",map:[e.options,t=>yt(t,e.callBack)]})]);class Ce extends z{render(){const t=this.select.bind(this);return o({class:""},[kt({class:this.class,options:this.options,callBack:t}),T({class:"tab-content",onState:["selected",this.updateContent.bind(this)]})])}getFirstValue(){var t;return(t=this.options[0])==null?void 0:t.value}update(){const t=this.state.get("selected");this.select(null),this.select(t)}select(t){this.state.selected=t}updateContent(t){const a=this.options;if(!a||a.length<1)return;const n=a[0];for(const d of a)if(d.value===t)return d.layout;return n.layout}setupStates(){const t=this.callBack,a=typeof t;return{selected:{state:this.getFirstValue(),callBack(n){a==="function"&&t(n)}}}}}const Ie=u((e,t)=>He({class:"flex p-4 min-h-[350px] max-h-[650px] overflow-x-auto rounded-lg border bg-muted whitespace-break-spaces break-all cursor-pointer"},[We({class:"font-mono flex-auto text-sm text-wrap",click:()=>{navigator.clipboard.writeText(t[0].textContent),app.notify({title:"Code copied",description:"The code has been copied to your clipboard.",icon:i.clipboard.checked})}},t)])),Tt=u((e,t)=>o({class:"flex flex-auto p-4 min-h-[350px] max-h-[650px] overflow-x-auto rounded-lg border bg-card"},[o({class:"preview flex flex-auto justify-center items-center"},t)])),pe=u((e,t)=>o({class:"py-4"},t)),St=e=>new Ce({class:"mt-4 max-w-[400px]",options:[{label:"Preview",value:"preview",layout:pe([Tt(e.preview)])},{label:"Code",value:"code",layout:pe([Ie(e.code)])}]}),Ct=u(({title:e,description:t})=>B({class:"flex flex-col"},[re({class:"scroll-m-20 text-2xl font-bold tracking-tight"},e),t&&c({class:"text-base text-muted-foreground py-2 max-w-[700px]"},t)])),s=u((e,t)=>T({class:"grid py-4"},[Ct({title:e.title,description:e.description}),St({preview:e.preview,code:e.code})]));class It extends Ue{render(){return _e([o({class:"contained px-4 flex flex-auto flex-col"},this.children)])}}const jt=u(({title:e,description:t})=>B({class:"flex flex-col"},[ye({class:"scroll-m-20 text-3xl font-bold tracking-tight"},e),c({class:"text-base text-muted-foreground py-2 max-w-[700px]"},t)])),At=u((e,t)=>o({class:"contained py-8"},[jt(e),T({class:"pb-12 pt-8"},t)])),f=u((e,t)=>new It([At(e,t)])),Dt=()=>f({title:"Alerts",description:"Alerts are used to provide feedback to the user about the outcome of an action or to inform them of important information."},[s({title:"Default Alert",description:"This is a standard alert without any specific type.",preview:[F({title:"Notice",description:"This is a default alert without a specific type.",icon:i.information})],code:`import { Alert } from "@components/molecules/alert.js";
import { Icons } from "@components/icons/icons.js";

Alert({
    title: 'Notice',
    description: 'This is a default alert without a specific type.',
    icon: Icons.information
})`}),s({title:"Info Alert",description:"An info alert that provides general information to the user.",preview:[F({title:"Heads up!",description:"You can add components to your app using the CLI.",icon:i.information,type:"info"})],code:`Alert({
    title: 'Heads up!',
    description: 'You can add components to your app using the CLI.',
    icon: Icons.information,
    type: 'info'
})`}),s({title:"Success Alert",description:"A success alert to inform the user of a successful action.",preview:[F({title:"Success!",description:"Your changes have been saved successfully.",icon:i.check,type:"success"})],code:`Alert({
    title: 'Success!',
    description: 'Your changes have been saved successfully.',
    icon: Icons.check,
    type: 'success'
})`}),s({title:"Warning Alert",description:"A warning alert to caution the user about something important.",preview:[F({title:"Warning!",description:"Please check your input before proceeding.",icon:i.warning,type:"warning"})],code:`Alert({
    title: 'Warning!',
    description: 'Please check your input before proceeding.',
    icon: Icons.warning,
    type: 'warning'
})`}),s({title:"Destructive Alert",description:"A destructive alert to inform the user of an error or serious issue.",preview:[F({title:"Error!",description:"Something went wrong. Please try again later.",icon:i.shield,type:"destructive"})],code:`Alert({
    title: 'Error!',
    description: 'Something went wrong. Please try again later.',
    icon: Icons.error,
    type: 'destructive'
})`})]),Bt=()=>f({title:"Avatars",description:"Avatars are used to represent users or objects visually, with customizable sizes and optional status indicators."},[s({title:"Extra Small Avatar (xs)",description:"An extra small avatar for compact spaces.",preview:[w({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN",size:"xs"})],code:"Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: 'xs' })"}),s({title:"Small Avatar (sm)",description:"A small avatar suitable for lists and compact layouts.",preview:[w({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN",size:"sm"})],code:"Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: 'sm' })"}),s({title:"Medium Avatar (md)",description:"A medium-sized avatar, often used for standard profile images.",preview:[w({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN",size:"md"})],code:"Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: 'md' })"}),s({title:"Large Avatar (lg)",description:"A large avatar for prominent profile displays.",preview:[w({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN",size:"lg"})],code:"Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: 'lg' })"}),s({title:"Extra Large Avatar (xl)",description:"An extra-large avatar for detailed user profile sections.",preview:[w({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN",size:"xl"})],code:"Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: 'xl' })"}),s({title:"2x Extra Large Avatar (2xl)",description:"A double extra-large avatar for large displays.",preview:[w({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN",size:"2xl"})],code:"Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: '2xl' })"}),s({title:"3x Extra Large Avatar (3xl)",description:"A triple extra-large avatar for the largest profile displays.",preview:[w({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN",size:"3xl"})],code:"Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: '3xl' })"}),s({title:"Avatar with Name and Subtitle",description:"Display an avatar alongside a name and subtitle for user identification.",preview:[o({class:"flex items-center gap-4 p-4 bg-card rounded-md border shadow-md"},[w({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN",size:"lg"}),o({},[r({class:"text-lg font-semibold text-foreground"},"Leslie Alexander"),c({class:"text-sm text-muted-foreground"},"leslie.alexander@example.com")])])],code:`Div({ class: 'flex items-center gap-4 p-4 bg-card rounded-md border shadow-md' }, [
    Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: 'lg' }),
    Div({}, [
        Span({ class: 'text-lg font-semibold text-foreground' }, 'Leslie Alexander'),
        P({ class: 'text-sm text-muted-foreground' }, 'leslie.alexander@example.com')
    ])
])`}),s({title:"Avatar with Online Status",description:"Displays an avatar with a small online status indicator.",preview:[o({class:"relative flex items-center gap-4 p-4 bg-card rounded-md border shadow-md"},[o({class:"relative"},[w({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN",size:"lg"}),o({class:"absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 rounded-full"})]),o({},[r({class:"text-lg font-semibold text-foreground"},"Leslie Alexander"),c({class:"text-sm text-muted-foreground"},"leslie.alexander@example.com")])])],code:`Div({ class: 'relative flex items-center gap-4 p-4 bg-card rounded-md border shadow-md' }, [
    Div({ class: 'relative' }, [
        Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: 'lg' }),
        Div({ class: 'absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 rounded-full' }) // Online indicator
    ]),
    Div({}, [
        Span({ class: 'text-lg font-semibold text-foreground' }, 'Leslie Alexander'),
        P({ class: 'text-sm text-muted-foreground' }, 'leslie.alexander@example.com')
    ])
])`})]),fe={gray:{backgroundColor:"bg-gray-50",textColor:"text-gray-600",ringColor:"ring-gray-500/10"},red:{backgroundColor:"bg-red-50",textColor:"text-red-700",ringColor:"ring-red-600/10"},yellow:{backgroundColor:"bg-yellow-50",textColor:"text-yellow-800",ringColor:"ring-yellow-600/20"},green:{backgroundColor:"bg-green-50",textColor:"text-green-700",ringColor:"ring-green-600/20"},blue:{backgroundColor:"bg-blue-50",textColor:"text-blue-700",ringColor:"ring-blue-700/10"},indigo:{backgroundColor:"bg-indigo-50",textColor:"text-indigo-700",ringColor:"ring-indigo-700/10"},purple:{backgroundColor:"bg-purple-50",textColor:"text-purple-700",ringColor:"ring-purple-700/10"},pink:{backgroundColor:"bg-pink-50",textColor:"text-pink-700",ringColor:"ring-pink-700/10"},primary:{backgroundColor:"bg-primary",textColor:"text-primary-foreground",ringColor:"ring-primary/10"},secondary:{backgroundColor:"bg-secondary",textColor:"text-secondary-foreground",ringColor:"ring-secondary/10"},destructive:{backgroundColor:"bg-destructive",textColor:"text-destructive-foreground",ringColor:"ring-destructive/10"},warning:{backgroundColor:"bg-warning",textColor:"text-warning-foreground",ringColor:"ring-warning/10"},outline:{backgroundColor:"bg-background",textColor:"text-primary",ringColor:"ring-input"},ghost:{backgroundColor:"bg-background",textColor:"text-primary",ringColor:"ring-background"},link:{backgroundColor:"bg-background",textColor:"text-primary",ringColor:"ring-background"}},Lt=e=>fe[e]||fe.gray,Pt=e=>{const{backgroundColor:t,textColor:a,ringColor:n}=Lt(e);return`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors ${t} ${a} ${n}`},x=u((e,t)=>{const a=Pt(e==null?void 0:e.type);return r({...e,class:a},t)}),Mt=()=>f({title:"Badges",description:"Badges can be used to display a status or a count."},[s({title:"Badge",description:"This is a badge.",preview:[o({class:"flex gap-2 flex-wrap"},[x({type:"gray"},"Text"),x({type:"red"},"Text"),x({type:"yellow"},"Text"),x({type:"green"},"Text"),x({type:"blue"},"Text"),x({type:"indigo"},"Text"),x({type:"purple"},"Text"),x({type:"pink"},"Text"),x({type:"primary"},"Text"),x({type:"secondary"},"Text"),x({type:"destructive"},"Text"),x({type:"warning"},"Text"),x({type:"outline"},"Text"),x({type:"ghost"},"Text"),x({type:"link"},"Text")])],code:`
import { Button } from '@components/atoms/badges/badges.js';
import { Atom } from '@base-framework/base';

export const PrimaryBadge = Atom((props, children)) => (
    Badge({ ...props, type: 'gray' }, children)
);`})]),Ft=(e,t)=>k({href:e,"aria-current":t==="Breadcrumb"?"page":null,class:"text-muted-foreground hover:text-foreground"},[r(t)]),Et=()=>r({class:"mx-2 text-muted-foreground","aria-hidden":!0,html:">"}),$t=e=>o({class:"flex items-center"},[e.href?Ft(e.href,e.label):r(e.label),e.separator&&Et()]),Nt=M({setData(){return new Q({items:this.items||[]})},render(){return we({"aria-label":"Breadcrumb",class:"flex items-center space-x-1 text-sm"},[o({role:"list",class:"flex items-center",for:["items",(e,t)=>$t({href:e.href,label:e.label,separator:t<this.data.items.length-1})]})])}}),zt=[{href:"/",label:"Home"},{href:"/components",label:"Components"},{label:"Breadcrumb"}],qt=()=>f({title:"Breadcrumbs",description:"Breadcrumbs are a navigation aid that helps users understand their location within a website or application."},[s({title:"Usage",description:"To use the Breadcrumb component, import it and provide an array of items. Each item can have a label and an optional href.",preview:[new Nt({items:zt})],code:`import { Breadcrumb } from "@components/molecules/breadcrumb/breadcrumb.js";

new Breadcrumb({ items: [
    { href: '/', label: 'Home' },
    { href: '/components', label: 'Components' },
    { label: 'Breadcrumb' } // Last item, no href needed
] })`})]),Ot=()=>f({title:"Button",description:"Displays a button or a component that looks like a button."},[s({title:"Usage",description:"Import the button atom and use it in your components. This platform has variants for different use cases. The variant can be set using the `variant` prop.",preview:[l({variant:"primary"},"Click Me")],code:`import { Button } from '@components/atoms/buttons/buttons.js';

Button({ ...props, variant: 'secondary' }, primary)`}),B({class:"flex flex-col py-8"},[J({class:"text-3xl font-bold tracking-tight border-b pb-2"},"Variants")]),s({title:"Primary Button",description:"This is a primary button.",preview:[l({variant:"primary"},"Click Me")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const PrimaryButton = Atom((props, children) => (
    Button({ ...props, variant: 'primary' }, children)
);`}),s({title:"Secondary Button",preview:[l({variant:"secondary"},"Secondary")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const SecondaryButton = Atom((props, children) => (
    Button({ ...props, variant: 'secondary' }, children)
);`}),s({title:"Destructive Button",preview:[l({variant:"destructive"},"Destructive")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const DestructiveButton = Atom((props, children) => (
    Button({ ...props, variant: 'destructive' }, children)
);`}),s({title:"Warning Button",preview:[l({variant:"warning"},"Warning")],code:`import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const WarningButton = Atom((props, children) => (
    Button({ ...props, variant: 'warning' }, children)
);`}),s({title:"Outline Button",preview:[l({variant:"outline"},"Outline")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const OutlineButton = Atom((props, children) => (
    Button({ ...props, variant: 'outline' }, children)
);`}),s({title:"Ghost Button",preview:[l({variant:"ghost"},"Ghost")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const GhostButton = Atom((props, children) => (
    Button({ ...props, variant: 'ghost' }, children)
);`}),s({title:"Link Button",preview:[l({variant:"link"},"Link")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const LinkButton = Atom((props, children) => (
    Button({ ...props, variant: 'link' }, children)
);`}),s({title:"Icon Button",description:"Displays a button with an icon.",preview:[l({variant:"icon",icon:i.home})],code:`import { Button } from '@components/atoms/buttons/buttons.js';
import { Icons } from '@components/icons/icons.js';
import { Atom } from '@base-framework/base';

export const IconButton = Atom((props) => (
    Button({ ...props, variant: 'icon', icon: Icons.home })
);`}),s({title:"With Icon Button",preview:[l({variant:"withIcon",icon:i.home},"With Icon")],code:`import { Button } from '@components/atoms/buttons/buttons.js';
import { Icons } from '@components/icons/icons.js';

Button({ variant: 'withIcon', icon: Icons.home }, 'With Icon')`}),s({title:"Loading Button",preview:[Ge("With Icon")],code:`import { LoadingButton } from '@components/atoms/buttons/buttons.js';

LoadingButton('With Icon')`})]),Rt=()=>ae.formatTime("",24),Ht=()=>f({title:"Calendars",description:"This is the calendar component documentation."},[s({title:"Usage",description:"This is how you can use the calendar component.",preview:[new Ve],code:`@components/organisms/calendar/calendar.js';

new Calendar()`}),s({title:"Dynamic Time",description:"This is how you can use the calendar component.",preview:[new me({filter:()=>{let e="Morning";const t=Rt();return t>="18:00:00"?e="Evening":t>="12:00:00"&&(e="Afternoon"),`Good ${e}`}})],code:`import { DateTime } from "@base-framework/base";
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
})`}),s({title:"Dynamic Local Time by Time Frame",description:"This will show the time frame based on the local time. This will update the time frame every minute to keep the time frame updated.",preview:[new me({dateTime:"2024-11-04T18:00:00",filter(e){const t=ae.getLocalTime(e,!0);return ae.getTimeFrame(t)}})],code:`import { DateTime } from "@base-framework/base";
import { DynamicTime } from "@base-framework/organisms";

new DynamicTime({
    dateTime: '2024-11-04T18:00:00',
    filter(date)
    {
        // convert to local time
        const localTime = DateTime.getLocalTime(date, true);
        return DateTime.getTimeFrame(localTime);
    }
})`})]),Wt=u((e,t)=>o({...e,class:"flex flex-auto flex-col space-y-2"},t)),Ut=u((e,t)=>Qe({...e,class:"flex auto text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"},t)),_t=u((e,t)=>c({...e,class:"text-sm text-muted-foreground"},t)),Gt=u((e,t)=>c({...e,class:"text-sm text-destructive"},t)),Vt=e=>e.tag==="input"||e.tag==="select"||e.tag==="textarea",je=(e,t,a)=>e.map(n=>(n.children&&n.children.length>0&&(n.children=je(n.children,t,a)),n.required&&Vt(n)?{...n,aria:{invalid:["hasError"]},invalid:a,input:t}:n)),Qt=u((e,t)=>{const d=je(t,h=>{h.target.checkValidity()&&e.setError(null)},h=>{e.setError(h.target.validationMessage)});return o({...e,class:"w-full"},d)}),p=Y({state(){return{error:null,hasError:!1,value:this.defaultValue??""}},render(){const e=this.name,t=this.getId(`${e}`),{label:a,description:n}=this,d=h=>{this.state.error=h,this.state.hasError=!!h};return o({class:"flex flex-auto space-y-4"},[Wt([Ut({htmlFor:t},a),Qt({id:t,name:e,value:this.state.value,setError:d},this.children),n&&_t({id:this.getId("description")},n),o({onState:["error",h=>h&&Gt(h)]})])])}}),Jt=(e,t=null)=>{e.target.checkValidity()&&(e.preventDefault(),t&&t(e))},D=u((e,t)=>Je({...e,submit:a=>Jt(a,e.submit),class:`space-y-8 w-full ${e.class??""}`},t)),L=({title:e,description:t})=>B({class:"text-left"},[J({class:"font-semibold tracking-tight text-2xl"},e),c({class:"text-sm text-muted-foreground"},t)]),Yt=()=>o({class:"flex items-center justify-center gap-4"},[l({variant:"outline",class:"gap-2 w-full",click:()=>console.log("Sign in with Github"),"aria-label":"Sign in with Github"},[b(i.companies.gitHub),r("Github")]),l({variant:"outline",class:"gap-2 w-full",click:()=>console.log("Sign in with Google"),"aria-label":"Sign in with Google"},[b(i.companies.google),r("Google")])]),Kt=()=>D({submit:e=>{e.preventDefault(),console.log("Account created")}},[new p({name:"email",label:"Email"},[$({type:"email",placeholder:"m@example.com",required:!0,class:"border p-2 rounded-md w-full bg-background placeholder-muted-foreground text-foreground"})]),new p({name:"password",label:"Password"},[$({type:"password",placeholder:"Your password",required:!0,class:"border p-2 rounded-md w-full bg-background placeholder-muted-foreground text-foreground"})]),l({type:"submit",class:"w-full mt-4 py-2 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition"},"Create account")]),Ae=()=>j({class:"w-full max-w-md mx-auto p-8 bg-card space-y-6"},[L({title:"Create an account",description:"Enter your email below to create your account"}),Yt(),o({class:"relative"},[o({class:"absolute inset-0 flex items-center"},[r({class:"flex-grow border-t"})]),o({class:"relative flex justify-center text-xs uppercase"},[r({class:"bg-background px-2 text-muted-foreground"},"or continue with")])]),Kt()]),Z=Y({state(){return{active:this.active??!1}},after(){this.state.active=this.checkbox.checked},render(){return P({class:"relative inline-flex h-6 w-11 min-w-11 items-center rounded-full bg-muted transition-colors focus:outline-none",onState:["active",{"bg-primary":!0,"bg-muted":!1}],click:(t,{state:a})=>{a.toggle("active"),this.checkbox.checked=a.active}},[Ye({cache:"checkbox",class:"opacity-0 absolute top-0 left-0 bottom-0 right-0 w-full h-full",checked:this.state.active,bind:this.bind,required:this.required}),r({class:"absolute h-5 w-5 bg-background rounded-full shadow-md transform transition-transform",onState:["active",{"translate-x-[22px]":!0,"translate-x-[2px]":!1}]})])}}),ee=({title:e,description:t,defaultState:a,onChange:n})=>o({class:"flex items-start justify-between gap-2"},[o({class:"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex flex-col space-y-1"},[r({class:"font-medium text-foreground"},e),r({class:"font-normal leading-snug text-muted-foreground"},t)]),new Z({active:a,change:n})]),De=()=>j({class:"w-full max-w-md mx-auto p-6 bg-card space-y-6"},[L({title:"Cookie Settings",description:"Manage your cookie settings here."}),o({class:"pt-0 grid gap-6"},[ee({title:"Strictly Necessary",description:"These cookies are essential in order to use the website and use its features.",defaultState:!0,onChange:e=>console.log("Strictly Necessary:",e)}),ee({title:"Functional Cookies",description:"These cookies allow the website to provide personalized functionality.",defaultState:!1,onChange:e=>console.log("Functional Cookies:",e)}),ee({title:"Performance Cookies",description:"These cookies help to improve the performance of the website.",defaultState:!1,onChange:e=>console.log("Performance Cookies:",e)})]),l({variant:"outline",class:"w-full",click:()=>console.log("Preferences saved")},"Save preferences")]),Be=({startDate:e})=>j({class:"w-full max-w-md mx-auto p-6 bg-card space-y-6"},[L({title:"Pick a Date",description:"When is the event?"}),o({class:"font-medium text-foreground"},[new le({selectedDate:e,selectedCallBack:t=>console.log(t)})])]),C=u(e=>({tag:"select",...e,class:`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${e.class||""}`,onCreated(t){e.options&&Ke.setupSelectOptions(t,e.options)}})),te=u(({value:e,label:t,icon:a})=>P({class:'text-sm gap-1 font-medium leading-none disabled:cursor-not-allowed disabled:opacity-70 flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground data-[state="active"]:border-primary [&:has([data-state="active"])]:border-primary',onState:["method",{active:e}],dataSet:["method",["state",e,"active"]],click:(n,{state:d})=>d.method=e},[b(a),r(t)])),Zt=M({render(){return o({class:"flex flex-auto flex-col"},[o({class:"grid grid-cols-3 gap-4"},[te({label:"Card",value:"card",icon:i.creditCard}),te({label:"Paypal",value:"paypal",icon:i.companies.paypal}),te({label:"Apple",value:"apple",icon:i.companies.apple})])])},state(){return{method:null}}}),Xt=()=>o({class:"flex items-center justify-center gap-4"},[new Zt]),eo=()=>D({submit:e=>{e.preventDefault(),console.log("Payment method added")}},[new p({name:"name",label:"Name"},[S({type:"text",placeholder:"First Last",required:!0,class:"border p-2 rounded-md w-full bg-background placeholder-muted-foreground text-foreground"})]),new p({name:"card_number",label:"Card number"},[S({type:"text",placeholder:"1234 5678 9012 3456",required:!0,class:"border p-2 rounded-md w-full bg-background placeholder-muted-foreground text-foreground"})]),o({class:"flex gap-4 mt-4"},[new p({name:"month",label:"Expires"},[C({required:!0,class:"border p-2 rounded-md w-full bg-background text-foreground",options:[{value:"",label:"Month",disabled:!0},...Array.from({length:12},(e,t)=>({value:`${t+1}`,label:`${t+1}`.padStart(2,"0")}))]})]),new p({name:"year",label:"Year"},[C({required:!0,class:"border p-2 rounded-md w-full bg-background text-foreground",options:[{value:"",label:"Year",disabled:!0},...Array.from({length:10},(e,t)=>({value:`${new Date().getFullYear()+t}`,label:`${new Date().getFullYear()+t}`}))]})]),new p({name:"cvc",label:"CVC"},[S({type:"text",placeholder:"CVC",required:!0,class:"border p-2 rounded-md w-full bg-background placeholder-muted-foreground text-foreground"})])]),l({type:"submit",class:"w-full mt-4 py-2 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition"},"Continue")]),Le=()=>j({class:"w-full max-w-md mx-auto p-8 bg-card space-y-6"},[L({title:"Payment Method",description:"Add a new payment method to your account."}),Xt(),o({class:"space-y-4"},[eo()])]),to=({name:e,description:t,stars:a,language:n,lastUpdated:d})=>o({class:"flex items-start justify-between py-4 border-b border-muted last:border-b-0"},[o({class:"flex flex-col"},[r({class:"font-semibold text-foreground"},e),r({class:"text-sm text-muted-foreground"},t),o({class:"flex space-x-4 text-sm text-muted-foreground mt-3"},[o({class:"flex items-center gap-2"},[b({class:" text-blue-500"},i.document.text),r(` ${n}`)]),o({class:"flex items-center"},[b(i.star),r(` ${a}`)]),o(`Updated ${d}`)])]),l({variant:"secondary",class:"px-3 py-1 gap-1 flex items-center rounded-md",click:()=>console.log(`Starred ${e}`)},[b(i.star),r("Star")])]),oo=({projects:e})=>o({class:"space-y-3"},e.map(t=>to(t))),ao=[{name:"shadcn/ui",description:"Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.",stars:"20k",language:"TypeScript",lastUpdated:"April 2023"},{name:"base-framework",description:"A robust framework for building and structuring large-scale applications with ease.",stars:"2",language:"JavaScript",lastUpdated:"June 2024"}],so=()=>j({class:"w-full max-w-md mx-auto p-6 bg-card space-y-6"},[o({class:"font-semibold text-lg text-foreground"},"Projects"),oo({projects:ao})]),no=()=>D({submit:e=>{e.preventDefault(),console.log("Issue reported")}},[o({class:"flex flex-auto w-full gap-4"},[new p({name:"area",label:"Area"},[C({required:!0,class:"border p-2 rounded-md w-full bg-background text-foreground",options:[{value:"billing",label:"Billing"},{value:"technical",label:"Technical"},{value:"account",label:"Account"},{value:"other",label:"Other"}],defaultValue:"billing",change:e=>console.log(`Area selected: ${e.target.value}`)})]),new p({name:"security_level",label:"Security Level"},[C({required:!0,class:"border p-2 rounded-md w-full bg-background text-foreground",options:[{value:"severity_1",label:"Severity 1"},{value:"severity_2",label:"Severity 2"},{value:"severity_3",label:"Severity 3"}],defaultValue:"severity_2",change:e=>console.log(`Security Level selected: ${e.target.value}`)})])]),new p({name:"subject",label:"Subject"},[S({type:"text",placeholder:"I need help with...",required:!0,class:"border p-2 rounded-md w-full bg-background text-foreground placeholder-muted-foreground"})]),new p({name:"description",label:"Description"},[N({placeholder:"Please include all information relevant to your issue.",required:!0,class:"border p-2 rounded-md w-full bg-background text-foreground placeholder-muted-foreground"})]),o({class:"flex justify-end gap-4 mt-4"},[l({variant:"outline",class:"px-4 py-2",click:()=>console.log("Cancel clicked")},"Cancel"),l({type:"submit",class:"px-4 py-2 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition"},"Submit")])]),Pe=()=>j({class:"w-full max-w-md mx-auto p-6 bg-card space-y-6"},[L({title:"Report an issue",description:"What area are you having problems with?"}),no()]),io=({link:e})=>o({class:"flex items-center gap-4 py-2"},[$({type:"text",value:e,readOnly:!0,class:"border p-2 rounded-md w-full bg-background text-foreground"}),l({variant:"secondary",class:"px-4 py-2",click:()=>{navigator.clipboard.writeText(e),app.notify({title:"Link copied",description:"The link has been copied to your clipboard.",icon:i.clipboard.checked})}},"Copy Link")]),ro=({name:e,email:t,access:a,image:n})=>o({class:"flex items-center justify-between gap-4 py-2"},[o({class:"flex items-center gap-3"},[w({src:n,alt:e,fallbackText:e.split(" ").map(d=>d[0]).join("")}),o({},[r({class:"font-medium text-foreground"},e),r({class:"block text-sm text-muted-foreground"},t)])]),C({class:"border rounded-md bg-background text-foreground px-3 py-1",options:[{value:"edit",label:"Can edit"},{value:"view",label:"Can view"},{value:"comment",label:"Can comment"}],defaultValue:a,change:d=>console.log(`Access level changed for ${e}: ${d.target.value}`)})]),lo=({people:e})=>o({class:"space-y-3"},e.map(t=>ro(t))),Me=({link:e,people:t})=>j({class:"w-full max-w-md mx-auto p-6 bg-card space-y-6"},[L({title:"Share this document",description:"Anyone with the link can view this document."}),io({link:e}),o({class:"border-t my-4"}),o({class:"font-medium text-foreground"},"People with access"),lo({people:t})]),co=e=>e.split(" ").map(a=>a[0]).join(""),uo=({name:e,email:t,role:a,image:n})=>o({class:"flex items-center justify-between gap-4 py-2"},[o({class:"flex items-center gap-3"},[w({src:n,alt:e,fallbackText:co(e)}),o({},[r({class:"font-medium text-foreground"},e),r({class:"block text-sm text-muted-foreground"},t)])]),C({class:"border rounded-md bg-background text-foreground px-3 py-1",options:[{value:"owner",label:"Owner"},{value:"member",label:"Member"}],defaultValue:a,change:d=>console.log(`Role changed for ${e}: ${d.target.value}`)})]),mo=({members:e})=>o({class:"space-y-3"},e.map(t=>uo(t))),Fe=({members:e})=>j({class:"w-full max-w-md mx-auto p-6 bg-card space-y-6"},[L({title:"Team Member",description:"Invite your team members to collaborate."}),mo({members:e})]),po=()=>f({title:"Cards",description:"Cards are a great way to display content in a concise and organized manner."},[s({title:"Usage",description:"Import the card atom and use it in your components.",preview:[j()],code:`import { Button } from '@components/atoms/cards/card.js';

Card()`}),y({class:"text-lg font-bold"},"Examples"),c({class:"text-muted-foreground"},"This is a list of examples of how to use the card component in your application."),s({title:"Account Card",preview:[Ae()],code:`import AccountCard from "./examples/account-card.js";

AccountCard()`}),s({title:"Paymnet Card",preview:[Le()],code:`import AccountCard from "./examples/payment-card.js";

PaymentCard()`}),s({title:"Team Mmeber Card",preview:[Fe({members:[{name:"Leslie Alexander",email:"leslie.alexander@example.com",image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"owner",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Michael Foster",email:"michael.foster@example.com",image:"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"member",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Dries Vincent",email:"dries.vincent@example.com",image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"owner",status:"online"}]})],code:`import AccountCard from "./examples/team-member-card.js";

TeamMemberCard()`}),s({title:"Share Document Card",preview:[Me({link:"http://example.com/link/to/document",people:[{name:"Leslie Alexander",email:"leslie.alexander@example.com",image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"owner",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Michael Foster",email:"michael.foster@example.com",image:"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"member",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Dries Vincent",email:"dries.vincent@example.com",image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"owner",status:"online"}]})],code:`import AccountCard from "./examples/share-document-card.js";

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
})`}),s({title:"Date Select Card",preview:[Be({startDate:"2023-01-23"})],code:`import AccountCard from "./examples/date-select-card.js";

DateSelectCard({
    startDate: '2023-01-23'
})`}),s({title:"Report Issue Card",preview:[Pe()],code:`import AccountCard from "./examples/report-issue-card.js";

ReportIssueCard()`}),s({title:"Project Card",preview:[so()],code:`import AccountCard from "./examples/project-card.js";

ProjectCard()`}),s({title:"Cookie Settings Card",preview:[De()],code:`import AccountCard from "./examples/cookie-settings-card.js";

CookieSettingsCard()`})]),fo=({toggleDropdown:e})=>P({cache:"button",class:"relative z-[2] inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 justify-between",click:e},[r({onState:["selectedLabel",t=>t||"Select item..."]}),K({html:i.chevron.upDown})]),go=(e,t)=>V({class:"flex flex-auto items-center cursor-pointer p-2 hover:bg-secondary rounded-sm",click:()=>t(e),onState:["selectedValue",{"bg-secondary":e.value}]},[e.icon&&r({class:"mr-2 flex items-baseline"},[K({class:"flex w-4 h-4",html:e.icon})]),r(e.label)]),ho=e=>o({class:"w-full border rounded-md"},[G({class:"max-h-60 overflow-y-auto p-2 grid gap-1",for:["items",t=>go(t,e)]})]),bo=({onSelect:e})=>o({class:"flex flex-auto flex-col",onState:["open",(t,a,n)=>{if(t)return new ce({cache:"dropdown",parent:n,button:n.button},[ho(e)])}]}),Ee=M({setData(){return new Q({items:this.items||[]})},state:{open:!1,selectedLabel:"",selectedValue:""},handleSelect(e){const t=this.state;t.selectedValue=e.value,t.selectedLabel=e.label,t.open=!1,typeof this.onSelect=="function"&&this.onSelect(e)},toggleDropdown(){this.state.toggle("open")},render(){const e=t=>{const a=this.state;a.selectedValue=t.value,a.selectedLabel=t.label,a.open=!1};return o({class:"relative w-full flex flex-auto flex-col max-w-[250px]"},[fo({toggleDropdown:this.toggleDropdown.bind(this)}),bo({onSelect:e}),this.required&&$({class:"opacity-0 absolute top-0 left-0 z-[1]",type:"text",name:this.name,required:!0,value:["[[selectedValue]]",this.state]})])}}),xo=[{value:"next.js",label:"Next.js",icon:i.home},{value:"sveltekit",label:"SvelteKit"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}],vo=()=>f({title:"Comboboxes",description:"Comboboxes are used to allow users to select an option from a dropdown list or enter a custom value."},[s({title:"Usage",description:"To use the Combobox component, import it from the components library and use it in your application.",preview:[o({class:"w-full max-w-[300px]"},[new Ee({items:xo,onSelect:e=>console.log(e)})])],code:`@components/molecules/combobox/combobox.js';
import { Icons } from "@components/icons/icons.js";

new Combobox({
    items: [
    { value: 'next.js', label: 'Next.js', icon: Icons.home },,
    { value: 'sveltekit', label: 'SvelteKit' },
    { value: 'nuxt.js', label: 'Nuxt.js' },
    { value: 'remix', label: 'Remix' },
    { value: 'astro', label: 'Astro' },
],
})`})]),wo=[{label:"checkbox",key:""},{label:"Status",key:"status"},{label:"Email",key:"email"},{label:"Amount",key:"amount",align:"justify-end"}],yo=[{id:1,status:"Success",email:"ken99@yahoo.com",amount:316,selected:!1},{id:2,status:"Success",email:"abe45@gmail.com",amount:242,selected:!1},{id:3,status:"Processing",email:"monserrat44@gmail.com",amount:837,selected:!1},{id:4,status:"Success",email:"silas22@gmail.com",amount:874,selected:!1},{id:5,status:"Failed",email:"carmella@hotmail.com",amount:721,selected:!1}],ko=(e,t)=>Ze({class:"items-center px-4 py-2 hover:bg-muted"},[O({class:"p-4 "},[new de({checked:e.selected,class:"mr-2",onChange:()=>t(e)})]),O({class:"p-4 "},[r({class:"text-muted-foreground"},e.status)]),O({class:"p-4 "},e.email),O({class:"p-4 text-right"},`$${e.amount.toFixed(2)}`)]),To=()=>f({title:"Data Tables",description:"Data tables are used to display data in a structured format. They can be used to display a list of items, a grid of items, or a table of items."},[s({title:"Usage",description:"The data table component is used to display data in a structured format. It can be used to display a list of items, a grid of items, or a table of items.",preview:[new ht({headers:wo,rows:yo,rowItem:ko,key:"id"})],code:`import { DataTable } from "@components/organisms/lists/data-table.js";
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
        return Tr({ class: 'items-center px-4 py-2 hover:bg-muted' }, [
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
})`})]),So=({title:e})=>B({class:"flex flex-auto items-center"},[J({class:"text-lg font-semibold"},e)]),Co=u((e,t)=>Xe({class:`fixed pullUpIn z-30 w-[98%] md:w-full max-w-lg border bg-popover text-foreground shadow-lg duration-200
                rounded-lg flex flex-auto flex-col
                bottom-4 top-auto md:m-auto md:bottom-auto md:top-1/2 md:left-0 md:right-0 md:-translate-y-1/2`,click:e.click,aria:{expanded:["open"]}},[o({class:"flex flex-auto flex-col gap-4 p-6 pb-12 md:pb-6"},[o({class:"flex flex-auto flex-col space-y-2"},[So(e),e.description&&c({class:"flex flex-auto flex-col text-sm text-muted-foreground"},e.description),o({class:"flex flex-auto flex-col text-sm text-muted-foreground"},t)]),ke({class:"flex flex-col-reverse sm:flex-row sm:justify-end mt-6 gap-2 sm:gap-0 sm:space-x-2"},e.buttons)])])),Io=e=>Te.render(e,app.appShell.panel);class ue extends z{render(){const t=d=>{d.target===this.panel&&this.close()},a=this.getMainClass(),n=this.title||"Dialog Title";return Co({class:a,title:n,click:t,description:this.description,buttons:this.getButtons()},this.children)}getButtons(){return[l({variant:"outline",click:()=>this.close()},"Close")]}setupStates(){return{open:!1}}getMainClass(){return""}open(){Io(this),this.panel.showModal(),this.state.open=!0}close(){this.state.open=!1,this.panel.close(),this.destroy()}}class $e extends ue{getButtons(){const t=this.confirmTextLabel||"Confirm";return[l({variant:"outline",click:()=>this.close()},"Cancel"),l({variant:"primary",click:()=>this.confirm()},t)]}confirm(){this.confirmed&&this.confirmed(),this.close()}}const jo=u((e,t)=>l({text:"Open",class:"m-1",click:()=>new ue(e,t).open()})),Ao=e=>l({text:"Open",class:"m-1",click:()=>new $e(e).open()}),Do=({link:e})=>o({class:"flex items-center gap-4 py-2"},[S({type:"text",value:e,readOnly:!0,class:"border p-2 rounded-md w-full bg-background text-foreground"}),l({variant:"secondary",class:"px-4 py-2",click:()=>{navigator.clipboard.writeText(e),app.notify({title:"Link copied",description:"The link has been copied to your clipboard.",icon:i.clipboard.checked})}},"Copy Link")]),Bo=e=>l({text:"Open",class:"m-1",click:()=>new ue(e,[Do({link:"https://example.com"})]).open()}),Lo=()=>f({title:"Dialogs",description:"Displays a dialog or a component that looks like a dialog. Dialogs can be opened and closed. They will be closed if the user clicks outside of the dialog or if the user clicks the close button."},[s({title:"Usage",description:"Import the dialog atom and use it in your components.",preview:[jo({title:"Title",description:"this is the description."},[])],code:`import { Dialog } from '@components/molecules/dialogue.js';

new Dialog({
    title: '',
    description: ''
}, [

]).open()`}),s({title:"Confirmation",description:"Displays a confirmation dialog.",preview:[Ao({title:"Are you absoultely sure?",description:"This action cannot be undone. This will permanently delete your account and remove your data from our servers.",confirmTextLabel:"Save",confirmed:()=>console.log("Confirmed!")})],code:`import { Confirmation } from '@components/molecules/dialogs/confirmation.js';

new Confirmation({
    title: 'Are you absoultely sure?',
    description: 'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
    confirmTextLabel: 'Save',
    confirmed: () => console.log('Confirmed!')
}).open()`}),s({title:"Share Link",description:"Displays a dialog with a shareable link.",preview:[Bo({title:"Share Link",description:"Share this link with others."})],code:`import { Confirmation } from '@components/molecules/dialogs/confirmation.js';

new Confirmation({
    title: 'Are you absoultely sure?',
    description: 'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
    confirmTextLabel: 'Save',
    confirmed: () => console.log('Confirmed!')
}).open()`})]),Po=e=>r({class:"ml-auto text-xs tracking-widest opacity-60"},e),Mo=e=>r({class:"flex w-4 h-4",html:e}),Fo=e=>r({class:"flex-auto"},e),Eo=(e,t)=>V({class:"relative flex cursor-pointer hover:bg-accent hover:text-accent-foreground select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",click:()=>t(e)},[e.icon&&Mo(e.icon),Fo(e.label),e.shortcut&&Po(e.shortcut)]),$o=(e,t)=>G({class:"grid gap-2"},[e.map(a=>Eo(a,t))]),No=e=>o({class:"w-full z-10"},[o({class:"max-h-60 border rounded-md overflow-y-auto p-1 grid gap-2 divide-y divide-border",for:["groups",t=>$o(t,e)]})]),zo=({label:e,icon:t,toggleDropdown:a})=>P({cache:"button",class:`inline-flex items-center justify-between rounded-md border border-input
            bg-background px-2 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground
            focus:outline-none transition duration-150 ease-in-out`,click:a},[e&&r(e),t&&K({html:t})]),qo=({onSelect:e})=>o({onState:["open",(t,a,n)=>{if(t)return new ce({cache:"dropdown",parent:n,button:n.button},[No(e)])}]});class Oo extends z{setData(){return new Q({groups:this.groups||[]})}setupStates(){return{open:!1,selectedItem:null}}toggleDropdown(){this.state.toggle("open")}handleSelect(t){this.state.selectedItem=t,this.state.open=!1,typeof this.onSelect=="function"&&this.onSelect(t)}render(){return o({class:"relative"},[zo({label:this.label,icon:this.icon,toggleDropdown:this.toggleDropdown.bind(this)}),qo({onSelect:this.handleSelect.bind(this)})])}}const Ro=()=>f({title:"Dropdown Menus",description:"Dropdown menus are used to display a list of options when a user clicks on a button or input field."},[s({title:"Usage",description:"To use the DropdownMenu component, import it from the components library and use it in your application.",preview:[new Oo({icon:i.ellipsis.vertical,groups:[[{icon:i.user.default,label:"Profile",shortcut:"⌘P",value:"profile"},{icon:i.creditCard,label:"Billing",shortcut:"⌘B",value:"billing"},{icon:i.cog.six,label:"Settings",shortcut:"⌘S",value:"settings"},{icon:i.computerDesktop,label:"Keyboard shortcuts",shortcut:"⌘K",value:"shortcuts"}],[{icon:i.user.multiple,label:"Team",value:"team"},{icon:i.user.plus,label:"Invite users",value:"invite"},{icon:i.plus,label:"New Team",shortcut:"⌘T",value:"new_team"}],[{icon:i.github,label:"GitHub",value:"github"},{icon:i.helpCircle,label:"Support",value:"support"},{icon:i.api,label:"API",value:"api"}]],onSelect:e=>{console.log("Selected item:",e)}})],code:`import { Icons } from "@components/icons/icons.js";
import { DropdownMenu } from '@components/molecules/dropdowns/dropdown-menu.js';

new DropdownMenu({
    icon: Icons.ellipsis.vertical,
    groups: [
        [
            { icon: Icons.user.default, label: 'Profile', shortcut: '⌘P', value: 'profile' },
            { icon: Icons.creditCard, label: 'Billing', shortcut: '⌘B', value: 'billing' },
            { icon: Icons.cog, label: 'Settings', shortcut: '⌘S', value: 'settings' },
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
})`})]),Ne=Y({state(){return{value:this.value??0,min:this.min??0,max:this.max??100,filledPercentage:this.getFillPercentage(this.value)}},getFillPercentage(e){return(e-this.min)/(this.max-this.min)*100},render(){return o({class:"relative w-full h-4 flex items-center"},[o({class:"absolute h-2 w-full rounded-full bg-muted"}),o({class:"absolute h-2 bg-primary rounded-full",style:"width: [[filledPercentage]]%"}),o({class:"absolute block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transform -translate-x-1/2",style:"left: [[filledPercentage]]%"}),$({type:"range",min:"[[min]]",max:"[[max]]",value:"[[value]]",class:"absolute w-full h-full opacity-0 cursor-pointer",bind:this.bind,input:e=>{const t=Number(e.target.value);this.state.value=t,this.state.filledPercentage=this.getFillPercentage(t),typeof this.change=="function"&&this.change(t)}})])}}),R=u((e,t)=>o({...e,class:"flex flex-auto items-center justify-center w-full py-4 space-y-8 max-w-[350px]"},t)),Ho=[{value:"next.js",label:"Next.js"},{value:"sveltekit",label:"SvelteKit"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}],Wo=()=>D({submit:e=>{console.log("Profile Form submitted")}},[new p({name:"username",label:"Username",description:"This is your public display name."},[S({placeholder:"e.g. username",required:!0})]),new p({name:"email",label:"Email Address",description:"We'll use this to contact you."},[se({placeholder:"e.g. email@address.com",required:!0})]),l({type:"submit"},"Submit")]),Uo=()=>D({submit:e=>{console.log("Preferences Form submitted")}},[new p({name:"framework",label:"Favorite Framework",description:"Select your preferred framework."},[C({options:Ho,required:!0})]),new p({name:"newsletter",label:"Subscribe to Newsletter",description:"Stay updated with our latest news."},[new de({label:"Yes, sign me up!",required:!0,onChange:e=>console.log("Newsletter checked:",e)})]),l({type:"submit"},"Save Preferences")]),_o=()=>D({submit:e=>{console.log("Contact Form submitted")}},[new p({name:"phone",label:"Phone Number",description:"We may contact you at this number."},[ne({placeholder:"e.g. +1234567890",required:!0})]),new p({name:"message",label:"Your Message",description:"Let us know how we can help you."},[N({placeholder:"Type your message here...",required:!0})]),new p({name:"message",label:"Select Framework",description:"Select your preferred framework."},[new Ee({required:!0,items:[{value:"next.js",label:"Next.js"},{value:"sveltekit",label:"SvelteKit"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}]})]),l({type:"submit"},"Send Message")]),Go=()=>D({submit:e=>{console.log("Settings Form submitted")}},[new p({name:"notifications",label:"Enable Notifications",description:"Toggle to enable or disable notifications."},[new Z({active:!0,required:!0})]),new p({name:"volume",label:"Volume Level",description:"Set your preferred volume level."},[new Ne({min:0,max:100,value:50})]),l({type:"submit"},"Save Settings")]),Vo=()=>f({title:"Forms",description:"Forms are used to collect user data and submit it to the server."},[s({title:"Profile Form",description:"A simple profile form with username and email fields.",preview:[R([Wo()])],code:`import { Button, Input, EmailInput } from "@components/atoms/form/input.js";
import { Form, FormField } from "@components/molecules/form/form.js";

Form([
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
])`}),s({title:"Preferences Form",description:"A preferences form with a select input and a checkbox.",preview:[R([Uo()])],code:`import { Button, Checkbox, Select } from "@components/atoms/form/input.js";
import { Form, FormField } from "@components/molecules/form/form.js";

Form([
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
])`}),s({title:"Contact Form",description:"A contact form with a phone input and a textarea for messages.",preview:[R([_o()])],code:`import { Button, TelInput, Textarea } from "@components/atoms/form/input.js";
import { Form, FormField } from "@components/molecules/form/form.js";

Form([
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

    Button({ type: "submit" }, "Send Message")
])`}),s({title:"Settings Form",description:"A settings form with a toggle and a range slider.",preview:[R([Go()])],code:`import { Button, Toggle, RangeSlider } from "@components/atoms/form/input.js";
import { Form, FormField } from "@components/molecules/form/form.js";

Form([
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
])`})]),Qo=u(({index:e,click:t,state:a},n)=>V({class:"p-2 cursor-pointer hover:bg-accent hover:text-accent-foreground",onState:[[a,"selectedIndex",{"bg-accent":e,"text-white":e}]],pointerdown:()=>t(e)},n)),Jo=u(({selectOption:e,state:t})=>G({class:"border rounded-md list-none m-0 p-0",for:["filteredOptions",(a,n)=>Qo({index:n,click:e,state:t},a.label)]})),Yo=100,Ko=u(e=>S({cache:"input",placeholder:e.placeholder??"Search...",bind:[e.state,"searchQuery"],keyup:(t,a)=>{a.state.open=!0,typeof e.filterOptions=="function"&&e.filterOptions(),a.dropdown.updatePosition()},pointerup:(t,a)=>a.toggleDropdown(),blur:(t,{state:a})=>setTimeout(()=>a.open=!1,Yo),keydown:t=>typeof e.handleKeyDown=="function"&&e.handleKeyDown(t)})),Zo=e=>o({class:"relative flex fle-auto flex-col",onState:["open",(t,a,n)=>{if(t)return new ce({cache:"dropdown",parent:n,button:n.input,size:"xl"},[Jo(e)])}]}),Xo=M({setData(){const e=this.options||[];return new Q({options:e,filteredOptions:e})},state(){return{searchQuery:"",selectedIndex:-1,open:!1}},setSelectedIndexByQuery(){const e=this.data.filteredOptions;let{searchQuery:t}=this.state;t=t.toLowerCase();const a=e.findIndex(n=>n.label.toLowerCase()===t);a>=0&&(this.state.selectedIndex=a)},filterOptions(){const e=this.state.searchQuery.toLowerCase();if(e===""||e.length===0){this.data.filteredOptions=this.data.options;return}const t=this.data.get("options");this.data.filteredOptions=t.filter(a=>a.label.toLowerCase().includes(e))},getValue(){const{selectedIndex:e}=this.state;return e<0?null:this.data.get(`filteredOptions[${e}]`)},selectOption(e){this.state.selectedIndex=e;const t=this.data.get(`filteredOptions[${e}]`);this.state.searchQuery=t.label,this.state.open=!1,typeof this.onSelect=="function"&&this.onSelect(t)},toggleDropdown(){this.state.toggle("open"),this.state.open&&this.setSelectedIndexByQuery()},handleKeyDown(e){const t=this.data.filteredOptions,{selectedIndex:a}=this.state;e.key==="ArrowDown"?(e.preventDefault(),this.state.selectedIndex=Math.min(a+1,t.length-1)):e.key==="ArrowUp"?(e.preventDefault(),this.state.selectedIndex=Math.max(a-1,0)):e.key==="Enter"&&a>=0&&(e.preventDefault(),this.selectOption(a))},render(){return o({class:"relative w-full max-w-md"},[Ko({state:this.state,placeholder:this.placeholder,filterOptions:this.filterOptions.bind(this),handleKeyDown:this.handleKeyDown.bind(this)}),Zo({state:this.state,setSelected:this.setSelectedIndexByQuery.bind(this),selectOption:this.selectOption.bind(this)})])}}),ea=[{value:"next.js",label:"Next.js"},{value:"sveltekit",label:"SvelteKit"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}],g=u((e,t)=>o({...e,class:"flex flex-auto items-center justify-center w-full max-w-[350px]"},t)),ge=({label:e,description:t,active:a,onChange:n})=>o({class:"flex items-center justify-between p-4 border rounded-md bg-muted/10 border-muted-foreground/20 mb-4"},[o({class:"flex flex-col pr-8"},[y({class:"font-semibold"},e),c({class:"text-sm text-muted-foreground"},t)]),new Z({active:a,change:n})]),ta=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Cherry",value:"cherry"},{label:"Date",value:"date"},{label:"Elderberry",value:"elderberry"},{label:"Fig",value:"fig"},{label:"Grape",value:"grape"},{label:"Honeydew",value:"honeydew"}],oa=()=>f({title:"Inputs",description:"Inputs are essential for gathering user data in forms."},[s({title:"Usage",description:"Import the input atom and use it in your components. The input can be of various types: text, password, email, etc.",preview:[o({class:"grid gap-2 w-full max-w-[350px]"},[S({type:"text",placeholder:"Enter your text here...",change:e=>console.log(e.target.value)}),se({}),ne({}),N({placeholder:"Enter your text here..."})])],code:`import { Input, EmailInput, TelInput, Textarea } from '@components/atoms/form/input.js';

Input({
    type: 'text',
    placeholder: 'Enter your text here...',
    change: (e) => console.log(e.target.value)
}),
EmailInput({}),
TelInput({}),
Textarea({
    placeholder: 'Enter your text here...'
})`}),s({title:"Search Dropdown",description:"This is a search dropdown.",preview:[o({class:"relative w-full max-w-md"},[new Xo({options:ta,onSelect:e=>console.log(e)})])],code:`import { SearchDropdown } from "@components/organisms/search/search-dropdown.js";

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
`}),s({title:"File Input",description:"This is a file input.",preview:[g([et({multiple:!0,change:e=>console.log(e.target.files)})])],code:`import { EmailInput, FileInput, Input, TelInput, Textarea } from "@components/atoms/form/input.js";

FileInput({
    multiple: true,
    change: (e) => console.log(e.target.files)
})`}),s({title:"Radio Input",description:"This is a radio input.",preview:[o({class:"grid gap-2"},[X({name:"theme",label:"System",value:"system"}),X({name:"theme",label:"Light",value:"light"}),X({name:"theme",label:"Dark",value:"dark"})])],code:`import { Radio } from "@components/atoms/form/input.js";
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
])`}),s({title:"Text Input",description:"This is a text input.",preview:[g([S({type:"text",placeholder:"Enter your text here..."})])],code:`
import { EmailInput, FileInput, Input, TelInput, Textarea } from "@components/atoms/form/input.js";

Input({
    type: 'text',
    placeholder: 'Enter your text here...'
})`}),s({title:"Tel Input",description:"This is a phone input.",preview:[g([ne({})])],code:`
import { EmailInput, FileInput, Input, TelInput, Textarea } from "@components/atoms/form/input.js";

TelInput({
})`}),s({title:"Email Input",description:"This is a email input.",preview:[g([se({})])],code:`
import { EmailInput, FileInput, Input, TelInput, Textarea } from "@components/atoms/form/input.js";

EmailInput({

})`}),s({title:"URL Input",description:"This is a URL input field.",preview:[g([tt({placeholder:"Enter a valid URL...",change:e=>console.log(e.target.value)})])],code:`import { UrlInput } from '@components/atoms/form/input.js';

UrlInput({
    placeholder: 'Enter a valid URL...',
    change: (e) => console.log(e.target.value),
});`}),s({title:"Color Input",description:"This is a color input field.",preview:[g([ot({change:e=>console.log(e.target.value)})])],code:`import { ColorInput } from '@components/atoms/form/input.js';

ColorInput({
    change: (e) => console.log(e.target.value),
});`}),s({title:"Date Input",description:"This is a date input field.",preview:[g([at({change:e=>console.log(e.target.value)})])],code:`import { DateInput } from '@components/atoms/form/input.js';

DateInput({
    change: (e) => console.log(e.target.value),
});`}),s({title:"Time Input",description:"This is a time input field.",preview:[g([st({change:e=>console.log(e.target.value)})])],code:`import { TimeInput } from '@components/atoms/form/input.js';

TimeInput({
    change: (e) => console.log(e.target.value),
});`}),s({title:"DateTime Input",description:"This is a datetime input field.",preview:[g([nt({change:e=>console.log(e.target.value)})])],code:`import { DateTimeInput } from '@components/atoms/form/input.js';

DateTimeInput({
    change: (e) => console.log(e.target.value),
});`}),s({title:"Week Input",description:"This is a week input field.",preview:[g([it({change:e=>console.log(e.target.value)})])],code:`import { WeekInput } from '@components/atoms/form/input.js';

WeekInput({
    change: (e) => console.log(e.target.value),
});`}),s({title:"Month Input",description:"This is a month input field.",preview:[g([rt({change:e=>console.log(e.target.value)})])],code:`import { MonthInput } from '@components/atoms/form/input.js';

MonthInput({
    change: (e) => console.log(e.target.value),
});`}),s({title:"Password Input",description:"This is a password input field.",preview:[g([lt({class:"w-12 h-12"})])],code:`import { PasswordInput } from '@components/atoms/form/input.js';

PasswordInput({
    class: 'w-12 h-12'
});`}),s({title:"Number Input",description:"This is a number input field.",preview:[g([ct({placeholder:"Enter a number...",change:e=>console.log(e.target.value)})])],code:`import { NumberInput } from '@components/atoms/form/input.js';

NumberInput({
    placeholder: 'Enter a number...',
    change: (e) => console.log(e.target.value),
});`}),s({title:"Hidden Input",description:"This is a hidden input field.",preview:[g([dt({value:"hidden-value"})])],code:`import { HiddenInput } from '@components/atoms/form/input.js';

HiddenInput({
    value: 'hidden-value',
});`}),s({title:"Checkbox",description:"This is a checkbox input.",preview:[new de({label:"Check me",onChange:e=>console.log(e)})],code:`
import { Checkbox } from '@components/atoms/form/checkbox.js';

new Checkbox({
    label: 'Check me',
    check: (checked) => console.log(checked)
})`}),s({title:"Select",description:"This is a select input.",preview:[g([C({options:ea,change:e=>console.log(e.target.value)})])],code:`import { Select } from "@components/atoms/form/select.js";

Select({
    options: [
        { value: 'next.js', label: 'Next.js' },
        { value: 'sveltekit', label: 'SvelteKit' },
        { value: 'nuxt.js', label: 'Nuxt.js' },
        { value: 'remix', label: 'Remix' },
        { value: 'astro', label: 'Astro' },
    ],
    change: (e) => console.log(e.target.value)
})`}),s({title:"Textarea",description:"This is a textarea input.",preview:[g([N({placeholder:"Enter your text here..."})])],code:`
import { EmailInput, FileInput, Input, TelInput, Textarea } from "@components/atoms/form/input.js";

Textarea({
    placeholder: 'Enter your text here...'
})`}),s({title:"Date Picker",description:"This is a date picker input.",preview:[g([new le({selectedDate:"2022-01-01"})])],code:`
import DatePicker from "@components/molecules/date-time/date-picker.js";

new DatePicker()`}),s({title:"Range Slider",description:"This is a range slider input.",preview:[g([new Ne({min:0,max:100,value:50,change:e=>console.log(e)})])],code:`
import { RangeSlider } from '@components/atoms/form/range-slider.js';

new RangeSlider({
    min: 0,
    max: 100,
    value: 50,
    change: (value) => console.log(value)
})`}),s({title:"Toggle Switch",description:"This is a toggle switch input.",preview:[g([new Z({active:!0,change:e=>console.log(e)})])],code:`
import { RangeSlider } from '@components/atoms/form/range-slider.js';

new RangeSlider({
    min: 0,
    max: 100,
    value: 50,
    change: (value) => console.log(value)
})`}),s({title:"Toggle Switch",description:"Toggle switches to control various settings.",preview:[o({class:"p-4"},[y({class:"text-lg font-bold mb-4"},"Email Notifications"),ge({label:"Marketing emails",description:"Receive emails about new products, features, and more.",active:!1,onChange:e=>console.log("Marketing emails:",e)}),ge({label:"Security emails",description:"Receive emails about your account security.",active:!1,onChange:e=>console.log("Security emails:",e)}),l({text:"Submit",class:"mt-4"})])],code:`
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
]);`})]),aa=[{name:"Leslie Alexander",email:"leslie.alexander@example.com",image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"Co-Founder / CEO",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Michael Foster",email:"michael.foster@example.com",image:"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"Co-Founder / CTO",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Dries Vincent",email:"dries.vincent@example.com",image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"Business Relations",status:"online"}],sa=()=>f({title:"Lists",description:"Lists are used to display a collection of items in a structured format. Each item can be customized to show different information."},[s({title:"Usage",description:"To use the List component, import it from the components library and use it in your application.",preview:[bt({users:aa})],code:`import { UserListItem } from "@components/organisms/lists/user-list.js";
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
});`}),y({class:"text-lg font-bold"},"Description"),c({class:"text-muted-foreground"},"The List component can be used to display a list of items in a structured format. Each item can be customized to show different information. The List component supports appending, prepending, mingling, and deleting or items. "),y({class:"text-lg font-bold"},"Performance"),c({class:"text-muted-foreground"},"The list will only update or re-render the items that have changed, improving performance. It uses a key to know when to update an item.")]),na=({title:e,description:t,back:a,icon:n})=>B({class:"modal-header flex items-center pt-4 px-6"},[a&&l({variant:"icon",icon:i.arrows.left,class:"mr-2 p-0 flex sm:hidden",click:(d,h)=>h.close()}),n&&o({class:"mr-2 w-12 h-12 rounded-full bg-muted flex items-center justify-center"},[b(n)]),o({class:"flex flex-auto flex-col ml-2"},[J({class:"text-lg font-semibold m-0"},e),t&&o({class:"text-sm text-muted-foreground"},t)])]),ia=u((e,t)=>o({popover:"manual",class:`modal m-auto top-0 right-0 bottom-0 left-0 fixed z-20 grid w-full h-full gap-4 lg:border bg-background text-foreground shadow-xl break-words overflow-hidden p-0 ${e.class}`,pointerdown:(a,n)=>{a.target===n.panel&&(a.preventDefault(),a.stopPropagation(),n.state.open=!1)}},[D({class:"modal-content flex flex-auto flex-col",submit:a=>e.onSubmit&&e.onSubmit()},[na(e),o({class:"modal-body flex flex-auto flex-col overflow-y-auto py-0 px-6"},t),ke({class:"modal-footer flex justify-between pb-4 px-6"},e.buttons)])])),ra=e=>Te.render(e,app.appShell.panel);class ze extends z{render(){const t=this.getMainClass(),a=this.title||"",n=this.description||null;return ia({class:t,title:a,description:n,buttons:this.getButtons(),onSubmit:this.submit,icon:this.icon,back:this.back??!1,aria:{expanded:["open"]}},this.children)}setupStates(){return{open:{state:!1,callBack:t=>{t||this.close()}}}}getButtons(){return[l({variant:"outline",click:()=>this.close()},"Cancel"),l({variant:"primary",type:"submit"},"Save")]}isOutsideClick(t){return!this.panel.contains(t)}getSizeClass(){switch(this.size){case"lg":return"lg max-w-[900px]";case"xl":return"xl max-w-[1400px]";default:return"md max-w-[760px]"}}getTypeClass(){switch(this.type){case"right":return"right right-0";case"left":return"left left-0";default:return""}}getMainClass(){return this.getSizeClass()+" "+this.getTypeClass()}open(){ra(this),this.panel.showPopover(),this.state.open=!0}close(){this.state.open=!1,this.panel.hidePopover(),this.destroy()}}const H=[{label:"Large",buttonStyle:"primary",size:"lg"},{label:"Small",buttonStyle:"secondary",size:"sm"},{label:"Medium",buttonStyle:"destructive",size:"md"},{label:"XL",buttonStyle:"primary",size:"xl"},{label:"Right",buttonStyle:"ghost",type:"right"},{label:"Left",buttonStyle:"link",type:"left"}],W=({label:e,buttonStyle:t,size:a,type:n})=>l({text:e,class:`m-1 ${t}`,click:()=>new ze({title:"Are you absolutely sure?",size:a,type:n},[o({class:"flex flex-auto flex-col items-center justify-center p-4"},[new le,l({click:()=>{new $e({title:"Are you absoultely sure?",description:"This action cannot be undone. This will permanently delete your account and remove your data from our servers.",confirmTextLabel:"Save",confirmed:()=>{app.notify({icon:i.trash,title:"Account deleted",description:"Your account has been successfully deleted.",type:"destructive"})}}).open()}},"Confirm")])]).open()}),la=({size:e="md",type:t="center"})=>new ze({title:"Report an Issue",icon:i.warning,description:"What area are you having problems with?",size:e,type:t,onSubmit:()=>console.log("Form submitted")},[o({class:"flex flex-col max-w-lg lg:p-4 space-y-8"},[o({class:"flex flex-auto w-full gap-4"},[new p({name:"area",label:"Area"},[C({required:!0,class:"border p-2 rounded-md w-full bg-background text-foreground",options:[{value:"billing",label:"Billing"},{value:"technical",label:"Technical"},{value:"account",label:"Account"},{value:"other",label:"Other"}],defaultValue:"billing",change:a=>console.log(`Area selected: ${a.target.value}`)})]),new p({name:"security_level",label:"Security Level"},[C({required:!0,class:"border p-2 rounded-md w-full bg-background text-foreground",options:[{value:"severity_1",label:"Severity 1"},{value:"severity_2",label:"Severity 2"},{value:"severity_3",label:"Severity 3"}],defaultValue:"severity_2",change:a=>console.log(`Security Level selected: ${a.target.value}`)})])]),new p({name:"subject",label:"Subject"},[S({type:"text",placeholder:"I need help with...",required:!0,class:"border p-2 rounded-md w-full bg-background text-foreground placeholder-muted-foreground"})]),new p({name:"description",label:"Description"},[N({placeholder:"Please include all information relevant to your issue.",required:!0,class:"border p-2 rounded-md w-full bg-background text-foreground placeholder-muted-foreground"})])])]),he=({label:e,buttonStyle:t,size:a,type:n})=>l({text:e,class:`m-1 ${t}`,click:()=>la({size:a,type:n}).open()}),ca=()=>f({title:"Modals",description:"Displays a modal or a component that looks like a modal."},[s({title:"Extra Large Modal",description:"This is an extra large modal.",preview:[W(H[3])],code:`
import { Modal } from "@components/molecules/modals/modal.js";
import { Button } from "@components/atoms/atoms.js";

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
});`}),s({title:"Large Modal",description:"This is a large modal.",preview:[W(H[0])],code:`
import { Modal } from "@components/molecules/modals/modal.js";
import { Button } from "@components/atoms/atoms.js";

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
});`}),s({title:"Medium Modal",preview:[W(H[2])],code:`
import { Modal } from "@components/molecules/modals/modal.js";
import { Button } from "@components/atoms/atoms.js";

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
});`}),s({title:"Right Modal",preview:[W(H[4])],code:`
import { Modal } from "@components/molecules/modals/modal.js";
import { Button } from "@components/atoms/atoms.js";

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
});`}),s({title:"Form Modal",preview:[he({label:"Form Modal",buttonStyle:"primary"})],code:`
import { Modal } from "@components/molecules/modals/modal.js";
import { Button } from "@components/atoms/atoms.js";

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
);`}),s({title:"Right Form Modal",preview:[he({label:"Form Modal",buttonStyle:"primary",size:"md",type:"right"})],code:`
import { Modal } from "@components/molecules/modals/modal.js";
import { Button } from "@components/atoms/atoms.js";
import { Icons } from "@components/icons/icons.js";

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
);`})]),da=()=>f({title:"Navigations",description:"Navigations are components that help users move around the website or application."},[s({title:"Navigation Menu",description:"The navigation menu component is a simple navigation component that will create a horizontal menu.",preview:[o({class:"flex flex-auto flex-col w-full"},[new ut({options:[{label:"Examples",href:"docs/components/navigations/examples"},{label:"Mail",href:"docs/components/navigations/mail"},{label:"Dashboard",href:"docs/components/navigations/dashboard"},{label:"Tasks",href:"docs/components/navigations/tasks"},{label:"Playground",href:"docs/components/navigations/playground"},{label:"Forms",href:"docs/components/navigations/forms"},{label:"Music",href:"docs/components/navigations/music"},{label:"Authentication",href:"docs/components/navigations/authentication"}]})])],code:`import { Button } from '@components/organisms/navigation/inline-navigation.js';
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
})`}),s({title:"Inline Navigation",description:"The inline navigation component is a simple navigation component that can be used in a sidebar or app shell.",preview:[o({class:"flex flex-auto flex-col w-full border rounded-md max-w-[300px]"},[new mt({options:[{label:"Listen Now",href:"docs/components/navigations",icon:i.playing,exact:!0},{label:"Browse",href:"docs/components/navigations/browse",icon:i.square.grid},{label:"Radio",href:"docs/components/navigations/radio",icon:i.signal},{label:"Playlists",icon:i.list.down,options:[{label:"Recently Added",href:"docs/components/navigations/recently-added"},{label:"Recently Played",href:"docs/components/navigations/recently-played"},{label:"Top Songs",href:"docs/components/navigations/top-songs"},{label:"Top Albums",href:"docs/components/navigations/top-albums"}]},{group:"Frameworks",options:[{label:"Next.js",href:"docs/components/navigations/next"},{label:"SvelteKit",href:"docs/components/navigations/sveltekit"},{label:"Nuxt.js",href:"docs/components/navigations/nuxt"},{label:"Remix",href:"docs/components/navigations/remix"},{label:"Astro",href:"docs/components/navigations/astro"}]}]})])],code:`import { Button } from '@components/organisms/navigation/inline-navigation.js';
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
})`}),s({title:"Sidebar Menu",description:"The sidebar menu component is a navigation component that can be used in a sidebar or app shell.",preview:[o({class:"flex flex-auto flex-col w-full border rounded-md max-w-[300px]"},[xt({title:"Discover",options:[{label:"Listen Now",href:"docs/components/navigations",icon:i.playing,exact:!0},{label:"Browse",href:"docs/components/navigations/browse",icon:i.square.grid},{label:"Radio",href:"docs/components/navigations/radio",icon:i.signal},{group:"Library",options:[{label:"Playlists",href:"docs/components/navigations/playlists",icon:i.list.down},{label:"Songs",href:"docs/components/navigations/songs",icon:i.music},{label:"Made for You",href:"docs/components/navigations/made-for-you",icon:i.user.default},{label:"Artists",href:"docs/components/navigations/artists",icon:i.speaker.default},{label:"Albums",href:"docs/components/navigations/albums",icon:i.square.stack}]}]})])],code:`import { Icons } from "@components/icons/icons.js";
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
`})]),ua=()=>f({title:"Notifications",description:"Displays a notification message to the user."},[s({title:"Default Notification",description:"This is a standard notification without any specific type.",preview:[new E({title:"Default Notification",description:"This is a default notification.",icon:i.information,duration:"infinite"})],code:`app.notify({
    title: 'Default Notification',
    description: 'This is a default notification.',
    icon: Icons.info,
    duration: 'infinite'
})`}),s({title:"Info Notification",description:"An informational notification to inform users about general information.",preview:[new E({title:"Heads up!",description:"You can add components to your app using the CLI.",icon:i.information,type:"info",duration:"infinite"})],code:`app.notify({
    title: 'Heads up!',
    description: 'You can add components to your app using the CLI.',
    icon: Icons.information,
    type: 'info',
    duration: 'infinite'
})`}),s({title:"Warning Notification",description:"A warning notification to caution the user about potential issues.",preview:[new E({title:"Warning!",description:"Please check your input before proceeding.",icon:i.warning,type:"warning",duration:"infinite"})],code:`app.notify({
    title: 'Warning!',
    description: 'Please check your input before proceeding.',
    icon: Icons.warning,
    type: 'warning',
    duration: 5000
})`}),s({title:"Destructive Notification",description:"A destructive notification to alert the user of a serious issue or error.",preview:[new E({title:"Error!",description:"Something went wrong. Please try again later.",icon:i.shield,type:"destructive",duration:"infinite"})],code:`app.notify({
    title: 'Error!',
    description: 'Something went wrong. Please try again later.',
    icon: Icons.error,
    type: 'destructive',
    duration: 'infinite'
})`}),s({title:"Notification with Actions",description:"This notification includes primary and secondary buttons for user actions.",preview:[new E({title:"Action Required",description:"Would you like to proceed with this action?",icon:i.information,type:"info",primary:"Proceed",primaryAction:()=>console.log(1),secondary:"Cancel",secondaryAction:()=>console.log(1),duration:"infinite"})],code:`app.notify({
    title: 'Action Required',
    description: 'Would you like to proceed with this action?',
    icon: Icons.question,
    type: 'info',
    primary: 'Proceed',
    primaryAction: () => alert('Primary action clicked!'),
    secondary: 'Cancel',
    secondaryAction: () => alert('Secondary action clicked!'),
    duration: 'infinite' // Notification will remain until user dismisses
})`}),c({class:"text-muted-foreground"},"Notifications will stack if multiple are triggered at the same time. The notification will remain visible until the specified duration has passed. If a notification duration is set to 'infinite', it must be manually dismissed by the user."),s({title:"Usage",description:"Call 'notify' on the global notification container to display notifications.",preview:[l({click:()=>{app.notify({title:"Notification Title",description:"This is a notification.",icon:i.information})}},"Show Notification")],code:`app.notify({
    title: 'Notification Title',
    description: 'This is a notification.',
    icon: Icons.warning,
    type: 'warning',
    duration: 5000 // in milliseconds, leave blank for the default 4 seconds, or use 'infinite' to keep it until dismissed
})`})]),ma=()=>o({class:"absolute h-full rounded-full bg-primary transition-all duration-300",style:"width: [[progress]]%;"}),pa=Y({render(){return o({class:"relative w-full h-4 rounded-full bg-muted"},[ma()])},state(){return{progress:this.progress??0}},reset(){this.state.progress=0},uploadProgress(e){if(e.lengthComputable){const a=Math.round(e.loaded*100/e.total);this.set(a)}},set(e){e<0&&(e=0),e>100&&(e=100),this.state.progress=e}}),fa=()=>f({title:"Progress Bars",description:"Progress bars are a great way to show the progress of a task or process."},[s({title:"Usage",description:"Import the progress bar atom and use it in your components. The progress bar can be used to show the progress of a task or process.",preview:[new pa({cache:"progress",progress:20})],code:`import { ProgressBar } from "@components/atoms/progress-bar.js";

new ProgressBar({ cache: 'progress', progress: 20 })`})]),ga=M({state:{loaded:!1},render(){return o({class:"flex flex-auto flex-col max-w-[350px]"},[o({class:"my-8"},[l({variant:"outline",click:()=>this.state.toggle("loaded")},"Toggle Loaded")]),o({class:"flex items-center bg-card rounded-md border shadow-md w-full max-w-md"},[o({class:"flex flex-auto gap-4 p-4",onState:["loaded",e=>e?[w({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN",size:"md"}),o({class:"flex flex-auto flex-col"},[r({class:"text-lg font-semibold text-foreground"},"Leslie Alexander"),c({class:"text-sm text-muted-foreground m-0"},"leslie.alexander@example.com")])]:[I({shape:"circle",width:"w-12",height:"h-12"}),o({class:"flex flex-auto flex-col gap-2"},[I({width:"w-3/4",height:"h-6"}),I({width:"w-1/2",height:"h-4"})])]]})])])}}),ha=()=>f({title:"Skeletons",description:"Skeletons are components that are used to show a placeholder for content that is loading."},[s({title:"Usage",description:"The skeleton component is used to show a placeholder for content that is loading.",preview:[o({class:"flex flex-auto space-x-4 w-full max-w-64"},[I({shape:"circle",width:"w-10",height:"h-10"}),o({class:"flex flex-auto flex-col space-y-2"},[I({width:"w-3/4",height:"h-4"}),I({width:"w-1/2",height:"h-4"})])])],code:`import { Skeleton } from "@components/atoms/skeleton.js";
import { Div } from '@base-framework/atoms';

Div({ class: 'flex flex-auto space-x-4 w-full max-w-64' }, [
    Skeleton({ shape: 'circle', width: 'w-10', height: 'h-10' }), // Circle skeleton for avatar
    Div({ class: 'flex flex-auto flex-col space-y-2' }, [
        Skeleton({ width: 'w-3/4', height: 'h-4' }), // Long rectangle for main text
        Skeleton({ width: 'w-1/2', height: 'h-4' })  // Shorter rectangle for subtext
    ])
])`}),s({title:"Skeleton Post",description:"This is a skeleton post.",preview:[o({class:"space-y-4 flex flex-auto flex-col w-full max-w-64"},[I({width:"w-full",height:"h-32",shape:"rectangle"}),o({class:"space-y-2"},[I({width:"w-3/4",height:"h-4"}),I({width:"w-1/2",height:"h-4"})])])],code:`import { Skeleton } from "@components/atoms/skeleton.js";
import { Div } from '@base-framework/atoms';

Div({ class: 'space-y-4 flex flex-auto flex-col space-x-4 w-full max-w-64' }, [
    // Large rectangle for image or main content
    Skeleton({ width: 'w-full', height: 'h-32', shape: 'rectangle' }),

    // Text line placeholders
    Div({ class: 'space-y-2' }, [
        Skeleton({ width: 'w-3/4', height: 'h-4' }), // Longer text line
        Skeleton({ width: 'w-1/2', height: 'h-4' })  // Shorter text line
    ])
])`}),s({title:"Skeleton with Avatar Loading",description:"This example demonstrates a skeleton loading animation that transitions to an avatar and user info after 3 seconds.",preview:[new ga],code:`import { Skeleton } from "@components/atoms/skeleton.js";
import { Avatar } from "@components/molecules/avatar.js";
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

LoadingAvatar();`})]);class ba extends z{render(){return o({class:"tab-panel"},[new Se({class:this.class,options:this.options}),T({class:"tab-content",switch:this.addGroup()})])}addGroup(){let t;const a=[],n=this.options;for(let d=0,h=n.length;d<h;d++)t=n[d],a.push({uri:t.uri||t.href,component:t.component,title:t.title||null,persist:!0});return a}}const be=u((e,t)=>o({class:"py-4"},t)),xa=()=>f({title:"Tabs",description:"Displays a tab or a component that looks like a tab."},[s({title:"Button Tab",description:"This is a button tab. The buttons to not route.",preview:[new Ce({class:"mt-4 max-w-[400px]",options:[{label:"Preview",value:"preview",layout:be([])},{label:"Code",value:"code",layout:be([])}]})],code:`
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
);`}),s({title:"Link Tab",description:"This is a link tab. The buttons route to a different page.",preview:[new ba({class:"max-w-[400px]",options:[{label:"Example 1",href:"docs/components/tabs/example-1",component:new _({class:"p-8"},"This is an example 1 tab panel.")},{label:"Example 2",href:"docs/components/tabs/example-2",component:new _({class:"p-8"},"This is an example 2 tab panel.")},{label:"Example 3",href:"docs/components/tabs/example-3",component:new _({class:"p-8"},"This is an example 3 tab panel.")}]})],code:`
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
);`}),s({title:"Tab Group",description:"This is a tab group. The buttons update the state.",preview:[new vt({options:[{label:"Music",value:"music"},{label:"Podcasts",value:"podcasts"},{label:"Live",value:"live"}],onSelect:e=>console.log(e)})],code:`import { TabGroup } from "@components/organisms/tabs/tab-group.js";

new TabGroup({
    options: [
        { label: 'Music', value: 'music' },
        { label: 'Podcasts', value: 'podcasts' },
        { label: 'Live', value: 'live' }
    ],
    onSelect: (value) => console.log(value)
})`}),s({title:"Tab Navigation",description:"This is a tab navigation. The buttons update the state.",preview:[new Se({options:[{label:"Example 1",href:"docs/components/tabs/example-1"},{label:"Example 2",href:"docs/components/tabs/example-2"},{label:"Example 3",href:"docs/components/tabs/example-3"}]})],code:`import { TabGroup } from "@components/organisms/tabs/tab-navigation.js";

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
})`})]),va=()=>f({title:"Tooltips",description:"Tooltips are small popups that appear when a user hovers over an element."},[s({title:"Usage",description:"Import the tooltip atom and use it in your components.",preview:[o({class:"flex gap-2 flex-wrap"},[A({content:"This is a tooltip."},[l("Hover me")])])],code:`import { Button } from "@components/atoms/buttons/buttons.js";
import { Tooltip } from "@components/atoms/tooltip.js";

Tooltip({ content: 'This is a tooltip.' }, [
    Button('Hover me')
])`}),s({title:"Bottom Tooltip",description:"This will show the tooltip at the bottom of the target element.",preview:[o({class:"flex gap-2 flex-wrap"},[A({content:"This is a tooltip.",position:"bottom"},[l("Hover me")])])],code:`Tooltip({ content: 'This is a tooltip.', position: 'bottom' }, [
    Button('Hover me')
])`}),s({title:"Top-Right Tooltip",description:"This will show the tooltip at the top-right of the target element.",preview:[o({class:"flex gap-2 flex-wrap"},[A({content:"This is a tooltip.",position:"top-right"},[l("Hover me")])])],code:`Tooltip({ content: 'This is a tooltip.', position: 'top-right' }, [
    Button('Hover me')
])`}),s({title:"Top-Left Tooltip",description:"This will show the tooltip at the top-left of the target element.",preview:[o({class:"flex gap-2 flex-wrap"},[A({content:"This is a tooltip.",position:"top-left"},[l("Hover me")])])],code:`Tooltip({ content: 'This is a tooltip.', position: 'top-left' }, [
    Button('Hover me')
])`}),s({title:"Bottom-Right Tooltip",description:"This will show the tooltip at the bottom-right of the target element.",preview:[o({class:"flex gap-2 flex-wrap"},[A({content:"This is a tooltip.",position:"bottom-right"},[l("Hover me")])])],code:`Tooltip({ content: 'This is a tooltip.', position: 'bottom-right' }, [
    Button('Hover me')
])`}),s({title:"Bottom-Left Tooltip",description:"This will show the tooltip at the bottom-left of the target element.",preview:[o({class:"flex gap-2 flex-wrap"},[A({content:"This is a tooltip.",position:"bottom-left"},[l("Hover me")])])],code:`Tooltip({ content: 'This is a tooltip.', position: 'bottom-left' }, [
    Button('Hover me')
])`}),s({title:"Left Tooltip",description:"This will show the tooltip to the left of the target element.",preview:[o({class:"flex gap-2 flex-wrap"},[A({content:"This is a tooltip.",position:"left"},[l("Hover me")])])],code:`Tooltip({ content: 'This is a tooltip.', position: 'left' }, [
    Button('Hover me')
])`}),s({title:"Right Tooltip",description:"This will show the tooltip to the right of the target element.",preview:[o({class:"flex gap-2 flex-wrap"},[A({content:"This is a tooltip.",position:"right"},[l("Hover me")])])],code:`Tooltip({ content: 'This is a tooltip.', position: 'right' }, [
    Button('Hover me')
])`}),c({class:"text-muted-foreground text-sm mt-4"},"The tooltip position can be set to: top, top-right, top-left, bottom, bottom-right, bottom-left, left, right.")]),xe=(e,t,a)=>(a="Icons"+(a?"."+a:""),o({class:"flex flex-auto flex-col items-center gap-2 max-w-[150px] h-[8.5rem] cursor-pointer"},[o({class:"flex flex-auto w-full h-full justify-center items-center flex-wrap rounded-lg border bg-card text-base shadow-sm hover:bg-accent hover:text-accent-foreground",click:()=>{navigator.clipboard.writeText(`${a}.${t}`),app.notify({title:"Icon copied",description:`The icon '${a}.${t}' has been copied to your clipboard.`,icon:i.clipboard.checked})}},[b(e)]),o({class:"text-muted-foreground"},t)])),qe=(e,t,a)=>{const n=typeof e=="object";n&&t.push(c({class:"text-muted-foreground"},"path: "+a+".{icon}"));const d=[];if(t.push(o({class:"flex flex-auto flex-wrap gap-2 my-8"},d)),n===!1)d.push(xe(e,a));else for(var h in e){if(e.hasOwnProperty(h)===!1)continue;const q=e[h];if(typeof q!="object"){d.push(xe(q,h,a));continue}const Oe=`${a}.${h}`;qe(q,t,Oe)}},wa=e=>{if(!e||typeof e!="object")return;const t=[];for(let[a,n]of Object.entries(e)){if(a==="parse")continue;t.push(ie({id:a.toLowerCase(),class:"text-2xl font-bold"},pt.titleCase(a))),qe(n,t,a)}return t},ya=()=>f({title:"Icons",description:"The icons are from the Hericon library. They are SVG icons that can be used in your project. This icon set uses the outline style."},[k({href:"https://heroicons.com/",target:"_blank",class:"bttn link"},"link: Hericons"),s({title:"Icons",description:"This is an icon.",preview:[K({html:i.home})],code:`
import { Icons } from '@components/icons/icons.js';
import { I } from '@base-framework/atoms';

export const HomeIcon = () => (
    I({ html: Icons.home} )
);`}),s({title:"Icon Atom",description:"An Icon is a helper atom that makes it easier to use icons in your project. ",preview:[b(i.home)],code:`
import { Icon } from '@components/atoms/icon.js';

Icon(Icons.home);`}),s({title:"Icon Sizes",description:"Icons can be rendered in various sizes using the `class` property to apply Tailwind CSS classes. The following sizes are available: `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, and `3xl`.",preview:[o({class:"flex flex-wrap gap-4 items-center"},[o({class:"flex flex-col items-center justify-center"},[b({size:"xs"},i.home),r({class:"text-sm text-muted-foreground"},"xs")]),o({class:"flex flex-col items-center justify-center"},[b({size:"sm"},i.home),r({class:"text-sm text-muted-foreground"},"sm")]),o({class:"flex flex-col items-center justify-center"},[b({size:"md"},i.home),r({class:"text-sm text-muted-foreground"},"md")]),o({class:"flex flex-col items-center justify-center"},[b({size:"lg"},i.home),r({class:"text-sm text-muted-foreground"},"lg")]),o({class:"flex flex-col items-center justify-center"},[b({size:"xl"},i.home),r({class:"text-sm text-muted-foreground"},"xl")]),o({class:"flex flex-col items-center justify-center"},[b({size:"2xl"},i.home),r({class:"text-sm text-muted-foreground"},"2xl")]),o({class:"flex flex-col items-center justify-center"},[b({size:"3xl"},i.home),r({class:"text-sm text-muted-foreground"},"3xl")])])],code:`
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
Span('3X Large (16x16)')`}),o({class:"my-20"},[re({class:"text-2xl font-bold"},"Default Icons"),c({class:"text-muted-foreground"},'A few of the icons have been saved to the "Icons" object. You can use these icons in your project. Click to copy the Icon path. Here is a list of the icons that are available:')]),wa(i)]),ka=()=>f({title:"Introduction",description:"The App Shell is a versatile and modular framework, designed to speed up front-end application development using Tailwind CSS and Shadcn-inspired themes. It provides a comprehensive set of components and atoms, created with the Base framework."},[T({class:"space-y-4"},[y({class:"text-lg font-bold"},"The App Shell"),c({class:"text-muted-foreground"},[r("The App Shell project is built to streamline front-end application development. As a modular and scalable PWA (Progressive Web App), it offers easy installation across devices, making it suitable as a foundational framework for new projects.")]),c({class:"text-muted-foreground"},[r("Designed with accessibility, customization, and ease of use in mind, the App Shell accelerates setup, allowing developers to focus on creating functionality without reinventing the wheel.")])]),o({class:"items-start justify-center gap-6 rounded-lg pt-0 md:p-8 md:mt-6 md:grid lg:grid-cols-2 xl:grid-cols-2"},[o({class:"col-span-2 grid items-start gap-6 lg:col-span-1"},[Ae(),Le(),De()]),o({class:"col-span-2 grid items-start gap-6 lg:col-span-1"},[Fe({members:[{name:"Leslie Alexander",email:"leslie.alexander@example.com",image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"owner",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Michael Foster",email:"michael.foster@example.com",image:"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"member",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Dries Vincent",email:"dries.vincent@example.com",image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"owner",status:"online"}]}),Me({link:"http://example.com/link/to/document",people:[{name:"Leslie Alexander",email:"leslie.alexander@example.com",image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"owner",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Michael Foster",email:"michael.foster@example.com",image:"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"member",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Dries Vincent",email:"dries.vincent@example.com",image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"owner",status:"online"}]}),Be({startDate:"2023-01-23"}),Pe()])]),T({class:"space-y-4 mt-12"},[y({class:"text-lg font-bold"},"Theme and Styling"),c({class:"text-muted-foreground"},[r("This project is powered by Tailwind CSS, providing a highly customizable, utility-first approach to styling. Additionally, the theme draws inspiration from "),k({href:"https://github.com/shadcn",class:"underline",target:"_blank"},"Shadcn’s UI component library"),r(", combining best practices for consistency and flexibility.")])]),T({class:"space-y-4 mt-12"},[y({class:"text-lg font-bold"},"Icons"),c({class:"text-muted-foreground"},[r("This project utilizes Heroicons, a comprehensive icon set provided by the Tailwind Labs team. These icons are fully customizable and designed to fit seamlessly within Tailwind-based applications.")]),c({class:"text-muted-foreground"},[r("For more details on available icons, visit the "),k({href:"https://heroicons.com",class:"underline",target:"_blank"},"Heroicons website"),r(".")])]),T({class:"space-y-4 mt-12"},[y({class:"text-lg font-bold"},"Components and Atoms"),c({class:"text-muted-foreground"},[r("Leveraging the Base framework, this project provides a comprehensive set of reusable components and atoms. Inspired by projects like "),k({href:"https://github.com/shadcn/ui",class:"underline",target:"_blank"},"shadcn/ui"),r(", the components are crafted to balance flexibility and simplicity, allowing developers to integrate pre-designed elements or customize them as needed.")]),c({class:"text-muted-foreground"},[r("You can explore components like "),k({href:"/docs/components/buttons",class:"underline"},"Buttons"),r(", "),k({href:"/docs/components/tabs",class:"underline"},"Tabs"),r(", and "),k({href:"/docs/components/forms",class:"underline"},"Forms"),r(" to quickly build complex UIs without starting from scratch.")])]),T({class:"space-y-4 mt-12"},[y({class:"text-lg font-bold"},"Development Guidelines"),c({class:"text-muted-foreground"},[r("Modules are an essential part of the App Shell's extensibility. You can add new features by creating modules in the modules folder and registering them in the "),k({href:"/docs/imported-modules",class:"underline"},"imported-modules.js"),r(" file. This structure supports modularity, making it easier to maintain and scale projects.")]),c({class:"text-muted-foreground"},[r("Each module includes its own routes, links, and options, as demonstrated in the example provided. This architecture ensures that modules are self-contained and can be easily integrated into any project using the App Shell framework.")]),Ie(`import { Icons } from '@components/icons/icons.js';
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
});`)]),T({class:"space-y-4 mt-12"},[y({class:"text-lg font-bold"},"Contributors and Community"),c({class:"text-muted-foreground"},[r("The App Shell is an open-source project, and contributions from the community are welcome. The project is maintained by a dedicated developer who aims to continuously enhance its functionality.")]),c({class:"text-muted-foreground"},[r("For information on contributing, check the "),k({href:"https://github.com/chrisdurfee/next-app-shell",class:"underline",target:"_blank"},"GitHub repository"),r(" and join the community discussions to collaborate and innovate.")])])]),ve=window.matchMedia,oe=u(({value:e,label:t,icon:a})=>P({class:'text-sm gap-1 font-medium leading-none disabled:cursor-not-allowed disabled:opacity-70 flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground data-[state="active"]:border-primary [&:has([data-state="active"])]:border-primary',onState:["method",{active:e}],dataSet:["method",["state",e,"active"]],click:(n,{state:d})=>{d.method=e,localStorage.setItem("theme",e),e==="system"&&localStorage.removeItem("theme"),Ta(e)}},[b(a),r(t)])),Ta=e=>{var n;const t=document.documentElement;if(e==="system"&&(e=(n=window.matchMedia)!=null&&n.call(window,"(prefers-color-scheme: dark)").matches?"dark":"light"),ve&&!ve("(prefers-color-scheme: "+e+")").matches){t.classList.add(e);return}const a=e==="light"?"dark":"light";t.classList.remove(a)},Sa=M({render(){return o({class:"flex flex-auto flex-col"},[o({class:"grid grid-cols-3 gap-4"},[oe({label:"System",value:"system",icon:i.adjustments.horizontal}),oe({label:"Light",value:"light",icon:i.sun}),oe({label:"Dark",value:"dark",icon:i.moon})])])},state(){return{method:window.localStorage.getItem("theme")??"system"}}}),Ca=e=>o({class:"flex flex-auto flex-col items-center gap-2 max-w-[150px] h-[8.5rem] cursor-pointer"},[o({class:`flex flex-auto w-full h-full min-h-[136px] justify-center items-center flex-wrap rounded-lg border text-base shadow-sm ${e.class}`,click:()=>{navigator.clipboard.writeText(`${e.class}`),app.notify({title:"Color copied",description:`The color '${e.class}' has been copied to your clipboard.`,icon:i.clipboard.checked})}}),o({class:"text-sm text-muted-foreground"},e.var)]),v=(e,t)=>T({class:"flex flex-auto flex-col gap-2"},[c({class:"text-base text-muted-foreground"},e),o({class:"flex flex-auto flex-wrap gap-2 my-2",map:[t,Ca]})]),Ia=e=>o({class:"flex flex-auto flex-col gap-12"},[ie({class:"text-2xl font-bold"},"Theme Toggle"),new Sa,ie({class:"text-2xl font-bold"},"Color Guide"),v("Default background color of <body />...etc",[{var:"--backround",class:"bg-backround"},{var:"--foreground",class:"bg-foreground"}]),v("Muted backgrounds such as <TabsList />, <Skeleton /> and <Switch />",[{var:"--muted",class:"bg-muted"},{var:"--muted-foreground",class:"bg-muted-forground"}]),v("Background color for <Card />",[{var:"--card",class:"bg-card"},{var:"--card-foreground",class:"bg-card-foreground"}]),v("Background color for popovers such as <DropdownMenu />, <HoverCard />, <Popover />",[{var:"--popover",class:"bg-popover"},{var:"--popover-foreground",class:"bg-popover-foreground"}]),v("Default border color",[{var:"--border",class:"bg-border"}]),v("Border color for inputs such as <Input />, <Select />, <Textarea />",[{var:"--input",class:"bg-input"}]),v("Primary colors for <Button />",[{var:"--primary",class:"bg-primary"},{var:"--primary-foreground",class:"bg-primary-foreground"}]),v("Secondary colors for <Button />",[{var:"--secondary",class:"bg-secondary"},{var:"--secondary-foreground",class:"bg-secondary-foreground"}]),v("Used for accents such as hover effects on <DropdownMenuItem>, <SelectItem>...etc",[{var:"--accent",class:"bg-accent"},{var:"--accent-foreground",class:"bg-accent-foreground"}]),v('Used for destructive actions such as <Button variant="destructive">',[{var:"--destructive",class:"bg-destructive"},{var:"--destructive-foreground",class:"bg-destructive-foreground"}]),v('Used for warning actions such as <Button variant="warning">',[{var:"--warning",class:"bg-warning"},{var:"--warning-foreground",class:"bg-warning-foreground"}]),v("Used for focus ring",[{var:"--ring",class:"bg-ring"}]),v("Border radius for card, input and buttons",[{var:"--radius",class:"bg-radius"}])]),ja=()=>f({title:"Theme",description:"The theme is using Tailwind CSS and is based on Shadcn UI. The theme is customizable and can be extended. It comes with light and dark theme support."},[k({href:"https://ui.shadcn.com/docs/theming",target:"_blank",class:"bttn link"},"link: Shadcn"),o({class:"my-20"},[re({class:"text-2xl font-bold"},"Default Styles"),c({class:"text-muted-foreground"},"The default styles are defined in the Tailwind CSS configuration file and in the base CSS file. Here's the list of variables available for customization:")]),Ia(),o({class:"flex flex-auto flex-col gap-2 mt-20"},[y({class:"text-2xl font-bold"},"Text Sizes"),c({class:"text-muted-foreground text-3xl"},"Text-3xl A test sentence."),c({class:"text-muted-foreground text-2xl"},"Text-2xl A test sentence."),c({class:"text-muted-foreground text-xl"},"Text-xl A test sentence."),c({class:"text-muted-foreground text-lg"},"Text-lg A test sentence."),c({class:"text-muted-foreground text-base"},"Text-base A test sentence."),c({class:"text-muted-foreground text-sm"},"Text-sm A test sentence."),c({class:"text-muted-foreground text-xs"},"Text-xs A test sentence.")])]),m=(e,t,a)=>({uri:e,title:t,component:a()}),Aa=e=>[m(`${e}`,"Introduction",ka),m(`${e}/theme`,"Theme",ja),m(`${e}/icons`,"Icons",ya),m(`${e}/components/buttons*`,"Buttons",Ot),m(`${e}/components/badges*`,"Badges",Mt),m(`${e}/components/tabs*`,"Tabs",xa),m(`${e}/components/modals*`,"Modals",ca),m(`${e}/components/notifications*`,"Notifications",ua),m(`${e}/components/dialogs*`,"Modals",Lo),m(`${e}/components/cards*`,"Cards",po),m(`${e}/components/calendars*`,"Calendars",Ht),m(`${e}/components/avatars*`,"Avatars",Bt),m(`${e}/components/inputs*`,"Inputs",oa),m(`${e}/components/forms*`,"Forms",Vo),m(`${e}/components/alerts*`,"Alerts",Dt),m(`${e}/components/comboboxes*`,"Comboboxes",vo),m(`${e}/components/lists*`,"Lists",sa),m(`${e}/components/data-tables*`,"Data Tables",To),m(`${e}/components/breadcrumbs*`,"Breadcrumbs",qt),m(`${e}/components/navigations*`,"Navigations",da),m(`${e}/components/progress-bars*`,"Progress Bars",fa),m(`${e}/components/skeletons*`,"Skeletons",ha),m(`${e}/components/tooltips*`,"Tooltips",va),m(`${e}/components/dropdown-menus*`,"Dropdown Menus",Ro)],Da=e=>[{href:`${e}`,label:"Introduction",exact:!0},{href:`${e}/theme`,label:"Theme",exact:!0},{href:`${e}/icons`,label:"Icons"},{group:"Components",options:[{label:"Buttons",href:`${e}/components/buttons`},{label:"Badges",href:`${e}/components/badges`},{label:"Tabs",href:`${e}/components/tabs`},{label:"Modals",href:`${e}/components/modals`},{label:"Notifications",href:`${e}/components/notifications`},{label:"Dialogs",href:`${e}/components/dialogs`},{label:"Cards",href:`${e}/components/cards`},{label:"Calendars",href:`${e}/components/calendars`},{label:"Avatars",href:`${e}/components/avatars`},{label:"Inputs",href:`${e}/components/inputs`},{label:"Forms",href:`${e}/components/forms`},{label:"Alerts",href:`${e}/components/alerts`},{label:"Comboboxes",href:`${e}/components/comboboxes`},{label:"Lists",href:`${e}/components/lists`},{label:"Data Tables",href:`${e}/components/data-tables`},{label:"Breadcrumbs",href:`${e}/components/breadcrumbs`},{label:"Navigations",href:`${e}/components/navigations`},{label:"Progress Bars",href:`${e}/components/progress-bars`},{label:"Skeletons",href:`${e}/components/skeletons`},{label:"Tooltips",href:`${e}/components/tooltips`},{label:"Dropdown Menus",href:`${e}/components/dropdown-menus`}]}],Ba=()=>new ft({backHref:"aside/"},[new _([o([B([ye("Overlay")]),o({class:"contained"},[gt()])])])]),La=e=>[{uri:`${e}/overlay-test`,component:Ba()}],U="docs",za=()=>new Re({title:"Documentation",basePath:U,routes:La(U),switch:Aa(U),links:Da(U)});export{za as DocumentationPage,za as default};
