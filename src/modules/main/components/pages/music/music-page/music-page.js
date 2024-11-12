import { Div } from "@base-framework/atoms";
import { Button } from "@components/atoms/buttons/buttons.js";
import { Tooltip } from "@components/atoms/tooltip.js";
import { Icons } from "@components/icons/icons.js";
import TabGroup from "@components/organisms/tabs/tab-group.js";
import { BlankPage } from "@components/pages/blank-page.js";
import { MusicSections } from "./music-sections.js";
import { SidebarMenu } from "./sidebar-menu.js";

/**
 * This will create a music header with tabs and add music button.
 *
 * @returns {object}
 */
const MusicHeader = () => (
    Div({ class: 'justify-between flex flex-auto items-center' }, [
        new TabGroup({
            options: [
                { label: 'Music', value: 'music' },
                { label: 'Podcasts', value: 'podcasts' },
                { label: 'Live', value: 'live', disabled: true }
            ],
            onSelect: (value, { state }) => state.mode = value
        }),
        Div({ class: 'hidden lg:inline-flex' }, [
            Button({ variant: 'withIcon', class: 'text-muted-foreground mb-8 hidden', icon: Icons.circlePlus }, 'Add music'),
        ]),
        Div({ class: 'flex lg:hidden mr-4' }, [
            Tooltip({ content: 'Add music', position: 'left' }, Button({ variant: 'icon', icon: Icons.circlePlus }))
        ])
    ])
);

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