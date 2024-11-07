import{O as ke,A as Te}from"./overlay-Cp0ov6FI.js";import{w as R,m as s,R as H,a as ce,D as J,H as Q,b as S,X as c,p as Ce,c as Se,U as k,I as E,S as f,B as Ie,d as Be,C as me,A as je,e as i,f as de,y as u,g as x,h as O,T as Z,i as l,j as z,L as De,k as ue,l as te,u as L,q as y,n as pe,t as Ae,o as V,v as Fe,r as C,s as N,O as $e,z as Pe,Z as Me,x as fe,J as oe,E as Ee,K as $,M as Le,N as be,V as ge,Q as Y,W as _,Y as K,$ as Ne,a0 as G,a1 as Re,a2 as He,a3 as Oe,a4 as ze,P as M,a5 as he,a6 as Ue,G as qe}from"./index-GifgcuSH.js";const Ge=e=>Q({class:"inline-flex flex-auto items-center justify-center whitespace-nowrap rounded-sm text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",dataSet:["selected",["state",e.value,"active"]]},[S({class:"flex flex-auto justify-center items-center px-3 py-1.5",onSet:["selected",{selected:e.value}],click:t=>e.callBack(e.value)},e.label)]),We=(e,t)=>(e.callBack=t,Ge(e)),Ve=e=>ce({class:`tab items-center justify-center rounded-md bg-muted p-1 text-muted-foreground ${e.class}`},[J({class:"flex flex-auto flex-row",map:[e.options,t=>We(t,e.callBack)]})]);class xe extends R{render(){const t=this.select.bind(this);return s({class:""},[Ve({class:this.class,options:this.options,callBack:t}),H({class:"tab-content",onState:["selected",this.updateContent.bind(this)]})])}getFirstValue(){var t;return(t=this.options[0])==null?void 0:t.value}update(){const t=this.state.get("selected");this.select(null),this.select(t)}select(t){this.state.selected=t}updateContent(t){const o=this.options;if(!o||o.length<1)return;const n=o[0];for(const r of o)if(r.value===t)return r.layout;return n.layout}setupStates(){const t=this.callBack,o=typeof t;return{selected:{state:this.getFirstValue(),callBack(n){o==="function"&&t(n)}}}}}const Ye=c((e,t)=>Ce({class:"flex p-4 min-h-[350px] max-h-[650px] overflow-x-auto rounded-lg border bg-muted whitespace-break-spaces cursor-pointer"},[Se({class:"font-mono text-sm",click:()=>navigator.clipboard.writeText(t[0].textContent)},t)])),_e=c((e,t)=>s({class:"flex p-4 min-h-[350px] max-h-[650px] overflow-x-auto rounded-lg border bg-card"},[s({class:"preview flex w-full justify-center items-center"},t)])),se=c((e,t)=>s({class:"py-4"},t)),Ke=e=>new xe({class:"mt-4 max-w-[400px]",options:[{label:"Preview",value:"preview",layout:se([_e(e.preview)])},{label:"Code",value:"code",layout:se([Ye(e.code)])}]}),Je=c(({title:e,description:t})=>k({class:"flex flex-col"},[E({class:"scroll-m-20 text-2xl font-bold tracking-tight"},e),t&&f({class:"text-base text-muted-foreground py-2 max-w-[700px]"},t)])),a=c((e,t)=>H({class:"py-4"},[Je({title:e.title,description:e.description}),Ke({preview:e.preview,code:e.code})]));class Qe extends Ie{render(){return Be([s({class:"contained px-4 flex flex-auto flex-col"},this.children)])}}const Ze=c(({title:e,description:t})=>k({class:"flex flex-col"},[me({class:"scroll-m-20 text-3xl font-bold tracking-tight"},e),f({class:"text-base text-muted-foreground py-2 max-w-[700px]"},t)])),Xe=c((e,t)=>s({class:"contained py-8"},[Ze(e),H({class:"pb-12 pt-8"},t)])),p=c((e,t)=>new Qe([Xe(e,t)])),et=()=>p({title:"Alerts",description:"Alerts are used to provide feedback to the user about the outcome of an action or to inform them of important information."},[a({title:"Usage",description:"To use the Alert component, import it from the components library and use it in your application.",preview:[je({title:"Heads up!",description:"You can add components to your app using the cli.",icon:i.information})],code:`import { Alert } from "@components/molecules/alert.js";
import { Icons } from "@components/icons/icons.js";

Alert({
    title: 'Heads up!',
    description: 'You can add components to your app using the cli.',
    icon: Icons.information
})`})]),tt=()=>p({title:"Cards",description:"Cards are a great way to display content in a concise and organized manner."},[a({title:"Usage",description:"Import the card atom and use it in your components. The avatar can be set to multiple sizes: xs, sm, lg, xl, 2xl, 3xl.",preview:[de({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN"})],code:`import { Button } from '@components/atoms/cards/card.js';

Avatar({
    src: 'https://github.com/shadcn.png',
    alt: '@shadcn',
    fallbackText: 'CN',
    size: 'md' // You can change the size to xs, sm, lg, xl, 2xl, 3xl
})`})]),ae={gray:{backgroundColor:"bg-gray-50",textColor:"text-gray-600",ringColor:"ring-gray-500/10"},red:{backgroundColor:"bg-red-50",textColor:"text-red-700",ringColor:"ring-red-600/10"},yellow:{backgroundColor:"bg-yellow-50",textColor:"text-yellow-800",ringColor:"ring-yellow-600/20"},green:{backgroundColor:"bg-green-50",textColor:"text-green-700",ringColor:"ring-green-600/20"},blue:{backgroundColor:"bg-blue-50",textColor:"text-blue-700",ringColor:"ring-blue-700/10"},indigo:{backgroundColor:"bg-indigo-50",textColor:"text-indigo-700",ringColor:"ring-indigo-700/10"},purple:{backgroundColor:"bg-purple-50",textColor:"text-purple-700",ringColor:"ring-purple-700/10"},pink:{backgroundColor:"bg-pink-50",textColor:"text-pink-700",ringColor:"ring-pink-700/10"},primary:{backgroundColor:"bg-primary",textColor:"text-primary-foreground",ringColor:"ring-primary/10"},secondary:{backgroundColor:"bg-secondary",textColor:"text-secondary-foreground",ringColor:"ring-secondary/10"},destructive:{backgroundColor:"bg-destructive",textColor:"text-destructive-foreground",ringColor:"ring-destructive/10"},warning:{backgroundColor:"bg-warning",textColor:"text-warning-foreground",ringColor:"ring-warning/10"},outline:{backgroundColor:"bg-background",textColor:"text-primary",ringColor:"ring-input"},ghost:{backgroundColor:"bg-background",textColor:"text-primary",ringColor:"ring-background"},link:{backgroundColor:"bg-background",textColor:"text-primary",ringColor:"ring-background"}},ot=e=>ae[e]||ae.gray,st=e=>{const{backgroundColor:t,textColor:o,ringColor:n}=ot(e);return`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors ${t} ${o} ${n}`},b=c((e,t)=>{const o=st(e==null?void 0:e.type);return u({...e,class:o},t)}),at=()=>p({title:"Badges",description:"Badges can be used to display a status or a count."},[a({title:"Badge",description:"This is a badge.",preview:[s({class:"flex gap-2 flex-wrap"},[b({type:"gray"},"Text"),b({type:"red"},"Text"),b({type:"yellow"},"Text"),b({type:"green"},"Text"),b({type:"blue"},"Text"),b({type:"indigo"},"Text"),b({type:"purple"},"Text"),b({type:"pink"},"Text"),b({type:"primary"},"Text"),b({type:"secondary"},"Text"),b({type:"destructive"},"Text"),b({type:"warning"},"Text"),b({type:"outline"},"Text"),b({type:"ghost"},"Text"),b({type:"link"},"Text")])],code:`
import { Button } from '@components/atoms/badges/badges.js';
import { Atom } from '@base-framework/base';

export const PrimaryBadge = Atom((props, children)) => (
    Badge({ ...props, type: 'gray' }, children)
);`})]),nt=(e,t)=>Z({href:e,"aria-current":t==="Breadcrumb"?"page":null,class:"text-muted-foreground hover:text-foreground"},[u(t)]),rt=()=>u({class:"mx-2 text-muted-foreground","aria-hidden":!0,html:">"}),it=e=>s({class:"flex items-center"},[e.href?nt(e.href,e.label):u(e.label),e.separator&&rt()]),lt=x({setData(){return new O({items:this.items||[]})},render(){return ce({"aria-label":"Breadcrumb",class:"flex items-center space-x-1 text-sm"},[s({role:"list",class:"flex items-center",for:["items",(e,t)=>it({href:e.href,label:e.label,separator:t<this.data.items.length-1})]})])}}),ct=[{href:"/",label:"Home"},{href:"/components",label:"Components"},{label:"Breadcrumb"}],mt=()=>p({title:"Breadcrumbs",description:"Breadcrumbs are a navigation aid that helps users understand their location within a website or application."},[a({title:"Usage",description:"To use the Breadcrumb component, import it and provide an array of items. Each item can have a label and an optional href.",preview:[new lt({items:ct})],code:`import { Breadcrumb } from "@components/molecules/breadcrumb/breadcrumb.js";

new Breadcrumb({ items: [
    { href: '/', label: 'Home' },
    { href: '/components', label: 'Components' },
    { label: 'Breadcrumb' } // Last item, no href needed
] })`})]),dt=()=>p({title:"Button",description:"Displays a button or a component that looks like a button."},[a({title:"Usage",description:"Import the button atom and use it in your components. This platform has variants for different use cases. The variant can be set using the `variant` prop.",preview:[l({variant:"primary"},"Click Me")],code:`import { Button } from '@components/atoms/buttons/buttons.js';

Button({ ...props, variant: 'secondary' }, primary)`}),k({class:"flex flex-col py-8"},[z({class:"text-3xl font-bold tracking-tight border-b pb-2"},"Variants")]),a({title:"Primary Button",description:"This is a primary button.",preview:[l({variant:"primary"},"Click Me")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const PrimaryButton = Atom((props, children) => (
    Button({ ...props, variant: 'primary' }, children)
);`}),a({title:"Secondary Button",preview:[l({variant:"secondary"},"Secondary")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const SecondaryButton = Atom((props, children) => (
    Button({ ...props, variant: 'secondary' }, children)
);`}),a({title:"Destructive Button",preview:[l({variant:"destructive"},"Destructive")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const DestructiveButton = Atom((props, children) => (
    Button({ ...props, variant: 'destructive' }, children)
);`}),a({title:"Warning Button",preview:[l({variant:"warning"},"Warning")],code:`import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const WarningButton = Atom((props, children) => (
    Button({ ...props, variant: 'warning' }, children)
);`}),a({title:"Outline Button",preview:[l({variant:"outline"},"Outline")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const OutlineButton = Atom((props, children) => (
    Button({ ...props, variant: 'outline' }, children)
);`}),a({title:"Ghost Button",preview:[l({variant:"ghost"},"Ghost")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const GhostButton = Atom((props, children) => (
    Button({ ...props, variant: 'ghost' }, children)
);`}),a({title:"Link Button",preview:[l({variant:"link"},"Link")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const LinkButton = Atom((props, children) => (
    Button({ ...props, variant: 'link' }, children)
);`}),a({title:"Icon Button",description:"Displays a button with an icon.",preview:[l({variant:"icon",icon:i.home})],code:`import { Button } from '@components/atoms/buttons/buttons.js';
import { Icons } from '@components/icons/icons.js';
import { Atom } from '@base-framework/base';

export const IconButton = Atom((props) => (
    Button({ ...props, variant: 'icon', icon: Icons.home })
);`}),a({title:"With Icon Button",preview:[l({variant:"withIcon",icon:i.home},"With Icon")],code:`import { Button } from '@components/atoms/buttons/buttons.js';
import { Icons } from '@components/icons/icons.js';

Button({ variant: 'withIcon', icon: Icons.home }, 'With Icon')`}),a({title:"Loading Button",preview:[De("With Icon")],code:`import { LoadingButton } from '@components/atoms/buttons/buttons.js';

LoadingButton('With Icon')`})]),ut=()=>L.formatTime("",24),pt=()=>p({title:"Calendars",description:"This is the calendar component documentation."},[a({title:"Usage",description:"This is how you can use the calendar component.",preview:[new ue],code:`@components/organisms/calendar/calendar.js';

new Calendar()`}),a({title:"Dynamic Time",description:"This is how you can use the calendar component.",preview:[new te({filter:()=>{let e="Morning";const t=ut();return t>="18:00:00"?e="Evening":t>="12:00:00"&&(e="Afternoon"),`Good ${e}`}})],code:`import { DateTime } from "@base-framework/base";
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
})`}),a({title:"Dynamic Local Time by Time Frame",description:"This will show the time frame based on the local time. This will update the time frame every minute to keep the time frame updated.",preview:[new te({dateTime:"2024-11-04T18:00:00",filter(e){const t=L.getLocalTime(e,!0);return L.getTimeFrame(t)}})],code:`import { DateTime } from "@base-framework/base";
import { DynamicTime } from "@base-framework/organisms";

new DynamicTime({
    dateTime: '2024-11-04T18:00:00',
    filter(date)
    {
        // convert to local time
        const localTime = DateTime.getLocalTime(date, true);
        return DateTime.getTimeFrame(localTime);
    }
})`})]),U=c((e,t)=>s({...e,class:`rounded-lg border bg-card text-card-foreground shadow-md min-w-[120px] min-h-[80px] my-5 mx-5 p-4 ${e.class||""}`},t)),D=c((e,t)=>{var o;return y({...e,html:(o=t[0])==null?void 0:o.textContent})}),ft=c((e,t)=>s({...e,class:"space-y-2"},t)),bt=c((e,t)=>pe({...e,class:"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"},t)),gt=c((e,t)=>f({...e,class:"text-sm text-muted-foreground"},t)),ht=c((e,t)=>f({...e,class:"text-sm text-destructive"},t)),xt=e=>e.tag==="input"||e.tag==="select"||e.tag==="textarea",wt=c((e,t)=>{const o=m=>{e.setError(m.target.validationMessage)},n=m=>{m.target.checkValidity()&&e.setError(null)},r=t.map(m=>m.required&&xt(m)?{...m,aria:{invalid:["hasError"]},invalid:o,input:n}:m);return s({...e,class:"w-full"},r)}),g=x({state(){return{error:null,hasError:!1,value:this.defaultValue??""}},render(){const e=this.name,t=this.getId(`${e}`),{label:o,description:n}=this,r=m=>{this.state.error=m,this.state.hasError=!!m};return s({class:"space-y-4"},[ft([bt({htmlFor:t},o),wt({id:t,name:e,value:this.state.value,setError:r},this.children),n&&gt({id:this.getId("description")},n),s({onState:["error",m=>m&&ht(m)]})])])}}),vt=(e,t=null)=>{e.target.checkValidity()&&(e.preventDefault(),t&&t(e))},I=c((e,t)=>Ae({...e,submit:o=>vt(o,e.submit),class:"space-y-8 w-full max-w-lg"},t)),X=({title:e,description:t})=>k({class:"text-left"},[z({class:"font-semibold tracking-tight text-2xl"},e),f({class:"text-sm text-muted-foreground"},t)]),yt=()=>s({class:"flex items-center justify-center gap-4"},[l({variant:"outline",class:"gap-2 w-full",click:()=>console.log("Sign in with Github"),"aria-label":"Sign in with Github"},[D(i.companies.gitHub),u("Github")]),l({variant:"outline",class:"gap-2 w-full",click:()=>console.log("Sign in with Google"),"aria-label":"Sign in with Google"},[D(i.companies.google),u("Google")])]),kt=()=>I({submit:e=>{e.preventDefault(),console.log("Account created")}},[new g({name:"email",label:"Email"},[V({type:"email",placeholder:"m@example.com",required:!0,class:"border p-2 rounded-md w-full bg-background placeholder-muted-foreground text-foreground"})]),new g({name:"password",label:"Password"},[V({type:"password",placeholder:"Your password",required:!0,class:"border p-2 rounded-md w-full bg-background placeholder-muted-foreground text-foreground"})]),l({type:"submit",class:"w-full mt-4 py-2 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition"},"Create account")]),Tt=()=>U({class:"w-full max-w-md mx-auto p-8 bg-card space-y-6"},[X({title:"Create an account",description:"Enter your email below to create your account"}),yt(),s({class:"relative"},[s({class:"absolute inset-0 flex items-center"},[u({class:"flex-grow border-t"})]),s({class:"relative flex justify-center text-xs uppercase"},[u({class:"bg-background px-2 text-muted-foreground"},"or continue with")])]),kt()]),A=c(e=>({tag:"select",...e,class:`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${e.class||""}`,onCreated(t){e.options&&Fe.setupSelectOptions(t,e.options)}})),W=c(({value:e,label:t,icon:o})=>S({class:'text-sm gap-1 font-medium leading-none disabled:cursor-not-allowed disabled:opacity-70 flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground data-[state="active"]:border-primary [&:has([data-state="active"])]:border-primary',onState:["method",{active:e}],dataSet:["method",["state",e,"active"]],click:(n,{state:r})=>r.method=e},[D(o),u(t)])),Ct=x({render(){return s({class:"flex flex-auto flex-col"},[s({class:"grid grid-cols-3 gap-4"},[W({label:"Card",value:"card",icon:i.creditCard}),W({label:"Paypal",value:"paypal",icon:i.companies.paypal}),W({label:"Apple",value:"apple",icon:i.companies.apple})])])},state(){return{method:null}}}),St=()=>s({class:"flex items-center justify-center gap-4"},[new Ct]),It=()=>I({submit:e=>{e.preventDefault(),console.log("Payment method added")}},[new g({name:"name",label:"Name"},[C({type:"text",placeholder:"First Last",required:!0,class:"border p-2 rounded-md w-full bg-background placeholder-muted-foreground text-foreground"})]),new g({name:"card_number",label:"Card number"},[C({type:"text",placeholder:"1234 5678 9012 3456",required:!0,class:"border p-2 rounded-md w-full bg-background placeholder-muted-foreground text-foreground"})]),s({class:"flex gap-4 mt-4"},[new g({name:"month",label:"Expires"},[A({required:!0,class:"border p-2 rounded-md w-full bg-background text-foreground",options:[{value:"",label:"Month",disabled:!0},...Array.from({length:12},(e,t)=>({value:`${t+1}`,label:`${t+1}`.padStart(2,"0")}))]})]),new g({name:"year",label:"Year"},[A({required:!0,class:"border p-2 rounded-md w-full bg-background text-foreground",options:[{value:"",label:"Year",disabled:!0},...Array.from({length:10},(e,t)=>({value:`${new Date().getFullYear()+t}`,label:`${new Date().getFullYear()+t}`}))]})]),new g({name:"cvc",label:"CVC"},[C({type:"text",placeholder:"CVC",required:!0,class:"border p-2 rounded-md w-full bg-background placeholder-muted-foreground text-foreground"})])]),l({type:"submit",class:"w-full mt-4 py-2 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition"},"Continue")]),Bt=()=>U({class:"w-full max-w-md mx-auto p-8 bg-card space-y-6"},[X({title:"Payment Method",description:"Add a new payment method to your account."}),St(),s({class:"space-y-4"},[It()])]),jt=e=>e.split(" ").map(o=>o[0]).join(""),Dt=({name:e,email:t,role:o,image:n})=>s({class:"flex items-center justify-between gap-4 py-2"},[s({class:"flex items-center gap-3"},[de({src:n,alt:e,fallbackText:jt(e)}),s({},[u({class:"font-medium text-foreground"},e),u({class:"block text-sm text-muted-foreground"},t)])]),A({class:"border rounded-md bg-background text-foreground px-3 py-1",options:[{value:"owner",label:"Owner"},{value:"member",label:"Member"}],defaultValue:o,change:r=>console.log(`Role changed for ${e}: ${r.target.value}`)})]),At=({members:e})=>s({class:"space-y-3"},e.map(t=>Dt(t))),Ft=({members:e})=>U({class:"w-full max-w-md mx-auto p-6 bg-card space-y-6"},[X({title:"Team Member",description:"Invite your team members to collaborate."}),At({members:e})]),$t=()=>p({title:"Cards",description:"Cards are a great way to display content in a concise and organized manner."},[a({title:"Usage",description:"Import the card atom and use it in your components.",preview:[U()],code:`import { Button } from '@components/atoms/cards/card.js';

Card()`}),N({class:"text-lg font-bold"},"Examples"),f({class:"text-muted-foreground"},"This is a list of examples of how to use the card component in your application."),a({title:"Account Card",preview:[Tt()],code:`import AccountCard from "./examples/account-card.js";

AccountCard()`}),a({title:"Paymnet Card",preview:[Bt()],code:`import AccountCard from "./examples/payment-card.js";

PaymentCard()`}),a({title:"Team Mmeber Card",preview:[Ft({members:[{name:"Leslie Alexander",email:"leslie.alexander@example.com",image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"owner",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Michael Foster",email:"michael.foster@example.com",image:"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"member",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Dries Vincent",email:"dries.vincent@example.com",image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"owner",status:"online"}]})],code:`import AccountCard from "./examples/team-member-card.js";

TeamMemberCard()`})]),Pt=(e,t)=>Q({class:"flex flex-auto items-center cursor-pointer p-2 hover:bg-secondary rounded-sm",click:()=>t(e),onState:["selectedValue",{"bg-secondary":e.value}]},[e.icon&&u({class:"mr-2 flex items-baseline"},[y({class:"flex w-4 h-4",html:e.icon})]),u(e.label)]),Mt=e=>s({class:"absolute border rounded-md shadow-lg mt-1 w-full z-10"},[J({class:"max-h-60 overflow-y-auto p-2 grid gap-1",for:["items",t=>Pt(t,e)]})]),Et=(e,t)=>!t.contains(e),Lt=x({setData(){return new O({items:this.items||[]})},state:{open:!1,selectedLabel:"",selectedValue:""},render(){const e=(o,{state:n})=>n.toggle("open"),t=o=>{const n=this.state;n.selectedValue=o.value,n.selectedLabel=o.label,n.open=!1};return s({class:"relative w-[200px]"},[S({class:"inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-[200px] justify-between",click:e,addEvent:["click",document,(o,{state:n,panel:r})=>{Et(o.target,r)&&(n.open=!1)}]},[u({onState:["selectedLabel",o=>o||"Select item..."]}),y({html:i.chevron.upDown})]),s({class:"felx flex-auto flex-col",onState:["open",o=>o?Mt(t):null]})])}}),Nt=[{value:"next.js",label:"Next.js",icon:i.home},{value:"sveltekit",label:"SvelteKit"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}],Rt=()=>p({title:"Comboboxes",description:"Comboboxes are used to allow users to select an option from a dropdown list or enter a custom value."},[a({title:"Usage",description:"To use the Combobox component, import it from the components library and use it in your application.",preview:[new Lt({items:Nt})],code:`@components/molecules/combobox/combobox.js';
import { Icons } from "@components/icons/icons.js";

new Combobox({
    items: [
    { value: 'next.js', label: 'Next.js', icon: Icons.home },,
    { value: 'sveltekit', label: 'SvelteKit' },
    { value: 'nuxt.js', label: 'Nuxt.js' },
    { value: 'remix', label: 'Remix' },
    { value: 'astro', label: 'Astro' },
],
})`})]),Ht=()=>`checkbox-${Math.random().toString(36).substring(2,9)}`,q=x({state(){return{checked:this.checked??!1}},render(){const e=Ht();return s({class:`flex items-center space-x-2 cursor-pointer ${this.class}`},[s({class:"relative flex items-center justify-center w-5 h-5 rounded-md transition-colors duration-200 border hover:border-accent-foreground",onState:["checked",{"bg-primary":!0,"text-primary-foreground":!0}],role:"checkbox",aria:{checked:["checked"]},tabIndex:0,click:()=>{this.state.checked=!this.state.checked,typeof this.checked=="function"&&this.checked(this.state.checked)}},[$e({id:e,class:"absolute opacity-0 w-full h-full cursor-pointer",aria:{checked:["checked"]},bind:this.bind,change:t=>{const o=t.target.checked;this.state.checked=o,typeof this.checked=="function"&&this.checked(o)}}),u({class:"absolute text-xs pointer-events-none",onState:["checked",t=>t?y({class:"w-2 h-2 pointer-events-none",html:i.check}):null]})]),this.label&&pe({class:"text-base cursor-pointer",htmlFor:e,click:()=>{this.state.toggle("checked"),typeof this.checked=="function"&&this.checked(this.state.checked)}},this.label)])}}),Ot=e=>Me([fe({class:"text-muted-foreground border-b",map:[e.headers,t=>{if(t.label==="checkbox")return oe({class:"cursor-pointer py-3 px-4 text-base"},[new q({class:"mr-2"})]);const o=t.align||"items-center justify-start";return oe({class:"cursor-pointer py-3 px-4 text-base",click:t.sortable&&(()=>e.sort(t.key))},[s({class:`flex flex-auto w-full items-center ${o}`},[u(t.label),t.sortable&&y({class:"ml-2",html:i.arrows.upDown})])])}]})]),zt=({key:e,rows:t,selectRow:o,rowItem:n})=>new Ee({key:e,items:t,rowItem:r=>n(r,o),class:"divide-y divide-border"}),Ut=x({setData(){return new O({rows:this.rows||[],selectedRows:[]})},selectRow(e){const t=this.data.selectedRows.includes(e)?this.data.selectedRows.filter(o=>o!==e):[...this.data.selectedRows,e];this.data.selectedRows=t},render(){const e=this.data.rows;return s({class:"w-full"},[s({class:"w-full rounded-md border"},[Pe({class:"w-full"},[this.headers&&Ot({headers:this.headers,sort:t=>this.sortRows(t)}),zt({key:this.key,rows:e,selectRow:this.selectRow.bind(this),rowItem:this.rowItem})])])])}}),qt=[{label:"checkbox",key:""},{label:"Status",key:"status"},{label:"Email",key:"email"},{label:"Amount",key:"amount",align:"justify-end"}],Gt=[{id:1,status:"Success",email:"ken99@yahoo.com",amount:316,selected:!1},{id:2,status:"Success",email:"abe45@gmail.com",amount:242,selected:!1},{id:3,status:"Processing",email:"monserrat44@gmail.com",amount:837,selected:!1},{id:4,status:"Success",email:"silas22@gmail.com",amount:874,selected:!1},{id:5,status:"Failed",email:"carmella@hotmail.com",amount:721,selected:!1}],Wt=(e,t)=>fe({class:"items-center px-4 py-2 hover:bg-muted"},[$({class:"p-4 "},[new q({checked:e.selected,class:"mr-2",click:()=>t(e)})]),$({class:"p-4 "},[u({class:"text-muted-foreground"},e.status)]),$({class:"p-4 "},e.email),$({class:"p-4 text-right"},`$${e.amount.toFixed(2)}`)]),Vt=()=>p({title:"Data Tables",description:"Data tables are used to display data in a structured format. They can be used to display a list of items, a grid of items, or a table of items."},[a({title:"Usage",description:"The data table component is used to display data in a structured format. It can be used to display a list of items, a grid of items, or a table of items.",preview:[new Ut({headers:qt,rows:Gt,rowItem:Wt,key:"id"})],code:`import { DataTable } from "@components/organisms/lists/data-table.js";
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
})`})]),Yt=e=>Le.render(e,document.body),_t=({title:e})=>k({class:"flex flex-auto items-center"},[z({class:"text-lg font-semibold"},e)]),Kt=c((e,t)=>be({class:"flex flex-auto flex-col fixed z-30 w-full max-w-lg gap-4 border bg-background text-foreground p-6 shadow-lg duration-200 sm:rounded-lg",click:e.click,aria:{expanded:["open"]}},[s({class:"flex flex-auto flex-col space-y-2"},[_t(e),e.description&&f({class:"flex flex-auto flex-col text-sm text-muted-foreground"},e.description),s({class:"flex flex-auto flex-col text-sm text-muted-foreground"},t)]),ge({class:"flex flex-col-reverse sm:flex-row sm:justify-end mt-6 gap-2 sm:gap-0 sm:space-x-2"},e.buttons)]));class ee extends R{render(){const t=r=>{r.target===this.panel&&this.close()},o=this.getMainClass(),n=this.title||"Dialog Title";return Kt({class:o,title:n,click:t,description:this.description,buttons:this.getButtons()},this.children)}getButtons(){return[l({variant:"outline",click:()=>this.close()},"Close")]}setupStates(){return{open:!1}}getMainClass(){return""}open(){Yt(this),this.panel.showModal(),this.state.open=!0}close(){this.state.open=!1,this.panel.close(),this.destroy()}}class Jt extends ee{getButtons(){const t=this.confirmTextLabel||"Confirm";return[l({variant:"outline",click:()=>this.close()},"Cancel"),l({variant:"primary",click:()=>this.confirm()},t)]}confirm(){this.confirmed&&this.confirmed(),this.close()}}const Qt=c((e,t)=>l({text:"Open",class:"m-1",click:()=>new ee(e,t).open()})),Zt=e=>l({text:"Open",class:"m-1",click:()=>new Jt(e).open()}),Xt=()=>p({title:"Dialogs",description:"Displays a dialog or a component that looks like a dialog. Dialogs can be opened and closed. They will be closed if the user clicks outside of the dialog or if the user clicks the close button."},[a({title:"Usage",description:"Import the dialog atom and use it in your components.",preview:[Qt({title:"Title",description:"this is the description."},[])],code:`import { Dialog } from '@components/molecules/dialogue.js';

new Dialog({
    title: '',
    description: ''
}, [

]).open()`}),a({title:"Confirmation",description:"Displays a confirmation dialog.",preview:[Zt({title:"Are you absoultely sure?",description:"This action cannot be undone. This will permanently delete your account and remove your data from our servers.",confirmTextLabel:"Save",confirmed:()=>console.log("Confirmed!")})],code:`import { Confirmation } from '@components/molecules/dialogs/confirmation.js';

new Confirmation({
    title: 'Are you absoultely sure?',
    description: 'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
    confirmTextLabel: 'Save',
    confirmed: () => console.log('Confirmed!')
}).open()`})]);class eo extends R{setData(){return this.parent.data}render(){return s({class:"absolute mt-2 border rounded-md shadow-lg bg-popover z-30 w-[250px]",style:"top: [[position.y]]px; left: [[position.x]]px"},this.children)}setupStates(){return{open:{id:this.parent.getId(),callBack:n=>{this.state.open===!1&&this.destroy()}}}}isOutsideClick(t){return!this.panel.contains(t)&&this.button&&!this.button.contains(t)}setupEvents(){return[["click",document,t=>{this.isOutsideClick(t.target)&&(this.state.open=!1)}]]}setup(t){this.container=document.body,this.initialize()}}const to=e=>u({class:"ml-auto text-xs tracking-widest opacity-60"},e),oo=e=>u({class:"flex w-4 h-4",html:e}),so=e=>u({class:"flex-auto"},e),ao=(e,t)=>Q({class:"relative flex cursor-pointer hover:bg-accent hover:text-accent-foreground select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",click:()=>t(e)},[e.icon&&oo(e.icon),so(e.label),e.shortcut&&to(e.shortcut)]),no=(e,t)=>J({class:"grid gap-2"},[e.map(o=>ao(o,t))]),ro=e=>s({class:"w-full z-10"},[s({class:"max-h-60 overflow-y-auto p-1 grid gap-2 divide-y divide-border",for:["groups",t=>no(t,e)]})]),io=({label:e,icon:t,toggleDropdown:o})=>S({cache:"button",class:`inline-flex items-center justify-between rounded-md border border-input
            bg-background px-2 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground
            focus:outline-none transition duration-150 ease-in-out`,click:o},[e&&u(e),t&&y({html:t})]),lo=({onSelect:e})=>s({onState:["open",(t,o,n)=>{if(t)return new eo({cache:"dropdown",parent:n,button:n.button},[ro(e)])}]});class co extends R{setData(){return new O({groups:this.groups||[],position:{y:0,x:0}})}setupStates(){return{open:!1,selectedItem:null}}toggleDropdown(){this.state.toggle("open"),this.state.open&&this.updatePosition()}updatePosition(){const o=this.button.getBoundingClientRect(),r=this.dropdown.panel.getBoundingClientRect();let m=o.left+window.scrollX,v=o.bottom+window.scrollY;const F=10;m+r.width>window.innerWidth&&(m=window.innerWidth-r.width-F),v+r.height>window.innerHeight&&(v=o.top+window.scrollY-r.height-F),this.data.position={x:m,y:v}}handleSelect(t){this.state.selectedItem=t,this.state.open=!1,typeof this.onSelect=="function"&&this.onSelect(t)}render(){return s({class:"relative"},[io({label:this.label,icon:this.icon,toggleDropdown:this.toggleDropdown.bind(this)}),lo({onSelect:this.handleSelect.bind(this)})])}}const mo=()=>p({title:"Dropdown Menus",description:"Dropdown menus are used to display a list of options when a user clicks on a button or input field."},[a({title:"Usage",description:"To use the DropdownMenu component, import it from the components library and use it in your application.",preview:[new co({icon:i.ellipsis.vertical,groups:[[{icon:i.user.default,label:"Profile",shortcut:"⌘P",value:"profile"},{icon:i.creditCard,label:"Billing",shortcut:"⌘B",value:"billing"},{icon:i.cog.six,label:"Settings",shortcut:"⌘S",value:"settings"},{icon:i.computerDesktop,label:"Keyboard shortcuts",shortcut:"⌘K",value:"shortcuts"}],[{icon:i.user.multiple,label:"Team",value:"team"},{icon:i.user.plus,label:"Invite users",value:"invite"},{icon:i.plus,label:"New Team",shortcut:"⌘T",value:"new_team"}],[{icon:i.github,label:"GitHub",value:"github"},{icon:i.helpCircle,label:"Support",value:"support"},{icon:i.api,label:"API",value:"api"}]],onSelect:e=>{console.log("Selected item:",e)}})],code:`import { Icons } from "@components/icons/icons.js";
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
})`})]),we=x({state(){return{value:this.value??0,min:this.min??0,max:this.max??100,filledPercentage:this.getFillPercentage(this.value)}},getFillPercentage(e){return(e-this.min)/(this.max-this.min)*100},render(){return s({class:"relative w-full h-4 flex items-center"},[s({class:"absolute h-2 w-full rounded-full bg-muted"}),s({class:"absolute h-2 bg-primary rounded-full",style:"width: [[filledPercentage]]%"}),s({class:"absolute block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transform -translate-x-1/2",style:"left: [[filledPercentage]]%"}),V({type:"range",min:"[[min]]",max:"[[max]]",value:"[[value]]",class:"absolute w-full h-full opacity-0 cursor-pointer",bind:this.bind,input:e=>{const t=Number(e.target.value);this.state.value=t,this.state.filledPercentage=this.getFillPercentage(t),typeof this.change=="function"&&this.change(t)}})])}}),ve=x({state(){return{active:this.active??!1}},render(){return S({class:"inline-flex h-6 w-11 items-center rounded-full bg-muted transition-colors focus:outline-none",onState:["active",{"bg-primary":!0,"bg-muted":!1}],click:(t,{state:o})=>o.toggle("active")},[u({class:"absolute h-5 w-5 bg-background rounded-full shadow-md transform transition-transform",onState:["active",{"translate-x-[22px]":!0,"translate-x-[2px]":!1}]})])}}),uo=[{value:"next.js",label:"Next.js"},{value:"sveltekit",label:"SvelteKit"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}],po=()=>I({submit:e=>{console.log("Profile Form submitted")}},[new g({name:"username",label:"Username",description:"This is your public display name."},[C({placeholder:"e.g. username",required:!0})]),new g({name:"email",label:"Email Address",description:"We'll use this to contact you."},[Y({placeholder:"e.g. email@address.com",required:!0})]),l({type:"submit"},"Submit")]),fo=()=>I({submit:e=>{console.log("Preferences Form submitted")}},[new g({name:"framework",label:"Favorite Framework",description:"Select your preferred framework."},[A({options:uo,required:!0})]),new g({name:"newsletter",label:"Subscribe to Newsletter",description:"Stay updated with our latest news."},[new q({label:"Yes, sign me up!"})]),l({type:"submit"},"Save Preferences")]),bo=()=>I({submit:e=>{console.log("Contact Form submitted")}},[new g({name:"phone",label:"Phone Number",description:"We may contact you at this number."},[_({placeholder:"e.g. +1234567890",required:!0})]),new g({name:"message",label:"Your Message",description:"Let us know how we can help you."},[K({placeholder:"Type your message here...",required:!0})]),l({type:"submit"},"Send Message")]),go=()=>I({submit:e=>{console.log("Settings Form submitted")}},[new g({name:"notifications",label:"Enable Notifications",description:"Toggle to enable or disable notifications."},[new ve({active:!0})]),new g({name:"volume",label:"Volume Level",description:"Set your preferred volume level."},[new we({min:0,max:100,value:50})]),l({type:"submit"},"Save Settings")]),ho=()=>p({title:"Forms",description:"Forms are used to collect user data and submit it to the server."},[a({title:"Profile Form",description:"A simple profile form with username and email fields.",preview:[po()],code:`import { Button, Input, EmailInput } from "@components/atoms/form/input.js";
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
])`}),a({title:"Preferences Form",description:"A preferences form with a select input and a checkbox.",preview:[fo()],code:`import { Button, Checkbox, Select } from "@components/atoms/form/input.js";
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
])`}),a({title:"Contact Form",description:"A contact form with a phone input and a textarea for messages.",preview:[bo()],code:`import { Button, TelInput, Textarea } from "@components/atoms/form/input.js";
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
])`}),a({title:"Settings Form",description:"A settings form with a toggle and a range slider.",preview:[go()],code:`import { Button, Toggle, RangeSlider } from "@components/atoms/form/input.js";
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
])`})]),xo=(e,t)=>!t.contains(e),wo=x({state(){return{selectedDate:this.selectedDate??null,open:!1}},render(){const e=(o,{state:n})=>n.toggle("open"),t=o=>{this.state.selectedDate=o,this.state.open=!1};return s({class:"relative w-full max-w-[320px]"},[S({class:"flex items-center gap-2 w-full justify-between border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md h-10 px-4 py-2",click:e},[u({onState:["selectedDate",o=>o?L.format("standard",o):"Pick a date"]}),y({html:i.calendar.days})]),s({class:"absolute mt-1 z-10 bg-background rounded-md shadow-lg",addEvent:["click",document,(o,{state:n,panel:r})=>{xo(o.target,r)&&(n.open=!1)}],onState:["open",o=>o?new ue({selectedDate:this.state.selectedDate,selectedCallBack:t}):null]})])}}),vo=[{value:"next.js",label:"Next.js"},{value:"sveltekit",label:"SvelteKit"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}],w=c((e,t)=>s({...e,class:"flex flex-auto items-center justify-center w-full max-w-[350px]"},t)),yo=()=>p({title:"Inputs",description:"Inputs are essential for gathering user data in forms."},[a({title:"Usage",description:"Import the input atom and use it in your components. The input can be of various types: text, password, email, etc.",preview:[s({class:"grid gap-2 w-full max-w-[350px]"},[C({type:"text",placeholder:"Enter your text here...",change:e=>console.log(e.target.value)}),Y({}),_({}),K({placeholder:"Enter your text here..."})])],code:`import { Input, EmailInput, TelInput, Textarea } from '@components/atoms/form/input.js';

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
})`}),a({title:"Radio Input",description:"This is a radio input.",preview:[s({class:"grid gap-2"},[G({name:"theme",label:"System",value:"system"}),G({name:"theme",label:"Light",value:"light"}),G({name:"theme",label:"Dark",value:"dark"})])],code:`import { Radio } from "@components/atoms/form/input.js";
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
})`}),a({title:"Tel Input",description:"This is a phone input.",preview:[w([_({})])],code:`
import { EmailInput, FileInput, Input, TelInput, Textarea } from "@components/atoms/form/input.js";

