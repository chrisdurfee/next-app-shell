import { BadgePage } from "./components/buttons/badge-page.js";
import { ButtonPage } from "./components/buttons/button-page.js";
import IntroPage from "./introduction/intro-page.js";

/**
 * This will create a page.
 *
 * @param {string} url
 * @param {string} title
 * @param {object} page
 * @returns {object}
 */
const Page = (url, title, page) => ({
	uri: url,
	title,
	component: page()
});

/**
 * This will create the documentation switch.
 *
 * @param {string} basePath
 * @returns {array}
 */
export const DocumentationSwitch = (basePath) => ([
	Page(`${basePath}`, 'Introduction', IntroPage),
	Page(`${basePath}/components/buttons`, 'Buttons', ButtonPage),
	Page(`${basePath}/components/badges`, 'Badges', BadgePage),
]);