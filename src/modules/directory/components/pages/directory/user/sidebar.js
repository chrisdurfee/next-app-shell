import { Div, H1, Header, On, Span } from "@base-framework/atoms";
import { Skeleton } from "@base-framework/ui/atoms";
import { Icons } from "@base-framework/ui/icons";
import { Avatar } from "@base-framework/ui/molecules";
import { BackButton } from "@base-framework/ui/organisms";
import { SidebarMenu } from "./sidebar-menu.js";

/**
 * Displays the user's avatar and name in a styled container.
 *
 * @returns {object}
 */
const UserDetails = () => (
	Div({ class: "flex items-center space-x-4 border rounded-md p-2" }, [
		Avatar({ src: '[[user.image]]', alt: '[[user.firstName]] [[user.lastName]]', watcherFallback: '[[user.firstName]] [[user.lastName]]', size: "sm" }),
		Div({ class: "flex flex-auto flex-col" }, [
			Span({ class: "text-sm truncate" }, '[[user.firstName]]'),
			Span({ class: "text-xs truncate text-muted-foreground" }, '[[user.lastName]]'),
		])
	])
);

/**
 * Displays a skeleton loader for user details.
 *
 *  @returns {object}
 */
const UserDetailsSkeleton = () => (
	Div({ class: "flex items-center space-x-4 border rounded-md p-2" }, [
		Skeleton({ width: "w-9", height: "h-9", shape: "circle" }),
		Div({ class: "flex flex-auto flex-col space-y-1" }, [
			Skeleton({ width: "w-32", height: "h-3" }),
			Skeleton({ width: "w-40", height: "h-3" }),
		])
	])
);

/**
 * Displays the user's avatar and name in a styled container.
 *
 * @returns {object}
 */
const UserAvatar = () => (
	On('loaded', (value =>
	{
		return (!value)
			? UserDetailsSkeleton()
			: UserDetails();
	}))
);

/**
 * Toolbar
 *
 * Displays a back button in the toolbar.
 *
 * @returns {object}
 */
const Toolbar = () => (
	Div({ class: "flex w-full flex-col space-y-8 pb-2 mt-2 pl-2" }, [
		Div({ class: "flex items-center justify-between" }, [
			Header({ class: 'flex space-x-4' }, [
				BackButton({
					margin: 'm-0 ml-0',
					backUrl: '/directory'
				}),
				H1({ class: 'scroll-m-20 text-3xl lg:text-2xl font-bold tracking-tight' }, 'User Profile'),
			])
		]),
		UserAvatar()
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