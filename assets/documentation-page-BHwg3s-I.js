import{O as Le,A as He}from"./overlay-BKCbE2qN.js";import{w as U,m as o,R as w,a as me,D as X,H as ee,b as P,K as m,p as Ne,c as Re,U as A,I as q,S as d,B as Oe,d as qe,C as ue,A as We,e as l,f as te,y as r,g as y,h as V,T as x,i,j as G,L as ze,k as pe,l as ae,n as W,q as B,o as fe,t as Ue,r as H,v as Ve,s as D,u as z,x as v,O as Ge,z as Je,Z as _e,E as he,J as ne,M as Qe,X as N,N as Ye,Q as ge,V as be,W as K,Y as Z,$ as Ke,a0 as _,a1 as Ze,a2 as Xe,a3 as et,a4 as tt,P as O,a5 as xe,a6 as ot,G as st}from"./index-DyEeeb0i.js";const at=e=>ee({class:"inline-flex flex-auto items-center justify-center whitespace-nowrap rounded-sm text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",dataSet:["selected",["state",e.value,"active"]]},[P({class:"flex flex-auto justify-center items-center px-3 py-1.5",onSet:["selected",{selected:e.value}],click:t=>e.callBack(e.value)},e.label)]),nt=(e,t)=>(e.callBack=t,at(e)),rt=e=>me({class:`tab items-center justify-center rounded-md bg-muted p-1 text-muted-foreground ${e.class}`},[X({class:"flex flex-auto flex-row",map:[e.options,t=>nt(t,e.callBack)]})]);class we extends U{render(){const t=this.select.bind(this);return o({class:""},[rt({class:this.class,options:this.options,callBack:t}),w({class:"tab-content",onState:["selected",this.updateContent.bind(this)]})])}getFirstValue(){var t;return(t=this.options[0])==null?void 0:t.value}update(){const t=this.state.get("selected");this.select(null),this.select(t)}select(t){this.state.selected=t}updateContent(t){const s=this.options;if(!s||s.length<1)return;const n=s[0];for(const c of s)if(c.value===t)return c.layout;return n.layout}setupStates(){const t=this.callBack,s=typeof t;return{selected:{state:this.getFirstValue(),callBack(n){s==="function"&&t(n)}}}}}const ve=m((e,t)=>Ne({class:"flex p-4 min-h-[350px] max-h-[650px] overflow-x-auto rounded-lg border bg-muted whitespace-break-spaces break-all cursor-pointer"},[Re({class:"font-mono text-sm text-wrap",click:()=>navigator.clipboard.writeText(t[0].textContent)},t)])),it=m((e,t)=>o({class:"flex p-4 min-h-[350px] max-h-[650px] overflow-x-auto rounded-lg border bg-card"},[o({class:"preview flex w-full justify-center items-center"},t)])),re=m((e,t)=>o({class:"py-4"},t)),lt=e=>new we({class:"mt-4 max-w-[400px]",options:[{label:"Preview",value:"preview",layout:re([it(e.preview)])},{label:"Code",value:"code",layout:re([ve(e.code)])}]}),ct=m(({title:e,description:t})=>A({class:"flex flex-col"},[q({class:"scroll-m-20 text-2xl font-bold tracking-tight"},e),t&&d({class:"text-base text-muted-foreground py-2 max-w-[700px]"},t)])),a=m((e,t)=>w({class:"py-4"},[ct({title:e.title,description:e.description}),lt({preview:e.preview,code:e.code})]));class dt extends Oe{render(){return qe([o({class:"contained px-4 flex flex-auto flex-col"},this.children)])}}const mt=m(({title:e,description:t})=>A({class:"flex flex-col"},[ue({class:"scroll-m-20 text-3xl font-bold tracking-tight"},e),d({class:"text-base text-muted-foreground py-2 max-w-[700px]"},t)])),ut=m((e,t)=>o({class:"contained py-8"},[mt(e),w({class:"pb-12 pt-8"},t)])),p=m((e,t)=>new dt([ut(e,t)])),pt=()=>p({title:"Alerts",description:"Alerts are used to provide feedback to the user about the outcome of an action or to inform them of important information."},[a({title:"Usage",description:"To use the Alert component, import it from the components library and use it in your application.",preview:[We({title:"Heads up!",description:"You can add components to your app using the cli.",icon:l.information})],code:`import { Alert } from "@components/molecules/alert.js";
import { Icons } from "@components/icons/icons.js";

Alert({
    title: 'Heads up!',
    description: 'You can add components to your app using the cli.',
    icon: Icons.information
})`})]),ft=()=>p({title:"Cards",description:"Cards are a great way to display content in a concise and organized manner."},[a({title:"Usage",description:"Import the card atom and use it in your components. The avatar can be set to multiple sizes: xs, sm, lg, xl, 2xl, 3xl.",preview:[te({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN"})],code:`import { Button } from '@components/atoms/cards/card.js';

Avatar({
    src: 'https://github.com/shadcn.png',
    alt: '@shadcn',
    fallbackText: 'CN',
    size: 'md' // You can change the size to xs, sm, lg, xl, 2xl, 3xl
})`})]),ie={gray:{backgroundColor:"bg-gray-50",textColor:"text-gray-600",ringColor:"ring-gray-500/10"},red:{backgroundColor:"bg-red-50",textColor:"text-red-700",ringColor:"ring-red-600/10"},yellow:{backgroundColor:"bg-yellow-50",textColor:"text-yellow-800",ringColor:"ring-yellow-600/20"},green:{backgroundColor:"bg-green-50",textColor:"text-green-700",ringColor:"ring-green-600/20"},blue:{backgroundColor:"bg-blue-50",textColor:"text-blue-700",ringColor:"ring-blue-700/10"},indigo:{backgroundColor:"bg-indigo-50",textColor:"text-indigo-700",ringColor:"ring-indigo-700/10"},purple:{backgroundColor:"bg-purple-50",textColor:"text-purple-700",ringColor:"ring-purple-700/10"},pink:{backgroundColor:"bg-pink-50",textColor:"text-pink-700",ringColor:"ring-pink-700/10"},primary:{backgroundColor:"bg-primary",textColor:"text-primary-foreground",ringColor:"ring-primary/10"},secondary:{backgroundColor:"bg-secondary",textColor:"text-secondary-foreground",ringColor:"ring-secondary/10"},destructive:{backgroundColor:"bg-destructive",textColor:"text-destructive-foreground",ringColor:"ring-destructive/10"},warning:{backgroundColor:"bg-warning",textColor:"text-warning-foreground",ringColor:"ring-warning/10"},outline:{backgroundColor:"bg-background",textColor:"text-primary",ringColor:"ring-input"},ghost:{backgroundColor:"bg-background",textColor:"text-primary",ringColor:"ring-background"},link:{backgroundColor:"bg-background",textColor:"text-primary",ringColor:"ring-background"}},ht=e=>ie[e]||ie.gray,gt=e=>{const{backgroundColor:t,textColor:s,ringColor:n}=ht(e);return`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors ${t} ${s} ${n}`},g=m((e,t)=>{const s=gt(e==null?void 0:e.type);return r({...e,class:s},t)}),bt=()=>p({title:"Badges",description:"Badges can be used to display a status or a count."},[a({title:"Badge",description:"This is a badge.",preview:[o({class:"flex gap-2 flex-wrap"},[g({type:"gray"},"Text"),g({type:"red"},"Text"),g({type:"yellow"},"Text"),g({type:"green"},"Text"),g({type:"blue"},"Text"),g({type:"indigo"},"Text"),g({type:"purple"},"Text"),g({type:"pink"},"Text"),g({type:"primary"},"Text"),g({type:"secondary"},"Text"),g({type:"destructive"},"Text"),g({type:"warning"},"Text"),g({type:"outline"},"Text"),g({type:"ghost"},"Text"),g({type:"link"},"Text")])],code:`
import { Button } from '@components/atoms/badges/badges.js';
import { Atom } from '@base-framework/base';

export const PrimaryBadge = Atom((props, children)) => (
    Badge({ ...props, type: 'gray' }, children)
);`})]),xt=(e,t)=>x({href:e,"aria-current":t==="Breadcrumb"?"page":null,class:"text-muted-foreground hover:text-foreground"},[r(t)]),wt=()=>r({class:"mx-2 text-muted-foreground","aria-hidden":!0,html:">"}),vt=e=>o({class:"flex items-center"},[e.href?xt(e.href,e.label):r(e.label),e.separator&&wt()]),yt=y({setData(){return new V({items:this.items||[]})},render(){return me({"aria-label":"Breadcrumb",class:"flex items-center space-x-1 text-sm"},[o({role:"list",class:"flex items-center",for:["items",(e,t)=>vt({href:e.href,label:e.label,separator:t<this.data.items.length-1})]})])}}),kt=[{href:"/",label:"Home"},{href:"/components",label:"Components"},{label:"Breadcrumb"}],Tt=()=>p({title:"Breadcrumbs",description:"Breadcrumbs are a navigation aid that helps users understand their location within a website or application."},[a({title:"Usage",description:"To use the Breadcrumb component, import it and provide an array of items. Each item can have a label and an optional href.",preview:[new yt({items:kt})],code:`import { Breadcrumb } from "@components/molecules/breadcrumb/breadcrumb.js";

new Breadcrumb({ items: [
    { href: '/', label: 'Home' },
    { href: '/components', label: 'Components' },
    { label: 'Breadcrumb' } // Last item, no href needed
] })`})]),Ct=()=>p({title:"Button",description:"Displays a button or a component that looks like a button."},[a({title:"Usage",description:"Import the button atom and use it in your components. This platform has variants for different use cases. The variant can be set using the `variant` prop.",preview:[i({variant:"primary"},"Click Me")],code:`import { Button } from '@components/atoms/buttons/buttons.js';

Button({ ...props, variant: 'secondary' }, primary)`}),A({class:"flex flex-col py-8"},[G({class:"text-3xl font-bold tracking-tight border-b pb-2"},"Variants")]),a({title:"Primary Button",description:"This is a primary button.",preview:[i({variant:"primary"},"Click Me")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const PrimaryButton = Atom((props, children) => (
    Button({ ...props, variant: 'primary' }, children)
);`}),a({title:"Secondary Button",preview:[i({variant:"secondary"},"Secondary")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const SecondaryButton = Atom((props, children) => (
    Button({ ...props, variant: 'secondary' }, children)
);`}),a({title:"Destructive Button",preview:[i({variant:"destructive"},"Destructive")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const DestructiveButton = Atom((props, children) => (
    Button({ ...props, variant: 'destructive' }, children)
);`}),a({title:"Warning Button",preview:[i({variant:"warning"},"Warning")],code:`import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const WarningButton = Atom((props, children) => (
    Button({ ...props, variant: 'warning' }, children)
);`}),a({title:"Outline Button",preview:[i({variant:"outline"},"Outline")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const OutlineButton = Atom((props, children) => (
    Button({ ...props, variant: 'outline' }, children)
);`}),a({title:"Ghost Button",preview:[i({variant:"ghost"},"Ghost")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const GhostButton = Atom((props, children) => (
    Button({ ...props, variant: 'ghost' }, children)
);`}),a({title:"Link Button",preview:[i({variant:"link"},"Link")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const LinkButton = Atom((props, children) => (
    Button({ ...props, variant: 'link' }, children)
);`}),a({title:"Icon Button",description:"Displays a button with an icon.",preview:[i({variant:"icon",icon:l.home})],code:`import { Button } from '@components/atoms/buttons/buttons.js';
import { Icons } from '@components/icons/icons.js';
import { Atom } from '@base-framework/base';

export const IconButton = Atom((props) => (
    Button({ ...props, variant: 'icon', icon: Icons.home })
);`}),a({title:"With Icon Button",preview:[i({variant:"withIcon",icon:l.home},"With Icon")],code:`import { Button } from '@components/atoms/buttons/buttons.js';
import { Icons } from '@components/icons/icons.js';

Button({ variant: 'withIcon', icon: Icons.home }, 'With Icon')`}),a({title:"Loading Button",preview:[ze("With Icon")],code:`import { LoadingButton } from '@components/atoms/buttons/buttons.js';

LoadingButton('With Icon')`})]),St=()=>W.formatTime("",24),jt=()=>p({title:"Calendars",description:"This is the calendar component documentation."},[a({title:"Usage",description:"This is how you can use the calendar component.",preview:[new pe],code:`@components/organisms/calendar/calendar.js';

new Calendar()`}),a({title:"Dynamic Time",description:"This is how you can use the calendar component.",preview:[new ae({filter:()=>{let e="Morning";const t=St();return t>="18:00:00"?e="Evening":t>="12:00:00"&&(e="Afternoon"),`Good ${e}`}})],code:`import { DateTime } from "@base-framework/base";
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
})`}),a({title:"Dynamic Local Time by Time Frame",description:"This will show the time frame based on the local time. This will update the time frame every minute to keep the time frame updated.",preview:[new ae({dateTime:"2024-11-04T18:00:00",filter(e){const t=W.getLocalTime(e,!0);return W.getTimeFrame(t)}})],code:`import { DateTime } from "@base-framework/base";
import { DynamicTime } from "@base-framework/organisms";

new DynamicTime({
    dateTime: '2024-11-04T18:00:00',
    filter(date)
    {
        // convert to local time
        const localTime = DateTime.getLocalTime(date, true);
        return DateTime.getTimeFrame(localTime);
    }
})`})]),T=m((e,t)=>o({...e,class:`rounded-lg border bg-card text-card-foreground shadow-md min-w-[120px] min-h-[80px] my-5 mx-5 p-4 ${e.class||""}`},t)),S=m((e,t)=>{var s;return B({...e,html:(s=t[0])==null?void 0:s.textContent})}),Bt=m((e,t)=>o({...e,class:"flex flex-auto flex-col space-y-2"},t)),It=m((e,t)=>fe({...e,class:"flex auto text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"},t)),Dt=m((e,t)=>d({...e,class:"text-sm text-muted-foreground"},t)),At=m((e,t)=>d({...e,class:"text-sm text-destructive"},t)),Ft=e=>e.tag==="input"||e.tag==="select"||e.tag==="textarea",ye=(e,t,s)=>e.map(n=>(n.children&&n.children.length>0&&(n.children=ye(n.children,t,s)),n.required&&Ft(n)?{...n,aria:{invalid:["hasError"]},invalid:s,input:t}:n)),Mt=m((e,t)=>{const c=ye(t,h=>{h.target.checkValidity()&&e.setError(null)},h=>{e.setError(h.target.validationMessage)});return o({...e,class:"w-full"},c)}),f=y({state(){return{error:null,hasError:!1,value:this.defaultValue??""}},render(){const e=this.name,t=this.getId(`${e}`),{label:s,description:n}=this,c=h=>{this.state.error=h,this.state.hasError=!!h};return o({class:"flex flex-auto space-y-4"},[Bt([It({htmlFor:t},s),Mt({id:t,name:e,value:this.state.value,setError:c},this.children),n&&Dt({id:this.getId("description")},n),o({onState:["error",h=>h&&At(h)]})])])}}),$t=(e,t=null)=>{e.target.checkValidity()&&(e.preventDefault(),t&&t(e))},F=m((e,t)=>Ue({...e,submit:s=>$t(s,e.submit),class:"space-y-8 w-full max-w-lg"},t)),M=({title:e,description:t})=>A({class:"text-left"},[G({class:"font-semibold tracking-tight text-2xl"},e),d({class:"text-sm text-muted-foreground"},t)]),Pt=()=>o({class:"flex items-center justify-center gap-4"},[i({variant:"outline",class:"gap-2 w-full",click:()=>console.log("Sign in with Github"),"aria-label":"Sign in with Github"},[S(l.companies.gitHub),r("Github")]),i({variant:"outline",class:"gap-2 w-full",click:()=>console.log("Sign in with Google"),"aria-label":"Sign in with Google"},[S(l.companies.google),r("Google")])]),Et=()=>F({submit:e=>{e.preventDefault(),console.log("Account created")}},[new f({name:"email",label:"Email"},[H({type:"email",placeholder:"m@example.com",required:!0,class:"border p-2 rounded-md w-full bg-background placeholder-muted-foreground text-foreground"})]),new f({name:"password",label:"Password"},[H({type:"password",placeholder:"Your password",required:!0,class:"border p-2 rounded-md w-full bg-background placeholder-muted-foreground text-foreground"})]),i({type:"submit",class:"w-full mt-4 py-2 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition"},"Create account")]),ke=()=>T({class:"w-full max-w-md mx-auto p-8 bg-card space-y-6"},[M({title:"Create an account",description:"Enter your email below to create your account"}),Pt(),o({class:"relative"},[o({class:"absolute inset-0 flex items-center"},[r({class:"flex-grow border-t"})]),o({class:"relative flex justify-center text-xs uppercase"},[r({class:"bg-background px-2 text-muted-foreground"},"or continue with")])]),Et()]),oe=y({state(){return{active:this.active??!1}},render(){return P({class:"inline-flex h-6 w-11 min-w-11 items-center rounded-full bg-muted transition-colors focus:outline-none",onState:["active",{"bg-primary":!0,"bg-muted":!1}],click:(t,{state:s})=>s.toggle("active")},[r({class:"absolute h-5 w-5 bg-background rounded-full shadow-md transform transition-transform",onState:["active",{"translate-x-[22px]":!0,"translate-x-[2px]":!1}]})])}}),Q=({title:e,description:t,defaultState:s,onChange:n})=>o({class:"flex items-start justify-between gap-2"},[o({class:"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex flex-col space-y-1"},[r({class:"font-medium text-foreground"},e),r({class:"font-normal leading-snug text-muted-foreground"},t)]),new oe({active:s,change:n})]),Te=()=>T({class:"w-full max-w-md mx-auto p-6 bg-card space-y-6"},[M({title:"Cookie Settings",description:"Manage your cookie settings here."}),o({class:"pt-0 grid gap-6"},[Q({title:"Strictly Necessary",description:"These cookies are essential in order to use the website and use its features.",defaultState:!0,onChange:e=>console.log("Strictly Necessary:",e)}),Q({title:"Functional Cookies",description:"These cookies allow the website to provide personalized functionality.",defaultState:!1,onChange:e=>console.log("Functional Cookies:",e)}),Q({title:"Performance Cookies",description:"These cookies help to improve the performance of the website.",defaultState:!1,onChange:e=>console.log("Performance Cookies:",e)})]),i({variant:"outline",class:"w-full",click:()=>console.log("Preferences saved")},"Save preferences")]),Lt=(e,t)=>!t.contains(e),Ce=y({state(){return{selectedDate:this.selectedDate??null,open:!1}},render(){const e=(s,{state:n})=>n.toggle("open"),t=s=>{this.state.selectedDate=s,this.state.open=!1};return o({class:"relative w-full max-w-[320px]"},[P({class:"flex items-center gap-2 w-full justify-between border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md h-10 px-4 py-2",click:e},[r({onState:["selectedDate",s=>s?W.format("standard",s):"Pick a date"]}),B({html:l.calendar.days})]),o({class:"absolute mt-1 z-10 bg-background rounded-md shadow-lg",addEvent:["click",document,(s,{state:n,panel:c})=>{Lt(s.target,c)&&(n.open=!1)}],onState:["open",s=>s?new pe({selectedDate:this.state.selectedDate,selectedCallBack:t}):null]})])}}),Se=({startDate:e})=>T({class:"w-full max-w-md mx-auto p-6 bg-card space-y-6"},[M({title:"Pick a Date",description:"When is the event?"}),o({class:"font-medium text-foreground"},[new Ce({selectedDate:e,selectedCallBack:t=>console.log(t)})])]),j=m(e=>({tag:"select",...e,class:`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${e.class||""}`,onCreated(t){e.options&&Ve.setupSelectOptions(t,e.options)}})),Y=m(({value:e,label:t,icon:s})=>P({class:'text-sm gap-1 font-medium leading-none disabled:cursor-not-allowed disabled:opacity-70 flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground data-[state="active"]:border-primary [&:has([data-state="active"])]:border-primary',onState:["method",{active:e}],dataSet:["method",["state",e,"active"]],click:(n,{state:c})=>c.method=e},[S(s),r(t)])),Ht=y({render(){return o({class:"flex flex-auto flex-col"},[o({class:"grid grid-cols-3 gap-4"},[Y({label:"Card",value:"card",icon:l.creditCard}),Y({label:"Paypal",value:"paypal",icon:l.companies.paypal}),Y({label:"Apple",value:"apple",icon:l.companies.apple})])])},state(){return{method:null}}}),Nt=()=>o({class:"flex items-center justify-center gap-4"},[new Ht]),Rt=()=>F({submit:e=>{e.preventDefault(),console.log("Payment method added")}},[new f({name:"name",label:"Name"},[D({type:"text",placeholder:"First Last",required:!0,class:"border p-2 rounded-md w-full bg-background placeholder-muted-foreground text-foreground"})]),new f({name:"card_number",label:"Card number"},[D({type:"text",placeholder:"1234 5678 9012 3456",required:!0,class:"border p-2 rounded-md w-full bg-background placeholder-muted-foreground text-foreground"})]),o({class:"flex gap-4 mt-4"},[new f({name:"month",label:"Expires"},[j({required:!0,class:"border p-2 rounded-md w-full bg-background text-foreground",options:[{value:"",label:"Month",disabled:!0},...Array.from({length:12},(e,t)=>({value:`${t+1}`,label:`${t+1}`.padStart(2,"0")}))]})]),new f({name:"year",label:"Year"},[j({required:!0,class:"border p-2 rounded-md w-full bg-background text-foreground",options:[{value:"",label:"Year",disabled:!0},...Array.from({length:10},(e,t)=>({value:`${new Date().getFullYear()+t}`,label:`${new Date().getFullYear()+t}`}))]})]),new f({name:"cvc",label:"CVC"},[D({type:"text",placeholder:"CVC",required:!0,class:"border p-2 rounded-md w-full bg-background placeholder-muted-foreground text-foreground"})])]),i({type:"submit",class:"w-full mt-4 py-2 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition"},"Continue")]),je=()=>T({class:"w-full max-w-md mx-auto p-8 bg-card space-y-6"},[M({title:"Payment Method",description:"Add a new payment method to your account."}),Nt(),o({class:"space-y-4"},[Rt()])]),Ot=({name:e,description:t,stars:s,language:n,lastUpdated:c})=>o({class:"flex items-start justify-between py-4 border-b border-muted last:border-b-0"},[o({class:"flex flex-col"},[r({class:"font-semibold text-foreground"},e),r({class:"text-sm text-muted-foreground"},t),o({class:"flex space-x-4 text-sm text-muted-foreground mt-3"},[o({class:"flex items-center gap-2"},[S({class:" text-blue-500"},l.document.text),r(` ${n}`)]),o({class:"flex items-center"},[S(l.star),r(` ${s}`)]),o(`Updated ${c}`)])]),i({variant:"secondary",class:"px-3 py-1 gap-1 flex items-center rounded-md",click:()=>console.log(`Starred ${e}`)},[S(l.star),r("Star")])]),qt=({projects:e})=>o({class:"space-y-3"},e.map(t=>Ot(t))),Wt=[{name:"shadcn/ui",description:"Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.",stars:"20k",language:"TypeScript",lastUpdated:"April 2023"},{name:"base-framework",description:"A robust framework for building and structuring large-scale applications with ease.",stars:"2",language:"JavaScript",lastUpdated:"June 2024"}],zt=()=>T({class:"w-full max-w-md mx-auto p-6 bg-card space-y-6"},[o({class:"font-semibold text-lg text-foreground"},"Projects"),qt({projects:Wt})]),Ut=()=>F({submit:e=>{e.preventDefault(),console.log("Issue reported")}},[o({class:"flex flex-auto w-full gap-4"},[new f({name:"area",label:"Area"},[j({required:!0,class:"border p-2 rounded-md w-full bg-background text-foreground",options:[{value:"billing",label:"Billing"},{value:"technical",label:"Technical"},{value:"account",label:"Account"},{value:"other",label:"Other"}],defaultValue:"billing",change:e=>console.log(`Area selected: ${e.target.value}`)})]),new f({name:"security_level",label:"Security Level"},[j({required:!0,class:"border p-2 rounded-md w-full bg-background text-foreground",options:[{value:"severity_1",label:"Severity 1"},{value:"severity_2",label:"Severity 2"},{value:"severity_3",label:"Severity 3"}],defaultValue:"severity_2",change:e=>console.log(`Security Level selected: ${e.target.value}`)})])]),new f({name:"subject",label:"Subject"},[D({type:"text",placeholder:"I need help with...",required:!0,class:"border p-2 rounded-md w-full bg-background text-foreground placeholder-muted-foreground"})]),new f({name:"description",label:"Description"},[z({placeholder:"Please include all information relevant to your issue.",required:!0,class:"border p-2 rounded-md w-full bg-background text-foreground placeholder-muted-foreground"})]),o({class:"flex justify-end gap-4 mt-4"},[i({variant:"outline",class:"px-4 py-2",click:()=>console.log("Cancel clicked")},"Cancel"),i({type:"submit",class:"px-4 py-2 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition"},"Submit")])]),Be=()=>T({class:"w-full max-w-md mx-auto p-6 bg-card space-y-6"},[M({title:"Report an issue",description:"What area are you having problems with?"}),Ut()]),Vt=({link:e})=>o({class:"flex items-center gap-4 py-2"},[H({type:"text",value:e,readOnly:!0,class:"border p-2 rounded-md w-full bg-background text-foreground"}),i({variant:"secondary",class:"px-4 py-2",click:()=>{navigator.clipboard.writeText(e),app.notify({title:"Link copied",description:"The link has been copied to your clipboard.",icon:l.clipboard.checked})}},"Copy Link")]),Gt=({name:e,email:t,access:s,image:n})=>o({class:"flex items-center justify-between gap-4 py-2"},[o({class:"flex items-center gap-3"},[te({src:n,alt:e,fallbackText:e.split(" ").map(c=>c[0]).join("")}),o({},[r({class:"font-medium text-foreground"},e),r({class:"block text-sm text-muted-foreground"},t)])]),j({class:"border rounded-md bg-background text-foreground px-3 py-1",options:[{value:"edit",label:"Can edit"},{value:"view",label:"Can view"},{value:"comment",label:"Can comment"}],defaultValue:s,change:c=>console.log(`Access level changed for ${e}: ${c.target.value}`)})]),Jt=({people:e})=>o({class:"space-y-3"},e.map(t=>Gt(t))),Ie=({link:e,people:t})=>T({class:"w-full max-w-md mx-auto p-6 bg-card space-y-6"},[M({title:"Share this document",description:"Anyone with the link can view this document."}),Vt({link:e}),o({class:"border-t my-4"}),o({class:"font-medium text-foreground"},"People with access"),Jt({people:t})]),_t=e=>e.split(" ").map(s=>s[0]).join(""),Qt=({name:e,email:t,role:s,image:n})=>o({class:"flex items-center justify-between gap-4 py-2"},[o({class:"flex items-center gap-3"},[te({src:n,alt:e,fallbackText:_t(e)}),o({},[r({class:"font-medium text-foreground"},e),r({class:"block text-sm text-muted-foreground"},t)])]),j({class:"border rounded-md bg-background text-foreground px-3 py-1",options:[{value:"owner",label:"Owner"},{value:"member",label:"Member"}],defaultValue:s,change:c=>console.log(`Role changed for ${e}: ${c.target.value}`)})]),Yt=({members:e})=>o({class:"space-y-3"},e.map(t=>Qt(t))),De=({members:e})=>T({class:"w-full max-w-md mx-auto p-6 bg-card space-y-6"},[M({title:"Team Member",description:"Invite your team members to collaborate."}),Yt({members:e})]),Kt=()=>p({title:"Cards",description:"Cards are a great way to display content in a concise and organized manner."},[a({title:"Usage",description:"Import the card atom and use it in your components.",preview:[T()],code:`import { Button } from '@components/atoms/cards/card.js';

Card()`}),v({class:"text-lg font-bold"},"Examples"),d({class:"text-muted-foreground"},"This is a list of examples of how to use the card component in your application."),a({title:"Account Card",preview:[ke()],code:`import AccountCard from "./examples/account-card.js";

AccountCard()`}),a({title:"Paymnet Card",preview:[je()],code:`import AccountCard from "./examples/payment-card.js";

PaymentCard()`}),a({title:"Team Mmeber Card",preview:[De({members:[{name:"Leslie Alexander",email:"leslie.alexander@example.com",image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"owner",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Michael Foster",email:"michael.foster@example.com",image:"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"member",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Dries Vincent",email:"dries.vincent@example.com",image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"owner",status:"online"}]})],code:`import AccountCard from "./examples/team-member-card.js";

TeamMemberCard()`}),a({title:"Share Document Card",preview:[Ie({link:"http://example.com/link/to/document",people:[{name:"Leslie Alexander",email:"leslie.alexander@example.com",image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"owner",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Michael Foster",email:"michael.foster@example.com",image:"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"member",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Dries Vincent",email:"dries.vincent@example.com",image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"owner",status:"online"}]})],code:`import AccountCard from "./examples/share-document-card.js";

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
})`}),a({title:"Date Select Card",preview:[Se({startDate:"2023-01-23"})],code:`import AccountCard from "./examples/date-select-card.js";

DateSelectCard({
    startDate: '2023-01-23'
})`}),a({title:"Report Issue Card",preview:[Be()],code:`import AccountCard from "./examples/report-issue-card.js";

ReportIssueCard()`}),a({title:"Project Card",preview:[zt()],code:`import AccountCard from "./examples/project-card.js";

ProjectCard()`}),a({title:"Cookie Settings Card",preview:[Te()],code:`import AccountCard from "./examples/cookie-settings-card.js";

CookieSettingsCard()`})]),Ae=(e,t)=>{const s=e?e.getBoundingClientRect():{top:0,bottom:0,left:0},n=t.getBoundingClientRect();let c=s.left+window.scrollX,h=s.bottom+window.scrollY;const I=10;return c+n.width>window.innerWidth&&(c=window.innerWidth-n.width-I),h+n.height>window.innerHeight&&(h=s.top+window.scrollY-n.height-I),{x:c,y:h}};class Fe extends U{setData(){return this.parent.data}render(){return o({class:"absolute mt-2 border rounded-md shadow-lg bg-popover z-30 w-[250px]",style:"top: [[position.y]]px; left: [[position.x]]px"},this.children)}setupStates(){return{open:{id:this.parent.getId(),callBack:n=>{this.state.open===!1&&this.destroy()}}}}isOutsideClick(t){return!this.panel.contains(t)&&this.button&&!this.button.contains(t)}setupEvents(){return[["click",document,t=>{this.isOutsideClick(t.target)&&(this.state.open=!1)}]]}setup(t){this.container=document.body,this.initialize()}}const Zt=({toggleDropdown:e})=>P({cache:"button",class:"relative z-[2] inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-[200px] justify-between",click:e,addEvent:["click",document,(t,{state:s,panel:n})=>{oo(t.target,n)&&(s.open=!1)}]},[r({onState:["selectedLabel",t=>t||"Select item..."]}),B({html:l.chevron.upDown})]),Xt=(e,t)=>ee({class:"flex flex-auto items-center cursor-pointer p-2 hover:bg-secondary rounded-sm",click:()=>t(e),onState:["selectedValue",{"bg-secondary":e.value}]},[e.icon&&r({class:"mr-2 flex items-baseline"},[B({class:"flex w-4 h-4",html:e.icon})]),r(e.label)]),eo=e=>o({class:"w-full"},[X({class:"max-h-60 overflow-y-auto p-2 grid gap-1",for:["items",t=>Xt(t,e)]})]),to=({onSelect:e})=>o({class:"flex flex-auto flex-col",onState:["open",(t,s,n)=>{if(t)return new Fe({cache:"dropdown",parent:n,button:n.button},[eo(e)])}]}),oo=(e,t)=>!t.contains(e),Me=y({setData(){return new V({items:this.items||[],position:{y:0,x:0}})},state:{open:!1,selectedLabel:"",selectedValue:""},updatePosition(){const e=this.button,t=this.dropdown.panel,s=Ae(e,t);this.data.position=s},toggleDropdown(){this.state.toggle("open"),this.state.open&&this.updatePosition()},render(){const e=t=>{const s=this.state;s.selectedValue=t.value,s.selectedLabel=t.label,s.open=!1};return o({class:"relative w-[200px]"},[Zt({toggleDropdown:this.toggleDropdown.bind(this)}),to({onSelect:e}),this.required&&H({class:"opacity-0 absolute top-0 left-0 z-[1]",type:"text",name:this.name,required:!0,value:["[[selectedValue]]",this.state]})])}}),so=[{value:"next.js",label:"Next.js",icon:l.home},{value:"sveltekit",label:"SvelteKit"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}],ao=()=>p({title:"Comboboxes",description:"Comboboxes are used to allow users to select an option from a dropdown list or enter a custom value."},[a({title:"Usage",description:"To use the Combobox component, import it from the components library and use it in your application.",preview:[new Me({items:so})],code:`@components/molecules/combobox/combobox.js';
import { Icons } from "@components/icons/icons.js";

new Combobox({
    items: [
    { value: 'next.js', label: 'Next.js', icon: Icons.home },,
    { value: 'sveltekit', label: 'SvelteKit' },
    { value: 'nuxt.js', label: 'Nuxt.js' },
    { value: 'remix', label: 'Remix' },
    { value: 'astro', label: 'Astro' },
],
})`})]),no=()=>`checkbox-${Math.random().toString(36).substring(2,9)}`,J=y({state(){return{checked:this.checked??!1}},render(){const e=no();return o({class:`flex items-center space-x-2 cursor-pointer ${this.class}`},[o({class:"relative flex items-center justify-center w-5 h-5 rounded-md transition-colors duration-200 border hover:border-accent-foreground",onState:["checked",{"bg-primary":!0,"text-primary-foreground":!0}],role:"checkbox",aria:{checked:["checked"]},tabIndex:0,click:()=>{this.state.checked=!this.state.checked,typeof this.checked=="function"&&this.checked(this.state.checked)}},[Ge({id:e,class:"absolute opacity-0 w-full h-full cursor-pointer",aria:{checked:["checked"]},bind:this.bind,change:t=>{const s=t.target.checked;this.state.checked=s,typeof this.checked=="function"&&this.checked(s)}}),r({class:"absolute text-xs pointer-events-none",onState:["checked",t=>t?B({class:"w-2 h-2 pointer-events-none",html:l.check}):null]})]),this.label&&fe({class:"text-base cursor-pointer",htmlFor:e,click:()=>{this.state.toggle("checked"),typeof this.checked=="function"&&this.checked(this.state.checked)}},this.label)])}}),ro=e=>_e([he({class:"text-muted-foreground border-b",map:[e.headers,t=>{if(t.label==="checkbox")return ne({class:"cursor-pointer py-3 px-4 text-base"},[new J({class:"mr-2"})]);const s=t.align||"items-center justify-start";return ne({class:"cursor-pointer py-3 px-4 text-base",click:t.sortable&&(()=>e.sort(t.key))},[o({class:`flex flex-auto w-full items-center ${s}`},[r(t.label),t.sortable&&B({class:"ml-2",html:l.arrows.upDown})])])}]})]),io=({key:e,rows:t,selectRow:s,rowItem:n})=>new Qe({key:e,items:t,rowItem:c=>n(c,s),class:"divide-y divide-border"}),lo=y({setData(){return new V({rows:this.rows||[],selectedRows:[]})},selectRow(e){const t=this.data.selectedRows.includes(e)?this.data.selectedRows.filter(s=>s!==e):[...this.data.selectedRows,e];this.data.selectedRows=t},render(){const e=this.data.rows;return o({class:"w-full"},[o({class:"w-full rounded-md border"},[Je({class:"w-full"},[this.headers&&ro({headers:this.headers,sort:t=>this.sortRows(t)}),io({key:this.key,rows:e,selectRow:this.selectRow.bind(this),rowItem:this.rowItem})])])])}}),co=[{label:"checkbox",key:""},{label:"Status",key:"status"},{label:"Email",key:"email"},{label:"Amount",key:"amount",align:"justify-end"}],mo=[{id:1,status:"Success",email:"ken99@yahoo.com",amount:316,selected:!1},{id:2,status:"Success",email:"abe45@gmail.com",amount:242,selected:!1},{id:3,status:"Processing",email:"monserrat44@gmail.com",amount:837,selected:!1},{id:4,status:"Success",email:"silas22@gmail.com",amount:874,selected:!1},{id:5,status:"Failed",email:"carmella@hotmail.com",amount:721,selected:!1}],uo=(e,t)=>he({class:"items-center px-4 py-2 hover:bg-muted"},[N({class:"p-4 "},[new J({checked:e.selected,class:"mr-2",click:()=>t(e)})]),N({class:"p-4 "},[r({class:"text-muted-foreground"},e.status)]),N({class:"p-4 "},e.email),N({class:"p-4 text-right"},`$${e.amount.toFixed(2)}`)]),po=()=>p({title:"Data Tables",description:"Data tables are used to display data in a structured format. They can be used to display a list of items, a grid of items, or a table of items."},[a({title:"Usage",description:"The data table component is used to display data in a structured format. It can be used to display a list of items, a grid of items, or a table of items.",preview:[new lo({headers:co,rows:mo,rowItem:uo,key:"id"})],code:`import { DataTable } from "@components/organisms/lists/data-table.js";
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
})`})]),fo=e=>Ye.render(e,document.body),ho=({title:e})=>A({class:"flex flex-auto items-center"},[G({class:"text-lg font-semibold"},e)]),go=m((e,t)=>ge({class:`fixed z-30 w-[98%] md:w-full max-w-lg gap-4 border bg-background text-foreground p-6 pb-12 md:pb-6 shadow-lg duration-200
                rounded-lg flex flex-auto flex-col
                bottom-4 top-auto md:bottom-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2`,click:e.click,aria:{expanded:["open"]}},[o({class:"flex flex-auto flex-col space-y-2"},[ho(e),e.description&&d({class:"flex flex-auto flex-col text-sm text-muted-foreground"},e.description),o({class:"flex flex-auto flex-col text-sm text-muted-foreground"},t)]),be({class:"flex flex-col-reverse sm:flex-row sm:justify-end mt-6 gap-2 sm:gap-0 sm:space-x-2"},e.buttons)]));class se extends U{render(){const t=c=>{c.target===this.panel&&this.close()},s=this.getMainClass(),n=this.title||"Dialog Title";return go({class:s,title:n,click:t,description:this.description,buttons:this.getButtons()},this.children)}getButtons(){return[i({variant:"outline",click:()=>this.close()},"Close")]}setupStates(){return{open:!1}}getMainClass(){return""}open(){fo(this),this.panel.showModal(),this.state.open=!0}close(){this.state.open=!1,this.panel.close(),this.destroy()}}class bo extends se{getButtons(){const t=this.confirmTextLabel||"Confirm";return[i({variant:"outline",click:()=>this.close()},"Cancel"),i({variant:"primary",click:()=>this.confirm()},t)]}confirm(){this.confirmed&&this.confirmed(),this.close()}}const xo=m((e,t)=>i({text:"Open",class:"m-1",click:()=>new se(e,t).open()})),wo=e=>i({text:"Open",class:"m-1",click:()=>new bo(e).open()}),vo=()=>p({title:"Dialogs",description:"Displays a dialog or a component that looks like a dialog. Dialogs can be opened and closed. They will be closed if the user clicks outside of the dialog or if the user clicks the close button."},[a({title:"Usage",description:"Import the dialog atom and use it in your components.",preview:[xo({title:"Title",description:"this is the description."},[])],code:`import { Dialog } from '@components/molecules/dialogue.js';

new Dialog({
    title: '',
    description: ''
}, [

]).open()`}),a({title:"Confirmation",description:"Displays a confirmation dialog.",preview:[wo({title:"Are you absoultely sure?",description:"This action cannot be undone. This will permanently delete your account and remove your data from our servers.",confirmTextLabel:"Save",confirmed:()=>console.log("Confirmed!")})],code:`import { Confirmation } from '@components/molecules/dialogs/confirmation.js';

new Confirmation({
    title: 'Are you absoultely sure?',
    description: 'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
    confirmTextLabel: 'Save',
    confirmed: () => console.log('Confirmed!')
}).open()`})]),yo=e=>r({class:"ml-auto text-xs tracking-widest opacity-60"},e),ko=e=>r({class:"flex w-4 h-4",html:e}),To=e=>r({class:"flex-auto"},e),Co=(e,t)=>ee({class:"relative flex cursor-pointer hover:bg-accent hover:text-accent-foreground select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",click:()=>t(e)},[e.icon&&ko(e.icon),To(e.label),e.shortcut&&yo(e.shortcut)]),So=(e,t)=>X({class:"grid gap-2"},[e.map(s=>Co(s,t))]),jo=e=>o({class:"w-full z-10"},[o({class:"max-h-60 overflow-y-auto p-1 grid gap-2 divide-y divide-border",for:["groups",t=>So(t,e)]})]),Bo=({label:e,icon:t,toggleDropdown:s})=>P({cache:"button",class:`inline-flex items-center justify-between rounded-md border border-input
            bg-background px-2 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground
            focus:outline-none transition duration-150 ease-in-out`,click:s},[e&&r(e),t&&B({html:t})]),Io=({onSelect:e})=>o({onState:["open",(t,s,n)=>{if(t)return new Fe({cache:"dropdown",parent:n,button:n.button},[jo(e)])}]});class Do extends U{setData(){return new V({groups:this.groups||[],position:{y:0,x:0}})}setupStates(){return{open:!1,selectedItem:null}}toggleDropdown(){this.state.toggle("open"),this.state.open&&this.updatePosition()}updatePosition(){const t=this.button,s=this.dropdown.panel,n=Ae(t,s);this.data.position=n}handleSelect(t){this.state.selectedItem=t,this.state.open=!1,typeof this.onSelect=="function"&&this.onSelect(t)}render(){return o({class:"relative"},[Bo({label:this.label,icon:this.icon,toggleDropdown:this.toggleDropdown.bind(this)}),Io({onSelect:this.handleSelect.bind(this)})])}}const Ao=()=>p({title:"Dropdown Menus",description:"Dropdown menus are used to display a list of options when a user clicks on a button or input field."},[a({title:"Usage",description:"To use the DropdownMenu component, import it from the components library and use it in your application.",preview:[new Do({icon:l.ellipsis.vertical,groups:[[{icon:l.user.default,label:"Profile",shortcut:"⌘P",value:"profile"},{icon:l.creditCard,label:"Billing",shortcut:"⌘B",value:"billing"},{icon:l.cog.six,label:"Settings",shortcut:"⌘S",value:"settings"},{icon:l.computerDesktop,label:"Keyboard shortcuts",shortcut:"⌘K",value:"shortcuts"}],[{icon:l.user.multiple,label:"Team",value:"team"},{icon:l.user.plus,label:"Invite users",value:"invite"},{icon:l.plus,label:"New Team",shortcut:"⌘T",value:"new_team"}],[{icon:l.github,label:"GitHub",value:"github"},{icon:l.helpCircle,label:"Support",value:"support"},{icon:l.api,label:"API",value:"api"}]],onSelect:e=>{console.log("Selected item:",e)}})],code:`import { Icons } from "@components/icons/icons.js";
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
})`})]),$e=y({state(){return{value:this.value??0,min:this.min??0,max:this.max??100,filledPercentage:this.getFillPercentage(this.value)}},getFillPercentage(e){return(e-this.min)/(this.max-this.min)*100},render(){return o({class:"relative w-full h-4 flex items-center"},[o({class:"absolute h-2 w-full rounded-full bg-muted"}),o({class:"absolute h-2 bg-primary rounded-full",style:"width: [[filledPercentage]]%"}),o({class:"absolute block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transform -translate-x-1/2",style:"left: [[filledPercentage]]%"}),H({type:"range",min:"[[min]]",max:"[[max]]",value:"[[value]]",class:"absolute w-full h-full opacity-0 cursor-pointer",bind:this.bind,input:e=>{const t=Number(e.target.value);this.state.value=t,this.state.filledPercentage=this.getFillPercentage(t),typeof this.change=="function"&&this.change(t)}})])}}),Fo=[{value:"next.js",label:"Next.js"},{value:"sveltekit",label:"SvelteKit"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}],Mo=()=>F({submit:e=>{console.log("Profile Form submitted")}},[new f({name:"username",label:"Username",description:"This is your public display name."},[D({placeholder:"e.g. username",required:!0})]),new f({name:"email",label:"Email Address",description:"We'll use this to contact you."},[K({placeholder:"e.g. email@address.com",required:!0})]),i({type:"submit"},"Submit")]),$o=()=>F({submit:e=>{console.log("Preferences Form submitted")}},[new f({name:"framework",label:"Favorite Framework",description:"Select your preferred framework."},[j({options:Fo,required:!0})]),new f({name:"newsletter",label:"Subscribe to Newsletter",description:"Stay updated with our latest news."},[new J({label:"Yes, sign me up!"})]),i({type:"submit"},"Save Preferences")]),Po=()=>F({submit:e=>{console.log("Contact Form submitted")}},[new f({name:"phone",label:"Phone Number",description:"We may contact you at this number."},[Z({placeholder:"e.g. +1234567890",required:!0})]),new f({name:"message",label:"Your Message",description:"Let us know how we can help you."},[z({placeholder:"Type your message here...",required:!0})]),new f({name:"message",label:"Select Framework",description:"Select your preferred framework."},[new Me({required:!0,items:[{value:"next.js",label:"Next.js"},{value:"sveltekit",label:"SvelteKit"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}]})]),i({type:"submit"},"Send Message")]),Eo=()=>F({submit:e=>{console.log("Settings Form submitted")}},[new f({name:"notifications",label:"Enable Notifications",description:"Toggle to enable or disable notifications."},[new oe({active:!0})]),new f({name:"volume",label:"Volume Level",description:"Set your preferred volume level."},[new $e({min:0,max:100,value:50})]),i({type:"submit"},"Save Settings")]),Lo=()=>p({title:"Forms",description:"Forms are used to collect user data and submit it to the server."},[a({title:"Profile Form",description:"A simple profile form with username and email fields.",preview:[Mo()],code:`import { Button, Input, EmailInput } from "@components/atoms/form/input.js";
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
])`}),a({title:"Preferences Form",description:"A preferences form with a select input and a checkbox.",preview:[$o()],code:`import { Button, Checkbox, Select } from "@components/atoms/form/input.js";
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
])`}),a({title:"Contact Form",description:"A contact form with a phone input and a textarea for messages.",preview:[Po()],code:`import { Button, TelInput, Textarea } from "@components/atoms/form/input.js";
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
])`}),a({title:"Settings Form",description:"A settings form with a toggle and a range slider.",preview:[Eo()],code:`import { Button, Toggle, RangeSlider } from "@components/atoms/form/input.js";
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
])`})]),Ho=[{value:"next.js",label:"Next.js"},{value:"sveltekit",label:"SvelteKit"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}],k=m((e,t)=>o({...e,class:"flex flex-auto items-center justify-center w-full max-w-[350px]"},t)),No=()=>p({title:"Inputs",description:"Inputs are essential for gathering user data in forms."},[a({title:"Usage",description:"Import the input atom and use it in your components. The input can be of various types: text, password, email, etc.",preview:[o({class:"grid gap-2 w-full max-w-[350px]"},[D({type:"text",placeholder:"Enter your text here...",change:e=>console.log(e.target.value)}),K({}),Z({}),z({placeholder:"Enter your text here..."})])],code:`import { Input, EmailInput, TelInput, Textarea } from '@components/atoms/form/input.js';

