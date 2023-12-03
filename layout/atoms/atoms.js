import { Atom } from '../libs/base/base.js';

export const Tag = Atom.extend((props) =>
{
	return {
		className: props.className || null,
		onState: props.onState || null,
		onSet: props.onSet || null,
		bind: props.bind || null,
		watch: props.watch || null,
		innerHTML: props.innerHTML || null,
		text: props.text || null,
		children: props.children
	};
});

/**
 * This will create a div.
 *
 * @param {object} props
 * @param {array} children
 * @return {object}
 */
export const Div = Atom((props, children) =>
{
	return {
		...props,
		children
	};
});

export const Video = Tag.extend((props) =>
{
	return {
		tag: 'video',
		innerHTML: '<source src="' + props.src + '"></source>',
		autoplay: true,
		muted: true,
		loop: true
	};
});

export const Img = Tag.extend((props) =>
{
	let draggable = (props.draggable === true);

	return {
		tag: 'img',
		draggable: draggable,
		src: props.src || null,
		alt: props.alt || '',
		click: props.click,
		onmousedown: props.onmousedown || null
	};
});

export const Button = Tag.extend((props) =>
{
	return {
		tag: 'button',
		className: props.className || 'bttn',
		click: props.click || null
	};
});

export const MainSection = Tag.extend((props) =>
{
	return {
		tag: 'section',
		className: 'basic-page ' + (props.className || ''),
		route: props.route || null
	};
});

export const Header = Tag.extend((props) =>
{
	return {
		tag: 'header'
	};
});

export const H1 = Tag.extend((props) => {
	tag: 'h1'
});

export const H2 = Tag.extend((props) => {
	tag: 'h2'
});

export const Span = Tag.extend((props) => {
	tag: 'span'
});;

export const Br = Tag.extend((props) => {
	tag: 'br'
});

export const Strong = Tag.extend((props) => {
	tag: 'strong'
});

export const Ul = Tag.extend((props) => {
	tag: 'ul'
});;

/* icons */
/* icon font: https://material.io/resources/icons/?style=baseline */
export const Icon = Tag.extend((icon) =>
{
	return {
		tag: 'i',
		className: icon,
		text: icon
	};
});

/* Extended buttons */

export const GrayButton = Button.extend((props) =>
{
	let className = props.className;
	className = (className) ? 'gray-bttn ' + className : 'gray-bttn';
	return {
		className: className
	};
});

export const OutlineButton = Button.extend((props) =>
{
	let className = props.className;
	className = (className) ? 'outlined-bttn ' + className : 'outlined-bttn';
	return {
		className: className
	};
});

export const TextButton = Button.extend((props) =>
{
	let className = props.className;
	className = (className) ? 'text-bttn ' + className : 'text-bttn';
	return {
		className: className
	};
});

export const IconButton = Button.extend((props) =>
{
	let icon = props.icon;
	return {
		className: icon + '-icon icon-bttn outlined-bttn',
		children: Icon(icon)
	};
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

export let Message = Tag.extend((props) =>
{
	return {
		className: 'message ' + props.className
	};
});

export const P = Tag.extend((props) =>
{
	return {
		tag: 'p'
	};
});

export const A = Tag.extend((props) =>
{
	return {
		tag: 'a',
		href: props.href || null,
		watch: props.watch || null
	};
});

export const Form = Tag.extend((props) =>
{
	return {
		tag: 'form'
	};
});

export const Fieldset = Tag.extend((props) =>
{
	return {
		tag: 'fieldset'
	};
});

export const Legend = Tag.extend((props) =>
{
	return {
		tag: 'legend'
	};
});

const FormEle = Tag.extend((props) =>
{
	return {
		autofocus: props.autofocus || null,
		disabled: props.disabled || null,
		form: props.form || null,
		maxlength: props.maxlength || null,
		multiple: props.multiple || null,
		name: props.name || null,
		placeholder: props.placeholder || null,
		required: props.required || null,
		value: props.value || null,
		id: props.id || null
	};
});

export const Input = FormEle.extend((props) =>
{
	return {
		tag: 'input',
		type: props.type || 'text',
		min: props.min || null,
		max: props.max || null,
		onblur: props.onblur || null
	};
});

export const DefaultSelect = FormEle.extend((props) =>
{
	return {
		tag: 'select',
		onblur: props.onblur || null,
		onCreated(ele)
		{
			if(props.options)
			{
				base.builder.setupSelectOptions(ele, props.options);
			}
		}
	};
});

export const TelInput = Input.extend((props) =>
{
	return {
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
	};
});

export const Textarea = FormEle.extend((props) =>
{
	return {
		tag: 'textarea'
	};
});

/* submit button */
export const Submit = Button.extend((props) =>
{
	return {
		type: 'submit'
	};
});

/* template tests */

export const GridPanel = Tag.extend((props) =>
{
	let span = (props.span)? 'span-' + props.span : '';

	return {
		className: 'panel ' + span
	};
});