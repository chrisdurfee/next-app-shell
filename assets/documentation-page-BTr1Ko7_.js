import{O as T,A as C}from"./overlay-DQdTvWSc.js";import{a,y as j,w as S,m as s,R as g,b as M,D as P,H as A,c as $,p as D,d as E,U as x,I as L,S as v,F as O,C as B,M as G,e as z,P as d,G as I}from"./index-StYBMr1a.js";import{B as i}from"./buttons-DIjD7_aQ.js";const h={gray:{backgroundColor:"bg-gray-50",textColor:"text-gray-600",ringColor:"ring-gray-500/10"},red:{backgroundColor:"bg-red-50",textColor:"text-red-700",ringColor:"ring-red-600/10"},yellow:{backgroundColor:"bg-yellow-50",textColor:"text-yellow-800",ringColor:"ring-yellow-600/20"},green:{backgroundColor:"bg-green-50",textColor:"text-green-700",ringColor:"ring-green-600/20"},blue:{backgroundColor:"bg-blue-50",textColor:"text-blue-700",ringColor:"ring-blue-700/10"},indigo:{backgroundColor:"bg-indigo-50",textColor:"text-indigo-700",ringColor:"ring-indigo-700/10"},purple:{backgroundColor:"bg-purple-50",textColor:"text-purple-700",ringColor:"ring-purple-700/10"},pink:{backgroundColor:"bg-pink-50",textColor:"text-pink-700",ringColor:"ring-pink-700/10"}},H=t=>h[t]||h.gray,F=t=>{const{backgroundColor:e,textColor:o,ringColor:r}=H(t);return`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${e} ${o} ${r}`},l=a((t,e)=>{const o=F(t==null?void 0:t.type);return j({...t,class:o},e)}),R=t=>A({class:"inline-flex flex-auto items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",dataSet:["selected",["state",t.value,"active"]]},[$({class:"flex flex-auto justify-center items-center",onSet:["selected",{selected:t.value}],click:e=>t.callBack(t.value)},t.label)]),N=(t,e)=>(t.callBack=e,R(t)),U=t=>M({class:`tab items-center justify-center rounded-md bg-muted p-1 text-muted-foreground ${t.class}`},[P({class:"flex flex-auto flex-row",map:[t.options,e=>N(e,t.callBack)]})]);class k extends S{render(){const e=this.select.bind(this);return s({class:""},[U({class:this.class,options:this.options,callBack:e}),g({class:"tab-content",onState:["selected",this.updateContent.bind(this)]})])}afterSetup(){const e=this.options[0].value;this.select(e)}update(){const e=this.state.get("selected");this.select(null),this.select(e)}select(e){this.state.selected=e}updateContent(e){const o=this.options;if(!o||o.length<1)return;const r=o[0];for(const f of o)if(f.value===e)return f.layout;return r.layout}setupStates(){const e=this.callBack,o=typeof e;return{selected:{state:null,callBack(r){o==="function"&&e(r)}}}}}const V=a((t,e)=>D({class:"flex p-4 min-h-[350px] max-h-[650px] overflow-x-auto rounded-lg border bg-muted"},[E({class:"font-mono text-sm"},e)])),Y=a((t,e)=>s({class:"flex p-4 min-h-[350px] max-h-[650px] overflow-x-auto rounded-lg border bg-card"},[s({class:"preview flex w-full justify-center items-center"},e)])),w=a((t,e)=>s({class:"py-4"},e)),_=t=>new k({class:"mt-4 max-w-[400px]",options:[{label:"Preview",value:"preview",layout:w([Y(t.preview)])},{label:"Code",value:"code",layout:w([V(t.code)])}]}),q=a(({title:t,description:e})=>x({class:"flex flex-col"},[L({class:"scroll-m-20 text-2xl font-bold tracking-tight"},t),e&&v({class:"text-base text-muted-foreground py-2 max-w-[700px]"},e)])),n=a((t,e)=>g({class:"py-4"},[q({title:t.title,description:t.description}),_({preview:t.preview,code:t.code})])),J=a(({title:t,description:e})=>x({class:"flex flex-col"},[B({class:"scroll-m-20 text-3xl font-bold tracking-tight"},t),v({class:"text-base text-muted-foreground py-2 max-w-[700px]"},e)])),K=a((t,e)=>s({class:"contained py-8"},[J(t),g({class:"pb-12 pt-8"},e)])),p=a((t,e)=>new O([K(t,e)])),Q=()=>p({title:"Badges",description:"Badges can be used to display a status or a count."},[n({title:"Badge",description:"This is a badge.",preview:[s({class:"flex gap-2"},[l({type:"gray"},"Text"),l({type:"red"},"Text"),l({type:"yellow"},"Text"),l({type:"green"},"Text"),l({type:"blue"},"Text"),l({type:"indigo"},"Text"),l({type:"purple"},"Text"),l({type:"pink"},"Text")])],code:`
import { Button } from '../components/atoms/badges/badges.js';
import { Atom } from '@base-framework/base';

export const PrimaryBadge = Atom((props, children)) => (
    Badge({ ...props, type: 'gray' }, children)
);`})]),W=()=>p({title:"Button",description:"Displays a button or a component that looks like a button."},[n({title:"Primary Button",description:"This is a primary button.",preview:[i({variant:"primary"},"Click Me")],code:`
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
);`})]),u=[{label:"Large",buttonStyle:"primary",size:"lg"},{label:"Small",buttonStyle:"secondary",size:"sm"},{label:"Medium",buttonStyle:"destructive",size:"md"},{label:"Extra Large",buttonStyle:"outline",size:"xl"},{label:"Right",buttonStyle:"ghost",type:"right"},{label:"Left",buttonStyle:"link",type:"left"}],b=({label:t,buttonStyle:e,size:o,type:r})=>i({text:t,class:`m-1 ${e}`,click:()=>new G({size:o,type:r}).open()}),X=()=>p({title:"Modals",description:"Displays a modal or a component that looks like a modal."},[n({title:"Large Modal",description:"This is a large modal.",preview:[b(u[0])],code:`
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
});`}),n({title:"Small Modal",preview:[b(u[1])],code:`
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
});`}),n({title:"Medium Modal",preview:[b(u[2])],code:`
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
});`})]),y=a((t,e)=>s({class:"py-4"},e)),Z=()=>p({title:"Tabs",description:"Displays a tab or a component that looks like a tab."},[n({title:"Button Tab",description:"This is a button tab. The buttons to not route.",preview:[new k({class:"mt-4 max-w-[400px]",options:[{label:"Preview",value:"preview",layout:y([])},{label:"Code",value:"code",layout:y([])}]})],code:`
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
);`}),n({title:"Link Tab",description:"This is a link tab. The buttons route to a different page.",preview:[new z({class:"max-w-[400px]",options:[{label:"Example 1",href:"docs/components/tabs/example-1",component:new d({class:"p-8"},"This is an example 1 tab panel.")},{label:"Example 2",href:"docs/components/tabs/example-2",component:new d({class:"p-8"},"This is an example 2 tab panel.")},{label:"Example 3",href:"docs/components/tabs/example-3",component:new d({class:"p-8"},"This is an example 3 tab panel.")}]})],code:`
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
);`})]),tt=()=>p({title:"Introduction",description:"This app shell was created to showcase Base Framework and its components. It is a simple app shell that can be used as a starting point for your project. It is built with Tailwind CSS and uses Shadcn as the inspiration for the theme and many of it's components. "}),c=(t,e,o)=>({uri:t,title:e,component:o()}),et=t=>[c(`${t}`,"Introduction",tt),c(`${t}/components/buttons*`,"Buttons",W),c(`${t}/components/badges*`,"Badges",Q),c(`${t}/components/tabs*`,"Tabs",Z),c(`${t}/components/modals*`,"Modals",X)],ot=t=>[{href:`${t}`,label:"Introduction",exact:!0},{group:"Components",options:[{label:"Buttons",href:`${t}/components/buttons`},{label:"Badges",href:`${t}/components/badges`},{label:"Tabs",href:`${t}/components/tabs`},{label:"Modals",href:`${t}/components/modals`}]}],nt=()=>new T({backHref:"aside/"},[new d([s([x([B("Overlay")]),s({class:"contained"},[I()])])])]),at=t=>[{uri:`${t}/overlay-test`,component:nt()}],m="docs",it=()=>new C({title:"Getting Started",basePath:m,routes:at(m),switch:et(m),links:ot(m)});export{it as DocumentationPage,it as default};
