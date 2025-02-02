import { Div } from "@base-framework/atoms";
import { Button } from "@base-framework/ui/atoms";
import { UserList } from '@base-framework/ui/organisms';
import { Page } from "@base-framework/ui/pages";

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

const mingleUsers = [
    {
        name: 'Michael Foster',
        email: 'michael.foster@google.com',
        image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        role: 'Co-Founder / CTO',
        lastSeen: '2023-01-23T13:23Z',
        status: 'online'
    },
    {
        name: 'Leslie Alexander',
        email: 'leslie.alexander@example.com',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        role: 'Co-Founder / CEO',
        lastSeen: '2023-01-23T13:23Z',
        status: 'online'
    }
];

/**
 * ItemListPage
 *
 * This will create an item list page.
 *
 * @returns {Page}
 */
export const ItemListPage = () => (
	new Page([
        Div({ class: 'flex flex-auto flex-col' }, [
            Div({ class: 'flex flex-auto flex-col mb-2' }, [
                Div({ class: 'flex flex-auto flex-row gap-2' }, [
                    Button({ variant: 'outline', click: (e, parent) => parent.list.prepend(users) }, 'Prepend'),
                    Button({ variant: 'outline', click: (e, parent) => parent.list.append(users) }, 'Append'),
                    Button({ variant: 'outline', click: (e, parent) => parent.list.mingle(mingleUsers) }, 'Mingle'),
                ])
            ]),
            UserList({ users })
        ])
    ])
);

export default ItemListPage;