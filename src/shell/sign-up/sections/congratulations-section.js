import { Section } from '@base-framework/atoms';
import { CongratsMessage } from '../atoms/congrats-message.js';

/**
 * @function CongratulationsSection
 * @description
 *  A page section that displays the final success message.
 *
 * @param {object} props
 * @param {Function} props.showStep - The callback to navigate steps.
 * @returns {object} A Section component containing the success message UI.
 */
export const CongratulationsSection = ({ showStep }) =>
(
	Section({ class: 'flex flex-auto flex-col justify-center items-center' }, [
		CongratsMessage({ showStep })
	])
);