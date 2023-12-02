"use strict";

var AsideBsidePage = BasicPage.extend(
{
	render: function()
	{
		return MainSection(
		{
			children:
			[
				AsideBsideTemplate({
					center: this.addBody()
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