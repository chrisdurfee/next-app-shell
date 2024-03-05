import { Div } from "../../../../../components/atoms/atoms.js";
import { GridContainer } from '../../../../../components/molecules/molecules.js';
import { BsidePage } from '../../../../../components/pages/bside-page.js';

/**
 * MainBsidePage
 *
 * This will create a bside page.
 *
 * @returns {BsidePage}
 */
export const MainBsidePage = () =>
{
	return new BsidePage([
		Div({ class: 'contained' }, [
			GridContainer()
		])
	]);
};