TelInput({
})`}),a({title:"Email Input",description:"This is a email input.",preview:[w([Y({})])],code:`
import { EmailInput, FileInput, Input, TelInput, Textarea } from "@components/atoms/form/input.js";

EmailInput({

})`}),a({title:"Checkbox",description:"This is a checkbox input.",preview:[new q({label:"Check me",check:e=>console.log(e)})],code:`
import { Checkbox } from '@components/atoms/form/checkbox.js';

new Checkbox({
    label: 'Check me',
    check: (checked) => console.log(checked)
})`}),a({title:"Select",description:"This is a select input.",preview:[w([A({options:vo,change:e=>console.log(e.target.value)})])],code:`import { Select } from "@components/atoms/form/select.js";

Select({
    options: [
        { value: 'next.js', label: 'Next.js' },
        { value: 'sveltekit', label: 'SvelteKit' },
        { value: 'nuxt.js', label: 'Nuxt.js' },
        { value: 'remix', label: 'Remix' },
        { value: 'astro', label: 'Astro' },
    ],
    change: (e) => console.log(e.target.value)
})`}),a({title:"Textarea",description:"This is a textarea input.",preview:[w([K({placeholder:"Enter your text here..."})])],code:`
import { EmailInput, FileInput, Input, TelInput, Textarea } from "@components/atoms/form/input.js";

