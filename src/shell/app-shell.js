import { Atom, Jot } from '@base-framework/base';
import { NotificationContainer } from '@components/molecules/notifications/notification-container.js';
import { AppContent } from './app-content.js';

/**
 * This will create the app container.
 *
 * @param {object} props
 * @param {array} children
 * @returns {object}
 */
const Shell = Atom((props, children) =>
{
	return {
		...props,
		class: 'shell flex flex-auto relative z-10',
		onState: ['isSignedIn', { authed: true }],
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
export const AppShell = Jot({
	render()
	{
		const { options, routes, onCreated } = this;
		return Shell({ onCreated }, [
			AppContent({
				options,
				routes
			})
		]);
	}
});