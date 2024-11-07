import{O as ye,A as ke}from"./overlay-BX0ahqAb.js";import{w as R,m as s,R as H,a as le,D as K,H as J,b as D,X as c,p as Te,c as Ce,U as k,I as M,S as p,B as Se,d as Ie,C as ce,A as Be,e as r,f as je,y as f,g as x,h as z,T as Q,i,j as O,L as De,k as ue,l as ee,u as E,q as y,n as me,t as Ae,o as W,v as Fe,r as C,s as L,O as $e,z as Pe,Z as Me,x as de,J as te,E as Ee,K as F,M as Le,N as pe,V as fe,Q as V,W as Y,Y as _,$ as Ne,a0 as q,a1 as Re,a2 as He,a3 as ze,a4 as Oe,P,a5 as be,a6 as Ue,G as qe}from"./index-D1H6BB8_.js";const Ge=e=>J({class:"inline-flex flex-auto items-center justify-center whitespace-nowrap rounded-sm text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",dataSet:["selected",["state",e.value,"active"]]},[D({class:"flex flex-auto justify-center items-center px-3 py-1.5",onSet:["selected",{selected:e.value}],click:t=>e.callBack(e.value)},e.label)]),We=(e,t)=>(e.callBack=t,Ge(e)),Ve=e=>le({class:`tab items-center justify-center rounded-md bg-muted p-1 text-muted-foreground ${e.class}`},[K({class:"flex flex-auto flex-row",map:[e.options,t=>We(t,e.callBack)]})]);class ge extends R{render(){const t=this.select.bind(this);return s({class:""},[Ve({class:this.class,options:this.options,callBack:t}),H({class:"tab-content",onState:["selected",this.updateContent.bind(this)]})])}getFirstValue(){var t;return(t=this.options[0])==null?void 0:t.value}update(){const t=this.state.get("selected");this.select(null),this.select(t)}select(t){this.state.selected=t}updateContent(t){const o=this.options;if(!o||o.length<1)return;const n=o[0];for(const l of o)if(l.value===t)return l.layout;return n.layout}setupStates(){const t=this.callBack,o=typeof t;return{selected:{state:this.getFirstValue(),callBack(n){o==="function"&&t(n)}}}}}const Ye=c((e,t)=>Te({class:"flex p-4 min-h-[350px] max-h-[650px] overflow-x-auto rounded-lg border bg-muted whitespace-break-spaces cursor-pointer"},[Ce({class:"font-mono text-sm",click:()=>navigator.clipboard.writeText(t[0].textContent)},t)])),_e=c((e,t)=>s({class:"flex p-4 min-h-[350px] max-h-[650px] overflow-x-auto rounded-lg border bg-card"},[s({class:"preview flex w-full justify-center items-center"},t)])),oe=c((e,t)=>s({class:"py-4"},t)),Ke=e=>new ge({class:"mt-4 max-w-[400px]",options:[{label:"Preview",value:"preview",layout:oe([_e(e.preview)])},{label:"Code",value:"code",layout:oe([Ye(e.code)])}]}),Je=c(({title:e,description:t})=>k({class:"flex flex-col"},[M({class:"scroll-m-20 text-2xl font-bold tracking-tight"},e),t&&p({class:"text-base text-muted-foreground py-2 max-w-[700px]"},t)])),a=c((e,t)=>H({class:"py-4"},[Je({title:e.title,description:e.description}),Ke({preview:e.preview,code:e.code})]));class Qe extends Se{render(){return Ie([s({class:"contained px-4 flex flex-auto flex-col"},this.children)])}}const Xe=c(({title:e,description:t})=>k({class:"flex flex-col"},[ce({class:"scroll-m-20 text-3xl font-bold tracking-tight"},e),p({class:"text-base text-muted-foreground py-2 max-w-[700px]"},t)])),Ze=c((e,t)=>s({class:"contained py-8"},[Xe(e),H({class:"pb-12 pt-8"},t)])),d=c((e,t)=>new Qe([Ze(e,t)])),et=()=>d({title:"Alerts",description:"Alerts are used to provide feedback to the user about the outcome of an action or to inform them of important information."},[a({title:"Usage",description:"To use the Alert component, import it from the components library and use it in your application.",preview:[Be({title:"Heads up!",description:"You can add components to your app using the cli.",icon:r.information})],code:`import { Alert } from "@components/molecules/alert.js";
import { Icons } from "@components/icons/icons.js";

Alert({
    title: 'Heads up!',
    description: 'You can add components to your app using the cli.',
    icon: Icons.information
})`})]),tt=()=>d({title:"Cards",description:"Cards are a great way to display content in a concise and organized manner."},[a({title:"Usage",description:"Import the card atom and use it in your components. The avatar can be set to multiple sizes: xs, sm, lg, xl, 2xl, 3xl.",preview:[je({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN"})],code:`import { Button } from '@components/atoms/cards/card.js';

Avatar({
    src: 'https://github.com/shadcn.png',
    alt: '@shadcn',
    fallbackText: 'CN',
    size: 'md' // You can change the size to xs, sm, lg, xl, 2xl, 3xl
})`})]),se={gray:{backgroundColor:"bg-gray-50",textColor:"text-gray-600",ringColor:"ring-gray-500/10"},red:{backgroundColor:"bg-red-50",textColor:"text-red-700",ringColor:"ring-red-600/10"},yellow:{backgroundColor:"bg-yellow-50",textColor:"text-yellow-800",ringColor:"ring-yellow-600/20"},green:{backgroundColor:"bg-green-50",textColor:"text-green-700",ringColor:"ring-green-600/20"},blue:{backgroundColor:"bg-blue-50",textColor:"text-blue-700",ringColor:"ring-blue-700/10"},indigo:{backgroundColor:"bg-indigo-50",textColor:"text-indigo-700",ringColor:"ring-indigo-700/10"},purple:{backgroundColor:"bg-purple-50",textColor:"text-purple-700",ringColor:"ring-purple-700/10"},pink:{backgroundColor:"bg-pink-50",textColor:"text-pink-700",ringColor:"ring-pink-700/10"},primary:{backgroundColor:"bg-primary",textColor:"text-primary-foreground",ringColor:"ring-primary/10"},secondary:{backgroundColor:"bg-secondary",textColor:"text-secondary-foreground",ringColor:"ring-secondary/10"},destructive:{backgroundColor:"bg-destructive",textColor:"text-destructive-foreground",ringColor:"ring-destructive/10"},warning:{backgroundColor:"bg-warning",textColor:"text-warning-foreground",ringColor:"ring-warning/10"},outline:{backgroundColor:"bg-background",textColor:"text-primary",ringColor:"ring-input"},ghost:{backgroundColor:"bg-background",textColor:"text-primary",ringColor:"ring-background"},link:{backgroundColor:"bg-background",textColor:"text-primary",ringColor:"ring-background"}},ot=e=>se[e]||se.gray,st=e=>{const{backgroundColor:t,textColor:o,ringColor:n}=ot(e);return`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors ${t} ${o} ${n}`},b=c((e,t)=>{const o=st(e==null?void 0:e.type);return f({...e,class:o},t)}),at=()=>d({title:"Badges",description:"Badges can be used to display a status or a count."},[a({title:"Badge",description:"This is a badge.",preview:[s({class:"flex gap-2 flex-wrap"},[b({type:"gray"},"Text"),b({type:"red"},"Text"),b({type:"yellow"},"Text"),b({type:"green"},"Text"),b({type:"blue"},"Text"),b({type:"indigo"},"Text"),b({type:"purple"},"Text"),b({type:"pink"},"Text"),b({type:"primary"},"Text"),b({type:"secondary"},"Text"),b({type:"destructive"},"Text"),b({type:"warning"},"Text"),b({type:"outline"},"Text"),b({type:"ghost"},"Text"),b({type:"link"},"Text")])],code:`
import { Button } from '@components/atoms/badges/badges.js';
import { Atom } from '@base-framework/base';

export const PrimaryBadge = Atom((props, children)) => (
    Badge({ ...props, type: 'gray' }, children)
);`})]),nt=(e,t)=>Q({href:e,"aria-current":t==="Breadcrumb"?"page":null,class:"text-muted-foreground hover:text-foreground"},[f(t)]),rt=()=>f({class:"mx-2 text-muted-foreground","aria-hidden":!0,html:">"}),it=e=>s({class:"flex items-center"},[e.href?nt(e.href,e.label):f(e.label),e.separator&&rt()]),lt=x({setData(){return new z({items:this.items||[]})},render(){return le({"aria-label":"Breadcrumb",class:"flex items-center space-x-1 text-sm"},[s({role:"list",class:"flex items-center",for:["items",(e,t)=>it({href:e.href,label:e.label,separator:t<this.data.items.length-1})]})])}}),ct=[{href:"/",label:"Home"},{href:"/components",label:"Components"},{label:"Breadcrumb"}],ut=()=>d({title:"Breadcrumbs",description:"Breadcrumbs are a navigation aid that helps users understand their location within a website or application."},[a({title:"Usage",description:"To use the Breadcrumb component, import it and provide an array of items. Each item can have a label and an optional href.",preview:[new lt({items:ct})],code:`import { Breadcrumb } from "@components/molecules/breadcrumb/breadcrumb.js";

new Breadcrumb({ items: [
    { href: '/', label: 'Home' },
    { href: '/components', label: 'Components' },
    { label: 'Breadcrumb' } // Last item, no href needed
] })`})]),mt=()=>d({title:"Button",description:"Displays a button or a component that looks like a button."},[a({title:"Usage",description:"Import the button atom and use it in your components. This platform has variants for different use cases. The variant can be set using the `variant` prop.",preview:[i({variant:"primary"},"Click Me")],code:`import { Button } from '@components/atoms/buttons/buttons.js';

Button({ ...props, variant: 'secondary' }, primary)`}),k({class:"flex flex-col py-8"},[O({class:"text-3xl font-bold tracking-tight border-b pb-2"},"Variants")]),a({title:"Primary Button",description:"This is a primary button.",preview:[i({variant:"primary"},"Click Me")],code:`
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
);`}),a({title:"Icon Button",description:"Displays a button with an icon.",preview:[i({variant:"icon",icon:r.home})],code:`import { Button } from '@components/atoms/buttons/buttons.js';
import { Icons } from '@components/icons/icons.js';
import { Atom } from '@base-framework/base';

export const IconButton = Atom((props) => (
    Button({ ...props, variant: 'icon', icon: Icons.home })
);`}),a({title:"With Icon Button",preview:[i({variant:"withIcon",icon:r.home},"With Icon")],code:`import { Button } from '@components/atoms/buttons/buttons.js';
import { Icons } from '@components/icons/icons.js';

Button({ variant: 'withIcon', icon: Icons.home }, 'With Icon')`}),a({title:"Loading Button",preview:[De("With Icon")],code:`import { LoadingButton } from '@components/atoms/buttons/buttons.js';

LoadingButton('With Icon')`})]),dt=()=>E.formatTime("",24),pt=()=>d({title:"Calendars",description:"This is the calendar component documentation."},[a({title:"Usage",description:"This is how you can use the calendar component.",preview:[new ue],code:`@components/organisms/calendar/calendar.js';

new Calendar()`}),a({title:"Dynamic Time",description:"This is how you can use the calendar component.",preview:[new ee({filter:()=>{let e="Morning";const t=dt();return t>="18:00:00"?e="Evening":t>="12:00:00"&&(e="Afternoon"),`Good ${e}`}})],code:`import { DateTime } from "@base-framework/base";
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
})`}),a({title:"Dynamic Local Time by Time Frame",description:"This will show the time frame based on the local time. This will update the time frame every minute to keep the time frame updated.",preview:[new ee({dateTime:"2024-11-04T18:00:00",filter(e){const t=E.getLocalTime(e,!0);return E.getTimeFrame(t)}})],code:`import { DateTime } from "@base-framework/base";
import { DynamicTime } from "@base-framework/organisms";

new DynamicTime({
    dateTime: '2024-11-04T18:00:00',
    filter(date)
    {
        // convert to local time
        const localTime = DateTime.getLocalTime(date, true);
        return DateTime.getTimeFrame(localTime);
    }
})`})]),X=c((e,t)=>s({...e,class:`rounded-lg border bg-card text-card-foreground shadow-md min-w-[120px] min-h-[80px] my-5 mx-5 p-4 ${e.class||""}`},t)),j=c((e,t)=>{var o;return y({...e,html:(o=t[0])==null?void 0:o.textContent})}),ft=c((e,t)=>s({...e,class:"space-y-2"},t)),bt=c((e,t)=>me({...e,class:"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"},t)),gt=c((e,t)=>p({...e,class:"text-sm text-muted-foreground"},t)),ht=c((e,t)=>p({...e,class:"text-sm text-destructive"},t)),xt=e=>e.tag==="input"||e.tag==="select"||e.tag==="textarea",wt=c((e,t)=>{const o=u=>{e.setError(u.target.validationMessage)},n=u=>{u.target.checkValidity()&&e.setError(null)},l=t.map(u=>u.required&&xt(u)?{...u,aria:{invalid:["hasError"]},invalid:o,input:n}:u);return s({...e,class:"w-full"},l)}),g=x({state(){return{error:null,hasError:!1,value:this.defaultValue??""}},render(){const e=this.name,t=this.getId(`${e}`),{label:o,description:n}=this,l=u=>{this.state.error=u,this.state.hasError=!!u};return s({class:"space-y-4"},[ft([bt({htmlFor:t},o),wt({id:t,name:e,value:this.state.value,setError:l},this.children),n&&gt({id:this.getId("description")},n),s({onState:["error",u=>u&&ht(u)]})])])}}),vt=(e,t=null)=>{e.target.checkValidity()&&(e.preventDefault(),t&&t(e))},S=c((e,t)=>Ae({...e,submit:o=>vt(o,e.submit),class:"space-y-8 w-full max-w-lg"},t)),he=({title:e,description:t})=>k({class:"text-left"},[O({class:"font-semibold tracking-tight text-2xl"},e),p({class:"text-sm text-muted-foreground"},t)]),yt=()=>s({class:"flex items-center justify-center gap-4"},[i({variant:"outline",class:"gap-2 w-full",click:()=>console.log("Sign in with Github"),"aria-label":"Sign in with Github"},[j(r.companies.gitHub),f("Github")]),i({variant:"outline",class:"gap-2 w-full",click:()=>console.log("Sign in with Google"),"aria-label":"Sign in with Google"},[j(r.companies.google),f("Google")])]),kt=()=>S({submit:e=>{e.preventDefault(),console.log("Account created")}},[new g({name:"email",label:"Email"},[W({type:"email",placeholder:"m@example.com",required:!0,class:"border p-2 rounded-md w-full bg-background placeholder-muted-foreground text-foreground"})]),new g({name:"password",label:"Password"},[W({type:"password",placeholder:"Your password",required:!0,class:"border p-2 rounded-md w-full bg-background placeholder-muted-foreground text-foreground"})]),i({type:"submit",class:"w-full mt-4 py-2 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition"},"Create account")]),Tt=()=>X({class:"w-full max-w-md mx-auto p-8 bg-card space-y-6"},[he({title:"Create an account",description:"Enter your email below to create your account"}),yt(),s({class:"relative"},[s({class:"absolute inset-0 flex items-center"},[f({class:"flex-grow border-t"})]),s({class:"relative flex justify-center text-xs uppercase"},[f({class:"bg-background px-2 text-muted-foreground"},"or continue with")])]),kt()]),N=c(e=>({tag:"select",...e,class:`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${e.class||""}`,onCreated(t){e.options&&Fe.setupSelectOptions(t,e.options)}})),G=c(({value:e,label:t,icon:o})=>i({class:"inline-flex flex-auto items-center justify-center whitespace-nowrap rounded-md px-8 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",onState:["method",{active:e}],dataSet:["method",["state",e,"active"]],click:(n,{state:l})=>l.performance=e},[j(o),f(t)])),Ct=x({render(){return s({class:"flex flex-auto flex-col"},[s({class:"grid grid-cols-3 gap-4"},[G({label:"Card",value:"card",icon:r.creditCard}),G({label:"Paypal",value:"paypal",icon:r.companies.paypal}),G({label:"Apple",value:"apple",icon:r.companies.apple})])])},state(){return{method:null}}}),St=()=>s({class:"flex items-center justify-center gap-4"},[new Ct]),It=()=>S({submit:e=>{e.preventDefault(),console.log("Payment method added")}},[new g({name:"name",label:"Name"},[C({type:"text",placeholder:"First Last",required:!0,class:"border p-2 rounded-md w-full bg-background placeholder-muted-foreground text-foreground"})]),new g({name:"card_number",label:"Card number"},[C({type:"text",placeholder:"1234 5678 9012 3456",required:!0,class:"border p-2 rounded-md w-full bg-background placeholder-muted-foreground text-foreground"})]),s({class:"flex gap-4 mt-4"},[new g({name:"month",label:"Expires"},[N({required:!0,class:"border p-2 rounded-md w-full bg-background text-foreground",options:[{value:"",label:"Month",disabled:!0},...Array.from({length:12},(e,t)=>({value:`${t+1}`,label:`${t+1}`.padStart(2,"0")}))]})]),new g({name:"year",label:"Year"},[N({required:!0,class:"border p-2 rounded-md w-full bg-background text-foreground",options:[{value:"",label:"Year",disabled:!0},...Array.from({length:10},(e,t)=>({value:`${new Date().getFullYear()+t}`,label:`${new Date().getFullYear()+t}`}))]})]),new g({name:"cvc",label:"CVC"},[C({type:"text",placeholder:"CVC",required:!0,class:"border p-2 rounded-md w-full bg-background placeholder-muted-foreground text-foreground"})])]),i({type:"submit",class:"w-full mt-4 py-2 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition"},"Continue")]),Bt=()=>X({class:"w-full max-w-md mx-auto p-8 bg-card space-y-6"},[he({title:"Payment Method",description:"Add a new payment method to your account."}),St(),s({class:"space-y-4"},[It()])]),jt=()=>d({title:"Cards",description:"Cards are a great way to display content in a concise and organized manner."},[a({title:"Usage",description:"Import the card atom and use it in your components.",preview:[X()],code:`import { Button } from '@components/atoms/cards/card.js';

Card()`}),L({class:"text-lg font-bold"},"Examples"),p({class:"text-muted-foreground"},"This is a list of examples of how to use the card component in your application."),a({title:"Account Card",preview:[Tt()],code:`import AccountCard from "./examples/account-card.js";

AccountCard()`}),a({title:"Paymnet Card",preview:[Bt()],code:`import AccountCard from "./examples/payment-card.js";

PaymentCard()`})]),Dt=(e,t)=>J({class:"flex flex-auto items-center cursor-pointer p-2 hover:bg-secondary rounded-sm",click:()=>t(e),onState:["selectedValue",{"bg-secondary":e.value}]},[e.icon&&f({class:"mr-2 flex items-baseline"},[y({class:"flex w-4 h-4",html:e.icon})]),f(e.label)]),At=e=>s({class:"absolute border rounded-md shadow-lg mt-1 w-full z-10"},[K({class:"max-h-60 overflow-y-auto p-2 grid gap-1",for:["items",t=>Dt(t,e)]})]),Ft=(e,t)=>!t.contains(e),$t=x({setData(){return new z({items:this.items||[]})},state:{open:!1,selectedLabel:"",selectedValue:""},render(){const e=(o,{state:n})=>n.toggle("open"),t=o=>{const n=this.state;n.selectedValue=o.value,n.selectedLabel=o.label,n.open=!1};return s({class:"relative w-[200px]"},[D({class:"inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-[200px] justify-between",click:e,addEvent:["click",document,(o,{state:n,panel:l})=>{Ft(o.target,l)&&(n.open=!1)}]},[f({onState:["selectedLabel",o=>o||"Select item..."]}),y({html:r.chevron.upDown})]),s({class:"felx flex-auto flex-col",onState:["open",o=>o?At(t):null]})])}}),Pt=[{value:"next.js",label:"Next.js",icon:r.home},{value:"sveltekit",label:"SvelteKit"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}],Mt=()=>d({title:"Comboboxes",description:"Comboboxes are used to allow users to select an option from a dropdown list or enter a custom value."},[a({title:"Usage",description:"To use the Combobox component, import it from the components library and use it in your application.",preview:[new $t({items:Pt})],code:`@components/molecules/combobox/combobox.js';
import { Icons } from "@components/icons/icons.js";

new Combobox({
    items: [
    { value: 'next.js', label: 'Next.js', icon: Icons.home },,
    { value: 'sveltekit', label: 'SvelteKit' },
    { value: 'nuxt.js', label: 'Nuxt.js' },
    { value: 'remix', label: 'Remix' },
    { value: 'astro', label: 'Astro' },
],
})`})]),Et=()=>`checkbox-${Math.random().toString(36).substring(2,9)}`,U=x({state(){return{checked:this.checked??!1}},render(){const e=Et();return s({class:`flex items-center space-x-2 cursor-pointer ${this.class}`},[s({class:"relative flex items-center justify-center w-5 h-5 rounded-md transition-colors duration-200 border hover:border-accent-foreground",onState:["checked",{"bg-primary":!0,"text-primary-foreground":!0}],role:"checkbox",aria:{checked:["checked"]},tabIndex:0,click:()=>{this.state.checked=!this.state.checked,typeof this.checked=="function"&&this.checked(this.state.checked)}},[$e({id:e,class:"absolute opacity-0 w-full h-full cursor-pointer",aria:{checked:["checked"]},bind:this.bind,change:t=>{const o=t.target.checked;this.state.checked=o,typeof this.checked=="function"&&this.checked(o)}}),f({class:"absolute text-xs pointer-events-none",onState:["checked",t=>t?y({class:"w-2 h-2 pointer-events-none",html:r.check}):null]})]),this.label&&me({class:"text-base cursor-pointer",htmlFor:e,click:()=>{this.state.toggle("checked"),typeof this.checked=="function"&&this.checked(this.state.checked)}},this.label)])}}),Lt=e=>Me([de({class:"text-muted-foreground border-b",map:[e.headers,t=>{if(t.label==="checkbox")return te({class:"cursor-pointer py-3 px-4 text-base"},[new U({class:"mr-2"})]);const o=t.align||"items-center justify-start";return te({class:"cursor-pointer py-3 px-4 text-base",click:t.sortable&&(()=>e.sort(t.key))},[s({class:`flex flex-auto w-full items-center ${o}`},[f(t.label),t.sortable&&y({class:"ml-2",html:r.arrows.upDown})])])}]})]),Nt=({key:e,rows:t,selectRow:o,rowItem:n})=>new Ee({key:e,items:t,rowItem:l=>n(l,o),class:"divide-y divide-border"}),Rt=x({setData(){return new z({rows:this.rows||[],selectedRows:[]})},selectRow(e){const t=this.data.selectedRows.includes(e)?this.data.selectedRows.filter(o=>o!==e):[...this.data.selectedRows,e];this.data.selectedRows=t},render(){const e=this.data.rows;return s({class:"w-full"},[s({class:"w-full rounded-md border"},[Pe({class:"w-full"},[this.headers&&Lt({headers:this.headers,sort:t=>this.sortRows(t)}),Nt({key:this.key,rows:e,selectRow:this.selectRow.bind(this),rowItem:this.rowItem})])])])}}),Ht=[{label:"checkbox",key:""},{label:"Status",key:"status"},{label:"Email",key:"email"},{label:"Amount",key:"amount",align:"justify-end"}],zt=[{id:1,status:"Success",email:"ken99@yahoo.com",amount:316,selected:!1},{id:2,status:"Success",email:"abe45@gmail.com",amount:242,selected:!1},{id:3,status:"Processing",email:"monserrat44@gmail.com",amount:837,selected:!1},{id:4,status:"Success",email:"silas22@gmail.com",amount:874,selected:!1},{id:5,status:"Failed",email:"carmella@hotmail.com",amount:721,selected:!1}],Ot=(e,t)=>de({class:"items-center px-4 py-2 hover:bg-muted"},[F({class:"p-4 "},[new U({checked:e.selected,class:"mr-2",click:()=>t(e)})]),F({class:"p-4 "},[f({class:"text-muted-foreground"},e.status)]),F({class:"p-4 "},e.email),F({class:"p-4 text-right"},`$${e.amount.toFixed(2)}`)]),Ut=()=>d({title:"Data Tables",description:"Data tables are used to display data in a structured format. They can be used to display a list of items, a grid of items, or a table of items."},[a({title:"Usage",description:"The data table component is used to display data in a structured format. It can be used to display a list of items, a grid of items, or a table of items.",preview:[new Rt({headers:Ht,rows:zt,rowItem:Ot,key:"id"})],code:`import { DataTable } from "@components/organisms/lists/data-table.js";
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
})`})]),qt=e=>Le.render(e,document.body),Gt=({title:e})=>k({class:"flex flex-auto items-center"},[O({class:"text-lg font-semibold"},e)]),Wt=c((e,t)=>pe({class:"flex flex-auto flex-col fixed z-30 w-full max-w-lg gap-4 border bg-background text-foreground p-6 shadow-lg duration-200 sm:rounded-lg",click:e.click,aria:{expanded:["open"]}},[s({class:"flex flex-auto flex-col space-y-2"},[Gt(e),e.description&&p({class:"flex flex-auto flex-col text-sm text-muted-foreground"},e.description),s({class:"flex flex-auto flex-col text-sm text-muted-foreground"},t)]),fe({class:"flex flex-col-reverse sm:flex-row sm:justify-end mt-6 gap-2 sm:gap-0 sm:space-x-2"},e.buttons)]));class Z extends R{render(){const t=l=>{l.target===this.panel&&this.close()},o=this.getMainClass(),n=this.title||"Dialog Title";return Wt({class:o,title:n,click:t,description:this.description,buttons:this.getButtons()},this.children)}getButtons(){return[i({variant:"outline",click:()=>this.close()},"Close")]}setupStates(){return{open:!1}}getMainClass(){return""}open(){qt(this),this.panel.showModal(),this.state.open=!0}close(){this.state.open=!1,this.panel.close(),this.destroy()}}class Vt extends Z{getButtons(){const t=this.confirmTextLabel||"Confirm";return[i({variant:"outline",click:()=>this.close()},"Cancel"),i({variant:"primary",click:()=>this.confirm()},t)]}confirm(){this.confirmed&&this.confirmed(),this.close()}}const Yt=c((e,t)=>i({text:"Open",class:"m-1",click:()=>new Z(e,t).open()})),_t=e=>i({text:"Open",class:"m-1",click:()=>new Vt(e).open()}),Kt=()=>d({title:"Dialogs",description:"Displays a dialog or a component that looks like a dialog. Dialogs can be opened and closed. They will be closed if the user clicks outside of the dialog or if the user clicks the close button."},[a({title:"Usage",description:"Import the dialog atom and use it in your components.",preview:[Yt({title:"Title",description:"this is the description."},[])],code:`import { Dialog } from '@components/molecules/dialogue.js';

new Dialog({
    title: '',
    description: ''
}, [

]).open()`}),a({title:"Confirmation",description:"Displays a confirmation dialog.",preview:[_t({title:"Are you absoultely sure?",description:"This action cannot be undone. This will permanently delete your account and remove your data from our servers.",confirmTextLabel:"Save",confirmed:()=>console.log("Confirmed!")})],code:`import { Confirmation } from '@components/molecules/dialogs/confirmation.js';

new Confirmation({
    title: 'Are you absoultely sure?',
    description: 'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
    confirmTextLabel: 'Save',
    confirmed: () => console.log('Confirmed!')
}).open()`})]);class Jt extends R{setData(){return this.parent.data}render(){return s({class:"absolute mt-2 border rounded-md shadow-lg bg-popover z-30 w-[250px]",style:"top: [[position.y]]px; left: [[position.x]]px"},this.children)}setupStates(){return{open:{id:this.parent.getId(),callBack:n=>{this.state.open===!1&&this.destroy()}}}}isOutsideClick(t){return!this.panel.contains(t)&&this.button&&!this.button.contains(t)}setupEvents(){return[["click",document,t=>{this.isOutsideClick(t.target)&&(this.state.open=!1)}]]}setup(t){this.container=document.body,this.initialize()}}const Qt=e=>f({class:"ml-auto text-xs tracking-widest opacity-60"},e),Xt=e=>f({class:"flex w-4 h-4",html:e}),Zt=e=>f({class:"flex-auto"},e),eo=(e,t)=>J({class:"relative flex cursor-pointer hover:bg-accent hover:text-accent-foreground select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",click:()=>t(e)},[e.icon&&Xt(e.icon),Zt(e.label),e.shortcut&&Qt(e.shortcut)]),to=(e,t)=>K({class:"grid gap-2"},[e.map(o=>eo(o,t))]),oo=e=>s({class:"w-full z-10"},[s({class:"max-h-60 overflow-y-auto p-1 grid gap-2 divide-y divide-border",for:["groups",t=>to(t,e)]})]),so=({label:e,icon:t,toggleDropdown:o})=>D({cache:"button",class:`inline-flex items-center justify-between rounded-md border border-input
            bg-background px-2 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground
            focus:outline-none transition duration-150 ease-in-out`,click:o},[e&&f(e),t&&y({html:t})]),ao=({onSelect:e})=>s({onState:["open",(t,o,n)=>{if(t)return new Jt({cache:"dropdown",parent:n,button:n.button},[oo(e)])}]});class no extends R{setData(){return new z({groups:this.groups||[],position:{y:0,x:0}})}setupStates(){return{open:!1,selectedItem:null}}toggleDropdown(){this.state.toggle("open"),this.state.open&&this.updatePosition()}updatePosition(){const o=this.button.getBoundingClientRect(),l=this.dropdown.panel.getBoundingClientRect();let u=o.left+window.scrollX,v=o.bottom+window.scrollY;const A=10;u+l.width>window.innerWidth&&(u=window.innerWidth-l.width-A),v+l.height>window.innerHeight&&(v=o.top+window.scrollY-l.height-A),this.data.position={x:u,y:v}}handleSelect(t){this.state.selectedItem=t,this.state.open=!1,typeof this.onSelect=="function"&&this.onSelect(t)}render(){return s({class:"relative"},[so({label:this.label,icon:this.icon,toggleDropdown:this.toggleDropdown.bind(this)}),ao({onSelect:this.handleSelect.bind(this)})])}}const ro=()=>d({title:"Dropdown Menus",description:"Dropdown menus are used to display a list of options when a user clicks on a button or input field."},[a({title:"Usage",description:"To use the DropdownMenu component, import it from the components library and use it in your application.",preview:[new no({icon:r.ellipsis.vertical,groups:[[{icon:r.user.default,label:"Profile",shortcut:"⌘P",value:"profile"},{icon:r.creditCard,label:"Billing",shortcut:"⌘B",value:"billing"},{icon:r.cog.six,label:"Settings",shortcut:"⌘S",value:"settings"},{icon:r.computerDesktop,label:"Keyboard shortcuts",shortcut:"⌘K",value:"shortcuts"}],[{icon:r.user.multiple,label:"Team",value:"team"},{icon:r.user.plus,label:"Invite users",value:"invite"},{icon:r.plus,label:"New Team",shortcut:"⌘T",value:"new_team"}],[{icon:r.github,label:"GitHub",value:"github"},{icon:r.helpCircle,label:"Support",value:"support"},{icon:r.api,label:"API",value:"api"}]],onSelect:e=>{console.log("Selected item:",e)}})],code:`import { Icons } from "@components/icons/icons.js";
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
})`})]),xe=x({state(){return{value:this.value??0,min:this.min??0,max:this.max??100,filledPercentage:this.getFillPercentage(this.value)}},getFillPercentage(e){return(e-this.min)/(this.max-this.min)*100},render(){return s({class:"relative w-full h-4 flex items-center"},[s({class:"absolute h-2 w-full rounded-full bg-muted"}),s({class:"absolute h-2 bg-primary rounded-full",style:"width: [[filledPercentage]]%"}),s({class:"absolute block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transform -translate-x-1/2",style:"left: [[filledPercentage]]%"}),W({type:"range",min:"[[min]]",max:"[[max]]",value:"[[value]]",class:"absolute w-full h-full opacity-0 cursor-pointer",bind:this.bind,input:e=>{const t=Number(e.target.value);this.state.value=t,this.state.filledPercentage=this.getFillPercentage(t),typeof this.change=="function"&&this.change(t)}})])}}),we=x({state(){return{active:this.active??!1}},render(){return D({class:"inline-flex h-6 w-11 items-center rounded-full bg-muted transition-colors focus:outline-none",onState:["active",{"bg-primary":!0,"bg-muted":!1}],click:(t,{state:o})=>o.toggle("active")},[f({class:"absolute h-5 w-5 bg-background rounded-full shadow-md transform transition-transform",onState:["active",{"translate-x-[22px]":!0,"translate-x-[2px]":!1}]})])}}),io=[{value:"next.js",label:"Next.js"},{value:"sveltekit",label:"SvelteKit"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}],lo=()=>S({submit:e=>{console.log("Profile Form submitted")}},[new g({name:"username",label:"Username",description:"This is your public display name."},[C({placeholder:"e.g. username",required:!0})]),new g({name:"email",label:"Email Address",description:"We'll use this to contact you."},[V({placeholder:"e.g. email@address.com",required:!0})]),i({type:"submit"},"Submit")]),co=()=>S({submit:e=>{console.log("Preferences Form submitted")}},[new g({name:"framework",label:"Favorite Framework",description:"Select your preferred framework."},[N({options:io,required:!0})]),new g({name:"newsletter",label:"Subscribe to Newsletter",description:"Stay updated with our latest news."},[new U({label:"Yes, sign me up!"})]),i({type:"submit"},"Save Preferences")]),uo=()=>S({submit:e=>{console.log("Contact Form submitted")}},[new g({name:"phone",label:"Phone Number",description:"We may contact you at this number."},[Y({placeholder:"e.g. +1234567890",required:!0})]),new g({name:"message",label:"Your Message",description:"Let us know how we can help you."},[_({placeholder:"Type your message here...",required:!0})]),i({type:"submit"},"Send Message")]),mo=()=>S({submit:e=>{console.log("Settings Form submitted")}},[new g({name:"notifications",label:"Enable Notifications",description:"Toggle to enable or disable notifications."},[new we({active:!0})]),new g({name:"volume",label:"Volume Level",description:"Set your preferred volume level."},[new xe({min:0,max:100,value:50})]),i({type:"submit"},"Save Settings")]),po=()=>d({title:"Forms",description:"Forms are used to collect user data and submit it to the server."},[a({title:"Profile Form",description:"A simple profile form with username and email fields.",preview:[lo()],code:`import { Button, Input, EmailInput } from "@components/atoms/form/input.js";
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
])`}),a({title:"Preferences Form",description:"A preferences form with a select input and a checkbox.",preview:[co()],code:`import { Button, Checkbox, Select } from "@components/atoms/form/input.js";
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
])`}),a({title:"Contact Form",description:"A contact form with a phone input and a textarea for messages.",preview:[uo()],code:`import { Button, TelInput, Textarea } from "@components/atoms/form/input.js";
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
])`}),a({title:"Settings Form",description:"A settings form with a toggle and a range slider.",preview:[mo()],code:`import { Button, Toggle, RangeSlider } from "@components/atoms/form/input.js";
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
])`})]),fo=(e,t)=>!t.contains(e),bo=x({state(){return{selectedDate:this.selectedDate??null,open:!1}},render(){const e=(o,{state:n})=>n.toggle("open"),t=o=>{this.state.selectedDate=o,this.state.open=!1};return s({class:"relative w-full max-w-[320px]"},[D({class:"flex items-center gap-2 w-full justify-between border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md h-10 px-4 py-2",click:e},[f({onState:["selectedDate",o=>o?E.format("standard",o):"Pick a date"]}),y({html:r.calendar.days})]),s({class:"absolute mt-1 z-10 bg-background rounded-md shadow-lg",addEvent:["click",document,(o,{state:n,panel:l})=>{fo(o.target,l)&&(n.open=!1)}],onState:["open",o=>o?new ue({selectedDate:this.state.selectedDate,selectedCallBack:t}):null]})])}}),go=[{value:"next.js",label:"Next.js"},{value:"sveltekit",label:"SvelteKit"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}],w=c((e,t)=>s({...e,class:"flex flex-auto items-center justify-center w-full max-w-[350px]"},t)),ho=()=>d({title:"Inputs",description:"Inputs are essential for gathering user data in forms."},[a({title:"Usage",description:"Import the input atom and use it in your components. The input can be of various types: text, password, email, etc.",preview:[s({class:"grid gap-2 w-full max-w-[350px]"},[C({type:"text",placeholder:"Enter your text here...",change:e=>console.log(e.target.value)}),V({}),Y({}),_({placeholder:"Enter your text here..."})])],code:`import { Input, EmailInput, TelInput, Textarea } from '@components/atoms/form/input.js';

