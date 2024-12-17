import { H1, Header } from "@base-framework/atoms";
import { Atom } from "@base-framework/base";

/**
 * This will create a top bar.
 *
 * @param {object} props
 * @param {array} children
 * @returns {object}
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
 * @returns {object}
 */
export const MainColumn = Atom((props, children) =>
{
	props.class = 'col flex flex-auto flex-col ' + (props.class || '');

	return {
		...props,
        children
	};
});