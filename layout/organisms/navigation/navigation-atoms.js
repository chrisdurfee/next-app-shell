import { H2, Ul } from "../../atoms/atoms.js";
import { Atom } from "../../libs/base/base.js";

/**
 * This will return a navigation group.
 *
 * @param {object} props
 * @return {object}
 */
export const NavigationGroup = Atom((props, children) =>
{
	return Ul({ class: 'navigation-group', map: props.map }, [
		H2(children)
	]);
});

/**
 * This will return a navigation.
 *
 * @param {object} props
 * @return {object}
 */
export const Nav = Atom((props, children) =>
{
	return {
		tag: 'nav',
		...props,
		children
	};
});