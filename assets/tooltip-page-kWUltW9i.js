import{G as p,Y as t,w as o}from"./index-jCf4WMsB.js";import{a as e}from"./tooltip-DcnXGw52-OUm2u8Fa.js";import{D as i}from"./doc-section-BhAxWWoC.js";import{D as l}from"./doc-page-Cyd7jMzt.js";import"./signature-panel-DEX9Sggs-j14qkZY4.js";import"./sidebar-menu-page-DyIwNFwe-vQ19D-5Z.js";import"./mobile-nav-wrapper-CuATTfqK-BH8fQkqG.js";const f=()=>l({title:"Tooltips",description:"Tooltips are small popups that appear when a user hovers over an element."},[i({title:"Usage",description:"Import the tooltip atom and use it in your components.",preview:[t({class:"flex gap-2 flex-wrap"},[e({content:"This is a tooltip."},[o("Hover me")])])],code:`import {  Button  } from "@base-framework/ui/atoms";
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
