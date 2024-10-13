import { Atom } from "@base-framework/base";
import { H2, Ul } from "../../atoms/atoms.js";

/**
 * This will return a navigation group.
 *
 * @param {object} props
 * @param {object} children
 * @returns {object}
 */
export const NavigationGroup = Atom(({ map }, children) =>
{
	return Ul({ class: 'navigation-group', map }, [
		H2(children)
	]);
});