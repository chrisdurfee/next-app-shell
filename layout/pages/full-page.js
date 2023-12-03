import { MainSection } from "../atoms/atoms.js";
import { GridContainer } from '../molecules/molecules.js';
import { FullTemplate } from '../templates/full-template.js';
import { BasicPage } from './basic-page.js';

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
			GridContainer()
		];
	}
}