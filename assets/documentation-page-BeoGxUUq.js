import{P as J,A as Ge}from"./panel-BsFB9CxA.js";import{w as N,m as a,R as k,j as de,D as U,H as _,c as P,Q as u,p as Ve,l as Qe,I as r,U as $,a as K,b as d,e as Ye,d as Je,C as ke,A as O,k as Ke,y as i,_ as w,P as G,T as y,B as l,F as X,L as Ze,n as Te,o as me,f as Z,q as Se,t as Xe,r as T,s as q,u as M,v as et,x as S,z as W,E as v,J as tt,K as ot,Z as at,M as Ce,N as pe,W as st,X as V,Y as nt,$ as je,a0 as Ie,a1 as ie,a2 as le,a3 as rt,a4 as ae,a5 as it,a6 as lt,a7 as ct,a8 as R,S as I,a9 as fe,aa as dt,ab as ce,ac as ut,O as mt,G as pt}from"./index-DPXb-tle.js";import{S as ft,T as ht}from"./sidebar-menu-DmR1R3_R.js";import{T as D}from"./tooltip-Bdz08Iiw.js";const gt=e=>_({class:"inline-flex flex-auto items-center justify-center whitespace-nowrap rounded-sm text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm",dataSet:["selected",["state",e.value,"active"]]},[P({class:"flex flex-auto justify-center items-center px-3 py-1.5",onSet:["selected",{selected:e.value}],click:t=>e.callBack(e.value)},e.label)]),bt=(e,t)=>(e.callBack=t,gt(e)),xt=e=>de({class:`tab items-center justify-center rounded-md bg-muted p-1 text-muted-foreground ${e.class}`},[U({class:"flex flex-auto flex-row",map:[e.options,t=>bt(t,e.callBack)]})]);class Ae extends N{render(){const t=this.select.bind(this);return a({class:""},[xt({class:this.class,options:this.options,callBack:t}),k({class:"tab-content",onState:["selected",this.updateContent.bind(this)]})])}getFirstValue(){var t;return(t=this.options[0])==null?void 0:t.value}update(){const t=this.state.get("selected");this.select(null),this.select(t)}select(t){this.state.selected=t}updateContent(t){const o=this.options;if(!o||o.length<1)return;const n=o[0];for(const c of o)if(c.value===t)return c.layout;return n.layout}setupStates(){const t=this.callBack,o=typeof t;return{selected:{state:this.getFirstValue(),callBack(n){o==="function"&&t(n)}}}}}const De=u((e,t)=>Ve({class:"flex p-4 min-h-[350px] max-h-[650px] overflow-x-auto rounded-lg border bg-muted whitespace-break-spaces break-all cursor-pointer"},[Qe({class:"font-mono flex-auto text-sm text-wrap",click:()=>{navigator.clipboard.writeText(t[0].textContent),app.notify({title:"Code copied",description:"The code has been copied to your clipboard.",icon:r.clipboard.checked})}},t)])),wt=u((e,t)=>a({class:"flex flex-auto p-4 min-h-[350px] max-h-[650px] overflow-x-auto rounded-lg border bg-card"},[a({class:"preview flex flex-auto justify-center items-center"},t)])),he=u((e,t)=>a({class:"py-4"},t)),vt=e=>new Ae({class:"mt-4 max-w-[400px]",options:[{label:"Preview",value:"preview",layout:he([wt(e.preview)])},{label:"Code",value:"code",layout:he([De(e.code)])}]}),yt=u(({title:e,description:t})=>$({class:"flex flex-col"},[K({class:"scroll-m-20 text-2xl font-bold tracking-tight"},e),t&&d({class:"text-base text-muted-foreground py-2 max-w-[700px]"},t)])),s=u((e,t)=>k({class:"grid py-4"},[yt({title:e.title,description:e.description}),vt({preview:e.preview,code:e.code})]));class kt extends Ye{render(){return Je([a({class:"contained px-4 flex flex-auto flex-col"},this.children)])}}const Tt=u(({title:e,description:t})=>$({class:"flex flex-col"},[ke({class:"scroll-m-20 text-3xl font-bold tracking-tight"},e),d({class:"text-base text-muted-foreground py-2 max-w-[700px]"},t)])),St=u((e,t)=>a({class:"contained py-8"},[Tt(e),k({class:"pb-12 pt-8"},t)])),f=u((e,t)=>new kt([St(e,t)])),Ct=()=>f({title:"Alerts",description:"Alerts are used to provide feedback to the user about the outcome of an action or to inform them of important information."},[s({title:"Default Alert",description:"This is a standard alert without any specific type.",preview:[O({title:"Notice",description:"This is a default alert without a specific type.",icon:r.information})],code:`import { Alert } from "@components/molecules/alert.js";
import { Icons } from "@components/icons/icons.js";

Alert({
    title: 'Notice',
    description: 'This is a default alert without a specific type.',
    icon: Icons.information
})`}),s({title:"Info Alert",description:"An info alert that provides general information to the user.",preview:[O({title:"Heads up!",description:"You can add components to your app using the CLI.",icon:r.information,type:"info"})],code:`Alert({
    title: 'Heads up!',
    description: 'You can add components to your app using the CLI.',
    icon: Icons.information,
    type: 'info'
})`}),s({title:"Success Alert",description:"A success alert to inform the user of a successful action.",preview:[O({title:"Success!",description:"Your changes have been saved successfully.",icon:r.check,type:"success"})],code:`Alert({
    title: 'Success!',
    description: 'Your changes have been saved successfully.',
    icon: Icons.check,
    type: 'success'
})`}),s({title:"Warning Alert",description:"A warning alert to caution the user about something important.",preview:[O({title:"Warning!",description:"Please check your input before proceeding.",icon:r.warning,type:"warning"})],code:`Alert({
    title: 'Warning!',
    description: 'Please check your input before proceeding.',
    icon: Icons.warning,
    type: 'warning'
})`}),s({title:"Destructive Alert",description:"A destructive alert to inform the user of an error or serious issue.",preview:[O({title:"Error!",description:"Something went wrong. Please try again later.",icon:r.shield,type:"destructive"})],code:`Alert({
    title: 'Error!',
    description: 'Something went wrong. Please try again later.',
    icon: Icons.error,
    type: 'destructive'
})`})]),jt=u(({src:e,alt:t})=>Ke({class:"absolute w-full h-full rounded-full object-cover fadeIn",src:e,alt:t,error:o=>o.target.style.display="none"})),It=e=>a({class:"flex items-center justify-center w-full h-full rounded-full bg-muted text-muted-foreground font-medium"},[i(e)]),At=e=>{switch(e){case"xs":return"h-6 w-6";case"sm":return"h-8 w-8";case"md":return"h-12 w-12";case"lg":return"h-16 w-16";case"xl":return"h-24 w-24";case"2xl":return"h-32 w-32";case"3xl":return"h-48 w-48";default:return"h-12 w-12"}},x=u(({src:e,alt:t,fallbackText:o,size:n})=>(n=At(n),a({class:`relative flex items-center justify-center ${n}`},[jt({src:e,alt:t}),It(o)]))),Dt=()=>f({title:"Avatars",description:"Avatars are used to represent users or objects visually, with customizable sizes and optional status indicators."},[s({title:"Extra Small Avatar (xs)",description:"An extra small avatar for compact spaces.",preview:[x({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN",size:"xs"})],code:"Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: 'xs' })"}),s({title:"Small Avatar (sm)",description:"A small avatar suitable for lists and compact layouts.",preview:[x({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN",size:"sm"})],code:"Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: 'sm' })"}),s({title:"Medium Avatar (md)",description:"A medium-sized avatar, often used for standard profile images.",preview:[x({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN",size:"md"})],code:"Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: 'md' })"}),s({title:"Large Avatar (lg)",description:"A large avatar for prominent profile displays.",preview:[x({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN",size:"lg"})],code:"Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: 'lg' })"}),s({title:"Extra Large Avatar (xl)",description:"An extra-large avatar for detailed user profile sections.",preview:[x({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN",size:"xl"})],code:"Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: 'xl' })"}),s({title:"2x Extra Large Avatar (2xl)",description:"A double extra-large avatar for large displays.",preview:[x({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN",size:"2xl"})],code:"Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: '2xl' })"}),s({title:"3x Extra Large Avatar (3xl)",description:"A triple extra-large avatar for the largest profile displays.",preview:[x({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN",size:"3xl"})],code:"Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: '3xl' })"}),s({title:"Avatar with Name and Subtitle",description:"Display an avatar alongside a name and subtitle for user identification.",preview:[a({class:"flex items-center gap-4 p-4 bg-card rounded-md border shadow-md"},[x({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN",size:"lg"}),a({},[i({class:"text-lg font-semibold text-foreground"},"Leslie Alexander"),d({class:"text-sm text-muted-foreground"},"leslie.alexander@example.com")])])],code:`Div({ class: 'flex items-center gap-4 p-4 bg-card rounded-md border shadow-md' }, [
    Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: 'lg' }),
    Div({}, [
        Span({ class: 'text-lg font-semibold text-foreground' }, 'Leslie Alexander'),
        P({ class: 'text-sm text-muted-foreground' }, 'leslie.alexander@example.com')
    ])
])`}),s({title:"Avatar with Online Status",description:"Displays an avatar with a small online status indicator.",preview:[a({class:"relative flex items-center gap-4 p-4 bg-card rounded-md border shadow-md"},[a({class:"relative"},[x({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN",size:"lg"}),a({class:"absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 rounded-full"})]),a({},[i({class:"text-lg font-semibold text-foreground"},"Leslie Alexander"),d({class:"text-sm text-muted-foreground"},"leslie.alexander@example.com")])])],code:`Div({ class: 'relative flex items-center gap-4 p-4 bg-card rounded-md border shadow-md' }, [
    Div({ class: 'relative' }, [
        Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: 'lg' }),
        Div({ class: 'absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 rounded-full' }) // Online indicator
    ]),
    Div({}, [
        Span({ class: 'text-lg font-semibold text-foreground' }, 'Leslie Alexander'),
        P({ class: 'text-sm text-muted-foreground' }, 'leslie.alexander@example.com')
    ])
])`})]),ge={gray:{backgroundColor:"bg-gray-50",textColor:"text-gray-600",ringColor:"ring-gray-500/10"},red:{backgroundColor:"bg-red-50",textColor:"text-red-700",ringColor:"ring-red-600/10"},yellow:{backgroundColor:"bg-yellow-50",textColor:"text-yellow-800",ringColor:"ring-yellow-600/20"},green:{backgroundColor:"bg-green-50",textColor:"text-green-700",ringColor:"ring-green-600/20"},blue:{backgroundColor:"bg-blue-50",textColor:"text-blue-700",ringColor:"ring-blue-700/10"},indigo:{backgroundColor:"bg-indigo-50",textColor:"text-indigo-700",ringColor:"ring-indigo-700/10"},purple:{backgroundColor:"bg-purple-50",textColor:"text-purple-700",ringColor:"ring-purple-700/10"},pink:{backgroundColor:"bg-pink-50",textColor:"text-pink-700",ringColor:"ring-pink-700/10"},primary:{backgroundColor:"bg-primary",textColor:"text-primary-foreground",ringColor:"ring-primary/10"},secondary:{backgroundColor:"bg-secondary",textColor:"text-secondary-foreground",ringColor:"ring-secondary/10"},destructive:{backgroundColor:"bg-destructive",textColor:"text-destructive-foreground",ringColor:"ring-destructive/10"},warning:{backgroundColor:"bg-warning",textColor:"text-warning-foreground",ringColor:"ring-warning/10"},outline:{backgroundColor:"bg-background",textColor:"text-primary",ringColor:"ring-input"},ghost:{backgroundColor:"bg-background",textColor:"text-primary",ringColor:"ring-background"},link:{backgroundColor:"bg-background",textColor:"text-primary",ringColor:"ring-background"}},Bt=e=>ge[e]||ge.gray,Lt=e=>{const{backgroundColor:t,textColor:o,ringColor:n}=Bt(e);return`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors ${t} ${o} ${n}`},g=u((e,t)=>{const o=Lt(e==null?void 0:e.type);return i({...e,class:o},t)}),Ft=()=>f({title:"Badges",description:"Badges can be used to display a status or a count."},[s({title:"Badge",description:"This is a badge.",preview:[a({class:"flex gap-2 flex-wrap"},[g({type:"gray"},"Text"),g({type:"red"},"Text"),g({type:"yellow"},"Text"),g({type:"green"},"Text"),g({type:"blue"},"Text"),g({type:"indigo"},"Text"),g({type:"purple"},"Text"),g({type:"pink"},"Text"),g({type:"primary"},"Text"),g({type:"secondary"},"Text"),g({type:"destructive"},"Text"),g({type:"warning"},"Text"),g({type:"outline"},"Text"),g({type:"ghost"},"Text"),g({type:"link"},"Text")])],code:`
import { Button } from '@components/atoms/badges/badges.js';
import { Atom } from '@base-framework/base';

export const PrimaryBadge = Atom((props, children)) => (
    Badge({ ...props, type: 'gray' }, children)
);`})]),Pt=(e,t)=>y({href:e,"aria-current":t==="Breadcrumb"?"page":null,class:"text-muted-foreground hover:text-foreground"},[i(t)]),$t=()=>i({class:"mx-2 text-muted-foreground","aria-hidden":!0,html:">"}),Mt=e=>a({class:"flex items-center"},[e.href?Pt(e.href,e.label):i(e.label),e.separator&&$t()]),Et=w({setData(){return new G({items:this.items||[]})},render(){return de({"aria-label":"Breadcrumb",class:"flex items-center space-x-1 text-sm"},[a({role:"list",class:"flex items-center",for:["items",(e,t)=>Mt({href:e.href,label:e.label,separator:t<this.data.items.length-1})]})])}}),Nt=[{href:"/",label:"Home"},{href:"/components",label:"Components"},{label:"Breadcrumb"}],Ot=()=>f({title:"Breadcrumbs",description:"Breadcrumbs are a navigation aid that helps users understand their location within a website or application."},[s({title:"Usage",description:"To use the Breadcrumb component, import it and provide an array of items. Each item can have a label and an optional href.",preview:[new Et({items:Nt})],code:`import { Breadcrumb } from "@components/molecules/breadcrumb/breadcrumb.js";

new Breadcrumb({ items: [
    { href: '/', label: 'Home' },
    { href: '/components', label: 'Components' },
    { label: 'Breadcrumb' } // Last item, no href needed
] })`})]),Rt=()=>f({title:"Button",description:"Displays a button or a component that looks like a button."},[s({title:"Usage",description:"Import the button atom and use it in your components. This platform has variants for different use cases. The variant can be set using the `variant` prop.",preview:[l({variant:"primary"},"Click Me")],code:`import { Button } from '@components/atoms/buttons/buttons.js';

Button({ ...props, variant: 'secondary' }, primary)`}),$({class:"flex flex-col py-8"},[X({class:"text-3xl font-bold tracking-tight border-b pb-2"},"Variants")]),s({title:"Primary Button",description:"This is a primary button.",preview:[l({variant:"primary"},"Click Me")],code:`
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
);`}),s({title:"Icon Button",description:"Displays a button with an icon.",preview:[l({variant:"icon",icon:r.home})],code:`import { Button } from '@components/atoms/buttons/buttons.js';
import { Icons } from '@components/icons/icons.js';
import { Atom } from '@base-framework/base';

export const IconButton = Atom((props) => (
    Button({ ...props, variant: 'icon', icon: Icons.home })
);`}),s({title:"With Icon Button",preview:[l({variant:"withIcon",icon:r.home},"With Icon")],code:`import { Button } from '@components/atoms/buttons/buttons.js';
import { Icons } from '@components/icons/icons.js';

Button({ variant: 'withIcon', icon: Icons.home }, 'With Icon')`}),s({title:"Loading Button",preview:[Ze("With Icon")],code:`import { LoadingButton } from '@components/atoms/buttons/buttons.js';

LoadingButton('With Icon')`})]),Ht=()=>Z.formatTime("",24),zt=()=>f({title:"Calendars",description:"This is the calendar component documentation."},[s({title:"Usage",description:"This is how you can use the calendar component.",preview:[new Te],code:`@components/organisms/calendar/calendar.js';

new Calendar()`}),s({title:"Dynamic Time",description:"This is how you can use the calendar component.",preview:[new me({filter:()=>{let e="Morning";const t=Ht();return t>="18:00:00"?e="Evening":t>="12:00:00"&&(e="Afternoon"),`Good ${e}`}})],code:`import { DateTime } from "@base-framework/base";
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
})`}),s({title:"Dynamic Local Time by Time Frame",description:"This will show the time frame based on the local time. This will update the time frame every minute to keep the time frame updated.",preview:[new me({dateTime:"2024-11-04T18:00:00",filter(e){const t=Z.getLocalTime(e,!0);return Z.getTimeFrame(t)}})],code:`import { DateTime } from "@base-framework/base";
import { DynamicTime } from "@base-framework/organisms";

new DynamicTime({
    dateTime: '2024-11-04T18:00:00',
    filter(date)
    {
        // convert to local time
        const localTime = DateTime.getLocalTime(date, true);
        return DateTime.getTimeFrame(localTime);
    }
})`})]),A=u((e,t)=>a({...e,class:`rounded-lg border bg-card text-card-foreground shadow-md min-w-[120px] min-h-[80px] my-5 mx-5 p-4 ${e.class||""}`},t)),qt=u((e,t)=>a({...e,class:"flex flex-auto flex-col space-y-2"},t)),Wt=u((e,t)=>Se({...e,class:"flex auto text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"},t)),Ut=u((e,t)=>d({...e,class:"text-sm text-muted-foreground"},t)),_t=u((e,t)=>d({...e,class:"text-sm text-destructive"},t)),Gt=e=>e.tag==="input"||e.tag==="select"||e.tag==="textarea",Be=(e,t,o)=>e.map(n=>(n.children&&n.children.length>0&&(n.children=Be(n.children,t,o)),n.required&&Gt(n)?{...n,aria:{invalid:["hasError"]},invalid:o,input:t}:n)),Vt=u((e,t)=>{const c=Be(t,h=>{h.target.checkValidity()&&e.setError(null)},h=>{e.setError(h.target.validationMessage)});return a({...e,class:"w-full"},c)}),p=w({state(){return{error:null,hasError:!1,value:this.defaultValue??""}},render(){const e=this.name,t=this.getId(`${e}`),{label:o,description:n}=this,c=h=>{this.state.error=h,this.state.hasError=!!h};return a({class:"flex flex-auto space-y-4"},[qt([Wt({htmlFor:t},o),Vt({id:t,name:e,value:this.state.value,setError:c},this.children),n&&Ut({id:this.getId("description")},n),a({onState:["error",h=>h&&_t(h)]})])])}}),Qt=(e,t=null)=>{e.target.checkValidity()&&(e.preventDefault(),t&&t(e))},L=u((e,t)=>Xe({...e,submit:o=>Qt(o,e.submit),class:`space-y-8 w-full ${e.class??""}`},t)),E=({title:e,description:t})=>$({class:"text-left"},[X({class:"font-semibold tracking-tight text-2xl"},e),d({class:"text-sm text-muted-foreground"},t)]),Yt=()=>a({class:"flex items-center justify-center gap-4"},[l({variant:"outline",class:"gap-2 w-full",click:()=>console.log("Sign in with Github"),"aria-label":"Sign in with Github"},[T(r.companies.gitHub),i("Github")]),l({variant:"outline",class:"gap-2 w-full",click:()=>console.log("Sign in with Google"),"aria-label":"Sign in with Google"},[T(r.companies.google),i("Google")])]),Jt=()=>L({submit:e=>{e.preventDefault(),console.log("Account created")}},[new p({name:"email",label:"Email"},[q({type:"email",placeholder:"m@example.com",required:!0,class:"border p-2 rounded-md w-full bg-background placeholder-muted-foreground text-foreground"})]),new p({name:"password",label:"Password"},[q({type:"password",placeholder:"Your password",required:!0,class:"border p-2 rounded-md w-full bg-background placeholder-muted-foreground text-foreground"})]),l({type:"submit",class:"w-full mt-4 py-2 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition"},"Create account")]),Le=()=>A({class:"w-full max-w-md mx-auto p-8 bg-card space-y-6"},[E({title:"Create an account",description:"Enter your email below to create your account"}),Yt(),a({class:"relative"},[a({class:"absolute inset-0 flex items-center"},[i({class:"flex-grow border-t"})]),a({class:"relative flex justify-center text-xs uppercase"},[i({class:"bg-background px-2 text-muted-foreground"},"or continue with")])]),Jt()]),ee=w({state(){return{active:this.active??!1}},render(){return P({class:"inline-flex h-6 w-11 min-w-11 items-center rounded-full bg-muted transition-colors focus:outline-none",onState:["active",{"bg-primary":!0,"bg-muted":!1}],click:(t,{state:o})=>o.toggle("active")},[i({class:"absolute h-5 w-5 bg-background rounded-full shadow-md transform transition-transform",onState:["active",{"translate-x-[22px]":!0,"translate-x-[2px]":!1}]})])}}),se=({title:e,description:t,defaultState:o,onChange:n})=>a({class:"flex items-start justify-between gap-2"},[a({class:"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex flex-col space-y-1"},[i({class:"font-medium text-foreground"},e),i({class:"font-normal leading-snug text-muted-foreground"},t)]),new ee({active:o,change:n})]),Fe=()=>A({class:"w-full max-w-md mx-auto p-6 bg-card space-y-6"},[E({title:"Cookie Settings",description:"Manage your cookie settings here."}),a({class:"pt-0 grid gap-6"},[se({title:"Strictly Necessary",description:"These cookies are essential in order to use the website and use its features.",defaultState:!0,onChange:e=>console.log("Strictly Necessary:",e)}),se({title:"Functional Cookies",description:"These cookies allow the website to provide personalized functionality.",defaultState:!1,onChange:e=>console.log("Functional Cookies:",e)}),se({title:"Performance Cookies",description:"These cookies help to improve the performance of the website.",defaultState:!1,onChange:e=>console.log("Performance Cookies:",e)})]),l({variant:"outline",class:"w-full",click:()=>console.log("Preferences saved")},"Save preferences")]),Kt=(e,t)=>!t.contains(e),Pe=w({state(){return{selectedDate:this.selectedDate??null,open:!1}},render(){const e=(o,{state:n})=>n.toggle("open"),t=o=>{this.state.selectedDate=o,this.state.open=!1};return a({class:"relative w-full max-w-[320px]"},[P({class:"flex items-center gap-2 w-full justify-between border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md h-10 px-4 py-2",click:e},[i({onState:["selectedDate",o=>o?Z.format("standard",o):"Pick a date"]}),M({html:r.calendar.days})]),a({class:"absolute mt-1 z-10 bg-background rounded-md shadow-lg",addEvent:["click",document,(o,{state:n,panel:c})=>{Kt(o.target,c)&&(n.open=!1)}],onState:["open",o=>o?new Te({selectedDate:this.state.selectedDate,selectedCallBack:t}):null]})])}}),$e=({startDate:e})=>A({class:"w-full max-w-md mx-auto p-6 bg-card space-y-6"},[E({title:"Pick a Date",description:"When is the event?"}),a({class:"font-medium text-foreground"},[new Pe({selectedDate:e,selectedCallBack:t=>console.log(t)})])]),C=u(e=>({tag:"select",...e,class:`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${e.class||""}`,onCreated(t){e.options&&et.setupSelectOptions(t,e.options)}})),ne=u(({value:e,label:t,icon:o})=>P({class:'text-sm gap-1 font-medium leading-none disabled:cursor-not-allowed disabled:opacity-70 flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground data-[state="active"]:border-primary [&:has([data-state="active"])]:border-primary',onState:["method",{active:e}],dataSet:["method",["state",e,"active"]],click:(n,{state:c})=>c.method=e},[T(o),i(t)])),Zt=w({render(){return a({class:"flex flex-auto flex-col"},[a({class:"grid grid-cols-3 gap-4"},[ne({label:"Card",value:"card",icon:r.creditCard}),ne({label:"Paypal",value:"paypal",icon:r.companies.paypal}),ne({label:"Apple",value:"apple",icon:r.companies.apple})])])},state(){return{method:null}}}),Xt=()=>a({class:"flex items-center justify-center gap-4"},[new Zt]),eo=()=>L({submit:e=>{e.preventDefault(),console.log("Payment method added")}},[new p({name:"name",label:"Name"},[S({type:"text",placeholder:"First Last",required:!0,class:"border p-2 rounded-md w-full bg-background placeholder-muted-foreground text-foreground"})]),new p({name:"card_number",label:"Card number"},[S({type:"text",placeholder:"1234 5678 9012 3456",required:!0,class:"border p-2 rounded-md w-full bg-background placeholder-muted-foreground text-foreground"})]),a({class:"flex gap-4 mt-4"},[new p({name:"month",label:"Expires"},[C({required:!0,class:"border p-2 rounded-md w-full bg-background text-foreground",options:[{value:"",label:"Month",disabled:!0},...Array.from({length:12},(e,t)=>({value:`${t+1}`,label:`${t+1}`.padStart(2,"0")}))]})]),new p({name:"year",label:"Year"},[C({required:!0,class:"border p-2 rounded-md w-full bg-background text-foreground",options:[{value:"",label:"Year",disabled:!0},...Array.from({length:10},(e,t)=>({value:`${new Date().getFullYear()+t}`,label:`${new Date().getFullYear()+t}`}))]})]),new p({name:"cvc",label:"CVC"},[S({type:"text",placeholder:"CVC",required:!0,class:"border p-2 rounded-md w-full bg-background placeholder-muted-foreground text-foreground"})])]),l({type:"submit",class:"w-full mt-4 py-2 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition"},"Continue")]),Me=()=>A({class:"w-full max-w-md mx-auto p-8 bg-card space-y-6"},[E({title:"Payment Method",description:"Add a new payment method to your account."}),Xt(),a({class:"space-y-4"},[eo()])]),to=({name:e,description:t,stars:o,language:n,lastUpdated:c})=>a({class:"flex items-start justify-between py-4 border-b border-muted last:border-b-0"},[a({class:"flex flex-col"},[i({class:"font-semibold text-foreground"},e),i({class:"text-sm text-muted-foreground"},t),a({class:"flex space-x-4 text-sm text-muted-foreground mt-3"},[a({class:"flex items-center gap-2"},[T({class:" text-blue-500"},r.document.text),i(` ${n}`)]),a({class:"flex items-center"},[T(r.star),i(` ${o}`)]),a(`Updated ${c}`)])]),l({variant:"secondary",class:"px-3 py-1 gap-1 flex items-center rounded-md",click:()=>console.log(`Starred ${e}`)},[T(r.star),i("Star")])]),oo=({projects:e})=>a({class:"space-y-3"},e.map(t=>to(t))),ao=[{name:"shadcn/ui",description:"Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.",stars:"20k",language:"TypeScript",lastUpdated:"April 2023"},{name:"base-framework",description:"A robust framework for building and structuring large-scale applications with ease.",stars:"2",language:"JavaScript",lastUpdated:"June 2024"}],so=()=>A({class:"w-full max-w-md mx-auto p-6 bg-card space-y-6"},[a({class:"font-semibold text-lg text-foreground"},"Projects"),oo({projects:ao})]),no=()=>L({submit:e=>{e.preventDefault(),console.log("Issue reported")}},[a({class:"flex flex-auto w-full gap-4"},[new p({name:"area",label:"Area"},[C({required:!0,class:"border p-2 rounded-md w-full bg-background text-foreground",options:[{value:"billing",label:"Billing"},{value:"technical",label:"Technical"},{value:"account",label:"Account"},{value:"other",label:"Other"}],defaultValue:"billing",change:e=>console.log(`Area selected: ${e.target.value}`)})]),new p({name:"security_level",label:"Security Level"},[C({required:!0,class:"border p-2 rounded-md w-full bg-background text-foreground",options:[{value:"severity_1",label:"Severity 1"},{value:"severity_2",label:"Severity 2"},{value:"severity_3",label:"Severity 3"}],defaultValue:"severity_2",change:e=>console.log(`Security Level selected: ${e.target.value}`)})])]),new p({name:"subject",label:"Subject"},[S({type:"text",placeholder:"I need help with...",required:!0,class:"border p-2 rounded-md w-full bg-background text-foreground placeholder-muted-foreground"})]),new p({name:"description",label:"Description"},[W({placeholder:"Please include all information relevant to your issue.",required:!0,class:"border p-2 rounded-md w-full bg-background text-foreground placeholder-muted-foreground"})]),a({class:"flex justify-end gap-4 mt-4"},[l({variant:"outline",class:"px-4 py-2",click:()=>console.log("Cancel clicked")},"Cancel"),l({type:"submit",class:"px-4 py-2 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition"},"Submit")])]),Ee=()=>A({class:"w-full max-w-md mx-auto p-6 bg-card space-y-6"},[E({title:"Report an issue",description:"What area are you having problems with?"}),no()]),ro=({link:e})=>a({class:"flex items-center gap-4 py-2"},[q({type:"text",value:e,readOnly:!0,class:"border p-2 rounded-md w-full bg-background text-foreground"}),l({variant:"secondary",class:"px-4 py-2",click:()=>{navigator.clipboard.writeText(e),app.notify({title:"Link copied",description:"The link has been copied to your clipboard.",icon:r.clipboard.checked})}},"Copy Link")]),io=({name:e,email:t,access:o,image:n})=>a({class:"flex items-center justify-between gap-4 py-2"},[a({class:"flex items-center gap-3"},[x({src:n,alt:e,fallbackText:e.split(" ").map(c=>c[0]).join("")}),a({},[i({class:"font-medium text-foreground"},e),i({class:"block text-sm text-muted-foreground"},t)])]),C({class:"border rounded-md bg-background text-foreground px-3 py-1",options:[{value:"edit",label:"Can edit"},{value:"view",label:"Can view"},{value:"comment",label:"Can comment"}],defaultValue:o,change:c=>console.log(`Access level changed for ${e}: ${c.target.value}`)})]),lo=({people:e})=>a({class:"space-y-3"},e.map(t=>io(t))),Ne=({link:e,people:t})=>A({class:"w-full max-w-md mx-auto p-6 bg-card space-y-6"},[E({title:"Share this document",description:"Anyone with the link can view this document."}),ro({link:e}),a({class:"border-t my-4"}),a({class:"font-medium text-foreground"},"People with access"),lo({people:t})]),co=e=>e.split(" ").map(o=>o[0]).join(""),uo=({name:e,email:t,role:o,image:n})=>a({class:"flex items-center justify-between gap-4 py-2"},[a({class:"flex items-center gap-3"},[x({src:n,alt:e,fallbackText:co(e)}),a({},[i({class:"font-medium text-foreground"},e),i({class:"block text-sm text-muted-foreground"},t)])]),C({class:"border rounded-md bg-background text-foreground px-3 py-1",options:[{value:"owner",label:"Owner"},{value:"member",label:"Member"}],defaultValue:o,change:c=>console.log(`Role changed for ${e}: ${c.target.value}`)})]),mo=({members:e})=>a({class:"space-y-3"},e.map(t=>uo(t))),Oe=({members:e})=>A({class:"w-full max-w-md mx-auto p-6 bg-card space-y-6"},[E({title:"Team Member",description:"Invite your team members to collaborate."}),mo({members:e})]),po=()=>f({title:"Cards",description:"Cards are a great way to display content in a concise and organized manner."},[s({title:"Usage",description:"Import the card atom and use it in your components.",preview:[A()],code:`import { Button } from '@components/atoms/cards/card.js';

Card()`}),v({class:"text-lg font-bold"},"Examples"),d({class:"text-muted-foreground"},"This is a list of examples of how to use the card component in your application."),s({title:"Account Card",preview:[Le()],code:`import AccountCard from "./examples/account-card.js";

AccountCard()`}),s({title:"Paymnet Card",preview:[Me()],code:`import AccountCard from "./examples/payment-card.js";

PaymentCard()`}),s({title:"Team Mmeber Card",preview:[Oe({members:[{name:"Leslie Alexander",email:"leslie.alexander@example.com",image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"owner",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Michael Foster",email:"michael.foster@example.com",image:"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"member",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Dries Vincent",email:"dries.vincent@example.com",image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"owner",status:"online"}]})],code:`import AccountCard from "./examples/team-member-card.js";

TeamMemberCard()`}),s({title:"Share Document Card",preview:[Ne({link:"http://example.com/link/to/document",people:[{name:"Leslie Alexander",email:"leslie.alexander@example.com",image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"owner",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Michael Foster",email:"michael.foster@example.com",image:"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"member",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Dries Vincent",email:"dries.vincent@example.com",image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"owner",status:"online"}]})],code:`import AccountCard from "./examples/share-document-card.js";

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
})`}),s({title:"Date Select Card",preview:[$e({startDate:"2023-01-23"})],code:`import AccountCard from "./examples/date-select-card.js";

DateSelectCard({
    startDate: '2023-01-23'
})`}),s({title:"Report Issue Card",preview:[Ee()],code:`import AccountCard from "./examples/report-issue-card.js";

ReportIssueCard()`}),s({title:"Project Card",preview:[so()],code:`import AccountCard from "./examples/project-card.js";

ProjectCard()`}),s({title:"Cookie Settings Card",preview:[Fe()],code:`import AccountCard from "./examples/cookie-settings-card.js";

CookieSettingsCard()`})]),fo=(e,t)=>{const o=e?e.getBoundingClientRect():{top:0,bottom:0,left:0},n=t.getBoundingClientRect();let c=o.left+window.scrollX,h=o.bottom+window.scrollY;const F=10;return c+n.width>window.innerWidth&&(c=window.innerWidth-n.width-F),h+n.height>window.innerHeight&&(h=o.top+window.scrollY-n.height-F),{x:c,y:h}};class ue extends N{setData(){const t=this.parent.data;return t.set({position:{x:0,y:0}}),t}getSize(){switch(this.size||"lg"){case"sm":return"w-48";case"md":return"w-64";case"lg":return"w-[250px]";case"xl":return"w-96";case"2xl":return"w-[400px]";case"full":return"w-full"}}render(){const t=this.getSize();return a({class:`absolute mt-2 border rounded-md shadow-lg bg-popover min-h-12 r z-30 ${t}`,style:"top: [[position.y]]px; left: [[position.x]]px"},this.children)}setupStates(){return{open:{id:this.parent.getId(),callBack:n=>{this.state.open===!1&&this.destroy()}}}}updatePosition(){const t=this.button??null,o=this.panel,n=fo(t,o);this.data.position=n}afterSetup(){this.updatePosition()}isOutsideClick(t){return!this.panel.contains(t)&&this.button&&!this.button.contains(t)}setupEvents(){return[["click",document,t=>{this.isOutsideClick(t.target)&&(this.state.open=!1)}]]}setup(t){this.container=app.appShell.panel,this.initialize()}}const ho=({toggleDropdown:e})=>P({cache:"button",class:"relative z-[2] inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 justify-between",click:e,addEvent:["click",document,(t,{state:o,panel:n})=>{wo(t.target,n)&&(o.open=!1)}]},[i({onState:["selectedLabel",t=>t||"Select item..."]}),M({html:r.chevron.upDown})]),go=(e,t)=>_({class:"flex flex-auto items-center cursor-pointer p-2 hover:bg-secondary rounded-sm",click:()=>t(e),onState:["selectedValue",{"bg-secondary":e.value}]},[e.icon&&i({class:"mr-2 flex items-baseline"},[M({class:"flex w-4 h-4",html:e.icon})]),i(e.label)]),bo=e=>a({class:"w-full"},[U({class:"max-h-60 overflow-y-auto p-2 grid gap-1",for:["items",t=>go(t,e)]})]),xo=({onSelect:e})=>a({class:"flex flex-auto flex-col",onState:["open",(t,o,n)=>{if(t)return new ue({cache:"dropdown",parent:n,button:n.button},[bo(e)])}]}),wo=(e,t)=>!t.contains(e),Re=w({setData(){return new G({items:this.items||[]})},state:{open:!1,selectedLabel:"",selectedValue:""},handleSelect(e){const t=this.state;t.selectedValue=e.value,t.selectedLabel=e.label,t.open=!1,typeof this.onSelect=="function"&&this.onSelect(e)},toggleDropdown(){this.state.toggle("open")},render(){const e=t=>{const o=this.state;o.selectedValue=t.value,o.selectedLabel=t.label,o.open=!1};return a({class:"relative w-full flex flex-auto flex-col max-w-[250px]"},[ho({toggleDropdown:this.toggleDropdown.bind(this)}),xo({onSelect:e}),this.required&&q({class:"opacity-0 absolute top-0 left-0 z-[1]",type:"text",name:this.name,required:!0,value:["[[selectedValue]]",this.state]})])}}),vo=[{value:"next.js",label:"Next.js",icon:r.home},{value:"sveltekit",label:"SvelteKit"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}],yo=()=>f({title:"Comboboxes",description:"Comboboxes are used to allow users to select an option from a dropdown list or enter a custom value."},[s({title:"Usage",description:"To use the Combobox component, import it from the components library and use it in your application.",preview:[a({class:"w-full max-w-[300px]"},[new Re({items:vo,onSelect:e=>console.log(e)})])],code:`@components/molecules/combobox/combobox.js';
import { Icons } from "@components/icons/icons.js";

new Combobox({
    items: [
    { value: 'next.js', label: 'Next.js', icon: Icons.home },,
    { value: 'sveltekit', label: 'SvelteKit' },
    { value: 'nuxt.js', label: 'Nuxt.js' },
    { value: 'remix', label: 'Remix' },
    { value: 'astro', label: 'Astro' },
],
})`})]),ko=()=>`checkbox-${Math.random().toString(36).substring(2,9)}`,te=w({state(){return{checked:this.checked??!1}},render(){const e=ko();return a({class:`flex items-center space-x-2 cursor-pointer ${this.class}`},[a({class:"relative flex items-center justify-center w-5 h-5 rounded-md transition-colors duration-200 border hover:border-accent-foreground",onState:["checked",{"bg-primary":!0,"text-primary-foreground":!0}],role:"checkbox",aria:{checked:["checked"]},tabIndex:0,click:()=>{this.state.checked=!this.state.checked,typeof this.checked=="function"&&this.checked(this.state.checked)}},[tt({id:e,class:"absolute opacity-0 w-full h-full cursor-pointer",aria:{checked:["checked"]},bind:this.bind,change:t=>{const o=t.target.checked;this.state.checked=o,typeof this.checked=="function"&&this.checked(o)}}),i({class:"absolute text-xs pointer-events-none",onState:["checked",t=>t?M({class:"w-2 h-2 pointer-events-none",html:r.check}):null]})]),this.label&&Se({class:"text-base cursor-pointer",htmlFor:e,click:()=>{this.state.toggle("checked"),typeof this.checked=="function"&&this.checked(this.state.checked)}},this.label)])}}),To=e=>at([Ce({class:"text-muted-foreground border-b",map:[e.headers,t=>{if(t.label==="checkbox")return pe({class:"cursor-pointer py-3 px-4 text-base"},[new te({class:"mr-2"})]);const o=t.align||"items-center justify-start";return pe({class:"cursor-pointer py-3 px-4 text-base",click:t.sortable&&(()=>e.sort(t.key))},[a({class:`flex flex-auto w-full items-center ${o}`},[i(t.label),t.sortable&&M({class:"ml-2",html:r.arrows.upDown})])])}]})]),So=({key:e,rows:t,selectRow:o,rowItem:n})=>new st({key:e,items:t,rowItem:c=>n(c,o),class:"divide-y divide-border"}),Co=w({setData(){return new G({rows:this.rows||[],selectedRows:[]})},selectRow(e){const t=this.data.selectedRows.includes(e)?this.data.selectedRows.filter(o=>o!==e):[...this.data.selectedRows,e];this.data.selectedRows=t},render(){const e=this.data.rows;return a({class:"w-full"},[a({class:"w-full rounded-md border"},[ot({class:"w-full"},[this.headers&&To({headers:this.headers,sort:t=>this.sortRows(t)}),So({key:this.key,rows:e,selectRow:this.selectRow.bind(this),rowItem:this.rowItem})])])])}}),jo=[{label:"checkbox",key:""},{label:"Status",key:"status"},{label:"Email",key:"email"},{label:"Amount",key:"amount",align:"justify-end"}],Io=[{id:1,status:"Success",email:"ken99@yahoo.com",amount:316,selected:!1},{id:2,status:"Success",email:"abe45@gmail.com",amount:242,selected:!1},{id:3,status:"Processing",email:"monserrat44@gmail.com",amount:837,selected:!1},{id:4,status:"Success",email:"silas22@gmail.com",amount:874,selected:!1},{id:5,status:"Failed",email:"carmella@hotmail.com",amount:721,selected:!1}],Ao=(e,t)=>Ce({class:"items-center px-4 py-2 hover:bg-muted"},[V({class:"p-4 "},[new te({checked:e.selected,class:"mr-2",click:()=>t(e)})]),V({class:"p-4 "},[i({class:"text-muted-foreground"},e.status)]),V({class:"p-4 "},e.email),V({class:"p-4 text-right"},`$${e.amount.toFixed(2)}`)]),Do=()=>f({title:"Data Tables",description:"Data tables are used to display data in a structured format. They can be used to display a list of items, a grid of items, or a table of items."},[s({title:"Usage",description:"The data table component is used to display data in a structured format. It can be used to display a list of items, a grid of items, or a table of items.",preview:[new Co({headers:jo,rows:Io,rowItem:Ao,key:"id"})],code:`import { DataTable } from "@components/organisms/lists/data-table.js";
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
})`})]),Bo=e=>nt.render(e,app.appShell.panel),Lo=({title:e})=>$({class:"flex flex-auto items-center"},[X({class:"text-lg font-semibold"},e)]),Fo=u((e,t)=>je({class:`fixed z-30 w-[98%] md:w-full max-w-lg gap-4 border bg-background text-foreground p-6 pb-12 md:pb-6 shadow-lg duration-200
                rounded-lg flex flex-auto flex-col
                bottom-4 top-auto md:m-auto md:bottom-auto md:top-1/2 md:left-0 md:right-0 md:-translate-y-1/2`,click:e.click,aria:{expanded:["open"]}},[a({class:"flex flex-auto flex-col space-y-2"},[Lo(e),e.description&&d({class:"flex flex-auto flex-col text-sm text-muted-foreground"},e.description),a({class:"flex flex-auto flex-col text-sm text-muted-foreground"},t)]),Ie({class:"flex flex-col-reverse sm:flex-row sm:justify-end mt-6 gap-2 sm:gap-0 sm:space-x-2"},e.buttons)]));class oe extends N{render(){const t=c=>{c.target===this.panel&&this.close()},o=this.getMainClass(),n=this.title||"Dialog Title";return Fo({class:o,title:n,click:t,description:this.description,buttons:this.getButtons()},this.children)}getButtons(){return[l({variant:"outline",click:()=>this.close()},"Close")]}setupStates(){return{open:!1}}getMainClass(){return""}open(){Bo(this),this.panel.showModal(),this.state.open=!0}close(){this.state.open=!1,this.panel.close(),this.destroy()}}class He extends oe{getButtons(){const t=this.confirmTextLabel||"Confirm";return[l({variant:"outline",click:()=>this.close()},"Cancel"),l({variant:"primary",click:()=>this.confirm()},t)]}confirm(){this.confirmed&&this.confirmed(),this.close()}}const Po=u((e,t)=>l({text:"Open",class:"m-1",click:()=>new oe(e,t).open()})),$o=e=>l({text:"Open",class:"m-1",click:()=>new He(e).open()}),Mo=({link:e})=>a({class:"flex items-center gap-4 py-2"},[S({type:"text",value:e,readOnly:!0,class:"border p-2 rounded-md w-full bg-background text-foreground"}),l({variant:"secondary",class:"px-4 py-2",click:()=>{navigator.clipboard.writeText(e),app.notify({title:"Link copied",description:"The link has been copied to your clipboard.",icon:r.clipboard.checked})}},"Copy Link")]),Eo=e=>l({text:"Open",class:"m-1",click:()=>new oe(e,[Mo({link:"https://example.com"})]).open()}),No=()=>f({title:"Dialogs",description:"Displays a dialog or a component that looks like a dialog. Dialogs can be opened and closed. They will be closed if the user clicks outside of the dialog or if the user clicks the close button."},[s({title:"Usage",description:"Import the dialog atom and use it in your components.",preview:[Po({title:"Title",description:"this is the description."},[])],code:`import { Dialog } from '@components/molecules/dialogue.js';

