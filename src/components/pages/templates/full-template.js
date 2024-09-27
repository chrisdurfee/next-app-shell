import { Atom } from "@base-framework/base";
import { Template } from "./template.js";

/**
 * This will create a full template.
 *
 * @param {object} props
 * @param {array} children
 * @return {object}
 */
export const FullTemplate = Atom((props, children) =>
{
	return Template({
		class: 'body full-container ' + props.class,
		...props,
	}, children);
});