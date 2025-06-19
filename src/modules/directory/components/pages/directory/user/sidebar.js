import { Div, H1, Header } from "@base-framework/atoms";
import { Icons } from "@base-framework/ui/icons";
import { BackButton } from "@base-framework/ui/organisms";
import { SidebarMenu } from "./sidebar-menu.js";

/**
 * Toolbar
 *
 * Displays a back button in the toolbar.
 *
 * @returns {object}
 */
const Toolbar = () => (
	Div({ class: "flex w-full items-center justify-between pb-2 mt-2 pl-2" }, [
		Header({ class: 'flex space-x-4' }, [
			BackButton({
				margin: 'm-0 ml-0',
				backUrl: '/directory'
			}),
			H1({ class: 'scroll-m-20 text-3xl lg:text-2xl font-bold tracking-tight' }, 'User Profile'),
		])
	])
);

/**
 * This will create the Sidebar.
 *
 * @param {object} props
 * @returns {object}
 */
export const Sidebar = ({ userId }) => (
	SidebarMenu({
		topNav: Toolbar(),
		options: [
			{ label: 'Profile', href: `directory/user/${userId}`, icon: Icons.identification, exact: true },
			{ label: 'Schedule', href: `directory/user/${userId}/schedule`, icon: Icons.calendar.default },
			{ label: 'Documents', href: `directory/user/${userId}/documents`, icon: Icons.document.text },
			{ label: 'Notes', href: `directory/user/${userId}/notes`, icon: Icons.pencil.square },
			{ label: '1-on-1', href: `directory/user/${userId}/one-on-one`, icon: Icons.user.multiple, exact: false },
			{ label: 'Analytics', href: `directory/user/${userId}/analytics`, icon: Icons.barChart },
			{ label: 'Posts', href: `directory/user/${userId}/posts`, icon: Icons.newspaper },
			{ label: 'Reviews', href: `directory/user/${userId}/reviews`, icon: Icons.folder.default },
		]
	})
);