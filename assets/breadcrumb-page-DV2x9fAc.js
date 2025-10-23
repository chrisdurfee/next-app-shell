import{am as a,aL as t}from"./index-BZvTxwmY.js";import{D as e}from"./doc-section-DItVm-3a.js";import{D as i}from"./doc-page-B48XD3RA.js";import"./signature-panel-C73NYC3W-Dm9S2t2v.js";import"./tooltip-PupzYM1r-D1q7_jrM.js";import"./sidebar-menu-page-D4WMgz5U-DxjO_GSu.js";import"./mobile-nav-wrapper-Dm9DinRD-JwKwCUMn.js";const r=[{href:"/",label:"Home"},{href:"/components",label:"Components"},{label:"Breadcrumb"}],u=()=>i({title:"Breadcrumbs",description:"Breadcrumbs are a navigation aid that helps users understand their location within a website or application."},[e({title:"Usage",description:"To use the Breadcrumb component, import it and provide an array of items. Each item can have a label and an optional href.",preview:[new a({items:r})],code:`import {  Breadcrumb  } from "@base-framework/ui/molecules";

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
