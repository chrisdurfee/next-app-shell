import{O as le,A as ce}from"./overlay-WVYYGWLo.js";import{w as A,m as s,R as P,a as Q,D as N,H as R,b as C,X as p,p as de,c as ue,U as y,I as D,S as u,B as me,d as pe,C as X,A as fe,e as r,f as he,y as m,g,h as M,T as z,i as d,j as H,L as be,k as Z,l as U,u as $,q as x,O as ge,n as xe,z as we,Z as ve,o as ee,J as G,r as ye,s as B,t as ke,v as te,V as oe,x as se,E as Te,K as W,M as Ce,N as L,Q as Ie,W as Be,Y as Se,$ as je,a0 as E,a1 as De,a2 as $e,a3 as Ae,P as j,a4 as ne,a5 as Pe,G as Me}from"./index-C737Jtvp.js";const Le=e=>R({class:"inline-flex flex-auto items-center justify-center whitespace-nowrap rounded-sm text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",dataSet:["selected",["state",e.value,"active"]]},[C({class:"flex flex-auto justify-center items-center px-3 py-1.5",onSet:["selected",{selected:e.value}],click:t=>e.callBack(e.value)},e.label)]),Ee=(e,t)=>(e.callBack=t,Le(e)),Ne=e=>Q({class:`tab items-center justify-center rounded-md bg-muted p-1 text-muted-foreground ${e.class}`},[N({class:"flex flex-auto flex-row",map:[e.options,t=>Ee(t,e.callBack)]})]);class ae extends A{render(){const t=this.select.bind(this);return s({class:""},[Ne({class:this.class,options:this.options,callBack:t}),P({class:"tab-content",onState:["selected",this.updateContent.bind(this)]})])}getFirstValue(){var t;return(t=this.options[0])==null?void 0:t.value}update(){const t=this.state.get("selected");this.select(null),this.select(t)}select(t){this.state.selected=t}updateContent(t){const o=this.options;if(!o||o.length<1)return;const a=o[0];for(const i of o)if(i.value===t)return i.layout;return a.layout}setupStates(){const t=this.callBack,o=typeof t;return{selected:{state:this.getFirstValue(),callBack(a){o==="function"&&t(a)}}}}}const Re=p((e,t)=>de({class:"flex p-4 min-h-[350px] max-h-[650px] overflow-x-auto rounded-lg border bg-muted whitespace-break-spaces cursor-pointer"},[ue({class:"font-mono text-sm",click:()=>navigator.clipboard.writeText(t[0].textContent)},t)])),ze=p((e,t)=>s({class:"flex p-4 min-h-[350px] max-h-[650px] overflow-x-auto rounded-lg border bg-card"},[s({class:"preview flex w-full justify-center items-center"},t)])),K=p((e,t)=>s({class:"py-4"},t)),He=e=>new ae({class:"mt-4 max-w-[400px]",options:[{label:"Preview",value:"preview",layout:K([ze(e.preview)])},{label:"Code",value:"code",layout:K([Re(e.code)])}]}),Oe=p(({title:e,description:t})=>y({class:"flex flex-col"},[D({class:"scroll-m-20 text-2xl font-bold tracking-tight"},e),t&&u({class:"text-base text-muted-foreground py-2 max-w-[700px]"},t)])),n=p((e,t)=>P({class:"py-4"},[Oe({title:e.title,description:e.description}),He({preview:e.preview,code:e.code})]));class Fe extends me{render(){return pe([s({class:"contained px-4 flex flex-auto flex-col"},this.children)])}}const Ue=p(({title:e,description:t})=>y({class:"flex flex-col"},[X({class:"scroll-m-20 text-3xl font-bold tracking-tight"},e),u({class:"text-base text-muted-foreground py-2 max-w-[700px]"},t)])),Ge=p((e,t)=>s({class:"contained py-8"},[Ue(e),P({class:"pb-12 pt-8"},t)])),c=p((e,t)=>new Fe([Ge(e,t)])),We=()=>c({title:"Alerts",description:"Alerts are used to provide feedback to the user about the outcome of an action or to inform them of important information."},[n({title:"Usage",description:"To use the Alert component, import it from the components library and use it in your application.",preview:[fe({title:"Heads up!",description:"You can add components to your app using the cli.",icon:r.information})],code:`import { Alert } from "@components/molecules/alert.js";
import { Icons } from "@components/icons/icons.js";

Alert({
    title: 'Heads up!',
    description: 'You can add components to your app using the cli.',
    icon: Icons.information
})`})]),Ke=()=>c({title:"Cards",description:"Cards are a great way to display content in a concise and organized manner."},[n({title:"Usage",description:"Import the card atom and use it in your components. The avatar can be set to multiple sizes: xs, sm, lg, xl, 2xl, 3xl.",preview:[he({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN"})],code:`import { Button } from '@components/atoms/cards/card.js';

Avatar({
    src: 'https://github.com/shadcn.png',
    alt: '@shadcn',
    fallbackText: 'CN',
    size: 'md' // You can change the size to xs, sm, lg, xl, 2xl, 3xl
})`})]),_={gray:{backgroundColor:"bg-gray-50",textColor:"text-gray-600",ringColor:"ring-gray-500/10"},red:{backgroundColor:"bg-red-50",textColor:"text-red-700",ringColor:"ring-red-600/10"},yellow:{backgroundColor:"bg-yellow-50",textColor:"text-yellow-800",ringColor:"ring-yellow-600/20"},green:{backgroundColor:"bg-green-50",textColor:"text-green-700",ringColor:"ring-green-600/20"},blue:{backgroundColor:"bg-blue-50",textColor:"text-blue-700",ringColor:"ring-blue-700/10"},indigo:{backgroundColor:"bg-indigo-50",textColor:"text-indigo-700",ringColor:"ring-indigo-700/10"},purple:{backgroundColor:"bg-purple-50",textColor:"text-purple-700",ringColor:"ring-purple-700/10"},pink:{backgroundColor:"bg-pink-50",textColor:"text-pink-700",ringColor:"ring-pink-700/10"},primary:{backgroundColor:"bg-primary",textColor:"text-primary-foreground",ringColor:"ring-primary/10"},secondary:{backgroundColor:"bg-secondary",textColor:"text-secondary-foreground",ringColor:"ring-secondary/10"},destructive:{backgroundColor:"bg-destructive",textColor:"text-destructive-foreground",ringColor:"ring-destructive/10"},warning:{backgroundColor:"bg-warning",textColor:"text-warning-foreground",ringColor:"ring-warning/10"},outline:{backgroundColor:"bg-background",textColor:"text-primary",ringColor:"ring-input"},ghost:{backgroundColor:"bg-background",textColor:"text-primary",ringColor:"ring-background"},link:{backgroundColor:"bg-background",textColor:"text-primary",ringColor:"ring-background"}},_e=e=>_[e]||_.gray,Ve=e=>{const{backgroundColor:t,textColor:o,ringColor:a}=_e(e);return`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors ${t} ${o} ${a}`},f=p((e,t)=>{const o=Ve(e==null?void 0:e.type);return m({...e,class:o},t)}),Ye=()=>c({title:"Badges",description:"Badges can be used to display a status or a count."},[n({title:"Badge",description:"This is a badge.",preview:[s({class:"flex gap-2 flex-wrap"},[f({type:"gray"},"Text"),f({type:"red"},"Text"),f({type:"yellow"},"Text"),f({type:"green"},"Text"),f({type:"blue"},"Text"),f({type:"indigo"},"Text"),f({type:"purple"},"Text"),f({type:"pink"},"Text"),f({type:"primary"},"Text"),f({type:"secondary"},"Text"),f({type:"destructive"},"Text"),f({type:"warning"},"Text"),f({type:"outline"},"Text"),f({type:"ghost"},"Text"),f({type:"link"},"Text")])],code:`
import { Button } from '@components/atoms/badges/badges.js';
import { Atom } from '@base-framework/base';

export const PrimaryBadge = Atom((props, children)) => (
    Badge({ ...props, type: 'gray' }, children)
);`})]),qe=(e,t)=>z({href:e,"aria-current":t==="Breadcrumb"?"page":null,class:"text-muted-foreground hover:text-foreground"},[m(t)]),Je=()=>m({class:"mx-2 text-muted-foreground","aria-hidden":!0,html:">"}),Qe=e=>s({class:"flex items-center"},[e.href?qe(e.href,e.label):m(e.label),e.separator&&Je()]),Xe=g({setData(){return new M({items:this.items||[]})},render(){return Q({"aria-label":"Breadcrumb",class:"flex items-center space-x-1 text-sm"},[s({role:"list",class:"flex items-center",for:["items",(e,t)=>Qe({href:e.href,label:e.label,separator:t<this.data.items.length-1})]})])}}),Ze=[{href:"/",label:"Home"},{href:"/components",label:"Components"},{label:"Breadcrumb"}],et=()=>c({title:"Breadcrumbs",description:"Breadcrumbs are a navigation aid that helps users understand their location within a website or application."},[n({title:"Usage",description:"To use the Breadcrumb component, import it and provide an array of items. Each item can have a label and an optional href.",preview:[new Xe({items:Ze})],code:`import { Breadcrumb } from "@components/molecules/breadcrumb/breadcrumb.js";

new Breadcrumb({ items: [
    { href: '/', label: 'Home' },
    { href: '/components', label: 'Components' },
    { label: 'Breadcrumb' } // Last item, no href needed
] })`})]),tt=()=>c({title:"Button",description:"Displays a button or a component that looks like a button."},[n({title:"Usage",description:"Import the button atom and use it in your components. This platform has variants for different use cases. The variant can be set using the `variant` prop.",preview:[d({variant:"primary"},"Click Me")],code:`import { Button } from '@components/atoms/buttons/buttons.js';

Button({ ...props, variant: 'secondary' }, primary)`}),y({class:"flex flex-col py-8"},[H({class:"text-3xl font-bold tracking-tight border-b pb-2"},"Variants")]),n({title:"Primary Button",description:"This is a primary button.",preview:[d({variant:"primary"},"Click Me")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const PrimaryButton = Atom((props, children) => (
    Button({ ...props, variant: 'primary' }, children)
);`}),n({title:"Secondary Button",preview:[d({variant:"secondary"},"Secondary")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const SecondaryButton = Atom((props, children) => (
    Button({ ...props, variant: 'secondary' }, children)
);`}),n({title:"Destructive Button",preview:[d({variant:"destructive"},"Destructive")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const DestructiveButton = Atom((props, children) => (
    Button({ ...props, variant: 'destructive' }, children)
);`}),n({title:"Warning Button",preview:[d({variant:"warning"},"Warning")],code:`import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const WarningButton = Atom((props, children) => (
    Button({ ...props, variant: 'warning' }, children)
);`}),n({title:"Outline Button",preview:[d({variant:"outline"},"Outline")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const OutlineButton = Atom((props, children) => (
    Button({ ...props, variant: 'outline' }, children)
);`}),n({title:"Ghost Button",preview:[d({variant:"ghost"},"Ghost")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const GhostButton = Atom((props, children) => (
    Button({ ...props, variant: 'ghost' }, children)
);`}),n({title:"Link Button",preview:[d({variant:"link"},"Link")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const LinkButton = Atom((props, children) => (
    Button({ ...props, variant: 'link' }, children)
);`}),n({title:"Icon Button",description:"Displays a button with an icon.",preview:[d({variant:"icon",icon:r.home})],code:`import { Button } from '@components/atoms/buttons/buttons.js';
import { Icons } from '@components/icons/icons.js';
import { Atom } from '@base-framework/base';

export const IconButton = Atom((props) => (
    Button({ ...props, variant: 'icon', icon: Icons.home })
);`}),n({title:"With Icon Button",preview:[d({variant:"withIcon",icon:r.home},"With Icon")],code:`import { Button } from '@components/atoms/buttons/buttons.js';
import { Icons } from '@components/icons/icons.js';

Button({ variant: 'withIcon', icon: Icons.home }, 'With Icon')`}),n({title:"Loading Button",preview:[be("With Icon")],code:`import { LoadingButton } from '@components/atoms/buttons/buttons.js';

LoadingButton('With Icon')`})]),ot=()=>$.formatTime("",24),st=()=>c({title:"Calendars",description:"This is the calendar component documentation."},[n({title:"Usage",description:"This is how you can use the calendar component.",preview:[new Z],code:`@components/organisms/calendar/calendar.js';

new Calendar()`}),n({title:"Dynamic Time",description:"This is how you can use the calendar component.",preview:[new U({filter:()=>{let e="Morning";const t=ot();return t>="18:00:00"?e="Evening":t>="12:00:00"&&(e="Afternoon"),`Good ${e}`}})],code:`import { DateTime } from "@base-framework/base";
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
})`}),n({title:"Dynamic Local Time by Time Frame",description:"This will show the time frame based on the local time. This will update the time frame every minute to keep the time frame updated.",preview:[new U({dateTime:"2024-11-04T18:00:00",filter(e){const t=$.getLocalTime(e,!0);return $.getTimeFrame(t)}})],code:`import { DateTime } from "@base-framework/base";
import { DynamicTime } from "@base-framework/organisms";

new DynamicTime({
    dateTime: '2024-11-04T18:00:00',
    filter(date)
    {
        // convert to local time
        const localTime = DateTime.getLocalTime(date, true);
        return DateTime.getTimeFrame(localTime);
    }
})`})]),nt=p((e,t)=>s({...e,class:`rounded-lg border bg-card text-card-foreground shadow-md min-w-[120px] min-h-[80px] my-5 mx-5 p-4 ${e.class||""}`,children:t})),at=()=>c({title:"Cards",description:"Cards are a great way to display content in a concise and organized manner."},[n({title:"Usage",description:"Import the card atom and use it in your components.",preview:[nt()],code:`import { Button } from '@components/atoms/cards/card.js';

Card()`})]),rt=(e,t)=>R({class:"flex flex-auto items-center cursor-pointer p-2 hover:bg-secondary rounded-sm",click:()=>t(e),onState:["selectedValue",{"bg-secondary":e.value}]},[e.icon&&m({class:"mr-2 flex items-baseline"},[x({class:"flex w-4 h-4",html:e.icon})]),m(e.label)]),it=e=>s({class:"absolute border rounded-md shadow-lg mt-1 w-full z-10"},[N({class:"max-h-60 overflow-y-auto p-2 grid gap-1",for:["items",t=>rt(t,e)]})]),lt=(e,t)=>!t.contains(e),ct=g({setData(){return new M({items:this.items||[]})},state:{open:!1,selectedLabel:"",selectedValue:""},render(){const e=(o,{state:a})=>a.toggle("open"),t=o=>{const a=this.state;a.selectedValue=o.value,a.selectedLabel=o.label,a.open=!1};return s({class:"relative w-[200px]"},[C({class:"inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-[200px] justify-between",click:e,addEvent:["click",document,(o,{state:a,panel:i})=>{lt(o.target,i)&&(a.open=!1)}]},[m({onState:["selectedLabel",o=>o||"Select item..."]}),x({html:r.chevron.upDown})]),s({class:"felx flex-auto flex-col",onState:["open",o=>o?it(t):null]})])}}),dt=[{value:"next.js",label:"Next.js",icon:r.home},{value:"sveltekit",label:"SvelteKit"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}],ut=()=>c({title:"Comboboxes",description:"Comboboxes are used to allow users to select an option from a dropdown list or enter a custom value."},[n({title:"Usage",description:"To use the Combobox component, import it from the components library and use it in your application.",preview:[new ct({items:dt})],code:`@components/molecules/combobox/combobox.js';
import { Icons } from "@components/icons/icons.js";

new Combobox({
    items: [
    { value: 'next.js', label: 'Next.js', icon: Icons.home },,
    { value: 'sveltekit', label: 'SvelteKit' },
    { value: 'nuxt.js', label: 'Nuxt.js' },
    { value: 'remix', label: 'Remix' },
    { value: 'astro', label: 'Astro' },
],
})`})]),mt=()=>`checkbox-${Math.random().toString(36).substring(2,9)}`,O=g({state(){return{checked:this.checked??!1}},render(){const e=mt();return s({class:`flex items-center space-x-2 cursor-pointer ${this.class}`},[s({class:"relative flex items-center justify-center w-5 h-5 rounded-md transition-colors duration-200 border hover:border-accent-foreground",onState:["checked",{"bg-primary":!0,"text-primary-foreground":!0}],role:"checkbox",aria:{checked:["checked"]},tabIndex:0,click:()=>{this.state.checked=!this.state.checked,typeof this.checked=="function"&&this.checked(this.state.checked)}},[ge({id:e,class:"absolute opacity-0 w-full h-full cursor-pointer",aria:{checked:["checked"]},bind:this.bind,change:t=>{const o=t.target.checked;this.state.checked=o,typeof this.checked=="function"&&this.checked(o)}}),m({class:"absolute text-xs pointer-events-none",onState:["checked",t=>t?x({class:"w-2 h-2 pointer-events-none",html:r.check}):null]})]),this.label&&xe({class:"text-base cursor-pointer",htmlFor:e,click:()=>{this.state.toggle("checked"),typeof this.checked=="function"&&this.checked(this.state.checked)}},this.label)])}}),pt=e=>ve([ee({class:"text-muted-foreground border-b",map:[e.headers,t=>{if(t.label==="checkbox")return G({class:"cursor-pointer py-3 px-4 text-base"},[new O({class:"mr-2"})]);const o=t.align||"items-center justify-start";return G({class:"cursor-pointer py-3 px-4 text-base",click:t.sortable&&(()=>e.sort(t.key))},[s({class:`flex flex-auto w-full items-center ${o}`},[m(t.label),t.sortable&&x({class:"ml-2",html:r.arrows.upDown})])])}]})]),ft=({key:e,rows:t,selectRow:o,rowItem:a})=>new ye({key:e,items:t,rowItem:i=>a(i,o),class:"divide-y divide-border"}),ht=g({setData(){return new M({rows:this.rows||[],selectedRows:[]})},selectRow(e){const t=this.data.selectedRows.includes(e)?this.data.selectedRows.filter(o=>o!==e):[...this.data.selectedRows,e];this.data.selectedRows=t},render(){const e=this.data.rows;return s({class:"w-full"},[s({class:"w-full rounded-md border"},[we({class:"w-full"},[this.headers&&pt({headers:this.headers,sort:t=>this.sortRows(t)}),ft({key:this.key,rows:e,selectRow:this.selectRow.bind(this),rowItem:this.rowItem})])])])}}),bt=[{label:"checkbox",key:""},{label:"Status",key:"status"},{label:"Email",key:"email"},{label:"Amount",key:"amount",align:"justify-end"}],gt=[{id:1,status:"Success",email:"ken99@yahoo.com",amount:316,selected:!1},{id:2,status:"Success",email:"abe45@gmail.com",amount:242,selected:!1},{id:3,status:"Processing",email:"monserrat44@gmail.com",amount:837,selected:!1},{id:4,status:"Success",email:"silas22@gmail.com",amount:874,selected:!1},{id:5,status:"Failed",email:"carmella@hotmail.com",amount:721,selected:!1}],xt=(e,t)=>ee({class:"items-center px-4 py-2 hover:bg-muted"},[B({class:"p-4 "},[new O({checked:e.selected,class:"mr-2",click:()=>t(e)})]),B({class:"p-4 "},[m({class:"text-muted-foreground"},e.status)]),B({class:"p-4 "},e.email),B({class:"p-4 text-right"},`$${e.amount.toFixed(2)}`)]),wt=()=>c({title:"Data Tables",description:"Data tables are used to display data in a structured format. They can be used to display a list of items, a grid of items, or a table of items."},[n({title:"Usage",description:"The data table component is used to display data in a structured format. It can be used to display a list of items, a grid of items, or a table of items.",preview:[new ht({headers:bt,rows:gt,rowItem:xt,key:"id"})],code:`import { DataTable } from "@components/organisms/lists/data-table.js";
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
})`})]),vt=e=>ke.render(e,document.body),yt=({title:e})=>y({class:"flex flex-auto items-center"},[H({class:"text-lg font-semibold"},e)]),kt=p((e,t)=>te({class:"flex flex-auto flex-col fixed z-30 w-full max-w-lg gap-4 border bg-background text-foreground p-6 shadow-lg duration-200 sm:rounded-lg",click:e.click,aria:{expanded:["open"]}},[s({class:"flex flex-auto flex-col space-y-2"},[yt(e),e.description&&u({class:"flex flex-auto flex-col text-sm text-muted-foreground"},e.description),s({class:"flex flex-auto flex-col text-sm text-muted-foreground"},t)]),oe({class:"flex flex-col-reverse sm:flex-row sm:justify-end mt-6 gap-2 sm:gap-0 sm:space-x-2"},e.buttons)]));class F extends A{render(){const t=i=>{i.target===this.panel&&this.close()},o=this.getMainClass(),a=this.title||"Dialog Title";return kt({class:o,title:a,click:t,description:this.description,buttons:this.getButtons()},this.children)}getButtons(){return[d({variant:"outline",click:()=>this.close()},"Close")]}setupStates(){return{open:!1}}getMainClass(){return""}open(){vt(this),this.panel.showModal(),this.state.open=!0}close(){this.state.open=!1,this.panel.close(),this.destroy()}}class Tt extends F{getButtons(){const t=this.confirmTextLabel||"Confirm";return[d({variant:"outline",click:()=>this.close()},"Cancel"),d({variant:"primary",click:()=>this.confirm()},t)]}confirm(){this.confirmed&&this.confirmed(),this.close()}}const Ct=p((e,t)=>d({text:"Open",class:"m-1",click:()=>new F(e,t).open()})),It=e=>d({text:"Open",class:"m-1",click:()=>new Tt(e).open()}),Bt=()=>c({title:"Dialogs",description:"Displays a dialog or a component that looks like a dialog. Dialogs can be opened and closed. They will be closed if the user clicks outside of the dialog or if the user clicks the close button."},[n({title:"Usage",description:"Import the dialog atom and use it in your components.",preview:[Ct({title:"Title",description:"this is the description."},[])],code:`import { Dialog } from '@components/molecules/dialogue.js';

new Dialog({
    title: '',
    description: ''
}, [

]).open()`}),n({title:"Confirmation",description:"Displays a confirmation dialog.",preview:[It({title:"Are you absoultely sure?",description:"This action cannot be undone. This will permanently delete your account and remove your data from our servers.",confirmTextLabel:"Save",confirmed:()=>console.log("Confirmed!")})],code:`import { Confirmation } from '@components/molecules/dialogs/confirmation.js';

new Confirmation({
    title: 'Are you absoultely sure?',
    description: 'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
    confirmTextLabel: 'Save',
    confirmed: () => console.log('Confirmed!')
}).open()`})]);class St extends A{setData(){return this.parent.data}render(){return s({class:"absolute mt-2 border rounded-md shadow-lg bg-popover z-30 w-[250px]",style:"top: [[position.y]]px; left: [[position.x]]px"},this.children)}setupStates(){return{open:{id:this.parent.getId(),callBack:a=>{this.state.open===!1&&this.destroy()}}}}isOutsideClick(t){return!this.panel.contains(t)&&this.button&&!this.button.contains(t)}setupEvents(){return[["click",document,t=>{this.isOutsideClick(t.target)&&(this.state.open=!1)}]]}setup(t){this.container=document.body,this.initialize()}}const jt=e=>m({class:"ml-auto text-xs tracking-widest opacity-60"},e),Dt=e=>m({class:"flex w-4 h-4",html:e}),$t=e=>m({class:"flex-auto"},e),At=(e,t)=>R({class:"relative flex cursor-pointer hover:bg-accent hover:text-accent-foreground select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",click:()=>t(e)},[e.icon&&Dt(e.icon),$t(e.label),e.shortcut&&jt(e.shortcut)]),Pt=(e,t)=>N({class:"grid gap-2"},[e.map(o=>At(o,t))]),Mt=e=>s({class:"w-full z-10"},[s({class:"max-h-60 overflow-y-auto p-1 grid gap-2 divide-y divide-border",for:["groups",t=>Pt(t,e)]})]),Lt=({label:e,icon:t,toggleDropdown:o})=>C({cache:"button",class:`inline-flex items-center justify-between rounded-md border border-input
            bg-background px-2 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground
            focus:outline-none transition duration-150 ease-in-out`,click:o},[e&&m(e),t&&x({html:t})]),Et=({onSelect:e})=>s({onState:["open",(t,o,a)=>{if(t)return new St({cache:"dropdown",parent:a,button:a.button},[Mt(e)])}]});class Nt extends A{setData(){return new M({groups:this.groups||[],position:{y:0,x:0}})}setupStates(){return{open:!1,selectedItem:null}}toggleDropdown(){this.state.toggle("open"),this.state.open&&this.updatePosition()}updatePosition(){const o=this.button.getBoundingClientRect(),i=this.dropdown.panel.getBoundingClientRect();let b=o.left+window.scrollX,w=o.bottom+window.scrollY;const I=10;b+i.width>window.innerWidth&&(b=window.innerWidth-i.width-I),w+i.height>window.innerHeight&&(w=o.top+window.scrollY-i.height-I),this.data.position={x:b,y:w}}handleSelect(t){this.state.selectedItem=t,this.state.open=!1,typeof this.onSelect=="function"&&this.onSelect(t)}render(){return s({class:"relative"},[Lt({label:this.label,icon:this.icon,toggleDropdown:this.toggleDropdown.bind(this)}),Et({onSelect:this.handleSelect.bind(this)})])}}const Rt=()=>c({title:"Dropdown Menus",description:"Dropdown menus are used to display a list of options when a user clicks on a button or input field."},[n({title:"Usage",description:"To use the DropdownMenu component, import it from the components library and use it in your application.",preview:[new Nt({icon:r.ellipsis.vertical,groups:[[{icon:r.user.default,label:"Profile",shortcut:"⌘P",value:"profile"},{icon:r.creditCard,label:"Billing",shortcut:"⌘B",value:"billing"},{icon:r.cog,label:"Settings",shortcut:"⌘S",value:"settings"},{icon:r.computerDesktop,label:"Keyboard shortcuts",shortcut:"⌘K",value:"shortcuts"}],[{icon:r.user.multiple,label:"Team",value:"team"},{icon:r.user.plus,label:"Invite users",value:"invite"},{icon:r.plus,label:"New Team",shortcut:"⌘T",value:"new_team"}],[{icon:r.github,label:"GitHub",value:"github"},{icon:r.helpCircle,label:"Support",value:"support"},{icon:r.api,label:"API",value:"api"}]],onSelect:e=>{console.log("Selected item:",e)}})],code:`import { Icons } from "@components/icons/icons.js";
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
})`})]),zt=g({state(){return{value:this.value??0,min:this.min??0,max:this.max??100,filledPercentage:this.getFillPercentage(this.value)}},getFillPercentage(e){return(e-this.min)/(this.max-this.min)*100},render(){return s({class:"relative w-full h-4 flex items-center"},[s({class:"absolute h-2 w-full rounded-full bg-muted"}),s({class:"absolute h-2 bg-primary rounded-full",style:"width: [[filledPercentage]]%"}),s({class:"absolute block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transform -translate-x-1/2",style:"left: [[filledPercentage]]%"}),se({type:"range",min:"[[min]]",max:"[[max]]",value:"[[value]]",class:"absolute w-full h-full opacity-0 cursor-pointer",bind:this.bind,input:e=>{const t=Number(e.target.value);this.state.value=t,this.state.filledPercentage=this.getFillPercentage(t),typeof this.change=="function"&&this.change(t)}})])}}),Ht=p(e=>({tag:"select",...e,class:`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${e.class||""}`,onCreated(t){e.options&&Te.setupSelectOptions(t,e.options)}})),Ot=(e,t)=>!t.contains(e),Ft=g({state(){return{selectedDate:this.selectedDate??null,open:!1}},render(){const e=(o,{state:a})=>a.toggle("open"),t=o=>{this.state.selectedDate=o,this.state.open=!1};return s({class:"relative w-full max-w-[320px]"},[C({class:"flex items-center gap-2 w-full justify-between border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md h-10 px-4 py-2",click:e},[m({onState:["selectedDate",o=>o?$.format("standard",o):"Pick a date"]}),x({html:r.calendar.days})]),s({class:"absolute mt-1 z-10 bg-background rounded-md shadow-lg",addEvent:["click",document,(o,{state:a,panel:i})=>{Ot(o.target,i)&&(a.open=!1)}],onState:["open",o=>o?new Z({selectedDate:this.state.selectedDate,selectedCallBack:t}):null]})])}}),Ut=g({state(){return{active:{state:this.active??!1,callBack:e=>this.input.checked=e}}},render(){return C({class:"inline-flex h-6 w-11 items-center rounded-full bg-muted transition-colors focus:outline-none",onState:["active",{"bg-primary":!0,"bg-muted":!1}],click:(t,{state:o})=>o.toggle("active")},[se({cache:"input",class:"hidden",type:"checkbox",checked:"[[active]]",bind:this.bind,change:()=>console.log("changed")}),m({class:"absolute h-5 w-5 bg-background rounded-full shadow-md transform transition-transform",onState:["active",{"translate-x-[22px]":!0,"translate-x-[2px]":!1}]})])}}),Gt=[{value:"next.js",label:"Next.js"},{value:"sveltekit",label:"SvelteKit"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}],Wt=()=>c({title:"Inputs",description:"Inputs are essential for gathering user data in forms."},[n({title:"Usage",description:"Import the input atom and use it in your components. The input can be of various types: text, password, email, etc.",preview:[W({type:"text",placeholder:"Enter your text here...",change:e=>console.log(e.target.value)})],code:`import { Button } from '@components/atoms/form/input.js';

Input({
    type: 'text',
    placeholder: 'Enter your text here...',
    change: (e) => console.log(e.target.value)
})`}),n({title:"File Input",description:"This is a file input.",preview:[Ce({multiple:!0,change:e=>console.log(e.target.files)})],code:`import { EmailInput, FileInput, Input, TelInput, Textarea } from "@components/atoms/form/input.js";

FileInput({
    multiple: true,
    change: (e) => console.log(e.target.files)
})`}),n({title:"Radio Input",description:"This is a radio input.",preview:[s({class:"grid gap-2"},[L({name:"theme",label:"System",value:"system"}),L({name:"theme",label:"Light",value:"light"}),L({name:"theme",label:"Dark",value:"dark"})])],code:`import { Radio } from "@components/atoms/form/input.js";
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
])`}),n({title:"Text Input",description:"This is a text input.",preview:[W({type:"text",placeholder:"Enter your text here..."})],code:`
import { EmailInput, FileInput, Input, TelInput, Textarea } from "@components/atoms/form/input.js";

Input({
    type: 'text',
    placeholder: 'Enter your text here...'
})`}),n({title:"Tel Input",description:"This is a phone input.",preview:[Ie({})],code:`
import { EmailInput, FileInput, Input, TelInput, Textarea } from "@components/atoms/form/input.js";

TelInput({
})`}),n({title:"Email Input",description:"This is a email input.",preview:[Be({})],code:`
import { EmailInput, FileInput, Input, TelInput, Textarea } from "@components/atoms/form/input.js";

EmailInput({

})`}),n({title:"Checkbox",description:"This is a checkbox input.",preview:[new O({label:"Check me",check:e=>console.log(e)})],code:`
import { Checkbox } from '@components/atoms/form/checkbox.js';

new Checkbox({
    label: 'Check me',
    check: (checked) => console.log(checked)
})`}),n({title:"Select",description:"This is a select input.",preview:[Ht({options:Gt,change:e=>console.log(e.target.value)})],code:`
import { EmailInput, FileInput, Input, TelInput, Textarea } from "@components/atoms/form/input.js";

Input({
    type: 'text',
    placeholder: 'Enter your text here...'
})`}),n({title:"Textarea",description:"This is a textarea input.",preview:[Se({placeholder:"Enter your text here..."})],code:`
import { EmailInput, FileInput, Input, TelInput, Textarea } from "@components/atoms/form/input.js";

Textarea({
    placeholder: 'Enter your text here...'
})`}),n({title:"Date Picker",description:"This is a date picker input.",preview:[new Ft({selectedDate:"2022-01-01"})],code:`
import DatePicker from "@components/molecules/date-time/date-picker.js";

new DatePicker()`}),n({title:"Range Slider",description:"This is a range slider input.",preview:[new zt({min:0,max:100,value:50,change:e=>console.log(e)})],code:`
import { RangeSlider } from '@components/atoms/form/range-slider.js';

new RangeSlider({
    min: 0,
    max: 100,
    value: 50,
    change: (value) => console.log(value)
})`}),n({title:"Toggle Switch",description:"This is a toggle switch input.",preview:[new Ut({active:!0,change:e=>console.log(e)})],code:`
import { RangeSlider } from '@components/atoms/form/range-slider.js';

new RangeSlider({
    min: 0,
    max: 100,
    value: 50,
    change: (value) => console.log(value)
})`})]),Kt=[{name:"Leslie Alexander",email:"leslie.alexander@example.com",image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"Co-Founder / CEO",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Michael Foster",email:"michael.foster@example.com",image:"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"Co-Founder / CTO",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Dries Vincent",email:"dries.vincent@example.com",image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"Business Relations",status:"online"}],_t=()=>c({title:"Lists",description:"Lists are used to display a collection of items in a structured format. Each item can be customized to show different information."},[n({title:"Usage",description:"To use the List component, import it from the components library and use it in your application.",preview:[je({users:Kt})],code:`import { UserListItem } from "@components/organisms/lists/user-list.js";
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
});`}),E({class:"text-lg font-bold"},"Description"),u({class:"text-muted-foreground"},"The List component can be used to display a list of items in a structured format. Each item can be customized to show different information. The List component supports appending, prepending, mingling, and deleting or items. "),E({class:"text-lg font-bold"},"Performance"),u({class:"text-muted-foreground"},"The list will only update or re-render the items that have changed, improving performance. It uses a key to know when to update an item.")]),Vt=({title:e})=>y({class:"modal-header flex items-center"},[d({variant:"icon",icon:r.arrows.left,class:"mr-2 p-0 bg-transparent flex sm:hidden",click:(t,o)=>o.close()}),H({class:"text-lg font-semibold m-0"},e)]),Yt=p((e,t)=>te({class:`modal m-auto fixed z-20 grid w-full gap-4 border bg-background p-6 shadow-lg ${e.class}`,click:e.click},[s({class:"modal-content flex flex-auto flex-col"},[Vt(e),s({class:"modal-body flex flex-auto"},t),oe({class:"modal-footer flex justify-between"},e.buttons)])]));class qt extends F{render(){const t=i=>{i.target===this.panel&&this.close()},o=this.getMainClass(),a=this.title||"Are you abosolutely sure?";return Yt({class:o,click:t,title:a,buttons:this.getButtons(),aria:{expanded:["open"]}},this.children)}getButtons(){return[d({variant:"outline",click:()=>this.close()},"Cancel"),d({variant:"primary",click:()=>this.confirm()},"Save")]}getSizeClass(){switch(this.size){case"sm":return"sm max-w-[646px]";case"lg":return"lg max-w-[900px]";case"xl":return"xl max-w-[1400px]";default:return"medium max-w-[760px]"}}getTypeClass(){switch(this.type){case"right":return"right right-0";case"left":return"left left-0";default:return""}}getMainClass(){return this.getSizeClass()+" "+this.getTypeClass()}}const k=[{label:"Large",buttonStyle:"primary",size:"lg"},{label:"Small",buttonStyle:"secondary",size:"sm"},{label:"Medium",buttonStyle:"destructive",size:"md"},{label:"XL",buttonStyle:"primary",size:"xl"},{label:"Right",buttonStyle:"ghost",type:"right"},{label:"Left",buttonStyle:"link",type:"left"}],T=({label:e,buttonStyle:t,size:o,type:a})=>d({text:e,class:`m-1 ${t}`,click:()=>new qt({title:"Are you absolutely sure?",size:o,type:a}).open()}),Jt=()=>c({title:"Modals",description:"Displays a modal or a component that looks like a modal."},[n({title:"Extra Large Modal",description:"This is an extra large modal.",preview:[T(k[3])],code:`
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
});`}),n({title:"Large Modal",description:"This is a large modal.",preview:[T(k[0])],code:`
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
});`}),n({title:"Small Modal",preview:[T(k[1])],code:`
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
});`}),n({title:"Medium Modal",preview:[T(k[2])],code:`
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
});`}),n({title:"Right Modal",preview:[T(k[4])],code:`
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
});`})]),Qt=()=>c({title:"Navigations",description:"Navigations are components that help users move around the website or application."},[n({title:"Inline Navigation",description:"The inline navigation component is a simple navigation component that can be used in a sidebar or app shell.",preview:[s({class:"flex flex-auto flex-col w-full border rounded-md max-w-[300px]"},[new De({options:[{label:"Home",href:"/",icon:r.home},{label:"About",href:"/about"},{label:"Contact",href:"/contact"},{label:"Services",options:[{label:"Web Development",href:"/web-development"}]},{group:"Frameworks",options:[{label:"Next.js",href:"/next"},{label:"SvelteKit",href:"/sveltekit"},{label:"Nuxt.js",href:"/nuxt"},{label:"Remix",href:"/remix"},{label:"Astro",href:"/astro"}]}]})])],code:`import { Button } from '@components/organisms/navigation/inline-navigation.js';
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
})`})]),Xt=()=>c({title:"Notifications",description:"Displays a notification message to the user."},[n({title:"In App Notifications",description:"Notifications can be displayed in the app to inform users about important events or updates. They are a global notification container that can be called from anywhere in the app.",preview:[new $e({title:"Notification Title",description:"This is a notification.",icon:r.warning,duration:"infinite"})],code:`app.notify({
    title: 'Notification Title',
    description: 'This is a notification.',
    icon: Icons.warning,
    type: 'warning', // 'success', 'destructive', 'info', 'warning'
    duration: 5000 // in milliseconds, leave it blank for 4 seconds, infinite is also a value to prevent it from going away
})`}),u({class:"text-muted-foreground"},"Notifications will stack if a few are called at the same time. The notification will be until the duration has been met. If a notificaiton duration is set to 'infinite', it must be removed by the user.  "),n({title:"Usage",description:"Call 'notify' the gloabl notification container to display notifications.",preview:[d({click:()=>{app.notify({title:"Notification Title",description:"This is a notification.",icon:r.warning,type:"warning"})}},"Show")],code:`app.notify({
    title: 'Notification Title',
    description: 'This is a notification.',
    icon: Icons.warning,
    type: 'warning', // 'success', 'destructive', 'info', 'warning'
    duration: 5000 // in milliseconds, leave it blank for 4 seconds, infinite is also a value to prevent it from going away
})`})]),Zt=()=>s({class:"absolute h-full rounded-full bg-primary transition-all duration-300",style:"width: [[progress]]%;"}),eo=g({render(){return s({class:"relative w-full h-4 rounded-full bg-muted"},[Zt()])},state(){return{progress:this.progress??0}},set(e){e<0&&(e=0),e>100&&(e=100),this.state.progress=e}}),to=()=>c({title:"Progress Bars",description:"Progress bars are a great way to show the progress of a task or process."},[n({title:"Usage",description:"Import the progress bar atom and use it in your components. The progress bar can be used to show the progress of a task or process.",preview:[new eo({cache:"progress",progress:20})],code:`import { ProgressBar } from "@components/atoms/progress-bar.js";

