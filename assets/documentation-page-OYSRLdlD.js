import{P as Q,A as Ue}from"./panel-BQX0IkUW.js";import{w as E,m as a,R as k,l as le,D as q,H as W,d as F,Q as u,p as Ve,n as _e,I as i,U as P,a as J,b as c,h as Ge,e as Qe,C as ye,A as V,k as Je,y as r,_ as w,P as U,T as y,B as l,F as K,L as Ye,o as ke,q as ue,f as Y,r as Te,t as Ke,s as I,u as z,v as M,x as Ze,z as T,E as R,J as v,K as Xe,M as et,Z as tt,N as Se,W as me,X as ot,Y as _,$ as at,a0 as Ce,a1 as je,a2 as ne,a3 as re,a4 as st,a5 as te,a6 as nt,a7 as rt,c as it,a8 as N,S as j,a9 as pe,aa as lt,ab as ie,ac as ct,O as dt,G as ut}from"./index-C-mqrbU1.js";import{T as mt}from"./tab-group-1oLdVXBH.js";import{T as A}from"./tooltip-B_0s6O7s.js";const pt=e=>W({class:"inline-flex flex-auto items-center justify-center whitespace-nowrap rounded-sm text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm",dataSet:["selected",["state",e.value,"active"]]},[F({class:"flex flex-auto justify-center items-center px-3 py-1.5",onSet:["selected",{selected:e.value}],click:t=>e.callBack(e.value)},e.label)]),ft=(e,t)=>(e.callBack=t,pt(e)),ht=e=>le({class:`tab items-center justify-center rounded-md bg-muted p-1 text-muted-foreground ${e.class}`},[q({class:"flex flex-auto flex-row",map:[e.options,t=>ft(t,e.callBack)]})]);class Ie extends E{render(){const t=this.select.bind(this);return a({class:""},[ht({class:this.class,options:this.options,callBack:t}),k({class:"tab-content",onState:["selected",this.updateContent.bind(this)]})])}getFirstValue(){var t;return(t=this.options[0])==null?void 0:t.value}update(){const t=this.state.get("selected");this.select(null),this.select(t)}select(t){this.state.selected=t}updateContent(t){const o=this.options;if(!o||o.length<1)return;const s=o[0];for(const d of o)if(d.value===t)return d.layout;return s.layout}setupStates(){const t=this.callBack,o=typeof t;return{selected:{state:this.getFirstValue(),callBack(s){o==="function"&&t(s)}}}}}const De=u((e,t)=>Ve({class:"flex p-4 min-h-[350px] max-h-[650px] overflow-x-auto rounded-lg border bg-muted whitespace-break-spaces break-all cursor-pointer"},[_e({class:"font-mono flex-auto text-sm text-wrap",click:()=>{navigator.clipboard.writeText(t[0].textContent),app.notify({title:"Code copied",description:"The code has been copied to your clipboard.",icon:i.clipboard.checked})}},t)])),gt=u((e,t)=>a({class:"flex flex-auto p-4 min-h-[350px] max-h-[650px] overflow-x-auto rounded-lg border bg-card"},[a({class:"preview flex flex-auto justify-center items-center"},t)])),fe=u((e,t)=>a({class:"py-4"},t)),bt=e=>new Ie({class:"mt-4 max-w-[400px]",options:[{label:"Preview",value:"preview",layout:fe([gt(e.preview)])},{label:"Code",value:"code",layout:fe([De(e.code)])}]}),xt=u(({title:e,description:t})=>P({class:"flex flex-col"},[J({class:"scroll-m-20 text-2xl font-bold tracking-tight"},e),t&&c({class:"text-base text-muted-foreground py-2 max-w-[700px]"},t)])),n=u((e,t)=>k({class:"grid py-4"},[xt({title:e.title,description:e.description}),bt({preview:e.preview,code:e.code})]));class wt extends Ge{render(){return Qe([a({class:"contained px-4 flex flex-auto flex-col"},this.children)])}}const vt=u(({title:e,description:t})=>P({class:"flex flex-col"},[ye({class:"scroll-m-20 text-3xl font-bold tracking-tight"},e),c({class:"text-base text-muted-foreground py-2 max-w-[700px]"},t)])),yt=u((e,t)=>a({class:"contained py-8"},[vt(e),k({class:"pb-12 pt-8"},t)])),f=u((e,t)=>new wt([yt(e,t)])),kt=()=>f({title:"Alerts",description:"Alerts are used to provide feedback to the user about the outcome of an action or to inform them of important information."},[n({title:"Default Alert",description:"This is a standard alert without any specific type.",preview:[V({title:"Notice",description:"This is a default alert without a specific type.",icon:i.information})],code:`import { Alert } from "@components/molecules/alert.js";
import { Icons } from "@components/icons/icons.js";

Alert({
    title: 'Notice',
    description: 'This is a default alert without a specific type.',
    icon: Icons.information
})`}),n({title:"Info Alert",description:"An info alert that provides general information to the user.",preview:[V({title:"Heads up!",description:"You can add components to your app using the CLI.",icon:i.information,type:"info"})],code:`Alert({
    title: 'Heads up!',
    description: 'You can add components to your app using the CLI.',
    icon: Icons.information,
    type: 'info'
})`}),n({title:"Warning Alert",description:"A warning alert to caution the user about something important.",preview:[V({title:"Warning!",description:"Please check your input before proceeding.",icon:i.warning,type:"warning"})],code:`Alert({
    title: 'Warning!',
    description: 'Please check your input before proceeding.',
    icon: Icons.warning,
    type: 'warning'
})`}),n({title:"Destructive Alert",description:"A destructive alert to inform the user of an error or serious issue.",preview:[V({title:"Error!",description:"Something went wrong. Please try again later.",icon:i.shield,type:"destructive"})],code:`Alert({
    title: 'Error!',
    description: 'Something went wrong. Please try again later.',
    icon: Icons.error,
    type: 'destructive'
})`})]),Tt=u(({src:e,alt:t})=>Je({class:"absolute w-full h-full rounded-full object-cover fadeIn",src:e,alt:t,error:o=>o.target.style.display="none"})),St=e=>a({class:"flex items-center justify-center w-full h-full rounded-full bg-muted text-muted-foreground font-medium"},[r(e)]),Ct=e=>{switch(e){case"xs":return"h-6 w-6";case"sm":return"h-8 w-8";case"md":return"h-12 w-12";case"lg":return"h-16 w-16";case"xl":return"h-24 w-24";case"2xl":return"h-32 w-32";case"3xl":return"h-48 w-48";default:return"h-12 w-12"}},x=u(({src:e,alt:t,fallbackText:o,size:s})=>(s=Ct(s),a({class:`relative flex items-center justify-center ${s}`},[Tt({src:e,alt:t}),St(o)]))),jt=()=>f({title:"Avatars",description:"Avatars are used to represent users or objects visually, with customizable sizes and optional status indicators."},[n({title:"Extra Small Avatar (xs)",description:"An extra small avatar for compact spaces.",preview:[x({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN",size:"xs"})],code:"Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: 'xs' })"}),n({title:"Small Avatar (sm)",description:"A small avatar suitable for lists and compact layouts.",preview:[x({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN",size:"sm"})],code:"Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: 'sm' })"}),n({title:"Medium Avatar (md)",description:"A medium-sized avatar, often used for standard profile images.",preview:[x({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN",size:"md"})],code:"Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: 'md' })"}),n({title:"Large Avatar (lg)",description:"A large avatar for prominent profile displays.",preview:[x({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN",size:"lg"})],code:"Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: 'lg' })"}),n({title:"Extra Large Avatar (xl)",description:"An extra-large avatar for detailed user profile sections.",preview:[x({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN",size:"xl"})],code:"Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: 'xl' })"}),n({title:"2x Extra Large Avatar (2xl)",description:"A double extra-large avatar for large displays.",preview:[x({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN",size:"2xl"})],code:"Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: '2xl' })"}),n({title:"3x Extra Large Avatar (3xl)",description:"A triple extra-large avatar for the largest profile displays.",preview:[x({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN",size:"3xl"})],code:"Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: '3xl' })"}),n({title:"Avatar with Name and Subtitle",description:"Display an avatar alongside a name and subtitle for user identification.",preview:[a({class:"flex items-center gap-4 p-4 bg-card rounded-md border shadow-md"},[x({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN",size:"lg"}),a({},[r({class:"text-lg font-semibold text-foreground"},"Leslie Alexander"),c({class:"text-sm text-muted-foreground"},"leslie.alexander@example.com")])])],code:`Div({ class: 'flex items-center gap-4 p-4 bg-card rounded-md border shadow-md' }, [
    Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: 'lg' }),
    Div({}, [
        Span({ class: 'text-lg font-semibold text-foreground' }, 'Leslie Alexander'),
        P({ class: 'text-sm text-muted-foreground' }, 'leslie.alexander@example.com')
    ])
])`}),n({title:"Avatar with Online Status",description:"Displays an avatar with a small online status indicator.",preview:[a({class:"relative flex items-center gap-4 p-4 bg-card rounded-md border shadow-md"},[a({class:"relative"},[x({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN",size:"lg"}),a({class:"absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 rounded-full"})]),a({},[r({class:"text-lg font-semibold text-foreground"},"Leslie Alexander"),c({class:"text-sm text-muted-foreground"},"leslie.alexander@example.com")])])],code:`Div({ class: 'relative flex items-center gap-4 p-4 bg-card rounded-md border shadow-md' }, [
    Div({ class: 'relative' }, [
        Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: 'lg' }),
        Div({ class: 'absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 rounded-full' }) // Online indicator
    ]),
    Div({}, [
        Span({ class: 'text-lg font-semibold text-foreground' }, 'Leslie Alexander'),
        P({ class: 'text-sm text-muted-foreground' }, 'leslie.alexander@example.com')
    ])
])`})]),he={gray:{backgroundColor:"bg-gray-50",textColor:"text-gray-600",ringColor:"ring-gray-500/10"},red:{backgroundColor:"bg-red-50",textColor:"text-red-700",ringColor:"ring-red-600/10"},yellow:{backgroundColor:"bg-yellow-50",textColor:"text-yellow-800",ringColor:"ring-yellow-600/20"},green:{backgroundColor:"bg-green-50",textColor:"text-green-700",ringColor:"ring-green-600/20"},blue:{backgroundColor:"bg-blue-50",textColor:"text-blue-700",ringColor:"ring-blue-700/10"},indigo:{backgroundColor:"bg-indigo-50",textColor:"text-indigo-700",ringColor:"ring-indigo-700/10"},purple:{backgroundColor:"bg-purple-50",textColor:"text-purple-700",ringColor:"ring-purple-700/10"},pink:{backgroundColor:"bg-pink-50",textColor:"text-pink-700",ringColor:"ring-pink-700/10"},primary:{backgroundColor:"bg-primary",textColor:"text-primary-foreground",ringColor:"ring-primary/10"},secondary:{backgroundColor:"bg-secondary",textColor:"text-secondary-foreground",ringColor:"ring-secondary/10"},destructive:{backgroundColor:"bg-destructive",textColor:"text-destructive-foreground",ringColor:"ring-destructive/10"},warning:{backgroundColor:"bg-warning",textColor:"text-warning-foreground",ringColor:"ring-warning/10"},outline:{backgroundColor:"bg-background",textColor:"text-primary",ringColor:"ring-input"},ghost:{backgroundColor:"bg-background",textColor:"text-primary",ringColor:"ring-background"},link:{backgroundColor:"bg-background",textColor:"text-primary",ringColor:"ring-background"}},It=e=>he[e]||he.gray,Dt=e=>{const{backgroundColor:t,textColor:o,ringColor:s}=It(e);return`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors ${t} ${o} ${s}`},g=u((e,t)=>{const o=Dt(e==null?void 0:e.type);return r({...e,class:o},t)}),At=()=>f({title:"Badges",description:"Badges can be used to display a status or a count."},[n({title:"Badge",description:"This is a badge.",preview:[a({class:"flex gap-2 flex-wrap"},[g({type:"gray"},"Text"),g({type:"red"},"Text"),g({type:"yellow"},"Text"),g({type:"green"},"Text"),g({type:"blue"},"Text"),g({type:"indigo"},"Text"),g({type:"purple"},"Text"),g({type:"pink"},"Text"),g({type:"primary"},"Text"),g({type:"secondary"},"Text"),g({type:"destructive"},"Text"),g({type:"warning"},"Text"),g({type:"outline"},"Text"),g({type:"ghost"},"Text"),g({type:"link"},"Text")])],code:`
import { Button } from '@components/atoms/badges/badges.js';
import { Atom } from '@base-framework/base';

export const PrimaryBadge = Atom((props, children)) => (
    Badge({ ...props, type: 'gray' }, children)
);`})]),Bt=(e,t)=>y({href:e,"aria-current":t==="Breadcrumb"?"page":null,class:"text-muted-foreground hover:text-foreground"},[r(t)]),Lt=()=>r({class:"mx-2 text-muted-foreground","aria-hidden":!0,html:">"}),Ft=e=>a({class:"flex items-center"},[e.href?Bt(e.href,e.label):r(e.label),e.separator&&Lt()]),Pt=w({setData(){return new U({items:this.items||[]})},render(){return le({"aria-label":"Breadcrumb",class:"flex items-center space-x-1 text-sm"},[a({role:"list",class:"flex items-center",for:["items",(e,t)=>Ft({href:e.href,label:e.label,separator:t<this.data.items.length-1})]})])}}),Mt=[{href:"/",label:"Home"},{href:"/components",label:"Components"},{label:"Breadcrumb"}],$t=()=>f({title:"Breadcrumbs",description:"Breadcrumbs are a navigation aid that helps users understand their location within a website or application."},[n({title:"Usage",description:"To use the Breadcrumb component, import it and provide an array of items. Each item can have a label and an optional href.",preview:[new Pt({items:Mt})],code:`import { Breadcrumb } from "@components/molecules/breadcrumb/breadcrumb.js";

new Breadcrumb({ items: [
    { href: '/', label: 'Home' },
    { href: '/components', label: 'Components' },
    { label: 'Breadcrumb' } // Last item, no href needed
] })`})]),Et=()=>f({title:"Button",description:"Displays a button or a component that looks like a button."},[n({title:"Usage",description:"Import the button atom and use it in your components. This platform has variants for different use cases. The variant can be set using the `variant` prop.",preview:[l({variant:"primary"},"Click Me")],code:`import { Button } from '@components/atoms/buttons/buttons.js';

Button({ ...props, variant: 'secondary' }, primary)`}),P({class:"flex flex-col py-8"},[K({class:"text-3xl font-bold tracking-tight border-b pb-2"},"Variants")]),n({title:"Primary Button",description:"This is a primary button.",preview:[l({variant:"primary"},"Click Me")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const PrimaryButton = Atom((props, children) => (
    Button({ ...props, variant: 'primary' }, children)
);`}),n({title:"Secondary Button",preview:[l({variant:"secondary"},"Secondary")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const SecondaryButton = Atom((props, children) => (
    Button({ ...props, variant: 'secondary' }, children)
);`}),n({title:"Destructive Button",preview:[l({variant:"destructive"},"Destructive")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const DestructiveButton = Atom((props, children) => (
    Button({ ...props, variant: 'destructive' }, children)
);`}),n({title:"Warning Button",preview:[l({variant:"warning"},"Warning")],code:`import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const WarningButton = Atom((props, children) => (
    Button({ ...props, variant: 'warning' }, children)
);`}),n({title:"Outline Button",preview:[l({variant:"outline"},"Outline")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const OutlineButton = Atom((props, children) => (
    Button({ ...props, variant: 'outline' }, children)
);`}),n({title:"Ghost Button",preview:[l({variant:"ghost"},"Ghost")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const GhostButton = Atom((props, children) => (
    Button({ ...props, variant: 'ghost' }, children)
);`}),n({title:"Link Button",preview:[l({variant:"link"},"Link")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const LinkButton = Atom((props, children) => (
    Button({ ...props, variant: 'link' }, children)
);`}),n({title:"Icon Button",description:"Displays a button with an icon.",preview:[l({variant:"icon",icon:i.home})],code:`import { Button } from '@components/atoms/buttons/buttons.js';
import { Icons } from '@components/icons/icons.js';
import { Atom } from '@base-framework/base';

export const IconButton = Atom((props) => (
    Button({ ...props, variant: 'icon', icon: Icons.home })
);`}),n({title:"With Icon Button",preview:[l({variant:"withIcon",icon:i.home},"With Icon")],code:`import { Button } from '@components/atoms/buttons/buttons.js';
import { Icons } from '@components/icons/icons.js';

Button({ variant: 'withIcon', icon: Icons.home }, 'With Icon')`}),n({title:"Loading Button",preview:[Ye("With Icon")],code:`import { LoadingButton } from '@components/atoms/buttons/buttons.js';

LoadingButton('With Icon')`})]),Nt=()=>Y.formatTime("",24),Ot=()=>f({title:"Calendars",description:"This is the calendar component documentation."},[n({title:"Usage",description:"This is how you can use the calendar component.",preview:[new ke],code:`@components/organisms/calendar/calendar.js';

new Calendar()`}),n({title:"Dynamic Time",description:"This is how you can use the calendar component.",preview:[new ue({filter:()=>{let e="Morning";const t=Nt();return t>="18:00:00"?e="Evening":t>="12:00:00"&&(e="Afternoon"),`Good ${e}`}})],code:`import { DateTime } from "@base-framework/base";
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
})`}),n({title:"Dynamic Local Time by Time Frame",description:"This will show the time frame based on the local time. This will update the time frame every minute to keep the time frame updated.",preview:[new ue({dateTime:"2024-11-04T18:00:00",filter(e){const t=Y.getLocalTime(e,!0);return Y.getTimeFrame(t)}})],code:`import { DateTime } from "@base-framework/base";
import { DynamicTime } from "@base-framework/organisms";

new DynamicTime({
    dateTime: '2024-11-04T18:00:00',
    filter(date)
    {
        // convert to local time
        const localTime = DateTime.getLocalTime(date, true);
        return DateTime.getTimeFrame(localTime);
    }
})`})]),D=u((e,t)=>a({...e,class:`rounded-lg border bg-card text-card-foreground shadow-md min-w-[120px] min-h-[80px] my-5 mx-5 p-4 ${e.class||""}`},t)),Ht=u((e,t)=>a({...e,class:"flex flex-auto flex-col space-y-2"},t)),zt=u((e,t)=>Te({...e,class:"flex auto text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"},t)),Rt=u((e,t)=>c({...e,class:"text-sm text-muted-foreground"},t)),qt=u((e,t)=>c({...e,class:"text-sm text-destructive"},t)),Wt=e=>e.tag==="input"||e.tag==="select"||e.tag==="textarea",Ae=(e,t,o)=>e.map(s=>(s.children&&s.children.length>0&&(s.children=Ae(s.children,t,o)),s.required&&Wt(s)?{...s,aria:{invalid:["hasError"]},invalid:o,input:t}:s)),Ut=u((e,t)=>{const d=Ae(t,h=>{h.target.checkValidity()&&e.setError(null)},h=>{e.setError(h.target.validationMessage)});return a({...e,class:"w-full"},d)}),p=w({state(){return{error:null,hasError:!1,value:this.defaultValue??""}},render(){const e=this.name,t=this.getId(`${e}`),{label:o,description:s}=this,d=h=>{this.state.error=h,this.state.hasError=!!h};return a({class:"flex flex-auto space-y-4"},[Ht([zt({htmlFor:t},o),Ut({id:t,name:e,value:this.state.value,setError:d},this.children),s&&Rt({id:this.getId("description")},s),a({onState:["error",h=>h&&qt(h)]})])])}}),Vt=(e,t=null)=>{e.target.checkValidity()&&(e.preventDefault(),t&&t(e))},B=u((e,t)=>Ke({...e,submit:o=>Vt(o,e.submit),class:`space-y-8 w-full ${e.class??""}`},t)),$=({title:e,description:t})=>P({class:"text-left"},[K({class:"font-semibold tracking-tight text-2xl"},e),c({class:"text-sm text-muted-foreground"},t)]),_t=()=>a({class:"flex items-center justify-center gap-4"},[l({variant:"outline",class:"gap-2 w-full",click:()=>console.log("Sign in with Github"),"aria-label":"Sign in with Github"},[I(i.companies.gitHub),r("Github")]),l({variant:"outline",class:"gap-2 w-full",click:()=>console.log("Sign in with Google"),"aria-label":"Sign in with Google"},[I(i.companies.google),r("Google")])]),Gt=()=>B({submit:e=>{e.preventDefault(),console.log("Account created")}},[new p({name:"email",label:"Email"},[z({type:"email",placeholder:"m@example.com",required:!0,class:"border p-2 rounded-md w-full bg-background placeholder-muted-foreground text-foreground"})]),new p({name:"password",label:"Password"},[z({type:"password",placeholder:"Your password",required:!0,class:"border p-2 rounded-md w-full bg-background placeholder-muted-foreground text-foreground"})]),l({type:"submit",class:"w-full mt-4 py-2 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition"},"Create account")]),Be=()=>D({class:"w-full max-w-md mx-auto p-8 bg-card space-y-6"},[$({title:"Create an account",description:"Enter your email below to create your account"}),_t(),a({class:"relative"},[a({class:"absolute inset-0 flex items-center"},[r({class:"flex-grow border-t"})]),a({class:"relative flex justify-center text-xs uppercase"},[r({class:"bg-background px-2 text-muted-foreground"},"or continue with")])]),Gt()]),Z=w({state(){return{active:this.active??!1}},render(){return F({class:"inline-flex h-6 w-11 min-w-11 items-center rounded-full bg-muted transition-colors focus:outline-none",onState:["active",{"bg-primary":!0,"bg-muted":!1}],click:(t,{state:o})=>o.toggle("active")},[r({class:"absolute h-5 w-5 bg-background rounded-full shadow-md transform transition-transform",onState:["active",{"translate-x-[22px]":!0,"translate-x-[2px]":!1}]})])}}),oe=({title:e,description:t,defaultState:o,onChange:s})=>a({class:"flex items-start justify-between gap-2"},[a({class:"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex flex-col space-y-1"},[r({class:"font-medium text-foreground"},e),r({class:"font-normal leading-snug text-muted-foreground"},t)]),new Z({active:o,change:s})]),Le=()=>D({class:"w-full max-w-md mx-auto p-6 bg-card space-y-6"},[$({title:"Cookie Settings",description:"Manage your cookie settings here."}),a({class:"pt-0 grid gap-6"},[oe({title:"Strictly Necessary",description:"These cookies are essential in order to use the website and use its features.",defaultState:!0,onChange:e=>console.log("Strictly Necessary:",e)}),oe({title:"Functional Cookies",description:"These cookies allow the website to provide personalized functionality.",defaultState:!1,onChange:e=>console.log("Functional Cookies:",e)}),oe({title:"Performance Cookies",description:"These cookies help to improve the performance of the website.",defaultState:!1,onChange:e=>console.log("Performance Cookies:",e)})]),l({variant:"outline",class:"w-full",click:()=>console.log("Preferences saved")},"Save preferences")]),Qt=(e,t)=>!t.contains(e),Fe=w({state(){return{selectedDate:this.selectedDate??null,open:!1}},render(){const e=(o,{state:s})=>s.toggle("open"),t=o=>{this.state.selectedDate=o,this.state.open=!1};return a({class:"relative w-full max-w-[320px]"},[F({class:"flex items-center gap-2 w-full justify-between border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md h-10 px-4 py-2",click:e},[r({onState:["selectedDate",o=>o?Y.format("standard",o):"Pick a date"]}),M({html:i.calendar.days})]),a({class:"absolute mt-1 z-10 bg-background rounded-md shadow-lg",addEvent:["click",document,(o,{state:s,panel:d})=>{Qt(o.target,d)&&(s.open=!1)}],onState:["open",o=>o?new ke({selectedDate:this.state.selectedDate,selectedCallBack:t}):null]})])}}),Pe=({startDate:e})=>D({class:"w-full max-w-md mx-auto p-6 bg-card space-y-6"},[$({title:"Pick a Date",description:"When is the event?"}),a({class:"font-medium text-foreground"},[new Fe({selectedDate:e,selectedCallBack:t=>console.log(t)})])]),S=u(e=>({tag:"select",...e,class:`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${e.class||""}`,onCreated(t){e.options&&Ze.setupSelectOptions(t,e.options)}})),ae=u(({value:e,label:t,icon:o})=>F({class:'text-sm gap-1 font-medium leading-none disabled:cursor-not-allowed disabled:opacity-70 flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground data-[state="active"]:border-primary [&:has([data-state="active"])]:border-primary',onState:["method",{active:e}],dataSet:["method",["state",e,"active"]],click:(s,{state:d})=>d.method=e},[I(o),r(t)])),Jt=w({render(){return a({class:"flex flex-auto flex-col"},[a({class:"grid grid-cols-3 gap-4"},[ae({label:"Card",value:"card",icon:i.creditCard}),ae({label:"Paypal",value:"paypal",icon:i.companies.paypal}),ae({label:"Apple",value:"apple",icon:i.companies.apple})])])},state(){return{method:null}}}),Yt=()=>a({class:"flex items-center justify-center gap-4"},[new Jt]),Kt=()=>B({submit:e=>{e.preventDefault(),console.log("Payment method added")}},[new p({name:"name",label:"Name"},[T({type:"text",placeholder:"First Last",required:!0,class:"border p-2 rounded-md w-full bg-background placeholder-muted-foreground text-foreground"})]),new p({name:"card_number",label:"Card number"},[T({type:"text",placeholder:"1234 5678 9012 3456",required:!0,class:"border p-2 rounded-md w-full bg-background placeholder-muted-foreground text-foreground"})]),a({class:"flex gap-4 mt-4"},[new p({name:"month",label:"Expires"},[S({required:!0,class:"border p-2 rounded-md w-full bg-background text-foreground",options:[{value:"",label:"Month",disabled:!0},...Array.from({length:12},(e,t)=>({value:`${t+1}`,label:`${t+1}`.padStart(2,"0")}))]})]),new p({name:"year",label:"Year"},[S({required:!0,class:"border p-2 rounded-md w-full bg-background text-foreground",options:[{value:"",label:"Year",disabled:!0},...Array.from({length:10},(e,t)=>({value:`${new Date().getFullYear()+t}`,label:`${new Date().getFullYear()+t}`}))]})]),new p({name:"cvc",label:"CVC"},[T({type:"text",placeholder:"CVC",required:!0,class:"border p-2 rounded-md w-full bg-background placeholder-muted-foreground text-foreground"})])]),l({type:"submit",class:"w-full mt-4 py-2 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition"},"Continue")]),Me=()=>D({class:"w-full max-w-md mx-auto p-8 bg-card space-y-6"},[$({title:"Payment Method",description:"Add a new payment method to your account."}),Yt(),a({class:"space-y-4"},[Kt()])]),Zt=({name:e,description:t,stars:o,language:s,lastUpdated:d})=>a({class:"flex items-start justify-between py-4 border-b border-muted last:border-b-0"},[a({class:"flex flex-col"},[r({class:"font-semibold text-foreground"},e),r({class:"text-sm text-muted-foreground"},t),a({class:"flex space-x-4 text-sm text-muted-foreground mt-3"},[a({class:"flex items-center gap-2"},[I({class:" text-blue-500"},i.document.text),r(` ${s}`)]),a({class:"flex items-center"},[I(i.star),r(` ${o}`)]),a(`Updated ${d}`)])]),l({variant:"secondary",class:"px-3 py-1 gap-1 flex items-center rounded-md",click:()=>console.log(`Starred ${e}`)},[I(i.star),r("Star")])]),Xt=({projects:e})=>a({class:"space-y-3"},e.map(t=>Zt(t))),eo=[{name:"shadcn/ui",description:"Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.",stars:"20k",language:"TypeScript",lastUpdated:"April 2023"},{name:"base-framework",description:"A robust framework for building and structuring large-scale applications with ease.",stars:"2",language:"JavaScript",lastUpdated:"June 2024"}],to=()=>D({class:"w-full max-w-md mx-auto p-6 bg-card space-y-6"},[a({class:"font-semibold text-lg text-foreground"},"Projects"),Xt({projects:eo})]),oo=()=>B({submit:e=>{e.preventDefault(),console.log("Issue reported")}},[a({class:"flex flex-auto w-full gap-4"},[new p({name:"area",label:"Area"},[S({required:!0,class:"border p-2 rounded-md w-full bg-background text-foreground",options:[{value:"billing",label:"Billing"},{value:"technical",label:"Technical"},{value:"account",label:"Account"},{value:"other",label:"Other"}],defaultValue:"billing",change:e=>console.log(`Area selected: ${e.target.value}`)})]),new p({name:"security_level",label:"Security Level"},[S({required:!0,class:"border p-2 rounded-md w-full bg-background text-foreground",options:[{value:"severity_1",label:"Severity 1"},{value:"severity_2",label:"Severity 2"},{value:"severity_3",label:"Severity 3"}],defaultValue:"severity_2",change:e=>console.log(`Security Level selected: ${e.target.value}`)})])]),new p({name:"subject",label:"Subject"},[T({type:"text",placeholder:"I need help with...",required:!0,class:"border p-2 rounded-md w-full bg-background text-foreground placeholder-muted-foreground"})]),new p({name:"description",label:"Description"},[R({placeholder:"Please include all information relevant to your issue.",required:!0,class:"border p-2 rounded-md w-full bg-background text-foreground placeholder-muted-foreground"})]),a({class:"flex justify-end gap-4 mt-4"},[l({variant:"outline",class:"px-4 py-2",click:()=>console.log("Cancel clicked")},"Cancel"),l({type:"submit",class:"px-4 py-2 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition"},"Submit")])]),$e=()=>D({class:"w-full max-w-md mx-auto p-6 bg-card space-y-6"},[$({title:"Report an issue",description:"What area are you having problems with?"}),oo()]),ao=({link:e})=>a({class:"flex items-center gap-4 py-2"},[z({type:"text",value:e,readOnly:!0,class:"border p-2 rounded-md w-full bg-background text-foreground"}),l({variant:"secondary",class:"px-4 py-2",click:()=>{navigator.clipboard.writeText(e),app.notify({title:"Link copied",description:"The link has been copied to your clipboard.",icon:i.clipboard.checked})}},"Copy Link")]),so=({name:e,email:t,access:o,image:s})=>a({class:"flex items-center justify-between gap-4 py-2"},[a({class:"flex items-center gap-3"},[x({src:s,alt:e,fallbackText:e.split(" ").map(d=>d[0]).join("")}),a({},[r({class:"font-medium text-foreground"},e),r({class:"block text-sm text-muted-foreground"},t)])]),S({class:"border rounded-md bg-background text-foreground px-3 py-1",options:[{value:"edit",label:"Can edit"},{value:"view",label:"Can view"},{value:"comment",label:"Can comment"}],defaultValue:o,change:d=>console.log(`Access level changed for ${e}: ${d.target.value}`)})]),no=({people:e})=>a({class:"space-y-3"},e.map(t=>so(t))),Ee=({link:e,people:t})=>D({class:"w-full max-w-md mx-auto p-6 bg-card space-y-6"},[$({title:"Share this document",description:"Anyone with the link can view this document."}),ao({link:e}),a({class:"border-t my-4"}),a({class:"font-medium text-foreground"},"People with access"),no({people:t})]),ro=e=>e.split(" ").map(o=>o[0]).join(""),io=({name:e,email:t,role:o,image:s})=>a({class:"flex items-center justify-between gap-4 py-2"},[a({class:"flex items-center gap-3"},[x({src:s,alt:e,fallbackText:ro(e)}),a({},[r({class:"font-medium text-foreground"},e),r({class:"block text-sm text-muted-foreground"},t)])]),S({class:"border rounded-md bg-background text-foreground px-3 py-1",options:[{value:"owner",label:"Owner"},{value:"member",label:"Member"}],defaultValue:o,change:d=>console.log(`Role changed for ${e}: ${d.target.value}`)})]),lo=({members:e})=>a({class:"space-y-3"},e.map(t=>io(t))),Ne=({members:e})=>D({class:"w-full max-w-md mx-auto p-6 bg-card space-y-6"},[$({title:"Team Member",description:"Invite your team members to collaborate."}),lo({members:e})]),co=()=>f({title:"Cards",description:"Cards are a great way to display content in a concise and organized manner."},[n({title:"Usage",description:"Import the card atom and use it in your components.",preview:[D()],code:`import { Button } from '@components/atoms/cards/card.js';

Card()`}),v({class:"text-lg font-bold"},"Examples"),c({class:"text-muted-foreground"},"This is a list of examples of how to use the card component in your application."),n({title:"Account Card",preview:[Be()],code:`import AccountCard from "./examples/account-card.js";

AccountCard()`}),n({title:"Paymnet Card",preview:[Me()],code:`import AccountCard from "./examples/payment-card.js";

PaymentCard()`}),n({title:"Team Mmeber Card",preview:[Ne({members:[{name:"Leslie Alexander",email:"leslie.alexander@example.com",image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"owner",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Michael Foster",email:"michael.foster@example.com",image:"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"member",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Dries Vincent",email:"dries.vincent@example.com",image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"owner",status:"online"}]})],code:`import AccountCard from "./examples/team-member-card.js";

TeamMemberCard()`}),n({title:"Share Document Card",preview:[Ee({link:"http://example.com/link/to/document",people:[{name:"Leslie Alexander",email:"leslie.alexander@example.com",image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"owner",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Michael Foster",email:"michael.foster@example.com",image:"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"member",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Dries Vincent",email:"dries.vincent@example.com",image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"owner",status:"online"}]})],code:`import AccountCard from "./examples/share-document-card.js";

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
})`}),n({title:"Date Select Card",preview:[Pe({startDate:"2023-01-23"})],code:`import AccountCard from "./examples/date-select-card.js";

DateSelectCard({
    startDate: '2023-01-23'
})`}),n({title:"Report Issue Card",preview:[$e()],code:`import AccountCard from "./examples/report-issue-card.js";

ReportIssueCard()`}),n({title:"Project Card",preview:[to()],code:`import AccountCard from "./examples/project-card.js";

ProjectCard()`}),n({title:"Cookie Settings Card",preview:[Le()],code:`import AccountCard from "./examples/cookie-settings-card.js";

CookieSettingsCard()`})]),ce=(e,t)=>{const o=e?e.getBoundingClientRect():{top:0,bottom:0,left:0},s=t.getBoundingClientRect();let d=o.left+window.scrollX,h=o.bottom+window.scrollY;const L=10;return d+s.width>window.innerWidth&&(d=window.innerWidth-s.width-L),h+s.height>window.innerHeight&&(h=o.top+window.scrollY-s.height-L),{x:d,y:h}};class de extends E{setData(){return this.parent.data}getSize(){switch(this.size||"lg"){case"sm":return"w-48";case"md":return"w-64";case"lg":return"w-[250px]";case"xl":return"w-96";case"2xl":return"w-[400px]";case"full":return"w-full"}}render(){const t=this.getSize();return a({class:`absolute mt-2 border rounded-md shadow-lg bg-popover z-30 ${t}`,style:"top: [[position.y]]px; left: [[position.x]]px"},this.children)}setupStates(){return{open:{id:this.parent.getId(),callBack:s=>{this.state.open===!1&&this.destroy()}}}}isOutsideClick(t){return!this.panel.contains(t)&&this.button&&!this.button.contains(t)}setupEvents(){return[["click",document,t=>{this.isOutsideClick(t.target)&&(this.state.open=!1)}]]}setup(t){this.container=app.appShell.panel,this.initialize()}}const uo=({toggleDropdown:e})=>F({cache:"button",class:"relative z-[2] inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 justify-between",click:e,addEvent:["click",document,(t,{state:o,panel:s})=>{ho(t.target,s)&&(o.open=!1)}]},[r({onState:["selectedLabel",t=>t||"Select item..."]}),M({html:i.chevron.upDown})]),mo=(e,t)=>W({class:"flex flex-auto items-center cursor-pointer p-2 hover:bg-secondary rounded-sm",click:()=>t(e),onState:["selectedValue",{"bg-secondary":e.value}]},[e.icon&&r({class:"mr-2 flex items-baseline"},[M({class:"flex w-4 h-4",html:e.icon})]),r(e.label)]),po=e=>a({class:"w-full"},[q({class:"max-h-60 overflow-y-auto p-2 grid gap-1",for:["items",t=>mo(t,e)]})]),fo=({onSelect:e})=>a({class:"flex flex-auto flex-col",onState:["open",(t,o,s)=>{if(t)return new de({cache:"dropdown",parent:s,button:s.button},[po(e)])}]}),ho=(e,t)=>!t.contains(e),Oe=w({setData(){return new U({items:this.items||[],position:{y:0,x:0}})},state:{open:!1,selectedLabel:"",selectedValue:""},updatePosition(){const e=this.button,t=this.dropdown.panel,o=ce(e,t);this.data.position=o},handleSelect(e){const t=this.state;t.selectedValue=e.value,t.selectedLabel=e.label,t.open=!1,typeof this.onSelect=="function"&&this.onSelect(e)},toggleDropdown(){this.state.toggle("open"),this.state.open&&this.updatePosition()},render(){const e=t=>{const o=this.state;o.selectedValue=t.value,o.selectedLabel=t.label,o.open=!1};return a({class:"relative w-full flex flex-auto flex-col max-w-[250px]"},[uo({toggleDropdown:this.toggleDropdown.bind(this)}),fo({onSelect:e}),this.required&&z({class:"opacity-0 absolute top-0 left-0 z-[1]",type:"text",name:this.name,required:!0,value:["[[selectedValue]]",this.state]})])}}),go=[{value:"next.js",label:"Next.js",icon:i.home},{value:"sveltekit",label:"SvelteKit"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}],bo=()=>f({title:"Comboboxes",description:"Comboboxes are used to allow users to select an option from a dropdown list or enter a custom value."},[n({title:"Usage",description:"To use the Combobox component, import it from the components library and use it in your application.",preview:[a({class:"w-full max-w-[300px]"},[new Oe({items:go,onSelect:e=>console.log(e)})])],code:`@components/molecules/combobox/combobox.js';
import { Icons } from "@components/icons/icons.js";

new Combobox({
    items: [
    { value: 'next.js', label: 'Next.js', icon: Icons.home },,
    { value: 'sveltekit', label: 'SvelteKit' },
    { value: 'nuxt.js', label: 'Nuxt.js' },
    { value: 'remix', label: 'Remix' },
    { value: 'astro', label: 'Astro' },
],
})`})]),xo=()=>`checkbox-${Math.random().toString(36).substring(2,9)}`,X=w({state(){return{checked:this.checked??!1}},render(){const e=xo();return a({class:`flex items-center space-x-2 cursor-pointer ${this.class}`},[a({class:"relative flex items-center justify-center w-5 h-5 rounded-md transition-colors duration-200 border hover:border-accent-foreground",onState:["checked",{"bg-primary":!0,"text-primary-foreground":!0}],role:"checkbox",aria:{checked:["checked"]},tabIndex:0,click:()=>{this.state.checked=!this.state.checked,typeof this.checked=="function"&&this.checked(this.state.checked)}},[Xe({id:e,class:"absolute opacity-0 w-full h-full cursor-pointer",aria:{checked:["checked"]},bind:this.bind,change:t=>{const o=t.target.checked;this.state.checked=o,typeof this.checked=="function"&&this.checked(o)}}),r({class:"absolute text-xs pointer-events-none",onState:["checked",t=>t?M({class:"w-2 h-2 pointer-events-none",html:i.check}):null]})]),this.label&&Te({class:"text-base cursor-pointer",htmlFor:e,click:()=>{this.state.toggle("checked"),typeof this.checked=="function"&&this.checked(this.state.checked)}},this.label)])}}),wo=e=>tt([Se({class:"text-muted-foreground border-b",map:[e.headers,t=>{if(t.label==="checkbox")return me({class:"cursor-pointer py-3 px-4 text-base"},[new X({class:"mr-2"})]);const o=t.align||"items-center justify-start";return me({class:"cursor-pointer py-3 px-4 text-base",click:t.sortable&&(()=>e.sort(t.key))},[a({class:`flex flex-auto w-full items-center ${o}`},[r(t.label),t.sortable&&M({class:"ml-2",html:i.arrows.upDown})])])}]})]),vo=({key:e,rows:t,selectRow:o,rowItem:s})=>new ot({key:e,items:t,rowItem:d=>s(d,o),class:"divide-y divide-border"}),yo=w({setData(){return new U({rows:this.rows||[],selectedRows:[]})},selectRow(e){const t=this.data.selectedRows.includes(e)?this.data.selectedRows.filter(o=>o!==e):[...this.data.selectedRows,e];this.data.selectedRows=t},render(){const e=this.data.rows;return a({class:"w-full"},[a({class:"w-full rounded-md border"},[et({class:"w-full"},[this.headers&&wo({headers:this.headers,sort:t=>this.sortRows(t)}),vo({key:this.key,rows:e,selectRow:this.selectRow.bind(this),rowItem:this.rowItem})])])])}}),ko=[{label:"checkbox",key:""},{label:"Status",key:"status"},{label:"Email",key:"email"},{label:"Amount",key:"amount",align:"justify-end"}],To=[{id:1,status:"Success",email:"ken99@yahoo.com",amount:316,selected:!1},{id:2,status:"Success",email:"abe45@gmail.com",amount:242,selected:!1},{id:3,status:"Processing",email:"monserrat44@gmail.com",amount:837,selected:!1},{id:4,status:"Success",email:"silas22@gmail.com",amount:874,selected:!1},{id:5,status:"Failed",email:"carmella@hotmail.com",amount:721,selected:!1}],So=(e,t)=>Se({class:"items-center px-4 py-2 hover:bg-muted"},[_({class:"p-4 "},[new X({checked:e.selected,class:"mr-2",click:()=>t(e)})]),_({class:"p-4 "},[r({class:"text-muted-foreground"},e.status)]),_({class:"p-4 "},e.email),_({class:"p-4 text-right"},`$${e.amount.toFixed(2)}`)]),Co=()=>f({title:"Data Tables",description:"Data tables are used to display data in a structured format. They can be used to display a list of items, a grid of items, or a table of items."},[n({title:"Usage",description:"The data table component is used to display data in a structured format. It can be used to display a list of items, a grid of items, or a table of items.",preview:[new yo({headers:ko,rows:To,rowItem:So,key:"id"})],code:`import { DataTable } from "@components/organisms/lists/data-table.js";
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
})`})]),jo=e=>at.render(e,app.appShell.panel),Io=({title:e})=>P({class:"flex flex-auto items-center"},[K({class:"text-lg font-semibold"},e)]),Do=u((e,t)=>Ce({class:`fixed z-30 w-[98%] md:w-full max-w-lg gap-4 border bg-background text-foreground p-6 pb-12 md:pb-6 shadow-lg duration-200
                rounded-lg flex flex-auto flex-col
                bottom-4 top-auto md:m-auto md:bottom-auto md:top-1/2 md:left-0 md:right-0 md:-translate-y-1/2`,click:e.click,aria:{expanded:["open"]}},[a({class:"flex flex-auto flex-col space-y-2"},[Io(e),e.description&&c({class:"flex flex-auto flex-col text-sm text-muted-foreground"},e.description),a({class:"flex flex-auto flex-col text-sm text-muted-foreground"},t)]),je({class:"flex flex-col-reverse sm:flex-row sm:justify-end mt-6 gap-2 sm:gap-0 sm:space-x-2"},e.buttons)]));class ee extends E{render(){const t=d=>{d.target===this.panel&&this.close()},o=this.getMainClass(),s=this.title||"Dialog Title";return Do({class:o,title:s,click:t,description:this.description,buttons:this.getButtons()},this.children)}getButtons(){return[l({variant:"outline",click:()=>this.close()},"Close")]}setupStates(){return{open:!1}}getMainClass(){return""}open(){jo(this),this.panel.showModal(),this.state.open=!0}close(){this.state.open=!1,this.panel.close(),this.destroy()}}class He extends ee{getButtons(){const t=this.confirmTextLabel||"Confirm";return[l({variant:"outline",click:()=>this.close()},"Cancel"),l({variant:"primary",click:()=>this.confirm()},t)]}confirm(){this.confirmed&&this.confirmed(),this.close()}}const Ao=u((e,t)=>l({text:"Open",class:"m-1",click:()=>new ee(e,t).open()})),Bo=e=>l({text:"Open",class:"m-1",click:()=>new He(e).open()}),Lo=({link:e})=>a({class:"flex items-center gap-4 py-2"},[T({type:"text",value:e,readOnly:!0,class:"border p-2 rounded-md w-full bg-background text-foreground"}),l({variant:"secondary",class:"px-4 py-2",click:()=>{navigator.clipboard.writeText(e),app.notify({title:"Link copied",description:"The link has been copied to your clipboard.",icon:i.clipboard.checked})}},"Copy Link")]),Fo=e=>l({text:"Open",class:"m-1",click:()=>new ee(e,[Lo({link:"https://example.com"})]).open()}),Po=()=>f({title:"Dialogs",description:"Displays a dialog or a component that looks like a dialog. Dialogs can be opened and closed. They will be closed if the user clicks outside of the dialog or if the user clicks the close button."},[n({title:"Usage",description:"Import the dialog atom and use it in your components.",preview:[Ao({title:"Title",description:"this is the description."},[])],code:`import { Dialog } from '@components/molecules/dialogue.js';

new Dialog({
    title: '',
    description: ''
}, [

]).open()`}),n({title:"Confirmation",description:"Displays a confirmation dialog.",preview:[Bo({title:"Are you absoultely sure?",description:"This action cannot be undone. This will permanently delete your account and remove your data from our servers.",confirmTextLabel:"Save",confirmed:()=>console.log("Confirmed!")})],code:`import { Confirmation } from '@components/molecules/dialogs/confirmation.js';

new Confirmation({
    title: 'Are you absoultely sure?',
    description: 'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
    confirmTextLabel: 'Save',
    confirmed: () => console.log('Confirmed!')
}).open()`}),n({title:"Share Link",description:"Displays a dialog with a shareable link.",preview:[Fo({title:"Share Link",description:"Share this link with others."})],code:`import { Confirmation } from '@components/molecules/dialogs/confirmation.js';

new Confirmation({
    title: 'Are you absoultely sure?',
    description: 'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
    confirmTextLabel: 'Save',
    confirmed: () => console.log('Confirmed!')
}).open()`})]),Mo=e=>r({class:"ml-auto text-xs tracking-widest opacity-60"},e),$o=e=>r({class:"flex w-4 h-4",html:e}),Eo=e=>r({class:"flex-auto"},e),No=(e,t)=>W({class:"relative flex cursor-pointer hover:bg-accent hover:text-accent-foreground select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",click:()=>t(e)},[e.icon&&$o(e.icon),Eo(e.label),e.shortcut&&Mo(e.shortcut)]),Oo=(e,t)=>q({class:"grid gap-2"},[e.map(o=>No(o,t))]),Ho=e=>a({class:"w-full z-10"},[a({class:"max-h-60 overflow-y-auto p-1 grid gap-2 divide-y divide-border",for:["groups",t=>Oo(t,e)]})]),zo=({label:e,icon:t,toggleDropdown:o})=>F({cache:"button",class:`inline-flex items-center justify-between rounded-md border border-input
            bg-background px-2 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground
            focus:outline-none transition duration-150 ease-in-out`,click:o},[e&&r(e),t&&M({html:t})]),Ro=({onSelect:e})=>a({onState:["open",(t,o,s)=>{if(t)return new de({cache:"dropdown",parent:s,button:s.button},[Ho(e)])}]});class qo extends E{setData(){return new U({groups:this.groups||[],position:{y:0,x:0}})}setupStates(){return{open:!1,selectedItem:null}}toggleDropdown(){this.state.toggle("open"),this.state.open&&this.updatePosition()}updatePosition(){const t=this.button,o=this.dropdown.panel,s=ce(t,o);this.data.position=s}handleSelect(t){this.state.selectedItem=t,this.state.open=!1,typeof this.onSelect=="function"&&this.onSelect(t)}render(){return a({class:"relative"},[zo({label:this.label,icon:this.icon,toggleDropdown:this.toggleDropdown.bind(this)}),Ro({onSelect:this.handleSelect.bind(this)})])}}const Wo=()=>f({title:"Dropdown Menus",description:"Dropdown menus are used to display a list of options when a user clicks on a button or input field."},[n({title:"Usage",description:"To use the DropdownMenu component, import it from the components library and use it in your application.",preview:[new qo({icon:i.ellipsis.vertical,groups:[[{icon:i.user.default,label:"Profile",shortcut:"⌘P",value:"profile"},{icon:i.creditCard,label:"Billing",shortcut:"⌘B",value:"billing"},{icon:i.cog.six,label:"Settings",shortcut:"⌘S",value:"settings"},{icon:i.computerDesktop,label:"Keyboard shortcuts",shortcut:"⌘K",value:"shortcuts"}],[{icon:i.user.multiple,label:"Team",value:"team"},{icon:i.user.plus,label:"Invite users",value:"invite"},{icon:i.plus,label:"New Team",shortcut:"⌘T",value:"new_team"}],[{icon:i.github,label:"GitHub",value:"github"},{icon:i.helpCircle,label:"Support",value:"support"},{icon:i.api,label:"API",value:"api"}]],onSelect:e=>{console.log("Selected item:",e)}})],code:`import { Icons } from "@components/icons/icons.js";
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
})`})]),ze=w({state(){return{value:this.value??0,min:this.min??0,max:this.max??100,filledPercentage:this.getFillPercentage(this.value)}},getFillPercentage(e){return(e-this.min)/(this.max-this.min)*100},render(){return a({class:"relative w-full h-4 flex items-center"},[a({class:"absolute h-2 w-full rounded-full bg-muted"}),a({class:"absolute h-2 bg-primary rounded-full",style:"width: [[filledPercentage]]%"}),a({class:"absolute block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transform -translate-x-1/2",style:"left: [[filledPercentage]]%"}),z({type:"range",min:"[[min]]",max:"[[max]]",value:"[[value]]",class:"absolute w-full h-full opacity-0 cursor-pointer",bind:this.bind,input:e=>{const t=Number(e.target.value);this.state.value=t,this.state.filledPercentage=this.getFillPercentage(t),typeof this.change=="function"&&this.change(t)}})])}}),Uo=[{value:"next.js",label:"Next.js"},{value:"sveltekit",label:"SvelteKit"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}],Vo=()=>B({submit:e=>{console.log("Profile Form submitted")}},[new p({name:"username",label:"Username",description:"This is your public display name."},[T({placeholder:"e.g. username",required:!0})]),new p({name:"email",label:"Email Address",description:"We'll use this to contact you."},[ne({placeholder:"e.g. email@address.com",required:!0})]),l({type:"submit"},"Submit")]),_o=()=>B({submit:e=>{console.log("Preferences Form submitted")}},[new p({name:"framework",label:"Favorite Framework",description:"Select your preferred framework."},[S({options:Uo,required:!0})]),new p({name:"newsletter",label:"Subscribe to Newsletter",description:"Stay updated with our latest news."},[new X({label:"Yes, sign me up!"})]),l({type:"submit"},"Save Preferences")]),Go=()=>B({submit:e=>{console.log("Contact Form submitted")}},[new p({name:"phone",label:"Phone Number",description:"We may contact you at this number."},[re({placeholder:"e.g. +1234567890",required:!0})]),new p({name:"message",label:"Your Message",description:"Let us know how we can help you."},[R({placeholder:"Type your message here...",required:!0})]),new p({name:"message",label:"Select Framework",description:"Select your preferred framework."},[new Oe({required:!0,items:[{value:"next.js",label:"Next.js"},{value:"sveltekit",label:"SvelteKit"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}]})]),l({type:"submit"},"Send Message")]),Qo=()=>B({submit:e=>{console.log("Settings Form submitted")}},[new p({name:"notifications",label:"Enable Notifications",description:"Toggle to enable or disable notifications."},[new Z({active:!0})]),new p({name:"volume",label:"Volume Level",description:"Set your preferred volume level."},[new ze({min:0,max:100,value:50})]),l({type:"submit"},"Save Settings")]),Jo=()=>f({title:"Forms",description:"Forms are used to collect user data and submit it to the server."},[n({title:"Profile Form",description:"A simple profile form with username and email fields.",preview:[Vo()],code:`import { Button, Input, EmailInput } from "@components/atoms/form/input.js";
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
])`}),n({title:"Preferences Form",description:"A preferences form with a select input and a checkbox.",preview:[_o()],code:`import { Button, Checkbox, Select } from "@components/atoms/form/input.js";
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
        new Checkbox({ label: "Yes, sign me up!" })
    ]),

    Button({ type: "submit" }, "Save Preferences")
])`}),n({title:"Contact Form",description:"A contact form with a phone input and a textarea for messages.",preview:[Go()],code:`import { Button, TelInput, Textarea } from "@components/atoms/form/input.js";
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
])`}),n({title:"Settings Form",description:"A settings form with a toggle and a range slider.",preview:[Qo()],code:`import { Button, Toggle, RangeSlider } from "@components/atoms/form/input.js";
import { Form, FormField } from "@components/molecules/form/form.js";

