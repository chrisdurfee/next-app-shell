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
	return Template({ class: 'body aside-container flex flex-auto flex-col max-w-[100vw] h-full' }, [
		Row({ class: 'flex flex-auto flex-col lg:flex-row' }, [
			MainColumn({ class: 'drawer control flex flex-auto w-full md:max-w-[320px]' }, [
				props.left
			]),
			MainColumn({ class: 'flex flex-grow flex-col' }, [
				props.right
			])
		])
	]);
});