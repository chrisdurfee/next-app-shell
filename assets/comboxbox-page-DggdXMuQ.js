import{Y as o,aw as t,o as l}from"./index-Ccq8zL_M.js";import{D as a}from"./doc-section-D3lxoAjM.js";import{D as s}from"./doc-page-Bk3BIzEu.js";import"./signature-panel-CN_WhW5E-CUfz-X8N.js";import"./tooltip-DSfp01wQ-BuNZT3j0.js";import"./sidebar-menu-page-nCAVFk3R-Dy9zwf17.js";import"./mobile-nav-wrapper-BE_hr65B-BVAYha_Y.js";const i=[{value:"next.js",label:"Next.js",icon:l.home},{value:"sveltekit",label:"SvelteKit"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}],x=()=>s({title:"Comboboxes",description:"Comboboxes are used to allow users to select an option from a dropdown list or enter a custom value."},[a({title:"Usage",description:"To use the Combobox component, import it from the components library and use it in your application.",preview:[o({class:"w-full max-w-[300px]"},[new t({items:i,onSelect:e=>console.log(e)})])],code:`@base-framework/ui/molecules;
import {  Icons  } from "@base-framework/ui/icons";

new Combobox({
    items: [
    { value: 'next.js', label: 'Next.js', icon: Icons.home },,
    { value: 'sveltekit', label: 'SvelteKit' },
    { value: 'nuxt.js', label: 'Nuxt.js' },
    { value: 'remix', label: 'Remix' },
    { value: 'astro', label: 'Astro' },
],
})`})]);export{x as ComboboxPage,x as default};
