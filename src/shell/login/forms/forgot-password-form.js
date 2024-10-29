import { Div, Form } from '@base-framework/atoms';
import { Button } from '@components/atoms/buttons/buttons.js';
import { EmailInput } from '@components/atoms/form/input.js';

/**
 * This will create the email container.
 *
 * @returns {object}
 */
const EmailContainer = () => (
	Div({ class: 'grid gap-4' }, [
		Div({ class: 'grid gap-4' }, [
			EmailInput( { placeholder: 'Email Address', required: true, 'aria-required': true } ),
		]),
	])
);

/**
 * This will create the submit button.
 *
 * @returns {object}
 */
const SubmitButton = () => (
	Div({ class: 'grid gap-4' }, [
		Button({ type: 'submit' }, 'Submit')
	])
);

/**
 * This will create the cancel button.
 *
 * @returns {object}
 */
const CancelButton = () => (
	Div({ class: 'grid gap-4' }, [
		Button({ variant: 'outline', 'aria-label': 'Cancel' }, 'Cancel')
	])
);

/**
 * This will create the forgot password form.
 *
 * @returns {object}
 */
export const ForgotPasswordForm = () => (
	Form({ class: 'flex flex-col p-6 pt-0', submit: () => app.signIn(), role: 'form' }, [
		Div({ class: 'grid gap-4' }, [
			EmailContainer(),
			SubmitButton(),
			CancelButton(),
		]),
	])
);