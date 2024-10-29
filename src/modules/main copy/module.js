import { Icons } from '@components/icons/icons.js';
import { Module } from '../module.js';
import { LoginPage } from './components/pages/home/login-page.js';

/**
 * This will set the routes for the module.
 */
const routes = Module.convertRoutes(
[
    { path: '/login', component: LoginPage(), title: 'Login' }
]);

/**
 * This will set the links for the module.
 *
 * @type {array}
 */
const links =
[
    { label: 'Login', href: 'login', icon: Icons.home }
];

/**
 * This will create our module and add it to the app
 * modules.
 */
Module.create(
{
    /**
     * @param {array} routes
     */
    routes,

    /**
     * This will get the options to create the app
     * navigation.
     *
     * @param {array} links
     */
    links
});