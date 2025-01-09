import { Icons } from "@base-framework/ui/icons";
import { Module } from '../module/module.js';
import WebsitePage from './components/pages/website/website-page.js';

/**
 * This will set the routes for the module.
 *
 * @type {Array<object>} routes
 */
const routes = Module.convertRoutes(
[
    /**
     * website routes
     */
    { path: '/website/:page?*', component: WebsitePage, title: 'Inbox' }
]);

/**
 * This will set the links for the module.
 *
 * @type {Array<object>} links
 */
const links =
[
    { label: 'Website', href: 'website', icon: Icons.global, mobileOrder: 7 }
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