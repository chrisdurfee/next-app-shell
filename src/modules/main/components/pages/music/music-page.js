import { Div, H2, P } from "@base-framework/atoms";
import { Button } from "@components/atoms/buttons/buttons.js";
import { Tooltip } from "@components/atoms/tooltip.js";
import { Icons } from "@components/icons/icons.js";
import TabGroup from "@components/organisms/tabs/tab-group.js";
import { FullPage } from "@components/pages/full-page.js";
import { AlbumCard, LargeAlbumCard, LargeAlbumSkeleton, SmallAlbumCard, SmallAlbumSkeleton } from "./album-cards.js";
import { getRandomAlbums } from "./albums.js";
import { SidebarMenu } from "./sidebar-menu.js";

/**
 * MusicSection
 *
 * Displays a section of music albums with skeleton placeholders.
 *
 * @param {object} props
 * @returns {object}
 */
const MusicSection = ({ title, description, albums, cardType = 'large' }) =>
{
    const skeletonComponent = cardType === 'large' ? LargeAlbumSkeleton : SmallAlbumSkeleton;
    const albumCard = cardType === 'large' ? LargeAlbumCard : SmallAlbumCard;

    return Div({ class: 'my-8' }, [
        H2({ class: 'text-2xl font-semibold tracking-tight' }, title),
        P({ class: 'text-sm text-muted-foreground mb-4' }, description),
        Div({ class: 'overflow-x-auto lg:overflow-x-none' }, [
            Div({ class: 'inline-flex space-x-4 pb-4' },
                albums.map(album => new AlbumCard({
                    src: album.src,
                    title: album.title,
                    artist: album.artist,
                    skeleton: skeletonComponent,
                    albumCard: albumCard
                }))
            )
        ])
    ]);
};

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