import{Y as t}from"./index-BGJlo8dF.js";import{T as e}from"./tooltip-DcnXGw52-B8IwmAYo.js";import{D as r}from"./doc-section-DfcBd6ys.js";import{D as p}from"./doc-page-B03tBofT.js";import"./signature-panel-BmP_6HMl-K4XYYZ9l.js";import"./sidebar-menu-page-BVryQj2Z-t26rbSvL.js";import"./mobile-nav-wrapper-Dj67Pb8l-YVuCgiE1.js";const x=()=>p({title:"Badges",description:"Badges can be used to display a status or a count."},[r({title:"Badge",description:"This is a badge.",preview:[t({class:"flex gap-2 flex-wrap"},[e({type:"gray"},"Text"),e({type:"red"},"Text"),e({type:"yellow"},"Text"),e({type:"green"},"Text"),e({type:"blue"},"Text"),e({type:"indigo"},"Text"),e({type:"purple"},"Text"),e({type:"pink"},"Text"),e({type:"primary"},"Text"),e({type:"secondary"},"Text"),e({type:"destructive"},"Text"),e({type:"warning"},"Text"),e({type:"outline"},"Text"),e({type:"ghost"},"Text"),e({type:"link"},"Text")])],code:`
import { Badge } from "@base-framework/ui/atoms";
import { Atom } from '@base-framework/base';

export const PrimaryBadge = Atom((props, children)) => (
    Badge({ ...props, type: 'gray' }, children)
);`})]);export{x as BadgePage,x as default};