Input({
    type: 'text',
    placeholder: 'Enter your text here...',
    change: (e) => console.log(e.target.value)
}),
EmailInput({}),
TelInput({}),
Textarea({
    placeholder: 'Enter your text here...'
})`}),a({title:"File Input",description:"This is a file input.",preview:[w([Ne({multiple:!0,change:e=>console.log(e.target.files)})])],code:`import { EmailInput, FileInput, Input, TelInput, Textarea } from "@components/atoms/form/input.js";

FileInput({
    multiple: true,
    change: (e) => console.log(e.target.files)
})`}),a({title:"Radio Input",description:"This is a radio input.",preview:[s({class:"grid gap-2"},[q({name:"theme",label:"System",value:"system"}),q({name:"theme",label:"Light",value:"light"}),q({name:"theme",label:"Dark",value:"dark"})])],code:`import { Radio } from "@components/atoms/form/input.js";
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
])`}),a({title:"Text Input",description:"This is a text input.",preview:[w([C({type:"text",placeholder:"Enter your text here..."})])],code:`
import { EmailInput, FileInput, Input, TelInput, Textarea } from "@components/atoms/form/input.js";

Input({
    type: 'text',
    placeholder: 'Enter your text here...'
})`}),a({title:"Tel Input",description:"This is a phone input.",preview:[w([Y({})])],code:`
import { EmailInput, FileInput, Input, TelInput, Textarea } from "@components/atoms/form/input.js";