Form([
    new FormField({
        name: "notifications",
        label: "Enable Notifications",
        description: "Toggle to enable or disable notifications."
    }, [
        new Toggle({ active: true })
    ]),

    new FormField({
        name: "volume",
        label: "Volume Level",
        description: "Set your preferred volume level."
    }, [
        new RangeSlider({ min: 0, max: 100, value: 50 })
    ]),

    Button({ type: "submit" }, "Save Settings")
])`})]),Yo=u(({index:e,click:t,state:o},s)=>W({class:"p-2 cursor-pointer hover:bg-accent hover:text-accent-foreground",onState:[[o,"selectedIndex",{"bg-accent":e,"text-white":e}]],pointerdown:()=>t(e)},s)),Ko=u(({selectOption:e,state:t})=>q({class:"list-none m-0 p-0",for:["filteredOptions",(o,s)=>Yo({index:s,click:e,state:t},o)]})),Zo=100,Xo=u(e=>T({cache:"input",placeholder:e.placeholder??"Search...",bind:[e.state,"searchQuery"],keyup:()=>{typeof e.filterOptions=="function"&&e.filterOptions()},focus:(t,o)=>o.toggleDropdown(),blur:(t,{state:o})=>setTimeout(()=>o.open=!1,Zo),keydown:t=>typeof e.handleKeyDown=="function"&&e.handleKeyDown(t)})),ea=e=>a({class:"relative flex fle-auto flex-col",onState:["open",(t,o,s)=>{if(t)return new de({cache:"dropdown",parent:s,button:s.input},[Ko(e)])}]}),ta=w({setData(){const e=this.options||[];return new U({options:e,filteredOptions:e,position:{y:0,x:0}})},state(){return{searchQuery:"",selectedIndex:-1,open:!1}},setSelectedIndexByQuery(){const e=this.data.filteredOptions,{searchQuery:t}=this.state,o=e.findIndex(s=>s===t);o>=0&&(this.state.selectedIndex=o)},filterOptions(){const e=this.state.searchQuery.toLowerCase();if(e===""||e.length===0){this.data.filteredOptions=this.data.options;return}const t=this.data.get("options");this.data.filteredOptions=t.filter(o=>o.toLowerCase().includes(e))},selectOption(e){this.state.selectedIndex=e,this.state.searchQuery=this.data.filteredOptions[e],this.state.open=!1,typeof this.onSelect=="function"&&this.onSelect(this.state.searchQuery)},toggleDropdown(){this.state.toggle("open"),this.state.open&&(this.setSelectedIndexByQuery(),this.updatePosition())},updatePosition(){const e=this.input,t=this.dropdown.panel,o=ce(e,t);this.data.position=o},handleKeyDown(e){const t=this.data.filteredOptions,{selectedIndex:o}=this.state;e.key==="ArrowDown"?(e.preventDefault(),this.state.selectedIndex=Math.min(o+1,t.length-1)):e.key==="ArrowUp"?(e.preventDefault(),this.state.selectedIndex=Math.max(o-1,0)):e.key==="Enter"&&o>=0&&(e.preventDefault(),this.selectOption(o))},render(){return a({class:"relative w-full max-w-md"},[Xo({state:this.state,placeholder:this.placeholder,filterOptions:this.filterOptions.bind(this),handleKeyDown:this.handleKeyDown.bind(this)}),ea({state:this.state,updatePosition:this.updatePosition.bind(this),setSelected:this.setSelectedIndexByQuery.bind(this),selectOption:this.selectOption.bind(this)})])}}),oa=[{value:"next.js",label:"Next.js"},{value:"sveltekit",label:"SvelteKit"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}],C=u((e,t)=>a({...e,class:"flex flex-auto items-center justify-center w-full max-w-[350px]"},t)),ge=({label:e,description:t,active:o,onChange:s})=>a({class:"flex items-center justify-between p-4 border rounded-md bg-muted/10 border-muted-foreground/20 mb-4"},[a({class:"flex flex-col pr-8"},[v({class:"font-semibold"},e),c({class:"text-sm text-muted-foreground"},t)]),new Z({active:o,change:s})]),aa=["Apple","Banana","Cherry","Date","Elderberry","Fig","Grape","Honeydew"],sa=()=>f({title:"Inputs",description:"Inputs are essential for gathering user data in forms."},[n({title:"Usage",description:"Import the input atom and use it in your components. The input can be of various types: text, password, email, etc.",preview:[a({class:"grid gap-2 w-full max-w-[350px]"},[T({type:"text",placeholder:"Enter your text here...",change:e=>console.log(e.target.value)}),ne({}),re({}),R({placeholder:"Enter your text here..."})])],code:`import { Input, EmailInput, TelInput, Textarea } from '@components/atoms/form/input.js';

