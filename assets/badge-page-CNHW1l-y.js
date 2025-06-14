import{Y as t}from"./index-BHqWoJtt.js";import{T as e}from"./tooltip-DcnXGw52-33fqVqb1.js";import{D as r}from"./doc-section-zS8HnKsw.js";import{D as p}from"./doc-page-7lv0Al8i.js";import"./signature-panel-Dl_Tkisq-DsFyIrvg.js";import"./sidebar-menu-page-DyIwNFwe-DOGQX02Z.js";import"./mobile-nav-wrapper-CuATTfqK-DNYc0OwV.js";const x=()=>p({title:"Badges",description:"Badges can be used to display a status or a count."},[r({title:"Badge",description:"This is a badge.",preview:[t({class:"flex gap-2 flex-wrap"},[e({type:"gray"},"Text"),e({type:"red"},"Text"),e({type:"yellow"},"Text"),e({type:"green"},"Text"),e({type:"blue"},"Text"),e({type:"indigo"},"Text"),e({type:"purple"},"Text"),e({type:"pink"},"Text"),e({type:"primary"},"Text"),e({type:"secondary"},"Text"),e({type:"destructive"},"Text"),e({type:"warning"},"Text"),e({type:"outline"},"Text"),e({type:"ghost"},"Text"),e({type:"link"},"Text")])],code:`
import { Badge } from "@base-framework/ui/atoms";
import { Atom } from '@base-framework/base';

export const PrimaryBadge = Atom((props, children)) => (
    Badge({ ...props, type: 'gray' }, children)
);`})]);export{x as BadgePage,x as default};
