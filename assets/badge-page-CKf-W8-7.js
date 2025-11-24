import{z as t}from"./index-Bt23JU-6.js";import{T as e}from"./tooltip-PupzYM1r-BICsgM0L.js";import{D as r}from"./doc-section-vuouDAgB.js";import{D as p}from"./doc-page-DnqEgfsD.js";import"./signature-panel-DIFmtS0f-7_NKaw02.js";import"./sidebar-menu-page-D4WMgz5U-BewHeLxc.js";import"./mobile-nav-wrapper-Dm9DinRD-C2gAvSXV.js";const x=()=>p({title:"Badges",description:"Badges can be used to display a status or a count."},[r({title:"Badge",description:"This is a badge.",preview:[t({class:"flex gap-2 flex-wrap"},[e({type:"gray"},"Text"),e({type:"red"},"Text"),e({type:"yellow"},"Text"),e({type:"green"},"Text"),e({type:"blue"},"Text"),e({type:"indigo"},"Text"),e({type:"purple"},"Text"),e({type:"pink"},"Text"),e({type:"primary"},"Text"),e({type:"secondary"},"Text"),e({type:"destructive"},"Text"),e({type:"warning"},"Text"),e({type:"outline"},"Text"),e({type:"ghost"},"Text"),e({type:"link"},"Text")])],code:`
import { Badge } from "@base-framework/ui/atoms";
import { Atom } from '@base-framework/base';

export const PrimaryBadge = Atom((props, children)) => (
    Badge({ ...props, type: 'gray' }, children)
);`})]);export{x as BadgePage,x as default};
