import{O as G,A as R}from"./overlay-CvTFc-5Z.js";import{X as l,m as s,k as W,y as M,w as A,R as v,a as V,D as F,H as X,b as Y,p as _,c as q,U as f,I as B,S as b,B as J,d as K,C as $,e as r,f as T,g as m,h as Q,i as D,V as P,j as Z,P as y,T as z,q as L,M as O,l as tt,G as et}from"./index-DWXkjpB1.js";const ot=l(({src:t,alt:e})=>W({class:"absolute w-full h-full rounded-full object-cover fadeIn",src:t,alt:e,error:o=>o.target.style.display="none"})),st=t=>s({class:"flex items-center justify-center w-full h-full rounded-full bg-muted text-muted-foreground font-medium"},[M(t)]),at=t=>{switch(t){case"xs":return"h-6 w-6";case"sm":return"h-8 w-8";case"md":return"h-12 w-12";case"lg":return"h-16 w-16";case"xl":return"h-24 w-24";case"2xl":return"h-32 w-32";case"3xl":return"h-48 w-48";default:return"h-12 w-12"}},nt=l(({src:t,alt:e,fallbackText:o,size:n})=>(n=at(n),s({class:`relative flex items-center justify-center ${n}`},[ot({src:t,alt:e}),st(o)]))),rt=t=>X({class:"inline-flex flex-auto items-center justify-center whitespace-nowrap rounded-sm text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",dataSet:["selected",["state",t.value,"active"]]},[Y({class:"flex flex-auto justify-center items-center px-3 py-1.5",onSet:["selected",{selected:t.value}],click:e=>t.callBack(t.value)},t.label)]),lt=(t,e)=>(t.callBack=e,rt(t)),it=t=>V({class:`tab items-center justify-center rounded-md bg-muted p-1 text-muted-foreground ${t.class}`},[F({class:"flex flex-auto flex-row",map:[t.options,e=>lt(e,t.callBack)]})]);class E extends A{render(){const e=this.select.bind(this);return s({class:""},[it({class:this.class,options:this.options,callBack:e}),v({class:"tab-content",onState:["selected",this.updateContent.bind(this)]})])}afterSetup(){const e=this.options[0].value;this.select(e)}update(){const e=this.state.get("selected");this.select(null),this.select(e)}select(e){this.state.selected=e}updateContent(e){const o=this.options;if(!o||o.length<1)return;const n=o[0];for(const c of o)if(c.value===e)return c.layout;return n.layout}setupStates(){const e=this.callBack,o=typeof e;return{selected:{state:null,callBack(n){o==="function"&&e(n)}}}}}const ct=l((t,e)=>_({class:"flex p-4 min-h-[350px] max-h-[650px] overflow-x-auto rounded-lg border bg-muted whitespace-break-spaces cursor-pointer"},[q({class:"font-mono text-sm",click:()=>navigator.clipboard.writeText(e[0].textContent)},e)])),dt=l((t,e)=>s({class:"flex p-4 min-h-[350px] max-h-[650px] overflow-x-auto rounded-lg border bg-card"},[s({class:"preview flex w-full justify-center items-center"},e)])),C=l((t,e)=>s({class:"py-4"},e)),ut=t=>new E({class:"mt-4 max-w-[400px]",options:[{label:"Preview",value:"preview",layout:C([dt(t.preview)])},{label:"Code",value:"code",layout:C([ct(t.code)])}]}),pt=l(({title:t,description:e})=>f({class:"flex flex-col"},[B({class:"scroll-m-20 text-2xl font-bold tracking-tight"},t),e&&b({class:"text-base text-muted-foreground py-2 max-w-[700px]"},e)])),a=l((t,e)=>v({class:"py-4"},[pt({title:t.title,description:t.description}),ut({preview:t.preview,code:t.code})]));class mt extends J{render(){return K([s({class:"contained px-4 flex flex-auto flex-col"},this.children)])}}const ft=l(({title:t,description:e})=>f({class:"flex flex-col"},[$({class:"scroll-m-20 text-3xl font-bold tracking-tight"},t),b({class:"text-base text-muted-foreground py-2 max-w-[700px]"},e)])),bt=l((t,e)=>s({class:"contained py-8"},[ft(t),v({class:"pb-12 pt-8"},e)])),u=l((t,e)=>new mt([bt(t,e)])),gt=()=>u({title:"Cards",description:"Cards are a great way to display content in a concise and organized manner."},[a({title:"Usage",description:"Import the card atom and use it in your components. The avatar can be set to multiple sizes: xs, sm, lg, xl, 2xl, 3xl.",preview:[nt({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN"})],code:`import { Button } from '@components/atoms/cards/card.js';

Avatar({
    src: 'https://github.com/shadcn.png',
    alt: '@shadcn',
    fallbackText: 'CN',
    size: 'md' // You can change the size to xs, sm, lg, xl, 2xl, 3xl
})`})]),j={gray:{backgroundColor:"bg-gray-50",textColor:"text-gray-600",ringColor:"ring-gray-500/10"},red:{backgroundColor:"bg-red-50",textColor:"text-red-700",ringColor:"ring-red-600/10"},yellow:{backgroundColor:"bg-yellow-50",textColor:"text-yellow-800",ringColor:"ring-yellow-600/20"},green:{backgroundColor:"bg-green-50",textColor:"text-green-700",ringColor:"ring-green-600/20"},blue:{backgroundColor:"bg-blue-50",textColor:"text-blue-700",ringColor:"ring-blue-700/10"},indigo:{backgroundColor:"bg-indigo-50",textColor:"text-indigo-700",ringColor:"ring-indigo-700/10"},purple:{backgroundColor:"bg-purple-50",textColor:"text-purple-700",ringColor:"ring-purple-700/10"},pink:{backgroundColor:"bg-pink-50",textColor:"text-pink-700",ringColor:"ring-pink-700/10"}},xt=t=>j[t]||j.gray,ht=t=>{const{backgroundColor:e,textColor:o,ringColor:n}=xt(t);return`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${e} ${o} ${n}`},p=l((t,e)=>{const o=ht(t==null?void 0:t.type);return M({...t,class:o},e)}),wt=()=>u({title:"Badges",description:"Badges can be used to display a status or a count."},[a({title:"Badge",description:"This is a badge.",preview:[s({class:"flex gap-2"},[p({type:"gray"},"Text"),p({type:"red"},"Text"),p({type:"yellow"},"Text"),p({type:"green"},"Text"),p({type:"blue"},"Text"),p({type:"indigo"},"Text"),p({type:"purple"},"Text"),p({type:"pink"},"Text")])],code:`
import { Button } from '@components/atoms/badges/badges.js';
import { Atom } from '@base-framework/base';

export const PrimaryBadge = Atom((props, children)) => (
    Badge({ ...props, type: 'gray' }, children)
);`})]),yt=()=>u({title:"Button",description:"Displays a button or a component that looks like a button."},[a({title:"Usage",description:"Import the button atom and use it in your components. This platform has variants for different use cases. The variant can be set using the `variant` prop.",preview:[r({variant:"primary"},"Click Me")],code:`import { Button } from '@components/atoms/buttons/buttons.js';

Button({ ...props, variant: 'secondary' }, primary)`}),f({class:"flex flex-col py-8"},[T({class:"text-3xl font-bold tracking-tight border-b pb-2"},"Variants")]),a({title:"Primary Button",description:"This is a primary button.",preview:[r({variant:"primary"},"Click Me")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const PrimaryButton = Atom((props, children)) => (
    Button({ ...props, variant: 'primary' }, children)
);`}),a({title:"Secondary Button",preview:[r({variant:"secondary"},"Secondary")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const SecondaryButton = Atom((props, children)) => (
    Button({ ...props, variant: 'secondary' }, children)
);`}),a({title:"Destructive Button",preview:[r({variant:"destructive"},"Destructive")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const DestructiveButton = Atom((props, children)) => (
    Button({ ...props, variant: 'destructive' }, children)
);`}),a({title:"Warning Button",preview:[r({variant:"warning"},"Warning")],code:`import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const WarningButton = Atom((props, children)) => (
    Button({ ...props, variant: 'warning' }, children)
);`}),a({title:"Outline Button",preview:[r({variant:"outline"},"Outline")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const OutlineButton = Atom((props, children)) => (
    Button({ ...props, variant: 'outline' }, children)
);`}),a({title:"Ghost Button",preview:[r({variant:"ghost"},"Ghost")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const GhostButton = Atom((props, children)) => (
    Button({ ...props, variant: 'ghost' }, children)
);`}),a({title:"Link Button",preview:[r({variant:"link"},"Link")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const LinkButton = Atom((props, children)) => (
    Button({ ...props, variant: 'link' }, children)
);`}),a({title:"Icon Button",description:"Displays a button with an icon.",preview:[r({variant:"icon",icon:m.home})],code:`import { Button } from '@components/atoms/buttons/buttons.js';
import { Icons } from '@components/icons/icons.js';
import { Atom } from '@base-framework/base';

export const IconButton = Atom((props)) => (
    Button({ ...props, variant: 'icon', icon: Icons.home })
);`}),a({title:"With Icon Button",preview:[r({variant:"withIcon",icon:m.home},"With Icon")],code:`import { Button } from '@components/atoms/buttons/buttons.js';

Button({ variant: 'withIcon', icon: Icons.home }, 'With Icon')`})]),vt=l((t,e)=>s({...t,class:`rounded-lg border bg-card text-card-foreground shadow-md min-w-[120px] min-h-[80px] my-5 mx-5 p-4 ${t.class||""}`,children:e})),kt=()=>u({title:"Cards",description:"Cards are a great way to display content in a concise and organized manner."},[a({title:"Usage",description:"Import the card atom and use it in your components.",preview:[vt()],code:`import { Button } from '@components/atoms/cards/card.js';

Card()`})]),Bt=t=>Q.render(t,document.body),Tt=({title:t})=>f({class:"flex flex-auto items-center"},[T({class:"text-lg font-semibold"},t)]),Ct=l((t,e)=>D({class:"flex flex-auto flex-col fixed z-30 w-full max-w-lg gap-4 border bg-background text-foreground p-6 shadow-lg duration-200 sm:rounded-lg",click:t.click,aria:{expanded:["open"]}},[s({class:"flex flex-auto flex-col space-y-2"},[Tt(t),s({class:"flex flex-auto flex-col text-sm text-muted-foreground"},e)]),P({class:"flex flex-col-reverse sm:flex-row sm:justify-end mt-6 gap-2 sm:gap-0 sm:space-x-2"},t.buttons)]));class H extends A{render(){const e=c=>{c.target===this.panel&&this.close()},o=this.getMainClass(),n=this.title||"Are you abosolutely sure?";return Ct({class:o,title:n,click:e,buttons:this.getButtons()},this.description)}getButtons(){return[r({variant:"outline",click:()=>this.close()},"Cancel"),r({variant:"primary",click:()=>this.confirm()},"Save")]}setupStates(){return{open:!1}}confirm(){this.confirmed&&this.confirmed(),this.close()}getMainClass(){return""}open(){Bt(this),this.panel.showModal(),this.state.open=!0}close(){this.state.open=!1,this.panel.close(),this.destroy()}}const jt=t=>r({text:"Open",class:"m-1",click:()=>new H(t).open()}),It=()=>u({title:"Dialog",description:"Displays a dialog or a component that looks like a dialog."},[a({title:"Usage",description:"Import the dialog atom and use it in your components.",preview:[jt({title:"Are you absoultely sure?",description:"This action cannot be undone. This will permanently delete your account and remove your data from our servers.",confirmed:()=>console.log("Confirmed!")})],code:`import { Button } from '@components/molecules/dialogue.js';

new Dialog({
    title: 'Are you absoultely sure?',
    description: 'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
    confirmed: () => console.log('Confirmed!')
}).open()`})]),St=({title:t})=>f({class:"modal-header flex items-center"},[r({variant:"icon",icon:m.arrows.left,class:"mr-2 p-0 bg-transparent flex sm:hidden",click:(e,o)=>o.close()}),T({class:"text-lg font-semibold m-0"},t)]),Mt=l((t,e)=>D({class:`modal m-auto fixed z-20 grid w-full gap-4 border bg-background p-6 shadow-lg ${t.class}`,click:t.click},[s({class:"modal-content flex flex-auto flex-col"},[St(t),s({class:"modal-body flex flex-auto"},e),P({class:"modal-footer flex justify-between"},t.buttons)])]));class At extends H{render(){const e=c=>{c.target===this.panel&&this.close()},o=this.getMainClass(),n=this.title||"Are you abosolutely sure?";return Mt({class:o,click:e,title:n,buttons:this.getButtons(),aria:{expanded:["open"]}},this.children)}getButtons(){return[r({variant:"outline",click:()=>this.close()},"Cancel"),r({variant:"primary",click:()=>this.confirm()},"Save")]}getSizeClass(){switch(this.size){case"sm":return"sm max-w-[646px]";case"lg":return"lg max-w-[900px]";case"xl":return"xl max-w-[1400px]";default:return"medium max-w-[760px]"}}getTypeClass(){switch(this.type){case"right":return"right right-0";case"left":return"left left-0";default:return""}}getMainClass(){return this.getSizeClass()+" "+this.getTypeClass()}}const g=[{label:"Large",buttonStyle:"primary",size:"lg"},{label:"Small",buttonStyle:"secondary",size:"sm"},{label:"Medium",buttonStyle:"destructive",size:"md"},{label:"XL",buttonStyle:"primary",size:"xl"},{label:"Right",buttonStyle:"ghost",type:"right"},{label:"Left",buttonStyle:"link",type:"left"}],x=({label:t,buttonStyle:e,size:o,type:n})=>r({text:t,class:`m-1 ${e}`,click:()=>new At({title:"Are you absolutely sure?",size:o,type:n}).open()}),$t=()=>u({title:"Modals",description:"Displays a modal or a component that looks like a modal."},[a({title:"Extra Large Modal",description:"This is an extra large modal.",preview:[x(g[3])],code:`
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
});`}),a({title:"Large Modal",description:"This is a large modal.",preview:[x(g[0])],code:`
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
});`}),a({title:"Small Modal",preview:[x(g[1])],code:`
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
});`}),a({title:"Medium Modal",preview:[x(g[2])],code:`
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
});`}),a({title:"Right Modal",preview:[x(g[4])],code:`
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
});`})]),Dt=()=>u({title:"Notifications",description:"Displays a notification message to the user."},[a({title:"Usage",description:"Call 'notify' the gloabl notification container to display notifications.",preview:[r({click:()=>{app.notify({title:"Notification Title",description:"This is a notification.",icon:m.warning,type:"warning"})}},"Show")],code:`app.notify({
    title: 'Notification Title',
    description: 'This is a notification.',
    icon: Icons.warning,
    type: 'warning', // 'success', 'destructive', 'info', 'warning'
    duration: 5000 // in milliseconds, leave it blank for 4 seconds, infinite is also a value to prevent it from going away
})`})]),I=l((t,e)=>s({class:"py-4"},e)),Pt=()=>u({title:"Tabs",description:"Displays a tab or a component that looks like a tab."},[a({title:"Button Tab",description:"This is a button tab. The buttons to not route.",preview:[new E({class:"mt-4 max-w-[400px]",options:[{label:"Preview",value:"preview",layout:I([])},{label:"Code",value:"code",layout:I([])}]})],code:`
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
);`}),a({title:"Link Tab",description:"This is a link tab. The buttons route to a different page.",preview:[new Z({class:"max-w-[400px]",options:[{label:"Example 1",href:"docs/components/tabs/example-1",component:new y({class:"p-8"},"This is an example 1 tab panel.")},{label:"Example 2",href:"docs/components/tabs/example-2",component:new y({class:"p-8"},"This is an example 2 tab panel.")},{label:"Example 3",href:"docs/components/tabs/example-3",component:new y({class:"p-8"},"This is an example 3 tab panel.")}]})],code:`
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
);`})]),S=(t,e,o)=>(o="Icons"+(o?"."+o:""),s({class:"flex flex-auto flex-col items-center gap-2 max-w-[150px] h-[8.5rem] cursor-pointer"},[s({class:"flex flex-auto w-full h-full justify-center items-center flex-wrap rounded-lg border bg-card text-base shadow-sm",click:()=>{navigator.clipboard.writeText(`${o}.${e}`)}},[L({html:t})]),s({class:"text-muted-foreground"},e)])),N=(t,e,o)=>{const n=typeof t=="object";n&&e.push(b({class:"text-muted-foreground"},"path: "+o+".{icon}"));const c=[];if(e.push(s({class:"flex flex-auto flex-wrap gap-2 my-8"},c)),n===!1)c.push(S(t,o));else for(var h in t){if(t.hasOwnProperty(h)===!1)continue;const k=t[h];if(typeof k!="object"){c.push(S(k,h,o));continue}const U=`${o}.${h}`;N(k,e,U)}},zt=t=>{if(!t||typeof t!="object")return;const e=[];for(let[o,n]of Object.entries(t)){if(o==="parse")continue;e.push(O({id:o.toLowerCase(),class:"text-2xl font-bold"},tt.titleCase(o))),N(n,e,o)}return e},Lt=()=>u({title:"Icons",description:"The icons are from the Hericon library. They are SVG icons that can be used in your project. This icon set uses the outline style."},[z({href:"https://heroicons.com/",target:"_blank",class:"bttn link"},"link: Hericons"),a({title:"Icons",description:"This is an icon.",preview:[L({html:m.home})],code:`
import { Icons } from '@components/icons/icons.js';
import { I } from '@base-framework/atoms';

