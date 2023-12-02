"use strict";

const FullTemplate = Template.extend((props) =>
{
	return {
		className: 'body full-container ' + props.className,
		children: props.children
	};
});