import { Div, H1, Header } from "@base-framework/atoms";
import { Button } from "@components/atoms/buttons/buttons.js";
import { Panel } from '@components/organisms/panel.js';
import { TabNavigation } from '@components/organisms/tabs/tab-navigation.js';
import { BlankPage } from '@components/pages/blank-page.js';
import { ItemListPage } from './item-list-page.js';

// Sample User Data (this could come from a backend or be passed as props)
const users = [
    {
        name: 'Leslie Alexander',
        email: 'leslie.alexander@example.com',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        role: 'Co-Founder / CEO',
        lastSeen: '2023-01-23T13:23Z',
        status: 'offline'
    },
    {
        name: 'Michael Foster',
        email: 'michael.foster@example.com',
        image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        role: 'Co-Founder / CTO',
        lastSeen: '2023-01-23T13:23Z',
        status: 'offline'
    },
    {
        name: 'Dries Vincent',
        email: 'dries.vincent@example.com',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        role: 'Business Relations',
        status: 'online'
    },
    {
        name: 'Leslie Alexander',
        email: 'leslie.alexander@example.com',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        role: 'Co-Founder / CEO',
        lastSeen: '2023-01-23T13:23Z',
        status: 'offline'
    },
    {
        name: 'Michael Foster',
        email: 'michael.foster@example.com',
        image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        role: 'Co-Founder / CTO',
        lastSeen: '2023-01-23T13:23Z',
        status: 'offline'
    },
    {
        name: 'Dries Vincent',
        email: 'dries.vincent@example.com',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        role: 'Business Relations',
        status: 'online'
    }
];

/**
 * This will create a tab panel.
 *
 * @param {object} props
 * @returns {object}
 */
const TabPanel = (props) =>
{
    return {
        label: props.label,
        href: props.link,
        component: new Panel({ class: 'p-8' }, props.children)
    };
};

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
                    { uri: 'list', component: SubRoute(ItemListPage()) }
                ]
            })
        ])
	])
);

export default ListPage;