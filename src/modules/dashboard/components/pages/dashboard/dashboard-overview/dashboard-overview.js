import { Div, H1, Header } from "@base-framework/atoms";
import { Button } from "@base-framework/ui/atoms";
import { DateRangePicker } from "@base-framework/ui/molecules";
import { TabNavigation } from "@base-framework/ui/organisms";
import { Page } from "@base-framework/ui/pages";

/**
 * Get the start or end date of the current month.
 *
 * @param {string} type - The type of date to get ('start' or 'end').
 * @returns {string} - The start or end date of the current month.
 */
const getDate = (type = 'start') =>
{
	const date = new Date();
	// Set the date to the start or end of the month
	if (type === 'start')
	{
		date.setDate(1);
		date.setHours(0, 0, 0, 0);
	}
	else
	{
		date.setMonth(date.getMonth() + 1);
		date.setDate(0);
	}

	return date.toISOString().slice(0, 10);
};

/**
 * This will create the DashboardHeader molecule.
 *
 * @returns {object}
 */
const DashboardHeader = () => (
	Header({ class: 'flex items-center justify-between' }, [
		H1({ class: 'text-3xl font-bold' }, 'Dashboard'),
		Div({ class: 'flex items-center gap-2' }, [
			new DateRangePicker({
				start: getDate('start'),
				end: getDate('end')
			}),
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
		Div({ class: 'grid grid-cols-1 p-6 pt-0 sm:pt-6 lg:p-8 gap-y-4' }, [

			DashboardHeader(),
			DashboardTabs(),

			Div({
				switch: [
					{ uri: 'dashboard', import: () => import('./dashboards/overview/overview-dashboard.js') },
					{ uri: 'dashboard/overview/analytics', import: () => import('./dashboards/analytics/analytics-dashboard.js') }
				]
			})
		])
	])
);

export default DashboardOverview;