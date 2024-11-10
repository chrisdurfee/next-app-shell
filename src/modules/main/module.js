import { Icons } from '@components/icons/icons.js';
import { Overlay } from '@components/organisms/overlay.js';
import { Module } from '../module/module.js';
import { HomePage } from './components/pages/home/home-page.js';
import { MainAsideBsidePage } from './components/pages/main-aside-bside-page.js';
import { MainBsidePage } from './components/pages/main-bside-page.js';

/**
 * This will set the routes for the module.
 */
const routes = Module.convertRoutes(
[
    { path: '/', component: HomePage(), title: 'Home' },
    { path: '/music/album/:album?*', component: new Overlay(), title: 'Album' },
    { path: '/music*', import: import('./components/pages/music/music-page.js'), title: 'Music' },
    { path: '/calendar/:date?*', import: import('./components/pages/calendar/calendar-page.js'), title: 'Calender' },
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
 * @type {array}
 */
const links =
[
    { label: 'Home', href: './', icon: Icons.home, mobileOrder: 1, exact: true },
    { label: 'Music', href: 'music', icon: Icons.music, mobileOrder: 2 },
    { label: 'Messages', href: 'aside', icon: Icons.chat.text },
    { label: 'Calendar', href: 'calendar', icon: Icons.calendar.default, mobileOrder: 3 },
    { label: 'Reviews', href: 'full-contain', icon: Icons.star, mobileOrder: 4 },
    { label: 'Map', href: 'full', icon: Icons.map },
    { label: 'Help', href: 'test', icon: Icons.help },
    {
        label: 'Photo',
        icon: Icons.photo,
        options: [
            {
                group: 'Synopsis',
                options: [
                    { label: 'Story', href: 'synopsis/story' },
                    {
                        label: 'Book',
                        options: [
                            { label: 'irure nostrud 1', href: 'synopsis/Book/irure-nostrud' },
                            { label: 'ipsum dolore 2', href: 'synopsis/Book/ipsum-dolore' },
                            { label: 'enim consectetur 3', href: 'synopsis/Book/enim-consectetur' }
                        ]
                    },
                    {
                        label: 'Concepts',
                        options: [
                            { label: 'irure nostrud', href: 'synopsis/concepts/irure-nostrud' },
                            { label: 'ipsum dolore', href: 'synopsis/concepts/ipsum-dolore' },
                            { label: 'enim consectetur', href: 'synopsis/concepts/enim-consectetur' }
                        ]
                    }
                ]
            }
        ]
    },
    { label: 'Archive', href: 'cast', icon: Icons.newspaper },
    {
        label: 'Settings',
        icon: Icons.adjustments.veritical,
        options: [
            { label: 'irure nostrud', href: 'gallery/irure-nostrud' },
            { label: 'ipsum dolore', href: 'gallery/ipsum-dolore' },
            { label: 'enim consectetur', href: 'gallery/enim-consectetur' }
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