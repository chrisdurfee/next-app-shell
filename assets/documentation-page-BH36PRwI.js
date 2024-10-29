import{O as Y,A as _}from"./overlay-BH64f68J.js";import{w as D,m as s,R as k,a as K,D as P,H as E,b as z,X as u,p as X,c as q,U as b,I as B,S as f,B as F,d as J,C as L,A as Q,e as m,f as Z,y as w,g as r,h as j,i as ee,j as te,k as oe,q as C,l as ne,n as N,V as O,v as se,o as I,r as ae,E as re,s as ie,t as le,u as ce,P as y,T as U,M as H,x as ue,G as pe}from"./index-CN8unj6y.js";const de=e=>E({class:"inline-flex flex-auto items-center justify-center whitespace-nowrap rounded-sm text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",dataSet:["selected",["state",e.value,"active"]]},[z({class:"flex flex-auto justify-center items-center px-3 py-1.5",onSet:["selected",{selected:e.value}],click:t=>e.callBack(e.value)},e.label)]),me=(e,t)=>(e.callBack=t,de(e)),be=e=>K({class:`tab items-center justify-center rounded-md bg-muted p-1 text-muted-foreground ${e.class}`},[P({class:"flex flex-auto flex-row",map:[e.options,t=>me(t,e.callBack)]})]);class G extends D{render(){const t=this.select.bind(this);return s({class:""},[be({class:this.class,options:this.options,callBack:t}),k({class:"tab-content",onState:["selected",this.updateContent.bind(this)]})])}afterSetup(){const t=this.options[0].value;this.select(t)}update(){const t=this.state.get("selected");this.select(null),this.select(t)}select(t){this.state.selected=t}updateContent(t){const o=this.options;if(!o||o.length<1)return;const a=o[0];for(const d of o)if(d.value===t)return d.layout;return a.layout}setupStates(){const t=this.callBack,o=typeof t;return{selected:{state:null,callBack(a){o==="function"&&t(a)}}}}}const fe=u((e,t)=>X({class:"flex p-4 min-h-[350px] max-h-[650px] overflow-x-auto rounded-lg border bg-muted whitespace-break-spaces cursor-pointer"},[q({class:"font-mono text-sm",click:()=>navigator.clipboard.writeText(t[0].textContent)},t)])),ge=u((e,t)=>s({class:"flex p-4 min-h-[350px] max-h-[650px] overflow-x-auto rounded-lg border bg-card"},[s({class:"preview flex w-full justify-center items-center"},t)])),S=u((e,t)=>s({class:"py-4"},t)),xe=e=>new G({class:"mt-4 max-w-[400px]",options:[{label:"Preview",value:"preview",layout:S([ge(e.preview)])},{label:"Code",value:"code",layout:S([fe(e.code)])}]}),he=u(({title:e,description:t})=>b({class:"flex flex-col"},[B({class:"scroll-m-20 text-2xl font-bold tracking-tight"},e),t&&f({class:"text-base text-muted-foreground py-2 max-w-[700px]"},t)])),n=u((e,t)=>k({class:"py-4"},[he({title:e.title,description:e.description}),xe({preview:e.preview,code:e.code})]));class ve extends F{render(){return J([s({class:"contained px-4 flex flex-auto flex-col"},this.children)])}}const ye=u(({title:e,description:t})=>b({class:"flex flex-col"},[L({class:"scroll-m-20 text-3xl font-bold tracking-tight"},e),f({class:"text-base text-muted-foreground py-2 max-w-[700px]"},t)])),we=u((e,t)=>s({class:"contained py-8"},[ye(e),k({class:"pb-12 pt-8"},t)])),c=u((e,t)=>new ve([we(e,t)])),ke=()=>c({title:"Alerts",description:"Alerts are used to provide feedback to the user about the outcome of an action or to inform them of important information."},[n({title:"Usage",description:"To use the Alert component, import it from the components library and use it in your application.",preview:[Q({title:"Heads up!",description:"You can add components to your app using the cli.",icon:m.information})],code:`import { Alert } from "@components/molecules/alert.js";
import { Icons } from "@components/icons/icons.js";

Alert({
    title: 'Heads up!',
    description: 'You can add components to your app using the cli.',
    icon: Icons.information
})`})]),Ce=()=>c({title:"Cards",description:"Cards are a great way to display content in a concise and organized manner."},[n({title:"Usage",description:"Import the card atom and use it in your components. The avatar can be set to multiple sizes: xs, sm, lg, xl, 2xl, 3xl.",preview:[Z({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN"})],code:`import { Button } from '@components/atoms/cards/card.js';

Avatar({
    src: 'https://github.com/shadcn.png',
    alt: '@shadcn',
    fallbackText: 'CN',
    size: 'md' // You can change the size to xs, sm, lg, xl, 2xl, 3xl
})`})]),A={gray:{backgroundColor:"bg-gray-50",textColor:"text-gray-600",ringColor:"ring-gray-500/10"},red:{backgroundColor:"bg-red-50",textColor:"text-red-700",ringColor:"ring-red-600/10"},yellow:{backgroundColor:"bg-yellow-50",textColor:"text-yellow-800",ringColor:"ring-yellow-600/20"},green:{backgroundColor:"bg-green-50",textColor:"text-green-700",ringColor:"ring-green-600/20"},blue:{backgroundColor:"bg-blue-50",textColor:"text-blue-700",ringColor:"ring-blue-700/10"},indigo:{backgroundColor:"bg-indigo-50",textColor:"text-indigo-700",ringColor:"ring-indigo-700/10"},purple:{backgroundColor:"bg-purple-50",textColor:"text-purple-700",ringColor:"ring-purple-700/10"},pink:{backgroundColor:"bg-pink-50",textColor:"text-pink-700",ringColor:"ring-pink-700/10"},primary:{backgroundColor:"bg-primary",textColor:"text-primary-foreground",ringColor:"ring-primary/10"},secondary:{backgroundColor:"bg-secondary",textColor:"text-secondary-foreground",ringColor:"ring-secondary/10"},destructive:{backgroundColor:"bg-destructive",textColor:"text-destructive-foreground",ringColor:"ring-destructive/10"},warning:{backgroundColor:"bg-warning",textColor:"text-warning-foreground",ringColor:"ring-warning/10"},outline:{backgroundColor:"bg-background",textColor:"text-primary",ringColor:"ring-input"},ghost:{backgroundColor:"bg-background",textColor:"text-primary",ringColor:"ring-background"},link:{backgroundColor:"bg-background",textColor:"text-primary",ringColor:"ring-background"}},Te=e=>A[e]||A.gray,Be=e=>{const{backgroundColor:t,textColor:o,ringColor:a}=Te(e);return`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors ${t} ${o} ${a}`},i=u((e,t)=>{const o=Be(e==null?void 0:e.type);return w({...e,class:o},t)}),je=()=>c({title:"Badges",description:"Badges can be used to display a status or a count."},[n({title:"Badge",description:"This is a badge.",preview:[s({class:"flex gap-2 flex-wrap"},[i({type:"gray"},"Text"),i({type:"red"},"Text"),i({type:"yellow"},"Text"),i({type:"green"},"Text"),i({type:"blue"},"Text"),i({type:"indigo"},"Text"),i({type:"purple"},"Text"),i({type:"pink"},"Text"),i({type:"primary"},"Text"),i({type:"secondary"},"Text"),i({type:"destructive"},"Text"),i({type:"warning"},"Text"),i({type:"outline"},"Text"),i({type:"ghost"},"Text"),i({type:"link"},"Text")])],code:`
import { Button } from '@components/atoms/badges/badges.js';
import { Atom } from '@base-framework/base';

export const PrimaryBadge = Atom((props, children)) => (
    Badge({ ...props, type: 'gray' }, children)
);`})]),Ie=()=>c({title:"Button",description:"Displays a button or a component that looks like a button."},[n({title:"Usage",description:"Import the button atom and use it in your components. This platform has variants for different use cases. The variant can be set using the `variant` prop.",preview:[r({variant:"primary"},"Click Me")],code:`import { Button } from '@components/atoms/buttons/buttons.js';

Button({ ...props, variant: 'secondary' }, primary)`}),b({class:"flex flex-col py-8"},[j({class:"text-3xl font-bold tracking-tight border-b pb-2"},"Variants")]),n({title:"Primary Button",description:"This is a primary button.",preview:[r({variant:"primary"},"Click Me")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const PrimaryButton = Atom((props, children)) => (
    Button({ ...props, variant: 'primary' }, children)
);`}),n({title:"Secondary Button",preview:[r({variant:"secondary"},"Secondary")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const SecondaryButton = Atom((props, children)) => (
    Button({ ...props, variant: 'secondary' }, children)
);`}),n({title:"Destructive Button",preview:[r({variant:"destructive"},"Destructive")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const DestructiveButton = Atom((props, children)) => (
    Button({ ...props, variant: 'destructive' }, children)
);`}),n({title:"Warning Button",preview:[r({variant:"warning"},"Warning")],code:`import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const WarningButton = Atom((props, children)) => (
    Button({ ...props, variant: 'warning' }, children)
);`}),n({title:"Outline Button",preview:[r({variant:"outline"},"Outline")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const OutlineButton = Atom((props, children)) => (
    Button({ ...props, variant: 'outline' }, children)
);`}),n({title:"Ghost Button",preview:[r({variant:"ghost"},"Ghost")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const GhostButton = Atom((props, children)) => (
    Button({ ...props, variant: 'ghost' }, children)
);`}),n({title:"Link Button",preview:[r({variant:"link"},"Link")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const LinkButton = Atom((props, children)) => (
    Button({ ...props, variant: 'link' }, children)
);`}),n({title:"Icon Button",description:"Displays a button with an icon.",preview:[r({variant:"icon",icon:m.home})],code:`import { Button } from '@components/atoms/buttons/buttons.js';
import { Icons } from '@components/icons/icons.js';
import { Atom } from '@base-framework/base';

export const IconButton = Atom((props)) => (
    Button({ ...props, variant: 'icon', icon: Icons.home })
);`}),n({title:"With Icon Button",preview:[r({variant:"withIcon",icon:m.home},"With Icon")],code:`import { Button } from '@components/atoms/buttons/buttons.js';

Button({ variant: 'withIcon', icon: Icons.home }, 'With Icon')`})]),Se=()=>c({title:"Calendars",description:"This is the calendar component documentation."},[n({title:"Usage",description:"This is how you can use the calendar component.",preview:[new ee],code:`@components/organisms/calendar/calendar.js';

new Calendar()`})]),Ae=u((e,t)=>s({...e,class:`rounded-lg border bg-card text-card-foreground shadow-md min-w-[120px] min-h-[80px] my-5 mx-5 p-4 ${e.class||""}`,children:t})),$e=()=>c({title:"Cards",description:"Cards are a great way to display content in a concise and organized manner."},[n({title:"Usage",description:"Import the card atom and use it in your components.",preview:[Ae()],code:`import { Button } from '@components/atoms/cards/card.js';

Card()`})]),Me=(e,t)=>E({class:"flex flex-auto items-center cursor-pointer p-2 hover:bg-secondary rounded-sm",click:()=>t(e),onState:["selectedValue",{"bg-secondary":e.value}]},[e.icon&&w({class:"mr-2 flex items-baseline"},[C({class:"flex w-4 h-4",html:e.icon})]),w(e.label)]),De=e=>s({class:"absolute border rounded-md shadow-lg mt-1 w-full z-10"},[P({class:"max-h-60 overflow-y-auto p-2",for:["items",t=>Me(t,e)]})]),Pe=te({setData(){return new oe({items:this.items||[]})},state:{open:!1,selectedLabel:"",selectedValue:""},render(){const e=(o,{state:a})=>a.toggle("open"),t=o=>{const a=this.state;a.selectedValue=o.value,a.selectedLabel=o.label,a.open=!1};return s({class:"relative w-[200px]"},[z({class:"inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-[200px] justify-between",click:e},[w({onState:["selectedLabel",o=>o||"Select item..."]}),C({html:m.chevron.upDown})]),s({class:"felx flex-auto flex-col",onState:["open",o=>o?De(t):null]})])}}),Ee=[{value:"next.js",label:"Next.js",icon:m.home},{value:"sveltekit",label:"SvelteKit"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}],ze=()=>c({title:"Comboboxes",description:"Comboboxes are used to allow users to select an option from a dropdown list or enter a custom value."},[n({title:"Usage",description:"To use the Combobox component, import it from the components library and use it in your application.",preview:[new Pe({items:Ee})],code:`@components/molecules/combobox/combobox.js';
import { Icons } from "@components/icons/icons.js";

new Combobox({
    items: [
    { value: 'next.js', label: 'Next.js', icon: Icons.home },,
    { value: 'sveltekit', label: 'SvelteKit' },
    { value: 'nuxt.js', label: 'Nuxt.js' },
    { value: 'remix', label: 'Remix' },
    { value: 'astro', label: 'Astro' },
],
})`})]),Le=e=>ne.render(e,document.body),Ne=({title:e})=>b({class:"flex flex-auto items-center"},[j({class:"text-lg font-semibold"},e)]),Oe=u((e,t)=>N({class:"flex flex-auto flex-col fixed z-30 w-full max-w-lg gap-4 border bg-background text-foreground p-6 shadow-lg duration-200 sm:rounded-lg",click:e.click,aria:{expanded:["open"]}},[s({class:"flex flex-auto flex-col space-y-2"},[Ne(e),s({class:"flex flex-auto flex-col text-sm text-muted-foreground"},t)]),O({class:"flex flex-col-reverse sm:flex-row sm:justify-end mt-6 gap-2 sm:gap-0 sm:space-x-2"},e.buttons)]));class R extends D{render(){const t=d=>{d.target===this.panel&&this.close()},o=this.getMainClass(),a=this.title||"Are you abosolutely sure?";return Oe({class:o,title:a,click:t,buttons:this.getButtons()},this.description)}getButtons(){return[r({variant:"outline",click:()=>this.close()},"Cancel"),r({variant:"primary",click:()=>this.confirm()},"Save")]}setupStates(){return{open:!1}}confirm(){this.confirmed&&this.confirmed(),this.close()}getMainClass(){return""}open(){Le(this),this.panel.showModal(),this.state.open=!0}close(){this.state.open=!1,this.panel.close(),this.destroy()}}const Ue=e=>r({text:"Open",class:"m-1",click:()=>new R(e).open()}),He=()=>c({title:"Dialog",description:"Displays a dialog or a component that looks like a dialog."},[n({title:"Usage",description:"Import the dialog atom and use it in your components.",preview:[Ue({title:"Are you absoultely sure?",description:"This action cannot be undone. This will permanently delete your account and remove your data from our servers.",confirmed:()=>console.log("Confirmed!")})],code:`import { Button } from '@components/molecules/dialogue.js';

new Dialog({
    title: 'Are you absoultely sure?',
    description: 'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
    confirmed: () => console.log('Confirmed!')
}).open()`})]),Ge=u(e=>({tag:"select",...e,class:`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${e.class||""}`,onCreated(t){e.options&&se.setupSelectOptions(t,e.options)}})),Re=[{value:"next.js",label:"Next.js"},{value:"sveltekit",label:"SvelteKit"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}],Ve=()=>c({title:"Inputs",description:"Inputs are essential for gathering user data in forms."},[n({title:"Usage",description:"Import the input atom and use it in your components. The input can be of various types: text, password, email, etc.",preview:[I({type:"text",placeholder:"Enter your text here...",change:e=>console.log(e.target.value)})],code:`import { Button } from '@components/atoms/form/input.js';

Input({
    type: 'text',
    placeholder: 'Enter your text here...',
    change: (e) => console.log(e.target.value)
})`}),n({title:"Text Input",description:"This is a text input.",preview:[I({type:"text",placeholder:"Enter your text here..."})],code:`
import { Button } from '@components/atoms/form/input.js';

Input({
    type: 'text',
    placeholder: 'Enter your text here...'
})`}),n({title:"Tel Input",description:"This is a phone input.",preview:[ae({})],code:`
import { Button } from '@components/atoms/form/input.js';

TelInput({
})`}),n({title:"Email Input",description:"This is a email input.",preview:[re({})],code:`
import { Button } from '@components/atoms/form/input.js';

EmailInput({

})`}),n({title:"Checkbox",description:"This is a checkbox input.",preview:[ie({change:e=>console.log(e.target.checked)})],code:`
import { Button } from '@components/atoms/form/input.js';

Checkbox({
    change: (e) => console.log(e.target.checked)
})`}),n({title:"Select",description:"This is a select input.",preview:[Ge({options:Re,change:e=>console.log(e.target.value)})],code:`
import { Button } from '@components/atoms/form/input.js';

Input({
    type: 'text',
    placeholder: 'Enter your text here...'
})`}),n({title:"Textarea",description:"This is a textarea input.",preview:[le({placeholder:"Enter your text here..."})],code:`
import { Button } from '@components/atoms/form/input.js';

Textarea({
    placeholder: 'Enter your text here...'
})`})]),We=({title:e})=>b({class:"modal-header flex items-center"},[r({variant:"icon",icon:m.arrows.left,class:"mr-2 p-0 bg-transparent flex sm:hidden",click:(t,o)=>o.close()}),j({class:"text-lg font-semibold m-0"},e)]),Ye=u((e,t)=>N({class:`modal m-auto fixed z-20 grid w-full gap-4 border bg-background p-6 shadow-lg ${e.class}`,click:e.click},[s({class:"modal-content flex flex-auto flex-col"},[We(e),s({class:"modal-body flex flex-auto"},t),O({class:"modal-footer flex justify-between"},e.buttons)])]));class _e extends R{render(){const t=d=>{d.target===this.panel&&this.close()},o=this.getMainClass(),a=this.title||"Are you abosolutely sure?";return Ye({class:o,click:t,title:a,buttons:this.getButtons(),aria:{expanded:["open"]}},this.children)}getButtons(){return[r({variant:"outline",click:()=>this.close()},"Cancel"),r({variant:"primary",click:()=>this.confirm()},"Save")]}getSizeClass(){switch(this.size){case"sm":return"sm max-w-[646px]";case"lg":return"lg max-w-[900px]";case"xl":return"xl max-w-[1400px]";default:return"medium max-w-[760px]"}}getTypeClass(){switch(this.type){case"right":return"right right-0";case"left":return"left left-0";default:return""}}getMainClass(){return this.getSizeClass()+" "+this.getTypeClass()}}const g=[{label:"Large",buttonStyle:"primary",size:"lg"},{label:"Small",buttonStyle:"secondary",size:"sm"},{label:"Medium",buttonStyle:"destructive",size:"md"},{label:"XL",buttonStyle:"primary",size:"xl"},{label:"Right",buttonStyle:"ghost",type:"right"},{label:"Left",buttonStyle:"link",type:"left"}],x=({label:e,buttonStyle:t,size:o,type:a})=>r({text:e,class:`m-1 ${t}`,click:()=>new _e({title:"Are you absolutely sure?",size:o,type:a}).open()}),Ke=()=>c({title:"Modals",description:"Displays a modal or a component that looks like a modal."},[n({title:"Extra Large Modal",description:"This is an extra large modal.",preview:[x(g[3])],code:`
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
});`}),n({title:"Large Modal",description:"This is a large modal.",preview:[x(g[0])],code:`
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
});`}),n({title:"Small Modal",preview:[x(g[1])],code:`
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
});`}),n({title:"Medium Modal",preview:[x(g[2])],code:`
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
});`}),n({title:"Right Modal",preview:[x(g[4])],code:`
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
});`})]),Xe=()=>c({title:"Notifications",description:"Displays a notification message to the user."},[n({title:"Usage",description:"Call 'notify' the gloabl notification container to display notifications.",preview:[r({click:()=>{app.notify({title:"Notification Title",description:"This is a notification.",icon:m.warning,type:"warning"})}},"Show")],code:`app.notify({
    title: 'Notification Title',
    description: 'This is a notification.',
    icon: Icons.warning,
    type: 'warning', // 'success', 'destructive', 'info', 'warning'
    duration: 5000 // in milliseconds, leave it blank for 4 seconds, infinite is also a value to prevent it from going away
})`})]),$=u((e,t)=>s({class:"py-4"},t)),qe=()=>c({title:"Tabs",description:"Displays a tab or a component that looks like a tab."},[n({title:"Button Tab",description:"This is a button tab. The buttons to not route.",preview:[new G({class:"mt-4 max-w-[400px]",options:[{label:"Preview",value:"preview",layout:$([])},{label:"Code",value:"code",layout:$([])}]})],code:`
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
);`}),n({title:"Link Tab",description:"This is a link tab. The buttons route to a different page.",preview:[new ce({class:"max-w-[400px]",options:[{label:"Example 1",href:"docs/components/tabs/example-1",component:new y({class:"p-8"},"This is an example 1 tab panel.")},{label:"Example 2",href:"docs/components/tabs/example-2",component:new y({class:"p-8"},"This is an example 2 tab panel.")},{label:"Example 3",href:"docs/components/tabs/example-3",component:new y({class:"p-8"},"This is an example 3 tab panel.")}]})],code:`
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
);`})]),M=(e,t,o)=>(o="Icons"+(o?"."+o:""),s({class:"flex flex-auto flex-col items-center gap-2 max-w-[150px] h-[8.5rem] cursor-pointer"},[s({class:"flex flex-auto w-full h-full justify-center items-center flex-wrap rounded-lg border bg-card text-base shadow-sm",click:()=>{navigator.clipboard.writeText(`${o}.${t}`)}},[C({html:e})]),s({class:"text-muted-foreground"},t)])),V=(e,t,o)=>{const a=typeof e=="object";a&&t.push(f({class:"text-muted-foreground"},"path: "+o+".{icon}"));const d=[];if(t.push(s({class:"flex flex-auto flex-wrap gap-2 my-8"},d)),a===!1)d.push(M(e,o));else for(var h in e){if(e.hasOwnProperty(h)===!1)continue;const T=e[h];if(typeof T!="object"){d.push(M(T,h,o));continue}const W=`${o}.${h}`;V(T,t,W)}},Fe=e=>{if(!e||typeof e!="object")return;const t=[];for(let[o,a]of Object.entries(e)){if(o==="parse")continue;t.push(H({id:o.toLowerCase(),class:"text-2xl font-bold"},ue.titleCase(o))),V(a,t,o)}return t},Je=()=>c({title:"Icons",description:"The icons are from the Hericon library. They are SVG icons that can be used in your project. This icon set uses the outline style."},[U({href:"https://heroicons.com/",target:"_blank",class:"bttn link"},"link: Hericons"),n({title:"Icons",description:"This is an icon.",preview:[C({html:m.home})],code:`
import { Icons } from '@components/icons/icons.js';
import { I } from '@base-framework/atoms';

