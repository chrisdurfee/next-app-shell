import UserList from "../../../../components/organisms/lists/user-list.js";
import { Tab } from "../../../../components/organisms/tab.js";
import { Div } from "./../../../../components/atoms/atoms.js";
import { Panel } from './../../../../components/organisms/panel.js';
import { FullContainPage } from './../../../../components/pages/full-contain-page.js';

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
        component: new Panel(props.children)
    };
};

/**
 * FullContainPage
 *
 * This will create a full page.
 *
 * @returns {FullContainPage}
 */
export const MainFullContainPage = () => (
	new FullContainPage([
		Div({ class: 'contained' }, [
            new Tab({
                class: 'h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground grid w-full grid-cols-2',
                options: [
                    TabPanel({
                        label: 'Story',
                        link: 'full-contain/synopsis/story',
                        children: 'this would tell about the story'
                    }),
                    TabPanel({
                        label: 'Book',
                        link: 'full-contain/synopsis/book',
                        children: 'dud this come from a book?'
                    }),
                    TabPanel({
                        label: 'List',
                        link: 'full-contain/list',
                        children: [
                            UserList({ users })
                        ]
                    })
                ]
            })
		])
	])
);