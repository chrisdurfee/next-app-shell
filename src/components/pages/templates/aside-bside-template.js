import { Atom } from "@base-framework/base";
import { Row } from "../../atoms/atoms.js";
import { MainColumn } from "./template-atoms.js";
import { Template } from "./template.js";

/**
 * This will create a aside b side template.
 *
 * @param {object} props
 * @param {array} children
 * @returns {object}
 */
export const AsideBsideTemplate = Atom((props, children) =>
{
	return Template({ class: 'body aside-container bside-container' }, [
		Row([
			MainColumn([
				props.left
			]),
			MainColumn([
				props.center
			]),
			MainColumn([
				props.right
			])
		])
	]);
});