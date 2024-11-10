import { Div } from "@base-framework/atoms";
import { Icons } from "@components/icons/icons.js";
import { InlineNavigation } from "@components/organisms/navigation/inline-navigation.js";

const PAGE_URL = 'music';

/**
 * Sidebar with Inline Navigation.
 *
 * @returns {object}
 */
export const SidebarMenu = () => (
    Div({ class: 'pb-12 hidden lg:block p-6 border-r bg-sidebar h-full' }, [
        new InlineNavigation({
            options: [
                { label: 'Listen Now', href: `${PAGE_URL}/listen-now`, icon: Icons.playing },
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
                }
            ]
        })
    ])
);

export default SidebarMenu;