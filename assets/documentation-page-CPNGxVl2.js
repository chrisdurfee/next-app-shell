import{O as Pe,A as Ee}from"./overlay-C6geJDaz.js";import{w as z,m as o,R as w,a as me,D as K,H as X,b as $,X as m,p as Le,c as Ne,U as D,I as O,S as d,B as He,d as Oe,C as ue,A as Re,e as i,f as ee,y as r,g as y,h as U,T as x,i as l,j as V,L as qe,k as pe,l as se,u as R,q as j,n as fe,t as We,o as q,v as ze,r as B,s as W,x as v,O as Ue,z as Ve,Z as Ge,E as be,J as ae,K as Je,M as L,N as _e,Q as ge,V as he,W as Y,Y as Z,$ as Qe,a0 as J,a1 as Ye,a2 as Ze,a3 as Ke,a4 as Xe,P as H,a5 as xe,a6 as et,G as tt}from"./index-D4aGQ5-B.js";const ot=e=>X({class:"inline-flex flex-auto items-center justify-center whitespace-nowrap rounded-sm text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",dataSet:["selected",["state",e.value,"active"]]},[$({class:"flex flex-auto justify-center items-center px-3 py-1.5",onSet:["selected",{selected:e.value}],click:t=>e.callBack(e.value)},e.label)]),st=(e,t)=>(e.callBack=t,ot(e)),at=e=>me({class:`tab items-center justify-center rounded-md bg-muted p-1 text-muted-foreground ${e.class}`},[K({class:"flex flex-auto flex-row",map:[e.options,t=>st(t,e.callBack)]})]);class we extends z{render(){const t=this.select.bind(this);return o({class:""},[at({class:this.class,options:this.options,callBack:t}),w({class:"tab-content",onState:["selected",this.updateContent.bind(this)]})])}getFirstValue(){var t;return(t=this.options[0])==null?void 0:t.value}update(){const t=this.state.get("selected");this.select(null),this.select(t)}select(t){this.state.selected=t}updateContent(t){const s=this.options;if(!s||s.length<1)return;const n=s[0];for(const c of s)if(c.value===t)return c.layout;return n.layout}setupStates(){const t=this.callBack,s=typeof t;return{selected:{state:this.getFirstValue(),callBack(n){s==="function"&&t(n)}}}}}const ve=m((e,t)=>Le({class:"flex p-4 min-h-[350px] max-h-[650px] overflow-x-auto rounded-lg border bg-muted whitespace-break-spaces cursor-pointer"},[Ne({class:"font-mono text-sm",click:()=>navigator.clipboard.writeText(t[0].textContent)},t)])),nt=m((e,t)=>o({class:"flex p-4 min-h-[350px] max-h-[650px] overflow-x-auto rounded-lg border bg-card"},[o({class:"preview flex w-full justify-center items-center"},t)])),ne=m((e,t)=>o({class:"py-4"},t)),rt=e=>new we({class:"mt-4 max-w-[400px]",options:[{label:"Preview",value:"preview",layout:ne([nt(e.preview)])},{label:"Code",value:"code",layout:ne([ve(e.code)])}]}),it=m(({title:e,description:t})=>D({class:"flex flex-col"},[O({class:"scroll-m-20 text-2xl font-bold tracking-tight"},e),t&&d({class:"text-base text-muted-foreground py-2 max-w-[700px]"},t)])),a=m((e,t)=>w({class:"py-4"},[it({title:e.title,description:e.description}),rt({preview:e.preview,code:e.code})]));class lt extends He{render(){return Oe([o({class:"contained px-4 flex flex-auto flex-col"},this.children)])}}const ct=m(({title:e,description:t})=>D({class:"flex flex-col"},[ue({class:"scroll-m-20 text-3xl font-bold tracking-tight"},e),d({class:"text-base text-muted-foreground py-2 max-w-[700px]"},t)])),dt=m((e,t)=>o({class:"contained py-8"},[ct(e),w({class:"pb-12 pt-8"},t)])),f=m((e,t)=>new lt([dt(e,t)])),mt=()=>f({title:"Alerts",description:"Alerts are used to provide feedback to the user about the outcome of an action or to inform them of important information."},[a({title:"Usage",description:"To use the Alert component, import it from the components library and use it in your application.",preview:[Re({title:"Heads up!",description:"You can add components to your app using the cli.",icon:i.information})],code:`import { Alert } from "@components/molecules/alert.js";
import { Icons } from "@components/icons/icons.js";

Alert({
    title: 'Heads up!',
    description: 'You can add components to your app using the cli.',
    icon: Icons.information
})`})]),ut=()=>f({title:"Cards",description:"Cards are a great way to display content in a concise and organized manner."},[a({title:"Usage",description:"Import the card atom and use it in your components. The avatar can be set to multiple sizes: xs, sm, lg, xl, 2xl, 3xl.",preview:[ee({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN"})],code:`import { Button } from '@components/atoms/cards/card.js';

Avatar({
    src: 'https://github.com/shadcn.png',
    alt: '@shadcn',
    fallbackText: 'CN',
    size: 'md' // You can change the size to xs, sm, lg, xl, 2xl, 3xl
})`})]),re={gray:{backgroundColor:"bg-gray-50",textColor:"text-gray-600",ringColor:"ring-gray-500/10"},red:{backgroundColor:"bg-red-50",textColor:"text-red-700",ringColor:"ring-red-600/10"},yellow:{backgroundColor:"bg-yellow-50",textColor:"text-yellow-800",ringColor:"ring-yellow-600/20"},green:{backgroundColor:"bg-green-50",textColor:"text-green-700",ringColor:"ring-green-600/20"},blue:{backgroundColor:"bg-blue-50",textColor:"text-blue-700",ringColor:"ring-blue-700/10"},indigo:{backgroundColor:"bg-indigo-50",textColor:"text-indigo-700",ringColor:"ring-indigo-700/10"},purple:{backgroundColor:"bg-purple-50",textColor:"text-purple-700",ringColor:"ring-purple-700/10"},pink:{backgroundColor:"bg-pink-50",textColor:"text-pink-700",ringColor:"ring-pink-700/10"},primary:{backgroundColor:"bg-primary",textColor:"text-primary-foreground",ringColor:"ring-primary/10"},secondary:{backgroundColor:"bg-secondary",textColor:"text-secondary-foreground",ringColor:"ring-secondary/10"},destructive:{backgroundColor:"bg-destructive",textColor:"text-destructive-foreground",ringColor:"ring-destructive/10"},warning:{backgroundColor:"bg-warning",textColor:"text-warning-foreground",ringColor:"ring-warning/10"},outline:{backgroundColor:"bg-background",textColor:"text-primary",ringColor:"ring-input"},ghost:{backgroundColor:"bg-background",textColor:"text-primary",ringColor:"ring-background"},link:{backgroundColor:"bg-background",textColor:"text-primary",ringColor:"ring-background"}},pt=e=>re[e]||re.gray,ft=e=>{const{backgroundColor:t,textColor:s,ringColor:n}=pt(e);return`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors ${t} ${s} ${n}`},g=m((e,t)=>{const s=ft(e==null?void 0:e.type);return r({...e,class:s},t)}),bt=()=>f({title:"Badges",description:"Badges can be used to display a status or a count."},[a({title:"Badge",description:"This is a badge.",preview:[o({class:"flex gap-2 flex-wrap"},[g({type:"gray"},"Text"),g({type:"red"},"Text"),g({type:"yellow"},"Text"),g({type:"green"},"Text"),g({type:"blue"},"Text"),g({type:"indigo"},"Text"),g({type:"purple"},"Text"),g({type:"pink"},"Text"),g({type:"primary"},"Text"),g({type:"secondary"},"Text"),g({type:"destructive"},"Text"),g({type:"warning"},"Text"),g({type:"outline"},"Text"),g({type:"ghost"},"Text"),g({type:"link"},"Text")])],code:`
import { Button } from '@components/atoms/badges/badges.js';
import { Atom } from '@base-framework/base';

export const PrimaryBadge = Atom((props, children)) => (
    Badge({ ...props, type: 'gray' }, children)
);`})]),gt=(e,t)=>x({href:e,"aria-current":t==="Breadcrumb"?"page":null,class:"text-muted-foreground hover:text-foreground"},[r(t)]),ht=()=>r({class:"mx-2 text-muted-foreground","aria-hidden":!0,html:">"}),xt=e=>o({class:"flex items-center"},[e.href?gt(e.href,e.label):r(e.label),e.separator&&ht()]),wt=y({setData(){return new U({items:this.items||[]})},render(){return me({"aria-label":"Breadcrumb",class:"flex items-center space-x-1 text-sm"},[o({role:"list",class:"flex items-center",for:["items",(e,t)=>xt({href:e.href,label:e.label,separator:t<this.data.items.length-1})]})])}}),vt=[{href:"/",label:"Home"},{href:"/components",label:"Components"},{label:"Breadcrumb"}],yt=()=>f({title:"Breadcrumbs",description:"Breadcrumbs are a navigation aid that helps users understand their location within a website or application."},[a({title:"Usage",description:"To use the Breadcrumb component, import it and provide an array of items. Each item can have a label and an optional href.",preview:[new wt({items:vt})],code:`import { Breadcrumb } from "@components/molecules/breadcrumb/breadcrumb.js";

new Breadcrumb({ items: [
    { href: '/', label: 'Home' },
    { href: '/components', label: 'Components' },
    { label: 'Breadcrumb' } // Last item, no href needed
] })`})]),kt=()=>f({title:"Button",description:"Displays a button or a component that looks like a button."},[a({title:"Usage",description:"Import the button atom and use it in your components. This platform has variants for different use cases. The variant can be set using the `variant` prop.",preview:[l({variant:"primary"},"Click Me")],code:`import { Button } from '@components/atoms/buttons/buttons.js';

Button({ ...props, variant: 'secondary' }, primary)`}),D({class:"flex flex-col py-8"},[V({class:"text-3xl font-bold tracking-tight border-b pb-2"},"Variants")]),a({title:"Primary Button",description:"This is a primary button.",preview:[l({variant:"primary"},"Click Me")],code:`
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

Button({ variant: 'withIcon', icon: Icons.home }, 'With Icon')`}),a({title:"Loading Button",preview:[qe("With Icon")],code:`import { LoadingButton } from '@components/atoms/buttons/buttons.js';

LoadingButton('With Icon')`})]),Tt=()=>R.formatTime("",24),Ct=()=>f({title:"Calendars",description:"This is the calendar component documentation."},[a({title:"Usage",description:"This is how you can use the calendar component.",preview:[new pe],code:`@components/organisms/calendar/calendar.js';

new Calendar()`}),a({title:"Dynamic Time",description:"This is how you can use the calendar component.",preview:[new se({filter:()=>{let e="Morning";const t=Tt();return t>="18:00:00"?e="Evening":t>="12:00:00"&&(e="Afternoon"),`Good ${e}`}})],code:`import { DateTime } from "@base-framework/base";
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
})`}),a({title:"Dynamic Local Time by Time Frame",description:"This will show the time frame based on the local time. This will update the time frame every minute to keep the time frame updated.",preview:[new se({dateTime:"2024-11-04T18:00:00",filter(e){const t=R.getLocalTime(e,!0);return R.getTimeFrame(t)}})],code:`import { DateTime } from "@base-framework/base";
import { DynamicTime } from "@base-framework/organisms";

new DynamicTime({
    dateTime: '2024-11-04T18:00:00',
    filter(date)
    {
        // convert to local time
        const localTime = DateTime.getLocalTime(date, true);
        return DateTime.getTimeFrame(localTime);
    }
})`})]),T=m((e,t)=>o({...e,class:`rounded-lg border bg-card text-card-foreground shadow-md min-w-[120px] min-h-[80px] my-5 mx-5 p-4 ${e.class||""}`},t)),C=m((e,t)=>{var s;return j({...e,html:(s=t[0])==null?void 0:s.textContent})}),St=m((e,t)=>o({...e,class:"flex flex-auto flex-col space-y-2"},t)),jt=m((e,t)=>fe({...e,class:"flex auto text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"},t)),It=m((e,t)=>d({...e,class:"text-sm text-muted-foreground"},t)),Bt=m((e,t)=>d({...e,class:"text-sm text-destructive"},t)),Dt=e=>e.tag==="input"||e.tag==="select"||e.tag==="textarea",At=m((e,t)=>{const s=u=>{e.setError(u.target.validationMessage)},n=u=>{u.target.checkValidity()&&e.setError(null)},c=t.map(u=>u.required&&Dt(u)?{...u,aria:{invalid:["hasError"]},invalid:s,input:n}:u);return o({...e,class:"w-full"},c)}),b=y({state(){return{error:null,hasError:!1,value:this.defaultValue??""}},render(){const e=this.name,t=this.getId(`${e}`),{label:s,description:n}=this,c=u=>{this.state.error=u,this.state.hasError=!!u};return o({class:"flex flex-auto space-y-4"},[St([jt({htmlFor:t},s),At({id:t,name:e,value:this.state.value,setError:c},this.children),n&&It({id:this.getId("description")},n),o({onState:["error",u=>u&&Bt(u)]})])])}}),Ft=(e,t=null)=>{e.target.checkValidity()&&(e.preventDefault(),t&&t(e))},A=m((e,t)=>We({...e,submit:s=>Ft(s,e.submit),class:"space-y-8 w-full max-w-lg"},t)),F=({title:e,description:t})=>D({class:"text-left"},[V({class:"font-semibold tracking-tight text-2xl"},e),d({class:"text-sm text-muted-foreground"},t)]),Mt=()=>o({class:"flex items-center justify-center gap-4"},[l({variant:"outline",class:"gap-2 w-full",click:()=>console.log("Sign in with Github"),"aria-label":"Sign in with Github"},[C(i.companies.gitHub),r("Github")]),l({variant:"outline",class:"gap-2 w-full",click:()=>console.log("Sign in with Google"),"aria-label":"Sign in with Google"},[C(i.companies.google),r("Google")])]),$t=()=>A({submit:e=>{e.preventDefault(),console.log("Account created")}},[new b({name:"email",label:"Email"},[q({type:"email",placeholder:"m@example.com",required:!0,class:"border p-2 rounded-md w-full bg-background placeholder-muted-foreground text-foreground"})]),new b({name:"password",label:"Password"},[q({type:"password",placeholder:"Your password",required:!0,class:"border p-2 rounded-md w-full bg-background placeholder-muted-foreground text-foreground"})]),l({type:"submit",class:"w-full mt-4 py-2 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition"},"Create account")]),ye=()=>T({class:"w-full max-w-md mx-auto p-8 bg-card space-y-6"},[F({title:"Create an account",description:"Enter your email below to create your account"}),Mt(),o({class:"relative"},[o({class:"absolute inset-0 flex items-center"},[r({class:"flex-grow border-t"})]),o({class:"relative flex justify-center text-xs uppercase"},[r({class:"bg-background px-2 text-muted-foreground"},"or continue with")])]),$t()]),te=y({state(){return{active:this.active??!1}},render(){return $({class:"inline-flex h-6 w-11 min-w-11 items-center rounded-full bg-muted transition-colors focus:outline-none",onState:["active",{"bg-primary":!0,"bg-muted":!1}],click:(t,{state:s})=>s.toggle("active")},[r({class:"absolute h-5 w-5 bg-background rounded-full shadow-md transform transition-transform",onState:["active",{"translate-x-[22px]":!0,"translate-x-[2px]":!1}]})])}}),_=({title:e,description:t,defaultState:s,onChange:n})=>o({class:"flex items-start justify-between gap-2"},[o({class:"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex flex-col space-y-1"},[r({class:"font-medium text-foreground"},e),r({class:"font-normal leading-snug text-muted-foreground"},t)]),new te({active:s,change:n})]),ke=()=>T({class:"w-full max-w-md mx-auto p-6 bg-card space-y-6"},[F({title:"Cookie Settings",description:"Manage your cookie settings here."}),o({class:"pt-0 grid gap-6"},[_({title:"Strictly Necessary",description:"These cookies are essential in order to use the website and use its features.",defaultState:!0,onChange:e=>console.log("Strictly Necessary:",e)}),_({title:"Functional Cookies",description:"These cookies allow the website to provide personalized functionality.",defaultState:!1,onChange:e=>console.log("Functional Cookies:",e)}),_({title:"Performance Cookies",description:"These cookies help to improve the performance of the website.",defaultState:!1,onChange:e=>console.log("Performance Cookies:",e)})]),l({variant:"outline",class:"w-full",click:()=>console.log("Preferences saved")},"Save preferences")]),Pt=(e,t)=>!t.contains(e),Te=y({state(){return{selectedDate:this.selectedDate??null,open:!1}},render(){const e=(s,{state:n})=>n.toggle("open"),t=s=>{this.state.selectedDate=s,this.state.open=!1};return o({class:"relative w-full max-w-[320px]"},[$({class:"flex items-center gap-2 w-full justify-between border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md h-10 px-4 py-2",click:e},[r({onState:["selectedDate",s=>s?R.format("standard",s):"Pick a date"]}),j({html:i.calendar.days})]),o({class:"absolute mt-1 z-10 bg-background rounded-md shadow-lg",addEvent:["click",document,(s,{state:n,panel:c})=>{Pt(s.target,c)&&(n.open=!1)}],onState:["open",s=>s?new pe({selectedDate:this.state.selectedDate,selectedCallBack:t}):null]})])}}),Ce=({startDate:e})=>T({class:"w-full max-w-md mx-auto p-6 bg-card space-y-6"},[F({title:"Pick a Date",description:"When is the event?"}),o({class:"font-medium text-foreground"},[new Te({selectedDate:e,selectedCallBack:t=>console.log(t)})])]),S=m(e=>({tag:"select",...e,class:`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${e.class||""}`,onCreated(t){e.options&&ze.setupSelectOptions(t,e.options)}})),Q=m(({value:e,label:t,icon:s})=>$({class:'text-sm gap-1 font-medium leading-none disabled:cursor-not-allowed disabled:opacity-70 flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground data-[state="active"]:border-primary [&:has([data-state="active"])]:border-primary',onState:["method",{active:e}],dataSet:["method",["state",e,"active"]],click:(n,{state:c})=>c.method=e},[C(s),r(t)])),Et=y({render(){return o({class:"flex flex-auto flex-col"},[o({class:"grid grid-cols-3 gap-4"},[Q({label:"Card",value:"card",icon:i.creditCard}),Q({label:"Paypal",value:"paypal",icon:i.companies.paypal}),Q({label:"Apple",value:"apple",icon:i.companies.apple})])])},state(){return{method:null}}}),Lt=()=>o({class:"flex items-center justify-center gap-4"},[new Et]),Nt=()=>A({submit:e=>{e.preventDefault(),console.log("Payment method added")}},[new b({name:"name",label:"Name"},[B({type:"text",placeholder:"First Last",required:!0,class:"border p-2 rounded-md w-full bg-background placeholder-muted-foreground text-foreground"})]),new b({name:"card_number",label:"Card number"},[B({type:"text",placeholder:"1234 5678 9012 3456",required:!0,class:"border p-2 rounded-md w-full bg-background placeholder-muted-foreground text-foreground"})]),o({class:"flex gap-4 mt-4"},[new b({name:"month",label:"Expires"},[S({required:!0,class:"border p-2 rounded-md w-full bg-background text-foreground",options:[{value:"",label:"Month",disabled:!0},...Array.from({length:12},(e,t)=>({value:`${t+1}`,label:`${t+1}`.padStart(2,"0")}))]})]),new b({name:"year",label:"Year"},[S({required:!0,class:"border p-2 rounded-md w-full bg-background text-foreground",options:[{value:"",label:"Year",disabled:!0},...Array.from({length:10},(e,t)=>({value:`${new Date().getFullYear()+t}`,label:`${new Date().getFullYear()+t}`}))]})]),new b({name:"cvc",label:"CVC"},[B({type:"text",placeholder:"CVC",required:!0,class:"border p-2 rounded-md w-full bg-background placeholder-muted-foreground text-foreground"})])]),l({type:"submit",class:"w-full mt-4 py-2 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition"},"Continue")]),Se=()=>T({class:"w-full max-w-md mx-auto p-8 bg-card space-y-6"},[F({title:"Payment Method",description:"Add a new payment method to your account."}),Lt(),o({class:"space-y-4"},[Nt()])]),Ht=({name:e,description:t,stars:s,language:n,lastUpdated:c})=>o({class:"flex items-start justify-between py-4 border-b border-muted last:border-b-0"},[o({class:"flex flex-col"},[r({class:"font-semibold text-foreground"},e),r({class:"text-sm text-muted-foreground"},t),o({class:"flex space-x-4 text-sm text-muted-foreground mt-3"},[o({class:"flex items-center gap-2"},[C({class:" text-blue-500"},i.document.text),r(` ${n}`)]),o({class:"flex items-center"},[C(i.star),r(` ${s}`)]),o(`Updated ${c}`)])]),l({variant:"secondary",class:"px-3 py-1 gap-1 flex items-center rounded-md",click:()=>console.log(`Starred ${e}`)},[C(i.star),r("Star")])]),Ot=({projects:e})=>o({class:"space-y-3"},e.map(t=>Ht(t))),Rt=[{name:"shadcn/ui",description:"Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.",stars:"20k",language:"TypeScript",lastUpdated:"April 2023"},{name:"base-framework",description:"A robust framework for building and structuring large-scale applications with ease.",stars:"2",language:"JavaScript",lastUpdated:"June 2024"}],qt=()=>T({class:"w-full max-w-md mx-auto p-6 bg-card space-y-6"},[o({class:"font-semibold text-lg text-foreground"},"Projects"),Ot({projects:Rt})]),Wt=()=>A({submit:e=>{e.preventDefault(),console.log("Issue reported")}},[o({class:"flex flex-auto w-full gap-4"},[new b({name:"area",label:"Area"},[S({required:!0,class:"border p-2 rounded-md w-full bg-background text-foreground",options:[{value:"billing",label:"Billing"},{value:"technical",label:"Technical"},{value:"account",label:"Account"},{value:"other",label:"Other"}],defaultValue:"billing",change:e=>console.log(`Area selected: ${e.target.value}`)})]),new b({name:"security_level",label:"Security Level"},[S({required:!0,class:"border p-2 rounded-md w-full bg-background text-foreground",options:[{value:"severity_1",label:"Severity 1"},{value:"severity_2",label:"Severity 2"},{value:"severity_3",label:"Severity 3"}],defaultValue:"severity_2",change:e=>console.log(`Security Level selected: ${e.target.value}`)})])]),new b({name:"subject",label:"Subject"},[B({type:"text",placeholder:"I need help with...",required:!0,class:"border p-2 rounded-md w-full bg-background text-foreground placeholder-muted-foreground"})]),new b({name:"description",label:"Description"},[W({placeholder:"Please include all information relevant to your issue.",required:!0,class:"border p-2 rounded-md w-full bg-background text-foreground placeholder-muted-foreground"})]),o({class:"flex justify-end gap-4 mt-4"},[l({variant:"outline",class:"px-4 py-2",click:()=>console.log("Cancel clicked")},"Cancel"),l({type:"submit",class:"px-4 py-2 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition"},"Submit")])]),je=()=>T({class:"w-full max-w-md mx-auto p-6 bg-card space-y-6"},[F({title:"Report an issue",description:"What area are you having problems with?"}),Wt()]),zt=({link:e})=>o({class:"flex items-center gap-4 py-2"},[q({type:"text",value:e,readOnly:!0,class:"border p-2 rounded-md w-full bg-background text-foreground"}),l({variant:"secondary",class:"px-4 py-2",click:()=>{navigator.clipboard.writeText(e),app.notify({title:"Link copied",description:"The link has been copied to your clipboard.",icon:i.clipboard.checked})}},"Copy Link")]),Ut=({name:e,email:t,access:s,image:n})=>o({class:"flex items-center justify-between gap-4 py-2"},[o({class:"flex items-center gap-3"},[ee({src:n,alt:e,fallbackText:e.split(" ").map(c=>c[0]).join("")}),o({},[r({class:"font-medium text-foreground"},e),r({class:"block text-sm text-muted-foreground"},t)])]),S({class:"border rounded-md bg-background text-foreground px-3 py-1",options:[{value:"edit",label:"Can edit"},{value:"view",label:"Can view"},{value:"comment",label:"Can comment"}],defaultValue:s,change:c=>console.log(`Access level changed for ${e}: ${c.target.value}`)})]),Vt=({people:e})=>o({class:"space-y-3"},e.map(t=>Ut(t))),Ie=({link:e,people:t})=>T({class:"w-full max-w-md mx-auto p-6 bg-card space-y-6"},[F({title:"Share this document",description:"Anyone with the link can view this document."}),zt({link:e}),o({class:"border-t my-4"}),o({class:"font-medium text-foreground"},"People with access"),Vt({people:t})]),Gt=e=>e.split(" ").map(s=>s[0]).join(""),Jt=({name:e,email:t,role:s,image:n})=>o({class:"flex items-center justify-between gap-4 py-2"},[o({class:"flex items-center gap-3"},[ee({src:n,alt:e,fallbackText:Gt(e)}),o({},[r({class:"font-medium text-foreground"},e),r({class:"block text-sm text-muted-foreground"},t)])]),S({class:"border rounded-md bg-background text-foreground px-3 py-1",options:[{value:"owner",label:"Owner"},{value:"member",label:"Member"}],defaultValue:s,change:c=>console.log(`Role changed for ${e}: ${c.target.value}`)})]),_t=({members:e})=>o({class:"space-y-3"},e.map(t=>Jt(t))),Be=({members:e})=>T({class:"w-full max-w-md mx-auto p-6 bg-card space-y-6"},[F({title:"Team Member",description:"Invite your team members to collaborate."}),_t({members:e})]),Qt=()=>f({title:"Cards",description:"Cards are a great way to display content in a concise and organized manner."},[a({title:"Usage",description:"Import the card atom and use it in your components.",preview:[T()],code:`import { Button } from '@components/atoms/cards/card.js';

Card()`}),v({class:"text-lg font-bold"},"Examples"),d({class:"text-muted-foreground"},"This is a list of examples of how to use the card component in your application."),a({title:"Account Card",preview:[ye()],code:`import AccountCard from "./examples/account-card.js";

AccountCard()`}),a({title:"Paymnet Card",preview:[Se()],code:`import AccountCard from "./examples/payment-card.js";

PaymentCard()`}),a({title:"Team Mmeber Card",preview:[Be({members:[{name:"Leslie Alexander",email:"leslie.alexander@example.com",image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"owner",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Michael Foster",email:"michael.foster@example.com",image:"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"member",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Dries Vincent",email:"dries.vincent@example.com",image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"owner",status:"online"}]})],code:`import AccountCard from "./examples/team-member-card.js";

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
})`}),a({title:"Date Select Card",preview:[Ce({startDate:"2023-01-23"})],code:`import AccountCard from "./examples/date-select-card.js";

DateSelectCard({
    startDate: '2023-01-23'
})`}),a({title:"Report Issue Card",preview:[je()],code:`import AccountCard from "./examples/report-issue-card.js";

ReportIssueCard()`}),a({title:"Project Card",preview:[qt()],code:`import AccountCard from "./examples/project-card.js";

ProjectCard()`}),a({title:"Cookie Settings Card",preview:[ke()],code:`import AccountCard from "./examples/cookie-settings-card.js";

CookieSettingsCard()`})]),De=(e,t)=>{const s=e?e.getBoundingClientRect():{top:0,bottom:0,left:0},n=t.getBoundingClientRect();let c=s.left+window.scrollX,u=s.bottom+window.scrollY;const I=10;return c+n.width>window.innerWidth&&(c=window.innerWidth-n.width-I),u+n.height>window.innerHeight&&(u=s.top+window.scrollY-n.height-I),{x:c,y:u}};class Ae extends z{setData(){return this.parent.data}render(){return o({class:"absolute mt-2 border rounded-md shadow-lg bg-popover z-30 w-[250px]",style:"top: [[position.y]]px; left: [[position.x]]px"},this.children)}setupStates(){return{open:{id:this.parent.getId(),callBack:n=>{this.state.open===!1&&this.destroy()}}}}isOutsideClick(t){return!this.panel.contains(t)&&this.button&&!this.button.contains(t)}setupEvents(){return[["click",document,t=>{this.isOutsideClick(t.target)&&(this.state.open=!1)}]]}setup(t){this.container=document.body,this.initialize()}}const Yt=({toggleDropdown:e})=>$({cache:"button",class:"inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-[200px] justify-between",click:e,addEvent:["click",document,(t,{state:s,panel:n})=>{eo(t.target,n)&&(s.open=!1)}]},[r({onState:["selectedLabel",t=>t||"Select item..."]}),j({html:i.chevron.upDown})]),Zt=(e,t)=>X({class:"flex flex-auto items-center cursor-pointer p-2 hover:bg-secondary rounded-sm",click:()=>t(e),onState:["selectedValue",{"bg-secondary":e.value}]},[e.icon&&r({class:"mr-2 flex items-baseline"},[j({class:"flex w-4 h-4",html:e.icon})]),r(e.label)]),Kt=e=>o({class:"w-full"},[K({class:"max-h-60 overflow-y-auto p-2 grid gap-1",for:["items",t=>Zt(t,e)]})]),Xt=({onSelect:e})=>o({class:"flex flex-auto flex-col",onState:["open",(t,s,n)=>{if(t)return new Ae({cache:"dropdown",parent:n,button:n.button},[Kt(e)])}]}),eo=(e,t)=>!t.contains(e),to=y({setData(){return new U({items:this.items||[],position:{y:0,x:0}})},state:{open:!1,selectedLabel:"",selectedValue:""},updatePosition(){const e=this.button,t=this.dropdown.panel,s=De(e,t);this.data.position=s},toggleDropdown(){this.state.toggle("open"),this.state.open&&this.updatePosition()},render(){const e=t=>{const s=this.state;s.selectedValue=t.value,s.selectedLabel=t.label,s.open=!1};return o({class:"relative w-[200px]"},[Yt({toggleDropdown:this.toggleDropdown.bind(this)}),Xt({onSelect:e})])}}),oo=[{value:"next.js",label:"Next.js",icon:i.home},{value:"sveltekit",label:"SvelteKit"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}],so=()=>f({title:"Comboboxes",description:"Comboboxes are used to allow users to select an option from a dropdown list or enter a custom value."},[a({title:"Usage",description:"To use the Combobox component, import it from the components library and use it in your application.",preview:[new to({items:oo})],code:`@components/molecules/combobox/combobox.js';
import { Icons } from "@components/icons/icons.js";

new Combobox({
    items: [
    { value: 'next.js', label: 'Next.js', icon: Icons.home },,
    { value: 'sveltekit', label: 'SvelteKit' },
    { value: 'nuxt.js', label: 'Nuxt.js' },
    { value: 'remix', label: 'Remix' },
    { value: 'astro', label: 'Astro' },
],
})`})]),ao=()=>`checkbox-${Math.random().toString(36).substring(2,9)}`,G=y({state(){return{checked:this.checked??!1}},render(){const e=ao();return o({class:`flex items-center space-x-2 cursor-pointer ${this.class}`},[o({class:"relative flex items-center justify-center w-5 h-5 rounded-md transition-colors duration-200 border hover:border-accent-foreground",onState:["checked",{"bg-primary":!0,"text-primary-foreground":!0}],role:"checkbox",aria:{checked:["checked"]},tabIndex:0,click:()=>{this.state.checked=!this.state.checked,typeof this.checked=="function"&&this.checked(this.state.checked)}},[Ue({id:e,class:"absolute opacity-0 w-full h-full cursor-pointer",aria:{checked:["checked"]},bind:this.bind,change:t=>{const s=t.target.checked;this.state.checked=s,typeof this.checked=="function"&&this.checked(s)}}),r({class:"absolute text-xs pointer-events-none",onState:["checked",t=>t?j({class:"w-2 h-2 pointer-events-none",html:i.check}):null]})]),this.label&&fe({class:"text-base cursor-pointer",htmlFor:e,click:()=>{this.state.toggle("checked"),typeof this.checked=="function"&&this.checked(this.state.checked)}},this.label)])}}),no=e=>Ge([be({class:"text-muted-foreground border-b",map:[e.headers,t=>{if(t.label==="checkbox")return ae({class:"cursor-pointer py-3 px-4 text-base"},[new G({class:"mr-2"})]);const s=t.align||"items-center justify-start";return ae({class:"cursor-pointer py-3 px-4 text-base",click:t.sortable&&(()=>e.sort(t.key))},[o({class:`flex flex-auto w-full items-center ${s}`},[r(t.label),t.sortable&&j({class:"ml-2",html:i.arrows.upDown})])])}]})]),ro=({key:e,rows:t,selectRow:s,rowItem:n})=>new Je({key:e,items:t,rowItem:c=>n(c,s),class:"divide-y divide-border"}),io=y({setData(){return new U({rows:this.rows||[],selectedRows:[]})},selectRow(e){const t=this.data.selectedRows.includes(e)?this.data.selectedRows.filter(s=>s!==e):[...this.data.selectedRows,e];this.data.selectedRows=t},render(){const e=this.data.rows;return o({class:"w-full"},[o({class:"w-full rounded-md border"},[Ve({class:"w-full"},[this.headers&&no({headers:this.headers,sort:t=>this.sortRows(t)}),ro({key:this.key,rows:e,selectRow:this.selectRow.bind(this),rowItem:this.rowItem})])])])}}),lo=[{label:"checkbox",key:""},{label:"Status",key:"status"},{label:"Email",key:"email"},{label:"Amount",key:"amount",align:"justify-end"}],co=[{id:1,status:"Success",email:"ken99@yahoo.com",amount:316,selected:!1},{id:2,status:"Success",email:"abe45@gmail.com",amount:242,selected:!1},{id:3,status:"Processing",email:"monserrat44@gmail.com",amount:837,selected:!1},{id:4,status:"Success",email:"silas22@gmail.com",amount:874,selected:!1},{id:5,status:"Failed",email:"carmella@hotmail.com",amount:721,selected:!1}],mo=(e,t)=>be({class:"items-center px-4 py-2 hover:bg-muted"},[L({class:"p-4 "},[new G({checked:e.selected,class:"mr-2",click:()=>t(e)})]),L({class:"p-4 "},[r({class:"text-muted-foreground"},e.status)]),L({class:"p-4 "},e.email),L({class:"p-4 text-right"},`$${e.amount.toFixed(2)}`)]),uo=()=>f({title:"Data Tables",description:"Data tables are used to display data in a structured format. They can be used to display a list of items, a grid of items, or a table of items."},[a({title:"Usage",description:"The data table component is used to display data in a structured format. It can be used to display a list of items, a grid of items, or a table of items.",preview:[new io({headers:lo,rows:co,rowItem:mo,key:"id"})],code:`import { DataTable } from "@components/organisms/lists/data-table.js";
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
})`})]),po=e=>_e.render(e,document.body),fo=({title:e})=>D({class:"flex flex-auto items-center"},[V({class:"text-lg font-semibold"},e)]),bo=m((e,t)=>ge({class:`fixed z-30 w-[98%] md:w-full max-w-lg gap-4 border bg-background text-foreground p-6 pb-12 md:pb-6 shadow-lg duration-200
                rounded-lg flex flex-auto flex-col
                bottom-4 top-auto md:bottom-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2`,click:e.click,aria:{expanded:["open"]}},[o({class:"flex flex-auto flex-col space-y-2"},[fo(e),e.description&&d({class:"flex flex-auto flex-col text-sm text-muted-foreground"},e.description),o({class:"flex flex-auto flex-col text-sm text-muted-foreground"},t)]),he({class:"flex flex-col-reverse sm:flex-row sm:justify-end mt-6 gap-2 sm:gap-0 sm:space-x-2"},e.buttons)]));class oe extends z{render(){const t=c=>{c.target===this.panel&&this.close()},s=this.getMainClass(),n=this.title||"Dialog Title";return bo({class:s,title:n,click:t,description:this.description,buttons:this.getButtons()},this.children)}getButtons(){return[l({variant:"outline",click:()=>this.close()},"Close")]}setupStates(){return{open:!1}}getMainClass(){return""}open(){po(this),this.panel.showModal(),this.state.open=!0}close(){this.state.open=!1,this.panel.close(),this.destroy()}}class go extends oe{getButtons(){const t=this.confirmTextLabel||"Confirm";return[l({variant:"outline",click:()=>this.close()},"Cancel"),l({variant:"primary",click:()=>this.confirm()},t)]}confirm(){this.confirmed&&this.confirmed(),this.close()}}const ho=m((e,t)=>l({text:"Open",class:"m-1",click:()=>new oe(e,t).open()})),xo=e=>l({text:"Open",class:"m-1",click:()=>new go(e).open()}),wo=()=>f({title:"Dialogs",description:"Displays a dialog or a component that looks like a dialog. Dialogs can be opened and closed. They will be closed if the user clicks outside of the dialog or if the user clicks the close button."},[a({title:"Usage",description:"Import the dialog atom and use it in your components.",preview:[ho({title:"Title",description:"this is the description."},[])],code:`import { Dialog } from '@components/molecules/dialogue.js';

new Dialog({
    title: '',
    description: ''
}, [

]).open()`}),a({title:"Confirmation",description:"Displays a confirmation dialog.",preview:[xo({title:"Are you absoultely sure?",description:"This action cannot be undone. This will permanently delete your account and remove your data from our servers.",confirmTextLabel:"Save",confirmed:()=>console.log("Confirmed!")})],code:`import { Confirmation } from '@components/molecules/dialogs/confirmation.js';

new Confirmation({
    title: 'Are you absoultely sure?',
    description: 'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
    confirmTextLabel: 'Save',
    confirmed: () => console.log('Confirmed!')
}).open()`})]),vo=e=>r({class:"ml-auto text-xs tracking-widest opacity-60"},e),yo=e=>r({class:"flex w-4 h-4",html:e}),ko=e=>r({class:"flex-auto"},e),To=(e,t)=>X({class:"relative flex cursor-pointer hover:bg-accent hover:text-accent-foreground select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",click:()=>t(e)},[e.icon&&yo(e.icon),ko(e.label),e.shortcut&&vo(e.shortcut)]),Co=(e,t)=>K({class:"grid gap-2"},[e.map(s=>To(s,t))]),So=e=>o({class:"w-full z-10"},[o({class:"max-h-60 overflow-y-auto p-1 grid gap-2 divide-y divide-border",for:["groups",t=>Co(t,e)]})]),jo=({label:e,icon:t,toggleDropdown:s})=>$({cache:"button",class:`inline-flex items-center justify-between rounded-md border border-input
            bg-background px-2 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground
            focus:outline-none transition duration-150 ease-in-out`,click:s},[e&&r(e),t&&j({html:t})]),Io=({onSelect:e})=>o({onState:["open",(t,s,n)=>{if(t)return new Ae({cache:"dropdown",parent:n,button:n.button},[So(e)])}]});class Bo extends z{setData(){return new U({groups:this.groups||[],position:{y:0,x:0}})}setupStates(){return{open:!1,selectedItem:null}}toggleDropdown(){this.state.toggle("open"),this.state.open&&this.updatePosition()}updatePosition(){const t=this.button,s=this.dropdown.panel,n=De(t,s);this.data.position=n}handleSelect(t){this.state.selectedItem=t,this.state.open=!1,typeof this.onSelect=="function"&&this.onSelect(t)}render(){return o({class:"relative"},[jo({label:this.label,icon:this.icon,toggleDropdown:this.toggleDropdown.bind(this)}),Io({onSelect:this.handleSelect.bind(this)})])}}const Do=()=>f({title:"Dropdown Menus",description:"Dropdown menus are used to display a list of options when a user clicks on a button or input field."},[a({title:"Usage",description:"To use the DropdownMenu component, import it from the components library and use it in your application.",preview:[new Bo({icon:i.ellipsis.vertical,groups:[[{icon:i.user.default,label:"Profile",shortcut:"⌘P",value:"profile"},{icon:i.creditCard,label:"Billing",shortcut:"⌘B",value:"billing"},{icon:i.cog.six,label:"Settings",shortcut:"⌘S",value:"settings"},{icon:i.computerDesktop,label:"Keyboard shortcuts",shortcut:"⌘K",value:"shortcuts"}],[{icon:i.user.multiple,label:"Team",value:"team"},{icon:i.user.plus,label:"Invite users",value:"invite"},{icon:i.plus,label:"New Team",shortcut:"⌘T",value:"new_team"}],[{icon:i.github,label:"GitHub",value:"github"},{icon:i.helpCircle,label:"Support",value:"support"},{icon:i.api,label:"API",value:"api"}]],onSelect:e=>{console.log("Selected item:",e)}})],code:`import { Icons } from "@components/icons/icons.js";
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
})`})]),Fe=y({state(){return{value:this.value??0,min:this.min??0,max:this.max??100,filledPercentage:this.getFillPercentage(this.value)}},getFillPercentage(e){return(e-this.min)/(this.max-this.min)*100},render(){return o({class:"relative w-full h-4 flex items-center"},[o({class:"absolute h-2 w-full rounded-full bg-muted"}),o({class:"absolute h-2 bg-primary rounded-full",style:"width: [[filledPercentage]]%"}),o({class:"absolute block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transform -translate-x-1/2",style:"left: [[filledPercentage]]%"}),q({type:"range",min:"[[min]]",max:"[[max]]",value:"[[value]]",class:"absolute w-full h-full opacity-0 cursor-pointer",bind:this.bind,input:e=>{const t=Number(e.target.value);this.state.value=t,this.state.filledPercentage=this.getFillPercentage(t),typeof this.change=="function"&&this.change(t)}})])}}),Ao=[{value:"next.js",label:"Next.js"},{value:"sveltekit",label:"SvelteKit"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}],Fo=()=>A({submit:e=>{console.log("Profile Form submitted")}},[new b({name:"username",label:"Username",description:"This is your public display name."},[B({placeholder:"e.g. username",required:!0})]),new b({name:"email",label:"Email Address",description:"We'll use this to contact you."},[Y({placeholder:"e.g. email@address.com",required:!0})]),l({type:"submit"},"Submit")]),Mo=()=>A({submit:e=>{console.log("Preferences Form submitted")}},[new b({name:"framework",label:"Favorite Framework",description:"Select your preferred framework."},[S({options:Ao,required:!0})]),new b({name:"newsletter",label:"Subscribe to Newsletter",description:"Stay updated with our latest news."},[new G({label:"Yes, sign me up!"})]),l({type:"submit"},"Save Preferences")]),$o=()=>A({submit:e=>{console.log("Contact Form submitted")}},[new b({name:"phone",label:"Phone Number",description:"We may contact you at this number."},[Z({placeholder:"e.g. +1234567890",required:!0})]),new b({name:"message",label:"Your Message",description:"Let us know how we can help you."},[W({placeholder:"Type your message here...",required:!0})]),l({type:"submit"},"Send Message")]),Po=()=>A({submit:e=>{console.log("Settings Form submitted")}},[new b({name:"notifications",label:"Enable Notifications",description:"Toggle to enable or disable notifications."},[new te({active:!0})]),new b({name:"volume",label:"Volume Level",description:"Set your preferred volume level."},[new Fe({min:0,max:100,value:50})]),l({type:"submit"},"Save Settings")]),Eo=()=>f({title:"Forms",description:"Forms are used to collect user data and submit it to the server."},[a({title:"Profile Form",description:"A simple profile form with username and email fields.",preview:[Fo()],code:`import { Button, Input, EmailInput } from "@components/atoms/form/input.js";
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
])`}),a({title:"Preferences Form",description:"A preferences form with a select input and a checkbox.",preview:[Mo()],code:`import { Button, Checkbox, Select } from "@components/atoms/form/input.js";
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
])`}),a({title:"Contact Form",description:"A contact form with a phone input and a textarea for messages.",preview:[$o()],code:`import { Button, TelInput, Textarea } from "@components/atoms/form/input.js";
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
])`}),a({title:"Settings Form",description:"A settings form with a toggle and a range slider.",preview:[Po()],code:`import { Button, Toggle, RangeSlider } from "@components/atoms/form/input.js";
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
])`})]),Lo=[{value:"next.js",label:"Next.js"},{value:"sveltekit",label:"SvelteKit"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}],k=m((e,t)=>o({...e,class:"flex flex-auto items-center justify-center w-full max-w-[350px]"},t)),No=()=>f({title:"Inputs",description:"Inputs are essential for gathering user data in forms."},[a({title:"Usage",description:"Import the input atom and use it in your components. The input can be of various types: text, password, email, etc.",preview:[o({class:"grid gap-2 w-full max-w-[350px]"},[B({type:"text",placeholder:"Enter your text here...",change:e=>console.log(e.target.value)}),Y({}),Z({}),W({placeholder:"Enter your text here..."})])],code:`import { Input, EmailInput, TelInput, Textarea } from '@components/atoms/form/input.js';

