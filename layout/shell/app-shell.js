"use strict";

var AppShell = base.Component.extend(
{
	render: function()
	{
		return {
			className: 'app-container',
			children:
			[
				new AppControl({
					options: this.options
				}),
				{
					className: 'active-panel-container',
					switch: this.routes,
					cache: 'mainBody'
				}
			]
		};
	},

	getBodyPanel: function()
	{
		return this.mainBody;
	},

	addNotice: function(props)
	{
		this.notices.addNotice(props);
	}
});