new Dialog({
    title: '',
    description: ''
}, [

]).open()`}),s({title:"Confirmation",description:"Displays a confirmation dialog.",preview:[$o({title:"Are you absoultely sure?",description:"This action cannot be undone. This will permanently delete your account and remove your data from our servers.",confirmTextLabel:"Save",confirmed:()=>console.log("Confirmed!")})],code:`import { Confirmation } from '@components/molecules/dialogs/confirmation.js';

new Confirmation({
    title: 'Are you absoultely sure?',
    description: 'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
    confirmTextLabel: 'Save',
    confirmed: () => console.log('Confirmed!')
}).open()`}),s({title:"Share Link",description:"Displays a dialog with a shareable link.",preview:[Eo({title:"Share Link",description:"Share this link with others."})],code:`import { Confirmation } from '@components/molecules/dialogs/confirmation.js';

new Confirmation({
    title: 'Are you absoultely sure?',
    description: 'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
    confirmTextLabel: 'Save',
    confirmed: () => console.log('Confirmed!')
}).open()`})]),Oo=e=>i({class:"ml-auto text-xs tracking-widest opacity-60"},e),Ro=e=>i({class:"flex w-4 h-4",html:e}),Ho=e=>i({class:"flex-auto"},e),zo=(e,t)=>_({class:"relative flex cursor-pointer hover:bg-accent hover:text-accent-foreground select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",click:()=>t(e)},[e.icon&&Ro(e.icon),Ho(e.label),e.shortcut&&Oo(e.shortcut)]),qo=(e,t)=>U({class:"grid gap-2"},[e.map(o=>zo(o,t))]),Wo=e=>a({class:"w-full z-10"},[a({class:"max-h-60 overflow-y-auto p-1 grid gap-2 divide-y divide-border",for:["groups",t=>qo(t,e)]})]),Uo=({label:e,icon:t,toggleDropdown:o})=>P({cache:"button",class:`inline-flex items-center justify-between rounded-md border border-input
            bg-background px-2 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground
            focus:outline-none transition duration-150 ease-in-out`,click:o},[e&&i(e),t&&M({html:t})]),_o=({onSelect:e})=>a({onState:["open",(t,o,n)=>{if(t)return new ue({cache:"dropdown",parent:n,button:n.button},[Wo(e)])}]});class Go extends N{setData(){return new G({groups:this.groups||[]})}setupStates(){return{open:!1,selectedItem:null}}toggleDropdown(){this.state.toggle("open")}handleSelect(t){this.state.selectedItem=t,this.state.open=!1,typeof this.onSelect=="function"&&this.onSelect(t)}render(){return a({class:"relative"},[Uo({label:this.label,icon:this.icon,toggleDropdown:this.toggleDropdown.bind(this)}),_o({onSelect:this.handleSelect.bind(this)})])}}const Vo=()=>f({title:"Dropdown Menus",description:"Dropdown menus are used to display a list of options when a user clicks on a button or input field."},[s({title:"Usage",description:"To use the DropdownMenu component, import it from the components library and use it in your application.",preview:[new Go({icon:r.ellipsis.vertical,groups:[[{icon:r.user.default,label:"Profile",shortcut:"⌘P",value:"profile"},{icon:r.creditCard,label:"Billing",shortcut:"⌘B",value:"billing"},{icon:r.cog.six,label:"Settings",shortcut:"⌘S",value:"settings"},{icon:r.computerDesktop,label:"Keyboard shortcuts",shortcut:"⌘K",value:"shortcuts"}],[{icon:r.user.multiple,label:"Team",value:"team"},{icon:r.user.plus,label:"Invite users",value:"invite"},{icon:r.plus,label:"New Team",shortcut:"⌘T",value:"new_team"}],[{icon:r.github,label:"GitHub",value:"github"},{icon:r.helpCircle,label:"Support",value:"support"},{icon:r.api,label:"API",value:"api"}]],onSelect:e=>{console.log("Selected item:",e)}})],code:`import { Icons } from "@components/icons/icons.js";
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
})`})]),ze=w({state(){return{value:this.value??0,min:this.min??0,max:this.max??100,filledPercentage:this.getFillPercentage(this.value)}},getFillPercentage(e){return(e-this.min)/(this.max-this.min)*100},render(){return a({class:"relative w-full h-4 flex items-center"},[a({class:"absolute h-2 w-full rounded-full bg-muted"}),a({class:"absolute h-2 bg-primary rounded-full",style:"width: [[filledPercentage]]%"}),a({class:"absolute block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transform -translate-x-1/2",style:"left: [[filledPercentage]]%"}),q({type:"range",min:"[[min]]",max:"[[max]]",value:"[[value]]",class:"absolute w-full h-full opacity-0 cursor-pointer",bind:this.bind,input:e=>{const t=Number(e.target.value);this.state.value=t,this.state.filledPercentage=this.getFillPercentage(t),typeof this.change=="function"&&this.change(t)}})])}}),Q=u((e,t)=>a({...e,class:"flex flex-auto items-center justify-center w-full py-4 space-y-8 max-w-[350px]"},t)),Qo=[{value:"next.js",label:"Next.js"},{value:"sveltekit",label:"SvelteKit"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}],Yo=()=>L({submit:e=>{console.log("Profile Form submitted")}},[new p({name:"username",label:"Username",description:"This is your public display name."},[S({placeholder:"e.g. username",required:!0})]),new p({name:"email",label:"Email Address",description:"We'll use this to contact you."},[ie({placeholder:"e.g. email@address.com",required:!0})]),l({type:"submit"},"Submit")]),Jo=()=>L({submit:e=>{console.log("Preferences Form submitted")}},[new p({name:"framework",label:"Favorite Framework",description:"Select your preferred framework."},[C({options:Qo,required:!0})]),new p({name:"newsletter",label:"Subscribe to Newsletter",description:"Stay updated with our latest news."},[new te({label:"Yes, sign me up!"})]),l({type:"submit"},"Save Preferences")]),Ko=()=>L({submit:e=>{console.log("Contact Form submitted")}},[new p({name:"phone",label:"Phone Number",description:"We may contact you at this number."},[le({placeholder:"e.g. +1234567890",required:!0})]),new p({name:"message",label:"Your Message",description:"Let us know how we can help you."},[W({placeholder:"Type your message here...",required:!0})]),new p({name:"message",label:"Select Framework",description:"Select your preferred framework."},[new Re({required:!0,items:[{value:"next.js",label:"Next.js"},{value:"sveltekit",label:"SvelteKit"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}]})]),l({type:"submit"},"Send Message")]),Zo=()=>L({submit:e=>{console.log("Settings Form submitted")}},[new p({name:"notifications",label:"Enable Notifications",description:"Toggle to enable or disable notifications."},[new ee({active:!0})]),new p({name:"volume",label:"Volume Level",description:"Set your preferred volume level."},[new ze({min:0,max:100,value:50})]),l({type:"submit"},"Save Settings")]),Xo=()=>f({title:"Forms",description:"Forms are used to collect user data and submit it to the server."},[s({title:"Profile Form",description:"A simple profile form with username and email fields.",preview:[Q([Yo()])],code:`import { Button, Input, EmailInput } from "@components/atoms/form/input.js";
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
])`}),s({title:"Preferences Form",description:"A preferences form with a select input and a checkbox.",preview:[Q([Jo()])],code:`import { Button, Checkbox, Select } from "@components/atoms/form/input.js";
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
])`}),s({title:"Contact Form",description:"A contact form with a phone input and a textarea for messages.",preview:[Q([Ko()])],code:`import { Button, TelInput, Textarea } from "@components/atoms/form/input.js";
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
])`}),s({title:"Settings Form",description:"A settings form with a toggle and a range slider.",preview:[Q([Zo()])],code:`import { Button, Toggle, RangeSlider } from "@components/atoms/form/input.js";
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
])`})]),ea=u(({index:e,click:t,state:o},n)=>_({class:"p-2 cursor-pointer hover:bg-accent hover:text-accent-foreground",onState:[[o,"selectedIndex",{"bg-accent":e,"text-white":e}]],pointerdown:()=>t(e)},n)),ta=u(({selectOption:e,state:t})=>U({class:"list-none m-0 p-0",for:["filteredOptions",(o,n)=>ea({index:n,click:e,state:t},o.label)]})),oa=100,aa=u(e=>S({cache:"input",placeholder:e.placeholder??"Search...",bind:[e.state,"searchQuery"],keyup:()=>{typeof e.filterOptions=="function"&&e.filterOptions()},focus:(t,o)=>o.toggleDropdown(),blur:(t,{state:o})=>setTimeout(()=>o.open=!1,oa),keydown:t=>typeof e.handleKeyDown=="function"&&e.handleKeyDown(t)})),sa=e=>a({class:"relative flex fle-auto flex-col",onState:["open",(t,o,n)=>{if(t)return new ue({cache:"dropdown",parent:n,button:n.input,size:"xl"},[ta(e)])}]}),na=w({setData(){const e=this.options||[];return new G({options:e,filteredOptions:e})},state(){return{searchQuery:"",selectedIndex:-1,open:!1}},setSelectedIndexByQuery(){const e=this.data.filteredOptions;let{searchQuery:t}=this.state;t=t.toLowerCase();const o=e.findIndex(n=>n.label.toLowerCase()===t);o>=0&&(this.state.selectedIndex=o)},filterOptions(){const e=this.state.searchQuery.toLowerCase();if(e===""||e.length===0){this.data.filteredOptions=this.data.options;return}const t=this.data.get("options");this.data.filteredOptions=t.filter(o=>o.label.toLowerCase().includes(e))},selectOption(e){this.state.selectedIndex=e;const t=this.data.get(`filteredOptions[${e}]`);this.state.searchQuery=t.label,this.state.open=!1,typeof this.onSelect=="function"&&this.onSelect(t)},toggleDropdown(){this.state.toggle("open"),this.state.open&&this.setSelectedIndexByQuery()},handleKeyDown(e){const t=this.data.filteredOptions,{selectedIndex:o}=this.state;e.key==="ArrowDown"?(e.preventDefault(),this.state.selectedIndex=Math.min(o+1,t.length-1)):e.key==="ArrowUp"?(e.preventDefault(),this.state.selectedIndex=Math.max(o-1,0)):e.key==="Enter"&&o>=0&&(e.preventDefault(),this.selectOption(o))},render(){return a({class:"relative w-full max-w-md"},[aa({state:this.state,placeholder:this.placeholder,filterOptions:this.filterOptions.bind(this),handleKeyDown:this.handleKeyDown.bind(this)}),sa({state:this.state,setSelected:this.setSelectedIndexByQuery.bind(this),selectOption:this.selectOption.bind(this)})])}}),ra=[{value:"next.js",label:"Next.js"},{value:"sveltekit",label:"SvelteKit"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}],j=u((e,t)=>a({...e,class:"flex flex-auto items-center justify-center w-full max-w-[350px]"},t)),be=({label:e,description:t,active:o,onChange:n})=>a({class:"flex items-center justify-between p-4 border rounded-md bg-muted/10 border-muted-foreground/20 mb-4"},[a({class:"flex flex-col pr-8"},[v({class:"font-semibold"},e),d({class:"text-sm text-muted-foreground"},t)]),new ee({active:o,change:n})]),ia=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Cherry",value:"cherry"},{label:"Date",value:"date"},{label:"Elderberry",value:"elderberry"},{label:"Fig",value:"fig"},{label:"Grape",value:"grape"},{label:"Honeydew",value:"honeydew"}],la=()=>f({title:"Inputs",description:"Inputs are essential for gathering user data in forms."},[s({title:"Usage",description:"Import the input atom and use it in your components. The input can be of various types: text, password, email, etc.",preview:[a({class:"grid gap-2 w-full max-w-[350px]"},[S({type:"text",placeholder:"Enter your text here...",change:e=>console.log(e.target.value)}),ie({}),le({}),W({placeholder:"Enter your text here..."})])],code:`import { Input, EmailInput, TelInput, Textarea } from '@components/atoms/form/input.js';

