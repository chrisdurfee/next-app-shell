import { Icons } from "@base-framework/ui/icons";
import { Module } from '../module/module.js';
import { HomePage } from './components/pages/home/home-page.js';

/**
 * This will set the routes for the module.
 *
 * @type {Array<object>} routes
 */
const routes = Module.convertRoutes(
[
    { path: '/', component: HomePage, title: 'Home' }
]);

/**
 * This will set the links for the module.
 *
 * @type {Array<object>} links
 */
const links =
[
    { label: 'Home', href: './', icon: Icons.home, exact: true }
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