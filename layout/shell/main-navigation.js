"use strict";

var MainNavigation = base.Component.extend(
{
	render: function()
	{
		return {
			className: 'main-navigation nav-container',
			children:
			[
				this.addLogo(),
				{
					className: 'nav-container',
					nav: this.addPrimaryNav()
				}
			]
		};
	},

	addLogo: function()
	{
		return A(
		{
			className: 'logo',
			href: './'
		});
	},

	addPrimaryNav: function()
	{
		return new PrimaryNavigation(
		{
			options: this.options,
			appNav: this.parent.panel
		});
	}
});