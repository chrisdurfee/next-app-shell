"use strict";

const Nav = Tag.extend((props) =>
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

const MessageLabel = Tag.extend((props) =>
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
const Label = Tag.extend((props) =>
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

const FloatingLabel = Tag.extend((props) =>
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
const Checkbox = Tag.extend((props) =>
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

const Radio = Tag.extend((props) =>
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

const Switch = Checkbox.extend((props) =>
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

const GridContainer = Tag.extend((props) =>
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