import { Div, Form, H1, Header, P, Span } from '@base-framework/atoms';
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

const LoginForm = () => (
	Div({ class: 'flex flex-auto flex-col justify-center items-center' }, [
		Div({ class: 'rounded-xl border bg-card text-card-foreground shadow mx-auto max-w-sm' }, [
			LoginHeader({ title: 'Login', description: 'Please enter your credentials to login.' }),
			Form({ class: 'flex flex-col p-6 pt-0' }, [
				Div({ class: 'grid gap-4' }, [
					Div({ class: 'grid gap-4' }, [
						Input( { type: 'text', placeholder: 'Username' } ),
					]),
					Div({ class: 'grid gap-4' }, [
						Input( { type: 'password', placeholder: 'Password' } ),
					]),
					Div({ class: 'grid gap-4' }, [
						Button({ type: 'submit' }, 'Login')
					]),

					Div({ class: 'grid gap-4' }, [
						Button({ variant: 'outline' }, 'Login with Google')
					]),

					Div({ class: '' }, [
						Span({ class: 'text-sm text-muted-foreground mt-8 mb-0' }, 'Don\'t have an account? '),
						Span({ class: 'text-sm font-medium text-primary underline' }, 'Sign up'),
					]),
				]),
			])
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
			LoginForm()
		]
	)
);