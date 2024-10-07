import { Atom } from "@base-framework/base";
import { Row } from "../../atoms/atoms.js";
import { MainColumn } from "./template-atoms.js";
import { Template } from "./template.js";

/**
 * This will create a b side template.
 *
 * @param {object} props
 * @param {array} children
 * @returns {object}
 */
export const BsideTemplate = Atom((props, children) =>
{
	return Template({ class: 'body bside-container' }, [
		Row([
			MainColumn([
				props.left
			]),
			MainColumn([
				props.right
			])
		])
	]);
});