Input({
    type: 'text',
    placeholder: 'Enter your text here...',
    change: (e) => console.log(e.target.value)
}),
EmailInput({}),
TelInput({}),
Textarea({
    placeholder: 'Enter your text here...'
})`}),n({title:"Search Dropdown",description:"This is a search dropdown.",preview:[a({class:"relative w-full max-w-md"},[new ta({options:aa,onSelect:e=>console.log(e)})])],code:`import { SearchDropdown } from "@components/organisms/search/search-dropdown.js";

const options = [
    'Apple',
    'Banana',
    'Cherry',
    'Date',
    'Elderberry',
    'Fig',
    'Grape',
    'Honeydew'
];

new SearchDropdown({ options, onSelect: (item) => console.log(item) })
`}),n({title:"File Input",description:"This is a file input.",preview:[C([st({multiple:!0,change:e=>console.log(e.target.files)})])],code:`import { EmailInput, FileInput, Input, TelInput, Textarea } from "@components/atoms/form/input.js";

FileInput({
    multiple: true,
    change: (e) => console.log(e.target.files)
})`}),n({title:"Radio Input",description:"This is a radio input.",preview:[a({class:"grid gap-2"},[te({name:"theme",label:"System",value:"system"}),te({name:"theme",label:"Light",value:"light"}),te({name:"theme",label:"Dark",value:"dark"})])],code:`import { Radio } from "@components/atoms/form/input.js";
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
])`}),n({title:"Text Input",description:"This is a text input.",preview:[C([T({type:"text",placeholder:"Enter your text here..."})])],code:`
import { EmailInput, FileInput, Input, TelInput, Textarea } from "@components/atoms/form/input.js";

