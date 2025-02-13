import { Button, Div, H1, Header, P } from '@base-framework/atoms';
import { Atom } from '@base-framework/base';
import { STEPS } from '../steps.js';

/**
 * @function RightPane
 * @description
 *  Renders the sign-up card portion on the right side of the screen.
 *
 * @param {object} props
 * @param {Function} props.showStep - The callback to navigate steps.
 * @returns {object} A Div component for the right panel (Welcome view).
 */
export const RightPane = Atom(({ showStep }) =>
(
	Div({ class: 'flex w-full flex-auto flex-col justify-center items-center' }, [
		Div({
			class: 'w-full max-w-sm bg-card text-card-foreground shadow rounded-xl sm:border sm:shadow-lg p-6 space-y-4'
		}, [
			Header({ class: 'flex flex-col space-y-1.5' }, [
				H1({ class: 'scroll-m-20 text-3xl font-bold tracking-tight' }, 'Sign Up'),
				P({ class: 'text-base text-muted-foreground py-2' },
					'Welcome to Acme Inc! Let\'s get you started.'
				)
			]),
			Button({
				class: 'px-4 py-2 bg-primary rounded-md',
				onClick: () => showStep(STEPS.USER_DETAILS)
			}, 'Continue')
		])
	])
));