"use strict";

/**
 * ExamplePage
 *
 * This will create a example page.
 * @class
 */
const ExamplePage = BasicPage.extend(
{
	render()
	{
		return MainSection(
		{
			children:
			[
				AsideTemplate({
					right: this.addBody()
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