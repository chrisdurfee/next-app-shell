import { Div } from "@base-framework/atoms";
import { Icons } from "@components/icons/icons.js";
import { InlineNavigation } from "@components/organisms/navigation/inline-navigation.js";

const PAGE_URL = 'calendar';

/**
 * SidebarMenu
 *
 * Displays the sidebar using the InlineNavigation component.
 *
 * @returns {object}
 */
export const SidebarMenu = () => (
    Div({ class: 'pb-12 hidden lg:block p-6 border-r bg-sidebar h-full' }, [
        new InlineNavigation({
            options: [
                { label: 'Home', href: `/home`, icon: Icons.home },
                { label: 'Music', href: `/music`, icon: Icons.music },
                { label: 'Calendar', href: `/calendar`, icon: Icons.calendar, active: true },
                { label: 'Reviews', href: `/reviews`, icon: Icons.star },
                { label: 'Docs', href: `/docs`, icon: Icons.book }
            ]
        })
    ])
);

export default SidebarMenu;