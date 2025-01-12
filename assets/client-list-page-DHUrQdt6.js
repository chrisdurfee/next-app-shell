import{T as h,Y as l,b as g,c as b,G as o,o as s,H as y,I as C,A as x,K as v,O as n,D as a,B as w,J as c,E as k,x as $,L as A,k as T,n as S,l as H,r as I,w as m,W as P,ab as j,S as D}from"./index-Bv5YTDLI.js";const i=({title:e,value:t,change:f,icon:p})=>h({class:"flex flex-auto flex-col p-4 min-w-[280px] max-w-sm hover:bg-muted/50 transition-colors",margin:"m-0"},[l({class:"flex justify-between items-center mb-2"},[g({class:"text-lg font-medium text-muted-foreground"},e),b(p,{class:"text-xl"})]),l({class:"flex flex-col"},[o({class:"text-3xl font-bold leading-tight"},t),o({class:"text-sm text-muted-foreground mt-1"},f)])]),L=()=>l({class:"hidden md:flex flex-auto overflow-x-auto -mx-6 px-6 pb-2"},[l({class:"inline-flex flex-auto space-x-4 ml-[-24px] pl-6"},[i({title:"Total Clients",value:"1,200",change:"+5.4% from last month",icon:s.user.group}),i({title:"New Clients",value:"350",change:"+12% from last month",icon:s.user.plus}),i({title:"Lost Clients",value:"25",change:"-3% from last month",icon:s.user.minus}),i({title:"Total Revenue",value:"$145,678.00",change:"+10% from last month",icon:s.currency.dollar})])]),M=()=>C([x({class:"text-muted-foreground border-b"},[v({class:"hidden md:table-cell"}),n({key:"name",label:"Name"}),n({key:"status",label:"Status",class:"hidden md:table-cell"}),n({key:"role",label:"Role",class:"hidden md:table-cell"}),n({key:"totalAmount",label:"Total",align:"justify-end"})])]),R=(e,t)=>x({class:"items-center px-4 py-2 hover:bg-muted/50"},[a({class:"p-4 hidden md:table-cell"},[new w({checked:e.selected,class:"mr-2",onChange:()=>t(e)})]),a({class:"p-4"},[c({href:`clients/${e.id}`,class:"flex items-center gap-x-4 no-underline text-inherit hover:text-primary"},[k({src:e.image,alt:e.name,fallbackText:e.name}),l({class:"min-w-0 flex-auto"},[o({class:"text-base font-semibold leading-6 m-0"},e.name),o({class:"truncate text-sm leading-5 text-muted-foreground m-0"},e.email)])])]),a({class:"p-4 hidden md:table-cell"},[c({href:`clients/${e.id}`,class:"no-underline text-inherit hover:text-primary"},e.status)]),a({class:"p-4 hidden md:table-cell"},[c({href:`clients/${e.id}`,class:"no-underline text-inherit hover:text-primary"},e.role)]),a({class:"p-4 text-right justify-end"},[c({href:`clients/${e.id}`,class:"no-underline text-inherit hover:text-primary"},`$${e.totalAmount}`)])]),B=({clients:e})=>new y({cache:"list",customHeader:M(),rows:e,rowItem:R,key:"id"}),u=Array.from({length:20},(e,t)=>({id:t+1,name:`Client ${t+1}`,status:t%2===0?"Active":"Inactive",email:`client${t+1}@example.com`,totalAmount:(Math.random()*1e3).toFixed(2),image:`https://placekitten.com/100/100?image=${t+1}`,role:t%2===0?"Premium Member":"Basic Member"})),r=e=>new $({title:"Add Client",icon:s.user.plus,description:"Let's add a new client.",size:"sm",type:"right",onSubmit:()=>app.notify({type:"success",title:"Client Added",description:"The client has been added.",icon:s.check})},[l({class:"flex flex-col lg:p-4 space-y-8"},[l({class:"flex flex-auto flex-col w-full gap-4"},[A({legend:"Client Details"},[new T({name:"client",label:"Client",description:"The name of the client."},[S({type:"text",placeholder:"Client name",required:!0})])])])])]).open(),F=e=>e.map(t=>({label:t.name,value:t.id})),d=()=>new j({options:F(u),onSelect:e=>console.log(e)}),N=()=>H({class:"flex flex-auto flex-col"},[l({class:"flex flex-auto items-center justify-between w-full"},[I({class:"text-3xl font-bold"},"Clients"),l({class:"hidden lg:flex min-w-[440px]"},[d()]),l({class:"flex items-center gap-2"},[l({class:"hidden lg:flex"},[m({variant:"withIcon",class:"text-muted-foreground",icon:s.circlePlus,click:()=>r()},"Add Client")]),l({class:"flex lg:hidden mr-0"},[P({content:"Add Client",position:"left"},m({variant:"icon",class:"outline",icon:s.circlePlus,click:()=>r()}))])])]),l({class:"flex lg:hidden w-full mx-auto my-4"},[d()])]),q=()=>new D([l({class:"grid grid-cols-1"},[l({class:"flex flex-auto flex-col p-6 pt-0 lg:space-y-12 md:pt-6 lg:p-8 w-full mx-auto lg:max-w-7xl"},[N(),l({class:"flex flex-auto flex-col space-y-4 lg:space-y-2"},[L(),l({class:"flex flex-col overflow-x-auto"},[B({clients:u})])])])])]);export{q as ClientListPage,q as default};