Input({
    type: 'text',
    placeholder: 'Enter your text here...',
    change: (e) => console.log(e.target.value)
}),
EmailInput({}),
TelInput({}),
Textarea({
    placeholder: 'Enter your text here...'
})`}),a({title:"File Input",description:"This is a file input.",preview:[k([Ke({multiple:!0,change:e=>console.log(e.target.files)})])],code:`import { EmailInput, FileInput, Input, TelInput, Textarea } from "@components/atoms/form/input.js";

FileInput({
    multiple: true,
    change: (e) => console.log(e.target.files)
})`}),a({title:"Radio Input",description:"This is a radio input.",preview:[o({class:"grid gap-2"},[_({name:"theme",label:"System",value:"system"}),_({name:"theme",label:"Light",value:"light"}),_({name:"theme",label:"Dark",value:"dark"})])],code:`import { Radio } from "@components/atoms/form/input.js";
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
])`}),a({title:"Text Input",description:"This is a text input.",preview:[k([D({type:"text",placeholder:"Enter your text here..."})])],code:`
import { EmailInput, FileInput, Input, TelInput, Textarea } from "@components/atoms/form/input.js";

Input({
    type: 'text',
    placeholder: 'Enter your text here...'
})`}),a({title:"Tel Input",description:"This is a phone input.",preview:[k([Z({})])],code:`
import { EmailInput, FileInput, Input, TelInput, Textarea } from "@components/atoms/form/input.js";

