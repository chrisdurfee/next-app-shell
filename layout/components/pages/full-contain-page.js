import { Div, MainSection } from "../atoms/atoms.js";
import { BasicPage } from './basic-page.js';
import { FullTemplate } from './templates/full-template.js';

/**
 * FullContainPage
 *
 * This will create a full contained page.
 *
 * @class
 * @extends BasicPage
 */
export class FullContainPage extends BasicPage
{
	/**
	 * This will render the page.
	 *
	 * @return {object}
	 */
	render()
	{
		return MainSection([
			FullTemplate(this.addBody())
		]);
	}

	/**
	 * This will add the body of the page.
	 *
	 * @return {array}
	 */
	addBody()
	{
		return [
			Div({ class: 'contained' }, this.children)
		];
	}
}