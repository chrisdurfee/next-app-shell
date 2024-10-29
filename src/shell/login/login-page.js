import { Div, H1, Header, P, Section } from '@base-framework/atoms';
import { Atom } from '@base-framework/base';
import { FullPage } from '@components/pages/full-page.js';
import { FullscreenPage } from '../../components/pages/fullscreen-page.js';
import { LoginForm } from './login-form.js';

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
	new FullscreenPage([
		LoginSection()
	])
);