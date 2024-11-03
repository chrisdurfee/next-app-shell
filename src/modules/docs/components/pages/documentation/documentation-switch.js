import AlertPage from "./components/alert-page.js";
import AvatarPage from "./components/avatar-page.js";
import { BadgePage } from "./components/badge-page.js";
import BreadcrumbPage from "./components/breadcrumb-page.js";
import { ButtonPage } from "./components/buttons/button-page.js";
import { CalendarPage } from "./components/calendar-page.js";
import CardPage from "./components/card-page.js";
import ComboboxPage from "./components/comboxbox-page.js";
import { DialogPage } from "./components/dialog-page.js";
import InputPage from "./components/input-page.js";
import ListPage from "./components/list-page.js";
import { ModalPage } from "./components/modal-page.js";
import NavigationPage from "./components/navigation-page.js";
import { NotificationPage } from "./components/nofication-page.js";
import { TabPage } from "./components/tab-page.js";
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
	Page(`${basePath}/components/calendars*`, 'Calendars', CalendarPage),
	Page(`${basePath}/components/avatars*`, 'Avatars', AvatarPage),
	Page(`${basePath}/components/inputs*`, 'Inputs', InputPage),
	Page(`${basePath}/components/alerts*`, 'Alerts', AlertPage),
	Page(`${basePath}/components/comboboxes*`, 'Comboboxes', ComboboxPage),
	Page(`${basePath}/components/lists*`, 'Lists', ListPage),
	Page(`${basePath}/components/breadcrumbs*`, 'Breadcrumbs', BreadcrumbPage),
	Page(`${basePath}/components/navigations*`, 'Navigations', NavigationPage),
]);