Textarea({
    placeholder: 'Enter your text here...'
})`}),a({title:"Date Picker",description:"This is a date picker input.",preview:[w([new wo({selectedDate:"2022-01-01"})])],code:`
import DatePicker from "@components/molecules/date-time/date-picker.js";

new DatePicker()`}),a({title:"Range Slider",description:"This is a range slider input.",preview:[w([new we({min:0,max:100,value:50,change:e=>console.log(e)})])],code:`
import { RangeSlider } from '@components/atoms/form/range-slider.js';

new RangeSlider({
    min: 0,
    max: 100,
    value: 50,
    change: (value) => console.log(value)
})`}),a({title:"Toggle Switch",description:"This is a toggle switch input.",preview:[w([new ve({active:!0,change:e=>console.log(e)})])],code:`
import { RangeSlider } from '@components/atoms/form/range-slider.js';

new RangeSlider({
    min: 0,
    max: 100,
    value: 50,
    change: (value) => console.log(value)
})`})]),ko=[{name:"Leslie Alexander",email:"leslie.alexander@example.com",image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"Co-Founder / CEO",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Michael Foster",email:"michael.foster@example.com",image:"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"Co-Founder / CTO",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Dries Vincent",email:"dries.vincent@example.com",image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"Business Relations",status:"online"}],To=()=>p({title:"Lists",description:"Lists are used to display a collection of items in a structured format. Each item can be customized to show different information."},[a({title:"Usage",description:"To use the List component, import it from the components library and use it in your application.",preview:[Re({users:ko})],code:`import { UserListItem } from "@components/organisms/lists/user-list.js";
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
});`}),N({class:"text-lg font-bold"},"Description"),f({class:"text-muted-foreground"},"The List component can be used to display a list of items in a structured format. Each item can be customized to show different information. The List component supports appending, prepending, mingling, and deleting or items. "),N({class:"text-lg font-bold"},"Performance"),f({class:"text-muted-foreground"},"The list will only update or re-render the items that have changed, improving performance. It uses a key to know when to update an item.")]),Co=({title:e})=>k({class:"modal-header flex items-center"},[l({variant:"icon",icon:i.arrows.left,class:"mr-2 p-0 bg-transparent flex sm:hidden",click:(t,o)=>o.close()}),z({class:"text-lg font-semibold m-0"},e)]),So=c((e,t)=>be({class:`modal m-auto fixed z-20 grid w-full gap-4 border bg-background p-6 shadow-lg ${e.class}`,click:e.click},[s({class:"modal-content flex flex-auto flex-col"},[Co(e),s({class:"modal-body flex flex-auto"},t),ge({class:"modal-footer flex justify-between"},e.buttons)])]));class Io extends ee{render(){const t=r=>{r.target===this.panel&&this.close()},o=this.getMainClass(),n=this.title||"Are you abosolutely sure?";return So({class:o,click:t,title:n,buttons:this.getButtons(),aria:{expanded:["open"]}},this.children)}getButtons(){return[l({variant:"outline",click:()=>this.close()},"Cancel"),l({variant:"primary",click:()=>this.confirm()},"Save")]}getSizeClass(){switch(this.size){case"sm":return"sm max-w-[646px]";case"lg":return"lg max-w-[900px]";case"xl":return"xl max-w-[1400px]";default:return"medium max-w-[760px]"}}getTypeClass(){switch(this.type){case"right":return"right right-0";case"left":return"left left-0";default:return""}}getMainClass(){return this.getSizeClass()+" "+this.getTypeClass()}}const B=[{label:"Large",buttonStyle:"primary",size:"lg"},{label:"Small",buttonStyle:"secondary",size:"sm"},{label:"Medium",buttonStyle:"destructive",size:"md"},{label:"XL",buttonStyle:"primary",size:"xl"},{label:"Right",buttonStyle:"ghost",type:"right"},{label:"Left",buttonStyle:"link",type:"left"}],j=({label:e,buttonStyle:t,size:o,type:n})=>l({text:e,class:`m-1 ${t}`,click:()=>new Io({title:"Are you absolutely sure?",size:o,type:n}).open()}),Bo=()=>p({title:"Modals",description:"Displays a modal or a component that looks like a modal."},[a({title:"Extra Large Modal",description:"This is an extra large modal.",preview:[j(B[3])],code:`
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
});`}),a({title:"Large Modal",description:"This is a large modal.",preview:[j(B[0])],code:`
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
});`}),a({title:"Small Modal",preview:[j(B[1])],code:`
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
});`}),a({title:"Medium Modal",preview:[j(B[2])],code:`
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
});`}),a({title:"Right Modal",preview:[j(B[4])],code:`
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
});`})]),jo=()=>p({title:"Navigations",description:"Navigations are components that help users move around the website or application."},[a({title:"Inline Navigation",description:"The inline navigation component is a simple navigation component that can be used in a sidebar or app shell.",preview:[s({class:"flex flex-auto flex-col w-full border rounded-md max-w-[300px]"},[new He({options:[{label:"Home",href:"/",icon:i.home},{label:"About",href:"/about"},{label:"Contact",href:"/contact"},{label:"Services",options:[{label:"Web Development",href:"/web-development"}]},{group:"Frameworks",options:[{label:"Next.js",href:"/next"},{label:"SvelteKit",href:"/sveltekit"},{label:"Nuxt.js",href:"/nuxt"},{label:"Remix",href:"/remix"},{label:"Astro",href:"/astro"}]}]})])],code:`import { Button } from '@components/organisms/navigation/inline-navigation.js';
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
})`})]),Do=()=>p({title:"Notifications",description:"Displays a notification message to the user."},[a({title:"In App Notifications",description:"Notifications can be displayed in the app to inform users about important events or updates. They are a global notification container that can be called from anywhere in the app.",preview:[new Oe({title:"Notification Title",description:"This is a notification.",icon:i.warning,duration:"infinite"})],code:`app.notify({
    title: 'Notification Title',
    description: 'This is a notification.',
    icon: Icons.warning,
    type: 'warning', // 'success', 'destructive', 'info', 'warning'
    duration: 5000 // in milliseconds, leave it blank for 4 seconds, infinite is also a value to prevent it from going away
})`}),f({class:"text-muted-foreground"},"Notifications will stack if a few are called at the same time. The notification will be until the duration has been met. If a notificaiton duration is set to 'infinite', it must be removed by the user.  "),a({title:"Usage",description:"Call 'notify' the gloabl notification container to display notifications.",preview:[l({click:()=>{app.notify({title:"Notification Title",description:"This is a notification.",icon:i.warning,type:"warning"})}},"Show")],code:`app.notify({
    title: 'Notification Title',
    description: 'This is a notification.',
    icon: Icons.warning,
    type: 'warning', // 'success', 'destructive', 'info', 'warning'
    duration: 5000 // in milliseconds, leave it blank for 4 seconds, infinite is also a value to prevent it from going away
})`})]),Ao=()=>s({class:"absolute h-full rounded-full bg-primary transition-all duration-300",style:"width: [[progress]]%;"}),Fo=x({render(){return s({class:"relative w-full h-4 rounded-full bg-muted"},[Ao()])},state(){return{progress:this.progress??0}},set(e){e<0&&(e=0),e>100&&(e=100),this.state.progress=e}}),$o=()=>p({title:"Progress Bars",description:"Progress bars are a great way to show the progress of a task or process."},[a({title:"Usage",description:"Import the progress bar atom and use it in your components. The progress bar can be used to show the progress of a task or process.",preview:[new Fo({cache:"progress",progress:20})],code:`import { ProgressBar } from "@components/atoms/progress-bar.js";

