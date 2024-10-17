import { Icons } from '../../components/icons/icons.js';
import { Module } from '../module.js';

/**
 * This will set the routes for the module.
 */
const routes = Module.convertRoutes(
[
    {
        path: '/docs/:page?/:subpage?*',
        import: import('./components/pages/doc-page.js'),
        title: 'Aside Example'
    }
]);

/**
 * This will set the links for the module.
 *
 * @type {array}
 */
const links =
[
    {
        group: 'Getting Started',
        options: [
            { label: 'Docs', href: './docs', icon: Icons.calendar }
        ]
    }
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