Input({
    type: 'text',
    placeholder: 'Enter your text here...',
    change: (e) => console.log(e.target.value)
}),
EmailInput({}),
TelInput({}),
Textarea({
    placeholder: 'Enter your text here...'
})`}),s({title:"Search Dropdown",description:"This is a search dropdown.",preview:[a({class:"relative w-full max-w-md"},[new na({options:ia,onSelect:e=>console.log(e)})])],code:`import { SearchDropdown } from "@components/organisms/search/search-dropdown.js";

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
`}),s({title:"File Input",description:"This is a file input.",preview:[j([rt({multiple:!0,change:e=>console.log(e.target.files)})])],code:`import { EmailInput, FileInput, Input, TelInput, Textarea } from "@components/atoms/form/input.js";

FileInput({
    multiple: true,
    change: (e) => console.log(e.target.files)
})`}),s({title:"Radio Input",description:"This is a radio input.",preview:[a({class:"grid gap-2"},[ae({name:"theme",label:"System",value:"system"}),ae({name:"theme",label:"Light",value:"light"}),ae({name:"theme",label:"Dark",value:"dark"})])],code:`import { Radio } from "@components/atoms/form/input.js";
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
])`}),s({title:"Text Input",description:"This is a text input.",preview:[j([S({type:"text",placeholder:"Enter your text here..."})])],code:`
import { EmailInput, FileInput, Input, TelInput, Textarea } from "@components/atoms/form/input.js";

