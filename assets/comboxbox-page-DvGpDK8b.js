import{Y as o,ax as t,o as l}from"./index-BuY1eBCN.js";import{D as a}from"./doc-section-C9e3bMWL.js";import{D as s}from"./doc-page-snXBBcXJ.js";import"./signature-panel-Dl_Tkisq-CpYyCnOz.js";import"./tooltip-DcnXGw52-CfoB-Z5A.js";import"./sidebar-menu-page-D_2zNFuZ-HbYaclHg.js";import"./mobile-nav-wrapper-BWeAn5lg-B4cZJF1a.js";const i=[{value:"next.js",label:"Next.js",icon:l.home},{value:"sveltekit",label:"SvelteKit"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}],p=()=>s({title:"Comboboxes",description:"Comboboxes are used to allow users to select an option from a dropdown list or enter a custom value."},[a({title:"Usage",description:"To use the Combobox component, import it from the components library and use it in your application.",preview:[o({class:"w-full max-w-[300px]"},[new t({items:i,onSelect:e=>console.log(e)})])],code:`import { Combobox } from "@base-framework/ui/molecules";
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
