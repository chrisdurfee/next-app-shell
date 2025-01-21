import{J as p,ar as I,o as c,c as n,Y as o,z as r,s as g,G as u,aq as b,ah as y}from"./index-BrmtrR1h.js";import{D as f}from"./doc-section-BtN7_w4s.js";import{D as w}from"./doc-page-uFZiMOkO.js";const x=(s,t,e=null)=>(e="Icons"+(e?"."+e:""),o({class:"flex flex-auto flex-col items-center gap-2 w-full max-w-[150px] h-[8.5rem] cursor-pointer"},[o({class:"flex flex-auto w-full h-full justify-center items-center flex-wrap rounded-lg border bg-card text-base shadow-sm hover:bg-muted/50",click:()=>{navigator.clipboard.writeText(`${e}.${t}`),app.notify({title:"Icon copied",description:`The icon '${e}.${t}' has been copied to your clipboard.`,icon:c.clipboard.checked})}},[n(s)]),o({class:"text-muted-foreground"},t)])),d=(s,t,e)=>{const l=typeof s=="object";l&&t.push(u({class:"text-muted-foreground"},"path: "+e+".{icon}"));const i=[];if(t.push(o({class:"flex flex-auto flex-wrap gap-2 my-8"},i)),l===!1)i.push(x(s,e));else for(var a in s){if(s.hasOwnProperty(a)===!1)continue;const m=s[a];if(typeof m!="object"){i.push(x(m,a,e));continue}const h=`${e}.${a}`;d(m,t,h)}},z=s=>{if(!s||typeof s!="object")return;const t=[];for(let[e,l]of Object.entries(s)){if(e==="parse")continue;t.push(b({id:e.toLowerCase(),class:"text-2xl font-bold"},y.titleCase(e))),d(l,t,e)}return t},k=()=>w({title:"Icons",description:"The icons are from the Hericon library. They are SVG icons that can be used in your project. This icon set uses the outline style."},[p({href:"https://heroicons.com/",target:"_blank",class:"bttn link"},"link: Hericons"),f({title:"Icons",description:"This is an icon.",preview:[I({html:c.home})],code:`
import {  Icons  } from "@base-framework/ui/icons";
import { I } from '@base-framework/atoms';

export const HomeIcon = () => (
    I({ html: Icons.home} )
);`}),f({title:"Icon Atom",description:"An Icon is a helper atom that makes it easier to use icons in your project. ",preview:[n(c.home)],code:`
import {  Icon  } from "@base-framework/ui/atoms";

Icon(Icons.home);`}),f({title:"Icon Sizes",description:"Icons can be rendered in various sizes using the `class` property to apply Tailwind CSS classes. The following sizes are available: `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, and `3xl`.",preview:[o({class:"flex flex-wrap gap-4 items-center"},[o({class:"flex flex-col items-center justify-center"},[n({size:"xs"},c.home),r({class:"text-sm text-muted-foreground"},"xs")]),o({class:"flex flex-col items-center justify-center"},[n({size:"sm"},c.home),r({class:"text-sm text-muted-foreground"},"sm")]),o({class:"flex flex-col items-center justify-center"},[n({size:"md"},c.home),r({class:"text-sm text-muted-foreground"},"md")]),o({class:"flex flex-col items-center justify-center"},[n({size:"lg"},c.home),r({class:"text-sm text-muted-foreground"},"lg")]),o({class:"flex flex-col items-center justify-center"},[n({size:"xl"},c.home),r({class:"text-sm text-muted-foreground"},"xl")]),o({class:"flex flex-col items-center justify-center"},[n({size:"2xl"},c.home),r({class:"text-sm text-muted-foreground"},"2xl")]),o({class:"flex flex-col items-center justify-center"},[n({size:"3xl"},c.home),r({class:"text-sm text-muted-foreground"},"3xl")])])],code:`
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
Span('3X Large (16x16)')`}),o({class:"my-20"},[g({class:"text-2xl font-bold"},"Default Icons"),u({class:"text-muted-foreground"},'A few of the icons have been saved to the "Icons" object. You can use these icons in your project. Click to copy the Icon path. Here is a list of the icons that are available:')]),z(c)]);export{k as IconPage,k as default};
