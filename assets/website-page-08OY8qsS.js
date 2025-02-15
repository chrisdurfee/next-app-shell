const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/home-page-B4dispYx.js","assets/sidebar-menu-page-nCAVFk3R-rOYbqkdE.js","assets/index-CxUg7IWE.js","assets/index-CwrnEocX.css","assets/mobile-nav-wrapper-BE_hr65B-DBCd1HuF.js","assets/about-page-CyeNzw5A.js","assets/error-404-page-tU1RjAqO.js"])))=>i.map(i=>d[i]);
import{S as m}from"./sidebar-menu-page-nCAVFk3R-rOYbqkdE.js";import{s,Y as o,J as f,t as g,z as a,n as x,R as b,w as r,am as p,d as h,y as w,_ as i}from"./index-CxUg7IWE.js";import{s as k}from"./signature-panel-B3v8V9MU-C2aP8Ne6.js";import{J as y}from"./mobile-nav-wrapper-BE_hr65B-DBCd1HuF.js";import"./tooltip-JULShdSj-BRsy9gWG.js";const u=[{href:"website",label:"Home",exact:!0,hidden:!0},{href:"website/about",label:"About"},{href:"website/services",label:"Services"},{href:"website/contact",label:"Contact"},{href:"website/blog",label:"Blog"}],_=s(()=>o({class:"hidden lg:flex lg:flex-1 lg:justify-center"},[new k({options:u})])),C=s(e=>f({class:"logo w-[32px] h-[32px] m-[8px] block",href:"website",...e},[e.src&&g({src:e.src,alt:"Logo",class:"w-[32px] h-[32px]",error:t=>t.target.style.display="none"})])),v=s(e=>y({title:"Menu",options:u})),S=s(()=>o({class:"hidden lg:flex lg:flex-1 lg:justify-end"},[f({href:"/website#",class:"text-sm font-semibold leading-6"},[a("Log in "),a({"aria-hidden":"true"},"→")])])),L=s(e=>o({class:"relative flex items-center justify-between px-4 md:p-6 lg:px-8 z-40","aria-label":"Global"},[o({class:"flex lg:flex-1"},[C({src:e==null?void 0:e.src,name:e==null?void 0:e.name})]),v(),_(),S()])),E=s(()=>o({class:"inset-x-0 top-0 z-50"},[L()])),n=({title:e,description:t,defaultState:l,onChange:d})=>o({class:"flex items-start justify-between gap-2"},[o({class:"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex flex-col space-y-1"},[a({class:"font-medium text-foreground"},e),a({class:"font-normal leading-snug text-muted-foreground"},t)]),new p({active:l,change:d})]),P=e=>(t,l)=>{t.preventDefault(),t.stopPropagation(),l.close(),e.onClose()},T=e=>b({class:"flex flex-auto flex-col space-y-8 mt-8",submit:P(e)},[o({class:"pt-0 grid gap-6"},[n({title:"Strictly Necessary",description:"These cookies are essential in order to use the website and use its features.",defaultState:!0,onChange:t=>console.log("Strictly Necessary:",t)}),n({title:"Functional Cookies",description:"These cookies allow the website to provide personalized functionality.",defaultState:!1,onChange:t=>console.log("Functional Cookies:",t)}),n({title:"Performance Cookies",description:"These cookies help to improve the performance of the website.",defaultState:!1,onChange:t=>console.log("Performance Cookies:",t)})]),r({variant:"outline",type:"submit",class:"w-full"},"Save preferences")]),A=e=>new x({hideFooter:!0,title:"Cookie Settings",description:"Manage your cookie settings here."},[T(e)]),c="cookieConsent",D=h({state(){return{show:{state:!localStorage.getItem(c),callBack:e=>localStorage.setItem(c,e)}}},render(){return w("show",e=>e?o({class:"fixed bottom-0 rounded-md m-1 left-0 sm:left-[64px] right-0 bg-background/80 backdrop-blur-md text-inherit py-4 px-6 flex flex-col md:flex-row md:justify-between items-center text-center md:text-left shadow-lg z-50 border-t"},[a({class:"text-sm mb-8 md:mb-0"},'We use cookies to enhance your experience. By clicking "Accept," you agree to our use of cookies. You can also manage your preferences.'),o({class:"flex flex-auto md:flex-none w-full md:w-auto space-x-4"},[r({variant:"primary",class:"flex-auto",click:()=>{this.state.show=!1}},"Accept"),r({variant:"secondary",class:"flex-auto",click:()=>A({onClose:()=>this.state.show=!1}).open()},"Manage Cookies")])]):null)},setContainer(e){this.container=app.root}}),M=s(()=>o({class:"flex flex-auto flex-col relative"},[new D,E(),o({class:"flex flex-auto flex-col",switch:[{uri:"website",import:i(()=>import("./home-page-B4dispYx.js"),__vite__mapDeps([0,1,2,3,4]))},{uri:"website/about",import:()=>i(()=>import("./about-page-CyeNzw5A.js"),__vite__mapDeps([5,2,3,1,4]))},{import:()=>i(()=>import("./error-404-page-tU1RjAqO.js"),__vite__mapDeps([6,2,3,1,4]))}]})])),O=()=>new m([M()]);export{O as WebsitePage,O as default};
