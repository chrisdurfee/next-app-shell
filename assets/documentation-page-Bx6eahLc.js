import{O as se,A as ae}from"./overlay-r_-aW81J.js";import{w as W,m as s,R as S,a as G,D as V,H as q,b as $,X as d,p as ne,c as re,U as x,I as j,S as c,B as ie,d as le,C as Y,A as ce,e as u,f as de,y as b,g as w,h as A,T as M,i as l,j as P,k as K,q as h,O as me,l as ue,z as pe,Z as fe,n as J,J as E,o as be,r as T,s as he,t as Q,V as X,v as ge,u as xe,x as z,E as we,K as ve,L as ye,M as ke,N as D,Q as Te,W as Ce,Y as Be,P as B,$ as Z,a0 as je,G as Se}from"./index-CUPrLrfn.js";const Ie=e=>q({class:"inline-flex flex-auto items-center justify-center whitespace-nowrap rounded-sm text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",dataSet:["selected",["state",e.value,"active"]]},[$({class:"flex flex-auto justify-center items-center px-3 py-1.5",onSet:["selected",{selected:e.value}],click:t=>e.callBack(e.value)},e.label)]),De=(e,t)=>(e.callBack=t,Ie(e)),$e=e=>G({class:`tab items-center justify-center rounded-md bg-muted p-1 text-muted-foreground ${e.class}`},[V({class:"flex flex-auto flex-row",map:[e.options,t=>De(t,e.callBack)]})]);class _ extends W{render(){const t=this.select.bind(this);return s({class:""},[$e({class:this.class,options:this.options,callBack:t}),S({class:"tab-content",onState:["selected",this.updateContent.bind(this)]})])}afterSetup(){const t=this.options[0].value;this.select(t)}update(){const t=this.state.get("selected");this.select(null),this.select(t)}select(t){this.state.selected=t}updateContent(t){const o=this.options;if(!o||o.length<1)return;const n=o[0];for(const p of o)if(p.value===t)return p.layout;return n.layout}setupStates(){const t=this.callBack,o=typeof t;return{selected:{state:null,callBack(n){o==="function"&&t(n)}}}}}const Ae=d((e,t)=>ne({class:"flex p-4 min-h-[350px] max-h-[650px] overflow-x-auto rounded-lg border bg-muted whitespace-break-spaces cursor-pointer"},[re({class:"font-mono text-sm",click:()=>navigator.clipboard.writeText(t[0].textContent)},t)])),Me=d((e,t)=>s({class:"flex p-4 min-h-[350px] max-h-[650px] overflow-x-auto rounded-lg border bg-card"},[s({class:"preview flex w-full justify-center items-center"},t)])),O=d((e,t)=>s({class:"py-4"},t)),Pe=e=>new _({class:"mt-4 max-w-[400px]",options:[{label:"Preview",value:"preview",layout:O([Me(e.preview)])},{label:"Code",value:"code",layout:O([Ae(e.code)])}]}),Le=d(({title:e,description:t})=>x({class:"flex flex-col"},[j({class:"scroll-m-20 text-2xl font-bold tracking-tight"},e),t&&c({class:"text-base text-muted-foreground py-2 max-w-[700px]"},t)])),a=d((e,t)=>S({class:"py-4"},[Le({title:e.title,description:e.description}),Pe({preview:e.preview,code:e.code})]));class Ne extends ie{render(){return le([s({class:"contained px-4 flex flex-auto flex-col"},this.children)])}}const Ee=d(({title:e,description:t})=>x({class:"flex flex-col"},[Y({class:"scroll-m-20 text-3xl font-bold tracking-tight"},e),c({class:"text-base text-muted-foreground py-2 max-w-[700px]"},t)])),ze=d((e,t)=>s({class:"contained py-8"},[Ee(e),S({class:"pb-12 pt-8"},t)])),i=d((e,t)=>new Ne([ze(e,t)])),Oe=()=>i({title:"Alerts",description:"Alerts are used to provide feedback to the user about the outcome of an action or to inform them of important information."},[a({title:"Usage",description:"To use the Alert component, import it from the components library and use it in your application.",preview:[ce({title:"Heads up!",description:"You can add components to your app using the cli.",icon:u.information})],code:`import { Alert } from "@components/molecules/alert.js";
import { Icons } from "@components/icons/icons.js";

Alert({
    title: 'Heads up!',
    description: 'You can add components to your app using the cli.',
    icon: Icons.information
})`})]),Ue=()=>i({title:"Cards",description:"Cards are a great way to display content in a concise and organized manner."},[a({title:"Usage",description:"Import the card atom and use it in your components. The avatar can be set to multiple sizes: xs, sm, lg, xl, 2xl, 3xl.",preview:[de({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN"})],code:`import { Button } from '@components/atoms/cards/card.js';

Avatar({
    src: 'https://github.com/shadcn.png',
    alt: '@shadcn',
    fallbackText: 'CN',
    size: 'md' // You can change the size to xs, sm, lg, xl, 2xl, 3xl
})`})]),U={gray:{backgroundColor:"bg-gray-50",textColor:"text-gray-600",ringColor:"ring-gray-500/10"},red:{backgroundColor:"bg-red-50",textColor:"text-red-700",ringColor:"ring-red-600/10"},yellow:{backgroundColor:"bg-yellow-50",textColor:"text-yellow-800",ringColor:"ring-yellow-600/20"},green:{backgroundColor:"bg-green-50",textColor:"text-green-700",ringColor:"ring-green-600/20"},blue:{backgroundColor:"bg-blue-50",textColor:"text-blue-700",ringColor:"ring-blue-700/10"},indigo:{backgroundColor:"bg-indigo-50",textColor:"text-indigo-700",ringColor:"ring-indigo-700/10"},purple:{backgroundColor:"bg-purple-50",textColor:"text-purple-700",ringColor:"ring-purple-700/10"},pink:{backgroundColor:"bg-pink-50",textColor:"text-pink-700",ringColor:"ring-pink-700/10"},primary:{backgroundColor:"bg-primary",textColor:"text-primary-foreground",ringColor:"ring-primary/10"},secondary:{backgroundColor:"bg-secondary",textColor:"text-secondary-foreground",ringColor:"ring-secondary/10"},destructive:{backgroundColor:"bg-destructive",textColor:"text-destructive-foreground",ringColor:"ring-destructive/10"},warning:{backgroundColor:"bg-warning",textColor:"text-warning-foreground",ringColor:"ring-warning/10"},outline:{backgroundColor:"bg-background",textColor:"text-primary",ringColor:"ring-input"},ghost:{backgroundColor:"bg-background",textColor:"text-primary",ringColor:"ring-background"},link:{backgroundColor:"bg-background",textColor:"text-primary",ringColor:"ring-background"}},He=e=>U[e]||U.gray,Re=e=>{const{backgroundColor:t,textColor:o,ringColor:n}=He(e);return`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors ${t} ${o} ${n}`},m=d((e,t)=>{const o=Re(e==null?void 0:e.type);return b({...e,class:o},t)}),Fe=()=>i({title:"Badges",description:"Badges can be used to display a status or a count."},[a({title:"Badge",description:"This is a badge.",preview:[s({class:"flex gap-2 flex-wrap"},[m({type:"gray"},"Text"),m({type:"red"},"Text"),m({type:"yellow"},"Text"),m({type:"green"},"Text"),m({type:"blue"},"Text"),m({type:"indigo"},"Text"),m({type:"purple"},"Text"),m({type:"pink"},"Text"),m({type:"primary"},"Text"),m({type:"secondary"},"Text"),m({type:"destructive"},"Text"),m({type:"warning"},"Text"),m({type:"outline"},"Text"),m({type:"ghost"},"Text"),m({type:"link"},"Text")])],code:`
import { Button } from '@components/atoms/badges/badges.js';
import { Atom } from '@base-framework/base';

export const PrimaryBadge = Atom((props, children)) => (
    Badge({ ...props, type: 'gray' }, children)
);`})]),We=(e,t)=>M({href:e,"aria-current":t==="Breadcrumb"?"page":null,class:"text-muted-foreground hover:text-foreground"},[b(t)]),Ge=()=>b({class:"mx-2 text-muted-foreground","aria-hidden":!0,html:">"}),Ve=e=>s({class:"flex items-center"},[e.href?We(e.href,e.label):b(e.label),e.separator&&Ge()]),qe=w({setData(){return new A({items:this.items||[]})},render(){return G({"aria-label":"Breadcrumb",class:"flex items-center space-x-1 text-sm"},[s({role:"list",class:"flex items-center",for:["items",(e,t)=>Ve({href:e.href,label:e.label,separator:t<this.data.items.length-1})]})])}}),Ye=[{href:"/",label:"Home"},{href:"/components",label:"Components"},{label:"Breadcrumb"}],Ke=()=>i({title:"Breadcrumbs",description:"Breadcrumbs are a navigation aid that helps users understand their location within a website or application."},[a({title:"Usage",description:"To use the Breadcrumb component, import it and provide an array of items. Each item can have a label and an optional href.",preview:[new qe({items:Ye})],code:`import { Breadcrumb } from "@components/molecules/breadcrumb/breadcrumb.js";

new Breadcrumb({ items: [
    { href: '/', label: 'Home' },
    { href: '/components', label: 'Components' },
    { label: 'Breadcrumb' } // Last item, no href needed
] })`})]),Je=()=>i({title:"Button",description:"Displays a button or a component that looks like a button."},[a({title:"Usage",description:"Import the button atom and use it in your components. This platform has variants for different use cases. The variant can be set using the `variant` prop.",preview:[l({variant:"primary"},"Click Me")],code:`import { Button } from '@components/atoms/buttons/buttons.js';

Button({ ...props, variant: 'secondary' }, primary)`}),x({class:"flex flex-col py-8"},[P({class:"text-3xl font-bold tracking-tight border-b pb-2"},"Variants")]),a({title:"Primary Button",description:"This is a primary button.",preview:[l({variant:"primary"},"Click Me")],code:`
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
);`}),a({title:"Icon Button",description:"Displays a button with an icon.",preview:[l({variant:"icon",icon:u.home})],code:`import { Button } from '@components/atoms/buttons/buttons.js';
import { Icons } from '@components/icons/icons.js';
import { Atom } from '@base-framework/base';

export const IconButton = Atom((props) => (
    Button({ ...props, variant: 'icon', icon: Icons.home })
);`}),a({title:"With Icon Button",preview:[l({variant:"withIcon",icon:u.home},"With Icon")],code:`import { Button } from '@components/atoms/buttons/buttons.js';

Button({ variant: 'withIcon', icon: Icons.home }, 'With Icon')`})]),Qe=()=>i({title:"Calendars",description:"This is the calendar component documentation."},[a({title:"Usage",description:"This is how you can use the calendar component.",preview:[new K],code:`@components/organisms/calendar/calendar.js';

new Calendar()`})]),Xe=d((e,t)=>s({...e,class:`rounded-lg border bg-card text-card-foreground shadow-md min-w-[120px] min-h-[80px] my-5 mx-5 p-4 ${e.class||""}`,children:t})),Ze=()=>i({title:"Cards",description:"Cards are a great way to display content in a concise and organized manner."},[a({title:"Usage",description:"Import the card atom and use it in your components.",preview:[Xe()],code:`import { Button } from '@components/atoms/cards/card.js';

Card()`})]),_e=(e,t)=>q({class:"flex flex-auto items-center cursor-pointer p-2 hover:bg-secondary rounded-sm",click:()=>t(e),onState:["selectedValue",{"bg-secondary":e.value}]},[e.icon&&b({class:"mr-2 flex items-baseline"},[h({class:"flex w-4 h-4",html:e.icon})]),b(e.label)]),et=e=>s({class:"absolute border rounded-md shadow-lg mt-1 w-full z-10"},[V({class:"max-h-60 overflow-y-auto p-2",for:["items",t=>_e(t,e)]})]),tt=w({setData(){return new A({items:this.items||[]})},state:{open:!1,selectedLabel:"",selectedValue:""},render(){const e=(o,{state:n})=>n.toggle("open"),t=o=>{const n=this.state;n.selectedValue=o.value,n.selectedLabel=o.label,n.open=!1};return s({class:"relative w-[200px]"},[$({class:"inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-[200px] justify-between",click:e},[b({onState:["selectedLabel",o=>o||"Select item..."]}),h({html:u.chevron.upDown})]),s({class:"felx flex-auto flex-col",onState:["open",o=>o?et(t):null]})])}}),ot=[{value:"next.js",label:"Next.js",icon:u.home},{value:"sveltekit",label:"SvelteKit"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}],st=()=>i({title:"Comboboxes",description:"Comboboxes are used to allow users to select an option from a dropdown list or enter a custom value."},[a({title:"Usage",description:"To use the Combobox component, import it from the components library and use it in your application.",preview:[new tt({items:ot})],code:`@components/molecules/combobox/combobox.js';
import { Icons } from "@components/icons/icons.js";

new Combobox({
    items: [
    { value: 'next.js', label: 'Next.js', icon: Icons.home },,
    { value: 'sveltekit', label: 'SvelteKit' },
    { value: 'nuxt.js', label: 'Nuxt.js' },
    { value: 'remix', label: 'Remix' },
    { value: 'astro', label: 'Astro' },
],
})`})]),at=()=>`checkbox-${Math.random().toString(36).substring(2,9)}`,L=w({state(){return{checked:this.checked??!1}},render(){const e=at();return s({class:`flex items-center space-x-2 cursor-pointer ${this.class}`},[s({class:"relative flex items-center justify-center w-5 h-5 rounded-md transition-colors duration-200 border hover:border-accent-foreground",onState:["checked",{"bg-primary":!0,"text-primary-foreground":!0}],role:"checkbox",aria:{checked:["checked"]},tabIndex:0,click:()=>{this.state.checked=!this.state.checked,typeof this.checked=="function"&&this.checked(this.state.checked)}},[me({id:e,class:"absolute opacity-0 w-full h-full cursor-pointer",aria:{checked:["checked"]},bind:this.bind,change:t=>{const o=t.target.checked;this.state.checked=o,typeof this.checked=="function"&&this.checked(o)}}),b({class:"absolute text-xs pointer-events-none",onState:["checked",t=>t?h({class:"w-2 h-2 pointer-events-none",html:u.check}):null]})]),this.label&&ue({class:"text-base cursor-pointer",htmlFor:e,click:()=>{this.state.toggle("checked"),typeof this.checked=="function"&&this.checked(this.state.checked)}},this.label)])}}),nt=e=>fe([J({class:"text-muted-foreground border-b",map:[e.headers,t=>{if(t.label==="checkbox")return E({class:"cursor-pointer py-3 px-4 text-base"},[new L({class:"mr-2"})]);const o=t.align||"items-center justify-start";return E({class:"cursor-pointer py-3 px-4 text-base",click:t.sortable&&(()=>e.sort(t.key))},[s({class:`flex flex-auto w-full items-center ${o}`},[b(t.label),t.sortable&&h({class:"ml-2",html:u.arrows.upDown})])])}]})]),rt=({key:e,rows:t,selectRow:o,rowItem:n})=>new be({key:e,items:t,rowItem:p=>n(p,o),class:"divide-y divide-border"}),it=w({setData(){return new A({rows:this.rows||[],selectedRows:[]})},selectRow(e){const t=this.data.selectedRows.includes(e)?this.data.selectedRows.filter(o=>o!==e):[...this.data.selectedRows,e];this.data.selectedRows=t},render(){const e=this.data.rows;return s({class:"w-full"},[s({class:"w-full rounded-md border"},[pe({class:"w-full"},[this.headers&&nt({headers:this.headers,sort:t=>this.sortRows(t)}),rt({key:this.key,rows:e,selectRow:this.selectRow.bind(this),rowItem:this.rowItem})])])])}}),lt=[{label:"checkbox",key:""},{label:"Status",key:"status"},{label:"Email",key:"email"},{label:"Amount",key:"amount",align:"justify-end"}],ct=[{id:1,status:"Success",email:"ken99@yahoo.com",amount:316,selected:!1},{id:2,status:"Success",email:"abe45@gmail.com",amount:242,selected:!1},{id:3,status:"Processing",email:"monserrat44@gmail.com",amount:837,selected:!1},{id:4,status:"Success",email:"silas22@gmail.com",amount:874,selected:!1},{id:5,status:"Failed",email:"carmella@hotmail.com",amount:721,selected:!1}],dt=(e,t)=>J({class:"items-center px-4 py-2 hover:bg-muted"},[T({class:"p-4 "},[new L({checked:e.selected,class:"mr-2",click:()=>t(e)})]),T({class:"p-4 "},[b({class:"text-muted-foreground"},e.status)]),T({class:"p-4 "},e.email),T({class:"p-4 text-right"},`$${e.amount.toFixed(2)}`)]),mt=()=>i({title:"Data Tables",description:"Data tables are used to display data in a structured format. They can be used to display a list of items, a grid of items, or a table of items."},[a({title:"Usage",description:"The data table component is used to display data in a structured format. It can be used to display a list of items, a grid of items, or a table of items.",preview:[new it({headers:lt,rows:ct,rowItem:dt,key:"id"})],code:`import { DataTable } from "@components/organisms/lists/data-table.js";
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
})`})]),ut=e=>he.render(e,document.body),pt=({title:e})=>x({class:"flex flex-auto items-center"},[P({class:"text-lg font-semibold"},e)]),ft=d((e,t)=>Q({class:"flex flex-auto flex-col fixed z-30 w-full max-w-lg gap-4 border bg-background text-foreground p-6 shadow-lg duration-200 sm:rounded-lg",click:e.click,aria:{expanded:["open"]}},[s({class:"flex flex-auto flex-col space-y-2"},[pt(e),e.description&&c({class:"flex flex-auto flex-col text-sm text-muted-foreground"},e.description),s({class:"flex flex-auto flex-col text-sm text-muted-foreground"},t)]),X({class:"flex flex-col-reverse sm:flex-row sm:justify-end mt-6 gap-2 sm:gap-0 sm:space-x-2"},e.buttons)]));class N extends W{render(){const t=p=>{p.target===this.panel&&this.close()},o=this.getMainClass(),n=this.title||"Dialog Title";return ft({class:o,title:n,click:t,description:this.description,buttons:this.getButtons()},this.children)}getButtons(){return[l({variant:"outline",click:()=>this.close()},"Close")]}setupStates(){return{open:!1}}getMainClass(){return""}open(){ut(this),this.panel.showModal(),this.state.open=!0}close(){this.state.open=!1,this.panel.close(),this.destroy()}}class bt extends N{getButtons(){const t=this.confirmTextLabel||"Confirm";return[l({variant:"outline",click:()=>this.close()},"Cancel"),l({variant:"primary",click:()=>this.confirm()},t)]}confirm(){this.confirmed&&this.confirmed(),this.close()}}const ht=d((e,t)=>l({text:"Open",class:"m-1",click:()=>new N(e,t).open()})),gt=e=>l({text:"Open",class:"m-1",click:()=>new bt(e).open()}),xt=()=>i({title:"Dialogs",description:"Displays a dialog or a component that looks like a dialog. Dialogs can be opened and closed. They will be closed if the user clicks outside of the dialog or if the user clicks the close button."},[a({title:"Usage",description:"Import the dialog atom and use it in your components.",preview:[ht({title:"Title",description:"this is the description."},[])],code:`import { Dialog } from '@components/molecules/dialogue.js';

new Dialog({
    title: '',
    description: ''
}, [

]).open()`}),a({title:"Confirmation",description:"Displays a confirmation dialog.",preview:[gt({title:"Are you absoultely sure?",description:"This action cannot be undone. This will permanently delete your account and remove your data from our servers.",confirmTextLabel:"Save",confirmed:()=>console.log("Confirmed!")})],code:`import { Confirmation } from '@components/molecules/dialogs/confirmation.js';

new Confirmation({
    title: 'Are you absoultely sure?',
    description: 'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
    confirmTextLabel: 'Save',
    confirmed: () => console.log('Confirmed!')
}).open()`})]),wt=d(e=>({tag:"select",...e,class:`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${e.class||""}`,onCreated(t){e.options&&ge.setupSelectOptions(t,e.options)}})),H=w({state(){return{selectedDate:this.selectedDate??null,open:!1}},render(){const e=(o,{state:n})=>n.toggle("open"),t=o=>{this.state.selectedDate=o,this.state.open=!1};return s({class:"relative w-full max-w-[320px]"},[$({class:"flex items-center gap-2 w-full justify-between border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md h-10 px-4 py-2",click:e},[b({onState:["selectedDate",o=>o?xe.format("standard",o):"Pick a date"]}),h({html:u.calendar.days})]),s({class:"absolute mt-1 z-10 bg-background rounded-md shadow-lg",onState:["open",o=>o?new K({selectedDate:this.state.selectedDate,selectedCallBack:t}):null]})])}}),vt=[{value:"next.js",label:"Next.js"},{value:"sveltekit",label:"SvelteKit"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}],yt=()=>i({title:"Inputs",description:"Inputs are essential for gathering user data in forms."},[a({title:"Usage",description:"Import the input atom and use it in your components. The input can be of various types: text, password, email, etc.",preview:[z({type:"text",placeholder:"Enter your text here...",change:e=>console.log(e.target.value)})],code:`import { Button } from '@components/atoms/form/input.js';

Input({
    type: 'text',
    placeholder: 'Enter your text here...',
    change: (e) => console.log(e.target.value)
})`}),a({title:"Text Input",description:"This is a text input.",preview:[z({type:"text",placeholder:"Enter your text here..."})],code:`
import { Button } from '@components/atoms/form/input.js';

Input({
    type: 'text',
    placeholder: 'Enter your text here...'
})`}),a({title:"Tel Input",description:"This is a phone input.",preview:[we({})],code:`
import { Button } from '@components/atoms/form/input.js';

TelInput({
})`}),a({title:"Email Input",description:"This is a email input.",preview:[ve({})],code:`
import { Button } from '@components/atoms/form/input.js';

EmailInput({

})`}),a({title:"Checkbox",description:"This is a checkbox input.",preview:[new L({label:"Check me",check:e=>console.log(e)})],code:`
import { Button } from '@components/atoms/form/checkbox.js';

new Checkbox({
    label: 'Check me',
    check: (checked) => console.log(checked)
})`}),a({title:"Select",description:"This is a select input.",preview:[wt({options:vt,change:e=>console.log(e.target.value)})],code:`
import { Button } from '@components/atoms/form/input.js';

Input({
    type: 'text',
    placeholder: 'Enter your text here...'
})`}),a({title:"Textarea",description:"This is a textarea input.",preview:[ye({placeholder:"Enter your text here..."})],code:`
import { Button } from '@components/atoms/form/input.js';

Textarea({
    placeholder: 'Enter your text here...'
})`}),a({title:"Date Picker",description:"@components/molecules/date-time/date-picker.js",preview:[new H({selectedDate:"2022-01-01"})],code:`
import { Button } from '@components/atoms/form/input.js';

new DatePicker()`}),a({title:"Date Picker",description:"@components/molecules/date-time/date-picker.js",preview:[new H({selectedDate:"2022-01-01"})],code:`
import { Button } from '@components/atoms/form/input.js';

new DatePicker()`})]),kt=[{name:"Leslie Alexander",email:"leslie.alexander@example.com",image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"Co-Founder / CEO",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Michael Foster",email:"michael.foster@example.com",image:"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"Co-Founder / CTO",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Dries Vincent",email:"dries.vincent@example.com",image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"Business Relations",status:"online"}],Tt=()=>i({title:"Comboboxes",description:"Comboboxes are used to allow users to select an option from a dropdown list or enter a custom value."},[a({title:"Usage",description:"To use the Combobox component, import it from the components library and use it in your application.",preview:[ke({users:kt})],code:`import { UserListItem } from "@components/organisms/lists/user-list.js";
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
});`}),D({class:"text-lg font-bold"},"Description"),c({class:"text-muted-foreground"},"The List component can be used to display a list of items in a structured format. Each item can be customized to show different information. The List component supports appending, prepending, mingling, and deleting or items. "),D({class:"text-lg font-bold"},"Performance"),c({class:"text-muted-foreground"},"The list will only update or re-render the items that have changed, improving performance. It uses a key to know when to update an item.")]),Ct=({title:e})=>x({class:"modal-header flex items-center"},[l({variant:"icon",icon:u.arrows.left,class:"mr-2 p-0 bg-transparent flex sm:hidden",click:(t,o)=>o.close()}),P({class:"text-lg font-semibold m-0"},e)]),Bt=d((e,t)=>Q({class:`modal m-auto fixed z-20 grid w-full gap-4 border bg-background p-6 shadow-lg ${e.class}`,click:e.click},[s({class:"modal-content flex flex-auto flex-col"},[Ct(e),s({class:"modal-body flex flex-auto"},t),X({class:"modal-footer flex justify-between"},e.buttons)])]));class jt extends N{render(){const t=p=>{p.target===this.panel&&this.close()},o=this.getMainClass(),n=this.title||"Are you abosolutely sure?";return Bt({class:o,click:t,title:n,buttons:this.getButtons(),aria:{expanded:["open"]}},this.children)}getButtons(){return[l({variant:"outline",click:()=>this.close()},"Cancel"),l({variant:"primary",click:()=>this.confirm()},"Save")]}getSizeClass(){switch(this.size){case"sm":return"sm max-w-[646px]";case"lg":return"lg max-w-[900px]";case"xl":return"xl max-w-[1400px]";default:return"medium max-w-[760px]"}}getTypeClass(){switch(this.type){case"right":return"right right-0";case"left":return"left left-0";default:return""}}getMainClass(){return this.getSizeClass()+" "+this.getTypeClass()}}const v=[{label:"Large",buttonStyle:"primary",size:"lg"},{label:"Small",buttonStyle:"secondary",size:"sm"},{label:"Medium",buttonStyle:"destructive",size:"md"},{label:"XL",buttonStyle:"primary",size:"xl"},{label:"Right",buttonStyle:"ghost",type:"right"},{label:"Left",buttonStyle:"link",type:"left"}],y=({label:e,buttonStyle:t,size:o,type:n})=>l({text:e,class:`m-1 ${t}`,click:()=>new jt({title:"Are you absolutely sure?",size:o,type:n}).open()}),St=()=>i({title:"Modals",description:"Displays a modal or a component that looks like a modal."},[a({title:"Extra Large Modal",description:"This is an extra large modal.",preview:[y(v[3])],code:`
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
});`}),a({title:"Large Modal",description:"This is a large modal.",preview:[y(v[0])],code:`
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
});`}),a({title:"Small Modal",preview:[y(v[1])],code:`
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
});`}),a({title:"Medium Modal",preview:[y(v[2])],code:`
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
});`}),a({title:"Right Modal",preview:[y(v[4])],code:`
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
});`})]),It=()=>i({title:"Navigations",description:"Navigations are components that help users move around the website or application."},[a({title:"Inline Navigation",description:"The inline navigation component is a simple navigation component that can be used in a sidebar or app shell.",preview:[s({class:"flex flex-auto flex-col w-full border rounded-md max-w-[300px]"},[new Te({options:[{label:"Home",href:"/",icon:u.home},{label:"About",href:"/about"},{label:"Contact",href:"/contact"},{label:"Services",options:[{label:"Web Development",href:"/web-development"}]},{group:"Frameworks",options:[{label:"Next.js",href:"/next"},{label:"SvelteKit",href:"/sveltekit"},{label:"Nuxt.js",href:"/nuxt"},{label:"Remix",href:"/remix"},{label:"Astro",href:"/astro"}]}]})])],code:`import { Button } from '@components/organisms/navigation/inline-navigation.js';
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
})`})]),Dt=()=>i({title:"Notifications",description:"Displays a notification message to the user."},[a({title:"In App Notifications",description:"Notifications can be displayed in the app to inform users about important events or updates. They are a global notification container that can be called from anywhere in the app.",preview:[new Ce({title:"Notification Title",description:"This is a notification.",icon:u.warning,duration:"infinite"})],code:`app.notify({
    title: 'Notification Title',
    description: 'This is a notification.',
    icon: Icons.warning,
    type: 'warning', // 'success', 'destructive', 'info', 'warning'
    duration: 5000 // in milliseconds, leave it blank for 4 seconds, infinite is also a value to prevent it from going away
})`}),c({class:"text-muted-foreground"},"Notifications will stack if a few are called at the same time. The notification will be until the duration has been met. If a notificaiton duration is set to 'infinite', it must be removed by the user.  "),a({title:"Usage",description:"Call 'notify' the gloabl notification container to display notifications.",preview:[l({click:()=>{app.notify({title:"Notification Title",description:"This is a notification.",icon:u.warning,type:"warning"})}},"Show")],code:`app.notify({
    title: 'Notification Title',
    description: 'This is a notification.',
    icon: Icons.warning,
    type: 'warning', // 'success', 'destructive', 'info', 'warning'
    duration: 5000 // in milliseconds, leave it blank for 4 seconds, infinite is also a value to prevent it from going away
})`})]),$t=()=>s({class:"absolute h-full rounded-full bg-primary transition-all duration-300",style:"width: [[progress]]%;"}),At=w({render(){return s({class:"relative w-full h-4 rounded-full bg-muted"},[$t()])},state(){return{progress:this.progress??0}},set(e){e<0&&(e=0),e>100&&(e=100),this.state.progress=e}}),Mt=()=>i({title:"Progress Bars",description:"Progress bars are a great way to show the progress of a task or process."},[a({title:"Usage",description:"Import the progress bar atom and use it in your components. The progress bar can be used to show the progress of a task or process.",preview:[new At({cache:"progress",progress:20})],code:`import { ProgressBar } from "@components/atoms/progress-bar.js";

