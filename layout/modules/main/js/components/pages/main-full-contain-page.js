import { Div } from "./../../../../../components/atoms/atoms.js";
import { GridContainer } from './../../../../../components/molecules/molecules.js';
import { FullContainPage } from './../../../../../components/pages/full-contain-page.js';

/**
 * FullContainPage
 *
 * This will create a full page.
 *
 * @class
 * @extends BasicPage
 */
export class MainFullContainPage extends FullContainPage
{
	/**
	 * This will add the body of the page.
	 *
	 * @return {array}
	 */
	addBody()
	{
		return [
			Div({ class: 'contained' }, [
				GridContainer()
			])
		];
	}
}