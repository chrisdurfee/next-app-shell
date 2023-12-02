"use strict";

var FullPage = BasicPage.extend(
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
				panels: GridContainer()
			}
		];
	}
});