import{O as U,A as N}from"./overlay-CY9hYmrh.js";import{X as l,y as R,w as M,m as s,R as v,a as W,D as V,H as X,b as _,p as q,c as F,U as f,I as B,S as b,B as Y,d as J,C as $,e as a,f as T,g as m,h as K,i as A,V as D,j as Q,P as w,T as P,q as z,M as L,k as Z,G as tt}from"./index-DcSIniLM.js";const C={gray:{backgroundColor:"bg-gray-50",textColor:"text-gray-600",ringColor:"ring-gray-500/10"},red:{backgroundColor:"bg-red-50",textColor:"text-red-700",ringColor:"ring-red-600/10"},yellow:{backgroundColor:"bg-yellow-50",textColor:"text-yellow-800",ringColor:"ring-yellow-600/20"},green:{backgroundColor:"bg-green-50",textColor:"text-green-700",ringColor:"ring-green-600/20"},blue:{backgroundColor:"bg-blue-50",textColor:"text-blue-700",ringColor:"ring-blue-700/10"},indigo:{backgroundColor:"bg-indigo-50",textColor:"text-indigo-700",ringColor:"ring-indigo-700/10"},purple:{backgroundColor:"bg-purple-50",textColor:"text-purple-700",ringColor:"ring-purple-700/10"},pink:{backgroundColor:"bg-pink-50",textColor:"text-pink-700",ringColor:"ring-pink-700/10"}},et=t=>C[t]||C.gray,ot=t=>{const{backgroundColor:e,textColor:o,ringColor:r}=et(t);return`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${e} ${o} ${r}`},p=l((t,e)=>{const o=ot(t==null?void 0:t.type);return R({...t,class:o},e)}),st=t=>X({class:"inline-flex flex-auto items-center justify-center whitespace-nowrap rounded-sm text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",dataSet:["selected",["state",t.value,"active"]]},[_({class:"flex flex-auto justify-center items-center px-3 py-1.5",onSet:["selected",{selected:t.value}],click:e=>t.callBack(t.value)},t.label)]),nt=(t,e)=>(t.callBack=e,st(t)),at=t=>W({class:`tab items-center justify-center rounded-md bg-muted p-1 text-muted-foreground ${t.class}`},[V({class:"flex flex-auto flex-row",map:[t.options,e=>nt(e,t.callBack)]})]);class O extends M{render(){const e=this.select.bind(this);return s({class:""},[at({class:this.class,options:this.options,callBack:e}),v({class:"tab-content",onState:["selected",this.updateContent.bind(this)]})])}afterSetup(){const e=this.options[0].value;this.select(e)}update(){const e=this.state.get("selected");this.select(null),this.select(e)}select(e){this.state.selected=e}updateContent(e){const o=this.options;if(!o||o.length<1)return;const r=o[0];for(const c of o)if(c.value===e)return c.layout;return r.layout}setupStates(){const e=this.callBack,o=typeof e;return{selected:{state:null,callBack(r){o==="function"&&e(r)}}}}}const rt=l((t,e)=>q({class:"flex p-4 min-h-[350px] max-h-[650px] overflow-x-auto rounded-lg border bg-muted whitespace-break-spaces cursor-pointer"},[F({class:"font-mono text-sm",click:()=>navigator.clipboard.writeText(e[0].textContent)},e)])),it=l((t,e)=>s({class:"flex p-4 min-h-[350px] max-h-[650px] overflow-x-auto rounded-lg border bg-card"},[s({class:"preview flex w-full justify-center items-center"},e)])),j=l((t,e)=>s({class:"py-4"},e)),lt=t=>new O({class:"mt-4 max-w-[400px]",options:[{label:"Preview",value:"preview",layout:j([it(t.preview)])},{label:"Code",value:"code",layout:j([rt(t.code)])}]}),ct=l(({title:t,description:e})=>f({class:"flex flex-col"},[B({class:"scroll-m-20 text-2xl font-bold tracking-tight"},t),e&&b({class:"text-base text-muted-foreground py-2 max-w-[700px]"},e)])),n=l((t,e)=>v({class:"py-4"},[ct({title:t.title,description:t.description}),lt({preview:t.preview,code:t.code})]));class dt extends Y{render(){return J([s({class:"contained px-4 flex flex-auto flex-col"},this.children)])}}const ut=l(({title:t,description:e})=>f({class:"flex flex-col"},[$({class:"scroll-m-20 text-3xl font-bold tracking-tight"},t),b({class:"text-base text-muted-foreground py-2 max-w-[700px]"},e)])),pt=l((t,e)=>s({class:"contained py-8"},[ut(t),v({class:"pb-12 pt-8"},e)])),u=l((t,e)=>new dt([pt(t,e)])),mt=()=>u({title:"Badges",description:"Badges can be used to display a status or a count."},[n({title:"Badge",description:"This is a badge.",preview:[s({class:"flex gap-2"},[p({type:"gray"},"Text"),p({type:"red"},"Text"),p({type:"yellow"},"Text"),p({type:"green"},"Text"),p({type:"blue"},"Text"),p({type:"indigo"},"Text"),p({type:"purple"},"Text"),p({type:"pink"},"Text")])],code:`
import { Button } from '@components/atoms/badges/badges.js';
import { Atom } from '@base-framework/base';

export const PrimaryBadge = Atom((props, children)) => (
    Badge({ ...props, type: 'gray' }, children)
);`})]),ft=()=>u({title:"Button",description:"Displays a button or a component that looks like a button."},[n({title:"Usage",description:"Import the button atom and use it in your components. This platform has variants for different use cases. The variant can be set using the `variant` prop.",preview:[a({variant:"primary"},"Click Me")],code:`import { Button } from '@components/atoms/buttons/buttons.js';

Button({ ...props, variant: 'secondary' }, primary)`}),f({class:"flex flex-col py-8"},[T({class:"text-3xl font-bold tracking-tight border-b pb-2"},"Variants")]),n({title:"Primary Button",description:"This is a primary button.",preview:[a({variant:"primary"},"Click Me")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const PrimaryButton = Atom((props, children)) => (
    Button({ ...props, variant: 'primary' }, children)
);`}),n({title:"Secondary Button",preview:[a({variant:"secondary"},"Secondary")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const SecondaryButton = Atom((props, children)) => (
    Button({ ...props, variant: 'secondary' }, children)
);`}),n({title:"Destructive Button",preview:[a({variant:"destructive"},"Destructive")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const DestructiveButton = Atom((props, children)) => (
    Button({ ...props, variant: 'destructive' }, children)
);`}),n({title:"Warning Button",preview:[a({variant:"warning"},"Warning")],code:`import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const WarningButton = Atom((props, children)) => (
    Button({ ...props, variant: 'warning' }, children)
);`}),n({title:"Outline Button",preview:[a({variant:"outline"},"Outline")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const OutlineButton = Atom((props, children)) => (
    Button({ ...props, variant: 'outline' }, children)
);`}),n({title:"Ghost Button",preview:[a({variant:"ghost"},"Ghost")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const GhostButton = Atom((props, children)) => (
    Button({ ...props, variant: 'ghost' }, children)
);`}),n({title:"Link Button",preview:[a({variant:"link"},"Link")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const LinkButton = Atom((props, children)) => (
    Button({ ...props, variant: 'link' }, children)
);`}),n({title:"Icon Button",description:"Displays a button with an icon.",preview:[a({variant:"icon",icon:m.home})],code:`import { Button } from '@components/atoms/buttons/buttons.js';
import { Icons } from '@components/icons/icons.js';
import { Atom } from '@base-framework/base';

export const IconButton = Atom((props)) => (
    Button({ ...props, variant: 'icon', icon: Icons.home })
);`}),n({title:"With Icon Button",preview:[a({variant:"withIcon",icon:m.home},"With Icon")],code:`import { Button } from '@components/atoms/buttons/buttons.js';

Button({ variant: 'withIcon', icon: Icons.home }, 'With Icon')`})]),bt=l((t,e)=>s({...t,class:`rounded-lg border bg-card text-card-foreground shadow-md my-5 mx-5 p-4 ${t.class||""}`,children:e})),gt=()=>u({title:"Cards",description:"Cards are a great way to display content in a concise and organized manner."},[n({title:"Usage",description:"Import the card atom and use it in your components.",preview:[bt()],code:`import { Button } from '@components/atoms/cards/card.js';

Card()`})]),xt=t=>K.render(t,document.body),ht=({title:t})=>f({class:"flex flex-auto items-center"},[T({class:"text-lg font-semibold"},t)]),yt=l((t,e)=>A({class:"flex flex-auto flex-col fixed z-30 w-full max-w-lg gap-4 border bg-background text-foreground p-6 shadow-lg duration-200 sm:rounded-lg",click:t.click,aria:{expanded:["open"]}},[s({class:"flex flex-auto flex-col space-y-2"},[ht(t),s({class:"flex flex-auto flex-col text-sm text-muted-foreground"},e)]),D({class:"flex flex-col-reverse sm:flex-row sm:justify-end mt-6 gap-2 sm:gap-0 sm:space-x-2"},t.buttons)]));class E extends M{render(){const e=c=>{c.target===this.panel&&this.close()},o=this.getMainClass(),r=this.title||"Are you abosolutely sure?";return yt({class:o,title:r,click:e,buttons:this.getButtons()},this.description)}getButtons(){return[a({variant:"outline",click:()=>this.close()},"Cancel"),a({variant:"primary",click:()=>this.confirm()},"Save")]}setupStates(){return{open:!1}}confirm(){this.confirmed&&this.confirmed(),this.close()}getMainClass(){return""}open(){xt(this),this.panel.showModal(),this.state.open=!0}close(){this.state.open=!1,this.panel.close(),this.destroy()}}const wt=t=>a({text:"Open",class:"m-1",click:()=>new E(t).open()}),vt=()=>u({title:"Dialog",description:"Displays a dialog or a component that looks like a dialog."},[n({title:"Usage",description:"Import the dialog atom and use it in your components.",preview:[wt({title:"Are you absoultely sure?",description:"This action cannot be undone. This will permanently delete your account and remove your data from our servers.",confirmed:()=>console.log("Confirmed!")})],code:`import { Button } from '@components/molecules/dialogue.js';

new Dialog({
    title: 'Are you absoultely sure?',
    description: 'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
    confirmed: () => console.log('Confirmed!')
}).open()`})]),kt=({title:t})=>f({class:"modal-header flex items-center"},[a({variant:"icon",icon:m.arrows.left,class:"mr-2 p-0 bg-transparent flex sm:hidden",click:(e,o)=>o.close()}),T({class:"text-lg font-semibold m-0"},t)]),Bt=l((t,e)=>A({class:`modal m-auto fixed z-20 grid w-full gap-4 border bg-background p-6 shadow-lg ${t.class}`,click:t.click},[s({class:"modal-content flex flex-auto flex-col"},[kt(t),s({class:"modal-body flex flex-auto"},e),D({class:"modal-footer flex justify-between"},t.buttons)])]));class Tt extends E{render(){const e=c=>{c.target===this.panel&&this.close()},o=this.getMainClass(),r=this.title||"Are you abosolutely sure?";return Bt({class:o,click:e,title:r,buttons:this.getButtons(),aria:{expanded:["open"]}},this.children)}getButtons(){return[a({variant:"outline",click:()=>this.close()},"Cancel"),a({variant:"primary",click:()=>this.confirm()},"Save")]}getSizeClass(){switch(this.size){case"sm":return"sm max-w-[646px]";case"lg":return"lg max-w-[900px]";case"xl":return"xl max-w-[1400px]";default:return"medium max-w-[760px]"}}getTypeClass(){switch(this.type){case"right":return"right right-0";case"left":return"left left-0";default:return""}}getMainClass(){return this.getSizeClass()+" "+this.getTypeClass()}}const g=[{label:"Large",buttonStyle:"primary",size:"lg"},{label:"Small",buttonStyle:"secondary",size:"sm"},{label:"Medium",buttonStyle:"destructive",size:"md"},{label:"XL",buttonStyle:"primary",size:"xl"},{label:"Right",buttonStyle:"ghost",type:"right"},{label:"Left",buttonStyle:"link",type:"left"}],x=({label:t,buttonStyle:e,size:o,type:r})=>a({text:t,class:`m-1 ${e}`,click:()=>new Tt({title:"Are you absolutely sure?",size:o,type:r}).open()}),Ct=()=>u({title:"Modals",description:"Displays a modal or a component that looks like a modal."},[n({title:"Extra Large Modal",description:"This is an extra large modal.",preview:[x(g[3])],code:`
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
});`})]),jt=()=>u({title:"Notifications",description:"Displays a notification message to the user."},[n({title:"Usage",description:"Call 'notify' the gloabl notification container to display notifications.",preview:[a({click:()=>{app.notify({title:"Notification Title",description:"This is a notification.",icon:m.warning,type:"warning"})}},"Show")],code:`app.notify({
    title: 'Notification Title',
    description: 'This is a notification.',
    icon: Icons.warning,
    type: 'warning', // 'success', 'destructive', 'info', 'warning'
    duration: 5000 // in milliseconds, leave it blank for 4 seconds, infinite is also a value to prevent it from going away
})`})]),S=l((t,e)=>s({class:"py-4"},e)),St=()=>u({title:"Tabs",description:"Displays a tab or a component that looks like a tab."},[n({title:"Button Tab",description:"This is a button tab. The buttons to not route.",preview:[new O({class:"mt-4 max-w-[400px]",options:[{label:"Preview",value:"preview",layout:S([])},{label:"Code",value:"code",layout:S([])}]})],code:`
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
);`}),n({title:"Link Tab",description:"This is a link tab. The buttons route to a different page.",preview:[new Q({class:"max-w-[400px]",options:[{label:"Example 1",href:"docs/components/tabs/example-1",component:new w({class:"p-8"},"This is an example 1 tab panel.")},{label:"Example 2",href:"docs/components/tabs/example-2",component:new w({class:"p-8"},"This is an example 2 tab panel.")},{label:"Example 3",href:"docs/components/tabs/example-3",component:new w({class:"p-8"},"This is an example 3 tab panel.")}]})],code:`
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
);`})]),I=(t,e,o)=>(o="Icons"+(o?"."+o:""),s({class:"flex flex-auto flex-col items-center gap-2 max-w-[150px] h-[8.5rem] cursor-pointer"},[s({class:"flex flex-auto w-full h-full justify-center items-center flex-wrap rounded-lg border bg-card text-base shadow-sm",click:()=>{navigator.clipboard.writeText(`${o}.${e}`)}},[z({html:t})]),s({class:"text-muted-foreground"},e)])),H=(t,e,o)=>{const r=typeof t=="object";r&&e.push(b({class:"text-muted-foreground"},"path: "+o+".{icon}"));const c=[];if(e.push(s({class:"flex flex-auto flex-wrap gap-2 my-8"},c)),r===!1)c.push(I(t,o));else for(var h in t){if(t.hasOwnProperty(h)===!1)continue;const k=t[h];if(typeof k!="object"){c.push(I(k,h,o));continue}const G=`${o}.${h}`;H(k,e,G)}},It=t=>{if(!t||typeof t!="object")return;const e=[];for(let[o,r]of Object.entries(t)){if(o==="parse")continue;e.push(L({id:o.toLowerCase(),class:"text-2xl font-bold"},Z.titleCase(o))),H(r,e,o)}return e},Mt=()=>u({title:"Icons",description:"The icons are from the Hericon library. They are SVG icons that can be used in your project. This icon set uses the outline style."},[P({href:"https://heroicons.com/",target:"_blank",class:"bttn link"},"link: Hericons"),n({title:"Icons",description:"This is an icon.",preview:[z({html:m.home})],code:`
import { Icons } from '@components/icons/icons.js';
import { I } from '@base-framework/atoms';

export const HomeIcon = () => (
    I({ html: Icons.home} )
);`}),s({class:"my-20"},[B({class:"text-2xl font-bold"},"Default Icons"),b({class:"text-muted-foreground"},'A few of the icons have been saved to the "Icons" object. You can use these icons in your project. Click to copy the Icon path. Here is a list of the icons that are available:')]),It(m)]),$t=()=>u({title:"Introduction",description:"This app shell was created to showcase Base framework and its components and atoms. It is a simple app shell that can be used as a starting point for your project. It is built with Tailwind CSS and uses Shadcn as the inspiration for the theme and many of it's components. "}),At=t=>s({class:"flex flex-auto flex-col items-center gap-2 max-w-[150px] h-[8.5rem] cursor-pointer"},[s({class:`flex flex-auto w-full h-full min-h-[136px] justify-center items-center flex-wrap rounded-lg border text-base shadow-sm ${t.class}`,click:()=>{navigator.clipboard.writeText(`${t.class}`)}}),s({class:"text-sm text-muted-foreground"},t.var)]),i=(t,e)=>v({class:"flex flex-auto flex-col gap-2"},[b({class:"text-base text-muted-foreground"},t),s({class:"flex flex-auto flex-wrap gap-2 my-2",map:[e,At]})]),Dt=t=>s({class:"flex flex-auto flex-col gap-12"},[L({class:"text-2xl font-bold"},"Color Guide"),i("Default background color of <body />...etc",[{var:"--backround",class:"bg-backround"},{var:"--foreground",class:"bg-foreground"}]),i("Muted backgrounds such as <TabsList />, <Skeleton /> and <Switch />",[{var:"--muted",class:"bg-muted"},{var:"--muted-foreground",class:"bg-muted-forground"}]),i("Background color for <Card />",[{var:"--card",class:"bg-card"},{var:"--card-foreground",class:"bg-card-foreground"}]),i("Background color for popovers such as <DropdownMenu />, <HoverCard />, <Popover />",[{var:"--popover",class:"bg-popover"},{var:"--popover-foreground",class:"bg-popover-foreground"}]),i("Default border color",[{var:"--border",class:"bg-border"}]),i("Border color for inputs such as <Input />, <Select />, <Textarea />",[{var:"--input",class:"bg-input"}]),i("Primary colors for <Button />",[{var:"--primary",class:"bg-primary"},{var:"--primary-foreground",class:"bg-primary-foreground"}]),i("Secondary colors for <Button />",[{var:"--secondary",class:"bg-secondary"},{var:"--secondary-foreground",class:"bg-secondary-foreground"}]),i("Used for accents such as hover effects on <DropdownMenuItem>, <SelectItem>...etc",[{var:"--accent",class:"bg-accent"},{var:"--accent-foreground",class:"bg-accent-foreground"}]),i('Used for destructive actions such as <Button variant="destructive">',[{var:"--destructive",class:"bg-destructive"},{var:"--destructive-foreground",class:"bg-destructive-foreground"}]),i('Used for warning actions such as <Button variant="warning">',[{var:"--warning",class:"bg-warning"},{var:"--warning-foreground",class:"bg-warning-foreground"}]),i("Used for focus ring",[{var:"--ring",class:"bg-ring"}]),i("Border radius for card, input and buttons",[{var:"--radius",class:"bg-radius"}])]),Pt=()=>u({title:"Theme",description:"The theme is using Tailwind CSS and is based on Shadcn UI. The theme is customizable and can be extended. It comes with light and dark theme support."},[P({href:"https://ui.shadcn.com/docs/theming",target:"_blank",class:"bttn link"},"link: Shadcn"),s({class:"my-20"},[B({class:"text-2xl font-bold"},"Default Styles"),b({class:"text-muted-foreground"},"The default styles are defined in the Tailwind CSS configuration file and in the base CSS file. Here's the list of variables available for customization:")]),Dt()]),d=(t,e,o)=>({uri:t,title:e,component:o()}),zt=t=>[d(`${t}`,"Introduction",$t),d(`${t}/theme`,"Theme",Pt),d(`${t}/icons`,"Icons",Mt),d(`${t}/components/buttons*`,"Buttons",ft),d(`${t}/components/badges*`,"Badges",mt),d(`${t}/components/tabs*`,"Tabs",St),d(`${t}/components/modals*`,"Modals",Ct),d(`${t}/components/notifications*`,"Notifications",jt),d(`${t}/components/dialogs*`,"Modals",vt),d(`${t}/components/cards*`,"Cards",gt)],Lt=t=>[{href:`${t}`,label:"Introduction",exact:!0},{href:`${t}/theme`,label:"Theme",exact:!0},{href:`${t}/icons`,label:"Icons"},{group:"Components",options:[{label:"Buttons",href:`${t}/components/buttons`},{label:"Badges",href:`${t}/components/badges`},{label:"Tabs",href:`${t}/components/tabs`},{label:"Modals",href:`${t}/components/modals`},{label:"Notifications",href:`${t}/components/notifications`},{label:"Dialogs",href:`${t}/components/dialogs`},{label:"Cards",href:`${t}/components/cards`}]}],Ot=()=>new U({backHref:"aside/"},[new w([s([f([$("Overlay")]),s({class:"contained"},[tt()])])])]),Et=t=>[{uri:`${t}/overlay-test`,component:Ot()}],y="docs",Ut=()=>new N({title:"Documentation",basePath:y,routes:Et(y),switch:zt(y),links:Lt(y)});export{Ut as DocumentationPage,Ut as default};
