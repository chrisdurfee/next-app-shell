const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/overview-dashboard-DOetGPVq.js","assets/index-DDW7XYOj.js","assets/index-Dsrz2f4p.css","assets/analytics-dashboard-CZqD8roD.js","assets/sidebar-menu-page-nCAVFk3R-CfzmPBT3.js","assets/mobile-nav-wrapper-BE_hr65B-BwlYgnmR.js"])))=>i.map(i=>d[i]);
import{Y as e,l as s,_ as a,r,aq as o,o as l,w as i,am as d}from"./index-DDW7XYOj.js";import{n as c}from"./sidebar-menu-page-nCAVFk3R-CfzmPBT3.js";import"./mobile-nav-wrapper-BE_hr65B-BwlYgnmR.js";const n=()=>s({class:"flex items-center justify-between"},[r({class:"text-3xl font-bold"},"Dashboard"),e({class:"flex items-center gap-2"},[new o({label:"Pick a date",icon:l.calendar}),e({class:"hidden md:flex items-center gap-2"},[i({variant:"default"},"Download")])])]),b=()=>e({class:"justify-between flex flex-auto items-center"},[new d({options:[{label:"Overview",href:"dashboard",exact:!0},{label:"Analytics",href:"dashboard/overview/analytics"}],onSelect:t=>console.log("Selected tab:",t)})]),_=()=>new c([e({class:"grid grid-cols-1 p-6 pt-0 md:pt-6 lg:p-8 space-y-4"},[n(),b(),e({switch:[{uri:"dashboard",import:a(()=>import("./overview-dashboard-DOetGPVq.js"),__vite__mapDeps([0,1,2]))},{uri:"dashboard/overview/analytics",import:a(()=>import("./analytics-dashboard-CZqD8roD.js"),__vite__mapDeps([3,1,2,4,5]))}]})])]);export{_ as DashboardOverview,_ as default};
