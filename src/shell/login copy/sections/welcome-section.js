import { Div, H1, Header, OnState, P, Section } from '@base-framework/atoms';
import { Atom } from '@base-framework/base';

/**
 * This will create a header for the documentation.
 *
 * @param {object} props
 * @returns {object}
 */
const SignUpHeader = Atom(({ title, description}) => (
	Header({ class: 'flex flex-col space-y-1.5 p-6' }, [
		H1({ class: 'scroll-m-20 text-3xl font-bold tracking-tight' }, title),
		description && P({ class: 'text-base text-muted-foreground py-2 max-w-[700px]' }, description),
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
	Div({
		class: 'rounded-xl sm:border sm:shadow-lg bg-card text-card-foreground shadow w-full mx-auto max-w-sm',
		addState()
		{
			return {
				loading: true
			};
		}
	}, children)
));

/**
 * This will create a loading message.
 *
 * @returns {object}
 */
const LoadingMessage = () => (
	null
);

/**
 * This will create the sign up section.
 *
 * @returns {object}
 */
export const WelcomeSection = () => (
	Section({ class: 'flex flex-auto flex-col justify-center items-center' }, [
		FormWrapper({ class: 'rounded-xl sm:border sm:shadow-lg bg-card text-card-foreground shadow w-full mx-auto max-w-sm' }, [
			OnState('loading', (state) => (!state)
				? LoadingMessage()
				: [
					SignUpHeader({ title: 'Sign Up', description: 'Please enter your credentials to sign up.' }),
				]
			)
		])
	])
);