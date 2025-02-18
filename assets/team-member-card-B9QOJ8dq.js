import{l as w,b as v,G as k,Y as t,am as x,z as o,w as s,a as f,o as u,f as l,D as y,an as C,A as S,d as A,s as P,v as T,m as h}from"./index-Cj8HJDWU.js";import{T as c,c as p,G as m,M as j}from"./tooltip-JULShdSj-CPxm7Tcu.js";const d=({title:e,description:a})=>w({class:"text-left"},[v({class:"font-semibold tracking-tight text-2xl"},e),k({class:"text-sm text-muted-foreground"},a)]),D=()=>t({class:"flex items-center justify-center gap-4"},[s({variant:"outline",class:"gap-2 w-full",click:()=>console.log("Sign in with Github"),"aria-label":"Sign in with Github"},[f(u.companies.gitHub),o("Github")]),s({variant:"outline",class:"gap-2 w-full",click:()=>console.log("Sign in with Google"),"aria-label":"Sign in with Google"},[f(u.companies.google),o("Google")])]),M=()=>x({class:"space-y-4",submit:e=>{e.preventDefault(),console.log("Account created")}},[new l({name:"email",label:"Email"},[y({type:"email",placeholder:"m@example.com",required:!0,class:"border p-2 rounded-md w-full bg-background placeholder-muted-foreground text-foreground"})]),new l({name:"password",label:"Password"},[y({type:"password",placeholder:"Your password",required:!0,class:"border p-2 rounded-md w-full bg-background placeholder-muted-foreground text-foreground"})]),s({type:"submit",class:"w-full mt-4 py-2 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition"},"Create account")]),E=()=>c({class:"w-full max-w-md mx-auto p-8 bg-card space-y-6"},[d({title:"Create an account",description:"Enter your email below to create your account"}),D(),t({class:"relative"},[t({class:"absolute inset-0 flex items-center"},[o({class:"flex-grow border-t"})]),t({class:"relative flex justify-center text-xs uppercase"},[o({class:"bg-background px-2 text-muted-foreground"},"or continue with")])]),M()]),g=({title:e,description:a,defaultState:r,onChange:i})=>t({class:"flex items-start justify-between gap-2"},[t({class:"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex flex-col space-y-1"},[o({class:"font-medium text-foreground"},e),o({class:"font-normal leading-snug text-muted-foreground"},a)]),new C({active:r,change:i})]),N=()=>c({class:"w-full max-w-md mx-auto p-6 bg-card space-y-6"},[d({title:"Cookie Settings",description:"Manage your cookie settings here."}),t({class:"pt-0 grid gap-6"},[g({title:"Strictly Necessary",description:"These cookies are essential in order to use the website and use its features.",defaultState:!0,onChange:e=>console.log("Strictly Necessary:",e)}),g({title:"Functional Cookies",description:"These cookies allow the website to provide personalized functionality.",defaultState:!1,onChange:e=>console.log("Functional Cookies:",e)}),g({title:"Performance Cookies",description:"These cookies help to improve the performance of the website.",defaultState:!1,onChange:e=>console.log("Performance Cookies:",e)})]),s({variant:"outline",class:"w-full",click:()=>console.log("Preferences saved")},"Save preferences")]),O=({startDate:e})=>c({class:"w-full max-w-md mx-auto p-6 bg-card space-y-6"},[d({title:"Pick a Date",description:"When is the event?"}),t({class:"font-medium text-foreground"},[new S({selectedDate:e,selectedCallBack:a=>console.log(a)})])]),b=P(({value:e,label:a,icon:r})=>T({class:'text-sm gap-1 font-medium leading-none disabled:cursor-not-allowed disabled:opacity-70 flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-muted data-[state="active"]:border-primary [&:has([data-state="active"])]:border-primary',onState:["method",{active:e}],dataSet:["method",["state",e,"active"]],click:(i,{state:n})=>n.method=e},[f(r),o(a)])),q=A({render(){return t({class:"flex flex-auto flex-col"},[t({class:"grid grid-cols-3 gap-4"},[b({label:"Card",value:"card",icon:u.creditCard}),b({label:"Paypal",value:"paypal",icon:u.companies.paypal}),b({label:"Apple",value:"apple",icon:u.companies.apple})])])},state(){return{method:null}}}),$=()=>t({class:"flex items-center justify-center gap-4"},[new q]),G=()=>x({class:"space-y-4",submit:e=>{e.preventDefault(),console.log("Payment method added")}},[new l({name:"name",label:"Name"},[p({type:"text",placeholder:"First Last",required:!0,class:"border p-2 rounded-md w-full bg-background placeholder-muted-foreground text-foreground"})]),new l({name:"card_number",label:"Card number"},[p({type:"text",placeholder:"1234 5678 9012 3456",required:!0,class:"border p-2 rounded-md w-full bg-background placeholder-muted-foreground text-foreground"})]),t({class:"flex gap-4 mt-4"},[new l({name:"month",label:"Expires"},[m({required:!0,class:"border p-2 rounded-md w-full bg-background text-foreground",options:[{value:"",label:"Month",disabled:!0},...Array.from({length:12},(e,a)=>({value:`${a+1}`,label:`${a+1}`.padStart(2,"0")}))]})]),new l({name:"year",label:"Year"},[m({required:!0,class:"border p-2 rounded-md w-full bg-background text-foreground",options:[{value:"",label:"Year",disabled:!0},...Array.from({length:10},(e,a)=>({value:`${new Date().getFullYear()+a}`,label:`${new Date().getFullYear()+a}`}))]})]),new l({name:"cvc",label:"CVC"},[p({type:"text",placeholder:"CVC",required:!0,class:"border p-2 rounded-md w-full bg-background placeholder-muted-foreground text-foreground"})])]),s({type:"submit",class:"w-full mt-4 py-2 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition"},"Continue")]),z=()=>c({class:"w-full max-w-md mx-auto p-8 bg-card space-y-6"},[d({title:"Payment Method",description:"Add a new payment method to your account."}),$(),t({class:"space-y-4"},[G()])]),_=()=>x({class:"space-y-4",submit:e=>{e.preventDefault(),console.log("Issue reported")}},[t({class:"flex flex-auto w-full gap-4"},[new l({name:"area",label:"Area"},[m({required:!0,class:"border p-2 rounded-md w-full bg-background text-foreground",options:[{value:"billing",label:"Billing"},{value:"technical",label:"Technical"},{value:"account",label:"Account"},{value:"other",label:"Other"}],defaultValue:"billing",change:e=>console.log(`Area selected: ${e.target.value}`)})]),new l({name:"security_level",label:"Security Level"},[m({required:!0,class:"border p-2 rounded-md w-full bg-background text-foreground",options:[{value:"severity_1",label:"Severity 1"},{value:"severity_2",label:"Severity 2"},{value:"severity_3",label:"Severity 3"}],defaultValue:"severity_2",change:e=>console.log(`Security Level selected: ${e.target.value}`)})])]),new l({name:"subject",label:"Subject"},[p({type:"text",placeholder:"I need help with...",required:!0,class:"border p-2 rounded-md w-full bg-background text-foreground placeholder-muted-foreground"})]),new l({name:"description",label:"Description"},[j({placeholder:"Please include all information relevant to your issue.",required:!0,class:"border p-2 rounded-md w-full bg-background text-foreground placeholder-muted-foreground"})]),t({class:"flex justify-end gap-4 mt-4"},[s({variant:"outline",class:"px-4 py-2",click:()=>console.log("Cancel clicked")},"Cancel"),s({type:"submit",class:"px-4 py-2 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition"},"Submit")])]),H=()=>c({class:"w-full max-w-md mx-auto p-6 bg-card space-y-6"},[d({title:"Report an issue",description:"What area are you having problems with?"}),_()]),F=({link:e})=>t({class:"flex items-center gap-4 py-2"},[y({type:"text",value:e,readOnly:!0,class:"border p-2 rounded-md w-full bg-background text-foreground"}),s({variant:"secondary",class:"px-4 py-2",click:()=>{navigator.clipboard.writeText(e),app.notify({title:"Link copied",description:"The link has been copied to your clipboard.",icon:u.clipboard.checked})}},"Copy Link")]),L=({name:e,email:a,access:r,image:i})=>t({class:"flex items-center justify-between gap-4 py-2"},[t({class:"flex items-center gap-3"},[h({src:i,alt:e,fallbackText:e.split(" ").map(n=>n[0]).join("")}),t({},[o({class:"font-medium text-foreground"},e),o({class:"block text-sm text-muted-foreground"},a)])]),m({class:"border rounded-md bg-background text-foreground px-3 py-1",options:[{value:"edit",label:"Can edit"},{value:"view",label:"Can view"},{value:"comment",label:"Can comment"}],defaultValue:r,change:n=>console.log(`Access level changed for ${e}: ${n.target.value}`)})]),I=({people:e})=>t({class:"space-y-3"},e.map(a=>L(a))),J=({link:e,people:a})=>c({class:"w-full max-w-md mx-auto p-6 bg-card space-y-6"},[d({title:"Share this document",description:"Anyone with the link can view this document."}),F({link:e}),t({class:"border-t my-4"}),t({class:"font-medium text-foreground"},"People with access"),I({people:a})]),V=e=>e.split(" ").map(r=>r[0]).join(""),Y=({name:e,email:a,role:r,image:i})=>t({class:"flex items-center justify-between gap-4 py-2"},[t({class:"flex items-center gap-3"},[h({src:i,alt:e,fallbackText:V(e)}),t({},[o({class:"font-medium text-foreground"},e),o({class:"block text-sm text-muted-foreground"},a)])]),m({class:"border rounded-md bg-background text-foreground px-3 py-1",options:[{value:"owner",label:"Owner"},{value:"member",label:"Member"}],defaultValue:r,change:n=>console.log(`Role changed for ${e}: ${n.target.value}`)})]),R=({members:e})=>t({class:"space-y-3"},e.map(a=>Y(a))),K=({members:e})=>c({class:"w-full max-w-md mx-auto p-6 bg-card space-y-6"},[d({title:"Team Member",description:"Invite your team members to collaborate."}),R({members:e})]);export{E as A,N as C,O as D,z as P,H as R,J as S,K as T};
