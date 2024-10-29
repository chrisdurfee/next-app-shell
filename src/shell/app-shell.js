import { Atom } from '@base-framework/base';
import { AppContent } from './app-content.js';

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
		...props,
		class: 'app-container flex relative h-screen',
		children
	};
});

/**
 * AppShell
 *
 * This will create the app shell.
 *
 * @param {object} props
 * @returns {object}
 */
export const AppShell = (props) => (
	AppContainer([
		AppContent(props)
	])
);