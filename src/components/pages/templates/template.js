import { Atom } from "@base-framework/base";

/**
 * This will create a template.
 *
 * @param {object} props
 * @param {array} children
 * @returns {object}
 */
export const Template = Atom((props, children) =>
{
	return {
		tag: 'section',
		...props,
		children
	};
});