const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/overview-dashboard-CFK9Deh2.js","assets/index-CBwswux2.js","assets/index-Cl2FQjiY.css","assets/tooltip-Dxg9P7AJ-CR-yZqXi.js","assets/analytics-dashboard-5mJ9Wi54.js","assets/sidebar-menu-page-BmD_Bi-v-CXru_ig9.js","assets/mobile-nav-wrapper-BE_hr65B-TmGjiQlG.js"])))=>i.map(i=>d[i]);
import{Y as e,l as r,_ as a,r as s,A as o,o as i,w as l}from"./index-CBwswux2.js";import"./tooltip-Dxg9P7AJ-CR-yZqXi.js";import{Q as d}from"./signature-panel-BFels99c-FHnYLQ_Z.js";import{c}from"./sidebar-menu-page-BmD_Bi-v-CXru_ig9.js";import"./mobile-nav-wrapper-BE_hr65B-TmGjiQlG.js";const n=()=>r({class:"flex items-center justify-between"},[s({class:"text-3xl font-bold"},"Dashboard"),e({class:"flex items-center gap-2"},[new o({label:"Pick a date",icon:i.calendar}),e({class:"hidden md:flex items-center gap-2"},[l({variant:"default"},"Download")])])]),m=()=>e({class:"justify-between flex flex-auto items-center"},[new d({options:[{label:"Overview",href:"dashboard",exact:!0},{label:"Analytics",href:"dashboard/overview/analytics"}],onSelect:t=>console.log("Selected tab:",t)})]),v=()=>new c([e({class:"grid grid-cols-1 p-6 pt-0 md:pt-6 lg:p-8 space-y-4"},[n(),m(),e({switch:[{uri:"dashboard",import:a(()=>import("./overview-dashboard-CFK9Deh2.js"),__vite__mapDeps([0,1,2,3]))},{uri:"dashboard/overview/analytics",import:a(()=>import("./analytics-dashboard-5mJ9Wi54.js"),__vite__mapDeps([4,1,2,3,5,6]))}]})])]);export{v as DashboardOverview,v as default};
