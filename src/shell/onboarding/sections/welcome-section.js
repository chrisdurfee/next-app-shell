import { Button, Div, H1, P } from '@base-framework/atoms';
import { STEPS } from '../steps.js';

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
    const nextStep = () => app.showStep(STEPS.PROJECT_SETUP);

    return Div({ class: 'flex flex-col items-start' }, [
        H1({ class: 'text-2xl font-bold mb-4' }, 'Welcome to App Shell'),
        P({ class: 'text-base text-muted-foreground mb-4' },
            'A versatile and modular platform for building modern web applications using Tailwind CSS and Shadcn-inspired themes.'
        ),
        P({ class: 'text-base text-muted-foreground mb-4' },
            'In this guide, we will walk you through the following steps to get started:'
        ),
        Div({ class: 'list-disc list-inside' }, [
            P('1. Project Setup'),
            P('2. Theming'),
            P('3. Modules'),
            P('4. App Shell'),
            P('5. Development')
        ]),
        Button({
            class: 'mt-8',
            click: nextStep
        }, 'Get Started')
    ]);
};

const StepPreview = (title, description) =>
    Div({ class: 'flex items-start gap-4 p-4 border rounded-lg bg-muted/50' }, [
        Div({ class: 'mt-1 w-5 h-5' }),
        Div({ class: 'flex flex-col gap-1' }, [
            P({ class: 'font-medium leading-none' }, title),
            P({ class: 'text-sm text-muted-foreground' }, description)
        ])
    ]);