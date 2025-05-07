import { Icons } from "@base-framework/ui/icons";
import { Confirmation } from "@base-framework/ui/molecules";
import { SidebarMenu } from "./sidebar-menu.js";

/**
 * This will create the Sidebar.
 *
 * @returns {object}
 */
export const Sidebar = () =>(
	SidebarMenu({
		title: 'Settings',
		options: [
			{ label: 'Profile', href: 'settings/profile', icon: Icons.user.default, exact: true },
			{ label: 'Account', href: 'settings/account', icon: Icons.locked },
			{ label: 'Appearance', href: 'settings/appearance', icon: Icons.sun },
			{ label: 'Notifications', href: 'settings/notifications', icon: Icons.bell.default },
			{ label: 'Display', href: 'settings/display', icon: Icons.window },
			{ label: 'Sign Out', icon: Icons.signOut, callBack: () => {

				new Confirmation({
					icon: Icons.signOut,
					type: 'destructive',
					title: 'Are you absolutely sure?',
					description: 'This will sign you out of the application.',
					confirmTextLabel: 'Sign Out',
					confirmed: () => app.signOut()
				}).open()
			} }
		]
	})
);