const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/item-list-page-cZfudItT.js","assets/index-CM1IEHgP.js","assets/index-Dsrz2f4p.css","assets/sidebar-menu-page-nCAVFk3R-Di2_rNMK.js","assets/data-table-page-CLMVAbkp.js"])))=>i.map(i=>d[i]);
import{Y as t,l as a,i as s,r as l,w as i,ab as o}from"./index-CM1IEHgP.js";import{S as r}from"./sidebar-menu-page-nCAVFk3R-Di2_rNMK.js";const c=e=>a({class:"flex items-center justify-between"},[l({class:"text-3xl font-bold"},e.title),t({class:"flex items-center gap-2"},[t({class:"hidden md:flex items-center gap-2"},[i({variant:"default"},"Download")])])]),n=()=>t({class:"justify-between flex flex-auto items-center"},[new o({options:[{label:"Item List",href:"list",exact:!0},{label:"Data Table",href:"list/data-table"}],onSelect:e=>console.log("Selected tab:",e)})]),p=()=>new r([t({class:"grid grid-cols-1 p-6 pt-0 md:pt-6 lg:p-8 space-y-4"},[c({title:"List"}),n(),t({switch:[{uri:"list",import:()=>s(()=>import("./item-list-page-cZfudItT.js"),__vite__mapDeps([0,1,2,3]))},{uri:"list/data-table",import:()=>s(()=>import("./data-table-page-CLMVAbkp.js"),__vite__mapDeps([4,1,2,3]))}]})])]);export{p as ListPage,p as default};
