"use strict";

var AppControl = base.Component.extend(
{
    onCreated: function()
    {
        this.timer = null;
    },

	render: function()
	{
		return {
			className: 'app-nav-container',
			onState: [
                ['ignoreHover', {
                    ignoreHover: true
                }]
            ],
            mouseleave: base.bind(this, this.removeIgnore),
			primary: new MainNavigation({
                options: this.options,
                parent: this
            })
		};
    },

    removeIgnore: function()
    {
        window.clearTimeout(this.timer);

        var state = this.state;
        this.timer = window.setTimeout(function()
        {
            state.set({
                ignoreHover: false
            });
        }, 400);
    },

	setupStates: function()
	{
		this.stateTargetId = 'app-control';

		return {
            ignoreHover: false,
            pinned: false
		};
	}
});