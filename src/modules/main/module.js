import { Icons } from '../../components/icons/icons.js';
import { Module } from '../module.js';
import { HomePage } from './components/pages/home/home-page.js';
import { MainAsideBsidePage } from './components/pages/main-aside-bside-page.js';
import { MainBsidePage } from './components/pages/main-bside-page.js';
import { MainFullContainPage } from './components/pages/main-full-contain-page.js';

/**
 * This will set the routes for the module.
 */
const routes = Module.convertRoutes(
[
    { path: '/', component: HomePage(), title: 'Home' },
    { path: '/full-contain*', component: MainFullContainPage(), title: 'Full Contain Example' },
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
    { label: 'Messages', href: 'aside', icon: Icons.chat.text, mobileOrder: 2 },
    { label: 'Calendar', href: 'bside', icon: Icons.calendar.default, mobileOrder: 3 },
    { label: 'Reviews', href: 'full-contain', icon: Icons.star, mobileOrder: 4 },
    { label: 'Map', href: 'full', icon: Icons.map },
    { label: 'Help', href: 'test', icon: Icons.help },
    { label: 'Music', href: 'messages', icon: Icons.music },
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
    },
    {
        group: 'Mail',
        options: [
            { label: 'Inbox', href: 'mail/inbox', icon: Icons.archive.box.default },
            { label: 'Sent', href: 'mail/sent', icon: Icons.archive.box.arrow },
            { label: 'Spam', href: 'mail/spam', icon: Icons.archive.box.x }
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