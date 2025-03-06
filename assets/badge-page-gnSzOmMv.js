import{Y as t}from"./index-DF7NhYeN.js";import{F as e}from"./tooltip-Cy5agtG6-BkHo-BA4.js";import{D as r}from"./doc-section-D9LOT0Fa.js";import{D as o}from"./doc-page-BsZQ1Ce2.js";import"./signature-panel-CrKk8upb-Dxy7uLxI.js";import"./sidebar-menu-page-nCAVFk3R-i6nPOcV8.js";import"./mobile-nav-wrapper-BE_hr65B-DM5V8LzF.js";const x=()=>o({title:"Badges",description:"Badges can be used to display a status or a count."},[r({title:"Badge",description:"This is a badge.",preview:[t({class:"flex gap-2 flex-wrap"},[e({type:"gray"},"Text"),e({type:"red"},"Text"),e({type:"yellow"},"Text"),e({type:"green"},"Text"),e({type:"blue"},"Text"),e({type:"indigo"},"Text"),e({type:"purple"},"Text"),e({type:"pink"},"Text"),e({type:"primary"},"Text"),e({type:"secondary"},"Text"),e({type:"destructive"},"Text"),e({type:"warning"},"Text"),e({type:"outline"},"Text"),e({type:"ghost"},"Text"),e({type:"link"},"Text")])],code:`
import {  Button  } from "@base-framework/ui/atoms";
import { Atom } from '@base-framework/base';

export const PrimaryBadge = Atom((props, children)) => (
    Badge({ ...props, type: 'gray' }, children)
);`})]);export{x as BadgePage,x as default};