TelInput({
})`}),a({title:"Email Input",description:"This is a email input.",preview:[w([V({})])],code:`
import { EmailInput, FileInput, Input, TelInput, Textarea } from "@components/atoms/form/input.js";

EmailInput({

})`}),a({title:"Checkbox",description:"This is a checkbox input.",preview:[new U({label:"Check me",check:e=>console.log(e)})],code:`
import { Checkbox } from '@components/atoms/form/checkbox.js';

new Checkbox({
    label: 'Check me',
    check: (checked) => console.log(checked)
})`}),a({title:"Select",description:"This is a select input.",preview:[w([N({options:go,change:e=>console.log(e.target.value)})])],code:`import { Select } from "@components/atoms/form/select.js";

Select({
    options: [
        { value: 'next.js', label: 'Next.js' },
        { value: 'sveltekit', label: 'SvelteKit' },
        { value: 'nuxt.js', label: 'Nuxt.js' },
        { value: 'remix', label: 'Remix' },
        { value: 'astro', label: 'Astro' },
    ],
    change: (e) => console.log(e.target.value)
})`}),a({title:"Textarea",description:"This is a textarea input.",preview:[w([_({placeholder:"Enter your text here..."})])],code:`
import { EmailInput, FileInput, Input, TelInput, Textarea } from "@components/atoms/form/input.js";

