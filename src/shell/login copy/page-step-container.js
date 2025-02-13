import { Div, OnState } from '@base-framework/atoms';
import { WelcomeSection } from './sections/welcome-section.js';

/**
 * This will create the step container.
 *
 * @returns {object}
 */
export const PageStepContainer = () => (
	Div({ class: 'flex flex-auto flex-col' }, [
		OnState('step', (step) =>
		{
			switch (step)
			{
				default:
					return WelcomeSection();
			}
		})
	])
);