new ProgressBar({ cache: 'progress', progress: 20 })`})]),T=({className:e,shape:t="rectangle",width:o="w-full",height:n="h-4"})=>s({class:`bg-muted animate-pulse ${o} ${n} ${t==="circle"?"rounded-full":"rounded-md"} ${e||""}`}),Po=()=>p({title:"Skeletons",description:"Skeletons are components that are used to show a placeholder for content that is loading."},[a({title:"Usage",description:"The skeleton component is used to show a placeholder for content that is loading.",preview:[s({class:"flex flex-auto space-x-4 w-full max-w-64"},[T({shape:"circle",width:"w-10",height:"h-10"}),s({class:"flex flex-auto flex-col space-y-2"},[T({width:"w-3/4",height:"h-4"}),T({width:"w-1/2",height:"h-4"})])])],code:`import { Skeleton } from "@components/atoms/skeleton.js";
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
])`})]),ne=c((e,t)=>s({class:"py-4"},t)),Mo=()=>p({title:"Tabs",description:"Displays a tab or a component that looks like a tab."},[a({title:"Button Tab",description:"This is a button tab. The buttons to not route.",preview:[new xe({class:"mt-4 max-w-[400px]",options:[{label:"Preview",value:"preview",layout:ne([])},{label:"Code",value:"code",layout:ne([])}]})],code:`
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
);`}),a({title:"Link Tab",description:"This is a link tab. The buttons route to a different page.",preview:[new ze({class:"max-w-[400px]",options:[{label:"Example 1",href:"docs/components/tabs/example-1",component:new M({class:"p-8"},"This is an example 1 tab panel.")},{label:"Example 2",href:"docs/components/tabs/example-2",component:new M({class:"p-8"},"This is an example 2 tab panel.")},{label:"Example 3",href:"docs/components/tabs/example-3",component:new M({class:"p-8"},"This is an example 3 tab panel.")}]})],code:`
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
);`})]),re={top:"bottom-full left-1/2 transform -translate-x-1/2 mb-2","top-right":"bottom-full left-full transform -translate-x-1 mb-2","top-left":"bottom-full right-full transform translate-x-1 mb-2",bottom:"top-full left-1/2 transform -translate-x-1/2 mt-2","bottom-right":"top-full left-full transform -translate-x-1 mt-2","bottom-left":"top-full right-full transform translate-x-1 mt-2",left:"top-1/2 right-full transform -translate-y-1/2 mr-2",right:"top-1/2 left-full transform -translate-y-1/2 ml-2"},Eo=e=>re[e]||re.top,ie=c(({position:e="top",content:t},o)=>{const n=Eo(e);return s({class:"relative group inline-block"},[o,u({class:`
                absolute z-20 px-2 py-1 border text-sm bg-background rounded shadow-md opacity-0 whitespace-nowrap
                group-hover:opacity-100 transition-opacity duration-200 ${n} pointer-events-none
            `},t)])}),Lo=()=>p({title:"Tooltips",description:"This is a tooltip."},[a({title:"Usage",description:"Import the card atom and use it in your components.",preview:[s({class:"flex gap-2 flex-wrap"},[ie({content:"This is a tooltip."},[l("Hover me")])])],code:`import { Button } from "@components/atoms/buttons/buttons.js";
