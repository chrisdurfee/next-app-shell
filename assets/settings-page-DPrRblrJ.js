const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/profile-settings-1FyIrodw.js","assets/index-CM1IEHgP.js","assets/index-Dsrz2f4p.css","assets/sidebar-menu-page-nCAVFk3R-Di2_rNMK.js","assets/settings-section-BHQkC2w_.js","assets/account-settings-C16VlSd9.js","assets/appearance-settings-BWA79GqI.js","assets/notification-settings-DBcaSfdG.js","assets/display-settings-C0iSjVnU.js"])))=>i.map(i=>d[i]);
import{Y as e,a2 as a,i as s,n,F as c,o as t,a1 as r}from"./index-CM1IEHgP.js";import{S as p}from"./sidebar-menu-page-nCAVFk3R-Di2_rNMK.js";const u=()=>e({class:"flex items-center justify-between pb-2 mt-2"},[e({class:"flex lg:hidden"},[n({margin:"m-0 ml-0",backUrl:"/settings"})])]),o=(i,l)=>({uri:i,import:l}),g=()=>new a({class:"px-2"},[u(),e({class:"flex flex-auto flex-col contained p-4 lg:p-6",switch:[o("/settings/profile",()=>s(()=>import("./profile-settings-1FyIrodw.js"),__vite__mapDeps([0,1,2,3,4]))),o("/settings/account",()=>s(()=>import("./account-settings-C16VlSd9.js"),__vite__mapDeps([5,1,2,3,4]))),o("/settings/appearance",()=>s(()=>import("./appearance-settings-BWA79GqI.js"),__vite__mapDeps([6,1,2,3,4]))),o("/settings/notifications",()=>s(()=>import("./notification-settings-DBcaSfdG.js"),__vite__mapDeps([7,1,2,3,4]))),o("/settings/display",()=>s(()=>import("./display-settings-C0iSjVnU.js"),__vite__mapDeps([8,1,2,3,4])))]})]),f=()=>e({class:"flex flex-auto flex-col"},[e({route:[{uri:"settings/:page*",component:g}]})]),_=i=>c({mobileBorder:!0,title:i.title,options:i.options,class:"lg:block w-full"}),d=()=>_({title:"Settings",options:[{label:"Profile",href:"settings/profile",icon:t.user.default,exact:!0},{label:"Account",href:"settings/account",icon:t.locked},{label:"Appearance",href:"settings/appearance",icon:t.sun},{label:"Notifications",href:"settings/notifications",icon:t.bell.default},{label:"Display",href:"settings/display",icon:t.window},{label:"Sign Out",icon:t.signOut,callBack:()=>{new r({icon:t.signOut,type:"destructive",title:"Are you absoultely sure?",description:"This will sign you out of the application.",confirmTextLabel:"Sign Out",confirmed:()=>app.signOut()}).open()}}]}),P=()=>e({class:"flex items-center justify-between pb-2 mt-2"},[e({class:"flex lg:hidden"},[n({margin:"m-0 ml-0",backUrl:"/settings"})])]),m=1024,b=()=>window.innerWidth<m,h={checkPage(){const i=this.route.page;!b()&&!i&&app.navigate("settings/profile",null,!0)},setupEvents(){return[["resize",window,()=>this.checkPage()]]},afterSetup(){this.checkPage()},update(){this.checkPage()}},E=()=>new p(h,[e({class:"flex flex-auto flex-col lg:flex-row max-w-[100vw] h-full"},[d(),f()])]);export{P as PageToolbar,E as SettingsPage,E as default};