Input({
    type: 'text',
    placeholder: 'Enter your text here...'
})`}),s({title:"Tel Input",description:"This is a phone input.",preview:[j([le({})])],code:`
import { EmailInput, FileInput, Input, TelInput, Textarea } from "@components/atoms/form/input.js";

TelInput({
})`}),s({title:"Email Input",description:"This is a email input.",preview:[j([ie({})])],code:`
import { EmailInput, FileInput, Input, TelInput, Textarea } from "@components/atoms/form/input.js";

EmailInput({

})`}),s({title:"Checkbox",description:"This is a checkbox input.",preview:[new te({label:"Check me",check:e=>console.log(e)})],code:`
import { Checkbox } from '@components/atoms/form/checkbox.js';

new Checkbox({
    label: 'Check me',
    check: (checked) => console.log(checked)
})`}),s({title:"Select",description:"This is a select input.",preview:[j([C({options:ra,change:e=>console.log(e.target.value)})])],code:`import { Select } from "@components/atoms/form/select.js";

Select({
    options: [
        { value: 'next.js', label: 'Next.js' },
        { value: 'sveltekit', label: 'SvelteKit' },
        { value: 'nuxt.js', label: 'Nuxt.js' },
        { value: 'remix', label: 'Remix' },
        { value: 'astro', label: 'Astro' },
    ],
    change: (e) => console.log(e.target.value)
})`}),s({title:"Textarea",description:"This is a textarea input.",preview:[j([W({placeholder:"Enter your text here..."})])],code:`
import { EmailInput, FileInput, Input, TelInput, Textarea } from "@components/atoms/form/input.js";

