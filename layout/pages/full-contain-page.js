"use strict";

var FullContainPage = BasicPage.extend(
{
	render: function()
	{
		return MainSection(
		{
			children:
			[
				FullTemplate({
					children: this.addBody()
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