new ProgressBar({ cache: 'progress', progress: 20 })`})]),v=({className:e,shape:t="rectangle",width:o="w-full",height:a="h-4"})=>s({class:`bg-muted animate-pulse ${o} ${a} ${t==="circle"?"rounded-full":"rounded-md"} ${e||""}`}),oo=()=>c({title:"Skeletons",description:"Skeletons are components that are used to show a placeholder for content that is loading."},[n({title:"Usage",description:"The skeleton component is used to show a placeholder for content that is loading.",preview:[s({class:"flex flex-auto space-x-4 w-full max-w-64"},[v({shape:"circle",width:"w-10",height:"h-10"}),s({class:"flex flex-auto flex-col space-y-2"},[v({width:"w-3/4",height:"h-4"}),v({width:"w-1/2",height:"h-4"})])])],code:`import { Skeleton } from "@components/atoms/skeleton.js";
import { Div } from '@base-framework/atoms';

Div({ class: 'flex flex-auto space-x-4 w-full max-w-64' }, [
    Skeleton({ shape: 'circle', width: 'w-10', height: 'h-10' }), // Circle skeleton for avatar
    Div({ class: 'flex flex-auto flex-col space-y-2' }, [
        Skeleton({ width: 'w-3/4', height: 'h-4' }), // Long rectangle for main text
        Skeleton({ width: 'w-1/2', height: 'h-4' })  // Shorter rectangle for subtext
    ])
])`}),n({title:"Skeleton Post",description:"This is a skeleton post.",preview:[s({class:"space-y-4 flex flex-auto flex-col w-full max-w-64"},[v({width:"w-full",height:"h-32",shape:"rectangle"}),s({class:"space-y-2"},[v({width:"w-3/4",height:"h-4"}),v({width:"w-1/2",height:"h-4"})])])],code:`import { Skeleton } from "@components/atoms/skeleton.js";
import { Div } from '@base-framework/atoms';

