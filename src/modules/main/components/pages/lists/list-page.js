import { Div, H1, Header } from "@base-framework/atoms";
import { Button } from "@components/atoms/buttons/buttons.js";
import { Panel } from '@components/organisms/panel.js';
import { TabNavigation } from '@components/organisms/tabs/tab-navigation.js';
import { BlankPage } from '@components/pages/blank-page.js';
import { ItemListPage } from './item-list-page.js';
import { DataTablePage } from './data-table-page.js';

/**
 * This will create the PageHeader molecule.
 *
 * @param {object} props
 * @returns {object}
 */
const PageHeader = (props) => (
    Header({ class: 'flex items-center justify-between' }, [
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
 * This will wrap the atom in a panel.
 *
 * @param {object} atom
 * @returns {object}
 */
const SubRoute = (atom) => new Panel(atom);

/**
 * ListPage
 *
 * This will create a list page.
 *
 * @returns {BlankPage}
 */
export const ListPage = () => (
	new BlankPage([
        Div({ class: 'grid grid-cols-1 p-6 pt-0 md:pt-6 lg:p-8 space-y-4' }, [

            PageHeader({ title: 'List'}),
            ListTabs(),

            Div({
                switch: [
                    { uri: 'list', component: SubRoute(ItemListPage()) },
                    { uri: 'list/data-table', component: SubRoute(DataTablePage()) }
                ]
            })
        ])
	])
);

export default ListPage;