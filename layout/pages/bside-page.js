"use strict";

const BsidePage = BasicPage.extend(
{
	render()
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