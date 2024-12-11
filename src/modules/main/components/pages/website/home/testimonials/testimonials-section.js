import { Div, H2, Img, P } from '@base-framework/atoms';
import { Atom } from '@base-framework/base';

/**
 * This will create the testimonials section.
 *
 * @returns {object}
 */
export const TestimonialsSection = Atom(() => (
    Div({ class: 'py-16 bg-secondary/20' }, [
        Div({ class: 'mx-auto mt-20 max-w-7xl px-6 lg:px-8 text-center' }, [
            H2({ class: 'text-3xl font-bold tracking-tight text-foreground sm:text-4xl' }, 'What Our Customers Say'),
            P({ class: 'mt-4 text-lg leading-8 text-muted-foreground' }, 'Real feedback from real users. See why businesses trust us.'),
        ]),
        Div({ class: 'mt-10 grid gap-8 max-w-5xl mx-auto md:grid-cols-3 px-6 lg:px-0' }, [
            Div({ class: 'flex flex-col items-center text-center p-6 rounded-lg bg-background shadow-sm' }, [
                // Optional image or avatar
                Img({ class: 'h-16 w-16 rounded-full mb-4', src: '/path/to/avatar1.jpg', alt: 'Customer 1' }),
                P({ class: 'text-sm text-muted-foreground italic' }, '"This platform transformed our online presence. Our sales skyrocketed!"'),
                P({ class: 'mt-2 text-sm text-foreground font-semibold' }, '— Jane D.')
            ]),
            Div({ class: 'flex flex-col items-center text-center p-6 rounded-lg bg-background shadow-sm' }, [
                Img({ class: 'h-16 w-16 rounded-full mb-4', src: '/path/to/avatar2.jpg', alt: 'Customer 2' }),
                P({ class: 'text-sm text-muted-foreground italic' }, '"The features are intuitive, and the support team is exceptional."'),
                P({ class: 'mt-2 text-sm text-foreground font-semibold' }, '— Mark R.')
            ]),
            Div({ class: 'flex flex-col items-center text-center p-6 rounded-lg bg-background shadow-sm' }, [
                Img({ class: 'h-16 w-16 rounded-full mb-4', src: '/path/to/avatar3.jpg', alt: 'Customer 3' }),
                P({ class: 'text-sm text-muted-foreground italic' }, '"We’ve never looked back. Highly recommend this service."'),
                P({ class: 'mt-2 text-sm text-foreground font-semibold' }, '— Lisa K.')
            ])
        ])
    ])
));