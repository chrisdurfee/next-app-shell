import { Div, H1, Header } from "@base-framework/atoms";
import { Button } from "@base-framework/ui/atoms";
import { TabNavigation } from "@base-framework/ui/organisms";
import { BlankPage } from "@base-framework/ui/pages";

/**
 * This will create the PageHeader molecule.
 *
 * @param {object} props
 * @returns {object}
 */
const PageHeader = (props) => (
	Header({ class: 'flex items-center justify-between pt-0 sm:pt-2 md:pt-0' }, [
		H1({ class: 'text-3xl font-bold' }, props.title),
		Div({ class: 'flex items-center gap-2' }, [
			Div({ class: 'hidden md:flex items-center gap-2' }, [
				Button({ variant: 'default' }, 'Download')
			])
		])
	])
);

/**
 * This will create the ListTabs molecule.
 *
 * @returns {object}
 */
const ListTabs = () => (
	Div({ class: 'justify-between flex flex-auto items-center' }, [
		new TabNavigation({
			options: [
				{ label: 'Item List', href: 'list', exact: true },
				{ label: 'Data Table', href: 'list/data-table' }
			],
			onSelect: (value) => console.log("Selected tab:", value)
		}),
	])
);

/**
 * ListPage
 *
 * This will create a list page.
 *
 * @returns {BlankPage}
 */
export const ListPage = () => (
	new BlankPage([
		Div({ class: 'grid grid-cols-1 p-6 pt-0 md:pt-6 lg:p-8 gap-y-4' }, [

			PageHeader({ title: 'List'}),
			ListTabs(),

			Div({
				switch: [
					{ uri: 'list', import: () => import('./item-list-page.js') },
					{ uri: 'list/data-table', import: () => import('./data-table-page.js') }
				]
			})
		])
	])
);

export default ListPage;