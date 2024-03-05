import { Div } from "./../../../../../components/atoms/atoms.js";
import { GridContainer } from './../../../../../components/molecules/molecules.js';
import { FullContainPage } from './../../../../../components/pages/full-contain-page.js';

/**
 * FullContainPage
 *
 * This will create a full page.
 *
 * @returns {FullContainPage}
 */
export const MainFullContainPage = () => (
	new FullContainPage([
		Div({ class: 'contained' }, [
			GridContainer()
		])
	])
);