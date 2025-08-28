import { A, Div, P } from '@base-framework/atoms';
import { Atom } from '@base-framework/base';

/**
 * This will create the footer section.
 *
 * @returns {object}
 */
export const FooterSection = Atom(() => (
    Div({ class: 'py-10 bg-background text-secondary-foreground' }, [
        Div({ class: 'mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center gap-y-4' }, [
            Div({ class: 'flex gap-x-6' }, [
                A({ href: '/website/about', class: 'text-sm hover:underline' }, 'About'),
                A({ href: '/website/contact', class: 'text-sm hover:underline' }, 'Contact'),
                A({ href: '/website/blog', class: 'text-sm hover:underline' }, 'Blog'),
                A({ href: '/website/privacy', class: 'text-sm hover:underline' }, 'Privacy Policy')
            ]),
            P({ class: 'text-xs text-muted-foreground' }, `© ${new Date().getFullYear()} Your Company Name. All rights reserved.`)
        ])
    ])
));