import{O as h,A as v}from"./overlay-Dxokg7de.js";import{a as n,y as B,w,m as r,R as d,b as k,D as C,H as S,c as A,p as T,d as P,U as p,I as j,S as x,F as D,C as y,P as $,G as O}from"./index-UyfMK0gM.js";import{B as i}from"./buttons-BGlrpD8I.js";const b={gray:{backgroundColor:"bg-gray-50",textColor:"text-gray-600",ringColor:"ring-gray-500/10"},red:{backgroundColor:"bg-red-50",textColor:"text-red-700",ringColor:"ring-red-600/10"},yellow:{backgroundColor:"bg-yellow-50",textColor:"text-yellow-800",ringColor:"ring-yellow-600/20"},green:{backgroundColor:"bg-green-50",textColor:"text-green-700",ringColor:"ring-green-600/20"},blue:{backgroundColor:"bg-blue-50",textColor:"text-blue-700",ringColor:"ring-blue-700/10"},indigo:{backgroundColor:"bg-indigo-50",textColor:"text-indigo-700",ringColor:"ring-indigo-700/10"},purple:{backgroundColor:"bg-purple-50",textColor:"text-purple-700",ringColor:"ring-purple-700/10"},pink:{backgroundColor:"bg-pink-50",textColor:"text-pink-700",ringColor:"ring-pink-700/10"}},G=t=>b[t]||b.gray,I=t=>{const{backgroundColor:e,textColor:o,ringColor:l}=G(t);return`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${e} ${o} ${l}`},s=n((t,e)=>{const o=I(t==null?void 0:t.type);return B({...t,class:o},e)}),L=t=>S({class:"inline-flex flex-auto items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",dataSet:["selected",["state",t.value,"active"]]},[A({class:"flex flex-auto justify-center items-center",onSet:["selected",{selected:t.value}],click:e=>t.callBack(t.value)},t.label)]),H=(t,e)=>(t.callBack=e,L(t)),E=t=>k({class:`tab items-center justify-center rounded-md bg-muted p-1 text-muted-foreground ${t.class}`},[C({class:"flex flex-auto flex-row",map:[t.options,e=>H(e,t.callBack)]})]);class F extends w{render(){const e=this.select.bind(this);return r({class:""},[E({class:this.class,options:this.options,callBack:e}),d({class:"tab-content",onState:["selected",this.updateContent.bind(this)]})])}afterSetup(){const e=this.options[0].value;this.select(e)}update(){const e=this.state.get("selected");this.select(null),this.select(e)}select(e){this.state.selected=e}updateContent(e){const o=this.options;if(!o||o.length<1)return;const l=o[0];for(const g of o)if(g.value===e)return g.layout;return l.layout}setupStates(){const e=this.callBack,o=typeof e;return{selected:{state:null,callBack(l){o==="function"&&e(l)}}}}}const N=n((t,e)=>T({class:"flex p-4 min-h-[350px] max-h-[650px] overflow-x-auto rounded-lg border bg-muted"},[P({class:"font-mono text-sm"},e)])),R=n((t,e)=>r({class:"flex p-4 min-h-[350px] max-h-[650px] overflow-x-auto rounded-lg border bg-card"},[r({class:"preview flex w-full justify-center items-center"},e)])),f=n((t,e)=>r({class:"py-4"},e)),M=t=>new F({class:"mt-4 max-w-[400px]",options:[{label:"Preview",value:"preview",layout:f([R(t.preview)])},{label:"Code",value:"code",layout:f([N(t.code)])}]}),U=n(({title:t,description:e})=>p({class:"flex flex-col"},[j({class:"scroll-m-20 text-2xl font-bold tracking-tight"},t),e&&x({class:"text-base text-muted-foreground py-2 max-w-[700px]"},e)])),a=n((t,e)=>d({class:"py-4"},[U({title:t.title,description:t.description}),M({preview:t.preview,code:t.code})])),V=n(({title:t,description:e})=>p({class:"flex flex-col"},[y({class:"scroll-m-20 text-3xl font-bold tracking-tight"},t),x({class:"text-base text-muted-foreground py-2 max-w-[700px]"},e)])),Y=n((t,e)=>r({class:"contained py-8"},[V(t),d({class:"pb-12 pt-8"},e)])),m=n((t,e)=>new D([Y(t,e)])),_=()=>m({title:"Badges",description:"Badges can be used to display a status or a count."},[a({title:"Badge",description:"This is a badge.",preview:[r({class:"flex gap-2"},[s({type:"gray"},"Text"),s({type:"red"},"Text"),s({type:"yellow"},"Text"),s({type:"green"},"Text"),s({type:"blue"},"Text"),s({type:"indigo"},"Text"),s({type:"purple"},"Text"),s({type:"pink"},"Text")])],code:`
import { Button } from '../components/atoms/badges/badges.js';
import { Atom } from '@base-framework/base';

export const PrimaryBadge = Atom((props, children)) => (
    Badge({ ...props, type: 'gray' }, children)
);`})]),q=()=>m({title:"Button",description:"Displays a button or a component that looks like a button."},[a({title:"Primary Button",description:"This is a primary button.",preview:[i({variant:"primary"},"Click Me")],code:`
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
);`})]),z=()=>m({title:"Introduction",description:"This app shell was created to showcase Base Framework and its components. It is a simple app shell that can be used as a starting point for your project. It is built with Tailwind CSS and uses Shadcn as the inspiration for the theme and many of it's components. "}),u=(t,e,o)=>({uri:t,title:e,component:o()}),J=t=>[u(`${t}`,"Introduction",z),u(`${t}/components/buttons`,"Buttons",q),u(`${t}/components/badges`,"Badges",_)],K=t=>[{href:`${t}`,label:"Introduction",exact:!0},{group:"Components",options:[{label:"Buttons",href:`${t}/components/buttons`},{label:"Badges",href:`${t}/components/badges`}]}],Q=()=>new h({backHref:"aside/"},[new $([r([p([y("Overlay")]),r({class:"contained"},[O()])])])]),W=t=>[{uri:`${t}/overlay-test`,component:Q()}],c="docs",et=()=>new v({title:"Getting Started",basePath:c,routes:W(c),switch:J(c),links:K(c)});export{et as DocumentationPage,et as default};
