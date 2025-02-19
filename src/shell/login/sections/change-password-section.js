import { Div, Form, H1, Header, P, Section } from '@base-framework/atoms';
import { Atom } from '@base-framework/base';
import { Button, Input } from "@base-framework/ui/atoms";

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
			// Handle the password change logic
			console.log('Password change submitted');
		},
		role: 'form'
	}, [
		Div({ class: 'grid gap-4' }, [
			// Current Password
			Input({
				type: 'password',
				placeholder: 'Current Password',
				required: true,
				'aria-required': true
			}),
			// New Password
			Input({
				type: 'password',
				placeholder: 'New Password',
				required: true,
				'aria-required': true
			}),
			// Confirm New Password
			Input({
				type: 'password',
				placeholder: 'Confirm New Password',
				required: true,
				'aria-required': true
			}),
			// Submit Button
			Button({ type: 'submit' }, 'Change Password')
		])
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
			ChangePasswordHeader({
				title: 'Change Password',
				description: 'Choose a new password.'
			}),
			ChangePasswordForm()
		])
	])
);

export default ChangePasswordSection;