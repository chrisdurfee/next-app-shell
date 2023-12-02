"use strict";

var BsideModule = BasicModule.extend(
{
	render: function()
	{
		return MainSection(
		{
			children:
			[
				BsideTemplate({
					left: this.addBody()
				})
			]
		});
	},

	addBody: function()
	{
		return [
			{
				className: 'contained',
				panels: GridContainer()
			}
		];
	}
});