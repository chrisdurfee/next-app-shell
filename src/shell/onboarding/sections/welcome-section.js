import { Div, H1, P } from '@base-framework/atoms';

/**
 * @function WelcomeSection
 * @description
 *  Creates the split layout of the welcome page:
 *    - Left side: branding/testimonial panel
 *    - Right side: sign-up intro card
 *
 * @returns {object} A Section component containing the two panes.
 */
export const WelcomeSection = () =>
{
    return Div({ class: 'flex flex-col items-start' }, [
        H1({ class: 'text-2xl font-bold mb-4' }, 'Welcome to App Shell'),
        P({ class: 'text-base text-muted-foreground mb-4' },
            'A versatile and modular platform for building modern web applications using Tailwind CSS and Shadcn-inspired themes.'
        ),
        P({ class: 'text-base text-muted-foreground mb-4' },
            'In this guide, we will walk you through the necessary steps to get started.'
        )
    ]);
};