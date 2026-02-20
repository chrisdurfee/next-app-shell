import{ac as a,bg as t}from"./index-CAtlfimY.js";import{D as e}from"./doc-section-BmwD-w3i.js";import{D as i}from"./doc-page-Cs2adT5a.js";import"./signature-panel-Dwnm79Sg-BWEGvBjL.js";import"./sidebar-menu-page-DFRJL944-BtEPb0m7.js";import"./full-page-CgVI1G7F-DJ0Pcr5g.js";import"./mobile-nav-wrapper-9VRCW4oA-DNLUn6P_.js";import"./sidebar-menu-DLGBb0-I-Bf4tpJkn.js";const r=[{href:"/",label:"Home"},{href:"/components",label:"Components"},{label:"Breadcrumb"}],b=()=>i({title:"Breadcrumbs",description:"Breadcrumbs are a navigation aid that helps users understand their location within a website or application."},[e({title:"Usage",description:"To use the Breadcrumb component, import it and provide an array of items. Each item can have a label and an optional href.",preview:[new a({items:r})],code:`import {  Breadcrumb  } from "@base-framework/ui/molecules";

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
})`})]);export{b as BreadcrumbPage,b as default};