new ProgressBar({ cache: 'progress', progress: 20 })`})]),g=({className:e,shape:t="rectangle",width:o="w-full",height:n="h-4"})=>s({class:`bg-muted animate-pulse ${o} ${n} ${t==="circle"?"rounded-full":"rounded-md"} ${e||""}`}),Pt=()=>i({title:"Skeletons",description:"Skeletons are components that are used to show a placeholder for content that is loading."},[a({title:"Usage",description:"The skeleton component is used to show a placeholder for content that is loading.",preview:[s({class:"flex flex-auto space-x-4 w-full max-w-64"},[g({shape:"circle",width:"w-10",height:"h-10"}),s({class:"flex flex-auto flex-col space-y-2"},[g({width:"w-3/4",height:"h-4"}),g({width:"w-1/2",height:"h-4"})])])],code:`import { Skeleton } from "@components/atoms/skeleton.js";
import { Div } from '@base-framework/atoms';

Div({ class: 'flex flex-auto space-x-4 w-full max-w-64' }, [
    Skeleton({ shape: 'circle', width: 'w-10', height: 'h-10' }), // Circle skeleton for avatar
    Div({ class: 'flex flex-auto flex-col space-y-2' }, [
        Skeleton({ width: 'w-3/4', height: 'h-4' }), // Long rectangle for main text
        Skeleton({ width: 'w-1/2', height: 'h-4' })  // Shorter rectangle for subtext
    ])
])`}),a({title:"Skeleton Post",description:"This is a skeleton post.",preview:[s({class:"space-y-4 flex flex-auto flex-col w-full max-w-64"},[g({width:"w-full",height:"h-32",shape:"rectangle"}),s({class:"space-y-2"},[g({width:"w-3/4",height:"h-4"}),g({width:"w-1/2",height:"h-4"})])])],code:`import { Skeleton } from "@components/atoms/skeleton.js";
import { Div } from '@base-framework/atoms';

