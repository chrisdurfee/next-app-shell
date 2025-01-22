import { Icons } from "@base-framework/ui/icons";
import { SidebarMenu as BaseSidebarMenu } from "@base-framework/ui/organisms";

const PAGE_URL = 'music';

/**
 * Sidebar with Inline Navigation.
 *
 * @returns {object}
 */
export const SidebarMenu = () => (
	BaseSidebarMenu({
		title: 'Discover',
		class: 'hidden lg:block w-64 flex-shrink-0',
		options: [
			{ label: 'Listen Now', href: `${PAGE_URL}`, icon: Icons.playing, exact: true },
			{ label: 'Browse', href: `${PAGE_URL}/browse`, icon: Icons.square.grid },
			{ label: 'Radio', href: `${PAGE_URL}/radio`, icon: Icons.signal },
			{
				group: 'Library',
				options: [
					{ label: 'Playlists', href: `${PAGE_URL}/playlists`, icon: Icons.list.down },
					{ label: 'Songs', href: `${PAGE_URL}/songs`, icon: Icons.music },
					{ label: 'Made for You', href: `${PAGE_URL}/made-for-you`, icon: Icons.user.default },
					{ label: 'Artists', href: `${PAGE_URL}/artists`, icon: Icons.speaker.default },
					{ label: 'Albums', href: `${PAGE_URL}/albums`, icon: Icons.square.stack }
				]
			},
			{
				group: 'Playlists',
				options: [
					{ label: 'Recently Added', href: `${PAGE_URL}/recently-added`, icon: Icons.list.down },
					{ label: 'Recently Played', href: `${PAGE_URL}/recently-played`, icon: Icons.list.down },
					{ label: 'Top Songs', href: `${PAGE_URL}/top-songs`, icon: Icons.list.down },
					{ label: 'Top Albums', href: `${PAGE_URL}/top-albums`, icon: Icons.list.down }
				]
			}
		]
	})
);

export default SidebarMenu;