"use strict";

const TopBar = (props) =>
{
	return Header({
		children: [
			H1({
				text: props.text,
				watch: props.watch
			})
		]
	});
};

const MainColumn = Tag.extend((props) =>
{
	return {
		className: 'col ' + (props.className || ''),
		children: props.children
	};
});

const AsideTemplate = Template.extend((props) =>
{
	return {
		className: 'body aside-container',
		row:
		{
			className: 'row',
			children:
			[
				MainColumn({
					className: 'drawer control',
					children: props.left || null
				}),
				MainColumn({
					children: props.right || null
				})
			]
		}
	};
});