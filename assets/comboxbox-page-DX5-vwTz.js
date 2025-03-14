import{Y as o,ax as t,o as l}from"./index-CIa8X0pa.js";import{D as a}from"./doc-section-DWzRLA8e.js";import{D as s}from"./doc-page-XYx8vJgX.js";import"./signature-panel-CrKk8upb-B2tXSyv8.js";import"./tooltip-Cy5agtG6-GfoFr76G.js";import"./sidebar-menu-page-nCAVFk3R-qrLnBVEM.js";import"./mobile-nav-wrapper-BE_hr65B-BmzqE0Fy.js";const i=[{value:"next.js",label:"Next.js",icon:l.home},{value:"sveltekit",label:"SvelteKit"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}],p=()=>s({title:"Comboboxes",description:"Comboboxes are used to allow users to select an option from a dropdown list or enter a custom value."},[a({title:"Usage",description:"To use the Combobox component, import it from the components library and use it in your application.",preview:[o({class:"w-full max-w-[300px]"},[new t({items:i,onSelect:e=>console.log(e)})])],code:`import { Combobox } from "@base-framework/ui/molecules";
import { Icons } from "@base-framework/ui/icons";

new Combobox({
    width: 'w-full', // this is the default value
    maxWidth: 'max-w-[250px]', // this is the default value
    class: '',
    onSelect: (item) => console.log(item),
    selectedFirst: false,
    required: false,
    items: [
        { value: 'next.js', label: 'Next.js', icon: Icons.home },
        { value: 'sveltekit', label: 'SvelteKit' },
        { value: 'nuxt.js', label: 'Nuxt.js' },
        { value: 'remix', label: 'Remix' },
        { value: 'astro', label: 'Astro' },
    ],
})`})]);export{p as ComboboxPage,p as default};
