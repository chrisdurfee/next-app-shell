import{G as p,Y as t,b as o}from"./index-ChOLM_RV.js";import{a as e}from"./tooltip-CESEqMCU-OyesE2ig.js";import{D as i}from"./doc-section-q2Ja_sfK.js";import{D as l}from"./doc-page-CMeQFQKL.js";import"./signature-panel-rfv7cz7U-CGFQX5yh.js";import"./sidebar-menu-page-BVryQj2Z-868pA1kz.js";import"./mobile-nav-wrapper-Dj67Pb8l-D8OjDX4O.js";const f=()=>l({title:"Tooltips",description:"Tooltips are small popups that appear when a user hovers over an element."},[i({title:"Usage",description:"Import the tooltip atom and use it in your components.",preview:[t({class:"flex gap-2 flex-wrap"},[e({content:"This is a tooltip."},[o("Hover me")])])],code:`import {  Button  } from "@base-framework/ui/atoms";
import {  Tooltip  } from "@base-framework/ui/atoms";

Tooltip({ content: 'This is a tooltip.' }, [
    Button('Hover me')
])`}),i({title:"Bottom Tooltip",description:"This will show the tooltip at the bottom of the target element.",preview:[t({class:"flex gap-2 flex-wrap"},[e({content:"This is a tooltip.",position:"bottom"},[o("Hover me")])])],code:`Tooltip({ content: 'This is a tooltip.', position: 'bottom' }, [
    Button('Hover me')
])`}),i({title:"Top-Right Tooltip",description:"This will show the tooltip at the top-right of the target element.",preview:[t({class:"flex gap-2 flex-wrap"},[e({content:"This is a tooltip.",position:"top-right"},[o("Hover me")])])],code:`Tooltip({ content: 'This is a tooltip.', position: 'top-right' }, [
    Button('Hover me')
])`}),i({title:"Top-Left Tooltip",description:"This will show the tooltip at the top-left of the target element.",preview:[t({class:"flex gap-2 flex-wrap"},[e({content:"This is a tooltip.",position:"top-left"},[o("Hover me")])])],code:`Tooltip({ content: 'This is a tooltip.', position: 'top-left' }, [
    Button('Hover me')
])`}),i({title:"Bottom-Right Tooltip",description:"This will show the tooltip at the bottom-right of the target element.",preview:[t({class:"flex gap-2 flex-wrap"},[e({content:"This is a tooltip.",position:"bottom-right"},[o("Hover me")])])],code:`Tooltip({ content: 'This is a tooltip.', position: 'bottom-right' }, [
    Button('Hover me')
])`}),i({title:"Bottom-Left Tooltip",description:"This will show the tooltip at the bottom-left of the target element.",preview:[t({class:"flex gap-2 flex-wrap"},[e({content:"This is a tooltip.",position:"bottom-left"},[o("Hover me")])])],code:`Tooltip({ content: 'This is a tooltip.', position: 'bottom-left' }, [
    Button('Hover me')
])`}),i({title:"Left Tooltip",description:"This will show the tooltip to the left of the target element.",preview:[t({class:"flex gap-2 flex-wrap"},[e({content:"This is a tooltip.",position:"left"},[o("Hover me")])])],code:`Tooltip({ content: 'This is a tooltip.', position: 'left' }, [
    Button('Hover me')
])`}),i({title:"Right Tooltip",description:"This will show the tooltip to the right of the target element.",preview:[t({class:"flex gap-2 flex-wrap"},[e({content:"This is a tooltip.",position:"right"},[o("Hover me")])])],code:`Tooltip({ content: 'This is a tooltip.', position: 'right' }, [
    Button('Hover me')
])`}),p({class:"text-muted-foreground text-sm mt-4"},"The tooltip position can be set to: top, top-right, top-left, bottom, bottom-right, bottom-left, left, right.")]);export{f as TooltipPage,f as default};
