import { Div } from '@base-framework/atoms';
import { Atom } from '@base-framework/base';
import { Panel } from "@base-framework/ui/organisms";
import { Header } from './header/header.js';
import { CookieConsentBar } from './home/hero/cookie-concent-bar.js';
import { HeroSection } from './home/hero/hero.js';

// Importing our new sections
import { CTASection } from './home/cta/cta-section.js';
import { FeaturesSection } from './home/features/features-section.js';
import { FooterSection } from './home/footer/footer-section.js';
import { TestimonialsSection } from './home/testimonials/testimonials-section.js';

/**
 * This will create a page.
 *
 * @param {array} children
 * @returns {object}
 */
const Page = (children) => (
    new Panel({ class: 'flex flex-auto flex-col relative' }, children)
);

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
                    component: Page([
                        HeroSection(),
                        FeaturesSection(),
                        TestimonialsSection(),
                        CTASection(),
                        FooterSection()
                    ])
                },
                {
                    uri: 'website/about',
                    component: Page([
                        Div({ class: 'flex flex-auto flex-col items-center justify-center' }, [
                            Div({ class: 'text-3xl font-semibold' }, 'About')
                        ])
                    ])
                },
                {
                    component: Page([
                        Div({ class: 'flex flex-auto flex-col items-center justify-center' }, [
                            Div({ class: 'text-3xl font-semibold' }, '404 Not Found')
                        ])
                    ])
                }
            ]
        })
    ])
));

export default MainLayout;