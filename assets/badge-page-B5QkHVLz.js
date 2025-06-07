import{Y as t}from"./index-Dx0LQm6N.js";import{T as e}from"./tooltip-DFe_Pzhn-D71vWXNc.js";import{D as r}from"./doc-section-CzV0w15H.js";import{D as p}from"./doc-page-CEkIZ5x2.js";import"./signature-panel-Dl_Tkisq-BgGdiPZl.js";import"./sidebar-menu-page-RXqfmxT9-BDGjrbCO.js";import"./mobile-nav-wrapper-CHGsD0xe-D4B5XH8Z.js";const x=()=>p({title:"Badges",description:"Badges can be used to display a status or a count."},[r({title:"Badge",description:"This is a badge.",preview:[t({class:"flex gap-2 flex-wrap"},[e({type:"gray"},"Text"),e({type:"red"},"Text"),e({type:"yellow"},"Text"),e({type:"green"},"Text"),e({type:"blue"},"Text"),e({type:"indigo"},"Text"),e({type:"purple"},"Text"),e({type:"pink"},"Text"),e({type:"primary"},"Text"),e({type:"secondary"},"Text"),e({type:"destructive"},"Text"),e({type:"warning"},"Text"),e({type:"outline"},"Text"),e({type:"ghost"},"Text"),e({type:"link"},"Text")])],code:`
import { Badge } from "@base-framework/ui/atoms";
import { Atom } from '@base-framework/base';

export const PrimaryBadge = Atom((props, children)) => (
    Badge({ ...props, type: 'gray' }, children)
);`})]);export{x as BadgePage,x as default};
