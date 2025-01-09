import { Div } from '@base-framework/atoms';
import { Atom } from '@base-framework/base';
import { AboutPage } from './about/about-page.js';
import { Header } from './header/header.js';
import { CookieConsentBar } from './home/hero/cookie-concent-bar.js';
import { HomePage } from './home/home-page.js';
import { Error404Page } from './not-found/error-404-page.js';

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
                    component: HomePage
                },
                {
                    uri: 'website/about',
                    component: AboutPage
                },
                {
                    component: Error404Page
                }
            ]
        })
    ])
));

export default MainLayout;