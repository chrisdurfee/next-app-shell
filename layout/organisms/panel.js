import { Div } from "../atoms/atoms.js";
import { Component } from "../libs/base/base.js";

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
	 * @return {object}
	 */
	render()
	{
		return Div({ class: 'panel-container' }, this.children);
	}
}