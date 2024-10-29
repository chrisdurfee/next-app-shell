import { Div, Form } from '@base-framework/atoms';
import { Button } from '@components/atoms/buttons/buttons.js';
import { Input } from '@components/atoms/form.js';
import { FullPage } from '@components/pages/full-page.js';

const LoginForm = () => (
	Div({ class: 'flex flex-auto flex-col' }, [
		Form({ class: 'flex flex-col' }, [

		])
	])
)

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
			Input( { type: 'text', placeholder: 'Username' }),
			Input( { type: 'password', placeholder: 'Password' }),
			Button({ type: 'submit' }, 'Login')
		]
	)
);