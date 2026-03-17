import{m as e,s as t}from"./index-QyzxKzz3.js";import{D as i}from"./doc-section-U_ZjOgqZ.js";import{D as o}from"./doc-page-DTE49KIs.js";import"./signature-panel-BWHC9V2v-Bg9o8u0i.js";import"./sidebar-menu-page-D12NEBpp-BRVrydSd.js";import"./sidebar-menu-BHHp2hXa-BXUYjmKm.js";const l=()=>o({title:"Alerts",description:"Alerts are used to provide feedback to the user about the outcome of an action or to inform them of important information."},[i({title:"Default Alert",description:"This is a standard alert without any specific type.",preview:[e({title:"Notice",description:"This is a default alert without a specific type.",icon:t.information})],code:`import {  Alert  } from "@base-framework/ui/molecules";
import {  Icons  } from "@base-framework/ui/icons";

Alert({
    title: 'Notice',
    description: 'This is a default alert without a specific type.',
    icon: Icons.information
})`}),i({title:"Info Alert",description:"An info alert that provides general information to the user.",preview:[e({title:"Heads up!",description:"You can add components to your app using the CLI.",icon:t.information,type:"info"})],code:`Alert({
    title: 'Heads up!',
    description: 'You can add components to your app using the CLI.',
    icon: Icons.information,
    type: 'info'
})`}),i({title:"Success Alert",description:"A success alert to inform the user of a successful action.",preview:[e({title:"Success!",description:"Your changes have been saved successfully.",icon:t.check,type:"success"})],code:`Alert({
    title: 'Success!',
    description: 'Your changes have been saved successfully.',
    icon: Icons.check,
    type: 'success'
})`}),i({title:"Warning Alert",description:"A warning alert to caution the user about something important.",preview:[e({title:"Warning!",description:"Please check your input before proceeding.",icon:t.warning,type:"warning"})],code:`Alert({
    title: 'Warning!',
    description: 'Please check your input before proceeding.',
    icon: Icons.warning,
    type: 'warning'
})`}),i({title:"Destructive Alert",description:"A destructive alert to inform the user of an error or serious issue.",preview:[e({title:"Error!",description:"Something went wrong. Please try again later.",icon:t.shield,type:"destructive"})],code:`Alert({
    title: 'Error!',
    description: 'Something went wrong. Please try again later.',
    icon: Icons.error,
    type: 'destructive'
})`})]);export{l as AlertPage,l as default};