Input({
    type: 'text',
    placeholder: 'Enter your text here...',
    change: (e) => console.log(e.target.value)
}),
EmailInput({}),
TelInput({}),
Textarea({
    placeholder: 'Enter your text here...'
})`}),a({title:"File Input",description:"This is a file input.",preview:[k([Qe({multiple:!0,change:e=>console.log(e.target.files)})])],code:`import { EmailInput, FileInput, Input, TelInput, Textarea } from "@components/atoms/form/input.js";

FileInput({
    multiple: true,
    change: (e) => console.log(e.target.files)
})`}),a({title:"Radio Input",description:"This is a radio input.",preview:[o({class:"grid gap-2"},[J({name:"theme",label:"System",value:"system"}),J({name:"theme",label:"Light",value:"light"}),J({name:"theme",label:"Dark",value:"dark"})])],code:`import { Radio } from "@components/atoms/form/input.js";
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
])`}),a({title:"Text Input",description:"This is a text input.",preview:[k([B({type:"text",placeholder:"Enter your text here..."})])],code:`
import { EmailInput, FileInput, Input, TelInput, Textarea } from "@components/atoms/form/input.js";

Input({
    type: 'text',
    placeholder: 'Enter your text here...'
})`}),a({title:"Tel Input",description:"This is a phone input.",preview:[k([Z({})])],code:`
import { EmailInput, FileInput, Input, TelInput, Textarea } from "@components/atoms/form/input.js";

