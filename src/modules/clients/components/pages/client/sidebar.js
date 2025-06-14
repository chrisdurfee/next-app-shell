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
				backUrl: '/clients'
			}),
			H1({ class: 'scroll-m-20 text-3xl lg:text-2xl font-bold tracking-tight' }, 'Client Profile'),
		])
	])
);

/**
 * This will create the Sidebar.
 *
 * @param {object} props
 * @returns {object}
 */
export const Sidebar = ({ clientId }) => (
	SidebarMenu({
		tapNav: Toolbar(),
		options: [
			{ label: 'Profile', href: `clients/client/${clientId}`, icon: Icons.identification, exact: true },
			{ label: 'Schedule', href: `clients/client/${clientId}/schedule`, icon: Icons.calendar.default },
			{ label: 'Documents', href: `clients/client/${clientId}/documents`, icon: Icons.document.text },
			{ label: 'Notes', href: `clients/client/${clientId}/notes`, icon: Icons.pencil.square },
			{ label: '1-on-1', href: `clients/client/${clientId}/1-1`, icon: Icons.user.multiple },
			{ label: 'Analytics', href: `clients/client/${clientId}/analytics`, icon: Icons.barChart },
			{ label: 'Posts', href: `clients/client/${clientId}/posts`, icon: Icons.newspaper },
			{ label: 'Reviews', href: `clients/client/${clientId}/reviews`, icon: Icons.folder.default },
		]
	})
);