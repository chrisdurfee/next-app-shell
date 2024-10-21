import{O as $,A as P}from"./overlay-DTWL4MZ9.js";import{a,b,y as A,w as T,m as n,R as f,c as I,D,H as z,p as E,d as L,U as h,I as O,S as C,F as G,C as j,h as H,e as M,f as V,V as N,g as R,i as F,P as x,T as _,q,G as U}from"./index-CbeIV7Ll.js";const c=t=>a((e,o)=>b({...t,...e,class:`bttn ${t.class} ${e.class||""}`},o)),y={primary:c({class:"primary"}),secondary:c({class:"secondary"}),destructive:c({class:"destructive"}),outline:c({class:"outline"}),ghost:c({class:"ghost"}),link:c({class:"link"})},i=a((t,e)=>(y[t.variant]||y.primary)(t,e)),v={gray:{backgroundColor:"bg-gray-50",textColor:"text-gray-600",ringColor:"ring-gray-500/10"},red:{backgroundColor:"bg-red-50",textColor:"text-red-700",ringColor:"ring-red-600/10"},yellow:{backgroundColor:"bg-yellow-50",textColor:"text-yellow-800",ringColor:"ring-yellow-600/20"},green:{backgroundColor:"bg-green-50",textColor:"text-green-700",ringColor:"ring-green-600/20"},blue:{backgroundColor:"bg-blue-50",textColor:"text-blue-700",ringColor:"ring-blue-700/10"},indigo:{backgroundColor:"bg-indigo-50",textColor:"text-indigo-700",ringColor:"ring-indigo-700/10"},purple:{backgroundColor:"bg-purple-50",textColor:"text-purple-700",ringColor:"ring-purple-700/10"},pink:{backgroundColor:"bg-pink-50",textColor:"text-pink-700",ringColor:"ring-pink-700/10"}},X=t=>v[t]||v.gray,Y=t=>{const{backgroundColor:e,textColor:o,ringColor:r}=X(t);return`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${e} ${o} ${r}`},l=a((t,e)=>{const o=Y(t==null?void 0:t.type);return A({...t,class:o},e)}),J=t=>z({class:"inline-flex flex-auto items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",dataSet:["selected",["state",t.value,"active"]]},[b({class:"flex flex-auto justify-center items-center",onSet:["selected",{selected:t.value}],click:e=>t.callBack(t.value)},t.label)]),K=(t,e)=>(t.callBack=e,J(t)),Q=t=>I({class:`tab items-center justify-center rounded-md bg-muted p-1 text-muted-foreground ${t.class}`},[D({class:"flex flex-auto flex-row",map:[t.options,e=>K(e,t.callBack)]})]);class S extends T{render(){const e=this.select.bind(this);return n({class:""},[Q({class:this.class,options:this.options,callBack:e}),f({class:"tab-content",onState:["selected",this.updateContent.bind(this)]})])}afterSetup(){const e=this.options[0].value;this.select(e)}update(){const e=this.state.get("selected");this.select(null),this.select(e)}select(e){this.state.selected=e}updateContent(e){const o=this.options;if(!o||o.length<1)return;const r=o[0];for(const w of o)if(w.value===e)return w.layout;return r.layout}setupStates(){const e=this.callBack,o=typeof e;return{selected:{state:null,callBack(r){o==="function"&&e(r)}}}}}const W=a((t,e)=>E({class:"flex p-4 min-h-[350px] max-h-[650px] overflow-x-auto rounded-lg border bg-muted whitespace-break-spaces"},[L({class:"font-mono text-sm"},e)])),Z=a((t,e)=>n({class:"flex p-4 min-h-[350px] max-h-[650px] overflow-x-auto rounded-lg border bg-card"},[n({class:"preview flex w-full justify-center items-center"},e)])),B=a((t,e)=>n({class:"py-4"},e)),tt=t=>new S({class:"mt-4 max-w-[400px]",options:[{label:"Preview",value:"preview",layout:B([Z(t.preview)])},{label:"Code",value:"code",layout:B([W(t.code)])}]}),et=a(({title:t,description:e})=>h({class:"flex flex-col"},[O({class:"scroll-m-20 text-2xl font-bold tracking-tight"},t),e&&C({class:"text-base text-muted-foreground py-2 max-w-[700px]"},e)])),s=a((t,e)=>f({class:"py-4"},[et({title:t.title,description:t.description}),tt({preview:t.preview,code:t.code})])),ot=a(({title:t,description:e})=>h({class:"flex flex-col"},[j({class:"scroll-m-20 text-3xl font-bold tracking-tight"},t),C({class:"text-base text-muted-foreground py-2 max-w-[700px]"},e)])),st=a((t,e)=>n({class:"contained py-8"},[ot(t),f({class:"pb-12 pt-8"},e)])),m=a((t,e)=>new G([st(t,e)])),at=()=>m({title:"Badges",description:"Badges can be used to display a status or a count."},[s({title:"Badge",description:"This is a badge.",preview:[n({class:"flex gap-2"},[l({type:"gray"},"Text"),l({type:"red"},"Text"),l({type:"yellow"},"Text"),l({type:"green"},"Text"),l({type:"blue"},"Text"),l({type:"indigo"},"Text"),l({type:"purple"},"Text"),l({type:"pink"},"Text")])],code:`
import { Button } from '../components/atoms/badges/badges.js';
import { Atom } from '@base-framework/base';

export const PrimaryBadge = Atom((props, children)) => (
    Badge({ ...props, type: 'gray' }, children)
);`})]),nt=()=>m({title:"Button",description:"Displays a button or a component that looks like a button."},[s({title:"Primary Button",description:"This is a primary button.",preview:[i({variant:"primary"},"Click Me")],code:`
import { Button } from '../components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const PrimaryButton = Atom((props, children)) => (
    Button({ ...props, variant: 'primary' }, children)
);`}),s({title:"Secondary Button",preview:[i({variant:"secondary"},"Secondary")],code:`
import { Button } from '../components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const SecondaryButton = Atom((props, children)) => (
    Button({ ...props, variant: 'secondary' }, children)
);`}),s({title:"Destructive Button",preview:[i({variant:"destructive"},"Destructive")],code:`
import { Button } from '../components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const DestructiveButton = Atom((props, children)) => (
    Button({ ...props, variant: 'destructive' }, children)
);`}),s({title:"Outline Button",preview:[i({variant:"outline"},"Outline")],code:`
import { Button } from '../components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const OutlineButton = Atom((props, children)) => (
    Button({ ...props, variant: 'outline' }, children)
);`}),s({title:"Ghost Button",preview:[i({variant:"ghost"},"Ghost")],code:`
import { Button } from '../components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const GhostButton = Atom((props, children)) => (
    Button({ ...props, variant: 'ghost' }, children)
);`}),s({title:"Link Button",preview:[i({variant:"link"},"Link")],code:`
import { Button } from '../components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const LinkButton = Atom((props, children)) => (
    Button({ ...props, variant: 'link' }, children)
);`})]);class lt extends T{render(){const e=this.getModalClass();return H({class:`modal m-auto fixed z-50 grid w-full max-w-lg gap-4 border bg-background p-6 shadow-lg ${e}`,click:o=>{o.target===this.panel&&this.close()}},[n({class:"modal-content flex flex-auto flex-col"},[h({class:"modal-header flex items-center"},[b({class:"bttn icon mr-2 p-0 bg-transparent sm:hidden hover:bg-transparent",click:()=>this.close()},{html:M.arrows.left}),V({class:"modal-title m-0"},"Modal Title")]),n({class:"modal-body flex flex-auto"},""),N({class:"modal-footer flex justify-between"},[b({class:"bttn ghost",click:()=>this.close()},"Cancel"),b({class:"bttn primary",click:()=>this.close()},"Save")])])])}getSizeClass(){switch(this.size){case"sm":return"sm max-w-[646px]";case"lg":return"lg max-w-[900px]";case"xl":return"xl max-w-[1400px]";default:return"medium max-w-[760px]"}}getTypeClass(){switch(this.type){case"right":return"right right-0";case"left":return"left left-0";default:return""}}getModalClass(){return this.getSizeClass()+" "+this.getTypeClass()}open(){R.render(this,document.body),this.panel.showModal()}close(){this.panel.close(),this.destroy()}}const d=[{label:"Large",buttonStyle:"primary",size:"lg"},{label:"Small",buttonStyle:"secondary",size:"sm"},{label:"Medium",buttonStyle:"destructive",size:"md"},{label:"XL",buttonStyle:"primary",size:"xl"},{label:"Right",buttonStyle:"ghost",type:"right"},{label:"Left",buttonStyle:"link",type:"left"}],u=({label:t,buttonStyle:e,size:o,type:r})=>i({text:t,class:`m-1 ${e}`,click:()=>new lt({size:o,type:r}).open()}),rt=()=>m({title:"Modals",description:"Displays a modal or a component that looks like a modal."},[s({title:"Extra Large Modal",description:"This is an extra large modal.",preview:[u(d[3])],code:`
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
});`}),s({title:"Large Modal",description:"This is a large modal.",preview:[u(d[0])],code:`
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
});`}),s({title:"Small Modal",preview:[u(d[1])],code:`
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
});`}),s({title:"Medium Modal",preview:[u(d[2])],code:`
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
});`}),s({title:"Right Modal",preview:[u(d[4])],code:`
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
});`})]),k=a((t,e)=>n({class:"py-4"},e)),it=()=>m({title:"Tabs",description:"Displays a tab or a component that looks like a tab."},[s({title:"Button Tab",description:"This is a button tab. The buttons to not route.",preview:[new S({class:"mt-4 max-w-[400px]",options:[{label:"Preview",value:"preview",layout:k([])},{label:"Code",value:"code",layout:k([])}]})],code:`
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
);`}),s({title:"Link Tab",description:"This is a link tab. The buttons route to a different page.",preview:[new F({class:"max-w-[400px]",options:[{label:"Example 1",href:"docs/components/tabs/example-1",component:new x({class:"p-8"},"This is an example 1 tab panel.")},{label:"Example 2",href:"docs/components/tabs/example-2",component:new x({class:"p-8"},"This is an example 2 tab panel.")},{label:"Example 3",href:"docs/components/tabs/example-3",component:new x({class:"p-8"},"This is an example 3 tab panel.")}]})],code:`
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
);`})]),ct=()=>m({title:"Icons",description:"The icons are from the Hericon library. They are SVG icons that can be used in your project. This icon set uses the outline style."},[_({href:"https://heroicons.com/",target:"_blank",class:"bttn link"},"link: Hericons"),s({title:"Badge",description:"This is a badge.",preview:[q({html:M.home})],code:`
import { Icons } from '../components/icons/icons.js';
import { I } from '@base-framework/atoms';

export const HomeIcon = () => (
    I({ html: Icons.home} )
);`})]),pt=()=>m({title:"Introduction",description:"This app shell was created to showcase Base Framework and its components. It is a simple app shell that can be used as a starting point for your project. It is built with Tailwind CSS and uses Shadcn as the inspiration for the theme and many of it's components. "}),p=(t,e,o)=>({uri:t,title:e,component:o()}),mt=t=>[p(`${t}`,"Introduction",pt),p(`${t}/icons`,"Icons",ct),p(`${t}/components/buttons*`,"Buttons",nt),p(`${t}/components/badges*`,"Badges",at),p(`${t}/components/tabs*`,"Tabs",it),p(`${t}/components/modals*`,"Modals",rt)],dt=t=>[{href:`${t}`,label:"Introduction",exact:!0},{href:`${t}/icons`,label:"Icons"},{group:"Components",options:[{label:"Buttons",href:`${t}/components/buttons`},{label:"Badges",href:`${t}/components/badges`},{label:"Tabs",href:`${t}/components/tabs`},{label:"Modals",href:`${t}/components/modals`}]}],ut=()=>new $({backHref:"aside/"},[new x([n([h([j("Overlay")]),n({class:"contained"},[U()])])])]),bt=t=>[{uri:`${t}/overlay-test`,component:ut()}],g="docs",ht=()=>new P({title:"Getting Started",basePath:g,routes:bt(g),switch:mt(g),links:dt(g)});export{ht as DocumentationPage,ht as default};