Div({ class: 'space-y-4 flex flex-auto flex-col space-x-4 w-full max-w-64' }, [
    // Large rectangle for image or main content
    Skeleton({ width: 'w-full', height: 'h-32', shape: 'rectangle' }),

    // Text line placeholders
    Div({ class: 'space-y-2' }, [
        Skeleton({ width: 'w-3/4', height: 'h-4' }), // Longer text line
        Skeleton({ width: 'w-1/2', height: 'h-4' })  // Shorter text line
    ])
])`})]),R=d((e,t)=>s({class:"py-4"},t)),Lt=()=>i({title:"Tabs",description:"Displays a tab or a component that looks like a tab."},[a({title:"Button Tab",description:"This is a button tab. The buttons to not route.",preview:[new _({class:"mt-4 max-w-[400px]",options:[{label:"Preview",value:"preview",layout:R([])},{label:"Code",value:"code",layout:R([])}]})],code:`
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
);`}),a({title:"Link Tab",description:"This is a link tab. The buttons route to a different page.",preview:[new Be({class:"max-w-[400px]",options:[{label:"Example 1",href:"docs/components/tabs/example-1",component:new B({class:"p-8"},"This is an example 1 tab panel.")},{label:"Example 2",href:"docs/components/tabs/example-2",component:new B({class:"p-8"},"This is an example 2 tab panel.")},{label:"Example 3",href:"docs/components/tabs/example-3",component:new B({class:"p-8"},"This is an example 3 tab panel.")}]})],code:`
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
);`})]),ee=d((e,t)=>{var o;return h({...e,html:(o=t[0])==null?void 0:o.textContent})}),F=(e,t,o)=>(o="Icons"+(o?"."+o:""),s({class:"flex flex-auto flex-col items-center gap-2 max-w-[150px] h-[8.5rem] cursor-pointer"},[s({class:"flex flex-auto w-full h-full justify-center items-center flex-wrap rounded-lg border bg-card text-base shadow-sm",click:()=>{navigator.clipboard.writeText(`${o}.${t}`)}},[ee(e)]),s({class:"text-muted-foreground"},t)])),te=(e,t,o)=>{const n=typeof e=="object";n&&t.push(c({class:"text-muted-foreground"},"path: "+o+".{icon}"));const p=[];if(t.push(s({class:"flex flex-auto flex-wrap gap-2 my-8"},p)),n===!1)p.push(F(e,o));else for(var k in e){if(e.hasOwnProperty(k)===!1)continue;const I=e[k];if(typeof I!="object"){p.push(F(I,k,o));continue}const oe=`${o}.${k}`;te(I,t,oe)}},Nt=e=>{if(!e||typeof e!="object")return;const t=[];for(let[o,n]of Object.entries(e)){if(o==="parse")continue;t.push(Z({id:o.toLowerCase(),class:"text-2xl font-bold"},je.titleCase(o))),te(n,t,o)}return t},Et=()=>i({title:"Icons",description:"The icons are from the Hericon library. They are SVG icons that can be used in your project. This icon set uses the outline style."},[M({href:"https://heroicons.com/",target:"_blank",class:"bttn link"},"link: Hericons"),a({title:"Icons",description:"This is an icon.",preview:[h({html:u.home})],code:`
import { Icons } from '@components/icons/icons.js';
import { I } from '@base-framework/atoms';