TelInput({
})`}),a({title:"Email Input",description:"This is a email input.",preview:[k([K({})])],code:`
import { EmailInput, FileInput, Input, TelInput, Textarea } from "@components/atoms/form/input.js";

EmailInput({

})`}),a({title:"Checkbox",description:"This is a checkbox input.",preview:[new J({label:"Check me",check:e=>console.log(e)})],code:`
import { Checkbox } from '@components/atoms/form/checkbox.js';

new Checkbox({
    label: 'Check me',
    check: (checked) => console.log(checked)
})`}),a({title:"Select",description:"This is a select input.",preview:[k([j({options:Ho,change:e=>console.log(e.target.value)})])],code:`import { Select } from "@components/atoms/form/select.js";

Select({
    options: [
        { value: 'next.js', label: 'Next.js' },
        { value: 'sveltekit', label: 'SvelteKit' },
        { value: 'nuxt.js', label: 'Nuxt.js' },
        { value: 'remix', label: 'Remix' },
        { value: 'astro', label: 'Astro' },
    ],
    change: (e) => console.log(e.target.value)
})`}),a({title:"Textarea",description:"This is a textarea input.",preview:[k([z({placeholder:"Enter your text here..."})])],code:`
import { EmailInput, FileInput, Input, TelInput, Textarea } from "@components/atoms/form/input.js";

