"use strict";

const AppShell = base.Component.extend(
{
	render()
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

	getBodyPanel()
	{
		return this.mainBody;
	},

	addNotice(props)
	{
		this.notices.addNotice(props);
	}
});