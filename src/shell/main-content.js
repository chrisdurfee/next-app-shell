import { Div, Main } from '@base-framework/atoms';
import { Atom } from '@base-framework/base';
import { NotificationContainer } from '@components/molecules/notifications/notification-container.js';
import { AppControl } from './navigation/app-control.js';
import { MobileHeader } from './navigation/mobile-header.js';

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
 * This will create the main content of the app shell.
 *
 * @param {object} props
 * @returns {object}
 */
export const MainContent = (props) => (
	Div({ class: 'flex flex-auto flex-col' }, [
		MobileHeader(),

		/**
		 * This will add the desktop and mobile navigation.
		 */
		new AppControl({ options: props.options }),

		/**
		 * This will add the active panel container that will hold the main body.
		 */
		ActivePanelContainer({
			switch: props.routes,
			cache: 'mainBody'
		}),

		new NotificationContainer({
			cache: 'notifications'
		})
	])
);