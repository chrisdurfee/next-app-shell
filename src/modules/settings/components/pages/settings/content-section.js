import { Div } from "@base-framework/atoms";
import { BackButton, DockableOverlay } from "@base-framework/ui/organisms";

/**
 * This will create the back button toolbar.
 *
 * @returns {object}
 */
export const PageToolbar = () => (
	Div({ class: "flex items-center justify-between pb-2 mt-2" }, [
		Div({ class: 'flex lg:hidden' }, [
			BackButton({
				margin: 'm-0 ml-0',
				backUrl: '/settings'
			})
		])
	])
);

/**
 * Helper function to create a page that uses dynamic imports.
 *
 * @param {string} uri - The URI (route) for this page
 * @param {string} src - The relative path to the JS module for this page
 * @returns {object}
 */
const Page = (uri, src) => ({
	uri,
	import: () => import(src),
});

/**
 * This will create a dockable page.
 *
 * @returns {object}
 */
const DockablePage = () => (
	new DockableOverlay({ class: 'px-2' }, [
		PageToolbar(),
		Div({
			class: 'flex flex-auto flex-col contained p-4 lg:p-6',
			switch: [
				Page('/settings/profile', './sections/profile-settings.js'),
				Page('/settings/account', './sections/account-settings.js'),
				Page('/settings/appearance', './sections/appearance-settings.js'),
				Page('/settings/notifications', './sections/notification-settings.js'),
				Page('/settings/display', './sections/display-settings.js'),
			]
		})
	])
);

/**
 * This will create the Content Section.
 *
 * @returns {object}
 */
export const ContentSection = () => (
	Div({ class: 'flex flex-auto flex-col' }, [
		Div({
			route: [
				{
					uri: 'settings/:page*',
					component: DockablePage
				}
			]
		})
	])
);