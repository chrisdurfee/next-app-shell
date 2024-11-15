import { Div, H1, Header } from "@base-framework/atoms";
import { InlineNavigation } from "../inline-navigation.js";

/**
 * Sidebar with Inline Navigation.
 *
 * @param {object} props
 * @returns {object}
 */
export const SidebarMenu = ({ title, options }) => (
    Div({ class: 'pb-12 hidden lg:block p-6 border-r bg-sidebar max-w-[300px] h-full' }, [
        title && Header({ class: 'pb-2 px-6 flex flex-col' }, [
            H1({ class: 'scroll-m-20 text-2xl font-bold tracking-tight' }, title),
        ]),
        new InlineNavigation({ options })
    ])
);

export default SidebarMenu;