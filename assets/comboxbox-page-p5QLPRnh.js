import{Y as o,aw as t,o as l}from"./index-DNCvU8Jp.js";import{D as a}from"./doc-section-COHh1Kd6.js";import{D as s}from"./doc-page-CRQApa0O.js";import"./signature-panel-B3v8V9MU-CJsACb48.js";import"./tooltip-JULShdSj-DUSERjms.js";import"./sidebar-menu-page-nCAVFk3R-PRTXa_vi.js";import"./mobile-nav-wrapper-BE_hr65B-BAtWoywG.js";const i=[{value:"next.js",label:"Next.js",icon:l.home},{value:"sveltekit",label:"SvelteKit"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}],x=()=>s({title:"Comboboxes",description:"Comboboxes are used to allow users to select an option from a dropdown list or enter a custom value."},[a({title:"Usage",description:"To use the Combobox component, import it from the components library and use it in your application.",preview:[o({class:"w-full max-w-[300px]"},[new t({items:i,onSelect:e=>console.log(e)})])],code:`@base-framework/ui/molecules;
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
