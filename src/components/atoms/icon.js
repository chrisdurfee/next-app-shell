import { I } from "@base-framework/atoms";
import { Atom } from "@base-framework/base";

/**
 * Size classes for icons.
 */
const sizeClasses = {
	xs: "w-4 h-4",
	sm: "w-6 h-6",
	md: "w-8 h-8",
	lg: "w-10 h-10",
	xl: "w-12 h-12",
	"2xl": "w-14 h-14",
	"3xl": "w-16 h-16",
};

/**
 * This will create an icon atom with size support.
 *
 * @param {object} props
 * @param {array} children
 * @returns {object}
 */
export const Icon = Atom((props, children) =>
{
	const sizeClass = sizeClasses[props.size || "sm"];

	return I({
		...props,
		class: `icon-size ${sizeClass} ${props.class || ""}`,
		html: children[0]?.textContent,
	});
});
