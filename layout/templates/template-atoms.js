import { H1, Header } from "../atoms/atoms.js";
import { Atom } from "../libs/base/base.js";

/**
 * This will create a top bar.
 *
 * @param {object} props
 * @param {array} children
 * @reutrn {object}
 */
export const TopBar = Atom((props, children) =>
{
	return Header([
        H1({ watch: props.watch }, props.text)
    ], children);
});

/**
 * This will create a main column.
 *
 * @param {object} props
 * @param {array} children
 * @return {object}
 */
export const MainColumn = Atom((props, children) =>
{
	return {
		class: 'col ' + (props.className || ''),
		...props,
        children
	};
});