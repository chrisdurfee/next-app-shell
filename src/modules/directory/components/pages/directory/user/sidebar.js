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
		tapNav: Toolbar(),
		options: [
			{ label: 'Profile', href: `directory/users/${userId}`, icon: Icons.identification, exact: true },
			{ label: 'Schedule', href: `directory/users/${userId}/schedule`, icon: Icons.calendar.default },
			{ label: 'Documents', href: `directory/users/${userId}/documents`, icon: Icons.document.text },
			{ label: 'Notes', href: `directory/users/${userId}/notes`, icon: Icons.pencil.square },
			{ label: '1-on-1', href: `directory/users/${userId}/1-1`, icon: Icons.user.multiple },
			{ label: 'Analytics', href: `directory/users/${userId}/analytics`, icon: Icons.barChart },
			{ label: 'Posts', href: `directory/users/${userId}/posts`, icon: Icons.newspaper },
			{ label: 'Reviews', href: `directory/users/${userId}/reviews`, icon: Icons.folder.default },
		]
	})
);