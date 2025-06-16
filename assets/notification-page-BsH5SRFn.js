import{G as n,at as o,a as i,w as e}from"./index-DJRwqYgx.js";import"./tooltip-DcnXGw52-B_089Bww.js";import{D as t}from"./doc-section-KwKn2AjC.js";import{D as a}from"./doc-page-CpPeIFu4.js";import"./signature-panel-CuUlwQzE-CVrKg3UN.js";import"./sidebar-menu-page-B1YSAs3o-CZVXndve.js";import"./mobile-nav-wrapper-m9eu2YJR-BqAjwTUd.js";const u=()=>a({title:"Notifications",description:"Displays a notification message to the user."},[t({title:"Default Notification",description:"This is a standard notification without any specific type.",preview:[new o({title:"Default Notification",description:"This is a default notification.",icon:i.information,duration:"infinite"})],code:`app.notify({
    title: 'Default Notification',
    description: 'This is a default notification.',
    icon: Icons.info,
    duration: 'infinite'
})`}),n({class:"text-muted-foreground"},'The notification can either be a link with an "href" attribute or a button with an "onClick" event.'),t({title:"Info Notification",description:"An informational notification to inform users about general information.",preview:[new o({title:"Heads up!",description:"You can add components to your app using the CLI.",icon:i.information,type:"info",duration:"infinite"})],code:`app.notify({
    title: 'Heads up!',
    description: 'You can add components to your app using the CLI.',
    icon: Icons.information,
    type: 'info',
    duration: 'infinite'
})`}),t({title:"Warning Notification",description:"A warning notification to caution the user about potential issues.",preview:[new o({title:"Warning!",description:"Please check your input before proceeding.",icon:i.warning,type:"warning",duration:"infinite"})],code:`app.notify({
    title: 'Warning!',
    description: 'Please check your input before proceeding.',
    icon: Icons.warning,
    type: 'warning',
    duration: 5000
})`}),t({title:"Destructive Notification",description:"A destructive notification to alert the user of a serious issue or error.",preview:[new o({title:"Error!",description:"Something went wrong. Please try again later.",icon:i.shield,type:"destructive",duration:"infinite"})],code:`app.notify({
    title: 'Error!',
    description: 'Something went wrong. Please try again later.',
    icon: Icons.warning,
    type: 'destructive',
    duration: 'infinite'
})`}),t({title:"Success Notification",description:"A success notification to confirm a successful action or process.",preview:[new o({title:"Success!",description:"The action was successful.",icon:i.check,type:"success",duration:"infinite"})],code:`app.notify({
    title: 'Success!',
    description: 'The action was successful.',
    icon: Icons.check,
    type: 'success',
    duration: 'infinite'
})`}),t({title:"Notification with Actions",description:"This notification includes primary and secondary buttons for user actions.",preview:[new o({title:"Action Required",description:"Would you like to proceed with this action?",icon:i.information,type:"info",primary:"Proceed",primaryAction:()=>console.log(1),secondary:"Cancel",secondaryAction:()=>console.log(1),duration:"infinite"})],code:`app.notify({
    title: 'Action Required',
    description: 'Would you like to proceed with this action?',
    icon: Icons.question,
    type: 'info',
    primary: 'Proceed',
    primaryAction: () => alert('Primary action clicked!'),
    secondary: 'Cancel',
    secondaryAction: () => alert('Secondary action clicked!'),
    duration: 'infinite' // Notification will remain until user dismisses
})`}),n({class:"text-muted-foreground"},"Notifications will stack if multiple are triggered at the same time. The notification will remain visible until the specified duration has passed. If a notification duration is set to 'infinite', it must be manually dismissed by the user."),t({title:"Usage",description:"Call 'notify' on the global notification container to display notifications.",preview:[e({click:()=>{app.notify({title:"Notification Title",description:"This is a notification.",icon:i.information})}},"Show Notification")],code:`app.notify({
    title: 'Notification Title',
    description: 'This is a notification.',
    icon: Icons.warning,
    type: 'warning',
    duration: 5000 // in milliseconds, leave blank for the default 4 seconds, or use 'infinite' to keep it until dismissed
})`})]);export{u as NotificationPage,u as default};
