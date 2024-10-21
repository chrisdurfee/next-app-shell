import{O as j,A as S}from"./overlay-C47v_WTv.js";import{a as n,y as M,w as k,m as a,R as h,b as P,D as $,H as A,c as d,p as D,d as E,U as b,I,S as B,F as z,C as T,h as L,e as G,f as O,V as H,g as F,i as N,P as u,T as R,G as V}from"./index-C6ECIvc-.js";import{B as i}from"./buttons-BvnCp6s_.js";const w={gray:{backgroundColor:"bg-gray-50",textColor:"text-gray-600",ringColor:"ring-gray-500/10"},red:{backgroundColor:"bg-red-50",textColor:"text-red-700",ringColor:"ring-red-600/10"},yellow:{backgroundColor:"bg-yellow-50",textColor:"text-yellow-800",ringColor:"ring-yellow-600/20"},green:{backgroundColor:"bg-green-50",textColor:"text-green-700",ringColor:"ring-green-600/20"},blue:{backgroundColor:"bg-blue-50",textColor:"text-blue-700",ringColor:"ring-blue-700/10"},indigo:{backgroundColor:"bg-indigo-50",textColor:"text-indigo-700",ringColor:"ring-indigo-700/10"},purple:{backgroundColor:"bg-purple-50",textColor:"text-purple-700",ringColor:"ring-purple-700/10"},pink:{backgroundColor:"bg-pink-50",textColor:"text-pink-700",ringColor:"ring-pink-700/10"}},_=t=>w[t]||w.gray,U=t=>{const{backgroundColor:e,textColor:o,ringColor:r}=_(t);return`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${e} ${o} ${r}`},l=n((t,e)=>{const o=U(t==null?void 0:t.type);return M({...t,class:o},e)}),Y=t=>A({class:"inline-flex flex-auto items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",dataSet:["selected",["state",t.value,"active"]]},[d({class:"flex flex-auto justify-center items-center",onSet:["selected",{selected:t.value}],click:e=>t.callBack(t.value)},t.label)]),q=(t,e)=>(t.callBack=e,Y(t)),J=t=>P({class:`tab items-center justify-center rounded-md bg-muted p-1 text-muted-foreground ${t.class}`},[$({class:"flex flex-auto flex-row",map:[t.options,e=>q(e,t.callBack)]})]);class C extends k{render(){const e=this.select.bind(this);return a({class:""},[J({class:this.class,options:this.options,callBack:e}),h({class:"tab-content",onState:["selected",this.updateContent.bind(this)]})])}afterSetup(){const e=this.options[0].value;this.select(e)}update(){const e=this.state.get("selected");this.select(null),this.select(e)}select(e){this.state.selected=e}updateContent(e){const o=this.options;if(!o||o.length<1)return;const r=o[0];for(const f of o)if(f.value===e)return f.layout;return r.layout}setupStates(){const e=this.callBack,o=typeof e;return{selected:{state:null,callBack(r){o==="function"&&e(r)}}}}}const K=n((t,e)=>D({class:"flex p-4 min-h-[350px] max-h-[650px] overflow-x-auto rounded-lg border bg-muted whitespace-break-spaces"},[E({class:"font-mono text-sm"},e)])),Q=n((t,e)=>a({class:"flex p-4 min-h-[350px] max-h-[650px] overflow-x-auto rounded-lg border bg-card"},[a({class:"preview flex w-full justify-center items-center"},e)])),y=n((t,e)=>a({class:"py-4"},e)),W=t=>new C({class:"mt-4 max-w-[400px]",options:[{label:"Preview",value:"preview",layout:y([Q(t.preview)])},{label:"Code",value:"code",layout:y([K(t.code)])}]}),X=n(({title:t,description:e})=>b({class:"flex flex-col"},[I({class:"scroll-m-20 text-2xl font-bold tracking-tight"},t),e&&B({class:"text-base text-muted-foreground py-2 max-w-[700px]"},e)])),s=n((t,e)=>h({class:"py-4"},[X({title:t.title,description:t.description}),W({preview:t.preview,code:t.code})])),Z=n(({title:t,description:e})=>b({class:"flex flex-col"},[T({class:"scroll-m-20 text-3xl font-bold tracking-tight"},t),B({class:"text-base text-muted-foreground py-2 max-w-[700px]"},e)])),tt=n((t,e)=>a({class:"contained py-8"},[Z(t),h({class:"pb-12 pt-8"},e)])),p=n((t,e)=>new z([tt(t,e)])),et=()=>p({title:"Badges",description:"Badges can be used to display a status or a count."},[s({title:"Badge",description:"This is a badge.",preview:[a({class:"flex gap-2"},[l({type:"gray"},"Text"),l({type:"red"},"Text"),l({type:"yellow"},"Text"),l({type:"green"},"Text"),l({type:"blue"},"Text"),l({type:"indigo"},"Text"),l({type:"purple"},"Text"),l({type:"pink"},"Text")])],code:`
import { Button } from '../components/atoms/badges/badges.js';
import { Atom } from '@base-framework/base';

export const PrimaryBadge = Atom((props, children)) => (
    Badge({ ...props, type: 'gray' }, children)
);`})]),ot=()=>p({title:"Button",description:"Displays a button or a component that looks like a button."},[s({title:"Primary Button",description:"This is a primary button.",preview:[i({variant:"primary"},"Click Me")],code:`
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
);`})]);class st extends k{render(){const e=this.getModalClass();return L({class:`modal m-auto fixed z-50 grid w-full max-w-lg gap-4 border bg-background p-6 shadow-lg ${e}`,click:o=>{o.target===this.panel&&this.close()}},[a({class:"modal-content flex flex-auto flex-col"},[b({class:"modal-header flex items-center"},[d({class:"bttn icon mr-2 p-0 bg-transparent sm:hidden hover:bg-transparent",click:()=>this.close()},{html:G.arrows.left}),O({class:"modal-title m-0"},"Modal Title")]),a({class:"modal-body flex flex-auto"},""),H({class:"modal-footer flex justify-between"},[d({class:"bttn ghost",click:()=>this.close()},"Cancel"),d({class:"bttn primary",click:()=>this.close()},"Save")])])])}getSizeClass(){switch(this.size){case"sm":return"sm max-w-[646px]";case"lg":return"lg max-w-[646px]";case"xl":return"xl max-w-[646px]";default:return"medium max-w-[646px]"}}getTypeClass(){switch(this.type){case"right":return"right right-0";case"left":return"left left-0";default:return""}}getModalClass(){return this.getSizeClass()+" "+this.getTypeClass()}open(){F.render(this,document.body),this.panel.showModal()}close(){this.panel.close(),this.destroy()}}const g=[{label:"Large",buttonStyle:"primary",size:"lg"},{label:"Small",buttonStyle:"secondary",size:"sm"},{label:"Medium",buttonStyle:"destructive",size:"md"},{label:"Extra Large",buttonStyle:"outline",size:"xl"},{label:"Right",buttonStyle:"ghost",type:"right"},{label:"Left",buttonStyle:"link",type:"left"}],x=({label:t,buttonStyle:e,size:o,type:r})=>i({text:t,class:`m-1 ${e}`,click:()=>new st({size:o,type:r}).open()}),at=()=>p({title:"Modals",description:"Displays a modal or a component that looks like a modal."},[s({title:"Large Modal",description:"This is a large modal.",preview:[x(g[0])],code:`
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
});`}),s({title:"Small Modal",preview:[x(g[1])],code:`
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
});`}),s({title:"Medium Modal",preview:[x(g[2])],code:`
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
});`})]),v=n((t,e)=>a({class:"py-4"},e)),nt=()=>p({title:"Tabs",description:"Displays a tab or a component that looks like a tab."},[s({title:"Button Tab",description:"This is a button tab. The buttons to not route.",preview:[new C({class:"mt-4 max-w-[400px]",options:[{label:"Preview",value:"preview",layout:v([])},{label:"Code",value:"code",layout:v([])}]})],code:`
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
);`}),s({title:"Link Tab",description:"This is a link tab. The buttons route to a different page.",preview:[new N({class:"max-w-[400px]",options:[{label:"Example 1",href:"docs/components/tabs/example-1",component:new u({class:"p-8"},"This is an example 1 tab panel.")},{label:"Example 2",href:"docs/components/tabs/example-2",component:new u({class:"p-8"},"This is an example 2 tab panel.")},{label:"Example 3",href:"docs/components/tabs/example-3",component:new u({class:"p-8"},"This is an example 3 tab panel.")}]})],code:`
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
);`})]),lt=()=>p({title:"Icons",description:"The icons are from the Hericon library. They are SVG icons that can be used in your project. This icon set uses the outline style."},[R({href:"https://heroicons.com/",target:"_blank",class:"bttn link"},"link: Hericons")]),rt=()=>p({title:"Introduction",description:"This app shell was created to showcase Base Framework and its components. It is a simple app shell that can be used as a starting point for your project. It is built with Tailwind CSS and uses Shadcn as the inspiration for the theme and many of it's components. "}),c=(t,e,o)=>({uri:t,title:e,component:o()}),it=t=>[c(`${t}`,"Introduction",rt),c(`${t}/icons`,"Icons",lt),c(`${t}/components/buttons*`,"Buttons",ot),c(`${t}/components/badges*`,"Badges",et),c(`${t}/components/tabs*`,"Tabs",nt),c(`${t}/components/modals*`,"Modals",at)],ct=t=>[{href:`${t}`,label:"Introduction",exact:!0},{href:`${t}/icons`,label:"Icons"},{group:"Components",options:[{label:"Buttons",href:`${t}/components/buttons`},{label:"Badges",href:`${t}/components/badges`},{label:"Tabs",href:`${t}/components/tabs`},{label:"Modals",href:`${t}/components/modals`}]}],pt=()=>new j({backHref:"aside/"},[new u([a([b([T("Overlay")]),a({class:"contained"},[V()])])])]),mt=t=>[{uri:`${t}/overlay-test`,component:pt()}],m="docs",gt=()=>new S({title:"Getting Started",basePath:m,routes:mt(m),switch:it(m),links:ct(m)});export{gt as DocumentationPage,gt as default};