Input({
    type: 'text',
    placeholder: 'Enter your text here...'
})`}),n({title:"Tel Input",description:"This is a phone input.",preview:[C([re({})])],code:`
import { EmailInput, FileInput, Input, TelInput, Textarea } from "@components/atoms/form/input.js";

TelInput({
})`}),n({title:"Email Input",description:"This is a email input.",preview:[C([ne({})])],code:`
import { EmailInput, FileInput, Input, TelInput, Textarea } from "@components/atoms/form/input.js";

EmailInput({

})`}),n({title:"Checkbox",description:"This is a checkbox input.",preview:[new X({label:"Check me",check:e=>console.log(e)})],code:`
import { Checkbox } from '@components/atoms/form/checkbox.js';

new Checkbox({
    label: 'Check me',
    check: (checked) => console.log(checked)
})`}),n({title:"Select",description:"This is a select input.",preview:[C([S({options:oa,change:e=>console.log(e.target.value)})])],code:`import { Select } from "@components/atoms/form/select.js";

Select({
    options: [
        { value: 'next.js', label: 'Next.js' },
        { value: 'sveltekit', label: 'SvelteKit' },
        { value: 'nuxt.js', label: 'Nuxt.js' },
        { value: 'remix', label: 'Remix' },
        { value: 'astro', label: 'Astro' },
    ],
    change: (e) => console.log(e.target.value)
})`}),n({title:"Textarea",description:"This is a textarea input.",preview:[C([R({placeholder:"Enter your text here..."})])],code:`
import { EmailInput, FileInput, Input, TelInput, Textarea } from "@components/atoms/form/input.js";

