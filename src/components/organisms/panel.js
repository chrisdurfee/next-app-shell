import { Div } from "@base-framework/atoms";
import { Component } from "@base-framework/base";

/**
 * Panel
 *
 * This will create a panel.
 *
 * @class
 * @extends Component
 */
export class Panel extends Component
{
	/**
	 * This will render the component.
	 *
	 * @returns {object}
	 */
	render()
	{
		return Div({ class: this.class || '' }, this.children);
	}
}