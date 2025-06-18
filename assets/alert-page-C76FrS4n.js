import{m as e,a as t}from"./index-DT-M5YCd.js";import{D as i}from"./doc-section-CkpMafQQ.js";import{D as o}from"./doc-page-DkY7UGbX.js";import"./signature-panel-CuUlwQzE-BZL_UZ3T.js";import"./tooltip-DcnXGw52-B0Z4jJ0h.js";import"./sidebar-menu-page-B1YSAs3o-BhWoA9e7.js";import"./mobile-nav-wrapper-m9eu2YJR-DODDi-8y.js";const u=()=>o({title:"Alerts",description:"Alerts are used to provide feedback to the user about the outcome of an action or to inform them of important information."},[i({title:"Default Alert",description:"This is a standard alert without any specific type.",preview:[e({title:"Notice",description:"This is a default alert without a specific type.",icon:t.information})],code:`import {  Alert  } from "@base-framework/ui/molecules";
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
})`})]);export{u as AlertPage,u as default};