Div({ class: 'space-y-4 flex flex-auto flex-col space-x-4 w-full max-w-64' }, [
    // Large rectangle for image or main content
    Skeleton({ width: 'w-full', height: 'h-32', shape: 'rectangle' }),

    // Text line placeholders
    Div({ class: 'space-y-2' }, [
        Skeleton({ width: 'w-3/4', height: 'h-4' }), // Longer text line
        Skeleton({ width: 'w-1/2', height: 'h-4' })  // Shorter text line
    ])
])`})]),V=p((e,t)=>s({class:"py-4"},t)),so=()=>c({title:"Tabs",description:"Displays a tab or a component that looks like a tab."},[n({title:"Button Tab",description:"This is a button tab. The buttons to not route.",preview:[new ae({class:"mt-4 max-w-[400px]",options:[{label:"Preview",value:"preview",layout:V([])},{label:"Code",value:"code",layout:V([])}]})],code:`
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
);`}),n({title:"Link Tab",description:"This is a link tab. The buttons route to a different page.",preview:[new Ae({class:"max-w-[400px]",options:[{label:"Example 1",href:"docs/components/tabs/example-1",component:new j({class:"p-8"},"This is an example 1 tab panel.")},{label:"Example 2",href:"docs/components/tabs/example-2",component:new j({class:"p-8"},"This is an example 2 tab panel.")},{label:"Example 3",href:"docs/components/tabs/example-3",component:new j({class:"p-8"},"This is an example 3 tab panel.")}]})],code:`
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
);`})]),Y={top:"bottom-full left-1/2 transform -translate-x-1/2 mb-2","top-right":"bottom-full left-full transform -translate-x-1 mb-2","top-left":"bottom-full right-full transform translate-x-1 mb-2",bottom:"top-full left-1/2 transform -translate-x-1/2 mt-2","bottom-right":"top-full left-full transform -translate-x-1 mt-2","bottom-left":"top-full right-full transform translate-x-1 mt-2",left:"top-1/2 right-full transform -translate-y-1/2 mr-2",right:"top-1/2 left-full transform -translate-y-1/2 ml-2"},no=e=>Y[e]||Y.top,q=p(({position:e="top",content:t},o)=>{const a=no(e);return s({class:"relative group inline-block"},[o,m({class:`
                absolute z-20 px-2 py-1 border text-sm bg-background rounded shadow-md opacity-0 whitespace-nowrap
                group-hover:opacity-100 transition-opacity duration-200 ${a} pointer-events-none
            `},t)])}),ao=()=>c({title:"Tooltips",description:"This is a tooltip."},[n({title:"Usage",description:"Import the card atom and use it in your components.",preview:[s({class:"flex gap-2 flex-wrap"},[q({content:"This is a tooltip."},[d("Hover me")])])],code:`import { Button } from "@components/atoms/buttons/buttons.js";