Textarea({
    placeholder: 'Enter your text here...'
})`}),n({title:"Date Picker",description:"This is a date picker input.",preview:[C([new Fe({selectedDate:"2022-01-01"})])],code:`
import DatePicker from "@components/molecules/date-time/date-picker.js";

new DatePicker()`}),n({title:"Range Slider",description:"This is a range slider input.",preview:[C([new ze({min:0,max:100,value:50,change:e=>console.log(e)})])],code:`
import { RangeSlider } from '@components/atoms/form/range-slider.js';

new RangeSlider({
    min: 0,
    max: 100,
    value: 50,
    change: (value) => console.log(value)
})`}),n({title:"Toggle Switch",description:"This is a toggle switch input.",preview:[C([new Z({active:!0,change:e=>console.log(e)})])],code:`
import { RangeSlider } from '@components/atoms/form/range-slider.js';

new RangeSlider({
    min: 0,
    max: 100,
    value: 50,
    change: (value) => console.log(value)
})`}),n({title:"Toggle Switch",description:"Toggle switches to control various settings.",preview:[a({class:"p-4"},[v({class:"text-lg font-bold mb-4"},"Email Notifications"),ge({label:"Marketing emails",description:"Receive emails about new products, features, and more.",active:!1,onChange:e=>console.log("Marketing emails:",e)}),ge({label:"Security emails",description:"Receive emails about your account security.",active:!1,onChange:e=>console.log("Security emails:",e)}),l({text:"Submit",class:"mt-4"})])],code:`
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
]);`})]),na=u(({name:e,email:t})=>a({class:"min-w-0 flex-auto"},[c({class:"text-base font-semibold leading-6 m-0"},e),c({class:"truncate text-sm leading-5 text-muted-foreground m-0"},t)])),ra=()=>a({class:"flex items-center gap-x-1.5"},[a({class:"flex-none rounded-full bg-emerald-500/20 p-1"},[a({class:"h-1.5 w-1.5 rounded-full bg-emerald-500"})]),c({class:"text-xs leading-5 text-gray-500"},"Online")]),ia=e=>c({class:"text-xs leading-5 text-muted-foreground"},[r("Last seen "),rt({datetime:e},"3h ago")]),la=(e,t)=>e==="online"?ra():ia(t),ca=u(({role:e,lastSeen:t,status:o})=>a({class:"hidden shrink-0 sm:flex sm:flex-col sm:items-end"},[c({class:"text-sm leading-6 m-0"},e),la(o,t)])),da=e=>e.split(" ").map(o=>o[0]).join(""),ua=u(e=>W({class:"fadeIn flex justify-between gap-x-6 py-4 px-4 rounded-md hover:bg-accent"},[a({class:"flex min-w-0 gap-x-4"},[x({src:e.image,alt:e.name,fallbackText:da(e.name)}),na({name:e.name,email:e.email})]),ca({role:e.role,lastSeen:e.lastSeen,status:e.status})])),ma=u(e=>new nt({cache:"list",key:"name",items:e.users,role:"list",class:"divide-y divide-border",rowItem:ua})),pa=[{name:"Leslie Alexander",email:"leslie.alexander@example.com",image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"Co-Founder / CEO",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Michael Foster",email:"michael.foster@example.com",image:"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"Co-Founder / CTO",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Dries Vincent",email:"dries.vincent@example.com",image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"Business Relations",status:"online"}],fa=()=>f({title:"Lists",description:"Lists are used to display a collection of items in a structured format. Each item can be customized to show different information."},[n({title:"Usage",description:"To use the List component, import it from the components library and use it in your application.",preview:[ma({users:pa})],code:`import { UserListItem } from "@components/organisms/lists/user-list.js";
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
});`}),v({class:"text-lg font-bold"},"Description"),c({class:"text-muted-foreground"},"The List component can be used to display a list of items in a structured format. Each item can be customized to show different information. The List component supports appending, prepending, mingling, and deleting or items. "),v({class:"text-lg font-bold"},"Performance"),c({class:"text-muted-foreground"},"The list will only update or re-render the items that have changed, improving performance. It uses a key to know when to update an item.")]),ha=({title:e,description:t})=>P({class:"modal-header flex items-center"},[l({variant:"icon",icon:i.arrows.left,class:"mr-2 p-0 flex sm:hidden",click:(o,s)=>s.close()}),a({class:"flex flex-auto flex-col ml-2"},[K({class:"text-lg font-semibold m-0"},e),t&&a({class:"text-sm text-muted-foreground"},t)])]),ga=u((e,t)=>Ce({class:`modal m-auto fixed z-20 grid w-full h-full gap-4 lg:border bg-background text-foreground shadow-xl break-words overflow-hidden ${e.class}`,click:e.click},[B({class:"modal-content flex flex-auto flex-col",submit:o=>e.onSubmit&&e.onSubmit()},[ha(e),a({class:"modal-body flex flex-auto flex-col overflow-y-auto"},t),je({class:"modal-footer flex justify-between"},e.buttons)])]));class Re extends ee{render(){const t=h=>{h.target===this.panel&&this.close()},o=this.getMainClass(),s=this.title||"",d=this.description||null;return ga({class:o,click:t,title:s,description:d,buttons:this.getButtons(),onSubmit:this.submit,aria:{expanded:["open"]}},this.children)}getButtons(){return[l({variant:"outline",click:()=>this.close()},"Cancel"),l({variant:"primary",type:"submit"},"Save")]}getSizeClass(){switch(this.size){case"sm":return"sm max-w-[646px]";case"lg":return"lg max-w-[900px]";case"xl":return"xl max-w-[1400px]";default:return"md max-w-[760px]"}}getTypeClass(){switch(this.type){case"right":return"right right-0";case"left":return"left left-0";default:return""}}getMainClass(){return this.getSizeClass()+" "+this.getTypeClass()}}const O=[{label:"Large",buttonStyle:"primary",size:"lg"},{label:"Small",buttonStyle:"secondary",size:"sm"},{label:"Medium",buttonStyle:"destructive",size:"md"},{label:"XL",buttonStyle:"primary",size:"xl"},{label:"Right",buttonStyle:"ghost",type:"right"},{label:"Left",buttonStyle:"link",type:"left"}],H=({label:e,buttonStyle:t,size:o,type:s})=>l({text:e,class:`m-1 ${t}`,click:()=>new Re({title:"Are you absolutely sure?",size:o,type:s},[a({class:"flex flex-auto flex-col items-center justify-center p-4"},[l({click:()=>{new He({title:"Are you absoultely sure?",description:"This action cannot be undone. This will permanently delete your account and remove your data from our servers.",confirmTextLabel:"Save",confirmed:()=>{app.notify({icon:i.trash,title:"Account deleted",description:"Your account has been successfully deleted.",type:"destructive"})}}).open()}},"Confirm")])]).open()}),ba=({size:e="lg",type:t="center"})=>new Re({title:"Report an Issue",description:"What area are you having problems with?",size:e,type:t,onSubmit:()=>console.log("Form submitted")},[a({class:"flex flex-col max-w-lg p-4 space-y-8"},[a({class:"flex flex-auto w-full gap-4"},[new p({name:"area",label:"Area"},[S({required:!0,class:"border p-2 rounded-md w-full bg-background text-foreground",options:[{value:"billing",label:"Billing"},{value:"technical",label:"Technical"},{value:"account",label:"Account"},{value:"other",label:"Other"}],defaultValue:"billing",change:o=>console.log(`Area selected: ${o.target.value}`)})]),new p({name:"security_level",label:"Security Level"},[S({required:!0,class:"border p-2 rounded-md w-full bg-background text-foreground",options:[{value:"severity_1",label:"Severity 1"},{value:"severity_2",label:"Severity 2"},{value:"severity_3",label:"Severity 3"}],defaultValue:"severity_2",change:o=>console.log(`Security Level selected: ${o.target.value}`)})])]),new p({name:"subject",label:"Subject"},[T({type:"text",placeholder:"I need help with...",required:!0,class:"border p-2 rounded-md w-full bg-background text-foreground placeholder-muted-foreground"})]),new p({name:"description",label:"Description"},[R({placeholder:"Please include all information relevant to your issue.",required:!0,class:"border p-2 rounded-md w-full bg-background text-foreground placeholder-muted-foreground"})])])]),be=({label:e,buttonStyle:t,size:o,type:s})=>l({text:e,class:`m-1 ${t}`,click:()=>ba({size:o,type:s}).open()}),xa=()=>f({title:"Modals",description:"Displays a modal or a component that looks like a modal."},[n({title:"Extra Large Modal",description:"This is an extra large modal.",preview:[H(O[3])],code:`
import { Modal } from "@components/molecules/modal.js";
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
});`}),n({title:"Large Modal",description:"This is a large modal.",preview:[H(O[0])],code:`
import { Modal } from "@components/molecules/modal.js";
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
});`}),n({title:"Small Modal",preview:[H(O[1])],code:`
import { Modal } from "@components/molecules/modal.js";
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
		size: 'sm',
		title: 'Are you absolutely sure?'
	}).open()
});`}),n({title:"Medium Modal",preview:[H(O[2])],code:`
import { Modal } from "@components/molecules/modal.js";
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
});`}),n({title:"Right Modal",preview:[H(O[4])],code:`
import { Modal } from "@components/molecules/modal.js";
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
});`}),n({title:"Form Modal",preview:[be({label:"Form Modal",buttonStyle:"primary"})],code:`
import { Modal } from "@components/molecules/modal.js";
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
);`}),n({title:"Right Form Modal",preview:[be({label:"Form Modal",buttonStyle:"primary",size:"md",type:"right"})],code:`
import { Modal } from "@components/molecules/modal.js";
import { Button } from "@components/atoms/atoms.js";

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
);`})]),wa=()=>f({title:"Navigations",description:"Navigations are components that help users move around the website or application."},[n({title:"Inline Navigation",description:"The inline navigation component is a simple navigation component that can be used in a sidebar or app shell.",preview:[a({class:"flex flex-auto flex-col w-full border rounded-md max-w-[300px]"},[new it({options:[{label:"Home",href:"/",icon:i.home},{label:"About",href:"/about"},{label:"Contact",href:"/contact"},{label:"Services",options:[{label:"Web Development",href:"/web-development"}]},{group:"Frameworks",options:[{label:"Next.js",href:"/next"},{label:"SvelteKit",href:"/sveltekit"},{label:"Nuxt.js",href:"/nuxt"},{label:"Remix",href:"/remix"},{label:"Astro",href:"/astro"}]}]})])],code:`import { Button } from '@components/organisms/navigation/inline-navigation.js';
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
})`})]),va=()=>f({title:"Notifications",description:"Displays a notification message to the user."},[n({title:"Default Notification",description:"This is a standard notification without any specific type.",preview:[new N({title:"Default Notification",description:"This is a default notification.",icon:i.information,duration:"infinite"})],code:`app.notify({
    title: 'Default Notification',
    description: 'This is a default notification.',
    icon: Icons.info,
    duration: 'infinite'
})`}),n({title:"Info Notification",description:"An informational notification to inform users about general information.",preview:[new N({title:"Heads up!",description:"You can add components to your app using the CLI.",icon:i.information,type:"info",duration:"infinite"})],code:`app.notify({
    title: 'Heads up!',
    description: 'You can add components to your app using the CLI.',
    icon: Icons.information,
    type: 'info',
    duration: 'infinite'
})`}),n({title:"Warning Notification",description:"A warning notification to caution the user about potential issues.",preview:[new N({title:"Warning!",description:"Please check your input before proceeding.",icon:i.warning,type:"warning",duration:"infinite"})],code:`app.notify({
    title: 'Warning!',
    description: 'Please check your input before proceeding.',
    icon: Icons.warning,
    type: 'warning',
    duration: 5000
})`}),n({title:"Destructive Notification",description:"A destructive notification to alert the user of a serious issue or error.",preview:[new N({title:"Error!",description:"Something went wrong. Please try again later.",icon:i.shield,type:"destructive",duration:"infinite"})],code:`app.notify({
    title: 'Error!',
    description: 'Something went wrong. Please try again later.',
    icon: Icons.error,
    type: 'destructive',
    duration: 'infinite'
})`}),n({title:"Notification with Actions",description:"This notification includes primary and secondary buttons for user actions.",preview:[new N({title:"Action Required",description:"Would you like to proceed with this action?",icon:i.information,type:"info",primary:"Proceed",primaryAction:()=>console.log(1),secondary:"Cancel",secondaryAction:()=>console.log(1),duration:"infinite"})],code:`app.notify({
    title: 'Action Required',
    description: 'Would you like to proceed with this action?',
    icon: Icons.question,
    type: 'info',
    primary: 'Proceed',
    primaryAction: () => alert('Primary action clicked!'),
    secondary: 'Cancel',
    secondaryAction: () => alert('Secondary action clicked!'),
    duration: 'infinite' // Notification will remain until user dismisses
})`}),c({class:"text-muted-foreground"},"Notifications will stack if multiple are triggered at the same time. The notification will remain visible until the specified duration has passed. If a notification duration is set to 'infinite', it must be manually dismissed by the user."),n({title:"Usage",description:"Call 'notify' on the global notification container to display notifications.",preview:[l({click:()=>{app.notify({title:"Notification Title",description:"This is a notification.",icon:i.information})}},"Show Notification")],code:`app.notify({
    title: 'Notification Title',
    description: 'This is a notification.',
    icon: Icons.warning,
    type: 'warning',
    duration: 5000 // in milliseconds, leave blank for the default 4 seconds, or use 'infinite' to keep it until dismissed
})`})]),ya=()=>a({class:"absolute h-full rounded-full bg-primary transition-all duration-300",style:"width: [[progress]]%;"}),ka=w({render(){return a({class:"relative w-full h-4 rounded-full bg-muted"},[ya()])},state(){return{progress:this.progress??0}},set(e){e<0&&(e=0),e>100&&(e=100),this.state.progress=e}}),Ta=()=>f({title:"Progress Bars",description:"Progress bars are a great way to show the progress of a task or process."},[n({title:"Usage",description:"Import the progress bar atom and use it in your components. The progress bar can be used to show the progress of a task or process.",preview:[new ka({cache:"progress",progress:20})],code:`import { ProgressBar } from "@components/atoms/progress-bar.js";

