import { Div, Form, H1, Header, P, Section, Span } from '@base-framework/atoms';
import { Atom } from '@base-framework/base';
import { Button } from '@components/atoms/buttons/buttons.js';
import { Input } from '@components/atoms/form/input.js';
import { FullPage } from '@components/pages/full-page.js';

/**
 * This will create a header for the documentation.
 *
 * @param {object} props
 * @returns {object}
 */
const LoginHeader = Atom(({ title, description}) => (
	Header({ class: 'flex flex-col space-y-1.5 p-6' }, [
		H1({ class: 'scroll-m-20 text-3xl font-bold tracking-tight' }, title),
		description && P({ class: 'text-base text-muted-foreground py-2 max-w-[700px]' }, description),
	])
));

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
const LoginForm = () => (
	Form({ class: 'flex flex-col p-6 pt-0' }, [
		Div({ class: 'grid gap-4' }, [
			CredentialsContainer(),
			SignInButton(),
			SignInWIthGoogleButton(),
			SignUpLink(),
		]),
	])
);

/**
 * This will create the login section.
 *
 * @returns {object}
 */
const LoginSection = () => (
	Section({ class: 'flex flex-auto flex-col justify-center items-center' }, [
		Div({ class: 'rounded-xl sm:border sm:shadow-lg bg-card text-card-foreground shadow w-full mx-auto max-w-sm' }, [
			LoginHeader({ title: 'Login', description: 'Please enter your credentials to login.' }),
			LoginForm(),
		])
	])
);

/**
 * LoginPage
 *
 * This will create a login page.
 *
 * @returns {FullPage}
 */
export const LoginPage = () => (
	new FullPage(
		[
			LoginSection()
		]
	)
);