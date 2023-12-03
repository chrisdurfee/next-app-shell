import { Atom, Component } from '../libs/base/base.js';
import { AppControl } from './app-control.js';

/**
 * This will create the app container.
 *
 * @param {object} props
 * @param {array} children
 * @return {object}
 */
const AppContainer = Atom((props, children) =>
{
	return {
		class: 'app-container',
		...props,
		children
	};
});

/**
 * This will create the active panel container.
 *
 * @param {object} props
 * @param {array} children
 * @return {object}
 */
const ActivePanelContainer = Atom((props, children) =>
{
	return {
		class: 'active-panel-container',
		...props,
		children
	};
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
	 * @return {object}
	 */
	render()
	{
		return AppContainer([
			new AppControl({
				options: this.options
			}),
			ActivePanelContainer({
				switch: this.routes,
				cache: 'mainBody'
			})
		]);
	}

	/**
	 * This will get the body panel.
	 *
	 * @returns {object}
	 */
	getBodyPanel()
	{
		return this.mainBody;
	}

	/**
	 * This will add a notice.
	 *
	 * @param {object} props
	 * @return {void}
	 */
	addNotice(props)
	{
		this.notices.addNotice(props);
	}
}