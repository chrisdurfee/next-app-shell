"use strict";

var TopBar = function(props)
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

var MainColumn = Tag.extend(function(props)
{
	return {
		className: 'col ' + (props.className || ''),
		children: props.children
	};
});

var AsideTemplate = Template.extend(function(props)
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