import { Button, Div, H2 } from '@base-framework/atoms';
import { Atom } from '@base-framework/base';
import { STEPS } from '../steps.js';

/**
 * @function ErrorMessage
 * @description
 *  Displays an error message with a Retry button.
 *
 * @returns {object} A Div component containing the error message.
 */
export const ErrorMessage = Atom(() =>
(
	Div({ class: 'w-full max-w-sm bg-card text-card-foreground shadow rounded-xl sm:border sm:shadow-lg p-6 space-y-4' }, [
		H2({ class: 'text-red-600 text-xl font-bold' }, 'Oops, something went wrong!'),
		Button({
			class: 'px-4 py-2 bg-primary text-white rounded-md',
			click: (e, { showStep }) => showStep(STEPS.USER_DETAILS)
		}, 'Retry')
	])
));