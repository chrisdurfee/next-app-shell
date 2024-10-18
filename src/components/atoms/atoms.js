import { A, Br, Div, Fieldset, Form, H1, H2, Header, Input, Label, Legend, Li, Nav, P, Span, Strong, Textarea, Ul } from '@base-framework/atoms';
import { Atom } from '@base-framework/base';
export * from "./buttons/buttons.js";
export * from "./form.js";

/**
 * This will export the base atoms.
 */
export {
	A, Br, Div, Fieldset, Form, H1,
	H2, Header, Input,
	Label, Legend, Li,
	Nav, P, Span, Strong, Textarea, Ul
};

/**
 * This will create a video object.
 *
 * @param {object} props
 * @param {array} children
 * @returns {object}
 */
export const Video = Atom((props, children) =>
{
	return {
		tag: 'video',
		...props,
		innerHTML: '<source src="' + props.src + '"></source>',
		autoplay: true,
		muted: true,
		loop: true,
		children
	};
});

/**
 * This will create an image object.
 *
 * @param {object} props
 * @param {array} children
 * @returns {object}
 */
export const Img = Atom((props, children) =>
{
	const draggable = (props.draggable === true);

	return {
		tag: 'img',
		draggable: draggable,
		src: props.src,
		alt: props.alt,
		click: props.click,
		onmousedown: props.onmousedown,
		...props,
		children
	};
});

export const MainSection = Atom((props, children) =>
{
	props.class = 'basic-page pt-[80px] sm:pt-0 flex flex-auto flex-col ' + (props.class || '');

	return {
		tag: 'section',
		...props,
		children
	};
});

export const Message = Atom((props, children) =>
{
	props.class = 'messeage ' + props.class;
	return Div(props, children);
});

/**
 * This will create a label.
 *
 * @param {object} props
 * @param {array} children
 * @returns {object}
 */
export const Row = Atom((props, children) =>
{
	props.class = 'row ' + (props.class || '');

	return {
		...props,
		children
	};
});

/* template tests */

export const GridPanel = Atom((props, children) =>
{
	let span = (props.span)? 'span-' + props.span : '';
	props.class = 'panel rounded-xl border bg-card text-card-foreground shadow ' + span;

	return Div(props, children);
});