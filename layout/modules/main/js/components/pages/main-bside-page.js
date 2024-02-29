import { Div } from "../../../../../components/atoms/atoms.js";
import { GridContainer } from '../../../../../components/molecules/molecules.js';
import { BsidePage } from '../../../../../components/pages/bside-page.js';

/**
 * MainBsidePage
 *
 * This will create a bside page.
 *
 * @class
 * @extends BsidePage
 */
export class MainBsidePage extends BsidePage
{
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