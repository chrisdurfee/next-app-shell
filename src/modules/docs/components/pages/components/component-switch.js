import { ButtonPage } from "../buttons/button-page.js";

/**
 * This will create an example page.
 *
 * @param {string} url
 * @param {string} title
 * @returns {object}
 */
const Page = (url, title, page) => ({
	uri: url,
	title,
	component: page()
});

/**
 * This will create the aside switch.
 *
 * @param {string} basePath
 * @returns {array}
 */
export const ComponentSwitch = (basePath) => ([
	Page(basePath + '/components/buttons', 'Buttons', ButtonPage)
]);