import { Div, OnState } from '@base-framework/atoms';
import { Button, Skeleton } from '@base-framework/ui/atoms';
import { AppShellSection } from './sections/app-shell-section.js';
import { CongratulationsSection } from './sections/congratulations-section.js';
import { DevelopmentSection } from './sections/development-section.js';
import { ModulesSection } from './sections/modules-section.js';
import { ProjectSetupSection } from './sections/project-setup-section.js';
import { ThemingSection } from './sections/theming-section.js';
import { WelcomeSection } from './sections/welcome-section.js';
import { STEPS } from './steps.js';

/**
 * This will get the next step.
 *
 * @param {string} currentStep
 * @returns {string}
 */
const getNextStep = (currentStep) =>
{
	const values = Object.values(STEPS);
	const stepIndex = values.indexOf(currentStep);
	const result = values[stepIndex + 1];
	return result || values[values.length - 1];
};

/**
 * This will get the previous step.
 *
 * @param {string} currentStep
 * @returns {string}
 */
const getPreviousStep = (currentStep) =>
{
	const values = Object.values(STEPS);
	const stepIndex = values.indexOf(currentStep);
	return values[stepIndex - 1] || values[0];
};

/**
 * @function PageStepContainer
 * @description
 *  Renders the correct page section based on current step.
 *
 * @returns {object} A Div that conditionally renders each step's section.
 */
export const PageStepContainer = () =>
(
    Div({
			class: 'flex flex-auto flex-col items-center justify-center p-4'
		}, [
        Div({ class: 'flex flex-auto flex-col md:flex-row md:max-h-[700px] w-full max-w-5xl bg-card text-card-foreground shadow rounded-xl sm:border sm:shadow-lg p-4 fadeIn' }, [
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
            Skeleton({ width: "w-full", height: "h-full", class: "rounded-lg" })
        ]),
        Div({ class: 'w-full max-w-5xl flex justify-between mt-4' }, [
            Button({
                variant: 'outline',
                click: (e, parent) =>
					{
						const previousStep = getPreviousStep(parent.state.step);
						parent.showStep(previousStep);
					}
            }, 'Back'),
            Button({
                click: (e, parent) =>
					{
						const nextStep = getNextStep(parent.state.step);
						parent.showStep(nextStep);
					}
            }, 'Next')
        ])
    ])
);