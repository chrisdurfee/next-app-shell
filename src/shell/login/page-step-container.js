import { Div } from '@base-framework/atoms';
import { ForgotPasswordSection } from './forgot-password-section.js';
import { LoginSection } from './login-section.js';
import { STEPS } from './steps.js';

/**
 * PageStepContainer
 *
 * This will create the step container.
 *
 * @returns {object}
 */
export const PageStepContainer = () => (
    Div({ class: 'flex flex-auto flex-col', onState: ['step', (step) =>
    {
        switch (step)
        {
            case STEPS.FORGOT_PASSWORD:
                return ForgotPasswordSection();
            default:
                return LoginSection();
        }
    }]})
);