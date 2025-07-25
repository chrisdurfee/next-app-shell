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
	 * Directory routes
	 */
	{ path: '/directory/user/:userId?*', import: () => import('./components/pages/directory/user/user-page.js'), title: 'User' },
	{ path: '/directory*', import: () => import('./components/pages/directory/directory-page.js'), title: 'Directory' }
]);

/**
 * This will set the links for the module.
 *
 * @type {Array<object>} links
 */
const links =
[
	{ label: 'Directory', href: 'directory', icon: Icons.user.group, mobileOrder: 7 }
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