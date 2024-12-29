import { Icons } from "@base-framework/ui/icons";
import { Module } from '../module/module.js';
import { InboxPage } from './components/pages/inbox/inbox-page.js';

/**
 * This will set the routes for the module.
 *
 * @type {Array<object>} routes
 */
const routes = Module.convertRoutes(
[
    /**
     * Inbox routes
     */
    { path: '/inbox/:page?/:messageId?*', component: InboxPage(), title: 'Inbox' }
]);

/**
 * This will set the links for the module.
 *
 * @type {Array<object>} links
 */
const links =
[
    { label: 'Inbox', href: 'inbox', icon: Icons.envelope.default, mobileOrder: 3 }
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