import{O as Y,A as Z}from"./overlay-FGoov2rm.js";import{w as E,m as n,R as C,a as P,D as U,H as z,b as N,X as d,p as _,c as K,U as g,I as j,S as u,B as X,d as ee,C as O,A as te,e as f,f as oe,y as b,g as H,h as W,T as I,L as k,i as r,j as S,k as se,q as T,l as ne,n as G,V as R,v as ae,o as A,r as re,E as ie,s as le,t as ce,u as de,N as pe,x as me,P as w,M as V,z as ue,G as fe}from"./index-DNH1rCxu.js";const be=e=>z({class:"inline-flex flex-auto items-center justify-center whitespace-nowrap rounded-sm text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",dataSet:["selected",["state",e.value,"active"]]},[N({class:"flex flex-auto justify-center items-center px-3 py-1.5",onSet:["selected",{selected:e.value}],click:t=>e.callBack(e.value)},e.label)]),ge=(e,t)=>(e.callBack=t,be(e)),xe=e=>P({class:`tab items-center justify-center rounded-md bg-muted p-1 text-muted-foreground ${e.class}`},[U({class:"flex flex-auto flex-row",map:[e.options,t=>ge(t,e.callBack)]})]);class q extends E{render(){const t=this.select.bind(this);return n({class:""},[xe({class:this.class,options:this.options,callBack:t}),C({class:"tab-content",onState:["selected",this.updateContent.bind(this)]})])}afterSetup(){const t=this.options[0].value;this.select(t)}update(){const t=this.state.get("selected");this.select(null),this.select(t)}select(t){this.state.selected=t}updateContent(t){const o=this.options;if(!o||o.length<1)return;const a=o[0];for(const m of o)if(m.value===t)return m.layout;return a.layout}setupStates(){const t=this.callBack,o=typeof t;return{selected:{state:null,callBack(a){o==="function"&&t(a)}}}}}const he=d((e,t)=>_({class:"flex p-4 min-h-[350px] max-h-[650px] overflow-x-auto rounded-lg border bg-muted whitespace-break-spaces cursor-pointer"},[K({class:"font-mono text-sm",click:()=>navigator.clipboard.writeText(t[0].textContent)},t)])),ye=d((e,t)=>n({class:"flex p-4 min-h-[350px] max-h-[650px] overflow-x-auto rounded-lg border bg-card"},[n({class:"preview flex w-full justify-center items-center"},t)])),$=d((e,t)=>n({class:"py-4"},t)),ve=e=>new q({class:"mt-4 max-w-[400px]",options:[{label:"Preview",value:"preview",layout:$([ye(e.preview)])},{label:"Code",value:"code",layout:$([he(e.code)])}]}),we=d(({title:e,description:t})=>g({class:"flex flex-col"},[j({class:"scroll-m-20 text-2xl font-bold tracking-tight"},e),t&&u({class:"text-base text-muted-foreground py-2 max-w-[700px]"},t)])),s=d((e,t)=>C({class:"py-4"},[we({title:e.title,description:e.description}),ve({preview:e.preview,code:e.code})]));class ke extends X{render(){return ee([n({class:"contained px-4 flex flex-auto flex-col"},this.children)])}}const Ce=d(({title:e,description:t})=>g({class:"flex flex-col"},[O({class:"scroll-m-20 text-3xl font-bold tracking-tight"},e),u({class:"text-base text-muted-foreground py-2 max-w-[700px]"},t)])),Te=d((e,t)=>n({class:"contained py-8"},[Ce(e),C({class:"pb-12 pt-8"},t)])),l=d((e,t)=>new ke([Te(e,t)])),Be=()=>l({title:"Alerts",description:"Alerts are used to provide feedback to the user about the outcome of an action or to inform them of important information."},[s({title:"Usage",description:"To use the Alert component, import it from the components library and use it in your application.",preview:[te({title:"Heads up!",description:"You can add components to your app using the cli.",icon:f.information})],code:`import { Alert } from "@components/molecules/alert.js";
import { Icons } from "@components/icons/icons.js";

Alert({
    title: 'Heads up!',
    description: 'You can add components to your app using the cli.',
    icon: Icons.information
})`})]),je=()=>l({title:"Cards",description:"Cards are a great way to display content in a concise and organized manner."},[s({title:"Usage",description:"Import the card atom and use it in your components. The avatar can be set to multiple sizes: xs, sm, lg, xl, 2xl, 3xl.",preview:[oe({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN"})],code:`import { Button } from '@components/atoms/cards/card.js';

Avatar({
    src: 'https://github.com/shadcn.png',
    alt: '@shadcn',
    fallbackText: 'CN',
    size: 'md' // You can change the size to xs, sm, lg, xl, 2xl, 3xl
})`})]),M={gray:{backgroundColor:"bg-gray-50",textColor:"text-gray-600",ringColor:"ring-gray-500/10"},red:{backgroundColor:"bg-red-50",textColor:"text-red-700",ringColor:"ring-red-600/10"},yellow:{backgroundColor:"bg-yellow-50",textColor:"text-yellow-800",ringColor:"ring-yellow-600/20"},green:{backgroundColor:"bg-green-50",textColor:"text-green-700",ringColor:"ring-green-600/20"},blue:{backgroundColor:"bg-blue-50",textColor:"text-blue-700",ringColor:"ring-blue-700/10"},indigo:{backgroundColor:"bg-indigo-50",textColor:"text-indigo-700",ringColor:"ring-indigo-700/10"},purple:{backgroundColor:"bg-purple-50",textColor:"text-purple-700",ringColor:"ring-purple-700/10"},pink:{backgroundColor:"bg-pink-50",textColor:"text-pink-700",ringColor:"ring-pink-700/10"},primary:{backgroundColor:"bg-primary",textColor:"text-primary-foreground",ringColor:"ring-primary/10"},secondary:{backgroundColor:"bg-secondary",textColor:"text-secondary-foreground",ringColor:"ring-secondary/10"},destructive:{backgroundColor:"bg-destructive",textColor:"text-destructive-foreground",ringColor:"ring-destructive/10"},warning:{backgroundColor:"bg-warning",textColor:"text-warning-foreground",ringColor:"ring-warning/10"},outline:{backgroundColor:"bg-background",textColor:"text-primary",ringColor:"ring-input"},ghost:{backgroundColor:"bg-background",textColor:"text-primary",ringColor:"ring-background"},link:{backgroundColor:"bg-background",textColor:"text-primary",ringColor:"ring-background"}},Ie=e=>M[e]||M.gray,Se=e=>{const{backgroundColor:t,textColor:o,ringColor:a}=Ie(e);return`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors ${t} ${o} ${a}`},c=d((e,t)=>{const o=Se(e==null?void 0:e.type);return b({...e,class:o},t)}),Ae=()=>l({title:"Badges",description:"Badges can be used to display a status or a count."},[s({title:"Badge",description:"This is a badge.",preview:[n({class:"flex gap-2 flex-wrap"},[c({type:"gray"},"Text"),c({type:"red"},"Text"),c({type:"yellow"},"Text"),c({type:"green"},"Text"),c({type:"blue"},"Text"),c({type:"indigo"},"Text"),c({type:"purple"},"Text"),c({type:"pink"},"Text"),c({type:"primary"},"Text"),c({type:"secondary"},"Text"),c({type:"destructive"},"Text"),c({type:"warning"},"Text"),c({type:"outline"},"Text"),c({type:"ghost"},"Text"),c({type:"link"},"Text")])],code:`
import { Button } from '@components/atoms/badges/badges.js';
import { Atom } from '@base-framework/base';

export const PrimaryBadge = Atom((props, children)) => (
    Badge({ ...props, type: 'gray' }, children)
);`})]),$e=(e,t)=>I({href:e,"aria-current":t==="Breadcrumb"?"page":null,class:"text-muted-foreground hover:text-foreground"},[b(t)]),Me=()=>b({class:"mx-2 text-muted-foreground","aria-hidden":!0,html:">"}),De=e=>n({class:"flex items-center"},[e.href?$e(e.href,e.label):b(e.label),e.separator&&Me()]),Le=H({setData(){return new W({items:this.items||[]})},render(){return P({"aria-label":"Breadcrumb",class:"flex items-center space-x-1 text-sm"},[n({role:"list",class:"flex items-center",for:["items",(e,t)=>De({href:e.href,label:e.label,separator:t<this.data.items.length-1})]})])}}),Ee=[{href:"/",label:"Home"},{href:"/components",label:"Components"},{label:"Breadcrumb"}],Pe=()=>l({title:"Comboboxes",description:"Comboboxes are used to allow users to select an option from a dropdown list or enter a custom value."},[s({title:"Usage",description:"To use the Combobox component, import it from the components library and use it in your application.",preview:[new Le({items:Ee})],code:`import { UserListItem } from "@components/organisms/lists/user-list.js";
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
});`}),k({class:"text-lg font-bold"},"Description"),u({class:"text-muted-foreground"},"The List component can be used to display a list of items in a structured format. Each item can be customized to show different information. The List component supports appending, prepending, mingling, and deleting or items. "),k({class:"text-lg font-bold"},"Performance"),u({class:"text-muted-foreground"},"The list will only update or re-render the items that have changed, improving performance. It uses a key to know when to update an item.")]),Ue=()=>l({title:"Button",description:"Displays a button or a component that looks like a button."},[s({title:"Usage",description:"Import the button atom and use it in your components. This platform has variants for different use cases. The variant can be set using the `variant` prop.",preview:[r({variant:"primary"},"Click Me")],code:`import { Button } from '@components/atoms/buttons/buttons.js';

Button({ ...props, variant: 'secondary' }, primary)`}),g({class:"flex flex-col py-8"},[S({class:"text-3xl font-bold tracking-tight border-b pb-2"},"Variants")]),s({title:"Primary Button",description:"This is a primary button.",preview:[r({variant:"primary"},"Click Me")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const PrimaryButton = Atom((props, children)) => (
    Button({ ...props, variant: 'primary' }, children)
);`}),s({title:"Secondary Button",preview:[r({variant:"secondary"},"Secondary")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const SecondaryButton = Atom((props, children)) => (
    Button({ ...props, variant: 'secondary' }, children)
);`}),s({title:"Destructive Button",preview:[r({variant:"destructive"},"Destructive")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const DestructiveButton = Atom((props, children)) => (
    Button({ ...props, variant: 'destructive' }, children)
);`}),s({title:"Warning Button",preview:[r({variant:"warning"},"Warning")],code:`import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const WarningButton = Atom((props, children)) => (
    Button({ ...props, variant: 'warning' }, children)
);`}),s({title:"Outline Button",preview:[r({variant:"outline"},"Outline")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const OutlineButton = Atom((props, children)) => (
    Button({ ...props, variant: 'outline' }, children)
);`}),s({title:"Ghost Button",preview:[r({variant:"ghost"},"Ghost")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const GhostButton = Atom((props, children)) => (
    Button({ ...props, variant: 'ghost' }, children)
);`}),s({title:"Link Button",preview:[r({variant:"link"},"Link")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const LinkButton = Atom((props, children)) => (
    Button({ ...props, variant: 'link' }, children)
);`}),s({title:"Icon Button",description:"Displays a button with an icon.",preview:[r({variant:"icon",icon:f.home})],code:`import { Button } from '@components/atoms/buttons/buttons.js';
import { Icons } from '@components/icons/icons.js';
import { Atom } from '@base-framework/base';

export const IconButton = Atom((props)) => (
    Button({ ...props, variant: 'icon', icon: Icons.home })
);`}),s({title:"With Icon Button",preview:[r({variant:"withIcon",icon:f.home},"With Icon")],code:`import { Button } from '@components/atoms/buttons/buttons.js';

Button({ variant: 'withIcon', icon: Icons.home }, 'With Icon')`})]),ze=()=>l({title:"Calendars",description:"This is the calendar component documentation."},[s({title:"Usage",description:"This is how you can use the calendar component.",preview:[new se],code:`@components/organisms/calendar/calendar.js';

new Calendar()`})]),Ne=d((e,t)=>n({...e,class:`rounded-lg border bg-card text-card-foreground shadow-md min-w-[120px] min-h-[80px] my-5 mx-5 p-4 ${e.class||""}`,children:t})),Oe=()=>l({title:"Cards",description:"Cards are a great way to display content in a concise and organized manner."},[s({title:"Usage",description:"Import the card atom and use it in your components.",preview:[Ne()],code:`import { Button } from '@components/atoms/cards/card.js';

Card()`})]),He=(e,t)=>z({class:"flex flex-auto items-center cursor-pointer p-2 hover:bg-secondary rounded-sm",click:()=>t(e),onState:["selectedValue",{"bg-secondary":e.value}]},[e.icon&&b({class:"mr-2 flex items-baseline"},[T({class:"flex w-4 h-4",html:e.icon})]),b(e.label)]),We=e=>n({class:"absolute border rounded-md shadow-lg mt-1 w-full z-10"},[U({class:"max-h-60 overflow-y-auto p-2",for:["items",t=>He(t,e)]})]),Ge=H({setData(){return new W({items:this.items||[]})},state:{open:!1,selectedLabel:"",selectedValue:""},render(){const e=(o,{state:a})=>a.toggle("open"),t=o=>{const a=this.state;a.selectedValue=o.value,a.selectedLabel=o.label,a.open=!1};return n({class:"relative w-[200px]"},[N({class:"inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-[200px] justify-between",click:e},[b({onState:["selectedLabel",o=>o||"Select item..."]}),T({html:f.chevron.upDown})]),n({class:"felx flex-auto flex-col",onState:["open",o=>o?We(t):null]})])}}),Re=[{value:"next.js",label:"Next.js",icon:f.home},{value:"sveltekit",label:"SvelteKit"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}],Ve=()=>l({title:"Comboboxes",description:"Comboboxes are used to allow users to select an option from a dropdown list or enter a custom value."},[s({title:"Usage",description:"To use the Combobox component, import it from the components library and use it in your application.",preview:[new Ge({items:Re})],code:`@components/molecules/combobox/combobox.js';
import { Icons } from "@components/icons/icons.js";

new Combobox({
    items: [
    { value: 'next.js', label: 'Next.js', icon: Icons.home },,
    { value: 'sveltekit', label: 'SvelteKit' },
    { value: 'nuxt.js', label: 'Nuxt.js' },
    { value: 'remix', label: 'Remix' },
    { value: 'astro', label: 'Astro' },
],
})`})]),qe=e=>ne.render(e,document.body),Fe=({title:e})=>g({class:"flex flex-auto items-center"},[S({class:"text-lg font-semibold"},e)]),Je=d((e,t)=>G({class:"flex flex-auto flex-col fixed z-30 w-full max-w-lg gap-4 border bg-background text-foreground p-6 shadow-lg duration-200 sm:rounded-lg",click:e.click,aria:{expanded:["open"]}},[n({class:"flex flex-auto flex-col space-y-2"},[Fe(e),n({class:"flex flex-auto flex-col text-sm text-muted-foreground"},t)]),R({class:"flex flex-col-reverse sm:flex-row sm:justify-end mt-6 gap-2 sm:gap-0 sm:space-x-2"},e.buttons)]));class F extends E{render(){const t=m=>{m.target===this.panel&&this.close()},o=this.getMainClass(),a=this.title||"Are you abosolutely sure?";return Je({class:o,title:a,click:t,buttons:this.getButtons()},this.description)}getButtons(){return[r({variant:"outline",click:()=>this.close()},"Cancel"),r({variant:"primary",click:()=>this.confirm()},"Save")]}setupStates(){return{open:!1}}confirm(){this.confirmed&&this.confirmed(),this.close()}getMainClass(){return""}open(){qe(this),this.panel.showModal(),this.state.open=!0}close(){this.state.open=!1,this.panel.close(),this.destroy()}}const Qe=e=>r({text:"Open",class:"m-1",click:()=>new F(e).open()}),Ye=()=>l({title:"Dialog",description:"Displays a dialog or a component that looks like a dialog."},[s({title:"Usage",description:"Import the dialog atom and use it in your components.",preview:[Qe({title:"Are you absoultely sure?",description:"This action cannot be undone. This will permanently delete your account and remove your data from our servers.",confirmed:()=>console.log("Confirmed!")})],code:`import { Button } from '@components/molecules/dialogue.js';

new Dialog({
    title: 'Are you absoultely sure?',
    description: 'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
    confirmed: () => console.log('Confirmed!')
}).open()`})]),Ze=d(e=>({tag:"select",...e,class:`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${e.class||""}`,onCreated(t){e.options&&ae.setupSelectOptions(t,e.options)}})),_e=[{value:"next.js",label:"Next.js"},{value:"sveltekit",label:"SvelteKit"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}],Ke=()=>l({title:"Inputs",description:"Inputs are essential for gathering user data in forms."},[s({title:"Usage",description:"Import the input atom and use it in your components. The input can be of various types: text, password, email, etc.",preview:[A({type:"text",placeholder:"Enter your text here...",change:e=>console.log(e.target.value)})],code:`import { Button } from '@components/atoms/form/input.js';

Input({
    type: 'text',
    placeholder: 'Enter your text here...',
    change: (e) => console.log(e.target.value)
})`}),s({title:"Text Input",description:"This is a text input.",preview:[A({type:"text",placeholder:"Enter your text here..."})],code:`
import { Button } from '@components/atoms/form/input.js';

Input({
    type: 'text',
    placeholder: 'Enter your text here...'
})`}),s({title:"Tel Input",description:"This is a phone input.",preview:[re({})],code:`
import { Button } from '@components/atoms/form/input.js';

TelInput({
})`}),s({title:"Email Input",description:"This is a email input.",preview:[ie({})],code:`
import { Button } from '@components/atoms/form/input.js';

EmailInput({

})`}),s({title:"Checkbox",description:"This is a checkbox input.",preview:[le({change:e=>console.log(e.target.checked)})],code:`
import { Button } from '@components/atoms/form/input.js';

Checkbox({
    change: (e) => console.log(e.target.checked)
})`}),s({title:"Select",description:"This is a select input.",preview:[Ze({options:_e,change:e=>console.log(e.target.value)})],code:`
import { Button } from '@components/atoms/form/input.js';

Input({
    type: 'text',
    placeholder: 'Enter your text here...'
})`}),s({title:"Textarea",description:"This is a textarea input.",preview:[ce({placeholder:"Enter your text here..."})],code:`
import { Button } from '@components/atoms/form/input.js';

Textarea({
    placeholder: 'Enter your text here...'
})`})]),Xe=[{name:"Leslie Alexander",email:"leslie.alexander@example.com",image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"Co-Founder / CEO",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Michael Foster",email:"michael.foster@example.com",image:"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"Co-Founder / CTO",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Dries Vincent",email:"dries.vincent@example.com",image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"Business Relations",status:"online"}],et=()=>l({title:"Comboboxes",description:"Comboboxes are used to allow users to select an option from a dropdown list or enter a custom value."},[s({title:"Usage",description:"To use the Combobox component, import it from the components library and use it in your application.",preview:[de({users:Xe})],code:`import { UserListItem } from "@components/organisms/lists/user-list.js";
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
});`}),k({class:"text-lg font-bold"},"Description"),u({class:"text-muted-foreground"},"The List component can be used to display a list of items in a structured format. Each item can be customized to show different information. The List component supports appending, prepending, mingling, and deleting or items. "),k({class:"text-lg font-bold"},"Performance"),u({class:"text-muted-foreground"},"The list will only update or re-render the items that have changed, improving performance. It uses a key to know when to update an item.")]),tt=({title:e})=>g({class:"modal-header flex items-center"},[r({variant:"icon",icon:f.arrows.left,class:"mr-2 p-0 bg-transparent flex sm:hidden",click:(t,o)=>o.close()}),S({class:"text-lg font-semibold m-0"},e)]),ot=d((e,t)=>G({class:`modal m-auto fixed z-20 grid w-full gap-4 border bg-background p-6 shadow-lg ${e.class}`,click:e.click},[n({class:"modal-content flex flex-auto flex-col"},[tt(e),n({class:"modal-body flex flex-auto"},t),R({class:"modal-footer flex justify-between"},e.buttons)])]));class st extends F{render(){const t=m=>{m.target===this.panel&&this.close()},o=this.getMainClass(),a=this.title||"Are you abosolutely sure?";return ot({class:o,click:t,title:a,buttons:this.getButtons(),aria:{expanded:["open"]}},this.children)}getButtons(){return[r({variant:"outline",click:()=>this.close()},"Cancel"),r({variant:"primary",click:()=>this.confirm()},"Save")]}getSizeClass(){switch(this.size){case"sm":return"sm max-w-[646px]";case"lg":return"lg max-w-[900px]";case"xl":return"xl max-w-[1400px]";default:return"medium max-w-[760px]"}}getTypeClass(){switch(this.type){case"right":return"right right-0";case"left":return"left left-0";default:return""}}getMainClass(){return this.getSizeClass()+" "+this.getTypeClass()}}const x=[{label:"Large",buttonStyle:"primary",size:"lg"},{label:"Small",buttonStyle:"secondary",size:"sm"},{label:"Medium",buttonStyle:"destructive",size:"md"},{label:"XL",buttonStyle:"primary",size:"xl"},{label:"Right",buttonStyle:"ghost",type:"right"},{label:"Left",buttonStyle:"link",type:"left"}],h=({label:e,buttonStyle:t,size:o,type:a})=>r({text:e,class:`m-1 ${t}`,click:()=>new st({title:"Are you absolutely sure?",size:o,type:a}).open()}),nt=()=>l({title:"Modals",description:"Displays a modal or a component that looks like a modal."},[s({title:"Extra Large Modal",description:"This is an extra large modal.",preview:[h(x[3])],code:`
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
});`}),s({title:"Large Modal",description:"This is a large modal.",preview:[h(x[0])],code:`
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
});`}),s({title:"Small Modal",preview:[h(x[1])],code:`
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
});`}),s({title:"Medium Modal",preview:[h(x[2])],code:`
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
});`}),s({title:"Right Modal",preview:[h(x[4])],code:`
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
});`})]),at=()=>l({title:"Notifications",description:"Displays a notification message to the user."},[s({title:"In App Notifications",description:"Notifications can be displayed in the app to inform users about important events or updates. They are a global notification container that can be called from anywhere in the app.",preview:[new pe({title:"Notification Title",description:"This is a notification.",icon:f.warning,duration:"infinite"})],code:`app.notify({
    title: 'Notification Title',
    description: 'This is a notification.',
    icon: Icons.warning,
    type: 'warning', // 'success', 'destructive', 'info', 'warning'
    duration: 5000 // in milliseconds, leave it blank for 4 seconds, infinite is also a value to prevent it from going away
})`}),u({class:"text-muted-foreground"},"Notifications will stack if a few are called at the same time. The notification will be until the duration has been met. If a notificaiton duration is set to 'infinite', it must be removed by the user.  "),s({title:"Usage",description:"Call 'notify' the gloabl notification container to display notifications.",preview:[r({click:()=>{app.notify({title:"Notification Title",description:"This is a notification.",icon:f.warning,type:"warning"})}},"Show")],code:`app.notify({
    title: 'Notification Title',
    description: 'This is a notification.',
    icon: Icons.warning,
    type: 'warning', // 'success', 'destructive', 'info', 'warning'
    duration: 5000 // in milliseconds, leave it blank for 4 seconds, infinite is also a value to prevent it from going away
})`})]),D=d((e,t)=>n({class:"py-4"},t)),rt=()=>l({title:"Tabs",description:"Displays a tab or a component that looks like a tab."},[s({title:"Button Tab",description:"This is a button tab. The buttons to not route.",preview:[new q({class:"mt-4 max-w-[400px]",options:[{label:"Preview",value:"preview",layout:D([])},{label:"Code",value:"code",layout:D([])}]})],code:`
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
);`}),s({title:"Link Tab",description:"This is a link tab. The buttons route to a different page.",preview:[new me({class:"max-w-[400px]",options:[{label:"Example 1",href:"docs/components/tabs/example-1",component:new w({class:"p-8"},"This is an example 1 tab panel.")},{label:"Example 2",href:"docs/components/tabs/example-2",component:new w({class:"p-8"},"This is an example 2 tab panel.")},{label:"Example 3",href:"docs/components/tabs/example-3",component:new w({class:"p-8"},"This is an example 3 tab panel.")}]})],code:`
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
);`})]),L=(e,t,o)=>(o="Icons"+(o?"."+o:""),n({class:"flex flex-auto flex-col items-center gap-2 max-w-[150px] h-[8.5rem] cursor-pointer"},[n({class:"flex flex-auto w-full h-full justify-center items-center flex-wrap rounded-lg border bg-card text-base shadow-sm",click:()=>{navigator.clipboard.writeText(`${o}.${t}`)}},[T({html:e})]),n({class:"text-muted-foreground"},t)])),J=(e,t,o)=>{const a=typeof e=="object";a&&t.push(u({class:"text-muted-foreground"},"path: "+o+".{icon}"));const m=[];if(t.push(n({class:"flex flex-auto flex-wrap gap-2 my-8"},m)),a===!1)m.push(L(e,o));else for(var y in e){if(e.hasOwnProperty(y)===!1)continue;const B=e[y];if(typeof B!="object"){m.push(L(B,y,o));continue}const Q=`${o}.${y}`;J(B,t,Q)}},it=e=>{if(!e||typeof e!="object")return;const t=[];for(let[o,a]of Object.entries(e)){if(o==="parse")continue;t.push(V({id:o.toLowerCase(),class:"text-2xl font-bold"},ue.titleCase(o))),J(a,t,o)}return t},lt=()=>l({title:"Icons",description:"The icons are from the Hericon library. They are SVG icons that can be used in your project. This icon set uses the outline style."},[I({href:"https://heroicons.com/",target:"_blank",class:"bttn link"},"link: Hericons"),s({title:"Icons",description:"This is an icon.",preview:[T({html:f.home})],code:`
import { Icons } from '@components/icons/icons.js';
import { I } from '@base-framework/atoms';

