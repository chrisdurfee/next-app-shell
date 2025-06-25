import{Y as o,ay as t,o as l}from"./index-CbGL_4kt.js";import{D as a}from"./doc-section-CZilFukz.js";import{D as s}from"./doc-page-BUL_d4kv.js";import"./signature-panel-C8UM0F7Y-CmmC5v9J.js";import"./tooltip-CESEqMCU-CGl4tIan.js";import"./sidebar-menu-page-BVryQj2Z-Do-zwJ__.js";import"./mobile-nav-wrapper-Dj67Pb8l-JT8-GhBM.js";const i=[{value:"next.js",label:"Next.js",icon:l.home},{value:"sveltekit",label:"SvelteKit"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}],p=()=>s({title:"Comboboxes",description:"Comboboxes are used to allow users to select an option from a dropdown list or enter a custom value."},[a({title:"Usage",description:"To use the Combobox component, import it from the components library and use it in your application.",preview:[o({class:"w-full max-w-[300px]"},[new t({items:i,onSelect:e=>console.log(e)})])],code:`import { Combobox } from "@base-framework/ui/molecules";
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