export const HomeIcon = () => (
    I({ html: Icons.home} )
);`}),s({class:"my-20"},[B({class:"text-2xl font-bold"},"Default Icons"),b({class:"text-muted-foreground"},'A few of the icons have been saved to the "Icons" object. You can use these icons in your project. Click to copy the Icon path. Here is a list of the icons that are available:')]),zt(m)]),Ot=()=>u({title:"Introduction",description:"This app shell was created to showcase Base framework and its components and atoms. It is a simple app shell that can be used as a starting point for your project. It is built with Tailwind CSS and uses Shadcn as the inspiration for the theme and many of it's components. "}),Et=t=>s({class:"flex flex-auto flex-col items-center gap-2 max-w-[150px] h-[8.5rem] cursor-pointer"},[s({class:`flex flex-auto w-full h-full min-h-[136px] justify-center items-center flex-wrap rounded-lg border text-base shadow-sm ${t.class}`,click:()=>{navigator.clipboard.writeText(`${t.class}`)}}),s({class:"text-sm text-muted-foreground"},t.var)]),i=(t,e)=>v({class:"flex flex-auto flex-col gap-2"},[b({class:"text-base text-muted-foreground"},t),s({class:"flex flex-auto flex-wrap gap-2 my-2",map:[e,Et]})]),Ht=t=>s({class:"flex flex-auto flex-col gap-12"},[O({class:"text-2xl font-bold"},"Color Guide"),i("Default background color of <body />...etc",[{var:"--backround",class:"bg-backround"},{var:"--foreground",class:"bg-foreground"}]),i("Muted backgrounds such as <TabsList />, <Skeleton /> and <Switch />",[{var:"--muted",class:"bg-muted"},{var:"--muted-foreground",class:"bg-muted-forground"}]),i("Background color for <Card />",[{var:"--card",class:"bg-card"},{var:"--card-foreground",class:"bg-card-foreground"}]),i("Background color for popovers such as <DropdownMenu />, <HoverCard />, <Popover />",[{var:"--popover",class:"bg-popover"},{var:"--popover-foreground",class:"bg-popover-foreground"}]),i("Default border color",[{var:"--border",class:"bg-border"}]),i("Border color for inputs such as <Input />, <Select />, <Textarea />",[{var:"--input",class:"bg-input"}]),i("Primary colors for <Button />",[{var:"--primary",class:"bg-primary"},{var:"--primary-foreground",class:"bg-primary-foreground"}]),i("Secondary colors for <Button />",[{var:"--secondary",class:"bg-secondary"},{var:"--secondary-foreground",class:"bg-secondary-foreground"}]),i("Used for accents such as hover effects on <DropdownMenuItem>, <SelectItem>...etc",[{var:"--accent",class:"bg-accent"},{var:"--accent-foreground",class:"bg-accent-foreground"}]),i('Used for destructive actions such as <Button variant="destructive">',[{var:"--destructive",class:"bg-destructive"},{var:"--destructive-foreground",class:"bg-destructive-foreground"}]),i('Used for warning actions such as <Button variant="warning">',[{var:"--warning",class:"bg-warning"},{var:"--warning-foreground",class:"bg-warning-foreground"}]),i("Used for focus ring",[{var:"--ring",class:"bg-ring"}]),i("Border radius for card, input and buttons",[{var:"--radius",class:"bg-radius"}])]),Nt=()=>u({title:"Theme",description:"The theme is using Tailwind CSS and is based on Shadcn UI. The theme is customizable and can be extended. It comes with light and dark theme support."},[z({href:"https://ui.shadcn.com/docs/theming",target:"_blank",class:"bttn link"},"link: Shadcn"),s({class:"my-20"},[B({class:"text-2xl font-bold"},"Default Styles"),b({class:"text-muted-foreground"},"The default styles are defined in the Tailwind CSS configuration file and in the base CSS file. Here's the list of variables available for customization:")]),Ht()]),d=(t,e,o)=>({uri:t,title:e,component:o()}),Ut=t=>[d(`${t}`,"Introduction",Ot),d(`${t}/theme`,"Theme",Nt),d(`${t}/icons`,"Icons",Lt),d(`${t}/components/buttons*`,"Buttons",yt),d(`${t}/components/badges*`,"Badges",wt),d(`${t}/components/tabs*`,"Tabs",Pt),d(`${t}/components/modals*`,"Modals",$t),d(`${t}/components/notifications*`,"Notifications",Dt),d(`${t}/components/dialogs*`,"Modals",It),d(`${t}/components/cards*`,"Cards",kt),d(`${t}/components/avatars*`,"Avatars",gt)],Gt=t=>[{href:`${t}`,label:"Introduction",exact:!0},{href:`${t}/theme`,label:"Theme",exact:!0},{href:`${t}/icons`,label:"Icons"},{group:"Components",options:[{label:"Buttons",href:`${t}/components/buttons`},{label:"Badges",href:`${t}/components/badges`},{label:"Tabs",href:`${t}/components/tabs`},{label:"Modals",href:`${t}/components/modals`},{label:"Notifications",href:`${t}/components/notifications`},{label:"Dialogs",href:`${t}/components/dialogs`},{label:"Cards",href:`${t}/components/cards`},{label:"Avatars",href:`${t}/components/avatars`}]}],Rt=()=>new G({backHref:"aside/"},[new y([s([f([$("Overlay")]),s({class:"contained"},[et()])])])]),Wt=t=>[{uri:`${t}/overlay-test`,component:Rt()}],w="docs",Xt=()=>new R({title:"Documentation",basePath:w,routes:Wt(w),switch:Ut(w),links:Gt(w)});export{Xt as DocumentationPage,Xt as default};
