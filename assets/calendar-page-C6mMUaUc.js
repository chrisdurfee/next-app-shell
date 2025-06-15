import{au as r,av as t,a0 as o,ak as m}from"./index-ZCyCR2b7.js";import{a as n}from"./signature-panel-DEX9Sggs-6XPGCDkU.js";import{D as e}from"./doc-section-DyMN9jP-.js";import{D as s}from"./doc-page-Dh4vMTOa.js";import"./tooltip-DcnXGw52-7ljv7D1h.js";import"./sidebar-menu-page-DyIwNFwe-hvQRdUJp.js";import"./mobile-nav-wrapper-CuATTfqK-DTxkS-jO.js";const c=()=>o.formatTime("",24),g=()=>s({title:"Calendars",description:"This is the calendar component documentation."},[e({title:"Usage",description:"This is how you can use the calendar component.",preview:[new r],code:`@base-framework/ui/organisms;

new Calendar()`}),e({title:"Week Calendar",description:"This is how you can use the week calendar component.",preview:[new n],code:`@base-framework/ui/organisms;

new Calendar()`}),e({title:"Dynamic Time",description:"The Dynamic Time class will allow you to create a dynamic time that will update every minute.",preview:[new t({filter:()=>{let i="Morning";const a=c();return a>="18:00:00"?i="Evening":a>="12:00:00"&&(i="Afternoon"),`Good ${i}`}})],code:`import { DateTime } from "@base-framework/base";
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
})`})]);export{g as CalendarPage,g as default};
