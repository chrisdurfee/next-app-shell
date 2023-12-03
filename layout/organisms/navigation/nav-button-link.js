import { Component } from "../../libs/base/base.js";

/**
 * NavButtonLink
 *
 * This will create a button to open and close
 * nested navigations.
 * @class
 */
export class NavButtonLink extends Component
{
    /**
     * This will render the component.
     *
     * @override
     * @return {object}
     */
	render()
	{
		const state = this.state;

		return {
			onState: [
				['selected', {
					selected: true
				}],
				['active', {
					active: true
				}]
			],
			click: () =>
			{
				const value = !state.get('active');
				state.set('active', value);

				if (!this.checkCallBack)
				{
                    return;
				}

                const active = (value)? this : null;
                this.checkCallBack(active);
			},
			children: this.children
		};
	}

    /**
     * This will set up the states.
     *
     * @override
     * @protected
     * @return {object}
     */
	setupStates()
	{
		return {
			selected: false,
			active: false
		};
	}

    /**
     * This will update the states.
     *
     * @param {object} selected
     * @return {void}
     */
	update(selected)
	{
		this.state.set({
			selected,
			active: selected
		});
	}
}