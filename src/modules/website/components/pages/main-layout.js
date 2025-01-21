import { Div } from '@base-framework/atoms';
import { Atom } from '@base-framework/base';
import { Header } from './header/header.js';
import { CookieConsentBar } from './home/hero/cookie-concent-bar.js';

/**
 * This will create the main layout for the website.
 *
 * @returns {object}
 */
export const MainLayout = Atom(() => (
    Div({ class: 'flex flex-auto flex-col relative' }, [
        new CookieConsentBar(),
        Header(),
        Div({
            class: 'flex flex-auto flex-col',
            switch: [
                {
                    uri: 'website',
                    import: import('./home/home-page.js'),
                },
                {
                    uri: 'website/about',
                    import: () => import('./about/about-page.js'),
                },
                {
                    import: () => import('./not-found/error-404-page.js'),
                }
            ]
        })
    ])
));

export default MainLayout;