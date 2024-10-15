import { Main } from '@base-framework/atoms';
import { Atom, Component } from '@base-framework/base';
import { AppControl } from './navigation/app-control.js';
import { MobileHeader } from './navigation/mobile-header.js';

/**
 * This will create the app container.
 *
 * @param {object} props
 * @param {array} children
 * @returns {object}
 */
const AppContainer = Atom((props, children) =>
{
	return {
		class: 'app-container flex relative sm:h-screen',
		...props,
		children
	};
});

/**
 * This will create the active panel container.
 *
 * @param {object} props
 * @param {array} children
 * @returns {object}
 */
const ActivePanelContainer = Atom((props, children) =>
{
	return Main({
		class: 'active-panel-container flex flex-auto relative z-0 pb-[80px] md:pb-0',
		...props,
		children
	});
});

/**
 * AppShell
 *
 * This will create the app shell.
 *
 * @class
 * @extends Component
 */
export class AppShell extends Component
{
	/**
	 * This will render the component.
	 *
	 * @returns {object}
	 */
	render()
	{
		return AppContainer([
			MobileHeader(),

			/**
			 * This will add the desktop and mobile navigation.
			 */
			new AppControl({ options: this.options }),

			/**
			 * This will add the active panel container that will hold the main body.
			 */
			ActivePanelContainer({
				switch: this.routes,
				cache: 'mainBody'
			})
		]);
	}
}