new ProgressBar({ cache: 'progress', progress: 20 })`})]),Sa=w({state:{loaded:!1},render(){return a({class:"flex flex-auto flex-col max-w-[350px]"},[a({class:"my-8"},[l({variant:"outline",click:()=>this.state.toggle("loaded")},"Toggle Loaded")]),a({class:"flex items-center bg-card rounded-md border shadow-md w-full max-w-md"},[a({class:"flex flex-auto gap-4 p-4",onState:["loaded",e=>e?[x({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN",size:"md"}),a({class:"flex flex-auto flex-col"},[r({class:"text-lg font-semibold text-foreground"},"Leslie Alexander"),c({class:"text-sm text-muted-foreground m-0"},"leslie.alexander@example.com")])]:[j({shape:"circle",width:"w-12",height:"h-12"}),a({class:"flex flex-auto flex-col gap-2"},[j({width:"w-3/4",height:"h-6"}),j({width:"w-1/2",height:"h-4"})])]]})])])}}),Ca=()=>f({title:"Skeletons",description:"Skeletons are components that are used to show a placeholder for content that is loading."},[n({title:"Usage",description:"The skeleton component is used to show a placeholder for content that is loading.",preview:[a({class:"flex flex-auto space-x-4 w-full max-w-64"},[j({shape:"circle",width:"w-10",height:"h-10"}),a({class:"flex flex-auto flex-col space-y-2"},[j({width:"w-3/4",height:"h-4"}),j({width:"w-1/2",height:"h-4"})])])],code:`import { Skeleton } from "@components/atoms/skeleton.js";
import { Div } from '@base-framework/atoms';