Textarea({
    placeholder: 'Enter your text here...'
})`}),s({title:"Date Picker",description:"This is a date picker input.",preview:[j([new Pe({selectedDate:"2022-01-01"})])],code:`
import DatePicker from "@components/molecules/date-time/date-picker.js";

new DatePicker()`}),s({title:"Range Slider",description:"This is a range slider input.",preview:[j([new ze({min:0,max:100,value:50,change:e=>console.log(e)})])],code:`
import { RangeSlider } from '@components/atoms/form/range-slider.js';

new RangeSlider({
    min: 0,
    max: 100,
    value: 50,
    change: (value) => console.log(value)
})`}),s({title:"Toggle Switch",description:"This is a toggle switch input.",preview:[j([new ee({active:!0,change:e=>console.log(e)})])],code:`
import { RangeSlider } from '@components/atoms/form/range-slider.js';

new RangeSlider({
    min: 0,
    max: 100,
    value: 50,
    change: (value) => console.log(value)
})`}),s({title:"Toggle Switch",description:"Toggle switches to control various settings.",preview:[a({class:"p-4"},[v({class:"text-lg font-bold mb-4"},"Email Notifications"),be({label:"Marketing emails",description:"Receive emails about new products, features, and more.",active:!1,onChange:e=>console.log("Marketing emails:",e)}),be({label:"Security emails",description:"Receive emails about your account security.",active:!1,onChange:e=>console.log("Security emails:",e)}),l({text:"Submit",class:"mt-4"})])],code:`
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
]);`})]),ca=u(({name:e,email:t})=>a({class:"min-w-0 flex-auto"},[d({class:"text-base font-semibold leading-6 m-0"},e),d({class:"truncate text-sm leading-5 text-muted-foreground m-0"},t)])),da=()=>a({class:"flex items-center gap-x-1.5"},[a({class:"flex-none rounded-full bg-emerald-500/20 p-1"},[a({class:"h-1.5 w-1.5 rounded-full bg-emerald-500"})]),d({class:"text-xs leading-5 text-gray-500"},"Online")]),ua=e=>d({class:"text-xs leading-5 text-muted-foreground"},[i("Last seen "),lt({datetime:e},"3h ago")]),ma=(e,t)=>e==="online"?da():ua(t),pa=u(({role:e,lastSeen:t,status:o})=>a({class:"hidden shrink-0 sm:flex sm:flex-col sm:items-end"},[d({class:"text-sm leading-6 m-0"},e),ma(o,t)])),fa=e=>e.split(" ").map(o=>o[0]).join(""),ha=u(e=>_({class:"fadeIn flex justify-between gap-x-6 py-4 px-4 rounded-md hover:bg-accent"},[a({class:"flex min-w-0 gap-x-4"},[x({src:e.image,alt:e.name,fallbackText:fa(e.name)}),ca({name:e.name,email:e.email})]),pa({role:e.role,lastSeen:e.lastSeen,status:e.status})])),ga=u(e=>new it({cache:"list",key:"name",items:e.users,role:"list",class:"divide-y divide-border",rowItem:ha})),ba=[{name:"Leslie Alexander",email:"leslie.alexander@example.com",image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"Co-Founder / CEO",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Michael Foster",email:"michael.foster@example.com",image:"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"Co-Founder / CTO",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Dries Vincent",email:"dries.vincent@example.com",image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"Business Relations",status:"online"}],xa=()=>f({title:"Lists",description:"Lists are used to display a collection of items in a structured format. Each item can be customized to show different information."},[s({title:"Usage",description:"To use the List component, import it from the components library and use it in your application.",preview:[ga({users:ba})],code:`import { UserListItem } from "@components/organisms/lists/user-list.js";
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
});`}),v({class:"text-lg font-bold"},"Description"),d({class:"text-muted-foreground"},"The List component can be used to display a list of items in a structured format. Each item can be customized to show different information. The List component supports appending, prepending, mingling, and deleting or items. "),v({class:"text-lg font-bold"},"Performance"),d({class:"text-muted-foreground"},"The list will only update or re-render the items that have changed, improving performance. It uses a key to know when to update an item.")]),wa=({title:e,description:t,icon:o})=>$({class:"modal-header flex items-center pt-4 px-6"},[l({variant:"icon",icon:r.arrows.left,class:"mr-2 p-0 flex sm:hidden",click:(n,c)=>c.close()}),o&&a({class:"mx-2 w-12 h-12 rounded-full bg-muted flex items-center justify-center"},[T(o)]),a({class:"flex flex-auto flex-col ml-2"},[X({class:"text-lg font-semibold m-0"},e),t&&a({class:"text-sm text-muted-foreground"},t)])]),va=u((e,t)=>je({class:`modal m-auto fixed z-20 grid w-full h-full gap-4 lg:border bg-background text-foreground shadow-xl break-words overflow-hidden p-0 ${e.class}`,click:e.click},[L({class:"modal-content flex flex-auto flex-col",submit:o=>e.onSubmit&&e.onSubmit()},[wa(e),a({class:"modal-body flex flex-auto flex-col overflow-y-auto py-0 px-6"},t),Ie({class:"modal-footer flex justify-between pb-4 px-6"},e.buttons)])]));class qe extends oe{render(){const t=h=>{h.target===this.panel&&this.close()},o=this.getMainClass(),n=this.title||"",c=this.description||null;return va({class:o,click:t,title:n,description:c,buttons:this.getButtons(),onSubmit:this.submit,icon:this.icon,aria:{expanded:["open"]}},this.children)}getButtons(){return[l({variant:"outline",click:()=>this.close()},"Cancel"),l({variant:"primary",type:"submit"},"Save")]}getSizeClass(){switch(this.size){case"sm":return"sm max-w-[646px]";case"lg":return"lg max-w-[900px]";case"xl":return"xl max-w-[1400px]";default:return"md max-w-[760px]"}}getTypeClass(){switch(this.type){case"right":return"right right-0";case"left":return"left left-0";default:return""}}getMainClass(){return this.getSizeClass()+" "+this.getTypeClass()}}const H=[{label:"Large",buttonStyle:"primary",size:"lg"},{label:"Small",buttonStyle:"secondary",size:"sm"},{label:"Medium",buttonStyle:"destructive",size:"md"},{label:"XL",buttonStyle:"primary",size:"xl"},{label:"Right",buttonStyle:"ghost",type:"right"},{label:"Left",buttonStyle:"link",type:"left"}],z=({label:e,buttonStyle:t,size:o,type:n})=>l({text:e,class:`m-1 ${t}`,click:()=>new qe({title:"Are you absolutely sure?",size:o,type:n},[a({class:"flex flex-auto flex-col items-center justify-center p-4"},[l({click:()=>{new He({title:"Are you absoultely sure?",description:"This action cannot be undone. This will permanently delete your account and remove your data from our servers.",confirmTextLabel:"Save",confirmed:()=>{app.notify({icon:r.trash,title:"Account deleted",description:"Your account has been successfully deleted.",type:"destructive"})}}).open()}},"Confirm")])]).open()}),ya=({size:e="md",type:t="center"})=>new qe({title:"Report an Issue",icon:r.warning,description:"What area are you having problems with?",size:e,type:t,onSubmit:()=>console.log("Form submitted")},[a({class:"flex flex-col max-w-lg lg:p-4 space-y-8"},[a({class:"flex flex-auto w-full gap-4"},[new p({name:"area",label:"Area"},[C({required:!0,class:"border p-2 rounded-md w-full bg-background text-foreground",options:[{value:"billing",label:"Billing"},{value:"technical",label:"Technical"},{value:"account",label:"Account"},{value:"other",label:"Other"}],defaultValue:"billing",change:o=>console.log(`Area selected: ${o.target.value}`)})]),new p({name:"security_level",label:"Security Level"},[C({required:!0,class:"border p-2 rounded-md w-full bg-background text-foreground",options:[{value:"severity_1",label:"Severity 1"},{value:"severity_2",label:"Severity 2"},{value:"severity_3",label:"Severity 3"}],defaultValue:"severity_2",change:o=>console.log(`Security Level selected: ${o.target.value}`)})])]),new p({name:"subject",label:"Subject"},[S({type:"text",placeholder:"I need help with...",required:!0,class:"border p-2 rounded-md w-full bg-background text-foreground placeholder-muted-foreground"})]),new p({name:"description",label:"Description"},[W({placeholder:"Please include all information relevant to your issue.",required:!0,class:"border p-2 rounded-md w-full bg-background text-foreground placeholder-muted-foreground"})])])]),xe=({label:e,buttonStyle:t,size:o,type:n})=>l({text:e,class:`m-1 ${t}`,click:()=>ya({size:o,type:n}).open()}),ka=()=>f({title:"Modals",description:"Displays a modal or a component that looks like a modal."},[s({title:"Extra Large Modal",description:"This is an extra large modal.",preview:[z(H[3])],code:`
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
});`}),s({title:"Large Modal",description:"This is a large modal.",preview:[z(H[0])],code:`
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
});`}),s({title:"Small Modal",preview:[z(H[1])],code:`
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
});`}),s({title:"Medium Modal",preview:[z(H[2])],code:`
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
});`}),s({title:"Right Modal",preview:[z(H[4])],code:`
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
});`}),s({title:"Form Modal",preview:[xe({label:"Form Modal",buttonStyle:"primary"})],code:`
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
);`}),s({title:"Right Form Modal",preview:[xe({label:"Form Modal",buttonStyle:"primary",size:"md",type:"right"})],code:`
import { Modal } from "@components/molecules/modal.js";
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
);`})]),B="music",Ta=()=>f({title:"Navigations",description:"Navigations are components that help users move around the website or application."},[s({title:"Inline Navigation",description:"The inline navigation component is a simple navigation component that can be used in a sidebar or app shell.",preview:[a({class:"flex flex-auto flex-col w-full border rounded-md max-w-[300px]"},[new ct({options:[{label:"Home",href:"/",icon:r.home},{label:"About",href:"/about"},{label:"Contact",href:"/contact"},{label:"Services",options:[{label:"Web Development",href:"/web-development"}]},{group:"Frameworks",options:[{label:"Next.js",href:"/next"},{label:"SvelteKit",href:"/sveltekit"},{label:"Nuxt.js",href:"/nuxt"},{label:"Remix",href:"/remix"},{label:"Astro",href:"/astro"}]}]})])],code:`import { Button } from '@components/organisms/navigation/inline-navigation.js';
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
})`}),s({title:"Sidebar Menu",description:"The sidebar menu component is a navigation component that can be used in a sidebar or app shell.",preview:[a({class:"flex flex-auto flex-col w-full border rounded-md max-w-[300px]"},[ft({title:"Discover",options:[{label:"Listen Now",href:`${B}`,icon:r.playing,exact:!0},{label:"Browse",href:`${B}/browse`,icon:r.square.grid},{label:"Radio",href:`${B}/radio`,icon:r.signal},{group:"Library",options:[{label:"Playlists",href:`${B}/playlists`,icon:r.list.down},{label:"Songs",href:`${B}/songs`,icon:r.music},{label:"Made for You",href:`${B}/made-for-you`,icon:r.user.default},{label:"Artists",href:`${B}/artists`,icon:r.speaker.default},{label:"Albums",href:`${B}/albums`,icon:r.square.stack}]}]})])],code:`import { Icons } from "@components/icons/icons.js";
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
`})]),Sa=()=>f({title:"Notifications",description:"Displays a notification message to the user."},[s({title:"Default Notification",description:"This is a standard notification without any specific type.",preview:[new R({title:"Default Notification",description:"This is a default notification.",icon:r.information,duration:"infinite"})],code:`app.notify({
    title: 'Default Notification',
    description: 'This is a default notification.',
    icon: Icons.info,
    duration: 'infinite'
})`}),s({title:"Info Notification",description:"An informational notification to inform users about general information.",preview:[new R({title:"Heads up!",description:"You can add components to your app using the CLI.",icon:r.information,type:"info",duration:"infinite"})],code:`app.notify({
    title: 'Heads up!',
    description: 'You can add components to your app using the CLI.',
    icon: Icons.information,
    type: 'info',
    duration: 'infinite'
})`}),s({title:"Warning Notification",description:"A warning notification to caution the user about potential issues.",preview:[new R({title:"Warning!",description:"Please check your input before proceeding.",icon:r.warning,type:"warning",duration:"infinite"})],code:`app.notify({
    title: 'Warning!',
    description: 'Please check your input before proceeding.',
    icon: Icons.warning,
    type: 'warning',
    duration: 5000
})`}),s({title:"Destructive Notification",description:"A destructive notification to alert the user of a serious issue or error.",preview:[new R({title:"Error!",description:"Something went wrong. Please try again later.",icon:r.shield,type:"destructive",duration:"infinite"})],code:`app.notify({
    title: 'Error!',
    description: 'Something went wrong. Please try again later.',
    icon: Icons.error,
    type: 'destructive',
    duration: 'infinite'
})`}),s({title:"Notification with Actions",description:"This notification includes primary and secondary buttons for user actions.",preview:[new R({title:"Action Required",description:"Would you like to proceed with this action?",icon:r.information,type:"info",primary:"Proceed",primaryAction:()=>console.log(1),secondary:"Cancel",secondaryAction:()=>console.log(1),duration:"infinite"})],code:`app.notify({
    title: 'Action Required',
    description: 'Would you like to proceed with this action?',
    icon: Icons.question,
    type: 'info',
    primary: 'Proceed',
    primaryAction: () => alert('Primary action clicked!'),
    secondary: 'Cancel',
    secondaryAction: () => alert('Secondary action clicked!'),
    duration: 'infinite' // Notification will remain until user dismisses
})`}),d({class:"text-muted-foreground"},"Notifications will stack if multiple are triggered at the same time. The notification will remain visible until the specified duration has passed. If a notification duration is set to 'infinite', it must be manually dismissed by the user."),s({title:"Usage",description:"Call 'notify' on the global notification container to display notifications.",preview:[l({click:()=>{app.notify({title:"Notification Title",description:"This is a notification.",icon:r.information})}},"Show Notification")],code:`app.notify({
    title: 'Notification Title',
    description: 'This is a notification.',
    icon: Icons.warning,
    type: 'warning',
    duration: 5000 // in milliseconds, leave blank for the default 4 seconds, or use 'infinite' to keep it until dismissed
})`})]),Ca=()=>a({class:"absolute h-full rounded-full bg-primary transition-all duration-300",style:"width: [[progress]]%;"}),ja=w({render(){return a({class:"relative w-full h-4 rounded-full bg-muted"},[Ca()])},state(){return{progress:this.progress??0}},set(e){e<0&&(e=0),e>100&&(e=100),this.state.progress=e}}),Ia=()=>f({title:"Progress Bars",description:"Progress bars are a great way to show the progress of a task or process."},[s({title:"Usage",description:"Import the progress bar atom and use it in your components. The progress bar can be used to show the progress of a task or process.",preview:[new ja({cache:"progress",progress:20})],code:`import { ProgressBar } from "@components/atoms/progress-bar.js";

