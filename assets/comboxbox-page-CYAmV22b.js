import{P as o,aH as t,o as l}from"./index-CP8jrxIH.js";import{D as a}from"./doc-section-CF8wK_oc.js";import{D as s}from"./doc-page-Bx2enCuC.js";import"./signature-panel-C73NYC3W-DZ7DzhJ8.js";import"./tooltip-PupzYM1r-BMm54Ryq.js";import"./sidebar-menu-page-D4WMgz5U-JHGF_AP6.js";import"./mobile-nav-wrapper-Dm9DinRD-vR8I12Pj.js";const i=[{value:"next.js",label:"Next.js",icon:l.home},{value:"sveltekit",label:"SvelteKit"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}],p=()=>s({title:"Comboboxes",description:"Comboboxes are used to allow users to select an option from a dropdown list or enter a custom value."},[a({title:"Usage",description:"To use the Combobox component, import it from the components library and use it in your application.",preview:[o({class:"w-full max-w-[300px]"},[new t({items:i,onSelect:e=>console.log(e)})])],code:`import { Combobox } from "@base-framework/ui/molecules";
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
