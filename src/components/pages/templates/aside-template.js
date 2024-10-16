import { Atom } from "@base-framework/base";
import { Row } from "../../atoms/atoms.js";
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
	return Template({ class: 'body aside-container flex flex-auto flex-col' }, [
		Row({ class: 'flex flex-auto flex-wrap' }, [
			MainColumn({ class: 'drawer control flex flex-auto w-full md:max-w-[320px]' }, [
				props.left
			]),
			MainColumn([
				props.right
			])
		])
	]);
});