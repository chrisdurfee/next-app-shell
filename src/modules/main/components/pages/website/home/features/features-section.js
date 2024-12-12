import { Div, H2, Header, P, Span } from '@base-framework/atoms';
import { Atom } from '@base-framework/base';

/**
 * This will create a feature.
 *
 * @param {object} props
 * @returns {object}
 */
const Feature = ({ icon, title, description }) => (
    Div({ class: 'flex flex-col items-center text-center' }, [
        Span({ class: 'mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary' }, icon),
        H2({ class: 'text-xl font-semibold text-foreground' }, title),
        P({ class: 'mt-2 text-sm text-muted-foreground' }, description)
    ])
);

/**
 * This will create the feature header.
 *
 * @returns {object}
 */
const FeatureHeader = () => Header({ class: 'mx-auto mt-20 max-w-7xl px-6 lg:px-8 text-center' }, [
    H2({ class: 'text-3xl font-bold tracking-tight text-foreground sm:text-4xl' }, 'Our Core Features'),
    P({ class: 'mt-4 text-lg leading-8 text-muted-foreground' }, 'Empower your business with our powerful set of features designed to help you grow and succeed.')
]);

/**
 * This will create the features section.
 *
 * @returns {object}
 */
export const FeaturesSection = Atom(() => (
    Div({ class: 'py-16 bg-background z-10 min-h-[800px]' }, [
        FeatureHeader(),
        Div({ class: 'mt-20 grid max-w-5xl mx-auto gap-8 sm:grid-cols-3 px-6 lg:px-0' }, [

            Feature({
                icon: '🌐',
                title: 'Global Reach',
                description: 'Expand your audience and increase conversions with international support.'
            }),

            Feature({
                icon: '⚡',
                title: 'Lightning Fast',
                description: 'Experience blazing performance to keep your customers engaged.'
            }),

            Feature({
                icon: '🔒',
                title: 'Secure & Reliable',
                description: 'Bank-level security and top-notch reliability to protect your data.'
            })
        ])
    ])
));
