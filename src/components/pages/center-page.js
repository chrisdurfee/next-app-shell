import { Div } from "@base-framework/atoms";
import { BasicPage } from './basic-page.js';
import { FullTemplate } from './templates/full-template.js';

/**
 * CenterPage
 *
 * This will create a center page.
 *
 * @class
 * @extends BasicPage
 */
export class CenterPage extends BasicPage
{
	/**
	 * This will render the page.
	 *
	 * @returns {object}
	 */
	render()
	{
		return FullTemplate([
            Div({ class: 'contained px-4 flex flex-auto flex-col' }, this.children)
        ]);
	}
}