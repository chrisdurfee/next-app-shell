import { Div, H1, Header } from "@base-framework/atoms";
import { Button } from "@components/atoms/buttons/buttons.js";
import { Tooltip } from "@components/atoms/tooltip.js";
import { Icons } from "@components/icons/icons.js";
import TabGroup from "@components/organisms/tabs/tab-group.js";
import { BlankPage } from "@components/pages/blank-page.js";
import { getRandomAlbums } from "../albums.js";
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
        Div({ class: 'flex lg:hidden mr-4' }, [
            Tooltip({ content: 'Add music', position: 'left' }, Button({ variant: 'icon', icon: Icons.circlePlus }))
        ])
    ])
);

/**
 * MusicSections
 *
 * The main content sections for the music page.
 *
 * @returns {object}
 */
const MusicSections = () => (
    Div({ class: 'col-span-4 2xl:mx-auto 2xl:max-w-[1600px]' }, [
        Header({ class: 'sm:py-4 sm:pb-0 px-6 flex flex-col lg:hidden' }, [
            H1({ class: 'scroll-m-20 text-3xl font-bold tracking-tight' }, 'Discover'),
        ]),
        Div({ class: 'p-6 px-6 pr-0 md:pr-4 py-6 lg:px-8'}, [
            MusicHeader(),
            MusicSection({
                title: 'Listen Now',
                description: 'Top picks for you. Updated daily.',
                albums: getRandomAlbums(5),
                cardType: 'large'
            }),
            MusicSection({
                title: 'Made for You',
                description: 'Your personal playlists. Updated daily.',
                albums: getRandomAlbums(8),
                cardType: 'small'
            }),
            MusicSection({
                title: 'Recently Played',
                description: 'Your recently played albums and playlists.',
                albums: getRandomAlbums(8),
                cardType: 'small'
            }),
            MusicSection({
                title: 'Popular Playlists',
                description: 'Popular playlists from around the world.',
                albums: getRandomAlbums(8),
                cardType: 'small'
            }),
            MusicSection({
                title: 'New Releases',
                description: 'New albums and singles from your favorite artists.',
                albums: getRandomAlbums(8),
                cardType: 'small'
            }),
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