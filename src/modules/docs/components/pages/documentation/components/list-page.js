import { Div, H4, P, Span } from "@base-framework/atoms";
import { List } from "@base-framework/organisms";
import { UserList, UserListItem } from "@components/organisms/lists/user-list.js";
import { DocSection } from "../../../molecules/doc-section.js";
import { DocPage } from '../../doc-page.js';

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
    }
];

/**
 * ListPage
 *
 * This will create a list page.
 *
 * @param {object} props
 * @param {object} children
 * @returns {DocPage}
 */
export const ListPage = () => (
	DocPage(
        {
            title: 'Lists',
            description: 'Lists are used to display a collection of items in a structured format. Each item can be customized to show different information.',
        },
        [
            DocSection({
                title: 'Usage',
                description: 'To use the List component, import it from the components library and use it in your application.',
                preview: [
                    UserList({ users }),
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

            H4({ class: 'text-lg font-bold mt-4' }, 'Performance'),
            P({ class: 'text-muted-foreground' }, 'The list will only update or re-render the items that have changed, improving performance. It uses a key to know when to update an item.'),

            DocSection({
                title: 'Row Dividers',
                description: 'You can add dividers between rows to separate them visually. The List component supports custom dividers and can be used to group items by date or other properties.',
                preview: [
                    new List({
                        key: 'id',
                        items: users,
                        role: 'list',
                        divider: {
                            itemProperty: 'name',
                            layout: (name) => (
                                Div({ class: "flex items-center justify-center mt-4" }, [
                                    Span({ class: "text-xs text-muted-foreground bg-background px-2" }, name[0])
                                ])
                            ),
                            customCompare: (lastValue, value) => lastValue[0] !== value[0]
                        },
                        class: 'flex flex-col gap-4 ',
                        rowItem: UserListItem
                    }),
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

export default ListPage;