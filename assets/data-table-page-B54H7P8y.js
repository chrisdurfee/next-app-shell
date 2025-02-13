import{Y as t,a6 as o,w as i,a3 as m,a4 as s,a5 as n,i as d,s as f,z as r,G as c}from"./index-DDW7XYOj.js";import{n as u}from"./sidebar-menu-page-nCAVFk3R-CfzmPBT3.js";import"./mobile-nav-wrapper-BE_hr65B-BwlYgnmR.js";const p=[{label:"checkbox",key:""},{label:"Name",key:"name"},{label:"Status",key:"status"},{label:"Email",key:"email"},{label:"Amount",key:"amount",align:"justify-end"}],h=[{id:1,status:"Success",email:"leslie.alexander@example.com",amount:316,selected:!1,name:"Leslie Alexander",image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"Co-Founder / CEO"},{id:2,status:"Success",email:"michael.foster@example.com",amount:242,selected:!1,name:"Michael Foster",image:"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"Co-Founder / CTO"},{id:3,status:"Processing",email:"dries.vincent@example.com",amount:837,selected:!1,name:"Dries Vincent",image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"Business Relations"},{id:4,status:"Success",email:"leslie.alexander@example.com",amount:874,selected:!1,name:"Leslie Alexander",image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"Co-Founder / CEO"},{id:5,status:"Failed",email:"michael.foster@example.com",amount:721,selected:!1,name:"Michael Foster",image:"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"Co-Founder / CTO"}],l=[{id:6,status:"Success",email:"dries.vincent@example.com",amount:0,selected:!1,name:"Dries Vincent",image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"Business Relations"},{id:7,status:"Success",email:"leslie.alexander@example.com",amount:0,selected:!1,name:"Leslie Alexander",image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"Co-Founder / CEO"},{id:8,status:"Processing",email:"michael.foster@example.com",amount:0,selected:!1,name:"Michael Foster",image:"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"Co-Founder / CTO"},{id:9,status:"Success",email:"dries.vincent@example.com",amount:0,selected:!1,name:"Dries Vincent",image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"Business Relations"},{id:10,status:"Failed",email:"leslie.alexander@example.com",amount:0,selected:!1,name:"Leslie Alexander",image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"Co-Founder / CEO"}],x=f(({name:e,email:a})=>t({class:"min-w-0 flex-auto"},[c({class:"text-base font-semibold leading-6 m-0"},e),c({class:"truncate text-sm leading-5 text-muted-foreground m-0"},a)])),b=(e,a)=>m({class:"items-center px-4 py-2 hover:bg-muted/50"},[s({class:"p-4 "},[new n({checked:e.selected,class:"mr-2",onChange:()=>a(e)})]),s({class:"p-4 "},[t({class:"flex min-w-0 gap-x-4"},[d({src:e.image,alt:e.name,fallbackText:e.name}),x(e)])]),s({class:"p-4 "},[r({class:"text-muted-foreground"},e.status)]),s({class:"p-4 "},e.email),s({class:"p-4 text-right"},`$${e.amount.toFixed(2)}`)]),C=()=>new u([t({class:"flex flex-auto flex-col"},[t({class:"flex flex-auto flex-col mb-2"},[t({class:"flex flex-auto flex-row gap-2"},[i({variant:"outline",click:(e,a)=>a.list.prepend(l)},"Prepend"),i({variant:"outline",click:(e,a)=>a.list.append(l)},"Append"),i({variant:"outline",click:(e,a)=>a.list.mingle(l)},"Mingle")])]),new o({cache:"list",headers:p,rows:h,rowItem:b,key:"id"})])]);export{C as DataTablePage,C as default};
