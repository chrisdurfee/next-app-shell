import { Section } from '@base-framework/atoms';
import { ErrorMessage } from '../atoms/error-message.js';

/**
 * @function ErrorSection
 * @description
 *  A page section that displays an error message via ErrorMessage atom.
 *
 * @param {object} props
 * @param {Function} props.showStep - The callback to navigate steps.
 * @returns {object} A Section component containing the error message UI.
 */
export const ErrorSection = ({ showStep }) =>
(
	Section({ class: 'flex flex-auto flex-col justify-center items-center' }, [
		ErrorMessage({ showStep })
	])
);