Textarea({
    placeholder: 'Enter your text here...'
})`}),a({title:"Date Picker",description:"This is a date picker input.",preview:[k([new Ce({selectedDate:"2022-01-01"})])],code:`
import DatePicker from "@components/molecules/date-time/date-picker.js";

new DatePicker()`}),a({title:"Range Slider",description:"This is a range slider input.",preview:[k([new $e({min:0,max:100,value:50,change:e=>console.log(e)})])],code:`
import { RangeSlider } from '@components/atoms/form/range-slider.js';

new RangeSlider({
    min: 0,
    max: 100,
    value: 50,
    change: (value) => console.log(value)
})`}),a({title:"Toggle Switch",description:"This is a toggle switch input.",preview:[k([new oe({active:!0,change:e=>console.log(e)})])],code:`
import { RangeSlider } from '@components/atoms/form/range-slider.js';

new RangeSlider({
    min: 0,
    max: 100,
    value: 50,
    change: (value) => console.log(value)
})`})]),Ro=[{name:"Leslie Alexander",email:"leslie.alexander@example.com",image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"Co-Founder / CEO",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Michael Foster",email:"michael.foster@example.com",image:"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"Co-Founder / CTO",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Dries Vincent",email:"dries.vincent@example.com",image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"Business Relations",status:"online"}],Oo=()=>p({title:"Lists",description:"Lists are used to display a collection of items in a structured format. Each item can be customized to show different information."},[a({title:"Usage",description:"To use the List component, import it from the components library and use it in your application.",preview:[Ze({users:Ro})],code:`import { UserListItem } from "@components/organisms/lists/user-list.js";
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
});`}),v({class:"text-lg font-bold"},"Description"),d({class:"text-muted-foreground"},"The List component can be used to display a list of items in a structured format. Each item can be customized to show different information. The List component supports appending, prepending, mingling, and deleting or items. "),v({class:"text-lg font-bold"},"Performance"),d({class:"text-muted-foreground"},"The list will only update or re-render the items that have changed, improving performance. It uses a key to know when to update an item.")]),qo=({title:e})=>A({class:"modal-header flex items-center"},[i({variant:"icon",icon:l.arrows.left,class:"mr-2 p-0 bg-transparent flex sm:hidden",click:(t,s)=>s.close()}),G({class:"text-lg font-semibold m-0"},e)]),Wo=m((e,t)=>ge({class:`modal m-auto fixed z-20 grid w-full gap-4 border bg-background p-6 shadow-lg ${e.class}`,click:e.click},[o({class:"modal-content flex flex-auto flex-col"},[qo(e),o({class:"modal-body flex flex-auto"},t),be({class:"modal-footer flex justify-between"},e.buttons)])]));class zo extends se{render(){const t=c=>{c.target===this.panel&&this.close()},s=this.getMainClass(),n=this.title||"Are you abosolutely sure?";return Wo({class:s,click:t,title:n,buttons:this.getButtons(),aria:{expanded:["open"]}},this.children)}getButtons(){return[i({variant:"outline",click:()=>this.close()},"Cancel"),i({variant:"primary",click:()=>this.confirm()},"Save")]}getSizeClass(){switch(this.size){case"sm":return"sm max-w-[646px]";case"lg":return"lg max-w-[900px]";case"xl":return"xl max-w-[1400px]";default:return"medium max-w-[760px]"}}getTypeClass(){switch(this.type){case"right":return"right right-0";case"left":return"left left-0";default:return""}}getMainClass(){return this.getSizeClass()+" "+this.getTypeClass()}}const E=[{label:"Large",buttonStyle:"primary",size:"lg"},{label:"Small",buttonStyle:"secondary",size:"sm"},{label:"Medium",buttonStyle:"destructive",size:"md"},{label:"XL",buttonStyle:"primary",size:"xl"},{label:"Right",buttonStyle:"ghost",type:"right"},{label:"Left",buttonStyle:"link",type:"left"}],L=({label:e,buttonStyle:t,size:s,type:n})=>i({text:e,class:`m-1 ${t}`,click:()=>new zo({title:"Are you absolutely sure?",size:s,type:n}).open()}),Uo=()=>p({title:"Modals",description:"Displays a modal or a component that looks like a modal."},[a({title:"Extra Large Modal",description:"This is an extra large modal.",preview:[L(E[3])],code:`
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
});`}),a({title:"Large Modal",description:"This is a large modal.",preview:[L(E[0])],code:`
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
});`}),a({title:"Small Modal",preview:[L(E[1])],code:`
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
});`}),a({title:"Medium Modal",preview:[L(E[2])],code:`
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
});`}),a({title:"Right Modal",preview:[L(E[4])],code:`
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
});`})]),Vo=()=>p({title:"Navigations",description:"Navigations are components that help users move around the website or application."},[a({title:"Inline Navigation",description:"The inline navigation component is a simple navigation component that can be used in a sidebar or app shell.",preview:[o({class:"flex flex-auto flex-col w-full border rounded-md max-w-[300px]"},[new Xe({options:[{label:"Home",href:"/",icon:l.home},{label:"About",href:"/about"},{label:"Contact",href:"/contact"},{label:"Services",options:[{label:"Web Development",href:"/web-development"}]},{group:"Frameworks",options:[{label:"Next.js",href:"/next"},{label:"SvelteKit",href:"/sveltekit"},{label:"Nuxt.js",href:"/nuxt"},{label:"Remix",href:"/remix"},{label:"Astro",href:"/astro"}]}]})])],code:`import { Button } from '@components/organisms/navigation/inline-navigation.js';
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
})`})]),Go=()=>p({title:"Notifications",description:"Displays a notification message to the user."},[a({title:"In App Notifications",description:"Notifications can be displayed in the app to inform users about important events or updates. They are a global notification container that can be called from anywhere in the app.",preview:[new et({title:"Notification Title",description:"This is a notification.",icon:l.warning,duration:"infinite"})],code:`app.notify({
    title: 'Notification Title',
    description: 'This is a notification.',
    icon: Icons.warning,
    type: 'warning', // 'success', 'destructive', 'info', 'warning'
    duration: 5000 // in milliseconds, leave it blank for 4 seconds, infinite is also a value to prevent it from going away
})`}),d({class:"text-muted-foreground"},"Notifications will stack if a few are called at the same time. The notification will be until the duration has been met. If a notificaiton duration is set to 'infinite', it must be removed by the user.  "),a({title:"Usage",description:"Call 'notify' the gloabl notification container to display notifications.",preview:[i({click:()=>{app.notify({title:"Notification Title",description:"This is a notification.",icon:l.warning,type:"warning"})}},"Show")],code:`app.notify({
    title: 'Notification Title',
    description: 'This is a notification.',
    icon: Icons.warning,
    type: 'warning', // 'success', 'destructive', 'info', 'warning'
    duration: 5000 // in milliseconds, leave it blank for 4 seconds, infinite is also a value to prevent it from going away
})`})]),Jo=()=>o({class:"absolute h-full rounded-full bg-primary transition-all duration-300",style:"width: [[progress]]%;"}),_o=y({render(){return o({class:"relative w-full h-4 rounded-full bg-muted"},[Jo()])},state(){return{progress:this.progress??0}},set(e){e<0&&(e=0),e>100&&(e=100),this.state.progress=e}}),Qo=()=>p({title:"Progress Bars",description:"Progress bars are a great way to show the progress of a task or process."},[a({title:"Usage",description:"Import the progress bar atom and use it in your components. The progress bar can be used to show the progress of a task or process.",preview:[new _o({cache:"progress",progress:20})],code:`import { ProgressBar } from "@components/atoms/progress-bar.js";

