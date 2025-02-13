import { Div } from '@base-framework/atoms';
import { Atom, Component, Jot } from '@base-framework/base';
import { Panel } from '@base-framework/ui';
import { NotificationContainer } from "@base-framework/ui/molecules";
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
	return Div({
			...props,
			class: 'shell flex flex-auto relative z-10'
		}, [
			/**
			 * This will set up the notification container so that it can be used
			 * throughout the app.
			 */
			new NotificationContainer({
				cache: 'notifications'
			}),
			...children
	]);
});

/**
 * AppShell
 *
 * This will create the app shell.
 *
 * @type {typeof Component} AppShell
 */
export const AppShell = Jot(
{
	/**
	 * This will render the component.
	 *
	 * @returns {object}
	 */
	render()
	{
		// @ts-ignore
		const { options, routes } = this;
		return Shell([
			Div({
				class: 'flex flex-auto flex-col',
				switch: [
					{
						uri: '/sign-up*',
						import: () => import('./sign-up/sign-up-page.js')
					},
					{
						uri: '/onboarding*',
						component: new Panel('onboarding')
					},
					{
						component: AppContent({
							options,
							routes
						})
					}
				]
			})
		]);
	}
});