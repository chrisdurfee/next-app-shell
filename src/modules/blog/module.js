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
     * Blog routes
     */
    { path: '/blog/posts/:postId?*', import: () => import('./components/pages/blog/posts/post-page.js'), title: 'Post' },
    { path: '/blog*', import: () => import('./components/pages/blog/blog-page.js'), title: 'Blog' }
]);

/**
 * This will set the links for the module.
 *
 * @type {Array<object>} links
 */
const links =
[
    { label: 'Blog', href: 'blog', icon: Icons.newspaper, mobileOrder: 1 }
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