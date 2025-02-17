import { FullscreenPage } from '@base-framework/ui/pages';
import { PageStepContainer } from './page-step-container.js';
import { STEPS } from './steps.js';

/**
 * @type {PageProps}
 */
const PageProps =
{
	/**
	 * @function setupStates
	 * @description
	 *  Defines the initial state values for the sign-up page.
	 *
	 * @returns {object} The initial state (with step = WELCOME).
	 */
	setupStates()
	{
		return {
			step: STEPS.WELCOME
		};
	},

	/**
	 * @function showStep
	 * @description
	 *  Updates the `step` state to a new step key.
	 *
	 * @param {string} step - One of the STEPS constants.
	 */
	showStep(step)
	{
		// @ts-ignore
		this.state.step = step;
	},

	/**
	 * This will get the next step.
	 *
	 * @returns {string}
	 */
	nextStep()
	{
		const values = Object.values(STEPS);
		// @ts-ignore
		const currentStep = this.state.step;
		const stepIndex = values.indexOf(currentStep);

		const result = values[stepIndex + 1];
		return result || values[values.length - 1];
	},

	/**
	 * This will get the previous step.
	 *
	 * @returns {string}
	 */
	prevStep()
	{
		const values = Object.values(STEPS);
		// @ts-ignore
		const currentStep = this.state.step;
		const stepIndex = values.indexOf(currentStep);

		return values[stepIndex - 1] || values[0];
	}
};

/**
 * @function OnboardingPage
 * @description
 *  Constructs a FullscreenPage using our page settings and
 *  the PageStepContainer, which renders all step UI.
 *
 * @returns {object} A FullscreenPage instance.
 */
export const OnboardingPage = () =>
(
	new FullscreenPage(PageProps, [
		PageStepContainer()
	])
);

export default OnboardingPage;