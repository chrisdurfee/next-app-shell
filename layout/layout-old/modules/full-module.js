"use strict";

var FullModule = BasicModule.extend(
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