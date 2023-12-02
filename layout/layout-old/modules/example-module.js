"use strict";

/**
 * ExampleModule
 *
 * This will create a example module.
 * @class
 */
var ExampleModule = BasicModule.extend(
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