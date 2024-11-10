import { Div } from "@base-framework/atoms";

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

    ])
);

export default SidebarMenu;