Textarea({
    placeholder: 'Enter your text here...'
})`}),a({title:"Date Picker",description:"This is a date picker input.",preview:[w([new bo({selectedDate:"2022-01-01"})])],code:`
import DatePicker from "@components/molecules/date-time/date-picker.js";

new DatePicker()`}),a({title:"Range Slider",description:"This is a range slider input.",preview:[w([new xe({min:0,max:100,value:50,change:e=>console.log(e)})])],code:`
import { RangeSlider } from '@components/atoms/form/range-slider.js';

new RangeSlider({
    min: 0,
    max: 100,
    value: 50,
    change: (value) => console.log(value)
})`}),a({title:"Toggle Switch",description:"This is a toggle switch input.",preview:[w([new we({active:!0,change:e=>console.log(e)})])],code:`
import { RangeSlider } from '@components/atoms/form/range-slider.js';

new RangeSlider({
    min: 0,
    max: 100,
    value: 50,
    change: (value) => console.log(value)
})`})]),xo=[{name:"Leslie Alexander",email:"leslie.alexander@example.com",image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"Co-Founder / CEO",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Michael Foster",email:"michael.foster@example.com",image:"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"Co-Founder / CTO",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Dries Vincent",email:"dries.vincent@example.com",image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"Business Relations",status:"online"}],wo=()=>d({title:"Lists",description:"Lists are used to display a collection of items in a structured format. Each item can be customized to show different information."},[a({title:"Usage",description:"To use the List component, import it from the components library and use it in your application.",preview:[Re({users:xo})],code:`import { UserListItem } from "@components/organisms/lists/user-list.js";
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
});`}),L({class:"text-lg font-bold"},"Description"),p({class:"text-muted-foreground"},"The List component can be used to display a list of items in a structured format. Each item can be customized to show different information. The List component supports appending, prepending, mingling, and deleting or items. "),L({class:"text-lg font-bold"},"Performance"),p({class:"text-muted-foreground"},"The list will only update or re-render the items that have changed, improving performance. It uses a key to know when to update an item.")]),vo=({title:e})=>k({class:"modal-header flex items-center"},[i({variant:"icon",icon:r.arrows.left,class:"mr-2 p-0 bg-transparent flex sm:hidden",click:(t,o)=>o.close()}),O({class:"text-lg font-semibold m-0"},e)]),yo=c((e,t)=>pe({class:`modal m-auto fixed z-20 grid w-full gap-4 border bg-background p-6 shadow-lg ${e.class}`,click:e.click},[s({class:"modal-content flex flex-auto flex-col"},[vo(e),s({class:"modal-body flex flex-auto"},t),fe({class:"modal-footer flex justify-between"},e.buttons)])]));class ko extends Z{render(){const t=l=>{l.target===this.panel&&this.close()},o=this.getMainClass(),n=this.title||"Are you abosolutely sure?";return yo({class:o,click:t,title:n,buttons:this.getButtons(),aria:{expanded:["open"]}},this.children)}getButtons(){return[i({variant:"outline",click:()=>this.close()},"Cancel"),i({variant:"primary",click:()=>this.confirm()},"Save")]}getSizeClass(){switch(this.size){case"sm":return"sm max-w-[646px]";case"lg":return"lg max-w-[900px]";case"xl":return"xl max-w-[1400px]";default:return"medium max-w-[760px]"}}getTypeClass(){switch(this.type){case"right":return"right right-0";case"left":return"left left-0";default:return""}}getMainClass(){return this.getSizeClass()+" "+this.getTypeClass()}}const I=[{label:"Large",buttonStyle:"primary",size:"lg"},{label:"Small",buttonStyle:"secondary",size:"sm"},{label:"Medium",buttonStyle:"destructive",size:"md"},{label:"XL",buttonStyle:"primary",size:"xl"},{label:"Right",buttonStyle:"ghost",type:"right"},{label:"Left",buttonStyle:"link",type:"left"}],B=({label:e,buttonStyle:t,size:o,type:n})=>i({text:e,class:`m-1 ${t}`,click:()=>new ko({title:"Are you absolutely sure?",size:o,type:n}).open()}),To=()=>d({title:"Modals",description:"Displays a modal or a component that looks like a modal."},[a({title:"Extra Large Modal",description:"This is an extra large modal.",preview:[B(I[3])],code:`
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
});`}),a({title:"Large Modal",description:"This is a large modal.",preview:[B(I[0])],code:`
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
});`}),a({title:"Small Modal",preview:[B(I[1])],code:`
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
});`}),a({title:"Medium Modal",preview:[B(I[2])],code:`
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
});`}),a({title:"Right Modal",preview:[B(I[4])],code:`
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
});`})]),Co=()=>d({title:"Navigations",description:"Navigations are components that help users move around the website or application."},[a({title:"Inline Navigation",description:"The inline navigation component is a simple navigation component that can be used in a sidebar or app shell.",preview:[s({class:"flex flex-auto flex-col w-full border rounded-md max-w-[300px]"},[new He({options:[{label:"Home",href:"/",icon:r.home},{label:"About",href:"/about"},{label:"Contact",href:"/contact"},{label:"Services",options:[{label:"Web Development",href:"/web-development"}]},{group:"Frameworks",options:[{label:"Next.js",href:"/next"},{label:"SvelteKit",href:"/sveltekit"},{label:"Nuxt.js",href:"/nuxt"},{label:"Remix",href:"/remix"},{label:"Astro",href:"/astro"}]}]})])],code:`import { Button } from '@components/organisms/navigation/inline-navigation.js';
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
})`})]),So=()=>d({title:"Notifications",description:"Displays a notification message to the user."},[a({title:"In App Notifications",description:"Notifications can be displayed in the app to inform users about important events or updates. They are a global notification container that can be called from anywhere in the app.",preview:[new ze({title:"Notification Title",description:"This is a notification.",icon:r.warning,duration:"infinite"})],code:`app.notify({
    title: 'Notification Title',
    description: 'This is a notification.',
    icon: Icons.warning,
    type: 'warning', // 'success', 'destructive', 'info', 'warning'
    duration: 5000 // in milliseconds, leave it blank for 4 seconds, infinite is also a value to prevent it from going away
})`}),p({class:"text-muted-foreground"},"Notifications will stack if a few are called at the same time. The notification will be until the duration has been met. If a notificaiton duration is set to 'infinite', it must be removed by the user.  "),a({title:"Usage",description:"Call 'notify' the gloabl notification container to display notifications.",preview:[i({click:()=>{app.notify({title:"Notification Title",description:"This is a notification.",icon:r.warning,type:"warning"})}},"Show")],code:`app.notify({
    title: 'Notification Title',
    description: 'This is a notification.',
    icon: Icons.warning,
    type: 'warning', // 'success', 'destructive', 'info', 'warning'
    duration: 5000 // in milliseconds, leave it blank for 4 seconds, infinite is also a value to prevent it from going away
})`})]),Io=()=>s({class:"absolute h-full rounded-full bg-primary transition-all duration-300",style:"width: [[progress]]%;"}),Bo=x({render(){return s({class:"relative w-full h-4 rounded-full bg-muted"},[Io()])},state(){return{progress:this.progress??0}},set(e){e<0&&(e=0),e>100&&(e=100),this.state.progress=e}}),jo=()=>d({title:"Progress Bars",description:"Progress bars are a great way to show the progress of a task or process."},[a({title:"Usage",description:"Import the progress bar atom and use it in your components. The progress bar can be used to show the progress of a task or process.",preview:[new Bo({cache:"progress",progress:20})],code:`import { ProgressBar } from "@components/atoms/progress-bar.js";

