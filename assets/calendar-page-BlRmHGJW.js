import{aT as r,aU as o,aV as t,ae as n,a2 as m}from"./index-CAtlfimY.js";import{C as s}from"./signature-panel-Dwnm79Sg-BWEGvBjL.js";import{D as e}from"./doc-section-BmwD-w3i.js";import{D as c}from"./doc-page-Cs2adT5a.js";import"./sidebar-menu-page-DFRJL944-BtEPb0m7.js";import"./full-page-CgVI1G7F-DJ0Pcr5g.js";import"./mobile-nav-wrapper-9VRCW4oA-DNLUn6P_.js";import"./sidebar-menu-DLGBb0-I-Bf4tpJkn.js";const l=()=>m.formatTime("",24),D=()=>c({title:"Calendars",description:"This is the calendar component documentation."},[e({title:"Usage",description:"This is how you can use the calendar component.",preview:[new r],code:`@base-framework/ui/organisms;

new Calendar()`}),e({title:"Week Calendar",description:"This is how you can use the week calendar component.",preview:[new s],code:`@base-framework/ui/organisms;

new Calendar()`}),e({title:"Range Calendar",description:"This is how you can use the range calendar component.",preview:[new o],code:`@base-framework/ui/organisms;

new RangeCalendar()`}),e({title:"Dynamic Time",description:"The Dynamic Time class will allow you to create a dynamic time that will update every minute.",preview:[new t({filter:()=>{let a="Morning";const i=l();return i>="18:00:00"?a="Evening":i>="12:00:00"&&(a="Afternoon"),`Good ${a}`}})],code:`import { DateTime } from "@base-framework/base";
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
})`}),e({title:"Dynamic Local Time by Time Frame",description:"This will show the time frame based on the local time. This will update the time frame every minute to keep the time frame updated.",preview:[n({dateTime:"2024-11-04T18:00:00",remoteTimeZone:"America/Denver"})],code:`import {  TimeFrame  } from "@base-framework/ui/molecules";

TimeFrame({
    dateTime: '2024-11-04T18:00:00',
    remoteTimeZone: 'America/Denver'
})`})]);export{D as CalendarPage,D as default};
