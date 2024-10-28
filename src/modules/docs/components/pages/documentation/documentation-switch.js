import AlertPage from "./components/buttons/alert-page.js";
import AvatarPage from "./components/buttons/avatar-page.js";
import { BadgePage } from "./components/buttons/badge-page.js";
import { ButtonPage } from "./components/buttons/button-page.js";
import CardPage from "./components/buttons/card-page.js";
import { DialogPage } from "./components/buttons/dialog-page.js";
import InputPage from "./components/buttons/input-page.js";
import { ModalPage } from "./components/buttons/modal-page.js";
import { NotificationPage } from "./components/buttons/nofication-page.js";
import { TabPage } from "./components/buttons/tab-page.js";
import IconPage from "./icons/icon-page.js";
import IntroPage from "./introduction/intro-page.js";
import { ThemePage } from "./theme/theme-page.js";

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
	Page(`${basePath}/theme`, 'Theme', ThemePage),
	Page(`${basePath}/icons`, 'Icons', IconPage),
	Page(`${basePath}/components/buttons*`, 'Buttons', ButtonPage),
	Page(`${basePath}/components/badges*`, 'Badges', BadgePage),
	Page(`${basePath}/components/tabs*`, 'Tabs', TabPage),
	Page(`${basePath}/components/modals*`, 'Modals', ModalPage),
	Page(`${basePath}/components/notifications*`, 'Notifications', NotificationPage),
	Page(`${basePath}/components/dialogs*`, 'Modals', DialogPage),
	Page(`${basePath}/components/cards*`, 'Cards', CardPage),
	Page(`${basePath}/components/avatars*`, 'Avatars', AvatarPage),
	Page(`${basePath}/components/inputs*`, 'Inputs', InputPage),
	Page(`${basePath}/components/alerts*`, 'Alerts', AlertPage),
]);