new ProgressBar({ cache: 'progress', progress: 20 })`})]),Aa=w({state:{loaded:!1},render(){return a({class:"flex flex-auto flex-col max-w-[350px]"},[a({class:"my-8"},[l({variant:"outline",click:()=>this.state.toggle("loaded")},"Toggle Loaded")]),a({class:"flex items-center bg-card rounded-md border shadow-md w-full max-w-md"},[a({class:"flex flex-auto gap-4 p-4",onState:["loaded",e=>e?[x({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN",size:"md"}),a({class:"flex flex-auto flex-col"},[i({class:"text-lg font-semibold text-foreground"},"Leslie Alexander"),d({class:"text-sm text-muted-foreground m-0"},"leslie.alexander@example.com")])]:[I({shape:"circle",width:"w-12",height:"h-12"}),a({class:"flex flex-auto flex-col gap-2"},[I({width:"w-3/4",height:"h-6"}),I({width:"w-1/2",height:"h-4"})])]]})])])}}),Da=()=>f({title:"Skeletons",description:"Skeletons are components that are used to show a placeholder for content that is loading."},[s({title:"Usage",description:"The skeleton component is used to show a placeholder for content that is loading.",preview:[a({class:"flex flex-auto space-x-4 w-full max-w-64"},[I({shape:"circle",width:"w-10",height:"h-10"}),a({class:"flex flex-auto flex-col space-y-2"},[I({width:"w-3/4",height:"h-4"}),I({width:"w-1/2",height:"h-4"})])])],code:`import { Skeleton } from "@components/atoms/skeleton.js";
import { Div } from '@base-framework/atoms';

