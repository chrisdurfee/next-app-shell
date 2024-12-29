import { Module } from '../module/module.js';
import SettingsPage from './components/pages/settings/settings-page.js';

/**
 * This will set the routes for the module.
 *
 * @type {Array<object>} routes
 */
const routes = Module.convertRoutes(
[
    /**
     * Settings route
     */
    { path: '/settings/:page?*', component: SettingsPage(), title: 'Settings' }
]);

/**
 * This will set the links for the module.
 *
 * @type {Array<object>} links
 */
const links =
[

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