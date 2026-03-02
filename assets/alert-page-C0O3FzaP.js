import{j as e,s as t}from"./index-4IuT9NFE.js";import{D as i}from"./doc-section-BJB_clmd.js";import{D as o}from"./doc-page-CoNiROZa.js";import"./signature-panel-h1ranAet-DnDJGOZo.js";import"./sidebar-menu-page-BImgFKeY-CU920dUt.js";import"./full-page-CgVI1G7F-_jvfwZFB.js";import"./mobile-nav-wrapper-C7cKTxaV-D2uoDf_v.js";import"./sidebar-menu-Dz2oh95a-F7GyroUb.js";const d=()=>o({title:"Alerts",description:"Alerts are used to provide feedback to the user about the outcome of an action or to inform them of important information."},[i({title:"Default Alert",description:"This is a standard alert without any specific type.",preview:[e({title:"Notice",description:"This is a default alert without a specific type.",icon:t.information})],code:`import {  Alert  } from "@base-framework/ui/molecules";
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
})`})]);export{d as AlertPage,d as default};
