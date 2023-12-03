import { AsideBsidePage } from '../../pages/aside-bside-page.js';
import { AsidePage } from '../../pages/aside-page.js';
import { BsidePage } from '../../pages/bside-page.js';
import { FullContainPage } from '../../pages/full-contain-page.js';
import { FullPage } from '../../pages/full-page.js';
import { Module, ModuleRoutes } from '../module.js';

/**
 * Set any common dependencies that are shared between
 * pages.
 */
const common = [];

/**
 * This will setup the route creator. we want to pass
 * the common depends to the module routes to use when
 * adding local dependencies.
 */
const routes = new ModuleRoutes(common);

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
        routes.load('/aside/:page?/:marketing?/:label?/:name?', {
            src: 'layout/pages/aside-page.js',
            callBack()
            {
                return new AsidePage();
            }
        }, 'Aside Example'),
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
                                    href:'/synopsis/Book/irure-nostrud'
                                },
                                {
                                    label: 'ipsum dolore 2',
                                    href: '/synopsis/Book/ipsum-dolore'
                                },
                                {
                                    label: 'enim consectetur 3',
                                    href: '/synopsis/Book/enim-consectetur'
                                }
                            ]
                        },
                        {
                            label: 'Concepts',
                            options: [
                                {
                                    label: 'irure nostrud',
                                    href:'/synopsis/concepts/irure-nostrud'
                                },
                                {
                                    label: 'ipsum dolore',
                                    href: '/synopsis/concepts/ipsum-dolore'
                                },
                                {
                                    label: 'enim consectetur',
                                    href: '/synopsis/concepts/enim-consectetur'
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
                    href:'/gallery/irure-nostrud'
                },
                {
                    label: 'ipsum dolore',
                    href: '/gallery/ipsum-dolore'
                },
                {
                    label: 'enim consectetur',
                    href: '/gallery/enim-consectetur'
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