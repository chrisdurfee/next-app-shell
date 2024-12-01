import { SidebarMenu as BaseSidebarMenu } from "@components/organisms/navigation/sidebar-menu/sidebar-menu.js";

/**
 * SidebarMenu for the Settings Page
 *
 * @param {object} props
 * @returns {object}
 */
export const SidebarMenu = (props) => (
    BaseSidebarMenu({
        title: props.title,
        options: props.options,
        class: 'lg:block w-full'
    })
);

export default SidebarMenu;