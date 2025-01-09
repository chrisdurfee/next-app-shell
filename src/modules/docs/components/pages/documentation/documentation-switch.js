import AlertPage from "./components/alert-page.js";
import AvatarPage from "./components/avatar-page.js";
import { BadgePage } from "./components/badge-page.js";
import BreadcrumbPage from "./components/breadcrumb-page.js";
import { ButtonPage } from "./components/buttons/button-page.js";
import { CalendarPage } from "./components/calendar-page.js";
import CardPage from "./components/cards/card-page.js";
import ComboboxPage from "./components/comboxbox-page.js";
import DataTablePage from "./components/data-table/data-table-page.js";
import { DialogPage } from "./components/dialog-page.js";
import DropdownMenuPage from "./components/dropdown-menu-page.js";
import { FormPage } from "./components/form-page.js";
import InputPage from "./components/input-page.js";
import ListPage from "./components/list-page.js";
import { ModalPage } from "./components/modal-page.js";
import NavigationPage from "./components/navigation-page.js";
import { NotificationPage } from "./components/nofication-page.js";
import ProgressBarPage from "./components/progress-bar-page.js";
import SkeletonPage from "./components/skeleton-page.js";
import { TabPage } from "./components/tab-page.js";
import TooltipPage from "./components/tooltip-page.js";
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
	component: page
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
	Page(`${basePath}/components/forms*`, 'Forms', FormPage),
	Page(`${basePath}/components/alerts*`, 'Alerts', AlertPage),
	Page(`${basePath}/components/comboboxes*`, 'Comboboxes', ComboboxPage),
	Page(`${basePath}/components/lists*`, 'Lists', ListPage),
	Page(`${basePath}/components/data-tables*`, 'Data Tables', DataTablePage),
	Page(`${basePath}/components/breadcrumbs*`, 'Breadcrumbs', BreadcrumbPage),
	Page(`${basePath}/components/navigations*`, 'Navigations', NavigationPage),
	Page(`${basePath}/components/progress-bars*`, 'Progress Bars', ProgressBarPage),
	Page(`${basePath}/components/skeletons*`, 'Skeletons', SkeletonPage),
	Page(`${basePath}/components/tooltips*`, 'Tooltips', TooltipPage),
	Page(`${basePath}/components/dropdown-menus*`, 'Dropdown Menus', DropdownMenuPage),
]);