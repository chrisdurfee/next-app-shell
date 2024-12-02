import { Icons } from '@components/icons/icons.js';
import { Module } from '../module/module.js';
import { BlogPage } from './components/pages/blog/blog-page.js';
import { PostPage } from './components/pages/blog/posts/post-page.js';
import DashboardPage from './components/pages/dashboard/dashboard-page.js';
import { HomePage } from './components/pages/home/home-page.js';
import InboxPage from './components/pages/inbox/inbox-page.js';
import { MainAsideBsidePage } from './components/pages/main-aside-bside-page.js';
import { MainBsidePage } from './components/pages/main-bside-page.js';
import AlbumPage from './components/pages/music/album-page/album-page.js';
import SettingsPage from './components/pages/settings/settings-page.js';
import WebsitePage from './components/pages/website/website-page.js';

/**
 * This will set the routes for the module.
 *
 * @type {array<object>} routes
 */
const routes = Module.convertRoutes(
[
    { path: '/', component: HomePage(), title: 'Home' },

    /**
     * Inbox routes
     */
    { path: '/inbox/:page?/:messageId?*', component: InboxPage(), title: 'Inbox' },

    /**
     * Dashboard routes
     */
    { path: '/dashboard/:page?*', component: DashboardPage(), title: 'Dashboard' },

    /**
     * Music routes
     */
    { path: '/music/album/:album?*', component: AlbumPage(), title: 'Album' },
    { path: '/music*', import: import('./components/pages/music/music-page/music-page.js'), title: 'Music' },

    /**
     * Blog routes
     */
    { path: '/blog/posts/:postId?*', component: PostPage(), title: 'Post' },
    { path: '/blog*', component: BlogPage(), title: 'Blog' },

    /**
     * Calendar route
     */
    { path: '/calendar/:date?*', import: import('./components/pages/calendar/calendar-page.js'), title: 'Calender' },

    /**
     * List route
     */
    { path: '/list/:page?*', import: import('./components/pages/lists/list-page.js'), title: 'List' },

    /**
     * Settings route
     */
    { path: '/settings/:page?*', component: SettingsPage(), title: 'Settings' },

    /**
     * website routes
     */
    { path: '/website/:page?*', component: WebsitePage(), title: 'Inbox' },

    /**
     * Full page routes
     */
    { path: '/aside-bside', component: MainAsideBsidePage(), title: 'Aside Bside Example' },
    { path: '/bside', component: MainBsidePage(), title: 'Bside Example' },

    // Dynamically loaded route
    {
        path: '/aside/:page?/:marketing?/:label?/:name?*',
        import: import('./components/pages/main-aside/main-aside-page.js'),
        title: 'Aside Example'
    }
]);

/**
 * This will set the links for the module.
 *
 * @type {array<object>} links
 */
const links =
[
    { label: 'Home', href: './', icon: Icons.home, exact: true },
    { label: 'Music', href: 'music', icon: Icons.music, mobileOrder: 2 },
    { label: 'Dashboard', href: 'dashboard', icon: Icons.barChart, mobileOrder: 4 },
    { label: 'Inbox', href: 'inbox', icon: Icons.chat.text, mobileOrder: 3 },
    { label: 'Blog', href: 'blog', icon: Icons.newspaper, mobileOrder: 1 },
    { label: 'Calendar', href: 'calendar', icon: Icons.calendar.default },
    { label: 'List', href: 'list', icon: Icons.list.four },
    { label: 'Website', href: 'website', icon: Icons.global },
    // { label: 'Reviews', href: 'full-contain', icon: Icons.star },
    // { label: 'Map', href: 'full', icon: Icons.map },
    // { label: 'Help', href: 'test', icon: Icons.help },
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
    // },
    // { label: 'Archive', href: 'cast', icon: Icons.newspaper }
];

/**
 * This will create our module and add it to the app
 * modules.
 */
Module.create(
{
    /**
     * @param {array<object>} routes
     */
    routes,

    /**
     * This will get the options to create the app
     * navigation.
     *
     * @param {array<object>} links
     */
    links
});