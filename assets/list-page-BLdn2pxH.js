const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/item-list-page-DbSpmot8.js","assets/index-CIa8X0pa.js","assets/index-Cl2FQjiY.css","assets/tooltip-Cy5agtG6-GfoFr76G.js","assets/signature-panel-CrKk8upb-B2tXSyv8.js","assets/sidebar-menu-page-nCAVFk3R-qrLnBVEM.js","assets/mobile-nav-wrapper-BE_hr65B-BmzqE0Fy.js","assets/data-table-page-zhJAqQWh.js"])))=>i.map(i=>d[i]);
import{Y as t,l as a,_ as s,r as l,w as i}from"./index-CIa8X0pa.js";import"./tooltip-Cy5agtG6-GfoFr76G.js";import{Q as o}from"./signature-panel-CrKk8upb-B2tXSyv8.js";import{S as r}from"./sidebar-menu-page-nCAVFk3R-qrLnBVEM.js";import"./mobile-nav-wrapper-BE_hr65B-BmzqE0Fy.js";const c=e=>a({class:"flex items-center justify-between"},[l({class:"text-3xl font-bold"},e.title),t({class:"flex items-center gap-2"},[t({class:"hidden md:flex items-center gap-2"},[i({variant:"default"},"Download")])])]),m=()=>t({class:"justify-between flex flex-auto items-center"},[new o({options:[{label:"Item List",href:"list",exact:!0},{label:"Data Table",href:"list/data-table"}],onSelect:e=>console.log("Selected tab:",e)})]),b=()=>new r([t({class:"grid grid-cols-1 p-6 pt-0 md:pt-6 lg:p-8 space-y-4"},[c({title:"List"}),m(),t({switch:[{uri:"list",import:()=>s(()=>import("./item-list-page-DbSpmot8.js"),__vite__mapDeps([0,1,2,3,4,5,6]))},{uri:"list/data-table",import:()=>s(()=>import("./data-table-page-zhJAqQWh.js"),__vite__mapDeps([7,1,2,3,4,5,6]))}]})])]);export{b as ListPage,b as default};
