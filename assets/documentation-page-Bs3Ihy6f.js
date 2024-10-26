import{B as r,O as U,A as R}from"./overlay-DJ0g3GWr.js";import{X as i,y as V,w as I,m as s,R as v,a as N,D as X,H as _,b as q,p as F,c as Y,U as m,I as B,S as b,B as J,d as K,C as D,e as T,g as Q,h as $,V as A,f as k,i as W,P as y,T as P,q as z,M as L,j as Z,G as ee}from"./index-C58ceIAJ.js";const C={gray:{backgroundColor:"bg-gray-50",textColor:"text-gray-600",ringColor:"ring-gray-500/10"},red:{backgroundColor:"bg-red-50",textColor:"text-red-700",ringColor:"ring-red-600/10"},yellow:{backgroundColor:"bg-yellow-50",textColor:"text-yellow-800",ringColor:"ring-yellow-600/20"},green:{backgroundColor:"bg-green-50",textColor:"text-green-700",ringColor:"ring-green-600/20"},blue:{backgroundColor:"bg-blue-50",textColor:"text-blue-700",ringColor:"ring-blue-700/10"},indigo:{backgroundColor:"bg-indigo-50",textColor:"text-indigo-700",ringColor:"ring-indigo-700/10"},purple:{backgroundColor:"bg-purple-50",textColor:"text-purple-700",ringColor:"ring-purple-700/10"},pink:{backgroundColor:"bg-pink-50",textColor:"text-pink-700",ringColor:"ring-pink-700/10"}},te=e=>C[e]||C.gray,oe=e=>{const{backgroundColor:t,textColor:o,ringColor:n}=te(e);return`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${t} ${o} ${n}`},u=i((e,t)=>{const o=oe(e==null?void 0:e.type);return V({...e,class:o},t)}),se=e=>_({class:"inline-flex flex-auto items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",dataSet:["selected",["state",e.value,"active"]]},[q({class:"flex flex-auto justify-center items-center",onSet:["selected",{selected:e.value}],click:t=>e.callBack(e.value)},e.label)]),ae=(e,t)=>(e.callBack=t,se(e)),ne=e=>N({class:`tab items-center justify-center rounded-md bg-muted p-1 text-muted-foreground ${e.class}`},[X({class:"flex flex-auto flex-row",map:[e.options,t=>ae(t,e.callBack)]})]);class O extends I{render(){const t=this.select.bind(this);return s({class:""},[ne({class:this.class,options:this.options,callBack:t}),v({class:"tab-content",onState:["selected",this.updateContent.bind(this)]})])}afterSetup(){const t=this.options[0].value;this.select(t)}update(){const t=this.state.get("selected");this.select(null),this.select(t)}select(t){this.state.selected=t}updateContent(t){const o=this.options;if(!o||o.length<1)return;const n=o[0];for(const c of o)if(c.value===t)return c.layout;return n.layout}setupStates(){const t=this.callBack,o=typeof t;return{selected:{state:null,callBack(n){o==="function"&&t(n)}}}}}const re=i((e,t)=>F({class:"flex p-4 min-h-[350px] max-h-[650px] overflow-x-auto rounded-lg border bg-muted whitespace-break-spaces cursor-pointer"},[Y({class:"font-mono text-sm",click:()=>navigator.clipboard.writeText(t[0].textContent)},t)])),le=i((e,t)=>s({class:"flex p-4 min-h-[350px] max-h-[650px] overflow-x-auto rounded-lg border bg-card"},[s({class:"preview flex w-full justify-center items-center"},t)])),j=i((e,t)=>s({class:"py-4"},t)),ie=e=>new O({class:"mt-4 max-w-[400px]",options:[{label:"Preview",value:"preview",layout:j([le(e.preview)])},{label:"Code",value:"code",layout:j([re(e.code)])}]}),ce=i(({title:e,description:t})=>m({class:"flex flex-col"},[B({class:"scroll-m-20 text-2xl font-bold tracking-tight"},e),t&&b({class:"text-base text-muted-foreground py-2 max-w-[700px]"},t)])),a=i((e,t)=>v({class:"py-4"},[ce({title:e.title,description:e.description}),ie({preview:e.preview,code:e.code})]));class ue extends J{render(){return K([s({class:"contained px-4 flex flex-auto flex-col"},this.children)])}}const de=i(({title:e,description:t})=>m({class:"flex flex-col"},[D({class:"scroll-m-20 text-3xl font-bold tracking-tight"},e),b({class:"text-base text-muted-foreground py-2 max-w-[700px]"},t)])),pe=i((e,t)=>s({class:"contained py-8"},[de(e),v({class:"pb-12 pt-8"},t)])),p=i((e,t)=>new ue([pe(e,t)])),me=()=>p({title:"Badges",description:"Badges can be used to display a status or a count."},[a({title:"Badge",description:"This is a badge.",preview:[s({class:"flex gap-2"},[u({type:"gray"},"Text"),u({type:"red"},"Text"),u({type:"yellow"},"Text"),u({type:"green"},"Text"),u({type:"blue"},"Text"),u({type:"indigo"},"Text"),u({type:"purple"},"Text"),u({type:"pink"},"Text")])],code:`
import { Button } from '../components/atoms/badges/badges.js';
import { Atom } from '@base-framework/base';

export const PrimaryBadge = Atom((props, children)) => (
    Badge({ ...props, type: 'gray' }, children)
);`})]),be=()=>p({title:"Button",description:"Displays a button or a component that looks like a button."},[a({title:"Usage",description:"Import the button atom and use it in your components. This platform has variants for different use cases. The variant can be set using the `variant` prop.",preview:[r({variant:"primary"},"Click Me")],code:`import { Button } from '../components/atoms/buttons/buttons.js';

Button({ ...props, variant: 'secondary' }, primary)`}),m({class:"flex flex-col py-8"},[T({class:"text-3xl font-bold tracking-tight border-b pb-2"},"Variants")]),a({title:"Primary Button",description:"This is a primary button.",preview:[r({variant:"primary"},"Click Me")],code:`
import { Button } from '../components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const PrimaryButton = Atom((props, children)) => (
    Button({ ...props, variant: 'primary' }, children)
);`}),a({title:"Secondary Button",preview:[r({variant:"secondary"},"Secondary")],code:`
import { Button } from '../components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const SecondaryButton = Atom((props, children)) => (
    Button({ ...props, variant: 'secondary' }, children)
);`}),a({title:"Destructive Button",preview:[r({variant:"destructive"},"Destructive")],code:`
import { Button } from '../components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const DestructiveButton = Atom((props, children)) => (
    Button({ ...props, variant: 'destructive' }, children)
);`}),a({title:"Outline Button",preview:[r({variant:"outline"},"Outline")],code:`
import { Button } from '../components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const OutlineButton = Atom((props, children)) => (
    Button({ ...props, variant: 'outline' }, children)
);`}),a({title:"Ghost Button",preview:[r({variant:"ghost"},"Ghost")],code:`
import { Button } from '../components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const GhostButton = Atom((props, children)) => (
    Button({ ...props, variant: 'ghost' }, children)
);`}),a({title:"Link Button",preview:[r({variant:"link"},"Link")],code:`
import { Button } from '../components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const LinkButton = Atom((props, children)) => (
    Button({ ...props, variant: 'link' }, children)
);`})]),fe=e=>Q.render(e,document.body),ge=({title:e})=>m({class:"flex flex-auto items-center"},[T({class:"text-lg font-semibold"},e)]),xe=i((e,t)=>$({class:"flex flex-auto flex-col fixed z-50 w-full max-w-lg gap-4 border bg-background text-foreground p-6 shadow-lg duration-200 sm:rounded-lg",click:e.click,aria:{expanded:["open"]}},[s({class:"flex flex-auto flex-col space-y-2"},[ge(e),s({class:"flex flex-auto flex-col text-sm text-muted-foreground"},t)]),A({class:"flex flex-col-reverse sm:flex-row sm:justify-end mt-6 sm:space-x-2"},e.buttons)]));class E extends I{render(){const t=c=>{c.target===this.panel&&this.close()},o=this.getMainClass(),n=this.title||"Are you abosolutely sure?";return xe({class:o,title:n,click:t,buttons:this.getButtons()},this.description)}getButtons(){return[r({variant:"outline",click:()=>this.close()},"Cancel"),r({variant:"primary",click:()=>this.confirm()},"Save")]}setupStates(){return{open:!1}}confirm(){this.confirmed&&this.confirmed(),this.close()}getMainClass(){return""}open(){fe(this),this.panel.showModal(),this.state.open=!0}close(){this.state.open=!1,this.panel.close(),this.destroy()}}const he=e=>r({text:"Open",class:"m-1",click:()=>new E(e).open()}),ye=()=>p({title:"Dialog",description:"Displays a dialog or a component that looks like a dialog."},[a({title:"Usage",description:"Import the dialog atom and use it in your components.",preview:[he({title:"Are you absoultely sure?",description:"This action cannot be undone. This will permanently delete your account and remove your data from our servers.",confirmed:()=>console.log("Confirmed!")})],code:`import { Button } from '../components/molecules/dialogue.js';

new Dialog({
    title: 'Are you absoultely sure?',
    description: 'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
    confirmed: () => console.log('Confirmed!')
}).open()`})]),ve=({title:e})=>m({class:"modal-header flex items-center"},[r({class:"mr-2 p-0 bg-transparent flex sm:hidden",click:(t,o)=>o.close()},{html:k.arrows.left}),T({class:"text-lg font-semibold m-0"},e)]),we=i((e,t)=>$({class:`modal m-auto fixed z-50 grid w-full gap-4 border bg-background p-6 shadow-lg ${e.class}`,click:e.click},[s({class:"modal-content flex flex-auto flex-col"},[ve(e),s({class:"modal-body flex flex-auto"},t),A({class:"modal-footer flex justify-between"},e.buttons)])]));class ke extends E{render(){const t=c=>{c.target===this.panel&&this.close()},o=this.getMainClass(),n=this.title||"Are you abosolutely sure?";return we({class:o,click:t,title:n,buttons:this.getButtons(),aria:{expanded:["open"]}},this.children)}getButtons(){return[r({variant:"outline",click:()=>this.close()},"Cancel"),r({variant:"primary",click:()=>this.confirm()},"Save")]}getSizeClass(){switch(this.size){case"sm":return"sm max-w-[646px]";case"lg":return"lg max-w-[900px]";case"xl":return"xl max-w-[1400px]";default:return"medium max-w-[760px]"}}getTypeClass(){switch(this.type){case"right":return"right right-0";case"left":return"left left-0";default:return""}}getMainClass(){return this.getSizeClass()+" "+this.getTypeClass()}}const f=[{label:"Large",buttonStyle:"primary",size:"lg"},{label:"Small",buttonStyle:"secondary",size:"sm"},{label:"Medium",buttonStyle:"destructive",size:"md"},{label:"XL",buttonStyle:"primary",size:"xl"},{label:"Right",buttonStyle:"ghost",type:"right"},{label:"Left",buttonStyle:"link",type:"left"}],g=({label:e,buttonStyle:t,size:o,type:n})=>r({text:e,class:`m-1 ${t}`,click:()=>new ke({title:"Are you absolutely sure?",size:o,type:n}).open()}),Be=()=>p({title:"Modals",description:"Displays a modal or a component that looks like a modal."},[a({title:"Extra Large Modal",description:"This is an extra large modal.",preview:[g(f[3])],code:`
import { Modal } from "../components/molecules/modal.js";
import { Button } from "../components/atoms/atoms.js";

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
});`}),a({title:"Large Modal",description:"This is a large modal.",preview:[g(f[0])],code:`
import { Modal } from "../components/molecules/modal.js";
import { Button } from "../components/atoms/atoms.js";

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
});`}),a({title:"Small Modal",preview:[g(f[1])],code:`
import { Modal } from "../components/molecules/modal.js";
import { Button } from "../components/atoms/atoms.js";

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
});`}),a({title:"Medium Modal",preview:[g(f[2])],code:`
import { Modal } from "../components/molecules/modal.js";
import { Button } from "../components/atoms/atoms.js";

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
});`}),a({title:"Right Modal",preview:[g(f[4])],code:`
import { Modal } from "../components/molecules/modal.js";
import { Button } from "../components/atoms/atoms.js";

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
});`})]),S=i((e,t)=>s({class:"py-4"},t)),Te=()=>p({title:"Tabs",description:"Displays a tab or a component that looks like a tab."},[a({title:"Button Tab",description:"This is a button tab. The buttons to not route.",preview:[new O({class:"mt-4 max-w-[400px]",options:[{label:"Preview",value:"preview",layout:S([])},{label:"Code",value:"code",layout:S([])}]})],code:`
import { ButtonTab } from "../components/organisms/tabs/button-tab.js";

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
);`}),a({title:"Link Tab",description:"This is a link tab. The buttons route to a different page.",preview:[new W({class:"max-w-[400px]",options:[{label:"Example 1",href:"docs/components/tabs/example-1",component:new y({class:"p-8"},"This is an example 1 tab panel.")},{label:"Example 2",href:"docs/components/tabs/example-2",component:new y({class:"p-8"},"This is an example 2 tab panel.")},{label:"Example 3",href:"docs/components/tabs/example-3",component:new y({class:"p-8"},"This is an example 3 tab panel.")}]})],code:`
import { LinkTab } from "../components/organisms/tabs/link-tab.js";
import { Panel } from "../components/organisms/panel.js";

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
);`})]),M=(e,t,o)=>(o="Icons"+(o?"."+o:""),s({class:"flex flex-auto flex-col items-center gap-2 max-w-[150px] h-[8.5rem] cursor-pointer"},[s({class:"flex flex-auto w-full h-full justify-center items-center flex-wrap rounded-lg border bg-card text-base shadow-sm",click:()=>{navigator.clipboard.writeText(`${o}.${t}`)}},[z({html:e})]),s({class:"text-muted-foreground"},t)])),H=(e,t,o)=>{const n=typeof e=="object";n&&t.push(b({class:"text-muted-foreground"},"path: "+o+".{icon}"));const c=[];if(t.push(s({class:"flex flex-auto flex-wrap gap-2 my-8"},c)),n===!1)c.push(M(e,o));else for(var x in e){if(e.hasOwnProperty(x)===!1)continue;const w=e[x];if(typeof w!="object"){c.push(M(w,x,o));continue}const G=`${o}.${x}`;H(w,t,G)}},Ce=e=>{if(!e||typeof e!="object")return;const t=[];for(let[o,n]of Object.entries(e)){if(o==="parse")continue;t.push(L({id:o.toLowerCase(),class:"text-2xl font-bold"},Z.titleCase(o))),H(n,t,o)}return t},je=()=>p({title:"Icons",description:"The icons are from the Hericon library. They are SVG icons that can be used in your project. This icon set uses the outline style."},[P({href:"https://heroicons.com/",target:"_blank",class:"bttn link"},"link: Hericons"),a({title:"Icons",description:"This is an icon.",preview:[z({html:k.home})],code:`
import { Icons } from '../components/icons/icons.js';
import { I } from '@base-framework/atoms';

export const HomeIcon = () => (
    I({ html: Icons.home} )
);`}),s({class:"my-20"},[B({class:"text-2xl font-bold"},"Default Icons"),b({class:"text-muted-foreground"},'A few of the icons have been saved to the "Icons" object. You can use these icons in your project. Click to copy the Icon path. Here is a list of the icons that are available:')]),Ce(k)]),Se=()=>p({title:"Introduction",description:"This app shell was created to showcase Base framework and its components and atoms. It is a simple app shell that can be used as a starting point for your project. It is built with Tailwind CSS and uses Shadcn as the inspiration for the theme and many of it's components. "}),Me=e=>s({class:"flex flex-auto flex-col items-center gap-2 max-w-[150px] h-[8.5rem] cursor-pointer"},[s({class:`flex flex-auto w-full h-full min-h-[136px] justify-center items-center flex-wrap rounded-lg border bg-card text-base shadow-sm ${e.class}`,click:()=>{navigator.clipboard.writeText(`${e.class}`)}}),s({class:"text-sm text-muted-foreground"},e.var)]),l=(e,t)=>v({class:"flex flex-auto flex-col gap-2"},[b({class:"text-base text-muted-foreground"},e),s({class:"flex flex-auto flex-wrap gap-2 my-2",map:[t,Me]})]),Ie=e=>s({class:"flex flex-auto flex-col gap-12"},[L({class:"text-2xl font-bold"},"Color Guide"),l("Default background color of <body />...etc",[{var:"--backround",class:"bg-backround"},{var:"--foreground",class:"bg-foreground"}]),l("Muted backgrounds such as <TabsList />, <Skeleton /> and <Switch />",[{var:"--muted",class:"bg-muted"},{var:"--muted-foreground",class:"bg-muted-forground"}]),l("Background color for <Card />",[{var:"--card",class:"bg-card"},{var:"--card-foreground",class:"bg-card-foreground"}]),l("Background color for popovers such as <DropdownMenu />, <HoverCard />, <Popover />",[{var:"--popover",class:"bg-popover"},{var:"--popover-foreground",class:"bg-popover-foreground"}]),l("Default border color",[{var:"--border",class:"bg-border"}]),l("Border color for inputs such as <Input />, <Select />, <Textarea />",[{var:"--input",class:"bg-input"}]),l("Primary colors for <Button />",[{var:"--primary",class:"bg-primary"},{var:"--primary-foreground",class:"bg-primary-foreground"}]),l("Secondary colors for <Button />",[{var:"--secondary",class:"bg-secondary"},{var:"--secondary-foreground",class:"bg-secondary-foreground"}]),l("Used for accents such as hover effects on <DropdownMenuItem>, <SelectItem>...etc",[{var:"--accent",class:"bg-accent"},{var:"--accent-foreground",class:"bg-accent-foreground"}]),l('Used for destructive actions such as <Button variant="destructive">',[{var:"--destructive",class:"bg-destructive"},{var:"--destructive-foreground",class:"bg-destructive-foreground"}]),l('Used for warning actions such as <Button variant="warning">',[{var:"--warning",class:"bg-warning"},{var:"--warning-foreground",class:"bg-warning-foreground"}]),l("Used for focus ring",[{var:"--ring",class:"bg-ring"}]),l("Border radius for card, input and buttons",[{var:"--radius",class:"bg-radius"}])]),De=()=>p({title:"Theme",description:"The theme is using Tailwind CSS and is based on Shadcn UI. The theme is customizable and can be extended. It comes with light and dark theme support."},[P({href:"https://ui.shadcn.com/docs/theming",target:"_blank",class:"bttn link"},"link: Shadcn"),s({class:"my-20"},[B({class:"text-2xl font-bold"},"Default Styles"),b({class:"text-muted-foreground"},"The default styles are defined in the Tailwind CSS configuration file and in the base CSS file. Here's the list of variables available for customization:")]),Ie()]),d=(e,t,o)=>({uri:e,title:t,component:o()}),$e=e=>[d(`${e}`,"Introduction",Se),d(`${e}/theme`,"Theme",De),d(`${e}/icons`,"Icons",je),d(`${e}/components/buttons*`,"Buttons",be),d(`${e}/components/badges*`,"Badges",me),d(`${e}/components/tabs*`,"Tabs",Te),d(`${e}/components/modals*`,"Modals",Be),d(`${e}/components/dialogs*`,"Modals",ye)],Ae=e=>[{href:`${e}`,label:"Introduction",exact:!0},{href:`${e}/theme`,label:"Theme",exact:!0},{href:`${e}/icons`,label:"Icons"},{group:"Components",options:[{label:"Buttons",href:`${e}/components/buttons`},{label:"Badges",href:`${e}/components/badges`},{label:"Tabs",href:`${e}/components/tabs`},{label:"Modals",href:`${e}/components/modals`},{label:"Dialogs",href:`${e}/components/dialogs`}]}],Pe=()=>new U({backHref:"aside/"},[new y([s([m([D("Overlay")]),s({class:"contained"},[ee()])])])]),ze=e=>[{uri:`${e}/overlay-test`,component:Pe()}],h="docs",Ee=()=>new R({title:"Documentation",basePath:h,routes:ze(h),switch:$e(h),links:Ae(h)});export{Ee as DocumentationPage,Ee as default};
