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
        Div({ class: 'grid grid-cols-1 lg:grid-cols-5 h-full lg:border-t' }, [
            SidebarMenu(),
            Div({ class: 'col-span-4 2xl:mx-auto 2xl:max-w-[1600px]' }, [
                MusicSections()
            ])
        ])
    ])
);

export default MusicPage;