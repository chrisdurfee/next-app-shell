import { Div, Form, H1, Header, OnState, P, Section } from '@base-framework/atoms';
import { Atom } from '@base-framework/base';
import { Button, Icon, Input } from "@base-framework/ui/atoms";
import { Icons } from '@base-framework/ui/icons';
import { PasswordValidator } from '../utils/password-validator';

/**
 * ChangePasswordHeader
 *
 * Renders the header for the change password step.
 *
 * @param {object} props - The properties for the header.
 * @param {string} props.title - The title text.
 * @param {string} props.description - The description text.
 * @returns {object} A virtual DOM element representing the header.
 */
const ChangePasswordHeader = Atom(({ title, description }) => (
	Header({ class: 'flex flex-col space-y-1.5 p-6' }, [
		H1({ class: 'scroll-m-20 text-3xl font-bold tracking-tight' }, title),
		description && P({ class: 'text-base text-muted-foreground py-2 max-w-[700px]' }, description)
	])
));

/**
 * Validates the password and confirm password.
 *
 * @param {string} password - The password to validate.
 * @param {string} confirmPassword - The password to compare against.
 * @returns {boolean}
 */
const validate = (password, confirmPassword) =>
{
	if (password !== confirmPassword)
	{
		app.notify({
			title: 'Error',
			description: 'Passwords do not match.',
			type: 'destructive'
		});
		return false;
	}

	const firstName = '';
	const lastName = '';
	const validator = new PasswordValidator(firstName, lastName, password);
	const result = validator.validate();
	if (result.valid)
	{
		return true;
	}

	app.notify({
		title: 'Error',
		description: 'Password does not meet requirements.',
		type: 'destructive'
	});
	return false;
}

/**
 * ChangePasswordForm
 *
 * Renders the form for changing the password.
 *
 * @returns {object} A virtual DOM element representing the change password form.
 */
const ChangePasswordForm = () => (
	Form({
		class: 'flex flex-col p-6 pt-0',
		submit: (e, parent) =>
		{
			e.preventDefault();

			const password = parent.data.password;
			const confirmPassword = parent.data.confirmPassword;
			if (!validate(password, confirmPassword))
			{
				return;
			}

			// Handle the password change logic
			parent.showStep('confirm');
		},
		role: 'form'
	}, [
		Div({ class: 'grid gap-4' }, [
			// New Password
			Input({
				type: 'password',
				placeholder: 'New Password',
				required: true,
				bind: 'password',
				pattern: '(?=^.{12,}$)(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*\W).*$',
				title: 'Password must be at least 12 characters long and include uppercase, lowercase, number, and special character.',
				'aria-required': true
			}),
			// Confirm New Password
			Input({
				type: 'password',
				placeholder: 'Confirm New Password',
				required: true,
				bind: 'confirmPassword',
				pattern: '(?=^.{12,}$)(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*\W).*$',
				title: 'Password must be at least 12 characters long and include uppercase, lowercase, number, and special character.',
				'aria-required': true
			}),
			// Submit Button
			Button({ type: 'submit' }, 'Change Password')
		])
	])
);

/**
 * A page section that displays the final success message.
 *
 * @returns {object} A Section component containing the success message UI.
 */
export const CongratulationsSection = () => (
	Div({ class: 'flex flex-col items-center p-6' }, [
		Div({ class: 'w-16 h-16 mb-6 text-primary' }, [
			Icon(Icons.circleCheck)
		]),
		H1({ class: 'text-2xl font-bold mb-4' }, "All Done!"),
		P({ class: 'text-base text-muted-foreground mb-4' },
			"You now have completed the password change process. "
		),
		Button({
			click: () =>
			{
				app.navigate('/');
			}
		}, "Go to Home")
	])
);

/**
 * ChangePasswordSection
 *
 * Renders the change password step for the login process.
 *
 * @returns {object} A virtual DOM element representing the change password section.
 */
export const ChangePasswordSection = () => (
	Section({ class: 'flex flex-auto flex-col justify-center items-center' }, [
		Div({
			class: 'rounded-xl sm:border sm:shadow-lg bg-card text-card-foreground shadow w-full mx-auto max-w-sm'
		}, [
			OnState('step', (step) =>
			{
				switch (step)
				{
					case 'confirm':
						return CongratulationsSection();
					default:
						return Div([
							ChangePasswordHeader({
								title: 'Change Password',
								description: 'Choose a new password.'
							}),
							ChangePasswordForm()
						]);
				}
			})
		])
	])
);

export default ChangePasswordSection;