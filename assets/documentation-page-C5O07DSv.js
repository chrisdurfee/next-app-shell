import{B as i,O as H,A as G}from"./overlay-B-nFjLFJ.js";import{X as l,y as R,w as S,m as s,R as k,a as V,D as N,H as U,b as u,p as X,c as q,U as d,I as A,S as y,B as F,d as Y,C as I,e as B,g as _,h as $,V as D,f as v,i as J,P as h,T as K,q as P,M as Q,j as W,G as Z}from"./index-CMuGiGxP.js";const T={gray:{backgroundColor:"bg-gray-50",textColor:"text-gray-600",ringColor:"ring-gray-500/10"},red:{backgroundColor:"bg-red-50",textColor:"text-red-700",ringColor:"ring-red-600/10"},yellow:{backgroundColor:"bg-yellow-50",textColor:"text-yellow-800",ringColor:"ring-yellow-600/20"},green:{backgroundColor:"bg-green-50",textColor:"text-green-700",ringColor:"ring-green-600/20"},blue:{backgroundColor:"bg-blue-50",textColor:"text-blue-700",ringColor:"ring-blue-700/10"},indigo:{backgroundColor:"bg-indigo-50",textColor:"text-indigo-700",ringColor:"ring-indigo-700/10"},purple:{backgroundColor:"bg-purple-50",textColor:"text-purple-700",ringColor:"ring-purple-700/10"},pink:{backgroundColor:"bg-pink-50",textColor:"text-pink-700",ringColor:"ring-pink-700/10"}},tt=t=>T[t]||T.gray,et=t=>{const{backgroundColor:e,textColor:o,ringColor:a}=tt(t);return`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${e} ${o} ${a}`},c=l((t,e)=>{const o=et(t==null?void 0:t.type);return R({...t,class:o},e)}),ot=t=>U({class:"inline-flex flex-auto items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",dataSet:["selected",["state",t.value,"active"]]},[u({class:"flex flex-auto justify-center items-center",onSet:["selected",{selected:t.value}],click:e=>t.callBack(t.value)},t.label)]),st=(t,e)=>(t.callBack=e,ot(t)),nt=t=>V({class:`tab items-center justify-center rounded-md bg-muted p-1 text-muted-foreground ${t.class}`},[N({class:"flex flex-auto flex-row",map:[t.options,e=>st(e,t.callBack)]})]);class z extends S{render(){const e=this.select.bind(this);return s({class:""},[nt({class:this.class,options:this.options,callBack:e}),k({class:"tab-content",onState:["selected",this.updateContent.bind(this)]})])}afterSetup(){const e=this.options[0].value;this.select(e)}update(){const e=this.state.get("selected");this.select(null),this.select(e)}select(e){this.state.selected=e}updateContent(e){const o=this.options;if(!o||o.length<1)return;const a=o[0];for(const r of o)if(r.value===e)return r.layout;return a.layout}setupStates(){const e=this.callBack,o=typeof e;return{selected:{state:null,callBack(a){o==="function"&&e(a)}}}}}const at=l((t,e)=>X({class:"flex p-4 min-h-[350px] max-h-[650px] overflow-x-auto rounded-lg border bg-muted whitespace-break-spaces cursor-pointer"},[q({class:"font-mono text-sm",click:()=>navigator.clipboard.writeText(e[0].textContent)},e)])),lt=l((t,e)=>s({class:"flex p-4 min-h-[350px] max-h-[650px] overflow-x-auto rounded-lg border bg-card"},[s({class:"preview flex w-full justify-center items-center"},e)])),C=l((t,e)=>s({class:"py-4"},e)),rt=t=>new z({class:"mt-4 max-w-[400px]",options:[{label:"Preview",value:"preview",layout:C([lt(t.preview)])},{label:"Code",value:"code",layout:C([at(t.code)])}]}),it=l(({title:t,description:e})=>d({class:"flex flex-col"},[A({class:"scroll-m-20 text-2xl font-bold tracking-tight"},t),e&&y({class:"text-base text-muted-foreground py-2 max-w-[700px]"},e)])),n=l((t,e)=>k({class:"py-4"},[it({title:t.title,description:t.description}),rt({preview:t.preview,code:t.code})]));class ct extends F{render(){return Y([s({class:"contained px-4 flex flex-auto flex-col"},this.children)])}}const pt=l(({title:t,description:e})=>d({class:"flex flex-col"},[I({class:"scroll-m-20 text-3xl font-bold tracking-tight"},t),y({class:"text-base text-muted-foreground py-2 max-w-[700px]"},e)])),mt=l((t,e)=>s({class:"contained py-8"},[pt(t),k({class:"pb-12 pt-8"},e)])),m=l((t,e)=>new ct([mt(t,e)])),ut=()=>m({title:"Badges",description:"Badges can be used to display a status or a count."},[n({title:"Badge",description:"This is a badge.",preview:[s({class:"flex gap-2"},[c({type:"gray"},"Text"),c({type:"red"},"Text"),c({type:"yellow"},"Text"),c({type:"green"},"Text"),c({type:"blue"},"Text"),c({type:"indigo"},"Text"),c({type:"purple"},"Text"),c({type:"pink"},"Text")])],code:`
import { Button } from '../components/atoms/badges/badges.js';
import { Atom } from '@base-framework/base';

export const PrimaryBadge = Atom((props, children)) => (
    Badge({ ...props, type: 'gray' }, children)
);`})]),dt=()=>m({title:"Button",description:"Displays a button or a component that looks like a button."},[n({title:"Usage",description:"Import the button atom and use it in your components. This platform has variants for different use cases. The variant can be set using the `variant` prop.",preview:[i({variant:"primary"},"Click Me")],code:`import { Button } from '../components/atoms/buttons/buttons.js';

Button({ ...props, variant: 'secondary' }, primary)`}),d({class:"flex flex-col py-8"},[B({class:"text-3xl font-bold tracking-tight border-b pb-2"},"Variants")]),n({title:"Primary Button",description:"This is a primary button.",preview:[i({variant:"primary"},"Click Me")],code:`
import { Button } from '../components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const PrimaryButton = Atom((props, children)) => (
    Button({ ...props, variant: 'primary' }, children)
);`}),n({title:"Secondary Button",preview:[i({variant:"secondary"},"Secondary")],code:`
import { Button } from '../components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const SecondaryButton = Atom((props, children)) => (
    Button({ ...props, variant: 'secondary' }, children)
);`}),n({title:"Destructive Button",preview:[i({variant:"destructive"},"Destructive")],code:`
import { Button } from '../components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const DestructiveButton = Atom((props, children)) => (
    Button({ ...props, variant: 'destructive' }, children)
);`}),n({title:"Outline Button",preview:[i({variant:"outline"},"Outline")],code:`
import { Button } from '../components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const OutlineButton = Atom((props, children)) => (
    Button({ ...props, variant: 'outline' }, children)
);`}),n({title:"Ghost Button",preview:[i({variant:"ghost"},"Ghost")],code:`
import { Button } from '../components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const GhostButton = Atom((props, children)) => (
    Button({ ...props, variant: 'ghost' }, children)
);`}),n({title:"Link Button",preview:[i({variant:"link"},"Link")],code:`
import { Button } from '../components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const LinkButton = Atom((props, children)) => (
    Button({ ...props, variant: 'link' }, children)
);`})]),bt=t=>_.render(t,document.body),ft=({title:t})=>d({class:"flex flex-auto items-center"},[B({class:"text-lg font-semibold"},t)]),xt=l((t,e)=>$({class:"flex flex-auto flex-col fixed z-50 w-full max-w-lg gap-4 border bg-background text-foreground p-6 shadow-lg duration-200 sm:rounded-lg",click:t.click,aria:{expanded:["open"]}},[s({class:"flex flex-auto flex-col space-y-2"},[ft(t),s({class:"flex flex-auto flex-col text-sm text-muted-foreground"},e)]),D({class:"flex flex-col-reverse sm:flex-row sm:justify-end mt-6 space-x-2"},t.buttons)]));class L extends S{render(){const e=r=>{r.target===this.panel&&this.close()},o=this.getMainClass(),a=this.title||"Are you abosolutely sure?";return xt({class:o,title:a,click:e,buttons:this.getButtons()},this.description)}getButtons(){return[u({class:"bttn outline",click:()=>this.close()},"Cancel"),u({class:"bttn primary",click:()=>this.confirm()},"Save")]}setupStates(){return{open:!1}}confirm(){this.confirmed&&this.confirmed(),this.close()}getMainClass(){return""}open(){bt(this),this.panel.showModal(),this.state.open=!0}close(){this.state.open=!1,this.panel.close(),this.destroy()}}const gt=t=>i({text:"Open",class:"m-1",click:()=>new L(t).open()}),ht=()=>m({title:"Dialog",description:"Displays a dialog or a component that looks like a dialog."},[n({title:"Usage",description:"Import the dialog atom and use it in your components.",preview:[gt({title:"Are you absoultely sure?",description:"This action cannot be undone. This will permanently delete your account and remove your data from our servers.",confirmed:()=>console.log("Confirmed!")})],code:`import { Button } from '../components/molecules/dialogue.js';

new Dialog({
    title: 'Are you absoultely sure?',
    description: 'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
    confirmed: () => console.log('Confirmed!')
}).open()`})]),yt=({title:t})=>d({class:"modal-header flex items-center"},[u({class:"bttn icon mr-2 p-0 bg-transparent sm:hidden hover:bg-transparent",click:(e,o)=>o.close()},{html:v.arrows.left}),B({class:"text-lg font-semibold m-0"},t)]),wt=l((t,e)=>$({class:`modal m-auto fixed z-50 grid w-full gap-4 border bg-background p-6 shadow-lg ${t.class}`,click:t.click},[s({class:"modal-content flex flex-auto flex-col"},[yt(t),s({class:"modal-body flex flex-auto"},e),D({class:"modal-footer flex justify-between"},t.buttons)])]));class vt extends L{render(){const e=r=>{r.target===this.panel&&this.close()},o=this.getMainClass(),a=this.title||"Are you abosolutely sure?";return wt({class:o,click:e,title:a,buttons:this.getButtons(),aria:{expanded:["open"]}},this.children)}getButtons(){return[u({class:"bttn outline",click:()=>this.close()},"Cancel"),u({class:"bttn primary",click:()=>this.close()},"Save")]}getSizeClass(){switch(this.size){case"sm":return"sm max-w-[646px]";case"lg":return"lg max-w-[900px]";case"xl":return"xl max-w-[1400px]";default:return"medium max-w-[760px]"}}getTypeClass(){switch(this.type){case"right":return"right right-0";case"left":return"left left-0";default:return""}}getMainClass(){return this.getSizeClass()+" "+this.getTypeClass()}}const b=[{label:"Large",buttonStyle:"primary",size:"lg"},{label:"Small",buttonStyle:"secondary",size:"sm"},{label:"Medium",buttonStyle:"destructive",size:"md"},{label:"XL",buttonStyle:"primary",size:"xl"},{label:"Right",buttonStyle:"ghost",type:"right"},{label:"Left",buttonStyle:"link",type:"left"}],f=({label:t,buttonStyle:e,size:o,type:a})=>i({text:t,class:`m-1 ${e}`,click:()=>new vt({title:"Are you absolutely sure?",size:o,type:a}).open()}),kt=()=>m({title:"Modals",description:"Displays a modal or a component that looks like a modal."},[n({title:"Extra Large Modal",description:"This is an extra large modal.",preview:[f(b[3])],code:`
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
});`}),n({title:"Large Modal",description:"This is a large modal.",preview:[f(b[0])],code:`
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
});`}),n({title:"Small Modal",preview:[f(b[1])],code:`
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
});`}),n({title:"Medium Modal",preview:[f(b[2])],code:`
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
});`}),n({title:"Right Modal",preview:[f(b[4])],code:`
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
});`})]),j=l((t,e)=>s({class:"py-4"},e)),Bt=()=>m({title:"Tabs",description:"Displays a tab or a component that looks like a tab."},[n({title:"Button Tab",description:"This is a button tab. The buttons to not route.",preview:[new z({class:"mt-4 max-w-[400px]",options:[{label:"Preview",value:"preview",layout:j([])},{label:"Code",value:"code",layout:j([])}]})],code:`
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
);`}),n({title:"Link Tab",description:"This is a link tab. The buttons route to a different page.",preview:[new J({class:"max-w-[400px]",options:[{label:"Example 1",href:"docs/components/tabs/example-1",component:new h({class:"p-8"},"This is an example 1 tab panel.")},{label:"Example 2",href:"docs/components/tabs/example-2",component:new h({class:"p-8"},"This is an example 2 tab panel.")},{label:"Example 3",href:"docs/components/tabs/example-3",component:new h({class:"p-8"},"This is an example 3 tab panel.")}]})],code:`
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
);`})]),M=(t,e,o)=>(o="Icons"+(o?"."+o:""),s({class:"flex flex-auto flex-col items-center gap-2 max-w-[150px] h-[8.5rem] cursor-pointer"},[s({class:"flex flex-auto w-full h-full justify-center items-center flex-wrap rounded-lg border bg-card text-base shadow-sm",click:()=>{navigator.clipboard.writeText(`${o}.${e}`)}},[P({html:t})]),s({class:"text-muted-foreground"},e)])),O=(t,e,o)=>{const a=typeof t=="object";a&&e.push(y({class:"text-muted-foreground"},"path: "+o+".{icon}"));const r=[];if(e.push(s({class:"flex flex-auto flex-wrap gap-2 my-8"},r)),a===!1)r.push(M(t,o));else for(var x in t){if(t.hasOwnProperty(x)===!1)continue;const w=t[x];if(typeof w!="object"){r.push(M(w,x,o));continue}const E=`${o}.${x}`;O(w,e,E)}},Tt=t=>{if(!t||typeof t!="object")return;const e=[];for(let[o,a]of Object.entries(t)){if(o==="parse")continue;e.push(Q({id:o.toLowerCase(),class:"text-2xl font-bold"},W.titleCase(o))),O(a,e,o)}return e},Ct=()=>m({title:"Icons",description:"The icons are from the Hericon library. They are SVG icons that can be used in your project. This icon set uses the outline style."},[K({href:"https://heroicons.com/",target:"_blank",class:"bttn link"},"link: Hericons"),n({title:"Icons",description:"This is an icon.",preview:[P({html:v.home})],code:`
import { Icons } from '../components/icons/icons.js';
import { I } from '@base-framework/atoms';

export const HomeIcon = () => (
    I({ html: Icons.home} )
);`}),s({class:"my-20"},[A({class:"text-2xl font-bold"},"Default Icons"),y({class:"text-muted-foreground"},'A few of the icons have been saved to the "Icons" object. You can use these icons in your project. Click to copy the Icon path. Here is a list of the icons that are available:')]),Tt(v)]),jt=()=>m({title:"Introduction",description:"This app shell was created to showcase Base framework and its components and atoms. It is a simple app shell that can be used as a starting point for your project. It is built with Tailwind CSS and uses Shadcn as the inspiration for the theme and many of it's components. "}),p=(t,e,o)=>({uri:t,title:e,component:o()}),Mt=t=>[p(`${t}`,"Introduction",jt),p(`${t}/icons`,"Icons",Ct),p(`${t}/components/buttons*`,"Buttons",dt),p(`${t}/components/badges*`,"Badges",ut),p(`${t}/components/tabs*`,"Tabs",Bt),p(`${t}/components/modals*`,"Modals",kt),p(`${t}/components/dialogs*`,"Modals",ht)],St=t=>[{href:`${t}`,label:"Introduction",exact:!0},{href:`${t}/icons`,label:"Icons"},{group:"Components",options:[{label:"Buttons",href:`${t}/components/buttons`},{label:"Badges",href:`${t}/components/badges`},{label:"Tabs",href:`${t}/components/tabs`},{label:"Modals",href:`${t}/components/modals`},{label:"Dialogs",href:`${t}/components/dialogs`}]}],At=()=>new H({backHref:"aside/"},[new h([s([d([I("Overlay")]),s({class:"contained"},[Z()])])])]),It=t=>[{uri:`${t}/overlay-test`,component:At()}],g="docs",Pt=()=>new G({title:"Documentation",basePath:g,routes:It(g),switch:Mt(g),links:St(g)});export{Pt as DocumentationPage,Pt as default};
