import{O as B,A as k}from"./overlay-CytJCQ0D.js";import{a as n,y as C,w as T,m as s,R as d,b as P,D as j,H as S,c as A,p as $,d as D,U as b,I as E,S as w,F as O,C as y,e as G,P as m,G as I}from"./index-DongaFwV.js";import{B as l}from"./buttons-Clj-45LA.js";const x={gray:{backgroundColor:"bg-gray-50",textColor:"text-gray-600",ringColor:"ring-gray-500/10"},red:{backgroundColor:"bg-red-50",textColor:"text-red-700",ringColor:"ring-red-600/10"},yellow:{backgroundColor:"bg-yellow-50",textColor:"text-yellow-800",ringColor:"ring-yellow-600/20"},green:{backgroundColor:"bg-green-50",textColor:"text-green-700",ringColor:"ring-green-600/20"},blue:{backgroundColor:"bg-blue-50",textColor:"text-blue-700",ringColor:"ring-blue-700/10"},indigo:{backgroundColor:"bg-indigo-50",textColor:"text-indigo-700",ringColor:"ring-indigo-700/10"},purple:{backgroundColor:"bg-purple-50",textColor:"text-purple-700",ringColor:"ring-purple-700/10"},pink:{backgroundColor:"bg-pink-50",textColor:"text-pink-700",ringColor:"ring-pink-700/10"}},L=t=>x[t]||x.gray,H=t=>{const{backgroundColor:e,textColor:o,ringColor:i}=L(t);return`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${e} ${o} ${i}`},r=n((t,e)=>{const o=H(t==null?void 0:t.type);return C({...t,class:o},e)}),F=t=>S({class:"inline-flex flex-auto items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",dataSet:["selected",["state",t.value,"active"]]},[A({class:"flex flex-auto justify-center items-center",onSet:["selected",{selected:t.value}],click:e=>t.callBack(t.value)},t.label)]),N=(t,e)=>(t.callBack=e,F(t)),R=t=>P({class:`tab items-center justify-center rounded-md bg-muted p-1 text-muted-foreground ${t.class}`},[j({class:"flex flex-auto flex-row",map:[t.options,e=>N(e,t.callBack)]})]);class v extends T{render(){const e=this.select.bind(this);return s({class:""},[R({class:this.class,options:this.options,callBack:e}),d({class:"tab-content",onState:["selected",this.updateContent.bind(this)]})])}afterSetup(){const e=this.options[0].value;this.select(e)}update(){const e=this.state.get("selected");this.select(null),this.select(e)}select(e){this.state.selected=e}updateContent(e){const o=this.options;if(!o||o.length<1)return;const i=o[0];for(const g of o)if(g.value===e)return g.layout;return i.layout}setupStates(){const e=this.callBack,o=typeof e;return{selected:{state:null,callBack(i){o==="function"&&e(i)}}}}}const M=n((t,e)=>$({class:"flex p-4 min-h-[350px] max-h-[650px] overflow-x-auto rounded-lg border bg-muted"},[D({class:"font-mono text-sm"},e)])),U=n((t,e)=>s({class:"flex p-4 min-h-[350px] max-h-[650px] overflow-x-auto rounded-lg border bg-card"},[s({class:"preview flex w-full justify-center items-center"},e)])),f=n((t,e)=>s({class:"py-4"},e)),V=t=>new v({class:"mt-4 max-w-[400px]",options:[{label:"Preview",value:"preview",layout:f([U(t.preview)])},{label:"Code",value:"code",layout:f([M(t.code)])}]}),Y=n(({title:t,description:e})=>b({class:"flex flex-col"},[E({class:"scroll-m-20 text-2xl font-bold tracking-tight"},t),e&&w({class:"text-base text-muted-foreground py-2 max-w-[700px]"},e)])),a=n((t,e)=>d({class:"py-4"},[Y({title:t.title,description:t.description}),V({preview:t.preview,code:t.code})])),_=n(({title:t,description:e})=>b({class:"flex flex-col"},[y({class:"scroll-m-20 text-3xl font-bold tracking-tight"},t),w({class:"text-base text-muted-foreground py-2 max-w-[700px]"},e)])),q=n((t,e)=>s({class:"contained py-8"},[_(t),d({class:"pb-12 pt-8"},e)])),u=n((t,e)=>new O([q(t,e)])),z=()=>u({title:"Badges",description:"Badges can be used to display a status or a count."},[a({title:"Badge",description:"This is a badge.",preview:[s({class:"flex gap-2"},[r({type:"gray"},"Text"),r({type:"red"},"Text"),r({type:"yellow"},"Text"),r({type:"green"},"Text"),r({type:"blue"},"Text"),r({type:"indigo"},"Text"),r({type:"purple"},"Text"),r({type:"pink"},"Text")])],code:`
import { Button } from '../components/atoms/badges/badges.js';
import { Atom } from '@base-framework/base';

export const PrimaryBadge = Atom((props, children)) => (
    Badge({ ...props, type: 'gray' }, children)
);`})]),J=()=>u({title:"Button",description:"Displays a button or a component that looks like a button."},[a({title:"Primary Button",description:"This is a primary button.",preview:[l({variant:"primary"},"Click Me")],code:`
import { Button } from '../components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const PrimaryButton = Atom((props, children)) => (
    Button({ ...props, variant: 'primary' }, children)
);`}),a({title:"Secondary Button",preview:[l({variant:"secondary"},"Secondary")],code:`
import { Button } from '../components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const SecondaryButton = Atom((props, children)) => (
    Button({ ...props, variant: 'secondary' }, children)
);`}),a({title:"Destructive Button",preview:[l({variant:"destructive"},"Destructive")],code:`
import { Button } from '../components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const DestructiveButton = Atom((props, children)) => (
    Button({ ...props, variant: 'destructive' }, children)
);`}),a({title:"Outline Button",preview:[l({variant:"outline"},"Outline")],code:`
import { Button } from '../components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const OutlineButton = Atom((props, children)) => (
    Button({ ...props, variant: 'outline' }, children)
);`}),a({title:"Ghost Button",preview:[l({variant:"ghost"},"Ghost")],code:`
import { Button } from '../components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const GhostButton = Atom((props, children)) => (
    Button({ ...props, variant: 'ghost' }, children)
);`}),a({title:"Link Button",preview:[l({variant:"link"},"Link")],code:`
import { Button } from '../components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const LinkButton = Atom((props, children)) => (
    Button({ ...props, variant: 'link' }, children)
);`})]),h=n((t,e)=>s({class:"py-4"},e)),K=()=>u({title:"Tabs",description:"Displays a tab or a component that looks like a tab."},[a({title:"Button Tab",description:"This is a button tab. The buttons to not route.",preview:[new v({class:"mt-4 max-w-[400px]",options:[{label:"Preview",value:"preview",layout:h([])},{label:"Code",value:"code",layout:h([])}]})],code:`
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
);`}),a({title:"Link Tab",description:"This is a link tab. The buttons route to a different page.",preview:[new G({class:"max-w-[400px]",options:[{label:"Example 1",href:"docs/components/tabs/example-1",component:new m({class:"p-8"},"This is an example 1 tab panel.")},{label:"Example 2",href:"docs/components/tabs/example-2",component:new m({class:"p-8"},"This is an example 2 tab panel.")},{label:"Example 3",href:"docs/components/tabs/example-3",component:new m({class:"p-8"},"This is an example 3 tab panel.")}]})],code:`
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
);`})]),Q=()=>u({title:"Introduction",description:"This app shell was created to showcase Base Framework and its components. It is a simple app shell that can be used as a starting point for your project. It is built with Tailwind CSS and uses Shadcn as the inspiration for the theme and many of it's components. "}),c=(t,e,o)=>({uri:t,title:e,component:o()}),W=t=>[c(`${t}`,"Introduction",Q),c(`${t}/components/buttons*`,"Buttons",J),c(`${t}/components/badges*`,"Badges",z),c(`${t}/components/tabs*`,"tabs",K)],X=t=>[{href:`${t}`,label:"Introduction",exact:!0},{group:"Components",options:[{label:"Buttons",href:`${t}/components/buttons`},{label:"Badges",href:`${t}/components/badges`},{label:"Tabs",href:`${t}/components/tabs`}]}],Z=()=>new B({backHref:"aside/"},[new m([s([b([y("Overlay")]),s({class:"contained"},[I()])])])]),tt=t=>[{uri:`${t}/overlay-test`,component:Z()}],p="docs",at=()=>new k({title:"Getting Started",basePath:p,routes:tt(p),switch:W(p),links:X(p)});export{at as DocumentationPage,at as default};