export const HomeIcon = () => (
    I({ html: Icons.home} )
);`}),s({class:"my-20"},[j({class:"text-2xl font-bold"},"Default Icons"),c({class:"text-muted-foreground"},'A few of the icons have been saved to the "Icons" object. You can use these icons in your project. Click to copy the Icon path. Here is a list of the icons that are available:')]),a({title:"Icon Atom",description:"An Icon is a helper atom that makes it easier to use icons in your project. ",preview:[ee(u.home)],code:`
import { Icon } from '@components/atoms/icon.js';

Icon(Icons.home);`}),s({class:"my-20"},[j({class:"text-2xl font-bold"},"Default Icons"),c({class:"text-muted-foreground"},'A few of the icons have been saved to the "Icons" object. You can use these icons in your project. Click to copy the Icon path. Here is a list of the icons that are available:')]),Nt(u)]),zt=()=>i({title:"Introduction",description:"This app shell was created to showcase Base framework and its components and atoms. It is a simple app shell that can be used as a starting point for your project. It is built with Tailwind CSS and uses Shadcn as the inspiration for the theme and many of it's components. "}),Ot=e=>s({class:"flex flex-auto flex-col items-center gap-2 max-w-[150px] h-[8.5rem] cursor-pointer"},[s({class:`flex flex-auto w-full h-full min-h-[136px] justify-center items-center flex-wrap rounded-lg border text-base shadow-sm ${e.class}`,click:()=>{navigator.clipboard.writeText(`${e.class}`)}}),s({class:"text-sm text-muted-foreground"},e.var)]),f=(e,t)=>S({class:"flex flex-auto flex-col gap-2"},[c({class:"text-base text-muted-foreground"},e),s({class:"flex flex-auto flex-wrap gap-2 my-2",map:[t,Ot]})]),Ut=e=>s({class:"flex flex-auto flex-col gap-12"},[Z({class:"text-2xl font-bold"},"Color Guide"),f("Default background color of <body />...etc",[{var:"--backround",class:"bg-backround"},{var:"--foreground",class:"bg-foreground"}]),f("Muted backgrounds such as <TabsList />, <Skeleton /> and <Switch />",[{var:"--muted",class:"bg-muted"},{var:"--muted-foreground",class:"bg-muted-forground"}]),f("Background color for <Card />",[{var:"--card",class:"bg-card"},{var:"--card-foreground",class:"bg-card-foreground"}]),f("Background color for popovers such as <DropdownMenu />, <HoverCard />, <Popover />",[{var:"--popover",class:"bg-popover"},{var:"--popover-foreground",class:"bg-popover-foreground"}]),f("Default border color",[{var:"--border",class:"bg-border"}]),f("Border color for inputs such as <Input />, <Select />, <Textarea />",[{var:"--input",class:"bg-input"}]),f("Primary colors for <Button />",[{var:"--primary",class:"bg-primary"},{var:"--primary-foreground",class:"bg-primary-foreground"}]),f("Secondary colors for <Button />",[{var:"--secondary",class:"bg-secondary"},{var:"--secondary-foreground",class:"bg-secondary-foreground"}]),f("Used for accents such as hover effects on <DropdownMenuItem>, <SelectItem>...etc",[{var:"--accent",class:"bg-accent"},{var:"--accent-foreground",class:"bg-accent-foreground"}]),f('Used for destructive actions such as <Button variant="destructive">',[{var:"--destructive",class:"bg-destructive"},{var:"--destructive-foreground",class:"bg-destructive-foreground"}]),f('Used for warning actions such as <Button variant="warning">',[{var:"--warning",class:"bg-warning"},{var:"--warning-foreground",class:"bg-warning-foreground"}]),f("Used for focus ring",[{var:"--ring",class:"bg-ring"}]),f("Border radius for card, input and buttons",[{var:"--radius",class:"bg-radius"}])]),Ht=()=>i({title:"Theme",description:"The theme is using Tailwind CSS and is based on Shadcn UI. The theme is customizable and can be extended. It comes with light and dark theme support."},[M({href:"https://ui.shadcn.com/docs/theming",target:"_blank",class:"bttn link"},"link: Shadcn"),s({class:"my-20"},[j({class:"text-2xl font-bold"},"Default Styles"),c({class:"text-muted-foreground"},"The default styles are defined in the Tailwind CSS configuration file and in the base CSS file. Here's the list of variables available for customization:")]),Ut(),s({class:"flex flex-auto flex-col gap-2 mt-20"},[D({class:"text-2xl font-bold"},"Text Sizes"),c({class:"text-muted-foreground text-3xl"},"Text-3xl A test sentence."),c({class:"text-muted-foreground text-2xl"},"Text-2xl A test sentence."),c({class:"text-muted-foreground text-xl"},"Text-xl A test sentence."),c({class:"text-muted-foreground text-lg"},"Text-lg A test sentence."),c({class:"text-muted-foreground text-base"},"Text-base A test sentence."),c({class:"text-muted-foreground text-sm"},"Text-sm A test sentence."),c({class:"text-muted-foreground text-xs"},"Text-xs A test sentence.")])]),r=(e,t,o)=>({uri:e,title:t,component:o()}),Rt=e=>[r(`${e}`,"Introduction",zt),r(`${e}/theme`,"Theme",Ht),r(`${e}/icons`,"Icons",Et),r(`${e}/components/buttons*`,"Buttons",Je),r(`${e}/components/badges*`,"Badges",Fe),r(`${e}/components/tabs*`,"Tabs",Lt),r(`${e}/components/modals*`,"Modals",St),r(`${e}/components/notifications*`,"Notifications",Dt),r(`${e}/components/dialogs*`,"Modals",xt),r(`${e}/components/cards*`,"Cards",Ze),r(`${e}/components/calendars*`,"Calendars",Qe),r(`${e}/components/avatars*`,"Avatars",Ue),r(`${e}/components/inputs*`,"Inputs",yt),r(`${e}/components/alerts*`,"Alerts",Oe),r(`${e}/components/comboboxes*`,"Comboboxes",st),r(`${e}/components/lists*`,"Lists",Tt),r(`${e}/components/data-tables*`,"Data Tables",mt),r(`${e}/components/breadcrumbs*`,"Breadcrumbs",Ke),r(`${e}/components/navigations*`,"Navigations",It),r(`${e}/components/progress-bars*`,"Progress Bars",Mt),r(`${e}/components/skeletons*`,"Skeletons",Pt)],Ft=e=>[{href:`${e}`,label:"Introduction",exact:!0},{href:`${e}/theme`,label:"Theme",exact:!0},{href:`${e}/icons`,label:"Icons"},{group:"Components",options:[{label:"Buttons",href:`${e}/components/buttons`},{label:"Badges",href:`${e}/components/badges`},{label:"Tabs",href:`${e}/components/tabs`},{label:"Modals",href:`${e}/components/modals`},{label:"Notifications",href:`${e}/components/notifications`},{label:"Dialogs",href:`${e}/components/dialogs`},{label:"Cards",href:`${e}/components/cards`},{label:"Calendars",href:`${e}/components/calendars`},{label:"Avatars",href:`${e}/components/avatars`},{label:"Inputs",href:`${e}/components/inputs`},{label:"Alerts",href:`${e}/components/alerts`},{label:"Comboboxes",href:`${e}/components/comboboxes`},{label:"Lists",href:`${e}/components/lists`},{label:"Data Tables",href:`${e}/components/data-tables`},{label:"Breadcrumbs",href:`${e}/components/breadcrumbs`},{label:"Navigations",href:`${e}/components/navigations`},{label:"Progress Bars",href:`${e}/components/progress-bars`},{label:"Skeletons",href:`${e}/components/skeletons`}]}],Wt=()=>new se({backHref:"aside/"},[new B([s([x([Y("Overlay")]),s({class:"contained"},[Se()])])])]),Gt=e=>[{uri:`${e}/overlay-test`,component:Wt()}],C="docs",Yt=()=>new ae({title:"Documentation",basePath:C,routes:Gt(C),switch:Rt(C),links:Ft(C)});export{Yt as DocumentationPage,Yt as default};
