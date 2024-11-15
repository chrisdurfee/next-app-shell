import { Div, Section } from "@base-framework/atoms";
import { Component } from "@base-framework/base";
import { TabNavigation } from "./tab-navigation.js";

/**
 * Tab
 *
 * This will create a tab component that can route
 * to tab panels.
 *
 * @class
 */
export class Tab extends Component
{
	/**
	 * This will render the component.
	 *
	 * @returns {object}
	 */
	render()
	{
		return Div({ class: 'tab-panel' }, [
			new TabNavigation({
				class: this.class,
				options: this.options
			}),
			Section({
				class: 'tab-content',
				switch: this.addGroup()
			})
		]);
	}

	/**
	 * This will add the group.
	 *
	 * @returns {array}
	 */
    addGroup()
    {
		let option;
		const switches = [];

		const options = this.options;
		for (let i = 0, length = options.length; i < length; i++)
		{
            option = options[i];
			switches.push(
            {
                uri: option.uri || option.href,
                component: option.component,
				title: option.title || null,
				persist: true
            });
		}
		return switches;
    }
}