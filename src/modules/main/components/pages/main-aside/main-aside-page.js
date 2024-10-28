import { AsidePage } from "@components/pages/aside-page.js";
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
 * MainAsidePage
 *
 * This will create an a side page.
 *
 * @returns {AsidePage}
 */
export const MainAsidePage = () => (
	new AsidePage({
		/**
		 * @member {string}	title
		 */
		title: 'Active Primary Title',

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

export default MainAsidePage;