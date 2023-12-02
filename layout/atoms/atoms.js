"use strict";

const Tag = Atom.extend((props) =>
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

const Video = Tag.extend((props) =>
{
	return {
		tag: 'video',
		innerHTML: '<source src="' + props.src + '"></source>',
		autoplay: true,
		muted: true,
		loop: true
	};
});

const Img = Tag.extend((props) =>
{
	let draggable = (props.draggable === true)? true : false;

	return {
		tag: 'img',
		draggable: draggable,
		src: props.src || null,
		alt: props.alt || '',
		click: props.click,
		onmousedown: props.onmousedown || null
	};
});

const Button = Tag.extend((props) =>
{
	return {
		tag: 'button',
		className: props.className || 'bttn',
		click: props.click || null
	};
});

const MainSection = Tag.extend((props) =>
{
	return {
		tag: 'section',
		className: 'basic-page ' + (props.className || ''),
		route: props.route || null
	};
});

const Header = Tag.extend(
{
	tag: 'header'
});

const H1 = Tag.extend(
{
	tag: 'h1'
});

const H2 = Tag.extend(
{
	tag: 'h2'
});

const Span = Tag.extend((props) =>
{
	return {
		tag: 'span'
	};
});

const Br = () =>
{
	return {
		tag: 'br'
	};
};

const Strong = Tag.extend(
{
	tag: 'strong'
});

const Ul = Tag.extend(
{
	tag: 'ul'
});

/* icons */
/* icon font: https://material.io/resources/icons/?style=baseline */
const Icon = Tag.extend((icon) =>
{
	return {
		tag: 'i',
		className: icon,
		text: icon
	};
});

/* Extended buttons */

const GrayButton = Button.extend((props) =>
{
	let className = props.className;
	className = (className) ? 'gray-bttn ' + className : 'gray-bttn';
	return {
		className: className
	};
});

const OutlineButton = Button.extend((props) =>
{
	let className = props.className;
	className = (className) ? 'outlined-bttn ' + className : 'outlined-bttn';
	return {
		className: className
	};
});

const TextButton = Button.extend((props) =>
{
	let className = props.className;
	className = (className) ? 'text-bttn ' + className : 'text-bttn';
	return {
		className: className
	};
});

const IconButton = Button.extend((props) =>
{
	let icon = props.icon;
	return {
		className: icon + '-icon icon-bttn outlined-bttn',
		children: Icon(icon)
	};
});

const ToggleButton = IconButton({
	icon: 'more_vert'
});

const BackButton = IconButton({
	icon: 'arrow_back'
});

let CloseButton = IconButton({
	icon: 'close'
});

let Message = Tag.extend((props) =>
{
	return {
		className: 'message ' + props.className
	};
});

const P = Tag.extend(
{
	tag: 'p'
});

const A = Tag.extend((props) =>
{
	return {
		tag: 'a',
		href: props.href || null,
		watch: props.watch || null
	};
});

const Form = Tag.extend((props) =>
{
	return {
		tag: 'form'
	};
});

const Fieldset = Tag.extend(
{
	tag: 'fieldset'
});

const Legend = Tag.extend(
{
	tag: 'legend'
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

const Input = FormEle.extend((props) =>
{
	return {
		tag: 'input',
		type: props.type || 'text',
		min: props.min || null,
		max: props.max || null,
		onblur: props.onblur || null
	};
});

const DefaultSelect = FormEle.extend((props) =>
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

const TelInput = Input.extend((props) =>
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

const Textarea = FormEle.extend((props) =>
{
	return {
		tag: 'textarea'
	};
});

/* submit button */
const Submit = Button.extend((props) =>
{
	return {
		type: 'submit'
	};
});

/* template tests */

const GridPanel = Tag.extend((props) =>
{
	let span = (props.span)? 'span-' + props.span : '';

	return {
		className: 'panel ' + span
	};
});