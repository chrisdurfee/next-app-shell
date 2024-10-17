import { AsidePage } from "../../../../../components/pages/aside-page.js";
import { ComponentSwitch } from "./component-switch.js";
import { Links } from "./links.js";
import { Routes } from "./routes.js";

/**
 * This will create the base path.
 *
 * @constant
 * @type {string}
 */
const basePath = 'docs';

/**
 * ComponentPage
 *
 * This will create an a component page.
 *
 * @returns {AsidePage}
 */
export const ComponentPage = () => (
	new AsidePage({
		/**
		 * @member {string}	title
		 */
		title: 'Getting Started',

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
		switch: ComponentSwitch(basePath),

		/**
		 * @member {array} links
		 */
		links: Links(basePath)
	})
);

export default ComponentPage;