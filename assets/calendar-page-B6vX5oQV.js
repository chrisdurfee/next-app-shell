import{aD as r,aE as t,aF as o,a3 as n,an as m}from"./index-Du5DAytY.js";import{x as s}from"./signature-panel-C73NYC3W-CRKvyCze.js";import{D as e}from"./doc-section-_84ojOZ3.js";import{D as c}from"./doc-page-BlEk9b4y.js";import"./tooltip-PupzYM1r-Dk4zQdZ3.js";import"./sidebar-menu-page-D4WMgz5U-Cv0AsTXt.js";import"./mobile-nav-wrapper-Dm9DinRD-CZATpmgs.js";const l=()=>n.formatTime("",24),h=()=>c({title:"Calendars",description:"This is the calendar component documentation."},[e({title:"Usage",description:"This is how you can use the calendar component.",preview:[new r],code:`@base-framework/ui/organisms;

new Calendar()`}),e({title:"Week Calendar",description:"This is how you can use the week calendar component.",preview:[new s],code:`@base-framework/ui/organisms;

new Calendar()`}),e({title:"Range Calendar",description:"This is how you can use the range calendar component.",preview:[new t],code:`@base-framework/ui/organisms;

new RangeCalendar()`}),e({title:"Dynamic Time",description:"The Dynamic Time class will allow you to create a dynamic time that will update every minute.",preview:[new o({filter:()=>{let a="Morning";const i=l();return i>="18:00:00"?a="Evening":i>="12:00:00"&&(a="Afternoon"),`Good ${a}`}})],code:`import { DateTime } from "@base-framework/base";
import { DynamicTime } from "@base-framework/organisms";

new DynamicTime({
    filter: () =>
    {
        let message = 'Morning';

        const current = DateTime.formatTime('', 24);
        if (current >= '18:00:00')
        {
            message = 'Evening';
        }
        else if (current >= '12:00:00')
        {
            message = 'Afternoon';
        }

        return \`Good \${message}\`;
    }
})`}),e({title:"Dynamic Local Time by Time Frame",description:"This will show the time frame based on the local time. This will update the time frame every minute to keep the time frame updated.",preview:[m({dateTime:"2024-11-04T18:00:00",remoteTimeZone:"America/Denver"})],code:`import {  TimeFrame  } from "@base-framework/ui/molecules";

TimeFrame({
    dateTime: '2024-11-04T18:00:00',
    remoteTimeZone: 'America/Denver'
})`})]);export{h as CalendarPage,h as default};
