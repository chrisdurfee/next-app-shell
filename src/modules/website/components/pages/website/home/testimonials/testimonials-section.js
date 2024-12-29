import { Div, H2, P } from '@base-framework/atoms';
import { Atom } from '@base-framework/base';
import { Avatar } from "@base-framework/ui/molecules";

/**
 * This will create a testimonial.
 *
 * @param {object} props
 * @returns {object}
 */
const Testimonial = ({ image, quote, author }) => (
    Div({ class: 'flex flex-col items-center text-center p-6 rounded-lg bg-background shadow-sm' }, [
        Avatar({ src: image, alt: author, size: 'xl', fallbackText: author }),
        P({ class: 'text-sm text-muted-foreground italic mt-4' }, quote),
        P({ class: 'mt-2 text-sm text-foreground font-semibold' }, `— ${author}`)
    ])
);

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
            Testimonial({
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                quote: '"This platform transformed our online presence. Our sales skyrocketed!"',
                author: 'Jane D.'
            }),
            Testimonial({
                image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                quote: '"The features are intuitive, and the support team is exceptional."',
                author: 'Mark R.'
            }),
            Testimonial({
                image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                quote: '"We\'ve never looked back. Highly recommend this service."',
                author: 'Lisa K.'
            })
        ])
    ])
));