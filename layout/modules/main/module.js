import { AsideBsidePage } from '../../pages/types/aside-bside-page.js';
import { BsidePage } from '../../pages/types/bside-page.js';
import { FullContainPage } from '../../pages/types/full-contain-page.js';
import { FullPage } from '../../pages/types/full-page.js';
import { Module } from '../module.js';

/**
 * This will setup the route creator.
 */
const routes = Module.routeCreator();

/**
 * This will create our module and add it to the app
 * modules.
 */
Module.create(
{
    title: 'Main Module',

    /**
     * @param {array} routes
     */
    routes:
    [
        routes.add('/', FullPage, 'Example'),
        routes.add('/full', FullPage, 'Full Example'),
        routes.add('/full-contain', FullContainPage, 'Full Contain Example'),

        routes.load(
            '/aside/:page?/:marketing?/:label?/:name?',
            '/layout/pages/types/aside-page.js',
            'Aside Example'
        ),

        routes.add('/bside', BsidePage, 'Bside Example'),
        routes.add('/aside-bside', AsideBsidePage, 'Aside Bside Example')
    ],

    /**
     * This will get the options to create the app
     * navigation.
     *
     * @return {array}
     */
    links:
    [
        {
            label: 'Example',
            href: './',
            icon: 'blank'
        },
        {
            label: 'Aside',
            href: 'aside',
            icon: 'blank'
        },
        {
            label: 'Bside',
            href: 'bside',
            icon: 'blank'
        },
        {
            label: 'Aside + Bside',
            href: 'aside-bside',
            icon: 'blank'
        },
        {
            label: 'Full',
            href: 'full',
            icon: 'blank'
        },
        {
            label: 'Full Contain',
            href: 'full-contain',
            icon: 'blank'
        },
        {
            label: 'Messages',
            href: 'messages',
            icon: 'blank'
        },
        {
            label: 'Synopsis',
            icon: 'blank',
            options:
            [
                {
                    group: 'Synopsis',
                    options:
                    [
                        {
                            label: 'Story',
                            href: 'synopsis/story'
                        },
                        {
                            label: 'Book',
                            options: [
                                {
                                    label: 'irure nostrud 1',
                                    href:'synopsis/Book/irure-nostrud'
                                },
                                {
                                    label: 'ipsum dolore 2',
                                    href: 'synopsis/Book/ipsum-dolore'
                                },
                                {
                                    label: 'enim consectetur 3',
                                    href: 'synopsis/Book/enim-consectetur'
                                }
                            ]
                        },
                        {
                            label: 'Concepts',
                            options: [
                                {
                                    label: 'irure nostrud',
                                    href:'synopsis/concepts/irure-nostrud'
                                },
                                {
                                    label: 'ipsum dolore',
                                    href: 'synopsis/concepts/ipsum-dolore'
                                },
                                {
                                    label: 'enim consectetur',
                                    href: 'synopsis/concepts/enim-consectetur'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            label: 'Cast',
            href: 'cast',
            icon: 'blank'
        },
        {
            label: 'Gallery',
            icon: 'blank',
            options: [
                {
                    label: 'irure nostrud',
                    href:'gallery/irure-nostrud'
                },
                {
                    label: 'ipsum dolore',
                    href: 'gallery/ipsum-dolore'
                },
                {
                    label: 'enim consectetur',
                    href: 'gallery/enim-consectetur'
                }
            ]
        },
        {
            group: 'Mail',
            options:
            [
                {
                    label: 'Inbox',
                    href: './mail/inbox',
                    icon: 'blank'
                },
                {
                    label: 'Sent',
                    href: './mail/sent',
                    icon: 'blank'
                },
                {
                    label: 'Spam',
                    href: './mail/spam',
                    icon: 'blank'
                }
            ]
        }
    ]
});