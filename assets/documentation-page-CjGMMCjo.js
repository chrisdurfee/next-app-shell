import{O as _,A as ee}from"./overlay-D-DNB3GI.js";import{w as R,m as a,R as B,a as H,D as U,H as W,b as S,X as d,p as te,c as oe,U as h,I as D,S as c,B as se,d as ae,C as F,A as ne,e as u,f as re,y as b,g as v,h as A,T as $,i as r,j as M,k as G,q as g,O as ie,l as le,z as ce,Z as de,n as V,J as me,o as ue,r as k,s as pe,t as q,V as K,v as fe,u as be,x as N,E as ge,K as he,L as xe,M as we,N as I,Q as ve,W as ye,Y as ke,P as C,$ as Y,a0 as Te,G as Ce}from"./index-dlEEZNNt.js";const Be=e=>W({class:"inline-flex flex-auto items-center justify-center whitespace-nowrap rounded-sm text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",dataSet:["selected",["state",e.value,"active"]]},[S({class:"flex flex-auto justify-center items-center px-3 py-1.5",onSet:["selected",{selected:e.value}],click:t=>e.callBack(e.value)},e.label)]),je=(e,t)=>(e.callBack=t,Be(e)),Ie=e=>H({class:`tab items-center justify-center rounded-md bg-muted p-1 text-muted-foreground ${e.class}`},[U({class:"flex flex-auto flex-row",map:[e.options,t=>je(t,e.callBack)]})]);class J extends R{render(){const t=this.select.bind(this);return a({class:""},[Ie({class:this.class,options:this.options,callBack:t}),B({class:"tab-content",onState:["selected",this.updateContent.bind(this)]})])}afterSetup(){const t=this.options[0].value;this.select(t)}update(){const t=this.state.get("selected");this.select(null),this.select(t)}select(t){this.state.selected=t}updateContent(t){const o=this.options;if(!o||o.length<1)return;const n=o[0];for(const f of o)if(f.value===t)return f.layout;return n.layout}setupStates(){const t=this.callBack,o=typeof t;return{selected:{state:null,callBack(n){o==="function"&&t(n)}}}}}const Se=d((e,t)=>te({class:"flex p-4 min-h-[350px] max-h-[650px] overflow-x-auto rounded-lg border bg-muted whitespace-break-spaces cursor-pointer"},[oe({class:"font-mono text-sm",click:()=>navigator.clipboard.writeText(t[0].textContent)},t)])),De=d((e,t)=>a({class:"flex p-4 min-h-[350px] max-h-[650px] overflow-x-auto rounded-lg border bg-card"},[a({class:"preview flex w-full justify-center items-center"},t)])),P=d((e,t)=>a({class:"py-4"},t)),Ae=e=>new J({class:"mt-4 max-w-[400px]",options:[{label:"Preview",value:"preview",layout:P([De(e.preview)])},{label:"Code",value:"code",layout:P([Se(e.code)])}]}),$e=d(({title:e,description:t})=>h({class:"flex flex-col"},[D({class:"scroll-m-20 text-2xl font-bold tracking-tight"},e),t&&c({class:"text-base text-muted-foreground py-2 max-w-[700px]"},t)])),s=d((e,t)=>B({class:"py-4"},[$e({title:e.title,description:e.description}),Ae({preview:e.preview,code:e.code})]));class Me extends se{render(){return ae([a({class:"contained px-4 flex flex-auto flex-col"},this.children)])}}const Le=d(({title:e,description:t})=>h({class:"flex flex-col"},[F({class:"scroll-m-20 text-3xl font-bold tracking-tight"},e),c({class:"text-base text-muted-foreground py-2 max-w-[700px]"},t)])),Ne=d((e,t)=>a({class:"contained py-8"},[Le(e),B({class:"pb-12 pt-8"},t)])),l=d((e,t)=>new Me([Ne(e,t)])),Pe=()=>l({title:"Alerts",description:"Alerts are used to provide feedback to the user about the outcome of an action or to inform them of important information."},[s({title:"Usage",description:"To use the Alert component, import it from the components library and use it in your application.",preview:[ne({title:"Heads up!",description:"You can add components to your app using the cli.",icon:u.information})],code:`import { Alert } from "@components/molecules/alert.js";
import { Icons } from "@components/icons/icons.js";

Alert({
    title: 'Heads up!',
    description: 'You can add components to your app using the cli.',
    icon: Icons.information
})`})]),Ee=()=>l({title:"Cards",description:"Cards are a great way to display content in a concise and organized manner."},[s({title:"Usage",description:"Import the card atom and use it in your components. The avatar can be set to multiple sizes: xs, sm, lg, xl, 2xl, 3xl.",preview:[re({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN"})],code:`import { Button } from '@components/atoms/cards/card.js';

Avatar({
    src: 'https://github.com/shadcn.png',
    alt: '@shadcn',
    fallbackText: 'CN',
    size: 'md' // You can change the size to xs, sm, lg, xl, 2xl, 3xl
})`})]),E={gray:{backgroundColor:"bg-gray-50",textColor:"text-gray-600",ringColor:"ring-gray-500/10"},red:{backgroundColor:"bg-red-50",textColor:"text-red-700",ringColor:"ring-red-600/10"},yellow:{backgroundColor:"bg-yellow-50",textColor:"text-yellow-800",ringColor:"ring-yellow-600/20"},green:{backgroundColor:"bg-green-50",textColor:"text-green-700",ringColor:"ring-green-600/20"},blue:{backgroundColor:"bg-blue-50",textColor:"text-blue-700",ringColor:"ring-blue-700/10"},indigo:{backgroundColor:"bg-indigo-50",textColor:"text-indigo-700",ringColor:"ring-indigo-700/10"},purple:{backgroundColor:"bg-purple-50",textColor:"text-purple-700",ringColor:"ring-purple-700/10"},pink:{backgroundColor:"bg-pink-50",textColor:"text-pink-700",ringColor:"ring-pink-700/10"},primary:{backgroundColor:"bg-primary",textColor:"text-primary-foreground",ringColor:"ring-primary/10"},secondary:{backgroundColor:"bg-secondary",textColor:"text-secondary-foreground",ringColor:"ring-secondary/10"},destructive:{backgroundColor:"bg-destructive",textColor:"text-destructive-foreground",ringColor:"ring-destructive/10"},warning:{backgroundColor:"bg-warning",textColor:"text-warning-foreground",ringColor:"ring-warning/10"},outline:{backgroundColor:"bg-background",textColor:"text-primary",ringColor:"ring-input"},ghost:{backgroundColor:"bg-background",textColor:"text-primary",ringColor:"ring-background"},link:{backgroundColor:"bg-background",textColor:"text-primary",ringColor:"ring-background"}},ze=e=>E[e]||E.gray,Oe=e=>{const{backgroundColor:t,textColor:o,ringColor:n}=ze(e);return`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors ${t} ${o} ${n}`},m=d((e,t)=>{const o=Oe(e==null?void 0:e.type);return b({...e,class:o},t)}),Re=()=>l({title:"Badges",description:"Badges can be used to display a status or a count."},[s({title:"Badge",description:"This is a badge.",preview:[a({class:"flex gap-2 flex-wrap"},[m({type:"gray"},"Text"),m({type:"red"},"Text"),m({type:"yellow"},"Text"),m({type:"green"},"Text"),m({type:"blue"},"Text"),m({type:"indigo"},"Text"),m({type:"purple"},"Text"),m({type:"pink"},"Text"),m({type:"primary"},"Text"),m({type:"secondary"},"Text"),m({type:"destructive"},"Text"),m({type:"warning"},"Text"),m({type:"outline"},"Text"),m({type:"ghost"},"Text"),m({type:"link"},"Text")])],code:`
import { Button } from '@components/atoms/badges/badges.js';
import { Atom } from '@base-framework/base';

export const PrimaryBadge = Atom((props, children)) => (
    Badge({ ...props, type: 'gray' }, children)
);`})]),He=(e,t)=>$({href:e,"aria-current":t==="Breadcrumb"?"page":null,class:"text-muted-foreground hover:text-foreground"},[b(t)]),Ue=()=>b({class:"mx-2 text-muted-foreground","aria-hidden":!0,html:">"}),We=e=>a({class:"flex items-center"},[e.href?He(e.href,e.label):b(e.label),e.separator&&Ue()]),Fe=v({setData(){return new A({items:this.items||[]})},render(){return H({"aria-label":"Breadcrumb",class:"flex items-center space-x-1 text-sm"},[a({role:"list",class:"flex items-center",for:["items",(e,t)=>We({href:e.href,label:e.label,separator:t<this.data.items.length-1})]})])}}),Ge=[{href:"/",label:"Home"},{href:"/components",label:"Components"},{label:"Breadcrumb"}],Ve=()=>l({title:"Breadcrumbs",description:"Breadcrumbs are a navigation aid that helps users understand their location within a website or application."},[s({title:"Usage",description:"To use the Breadcrumb component, import it and provide an array of items. Each item can have a label and an optional href.",preview:[new Fe({items:Ge})],code:`import { Breadcrumb } from "@components/molecules/breadcrumb/breadcrumb.js";

new Breadcrumb({ items: [
    { href: '/', label: 'Home' },
    { href: '/components', label: 'Components' },
    { label: 'Breadcrumb' } // Last item, no href needed
] })`})]),qe=()=>l({title:"Button",description:"Displays a button or a component that looks like a button."},[s({title:"Usage",description:"Import the button atom and use it in your components. This platform has variants for different use cases. The variant can be set using the `variant` prop.",preview:[r({variant:"primary"},"Click Me")],code:`import { Button } from '@components/atoms/buttons/buttons.js';

Button({ ...props, variant: 'secondary' }, primary)`}),h({class:"flex flex-col py-8"},[M({class:"text-3xl font-bold tracking-tight border-b pb-2"},"Variants")]),s({title:"Primary Button",description:"This is a primary button.",preview:[r({variant:"primary"},"Click Me")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const PrimaryButton = Atom((props, children) => (
    Button({ ...props, variant: 'primary' }, children)
);`}),s({title:"Secondary Button",preview:[r({variant:"secondary"},"Secondary")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const SecondaryButton = Atom((props, children) => (
    Button({ ...props, variant: 'secondary' }, children)
);`}),s({title:"Destructive Button",preview:[r({variant:"destructive"},"Destructive")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const DestructiveButton = Atom((props, children) => (
    Button({ ...props, variant: 'destructive' }, children)
);`}),s({title:"Warning Button",preview:[r({variant:"warning"},"Warning")],code:`import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const WarningButton = Atom((props, children) => (
    Button({ ...props, variant: 'warning' }, children)
);`}),s({title:"Outline Button",preview:[r({variant:"outline"},"Outline")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const OutlineButton = Atom((props, children) => (
    Button({ ...props, variant: 'outline' }, children)
);`}),s({title:"Ghost Button",preview:[r({variant:"ghost"},"Ghost")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const GhostButton = Atom((props, children) => (
    Button({ ...props, variant: 'ghost' }, children)
);`}),s({title:"Link Button",preview:[r({variant:"link"},"Link")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const LinkButton = Atom((props, children) => (
    Button({ ...props, variant: 'link' }, children)
);`}),s({title:"Icon Button",description:"Displays a button with an icon.",preview:[r({variant:"icon",icon:u.home})],code:`import { Button } from '@components/atoms/buttons/buttons.js';
import { Icons } from '@components/icons/icons.js';
import { Atom } from '@base-framework/base';

export const IconButton = Atom((props) => (
    Button({ ...props, variant: 'icon', icon: Icons.home })
);`}),s({title:"With Icon Button",preview:[r({variant:"withIcon",icon:u.home},"With Icon")],code:`import { Button } from '@components/atoms/buttons/buttons.js';

Button({ variant: 'withIcon', icon: Icons.home }, 'With Icon')`})]),Ke=()=>l({title:"Calendars",description:"This is the calendar component documentation."},[s({title:"Usage",description:"This is how you can use the calendar component.",preview:[new G],code:`@components/organisms/calendar/calendar.js';

new Calendar()`})]),Ye=d((e,t)=>a({...e,class:`rounded-lg border bg-card text-card-foreground shadow-md min-w-[120px] min-h-[80px] my-5 mx-5 p-4 ${e.class||""}`,children:t})),Je=()=>l({title:"Cards",description:"Cards are a great way to display content in a concise and organized manner."},[s({title:"Usage",description:"Import the card atom and use it in your components.",preview:[Ye()],code:`import { Button } from '@components/atoms/cards/card.js';

Card()`})]),Qe=(e,t)=>W({class:"flex flex-auto items-center cursor-pointer p-2 hover:bg-secondary rounded-sm",click:()=>t(e),onState:["selectedValue",{"bg-secondary":e.value}]},[e.icon&&b({class:"mr-2 flex items-baseline"},[g({class:"flex w-4 h-4",html:e.icon})]),b(e.label)]),Xe=e=>a({class:"absolute border rounded-md shadow-lg mt-1 w-full z-10"},[U({class:"max-h-60 overflow-y-auto p-2",for:["items",t=>Qe(t,e)]})]),Ze=v({setData(){return new A({items:this.items||[]})},state:{open:!1,selectedLabel:"",selectedValue:""},render(){const e=(o,{state:n})=>n.toggle("open"),t=o=>{const n=this.state;n.selectedValue=o.value,n.selectedLabel=o.label,n.open=!1};return a({class:"relative w-[200px]"},[S({class:"inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-[200px] justify-between",click:e},[b({onState:["selectedLabel",o=>o||"Select item..."]}),g({html:u.chevron.upDown})]),a({class:"felx flex-auto flex-col",onState:["open",o=>o?Xe(t):null]})])}}),_e=[{value:"next.js",label:"Next.js",icon:u.home},{value:"sveltekit",label:"SvelteKit"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}],et=()=>l({title:"Comboboxes",description:"Comboboxes are used to allow users to select an option from a dropdown list or enter a custom value."},[s({title:"Usage",description:"To use the Combobox component, import it from the components library and use it in your application.",preview:[new Ze({items:_e})],code:`@components/molecules/combobox/combobox.js';
import { Icons } from "@components/icons/icons.js";

new Combobox({
    items: [
    { value: 'next.js', label: 'Next.js', icon: Icons.home },,
    { value: 'sveltekit', label: 'SvelteKit' },
    { value: 'nuxt.js', label: 'Nuxt.js' },
    { value: 'remix', label: 'Remix' },
    { value: 'astro', label: 'Astro' },
],
})`})]),tt=()=>`checkbox-${Math.random().toString(36).substring(2,9)}`,Q=v({state:{checked:!1},render(){const e=tt();return a({class:`flex items-center space-x-2 cursor-pointer ${this.class}`},[a({class:"relative flex items-center justify-center w-5 h-5 rounded-md transition-colors duration-200 border",onState:["checked",{"bg-primary":!0,"text-primary-foreground":!0}],role:"checkbox",aria:{checked:["checked"]},tabIndex:0,click:()=>{this.state.checked=!this.state.checked,typeof this.checked=="function"&&this.checked(this.state.checked)}},[ie({id:e,class:"absolute opacity-0 w-full h-full cursor-pointer",aria:{checked:["checked"]},change:t=>{const o=t.target.checked;this.state.checked=o,typeof this.checked=="function"&&this.checked(o)}}),b({class:"absolute text-xs pointer-events-none",onState:["checked",t=>t?g({class:"w-2 h-2 pointer-events-none",html:u.check}):null]})]),le({class:"text-base cursor-pointer",htmlFor:e,click:()=>{this.state.toggle("checked"),typeof this.checked=="function"&&this.checked(this.state.checked)}},this.label||"")])}}),ot=e=>de([V({class:"text-muted-foreground border-b",map:[e.headers,t=>{const o=t.align||"items-center justify-start";return me({class:"cursor-pointer py-3 px-4 text-base",click:t.sortable&&(()=>e.sort(t.key))},[a({class:`flex flex-auto w-full items-center ${o}`},[b(t.label),t.sortable&&g({class:"ml-2",html:u.arrows.upDown})])])}]})]),st=({rows:e,selectRow:t})=>new ue({items:e,rowItem:o=>at(o,t),class:"divide-y divide-border"}),at=(e,t)=>V({class:"items-center px-4 py-2 hover:bg-muted"},[k({class:"p-4 "},[new Q({checked:e.selected,class:"mr-2",click:()=>t(e)})]),k({class:"p-4 "},[b({class:"text-muted-foreground"},e.status)]),k({class:"p-4 "},e.email),k({class:"p-4 text-right"},`$${e.amount.toFixed(2)}`)]),nt=v({setData(){return new A({rows:this.rows||[],selectedRows:[]})},selectRow(e){const t=this.data.selectedRows.includes(e)?this.data.selectedRows.filter(o=>o!==e):[...this.data.selectedRows,e];this.data.selectedRows=t},render(){const e=this.data.rows;return a({class:"w-full"},[a({class:"w-full rounded-md border"},[ce({class:"w-full"},[this.headers&&ot({headers:this.headers,sort:t=>this.sortRows(t)}),st({rows:e,selectRow:this.selectRow.bind(this)})])])])}}),rt=[{label:"",key:"select"},{label:"Status",key:"status"},{label:"Email",key:"email"},{label:"Amount",key:"amount",align:"justify-end"}],it=[{id:1,status:"Success",email:"ken99@yahoo.com",amount:316,selected:!1},{id:2,status:"Success",email:"abe45@gmail.com",amount:242,selected:!1},{id:3,status:"Processing",email:"monserrat44@gmail.com",amount:837,selected:!1},{id:4,status:"Success",email:"silas22@gmail.com",amount:874,selected:!1},{id:5,status:"Failed",email:"carmella@hotmail.com",amount:721,selected:!1}],lt=()=>l({title:"Data Tables",description:"Data tables are used to display data in a structured format. They can be used to display a list of items, a grid of items, or a table of items."},[s({title:"Usage",description:"The data table component is used to display data in a structured format. It can be used to display a list of items, a grid of items, or a table of items.",preview:[new nt({headers:rt,rows:it})],code:`import { DataTable } from "@components/organisms/lists/data-table.js";

new DataTable({
    headers: [
        { label: '', key: 'select' },
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
    ]
    })`})]),ct=e=>pe.render(e,document.body),dt=({title:e})=>h({class:"flex flex-auto items-center"},[M({class:"text-lg font-semibold"},e)]),mt=d((e,t)=>q({class:"flex flex-auto flex-col fixed z-30 w-full max-w-lg gap-4 border bg-background text-foreground p-6 shadow-lg duration-200 sm:rounded-lg",click:e.click,aria:{expanded:["open"]}},[a({class:"flex flex-auto flex-col space-y-2"},[dt(e),e.description&&c({class:"flex flex-auto flex-col text-sm text-muted-foreground"},e.description),a({class:"flex flex-auto flex-col text-sm text-muted-foreground"},t)]),K({class:"flex flex-col-reverse sm:flex-row sm:justify-end mt-6 gap-2 sm:gap-0 sm:space-x-2"},e.buttons)]));class L extends R{render(){const t=f=>{f.target===this.panel&&this.close()},o=this.getMainClass(),n=this.title||"Dialog Title";return mt({class:o,title:n,click:t,description:this.description,buttons:this.getButtons()},this.children)}getButtons(){return[r({variant:"outline",click:()=>this.close()},"Close")]}setupStates(){return{open:!1}}getMainClass(){return""}open(){ct(this),this.panel.showModal(),this.state.open=!0}close(){this.state.open=!1,this.panel.close(),this.destroy()}}class ut extends L{getButtons(){const t=this.confirmTextLabel||"Confirm";return[r({variant:"outline",click:()=>this.close()},"Cancel"),r({variant:"primary",click:()=>this.confirm()},t)]}confirm(){this.confirmed&&this.confirmed(),this.close()}}const pt=d((e,t)=>r({text:"Open",class:"m-1",click:()=>new L(e,t).open()})),ft=e=>r({text:"Open",class:"m-1",click:()=>new ut(e).open()}),bt=()=>l({title:"Dialogs",description:"Displays a dialog or a component that looks like a dialog. Dialogs can be opened and closed. They will be closed if the user clicks outside of the dialog or if the user clicks the close button."},[s({title:"Usage",description:"Import the dialog atom and use it in your components.",preview:[pt({title:"Title",description:"this is the description."},[])],code:`import { Dialog } from '@components/molecules/dialogue.js';

new Dialog({
    title: '',
    description: ''
}, [

]).open()`}),s({title:"Confirmation",description:"Displays a confirmation dialog.",preview:[ft({title:"Are you absoultely sure?",description:"This action cannot be undone. This will permanently delete your account and remove your data from our servers.",confirmTextLabel:"Save",confirmed:()=>console.log("Confirmed!")})],code:`import { Confirmation } from '@components/molecules/dialogs/confirmation.js';

new Confirmation({
    title: 'Are you absoultely sure?',
    description: 'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
    confirmTextLabel: 'Save',
    confirmed: () => console.log('Confirmed!')
}).open()`})]),gt=d(e=>({tag:"select",...e,class:`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${e.class||""}`,onCreated(t){e.options&&fe.setupSelectOptions(t,e.options)}})),ht=v({state(){return{selectedDate:this.selectedDate??null,open:!1}},render(){const e=(o,{state:n})=>n.toggle("open"),t=o=>{this.state.selectedDate=o,this.state.open=!1};return a({class:"relative w-full max-w-[320px]"},[S({class:"flex items-center gap-2 w-full justify-between border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md h-10 px-4 py-2",click:e},[b({onState:["selectedDate",o=>o?be.format("standard",o):"Pick a date"]}),g({html:u.calendar.days})]),a({class:"absolute mt-1 z-10 bg-background rounded-md shadow-lg",onState:["open",o=>o?new G({selectedDate:this.state.selectedDate,selectedCallBack:t}):null]})])}}),xt=[{value:"next.js",label:"Next.js"},{value:"sveltekit",label:"SvelteKit"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}],wt=()=>l({title:"Inputs",description:"Inputs are essential for gathering user data in forms."},[s({title:"Usage",description:"Import the input atom and use it in your components. The input can be of various types: text, password, email, etc.",preview:[N({type:"text",placeholder:"Enter your text here...",change:e=>console.log(e.target.value)})],code:`import { Button } from '@components/atoms/form/input.js';

Input({
    type: 'text',
    placeholder: 'Enter your text here...',
    change: (e) => console.log(e.target.value)
})`}),s({title:"Text Input",description:"This is a text input.",preview:[N({type:"text",placeholder:"Enter your text here..."})],code:`
import { Button } from '@components/atoms/form/input.js';

Input({
    type: 'text',
    placeholder: 'Enter your text here...'
})`}),s({title:"Tel Input",description:"This is a phone input.",preview:[ge({})],code:`
import { Button } from '@components/atoms/form/input.js';

TelInput({
})`}),s({title:"Email Input",description:"This is a email input.",preview:[he({})],code:`
import { Button } from '@components/atoms/form/input.js';

EmailInput({

})`}),s({title:"Checkbox",description:"This is a checkbox input.",preview:[new Q({label:"Check me",check:e=>console.log(e)})],code:`
import { Button } from '@components/atoms/form/checkbox.js';

new Checkbox({
    label: 'Check me',
    check: (checked) => console.log(checked)
})`}),s({title:"Select",description:"This is a select input.",preview:[gt({options:xt,change:e=>console.log(e.target.value)})],code:`
import { Button } from '@components/atoms/form/input.js';

Input({
    type: 'text',
    placeholder: 'Enter your text here...'
})`}),s({title:"Textarea",description:"This is a textarea input.",preview:[xe({placeholder:"Enter your text here..."})],code:`
import { Button } from '@components/atoms/form/input.js';

Textarea({
    placeholder: 'Enter your text here...'
})`}),s({title:"Date Picker",description:"@components/molecules/date-time/date-picker.js",preview:[new ht({selectedDate:"2022-01-01"})],code:`
import { Button } from '@components/atoms/form/input.js';

new DatePicker()`})]),vt=[{name:"Leslie Alexander",email:"leslie.alexander@example.com",image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"Co-Founder / CEO",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Michael Foster",email:"michael.foster@example.com",image:"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"Co-Founder / CTO",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Dries Vincent",email:"dries.vincent@example.com",image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"Business Relations",status:"online"}],yt=()=>l({title:"Comboboxes",description:"Comboboxes are used to allow users to select an option from a dropdown list or enter a custom value."},[s({title:"Usage",description:"To use the Combobox component, import it from the components library and use it in your application.",preview:[we({users:vt})],code:`import { UserListItem } from "@components/organisms/lists/user-list.js";
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
});`}),I({class:"text-lg font-bold"},"Description"),c({class:"text-muted-foreground"},"The List component can be used to display a list of items in a structured format. Each item can be customized to show different information. The List component supports appending, prepending, mingling, and deleting or items. "),I({class:"text-lg font-bold"},"Performance"),c({class:"text-muted-foreground"},"The list will only update or re-render the items that have changed, improving performance. It uses a key to know when to update an item.")]),kt=({title:e})=>h({class:"modal-header flex items-center"},[r({variant:"icon",icon:u.arrows.left,class:"mr-2 p-0 bg-transparent flex sm:hidden",click:(t,o)=>o.close()}),M({class:"text-lg font-semibold m-0"},e)]),Tt=d((e,t)=>q({class:`modal m-auto fixed z-20 grid w-full gap-4 border bg-background p-6 shadow-lg ${e.class}`,click:e.click},[a({class:"modal-content flex flex-auto flex-col"},[kt(e),a({class:"modal-body flex flex-auto"},t),K({class:"modal-footer flex justify-between"},e.buttons)])]));class Ct extends L{render(){const t=f=>{f.target===this.panel&&this.close()},o=this.getMainClass(),n=this.title||"Are you abosolutely sure?";return Tt({class:o,click:t,title:n,buttons:this.getButtons(),aria:{expanded:["open"]}},this.children)}getButtons(){return[r({variant:"outline",click:()=>this.close()},"Cancel"),r({variant:"primary",click:()=>this.confirm()},"Save")]}getSizeClass(){switch(this.size){case"sm":return"sm max-w-[646px]";case"lg":return"lg max-w-[900px]";case"xl":return"xl max-w-[1400px]";default:return"medium max-w-[760px]"}}getTypeClass(){switch(this.type){case"right":return"right right-0";case"left":return"left left-0";default:return""}}getMainClass(){return this.getSizeClass()+" "+this.getTypeClass()}}const x=[{label:"Large",buttonStyle:"primary",size:"lg"},{label:"Small",buttonStyle:"secondary",size:"sm"},{label:"Medium",buttonStyle:"destructive",size:"md"},{label:"XL",buttonStyle:"primary",size:"xl"},{label:"Right",buttonStyle:"ghost",type:"right"},{label:"Left",buttonStyle:"link",type:"left"}],w=({label:e,buttonStyle:t,size:o,type:n})=>r({text:e,class:`m-1 ${t}`,click:()=>new Ct({title:"Are you absolutely sure?",size:o,type:n}).open()}),Bt=()=>l({title:"Modals",description:"Displays a modal or a component that looks like a modal."},[s({title:"Extra Large Modal",description:"This is an extra large modal.",preview:[w(x[3])],code:`
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
});`}),s({title:"Large Modal",description:"This is a large modal.",preview:[w(x[0])],code:`
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
});`}),s({title:"Small Modal",preview:[w(x[1])],code:`
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
});`}),s({title:"Medium Modal",preview:[w(x[2])],code:`
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
});`}),s({title:"Right Modal",preview:[w(x[4])],code:`
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
});`})]),jt=()=>l({title:"Navigations",description:"Navigations are components that help users move around the website or application."},[s({title:"Inline Navigation",description:"The inline navigation component is a simple navigation component that can be used in a sidebar or app shell.",preview:[a({class:"flex flex-auto flex-col w-full border rounded-md max-w-[300px]"},[new ve({options:[{label:"Home",href:"/",icon:u.home},{label:"About",href:"/about"},{label:"Contact",href:"/contact"},{label:"Services",options:[{label:"Web Development",href:"/web-development"}]},{group:"Frameworks",options:[{label:"Next.js",href:"/next"},{label:"SvelteKit",href:"/sveltekit"},{label:"Nuxt.js",href:"/nuxt"},{label:"Remix",href:"/remix"},{label:"Astro",href:"/astro"}]}]})])],code:`import { Button } from '@components/organisms/navigation/inline-navigation.js';
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
})`})]),It=()=>l({title:"Notifications",description:"Displays a notification message to the user."},[s({title:"In App Notifications",description:"Notifications can be displayed in the app to inform users about important events or updates. They are a global notification container that can be called from anywhere in the app.",preview:[new ye({title:"Notification Title",description:"This is a notification.",icon:u.warning,duration:"infinite"})],code:`app.notify({
    title: 'Notification Title',
    description: 'This is a notification.',
    icon: Icons.warning,
    type: 'warning', // 'success', 'destructive', 'info', 'warning'
    duration: 5000 // in milliseconds, leave it blank for 4 seconds, infinite is also a value to prevent it from going away
})`}),c({class:"text-muted-foreground"},"Notifications will stack if a few are called at the same time. The notification will be until the duration has been met. If a notificaiton duration is set to 'infinite', it must be removed by the user.  "),s({title:"Usage",description:"Call 'notify' the gloabl notification container to display notifications.",preview:[r({click:()=>{app.notify({title:"Notification Title",description:"This is a notification.",icon:u.warning,type:"warning"})}},"Show")],code:`app.notify({
    title: 'Notification Title',
    description: 'This is a notification.',
    icon: Icons.warning,
    type: 'warning', // 'success', 'destructive', 'info', 'warning'
    duration: 5000 // in milliseconds, leave it blank for 4 seconds, infinite is also a value to prevent it from going away
})`})]),z=d((e,t)=>a({class:"py-4"},t)),St=()=>l({title:"Tabs",description:"Displays a tab or a component that looks like a tab."},[s({title:"Button Tab",description:"This is a button tab. The buttons to not route.",preview:[new J({class:"mt-4 max-w-[400px]",options:[{label:"Preview",value:"preview",layout:z([])},{label:"Code",value:"code",layout:z([])}]})],code:`
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
);`}),s({title:"Link Tab",description:"This is a link tab. The buttons route to a different page.",preview:[new ke({class:"max-w-[400px]",options:[{label:"Example 1",href:"docs/components/tabs/example-1",component:new C({class:"p-8"},"This is an example 1 tab panel.")},{label:"Example 2",href:"docs/components/tabs/example-2",component:new C({class:"p-8"},"This is an example 2 tab panel.")},{label:"Example 3",href:"docs/components/tabs/example-3",component:new C({class:"p-8"},"This is an example 3 tab panel.")}]})],code:`
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
);`})]),Dt=d((e,t)=>{var o;return g({...e,html:(o=t[0])==null?void 0:o.textContent})}),O=(e,t,o)=>(o="Icons"+(o?"."+o:""),a({class:"flex flex-auto flex-col items-center gap-2 max-w-[150px] h-[8.5rem] cursor-pointer"},[a({class:"flex flex-auto w-full h-full justify-center items-center flex-wrap rounded-lg border bg-card text-base shadow-sm",click:()=>{navigator.clipboard.writeText(`${o}.${t}`)}},[Dt(e)]),a({class:"text-muted-foreground"},t)])),X=(e,t,o)=>{const n=typeof e=="object";n&&t.push(c({class:"text-muted-foreground"},"path: "+o+".{icon}"));const f=[];if(t.push(a({class:"flex flex-auto flex-wrap gap-2 my-8"},f)),n===!1)f.push(O(e,o));else for(var y in e){if(e.hasOwnProperty(y)===!1)continue;const j=e[y];if(typeof j!="object"){f.push(O(j,y,o));continue}const Z=`${o}.${y}`;X(j,t,Z)}},At=e=>{if(!e||typeof e!="object")return;const t=[];for(let[o,n]of Object.entries(e)){if(o==="parse")continue;t.push(Y({id:o.toLowerCase(),class:"text-2xl font-bold"},Te.titleCase(o))),X(n,t,o)}return t},$t=()=>l({title:"Icons",description:"The icons are from the Hericon library. They are SVG icons that can be used in your project. This icon set uses the outline style."},[$({href:"https://heroicons.com/",target:"_blank",class:"bttn link"},"link: Hericons"),s({title:"Icons",description:"This is an icon.",preview:[g({html:u.home})],code:`
import { Icons } from '@components/icons/icons.js';
import { I } from '@base-framework/atoms';

