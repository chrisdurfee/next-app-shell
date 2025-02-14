import{Y as o,aV as t,o as l}from"./index-CTMBVTgi.js";import{D as a}from"./doc-section-B5MLyJ6l.js";import{D as s}from"./doc-page-DECL55TA.js";import"./sidebar-menu-page-nCAVFk3R-BBp5DXXT.js";import"./mobile-nav-wrapper-BE_hr65B-CAXk0kU7.js";const i=[{value:"next.js",label:"Next.js",icon:l.home},{value:"sveltekit",label:"SvelteKit"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}],c=()=>s({title:"Comboboxes",description:"Comboboxes are used to allow users to select an option from a dropdown list or enter a custom value."},[a({title:"Usage",description:"To use the Combobox component, import it from the components library and use it in your application.",preview:[o({class:"w-full max-w-[300px]"},[new t({items:i,onSelect:e=>console.log(e)})])],code:`@base-framework/ui/molecules;
import {  Icons  } from "@base-framework/ui/icons";

new Combobox({
    items: [
    { value: 'next.js', label: 'Next.js', icon: Icons.home },,
    { value: 'sveltekit', label: 'SvelteKit' },
    { value: 'nuxt.js', label: 'Nuxt.js' },
    { value: 'remix', label: 'Remix' },
    { value: 'astro', label: 'Astro' },
],
})`})]);export{c as ComboboxPage,c as default};