export const HomeIcon = () => (
    I({ html: Icons.home} )
);`}),s({class:"my-20"},[B({class:"text-2xl font-bold"},"Default Icons"),f({class:"text-muted-foreground"},'A few of the icons have been saved to the "Icons" object. You can use these icons in your project. Click to copy the Icon path. Here is a list of the icons that are available:')]),Fe(m)]),Qe=()=>c({title:"Introduction",description:"This app shell was created to showcase Base framework and its components and atoms. It is a simple app shell that can be used as a starting point for your project. It is built with Tailwind CSS and uses Shadcn as the inspiration for the theme and many of it's components. "}),Ze=e=>s({class:"flex flex-auto flex-col items-center gap-2 max-w-[150px] h-[8.5rem] cursor-pointer"},[s({class:`flex flex-auto w-full h-full min-h-[136px] justify-center items-center flex-wrap rounded-lg border text-base shadow-sm ${e.class}`,click:()=>{navigator.clipboard.writeText(`${e.class}`)}}),s({class:"text-sm text-muted-foreground"},e.var)]),p=(e,t)=>k({class:"flex flex-auto flex-col gap-2"},[f({class:"text-base text-muted-foreground"},e),s({class:"flex flex-auto flex-wrap gap-2 my-2",map:[t,Ze]})]),et=e=>s({class:"flex flex-auto flex-col gap-12"},[H({class:"text-2xl font-bold"},"Color Guide"),p("Default background color of <body />...etc",[{var:"--backround",class:"bg-backround"},{var:"--foreground",class:"bg-foreground"}]),p("Muted backgrounds such as <TabsList />, <Skeleton /> and <Switch />",[{var:"--muted",class:"bg-muted"},{var:"--muted-foreground",class:"bg-muted-forground"}]),p("Background color for <Card />",[{var:"--card",class:"bg-card"},{var:"--card-foreground",class:"bg-card-foreground"}]),p("Background color for popovers such as <DropdownMenu />, <HoverCard />, <Popover />",[{var:"--popover",class:"bg-popover"},{var:"--popover-foreground",class:"bg-popover-foreground"}]),p("Default border color",[{var:"--border",class:"bg-border"}]),p("Border color for inputs such as <Input />, <Select />, <Textarea />",[{var:"--input",class:"bg-input"}]),p("Primary colors for <Button />",[{var:"--primary",class:"bg-primary"},{var:"--primary-foreground",class:"bg-primary-foreground"}]),p("Secondary colors for <Button />",[{var:"--secondary",class:"bg-secondary"},{var:"--secondary-foreground",class:"bg-secondary-foreground"}]),p("Used for accents such as hover effects on <DropdownMenuItem>, <SelectItem>...etc",[{var:"--accent",class:"bg-accent"},{var:"--accent-foreground",class:"bg-accent-foreground"}]),p('Used for destructive actions such as <Button variant="destructive">',[{var:"--destructive",class:"bg-destructive"},{var:"--destructive-foreground",class:"bg-destructive-foreground"}]),p('Used for warning actions such as <Button variant="warning">',[{var:"--warning",class:"bg-warning"},{var:"--warning-foreground",class:"bg-warning-foreground"}]),p("Used for focus ring",[{var:"--ring",class:"bg-ring"}]),p("Border radius for card, input and buttons",[{var:"--radius",class:"bg-radius"}])]),tt=()=>c({title:"Theme",description:"The theme is using Tailwind CSS and is based on Shadcn UI. The theme is customizable and can be extended. It comes with light and dark theme support."},[U({href:"https://ui.shadcn.com/docs/theming",target:"_blank",class:"bttn link"},"link: Shadcn"),s({class:"my-20"},[B({class:"text-2xl font-bold"},"Default Styles"),f({class:"text-muted-foreground"},"The default styles are defined in the Tailwind CSS configuration file and in the base CSS file. Here's the list of variables available for customization:")]),et()]),l=(e,t,o)=>({uri:e,title:t,component:o()}),ot=e=>[l(`${e}`,"Introduction",Qe),l(`${e}/theme`,"Theme",tt),l(`${e}/icons`,"Icons",Je),l(`${e}/components/buttons*`,"Buttons",Ie),l(`${e}/components/badges*`,"Badges",je),l(`${e}/components/tabs*`,"Tabs",qe),l(`${e}/components/modals*`,"Modals",Ke),l(`${e}/components/notifications*`,"Notifications",Xe),l(`${e}/components/dialogs*`,"Modals",He),l(`${e}/components/cards*`,"Cards",$e),l(`${e}/components/calendars*`,"Calendars",Se),l(`${e}/components/avatars*`,"Avatars",Ce),l(`${e}/components/inputs*`,"Inputs",Ve),l(`${e}/components/alerts*`,"Alerts",ke),l(`${e}/components/comboboxes*`,"Comboboxes",ze)],nt=e=>[{href:`${e}`,label:"Introduction",exact:!0},{href:`${e}/theme`,label:"Theme",exact:!0},{href:`${e}/icons`,label:"Icons"},{group:"Components",options:[{label:"Buttons",href:`${e}/components/buttons`},{label:"Badges",href:`${e}/components/badges`},{label:"Tabs",href:`${e}/components/tabs`},{label:"Modals",href:`${e}/components/modals`},{label:"Notifications",href:`${e}/components/notifications`},{label:"Dialogs",href:`${e}/components/dialogs`},{label:"Cards",href:`${e}/components/cards`},{label:"Calendars",href:`${e}/components/calendars`},{label:"Avatars",href:`${e}/components/avatars`},{label:"Inputs",href:`${e}/components/inputs`},{label:"Alerts",href:`${e}/components/alerts`},{label:"Comboboxes",href:`${e}/components/comboboxes`}]}],st=()=>new Y({backHref:"aside/"},[new y([s([b([L("Overlay")]),s({class:"contained"},[pe()])])])]),at=e=>[{uri:`${e}/overlay-test`,component:st()}],v="docs",lt=()=>new _({title:"Documentation",basePath:v,routes:at(v),switch:ot(v),links:nt(v)});export{lt as DocumentationPage,lt as default};