import { Tooltip } from "@components/atoms/tooltip.js";

Tooltip({ content: 'This is a tooltip.' }, [
    Button('Hover me')
])`}),n({title:"Bottom Tooltip",description:"This will show the tooltip at the bottom of the target element.",preview:[s({class:"flex gap-2 flex-wrap"},[q({content:"This is a tooltip.",position:"bottom"},[d("Hover me")])])],code:`import { Button } from "@components/atoms/buttons/buttons.js";
import { Tooltip } from "@components/atoms/tooltip.js";

Tooltip({ content: 'This is a tooltip.', position: 'bottom' }, [
    Button('Hover me')
])`}),u({class:"text-muted-foreground text-sm mt-4"},"The tooltip position can be set to: top, top-right, top-left, bottom, bottom-right, bottom-left, left, right.")]),re=p((e,t)=>{var o;return x({...e,html:(o=t[0])==null?void 0:o.textContent})}),J=(e,t,o)=>(o="Icons"+(o?"."+o:""),s({class:"flex flex-auto flex-col items-center gap-2 max-w-[150px] h-[8.5rem] cursor-pointer"},[s({class:"flex flex-auto w-full h-full justify-center items-center flex-wrap rounded-lg border bg-card text-base shadow-sm hover:bg-accent hover:text-accent-foreground",click:()=>{navigator.clipboard.writeText(`${o}.${t}`)}},[re(e)]),s({class:"text-muted-foreground"},t)])),ie=(e,t,o)=>{const a=typeof e=="object";a&&t.push(u({class:"text-muted-foreground"},"path: "+o+".{icon}"));const i=[];if(t.push(s({class:"flex flex-auto flex-wrap gap-2 my-8"},i)),a===!1)i.push(J(e,o));else for(var b in e){if(e.hasOwnProperty(b)===!1)continue;const w=e[b];if(typeof w!="object"){i.push(J(w,b,o));continue}const I=`${o}.${b}`;ie(w,t,I)}},ro=e=>{if(!e||typeof e!="object")return;const t=[];for(let[o,a]of Object.entries(e)){if(o==="parse")continue;t.push(ne({id:o.toLowerCase(),class:"text-2xl font-bold"},Pe.titleCase(o))),ie(a,t,o)}return t},io=()=>c({title:"Icons",description:"The icons are from the Hericon library. They are SVG icons that can be used in your project. This icon set uses the outline style."},[z({href:"https://heroicons.com/",target:"_blank",class:"bttn link"},"link: Hericons"),n({title:"Icons",description:"This is an icon.",preview:[x({html:r.home})],code:`
import { Icons } from '@components/icons/icons.js';
import { I } from '@base-framework/atoms';

