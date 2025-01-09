import { Page } from '@base-framework/ui/pages';
import { CTASection } from './cta/cta-section.js';
import { FeaturesSection } from './features/features-section.js';
import { FooterSection } from './footer/footer-section.js';
import { HeroSection } from './hero/hero.js';
import { TestimonialsSection } from './testimonials/testimonials-section.js';

/**
 * This will create a page.
 *
 * @returns {object}
 */
export const HomePage = () => (
    new Page({ class: 'flex flex-auto flex-col relative' }, [
        HeroSection(),
        FeaturesSection(),
        TestimonialsSection(),
        CTASection(),
        FooterSection()
    ])
);

export default HomePage;