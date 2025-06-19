import{J as h,Y as s,h as I,o,a as t,z as r,a8 as b,G as u,ar as g,ap as w}from"./index-CduFaffX.js";import"./tooltip-DcnXGw52-DqBtPdiL.js";import{D as m}from"./doc-section-Ctu7LYiw.js";import{D as y}from"./doc-page-BlYYcMLT.js";import"./signature-panel-BmP_6HMl-TSHisU5O.js";import"./sidebar-menu-page-D7hAflPD-BXSYhEej.js";import"./mobile-nav-wrapper-CZc3wUuE-C4bAL9eS.js";const x=(c,n,e=null)=>(e="Icons"+(e?"."+e:""),s({class:"flex flex-auto flex-col items-center gap-2 w-full max-w-[150px] h-[8.5rem] cursor-pointer"},[s({class:"flex flex-auto w-full h-full justify-center items-center flex-wrap rounded-lg border bg-card text-base shadow-sm hover:bg-muted/50",click:()=>{navigator.clipboard.writeText(`${e}.${n}`),app.notify({title:"Icon copied",description:`The icon '${e}.${n}' has been copied to your clipboard.`,icon:o.clipboard.checked})}},[t(c)]),s({class:"text-muted-foreground"},n)])),d=(c,n,e)=>{const l=typeof c=="object";l&&n.push(u({class:"text-muted-foreground"},"path: "+e+".{icon}"));const i=[];if(n.push(s({class:"flex flex-auto flex-wrap gap-2 my-8"},i)),l===!1)i.push(x(c,e));else for(var a in c){if(c.hasOwnProperty(a)===!1)continue;const f=c[a];if(typeof f!="object"){i.push(x(f,a,e));continue}const p=`${e}.${a}`;d(f,n,p)}},z=c=>{if(!c||typeof c!="object")return;const n=[];for(let[e,l]of Object.entries(c)){if(e==="parse")continue;n.push(g({id:e.toLowerCase(),class:"text-2xl font-bold"},w.titleCase(e))),d(l,n,e)}return n},D=()=>y({title:"Icons",description:"The icons are from the Hericon library. They are SVG icons that can be used in your project. This icon set uses the outline style."},[h({href:"https://heroicons.com/",target:"_blank",class:"bttn link"},"link: Hericons"),m({title:"Icons",description:"This is an icon.",preview:[I({html:o.home})],code:`
import {  Icons  } from "@base-framework/ui/icons";
import { I } from '@base-framework/atoms';

export const HomeIcon = () => (
	I({ html: Icons.home} )
);`}),m({title:"Icon Atom",description:"An Icon is a helper atom that makes it easier to use icons in your project. ",preview:[t(o.home)],code:`
import {  Icon  } from "@base-framework/ui/atoms";

Icon(Icons.home);`}),m({title:"Icon Sizes",description:"Icons can be rendered in various sizes using the `class` property to apply Tailwind CSS classes. The following sizes are available: `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, and `3xl`.",preview:[s({class:"flex flex-wrap gap-4 items-center"},[s({class:"flex flex-col items-center justify-center"},[t({size:"xs"},o.home),r({class:"text-sm text-muted-foreground"},"xs")]),s({class:"flex flex-col items-center justify-center"},[t({size:"sm"},o.home),r({class:"text-sm text-muted-foreground"},"sm")]),s({class:"flex flex-col items-center justify-center"},[t({size:"md"},o.home),r({class:"text-sm text-muted-foreground"},"md")]),s({class:"flex flex-col items-center justify-center"},[t({size:"lg"},o.home),r({class:"text-sm text-muted-foreground"},"lg")]),s({class:"flex flex-col items-center justify-center"},[t({size:"xl"},o.home),r({class:"text-sm text-muted-foreground"},"xl")]),s({class:"flex flex-col items-center justify-center"},[t({size:"2xl"},o.home),r({class:"text-sm text-muted-foreground"},"2xl")]),s({class:"flex flex-col items-center justify-center"},[t({size:"3xl"},o.home),r({class:"text-sm text-muted-foreground"},"3xl")])])],code:`
import {  Icon  } from "@base-framework/ui/atoms";

Icon({ size: 'xs' }, Icons.home),
Span('Extra Small (4x4)'),
Icon({ size: 'sm' }, Icons.home),
Span('Small (6x6)'),
Icon({ size: 'md' }, Icons.home),
Span('Medium (8x8)'),
Icon({ size: 'lg' }, Icons.home),
Span('Large (10x10)'),
Icon({ size: 'xl' }, Icons.home),
Span('Extra Large (12x12)'),
Icon({ size: '2xl' }, Icons.home),
Span('2X Large (14x14)'),
Icon({ size: '3xl' }, Icons.home),
Span('3X Large (16x16)')`}),m({title:"Icon Colors",description:"Icons can be rendered in various colors using the `class` property to apply Tailwind CSS classes.",preview:[s({class:"flex flex-wrap gap-4 items-center"},[t({class:"text-red-500"},o.phone.missed),t({class:"text-blue-500"},o.phone.inbound),t({class:"text-yellow-500"},o.phone.outbound)])],code:`
import {  Icon  } from "@base-framework/ui/atoms";

Icon({ class: 'text-red-500' }, Icons.phone.missed),
Icon({ class: 'text-blue-500' }, Icons.phone.inbound),
Icon({ class: 'text-yellow-500' }, Icons.phone.outbound)`}),s({class:"my-20"},[b({class:"text-2xl font-bold"},"Default Icons"),u({class:"text-muted-foreground"},'A few of the icons have been saved to the "Icons" object. You can use these icons in your project. Click to copy the Icon path. Here is a list of the icons that are available:')]),z(o)]);export{D as IconPage,D as default};