TelInput({
})`}),a({title:"Email Input",description:"This is a email input.",preview:[k([Y({})])],code:`
import { EmailInput, FileInput, Input, TelInput, Textarea } from "@components/atoms/form/input.js";

EmailInput({

})`}),a({title:"Checkbox",description:"This is a checkbox input.",preview:[new G({label:"Check me",check:e=>console.log(e)})],code:`
import { Checkbox } from '@components/atoms/form/checkbox.js';

new Checkbox({
    label: 'Check me',
    check: (checked) => console.log(checked)
})`}),a({title:"Select",description:"This is a select input.",preview:[k([S({options:Lo,change:e=>console.log(e.target.value)})])],code:`import { Select } from "@components/atoms/form/select.js";

Select({
    options: [
        { value: 'next.js', label: 'Next.js' },
        { value: 'sveltekit', label: 'SvelteKit' },
        { value: 'nuxt.js', label: 'Nuxt.js' },
        { value: 'remix', label: 'Remix' },
        { value: 'astro', label: 'Astro' },
    ],
    change: (e) => console.log(e.target.value)
})`}),a({title:"Textarea",description:"This is a textarea input.",preview:[k([W({placeholder:"Enter your text here..."})])],code:`
import { EmailInput, FileInput, Input, TelInput, Textarea } from "@components/atoms/form/input.js";

