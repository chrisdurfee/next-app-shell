import{m as t,B as s,G as n,X as l,y as m,c as f,U as d,C as u,h as r,i as p}from"./index-Bg0UPhej.js";import{U as x,D as h,C as b}from"./data-table-KAwUtseX.js";const i=[{name:"Leslie Alexander",email:"leslie.alexander@example.com",image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"Co-Founder / CEO",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Michael Foster",email:"michael.foster@example.com",image:"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"Co-Founder / CTO",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Dries Vincent",email:"dries.vincent@example.com",image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"Business Relations",status:"online"},{name:"Leslie Alexander",email:"leslie.alexander@example.com",image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"Co-Founder / CEO",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Michael Foster",email:"michael.foster@example.com",image:"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"Co-Founder / CTO",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Dries Vincent",email:"dries.vincent@example.com",image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"Business Relations",status:"online"}],g=()=>t({class:"flex flex-auto flex-col"},[t({class:"flex flex-auto flex-col mb-2"},[t({class:"flex flex-auto flex-row gap-2"},[s({variant:"outline",click:(e,a)=>a.list.prepend(i)},"Prepend"),s({variant:"outline",click:(e,a)=>a.list.append(i)},"Append"),s({variant:"outline",click:(e,a)=>a.list.mingle(i)},"Mingle")])]),x({users:i})]),y=[{label:"checkbox",key:""},{label:"Status",key:"status"},{label:"Email",key:"email"},{label:"Amount",key:"amount",align:"justify-end"}],k=[{id:1,status:"Success",email:"ken99@yahoo.com",amount:316,selected:!1},{id:2,status:"Success",email:"abe45@gmail.com",amount:242,selected:!1},{id:3,status:"Processing",email:"monserrat44@gmail.com",amount:837,selected:!1},{id:4,status:"Success",email:"silas22@gmail.com",amount:874,selected:!1},{id:5,status:"Failed",email:"carmella@hotmail.com",amount:721,selected:!1}],o=[{id:6,status:"Success",email:"",amount:0,selected:!1},{id:7,status:"Success",email:"",amount:0,selected:!1},{id:8,status:"Processing",email:"",amount:0,selected:!1},{id:9,status:"Success",email:"",amount:0,selected:!1},{id:10,status:"Failed",email:"",amount:0,selected:!1}],w=(e,a)=>n({class:"items-center px-4 py-2 hover:bg-muted"},[l({class:"p-4 "},[new b({checked:e.selected,class:"mr-2",onChange:()=>a(e)})]),l({class:"p-4 "},[m({class:"text-muted-foreground"},e.status)]),l({class:"p-4 "},e.email),l({class:"p-4 text-right"},`$${e.amount.toFixed(2)}`)]),S=()=>t({class:"flex flex-auto flex-col"},[t({class:"flex flex-auto flex-col mb-2"},[t({class:"flex flex-auto flex-row gap-2"},[s({variant:"outline",click:(e,a)=>a.list.prepend(o)},"Prepend"),s({variant:"outline",click:(e,a)=>a.list.append(o)},"Append"),s({variant:"outline",click:(e,a)=>a.list.mingle(o)},"Mingle")])]),new h({cache:"list",headers:y,rows:k,rowItem:w,key:"id"})]),D=e=>d({class:"flex items-center justify-between"},[u({class:"text-3xl font-bold"},e.title),t({class:"flex items-center gap-2"},[t({class:"hidden md:flex items-center gap-2"},[s({variant:"default"},"Download")])])]),C=()=>t({class:"justify-between flex flex-auto items-center"},[new r({options:[{label:"Item List",href:"list",exact:!0},{label:"Data Table",href:"list/data-table"}],onSelect:e=>console.log("Selected tab:",e)})]),c=e=>new p(e),T=()=>new f([t({class:"grid grid-cols-1 p-6 pt-0 md:pt-6 lg:p-8 space-y-4"},[D({title:"List"}),C(),t({switch:[{uri:"list",component:c(g())},{uri:"list/data-table",component:c(S())}]})])]);export{T as ListPage,T as default};
