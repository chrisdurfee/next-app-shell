import { Div, H2, H3, P } from '@base-framework/atoms';
import { STEPS } from '../steps.js';

export const DevelopmentSection = () =>
{
    const nextStep = () => app.showStep(STEPS.CONGRATULATIONS);
    const prevStep = () => app.showStep(STEPS.APP_SHELL);

    return Div({ class: 'flex flex-col items-start' }, [
        H2({ class: 'text-2xl font-bold mb-4' }, 'Development Guidelines'),

        GuideStep('Project Organization', [
            P({ class: 'text-muted-foreground' }, 'Follow these structure guidelines:'),
            Div({ class: 'ml-4 mt-2 space-y-2' }, [
                P('• Keep components small and focused'),
                P('• Group related functionality into modules'),
                P('• Use atomic design principles (atoms, molecules, organisms)'),
                P('• Maintain consistent file naming conventions')
            ])
        ]),

        GuideStep('Component Development', [
            P({ class: 'text-muted-foreground' }, 'Best practices for components:'),
            Div({ class: 'ml-4 mt-2 space-y-2' }, [
                P('• Use the Base framework\'s component system'),
                P('• Follow accessibility guidelines'),
                P('• Implement responsive design'),
                P('• Document component props and usage')
            ])
        ]),

        GuideStep('State Management', [
            P({ class: 'text-muted-foreground' }, 'Guidelines for managing state:'),
            Div({ class: 'ml-4 mt-2 space-y-2' }, [
                P('• Use local state for UI-specific data'),
                P('• Leverage global state for shared data'),
                P('• Keep state updates predictable'),
                P('• Document state changes')
            ])
        ]),

        GuideStep('Testing & Quality', [
            P({ class: 'text-muted-foreground' }, 'Ensure code quality by:'),
            Div({ class: 'ml-4 mt-2 space-y-2' }, [
                P('• Writing clear, maintainable code'),
                P('• Following Base framework conventions'),
                P('• Testing components and modules'),
                P('• Using TypeScript for better type safety')
            ])
        ])
    ]);
};

const GuideStep = (title, content) =>
    Div({ class: 'mb-8' }, [
        H3({ class: 'text-xl font-semibold mb-4' }, title),
        ...content
    ]);