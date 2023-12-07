import { Row } from "../atoms/atoms.js";
import { Atom } from "../libs/base/base.js";
import { MainColumn } from "./template-atoms.js";
import { Template } from "./template.js";

/**
 * This will create a b side template.
 *
 * @param {object} props
 * @param {array} children
 * @return {object}
 */
export const BsideTemplate = Atom((props, children) =>
{
	return Template({ class: 'body bside-container' }, [
		Row([
			MainColumn(props.left?.children),
			MainColumn(props.right?.children)
		])
	]);
});