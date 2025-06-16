import{Y as a,w as d,z as t,a as s,o as i,a7 as p,G as f}from"./index-D9P7R_Tb.js";import{L as c}from"./tooltip-DcnXGw52-CiqOemEj.js";import{D as e}from"./doc-section-CEfGZfXq.js";import{D as u}from"./doc-page-YXzGNj8V.js";import{A as x,P as h,T as b,S as g,D as C,R as y,C as w}from"./team-member-card-CUSWHRXS.js";import"./signature-panel-DEX9Sggs-B-ysqW_g.js";import"./sidebar-menu-page-DyIwNFwe-vamuQmWh.js";import"./mobile-nav-wrapper-CuATTfqK-BLr9x-2c.js";const j=({name:o,description:r,stars:m,language:l,lastUpdated:n})=>a({class:"flex items-start justify-between py-4 border-b border-muted last:border-b-0"},[a({class:"flex flex-col"},[t({class:"font-semibold text-foreground"},o),t({class:"text-sm text-muted-foreground"},r),a({class:"flex space-x-4 text-sm text-muted-foreground mt-3"},[a({class:"flex items-center gap-2"},[s({class:" text-blue-500"},i.document.text),t(` ${l}`)]),a({class:"flex items-center"},[s(i.star),t(` ${m}`)]),a(`Updated ${n}`)])]),d({variant:"secondary",class:"px-3 py-1 gap-1 flex items-center rounded-md",click:()=>console.log(`Starred ${o}`)},[s(i.star),t("Star")])]),D=({projects:o})=>a({class:"space-y-3"},o.map(r=>j(r))),S=[{name:"shadcn/ui",description:"Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.",stars:"20k",language:"TypeScript",lastUpdated:"April 2023"},{name:"base-framework",description:"A robust framework for building and structuring large-scale applications with ease.",stars:"2",language:"JavaScript",lastUpdated:"June 2024"}],A=()=>c({class:"w-full max-w-md mx-auto p-6 bg-card space-y-6"},[a({class:"font-semibold text-lg text-foreground"},"Projects"),D({projects:S})]),O=()=>u({title:"Cards",description:"Cards are a great way to display content in a concise and organized manner."},[e({title:"Usage",description:"Import the card atom and use it in your components.",preview:[c()],code:`import {  Button  } from "@base-framework/ui/atoms";

Card()`}),p({class:"text-lg font-bold"},"Examples"),f({class:"text-muted-foreground"},"This is a list of examples of how to use the card component in your application."),e({title:"Account Card",preview:[x()],code:`import AccountCard from "./examples/account-card.js";

AccountCard()`}),e({title:"Paymnet Card",preview:[h()],code:`import AccountCard from "./examples/payment-card.js";

PaymentCard()`}),e({title:"Team Mmeber Card",preview:[b({members:[{name:"Leslie Alexander",email:"leslie.alexander@example.com",image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"owner",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Michael Foster",email:"michael.foster@example.com",image:"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"member",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Dries Vincent",email:"dries.vincent@example.com",image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"owner",status:"online"}]})],code:`import AccountCard from "./examples/team-member-card.js";

TeamMemberCard()`}),e({title:"Share Document Card",preview:[g({link:"http://example.com/link/to/document",people:[{name:"Leslie Alexander",email:"leslie.alexander@example.com",image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"owner",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Michael Foster",email:"michael.foster@example.com",image:"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"member",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Dries Vincent",email:"dries.vincent@example.com",image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"owner",status:"online"}]})],code:`import AccountCard from "./examples/share-document-card.js";

ShareDocumentCard({
    link: 'http://example.com/link/to/document',
    people: [
        {
            name: 'Leslie Alexander',
            email: 'leslie.alexander@example.com',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            role: 'owner',
            lastSeen: '2023-01-23T13:23Z',
            status: 'offline'
        },
        {
            name: 'Michael Foster',
            email: 'michael.foster@example.com',
            image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            role: 'member',
            lastSeen: '2023-01-23T13:23Z',
            status: 'offline'
        },
        {
            name: 'Dries Vincent',
            email: 'dries.vincent@example.com',
            image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            role: 'owner',
            status: 'online'
        }
    ]
})`}),e({title:"Date Select Card",preview:[C({startDate:"2023-01-23"})],code:`import AccountCard from "./examples/date-select-card.js";

DateSelectCard({
    startDate: '2023-01-23'
})`}),e({title:"Report Issue Card",preview:[y()],code:`import AccountCard from "./examples/report-issue-card.js";

ReportIssueCard()`}),e({title:"Project Card",preview:[A()],code:`import AccountCard from "./examples/project-card.js";

ProjectCard()`}),e({title:"Cookie Settings Card",preview:[w()],code:`import AccountCard from "./examples/cookie-settings-card.js";

CookieSettingsCard()`})]);export{O as CardPage,O as default};
