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
			{ label: 'Profile', href: `directory/users/${userId}`, icon: Icons.user.default, exact: true },
			{ label: 'Account', href: `directory/users/${userId}/account`, icon: Icons.locked },
			{ label: 'Appearance', href: `directory/users/${userId}/appearance`, icon: Icons.sun },
			{ label: 'Notifications', href: `directory/users/${userId}/notifications`, icon: Icons.bell.default },
			{ label: 'Display', href: `directory/users/${userId}/display`, icon: Icons.window }
		]
	})
);