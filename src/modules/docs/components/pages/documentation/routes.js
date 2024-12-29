import { Div, H1, Header } from "@base-framework/atoms";
import { Overlay, Panel } from "@base-framework/ui/organisms";
import { GridContainer } from "@components/molecules/molecules.js";

/**
 * This will create an example overlay.
 *
 * @returns {object}
 */
const ExampleOverlay = () => (
	new Overlay({ backHref: 'aside/' }, [
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
	])
);

/**
 * This will create the aside routes.
 *
 * @param {string} basePath
 * @returns {array}
 */
export const Routes = (basePath) => ([
	{
		uri: `${basePath}/overlay-test`,
		component: ExampleOverlay()
	}
]);