import{O as Q,A as _}from"./overlay-B1nZeAs9.js";import{w as E,m as s,R as C,a as z,D as O,H,b as I,X as u,p as X,c as Z,U as g,I as S,S as c,B as ee,d as te,C as U,A as oe,e as p,f as ne,y as b,g as T,h as R,T as A,i,j as $,k as W,q as h,l as se,n as G,V as F,O as ae,o as re,v as ie,u as le,r as D,s as ce,E as de,t as ue,x as me,L as j,z as pe,N as fe,J as be,P as k,M as V,K as ge,G as he}from"./index-D9ngw60I.js";const xe=e=>H({class:"inline-flex flex-auto items-center justify-center whitespace-nowrap rounded-sm text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",dataSet:["selected",["state",e.value,"active"]]},[I({class:"flex flex-auto justify-center items-center px-3 py-1.5",onSet:["selected",{selected:e.value}],click:t=>e.callBack(e.value)},e.label)]),ve=(e,t)=>(e.callBack=t,xe(e)),we=e=>z({class:`tab items-center justify-center rounded-md bg-muted p-1 text-muted-foreground ${e.class}`},[O({class:"flex flex-auto flex-row",map:[e.options,t=>ve(t,e.callBack)]})]);class q extends E{render(){const t=this.select.bind(this);return s({class:""},[we({class:this.class,options:this.options,callBack:t}),C({class:"tab-content",onState:["selected",this.updateContent.bind(this)]})])}afterSetup(){const t=this.options[0].value;this.select(t)}update(){const t=this.state.get("selected");this.select(null),this.select(t)}select(t){this.state.selected=t}updateContent(t){const o=this.options;if(!o||o.length<1)return;const a=o[0];for(const f of o)if(f.value===t)return f.layout;return a.layout}setupStates(){const t=this.callBack,o=typeof t;return{selected:{state:null,callBack(a){o==="function"&&t(a)}}}}}const ye=u((e,t)=>X({class:"flex p-4 min-h-[350px] max-h-[650px] overflow-x-auto rounded-lg border bg-muted whitespace-break-spaces cursor-pointer"},[Z({class:"font-mono text-sm",click:()=>navigator.clipboard.writeText(t[0].textContent)},t)])),ke=u((e,t)=>s({class:"flex p-4 min-h-[350px] max-h-[650px] overflow-x-auto rounded-lg border bg-card"},[s({class:"preview flex w-full justify-center items-center"},t)])),M=u((e,t)=>s({class:"py-4"},t)),Ce=e=>new q({class:"mt-4 max-w-[400px]",options:[{label:"Preview",value:"preview",layout:M([ke(e.preview)])},{label:"Code",value:"code",layout:M([ye(e.code)])}]}),Te=u(({title:e,description:t})=>g({class:"flex flex-col"},[S({class:"scroll-m-20 text-2xl font-bold tracking-tight"},e),t&&c({class:"text-base text-muted-foreground py-2 max-w-[700px]"},t)])),n=u((e,t)=>C({class:"py-4"},[Te({title:e.title,description:e.description}),Ce({preview:e.preview,code:e.code})]));class Be extends ee{render(){return te([s({class:"contained px-4 flex flex-auto flex-col"},this.children)])}}const je=u(({title:e,description:t})=>g({class:"flex flex-col"},[U({class:"scroll-m-20 text-3xl font-bold tracking-tight"},e),c({class:"text-base text-muted-foreground py-2 max-w-[700px]"},t)])),Ie=u((e,t)=>s({class:"contained py-8"},[je(e),C({class:"pb-12 pt-8"},t)])),l=u((e,t)=>new Be([Ie(e,t)])),Se=()=>l({title:"Alerts",description:"Alerts are used to provide feedback to the user about the outcome of an action or to inform them of important information."},[n({title:"Usage",description:"To use the Alert component, import it from the components library and use it in your application.",preview:[oe({title:"Heads up!",description:"You can add components to your app using the cli.",icon:p.information})],code:`import { Alert } from "@components/molecules/alert.js";
import { Icons } from "@components/icons/icons.js";

Alert({
    title: 'Heads up!',
    description: 'You can add components to your app using the cli.',
    icon: Icons.information
})`})]),Ae=()=>l({title:"Cards",description:"Cards are a great way to display content in a concise and organized manner."},[n({title:"Usage",description:"Import the card atom and use it in your components. The avatar can be set to multiple sizes: xs, sm, lg, xl, 2xl, 3xl.",preview:[ne({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN"})],code:`import { Button } from '@components/atoms/cards/card.js';

Avatar({
    src: 'https://github.com/shadcn.png',
    alt: '@shadcn',
    fallbackText: 'CN',
    size: 'md' // You can change the size to xs, sm, lg, xl, 2xl, 3xl
})`})]),N={gray:{backgroundColor:"bg-gray-50",textColor:"text-gray-600",ringColor:"ring-gray-500/10"},red:{backgroundColor:"bg-red-50",textColor:"text-red-700",ringColor:"ring-red-600/10"},yellow:{backgroundColor:"bg-yellow-50",textColor:"text-yellow-800",ringColor:"ring-yellow-600/20"},green:{backgroundColor:"bg-green-50",textColor:"text-green-700",ringColor:"ring-green-600/20"},blue:{backgroundColor:"bg-blue-50",textColor:"text-blue-700",ringColor:"ring-blue-700/10"},indigo:{backgroundColor:"bg-indigo-50",textColor:"text-indigo-700",ringColor:"ring-indigo-700/10"},purple:{backgroundColor:"bg-purple-50",textColor:"text-purple-700",ringColor:"ring-purple-700/10"},pink:{backgroundColor:"bg-pink-50",textColor:"text-pink-700",ringColor:"ring-pink-700/10"},primary:{backgroundColor:"bg-primary",textColor:"text-primary-foreground",ringColor:"ring-primary/10"},secondary:{backgroundColor:"bg-secondary",textColor:"text-secondary-foreground",ringColor:"ring-secondary/10"},destructive:{backgroundColor:"bg-destructive",textColor:"text-destructive-foreground",ringColor:"ring-destructive/10"},warning:{backgroundColor:"bg-warning",textColor:"text-warning-foreground",ringColor:"ring-warning/10"},outline:{backgroundColor:"bg-background",textColor:"text-primary",ringColor:"ring-input"},ghost:{backgroundColor:"bg-background",textColor:"text-primary",ringColor:"ring-background"},link:{backgroundColor:"bg-background",textColor:"text-primary",ringColor:"ring-background"}},$e=e=>N[e]||N.gray,De=e=>{const{backgroundColor:t,textColor:o,ringColor:a}=$e(e);return`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors ${t} ${o} ${a}`},d=u((e,t)=>{const o=De(e==null?void 0:e.type);return b({...e,class:o},t)}),Me=()=>l({title:"Badges",description:"Badges can be used to display a status or a count."},[n({title:"Badge",description:"This is a badge.",preview:[s({class:"flex gap-2 flex-wrap"},[d({type:"gray"},"Text"),d({type:"red"},"Text"),d({type:"yellow"},"Text"),d({type:"green"},"Text"),d({type:"blue"},"Text"),d({type:"indigo"},"Text"),d({type:"purple"},"Text"),d({type:"pink"},"Text"),d({type:"primary"},"Text"),d({type:"secondary"},"Text"),d({type:"destructive"},"Text"),d({type:"warning"},"Text"),d({type:"outline"},"Text"),d({type:"ghost"},"Text"),d({type:"link"},"Text")])],code:`
import { Button } from '@components/atoms/badges/badges.js';
import { Atom } from '@base-framework/base';

export const PrimaryBadge = Atom((props, children)) => (
    Badge({ ...props, type: 'gray' }, children)
);`})]),Ne=(e,t)=>A({href:e,"aria-current":t==="Breadcrumb"?"page":null,class:"text-muted-foreground hover:text-foreground"},[b(t)]),Le=()=>b({class:"mx-2 text-muted-foreground","aria-hidden":!0,html:">"}),Pe=e=>s({class:"flex items-center"},[e.href?Ne(e.href,e.label):b(e.label),e.separator&&Le()]),Ee=T({setData(){return new R({items:this.items||[]})},render(){return z({"aria-label":"Breadcrumb",class:"flex items-center space-x-1 text-sm"},[s({role:"list",class:"flex items-center",for:["items",(e,t)=>Pe({href:e.href,label:e.label,separator:t<this.data.items.length-1})]})])}}),ze=[{href:"/",label:"Home"},{href:"/components",label:"Components"},{label:"Breadcrumb"}],Oe=()=>l({title:"Breadcrumbs",description:"Breadcrumbs are a navigation aid that helps users understand their location within a website or application."},[n({title:"Usage",description:"To use the Breadcrumb component, import it and provide an array of items. Each item can have a label and an optional href.",preview:[new Ee({items:ze})],code:`import { Breadcrumb } from "@components/molecules/breadcrumb/breadcrumb.js";

new Breadcrumb({ items: [
    { href: '/', label: 'Home' },
    { href: '/components', label: 'Components' },
    { label: 'Breadcrumb' } // Last item, no href needed
] })`})]),He=()=>l({title:"Button",description:"Displays a button or a component that looks like a button."},[n({title:"Usage",description:"Import the button atom and use it in your components. This platform has variants for different use cases. The variant can be set using the `variant` prop.",preview:[i({variant:"primary"},"Click Me")],code:`import { Button } from '@components/atoms/buttons/buttons.js';

Button({ ...props, variant: 'secondary' }, primary)`}),g({class:"flex flex-col py-8"},[$({class:"text-3xl font-bold tracking-tight border-b pb-2"},"Variants")]),n({title:"Primary Button",description:"This is a primary button.",preview:[i({variant:"primary"},"Click Me")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const PrimaryButton = Atom((props, children) => (
    Button({ ...props, variant: 'primary' }, children)
);`}),n({title:"Secondary Button",preview:[i({variant:"secondary"},"Secondary")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const SecondaryButton = Atom((props, children) => (
    Button({ ...props, variant: 'secondary' }, children)
);`}),n({title:"Destructive Button",preview:[i({variant:"destructive"},"Destructive")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const DestructiveButton = Atom((props, children) => (
    Button({ ...props, variant: 'destructive' }, children)
);`}),n({title:"Warning Button",preview:[i({variant:"warning"},"Warning")],code:`import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const WarningButton = Atom((props, children) => (
    Button({ ...props, variant: 'warning' }, children)
);`}),n({title:"Outline Button",preview:[i({variant:"outline"},"Outline")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const OutlineButton = Atom((props, children) => (
    Button({ ...props, variant: 'outline' }, children)
);`}),n({title:"Ghost Button",preview:[i({variant:"ghost"},"Ghost")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const GhostButton = Atom((props, children) => (
    Button({ ...props, variant: 'ghost' }, children)
);`}),n({title:"Link Button",preview:[i({variant:"link"},"Link")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const LinkButton = Atom((props, children) => (
    Button({ ...props, variant: 'link' }, children)
);`}),n({title:"Icon Button",description:"Displays a button with an icon.",preview:[i({variant:"icon",icon:p.home})],code:`import { Button } from '@components/atoms/buttons/buttons.js';
import { Icons } from '@components/icons/icons.js';
import { Atom } from '@base-framework/base';

export const IconButton = Atom((props) => (
    Button({ ...props, variant: 'icon', icon: Icons.home })
);`}),n({title:"With Icon Button",preview:[i({variant:"withIcon",icon:p.home},"With Icon")],code:`import { Button } from '@components/atoms/buttons/buttons.js';

Button({ variant: 'withIcon', icon: Icons.home }, 'With Icon')`})]),Ue=()=>l({title:"Calendars",description:"This is the calendar component documentation."},[n({title:"Usage",description:"This is how you can use the calendar component.",preview:[new W],code:`@components/organisms/calendar/calendar.js';

new Calendar()`})]),Re=u((e,t)=>s({...e,class:`rounded-lg border bg-card text-card-foreground shadow-md min-w-[120px] min-h-[80px] my-5 mx-5 p-4 ${e.class||""}`,children:t})),We=()=>l({title:"Cards",description:"Cards are a great way to display content in a concise and organized manner."},[n({title:"Usage",description:"Import the card atom and use it in your components.",preview:[Re()],code:`import { Button } from '@components/atoms/cards/card.js';

Card()`})]),Ge=(e,t)=>H({class:"flex flex-auto items-center cursor-pointer p-2 hover:bg-secondary rounded-sm",click:()=>t(e),onState:["selectedValue",{"bg-secondary":e.value}]},[e.icon&&b({class:"mr-2 flex items-baseline"},[h({class:"flex w-4 h-4",html:e.icon})]),b(e.label)]),Fe=e=>s({class:"absolute border rounded-md shadow-lg mt-1 w-full z-10"},[O({class:"max-h-60 overflow-y-auto p-2",for:["items",t=>Ge(t,e)]})]),Ve=T({setData(){return new R({items:this.items||[]})},state:{open:!1,selectedLabel:"",selectedValue:""},render(){const e=(o,{state:a})=>a.toggle("open"),t=o=>{const a=this.state;a.selectedValue=o.value,a.selectedLabel=o.label,a.open=!1};return s({class:"relative w-[200px]"},[I({class:"inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-[200px] justify-between",click:e},[b({onState:["selectedLabel",o=>o||"Select item..."]}),h({html:p.chevron.upDown})]),s({class:"felx flex-auto flex-col",onState:["open",o=>o?Fe(t):null]})])}}),qe=[{value:"next.js",label:"Next.js",icon:p.home},{value:"sveltekit",label:"SvelteKit"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}],Ke=()=>l({title:"Comboboxes",description:"Comboboxes are used to allow users to select an option from a dropdown list or enter a custom value."},[n({title:"Usage",description:"To use the Combobox component, import it from the components library and use it in your application.",preview:[new Ve({items:qe})],code:`@components/molecules/combobox/combobox.js';
import { Icons } from "@components/icons/icons.js";

new Combobox({
    items: [
    { value: 'next.js', label: 'Next.js', icon: Icons.home },,
    { value: 'sveltekit', label: 'SvelteKit' },
    { value: 'nuxt.js', label: 'Nuxt.js' },
    { value: 'remix', label: 'Remix' },
    { value: 'astro', label: 'Astro' },
],
})`})]),Je=e=>se.render(e,document.body),Ye=({title:e})=>g({class:"flex flex-auto items-center"},[$({class:"text-lg font-semibold"},e)]),Qe=u((e,t)=>G({class:"flex flex-auto flex-col fixed z-30 w-full max-w-lg gap-4 border bg-background text-foreground p-6 shadow-lg duration-200 sm:rounded-lg",click:e.click,aria:{expanded:["open"]}},[s({class:"flex flex-auto flex-col space-y-2"},[Ye(e),s({class:"flex flex-auto flex-col text-sm text-muted-foreground"},t)]),F({class:"flex flex-col-reverse sm:flex-row sm:justify-end mt-6 gap-2 sm:gap-0 sm:space-x-2"},e.buttons)]));class K extends E{render(){const t=f=>{f.target===this.panel&&this.close()},o=this.getMainClass(),a=this.title||"Are you abosolutely sure?";return Qe({class:o,title:a,click:t,buttons:this.getButtons()},this.description)}getButtons(){return[i({variant:"outline",click:()=>this.close()},"Cancel"),i({variant:"primary",click:()=>this.confirm()},"Save")]}setupStates(){return{open:!1}}confirm(){this.confirmed&&this.confirmed(),this.close()}getMainClass(){return""}open(){Je(this),this.panel.showModal(),this.state.open=!0}close(){this.state.open=!1,this.panel.close(),this.destroy()}}const _e=e=>i({text:"Open",class:"m-1",click:()=>new K(e).open()}),Xe=()=>l({title:"Dialog",description:"Displays a dialog or a component that looks like a dialog."},[n({title:"Usage",description:"Import the dialog atom and use it in your components.",preview:[_e({title:"Are you absoultely sure?",description:"This action cannot be undone. This will permanently delete your account and remove your data from our servers.",confirmed:()=>console.log("Confirmed!")})],code:`import { Button } from '@components/molecules/dialogue.js';

new Dialog({
    title: 'Are you absoultely sure?',
    description: 'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
    confirmed: () => console.log('Confirmed!')
}).open()`})]),Ze=()=>`checkbox-${Math.random().toString(36).substring(2,9)}`,et=T({state:{checked:!1},render(){const e=Ze();return s({class:`flex items-center space-x-2 cursor-pointer ${this.class}`},[s({class:"relative flex items-center justify-center w-5 h-5 rounded-md transition-colors duration-200 border",onState:["checked",{"bg-primary":!0,"text-primary-foreground":!0}],role:"checkbox",aria:{checked:["checked"]},tabIndex:0,click:()=>{this.state.checked=!this.state.checked,typeof this.checked=="function"&&this.checked(this.state.checked)}},[ae({id:e,class:"absolute opacity-0 w-full h-full cursor-pointer",aria:{checked:["checked"]},change:t=>{const o=t.target.checked;this.state.checked=o,typeof this.checked=="function"&&this.checked(o)}}),b({class:"absolute text-xs pointer-events-none",onState:["checked",t=>t?h({class:"w-2 h-2 pointer-events-none",html:p.check}):null]})]),re({class:"text-base cursor-pointer",htmlFor:e,click:()=>{this.state.toggle("checked"),typeof this.checked=="function"&&this.checked(this.state.checked)}},this.label||"")])}}),tt=u(e=>({tag:"select",...e,class:`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${e.class||""}`,onCreated(t){e.options&&ie.setupSelectOptions(t,e.options)}})),ot=T({state:{selectedDate:null,open:!1},render(){const e=(o,{state:a})=>a.toggle("open"),t=o=>{this.state.selectedDate=o,this.state.open=!1};return s({class:"relative w-full max-w-[320px]"},[I({class:"flex items-center gap-2 w-full justify-between border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md h-10 px-4 py-2",click:e},[b({onState:["selectedDate",o=>o?le.format("standard",o):"Pick a date"]}),h({html:p.calendar.days})]),s({class:"absolute mt-1 z-10 bg-background rounded-md shadow-lg",onState:["open",o=>o?new W({selectedDate:this.selectedDate,selectedCallBack:t}):null]})])}}),nt=[{value:"next.js",label:"Next.js"},{value:"sveltekit",label:"SvelteKit"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}],st=()=>l({title:"Inputs",description:"Inputs are essential for gathering user data in forms."},[n({title:"Usage",description:"Import the input atom and use it in your components. The input can be of various types: text, password, email, etc.",preview:[D({type:"text",placeholder:"Enter your text here...",change:e=>console.log(e.target.value)})],code:`import { Button } from '@components/atoms/form/input.js';

Input({
    type: 'text',
    placeholder: 'Enter your text here...',
    change: (e) => console.log(e.target.value)
})`}),n({title:"Text Input",description:"This is a text input.",preview:[D({type:"text",placeholder:"Enter your text here..."})],code:`
import { Button } from '@components/atoms/form/input.js';

Input({
    type: 'text',
    placeholder: 'Enter your text here...'
})`}),n({title:"Tel Input",description:"This is a phone input.",preview:[ce({})],code:`
import { Button } from '@components/atoms/form/input.js';

TelInput({
})`}),n({title:"Email Input",description:"This is a email input.",preview:[de({})],code:`
import { Button } from '@components/atoms/form/input.js';

EmailInput({

})`}),n({title:"Checkbox",description:"This is a checkbox input.",preview:[new et({label:"Check me",check:e=>console.log(e)})],code:`
import { Button } from '@components/atoms/form/checkbox.js';

new Checkbox({
    label: 'Check me',
    check: (checked) => console.log(checked)
})`}),n({title:"Select",description:"This is a select input.",preview:[tt({options:nt,change:e=>console.log(e.target.value)})],code:`
import { Button } from '@components/atoms/form/input.js';

Input({
    type: 'text',
    placeholder: 'Enter your text here...'
})`}),n({title:"Textarea",description:"This is a textarea input.",preview:[ue({placeholder:"Enter your text here..."})],code:`
import { Button } from '@components/atoms/form/input.js';

Textarea({
    placeholder: 'Enter your text here...'
})`}),n({title:"Date Picker",description:"@components/molecules/date-time/date-picker.js",preview:[new ot({selectedDate:"2022-01-01"})],code:`
import { Button } from '@components/atoms/form/input.js';

new DatePicker()`})]),at=[{name:"Leslie Alexander",email:"leslie.alexander@example.com",image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"Co-Founder / CEO",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Michael Foster",email:"michael.foster@example.com",image:"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"Co-Founder / CTO",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Dries Vincent",email:"dries.vincent@example.com",image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"Business Relations",status:"online"}],rt=()=>l({title:"Comboboxes",description:"Comboboxes are used to allow users to select an option from a dropdown list or enter a custom value."},[n({title:"Usage",description:"To use the Combobox component, import it from the components library and use it in your application.",preview:[me({users:at})],code:`import { UserListItem } from "@components/organisms/lists/user-list.js";
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
});`}),j({class:"text-lg font-bold"},"Description"),c({class:"text-muted-foreground"},"The List component can be used to display a list of items in a structured format. Each item can be customized to show different information. The List component supports appending, prepending, mingling, and deleting or items. "),j({class:"text-lg font-bold"},"Performance"),c({class:"text-muted-foreground"},"The list will only update or re-render the items that have changed, improving performance. It uses a key to know when to update an item.")]),it=({title:e})=>g({class:"modal-header flex items-center"},[i({variant:"icon",icon:p.arrows.left,class:"mr-2 p-0 bg-transparent flex sm:hidden",click:(t,o)=>o.close()}),$({class:"text-lg font-semibold m-0"},e)]),lt=u((e,t)=>G({class:`modal m-auto fixed z-20 grid w-full gap-4 border bg-background p-6 shadow-lg ${e.class}`,click:e.click},[s({class:"modal-content flex flex-auto flex-col"},[it(e),s({class:"modal-body flex flex-auto"},t),F({class:"modal-footer flex justify-between"},e.buttons)])]));class ct extends K{render(){const t=f=>{f.target===this.panel&&this.close()},o=this.getMainClass(),a=this.title||"Are you abosolutely sure?";return lt({class:o,click:t,title:a,buttons:this.getButtons(),aria:{expanded:["open"]}},this.children)}getButtons(){return[i({variant:"outline",click:()=>this.close()},"Cancel"),i({variant:"primary",click:()=>this.confirm()},"Save")]}getSizeClass(){switch(this.size){case"sm":return"sm max-w-[646px]";case"lg":return"lg max-w-[900px]";case"xl":return"xl max-w-[1400px]";default:return"medium max-w-[760px]"}}getTypeClass(){switch(this.type){case"right":return"right right-0";case"left":return"left left-0";default:return""}}getMainClass(){return this.getSizeClass()+" "+this.getTypeClass()}}const x=[{label:"Large",buttonStyle:"primary",size:"lg"},{label:"Small",buttonStyle:"secondary",size:"sm"},{label:"Medium",buttonStyle:"destructive",size:"md"},{label:"XL",buttonStyle:"primary",size:"xl"},{label:"Right",buttonStyle:"ghost",type:"right"},{label:"Left",buttonStyle:"link",type:"left"}],v=({label:e,buttonStyle:t,size:o,type:a})=>i({text:e,class:`m-1 ${t}`,click:()=>new ct({title:"Are you absolutely sure?",size:o,type:a}).open()}),dt=()=>l({title:"Modals",description:"Displays a modal or a component that looks like a modal."},[n({title:"Extra Large Modal",description:"This is an extra large modal.",preview:[v(x[3])],code:`
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
});`}),n({title:"Large Modal",description:"This is a large modal.",preview:[v(x[0])],code:`
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
});`}),n({title:"Small Modal",preview:[v(x[1])],code:`
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
});`}),n({title:"Medium Modal",preview:[v(x[2])],code:`
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
});`}),n({title:"Right Modal",preview:[v(x[4])],code:`
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
});`})]),ut=()=>l({title:"Navigations",description:"Navigations are components that help users move around the website or application."},[n({title:"Inline Navigation",description:"The inline navigation component is a simple navigation component that can be used in a sidebar or app shell.",preview:[s({class:"flex flex-auto flex-col w-full border rounded-md max-w-[300px]"},[new pe({options:[{label:"Home",href:"/",icon:p.home},{label:"About",href:"/about"},{label:"Contact",href:"/contact"},{label:"Services",options:[{label:"Web Development",href:"/web-development"}]},{group:"Frameworks",options:[{label:"Next.js",href:"/next"},{label:"SvelteKit",href:"/sveltekit"},{label:"Nuxt.js",href:"/nuxt"},{label:"Remix",href:"/remix"},{label:"Astro",href:"/astro"}]}]})])],code:`import { Button } from '@components/organisms/navigation/inline-navigation.js';
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
})`})]),mt=()=>l({title:"Notifications",description:"Displays a notification message to the user."},[n({title:"In App Notifications",description:"Notifications can be displayed in the app to inform users about important events or updates. They are a global notification container that can be called from anywhere in the app.",preview:[new fe({title:"Notification Title",description:"This is a notification.",icon:p.warning,duration:"infinite"})],code:`app.notify({
    title: 'Notification Title',
    description: 'This is a notification.',
    icon: Icons.warning,
    type: 'warning', // 'success', 'destructive', 'info', 'warning'
    duration: 5000 // in milliseconds, leave it blank for 4 seconds, infinite is also a value to prevent it from going away
})`}),c({class:"text-muted-foreground"},"Notifications will stack if a few are called at the same time. The notification will be until the duration has been met. If a notificaiton duration is set to 'infinite', it must be removed by the user.  "),n({title:"Usage",description:"Call 'notify' the gloabl notification container to display notifications.",preview:[i({click:()=>{app.notify({title:"Notification Title",description:"This is a notification.",icon:p.warning,type:"warning"})}},"Show")],code:`app.notify({
    title: 'Notification Title',
    description: 'This is a notification.',
    icon: Icons.warning,
    type: 'warning', // 'success', 'destructive', 'info', 'warning'
    duration: 5000 // in milliseconds, leave it blank for 4 seconds, infinite is also a value to prevent it from going away
})`})]),L=u((e,t)=>s({class:"py-4"},t)),pt=()=>l({title:"Tabs",description:"Displays a tab or a component that looks like a tab."},[n({title:"Button Tab",description:"This is a button tab. The buttons to not route.",preview:[new q({class:"mt-4 max-w-[400px]",options:[{label:"Preview",value:"preview",layout:L([])},{label:"Code",value:"code",layout:L([])}]})],code:`
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
);`}),n({title:"Link Tab",description:"This is a link tab. The buttons route to a different page.",preview:[new be({class:"max-w-[400px]",options:[{label:"Example 1",href:"docs/components/tabs/example-1",component:new k({class:"p-8"},"This is an example 1 tab panel.")},{label:"Example 2",href:"docs/components/tabs/example-2",component:new k({class:"p-8"},"This is an example 2 tab panel.")},{label:"Example 3",href:"docs/components/tabs/example-3",component:new k({class:"p-8"},"This is an example 3 tab panel.")}]})],code:`
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
);`})]),P=(e,t,o)=>(o="Icons"+(o?"."+o:""),s({class:"flex flex-auto flex-col items-center gap-2 max-w-[150px] h-[8.5rem] cursor-pointer"},[s({class:"flex flex-auto w-full h-full justify-center items-center flex-wrap rounded-lg border bg-card text-base shadow-sm",click:()=>{navigator.clipboard.writeText(`${o}.${t}`)}},[h({html:e})]),s({class:"text-muted-foreground"},t)])),J=(e,t,o)=>{const a=typeof e=="object";a&&t.push(c({class:"text-muted-foreground"},"path: "+o+".{icon}"));const f=[];if(t.push(s({class:"flex flex-auto flex-wrap gap-2 my-8"},f)),a===!1)f.push(P(e,o));else for(var w in e){if(e.hasOwnProperty(w)===!1)continue;const B=e[w];if(typeof B!="object"){f.push(P(B,w,o));continue}const Y=`${o}.${w}`;J(B,t,Y)}},ft=e=>{if(!e||typeof e!="object")return;const t=[];for(let[o,a]of Object.entries(e)){if(o==="parse")continue;t.push(V({id:o.toLowerCase(),class:"text-2xl font-bold"},ge.titleCase(o))),J(a,t,o)}return t},bt=()=>l({title:"Icons",description:"The icons are from the Hericon library. They are SVG icons that can be used in your project. This icon set uses the outline style."},[A({href:"https://heroicons.com/",target:"_blank",class:"bttn link"},"link: Hericons"),n({title:"Icons",description:"This is an icon.",preview:[h({html:p.home})],code:`
import { Icons } from '@components/icons/icons.js';
import { I } from '@base-framework/atoms';

