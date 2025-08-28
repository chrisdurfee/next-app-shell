import { Div } from "@base-framework/atoms";
import { BackButton } from "@base-framework/ui/organisms";
import { BlankPage } from "@base-framework/ui/pages";
import { ContentSection } from "./content-section.js";
import { Sidebar } from "./sidebar.js";

/**
 * This will create the back button.
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
 * This will check if the window is in mobile view.
 *
 * @returns {boolean}
 */
const LG_WINDOW_SIZE = 1024;
const isMobile = () => window.innerWidth < LG_WINDOW_SIZE;

/**
 * Props for the settings page.
 *
 * @type {object} Props
 */
const props =
{
	/**
	 * This will check the page.
	 *
	 * @returns {void}
	 */
	checkPage()
	{
		const page = this.route.page;
		if (!isMobile() && !page)
		{
			app.navigate('settings/profile', null, true);
		}
	},

	/**
	 * This will setup the events for the settings page.
	 * @returns {array}
	 */
	setupEvents()
	{
		return [
			['resize', window, () => this.checkPage()]
		];
	},

	/**
	 * This will run after the setup.
	 *
	 * @returns {void}
	 */
	afterSetup()
	{
		this.checkPage();
	},

	/**
	 * This will run after the update.
	 *
	 * @returns {void}
	 */
	update()
	{
		this.checkPage();
	}
};

/**
 * SettingsPage
 *
 * The main page layout for the Settings page with sidebar navigation and dynamic content sections.
 *
 * @returns {object}
 */
export const SettingsPage = () => (
	new BlankPage(props, [
		Div({ class: 'flex flex-auto flex-col pt-0 sm:pt-2 lg:pt-0 lg:flex-row max-w-screen h-full' }, [
			Sidebar(),
			ContentSection()
		])
	])
);

export default SettingsPage;