Textarea({
    placeholder: 'Enter your text here...'
})`}),a({title:"Date Picker",description:"This is a date picker input.",preview:[k([new Te({selectedDate:"2022-01-01"})])],code:`
import DatePicker from "@components/molecules/date-time/date-picker.js";

new DatePicker()`}),a({title:"Range Slider",description:"This is a range slider input.",preview:[k([new Fe({min:0,max:100,value:50,change:e=>console.log(e)})])],code:`
import { RangeSlider } from '@components/atoms/form/range-slider.js';

new RangeSlider({
    min: 0,
    max: 100,
    value: 50,
    change: (value) => console.log(value)
})`}),a({title:"Toggle Switch",description:"This is a toggle switch input.",preview:[k([new te({active:!0,change:e=>console.log(e)})])],code:`
import { RangeSlider } from '@components/atoms/form/range-slider.js';

new RangeSlider({
    min: 0,
    max: 100,
    value: 50,
    change: (value) => console.log(value)
})`})]),Ho=[{name:"Leslie Alexander",email:"leslie.alexander@example.com",image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"Co-Founder / CEO",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Michael Foster",email:"michael.foster@example.com",image:"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"Co-Founder / CTO",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Dries Vincent",email:"dries.vincent@example.com",image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"Business Relations",status:"online"}],Oo=()=>f({title:"Lists",description:"Lists are used to display a collection of items in a structured format. Each item can be customized to show different information."},[a({title:"Usage",description:"To use the List component, import it from the components library and use it in your application.",preview:[Ye({users:Ho})],code:`import { UserListItem } from "@components/organisms/lists/user-list.js";
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
});`}),v({class:"text-lg font-bold"},"Description"),d({class:"text-muted-foreground"},"The List component can be used to display a list of items in a structured format. Each item can be customized to show different information. The List component supports appending, prepending, mingling, and deleting or items. "),v({class:"text-lg font-bold"},"Performance"),d({class:"text-muted-foreground"},"The list will only update or re-render the items that have changed, improving performance. It uses a key to know when to update an item.")]),Ro=({title:e})=>D({class:"modal-header flex items-center"},[l({variant:"icon",icon:i.arrows.left,class:"mr-2 p-0 bg-transparent flex sm:hidden",click:(t,s)=>s.close()}),V({class:"text-lg font-semibold m-0"},e)]),qo=m((e,t)=>ge({class:`modal m-auto fixed z-20 grid w-full gap-4 border bg-background p-6 shadow-lg ${e.class}`,click:e.click},[o({class:"modal-content flex flex-auto flex-col"},[Ro(e),o({class:"modal-body flex flex-auto"},t),he({class:"modal-footer flex justify-between"},e.buttons)])]));class Wo extends oe{render(){const t=c=>{c.target===this.panel&&this.close()},s=this.getMainClass(),n=this.title||"Are you abosolutely sure?";return qo({class:s,click:t,title:n,buttons:this.getButtons(),aria:{expanded:["open"]}},this.children)}getButtons(){return[l({variant:"outline",click:()=>this.close()},"Cancel"),l({variant:"primary",click:()=>this.confirm()},"Save")]}getSizeClass(){switch(this.size){case"sm":return"sm max-w-[646px]";case"lg":return"lg max-w-[900px]";case"xl":return"xl max-w-[1400px]";default:return"medium max-w-[760px]"}}getTypeClass(){switch(this.type){case"right":return"right right-0";case"left":return"left left-0";default:return""}}getMainClass(){return this.getSizeClass()+" "+this.getTypeClass()}}const P=[{label:"Large",buttonStyle:"primary",size:"lg"},{label:"Small",buttonStyle:"secondary",size:"sm"},{label:"Medium",buttonStyle:"destructive",size:"md"},{label:"XL",buttonStyle:"primary",size:"xl"},{label:"Right",buttonStyle:"ghost",type:"right"},{label:"Left",buttonStyle:"link",type:"left"}],E=({label:e,buttonStyle:t,size:s,type:n})=>l({text:e,class:`m-1 ${t}`,click:()=>new Wo({title:"Are you absolutely sure?",size:s,type:n}).open()}),zo=()=>f({title:"Modals",description:"Displays a modal or a component that looks like a modal."},[a({title:"Extra Large Modal",description:"This is an extra large modal.",preview:[E(P[3])],code:`
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
});`}),a({title:"Large Modal",description:"This is a large modal.",preview:[E(P[0])],code:`
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
});`}),a({title:"Small Modal",preview:[E(P[1])],code:`
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
});`}),a({title:"Medium Modal",preview:[E(P[2])],code:`
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
});`}),a({title:"Right Modal",preview:[E(P[4])],code:`
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
});`})]),Uo=()=>f({title:"Navigations",description:"Navigations are components that help users move around the website or application."},[a({title:"Inline Navigation",description:"The inline navigation component is a simple navigation component that can be used in a sidebar or app shell.",preview:[o({class:"flex flex-auto flex-col w-full border rounded-md max-w-[300px]"},[new Ze({options:[{label:"Home",href:"/",icon:i.home},{label:"About",href:"/about"},{label:"Contact",href:"/contact"},{label:"Services",options:[{label:"Web Development",href:"/web-development"}]},{group:"Frameworks",options:[{label:"Next.js",href:"/next"},{label:"SvelteKit",href:"/sveltekit"},{label:"Nuxt.js",href:"/nuxt"},{label:"Remix",href:"/remix"},{label:"Astro",href:"/astro"}]}]})])],code:`import { Button } from '@components/organisms/navigation/inline-navigation.js';
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
})`})]),Vo=()=>f({title:"Notifications",description:"Displays a notification message to the user."},[a({title:"In App Notifications",description:"Notifications can be displayed in the app to inform users about important events or updates. They are a global notification container that can be called from anywhere in the app.",preview:[new Ke({title:"Notification Title",description:"This is a notification.",icon:i.warning,duration:"infinite"})],code:`app.notify({
    title: 'Notification Title',
    description: 'This is a notification.',
    icon: Icons.warning,
    type: 'warning', // 'success', 'destructive', 'info', 'warning'
    duration: 5000 // in milliseconds, leave it blank for 4 seconds, infinite is also a value to prevent it from going away
})`}),d({class:"text-muted-foreground"},"Notifications will stack if a few are called at the same time. The notification will be until the duration has been met. If a notificaiton duration is set to 'infinite', it must be removed by the user.  "),a({title:"Usage",description:"Call 'notify' the gloabl notification container to display notifications.",preview:[l({click:()=>{app.notify({title:"Notification Title",description:"This is a notification.",icon:i.warning,type:"warning"})}},"Show")],code:`app.notify({
    title: 'Notification Title',
    description: 'This is a notification.',
    icon: Icons.warning,
    type: 'warning', // 'success', 'destructive', 'info', 'warning'
    duration: 5000 // in milliseconds, leave it blank for 4 seconds, infinite is also a value to prevent it from going away
})`})]),Go=()=>o({class:"absolute h-full rounded-full bg-primary transition-all duration-300",style:"width: [[progress]]%;"}),Jo=y({render(){return o({class:"relative w-full h-4 rounded-full bg-muted"},[Go()])},state(){return{progress:this.progress??0}},set(e){e<0&&(e=0),e>100&&(e=100),this.state.progress=e}}),_o=()=>f({title:"Progress Bars",description:"Progress bars are a great way to show the progress of a task or process."},[a({title:"Usage",description:"Import the progress bar atom and use it in your components. The progress bar can be used to show the progress of a task or process.",preview:[new Jo({cache:"progress",progress:20})],code:`import { ProgressBar } from "@components/atoms/progress-bar.js";

