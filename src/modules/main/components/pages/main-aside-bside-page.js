import { Div } from "../../../../components/atoms/atoms.js";
import { GridContainer } from '../../../../components/molecules/molecules.js';
import { AsideBsidePage } from '../../../../components/pages/aside-bside-page.js';

/**
 * MainAsideBsidePage
 *
 * This will create a aside bside page.
 *
 * @returns {AsideBsidePage}
 */
export const MainAsideBsidePage = () => (
	new AsideBsidePage([
		Div({ class: 'contained' }, [
			GridContainer()
		])
	])
);