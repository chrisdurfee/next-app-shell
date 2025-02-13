import { Div, P } from '@base-framework/atoms';
import { Atom } from '@base-framework/base';

/**
 * @function LeftPane
 * @description
 *  Renders the dark left panel with branding and a testimonial.
 *
 * @returns {object} A Div component for the left panel.
 */
export const LeftPane = Atom(() =>
(
	Div({ class: 'hidden md:flex flex-col justify-between bg-background p-8' }, [
		// Top Logo
		Div({ class: 'flex items-center space-x-2' }, [
			Div({ class: 'text-lg font-bold' }, '⌘ Acme Inc'),
		]),

		// Testimonial
		Div({}, [
			P({ class: 'text-sm italic' },
				'“This library has saved me countless hours of work and helped me deliver stunning designs to my clients faster than ever before.”'
			),
			P({ class: 'mt-2 text-sm font-semibold' }, 'Sofia Davis')
		])
	])
));