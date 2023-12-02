"use strict";

var AsideBsideTemplate = Template.extend(function(props)
{
	return {
		className: 'body aside-container bside-container',
		row:
		{
			className: 'row',
			children:
			[
				MainColumn({
					children: props.left || null
				}),
				MainColumn({
					children: props.center || null
				}),
				MainColumn({
					children: props.right || null
				})
			]
		}
	};
});