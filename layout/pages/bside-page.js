import { Div, MainSection } from "../atoms/atoms.js";
import { GridContainer } from '../molecules/molecules.js';
import { BsideTemplate } from '../templates/bside-template.js';
import { BasicPage } from './basic-page.js';

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
				left: this.addBody()
			})
		]);
	}

	/**
	 * This will add the body of the page.
	 *
	 * @return {object}
	 */
	addBody()
	{
		return Div({ class: 'contained' }, [
			GridContainer()
		]);
	}
}