import { Div, MainSection } from "../atoms/atoms.js";
import { BasicPage } from './basic-page.js';
import { BsideTemplate } from './templates/bside-template.js';

/**
 * BsidePage
 *
 * This will create a bside page.
 *
 * @class
 * @extends BasicPage
 */
export class BsidePage extends BasicPage
{
	/**
	 * This will render the page.
	 *
	 * @return {object}
	 */
	render()
	{
		return MainSection([
			BsideTemplate({
				left: Div({ class: 'contained' }, this.children)
			})
		]);
	}
}