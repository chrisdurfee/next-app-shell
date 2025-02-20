import { Div, OnState } from '@base-framework/atoms';
import { Component, Data, Jot } from '@base-framework/base';
import { ChangePasswordSection } from './sections/change-password-section.js';
import { ForgotPasswordSection } from './sections/forgot-password-section.js';
import { LoginSection } from './sections/login-section.js';
import { MultiFactorMethodSection } from './sections/multi-factor-method-section.js';
import { OneTimeCodeSection } from './sections/one-time-code-section.js';
import { STEPS } from './steps.js';

/**
 * This will create the data for the change password container.
 *
 * @type {typeof Component}
 */
const ChangePasswordContainer = Jot(
{
	data: new Data({
		password: '',
		confirmPassword: ''
	}),

	/**
	 * This will render the change password container.
	 *
	 * @returns {object}
	 */
	render()
	{
		return Div({ class: 'flex flex-auto flex-col' }, [
			ChangePasswordSection()
		]);
	}
})

/**
 * This will create the step container.
 *
 * @returns {object}
 */
export const PageStepContainer = () => (
	Div({
		class: 'flex flex-auto flex-col',
		switch: [
			{
				uri: '/change-password',
				component: new ChangePasswordContainer()
			},
			{
				component: Div({ class: 'flex flex-auto flex-col' }, [
					OnState('step', (step) =>
					{
						switch (step)
						{
							case STEPS.FORGOT_PASSWORD:
								return ForgotPasswordSection();
							case STEPS.ONE_TIME_CODE:
								return OneTimeCodeSection();
							case STEPS.MULTI_FACTOR_METHOD:
								return MultiFactorMethodSection();
							default:
								return LoginSection();
						}
					})
				])
			}
		]
	})
);

export default PageStepContainer;