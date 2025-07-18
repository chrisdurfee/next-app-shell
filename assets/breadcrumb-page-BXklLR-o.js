import{ak as a,aD as t}from"./index-Ca2wYzS_.js";import{D as e}from"./doc-section-BfWgXX9I.js";import{D as i}from"./doc-page-BmKPHw2c.js";import"./signature-panel-Bkj-9bST-CqFxXsgp.js";import"./tooltip-Ssw4NmQM-D5LBrR6v.js";import"./sidebar-menu-page-BVryQj2Z-AigpUbjK.js";import"./mobile-nav-wrapper-Dj67Pb8l-DRFZ_BK5.js";const r=[{href:"/",label:"Home"},{href:"/components",label:"Components"},{label:"Breadcrumb"}],u=()=>i({title:"Breadcrumbs",description:"Breadcrumbs are a navigation aid that helps users understand their location within a website or application."},[e({title:"Usage",description:"To use the Breadcrumb component, import it and provide an array of items. Each item can have a label and an optional href.",preview:[new a({items:r})],code:`import {  Breadcrumb  } from "@base-framework/ui/molecules";

new Breadcrumb({ items: [
    { href: '/', label: 'Home' },
    { href: '/components', label: 'Components' },
    { label: 'Breadcrumb' } // Last item, no href needed
] })`}),e({title:"Dots Indicator",description:'The Dots Indicator component is used to display a row of circular dots, one of which is "active." The dots can be set to a specific size and count. The sizes are xs, sm, md, lg, xl, 2xl, and 3xl.',preview:[new t({count:6,size:"sm",gap:"gap-2",onClick:o=>console.log("Clicked dot",o)})],code:`import DotsIndicator from "@base-framework/ui/molecules";

new DotsIndicator({
    count: 6,
    size: 'sm',
    gap: 'gap-2',
    onClick: (index) => console.log('Clicked dot', index)
})`})]);export{u as BreadcrumbPage,u as default};