new ProgressBar({ cache: 'progress', progress: 20 })`})]),M=({className:e,shape:t="rectangle",width:s="w-full",height:n="h-4"})=>o({class:`bg-muted animate-pulse ${s} ${n} ${t==="circle"?"rounded-full":"rounded-md"} ${e||""}`}),Qo=()=>f({title:"Skeletons",description:"Skeletons are components that are used to show a placeholder for content that is loading."},[a({title:"Usage",description:"The skeleton component is used to show a placeholder for content that is loading.",preview:[o({class:"flex flex-auto space-x-4 w-full max-w-64"},[M({shape:"circle",width:"w-10",height:"h-10"}),o({class:"flex flex-auto flex-col space-y-2"},[M({width:"w-3/4",height:"h-4"}),M({width:"w-1/2",height:"h-4"})])])],code:`import { Skeleton } from "@components/atoms/skeleton.js";
import { Div } from '@base-framework/atoms';

Div({ class: 'flex flex-auto space-x-4 w-full max-w-64' }, [
    Skeleton({ shape: 'circle', width: 'w-10', height: 'h-10' }), // Circle skeleton for avatar
    Div({ class: 'flex flex-auto flex-col space-y-2' }, [
        Skeleton({ width: 'w-3/4', height: 'h-4' }), // Long rectangle for main text
        Skeleton({ width: 'w-1/2', height: 'h-4' })  // Shorter rectangle for subtext
    ])
])`}),a({title:"Skeleton Post",description:"This is a skeleton post.",preview:[o({class:"space-y-4 flex flex-auto flex-col w-full max-w-64"},[M({width:"w-full",height:"h-32",shape:"rectangle"}),o({class:"space-y-2"},[M({width:"w-3/4",height:"h-4"}),M({width:"w-1/2",height:"h-4"})])])],code:`import { Skeleton } from "@components/atoms/skeleton.js";
import { Div } from '@base-framework/atoms';