new ProgressBar({ cache: 'progress', progress: 20 })`})]),T=({className:e,shape:t="rectangle",width:o="w-full",height:n="h-4"})=>s({class:`bg-muted animate-pulse ${o} ${n} ${t==="circle"?"rounded-full":"rounded-md"} ${e||""}`}),Do=()=>d({title:"Skeletons",description:"Skeletons are components that are used to show a placeholder for content that is loading."},[a({title:"Usage",description:"The skeleton component is used to show a placeholder for content that is loading.",preview:[s({class:"flex flex-auto space-x-4 w-full max-w-64"},[T({shape:"circle",width:"w-10",height:"h-10"}),s({class:"flex flex-auto flex-col space-y-2"},[T({width:"w-3/4",height:"h-4"}),T({width:"w-1/2",height:"h-4"})])])],code:`import { Skeleton } from "@components/atoms/skeleton.js";
import { Div } from '@base-framework/atoms';

Div({ class: 'flex flex-auto space-x-4 w-full max-w-64' }, [
    Skeleton({ shape: 'circle', width: 'w-10', height: 'h-10' }), // Circle skeleton for avatar
    Div({ class: 'flex flex-auto flex-col space-y-2' }, [
        Skeleton({ width: 'w-3/4', height: 'h-4' }), // Long rectangle for main text
        Skeleton({ width: 'w-1/2', height: 'h-4' })  // Shorter rectangle for subtext
    ])
])`}),a({title:"Skeleton Post",description:"This is a skeleton post.",preview:[s({class:"space-y-4 flex flex-auto flex-col w-full max-w-64"},[T({width:"w-full",height:"h-32",shape:"rectangle"}),s({class:"space-y-2"},[T({width:"w-3/4",height:"h-4"}),T({width:"w-1/2",height:"h-4"})])])],code:`import { Skeleton } from "@components/atoms/skeleton.js";
import { Div } from '@base-framework/atoms';

