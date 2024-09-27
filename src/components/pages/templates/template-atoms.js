import { Atom } from "@base-framework/base";
import { H1, Header } from "../../atoms/atoms.js";

/**
 * This will create a top bar.
 *
 * @param {object} props
 * @param {array} children
 * @return {object}
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
	props.class = 'col ' + (props.class || '');

	return {
		...props,
        children
	};
});