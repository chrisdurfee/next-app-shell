import { Atom } from "@base-framework/base";
import { Row } from "../../atoms/atoms.js";
import { MainColumn } from "./template-atoms.js";
import { Template } from "./template.js";

/**
 * This will create a aside template.
 *
 * @param {object} props
 * @param {array} children
 * @return {object}
 */
export const AsideTemplate = Atom((props, children) =>
{
	return Template({ class: 'body aside-container' }, [
		Row([
			MainColumn({ class: 'drawer control' }, [
				props.left
			]),
			MainColumn([
				props.right
			])
		])
	]);
});