Div({ class: 'space-y-4 flex flex-auto flex-col space-x-4 w-full max-w-64' }, [
    // Large rectangle for image or main content
    Skeleton({ width: 'w-full', height: 'h-32', shape: 'rectangle' }),

    // Text line placeholders
    Div({ class: 'space-y-2' }, [
        Skeleton({ width: 'w-3/4', height: 'h-4' }), // Longer text line
        Skeleton({ width: 'w-1/2', height: 'h-4' })  // Shorter text line
    ])
])`})]),ae=c((e,t)=>s({class:"py-4"},t)),Ao=()=>d({title:"Tabs",description:"Displays a tab or a component that looks like a tab."},[a({title:"Button Tab",description:"This is a button tab. The buttons to not route.",preview:[new ge({class:"mt-4 max-w-[400px]",options:[{label:"Preview",value:"preview",layout:ae([])},{label:"Code",value:"code",layout:ae([])}]})],code:`
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
);`}),a({title:"Link Tab",description:"This is a link tab. The buttons route to a different page.",preview:[new Oe({class:"max-w-[400px]",options:[{label:"Example 1",href:"docs/components/tabs/example-1",component:new P({class:"p-8"},"This is an example 1 tab panel.")},{label:"Example 2",href:"docs/components/tabs/example-2",component:new P({class:"p-8"},"This is an example 2 tab panel.")},{label:"Example 3",href:"docs/components/tabs/example-3",component:new P({class:"p-8"},"This is an example 3 tab panel.")}]})],code:`
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
);`})]),ne={top:"bottom-full left-1/2 transform -translate-x-1/2 mb-2","top-right":"bottom-full left-full transform -translate-x-1 mb-2","top-left":"bottom-full right-full transform translate-x-1 mb-2",bottom:"top-full left-1/2 transform -translate-x-1/2 mt-2","bottom-right":"top-full left-full transform -translate-x-1 mt-2","bottom-left":"top-full right-full transform translate-x-1 mt-2",left:"top-1/2 right-full transform -translate-y-1/2 mr-2",right:"top-1/2 left-full transform -translate-y-1/2 ml-2"},Fo=e=>ne[e]||ne.top,re=c(({position:e="top",content:t},o)=>{const n=Fo(e);return s({class:"relative group inline-block"},[o,f({class:`
                absolute z-20 px-2 py-1 border text-sm bg-background rounded shadow-md opacity-0 whitespace-nowrap
                group-hover:opacity-100 transition-opacity duration-200 ${n} pointer-events-none
            `},t)])}),$o=()=>d({title:"Tooltips",description:"This is a tooltip."},[a({title:"Usage",description:"Import the card atom and use it in your components.",preview:[s({class:"flex gap-2 flex-wrap"},[re({content:"This is a tooltip."},[i("Hover me")])])],code:`import { Button } from "@components/atoms/buttons/buttons.js";
