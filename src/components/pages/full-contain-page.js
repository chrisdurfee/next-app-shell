import { Div } from "@base-framework/atoms";
import { BasicPage } from './basic-page.js';
import { MainSection } from "./main-section.js";
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
	 * @returns {object}
	 */
	render()
	{
		return MainSection([
			FullTemplate([
				Div({ class: 'contained px-4 flex flex-auto flex-col' }, this.children)
			])
		]);
	}
}