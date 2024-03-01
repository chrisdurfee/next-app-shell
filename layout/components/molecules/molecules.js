import { Atom } from "@base-framework/base";
import { Div, GridPanel, Input, Span, Ul } from "../atoms/atoms.js";

/**
 * This will create a nav list.
 *
 * @param {object} props
 * @param {array} children
 * @return {object}
 */
export const Nav = Atom((props, children) =>
{
	return {
		tag: 'nav',
		class: props.class || null,
		ul: Ul(children)
	};
});

/**
 * This will create a message label.
 *
 * @param {object} props
 * @param {array} children
 * @return {object}
 */
export const MessageLabel = Atom((props, children) =>
{
	return Div({ class: 'message-label' }, [
		Span({ class: 'name' }, props.name),
		Span({ class: 'time' }, props.time)
	]);
});

/**
 * This will create a label.
 *
 * @param {object} props
 * @param {array} children
 * @return {object}
 */
export const Label = Atom((props, children) =>
{
	return {
		tag: 'label',
		htmlFor: props.id,
		class: props.class,
		children:
		[
			Span({ class: 'label-text' }, props.label),
			...children
		]
	};
});

/**
 * This will create a floating label.
 *
 * @param {object} props
 * @param {array} children
 * @return {object}
 */
export const FloatingLabel = Atom((props, children) =>
{
	return Label({
			class: 'floating',
			htmlFor: props.id || null
		},
		[
			children,
			Span({ class: 'label-text' }, props.label),
		]
	);
});

/**
 * This will create a checkbox.
 *
 * @param {object} props
 * @param {array} children
 * @return {object}
 */
export const Checkbox = Atom((props, children) =>
{
	return Label(
		{
			class: 'check-label',
			htmlFor: props.id,
		},
		[
			Input({
				type: 'checkbox',
				name: props.name,
				value: props.value
			}),
			Span({ class: 'check-label-text' }, props.label)
		]
	);
});

/**
 * This will create a radio.
 *
 * @param {object} props
 * @param {array} children
 * @return {object}
 */
export const Radio = Atom((props, children) =>
{
	return Label(
		{
			class: 'radio-label',
			htmlFor: props.id,
		},
		[
			Input({
				type: 'radio',
				name: props.name,
				value: props.value
			}),
			Span({ class: 'radio-label-text' }, props.label)
		]
	);
});

/**
 * This will create a grid container.
 *
 * @param {object} props
 * @param {array} children
 * @return {object}
 */
export const GridContainer = Atom((props, children) =>
{
	const items = new Array(18).fill(1);
	return Div({ class: 'grid-container', map: [items, () => GridPanel()], ...props });
});