Div({ class: 'flex flex-auto space-x-4 w-full max-w-64' }, [
    Skeleton({ shape: 'circle', width: 'w-10', height: 'h-10' }), // Circle skeleton for avatar
    Div({ class: 'flex flex-auto flex-col space-y-2' }, [
        Skeleton({ width: 'w-3/4', height: 'h-4' }), // Long rectangle for main text
        Skeleton({ width: 'w-1/2', height: 'h-4' })  // Shorter rectangle for subtext
    ])
])`}),s({title:"Skeleton Post",description:"This is a skeleton post.",preview:[a({class:"space-y-4 flex flex-auto flex-col w-full max-w-64"},[I({width:"w-full",height:"h-32",shape:"rectangle"}),a({class:"space-y-2"},[I({width:"w-3/4",height:"h-4"}),I({width:"w-1/2",height:"h-4"})])])],code:`import { Skeleton } from "@components/atoms/skeleton.js";
import { Div } from '@base-framework/atoms';

Div({ class: 'space-y-4 flex flex-auto flex-col space-x-4 w-full max-w-64' }, [
    // Large rectangle for image or main content
    Skeleton({ width: 'w-full', height: 'h-32', shape: 'rectangle' }),

    // Text line placeholders
    Div({ class: 'space-y-2' }, [
        Skeleton({ width: 'w-3/4', height: 'h-4' }), // Longer text line
        Skeleton({ width: 'w-1/2', height: 'h-4' })  // Shorter text line
    ])
])`}),s({title:"Skeleton with Avatar Loading",description:"This example demonstrates a skeleton loading animation that transitions to an avatar and user info after 3 seconds.",preview:[new Aa],code:`import { Skeleton } from "@components/atoms/skeleton.js";
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

LoadingAvatar();`})]),Ba=(e,t)=>t.indexOf(e)!==-1,La=(e,t)=>{const o=e.getLinkPath()??"";return Ba(o,t)};class We extends N{onCreated(){this.links=[]}render(){return de({class:`tab items-center justify-center rounded-md bg-muted p-1 text-muted-foreground ${this.class}`},[U({class:"flex flex-auto flex-row",map:[this.options,t=>this.addLink(t)],watch:{value:["[[path]]",fe.data],callBack:this.updateLinks.bind(this)}})])}afterSetup(){const t=fe.data.path;this.updateLinks(t)}updateLinks(t){let o=!1,n=this.links[0];for(const c of this.links)if(c.rendered!==!1&&(o=La(c,t),o===!0))break;o!==!0&&n&&this.updateLink(n,!0)}updateLink(t,o){t.update(o)}addLink({label:t,href:o}){const n=new dt({text:t,href:o,dataSet:["selected",["state",!0,"active"]],class:"inline-flex flex-auto items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm"});return this.links.push(n),n}}class Fa extends N{render(){return a({class:"tab-panel"},[new We({class:this.class,options:this.options}),k({class:"tab-content",switch:this.addGroup()})])}addGroup(){let t;const o=[],n=this.options;for(let c=0,h=n.length;c<h;c++)t=n[c],o.push({uri:t.uri||t.href,component:t.component,title:t.title||null,persist:!0});return o}}const we=u((e,t)=>a({class:"py-4"},t)),Pa=()=>f({title:"Tabs",description:"Displays a tab or a component that looks like a tab."},[s({title:"Button Tab",description:"This is a button tab. The buttons to not route.",preview:[new Ae({class:"mt-4 max-w-[400px]",options:[{label:"Preview",value:"preview",layout:we([])},{label:"Code",value:"code",layout:we([])}]})],code:`
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
);`}),s({title:"Link Tab",description:"This is a link tab. The buttons route to a different page.",preview:[new Fa({class:"max-w-[400px]",options:[{label:"Example 1",href:"docs/components/tabs/example-1",component:new J({class:"p-8"},"This is an example 1 tab panel.")},{label:"Example 2",href:"docs/components/tabs/example-2",component:new J({class:"p-8"},"This is an example 2 tab panel.")},{label:"Example 3",href:"docs/components/tabs/example-3",component:new J({class:"p-8"},"This is an example 3 tab panel.")}]})],code:`
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
);`}),s({title:"Tab Group",description:"This is a tab group. The buttons update the state.",preview:[new ht({options:[{label:"Music",value:"music"},{label:"Podcasts",value:"podcasts"},{label:"Live",value:"live"}],onSelect:e=>console.log(e)})],code:`import { TabGroup } from "@components/organisms/tabs/tab-group.js";

new TabGroup({
    options: [
        { label: 'Music', value: 'music' },
        { label: 'Podcasts', value: 'podcasts' },
        { label: 'Live', value: 'live' }
    ],
    onSelect: (value) => console.log(value)
})`}),s({title:"Tab Navigation",description:"This is a tab navigation. The buttons update the state.",preview:[new We({options:[{label:"Example 1",href:"docs/components/tabs/example-1"},{label:"Example 2",href:"docs/components/tabs/example-2"},{label:"Example 3",href:"docs/components/tabs/example-3"}]})],code:`import { TabGroup } from "@components/organisms/tabs/tab-navigation.js";

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
})`})]),$a=()=>f({title:"Tooltips",description:"Tooltips are small popups that appear when a user hovers over an element."},[s({title:"Usage",description:"Import the tooltip atom and use it in your components.",preview:[a({class:"flex gap-2 flex-wrap"},[D({content:"This is a tooltip."},[l("Hover me")])])],code:`import { Button } from "@components/atoms/buttons/buttons.js";
import { Tooltip } from "@components/atoms/tooltip.js";

Tooltip({ content: 'This is a tooltip.' }, [
    Button('Hover me')
])`}),s({title:"Bottom Tooltip",description:"This will show the tooltip at the bottom of the target element.",preview:[a({class:"flex gap-2 flex-wrap"},[D({content:"This is a tooltip.",position:"bottom"},[l("Hover me")])])],code:`Tooltip({ content: 'This is a tooltip.', position: 'bottom' }, [
    Button('Hover me')
])`}),s({title:"Top-Right Tooltip",description:"This will show the tooltip at the top-right of the target element.",preview:[a({class:"flex gap-2 flex-wrap"},[D({content:"This is a tooltip.",position:"top-right"},[l("Hover me")])])],code:`Tooltip({ content: 'This is a tooltip.', position: 'top-right' }, [
    Button('Hover me')
])`}),s({title:"Top-Left Tooltip",description:"This will show the tooltip at the top-left of the target element.",preview:[a({class:"flex gap-2 flex-wrap"},[D({content:"This is a tooltip.",position:"top-left"},[l("Hover me")])])],code:`Tooltip({ content: 'This is a tooltip.', position: 'top-left' }, [
    Button('Hover me')
])`}),s({title:"Bottom-Right Tooltip",description:"This will show the tooltip at the bottom-right of the target element.",preview:[a({class:"flex gap-2 flex-wrap"},[D({content:"This is a tooltip.",position:"bottom-right"},[l("Hover me")])])],code:`Tooltip({ content: 'This is a tooltip.', position: 'bottom-right' }, [
    Button('Hover me')
])`}),s({title:"Bottom-Left Tooltip",description:"This will show the tooltip at the bottom-left of the target element.",preview:[a({class:"flex gap-2 flex-wrap"},[D({content:"This is a tooltip.",position:"bottom-left"},[l("Hover me")])])],code:`Tooltip({ content: 'This is a tooltip.', position: 'bottom-left' }, [
    Button('Hover me')
])`}),s({title:"Left Tooltip",description:"This will show the tooltip to the left of the target element.",preview:[a({class:"flex gap-2 flex-wrap"},[D({content:"This is a tooltip.",position:"left"},[l("Hover me")])])],code:`Tooltip({ content: 'This is a tooltip.', position: 'left' }, [
    Button('Hover me')
])`}),s({title:"Right Tooltip",description:"This will show the tooltip to the right of the target element.",preview:[a({class:"flex gap-2 flex-wrap"},[D({content:"This is a tooltip.",position:"right"},[l("Hover me")])])],code:`Tooltip({ content: 'This is a tooltip.', position: 'right' }, [
    Button('Hover me')
])`}),d({class:"text-muted-foreground text-sm mt-4"},"The tooltip position can be set to: top, top-right, top-left, bottom, bottom-right, bottom-left, left, right.")]),ve=(e,t,o)=>(o="Icons"+(o?"."+o:""),a({class:"flex flex-auto flex-col items-center gap-2 max-w-[150px] h-[8.5rem] cursor-pointer"},[a({class:"flex flex-auto w-full h-full justify-center items-center flex-wrap rounded-lg border bg-card text-base shadow-sm hover:bg-accent hover:text-accent-foreground",click:()=>{navigator.clipboard.writeText(`${o}.${t}`),app.notify({title:"Icon copied",description:`The icon '${o}.${t}' has been copied to your clipboard.`,icon:r.clipboard.checked})}},[T(e)]),a({class:"text-muted-foreground"},t)])),Ue=(e,t,o)=>{const n=typeof e=="object";n&&t.push(d({class:"text-muted-foreground"},"path: "+o+".{icon}"));const c=[];if(t.push(a({class:"flex flex-auto flex-wrap gap-2 my-8"},c)),n===!1)c.push(ve(e,o));else for(var h in e){if(e.hasOwnProperty(h)===!1)continue;const F=e[h];if(typeof F!="object"){c.push(ve(F,h,o));continue}const _e=`${o}.${h}`;Ue(F,t,_e)}},Ma=e=>{if(!e||typeof e!="object")return;const t=[];for(let[o,n]of Object.entries(e)){if(o==="parse")continue;t.push(ce({id:o.toLowerCase(),class:"text-2xl font-bold"},ut.titleCase(o))),Ue(n,t,o)}return t},Ea=()=>f({title:"Icons",description:"The icons are from the Hericon library. They are SVG icons that can be used in your project. This icon set uses the outline style."},[y({href:"https://heroicons.com/",target:"_blank",class:"bttn link"},"link: Hericons"),s({title:"Icons",description:"This is an icon.",preview:[M({html:r.home})],code:`
import { Icons } from '@components/icons/icons.js';
import { I } from '@base-framework/atoms';

export const HomeIcon = () => (
    I({ html: Icons.home} )
);`}),a({class:"my-20"},[K({class:"text-2xl font-bold"},"Default Icons"),d({class:"text-muted-foreground"},'A few of the icons have been saved to the "Icons" object. You can use these icons in your project. Click to copy the Icon path. Here is a list of the icons that are available:')]),s({title:"Icon Atom",description:"An Icon is a helper atom that makes it easier to use icons in your project. ",preview:[T(r.home)],code:`
import { Icon } from '@components/atoms/icon.js';

