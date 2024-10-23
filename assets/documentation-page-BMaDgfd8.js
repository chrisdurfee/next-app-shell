import{B as i,O as z,A as L}from"./overlay-CpqaEfWh.js";import{a as r,y as E,w as M,m as s,R as B,b as O,D as G,H,c as x,p as R,d as F,U as h,I as S,S as w,B as V,F as q,C as I,h as N,e as v,f as U,V as Y,g as _,i as X,P as g,T as J,q as P,M as K,v as Q,G as W}from"./index-CqGpuTPA.js";const k={gray:{backgroundColor:"bg-gray-50",textColor:"text-gray-600",ringColor:"ring-gray-500/10"},red:{backgroundColor:"bg-red-50",textColor:"text-red-700",ringColor:"ring-red-600/10"},yellow:{backgroundColor:"bg-yellow-50",textColor:"text-yellow-800",ringColor:"ring-yellow-600/20"},green:{backgroundColor:"bg-green-50",textColor:"text-green-700",ringColor:"ring-green-600/20"},blue:{backgroundColor:"bg-blue-50",textColor:"text-blue-700",ringColor:"ring-blue-700/10"},indigo:{backgroundColor:"bg-indigo-50",textColor:"text-indigo-700",ringColor:"ring-indigo-700/10"},purple:{backgroundColor:"bg-purple-50",textColor:"text-purple-700",ringColor:"ring-purple-700/10"},pink:{backgroundColor:"bg-pink-50",textColor:"text-pink-700",ringColor:"ring-pink-700/10"}},Z=t=>k[t]||k.gray,tt=t=>{const{backgroundColor:e,textColor:o,ringColor:n}=Z(t);return`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${e} ${o} ${n}`},l=r((t,e)=>{const o=tt(t==null?void 0:t.type);return E({...t,class:o},e)}),et=t=>H({class:"inline-flex flex-auto items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",dataSet:["selected",["state",t.value,"active"]]},[x({class:"flex flex-auto justify-center items-center",onSet:["selected",{selected:t.value}],click:e=>t.callBack(t.value)},t.label)]),ot=(t,e)=>(t.callBack=e,et(t)),st=t=>O({class:`tab items-center justify-center rounded-md bg-muted p-1 text-muted-foreground ${t.class}`},[G({class:"flex flex-auto flex-row",map:[t.options,e=>ot(e,t.callBack)]})]);class $ extends M{render(){const e=this.select.bind(this);return s({class:""},[st({class:this.class,options:this.options,callBack:e}),B({class:"tab-content",onState:["selected",this.updateContent.bind(this)]})])}afterSetup(){const e=this.options[0].value;this.select(e)}update(){const e=this.state.get("selected");this.select(null),this.select(e)}select(e){this.state.selected=e}updateContent(e){const o=this.options;if(!o||o.length<1)return;const n=o[0];for(const c of o)if(c.value===e)return c.layout;return n.layout}setupStates(){const e=this.callBack,o=typeof e;return{selected:{state:null,callBack(n){o==="function"&&e(n)}}}}}const at=r((t,e)=>R({class:"flex p-4 min-h-[350px] max-h-[650px] overflow-x-auto rounded-lg border bg-muted whitespace-break-spaces cursor-pointer"},[F({class:"font-mono text-sm",click:()=>navigator.clipboard.writeText(e[0].textContent)},e)])),nt=r((t,e)=>s({class:"flex p-4 min-h-[350px] max-h-[650px] overflow-x-auto rounded-lg border bg-card"},[s({class:"preview flex w-full justify-center items-center"},e)])),T=r((t,e)=>s({class:"py-4"},e)),rt=t=>new $({class:"mt-4 max-w-[400px]",options:[{label:"Preview",value:"preview",layout:T([nt(t.preview)])},{label:"Code",value:"code",layout:T([at(t.code)])}]}),lt=r(({title:t,description:e})=>h({class:"flex flex-col"},[S({class:"scroll-m-20 text-2xl font-bold tracking-tight"},t),e&&w({class:"text-base text-muted-foreground py-2 max-w-[700px]"},e)])),a=r((t,e)=>B({class:"py-4"},[lt({title:t.title,description:t.description}),rt({preview:t.preview,code:t.code})]));class it extends V{render(){return q([s({class:"contained px-4 flex flex-auto flex-col"},this.children)])}}const ct=r(({title:t,description:e})=>h({class:"flex flex-col"},[I({class:"scroll-m-20 text-3xl font-bold tracking-tight"},t),w({class:"text-base text-muted-foreground py-2 max-w-[700px]"},e)])),pt=r((t,e)=>s({class:"contained py-8"},[ct(t),B({class:"pb-12 pt-8"},e)])),m=r((t,e)=>new it([pt(t,e)])),mt=()=>m({title:"Badges",description:"Badges can be used to display a status or a count."},[a({title:"Badge",description:"This is a badge.",preview:[s({class:"flex gap-2"},[l({type:"gray"},"Text"),l({type:"red"},"Text"),l({type:"yellow"},"Text"),l({type:"green"},"Text"),l({type:"blue"},"Text"),l({type:"indigo"},"Text"),l({type:"purple"},"Text"),l({type:"pink"},"Text")])],code:`
import { Button } from '../components/atoms/badges/badges.js';
import { Atom } from '@base-framework/base';

export const PrimaryBadge = Atom((props, children)) => (
    Badge({ ...props, type: 'gray' }, children)
);`})]),dt=()=>m({title:"Button",description:"Displays a button or a component that looks like a button."},[a({title:"Usage",description:"Import the button atom and use it in your components. This platform has variants for different use cases. The variant can be set using the `variant` prop.",preview:[i({variant:"primary"},"Click Me")],code:`import { Button } from '../components/atoms/buttons/buttons.js';

Button({ ...props, variant: 'secondary' }, primary)`}),a({title:"Primary Button",description:"This is a primary button.",preview:[i({variant:"primary"},"Click Me")],code:`
import { Button } from '../components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const PrimaryButton = Atom((props, children)) => (
    Button({ ...props, variant: 'primary' }, children)
);`}),a({title:"Secondary Button",preview:[i({variant:"secondary"},"Secondary")],code:`
import { Button } from '../components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const SecondaryButton = Atom((props, children)) => (
    Button({ ...props, variant: 'secondary' }, children)
);`}),a({title:"Destructive Button",preview:[i({variant:"destructive"},"Destructive")],code:`
import { Button } from '../components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const DestructiveButton = Atom((props, children)) => (
    Button({ ...props, variant: 'destructive' }, children)
);`}),a({title:"Outline Button",preview:[i({variant:"outline"},"Outline")],code:`
import { Button } from '../components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const OutlineButton = Atom((props, children)) => (
    Button({ ...props, variant: 'outline' }, children)
);`}),a({title:"Ghost Button",preview:[i({variant:"ghost"},"Ghost")],code:`
import { Button } from '../components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const GhostButton = Atom((props, children)) => (
    Button({ ...props, variant: 'ghost' }, children)
);`}),a({title:"Link Button",preview:[i({variant:"link"},"Link")],code:`
import { Button } from '../components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const LinkButton = Atom((props, children)) => (
    Button({ ...props, variant: 'link' }, children)
);`})]);class ut extends M{render(){const e=this.getModalClass();return N({class:`modal m-auto fixed z-50 grid w-full max-w-lg gap-4 border bg-background p-6 shadow-lg ${e}`,click:o=>{o.target===this.panel&&this.close()}},[s({class:"modal-content flex flex-auto flex-col"},[h({class:"modal-header flex items-center"},[x({class:"bttn icon mr-2 p-0 bg-transparent sm:hidden hover:bg-transparent",click:()=>this.close()},{html:v.arrows.left}),U({class:"modal-title m-0"},"Modal Title")]),s({class:"modal-body flex flex-auto"},""),Y({class:"modal-footer flex justify-between"},[x({class:"bttn ghost",click:()=>this.close()},"Cancel"),x({class:"bttn primary",click:()=>this.close()},"Save")])])])}getSizeClass(){switch(this.size){case"sm":return"sm max-w-[646px]";case"lg":return"lg max-w-[900px]";case"xl":return"xl max-w-[1400px]";default:return"medium max-w-[760px]"}}getTypeClass(){switch(this.type){case"right":return"right right-0";case"left":return"left left-0";default:return""}}getModalClass(){return this.getSizeClass()+" "+this.getTypeClass()}open(){_.render(this,document.body),this.panel.showModal()}close(){this.panel.close(),this.destroy()}}const d=[{label:"Large",buttonStyle:"primary",size:"lg"},{label:"Small",buttonStyle:"secondary",size:"sm"},{label:"Medium",buttonStyle:"destructive",size:"md"},{label:"XL",buttonStyle:"primary",size:"xl"},{label:"Right",buttonStyle:"ghost",type:"right"},{label:"Left",buttonStyle:"link",type:"left"}],u=({label:t,buttonStyle:e,size:o,type:n})=>i({text:t,class:`m-1 ${e}`,click:()=>new ut({size:o,type:n}).open()}),bt=()=>m({title:"Modals",description:"Displays a modal or a component that looks like a modal."},[a({title:"Extra Large Modal",description:"This is an extra large modal.",preview:[u(d[3])],code:`
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
		size: 'xl'
	}).open()
});`}),a({title:"Large Modal",description:"This is a large modal.",preview:[u(d[0])],code:`
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
		size: 'lg'
	}).open()
});`}),a({title:"Small Modal",preview:[u(d[1])],code:`
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
		size: 'sm'
	}).open()
});`}),a({title:"Medium Modal",preview:[u(d[2])],code:`
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
		size: 'md'
	}).open()
});`}),a({title:"Right Modal",preview:[u(d[4])],code:`
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
		type: 'right'
	}).open()
});`})]),C=r((t,e)=>s({class:"py-4"},e)),ft=()=>m({title:"Tabs",description:"Displays a tab or a component that looks like a tab."},[a({title:"Button Tab",description:"This is a button tab. The buttons to not route.",preview:[new $({class:"mt-4 max-w-[400px]",options:[{label:"Preview",value:"preview",layout:C([])},{label:"Code",value:"code",layout:C([])}]})],code:`
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
);`}),a({title:"Link Tab",description:"This is a link tab. The buttons route to a different page.",preview:[new X({class:"max-w-[400px]",options:[{label:"Example 1",href:"docs/components/tabs/example-1",component:new g({class:"p-8"},"This is an example 1 tab panel.")},{label:"Example 2",href:"docs/components/tabs/example-2",component:new g({class:"p-8"},"This is an example 2 tab panel.")},{label:"Example 3",href:"docs/components/tabs/example-3",component:new g({class:"p-8"},"This is an example 3 tab panel.")}]})],code:`
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
);`})]),j=(t,e,o)=>(o="Icons"+(o?"."+o:""),s({class:"flex flex-auto flex-col items-center gap-2 max-w-[150px] h-[8.5rem] cursor-pointer"},[s({class:"flex flex-auto w-full h-full justify-center items-center flex-wrap rounded-lg border bg-card text-base shadow-sm",click:()=>{navigator.clipboard.writeText(`${o}.${e}`)}},[P({html:t})]),s({class:"text-muted-foreground"},e)])),A=(t,e,o)=>{const n=typeof t=="object";n&&e.push(w({class:"text-muted-foreground"},"path: "+o+".{icon}"));const c=[];if(e.push(s({class:"flex flex-auto flex-wrap gap-2 my-8"},c)),n===!1)c.push(j(t,o));else for(var b in t){if(t.hasOwnProperty(b)===!1)continue;const y=t[b];if(typeof y!="object"){c.push(j(y,b,o));continue}const D=`${o}.${b}`;A(y,e,D)}},xt=t=>{if(!t||typeof t!="object")return;const e=[];for(let[o,n]of Object.entries(t)){if(o==="parse")continue;e.push(K({id:o.toLowerCase(),class:"text-2xl font-bold"},Q.titleCase(o))),A(n,e,o)}return e},gt=()=>m({title:"Icons",description:"The icons are from the Hericon library. They are SVG icons that can be used in your project. This icon set uses the outline style."},[J({href:"https://heroicons.com/",target:"_blank",class:"bttn link"},"link: Hericons"),a({title:"Icons",description:"This is an icon.",preview:[P({html:v.home})],code:`
import { Icons } from '../components/icons/icons.js';
import { I } from '@base-framework/atoms';

export const HomeIcon = () => (
    I({ html: Icons.home} )
);`}),s({class:"my-20"},[S({class:"text-2xl font-bold"},"Default Icons"),w({class:"text-muted-foreground"},'A few of the icons have been saved to the "Icons" object. You can use these icons in your project. Click to copy the Icon path. Here is a list of the icons that are available:')]),xt(v)]),ht=()=>m({title:"Introduction",description:"This app shell was created to showcase Base framework and its components and atoms. It is a simple app shell that can be used as a starting point for your project. It is built with Tailwind CSS and uses Shadcn as the inspiration for the theme and many of it's components. "}),p=(t,e,o)=>({uri:t,title:e,component:o()}),wt=t=>[p(`${t}`,"Introduction",ht),p(`${t}/icons`,"Icons",gt),p(`${t}/components/buttons*`,"Buttons",dt),p(`${t}/components/badges*`,"Badges",mt),p(`${t}/components/tabs*`,"Tabs",ft),p(`${t}/components/modals*`,"Modals",bt)],yt=t=>[{href:`${t}`,label:"Introduction",exact:!0},{href:`${t}/icons`,label:"Icons"},{group:"Components",options:[{label:"Buttons",href:`${t}/components/buttons`},{label:"Badges",href:`${t}/components/badges`},{label:"Tabs",href:`${t}/components/tabs`},{label:"Modals",href:`${t}/components/modals`}]}],vt=()=>new z({backHref:"aside/"},[new g([s([h([I("Overlay")]),s({class:"contained"},[W()])])])]),Bt=t=>[{uri:`${t}/overlay-test`,component:vt()}],f="docs",Ct=()=>new L({title:"Documentation",basePath:f,routes:Bt(f),switch:wt(f),links:yt(f)});export{Ct as DocumentationPage,Ct as default};
