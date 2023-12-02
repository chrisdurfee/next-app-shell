"use strict";

var FullContainModule = BasicModule.extend(
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