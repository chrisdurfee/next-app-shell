import { SidebarMenuPage } from "@base-framework/ui/pages";
import { DocumentationSwitch } from "./documentation-switch.js";
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
 * DocumentationPage
 *
 * This will create an a documentation page.
 *
 * @returns {AsidePage}
 */
export const DocumentationPage = () => (
	new SidebarMenuPage({
		/**
		 * @member {string}	title
		 */
		title: 'Documentation',

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
		switch: DocumentationSwitch(basePath),

		/**
		 * @member {array} links
		 */
		links: Links(basePath)
	})
);

export default DocumentationPage;