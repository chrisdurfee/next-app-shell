"use strict";

/**
 * ExamplePage
 *
 * This will create a example page.
 * @class
 */
var ExamplePage = BasicPage.extend(
{
	render: function()
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