export const HomeIcon = () => (
    I({ html: Icons.home} )
);`}),s({class:"my-20"},[D({class:"text-2xl font-bold"},"Default Icons"),u({class:"text-muted-foreground"},'A few of the icons have been saved to the "Icons" object. You can use these icons in your project. Click to copy the Icon path. Here is a list of the icons that are available:')]),n({title:"Icon Atom",description:"An Icon is a helper atom that makes it easier to use icons in your project. ",preview:[re(r.home)],code:`
import { Icon } from '@components/atoms/icon.js';

Icon(Icons.home);`}),s({class:"my-20"},[D({class:"text-2xl font-bold"},"Default Icons"),u({class:"text-muted-foreground"},'A few of the icons have been saved to the "Icons" object. You can use these icons in your project. Click to copy the Icon path. Here is a list of the icons that are available:')]),ro(r)]),lo=()=>c({title:"Introduction",description:"This app shell was created to showcase Base framework and its components and atoms. It is a simple app shell that can be used as a starting point for your project. It is built with Tailwind CSS and uses Shadcn as the inspiration for the theme and many of it's components. "}),co=e=>s({class:"flex flex-auto flex-col items-center gap-2 max-w-[150px] h-[8.5rem] cursor-pointer"},[s({class:`flex flex-auto w-full h-full min-h-[136px] justify-center items-center flex-wrap rounded-lg border text-base shadow-sm ${e.class}`,click:()=>{navigator.clipboard.writeText(`${e.class}`)}}),s({class:"text-sm text-muted-foreground"},e.var)]),h=(e,t)=>P({class:"flex flex-auto flex-col gap-2"},[u({class:"text-base text-muted-foreground"},e),s({class:"flex flex-auto flex-wrap gap-2 my-2",map:[t,co]})]),uo=e=>s({class:"flex flex-auto flex-col gap-12"},[ne({class:"text-2xl font-bold"},"Color Guide"),h("Default background color of <body />...etc",[{var:"--backround",class:"bg-backround"},{var:"--foreground",class:"bg-foreground"}]),h("Muted backgrounds such as <TabsList />, <Skeleton /> and <Switch />",[{var:"--muted",class:"bg-muted"},{var:"--muted-foreground",class:"bg-muted-forground"}]),h("Background color for <Card />",[{var:"--card",class:"bg-card"},{var:"--card-foreground",class:"bg-card-foreground"}]),h("Background color for popovers such as <DropdownMenu />, <HoverCard />, <Popover />",[{var:"--popover",class:"bg-popover"},{var:"--popover-foreground",class:"bg-popover-foreground"}]),h("Default border color",[{var:"--border",class:"bg-border"}]),h("Border color for inputs such as <Input />, <Select />, <Textarea />",[{var:"--input",class:"bg-input"}]),h("Primary colors for <Button />",[{var:"--primary",class:"bg-primary"},{var:"--primary-foreground",class:"bg-primary-foreground"}]),h("Secondary colors for <Button />",[{var:"--secondary",class:"bg-secondary"},{var:"--secondary-foreground",class:"bg-secondary-foreground"}]),h("Used for accents such as hover effects on <DropdownMenuItem>, <SelectItem>...etc",[{var:"--accent",class:"bg-accent"},{var:"--accent-foreground",class:"bg-accent-foreground"}]),h('Used for destructive actions such as <Button variant="destructive">',[{var:"--destructive",class:"bg-destructive"},{var:"--destructive-foreground",class:"bg-destructive-foreground"}]),h('Used for warning actions such as <Button variant="warning">',[{var:"--warning",class:"bg-warning"},{var:"--warning-foreground",class:"bg-warning-foreground"}]),h("Used for focus ring",[{var:"--ring",class:"bg-ring"}]),h("Border radius for card, input and buttons",[{var:"--radius",class:"bg-radius"}])]),mo=()=>c({title:"Theme",description:"The theme is using Tailwind CSS and is based on Shadcn UI. The theme is customizable and can be extended. It comes with light and dark theme support."},[z({href:"https://ui.shadcn.com/docs/theming",target:"_blank",class:"bttn link"},"link: Shadcn"),s({class:"my-20"},[D({class:"text-2xl font-bold"},"Default Styles"),u({class:"text-muted-foreground"},"The default styles are defined in the Tailwind CSS configuration file and in the base CSS file. Here's the list of variables available for customization:")]),uo(),s({class:"flex flex-auto flex-col gap-2 mt-20"},[E({class:"text-2xl font-bold"},"Text Sizes"),u({class:"text-muted-foreground text-3xl"},"Text-3xl A test sentence."),u({class:"text-muted-foreground text-2xl"},"Text-2xl A test sentence."),u({class:"text-muted-foreground text-xl"},"Text-xl A test sentence."),u({class:"text-muted-foreground text-lg"},"Text-lg A test sentence."),u({class:"text-muted-foreground text-base"},"Text-base A test sentence."),u({class:"text-muted-foreground text-sm"},"Text-sm A test sentence."),u({class:"text-muted-foreground text-xs"},"Text-xs A test sentence.")])]),l=(e,t,o)=>({uri:e,title:t,component:o()}),po=e=>[l(`${e}`,"Introduction",lo),l(`${e}/theme`,"Theme",mo),l(`${e}/icons`,"Icons",io),l(`${e}/components/buttons*`,"Buttons",tt),l(`${e}/components/badges*`,"Badges",Ye),l(`${e}/components/tabs*`,"Tabs",so),l(`${e}/components/modals*`,"Modals",Jt),l(`${e}/components/notifications*`,"Notifications",Xt),l(`${e}/components/dialogs*`,"Modals",Bt),l(`${e}/components/cards*`,"Cards",at),l(`${e}/components/calendars*`,"Calendars",st),l(`${e}/components/avatars*`,"Avatars",Ke),l(`${e}/components/inputs*`,"Inputs",Wt),l(`${e}/components/alerts*`,"Alerts",We),l(`${e}/components/comboboxes*`,"Comboboxes",ut),l(`${e}/components/lists*`,"Lists",_t),l(`${e}/components/data-tables*`,"Data Tables",wt),l(`${e}/components/breadcrumbs*`,"Breadcrumbs",et),l(`${e}/components/navigations*`,"Navigations",Qt),l(`${e}/components/progress-bars*`,"Progress Bars",to),l(`${e}/components/skeletons*`,"Skeletons",oo),l(`${e}/components/tooltips*`,"Tooltips",ao),l(`${e}/components/dropdown-menus*`,"Dropdown Menus",Rt)],fo=e=>[{href:`${e}`,label:"Introduction",exact:!0},{href:`${e}/theme`,label:"Theme",exact:!0},{href:`${e}/icons`,label:"Icons"},{group:"Components",options:[{label:"Buttons",href:`${e}/components/buttons`},{label:"Badges",href:`${e}/components/badges`},{label:"Tabs",href:`${e}/components/tabs`},{label:"Modals",href:`${e}/components/modals`},{label:"Notifications",href:`${e}/components/notifications`},{label:"Dialogs",href:`${e}/components/dialogs`},{label:"Cards",href:`${e}/components/cards`},{label:"Calendars",href:`${e}/components/calendars`},{label:"Avatars",href:`${e}/components/avatars`},{label:"Inputs",href:`${e}/components/inputs`},{label:"Alerts",href:`${e}/components/alerts`},{label:"Comboboxes",href:`${e}/components/comboboxes`},{label:"Lists",href:`${e}/components/lists`},{label:"Data Tables",href:`${e}/components/data-tables`},{label:"Breadcrumbs",href:`${e}/components/breadcrumbs`},{label:"Navigations",href:`${e}/components/navigations`},{label:"Progress Bars",href:`${e}/components/progress-bars`},{label:"Skeletons",href:`${e}/components/skeletons`},{label:"Tooltips",href:`${e}/components/tooltips`},{label:"Dropdown Menus",href:`${e}/components/dropdown-menus`}]}],ho=()=>new le({backHref:"aside/"},[new j([s([y([X("Overlay")]),s({class:"contained"},[Me()])])])]),bo=e=>[{uri:`${e}/overlay-test`,component:ho()}],S="docs",wo=()=>new ce({title:"Documentation",basePath:S,routes:bo(S),switch:po(S),links:fo(S)});export{wo as DocumentationPage,wo as default};
