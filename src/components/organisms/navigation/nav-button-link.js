import { Component } from "@base-framework/base";

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
     * @returns {object}
     */
	render()
	{
		const state = this.state;

		return {
			class: this.class || '',
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
				state.toggle('active');

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
     * @returns {object}
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
     * @returns {void}
     */
	update(selected)
	{
		this.state.set({
			selected,
			active: selected
		});
	}
}