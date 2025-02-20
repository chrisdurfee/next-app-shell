import{G as l,s as n,w as o,n as r,ak as a,Y as c,o as s}from"./index-CVd7a0Z_.js";import{c as p}from"./tooltip-DSfp01wQ-ClOvK3DY.js";import{D as i}from"./doc-section-C4chk0Ds.js";import{D as m}from"./doc-page-FdvwJFlq.js";import"./signature-panel-CN_WhW5E-fqpffP2h.js";import"./sidebar-menu-page-nCAVFk3R-fok_J2-i.js";import"./mobile-nav-wrapper-BE_hr65B-BuZvu_91.js";const d=n((e,t)=>o({text:"Open",class:"m-1",click:()=>new r(e,t).open()})),u=e=>o({text:"Open",class:"m-1",click:()=>new a(e).open()}),f=n((e,t)=>o({text:"Open",class:"m-1",click:()=>new a({icon:s.signOut,type:"destructive",title:"Are you absoultely sure?",description:"This will sign you out of the application.",confirmTextLabel:"Sign Out",confirmed:()=>console.log("Confirmed!")}).open()})),h=({link:e})=>c({class:"flex items-center gap-4 py-2"},[p({type:"text",value:e,readOnly:!0,class:"border p-2 rounded-md w-full bg-background text-foreground"}),o({variant:"secondary",class:"px-4 py-2",click:()=>{navigator.clipboard.writeText(e),app.notify({title:"Link copied",description:"The link has been copied to your clipboard.",icon:s.clipboard.checked})}},"Copy Link")]),y=e=>o({text:"Open",class:"m-1",click:()=>new r(e,[h({link:"https://example.com"})]).open()}),D=()=>m({title:"Dialogs",description:"Displays a dialog or a component that looks like a dialog. Dialogs can be opened and closed. They will be closed if the user clicks outside of the dialog or if the user clicks the close button."},[i({title:"Usage",description:"Import the dialog atom and use it in your components.",preview:[d({title:"Title",description:"this is the description.",hideFooter:!1},[])],code:`import {  Dialog  } from "@base-framework/ui/molecules";

new Dialog({
    title: '',
    description: '',
    hideFooter: false
}, [

]).open()`}),i({title:"Confirmation",description:"Displays a confirmation dialog.",preview:[u({title:"Are you absoultely sure?",description:"This action cannot be undone. This will permanently delete your account and remove your data from our servers.",confirmTextLabel:"Save",confirmed:()=>console.log("Confirmed!")})],code:`import {  Confirmation  } from "@base-framework/ui/molecules";

new Confirmation({
    title: 'Are you absoultely sure?',
    description: 'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
    confirmTextLabel: 'Save',
    confirmed: () => console.log('Confirmed!')
}).open()`}),i({title:"Share Link",description:"Displays a dialog with a shareable link.",preview:[y({title:"Share Link",description:"Share this link with others."})],code:`import {  Confirmation  } from "@base-framework/ui/molecules";

new Confirmation({
    title: 'Are you absoultely sure?',
    description: 'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
    confirmTextLabel: 'Save',
    confirmed: () => console.log('Confirmed!')
}).open()`}),i({title:"Types",description:"There are different types of dialogs.",preview:[f()],code:`import {  Dialog  } from "@base-framework/ui/molecules";
import {  Confirmation  } from "@base-framework/ui/molecules";
import {  Icons  } from "@base-framework/ui/icons";

new Confirmation({
    icon: Icons.signOut,
    type: 'destructive',
    title: 'Are you absoultely sure?',
    description: 'This will sign you out of the application.',
    confirmTextLabel: 'Sign Out',
    confirmed: () => console.log('Confirmed!')
}).open()
`}),l("The types are `destructive`, `warning`, `info`, `success`, and `default`. Dialogs can also have an icon in the header. The icon can be any icon from the icon library.")]);export{D as DialogPage,D as default};
