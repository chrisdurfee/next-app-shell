import { Icons } from "@base-framework/ui/icons";
import { Module } from '../module/module.js';

/**
 * This will set the routes for the module.
 *
 * @type {Array<object>} routes
 */
const routes = Module.convertRoutes(
[
    /**
     * Clients route
     */
    { path: '/clients/client/:clientId?*', import: () => import('./components/pages/client/client-page.js'), title: 'Client' },
    { path: '/clients/:clientId?*', import: () => import('./components/pages/clients/client-list-page.js'), title: 'Clients' }
]);

/**
 * This will set the links for the module.
 *
 * @type {Array<object>} links
 */
const links =
[
    { label: 'Clients', href: 'clients', icon: Icons.user.group, mobileOrder: 6 }
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