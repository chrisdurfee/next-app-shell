import { H4, Ul } from "@base-framework/atoms";
import { Atom } from "@base-framework/base";

/**
 * This will return a navigation group.
 *
 * @param {object} props
 * @param {object} children
 * @returns {object}
 */
export const NavigationGroup = Atom(({ map }, children) =>
{
	return Ul({ class: 'navigation-group flex flex-col gap-2 list-none m-0 py-2 px-0', map }, [
		H4({ class: 'text-muted-foreground text-sm py-0 px-4 whitespace-nowrap' }, children)
	]);
});