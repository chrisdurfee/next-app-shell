import { Div, Form } from '@base-framework/atoms';
import { Atom } from '@base-framework/base';
import { Button, Input } from '@base-framework/ui/atoms';

/**
 * @function CredentialsContainer
 * @description
 *  Input fields for username and password.
 *
 * @returns {object} A Div containing the input fields.
 */
const CredentialsContainer = Atom(() =>
(
    Div({ class: 'grid gap-4' }, [
        Div({ class: 'grid gap-4' }, [
            Input({
                type: 'email',
                placeholder: 'Email',
                required: true,
                'aria-required': true
            })
        ])
    ])
));

/**
 * @function SignUpButton
 * @description
 *  Primary button to submit the form and sign up.
 *
 * @returns {object} A Div containing the submit button.
 */
const SignUpButton = Atom(() =>
(
    Div({ class: 'grid gap-4' }, [
        Button({ type: 'submit' }, 'Sign Up')
    ])
));

/**
 * @function SignUpWithGoogleButton
 * @description
 *  A secondary button to sign up with Google OAuth.
 *
 * @returns {object} A Div containing the "Sign up with Google" button.
 */
const SignUpWithGoogleButton = Atom(() =>
(
    Div({ class: 'grid gap-4' }, [
        Button({
            variant: 'outline',
            'aria-label': 'Sign up with Google'
        }, 'Sign Up with Google')
    ])
));

/**
 * This will create a form wrapper.
 *
 * @param {object} props
 * @param {array} children
 * @returns {object}
 */
const FormWrapper = Atom((props, children) => (
	Div({ class: 'rounded-xl sm:border sm:shadow-lg bg-card text-card-foreground shadow w-full mx-auto max-w-sm' }, children)
));

/**
 * @function SignUpForm
 * @description
 *  The main form for collecting user credentials. Mimics the login form structure.
 *
 * @param {object} props
 * @param {Function} props.onSubmit - Callback to handle submission logic.
 * @returns {object} A Form containing the fields and buttons.
 */
export const SignUpForm = Atom(({ onSubmit }) =>
(
	FormWrapper([
		Form({
			class: 'flex flex-col p-6',
			submit: () => onSubmit()  // Or whatever sign-up handler you'd like
		}, [
			Div({ class: 'grid gap-4' }, [
				CredentialsContainer(),
				SignUpButton(),
				SignUpWithGoogleButton(),
			])
		])
	])
));