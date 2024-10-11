import { Icons } from '../../components/icons.js';
import { Module } from '../module.js';
import { MainAsideBsidePage } from './js/components/pages/main-aside-bside-page.js';
import { MainBsidePage } from './js/components/pages/main-bside-page.js';
import { MainFullContainPage } from './js/components/pages/main-full-contain-page.js';
import { MainFullPage } from './js/components/pages/main-full-page.js';

/**
 * This will set the routes for the module.
 */
const routes = Module.convertRoutes(
[
    { path: '/', component: MainFullPage(), title: 'Example' },
    { path: '/full', component: MainFullPage(), title: 'Full Example' },
    { path: '/full-contain', component: MainFullContainPage(), title: 'Full Contain Example' },
    { path: '/aside-bside', component: MainAsideBsidePage(), title: 'Aside Bside Example' },
    { path: '/bside', component: MainBsidePage(), title: 'Bside Example' },

    // Dynamically loaded route
    {
        path: '/aside/:page?/:marketing?/:label?/:name?*',
        import: import('./js/components/pages/main-aside/main-aside-page.js'),
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
    { label: 'Home', href: './', icon: Icons.home, mobileOrder: 1 },
    { label: 'Messages', href: 'aside', icon: Icons.chat, mobileOrder: 2 },
    { label: 'Calendar', href: 'bside', icon: Icons.calendar, mobileOrder: 3 },
    { label: 'Reviews', href: 'aside-bside', icon: Icons.star, mobileOrder: 4 },
    { label: 'Map', href: 'full', icon: Icons.map, mobileOrder: 5 },
    { label: 'Help', href: 'full-contain', icon: Icons.help },
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
    { label: 'Archive', href: 'cast', icon: Icons.archive },
    {
        label: 'Settings',
        icon: Icons.adjustments,
        options: [
            { label: 'irure nostrud', href: 'gallery/irure-nostrud' },
            { label: 'ipsum dolore', href: 'gallery/ipsum-dolore' },
            { label: 'enim consectetur', href: 'gallery/enim-consectetur' }
        ]
    },
    // {
    //     group: 'Mail',
    //     options: [
    //         { label: 'Inbox', href: './mail/inbox', icon: 'blank' },
    //         { label: 'Sent', href: './mail/sent', icon: 'blank' },
    //         { label: 'Spam', href: './mail/spam', icon: 'blank' }
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