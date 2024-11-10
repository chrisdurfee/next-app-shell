import { Atom } from '@base-framework/base';
import { NotificationContainer } from '@components/molecules/notifications/notification-container.js';
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
		class: 'app-container flex flex-auto relative',
		children: [
			new NotificationContainer({
				cache: 'notifications'
			}),
			...children
		]
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