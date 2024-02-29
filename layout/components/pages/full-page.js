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
				this.addHeader(),
			]),
			FullTemplate(this.addBody())
		]);
	}

	/**
	 * This will add the header of the page.
	 *
	 * @return {object}
	 */
	addHeader()
	{
		return H1(this.title);
	}

	/**
	 * This will add the body of the page.
	 *
	 * @return {array}
	 */
	addBody()
	{
		return this.children;
	}
}