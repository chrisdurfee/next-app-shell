import{m as e,S as c,f as o,g as i,F as d,B as n,d as a}from"./index-DJThcmks.js";import{T as g}from"./tooltip-BJR6XLeK.js";const f=({day:t,isCurrentMonth:l,events:s=[]})=>e({class:`flex flex-col p-2 h-20 rounded-md ${l?"":"bg-muted text-muted-foreground"}`},[c({class:"text-sm font-medium"},String(t))]),u=()=>e({class:"grid grid-cols-7 gap-2 h-full"},[...["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(t=>c({class:"text-center font-semibold text-muted-foreground py-1 text-xs"},t)),...Array.from({length:42},(t,l)=>{const s=l+1-new Date().getDay(),r=s>0&&s<=31;return f({day:r?s:"",isCurrentMonth:r})})]),x=()=>e({class:"pb-12 hidden lg:block p-6 border-r bg-sidebar h-full"},[]);class m extends o{render(){return i([e({class:"px-4 flex flex-auto flex-col pt-[80px] sm:pt-0"},this.children)])}}const p=()=>e({class:"justify-between flex flex-auto items-center mb-4"},[d({class:"scroll-m-20 text-3xl font-bold tracking-tight"},"March 2023"),e({class:"flex items-center space-x-2"},[n({variant:"icon",icon:a.chevron.single.left,click:()=>{}}),n({variant:"icon",icon:a.chevron.single.right,click:()=>{}}),g({content:"Add Event",position:"left"},n({variant:"icon",icon:a.circlePlus}))])]),h=()=>e({class:"col-span-4 p-0 px-2 md:px-6 md:py-6 lg:px-8"},[p(),u()]),v=()=>new m([e({class:"grid grid-cols-1 lg:grid-cols-5 h-full"},[x(),h()])]);export{v as CalendarPage,v as default};
