import { Icons } from "@base-framework/ui/icons";
import { Module } from '../module/module.js';
import AlbumPage from './components/pages/music/album-page/album-page.js';

/**
 * This will set the routes for the module.
 *
 * @type {Array<object>} routes
 */
const routes = Module.convertRoutes(
[
    /**
     * Music routes
     */
    { path: '/music/album/:album?*', component: AlbumPage(), title: 'Album' },
    { path: '/music*', import: import('./components/pages/music/music-page/music-page.js'), title: 'Music' }
]);

/**
 * This will set the links for the module.
 *
 * @type {Array<object>} links
 */
const links =
[
    { label: 'Music', href: 'music', icon: Icons.music, mobileOrder: 2 }
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