export const HomeIcon = () => (
    I({ html: Icons.home} )
);`}),s({class:"my-20"},[S({class:"text-2xl font-bold"},"Default Icons"),c({class:"text-muted-foreground"},'A few of the icons have been saved to the "Icons" object. You can use these icons in your project. Click to copy the Icon path. Here is a list of the icons that are available:')]),ft(p)]),gt=()=>l({title:"Introduction",description:"This app shell was created to showcase Base framework and its components and atoms. It is a simple app shell that can be used as a starting point for your project. It is built with Tailwind CSS and uses Shadcn as the inspiration for the theme and many of it's components. "}),ht=e=>s({class:"flex flex-auto flex-col items-center gap-2 max-w-[150px] h-[8.5rem] cursor-pointer"},[s({class:`flex flex-auto w-full h-full min-h-[136px] justify-center items-center flex-wrap rounded-lg border text-base shadow-sm ${e.class}`,click:()=>{navigator.clipboard.writeText(`${e.class}`)}}),s({class:"text-sm text-muted-foreground"},e.var)]),m=(e,t)=>C({class:"flex flex-auto flex-col gap-2"},[c({class:"text-base text-muted-foreground"},e),s({class:"flex flex-auto flex-wrap gap-2 my-2",map:[t,ht]})]),xt=e=>s({class:"flex flex-auto flex-col gap-12"},[V({class:"text-2xl font-bold"},"Color Guide"),m("Default background color of <body />...etc",[{var:"--backround",class:"bg-backround"},{var:"--foreground",class:"bg-foreground"}]),m("Muted backgrounds such as <TabsList />, <Skeleton /> and <Switch />",[{var:"--muted",class:"bg-muted"},{var:"--muted-foreground",class:"bg-muted-forground"}]),m("Background color for <Card />",[{var:"--card",class:"bg-card"},{var:"--card-foreground",class:"bg-card-foreground"}]),m("Background color for popovers such as <DropdownMenu />, <HoverCard />, <Popover />",[{var:"--popover",class:"bg-popover"},{var:"--popover-foreground",class:"bg-popover-foreground"}]),m("Default border color",[{var:"--border",class:"bg-border"}]),m("Border color for inputs such as <Input />, <Select />, <Textarea />",[{var:"--input",class:"bg-input"}]),m("Primary colors for <Button />",[{var:"--primary",class:"bg-primary"},{var:"--primary-foreground",class:"bg-primary-foreground"}]),m("Secondary colors for <Button />",[{var:"--secondary",class:"bg-secondary"},{var:"--secondary-foreground",class:"bg-secondary-foreground"}]),m("Used for accents such as hover effects on <DropdownMenuItem>, <SelectItem>...etc",[{var:"--accent",class:"bg-accent"},{var:"--accent-foreground",class:"bg-accent-foreground"}]),m('Used for destructive actions such as <Button variant="destructive">',[{var:"--destructive",class:"bg-destructive"},{var:"--destructive-foreground",class:"bg-destructive-foreground"}]),m('Used for warning actions such as <Button variant="warning">',[{var:"--warning",class:"bg-warning"},{var:"--warning-foreground",class:"bg-warning-foreground"}]),m("Used for focus ring",[{var:"--ring",class:"bg-ring"}]),m("Border radius for card, input and buttons",[{var:"--radius",class:"bg-radius"}])]),vt=()=>l({title:"Theme",description:"The theme is using Tailwind CSS and is based on Shadcn UI. The theme is customizable and can be extended. It comes with light and dark theme support."},[A({href:"https://ui.shadcn.com/docs/theming",target:"_blank",class:"bttn link"},"link: Shadcn"),s({class:"my-20"},[S({class:"text-2xl font-bold"},"Default Styles"),c({class:"text-muted-foreground"},"The default styles are defined in the Tailwind CSS configuration file and in the base CSS file. Here's the list of variables available for customization:")]),xt(),s({class:"flex flex-auto flex-col gap-2 mt-20"},[j({class:"text-2xl font-bold"},"Text Sizes"),c({class:"text-muted-foreground text-3xl"},"Text-3xl A test sentence."),c({class:"text-muted-foreground text-2xl"},"Text-2xl A test sentence."),c({class:"text-muted-foreground text-xl"},"Text-xl A test sentence."),c({class:"text-muted-foreground text-lg"},"Text-lg A test sentence."),c({class:"text-muted-foreground text-base"},"Text-base A test sentence."),c({class:"text-muted-foreground text-sm"},"Text-sm A test sentence."),c({class:"text-muted-foreground text-xs"},"Text-xs A test sentence.")])]),r=(e,t,o)=>({uri:e,title:t,component:o()}),wt=e=>[r(`${e}`,"Introduction",gt),r(`${e}/theme`,"Theme",vt),r(`${e}/icons`,"Icons",bt),r(`${e}/components/buttons*`,"Buttons",He),r(`${e}/components/badges*`,"Badges",Me),r(`${e}/components/tabs*`,"Tabs",pt),r(`${e}/components/modals*`,"Modals",dt),r(`${e}/components/notifications*`,"Notifications",mt),r(`${e}/components/dialogs*`,"Modals",Xe),r(`${e}/components/cards*`,"Cards",We),r(`${e}/components/calendars*`,"Calendars",Ue),r(`${e}/components/avatars*`,"Avatars",Ae),r(`${e}/components/inputs*`,"Inputs",st),r(`${e}/components/alerts*`,"Alerts",Se),r(`${e}/components/comboboxes*`,"Comboboxes",Ke),r(`${e}/components/lists*`,"Lists",rt),r(`${e}/components/breadcrumbs*`,"Breadcrumbs",Oe),r(`${e}/components/navigations*`,"Navigations",ut)],yt=e=>[{href:`${e}`,label:"Introduction",exact:!0},{href:`${e}/theme`,label:"Theme",exact:!0},{href:`${e}/icons`,label:"Icons"},{group:"Components",options:[{label:"Buttons",href:`${e}/components/buttons`},{label:"Badges",href:`${e}/components/badges`},{label:"Tabs",href:`${e}/components/tabs`},{label:"Modals",href:`${e}/components/modals`},{label:"Notifications",href:`${e}/components/notifications`},{label:"Dialogs",href:`${e}/components/dialogs`},{label:"Cards",href:`${e}/components/cards`},{label:"Calendars",href:`${e}/components/calendars`},{label:"Avatars",href:`${e}/components/avatars`},{label:"Inputs",href:`${e}/components/inputs`},{label:"Alerts",href:`${e}/components/alerts`},{label:"Comboboxes",href:`${e}/components/comboboxes`},{label:"Lists",href:`${e}/components/lists`},{label:"Breadcrumbs",href:`${e}/components/breadcrumbs`},{label:"Navigations",href:`${e}/components/navigations`}]}],kt=()=>new Q({backHref:"aside/"},[new k([s([g([U("Overlay")]),s({class:"contained"},[he()])])])]),Ct=e=>[{uri:`${e}/overlay-test`,component:kt()}],y="docs",jt=()=>new _({title:"Documentation",basePath:y,routes:Ct(y),switch:wt(y),links:yt(y)});export{jt as DocumentationPage,jt as default};
