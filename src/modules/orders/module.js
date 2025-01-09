import { Icons } from "@base-framework/ui/icons";
import { Module } from '../module/module.js';
import OrdersDashboard from './components/pages/orders/orders-dashboard/orders-dashboard.js';

/**
 * This will set the routes for the module.
 *
 * @type {Array<object>} routes
 */
const routes = Module.convertRoutes(
[
    /**
     * Orders routes
     */
    { path: '/orders/orders-dashboard/:orderId?*', component: OrdersDashboard, title: 'Orders', preventScroll: true }
]);

/**
 * This will set the links for the module.
 *
 * @type {Array<object>} links
 */
const links =
[
    { label: 'Orders', href: 'orders/orders-dashboard', icon: Icons.shoppingCart, mobileOrder: 10 }
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