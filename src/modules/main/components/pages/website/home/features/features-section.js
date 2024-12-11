import { Div, H2, P, Span } from '@base-framework/atoms';
import { Atom } from '@base-framework/base';

/**
 * This will create the features section.
 *
 * @returns {object}
 */
export const FeaturesSection = Atom(() => (
    Div({ class: 'py-16 bg-background z-10 min-h-[800px]' }, [
        Div({ class: 'mx-auto mt-20 max-w-7xl px-6 lg:px-8 text-center' }, [
            H2({ class: 'text-3xl font-bold tracking-tight text-foreground sm:text-4xl' }, 'Our Core Features'),
            P({ class: 'mt-4 text-lg leading-8 text-muted-foreground' }, 'Empower your business with our powerful set of features designed to help you grow and succeed.')
        ]),
        Div({ class: 'mt-20 grid max-w-5xl mx-auto gap-8 sm:grid-cols-3 px-6 lg:px-0' }, [
            // Feature 1
            Div({ class: 'flex flex-col items-center text-center' }, [
                // Replace with an actual icon (e.g., heroicons or custom SVG)
                Span({ class: 'mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary' }, '🌐'),
                H2({ class: 'text-xl font-semibold text-foreground' }, 'Global Reach'),
                P({ class: 'mt-2 text-sm text-muted-foreground' }, 'Expand your audience and increase conversions with international support.')
            ]),
            // Feature 2
            Div({ class: 'flex flex-col items-center text-center' }, [
                Span({ class: 'mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary' }, '⚡'),
                H2({ class: 'text-xl font-semibold text-foreground' }, 'Lightning Fast'),
                P({ class: 'mt-2 text-sm text-muted-foreground' }, 'Experience blazing performance to keep your customers engaged.')
            ]),
            // Feature 3
            Div({ class: 'flex flex-col items-center text-center' }, [
                Span({ class: 'mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary' }, '🔒'),
                H2({ class: 'text-xl font-semibold text-foreground' }, 'Secure & Reliable'),
                P({ class: 'mt-2 text-sm text-muted-foreground' }, 'Bank-level security and top-notch reliability to protect your data.')
            ])
        ])
    ])
));
