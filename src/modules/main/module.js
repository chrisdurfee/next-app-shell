import { Module } from '../module/module.js';

/**
 * This will set the routes for the module.
 *
 * @type {Array<object>} routes
 */
const routes = Module.convertRoutes(
[
	/**
	 * Staticly loaded routes
	 */
	// { path: '/website/:page?*', component: WebsitePage(), title: 'Inbox' },

	/**
	 * Dynamically loaded routes
	 */
	// {
	//     path: '/aside/:page?/:marketing?/:label?/:name?*',
	//     import: () => import('./components/pages/main-aside/main-sidebar-menu-page.js'),
	//     title: 'Sidebar Menu Example'
	// }
]);

/**
 * This will set the links for the module.
 *
 * @type {Array<object>} links
 */
const links =
[
	// Top level links
	// { label: 'Music', href: 'music', icon: Icons.music, mobileOrder: 2, exact: false },

	// Nested links
	// {
	//     label: 'Photo',
	//     icon: Icons.photo,
	//     options: [
	//         {
	//             group: 'Synopsis',
	//             options: [
	//                 { label: 'Story', href: 'synopsis/story' },
	//                 {
	//                     label: 'Book',
	//                     options: [
	//                         { label: 'irure nostrud 1', href: 'synopsis/Book/irure-nostrud' },
	//                         { label: 'ipsum dolore 2', href: 'synopsis/Book/ipsum-dolore' },
	//                         { label: 'enim consectetur 3', href: 'synopsis/Book/enim-consectetur' }
	//                     ]
	//                 },
	//                 {
	//                     label: 'Concepts',
	//                     options: [
	//                         { label: 'irure nostrud', href: 'synopsis/concepts/irure-nostrud' },
	//                         { label: 'ipsum dolore', href: 'synopsis/concepts/ipsum-dolore' },
	//                         { label: 'enim consectetur', href: 'synopsis/concepts/enim-consectetur' }
	//                     ]
	//                 }
	//             ]
	//         }
	//     ]
	// }
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