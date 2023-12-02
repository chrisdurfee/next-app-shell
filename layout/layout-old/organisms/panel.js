"use strict";

var Panel = base.Component.extend(
{
	render: function()
	{
		console.log(this.parent)
		return {
            className: 'panel-container',
            children: this.children
        };
	}
});