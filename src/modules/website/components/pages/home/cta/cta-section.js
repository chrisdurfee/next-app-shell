import { A, Div, H2, P } from '@base-framework/atoms';
import { Atom } from '@base-framework/base';

/**
 * This will create the call-to-action section.
 *
 * @returns {object}
 */
export const CTASection = Atom(() => (
    Div({ class: 'py-16 bg-background min-h-[600px]' }, [
        Div({ class: 'mx-auto mt-20 max-w-7xl px-6 lg:px-8 text-center' }, [
            H2({ class: 'text-3xl font-bold tracking-tight sm:text-4xl' }, 'Ready to Get Started?'),
            P({ class: 'mt-4 text-lg leading-8' }, 'Take your business to the next level with our platform.'),
            Div({ class: 'mt-8 flex justify-center' }, [
                A({ href: '/website#signup', class: 'bttn primary' }, 'Start Free Trial'),
                A({ href: '/website#pricing', class: 'bttn ghost ml-4' }, 'View Pricing')
            ])
        ])
    ])
));