export const HomeIcon = () => (
    I({ html: Icons.home} )
);`}),a({class:"my-20"},[D({class:"text-2xl font-bold"},"Default Icons"),c({class:"text-muted-foreground"},'A few of the icons have been saved to the "Icons" object. You can use these icons in your project. Click to copy the Icon path. Here is a list of the icons that are available:')]),At(u)]),Mt=()=>l({title:"Introduction",description:"This app shell was created to showcase Base framework and its components and atoms. It is a simple app shell that can be used as a starting point for your project. It is built with Tailwind CSS and uses Shadcn as the inspiration for the theme and many of it's components. "}),Lt=e=>a({class:"flex flex-auto flex-col items-center gap-2 max-w-[150px] h-[8.5rem] cursor-pointer"},[a({class:`flex flex-auto w-full h-full min-h-[136px] justify-center items-center flex-wrap rounded-lg border text-base shadow-sm ${e.class}`,click:()=>{navigator.clipboard.writeText(`${e.class}`)}}),a({class:"text-sm text-muted-foreground"},e.var)]),p=(e,t)=>B({class:"flex flex-auto flex-col gap-2"},[c({class:"text-base text-muted-foreground"},e),a({class:"flex flex-auto flex-wrap gap-2 my-2",map:[t,Lt]})]),Nt=e=>a({class:"flex flex-auto flex-col gap-12"},[Y({class:"text-2xl font-bold"},"Color Guide"),p("Default background color of <body />...etc",[{var:"--backround",class:"bg-backround"},{var:"--foreground",class:"bg-foreground"}]),p("Muted backgrounds such as <TabsList />, <Skeleton /> and <Switch />",[{var:"--muted",class:"bg-muted"},{var:"--muted-foreground",class:"bg-muted-forground"}]),p("Background color for <Card />",[{var:"--card",class:"bg-card"},{var:"--card-foreground",class:"bg-card-foreground"}]),p("Background color for popovers such as <DropdownMenu />, <HoverCard />, <Popover />",[{var:"--popover",class:"bg-popover"},{var:"--popover-foreground",class:"bg-popover-foreground"}]),p("Default border color",[{var:"--border",class:"bg-border"}]),p("Border color for inputs such as <Input />, <Select />, <Textarea />",[{var:"--input",class:"bg-input"}]),p("Primary colors for <Button />",[{var:"--primary",class:"bg-primary"},{var:"--primary-foreground",class:"bg-primary-foreground"}]),p("Secondary colors for <Button />",[{var:"--secondary",class:"bg-secondary"},{var:"--secondary-foreground",class:"bg-secondary-foreground"}]),p("Used for accents such as hover effects on <DropdownMenuItem>, <SelectItem>...etc",[{var:"--accent",class:"bg-accent"},{var:"--accent-foreground",class:"bg-accent-foreground"}]),p('Used for destructive actions such as <Button variant="destructive">',[{var:"--destructive",class:"bg-destructive"},{var:"--destructive-foreground",class:"bg-destructive-foreground"}]),p('Used for warning actions such as <Button variant="warning">',[{var:"--warning",class:"bg-warning"},{var:"--warning-foreground",class:"bg-warning-foreground"}]),p("Used for focus ring",[{var:"--ring",class:"bg-ring"}]),p("Border radius for card, input and buttons",[{var:"--radius",class:"bg-radius"}])]),Pt=()=>l({title:"Theme",description:"The theme is using Tailwind CSS and is based on Shadcn UI. The theme is customizable and can be extended. It comes with light and dark theme support."},[$({href:"https://ui.shadcn.com/docs/theming",target:"_blank",class:"bttn link"},"link: Shadcn"),a({class:"my-20"},[D({class:"text-2xl font-bold"},"Default Styles"),c({class:"text-muted-foreground"},"The default styles are defined in the Tailwind CSS configuration file and in the base CSS file. Here's the list of variables available for customization:")]),Nt(),a({class:"flex flex-auto flex-col gap-2 mt-20"},[I({class:"text-2xl font-bold"},"Text Sizes"),c({class:"text-muted-foreground text-3xl"},"Text-3xl A test sentence."),c({class:"text-muted-foreground text-2xl"},"Text-2xl A test sentence."),c({class:"text-muted-foreground text-xl"},"Text-xl A test sentence."),c({class:"text-muted-foreground text-lg"},"Text-lg A test sentence."),c({class:"text-muted-foreground text-base"},"Text-base A test sentence."),c({class:"text-muted-foreground text-sm"},"Text-sm A test sentence."),c({class:"text-muted-foreground text-xs"},"Text-xs A test sentence.")])]),i=(e,t,o)=>({uri:e,title:t,component:o()}),Et=e=>[i(`${e}`,"Introduction",Mt),i(`${e}/theme`,"Theme",Pt),i(`${e}/icons`,"Icons",$t),i(`${e}/components/buttons*`,"Buttons",qe),i(`${e}/components/badges*`,"Badges",Re),i(`${e}/components/tabs*`,"Tabs",St),i(`${e}/components/modals*`,"Modals",Bt),i(`${e}/components/notifications*`,"Notifications",It),i(`${e}/components/dialogs*`,"Modals",bt),i(`${e}/components/cards*`,"Cards",Je),i(`${e}/components/calendars*`,"Calendars",Ke),i(`${e}/components/avatars*`,"Avatars",Ee),i(`${e}/components/inputs*`,"Inputs",wt),i(`${e}/components/alerts*`,"Alerts",Pe),i(`${e}/components/comboboxes*`,"Comboboxes",et),i(`${e}/components/lists*`,"Lists",yt),i(`${e}/components/data-tables*`,"Data Tables",lt),i(`${e}/components/breadcrumbs*`,"Breadcrumbs",Ve),i(`${e}/components/navigations*`,"Navigations",jt)],zt=e=>[{href:`${e}`,label:"Introduction",exact:!0},{href:`${e}/theme`,label:"Theme",exact:!0},{href:`${e}/icons`,label:"Icons"},{group:"Components",options:[{label:"Buttons",href:`${e}/components/buttons`},{label:"Badges",href:`${e}/components/badges`},{label:"Tabs",href:`${e}/components/tabs`},{label:"Modals",href:`${e}/components/modals`},{label:"Notifications",href:`${e}/components/notifications`},{label:"Dialogs",href:`${e}/components/dialogs`},{label:"Cards",href:`${e}/components/cards`},{label:"Calendars",href:`${e}/components/calendars`},{label:"Avatars",href:`${e}/components/avatars`},{label:"Inputs",href:`${e}/components/inputs`},{label:"Alerts",href:`${e}/components/alerts`},{label:"Comboboxes",href:`${e}/components/comboboxes`},{label:"Lists",href:`${e}/components/lists`},{label:"Data Tables",href:`${e}/components/data-tables`},{label:"Breadcrumbs",href:`${e}/components/breadcrumbs`},{label:"Navigations",href:`${e}/components/navigations`}]}],Ot=()=>new _({backHref:"aside/"},[new C([a([h([F("Overlay")]),a({class:"contained"},[Ce()])])])]),Rt=e=>[{uri:`${e}/overlay-test`,component:Ot()}],T="docs",Wt=()=>new ee({title:"Documentation",basePath:T,routes:Rt(T),switch:Et(T),links:zt(T)});export{Wt as DocumentationPage,Wt as default};
