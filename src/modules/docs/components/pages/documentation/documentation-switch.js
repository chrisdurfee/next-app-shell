
/**
 * This will create a page dynamically.
 *
 * @param {string} url      The URL or path this page should match
 * @param {string} title    A descriptive title for the page
 * @param {string} src      Path to the module that should be dynamically imported
 * @returns {object}
 */
const Page = (url, title, src) => ({
	uri: url,
	title,
	import: () => import(src),
});

/**
 * This will create the documentation switch.
 *
 * @param {string} basePath
 * @returns {array}
 */
export const DocumentationSwitch = (basePath) => ([
	Page(`${basePath}`, 'Introduction', './introduction/intro-page.js'),
	Page(`${basePath}/get-started`, 'Get Started', './get-started/get-started-page.js'),
	Page(`${basePath}/theme`, 'Theme', './theme/theme-page.js'),
	Page(`${basePath}/icons`, 'Icons', './icons/icon-page.js'),
	Page(`${basePath}/components/buttons*`, 'Buttons', './components/buttons/button-page.js'),
	Page(`${basePath}/components/badges*`, 'Badges', './components/badge-page.js'),
	Page(`${basePath}/components/tabs*`, 'Tabs', './components/tab-page.js'),
	Page(`${basePath}/components/modals*`, 'Modals', './components/modal-page.js'),
	Page(`${basePath}/components/notifications*`, 'Notifications', './components/nofication-page.js'),
	Page(`${basePath}/components/dialogs*`, 'Modals', './components/dialog-page.js'),
	Page(`${basePath}/components/cards*`, 'Cards', './components/cards/card-page.js'),
	Page(`${basePath}/components/calendars*`, 'Calendars', './components/calendar-page.js'),
	Page(`${basePath}/components/avatars*`, 'Avatars', './components/avatar-page.js'),
	Page(`${basePath}/components/inputs*`, 'Inputs', './components/input-page.js'),
	Page(`${basePath}/components/forms*`, 'Forms', './components/form-page.js'),
	Page(`${basePath}/components/alerts*`, 'Alerts', './components/alert-page.js'),
	Page(`${basePath}/components/comboboxes*`, 'Comboboxes', './components/comboxbox-page.js'),
	Page(`${basePath}/components/lists*`, 'Lists', './components/list-page.js'),
	Page(`${basePath}/components/data-tables*`, 'Data Tables', './components/data-table/data-table-page.js'),
	Page(`${basePath}/components/breadcrumbs*`, 'Breadcrumbs', './components/breadcrumb-page.js'),
	Page(`${basePath}/components/navigations*`, 'Navigations', './components/navigation-page.js'),
	Page(`${basePath}/components/progress-bars*`, 'Progress Bars', './components/progress-bar-page.js'),
	Page(`${basePath}/components/skeletons*`, 'Skeletons', './components/skeleton-page.js'),
	Page(`${basePath}/components/tooltips*`, 'Tooltips', './components/tooltip-page.js'),
	Page(`${basePath}/components/dropdown-menus*`, 'Dropdown Menus', './components/dropdown-menu-page.js'),
]);

export default DocumentationSwitch;
