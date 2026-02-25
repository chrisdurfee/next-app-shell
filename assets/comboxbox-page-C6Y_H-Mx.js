import{z as o,b9 as t,s as l}from"./index-CJnrX494.js";import{D as s}from"./doc-section-Db3WSn-1.js";import{D as a}from"./doc-page-L49zK9-d.js";import"./signature-panel-h1ranAet-MInGxwdh.js";import"./sidebar-menu-page-BImgFKeY-Cx7z5SsA.js";import"./full-page-CgVI1G7F-CdDt1lPX.js";import"./mobile-nav-wrapper-C7cKTxaV-C6uLGK7P.js";import"./sidebar-menu-Dz2oh95a-BJu2S9D5.js";const i=[{value:"next.js",label:"Next.js",icon:l.home},{value:"sveltekit",label:"SvelteKit"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}],v=()=>a({title:"Comboboxes",description:"Comboboxes are used to allow users to select an option from a dropdown list or enter a custom value."},[s({title:"Usage",description:"To use the Combobox component, import it from the components library and use it in your application.",preview:[o({class:"w-full max-w-[300px]"},[new t({items:i,onSelect:e=>console.log(e)})])],code:`import { Combobox } from "@base-framework/ui/molecules";
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
})`})]);export{v as ComboboxPage,v as default};
