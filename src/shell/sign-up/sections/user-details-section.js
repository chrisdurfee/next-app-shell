import { Div, Section } from '@base-framework/atoms';
import { UserDetailsForm } from '../atoms/user-details-form.js';

/**
 * @function UserDetailsSection
 * @description
 *  A page section that wraps the UserDetailsForm to collect user data.
 *
 * @param {object} props
 * @param {Function} props.showStep - The callback to navigate steps.
 * @returns {object} A Section component containing the user details form.
 */
export const UserDetailsSection = ({ showStep }) =>
(
	Section({ class: 'flex flex-auto flex-col justify-center items-center' }, [
		Div({
			class: 'w-full max-w-sm bg-card text-card-foreground shadow rounded-xl sm:border sm:shadow-lg'
		}, [
			Div({ class: 'p-6 text-lg font-semibold' }, 'Get User Details'),
			UserDetailsForm({ showStep })
		])
	])
);