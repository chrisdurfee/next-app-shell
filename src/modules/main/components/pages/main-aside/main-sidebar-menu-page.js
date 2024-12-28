import { SidebarMenuPage } from "@base-framework/ui/pages";
import { AsideSwitch } from "./aside-switch.js";
import { Links } from "./links.js";
import { Routes } from "./routes.js";

/**
 * This will create the base path.
 *
 * @constant
 * @type {string}
 */
const basePath = 'aside';

/**
 * MainSidebarMenuPage
 *
 * This will create an a sidebar menu page.
 *
 * @returns {AsidePage}
 */
export const MainSidebarMenuPage = () => (
	new SidebarMenuPage({
		/**
		 * @member {string}	title
		 */
		title: 'Page Title',

		/**
		 * @member {string}	basePath
		 */
		basePath,

		/**
		 * @member {array} routes
		 */
		routes: Routes(basePath),

		/**
		 * @member {array} switch
		 */
		switch: AsideSwitch(basePath),

		/**
		 * @member {array} links
		 */
		links: Links(basePath)
	})
);

export default MainSidebarMenuPage;