import { Tooltip } from "@components/atoms/tooltip.js";

Tooltip({ content: 'This is a tooltip.' }, [
    Button('Hover me')
])`}),a({title:"Bottom Tooltip",description:"This will show the tooltip at the bottom of the target element.",preview:[s({class:"flex gap-2 flex-wrap"},[ie({content:"This is a tooltip.",position:"bottom"},[l("Hover me")])])],code:`import { Button } from "@components/atoms/buttons/buttons.js";
import { Tooltip } from "@components/atoms/tooltip.js";

Tooltip({ content: 'This is a tooltip.', position: 'bottom' }, [
    Button('Hover me')
])`}),f({class:"text-muted-foreground text-sm mt-4"},"The tooltip position can be set to: top, top-right, top-left, bottom, bottom-right, bottom-left, left, right.")]),le=(e,t,o)=>(o="Icons"+(o?"."+o:""),s({class:"flex flex-auto flex-col items-center gap-2 max-w-[150px] h-[8.5rem] cursor-pointer"},[s({class:"flex flex-auto w-full h-full justify-center items-center flex-wrap rounded-lg border bg-card text-base shadow-sm hover:bg-accent hover:text-accent-foreground",click:()=>{navigator.clipboard.writeText(`${o}.${t}`)}},[D(e)]),s({class:"text-muted-foreground"},t)])),ye=(e,t,o)=>{const n=typeof e=="object";n&&t.push(f({class:"text-muted-foreground"},"path: "+o+".{icon}"));const r=[];if(t.push(s({class:"flex flex-auto flex-wrap gap-2 my-8"},r)),n===!1)r.push(le(e,o));else for(var m in e){if(e.hasOwnProperty(m)===!1)continue;const v=e[m];if(typeof v!="object"){r.push(le(v,m,o));continue}const F=`${o}.${m}`;ye(v,t,F)}},No=e=>{if(!e||typeof e!="object")return;const t=[];for(let[o,n]of Object.entries(e)){if(o==="parse")continue;t.push(he({id:o.toLowerCase(),class:"text-2xl font-bold"},Ue.titleCase(o))),ye(n,t,o)}return t},Ro=()=>p({title:"Icons",description:"The icons are from the Hericon library. They are SVG icons that can be used in your project. This icon set uses the outline style."},[Z({href:"https://heroicons.com/",target:"_blank",class:"bttn link"},"link: Hericons"),a({title:"Icons",description:"This is an icon.",preview:[y({html:i.home})],code:`
import { Icons } from '@components/icons/icons.js';
import { I } from '@base-framework/atoms';