new ProgressBar({ cache: 'progress', progress: 20 })`})]),$=({className:e,shape:t="rectangle",width:s="w-full",height:n="h-4"})=>o({class:`bg-muted animate-pulse ${s} ${n} ${t==="circle"?"rounded-full":"rounded-md"} ${e||""}`}),Yo=()=>p({title:"Skeletons",description:"Skeletons are components that are used to show a placeholder for content that is loading."},[a({title:"Usage",description:"The skeleton component is used to show a placeholder for content that is loading.",preview:[o({class:"flex flex-auto space-x-4 w-full max-w-64"},[$({shape:"circle",width:"w-10",height:"h-10"}),o({class:"flex flex-auto flex-col space-y-2"},[$({width:"w-3/4",height:"h-4"}),$({width:"w-1/2",height:"h-4"})])])],code:`import { Skeleton } from "@components/atoms/skeleton.js";
import { Div } from '@base-framework/atoms';

Div({ class: 'flex flex-auto space-x-4 w-full max-w-64' }, [
    Skeleton({ shape: 'circle', width: 'w-10', height: 'h-10' }), // Circle skeleton for avatar
    Div({ class: 'flex flex-auto flex-col space-y-2' }, [
        Skeleton({ width: 'w-3/4', height: 'h-4' }), // Long rectangle for main text
        Skeleton({ width: 'w-1/2', height: 'h-4' })  // Shorter rectangle for subtext
    ])
])`}),a({title:"Skeleton Post",description:"This is a skeleton post.",preview:[o({class:"space-y-4 flex flex-auto flex-col w-full max-w-64"},[$({width:"w-full",height:"h-32",shape:"rectangle"}),o({class:"space-y-2"},[$({width:"w-3/4",height:"h-4"}),$({width:"w-1/2",height:"h-4"})])])],code:`import { Skeleton } from "@components/atoms/skeleton.js";
import { Div } from '@base-framework/atoms';