import { Tooltip } from "@components/atoms/tooltip.js";

Tooltip({ content: 'This is a tooltip.' }, [
    Button('Hover me')
])`}),a({title:"Bottom Tooltip",description:"This will show the tooltip at the bottom of the target element.",preview:[s({class:"flex gap-2 flex-wrap"},[re({content:"This is a tooltip.",position:"bottom"},[i("Hover me")])])],code:`import { Button } from "@components/atoms/buttons/buttons.js";
import { Tooltip } from "@components/atoms/tooltip.js";

Tooltip({ content: 'This is a tooltip.', position: 'bottom' }, [
    Button('Hover me')
])`}),p({class:"text-muted-foreground text-sm mt-4"},"The tooltip position can be set to: top, top-right, top-left, bottom, bottom-right, bottom-left, left, right.")]),ie=(e,t,o)=>(o="Icons"+(o?"."+o:""),s({class:"flex flex-auto flex-col items-center gap-2 max-w-[150px] h-[8.5rem] cursor-pointer"},[s({class:"flex flex-auto w-full h-full justify-center items-center flex-wrap rounded-lg border bg-card text-base shadow-sm hover:bg-accent hover:text-accent-foreground",click:()=>{navigator.clipboard.writeText(`${o}.${t}`)}},[j(e)]),s({class:"text-muted-foreground"},t)])),ve=(e,t,o)=>{const n=typeof e=="object";n&&t.push(p({class:"text-muted-foreground"},"path: "+o+".{icon}"));const l=[];if(t.push(s({class:"flex flex-auto flex-wrap gap-2 my-8"},l)),n===!1)l.push(ie(e,o));else for(var u in e){if(e.hasOwnProperty(u)===!1)continue;const v=e[u];if(typeof v!="object"){l.push(ie(v,u,o));continue}const A=`${o}.${u}`;ve(v,t,A)}},Po=e=>{if(!e||typeof e!="object")return;const t=[];for(let[o,n]of Object.entries(e)){if(o==="parse")continue;t.push(be({id:o.toLowerCase(),class:"text-2xl font-bold"},Ue.titleCase(o))),ve(n,t,o)}return t},Mo=()=>d({title:"Icons",description:"The icons are from the Hericon library. They are SVG icons that can be used in your project. This icon set uses the outline style."},[Q({href:"https://heroicons.com/",target:"_blank",class:"bttn link"},"link: Hericons"),a({title:"Icons",description:"This is an icon.",preview:[y({html:r.home})],code:`
import { Icons } from '@components/icons/icons.js';
import { I } from '@base-framework/atoms';

export const HomeIcon = () => (
    I({ html: Icons.home} )
);`}),s({class:"my-20"},[M({class:"text-2xl font-bold"},"Default Icons"),p({class:"text-muted-foreground"},'A few of the icons have been saved to the "Icons" object. You can use these icons in your project. Click to copy the Icon path. Here is a list of the icons that are available:')]),a({title:"Icon Atom",description:"An Icon is a helper atom that makes it easier to use icons in your project. ",preview:[j(r.home)],code:`
import { Icon } from '@components/atoms/icon.js';

