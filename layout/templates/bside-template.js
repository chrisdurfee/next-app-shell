"use strict";

const BsideTemplate = Template.extend((props) =>
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