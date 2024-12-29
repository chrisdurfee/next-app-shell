import { Icons } from "@base-framework/ui/icons";
import { Module } from '../module/module.js';
import ClientListPage from './components/pages/clients/client-list-page.js';

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
    { path: '/clients/:clientId?*', component: ClientListPage(), title: 'Clients' }
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