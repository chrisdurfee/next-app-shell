"use strict";

const MainNavigation = base.Component.extend(
{
	render()
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

	addLogo()
	{
		return A(
		{
			className: 'logo',
			href: './'
		});
	},

	addPrimaryNav()
	{
		return new PrimaryNavigation(
		{
			options: this.options,
			appNav: this.parent.panel
		});
	}
});