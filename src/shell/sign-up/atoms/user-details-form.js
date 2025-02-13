import { Button, Div, Input, Label } from '@base-framework/atoms';
import { Atom } from '@base-framework/base';
import { STEPS } from '../steps.js';

/**
 * @function UserDetailsForm
 * @description
 *  Renders a simple form to collect user details.
 *
 * @param {object} props
 * @param {Function} props.showStep - The callback to navigate steps.
 * @returns {object} A Div component containing the user details form.
 */
export const UserDetailsForm = Atom(({ showStep }) =>
(
	Div({ class: 'p-6 space-y-4' }, [
		Div({ class: 'grid gap-2' }, [
			Label({ class: 'block text-sm font-medium' }, 'Full Name'),
			Input({
				class: 'border p-2 rounded',
				type: 'text',
				placeholder: 'Jane Doe'
			})
		]),
		Div({ class: 'grid gap-2' }, [
			Label({ class: 'block text-sm font-medium' }, 'Email'),
			Input({
				class: 'border p-2 rounded',
				type: 'email',
				placeholder: 'jane@example.com'
			})
		]),
		Div({ class: 'grid gap-2' }, [
			Label({ class: 'block text-sm font-medium' }, 'Password'),
			Input({
				class: 'border p-2 rounded',
				type: 'password',
				placeholder: '********'
			})
		]),

		Div({ class: 'flex space-x-2 pt-4' }, [
			Button({
				class: 'px-4 py-2 bg-primary rounded-md',
				onClick: () => showStep(STEPS.CONGRATULATIONS)
			}, 'Continue'),
			Button({
				class: 'px-4 py-2 bg-red-600 rounded-md',
				onClick: () => showStep(STEPS.ERROR)
			}, 'Trigger Error')
		])
	])
));