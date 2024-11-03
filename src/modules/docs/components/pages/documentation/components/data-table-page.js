import { DataTable } from "@components/organisms/lists/data-table.js";
import { DocSection } from "../../../molecules/doc-section.js";
import { DocPage } from '../../doc-page.js';

const rows = [
    { id: 1, status: 'Success', email: 'ken99@yahoo.com', amount: 316.00, selected: false },
    { id: 2, status: 'Success', email: 'abe45@gmail.com', amount: 242.00, selected: false },
    { id: 3, status: 'Processing', email: 'monserrat44@gmail.com', amount: 837.00, selected: false },
    { id: 4, status: 'Success', email: 'silas22@gmail.com', amount: 874.00, selected: false },
    { id: 5, status: 'Failed', email: 'carmella@hotmail.com', amount: 721.00, selected: false },
    // Add more rows as needed
];

/**
 * DataTablePage
 *
 * This will create a data table page.
 *
 * @param {object} props
 * @param {object} children
 * @returns {DocPage}
 */
export const DataTablePage = () => (
	DocPage(
        {
            title: 'Data Tables',
            description: 'Data tables are used to display data in a structured format. They can be used to display a list of items, a grid of items, or a table of items.',
        },
        [
            DocSection({
                title: 'Usage',
                description: 'To use the Combobox component, import it from the components library and use it in your application.',
                preview: [
                    new DataTable({ rows }),
                ],
                code: `import { UserListItem } from "@components/organisms/lists/user-list.js";
import { List } from "@base-framework/organisms";

/**
 * User List Atom
 *
 * @param {object} props
 * @returns {object}
 */
const UserList = Atom((props) =>
{
    return new List({
        cache: 'list',
        key: 'name',
        items: [
        {
            name: 'Leslie Alexander',
            email: 'leslie.alexander@example.com',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            role: 'Co-Founder / CEO',
            lastSeen: '2023-01-23T13:23Z',
            status: 'offline'
        }],
        role: 'list',
        class: 'divide-y divide-border',
        rowItem: UserListItem
    });
});`
            })
        ]
    )
);

export default DataTablePage;