import { Div } from "@base-framework/atoms";
import { Panel } from "@base-framework/ui/organisms";
import { BlankPage } from "@base-framework/ui/pages";
import { BrowsePage } from "./browse/browse-page.js";
import { ListenPage } from "./listen/listen-page.js";
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
        Div({ class: 'flex flex-auto flex-col lg:flex-row max-w-[100vw] h-full' }, [
            SidebarMenu(),
            Div({
                class: 'flex flex-auto flex-col',
                switch: [
                    {
                        uri: 'music',
                        component: new Panel([
                            ListenPage()
                        ])
                    },
                    {
                        uri: 'music/browse',
                        component: BrowsePage
                    }
                ]
            })
        ])
    ])
);

export default MusicPage;