Div({ class: 'space-y-4 flex flex-auto flex-col space-x-4 w-full max-w-64' }, [
    // Large rectangle for image or main content
    Skeleton({ width: 'w-full', height: 'h-32', shape: 'rectangle' }),

    // Text line placeholders
    Div({ class: 'space-y-2' }, [
        Skeleton({ width: 'w-3/4', height: 'h-4' }), // Longer text line
        Skeleton({ width: 'w-1/2', height: 'h-4' })  // Shorter text line
    ])
])`})]),ie=m((e,t)=>o({class:"py-4"},t)),Yo=()=>f({title:"Tabs",description:"Displays a tab or a component that looks like a tab."},[a({title:"Button Tab",description:"This is a button tab. The buttons to not route.",preview:[new we({class:"mt-4 max-w-[400px]",options:[{label:"Preview",value:"preview",layout:ie([])},{label:"Code",value:"code",layout:ie([])}]})],code:`
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
);`}),a({title:"Link Tab",description:"This is a link tab. The buttons route to a different page.",preview:[new Xe({class:"max-w-[400px]",options:[{label:"Example 1",href:"docs/components/tabs/example-1",component:new H({class:"p-8"},"This is an example 1 tab panel.")},{label:"Example 2",href:"docs/components/tabs/example-2",component:new H({class:"p-8"},"This is an example 2 tab panel.")},{label:"Example 3",href:"docs/components/tabs/example-3",component:new H({class:"p-8"},"This is an example 3 tab panel.")}]})],code:`
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
);`})]),le={top:"bottom-full left-1/2 transform -translate-x-1/2 mb-2","top-right":"bottom-full left-full transform -translate-x-1 mb-2","top-left":"bottom-full right-full transform translate-x-1 mb-2",bottom:"top-full left-1/2 transform -translate-x-1/2 mt-2","bottom-right":"top-full left-full transform -translate-x-1 mt-2","bottom-left":"top-full right-full transform translate-x-1 mt-2",left:"top-1/2 right-full transform -translate-y-1/2 mr-2",right:"top-1/2 left-full transform -translate-y-1/2 ml-2"},Zo=e=>le[e]||le.top,ce=m(({position:e="top",content:t},s)=>{const n=Zo(e);return o({class:"relative group inline-block"},[s,r({class:`
                absolute z-20 px-2 py-1 border text-sm bg-background rounded shadow-md opacity-0 whitespace-nowrap
                group-hover:opacity-100 transition-opacity duration-200 ${n} pointer-events-none
            `},t)])}),Ko=()=>f({title:"Tooltips",description:"This is a tooltip."},[a({title:"Usage",description:"Import the card atom and use it in your components.",preview:[o({class:"flex gap-2 flex-wrap"},[ce({content:"This is a tooltip."},[l("Hover me")])])],code:`import { Button } from "@components/atoms/buttons/buttons.js";
