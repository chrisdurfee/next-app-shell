import { Div, Form, Span } from '@base-framework/atoms';
import { Button } from '@components/atoms/buttons/buttons.js';
import { Input } from '@components/atoms/form/input.js';

/**
 * This will create a sign up link.
 * @returns {object}
 */
const SignUpLink = () => (
	Div({ class: '' }, [
		Span({ class: 'text-sm text-muted-foreground mt-8 mb-0' }, 'Don\'t have an account? '),
		Span({ class: 'text-sm font-medium text-primary underline' }, 'Sign up'),
	])
);

/**
 * This will create the credentials container.
 *
 * @returns {object}
 */
const CredentialsContainer = () => (
	Div({ class: 'grid gap-4' }, [
		Div({ class: 'grid gap-4' }, [
			Input( { type: 'text', placeholder: 'Username' } ),
		]),
		Div({ class: 'grid gap-4' }, [
			Input( { type: 'password', placeholder: 'Password' } ),
		])
	])
);

/**
 * This will create the sign in button.
 *
 * @returns {object}
 */
const SignInButton = () => (
	Div({ class: 'grid gap-4' }, [
		Button({ type: 'submit' }, 'Login')
	])
);

/**
 * This will create the sign in with google button.
 *
 * @returns {object}
 */
const SignInWIthGoogleButton = () => (
	Div({ class: 'grid gap-4' }, [
		Button({ variant: 'outline' }, 'Login with Google')
	])
);

/**
 * This will create the login form.
 *
 * @returns {object}
 */
export const LoginForm = () => (
	Form({ class: 'flex flex-col p-6 pt-0' }, [
		Div({ class: 'grid gap-4' }, [
			CredentialsContainer(),
			SignInButton(),
			SignInWIthGoogleButton(),
			SignUpLink(),
		]),
	])
);