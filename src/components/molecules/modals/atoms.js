import { Div, H2, Span } from "@base-framework/atoms";
import { Atom } from "@base-framework/base";

/**
 * This will create a modal detail body.
 *
 * @param {object} props - The properties of the component.
 * @param {array} children - The children of the component.
 * @returns {object}
 */
export const DetailBody = Atom((props, children) => (
	Div({ ...props, class: `space-y-6 p-4 md:p-6 divide-y ${props.class || ''}` }, children)
));

/**
 * This will create a modal detail section.
 *
 * @param {object} props - The properties of the component.
 * @param {array} children - The children of the component.
 * @returns {object}
 */
export const DetailSection = Atom((props, children = []) => (
	Div({ class: 'space-y-3 py-4' }, [
		props.title && H2({ class: 'font-semibold' }, props.title),
		...children
	])
));

/**
 * Renders a two-column row with a left label and right value.
 *
 * @param {string} label - The left-hand text.
 * @param {string} value - The right-hand text.
 * @returns {object}
 */
export const SplitRow = (label, value) =>
	Div({ class: 'flex justify-between' }, [
		Span({ class: 'text-muted-foreground' }, label),
		Span(value)
	]);