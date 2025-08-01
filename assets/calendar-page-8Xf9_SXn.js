import{aB as r,aC as t,aD as o,a2 as n,am as m}from"./index-gsZaEiwl.js";import{o as s}from"./signature-panel-obojbki5-Bg9KeoWP.js";import{D as e}from"./doc-section-Cvvvor8i.js";import{D as c}from"./doc-page-DtHu3VJa.js";import"./tooltip-Pwsjx1Gp-BUqgFa9G.js";import"./sidebar-menu-page-BVryQj2Z-CPpMpWY4.js";import"./mobile-nav-wrapper-Dj67Pb8l-CG06tZHI.js";const l=()=>n.formatTime("",24),h=()=>c({title:"Calendars",description:"This is the calendar component documentation."},[e({title:"Usage",description:"This is how you can use the calendar component.",preview:[new r],code:`@base-framework/ui/organisms;

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