Div({ class: 'flex flex-auto space-x-4 w-full max-w-64' }, [
    Skeleton({ shape: 'circle', width: 'w-10', height: 'h-10' }), // Circle skeleton for avatar
    Div({ class: 'flex flex-auto flex-col space-y-2' }, [
        Skeleton({ width: 'w-3/4', height: 'h-4' }), // Long rectangle for main text
        Skeleton({ width: 'w-1/2', height: 'h-4' })  // Shorter rectangle for subtext
    ])
])`}),n({title:"Skeleton Post",description:"This is a skeleton post.",preview:[a({class:"space-y-4 flex flex-auto flex-col w-full max-w-64"},[j({width:"w-full",height:"h-32",shape:"rectangle"}),a({class:"space-y-2"},[j({width:"w-3/4",height:"h-4"}),j({width:"w-1/2",height:"h-4"})])])],code:`import { Skeleton } from "@components/atoms/skeleton.js";
import { Div } from '@base-framework/atoms';

Div({ class: 'space-y-4 flex flex-auto flex-col space-x-4 w-full max-w-64' }, [
    // Large rectangle for image or main content
    Skeleton({ width: 'w-full', height: 'h-32', shape: 'rectangle' }),

    // Text line placeholders
    Div({ class: 'space-y-2' }, [
        Skeleton({ width: 'w-3/4', height: 'h-4' }), // Longer text line
        Skeleton({ width: 'w-1/2', height: 'h-4' })  // Shorter text line
    ])
])`}),n({title:"Skeleton with Avatar Loading",description:"This example demonstrates a skeleton loading animation that transitions to an avatar and user info after 3 seconds.",preview:[new Sa],code:`import { Skeleton } from "@components/atoms/skeleton.js";
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

LoadingAvatar();`})]),ja=(e,t)=>t.indexOf(e)!==-1,Ia=(e,t)=>{const o=e.getLinkPath()??"";return ja(o,t)};class Da extends E{onCreated(){this.links=[]}render(){return le({class:`tab items-center justify-center rounded-md bg-muted p-1 text-muted-foreground ${this.class}`},[q({class:"flex flex-auto flex-row",map:[this.options,t=>this.addLink(t)],watch:{value:["[[path]]",pe.data],callBack:this.updateLinks.bind(this)}})])}afterSetup(){const t=pe.data.path;this.updateLinks(t)}updateLinks(t){let o=!1,s=this.links[0];for(const d of this.links)if(d.rendered!==!1&&(o=Ia(d,t),o===!0))break;o!==!0&&s&&this.updateLink(s,!0)}updateLink(t,o){t.update(o)}addLink({label:t,href:o}){const s=new lt({text:t,href:o,dataSet:["selected",["state",!0,"active"]],class:"inline-flex flex-auto items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm"});return this.links.push(s),s}}class Aa extends E{render(){return a({class:"tab-panel"},[new Da({class:this.class,options:this.options}),k({class:"tab-content",switch:this.addGroup()})])}addGroup(){let t;const o=[],s=this.options;for(let d=0,h=s.length;d<h;d++)t=s[d],o.push({uri:t.uri||t.href,component:t.component,title:t.title||null,persist:!0});return o}}const xe=u((e,t)=>a({class:"py-4"},t)),Ba=()=>f({title:"Tabs",description:"Displays a tab or a component that looks like a tab."},[n({title:"Button Tab",description:"This is a button tab. The buttons to not route.",preview:[new Ie({class:"mt-4 max-w-[400px]",options:[{label:"Preview",value:"preview",layout:xe([])},{label:"Code",value:"code",layout:xe([])}]})],code:`
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
);`}),n({title:"Link Tab",description:"This is a link tab. The buttons route to a different page.",preview:[new Aa({class:"max-w-[400px]",options:[{label:"Example 1",href:"docs/components/tabs/example-1",component:new Q({class:"p-8"},"This is an example 1 tab panel.")},{label:"Example 2",href:"docs/components/tabs/example-2",component:new Q({class:"p-8"},"This is an example 2 tab panel.")},{label:"Example 3",href:"docs/components/tabs/example-3",component:new Q({class:"p-8"},"This is an example 3 tab panel.")}]})],code:`
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
);`}),n({title:"Tab Group",description:"This is a tab group. The buttons update the state.",preview:[new mt({options:[{label:"Music",value:"music"},{label:"Podcasts",value:"podcasts"},{label:"Live",value:"live"}]})],code:`import { TabGroup } from "@components/organisms/tabs/tab-group.js";

new TabGroup({
    options: [
        { label: 'Music', value: 'music' },
        { label: 'Podcasts', value: 'podcasts' },
        { label: 'Live', value: 'live' }
    ]
})`})]),La=()=>f({title:"Tooltips",description:"Tooltips are small popups that appear when a user hovers over an element."},[n({title:"Usage",description:"Import the tooltip atom and use it in your components.",preview:[a({class:"flex gap-2 flex-wrap"},[A({content:"This is a tooltip."},[l("Hover me")])])],code:`import { Button } from "@components/atoms/buttons/buttons.js";
import { Tooltip } from "@components/atoms/tooltip.js";

Tooltip({ content: 'This is a tooltip.' }, [
    Button('Hover me')
])`}),n({title:"Bottom Tooltip",description:"This will show the tooltip at the bottom of the target element.",preview:[a({class:"flex gap-2 flex-wrap"},[A({content:"This is a tooltip.",position:"bottom"},[l("Hover me")])])],code:`Tooltip({ content: 'This is a tooltip.', position: 'bottom' }, [
    Button('Hover me')
])`}),n({title:"Top-Right Tooltip",description:"This will show the tooltip at the top-right of the target element.",preview:[a({class:"flex gap-2 flex-wrap"},[A({content:"This is a tooltip.",position:"top-right"},[l("Hover me")])])],code:`Tooltip({ content: 'This is a tooltip.', position: 'top-right' }, [
    Button('Hover me')
])`}),n({title:"Top-Left Tooltip",description:"This will show the tooltip at the top-left of the target element.",preview:[a({class:"flex gap-2 flex-wrap"},[A({content:"This is a tooltip.",position:"top-left"},[l("Hover me")])])],code:`Tooltip({ content: 'This is a tooltip.', position: 'top-left' }, [
    Button('Hover me')
])`}),n({title:"Bottom-Right Tooltip",description:"This will show the tooltip at the bottom-right of the target element.",preview:[a({class:"flex gap-2 flex-wrap"},[A({content:"This is a tooltip.",position:"bottom-right"},[l("Hover me")])])],code:`Tooltip({ content: 'This is a tooltip.', position: 'bottom-right' }, [
    Button('Hover me')
])`}),n({title:"Bottom-Left Tooltip",description:"This will show the tooltip at the bottom-left of the target element.",preview:[a({class:"flex gap-2 flex-wrap"},[A({content:"This is a tooltip.",position:"bottom-left"},[l("Hover me")])])],code:`Tooltip({ content: 'This is a tooltip.', position: 'bottom-left' }, [
    Button('Hover me')
])`}),n({title:"Left Tooltip",description:"This will show the tooltip to the left of the target element.",preview:[a({class:"flex gap-2 flex-wrap"},[A({content:"This is a tooltip.",position:"left"},[l("Hover me")])])],code:`Tooltip({ content: 'This is a tooltip.', position: 'left' }, [
    Button('Hover me')
])`}),n({title:"Right Tooltip",description:"This will show the tooltip to the right of the target element.",preview:[a({class:"flex gap-2 flex-wrap"},[A({content:"This is a tooltip.",position:"right"},[l("Hover me")])])],code:`Tooltip({ content: 'This is a tooltip.', position: 'right' }, [
    Button('Hover me')
])`}),c({class:"text-muted-foreground text-sm mt-4"},"The tooltip position can be set to: top, top-right, top-left, bottom, bottom-right, bottom-left, left, right.")]),we=(e,t,o)=>(o="Icons"+(o?"."+o:""),a({class:"flex flex-auto flex-col items-center gap-2 max-w-[150px] h-[8.5rem] cursor-pointer"},[a({class:"flex flex-auto w-full h-full justify-center items-center flex-wrap rounded-lg border bg-card text-base shadow-sm hover:bg-accent hover:text-accent-foreground",click:()=>{navigator.clipboard.writeText(`${o}.${t}`),app.notify({title:"Icon copied",description:`The icon '${o}.${t}' has been copied to your clipboard.`,icon:i.clipboard.checked})}},[I(e)]),a({class:"text-muted-foreground"},t)])),qe=(e,t,o)=>{const s=typeof e=="object";s&&t.push(c({class:"text-muted-foreground"},"path: "+o+".{icon}"));const d=[];if(t.push(a({class:"flex flex-auto flex-wrap gap-2 my-8"},d)),s===!1)d.push(we(e,o));else for(var h in e){if(e.hasOwnProperty(h)===!1)continue;const L=e[h];if(typeof L!="object"){d.push(we(L,h,o));continue}const We=`${o}.${h}`;qe(L,t,We)}},Fa=e=>{if(!e||typeof e!="object")return;const t=[];for(let[o,s]of Object.entries(e)){if(o==="parse")continue;t.push(ie({id:o.toLowerCase(),class:"text-2xl font-bold"},ct.titleCase(o))),qe(s,t,o)}return t},Pa=()=>f({title:"Icons",description:"The icons are from the Hericon library. They are SVG icons that can be used in your project. This icon set uses the outline style."},[y({href:"https://heroicons.com/",target:"_blank",class:"bttn link"},"link: Hericons"),n({title:"Icons",description:"This is an icon.",preview:[M({html:i.home})],code:`
import { Icons } from '@components/icons/icons.js';
import { I } from '@base-framework/atoms';

export const HomeIcon = () => (
    I({ html: Icons.home} )
);`}),a({class:"my-20"},[J({class:"text-2xl font-bold"},"Default Icons"),c({class:"text-muted-foreground"},'A few of the icons have been saved to the "Icons" object. You can use these icons in your project. Click to copy the Icon path. Here is a list of the icons that are available:')]),n({title:"Icon Atom",description:"An Icon is a helper atom that makes it easier to use icons in your project. ",preview:[I(i.home)],code:`
import { Icon } from '@components/atoms/icon.js';