import { Tooltip } from "@components/atoms/tooltip.js";

Tooltip({ content: 'This is a tooltip.' }, [
    Button('Hover me')
])`}),a({title:"Bottom Tooltip",description:"This will show the tooltip at the bottom of the target element.",preview:[o({class:"flex gap-2 flex-wrap"},[ce({content:"This is a tooltip.",position:"bottom"},[l("Hover me")])])],code:`import { Button } from "@components/atoms/buttons/buttons.js";
import { Tooltip } from "@components/atoms/tooltip.js";

Tooltip({ content: 'This is a tooltip.', position: 'bottom' }, [
    Button('Hover me')
])`}),d({class:"text-muted-foreground text-sm mt-4"},"The tooltip position can be set to: top, top-right, top-left, bottom, bottom-right, bottom-left, left, right.")]),de=(e,t,s)=>(s="Icons"+(s?"."+s:""),o({class:"flex flex-auto flex-col items-center gap-2 max-w-[150px] h-[8.5rem] cursor-pointer"},[o({class:"flex flex-auto w-full h-full justify-center items-center flex-wrap rounded-lg border bg-card text-base shadow-sm hover:bg-accent hover:text-accent-foreground",click:()=>{navigator.clipboard.writeText(`${s}.${t}`)}},[C(e)]),o({class:"text-muted-foreground"},t)])),Me=(e,t,s)=>{const n=typeof e=="object";n&&t.push(d({class:"text-muted-foreground"},"path: "+s+".{icon}"));const c=[];if(t.push(o({class:"flex flex-auto flex-wrap gap-2 my-8"},c)),n===!1)c.push(de(e,s));else for(var u in e){if(e.hasOwnProperty(u)===!1)continue;const I=e[u];if(typeof I!="object"){c.push(de(I,u,s));continue}const $e=`${s}.${u}`;Me(I,t,$e)}},Xo=e=>{if(!e||typeof e!="object")return;const t=[];for(let[s,n]of Object.entries(e)){if(s==="parse")continue;t.push(xe({id:s.toLowerCase(),class:"text-2xl font-bold"},et.titleCase(s))),Me(n,t,s)}return t},es=()=>f({title:"Icons",description:"The icons are from the Hericon library. They are SVG icons that can be used in your project. This icon set uses the outline style."},[x({href:"https://heroicons.com/",target:"_blank",class:"bttn link"},"link: Hericons"),a({title:"Icons",description:"This is an icon.",preview:[j({html:i.home})],code:`
import { Icons } from '@components/icons/icons.js';
import { I } from '@base-framework/atoms';

export const HomeIcon = () => (
    I({ html: Icons.home} )
);`}),o({class:"my-20"},[O({class:"text-2xl font-bold"},"Default Icons"),d({class:"text-muted-foreground"},'A few of the icons have been saved to the "Icons" object. You can use these icons in your project. Click to copy the Icon path. Here is a list of the icons that are available:')]),a({title:"Icon Atom",description:"An Icon is a helper atom that makes it easier to use icons in your project. ",preview:[C(i.home)],code:`
import { Icon } from '@components/atoms/icon.js';

