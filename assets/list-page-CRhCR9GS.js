const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/item-list-page-D2cEbJ-u.js","assets/index-Ccq8zL_M.js","assets/index-Cl2FQjiY.css","assets/tooltip-DSfp01wQ-BuNZT3j0.js","assets/signature-panel-CN_WhW5E-CUfz-X8N.js","assets/sidebar-menu-page-nCAVFk3R-Dy9zwf17.js","assets/mobile-nav-wrapper-BE_hr65B-BVAYha_Y.js","assets/data-table-page-OIbwJ2hS.js"])))=>i.map(i=>d[i]);
import{Y as t,l as a,_ as s,r as l,w as i}from"./index-Ccq8zL_M.js";import"./tooltip-DSfp01wQ-BuNZT3j0.js";import{Y as o}from"./signature-panel-CN_WhW5E-CUfz-X8N.js";import{S as r}from"./sidebar-menu-page-nCAVFk3R-Dy9zwf17.js";import"./mobile-nav-wrapper-BE_hr65B-BVAYha_Y.js";const c=e=>a({class:"flex items-center justify-between"},[l({class:"text-3xl font-bold"},e.title),t({class:"flex items-center gap-2"},[t({class:"hidden md:flex items-center gap-2"},[i({variant:"default"},"Download")])])]),m=()=>t({class:"justify-between flex flex-auto items-center"},[new o({options:[{label:"Item List",href:"list",exact:!0},{label:"Data Table",href:"list/data-table"}],onSelect:e=>console.log("Selected tab:",e)})]),b=()=>new r([t({class:"grid grid-cols-1 p-6 pt-0 md:pt-6 lg:p-8 space-y-4"},[c({title:"List"}),m(),t({switch:[{uri:"list",import:()=>s(()=>import("./item-list-page-D2cEbJ-u.js"),__vite__mapDeps([0,1,2,3,4,5,6]))},{uri:"list/data-table",import:()=>s(()=>import("./data-table-page-OIbwJ2hS.js"),__vite__mapDeps([7,1,2,3,4,5,6]))}]})])]);export{b as ListPage,b as default};