Div({ class: 'space-y-4 flex flex-auto flex-col space-x-4 w-full max-w-64' }, [
    // Large rectangle for image or main content
    Skeleton({ width: 'w-full', height: 'h-32', shape: 'rectangle' }),

    // Text line placeholders
    Div({ class: 'space-y-2' }, [
        Skeleton({ width: 'w-3/4', height: 'h-4' }), // Longer text line
        Skeleton({ width: 'w-1/2', height: 'h-4' })  // Shorter text line
    ])
])`})]),le=m((e,t)=>o({class:"py-4"},t)),Ko=()=>p({title:"Tabs",description:"Displays a tab or a component that looks like a tab."},[a({title:"Button Tab",description:"This is a button tab. The buttons to not route.",preview:[new we({class:"mt-4 max-w-[400px]",options:[{label:"Preview",value:"preview",layout:le([])},{label:"Code",value:"code",layout:le([])}]})],code:`
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
);`}),a({title:"Link Tab",description:"This is a link tab. The buttons route to a different page.",preview:[new tt({class:"max-w-[400px]",options:[{label:"Example 1",href:"docs/components/tabs/example-1",component:new O({class:"p-8"},"This is an example 1 tab panel.")},{label:"Example 2",href:"docs/components/tabs/example-2",component:new O({class:"p-8"},"This is an example 2 tab panel.")},{label:"Example 3",href:"docs/components/tabs/example-3",component:new O({class:"p-8"},"This is an example 3 tab panel.")}]})],code:`
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
);`})]),ce={top:"bottom-full left-1/2 transform -translate-x-1/2 mb-2","top-right":"bottom-full left-full transform -translate-x-1 mb-2","top-left":"bottom-full right-full transform translate-x-1 mb-2",bottom:"top-full left-1/2 transform -translate-x-1/2 mt-2","bottom-right":"top-full left-full transform -translate-x-1 mt-2","bottom-left":"top-full right-full transform translate-x-1 mt-2",left:"top-1/2 right-full transform -translate-y-1/2 mr-2",right:"top-1/2 left-full transform -translate-y-1/2 ml-2"},Zo=e=>ce[e]||ce.top,C=m(({position:e="top",content:t},s)=>{const n=Zo(e);return o({class:"relative group inline-block"},[s,r({class:`
                absolute z-20 px-2 py-1 border text-sm bg-background rounded shadow-md opacity-0 whitespace-nowrap
                group-hover:opacity-100 transition-opacity duration-200 ${n} pointer-events-none
            `},t)])}),Xo=()=>p({title:"Tooltips",description:"Tooltips are small popups that appear when a user hovers over an element."},[a({title:"Usage",description:"Import the tooltip atom and use it in your components.",preview:[o({class:"flex gap-2 flex-wrap"},[C({content:"This is a tooltip."},[i("Hover me")])])],code:`import { Button } from "@components/atoms/buttons/buttons.js";
