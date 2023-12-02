"use strict";

var BsideTemplate = Template.extend(function(props)
{
	return {
		className: 'body bside-container',
		row:
		{
			className: 'row',
			children:
			[
				MainColumn({
					children: props.left || null
				}),
				MainColumn({
					children: props.right || null
				})
			]
		}
	};
});