Icon(Icons.home);`}),o({class:"my-20"},[O({class:"text-2xl font-bold"},"Default Icons"),d({class:"text-muted-foreground"},'A few of the icons have been saved to the "Icons" object. You can use these icons in your project. Click to copy the Icon path. Here is a list of the icons that are available:')]),Xo(i)]),ts=()=>f({title:"Introduction",description:"The App Shell is a versatile and modular framework, designed to speed up front-end application development using Tailwind CSS and Shadcn-inspired themes. It provides a comprehensive set of components and atoms, created with the Base framework."},[w({class:"space-y-4"},[v({class:"text-lg font-bold"},"The App Shell"),d({class:"text-muted-foreground"},[r("The App Shell project is built to streamline front-end application development. As a modular and scalable PWA (Progressive Web App), it offers easy installation across devices, making it suitable as a foundational framework for new projects.")]),d({class:"text-muted-foreground"},[r("Designed with accessibility, customization, and ease of use in mind, the App Shell accelerates setup, allowing developers to focus on creating functionality without reinventing the wheel.")])]),o({class:"items-start justify-center gap-6 rounded-lg pt-0 md:p-8 md:border md:rounded-md md:mt-6 md:grid lg:grid-cols-2 xl:grid-cols-2"},[o({class:"col-span-2 grid items-start gap-6 lg:col-span-1"},[ye(),Se(),ke()]),o({class:"col-span-2 grid items-start gap-6 lg:col-span-1"},[Be({members:[{name:"Leslie Alexander",email:"leslie.alexander@example.com",image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"owner",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Michael Foster",email:"michael.foster@example.com",image:"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"member",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Dries Vincent",email:"dries.vincent@example.com",image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"owner",status:"online"}]}),Ie({link:"http://example.com/link/to/document",people:[{name:"Leslie Alexander",email:"leslie.alexander@example.com",image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"owner",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Michael Foster",email:"michael.foster@example.com",image:"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"member",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Dries Vincent",email:"dries.vincent@example.com",image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"owner",status:"online"}]}),Ce({startDate:"2023-01-23"}),je()])]),w({class:"space-y-4 mt-12"},[v({class:"text-lg font-bold"},"Theme and Styling"),d({class:"text-muted-foreground"},[r("This project is powered by Tailwind CSS, providing a highly customizable, utility-first approach to styling. Additionally, the theme draws inspiration from "),x({href:"https://github.com/shadcn",class:"underline",target:"_blank"},"Shadcn’s UI component library"),r(", combining best practices for consistency and flexibility.")])]),w({class:"space-y-4 mt-12"},[v({class:"text-lg font-bold"},"Icons"),d({class:"text-muted-foreground"},[r("This project utilizes Heroicons, a comprehensive icon set provided by the Tailwind Labs team. These icons are fully customizable and designed to fit seamlessly within Tailwind-based applications.")]),d({class:"text-muted-foreground"},[r("For more details on available icons, visit the "),x({href:"https://heroicons.com",class:"underline",target:"_blank"},"Heroicons website"),r(".")])]),w({class:"space-y-4 mt-12"},[v({class:"text-lg font-bold"},"Components and Atoms"),d({class:"text-muted-foreground"},[r("Leveraging the Base framework, this project provides a comprehensive set of reusable components and atoms. Inspired by projects like "),x({href:"https://github.com/shadcn/ui",class:"underline",target:"_blank"},"shadcn/ui"),r(", the components are crafted to balance flexibility and simplicity, allowing developers to integrate pre-designed elements or customize them as needed.")]),d({class:"text-muted-foreground"},[r("You can explore components like "),x({href:"/docs/components/buttons",class:"underline"},"Buttons"),r(", "),x({href:"/docs/components/tabs",class:"underline"},"Tabs"),r(", and "),x({href:"/docs/components/forms",class:"underline"},"Forms"),r(" to quickly build complex UIs without starting from scratch.")])]),w({class:"space-y-4 mt-12"},[v({class:"text-lg font-bold"},"Development Guidelines"),d({class:"text-muted-foreground"},[r("Modules are an essential part of the App Shell's extensibility. You can add new features by creating modules in the modules folder and registering them in the "),x({href:"/docs/imported-modules",class:"underline"},"imported-modules.js"),r(" file. This structure supports modularity, making it easier to maintain and scale projects.")]),d({class:"text-muted-foreground"},[r("Each module includes its own routes, links, and options, as demonstrated in the example provided. This architecture ensures that modules are self-contained and can be easily integrated into any project using the App Shell framework.")]),ve(`import { Icons } from '@components/icons/icons.js';
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
});`)]),w({class:"space-y-4 mt-12"},[v({class:"text-lg font-bold"},"Contributors and Community"),d({class:"text-muted-foreground"},[r("The App Shell is an open-source project, and contributions from the community are welcome. The project is maintained by a dedicated team of developers who aim to continuously enhance its functionality.")]),d({class:"text-muted-foreground"},[r("For information on contributing, check the "),x({href:"https://github.com/chrisdurfee/next-app-shell",class:"underline",target:"_blank"},"GitHub repository"),r(" and join the community discussions to collaborate and innovate.")])])]),os=e=>o({class:"flex flex-auto flex-col items-center gap-2 max-w-[150px] h-[8.5rem] cursor-pointer"},[o({class:`flex flex-auto w-full h-full min-h-[136px] justify-center items-center flex-wrap rounded-lg border text-base shadow-sm ${e.class}`,click:()=>{navigator.clipboard.writeText(`${e.class}`)}}),o({class:"text-sm text-muted-foreground"},e.var)]),h=(e,t)=>w({class:"flex flex-auto flex-col gap-2"},[d({class:"text-base text-muted-foreground"},e),o({class:"flex flex-auto flex-wrap gap-2 my-2",map:[t,os]})]),ss=e=>o({class:"flex flex-auto flex-col gap-12"},[xe({class:"text-2xl font-bold"},"Color Guide"),h("Default background color of <body />...etc",[{var:"--backround",class:"bg-backround"},{var:"--foreground",class:"bg-foreground"}]),h("Muted backgrounds such as <TabsList />, <Skeleton /> and <Switch />",[{var:"--muted",class:"bg-muted"},{var:"--muted-foreground",class:"bg-muted-forground"}]),h("Background color for <Card />",[{var:"--card",class:"bg-card"},{var:"--card-foreground",class:"bg-card-foreground"}]),h("Background color for popovers such as <DropdownMenu />, <HoverCard />, <Popover />",[{var:"--popover",class:"bg-popover"},{var:"--popover-foreground",class:"bg-popover-foreground"}]),h("Default border color",[{var:"--border",class:"bg-border"}]),h("Border color for inputs such as <Input />, <Select />, <Textarea />",[{var:"--input",class:"bg-input"}]),h("Primary colors for <Button />",[{var:"--primary",class:"bg-primary"},{var:"--primary-foreground",class:"bg-primary-foreground"}]),h("Secondary colors for <Button />",[{var:"--secondary",class:"bg-secondary"},{var:"--secondary-foreground",class:"bg-secondary-foreground"}]),h("Used for accents such as hover effects on <DropdownMenuItem>, <SelectItem>...etc",[{var:"--accent",class:"bg-accent"},{var:"--accent-foreground",class:"bg-accent-foreground"}]),h('Used for destructive actions such as <Button variant="destructive">',[{var:"--destructive",class:"bg-destructive"},{var:"--destructive-foreground",class:"bg-destructive-foreground"}]),h('Used for warning actions such as <Button variant="warning">',[{var:"--warning",class:"bg-warning"},{var:"--warning-foreground",class:"bg-warning-foreground"}]),h("Used for focus ring",[{var:"--ring",class:"bg-ring"}]),h("Border radius for card, input and buttons",[{var:"--radius",class:"bg-radius"}])]),as=()=>f({title:"Theme",description:"The theme is using Tailwind CSS and is based on Shadcn UI. The theme is customizable and can be extended. It comes with light and dark theme support."},[x({href:"https://ui.shadcn.com/docs/theming",target:"_blank",class:"bttn link"},"link: Shadcn"),o({class:"my-20"},[O({class:"text-2xl font-bold"},"Default Styles"),d({class:"text-muted-foreground"},"The default styles are defined in the Tailwind CSS configuration file and in the base CSS file. Here's the list of variables available for customization:")]),ss(),o({class:"flex flex-auto flex-col gap-2 mt-20"},[v({class:"text-2xl font-bold"},"Text Sizes"),d({class:"text-muted-foreground text-3xl"},"Text-3xl A test sentence."),d({class:"text-muted-foreground text-2xl"},"Text-2xl A test sentence."),d({class:"text-muted-foreground text-xl"},"Text-xl A test sentence."),d({class:"text-muted-foreground text-lg"},"Text-lg A test sentence."),d({class:"text-muted-foreground text-base"},"Text-base A test sentence."),d({class:"text-muted-foreground text-sm"},"Text-sm A test sentence."),d({class:"text-muted-foreground text-xs"},"Text-xs A test sentence.")])]),p=(e,t,s)=>({uri:e,title:t,component:s()}),ns=e=>[p(`${e}`,"Introduction",ts),p(`${e}/theme`,"Theme",as),p(`${e}/icons`,"Icons",es),p(`${e}/components/buttons*`,"Buttons",kt),p(`${e}/components/badges*`,"Badges",bt),p(`${e}/components/tabs*`,"Tabs",Yo),p(`${e}/components/modals*`,"Modals",zo),p(`${e}/components/notifications*`,"Notifications",Vo),p(`${e}/components/dialogs*`,"Modals",wo),p(`${e}/components/cards*`,"Cards",Qt),p(`${e}/components/calendars*`,"Calendars",Ct),p(`${e}/components/avatars*`,"Avatars",ut),p(`${e}/components/inputs*`,"Inputs",No),p(`${e}/components/forms*`,"Forms",Eo),p(`${e}/components/alerts*`,"Alerts",mt),p(`${e}/components/comboboxes*`,"Comboboxes",so),p(`${e}/components/lists*`,"Lists",Oo),p(`${e}/components/data-tables*`,"Data Tables",uo),p(`${e}/components/breadcrumbs*`,"Breadcrumbs",yt),p(`${e}/components/navigations*`,"Navigations",Uo),p(`${e}/components/progress-bars*`,"Progress Bars",_o),p(`${e}/components/skeletons*`,"Skeletons",Qo),p(`${e}/components/tooltips*`,"Tooltips",Ko),p(`${e}/components/dropdown-menus*`,"Dropdown Menus",Do)],rs=e=>[{href:`${e}`,label:"Introduction",exact:!0},{href:`${e}/theme`,label:"Theme",exact:!0},{href:`${e}/icons`,label:"Icons"},{group:"Components",options:[{label:"Buttons",href:`${e}/components/buttons`},{label:"Badges",href:`${e}/components/badges`},{label:"Tabs",href:`${e}/components/tabs`},{label:"Modals",href:`${e}/components/modals`},{label:"Notifications",href:`${e}/components/notifications`},{label:"Dialogs",href:`${e}/components/dialogs`},{label:"Cards",href:`${e}/components/cards`},{label:"Calendars",href:`${e}/components/calendars`},{label:"Avatars",href:`${e}/components/avatars`},{label:"Inputs",href:`${e}/components/inputs`},{label:"Forms",href:`${e}/components/forms`},{label:"Alerts",href:`${e}/components/alerts`},{label:"Comboboxes",href:`${e}/components/comboboxes`},{label:"Lists",href:`${e}/components/lists`},{label:"Data Tables",href:`${e}/components/data-tables`},{label:"Breadcrumbs",href:`${e}/components/breadcrumbs`},{label:"Navigations",href:`${e}/components/navigations`},{label:"Progress Bars",href:`${e}/components/progress-bars`},{label:"Skeletons",href:`${e}/components/skeletons`},{label:"Tooltips",href:`${e}/components/tooltips`},{label:"Dropdown Menus",href:`${e}/components/dropdown-menus`}]}],is=()=>new Pe({backHref:"aside/"},[new H([o([D([ue("Overlay")]),o({class:"contained"},[tt()])])])]),ls=e=>[{uri:`${e}/overlay-test`,component:is()}],N="docs",ms=()=>new Ee({title:"Documentation",basePath:N,routes:ls(N),switch:ns(N),links:rs(N)});export{ms as DocumentationPage,ms as default};
