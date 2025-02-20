import { Div } from '@base-framework/atoms';
import { Component, Data, Jot } from '@base-framework/base';
import { ChangePasswordSection } from './sections/change-password-section.js';

/**
 * This is an enum for the different steps in the change password process.
 *
 * @type {object} STEPS
 */
export const STEPS =
{
	CHANGE_PASSWORD: 'change-password',
	CONFIRM: 'confirm'
};

/**
 * This will create the data for the change password container.
 *
 * @type {typeof Component}
 */
export const ChangePasswordContainer = Jot(
{
	/**
	 * This will setup the data.
	 *
	 * @returns {object}
	 */
	setData()
	{
		return new Data({
			password: '',
			confirmPassword: ''
		});
	},

	/**
	 * This will setup the states.
	 *
	 * @returns {object}
	 */
	setupStates()
	{
		return {
			step: STEPS.CHANGE_PASSWORD
		};
	},

	/**
	 * This will show the step.
	 *
	 * @param {string} step
	 * @returns {void}
	 */
	showStep(step)
	{
		// @ts-ignore
		this.state.step = step;
	},

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
});

export default ChangePasswordContainer;