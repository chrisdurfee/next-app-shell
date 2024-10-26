import { Button as BaseButton, I } from '@base-framework/atoms';
import { Atom } from '@base-framework/base';

/**
 * This will create a button.
 *
 * @param {object} defaultProps
 * @returns {object}
 */
const DefaultVariant = (defaultProps) =>
{
	return Atom((props, children) => (
		BaseButton({
			...defaultProps,
			...props,
			class: `bttn ${defaultProps.class} ${props.class || ''}`
		}, children)
	));
};

/**
 * This will create a button with an icon.
 *
 * @param {object} defaultProps
 * @returns {object}
 */
const WithIconVariant = (defaultProps) =>
{
	return Atom((props, children) => (
		BaseButton({
			...defaultProps,
			...props,
			class: `bttn ${defaultProps.class} ${props.class || ''}`
		}, [
			props.icon ? I({ html: props.icon }) : null,
			...children
		])
	));
};

/**
 * This will set upt the variants for the button.
 *
 * @constant
 * @type {object}
 */
const BUTTON_VARIANTS = {
	primary: DefaultVariant({ class: 'primary' }),
	secondary: DefaultVariant({ class: 'secondary' }),
	destructive: DefaultVariant({ class: 'destructive' }),
	warning: DefaultVariant({ class: 'warning' }),
	outline: DefaultVariant({ class: 'outline' }),
	ghost: DefaultVariant({ class: 'ghost' }),
	link: DefaultVariant({ class: 'link' }),
	icon: DefaultVariant({ class: 'icon' }),
	withIcon: WithIconVariant({ class: 'with-icon' }),
};

/**
 * This will create a button by variant or default.
 *
 * @param {object} props
 * @param {array} children
 * @returns {object}
 */
export const Button = Atom((props, children) =>
{
	const VariantButton = BUTTON_VARIANTS[props.variant] || BUTTON_VARIANTS.primary;
	return VariantButton(props, children);
});