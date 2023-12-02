"use strict";

const AppControl = base.Component.extend(
{
    onCreated()
    {
        this.timer = null;
    },

	render()
	{
		return {
			className: 'app-nav-container',
			onState: [
                ['ignoreHover', {
                    ignoreHover: true
                }]
            ],
            mouseleave: this.removeIgnore.bind(this),
			primary: new MainNavigation({
                options: this.options,
                parent: this
            })
		};
    },

    removeIgnore()
    {
        window.clearTimeout(this.timer);

        let state = this.state;
        this.timer = window.setTimeout(function()
        {
            state.set({
                ignoreHover: false
            });
        }, 400);
    },

	setupStates()
	{
		this.stateTargetId = 'app-control';

		return {
            ignoreHover: false,
            pinned: false
		};
	}
});