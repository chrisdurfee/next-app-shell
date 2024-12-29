import { Div, H1, Header } from "@base-framework/atoms";
import { BackButton, Overlay } from "@base-framework/ui/organisms";

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
					BackButton({
						backUrl: 'aside/marketing/'
					}),
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