import { Tooltip } from "@components/atoms/tooltip.js";

Tooltip({ content: 'This is a tooltip.' }, [
    Button('Hover me')
])`}),a({title:"Bottom Tooltip",description:"This will show the tooltip at the bottom of the target element.",preview:[o({class:"flex gap-2 flex-wrap"},[C({content:"This is a tooltip.",position:"bottom"},[i("Hover me")])])],code:`Tooltip({ content: 'This is a tooltip.', position: 'bottom' }, [
    Button('Hover me')
])`}),a({title:"Top-Right Tooltip",description:"This will show the tooltip at the top-right of the target element.",preview:[o({class:"flex gap-2 flex-wrap"},[C({content:"This is a tooltip.",position:"top-right"},[i("Hover me")])])],code:`Tooltip({ content: 'This is a tooltip.', position: 'top-right' }, [
    Button('Hover me')
])`}),a({title:"Top-Left Tooltip",description:"This will show the tooltip at the top-left of the target element.",preview:[o({class:"flex gap-2 flex-wrap"},[C({content:"This is a tooltip.",position:"top-left"},[i("Hover me")])])],code:`Tooltip({ content: 'This is a tooltip.', position: 'top-left' }, [
    Button('Hover me')
])`}),a({title:"Bottom-Right Tooltip",description:"This will show the tooltip at the bottom-right of the target element.",preview:[o({class:"flex gap-2 flex-wrap"},[C({content:"This is a tooltip.",position:"bottom-right"},[i("Hover me")])])],code:`Tooltip({ content: 'This is a tooltip.', position: 'bottom-right' }, [
    Button('Hover me')
])`}),a({title:"Bottom-Left Tooltip",description:"This will show the tooltip at the bottom-left of the target element.",preview:[o({class:"flex gap-2 flex-wrap"},[C({content:"This is a tooltip.",position:"bottom-left"},[i("Hover me")])])],code:`Tooltip({ content: 'This is a tooltip.', position: 'bottom-left' }, [
    Button('Hover me')
])`}),a({title:"Left Tooltip",description:"This will show the tooltip to the left of the target element.",preview:[o({class:"flex gap-2 flex-wrap"},[C({content:"This is a tooltip.",position:"left"},[i("Hover me")])])],code:`Tooltip({ content: 'This is a tooltip.', position: 'left' }, [
    Button('Hover me')
])`}),a({title:"Right Tooltip",description:"This will show the tooltip to the right of the target element.",preview:[o({class:"flex gap-2 flex-wrap"},[C({content:"This is a tooltip.",position:"right"},[i("Hover me")])])],code:`Tooltip({ content: 'This is a tooltip.', position: 'right' }, [
    Button('Hover me')
])`}),d({class:"text-muted-foreground text-sm mt-4"},"The tooltip position can be set to: top, top-right, top-left, bottom, bottom-right, bottom-left, left, right.")]),de=(e,t,s)=>(s="Icons"+(s?"."+s:""),o({class:"flex flex-auto flex-col items-center gap-2 max-w-[150px] h-[8.5rem] cursor-pointer"},[o({class:"flex flex-auto w-full h-full justify-center items-center flex-wrap rounded-lg border bg-card text-base shadow-sm hover:bg-accent hover:text-accent-foreground",click:()=>{navigator.clipboard.writeText(`${s}.${t}`)}},[S(e)]),o({class:"text-muted-foreground"},t)])),Pe=(e,t,s)=>{const n=typeof e=="object";n&&t.push(d({class:"text-muted-foreground"},"path: "+s+".{icon}"));const c=[];if(t.push(o({class:"flex flex-auto flex-wrap gap-2 my-8"},c)),n===!1)c.push(de(e,s));else for(var h in e){if(e.hasOwnProperty(h)===!1)continue;const I=e[h];if(typeof I!="object"){c.push(de(I,h,s));continue}const Ee=`${s}.${h}`;Pe(I,t,Ee)}},es=e=>{if(!e||typeof e!="object")return;const t=[];for(let[s,n]of Object.entries(e)){if(s==="parse")continue;t.push(xe({id:s.toLowerCase(),class:"text-2xl font-bold"},ot.titleCase(s))),Pe(n,t,s)}return t},ts=()=>p({title:"Icons",description:"The icons are from the Hericon library. They are SVG icons that can be used in your project. This icon set uses the outline style."},[x({href:"https://heroicons.com/",target:"_blank",class:"bttn link"},"link: Hericons"),a({title:"Icons",description:"This is an icon.",preview:[B({html:l.home})],code:`
import { Icons } from '@components/icons/icons.js';
import { I } from '@base-framework/atoms';

export const HomeIcon = () => (
    I({ html: Icons.home} )
);`}),o({class:"my-20"},[q({class:"text-2xl font-bold"},"Default Icons"),d({class:"text-muted-foreground"},'A few of the icons have been saved to the "Icons" object. You can use these icons in your project. Click to copy the Icon path. Here is a list of the icons that are available:')]),a({title:"Icon Atom",description:"An Icon is a helper atom that makes it easier to use icons in your project. ",preview:[S(l.home)],code:`
import { Icon } from '@components/atoms/icon.js';

