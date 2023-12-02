"use strict";

const FullContainPage = BasicPage.extend(
{
	render()
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

	addBody()
	{
		return [
			{
				className: 'contained',
				panels: GridContainer()
			}
		];
	}
});