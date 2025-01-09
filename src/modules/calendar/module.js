import { Icons } from "@base-framework/ui/icons";
import { Module } from '../module/module.js';
import CalendarPage from './components/pages/calendar/calendar-page.js';

/**
 * This will set the routes for the module.
 *
 * @type {Array<object>} routes
 */
const routes = Module.convertRoutes(
[
    /**
     * Calendar route
     */
    { path: '/calendar/:view/:date?*', component: CalendarPage, title: 'Calender' }
]);

/**
 * This will set the links for the module.
 *
 * @type {Array<object>} links
 */
const links =
[
    { label: 'Calendar', href: 'calendar/month', icon: Icons.calendar.default, mobileOrder: 9 }
];

/**
 * This will create our module and add it to the app
 * modules.
 */
Module.create(
{
    /**
     * @param {Array<object>} routes
     */
    routes,

    /**
     * This will get the options to create the app
     * navigation.
     *
     * @param {Array<object>} links
     */
    links
});