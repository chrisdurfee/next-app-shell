"use strict";

var FullTemplate = Template.extend(function(props)
{
	return {
		className: 'body full-container ' + props.className,
		children: props.children
	};
});