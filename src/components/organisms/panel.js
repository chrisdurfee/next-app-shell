import { Component } from "@base-framework/base";
import { Div } from "../atoms/atoms.js";

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
		return Div({ class: 'panel-container py-8 px-1' }, this.children);
	}
}