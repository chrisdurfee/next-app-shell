"use strict";

var Nav = Tag.extend(function(props)
{
	return {
		tag: 'nav',
		className: props.className || null,
		ul: Ul(
		{
			children: props.list || null
		})
	};
});

var MessageLabel = Tag.extend(function(props)
{
	return {
		className: 'message-label',
		children:
		[
			Span({
				text: props.name,
				className: 'name'
			}),
			Span({
				text: props.time,
				className: 'time'
			})
		]
	};
});

/* labels */
var Label = Tag.extend(function(props)
{
	return {
		tag: 'label',
		for: props.id || null,
		children:
		[
			Span({
				className: 'label-text',
				text: props.label
			}),
			props.children
		]
	};
});

var FloatingLabel = Tag.extend(function(props)
{
	return {
		tag: 'label',
		className: 'floating',
		for: props.id || null,
		children:
		[
			props.children,
			Span({
				className: 'label-text',
				text: props.label
			})
		]
	};
});

/* controls */
var Checkbox = Tag.extend(function(props)
{
	return {
		tag: 'label',
		className: 'check-label',
		for: props.id || null,
		children:
		[
			Input({
				type: 'checkbox',
				name: props.name,
				value: props.value
			}),
			Span({
				className: 'check-label-text',
				text: props.label
			})
		]
	};
});

var Radio = Tag.extend(function(props)
{
	return {
		tag: 'label',
		className: 'radio-label',
		for: props.id || null,
		children:
		[
			Input({
				type: 'radio',
				name: props.name,
				value: props.value
			}),
			Span({
				className: 'radio-label-text',
				text: props.label
			})
		]
	};
});

var Switch = Checkbox.extend(function(props)
{
	return {
		className: 'switch-label',
		children:
		[
			Input({
				type: 'checkbox',
				name: props.name,
				value: props.value
			}),
			Span({
				className: 'switch-label-text',
				text: props.label
			})
		]
	};
});

var GridContainer = Tag.extend(function(props)
{
	return {
		className: 'grid-container',
		children: [
			GridPanel(),
			GridPanel(),
			GridPanel(),
			GridPanel(),
			GridPanel(),
			GridPanel(),
			GridPanel(),
			GridPanel(),
			GridPanel(),
			GridPanel(),
			GridPanel(),
			GridPanel(),
			GridPanel(),
			GridPanel(),
			GridPanel(),
			GridPanel(),
			GridPanel(),
			GridPanel()
		]
	};
});