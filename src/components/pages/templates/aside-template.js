import { Atom } from "@base-framework/base";
import { Row } from "./row.js";
import { MainColumn } from "./template-atoms.js";
import { Template } from "./template.js";

/**
 * This will create a aside template.
 *
 * @param {object} props
 * @param {array} children
 * @returns {object}
 */
export const AsideTemplate = Atom((props, children) =>
{
	return Template({ class: 'body aside-container grid col-span-1 h-full' }, [
		Row({ class: 'grid grid-cols-1 lg:grid-cols-5' }, [
			MainColumn({ class: 'drawer control flex flex-auto w-full md:max-w-[320px]' }, [
				props.left
			]),
			MainColumn({ class: 'col-span-4' }, [
				props.right
			])
		])
	]);
});