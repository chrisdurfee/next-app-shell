import { Div, OnState } from '@base-framework/atoms';
import { Button } from '@base-framework/ui/atoms';
import { AppShellSection } from './sections/app-shell-section.js';
import { CongratulationsSection } from './sections/congratulations-section.js';
import { DevelopmentSection } from './sections/development-section.js';
import { ModulesSection } from './sections/modules-section.js';
import { ProjectSetupSection } from './sections/project-setup-section.js';
import { ThemingSection } from './sections/theming-section.js';
import { WelcomeSection } from './sections/welcome-section.js';
import { STEPS } from './steps.js';

/**
 * @function PageStepContainer
 * @description
 *  Renders the correct page section based on current step.
 *
 * @returns {object} A Div that conditionally renders each step's section.
 */
export const PageStepContainer = () =>
(
    Div({ class: 'flex flex-auto flex-col items-center justify-center p-4' }, [
        Div({ class: 'w-full max-w-4xl border shadow-md rounded-lg p-6 flex' }, [
            Div({ class: 'w-1/2 p-4' }, [
                OnState('step', (step) =>
                {
                    switch (step)
                    {
                        case STEPS.PROJECT_SETUP:
                            return ProjectSetupSection();

                        case STEPS.THEMING:
                            return ThemingSection();

                        case STEPS.MODULES:
                            return ModulesSection();

                        case STEPS.APP_SHELL:
                            return AppShellSection();

                        case STEPS.DEVELOPMENT:
                            return DevelopmentSection();

                        case STEPS.CONGRATULATIONS:
                            return CongratulationsSection();

                        case STEPS.WELCOME:
                        default:
                            return WelcomeSection();
                    }
                })
            ]),
            Div({ class: 'w-1/2 p-4 flex items-center justify-center' }, [
                Div({ class: 'w-full h-64 bg-gray-200 rounded-lg' }) // Skeleton image placeholder
            ])
        ]),
        Div({ class: 'w-full max-w-4xl flex justify-between mt-4' }, [
            Button({
                variant: 'outline',
                click: () => app.showStep(app.state.step === STEPS.WELCOME ? STEPS.WELCOME : Object.keys(STEPS)[Object.keys(STEPS).indexOf(app.state.step) - 1])
            }, 'Back'),
            Button({
                click: () => app.showStep(Object.keys(STEPS)[Object.keys(STEPS).indexOf(app.state.step) + 1])
            }, 'Next')
        ])
    ])
);