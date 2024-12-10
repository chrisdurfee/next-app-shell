import { Div } from "@base-framework/atoms";
import { BasicPage } from './basic-page.js';
import { FullTemplate } from './templates/full-template.js';

/**
 * BlankPage
 *
 * This will create a blank page.
 *
 * @class
 * @extends BasicPage
 */
export class BlankPage extends BasicPage
{
	/**
	 * This will render the page.
	 *
	 * @returns {object}
	 */
	render()
	{
		return FullTemplate([
            Div({ class: 'flex flex-auto flex-col pt-[80px] sm:pt-0' }, this.children)
        ]);
	}
}