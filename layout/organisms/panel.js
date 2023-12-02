"use strict";

const Panel = base.Component.extend(
{
	render()
	{
		return {
            className: 'panel-container',
            children: this.children
        };
	}
});