Icon(Icons.home);`}),a({class:"my-20"},[J({class:"text-2xl font-bold"},"Default Icons"),c({class:"text-muted-foreground"},'A few of the icons have been saved to the "Icons" object. You can use these icons in your project. Click to copy the Icon path. Here is a list of the icons that are available:')]),Fa(i)]),Ma=()=>f({title:"Introduction",description:"The App Shell is a versatile and modular framework, designed to speed up front-end application development using Tailwind CSS and Shadcn-inspired themes. It provides a comprehensive set of components and atoms, created with the Base framework."},[k({class:"space-y-4"},[v({class:"text-lg font-bold"},"The App Shell"),c({class:"text-muted-foreground"},[r("The App Shell project is built to streamline front-end application development. As a modular and scalable PWA (Progressive Web App), it offers easy installation across devices, making it suitable as a foundational framework for new projects.")]),c({class:"text-muted-foreground"},[r("Designed with accessibility, customization, and ease of use in mind, the App Shell accelerates setup, allowing developers to focus on creating functionality without reinventing the wheel.")])]),a({class:"items-start justify-center gap-6 rounded-lg pt-0 md:p-8 md:mt-6 md:grid lg:grid-cols-2 xl:grid-cols-2"},[a({class:"col-span-2 grid items-start gap-6 lg:col-span-1"},[Be(),Me(),Le()]),a({class:"col-span-2 grid items-start gap-6 lg:col-span-1"},[Ne({members:[{name:"Leslie Alexander",email:"leslie.alexander@example.com",image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"owner",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Michael Foster",email:"michael.foster@example.com",image:"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"member",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Dries Vincent",email:"dries.vincent@example.com",image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"owner",status:"online"}]}),Ee({link:"http://example.com/link/to/document",people:[{name:"Leslie Alexander",email:"leslie.alexander@example.com",image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"owner",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Michael Foster",email:"michael.foster@example.com",image:"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"member",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Dries Vincent",email:"dries.vincent@example.com",image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"owner",status:"online"}]}),Pe({startDate:"2023-01-23"}),$e()])]),k({class:"space-y-4 mt-12"},[v({class:"text-lg font-bold"},"Theme and Styling"),c({class:"text-muted-foreground"},[r("This project is powered by Tailwind CSS, providing a highly customizable, utility-first approach to styling. Additionally, the theme draws inspiration from "),y({href:"https://github.com/shadcn",class:"underline",target:"_blank"},"Shadcn’s UI component library"),r(", combining best practices for consistency and flexibility.")])]),k({class:"space-y-4 mt-12"},[v({class:"text-lg font-bold"},"Icons"),c({class:"text-muted-foreground"},[r("This project utilizes Heroicons, a comprehensive icon set provided by the Tailwind Labs team. These icons are fully customizable and designed to fit seamlessly within Tailwind-based applications.")]),c({class:"text-muted-foreground"},[r("For more details on available icons, visit the "),y({href:"https://heroicons.com",class:"underline",target:"_blank"},"Heroicons website"),r(".")])]),k({class:"space-y-4 mt-12"},[v({class:"text-lg font-bold"},"Components and Atoms"),c({class:"text-muted-foreground"},[r("Leveraging the Base framework, this project provides a comprehensive set of reusable components and atoms. Inspired by projects like "),y({href:"https://github.com/shadcn/ui",class:"underline",target:"_blank"},"shadcn/ui"),r(", the components are crafted to balance flexibility and simplicity, allowing developers to integrate pre-designed elements or customize them as needed.")]),c({class:"text-muted-foreground"},[r("You can explore components like "),y({href:"/docs/components/buttons",class:"underline"},"Buttons"),r(", "),y({href:"/docs/components/tabs",class:"underline"},"Tabs"),r(", and "),y({href:"/docs/components/forms",class:"underline"},"Forms"),r(" to quickly build complex UIs without starting from scratch.")])]),k({class:"space-y-4 mt-12"},[v({class:"text-lg font-bold"},"Development Guidelines"),c({class:"text-muted-foreground"},[r("Modules are an essential part of the App Shell's extensibility. You can add new features by creating modules in the modules folder and registering them in the "),y({href:"/docs/imported-modules",class:"underline"},"imported-modules.js"),r(" file. This structure supports modularity, making it easier to maintain and scale projects.")]),c({class:"text-muted-foreground"},[r("Each module includes its own routes, links, and options, as demonstrated in the example provided. This architecture ensures that modules are self-contained and can be easily integrated into any project using the App Shell framework.")]),De(`import { Icons } from '@components/icons/icons.js';
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
});`)]),k({class:"space-y-4 mt-12"},[v({class:"text-lg font-bold"},"Contributors and Community"),c({class:"text-muted-foreground"},[r("The App Shell is an open-source project, and contributions from the community are welcome. The project is maintained by a dedicated developer who aims to continuously enhance its functionality.")]),c({class:"text-muted-foreground"},[r("For information on contributing, check the "),y({href:"https://github.com/chrisdurfee/next-app-shell",class:"underline",target:"_blank"},"GitHub repository"),r(" and join the community discussions to collaborate and innovate.")])])]),ve=window.matchMedia,se=u(({value:e,label:t,icon:o})=>F({class:'text-sm gap-1 font-medium leading-none disabled:cursor-not-allowed disabled:opacity-70 flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground data-[state="active"]:border-primary [&:has([data-state="active"])]:border-primary',onState:["method",{active:e}],dataSet:["method",["state",e,"active"]],click:(s,{state:d})=>{d.method=e,localStorage.setItem("theme",e),e==="system"&&localStorage.removeItem("theme"),$a(e)}},[I(o),r(t)])),$a=e=>{var s;const t=document.documentElement;if(e==="system"&&(e=(s=window.matchMedia)!=null&&s.call(window,"(prefers-color-scheme: dark)").matches?"dark":"light"),ve&&!ve("(prefers-color-scheme: "+e+")").matches){t.classList.add(e);return}const o=e==="light"?"dark":"light";t.classList.remove(o)},Ea=w({render(){return a({class:"flex flex-auto flex-col"},[a({class:"grid grid-cols-3 gap-4"},[se({label:"System",value:"system",icon:i.adjustments.horizontal}),se({label:"Light",value:"light",icon:i.sun}),se({label:"Dark",value:"dark",icon:i.moon})])])},state(){return{method:window.localStorage.getItem("theme")??"system"}}}),Na=e=>a({class:"flex flex-auto flex-col items-center gap-2 max-w-[150px] h-[8.5rem] cursor-pointer"},[a({class:`flex flex-auto w-full h-full min-h-[136px] justify-center items-center flex-wrap rounded-lg border text-base shadow-sm ${e.class}`,click:()=>{navigator.clipboard.writeText(`${e.class}`),app.notify({title:"Color copied",description:`The color '${e.class}' has been copied to your clipboard.`,icon:i.clipboard.checked})}}),a({class:"text-sm text-muted-foreground"},e.var)]),b=(e,t)=>k({class:"flex flex-auto flex-col gap-2"},[c({class:"text-base text-muted-foreground"},e),a({class:"flex flex-auto flex-wrap gap-2 my-2",map:[t,Na]})]),Oa=e=>a({class:"flex flex-auto flex-col gap-12"},[ie({class:"text-2xl font-bold"},"Theme Toggle"),new Ea,ie({class:"text-2xl font-bold"},"Color Guide"),b("Default background color of <body />...etc",[{var:"--backround",class:"bg-backround"},{var:"--foreground",class:"bg-foreground"}]),b("Muted backgrounds such as <TabsList />, <Skeleton /> and <Switch />",[{var:"--muted",class:"bg-muted"},{var:"--muted-foreground",class:"bg-muted-forground"}]),b("Background color for <Card />",[{var:"--card",class:"bg-card"},{var:"--card-foreground",class:"bg-card-foreground"}]),b("Background color for popovers such as <DropdownMenu />, <HoverCard />, <Popover />",[{var:"--popover",class:"bg-popover"},{var:"--popover-foreground",class:"bg-popover-foreground"}]),b("Default border color",[{var:"--border",class:"bg-border"}]),b("Border color for inputs such as <Input />, <Select />, <Textarea />",[{var:"--input",class:"bg-input"}]),b("Primary colors for <Button />",[{var:"--primary",class:"bg-primary"},{var:"--primary-foreground",class:"bg-primary-foreground"}]),b("Secondary colors for <Button />",[{var:"--secondary",class:"bg-secondary"},{var:"--secondary-foreground",class:"bg-secondary-foreground"}]),b("Used for accents such as hover effects on <DropdownMenuItem>, <SelectItem>...etc",[{var:"--accent",class:"bg-accent"},{var:"--accent-foreground",class:"bg-accent-foreground"}]),b('Used for destructive actions such as <Button variant="destructive">',[{var:"--destructive",class:"bg-destructive"},{var:"--destructive-foreground",class:"bg-destructive-foreground"}]),b('Used for warning actions such as <Button variant="warning">',[{var:"--warning",class:"bg-warning"},{var:"--warning-foreground",class:"bg-warning-foreground"}]),b("Used for focus ring",[{var:"--ring",class:"bg-ring"}]),b("Border radius for card, input and buttons",[{var:"--radius",class:"bg-radius"}])]),Ha=()=>f({title:"Theme",description:"The theme is using Tailwind CSS and is based on Shadcn UI. The theme is customizable and can be extended. It comes with light and dark theme support."},[y({href:"https://ui.shadcn.com/docs/theming",target:"_blank",class:"bttn link"},"link: Shadcn"),a({class:"my-20"},[J({class:"text-2xl font-bold"},"Default Styles"),c({class:"text-muted-foreground"},"The default styles are defined in the Tailwind CSS configuration file and in the base CSS file. Here's the list of variables available for customization:")]),Oa(),a({class:"flex flex-auto flex-col gap-2 mt-20"},[v({class:"text-2xl font-bold"},"Text Sizes"),c({class:"text-muted-foreground text-3xl"},"Text-3xl A test sentence."),c({class:"text-muted-foreground text-2xl"},"Text-2xl A test sentence."),c({class:"text-muted-foreground text-xl"},"Text-xl A test sentence."),c({class:"text-muted-foreground text-lg"},"Text-lg A test sentence."),c({class:"text-muted-foreground text-base"},"Text-base A test sentence."),c({class:"text-muted-foreground text-sm"},"Text-sm A test sentence."),c({class:"text-muted-foreground text-xs"},"Text-xs A test sentence.")])]),m=(e,t,o)=>({uri:e,title:t,component:o()}),za=e=>[m(`${e}`,"Introduction",Ma),m(`${e}/theme`,"Theme",Ha),m(`${e}/icons`,"Icons",Pa),m(`${e}/components/buttons*`,"Buttons",Et),m(`${e}/components/badges*`,"Badges",At),m(`${e}/components/tabs*`,"Tabs",Ba),m(`${e}/components/modals*`,"Modals",xa),m(`${e}/components/notifications*`,"Notifications",va),m(`${e}/components/dialogs*`,"Modals",Po),m(`${e}/components/cards*`,"Cards",co),m(`${e}/components/calendars*`,"Calendars",Ot),m(`${e}/components/avatars*`,"Avatars",jt),m(`${e}/components/inputs*`,"Inputs",sa),m(`${e}/components/forms*`,"Forms",Jo),m(`${e}/components/alerts*`,"Alerts",kt),m(`${e}/components/comboboxes*`,"Comboboxes",bo),m(`${e}/components/lists*`,"Lists",fa),m(`${e}/components/data-tables*`,"Data Tables",Co),m(`${e}/components/breadcrumbs*`,"Breadcrumbs",$t),m(`${e}/components/navigations*`,"Navigations",wa),m(`${e}/components/progress-bars*`,"Progress Bars",Ta),m(`${e}/components/skeletons*`,"Skeletons",Ca),m(`${e}/components/tooltips*`,"Tooltips",La),m(`${e}/components/dropdown-menus*`,"Dropdown Menus",Wo)],Ra=e=>[{href:`${e}`,label:"Introduction",exact:!0},{href:`${e}/theme`,label:"Theme",exact:!0},{href:`${e}/icons`,label:"Icons"},{group:"Components",options:[{label:"Buttons",href:`${e}/components/buttons`},{label:"Badges",href:`${e}/components/badges`},{label:"Tabs",href:`${e}/components/tabs`},{label:"Modals",href:`${e}/components/modals`},{label:"Notifications",href:`${e}/components/notifications`},{label:"Dialogs",href:`${e}/components/dialogs`},{label:"Cards",href:`${e}/components/cards`},{label:"Calendars",href:`${e}/components/calendars`},{label:"Avatars",href:`${e}/components/avatars`},{label:"Inputs",href:`${e}/components/inputs`},{label:"Forms",href:`${e}/components/forms`},{label:"Alerts",href:`${e}/components/alerts`},{label:"Comboboxes",href:`${e}/components/comboboxes`},{label:"Lists",href:`${e}/components/lists`},{label:"Data Tables",href:`${e}/components/data-tables`},{label:"Breadcrumbs",href:`${e}/components/breadcrumbs`},{label:"Navigations",href:`${e}/components/navigations`},{label:"Progress Bars",href:`${e}/components/progress-bars`},{label:"Skeletons",href:`${e}/components/skeletons`},{label:"Tooltips",href:`${e}/components/tooltips`},{label:"Dropdown Menus",href:`${e}/components/dropdown-menus`}]}],qa=()=>new dt({backHref:"aside/"},[new Q([a([P([ye("Overlay")]),a({class:"contained"},[ut()])])])]),Wa=e=>[{uri:`${e}/overlay-test`,component:qa()}],G="docs",Qa=()=>new Ue({title:"Documentation",basePath:G,routes:Wa(G),switch:za(G),links:Ra(G)});export{Qa as DocumentationPage,Qa as default};