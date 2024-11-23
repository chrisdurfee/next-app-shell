import { Div } from "@base-framework/atoms";
import { BlankPage } from "@components/pages/blank-page.js";
import { MusicSections } from "./music-sections.js";
import { SidebarMenu } from "./sidebar-menu.js";

/**
 * MusicPage
 *
 * The main page layout combining sidebar, tabs, and content sections.
 *
 * @returns {object}
 */
export const MusicPage = () => (
    new BlankPage([
        Div({ class: 'grid grid-cols-1 lg:grid-cols-5 h-full' }, [
            SidebarMenu(),
            Div({ class: 'col-span-4' }, [
                MusicSections()
            ])
        ])
    ])
);

export default MusicPage;