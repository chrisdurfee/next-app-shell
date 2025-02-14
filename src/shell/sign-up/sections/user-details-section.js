import { Div, Section } from '@base-framework/atoms';
import { Atom } from '@base-framework/base';
import { Skeleton } from '@base-framework/ui';
import { UserDetailsForm } from '../atoms/user-details-form.js';

/**
 * This will create a column layout for the user details form.
 *
 * @param {object} props - The properties of the column layout.
 * @param {array} children - The children elements of the column layout.
 * @returns {object} A column layout component.
 */
const Col = Atom((props, children) => (
	Div({ ...props, class: `flex flex-auto flex-col ${props.class? props.class : ''}` }, children)
));

/**
 * @function UserDetailsSection
 * @description
 *  A page section that wraps the UserDetailsForm to collect user data.
 * @returns {object} A Section component containing the user details form.
 */
export const UserDetailsSection = () =>
(
	Section({ class: 'flex flex-auto flex-col justify-center items-center' }, [
		Section({ class: 'flex flex-auto flex-col md:flex-row md:max-h-[700px] w-full max-w-5xl bg-card text-card-foreground shadow rounded-xl sm:border sm:shadow-lg p-4' }, [
			Col([
				Skeleton({ width: "w-full", height: "h-full", class: "rounded-lg" })
			]),
			Col({ class: 'md:max-w-[400px] p-4' }, [
				Div({ class: 'p-6 text-lg font-semibold' }, 'User Details'),
				UserDetailsForm()
			])
		])
	])
);