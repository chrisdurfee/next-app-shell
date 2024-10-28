import{O as G,A as R}from"./overlay-C095Rrfn.js";import{X as l,m as n,q as C,y as M,S as g,w as $,R as w,a as W,D as Y,H as V,b as X,p as _,c as q,U as f,I as B,B as F,d as J,C as D,e as m,A as K,f as a,g as T,h as Q,i as P,V as z,n as Z,j as tt,P as v,T as E,M as H,k as et,G as ot}from"./index-FS2XXu8c.js";const nt=t=>n({class:"flex items-center justify-center h-6 w-6 mr-3"},[C({html:t})]),st=t=>M({class:"font-semibold text-muted-foreground"},t),at=t=>g({class:"text-sm text-muted-foreground"},t),rt=l(({title:t,description:e,icon:o})=>n({class:"flex items-start p-4 border rounded-lg bg-muted/10 border-muted-foreground/20"},[o&&nt(o),n({class:"flex flex-col"},[st(t),at(e)])])),it=t=>V({class:"inline-flex flex-auto items-center justify-center whitespace-nowrap rounded-sm text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",dataSet:["selected",["state",t.value,"active"]]},[X({class:"flex flex-auto justify-center items-center px-3 py-1.5",onSet:["selected",{selected:t.value}],click:e=>t.callBack(t.value)},t.label)]),lt=(t,e)=>(t.callBack=e,it(t)),ct=t=>W({class:`tab items-center justify-center rounded-md bg-muted p-1 text-muted-foreground ${t.class}`},[Y({class:"flex flex-auto flex-row",map:[t.options,e=>lt(e,t.callBack)]})]);class L extends ${render(){const e=this.select.bind(this);return n({class:""},[ct({class:this.class,options:this.options,callBack:e}),w({class:"tab-content",onState:["selected",this.updateContent.bind(this)]})])}afterSetup(){const e=this.options[0].value;this.select(e)}update(){const e=this.state.get("selected");this.select(null),this.select(e)}select(e){this.state.selected=e}updateContent(e){const o=this.options;if(!o||o.length<1)return;const r=o[0];for(const p of o)if(p.value===e)return p.layout;return r.layout}setupStates(){const e=this.callBack,o=typeof e;return{selected:{state:null,callBack(r){o==="function"&&e(r)}}}}}const dt=l((t,e)=>_({class:"flex p-4 min-h-[350px] max-h-[650px] overflow-x-auto rounded-lg border bg-muted whitespace-break-spaces cursor-pointer"},[q({class:"font-mono text-sm",click:()=>navigator.clipboard.writeText(e[0].textContent)},e)])),ut=l((t,e)=>n({class:"flex p-4 min-h-[350px] max-h-[650px] overflow-x-auto rounded-lg border bg-card"},[n({class:"preview flex w-full justify-center items-center"},e)])),j=l((t,e)=>n({class:"py-4"},e)),pt=t=>new L({class:"mt-4 max-w-[400px]",options:[{label:"Preview",value:"preview",layout:j([ut(t.preview)])},{label:"Code",value:"code",layout:j([dt(t.code)])}]}),mt=l(({title:t,description:e})=>f({class:"flex flex-col"},[B({class:"scroll-m-20 text-2xl font-bold tracking-tight"},t),e&&g({class:"text-base text-muted-foreground py-2 max-w-[700px]"},e)])),s=l((t,e)=>w({class:"py-4"},[mt({title:t.title,description:t.description}),pt({preview:t.preview,code:t.code})]));class gt extends F{render(){return J([n({class:"contained px-4 flex flex-auto flex-col"},this.children)])}}const ft=l(({title:t,description:e})=>f({class:"flex flex-col"},[D({class:"scroll-m-20 text-3xl font-bold tracking-tight"},t),g({class:"text-base text-muted-foreground py-2 max-w-[700px]"},e)])),bt=l((t,e)=>n({class:"contained py-8"},[ft(t),w({class:"pb-12 pt-8"},e)])),u=l((t,e)=>new gt([bt(t,e)])),xt=()=>u({title:"Alerts",description:"Alerts are used to provide feedback to the user about the outcome of an action or to inform them of important information."},[s({title:"Usage",description:"To use the Alert component, import it from the components library and use it in your application.",preview:[rt({title:"Heads up!",description:"You can add components to your app using the cli.",icon:m.information})],code:`import { Button } from '@components/atoms/form/input.js';
import { Icons } from "@components/icons/icons.js";

Alert({
    title: 'Heads up!',
    description: 'You can add components to your app using the cli.',
    icon: Icons.information
})`})]),ht=()=>u({title:"Cards",description:"Cards are a great way to display content in a concise and organized manner."},[s({title:"Usage",description:"Import the card atom and use it in your components. The avatar can be set to multiple sizes: xs, sm, lg, xl, 2xl, 3xl.",preview:[K({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN"})],code:`import { Button } from '@components/atoms/cards/card.js';

Avatar({
    src: 'https://github.com/shadcn.png',
    alt: '@shadcn',
    fallbackText: 'CN',
    size: 'md' // You can change the size to xs, sm, lg, xl, 2xl, 3xl
})`})]),I={gray:{backgroundColor:"bg-gray-50",textColor:"text-gray-600",ringColor:"ring-gray-500/10"},red:{backgroundColor:"bg-red-50",textColor:"text-red-700",ringColor:"ring-red-600/10"},yellow:{backgroundColor:"bg-yellow-50",textColor:"text-yellow-800",ringColor:"ring-yellow-600/20"},green:{backgroundColor:"bg-green-50",textColor:"text-green-700",ringColor:"ring-green-600/20"},blue:{backgroundColor:"bg-blue-50",textColor:"text-blue-700",ringColor:"ring-blue-700/10"},indigo:{backgroundColor:"bg-indigo-50",textColor:"text-indigo-700",ringColor:"ring-indigo-700/10"},purple:{backgroundColor:"bg-purple-50",textColor:"text-purple-700",ringColor:"ring-purple-700/10"},pink:{backgroundColor:"bg-pink-50",textColor:"text-pink-700",ringColor:"ring-pink-700/10"},primary:{backgroundColor:"bg-primary",textColor:"text-primary-foreground",ringColor:"ring-primary/10"},secondary:{backgroundColor:"bg-secondary",textColor:"text-secondary-foreground",ringColor:"ring-secondary/10"},destructive:{backgroundColor:"bg-destructive",textColor:"text-destructive-foreground",ringColor:"ring-destructive/10"},warning:{backgroundColor:"bg-warning",textColor:"text-warning-foreground",ringColor:"ring-warning/10"},outline:{backgroundColor:"bg-background",textColor:"text-primary",ringColor:"ring-input"},ghost:{backgroundColor:"bg-background",textColor:"text-primary",ringColor:"ring-background"},link:{backgroundColor:"bg-background",textColor:"text-primary",ringColor:"ring-background"}},yt=t=>I[t]||I.gray,vt=t=>{const{backgroundColor:e,textColor:o,ringColor:r}=yt(t);return`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors ${e} ${o} ${r}`},i=l((t,e)=>{const o=vt(t==null?void 0:t.type);return M({...t,class:o},e)}),wt=()=>u({title:"Badges",description:"Badges can be used to display a status or a count."},[s({title:"Badge",description:"This is a badge.",preview:[n({class:"flex gap-2 flex-wrap"},[i({type:"gray"},"Text"),i({type:"red"},"Text"),i({type:"yellow"},"Text"),i({type:"green"},"Text"),i({type:"blue"},"Text"),i({type:"indigo"},"Text"),i({type:"purple"},"Text"),i({type:"pink"},"Text"),i({type:"primary"},"Text"),i({type:"secondary"},"Text"),i({type:"destructive"},"Text"),i({type:"warning"},"Text"),i({type:"outline"},"Text"),i({type:"ghost"},"Text"),i({type:"link"},"Text")])],code:`
import { Button } from '@components/atoms/badges/badges.js';
import { Atom } from '@base-framework/base';

export const PrimaryBadge = Atom((props, children)) => (
    Badge({ ...props, type: 'gray' }, children)
);`})]),kt=()=>u({title:"Button",description:"Displays a button or a component that looks like a button."},[s({title:"Usage",description:"Import the button atom and use it in your components. This platform has variants for different use cases. The variant can be set using the `variant` prop.",preview:[a({variant:"primary"},"Click Me")],code:`import { Button } from '@components/atoms/buttons/buttons.js';

Button({ ...props, variant: 'secondary' }, primary)`}),f({class:"flex flex-col py-8"},[T({class:"text-3xl font-bold tracking-tight border-b pb-2"},"Variants")]),s({title:"Primary Button",description:"This is a primary button.",preview:[a({variant:"primary"},"Click Me")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const PrimaryButton = Atom((props, children)) => (
    Button({ ...props, variant: 'primary' }, children)
);`}),s({title:"Secondary Button",preview:[a({variant:"secondary"},"Secondary")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const SecondaryButton = Atom((props, children)) => (
    Button({ ...props, variant: 'secondary' }, children)
);`}),s({title:"Destructive Button",preview:[a({variant:"destructive"},"Destructive")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const DestructiveButton = Atom((props, children)) => (
    Button({ ...props, variant: 'destructive' }, children)
);`}),s({title:"Warning Button",preview:[a({variant:"warning"},"Warning")],code:`import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const WarningButton = Atom((props, children)) => (
    Button({ ...props, variant: 'warning' }, children)
);`}),s({title:"Outline Button",preview:[a({variant:"outline"},"Outline")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const OutlineButton = Atom((props, children)) => (
    Button({ ...props, variant: 'outline' }, children)
);`}),s({title:"Ghost Button",preview:[a({variant:"ghost"},"Ghost")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const GhostButton = Atom((props, children)) => (
    Button({ ...props, variant: 'ghost' }, children)
);`}),s({title:"Link Button",preview:[a({variant:"link"},"Link")],code:`
import { Button } from '@components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const LinkButton = Atom((props, children)) => (
    Button({ ...props, variant: 'link' }, children)
);`}),s({title:"Icon Button",description:"Displays a button with an icon.",preview:[a({variant:"icon",icon:m.home})],code:`import { Button } from '@components/atoms/buttons/buttons.js';
import { Icons } from '@components/icons/icons.js';
import { Atom } from '@base-framework/base';

export const IconButton = Atom((props)) => (
    Button({ ...props, variant: 'icon', icon: Icons.home })
);`}),s({title:"With Icon Button",preview:[a({variant:"withIcon",icon:m.home},"With Icon")],code:`import { Button } from '@components/atoms/buttons/buttons.js';

Button({ variant: 'withIcon', icon: Icons.home }, 'With Icon')`})]),Ct=l((t,e)=>n({...t,class:`rounded-lg border bg-card text-card-foreground shadow-md min-w-[120px] min-h-[80px] my-5 mx-5 p-4 ${t.class||""}`,children:e})),Bt=()=>u({title:"Cards",description:"Cards are a great way to display content in a concise and organized manner."},[s({title:"Usage",description:"Import the card atom and use it in your components.",preview:[Ct()],code:`import { Button } from '@components/atoms/cards/card.js';

Card()`})]),Tt=t=>Q.render(t,document.body),jt=({title:t})=>f({class:"flex flex-auto items-center"},[T({class:"text-lg font-semibold"},t)]),It=l((t,e)=>P({class:"flex flex-auto flex-col fixed z-30 w-full max-w-lg gap-4 border bg-background text-foreground p-6 shadow-lg duration-200 sm:rounded-lg",click:t.click,aria:{expanded:["open"]}},[n({class:"flex flex-auto flex-col space-y-2"},[jt(t),n({class:"flex flex-auto flex-col text-sm text-muted-foreground"},e)]),z({class:"flex flex-col-reverse sm:flex-row sm:justify-end mt-6 gap-2 sm:gap-0 sm:space-x-2"},t.buttons)]));class O extends ${render(){const e=p=>{p.target===this.panel&&this.close()},o=this.getMainClass(),r=this.title||"Are you abosolutely sure?";return It({class:o,title:r,click:e,buttons:this.getButtons()},this.description)}getButtons(){return[a({variant:"outline",click:()=>this.close()},"Cancel"),a({variant:"primary",click:()=>this.confirm()},"Save")]}setupStates(){return{open:!1}}confirm(){this.confirmed&&this.confirmed(),this.close()}getMainClass(){return""}open(){Tt(this),this.panel.showModal(),this.state.open=!0}close(){this.state.open=!1,this.panel.close(),this.destroy()}}const At=t=>a({text:"Open",class:"m-1",click:()=>new O(t).open()}),St=()=>u({title:"Dialog",description:"Displays a dialog or a component that looks like a dialog."},[s({title:"Usage",description:"Import the dialog atom and use it in your components.",preview:[At({title:"Are you absoultely sure?",description:"This action cannot be undone. This will permanently delete your account and remove your data from our servers.",confirmed:()=>console.log("Confirmed!")})],code:`import { Button } from '@components/molecules/dialogue.js';

new Dialog({
    title: 'Are you absoultely sure?',
    description: 'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
    confirmed: () => console.log('Confirmed!')
}).open()`})]),Mt=l(t=>Z({...t,class:`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${t.class||""}`})),$t=()=>u({title:"Inputs",description:"Inputs are essential for gathering user data in forms."},[s({title:"Usage",description:"Import the input atom and use it in your components. The input can be of various types: text, password, email, etc.",preview:[Mt({type:"text",placeholder:"Enter your text here...",change:t=>console.log(t.target.value)})],code:`import { Button } from '@components/atoms/form/input.js';

Input({
    type: 'text',
    placeholder: 'Enter your text here...',
    change: (e) => console.log(e.target.value)
})`})]),Dt=({title:t})=>f({class:"modal-header flex items-center"},[a({variant:"icon",icon:m.arrows.left,class:"mr-2 p-0 bg-transparent flex sm:hidden",click:(e,o)=>o.close()}),T({class:"text-lg font-semibold m-0"},t)]),Pt=l((t,e)=>P({class:`modal m-auto fixed z-20 grid w-full gap-4 border bg-background p-6 shadow-lg ${t.class}`,click:t.click},[n({class:"modal-content flex flex-auto flex-col"},[Dt(t),n({class:"modal-body flex flex-auto"},e),z({class:"modal-footer flex justify-between"},t.buttons)])]));class zt extends O{render(){const e=p=>{p.target===this.panel&&this.close()},o=this.getMainClass(),r=this.title||"Are you abosolutely sure?";return Pt({class:o,click:e,title:r,buttons:this.getButtons(),aria:{expanded:["open"]}},this.children)}getButtons(){return[a({variant:"outline",click:()=>this.close()},"Cancel"),a({variant:"primary",click:()=>this.confirm()},"Save")]}getSizeClass(){switch(this.size){case"sm":return"sm max-w-[646px]";case"lg":return"lg max-w-[900px]";case"xl":return"xl max-w-[1400px]";default:return"medium max-w-[760px]"}}getTypeClass(){switch(this.type){case"right":return"right right-0";case"left":return"left left-0";default:return""}}getMainClass(){return this.getSizeClass()+" "+this.getTypeClass()}}const b=[{label:"Large",buttonStyle:"primary",size:"lg"},{label:"Small",buttonStyle:"secondary",size:"sm"},{label:"Medium",buttonStyle:"destructive",size:"md"},{label:"XL",buttonStyle:"primary",size:"xl"},{label:"Right",buttonStyle:"ghost",type:"right"},{label:"Left",buttonStyle:"link",type:"left"}],x=({label:t,buttonStyle:e,size:o,type:r})=>a({text:t,class:`m-1 ${e}`,click:()=>new zt({title:"Are you absolutely sure?",size:o,type:r}).open()}),Et=()=>u({title:"Modals",description:"Displays a modal or a component that looks like a modal."},[s({title:"Extra Large Modal",description:"This is an extra large modal.",preview:[x(b[3])],code:`
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
});`}),s({title:"Large Modal",description:"This is a large modal.",preview:[x(b[0])],code:`
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
});`}),s({title:"Small Modal",preview:[x(b[1])],code:`
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
});`}),s({title:"Medium Modal",preview:[x(b[2])],code:`
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
});`}),s({title:"Right Modal",preview:[x(b[4])],code:`
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
});`})]),Ht=()=>u({title:"Notifications",description:"Displays a notification message to the user."},[s({title:"Usage",description:"Call 'notify' the gloabl notification container to display notifications.",preview:[a({click:()=>{app.notify({title:"Notification Title",description:"This is a notification.",icon:m.warning,type:"warning"})}},"Show")],code:`app.notify({
    title: 'Notification Title',
    description: 'This is a notification.',
    icon: Icons.warning,
    type: 'warning', // 'success', 'destructive', 'info', 'warning'
    duration: 5000 // in milliseconds, leave it blank for 4 seconds, infinite is also a value to prevent it from going away
})`})]),A=l((t,e)=>n({class:"py-4"},e)),Lt=()=>u({title:"Tabs",description:"Displays a tab or a component that looks like a tab."},[s({title:"Button Tab",description:"This is a button tab. The buttons to not route.",preview:[new L({class:"mt-4 max-w-[400px]",options:[{label:"Preview",value:"preview",layout:A([])},{label:"Code",value:"code",layout:A([])}]})],code:`
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
);`}),s({title:"Link Tab",description:"This is a link tab. The buttons route to a different page.",preview:[new tt({class:"max-w-[400px]",options:[{label:"Example 1",href:"docs/components/tabs/example-1",component:new v({class:"p-8"},"This is an example 1 tab panel.")},{label:"Example 2",href:"docs/components/tabs/example-2",component:new v({class:"p-8"},"This is an example 2 tab panel.")},{label:"Example 3",href:"docs/components/tabs/example-3",component:new v({class:"p-8"},"This is an example 3 tab panel.")}]})],code:`
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
);`})]),S=(t,e,o)=>(o="Icons"+(o?"."+o:""),n({class:"flex flex-auto flex-col items-center gap-2 max-w-[150px] h-[8.5rem] cursor-pointer"},[n({class:"flex flex-auto w-full h-full justify-center items-center flex-wrap rounded-lg border bg-card text-base shadow-sm",click:()=>{navigator.clipboard.writeText(`${o}.${e}`)}},[C({html:t})]),n({class:"text-muted-foreground"},e)])),U=(t,e,o)=>{const r=typeof t=="object";r&&e.push(g({class:"text-muted-foreground"},"path: "+o+".{icon}"));const p=[];if(e.push(n({class:"flex flex-auto flex-wrap gap-2 my-8"},p)),r===!1)p.push(S(t,o));else for(var h in t){if(t.hasOwnProperty(h)===!1)continue;const k=t[h];if(typeof k!="object"){p.push(S(k,h,o));continue}const N=`${o}.${h}`;U(k,e,N)}},Ot=t=>{if(!t||typeof t!="object")return;const e=[];for(let[o,r]of Object.entries(t)){if(o==="parse")continue;e.push(H({id:o.toLowerCase(),class:"text-2xl font-bold"},et.titleCase(o))),U(r,e,o)}return e},Ut=()=>u({title:"Icons",description:"The icons are from the Hericon library. They are SVG icons that can be used in your project. This icon set uses the outline style."},[E({href:"https://heroicons.com/",target:"_blank",class:"bttn link"},"link: Hericons"),s({title:"Icons",description:"This is an icon.",preview:[C({html:m.home})],code:`
import { Icons } from '@components/icons/icons.js';
import { I } from '@base-framework/atoms';

export const HomeIcon = () => (
    I({ html: Icons.home} )
);`}),n({class:"my-20"},[B({class:"text-2xl font-bold"},"Default Icons"),g({class:"text-muted-foreground"},'A few of the icons have been saved to the "Icons" object. You can use these icons in your project. Click to copy the Icon path. Here is a list of the icons that are available:')]),Ot(m)]),Nt=()=>u({title:"Introduction",description:"This app shell was created to showcase Base framework and its components and atoms. It is a simple app shell that can be used as a starting point for your project. It is built with Tailwind CSS and uses Shadcn as the inspiration for the theme and many of it's components. "}),Gt=t=>n({class:"flex flex-auto flex-col items-center gap-2 max-w-[150px] h-[8.5rem] cursor-pointer"},[n({class:`flex flex-auto w-full h-full min-h-[136px] justify-center items-center flex-wrap rounded-lg border text-base shadow-sm ${t.class}`,click:()=>{navigator.clipboard.writeText(`${t.class}`)}}),n({class:"text-sm text-muted-foreground"},t.var)]),c=(t,e)=>w({class:"flex flex-auto flex-col gap-2"},[g({class:"text-base text-muted-foreground"},t),n({class:"flex flex-auto flex-wrap gap-2 my-2",map:[e,Gt]})]),Rt=t=>n({class:"flex flex-auto flex-col gap-12"},[H({class:"text-2xl font-bold"},"Color Guide"),c("Default background color of <body />...etc",[{var:"--backround",class:"bg-backround"},{var:"--foreground",class:"bg-foreground"}]),c("Muted backgrounds such as <TabsList />, <Skeleton /> and <Switch />",[{var:"--muted",class:"bg-muted"},{var:"--muted-foreground",class:"bg-muted-forground"}]),c("Background color for <Card />",[{var:"--card",class:"bg-card"},{var:"--card-foreground",class:"bg-card-foreground"}]),c("Background color for popovers such as <DropdownMenu />, <HoverCard />, <Popover />",[{var:"--popover",class:"bg-popover"},{var:"--popover-foreground",class:"bg-popover-foreground"}]),c("Default border color",[{var:"--border",class:"bg-border"}]),c("Border color for inputs such as <Input />, <Select />, <Textarea />",[{var:"--input",class:"bg-input"}]),c("Primary colors for <Button />",[{var:"--primary",class:"bg-primary"},{var:"--primary-foreground",class:"bg-primary-foreground"}]),c("Secondary colors for <Button />",[{var:"--secondary",class:"bg-secondary"},{var:"--secondary-foreground",class:"bg-secondary-foreground"}]),c("Used for accents such as hover effects on <DropdownMenuItem>, <SelectItem>...etc",[{var:"--accent",class:"bg-accent"},{var:"--accent-foreground",class:"bg-accent-foreground"}]),c('Used for destructive actions such as <Button variant="destructive">',[{var:"--destructive",class:"bg-destructive"},{var:"--destructive-foreground",class:"bg-destructive-foreground"}]),c('Used for warning actions such as <Button variant="warning">',[{var:"--warning",class:"bg-warning"},{var:"--warning-foreground",class:"bg-warning-foreground"}]),c("Used for focus ring",[{var:"--ring",class:"bg-ring"}]),c("Border radius for card, input and buttons",[{var:"--radius",class:"bg-radius"}])]),Wt=()=>u({title:"Theme",description:"The theme is using Tailwind CSS and is based on Shadcn UI. The theme is customizable and can be extended. It comes with light and dark theme support."},[E({href:"https://ui.shadcn.com/docs/theming",target:"_blank",class:"bttn link"},"link: Shadcn"),n({class:"my-20"},[B({class:"text-2xl font-bold"},"Default Styles"),g({class:"text-muted-foreground"},"The default styles are defined in the Tailwind CSS configuration file and in the base CSS file. Here's the list of variables available for customization:")]),Rt()]),d=(t,e,o)=>({uri:t,title:e,component:o()}),Yt=t=>[d(`${t}`,"Introduction",Nt),d(`${t}/theme`,"Theme",Wt),d(`${t}/icons`,"Icons",Ut),d(`${t}/components/buttons*`,"Buttons",kt),d(`${t}/components/badges*`,"Badges",wt),d(`${t}/components/tabs*`,"Tabs",Lt),d(`${t}/components/modals*`,"Modals",Et),d(`${t}/components/notifications*`,"Notifications",Ht),d(`${t}/components/dialogs*`,"Modals",St),d(`${t}/components/cards*`,"Cards",Bt),d(`${t}/components/avatars*`,"Avatars",ht),d(`${t}/components/inputs*`,"Inputs",$t),d(`${t}/components/alerts*`,"Alerts",xt)],Vt=t=>[{href:`${t}`,label:"Introduction",exact:!0},{href:`${t}/theme`,label:"Theme",exact:!0},{href:`${t}/icons`,label:"Icons"},{group:"Components",options:[{label:"Buttons",href:`${t}/components/buttons`},{label:"Badges",href:`${t}/components/badges`},{label:"Tabs",href:`${t}/components/tabs`},{label:"Modals",href:`${t}/components/modals`},{label:"Notifications",href:`${t}/components/notifications`},{label:"Dialogs",href:`${t}/components/dialogs`},{label:"Cards",href:`${t}/components/cards`},{label:"Avatars",href:`${t}/components/avatars`},{label:"Inputs",href:`${t}/components/inputs`},{label:"Alerts",href:`${t}/components/alerts`}]}],Xt=()=>new G({backHref:"aside/"},[new v([n([f([D("Overlay")]),n({class:"contained"},[ot()])])])]),_t=t=>[{uri:`${t}/overlay-test`,component:Xt()}],y="docs",Jt=()=>new R({title:"Documentation",basePath:y,routes:_t(y),switch:Yt(y),links:Vt(y)});export{Jt as DocumentationPage,Jt as default};
