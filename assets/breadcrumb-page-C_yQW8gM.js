import{aj as a,az as t}from"./index-M-6RzAdf.js";import{D as e}from"./doc-section-CTdkwvM0.js";import{D as i}from"./doc-page-71w1JHT-.js";import"./signature-panel-Dl_Tkisq-Cc7oYuJe.js";import"./tooltip-DcnXGw52-DkqMS6Bo.js";import"./sidebar-menu-page-DyIwNFwe-Y2hoC7z6.js";import"./mobile-nav-wrapper-CuATTfqK-DYlKXSTS.js";const r=[{href:"/",label:"Home"},{href:"/components",label:"Components"},{label:"Breadcrumb"}],u=()=>i({title:"Breadcrumbs",description:"Breadcrumbs are a navigation aid that helps users understand their location within a website or application."},[e({title:"Usage",description:"To use the Breadcrumb component, import it and provide an array of items. Each item can have a label and an optional href.",preview:[new a({items:r})],code:`import {  Breadcrumb  } from "@base-framework/ui/molecules";

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
