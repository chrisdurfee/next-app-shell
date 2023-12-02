"use strict";

var Panel = base.Component.extend(
{
	render: function()
	{
		return {
            className: 'panel-container',
            children: this.children
        };
	}
});