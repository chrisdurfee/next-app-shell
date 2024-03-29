import { H1, Header, MainSection } from "../atoms/atoms.js";
import { BasicPage } from './basic-page.js';
import { FullTemplate } from './templates/full-template.js';

/**
 * FullPage
 *
 * This will create a full page.
 *
 * @class
 * @extends BasicPage
 */
export class FullPage extends BasicPage
{
	/**
	 * This will render the page.
	 *
	 * @return {object}
	 */
	render()
	{
		return MainSection([
			Header([
				H1(this.title),
			]),
			FullTemplate(this.children)
		]);
	}
}