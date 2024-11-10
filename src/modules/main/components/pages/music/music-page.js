import { Div } from "@base-framework/atoms";
import { Button } from "@components/atoms/buttons/buttons.js";
import { Tooltip } from "@components/atoms/tooltip.js";
import { Icons } from "@components/icons/icons.js";
import TabGroup from "@components/organisms/tabs/tab-group.js";
import { FullPage } from "@components/pages/full-page.js";
import { getRandomAlbums } from "./albums.js";
import { MusicSection } from "./music-section.js";
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
                { label: 'Live', value: 'live' }
            ]
        }),
        Div({ class: 'hidden lg:inline-flex' }, [
            Button({ variant: 'withIcon', class: 'text-muted-foreground mb-8 hidden', icon: Icons.circlePlus }, 'Add music'),
        ]),
        Div({ class: 'flex lg:hidden' }, [
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
    new FullPage({ title: 'Discover' }, [
        Div({ class: 'grid grid-cols-1 lg:grid-cols-5 h-full lg:border-t' }, [
            SidebarMenu(),
            Div({ class: 'col-span-4 p-6 px-4 py-6 lg:px-8 2xl:mx-auto 2xl:max-w-[1600px]' }, [
                MusicHeader(),
                MusicSection({
                    title: 'Listen Now',
                    description: 'Top picks for you. Updated daily.',
                    albums: getRandomAlbums(4),
                    cardType: 'large'
                }),
                MusicSection({
                    title: 'Made for You',
                    description: 'Your personal playlists. Updated daily.',
                    albums: getRandomAlbums(6),
                    cardType: 'small'
                }),
                MusicSection({
                    title: 'Recently Played',
                    description: 'Your recently played albums and playlists.',
                    albums: getRandomAlbums(6),
                    cardType: 'small'
                })
            ])
        ])
    ])
);

export default MusicPage;