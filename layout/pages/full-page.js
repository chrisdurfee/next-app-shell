"use strict";

const FullPage = BasicPage.extend(
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
				panels: GridContainer()
			}
		];
	}
});