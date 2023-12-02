"use strict";

var Tag = Atom.extend(function(props)
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

var Video = Tag.extend(function(props)
{
	return {
		tag: 'video',
		innerHTML: '<source src="' + props.src + '"></source>',
		autoplay: true,
		muted: true,
		loop: true
	};
});

var Img = Tag.extend(function(props)
{
	var draggable = (props.draggable === true)? true : false;

	return {
		tag: 'img',
		draggable: draggable,
		src: props.src || null,
		alt: props.alt || '',
		click: props.click,
		onmousedown: props.onmousedown || null
	};
});

var Button = Tag.extend(function(props)
{
	return {
		tag: 'button',
		className: props.className || 'bttn',
		click: props.click || null
	};
});

var MainSection = Tag.extend(function(props)
{
	return {
		tag: 'section',
		className: 'basic-page ' + (props.className || ''),
		route: props.route || null
	};
});

var Header = Tag.extend(
{
	tag: 'header'
});

var H1 = Tag.extend(
{
	tag: 'h1'
});

var H2 = Tag.extend(
{
	tag: 'h2'
});

var Span = Tag.extend(function(props)
{
	return {
		tag: 'span'
	};
});

var Br = function()
{
	return {
		tag: 'br'
	};
};

var Strong = Tag.extend(
{
	tag: 'strong'
});

var Ul = Tag.extend(
{
	tag: 'ul'
});

/* icons */
/* icon font: https://material.io/resources/icons/?style=baseline */
var Icon = Tag.extend(function(icon)
{
	var icon = icon;

	return {
		tag: 'i',
		className: icon,
		text: icon
	};
});

/* Extended buttons */

var GrayButton = Button.extend(function(props)
{
	var className = props.className;
	className = (className) ? 'gray-bttn ' + className : 'gray-bttn';
	return {
		className: className
	};
});

var OutlineButton = Button.extend(function(props)
{
	var className = props.className;
	className = (className) ? 'outlined-bttn ' + className : 'outlined-bttn';
	return {
		className: className
	};
});

var TextButton = Button.extend(function(props)
{
	var className = props.className;
	className = (className) ? 'text-bttn ' + className : 'text-bttn';
	return {
		className: className
	};
});

var IconButton = Button.extend(function(props)
{
	var icon = props.icon;
	return {
		className: icon + '-icon icon-bttn outlined-bttn',
		children: Icon(icon)
	};
});

var ToggleButton = IconButton({
	icon: 'more_vert'
});

var BackButton = IconButton({
	icon: 'arrow_back'
});

var CloseButton = IconButton({
	icon: 'close'
});

var Message = Tag.extend(function(props)
{
	return {
		className: 'message ' + props.className
	};
});

var P = Tag.extend(
{
	tag: 'p'
});

var A = Tag.extend(function(props)
{
	return {
		tag: 'a',
		href: props.href || null,
		watch: props.watch || null
	};
});

var Form = Tag.extend(function(props)
{
	return {
		tag: 'form'
	};
});

var Fieldset = Tag.extend(
{
	tag: 'fieldset'
});

var Legend = Tag.extend(
{
	tag: 'legend'
});

var FormEle = Tag.extend(function(props)
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

var Input = FormEle.extend(function(props)
{
	return {
		tag: 'input',
		type: props.type || 'text',
		min: props.min || null,
		max: props.max || null,
		onblur: props.onblur || null
	};
});

var DefaultSelect = FormEle.extend(function(props)
{
	return {
		tag: 'select',
		onblur: props.onblur || null,
		onCreated: function(ele)
		{
			if(props.options)
			{
				base.builder.setupSelectOptions(ele, props.options);
			}
		}
	};
});

var TelInput = Input.extend(function(props)
{
	return {
		type: 'tel',
		name: 'Phone',
		label: 'Phone',
		required: true,
		pattern: '[0-9]{3}-[0-9]{3}-[0-9]{4}',
		keyup: function(e)
		{
			var target = e.target || e.srcElement,
			pattern = /(\d{0,3})(\d{0,3})(\d{0,4})/,
			patternNumber = /\D/g,
			x = target.value.replace(patternNumber, '').match(pattern);

			target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
		}
	};
});

var Textarea = FormEle.extend(function(props)
{
	return {
		tag: 'textarea'
	};
});

/* submit button */
var Submit = Button.extend(function(props)
{
	return {
		type: 'submit'
	};
});

/* template tests */

var GridPanel = Tag.extend(function(props)
{
	var span = (props.span)? 'span-' + props.span : '';

	return {
		className: 'panel ' + span
	};
});