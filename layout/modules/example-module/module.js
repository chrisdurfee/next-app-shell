import { BsidePage } from '../../pages//bside-page.js';
import { FullContainPage } from '../../pages//full-contain-page.js';
import { FullPage } from '../../pages//full-page.js';
import { AsideBsidePage } from '../../pages/aside-bside-page.js';
import { Module } from '../module.js';

/**
 * This will setup the route creator.
 */
const routes = Module.routeCreator();

/**
 * This will create the example module and add it to the
 * app modules.
 */
Module.create(
{
    title: 'Example Module',

    /**
     * @param {array} routes
     */
    routes:
    [
        routes.add('/exmaple', FullContainPage, 'Example'),
        routes.add('/exmaple-full', FullPage, 'Full Example'),
        routes.add('/exmaple-full-contain', FullContainPage, 'Full Contain Example'),

        routes.load('/exmaple-aside/:page?/:marketing?/:label?', {
            src: 'layout/modules/example-module/js/pages/example-page.js'
        }, 'Aside Example'),

        routes.load('/exmaple-string', {
            src: 'layout/modules/example-module/js/pages/example-page.js',
        }, 'Aside Example'),

        routes.add('/exmaple-bside', BsidePage, 'Bside Example'),
        routes.add('/exmaple-aside-bside', AsideBsidePage, 'Aside Bside Example')
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
            label: 'Example Page',
            href: '/exmaple',
            icon: 'blank'
        },
        {
            label: 'Example Aside',
            href: 'exmaple-aside',
            icon: 'blank'
        },
        {
            label: 'Example String',
            href: 'exmaple-string',
            icon: 'blank'
        },
        {
            label: 'Example Bside',
            href: 'exmaple-bside',
            icon: 'blank'
        },
        {
            label: 'Example Aside + Bside',
            href: 'exmaple-aside-bside',
            icon: 'blank'
        },
        {
            label: 'Example Full',
            href: 'exmaple-full',
            icon: 'blank'
        },
        {
            label: 'Example Full Contain',
            href: 'exmaple-full-contain',
            icon: 'blank'
        }
    ]
});