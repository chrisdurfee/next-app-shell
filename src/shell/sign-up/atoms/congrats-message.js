import { Button, Div, H2, P } from '@base-framework/atoms';
import { Atom } from '@base-framework/base';
import { STEPS } from '../steps.js';

/**
 * @function CongratsMessage
 * @description
 *  Displays a final success message with a button to return to the welcome step.
 *
 * @param {object} props
 * @param {Function} props.showStep - The callback to navigate steps.
 * @returns {object} A Div component containing the congratulations message.
 */
export const CongratsMessage = Atom(({ showStep }) =>
(
	Div({ class: 'w-full max-w-sm bg-card text-card-foreground shadow rounded-xl sm:border sm:shadow-lg p-6 space-y-4' }, [
		H2({ class: 'text-xl font-bold text-green-600' }, 'Congratulations!'),
		P({}, 'Your account has been created successfully.'),
		Button({
			class: 'px-4 py-2 bg-primary rounded-md',
			onClick: () => showStep(STEPS.WELCOME)
		}, 'Back to Welcome')
	])
));