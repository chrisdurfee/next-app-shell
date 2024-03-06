import { Div, MainSection } from "../atoms/atoms.js";
import { BasicPage } from './basic-page.js';
import { AsideBsideTemplate } from './templates/aside-bside-template.js';

/**
 * AsideBsidePage
 *
 * This will create a aside bside page.
 *
 * @class
 * @extends BasicPage
 */
export class AsideBsidePage extends BasicPage
{
	/**
	 * This will render the page.
	 *
	 * @return {object}
	 */
	render()
	{
		return MainSection([
			AsideBsideTemplate({
				center: Div({ class: 'contained' }, this.children)
			})
		]);
	}
}