import{O as _,A as ee}from"./overlay-bBCPN9Li.js";import{w as U,m as s,R as B,a as z,D as H,H as W,b as A,X as u,p as te,c as oe,U as x,I as D,S as c,B as se,d as ae,C as F,A as ne,e as m,f as re,y as b,g as y,h as $,T as M,i as r,j as L,k as G,q as g,O as ie,l as le,n as I,z as ce,Z as de,o as K,J as me,r as ue,s as k,t as pe,u as Q,V,v as fe,x as be,E as ge,K as he,L as xe,M as we,N as S,Q as ve,W as ye,Y as ke,P as T,$ as q,a0 as Ce,G as Te}from"./index-Ch6my_6b.js";const Be=e=>W({class:"inline-flex flex-auto items-center justify-center whitespace-nowrap rounded-sm text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",dataSet:["selected",["state",e.value,"active"]]},[A({class:"flex flex-auto justify-center items-center px-3 py-1.5",onSet:["selected",{selected:e.value}],click:t=>e.callBack(e.value)},e.label)]),je=(e,t)=>(e.callBack=t,Be(e)),Ie=e=>z({class:`tab items-center justify-center rounded-md bg-muted p-1 text-muted-foreground ${e.class}`},[H({class:"flex flex-auto flex-row",map:[e.options,t=>je(t,e.callBack)]})]);class J extends U{render(){const t=this.select.bind(this);return s({class:""},[Ie({class:this.class,options:this.options,callBack:t}),B({class:"tab-content",onState:["selected",this.updateContent.bind(this)]})])}afterSetup(){const t=this.options[0].value;this.select(t)}update(){const t=this.state.get("selected");this.select(null),this.select(t)}select(t){this.state.selected=t}updateContent(t){const o=this.options;if(!o||o.length<1)return;const n=o[0];for(const p of o)if(p.value===t)return p.layout;return n.layout}setupStates(){const t=this.callBack,o=typeof t;return{selected:{state:null,callBack(n){o==="function"&&t(n)}}}}}const Se=u((e,t)=>te({class:"flex p-4 min-h-[350px] max-h-[650px] overflow-x-auto rounded-lg border bg-muted whitespace-break-spaces cursor-pointer"},[oe({class:"font-mono text-sm",click:()=>navigator.clipboard.writeText(t[0].textContent)},t)])),Ae=u((e,t)=>s({class:"flex p-4 min-h-[350px] max-h-[650px] overflow-x-auto rounded-lg border bg-card"},[s({class:"preview flex w-full justify-center items-center"},t)])),N=u((e,t)=>s({class:"py-4"},t)),De=e=>new J({class:"mt-4 max-w-[400px]",options:[{label:"Preview",value:"preview",layout:N([Ae(e.preview)])},{label:"Code",value:"code",layout:N([Se(e.code)])}]}),$e=u(({title:e,description:t})=>x({class:"flex flex-col"},[D({class:"scroll-m-20 text-2xl font-bold tracking-tight"},e),t&&c({class:"text-base text-muted-foreground py-2 max-w-[700px]"},t)])),a=u((e,t)=>B({class:"py-4"},[$e({title:e.title,description:e.description}),De({preview:e.preview,code:e.code})]));class Me extends se{render(){return ae([s({class:"contained px-4 flex flex-auto flex-col"},this.children)])}}const Le=u(({title:e,description:t})=>x({class:"flex flex-col"},[F({class:"scroll-m-20 text-3xl font-bold tracking-tight"},e),c({class:"text-base text-muted-foreground py-2 max-w-[700px]"},t)])),Pe=u((e,t)=>s({class:"contained py-8"},[Le(e),B({class:"pb-12 pt-8"},t)])),l=u((e,t)=>new Me([Pe(e,t)])),Ne=()=>l({title:"Alerts",description:"Alerts are used to provide feedback to the user about the outcome of an action or to inform them of important information."},[a({title:"Usage",description:"To use the Alert component, import it from the components library and use it in your application.",preview:[ne({title:"Heads up!",description:"You can add components to your app using the cli.",icon:m.information})],code:`import { Alert } from "@components/molecules/alert.js";
import { Icons } from "@components/icons/icons.js";

Alert({
    title: 'Heads up!',
    description: 'You can add components to your app using the cli.',
    icon: Icons.information
})`})]),Re=()=>l({title:"Cards",description:"Cards are a great way to display content in a concise and organized manner."},[a({title:"Usage",description:"Import the card atom and use it in your components. The avatar can be set to multiple sizes: xs, sm, lg, xl, 2xl, 3xl.",preview:[re({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN"})],code:`import { Button } from '@components/atoms/cards/card.js';

Avatar({
    src: 'https://github.com/shadcn.png',
    alt: '@shadcn',
    fallbackText: 'CN',
    size: 'md' // You can change the size to xs, sm, lg, xl, 2xl, 3xl
})`})]),R={gray:{backgroundColor:"bg-gray-50",textColor:"text-gray-600",ringColor:"ring-gray-500/10"},red:{backgroundColor:"bg-red-50",textColor:"text-red-700",ringColor:"ring-red-600/10"},yellow:{backgroundColor:"bg-yellow-50",textColor:"text-yellow-800",ringColor:"ring-yellow-600/20"},green:{backgroundColor:"bg-green-50",textColor:"text-green-700",ringColor:"ring-green-600/20"},blue:{backgroundColor:"bg-blue-50",textColor:"text-blue-700",ringColor:"ring-blue-700/10"},indigo:{backgroundColor:"bg-indigo-50",textColor:"text-indigo-700",ringColor:"ring-indigo-700/10"},purple:{backgroundColor:"bg-purple-50",textColor:"text-purple-700",ringColor:"ring-purple-700/10"},pink:{backgroundColor:"bg-pink-50",textColor:"text-pink-700",ringColor:"ring-pink-700/10"},primary:{backgroundColor:"bg-primary",textColor:"text-primary-foreground",ringColor:"ring-primary/10"},secondary:{backgroundColor:"bg-secondary",textColor:"text-secondary-foreground",ringColor:"ring-secondary/10"},destructive:{backgroundColor:"bg-destructive",textColor:"text-destructive-foreground",ringColor:"ring-destructive/10"},warning:{backgroundColor:"bg-warning",textColor:"text-warning-foreground",ringColor:"ring-warning/10"},outline:{backgroundColor:"bg-background",textColor:"text-primary",ringColor:"ring-input"},ghost:{backgroundColor:"bg-background",textColor:"text-primary",ringColor:"ring-background"},link:{backgroundColor:"bg-background",textColor:"text-primary",ringColor:"ring-background"}},Ee=e=>R[e]||R.gray,Oe=e=>{const{backgroundColor:t,textColor:o,ringColor:n}=Ee(e);return`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors ${t} ${o} ${n}`},d=u((e,t)=>{const o=Oe(e==null?void 0:e.type);return b({...e,class:o},t)}),Ue=()=>l({title:"Badges",description:"Badges can be used to display a status or a count."},[a({title:"Badge",description:"This is a badge.",preview:[s({class:"flex gap-2 flex-wrap"},[d({type:"gray"},"Text"),d({type:"red"},"Text"),d({type:"yellow"},"Text"),d({type:"green"},"Text"),d({type:"blue"},"Text"),d({type:"indigo"},"Text"),d({type:"purple"},"Text"),d({type:"pink"},"Text"),d({type:"primary"},"Text"),d({type:"secondary"},"Text"),d({type:"destructive"},"Text"),d({type:"warning"},"Text"),d({type:"outline"},"Text"),d({type:"ghost"},"Text"),d({type:"link"},"Text")])],code:`
import { Button } from '@components/atoms/badges/badges.js';
import { Atom } from '@base-framework/base';

export const PrimaryBadge = Atom((props, children)) => (
    Badge({ ...props, type: 'gray' }, children)
);`})]),ze=(e,t)=>M({href:e,"aria-current":t==="Breadcrumb"?"page":null,class:"text-muted-foreground hover:text-foreground"},[b(t)]),He=()=>b({class:"mx-2 text-muted-foreground","aria-hidden":!0,html:">"}),We=e=>s({class:"flex items-center"},[e.href?ze(e.href,e.label):b(e.label),e.separator&&He()]),Fe=y({setData(){return new $({items:this.items||[]})},render(){return z({"aria-label":"Breadcrumb",class:"flex items-center space-x-1 text-sm"},[s({role:"list",class:"flex items-center",for:["items",(e,t)=>We({href:e.href,label:e.label,separator:t<this.data.items.length-1})]})])}}),Ge=[{href:"/",label:"Home"},{href:"/components",label:"Components"},{label:"Breadcrumb"}],Ke=()=>l({title:"Breadcrumbs",description:"Breadcrumbs are a navigation aid that helps users understand their location within a website or application."},[a({title:"Usage",description:"To use the Breadcrumb component, import it and provide an array of items. Each item can have a label and an optional href.",preview:[new Fe({items:Ge})],code:`import { Breadcrumb } from "@components/molecules/breadcrumb/breadcrumb.js";

new Breadcrumb({ items: [
    { href: '/', label: 'Home' },
    { href: '/components', label: 'Components' },
    { label: 'Breadcrumb' } // Last item, no href needed
] })`})]),Qe=()=>l({title:"Button",description:"Displays a button or a component that looks like a button."},[a({title:"Usage",description:"Import the button atom and use it in your components. This platform has variants for different use cases. The variant can be set using the `variant` prop.",preview:[r({variant:"primary"},"Click Me")],code:`import { Button } from '@components/atoms/buttons/buttons.js';

Button({ ...props, variant: 'secondary' }, primary)`}),x({class:"flex flex-col py-8"},[L({class:"text-3xl font-bold tracking-tight border-b pb-2"},"Variants")]),a({title:"Primary Button",description:"This is a primary button.",preview:[r({variant:"primary"},"Click Me")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const PrimaryButton = Atom((props, children) => (
    Button({ ...props, variant: 'primary' }, children)
);`}),a({title:"Secondary Button",preview:[r({variant:"secondary"},"Secondary")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const SecondaryButton = Atom((props, children) => (
    Button({ ...props, variant: 'secondary' }, children)
);`}),a({title:"Destructive Button",preview:[r({variant:"destructive"},"Destructive")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const DestructiveButton = Atom((props, children) => (
    Button({ ...props, variant: 'destructive' }, children)
);`}),a({title:"Warning Button",preview:[r({variant:"warning"},"Warning")],code:`import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const WarningButton = Atom((props, children) => (
    Button({ ...props, variant: 'warning' }, children)
);`}),a({title:"Outline Button",preview:[r({variant:"outline"},"Outline")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const OutlineButton = Atom((props, children) => (
    Button({ ...props, variant: 'outline' }, children)
);`}),a({title:"Ghost Button",preview:[r({variant:"ghost"},"Ghost")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const GhostButton = Atom((props, children) => (
    Button({ ...props, variant: 'ghost' }, children)
);`}),a({title:"Link Button",preview:[r({variant:"link"},"Link")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const LinkButton = Atom((props, children) => (
    Button({ ...props, variant: 'link' }, children)
);`}),a({title:"Icon Button",description:"Displays a button with an icon.",preview:[r({variant:"icon",icon:m.home})],code:`import { Button } from '@components/atoms/buttons/buttons.js';
import { Icons } from '@components/icons/icons.js';
import { Atom } from '@base-framework/base';

export const IconButton = Atom((props) => (
    Button({ ...props, variant: 'icon', icon: Icons.home })
);`}),a({title:"With Icon Button",preview:[r({variant:"withIcon",icon:m.home},"With Icon")],code:`import { Button } from '@components/atoms/buttons/buttons.js';

Button({ variant: 'withIcon', icon: Icons.home }, 'With Icon')`})]),Ve=()=>l({title:"Calendars",description:"This is the calendar component documentation."},[a({title:"Usage",description:"This is how you can use the calendar component.",preview:[new G],code:`@components/organisms/calendar/calendar.js';

new Calendar()`})]),qe=u((e,t)=>s({...e,class:`rounded-lg border bg-card text-card-foreground shadow-md min-w-[120px] min-h-[80px] my-5 mx-5 p-4 ${e.class||""}`,children:t})),Je=()=>l({title:"Cards",description:"Cards are a great way to display content in a concise and organized manner."},[a({title:"Usage",description:"Import the card atom and use it in your components.",preview:[qe()],code:`import { Button } from '@components/atoms/cards/card.js';

Card()`})]),Ye=(e,t)=>W({class:"flex flex-auto items-center cursor-pointer p-2 hover:bg-secondary rounded-sm",click:()=>t(e),onState:["selectedValue",{"bg-secondary":e.value}]},[e.icon&&b({class:"mr-2 flex items-baseline"},[g({class:"flex w-4 h-4",html:e.icon})]),b(e.label)]),Ze=e=>s({class:"absolute border rounded-md shadow-lg mt-1 w-full z-10"},[H({class:"max-h-60 overflow-y-auto p-2",for:["items",t=>Ye(t,e)]})]),Xe=y({setData(){return new $({items:this.items||[]})},state:{open:!1,selectedLabel:"",selectedValue:""},render(){const e=(o,{state:n})=>n.toggle("open"),t=o=>{const n=this.state;n.selectedValue=o.value,n.selectedLabel=o.label,n.open=!1};return s({class:"relative w-[200px]"},[A({class:"inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-[200px] justify-between",click:e},[b({onState:["selectedLabel",o=>o||"Select item..."]}),g({html:m.chevron.upDown})]),s({class:"felx flex-auto flex-col",onState:["open",o=>o?Ze(t):null]})])}}),_e=[{value:"next.js",label:"Next.js",icon:m.home},{value:"sveltekit",label:"SvelteKit"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}],et=()=>l({title:"Comboboxes",description:"Comboboxes are used to allow users to select an option from a dropdown list or enter a custom value."},[a({title:"Usage",description:"To use the Combobox component, import it from the components library and use it in your application.",preview:[new Xe({items:_e})],code:`@components/molecules/combobox/combobox.js';
import { Icons } from "@components/icons/icons.js";

new Combobox({
    items: [
    { value: 'next.js', label: 'Next.js', icon: Icons.home },,
    { value: 'sveltekit', label: 'SvelteKit' },
    { value: 'nuxt.js', label: 'Nuxt.js' },
    { value: 'remix', label: 'Remix' },
    { value: 'astro', label: 'Astro' },
],
})`})]),tt=()=>`checkbox-${Math.random().toString(36).substring(2,9)}`,Y=y({state:{checked:!1},render(){const e=tt();return s({class:`flex items-center space-x-2 cursor-pointer ${this.class}`},[s({class:"relative flex items-center justify-center w-5 h-5 rounded-md transition-colors duration-200 border",onState:["checked",{"bg-primary":!0,"text-primary-foreground":!0}],role:"checkbox",aria:{checked:["checked"]},tabIndex:0,click:()=>{this.state.checked=!this.state.checked,typeof this.checked=="function"&&this.checked(this.state.checked)}},[ie({id:e,class:"absolute opacity-0 w-full h-full cursor-pointer",aria:{checked:["checked"]},change:t=>{const o=t.target.checked;this.state.checked=o,typeof this.checked=="function"&&this.checked(o)}}),b({class:"absolute text-xs pointer-events-none",onState:["checked",t=>t?g({class:"w-2 h-2 pointer-events-none",html:m.check}):null]})]),le({class:"text-base cursor-pointer",htmlFor:e,click:()=>{this.state.toggle("checked"),typeof this.checked=="function"&&this.checked(this.state.checked)}},this.label||"")])}}),ot=e=>de([K({class:"grid grid-cols-4 p-4 font-semibold text-muted-foreground border-b"},[...[{label:"",key:"select"},{label:"Status",key:"status"},{label:"Email",key:"email",sortable:!0},{label:"Amount",key:"amount",sortable:!0}].map(o=>me({class:"flex items-center cursor-pointer",click:o.sortable?()=>e(o.key):null},[b(o.label),o.sortable&&g({html:m.sort})]))])]),st=({rows:e,selectRow:t})=>new ue({items:e,rowItem:o=>at(o,t),class:"divide-y divide-border"}),at=(e,t)=>K({class:"grid grid-cols-4 items-center px-4 py-2 hover:bg-muted"},[k({class:"p-4 "},[new Y({checked:e.selected,class:"mr-2",click:()=>t(e)})]),k({class:"p-4 "},[b({class:"text-muted-foreground"},e.status)]),k({class:"p-4 "},e.email),k({class:"p-4 text-right"},`$${e.amount.toFixed(2)}`)]),nt=y({setData(){return new $({rows:this.rows||[],filteredRows:this.rows||[],selectedRows:[]})},state(){return{searchQuery:"",sortKey:null,sortOrder:"asc",currentPage:1}},filterRows(e){const t=this.state.rows.filter(o=>o.email.toLowerCase().includes(e.toLowerCase()));this.state.searchQuery=e,this.state.filteredRows=t,this.state.currentPage=1},sortRows(e){const t=this.state.sortKey===e&&this.state.sortOrder==="asc"?"desc":"asc",o=[...this.data.filteredRows].sort((n,p)=>{const h=n[e]<p[e]?-1:n[e]>p[e]?1:0;return t==="asc"?h:-h});this.state.sortKey=e,this.state.sortOrder=t,this.data.filteredRows=o},selectRow(e){const t=this.data.selectedRows.includes(e)?this.data.selectedRows.filter(o=>o!==e):[...this.data.selectedRows,e];this.data.selectedRows=t},render(){const t=(this.state.currentPage-1)*this.state.rowsPerPage+this.state.rowsPerPage,o=this.data.filteredRows;return s({class:"w-full"},[s({class:"flex items-center justify-between p-4"},[I({type:"text",placeholder:"Filter emails...",value:this.state.searchQuery,class:"border px-2 py-1 rounded-md w-1/3",input:n=>this.filterRows(n.target.value)}),r({variant:"outline",class:"px-4 py-1 flex items-center",click:()=>{}},[b("Columns"),g({class:"ml-2",html:m.chevron.single.down})])]),s({class:"w-full rounded-md border"},[ce({class:"w-full"},[ot(n=>this.sortRows(n)),st({rows:o,selectRow:this.selectRow.bind(this)})])]),s({class:"flex items-center justify-between p-4"},[b(`${this.data.selectedRows.length} of ${this.data.filteredRows.length} row(s) selected`),s({class:"flex items-center gap-2"},[r({variant:"outline",class:"px-3 py-1",disabled:this.state.currentPage===1,click:()=>this.state.currentPage=Math.max(1,this.state.currentPage-1)},"Previous"),r({variant:"outline",class:"px-3 py-1",disabled:t>=this.data.filteredRows.length,click:()=>this.state.currentPage+=1},"Next")])])])}}),rt=[{id:1,status:"Success",email:"ken99@yahoo.com",amount:316,selected:!1},{id:2,status:"Success",email:"abe45@gmail.com",amount:242,selected:!1},{id:3,status:"Processing",email:"monserrat44@gmail.com",amount:837,selected:!1},{id:4,status:"Success",email:"silas22@gmail.com",amount:874,selected:!1},{id:5,status:"Failed",email:"carmella@hotmail.com",amount:721,selected:!1}],it=()=>l({title:"Data Tables",description:"Data tables are used to display data in a structured format. They can be used to display a list of items, a grid of items, or a table of items."},[a({title:"Usage",description:"To use the Combobox component, import it from the components library and use it in your application.",preview:[new nt({rows:rt})],code:`import { UserListItem } from "@components/organisms/lists/user-list.js";
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
});`})]),lt=e=>pe.render(e,document.body),ct=({title:e})=>x({class:"flex flex-auto items-center"},[L({class:"text-lg font-semibold"},e)]),dt=u((e,t)=>Q({class:"flex flex-auto flex-col fixed z-30 w-full max-w-lg gap-4 border bg-background text-foreground p-6 shadow-lg duration-200 sm:rounded-lg",click:e.click,aria:{expanded:["open"]}},[s({class:"flex flex-auto flex-col space-y-2"},[ct(e),e.description&&c({class:"flex flex-auto flex-col text-sm text-muted-foreground"},e.description),s({class:"flex flex-auto flex-col text-sm text-muted-foreground"},t)]),V({class:"flex flex-col-reverse sm:flex-row sm:justify-end mt-6 gap-2 sm:gap-0 sm:space-x-2"},e.buttons)]));class P extends U{render(){const t=p=>{p.target===this.panel&&this.close()},o=this.getMainClass(),n=this.title||"Dialog Title";return dt({class:o,title:n,click:t,description:this.description,buttons:this.getButtons()},this.children)}getButtons(){return[r({variant:"outline",click:()=>this.close()},"Close")]}setupStates(){return{open:!1}}getMainClass(){return""}open(){lt(this),this.panel.showModal(),this.state.open=!0}close(){this.state.open=!1,this.panel.close(),this.destroy()}}class mt extends P{getButtons(){const t=this.confirmTextLabel||"Confirm";return[r({variant:"outline",click:()=>this.close()},"Cancel"),r({variant:"primary",click:()=>this.confirm()},t)]}confirm(){this.confirmed&&this.confirmed(),this.close()}}const ut=u((e,t)=>r({text:"Open",class:"m-1",click:()=>new P(e,t).open()})),pt=e=>r({text:"Open",class:"m-1",click:()=>new mt(e).open()}),ft=()=>l({title:"Dialogs",description:"Displays a dialog or a component that looks like a dialog. Dialogs can be opened and closed. They will be closed if the user clicks outside of the dialog or if the user clicks the close button."},[a({title:"Usage",description:"Import the dialog atom and use it in your components.",preview:[ut({title:"Title",description:"this is the description."},[])],code:`import { Dialog } from '@components/molecules/dialogue.js';

new Dialog({
    title: '',
    description: ''
}, [

]).open()`}),a({title:"Confirmation",description:"Displays a confirmation dialog.",preview:[pt({title:"Are you absoultely sure?",description:"This action cannot be undone. This will permanently delete your account and remove your data from our servers.",confirmTextLabel:"Save",confirmed:()=>console.log("Confirmed!")})],code:`import { Confirmation } from '@components/molecules/dialogs/confirmation.js';

new Confirmation({
    title: 'Are you absoultely sure?',
    description: 'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
    confirmTextLabel: 'Save',
    confirmed: () => console.log('Confirmed!')
}).open()`})]),bt=u(e=>({tag:"select",...e,class:`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${e.class||""}`,onCreated(t){e.options&&fe.setupSelectOptions(t,e.options)}})),gt=y({state(){return{selectedDate:this.selectedDate??null,open:!1}},render(){const e=(o,{state:n})=>n.toggle("open"),t=o=>{this.state.selectedDate=o,this.state.open=!1};return s({class:"relative w-full max-w-[320px]"},[A({class:"flex items-center gap-2 w-full justify-between border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md h-10 px-4 py-2",click:e},[b({onState:["selectedDate",o=>o?be.format("standard",o):"Pick a date"]}),g({html:m.calendar.days})]),s({class:"absolute mt-1 z-10 bg-background rounded-md shadow-lg",onState:["open",o=>o?new G({selectedDate:this.state.selectedDate,selectedCallBack:t}):null]})])}}),ht=[{value:"next.js",label:"Next.js"},{value:"sveltekit",label:"SvelteKit"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}],xt=()=>l({title:"Inputs",description:"Inputs are essential for gathering user data in forms."},[a({title:"Usage",description:"Import the input atom and use it in your components. The input can be of various types: text, password, email, etc.",preview:[I({type:"text",placeholder:"Enter your text here...",change:e=>console.log(e.target.value)})],code:`import { Button } from '@components/atoms/form/input.js';

Input({
    type: 'text',
    placeholder: 'Enter your text here...',
    change: (e) => console.log(e.target.value)
})`}),a({title:"Text Input",description:"This is a text input.",preview:[I({type:"text",placeholder:"Enter your text here..."})],code:`
import { Button } from '@components/atoms/form/input.js';

Input({
    type: 'text',
    placeholder: 'Enter your text here...'
})`}),a({title:"Tel Input",description:"This is a phone input.",preview:[ge({})],code:`
import { Button } from '@components/atoms/form/input.js';

TelInput({
})`}),a({title:"Email Input",description:"This is a email input.",preview:[he({})],code:`
import { Button } from '@components/atoms/form/input.js';

EmailInput({

})`}),a({title:"Checkbox",description:"This is a checkbox input.",preview:[new Y({label:"Check me",check:e=>console.log(e)})],code:`
import { Button } from '@components/atoms/form/checkbox.js';

new Checkbox({
    label: 'Check me',
    check: (checked) => console.log(checked)
})`}),a({title:"Select",description:"This is a select input.",preview:[bt({options:ht,change:e=>console.log(e.target.value)})],code:`
import { Button } from '@components/atoms/form/input.js';

Input({
    type: 'text',
    placeholder: 'Enter your text here...'
})`}),a({title:"Textarea",description:"This is a textarea input.",preview:[xe({placeholder:"Enter your text here..."})],code:`
import { Button } from '@components/atoms/form/input.js';

Textarea({
    placeholder: 'Enter your text here...'
})`}),a({title:"Date Picker",description:"@components/molecules/date-time/date-picker.js",preview:[new gt({selectedDate:"2022-01-01"})],code:`
import { Button } from '@components/atoms/form/input.js';

new DatePicker()`})]),wt=[{name:"Leslie Alexander",email:"leslie.alexander@example.com",image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"Co-Founder / CEO",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Michael Foster",email:"michael.foster@example.com",image:"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"Co-Founder / CTO",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Dries Vincent",email:"dries.vincent@example.com",image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"Business Relations",status:"online"}],vt=()=>l({title:"Comboboxes",description:"Comboboxes are used to allow users to select an option from a dropdown list or enter a custom value."},[a({title:"Usage",description:"To use the Combobox component, import it from the components library and use it in your application.",preview:[we({users:wt})],code:`import { UserListItem } from "@components/organisms/lists/user-list.js";
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
});`}),S({class:"text-lg font-bold"},"Description"),c({class:"text-muted-foreground"},"The List component can be used to display a list of items in a structured format. Each item can be customized to show different information. The List component supports appending, prepending, mingling, and deleting or items. "),S({class:"text-lg font-bold"},"Performance"),c({class:"text-muted-foreground"},"The list will only update or re-render the items that have changed, improving performance. It uses a key to know when to update an item.")]),yt=({title:e})=>x({class:"modal-header flex items-center"},[r({variant:"icon",icon:m.arrows.left,class:"mr-2 p-0 bg-transparent flex sm:hidden",click:(t,o)=>o.close()}),L({class:"text-lg font-semibold m-0"},e)]),kt=u((e,t)=>Q({class:`modal m-auto fixed z-20 grid w-full gap-4 border bg-background p-6 shadow-lg ${e.class}`,click:e.click},[s({class:"modal-content flex flex-auto flex-col"},[yt(e),s({class:"modal-body flex flex-auto"},t),V({class:"modal-footer flex justify-between"},e.buttons)])]));class Ct extends P{render(){const t=p=>{p.target===this.panel&&this.close()},o=this.getMainClass(),n=this.title||"Are you abosolutely sure?";return kt({class:o,click:t,title:n,buttons:this.getButtons(),aria:{expanded:["open"]}},this.children)}getButtons(){return[r({variant:"outline",click:()=>this.close()},"Cancel"),r({variant:"primary",click:()=>this.confirm()},"Save")]}getSizeClass(){switch(this.size){case"sm":return"sm max-w-[646px]";case"lg":return"lg max-w-[900px]";case"xl":return"xl max-w-[1400px]";default:return"medium max-w-[760px]"}}getTypeClass(){switch(this.type){case"right":return"right right-0";case"left":return"left left-0";default:return""}}getMainClass(){return this.getSizeClass()+" "+this.getTypeClass()}}const w=[{label:"Large",buttonStyle:"primary",size:"lg"},{label:"Small",buttonStyle:"secondary",size:"sm"},{label:"Medium",buttonStyle:"destructive",size:"md"},{label:"XL",buttonStyle:"primary",size:"xl"},{label:"Right",buttonStyle:"ghost",type:"right"},{label:"Left",buttonStyle:"link",type:"left"}],v=({label:e,buttonStyle:t,size:o,type:n})=>r({text:e,class:`m-1 ${t}`,click:()=>new Ct({title:"Are you absolutely sure?",size:o,type:n}).open()}),Tt=()=>l({title:"Modals",description:"Displays a modal or a component that looks like a modal."},[a({title:"Extra Large Modal",description:"This is an extra large modal.",preview:[v(w[3])],code:`
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
});`}),a({title:"Large Modal",description:"This is a large modal.",preview:[v(w[0])],code:`
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
});`}),a({title:"Small Modal",preview:[v(w[1])],code:`
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
});`}),a({title:"Medium Modal",preview:[v(w[2])],code:`
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
});`}),a({title:"Right Modal",preview:[v(w[4])],code:`
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
});`})]),Bt=()=>l({title:"Navigations",description:"Navigations are components that help users move around the website or application."},[a({title:"Inline Navigation",description:"The inline navigation component is a simple navigation component that can be used in a sidebar or app shell.",preview:[s({class:"flex flex-auto flex-col w-full border rounded-md max-w-[300px]"},[new ve({options:[{label:"Home",href:"/",icon:m.home},{label:"About",href:"/about"},{label:"Contact",href:"/contact"},{label:"Services",options:[{label:"Web Development",href:"/web-development"}]},{group:"Frameworks",options:[{label:"Next.js",href:"/next"},{label:"SvelteKit",href:"/sveltekit"},{label:"Nuxt.js",href:"/nuxt"},{label:"Remix",href:"/remix"},{label:"Astro",href:"/astro"}]}]})])],code:`import { Button } from '@components/organisms/navigation/inline-navigation.js';
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
})`})]),jt=()=>l({title:"Notifications",description:"Displays a notification message to the user."},[a({title:"In App Notifications",description:"Notifications can be displayed in the app to inform users about important events or updates. They are a global notification container that can be called from anywhere in the app.",preview:[new ye({title:"Notification Title",description:"This is a notification.",icon:m.warning,duration:"infinite"})],code:`app.notify({
    title: 'Notification Title',
    description: 'This is a notification.',
    icon: Icons.warning,
    type: 'warning', // 'success', 'destructive', 'info', 'warning'
    duration: 5000 // in milliseconds, leave it blank for 4 seconds, infinite is also a value to prevent it from going away
})`}),c({class:"text-muted-foreground"},"Notifications will stack if a few are called at the same time. The notification will be until the duration has been met. If a notificaiton duration is set to 'infinite', it must be removed by the user.  "),a({title:"Usage",description:"Call 'notify' the gloabl notification container to display notifications.",preview:[r({click:()=>{app.notify({title:"Notification Title",description:"This is a notification.",icon:m.warning,type:"warning"})}},"Show")],code:`app.notify({
    title: 'Notification Title',
    description: 'This is a notification.',
    icon: Icons.warning,
    type: 'warning', // 'success', 'destructive', 'info', 'warning'
    duration: 5000 // in milliseconds, leave it blank for 4 seconds, infinite is also a value to prevent it from going away
})`})]),E=u((e,t)=>s({class:"py-4"},t)),It=()=>l({title:"Tabs",description:"Displays a tab or a component that looks like a tab."},[a({title:"Button Tab",description:"This is a button tab. The buttons to not route.",preview:[new J({class:"mt-4 max-w-[400px]",options:[{label:"Preview",value:"preview",layout:E([])},{label:"Code",value:"code",layout:E([])}]})],code:`
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
);`}),a({title:"Link Tab",description:"This is a link tab. The buttons route to a different page.",preview:[new ke({class:"max-w-[400px]",options:[{label:"Example 1",href:"docs/components/tabs/example-1",component:new T({class:"p-8"},"This is an example 1 tab panel.")},{label:"Example 2",href:"docs/components/tabs/example-2",component:new T({class:"p-8"},"This is an example 2 tab panel.")},{label:"Example 3",href:"docs/components/tabs/example-3",component:new T({class:"p-8"},"This is an example 3 tab panel.")}]})],code:`
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
);`})]),O=(e,t,o)=>(o="Icons"+(o?"."+o:""),s({class:"flex flex-auto flex-col items-center gap-2 max-w-[150px] h-[8.5rem] cursor-pointer"},[s({class:"flex flex-auto w-full h-full justify-center items-center flex-wrap rounded-lg border bg-card text-base shadow-sm",click:()=>{navigator.clipboard.writeText(`${o}.${t}`)}},[g({html:e})]),s({class:"text-muted-foreground"},t)])),Z=(e,t,o)=>{const n=typeof e=="object";n&&t.push(c({class:"text-muted-foreground"},"path: "+o+".{icon}"));const p=[];if(t.push(s({class:"flex flex-auto flex-wrap gap-2 my-8"},p)),n===!1)p.push(O(e,o));else for(var h in e){if(e.hasOwnProperty(h)===!1)continue;const j=e[h];if(typeof j!="object"){p.push(O(j,h,o));continue}const X=`${o}.${h}`;Z(j,t,X)}},St=e=>{if(!e||typeof e!="object")return;const t=[];for(let[o,n]of Object.entries(e)){if(o==="parse")continue;t.push(q({id:o.toLowerCase(),class:"text-2xl font-bold"},Ce.titleCase(o))),Z(n,t,o)}return t},At=()=>l({title:"Icons",description:"The icons are from the Hericon library. They are SVG icons that can be used in your project. This icon set uses the outline style."},[M({href:"https://heroicons.com/",target:"_blank",class:"bttn link"},"link: Hericons"),a({title:"Icons",description:"This is an icon.",preview:[g({html:m.home})],code:`
import { Icons } from '@components/icons/icons.js';
import { I } from '@base-framework/atoms';

