import { A, Br, Div, Fieldset, Form, H1, H2, Header, Input, Label, Legend, Li, Nav, P, Span, Strong, Textarea, Ul } from '@base-framework/atoms';
import { Atom, Html } from '@base-framework/base';

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
 * @return {object}
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
 * @return {object}
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
		children
	};
});

/**
 * This will create a button.
 *
 * @param {object} props
 * @param {array} children
 * @return {object}
 */
export const Button = Atom((props, children) =>
{
	props.class = 'bttn ' + (props.class || '');
	return {
		tag: 'button',
		...props,
		children
	};
});

export const MainSection = Atom((props, children) =>
{
	props.class = 'basic-page ' + (props.class || '');

	return {
		tag: 'section',
		...props,
		children
	};
});

/* icons */
/* icon font: https://material.io/resources/icons/?style=baseline */
export const Icon = Atom((props, children) =>
{
	return {
		tag: 'i',
		...props,
		children
	};
});

/* Extended buttons */

export const GrayButton = Atom((props, children) =>
{
	let className = props.class;
	className = (className) ? 'gray-bttn ' + className : 'gray-bttn';
	props.class = className;

	return Button(props, children);
});

export const OutlineButton = Atom((props, children) =>
{
	let className = props.class;
	className = (className) ? 'outlined-bttn ' + className : 'outlined-bttn';
	props.class = className;

	return Button(props, children);
});

export const TextButton = Atom((props, children) =>
{
	let className = props.class;
	className = (className) ? 'text-bttn ' + className : 'text-bttn';
	props.class = className;

	return Button(props, children);
});

export const IconButton = Atom((props, children) =>
{
	let icon = props.icon;
	return Button({ class: icon + '-icon icon-bttn outlined-bttn' }, [Icon(icon)]);
});

export const ToggleButton = IconButton({
	icon: 'more_vert'
});

export const BackButton = IconButton({
	icon: 'arrow_back'
});

export let CloseButton = IconButton({
	icon: 'close'
});

export let Message = Atom((props, children) =>
{
	props.class = 'messeage ' + props.class;
	return Div(props, children);
});

export const DefaultSelect = Atom((props, children) =>
{
	return {
		tag: 'select',
		...props,
		onCreated(ele)
		{
			if (props.options)
			{
				Html.setupSelectOptions(ele, props.options);
			}
		},
		children
	};
});

export const TelInput = Atom((props, children) =>
{
	return Input({
		...props,
		type: 'tel',
		name: 'Phone',
		label: 'Phone',
		required: true,
		pattern: '[0-9]{3}-[0-9]{3}-[0-9]{4}',
		keyup(e)
		{
			let target = e.target || e.srcElement,
			pattern = /(\d{0,3})(\d{0,3})(\d{0,4})/,
			patternNumber = /\D/g,
			x = target.value.replace(patternNumber, '').match(pattern);

			target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
		}
	});
});

/**
 * This will create a label.
 *
 * @param {object} props
 * @param {array} children
 * @return {object}
 */
export const Row = Atom((props, children) =>
{
	props.class = 'row ' + (props.class || '');

	return {
		...props,
		children
	};
});

/* submit button */
export const Submit = Atom((props, children) =>
{
	props.type = 'submit';
	return Button(props, children);
});

/* template tests */

export const GridPanel = Atom((props, children) =>
{
	let span = (props.span)? 'span-' + props.span : '';
	props.class = 'panel ' + span;

	return Div(props, children);
});