import { Div, H1, Header } from "@base-framework/atoms";
import { Button } from "@base-framework/ui/atoms";
import { Icons } from "@base-framework/ui/icons";
import { DatePicker } from "@base-framework/ui/molecules";
import { TabNavigation } from "@base-framework/ui/organisms";
import { Page } from "@base-framework/ui/pages";

/**
 * This will create the DashboardHeader molecule.
 *
 * @returns {object}
 */
const DashboardHeader = () => (
	Header({ class: 'flex items-center justify-between' }, [
		H1({ class: 'text-3xl font-bold' }, 'Dashboard'),
		Div({ class: 'flex items-center gap-2' }, [
			new DatePicker({ label: 'Pick a date', icon: Icons.calendar }),
			Div({ class: 'hidden md:flex items-center gap-2' }, [
				Button({ variant: 'default' }, 'Download')
			])
		])
	])
);

/**
 * This will create the DashboardTabs molecule.
 *
 * @returns {object}
 */
const DashboardTabs = () => (
	Div({ class: 'justify-between flex flex-auto items-center' }, [
		new TabNavigation({
			options: [
				{ label: 'Overview', href: 'dashboard', exact: true },
				{ label: 'Analytics', href: 'dashboard/overview/analytics' }
			],
			onSelect: (value) => console.log("Selected tab:", value)
		}),
	])
);

/**
 * This will create the DashboardOverview molecule.
 *
 * @returns {object}
 */
export const DashboardOverview = () => (
	new Page([
		Div({ class: 'grid grid-cols-1 p-6 pt-0 sm:pt-6 lg:p-8 space-y-4' }, [

			DashboardHeader(),
			DashboardTabs(),

			Div({
				switch: [
					{ uri: 'dashboard', import: import('./dashboards/overview/overview-dashboard.js') },
					{ uri: 'dashboard/overview/analytics', import: import('./dashboards/analytics/analytics-dashboard.js') }
				]
			})
		])
	])
);

export default DashboardOverview;