Icon(Icons.home);`}),a({class:"my-20"},[K({class:"text-2xl font-bold"},"Default Icons"),d({class:"text-muted-foreground"},'A few of the icons have been saved to the "Icons" object. You can use these icons in your project. Click to copy the Icon path. Here is a list of the icons that are available:')]),Ma(r)]),Na=()=>f({title:"Introduction",description:"The App Shell is a versatile and modular framework, designed to speed up front-end application development using Tailwind CSS and Shadcn-inspired themes. It provides a comprehensive set of components and atoms, created with the Base framework."},[k({class:"space-y-4"},[v({class:"text-lg font-bold"},"The App Shell"),d({class:"text-muted-foreground"},[i("The App Shell project is built to streamline front-end application development. As a modular and scalable PWA (Progressive Web App), it offers easy installation across devices, making it suitable as a foundational framework for new projects.")]),d({class:"text-muted-foreground"},[i("Designed with accessibility, customization, and ease of use in mind, the App Shell accelerates setup, allowing developers to focus on creating functionality without reinventing the wheel.")])]),a({class:"items-start justify-center gap-6 rounded-lg pt-0 md:p-8 md:mt-6 md:grid lg:grid-cols-2 xl:grid-cols-2"},[a({class:"col-span-2 grid items-start gap-6 lg:col-span-1"},[Le(),Me(),Fe()]),a({class:"col-span-2 grid items-start gap-6 lg:col-span-1"},[Oe({members:[{name:"Leslie Alexander",email:"leslie.alexander@example.com",image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"owner",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Michael Foster",email:"michael.foster@example.com",image:"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"member",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Dries Vincent",email:"dries.vincent@example.com",image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"owner",status:"online"}]}),Ne({link:"http://example.com/link/to/document",people:[{name:"Leslie Alexander",email:"leslie.alexander@example.com",image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"owner",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Michael Foster",email:"michael.foster@example.com",image:"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"member",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Dries Vincent",email:"dries.vincent@example.com",image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"owner",status:"online"}]}),$e({startDate:"2023-01-23"}),Ee()])]),k({class:"space-y-4 mt-12"},[v({class:"text-lg font-bold"},"Theme and Styling"),d({class:"text-muted-foreground"},[i("This project is powered by Tailwind CSS, providing a highly customizable, utility-first approach to styling. Additionally, the theme draws inspiration from "),y({href:"https://github.com/shadcn",class:"underline",target:"_blank"},"Shadcn’s UI component library"),i(", combining best practices for consistency and flexibility.")])]),k({class:"space-y-4 mt-12"},[v({class:"text-lg font-bold"},"Icons"),d({class:"text-muted-foreground"},[i("This project utilizes Heroicons, a comprehensive icon set provided by the Tailwind Labs team. These icons are fully customizable and designed to fit seamlessly within Tailwind-based applications.")]),d({class:"text-muted-foreground"},[i("For more details on available icons, visit the "),y({href:"https://heroicons.com",class:"underline",target:"_blank"},"Heroicons website"),i(".")])]),k({class:"space-y-4 mt-12"},[v({class:"text-lg font-bold"},"Components and Atoms"),d({class:"text-muted-foreground"},[i("Leveraging the Base framework, this project provides a comprehensive set of reusable components and atoms. Inspired by projects like "),y({href:"https://github.com/shadcn/ui",class:"underline",target:"_blank"},"shadcn/ui"),i(", the components are crafted to balance flexibility and simplicity, allowing developers to integrate pre-designed elements or customize them as needed.")]),d({class:"text-muted-foreground"},[i("You can explore components like "),y({href:"/docs/components/buttons",class:"underline"},"Buttons"),i(", "),y({href:"/docs/components/tabs",class:"underline"},"Tabs"),i(", and "),y({href:"/docs/components/forms",class:"underline"},"Forms"),i(" to quickly build complex UIs without starting from scratch.")])]),k({class:"space-y-4 mt-12"},[v({class:"text-lg font-bold"},"Development Guidelines"),d({class:"text-muted-foreground"},[i("Modules are an essential part of the App Shell's extensibility. You can add new features by creating modules in the modules folder and registering them in the "),y({href:"/docs/imported-modules",class:"underline"},"imported-modules.js"),i(" file. This structure supports modularity, making it easier to maintain and scale projects.")]),d({class:"text-muted-foreground"},[i("Each module includes its own routes, links, and options, as demonstrated in the example provided. This architecture ensures that modules are self-contained and can be easily integrated into any project using the App Shell framework.")]),De(`import { Icons } from '@components/icons/icons.js';
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
});`)]),k({class:"space-y-4 mt-12"},[v({class:"text-lg font-bold"},"Contributors and Community"),d({class:"text-muted-foreground"},[i("The App Shell is an open-source project, and contributions from the community are welcome. The project is maintained by a dedicated developer who aims to continuously enhance its functionality.")]),d({class:"text-muted-foreground"},[i("For information on contributing, check the "),y({href:"https://github.com/chrisdurfee/next-app-shell",class:"underline",target:"_blank"},"GitHub repository"),i(" and join the community discussions to collaborate and innovate.")])])]),ye=window.matchMedia,re=u(({value:e,label:t,icon:o})=>P({class:'text-sm gap-1 font-medium leading-none disabled:cursor-not-allowed disabled:opacity-70 flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground data-[state="active"]:border-primary [&:has([data-state="active"])]:border-primary',onState:["method",{active:e}],dataSet:["method",["state",e,"active"]],click:(n,{state:c})=>{c.method=e,localStorage.setItem("theme",e),e==="system"&&localStorage.removeItem("theme"),Oa(e)}},[T(o),i(t)])),Oa=e=>{var n;const t=document.documentElement;if(e==="system"&&(e=(n=window.matchMedia)!=null&&n.call(window,"(prefers-color-scheme: dark)").matches?"dark":"light"),ye&&!ye("(prefers-color-scheme: "+e+")").matches){t.classList.add(e);return}const o=e==="light"?"dark":"light";t.classList.remove(o)},Ra=w({render(){return a({class:"flex flex-auto flex-col"},[a({class:"grid grid-cols-3 gap-4"},[re({label:"System",value:"system",icon:r.adjustments.horizontal}),re({label:"Light",value:"light",icon:r.sun}),re({label:"Dark",value:"dark",icon:r.moon})])])},state(){return{method:window.localStorage.getItem("theme")??"system"}}}),Ha=e=>a({class:"flex flex-auto flex-col items-center gap-2 max-w-[150px] h-[8.5rem] cursor-pointer"},[a({class:`flex flex-auto w-full h-full min-h-[136px] justify-center items-center flex-wrap rounded-lg border text-base shadow-sm ${e.class}`,click:()=>{navigator.clipboard.writeText(`${e.class}`),app.notify({title:"Color copied",description:`The color '${e.class}' has been copied to your clipboard.`,icon:r.clipboard.checked})}}),a({class:"text-sm text-muted-foreground"},e.var)]),b=(e,t)=>k({class:"flex flex-auto flex-col gap-2"},[d({class:"text-base text-muted-foreground"},e),a({class:"flex flex-auto flex-wrap gap-2 my-2",map:[t,Ha]})]),za=e=>a({class:"flex flex-auto flex-col gap-12"},[ce({class:"text-2xl font-bold"},"Theme Toggle"),new Ra,ce({class:"text-2xl font-bold"},"Color Guide"),b("Default background color of <body />...etc",[{var:"--backround",class:"bg-backround"},{var:"--foreground",class:"bg-foreground"}]),b("Muted backgrounds such as <TabsList />, <Skeleton /> and <Switch />",[{var:"--muted",class:"bg-muted"},{var:"--muted-foreground",class:"bg-muted-forground"}]),b("Background color for <Card />",[{var:"--card",class:"bg-card"},{var:"--card-foreground",class:"bg-card-foreground"}]),b("Background color for popovers such as <DropdownMenu />, <HoverCard />, <Popover />",[{var:"--popover",class:"bg-popover"},{var:"--popover-foreground",class:"bg-popover-foreground"}]),b("Default border color",[{var:"--border",class:"bg-border"}]),b("Border color for inputs such as <Input />, <Select />, <Textarea />",[{var:"--input",class:"bg-input"}]),b("Primary colors for <Button />",[{var:"--primary",class:"bg-primary"},{var:"--primary-foreground",class:"bg-primary-foreground"}]),b("Secondary colors for <Button />",[{var:"--secondary",class:"bg-secondary"},{var:"--secondary-foreground",class:"bg-secondary-foreground"}]),b("Used for accents such as hover effects on <DropdownMenuItem>, <SelectItem>...etc",[{var:"--accent",class:"bg-accent"},{var:"--accent-foreground",class:"bg-accent-foreground"}]),b('Used for destructive actions such as <Button variant="destructive">',[{var:"--destructive",class:"bg-destructive"},{var:"--destructive-foreground",class:"bg-destructive-foreground"}]),b('Used for warning actions such as <Button variant="warning">',[{var:"--warning",class:"bg-warning"},{var:"--warning-foreground",class:"bg-warning-foreground"}]),b("Used for focus ring",[{var:"--ring",class:"bg-ring"}]),b("Border radius for card, input and buttons",[{var:"--radius",class:"bg-radius"}])]),qa=()=>f({title:"Theme",description:"The theme is using Tailwind CSS and is based on Shadcn UI. The theme is customizable and can be extended. It comes with light and dark theme support."},[y({href:"https://ui.shadcn.com/docs/theming",target:"_blank",class:"bttn link"},"link: Shadcn"),a({class:"my-20"},[K({class:"text-2xl font-bold"},"Default Styles"),d({class:"text-muted-foreground"},"The default styles are defined in the Tailwind CSS configuration file and in the base CSS file. Here's the list of variables available for customization:")]),za(),a({class:"flex flex-auto flex-col gap-2 mt-20"},[v({class:"text-2xl font-bold"},"Text Sizes"),d({class:"text-muted-foreground text-3xl"},"Text-3xl A test sentence."),d({class:"text-muted-foreground text-2xl"},"Text-2xl A test sentence."),d({class:"text-muted-foreground text-xl"},"Text-xl A test sentence."),d({class:"text-muted-foreground text-lg"},"Text-lg A test sentence."),d({class:"text-muted-foreground text-base"},"Text-base A test sentence."),d({class:"text-muted-foreground text-sm"},"Text-sm A test sentence."),d({class:"text-muted-foreground text-xs"},"Text-xs A test sentence.")])]),m=(e,t,o)=>({uri:e,title:t,component:o()}),Wa=e=>[m(`${e}`,"Introduction",Na),m(`${e}/theme`,"Theme",qa),m(`${e}/icons`,"Icons",Ea),m(`${e}/components/buttons*`,"Buttons",Rt),m(`${e}/components/badges*`,"Badges",Ft),m(`${e}/components/tabs*`,"Tabs",Pa),m(`${e}/components/modals*`,"Modals",ka),m(`${e}/components/notifications*`,"Notifications",Sa),m(`${e}/components/dialogs*`,"Modals",No),m(`${e}/components/cards*`,"Cards",po),m(`${e}/components/calendars*`,"Calendars",zt),m(`${e}/components/avatars*`,"Avatars",Dt),m(`${e}/components/inputs*`,"Inputs",la),m(`${e}/components/forms*`,"Forms",Xo),m(`${e}/components/alerts*`,"Alerts",Ct),m(`${e}/components/comboboxes*`,"Comboboxes",yo),m(`${e}/components/lists*`,"Lists",xa),m(`${e}/components/data-tables*`,"Data Tables",Do),m(`${e}/components/breadcrumbs*`,"Breadcrumbs",Ot),m(`${e}/components/navigations*`,"Navigations",Ta),m(`${e}/components/progress-bars*`,"Progress Bars",Ia),m(`${e}/components/skeletons*`,"Skeletons",Da),m(`${e}/components/tooltips*`,"Tooltips",$a),m(`${e}/components/dropdown-menus*`,"Dropdown Menus",Vo)],Ua=e=>[{href:`${e}`,label:"Introduction",exact:!0},{href:`${e}/theme`,label:"Theme",exact:!0},{href:`${e}/icons`,label:"Icons"},{group:"Components",options:[{label:"Buttons",href:`${e}/components/buttons`},{label:"Badges",href:`${e}/components/badges`},{label:"Tabs",href:`${e}/components/tabs`},{label:"Modals",href:`${e}/components/modals`},{label:"Notifications",href:`${e}/components/notifications`},{label:"Dialogs",href:`${e}/components/dialogs`},{label:"Cards",href:`${e}/components/cards`},{label:"Calendars",href:`${e}/components/calendars`},{label:"Avatars",href:`${e}/components/avatars`},{label:"Inputs",href:`${e}/components/inputs`},{label:"Forms",href:`${e}/components/forms`},{label:"Alerts",href:`${e}/components/alerts`},{label:"Comboboxes",href:`${e}/components/comboboxes`},{label:"Lists",href:`${e}/components/lists`},{label:"Data Tables",href:`${e}/components/data-tables`},{label:"Breadcrumbs",href:`${e}/components/breadcrumbs`},{label:"Navigations",href:`${e}/components/navigations`},{label:"Progress Bars",href:`${e}/components/progress-bars`},{label:"Skeletons",href:`${e}/components/skeletons`},{label:"Tooltips",href:`${e}/components/tooltips`},{label:"Dropdown Menus",href:`${e}/components/dropdown-menus`}]}],_a=()=>new mt({backHref:"aside/"},[new J([a([$([ke("Overlay")]),a({class:"contained"},[pt()])])])]),Ga=e=>[{uri:`${e}/overlay-test`,component:_a()}],Y="docs",Ka=()=>new Ge({title:"Documentation",basePath:Y,routes:Ga(Y),switch:Wa(Y),links:Ua(Y)});export{Ka as DocumentationPage,Ka as default};