export const HomeIcon = () => (
    I({ html: Icons.home} )
);`}),s({class:"my-20"},[D({class:"text-2xl font-bold"},"Default Icons"),c({class:"text-muted-foreground"},'A few of the icons have been saved to the "Icons" object. You can use these icons in your project. Click to copy the Icon path. Here is a list of the icons that are available:')]),St(m)]),Dt=()=>l({title:"Introduction",description:"This app shell was created to showcase Base framework and its components and atoms. It is a simple app shell that can be used as a starting point for your project. It is built with Tailwind CSS and uses Shadcn as the inspiration for the theme and many of it's components. "}),$t=e=>s({class:"flex flex-auto flex-col items-center gap-2 max-w-[150px] h-[8.5rem] cursor-pointer"},[s({class:`flex flex-auto w-full h-full min-h-[136px] justify-center items-center flex-wrap rounded-lg border text-base shadow-sm ${e.class}`,click:()=>{navigator.clipboard.writeText(`${e.class}`)}}),s({class:"text-sm text-muted-foreground"},e.var)]),f=(e,t)=>B({class:"flex flex-auto flex-col gap-2"},[c({class:"text-base text-muted-foreground"},e),s({class:"flex flex-auto flex-wrap gap-2 my-2",map:[t,$t]})]),Mt=e=>s({class:"flex flex-auto flex-col gap-12"},[q({class:"text-2xl font-bold"},"Color Guide"),f("Default background color of <body />...etc",[{var:"--backround",class:"bg-backround"},{var:"--foreground",class:"bg-foreground"}]),f("Muted backgrounds such as <TabsList />, <Skeleton /> and <Switch />",[{var:"--muted",class:"bg-muted"},{var:"--muted-foreground",class:"bg-muted-forground"}]),f("Background color for <Card />",[{var:"--card",class:"bg-card"},{var:"--card-foreground",class:"bg-card-foreground"}]),f("Background color for popovers such as <DropdownMenu />, <HoverCard />, <Popover />",[{var:"--popover",class:"bg-popover"},{var:"--popover-foreground",class:"bg-popover-foreground"}]),f("Default border color",[{var:"--border",class:"bg-border"}]),f("Border color for inputs such as <Input />, <Select />, <Textarea />",[{var:"--input",class:"bg-input"}]),f("Primary colors for <Button />",[{var:"--primary",class:"bg-primary"},{var:"--primary-foreground",class:"bg-primary-foreground"}]),f("Secondary colors for <Button />",[{var:"--secondary",class:"bg-secondary"},{var:"--secondary-foreground",class:"bg-secondary-foreground"}]),f("Used for accents such as hover effects on <DropdownMenuItem>, <SelectItem>...etc",[{var:"--accent",class:"bg-accent"},{var:"--accent-foreground",class:"bg-accent-foreground"}]),f('Used for destructive actions such as <Button variant="destructive">',[{var:"--destructive",class:"bg-destructive"},{var:"--destructive-foreground",class:"bg-destructive-foreground"}]),f('Used for warning actions such as <Button variant="warning">',[{var:"--warning",class:"bg-warning"},{var:"--warning-foreground",class:"bg-warning-foreground"}]),f("Used for focus ring",[{var:"--ring",class:"bg-ring"}]),f("Border radius for card, input and buttons",[{var:"--radius",class:"bg-radius"}])]),Lt=()=>l({title:"Theme",description:"The theme is using Tailwind CSS and is based on Shadcn UI. The theme is customizable and can be extended. It comes with light and dark theme support."},[M({href:"https://ui.shadcn.com/docs/theming",target:"_blank",class:"bttn link"},"link: Shadcn"),s({class:"my-20"},[D({class:"text-2xl font-bold"},"Default Styles"),c({class:"text-muted-foreground"},"The default styles are defined in the Tailwind CSS configuration file and in the base CSS file. Here's the list of variables available for customization:")]),Mt(),s({class:"flex flex-auto flex-col gap-2 mt-20"},[S({class:"text-2xl font-bold"},"Text Sizes"),c({class:"text-muted-foreground text-3xl"},"Text-3xl A test sentence."),c({class:"text-muted-foreground text-2xl"},"Text-2xl A test sentence."),c({class:"text-muted-foreground text-xl"},"Text-xl A test sentence."),c({class:"text-muted-foreground text-lg"},"Text-lg A test sentence."),c({class:"text-muted-foreground text-base"},"Text-base A test sentence."),c({class:"text-muted-foreground text-sm"},"Text-sm A test sentence."),c({class:"text-muted-foreground text-xs"},"Text-xs A test sentence.")])]),i=(e,t,o)=>({uri:e,title:t,component:o()}),Pt=e=>[i(`${e}`,"Introduction",Dt),i(`${e}/theme`,"Theme",Lt),i(`${e}/icons`,"Icons",At),i(`${e}/components/buttons*`,"Buttons",Qe),i(`${e}/components/badges*`,"Badges",Ue),i(`${e}/components/tabs*`,"Tabs",It),i(`${e}/components/modals*`,"Modals",Tt),i(`${e}/components/notifications*`,"Notifications",jt),i(`${e}/components/dialogs*`,"Modals",ft),i(`${e}/components/cards*`,"Cards",Je),i(`${e}/components/calendars*`,"Calendars",Ve),i(`${e}/components/avatars*`,"Avatars",Re),i(`${e}/components/inputs*`,"Inputs",xt),i(`${e}/components/alerts*`,"Alerts",Ne),i(`${e}/components/comboboxes*`,"Comboboxes",et),i(`${e}/components/lists*`,"Lists",vt),i(`${e}/components/data-tables*`,"Data Tables",it),i(`${e}/components/breadcrumbs*`,"Breadcrumbs",Ke),i(`${e}/components/navigations*`,"Navigations",Bt)],Nt=e=>[{href:`${e}`,label:"Introduction",exact:!0},{href:`${e}/theme`,label:"Theme",exact:!0},{href:`${e}/icons`,label:"Icons"},{group:"Components",options:[{label:"Buttons",href:`${e}/components/buttons`},{label:"Badges",href:`${e}/components/badges`},{label:"Tabs",href:`${e}/components/tabs`},{label:"Modals",href:`${e}/components/modals`},{label:"Notifications",href:`${e}/components/notifications`},{label:"Dialogs",href:`${e}/components/dialogs`},{label:"Cards",href:`${e}/components/cards`},{label:"Calendars",href:`${e}/components/calendars`},{label:"Avatars",href:`${e}/components/avatars`},{label:"Inputs",href:`${e}/components/inputs`},{label:"Alerts",href:`${e}/components/alerts`},{label:"Comboboxes",href:`${e}/components/comboboxes`},{label:"Lists",href:`${e}/components/lists`},{label:"Data Tables",href:`${e}/components/data-tables`},{label:"Breadcrumbs",href:`${e}/components/breadcrumbs`},{label:"Navigations",href:`${e}/components/navigations`}]}],Rt=()=>new _({backHref:"aside/"},[new T([s([x([F("Overlay")]),s({class:"contained"},[Te()])])])]),Et=e=>[{uri:`${e}/overlay-test`,component:Rt()}],C="docs",zt=()=>new ee({title:"Documentation",basePath:C,routes:Et(C),switch:Pt(C),links:Nt(C)});export{zt as DocumentationPage,zt as default};
