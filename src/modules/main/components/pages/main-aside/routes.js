import { Div, H1, Header } from "@components/atoms/atoms.js";
import { BackButton, Overlay } from '@components/organisms/overlays/overlay.js';

/**
 * This will create an example overlay.
 *
 * @returns {object}
 */
const ExampleOverlay = () => (
	new Overlay([
		Div({ class: 'p-6 2xl:mx-auto 2xl:max-w-[1600px]' }, [
			Div({ class: 'w-full lg:w-1/3' }, [
				Header({ class: 'flex flex-auto items-center mb-2' }, [
					BackButton(),
					H1({ class: 'text-lg md:text-2xl font-bold tracking-tight' }, 'Overlay'),
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