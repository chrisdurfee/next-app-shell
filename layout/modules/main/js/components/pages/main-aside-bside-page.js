import { Div } from "../../../../../components/atoms/atoms.js";
import { GridContainer } from '../../../../../components/molecules/molecules.js';
import { AsideBsidePage } from '../../../../../components/pages/aside-bside-page.js';

/**
 * MainAsideBsidePage
 *
 * This will create a aside bside page.
 *
 * @class
 * @extends AsideBsidePage
 */
export class MainAsideBsidePage extends AsideBsidePage
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