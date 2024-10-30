import { H4, P } from "@base-framework/atoms";
import { Breadcrumb } from "@components/molecules/breadcrumb/breadcrumb.js";
import { DocSection } from "../../../../molecules/doc-section.js";
import { DocPage } from '../../../doc-page.js';

const items = [
    { href: '/', label: 'Home' },
    { href: '/components', label: 'Components' },
    { label: 'Breadcrumb' } // Last item, no href needed
];

/**
 * BreadcrumbPage
 *
 * This will create a breadcrumb page.
 *
 * @param {object} props
 * @param {object} children
 * @returns {DocPage}
 */
export const BreadcrumbPage = () => (
	DocPage(
        {
            title: 'Comboboxes',
            description: 'Comboboxes are used to allow users to select an option from a dropdown list or enter a custom value.',
        },
        [
            DocSection({
                title: 'Usage',
                description: 'To use the Combobox component, import it from the components library and use it in your application.',
                preview: [
                    new Breadcrumb( { items } ),
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
            }),

            H4({ class: 'text-lg font-bold' }, 'Description'),
            P({ class: 'text-muted-foreground' }, 'The List component can be used to display a list of items in a structured format. Each item can be customized to show different information. The List component supports appending, prepending, mingling, and deleting or items. '),

            H4({ class: 'text-lg font-bold' }, 'Performance'),
            P({ class: 'text-muted-foreground' }, 'The list will only update or re-render the items that have changed, improving performance. It uses a key to know when to update an item.'),
        ]
    )
);

export default BreadcrumbPage;