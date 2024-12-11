import { Div } from '@base-framework/atoms';
import { Atom } from '@base-framework/base';
import { Header } from './header/header.js';
import { CookieConsentBar } from './hero/cookie-concent-bar.js';
import { HeroSection } from './hero/hero.js';

/**
 * This will create the main layout for the website.
 *
 * @returns {object}
 */
export const MainLayout = Atom(() => (
    Div({ class: 'flex flex-auto flex-col relative' }, [
        new CookieConsentBar(),
        Header(),
        HeroSection()
    ])
));

export default MainLayout;