(function()
{
    "use strict";

    /**
     * Set any common dependencies that are shared between
     * pages.
     */
    const common = [
        'layout/modules/example-module/css/pages/example-page.css'
    ];

    /**
     * This will setup the route creator. we want to pass
     * the common depends to the module routes to use when
     * adding local dependencies.
     */
    const routes = new ModuleRoutes(common);

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

            // this will create a loaded route with callBack
            routes.load('/exmaple-aside/:page?/:marketing?/:label?', {
                src: 'layout/modules/example-module/js/pages/example-page.js',
                depends: [
                    'layout/organisms/button-group.js'
                ],
                callBack()
                {
                    return new ExamplePage();
                }
            }, 'Aside Example'),

            // this will create a loaded route with string
            routes.load('/exmaple-string', {
                src: 'layout/modules/example-module/js/pages/example-page.js',
                callBack: 'ExamplePage'
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
})();