export const HomeIcon = () => (
    I({ html: Icons.home} )
);`}),s({class:"my-20"},[E({class:"text-2xl font-bold"},"Default Icons"),f({class:"text-muted-foreground"},'A few of the icons have been saved to the "Icons" object. You can use these icons in your project. Click to copy the Icon path. Here is a list of the icons that are available:')]),a({title:"Icon Atom",description:"An Icon is a helper atom that makes it easier to use icons in your project. ",preview:[D(i.home)],code:`
import { Icon } from '@components/atoms/icon.js';

Icon(Icons.home);`}),s({class:"my-20"},[E({class:"text-2xl font-bold"},"Default Icons"),f({class:"text-muted-foreground"},'A few of the icons have been saved to the "Icons" object. You can use these icons in your project. Click to copy the Icon path. Here is a list of the icons that are available:')]),No(i)]),Ho=()=>p({title:"Introduction",description:"This app shell was created to showcase Base framework and its components and atoms. It is a simple app shell that can be used as a starting point for your project. It is built with Tailwind CSS and uses Shadcn as the inspiration for the theme and many of it's components. "}),Oo=e=>s({class:"flex flex-auto flex-col items-center gap-2 max-w-[150px] h-[8.5rem] cursor-pointer"},[s({class:`flex flex-auto w-full h-full min-h-[136px] justify-center items-center flex-wrap rounded-lg border text-base shadow-sm ${e.class}`,click:()=>{navigator.clipboard.writeText(`${e.class}`)}}),s({class:"text-sm text-muted-foreground"},e.var)]),h=(e,t)=>H({class:"flex flex-auto flex-col gap-2"},[f({class:"text-base text-muted-foreground"},e),s({class:"flex flex-auto flex-wrap gap-2 my-2",map:[t,Oo]})]),zo=e=>s({class:"flex flex-auto flex-col gap-12"},[he({class:"text-2xl font-bold"},"Color Guide"),h("Default background color of <body />...etc",[{var:"--backround",class:"bg-backround"},{var:"--foreground",class:"bg-foreground"}]),h("Muted backgrounds such as <TabsList />, <Skeleton /> and <Switch />",[{var:"--muted",class:"bg-muted"},{var:"--muted-foreground",class:"bg-muted-forground"}]),h("Background color for <Card />",[{var:"--card",class:"bg-card"},{var:"--card-foreground",class:"bg-card-foreground"}]),h("Background color for popovers such as <DropdownMenu />, <HoverCard />, <Popover />",[{var:"--popover",class:"bg-popover"},{var:"--popover-foreground",class:"bg-popover-foreground"}]),h("Default border color",[{var:"--border",class:"bg-border"}]),h("Border color for inputs such as <Input />, <Select />, <Textarea />",[{var:"--input",class:"bg-input"}]),h("Primary colors for <Button />",[{var:"--primary",class:"bg-primary"},{var:"--primary-foreground",class:"bg-primary-foreground"}]),h("Secondary colors for <Button />",[{var:"--secondary",class:"bg-secondary"},{var:"--secondary-foreground",class:"bg-secondary-foreground"}]),h("Used for accents such as hover effects on <DropdownMenuItem>, <SelectItem>...etc",[{var:"--accent",class:"bg-accent"},{var:"--accent-foreground",class:"bg-accent-foreground"}]),h('Used for destructive actions such as <Button variant="destructive">',[{var:"--destructive",class:"bg-destructive"},{var:"--destructive-foreground",class:"bg-destructive-foreground"}]),h('Used for warning actions such as <Button variant="warning">',[{var:"--warning",class:"bg-warning"},{var:"--warning-foreground",class:"bg-warning-foreground"}]),h("Used for focus ring",[{var:"--ring",class:"bg-ring"}]),h("Border radius for card, input and buttons",[{var:"--radius",class:"bg-radius"}])]),Uo=()=>p({title:"Theme",description:"The theme is using Tailwind CSS and is based on Shadcn UI. The theme is customizable and can be extended. It comes with light and dark theme support."},[Z({href:"https://ui.shadcn.com/docs/theming",target:"_blank",class:"bttn link"},"link: Shadcn"),s({class:"my-20"},[E({class:"text-2xl font-bold"},"Default Styles"),f({class:"text-muted-foreground"},"The default styles are defined in the Tailwind CSS configuration file and in the base CSS file. Here's the list of variables available for customization:")]),zo(),s({class:"flex flex-auto flex-col gap-2 mt-20"},[N({class:"text-2xl font-bold"},"Text Sizes"),f({class:"text-muted-foreground text-3xl"},"Text-3xl A test sentence."),f({class:"text-muted-foreground text-2xl"},"Text-2xl A test sentence."),f({class:"text-muted-foreground text-xl"},"Text-xl A test sentence."),f({class:"text-muted-foreground text-lg"},"Text-lg A test sentence."),f({class:"text-muted-foreground text-base"},"Text-base A test sentence."),f({class:"text-muted-foreground text-sm"},"Text-sm A test sentence."),f({class:"text-muted-foreground text-xs"},"Text-xs A test sentence.")])]),d=(e,t,o)=>({uri:e,title:t,component:o()}),qo=e=>[d(`${e}`,"Introduction",Ho),d(`${e}/theme`,"Theme",Uo),d(`${e}/icons`,"Icons",Ro),d(`${e}/components/buttons*`,"Buttons",dt),d(`${e}/components/badges*`,"Badges",at),d(`${e}/components/tabs*`,"Tabs",Mo),d(`${e}/components/modals*`,"Modals",Bo),d(`${e}/components/notifications*`,"Notifications",Do),d(`${e}/components/dialogs*`,"Modals",Xt),d(`${e}/components/cards*`,"Cards",$t),d(`${e}/components/calendars*`,"Calendars",pt),d(`${e}/components/avatars*`,"Avatars",tt),d(`${e}/components/inputs*`,"Inputs",yo),d(`${e}/components/forms*`,"Forms",ho),d(`${e}/components/alerts*`,"Alerts",et),d(`${e}/components/comboboxes*`,"Comboboxes",Rt),d(`${e}/components/lists*`,"Lists",To),d(`${e}/components/data-tables*`,"Data Tables",Vt),d(`${e}/components/breadcrumbs*`,"Breadcrumbs",mt),d(`${e}/components/navigations*`,"Navigations",jo),d(`${e}/components/progress-bars*`,"Progress Bars",$o),d(`${e}/components/skeletons*`,"Skeletons",Po),d(`${e}/components/tooltips*`,"Tooltips",Lo),d(`${e}/components/dropdown-menus*`,"Dropdown Menus",mo)],Go=e=>[{href:`${e}`,label:"Introduction",exact:!0},{href:`${e}/theme`,label:"Theme",exact:!0},{href:`${e}/icons`,label:"Icons"},{group:"Components",options:[{label:"Buttons",href:`${e}/components/buttons`},{label:"Badges",href:`${e}/components/badges`},{label:"Tabs",href:`${e}/components/tabs`},{label:"Modals",href:`${e}/components/modals`},{label:"Notifications",href:`${e}/components/notifications`},{label:"Dialogs",href:`${e}/components/dialogs`},{label:"Cards",href:`${e}/components/cards`},{label:"Calendars",href:`${e}/components/calendars`},{label:"Avatars",href:`${e}/components/avatars`},{label:"Inputs",href:`${e}/components/inputs`},{label:"Forms",href:`${e}/components/forms`},{label:"Alerts",href:`${e}/components/alerts`},{label:"Comboboxes",href:`${e}/components/comboboxes`},{label:"Lists",href:`${e}/components/lists`},{label:"Data Tables",href:`${e}/components/data-tables`},{label:"Breadcrumbs",href:`${e}/components/breadcrumbs`},{label:"Navigations",href:`${e}/components/navigations`},{label:"Progress Bars",href:`${e}/components/progress-bars`},{label:"Skeletons",href:`${e}/components/skeletons`},{label:"Tooltips",href:`${e}/components/tooltips`},{label:"Dropdown Menus",href:`${e}/components/dropdown-menus`}]}],Wo=()=>new ke({backHref:"aside/"},[new M([s([k([me("Overlay")]),s({class:"contained"},[qe()])])])]),Vo=e=>[{uri:`${e}/overlay-test`,component:Wo()}],P="docs",Ko=()=>new Te({title:"Documentation",basePath:P,routes:Vo(P),switch:qo(P),links:Go(P)});export{Ko as DocumentationPage,Ko as default};