export const HomeIcon = () => (
    I({ html: Icons.home} )
);`}),n({class:"my-20"},[j({class:"text-2xl font-bold"},"Default Icons"),u({class:"text-muted-foreground"},'A few of the icons have been saved to the "Icons" object. You can use these icons in your project. Click to copy the Icon path. Here is a list of the icons that are available:')]),it(f)]),ct=()=>l({title:"Introduction",description:"This app shell was created to showcase Base framework and its components and atoms. It is a simple app shell that can be used as a starting point for your project. It is built with Tailwind CSS and uses Shadcn as the inspiration for the theme and many of it's components. "}),dt=e=>n({class:"flex flex-auto flex-col items-center gap-2 max-w-[150px] h-[8.5rem] cursor-pointer"},[n({class:`flex flex-auto w-full h-full min-h-[136px] justify-center items-center flex-wrap rounded-lg border text-base shadow-sm ${e.class}`,click:()=>{navigator.clipboard.writeText(`${e.class}`)}}),n({class:"text-sm text-muted-foreground"},e.var)]),p=(e,t)=>C({class:"flex flex-auto flex-col gap-2"},[u({class:"text-base text-muted-foreground"},e),n({class:"flex flex-auto flex-wrap gap-2 my-2",map:[t,dt]})]),pt=e=>n({class:"flex flex-auto flex-col gap-12"},[V({class:"text-2xl font-bold"},"Color Guide"),p("Default background color of <body />...etc",[{var:"--backround",class:"bg-backround"},{var:"--foreground",class:"bg-foreground"}]),p("Muted backgrounds such as <TabsList />, <Skeleton /> and <Switch />",[{var:"--muted",class:"bg-muted"},{var:"--muted-foreground",class:"bg-muted-forground"}]),p("Background color for <Card />",[{var:"--card",class:"bg-card"},{var:"--card-foreground",class:"bg-card-foreground"}]),p("Background color for popovers such as <DropdownMenu />, <HoverCard />, <Popover />",[{var:"--popover",class:"bg-popover"},{var:"--popover-foreground",class:"bg-popover-foreground"}]),p("Default border color",[{var:"--border",class:"bg-border"}]),p("Border color for inputs such as <Input />, <Select />, <Textarea />",[{var:"--input",class:"bg-input"}]),p("Primary colors for <Button />",[{var:"--primary",class:"bg-primary"},{var:"--primary-foreground",class:"bg-primary-foreground"}]),p("Secondary colors for <Button />",[{var:"--secondary",class:"bg-secondary"},{var:"--secondary-foreground",class:"bg-secondary-foreground"}]),p("Used for accents such as hover effects on <DropdownMenuItem>, <SelectItem>...etc",[{var:"--accent",class:"bg-accent"},{var:"--accent-foreground",class:"bg-accent-foreground"}]),p('Used for destructive actions such as <Button variant="destructive">',[{var:"--destructive",class:"bg-destructive"},{var:"--destructive-foreground",class:"bg-destructive-foreground"}]),p('Used for warning actions such as <Button variant="warning">',[{var:"--warning",class:"bg-warning"},{var:"--warning-foreground",class:"bg-warning-foreground"}]),p("Used for focus ring",[{var:"--ring",class:"bg-ring"}]),p("Border radius for card, input and buttons",[{var:"--radius",class:"bg-radius"}])]),mt=()=>l({title:"Theme",description:"The theme is using Tailwind CSS and is based on Shadcn UI. The theme is customizable and can be extended. It comes with light and dark theme support."},[I({href:"https://ui.shadcn.com/docs/theming",target:"_blank",class:"bttn link"},"link: Shadcn"),n({class:"my-20"},[j({class:"text-2xl font-bold"},"Default Styles"),u({class:"text-muted-foreground"},"The default styles are defined in the Tailwind CSS configuration file and in the base CSS file. Here's the list of variables available for customization:")]),pt()]),i=(e,t,o)=>({uri:e,title:t,component:o()}),ut=e=>[i(`${e}`,"Introduction",ct),i(`${e}/theme`,"Theme",mt),i(`${e}/icons`,"Icons",lt),i(`${e}/components/buttons*`,"Buttons",Ue),i(`${e}/components/badges*`,"Badges",Ae),i(`${e}/components/tabs*`,"Tabs",rt),i(`${e}/components/modals*`,"Modals",nt),i(`${e}/components/notifications*`,"Notifications",at),i(`${e}/components/dialogs*`,"Modals",Ye),i(`${e}/components/cards*`,"Cards",Oe),i(`${e}/components/calendars*`,"Calendars",ze),i(`${e}/components/avatars*`,"Avatars",je),i(`${e}/components/inputs*`,"Inputs",Ke),i(`${e}/components/alerts*`,"Alerts",Be),i(`${e}/components/comboboxes*`,"Comboboxes",Ve),i(`${e}/components/lists*`,"Lists",et),i(`${e}/components/breadcrumbs*`,"Breadcrumbs",Pe)],ft=e=>[{href:`${e}`,label:"Introduction",exact:!0},{href:`${e}/theme`,label:"Theme",exact:!0},{href:`${e}/icons`,label:"Icons"},{group:"Components",options:[{label:"Buttons",href:`${e}/components/buttons`},{label:"Badges",href:`${e}/components/badges`},{label:"Tabs",href:`${e}/components/tabs`},{label:"Modals",href:`${e}/components/modals`},{label:"Notifications",href:`${e}/components/notifications`},{label:"Dialogs",href:`${e}/components/dialogs`},{label:"Cards",href:`${e}/components/cards`},{label:"Calendars",href:`${e}/components/calendars`},{label:"Avatars",href:`${e}/components/avatars`},{label:"Inputs",href:`${e}/components/inputs`},{label:"Alerts",href:`${e}/components/alerts`},{label:"Comboboxes",href:`${e}/components/comboboxes`},{label:"Lists",href:`${e}/components/lists`},{label:"Breadcrumbs",href:`${e}/components/breadcrumbs`}]}],bt=()=>new Y({backHref:"aside/"},[new w([n([g([O("Overlay")]),n({class:"contained"},[fe()])])])]),gt=e=>[{uri:`${e}/overlay-test`,component:bt()}],v="docs",yt=()=>new Z({title:"Documentation",basePath:v,routes:gt(v),switch:ut(v),links:ft(v)});export{yt as DocumentationPage,yt as default};