Icon(Icons.home);`}),o({class:"my-20"},[q({class:"text-2xl font-bold"},"Default Icons"),d({class:"text-muted-foreground"},'A few of the icons have been saved to the "Icons" object. You can use these icons in your project. Click to copy the Icon path. Here is a list of the icons that are available:')]),es(l)]),os=()=>p({title:"Introduction",description:"The App Shell is a versatile and modular framework, designed to speed up front-end application development using Tailwind CSS and Shadcn-inspired themes. It provides a comprehensive set of components and atoms, created with the Base framework."},[w({class:"space-y-4"},[v({class:"text-lg font-bold"},"The App Shell"),d({class:"text-muted-foreground"},[r("The App Shell project is built to streamline front-end application development. As a modular and scalable PWA (Progressive Web App), it offers easy installation across devices, making it suitable as a foundational framework for new projects.")]),d({class:"text-muted-foreground"},[r("Designed with accessibility, customization, and ease of use in mind, the App Shell accelerates setup, allowing developers to focus on creating functionality without reinventing the wheel.")])]),o({class:"items-start justify-center gap-6 rounded-lg pt-0 md:p-8 md:border md:rounded-md md:mt-6 md:grid lg:grid-cols-2 xl:grid-cols-2"},[o({class:"col-span-2 grid items-start gap-6 lg:col-span-1"},[ke(),je(),Te()]),o({class:"col-span-2 grid items-start gap-6 lg:col-span-1"},[De({members:[{name:"Leslie Alexander",email:"leslie.alexander@example.com",image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"owner",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Michael Foster",email:"michael.foster@example.com",image:"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"member",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Dries Vincent",email:"dries.vincent@example.com",image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"owner",status:"online"}]}),Ie({link:"http://example.com/link/to/document",people:[{name:"Leslie Alexander",email:"leslie.alexander@example.com",image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"owner",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Michael Foster",email:"michael.foster@example.com",image:"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"member",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Dries Vincent",email:"dries.vincent@example.com",image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"owner",status:"online"}]}),Se({startDate:"2023-01-23"}),Be()])]),w({class:"space-y-4 mt-12"},[v({class:"text-lg font-bold"},"Theme and Styling"),d({class:"text-muted-foreground"},[r("This project is powered by Tailwind CSS, providing a highly customizable, utility-first approach to styling. Additionally, the theme draws inspiration from "),x({href:"https://github.com/shadcn",class:"underline",target:"_blank"},"Shadcn’s UI component library"),r(", combining best practices for consistency and flexibility.")])]),w({class:"space-y-4 mt-12"},[v({class:"text-lg font-bold"},"Icons"),d({class:"text-muted-foreground"},[r("This project utilizes Heroicons, a comprehensive icon set provided by the Tailwind Labs team. These icons are fully customizable and designed to fit seamlessly within Tailwind-based applications.")]),d({class:"text-muted-foreground"},[r("For more details on available icons, visit the "),x({href:"https://heroicons.com",class:"underline",target:"_blank"},"Heroicons website"),r(".")])]),w({class:"space-y-4 mt-12"},[v({class:"text-lg font-bold"},"Components and Atoms"),d({class:"text-muted-foreground"},[r("Leveraging the Base framework, this project provides a comprehensive set of reusable components and atoms. Inspired by projects like "),x({href:"https://github.com/shadcn/ui",class:"underline",target:"_blank"},"shadcn/ui"),r(", the components are crafted to balance flexibility and simplicity, allowing developers to integrate pre-designed elements or customize them as needed.")]),d({class:"text-muted-foreground"},[r("You can explore components like "),x({href:"/docs/components/buttons",class:"underline"},"Buttons"),r(", "),x({href:"/docs/components/tabs",class:"underline"},"Tabs"),r(", and "),x({href:"/docs/components/forms",class:"underline"},"Forms"),r(" to quickly build complex UIs without starting from scratch.")])]),w({class:"space-y-4 mt-12"},[v({class:"text-lg font-bold"},"Development Guidelines"),d({class:"text-muted-foreground"},[r("Modules are an essential part of the App Shell's extensibility. You can add new features by creating modules in the modules folder and registering them in the "),x({href:"/docs/imported-modules",class:"underline"},"imported-modules.js"),r(" file. This structure supports modularity, making it easier to maintain and scale projects.")]),d({class:"text-muted-foreground"},[r("Each module includes its own routes, links, and options, as demonstrated in the example provided. This architecture ensures that modules are self-contained and can be easily integrated into any project using the App Shell framework.")]),ve(`import { Icons } from '@components/icons/icons.js';
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
});`)]),w({class:"space-y-4 mt-12"},[v({class:"text-lg font-bold"},"Contributors and Community"),d({class:"text-muted-foreground"},[r("The App Shell is an open-source project, and contributions from the community are welcome. The project is maintained by a dedicated team of developers who aim to continuously enhance its functionality.")]),d({class:"text-muted-foreground"},[r("For information on contributing, check the "),x({href:"https://github.com/chrisdurfee/next-app-shell",class:"underline",target:"_blank"},"GitHub repository"),r(" and join the community discussions to collaborate and innovate.")])])]),ss=e=>o({class:"flex flex-auto flex-col items-center gap-2 max-w-[150px] h-[8.5rem] cursor-pointer"},[o({class:`flex flex-auto w-full h-full min-h-[136px] justify-center items-center flex-wrap rounded-lg border text-base shadow-sm ${e.class}`,click:()=>{navigator.clipboard.writeText(`${e.class}`)}}),o({class:"text-sm text-muted-foreground"},e.var)]),b=(e,t)=>w({class:"flex flex-auto flex-col gap-2"},[d({class:"text-base text-muted-foreground"},e),o({class:"flex flex-auto flex-wrap gap-2 my-2",map:[t,ss]})]),as=e=>o({class:"flex flex-auto flex-col gap-12"},[xe({class:"text-2xl font-bold"},"Color Guide"),b("Default background color of <body />...etc",[{var:"--backround",class:"bg-backround"},{var:"--foreground",class:"bg-foreground"}]),b("Muted backgrounds such as <TabsList />, <Skeleton /> and <Switch />",[{var:"--muted",class:"bg-muted"},{var:"--muted-foreground",class:"bg-muted-forground"}]),b("Background color for <Card />",[{var:"--card",class:"bg-card"},{var:"--card-foreground",class:"bg-card-foreground"}]),b("Background color for popovers such as <DropdownMenu />, <HoverCard />, <Popover />",[{var:"--popover",class:"bg-popover"},{var:"--popover-foreground",class:"bg-popover-foreground"}]),b("Default border color",[{var:"--border",class:"bg-border"}]),b("Border color for inputs such as <Input />, <Select />, <Textarea />",[{var:"--input",class:"bg-input"}]),b("Primary colors for <Button />",[{var:"--primary",class:"bg-primary"},{var:"--primary-foreground",class:"bg-primary-foreground"}]),b("Secondary colors for <Button />",[{var:"--secondary",class:"bg-secondary"},{var:"--secondary-foreground",class:"bg-secondary-foreground"}]),b("Used for accents such as hover effects on <DropdownMenuItem>, <SelectItem>...etc",[{var:"--accent",class:"bg-accent"},{var:"--accent-foreground",class:"bg-accent-foreground"}]),b('Used for destructive actions such as <Button variant="destructive">',[{var:"--destructive",class:"bg-destructive"},{var:"--destructive-foreground",class:"bg-destructive-foreground"}]),b('Used for warning actions such as <Button variant="warning">',[{var:"--warning",class:"bg-warning"},{var:"--warning-foreground",class:"bg-warning-foreground"}]),b("Used for focus ring",[{var:"--ring",class:"bg-ring"}]),b("Border radius for card, input and buttons",[{var:"--radius",class:"bg-radius"}])]),ns=()=>p({title:"Theme",description:"The theme is using Tailwind CSS and is based on Shadcn UI. The theme is customizable and can be extended. It comes with light and dark theme support."},[x({href:"https://ui.shadcn.com/docs/theming",target:"_blank",class:"bttn link"},"link: Shadcn"),o({class:"my-20"},[q({class:"text-2xl font-bold"},"Default Styles"),d({class:"text-muted-foreground"},"The default styles are defined in the Tailwind CSS configuration file and in the base CSS file. Here's the list of variables available for customization:")]),as(),o({class:"flex flex-auto flex-col gap-2 mt-20"},[v({class:"text-2xl font-bold"},"Text Sizes"),d({class:"text-muted-foreground text-3xl"},"Text-3xl A test sentence."),d({class:"text-muted-foreground text-2xl"},"Text-2xl A test sentence."),d({class:"text-muted-foreground text-xl"},"Text-xl A test sentence."),d({class:"text-muted-foreground text-lg"},"Text-lg A test sentence."),d({class:"text-muted-foreground text-base"},"Text-base A test sentence."),d({class:"text-muted-foreground text-sm"},"Text-sm A test sentence."),d({class:"text-muted-foreground text-xs"},"Text-xs A test sentence.")])]),u=(e,t,s)=>({uri:e,title:t,component:s()}),rs=e=>[u(`${e}`,"Introduction",os),u(`${e}/theme`,"Theme",ns),u(`${e}/icons`,"Icons",ts),u(`${e}/components/buttons*`,"Buttons",Ct),u(`${e}/components/badges*`,"Badges",bt),u(`${e}/components/tabs*`,"Tabs",Ko),u(`${e}/components/modals*`,"Modals",Uo),u(`${e}/components/notifications*`,"Notifications",Go),u(`${e}/components/dialogs*`,"Modals",vo),u(`${e}/components/cards*`,"Cards",Kt),u(`${e}/components/calendars*`,"Calendars",jt),u(`${e}/components/avatars*`,"Avatars",ft),u(`${e}/components/inputs*`,"Inputs",No),u(`${e}/components/forms*`,"Forms",Lo),u(`${e}/components/alerts*`,"Alerts",pt),u(`${e}/components/comboboxes*`,"Comboboxes",ao),u(`${e}/components/lists*`,"Lists",Oo),u(`${e}/components/data-tables*`,"Data Tables",po),u(`${e}/components/breadcrumbs*`,"Breadcrumbs",Tt),u(`${e}/components/navigations*`,"Navigations",Vo),u(`${e}/components/progress-bars*`,"Progress Bars",Qo),u(`${e}/components/skeletons*`,"Skeletons",Yo),u(`${e}/components/tooltips*`,"Tooltips",Xo),u(`${e}/components/dropdown-menus*`,"Dropdown Menus",Ao)],is=e=>[{href:`${e}`,label:"Introduction",exact:!0},{href:`${e}/theme`,label:"Theme",exact:!0},{href:`${e}/icons`,label:"Icons"},{group:"Components",options:[{label:"Buttons",href:`${e}/components/buttons`},{label:"Badges",href:`${e}/components/badges`},{label:"Tabs",href:`${e}/components/tabs`},{label:"Modals",href:`${e}/components/modals`},{label:"Notifications",href:`${e}/components/notifications`},{label:"Dialogs",href:`${e}/components/dialogs`},{label:"Cards",href:`${e}/components/cards`},{label:"Calendars",href:`${e}/components/calendars`},{label:"Avatars",href:`${e}/components/avatars`},{label:"Inputs",href:`${e}/components/inputs`},{label:"Forms",href:`${e}/components/forms`},{label:"Alerts",href:`${e}/components/alerts`},{label:"Comboboxes",href:`${e}/components/comboboxes`},{label:"Lists",href:`${e}/components/lists`},{label:"Data Tables",href:`${e}/components/data-tables`},{label:"Breadcrumbs",href:`${e}/components/breadcrumbs`},{label:"Navigations",href:`${e}/components/navigations`},{label:"Progress Bars",href:`${e}/components/progress-bars`},{label:"Skeletons",href:`${e}/components/skeletons`},{label:"Tooltips",href:`${e}/components/tooltips`},{label:"Dropdown Menus",href:`${e}/components/dropdown-menus`}]}],ls=()=>new Le({backHref:"aside/"},[new O([o([A([ue("Overlay")]),o({class:"contained"},[st()])])])]),cs=e=>[{uri:`${e}/overlay-test`,component:ls()}],R="docs",us=()=>new He({title:"Documentation",basePath:R,routes:cs(R),switch:rs(R),links:is(R)});export{us as DocumentationPage,us as default};
