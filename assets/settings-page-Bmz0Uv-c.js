import{Y as e,a1 as l,a2 as n,F as a,o as t,a3 as c,S as r}from"./index-DeoGpXJm.js";const g=()=>e({class:"flex items-center justify-between pb-2 mt-2"},[e({class:"flex lg:hidden"},[n({margin:"m-0 ml-0",backUrl:"/settings"})])]),i=(s,o)=>({uri:s,import:()=>import(o)}),p=()=>new l({class:"px-2"},[g(),e({class:"flex flex-auto flex-col contained p-4 lg:p-6",switch:[i("/settings/profile","./sections/profile-settings.js"),i("/settings/account","./sections/account-settings.js"),i("/settings/appearance","./sections/appearance-settings.js"),i("/settings/notifications","./sections/notification-settings.js"),i("/settings/display","./sections/display-settings.js")]})]),f=()=>e({class:"flex flex-auto flex-col"},[e({route:[{uri:"settings/:page*",component:p}]})]),u=s=>a({mobileBorder:!0,title:s.title,options:s.options,class:"lg:block w-full"}),b=()=>u({title:"Settings",options:[{label:"Profile",href:"settings/profile",icon:t.user.default,exact:!0},{label:"Account",href:"settings/account",icon:t.locked},{label:"Appearance",href:"settings/appearance",icon:t.sun},{label:"Notifications",href:"settings/notifications",icon:t.bell.default},{label:"Display",href:"settings/display",icon:t.window},{label:"Sign Out",icon:t.signOut,callBack:()=>{new c({icon:t.signOut,type:"destructive",title:"Are you absoultely sure?",description:"This will sign you out of the application.",confirmTextLabel:"Sign Out",confirmed:()=>app.signOut()}).open()}}]}),w=()=>e({class:"flex items-center justify-between pb-2 mt-2"},[e({class:"flex lg:hidden"},[n({margin:"m-0 ml-0",backUrl:"/settings"})])]),d=1024,m=()=>window.innerWidth<d,x={checkPage(){const s=this.route.page;!m()&&!s&&app.navigate("settings/profile",null,!0)},setupEvents(){return[["resize",window,()=>this.checkPage()]]},update(){this.checkPage()}},y=()=>new r(x,[e({class:"flex flex-auto flex-col lg:flex-row max-w-[100vw] h-full"},[b(),f()])]);export{w as PageToolbar,y as SettingsPage,y as default};