Icon(Icons.home);`}),s({class:"my-20"},[M({class:"text-2xl font-bold"},"Default Icons"),p({class:"text-muted-foreground"},'A few of the icons have been saved to the "Icons" object. You can use these icons in your project. Click to copy the Icon path. Here is a list of the icons that are available:')]),Po(r)]),Eo=()=>d({title:"Introduction",description:"This app shell was created to showcase Base framework and its components and atoms. It is a simple app shell that can be used as a starting point for your project. It is built with Tailwind CSS and uses Shadcn as the inspiration for the theme and many of it's components. "}),Lo=e=>s({class:"flex flex-auto flex-col items-center gap-2 max-w-[150px] h-[8.5rem] cursor-pointer"},[s({class:`flex flex-auto w-full h-full min-h-[136px] justify-center items-center flex-wrap rounded-lg border text-base shadow-sm ${e.class}`,click:()=>{navigator.clipboard.writeText(`${e.class}`)}}),s({class:"text-sm text-muted-foreground"},e.var)]),h=(e,t)=>H({class:"flex flex-auto flex-col gap-2"},[p({class:"text-base text-muted-foreground"},e),s({class:"flex flex-auto flex-wrap gap-2 my-2",map:[t,Lo]})]),No=e=>s({class:"flex flex-auto flex-col gap-12"},[be({class:"text-2xl font-bold"},"Color Guide"),h("Default background color of <body />...etc",[{var:"--backround",class:"bg-backround"},{var:"--foreground",class:"bg-foreground"}]),h("Muted backgrounds such as <TabsList />, <Skeleton /> and <Switch />",[{var:"--muted",class:"bg-muted"},{var:"--muted-foreground",class:"bg-muted-forground"}]),h("Background color for <Card />",[{var:"--card",class:"bg-card"},{var:"--card-foreground",class:"bg-card-foreground"}]),h("Background color for popovers such as <DropdownMenu />, <HoverCard />, <Popover />",[{var:"--popover",class:"bg-popover"},{var:"--popover-foreground",class:"bg-popover-foreground"}]),h("Default border color",[{var:"--border",class:"bg-border"}]),h("Border color for inputs such as <Input />, <Select />, <Textarea />",[{var:"--input",class:"bg-input"}]),h("Primary colors for <Button />",[{var:"--primary",class:"bg-primary"},{var:"--primary-foreground",class:"bg-primary-foreground"}]),h("Secondary colors for <Button />",[{var:"--secondary",class:"bg-secondary"},{var:"--secondary-foreground",class:"bg-secondary-foreground"}]),h("Used for accents such as hover effects on <DropdownMenuItem>, <SelectItem>...etc",[{var:"--accent",class:"bg-accent"},{var:"--accent-foreground",class:"bg-accent-foreground"}]),h('Used for destructive actions such as <Button variant="destructive">',[{var:"--destructive",class:"bg-destructive"},{var:"--destructive-foreground",class:"bg-destructive-foreground"}]),h('Used for warning actions such as <Button variant="warning">',[{var:"--warning",class:"bg-warning"},{var:"--warning-foreground",class:"bg-warning-foreground"}]),h("Used for focus ring",[{var:"--ring",class:"bg-ring"}]),h("Border radius for card, input and buttons",[{var:"--radius",class:"bg-radius"}])]),Ro=()=>d({title:"Theme",description:"The theme is using Tailwind CSS and is based on Shadcn UI. The theme is customizable and can be extended. It comes with light and dark theme support."},[Q({href:"https://ui.shadcn.com/docs/theming",target:"_blank",class:"bttn link"},"link: Shadcn"),s({class:"my-20"},[M({class:"text-2xl font-bold"},"Default Styles"),p({class:"text-muted-foreground"},"The default styles are defined in the Tailwind CSS configuration file and in the base CSS file. Here's the list of variables available for customization:")]),No(),s({class:"flex flex-auto flex-col gap-2 mt-20"},[L({class:"text-2xl font-bold"},"Text Sizes"),p({class:"text-muted-foreground text-3xl"},"Text-3xl A test sentence."),p({class:"text-muted-foreground text-2xl"},"Text-2xl A test sentence."),p({class:"text-muted-foreground text-xl"},"Text-xl A test sentence."),p({class:"text-muted-foreground text-lg"},"Text-lg A test sentence."),p({class:"text-muted-foreground text-base"},"Text-base A test sentence."),p({class:"text-muted-foreground text-sm"},"Text-sm A test sentence."),p({class:"text-muted-foreground text-xs"},"Text-xs A test sentence.")])]),m=(e,t,o)=>({uri:e,title:t,component:o()}),Ho=e=>[m(`${e}`,"Introduction",Eo),m(`${e}/theme`,"Theme",Ro),m(`${e}/icons`,"Icons",Mo),m(`${e}/components/buttons*`,"Buttons",mt),m(`${e}/components/badges*`,"Badges",at),m(`${e}/components/tabs*`,"Tabs",Ao),m(`${e}/components/modals*`,"Modals",To),m(`${e}/components/notifications*`,"Notifications",So),m(`${e}/components/dialogs*`,"Modals",Kt),m(`${e}/components/cards*`,"Cards",jt),m(`${e}/components/calendars*`,"Calendars",pt),m(`${e}/components/avatars*`,"Avatars",tt),m(`${e}/components/inputs*`,"Inputs",ho),m(`${e}/components/forms*`,"Forms",po),m(`${e}/components/alerts*`,"Alerts",et),m(`${e}/components/comboboxes*`,"Comboboxes",Mt),m(`${e}/components/lists*`,"Lists",wo),m(`${e}/components/data-tables*`,"Data Tables",Ut),m(`${e}/components/breadcrumbs*`,"Breadcrumbs",ut),m(`${e}/components/navigations*`,"Navigations",Co),m(`${e}/components/progress-bars*`,"Progress Bars",jo),m(`${e}/components/skeletons*`,"Skeletons",Do),m(`${e}/components/tooltips*`,"Tooltips",$o),m(`${e}/components/dropdown-menus*`,"Dropdown Menus",ro)],zo=e=>[{href:`${e}`,label:"Introduction",exact:!0},{href:`${e}/theme`,label:"Theme",exact:!0},{href:`${e}/icons`,label:"Icons"},{group:"Components",options:[{label:"Buttons",href:`${e}/components/buttons`},{label:"Badges",href:`${e}/components/badges`},{label:"Tabs",href:`${e}/components/tabs`},{label:"Modals",href:`${e}/components/modals`},{label:"Notifications",href:`${e}/components/notifications`},{label:"Dialogs",href:`${e}/components/dialogs`},{label:"Cards",href:`${e}/components/cards`},{label:"Calendars",href:`${e}/components/calendars`},{label:"Avatars",href:`${e}/components/avatars`},{label:"Inputs",href:`${e}/components/inputs`},{label:"Forms",href:`${e}/components/forms`},{label:"Alerts",href:`${e}/components/alerts`},{label:"Comboboxes",href:`${e}/components/comboboxes`},{label:"Lists",href:`${e}/components/lists`},{label:"Data Tables",href:`${e}/components/data-tables`},{label:"Breadcrumbs",href:`${e}/components/breadcrumbs`},{label:"Navigations",href:`${e}/components/navigations`},{label:"Progress Bars",href:`${e}/components/progress-bars`},{label:"Skeletons",href:`${e}/components/skeletons`},{label:"Tooltips",href:`${e}/components/tooltips`},{label:"Dropdown Menus",href:`${e}/components/dropdown-menus`}]}],Oo=()=>new ye({backHref:"aside/"},[new P([s([k([ce("Overlay")]),s({class:"contained"},[qe()])])])]),Uo=e=>[{uri:`${e}/overlay-test`,component:Oo()}],$="docs",Wo=()=>new ke({title:"Documentation",basePath:$,routes:Uo($),switch:Ho($),links:zo($)});export{Wo as DocumentationPage,Wo as default};
