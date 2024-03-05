import { Div, H1, Header } from "../../../../../../components/atoms/atoms.js";
import { GridContainer } from '../../../../../../components/molecules/molecules.js';
import { Overlay } from '../../../../../../components/organisms/overlay.js';
import { Panel } from '../../../../../../components/organisms/panel.js';

/**
 * This will create an example overlay.
 *
 * @returns {object}
 */
const ExampleOverlay = () =>
{
	return new Overlay({ backHref: 'aside/' }, [
		new Panel([
			Div([
				Header([
					H1('Overlay')
				]),
				Div({ class: 'contained' }, [
					GridContainer()
				])
			])
		])
	]);
};

/**
 * This will create the aside routes.
 *
 * @param {string} basePath
 * @returns {array}
 */
export const Routes = (basePath) =>
{
	return [
		{
			uri: `${basePath}/overlay-test`,
			component: ExampleOverlay()
		}
	];
};