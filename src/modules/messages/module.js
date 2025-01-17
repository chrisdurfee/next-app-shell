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
	 * Messages routes
	 */
	{ path: '/messages/:page?/:messageId?*', import: () => import('./components/pages/messages/messages-page.js'), title: 'Messages' }
]);

/**
 * This will set the links for the module.
 *
 * @type {Array<object>} links
 */
const links =
[
	{ label: 'Messages', href: 'messages', icon: Icons.chat.text, mobileOrder: 3 }
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