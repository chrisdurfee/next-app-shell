import { A, Div, H2, H3, Img, P } from "@base-framework/atoms";
import { Jot } from "@base-framework/base";
import { Button } from "@components/atoms/buttons/buttons.js";
import { Skeleton } from "@components/atoms/skeleton.js";
import { Tooltip } from "@components/atoms/tooltip.js";
import { Icons } from "@components/icons/icons.js";
import { InlineNavigation } from "@components/organisms/navigation/inline-navigation.js";
import TabGroup from "@components/organisms/tabs/tab-group.js";
import { FullPage } from "@components/pages/full-page.js";

const PAGE_URL = 'music';

// Album list with cover images
const albumsList = [
    { src: 'https://upload.wikimedia.org/wikipedia/en/3/3b/Official_Album_Cover_of_%22The_Downward_Spiral%22_by_Nine_Inch_Nails.png', title: 'The Downward Spiral', artist: 'Nine Inch Nails' },
    { src: 'https://upload.wikimedia.org/wikipedia/en/7/7c/Nine_Inch_Nails_-_The_Fragile.png', title: 'The Fragile', artist: 'Nine Inch Nails' },
    { src: 'https://upload.wikimedia.org/wikipedia/en/f/f8/A.perfect.circle.mer.de.noms.jpg', title: 'Mer de Noms', artist: 'A Perfect Circle' },
    { src: 'https://upload.wikimedia.org/wikipedia/en/d/d8/Warpaint_-_Warpaint_album.jpg', title: 'Warpaint', artist: 'Warpaint' },
    //{ src: 'https://upload.wikimedia.org/wikipedia/en/4/41/A_Flourish_and_a_Spoil.jpg', title: 'A Flourish and a Spoil', artist: 'The Districts' },
    { src: 'https://upload.wikimedia.org/wikipedia/en/6/60/Coldplay_-_A_Rush_of_Blood_to_the_Head_Cover.png', title: 'A Rush of Blood to the Head', artist: 'Coldplay' },
    { src: 'https://upload.wikimedia.org/wikipedia/en/f/fd/Coldplay_-_Parachutes.png', title: 'Parachutes', artist: 'Coldplay' },
    { src: 'https://upload.wikimedia.org/wikipedia/en/b/ba/Radioheadokcomputer.png', title: 'OK Computer', artist: 'Radiohead' },
    { src: 'https://upload.wikimedia.org/wikipedia/en/9/9b/Tame_Impala_-_Currents.png', title: 'Currents', artist: 'Tame Impala' },
    { src: 'https://upload.wikimedia.org/wikipedia/en/8/81/Arcade_Fire_-_The_Suburbs.jpg', title: 'The Suburbs', artist: 'Arcade Fire' },
    { src: 'https://upload.wikimedia.org/wikipedia/en/1/1e/TheBoyWhoDiedWolf.jpg', title: 'The Boy Who Died Wolf', artist: 'Highly Suspect' },
    { src: 'https://upload.wikimedia.org/wikipedia/en/7/70/MIA_Matangi_Cover.png', title: 'Matangi', artist: 'M.I.A.' },
    { src: 'https://upload.wikimedia.org/wikipedia/en/f/f9/London_Grammar_-_If_You_Wait.png', title: 'If You Wait', artist: 'London Grammar' },
    //{ src: 'https://upload.wikimedia.org/wikipedia/en/b/b7/NirvanaNevermindalbumcover.jpg', title: 'Nevermind', artist: 'Nirvana' },
    { src: 'https://upload.wikimedia.org/wikipedia/en/8/80/TheOffspringSmashalbumcover.jpg', title: 'Smash', artist: 'The Offspring' },
    { src: 'https://upload.wikimedia.org/wikipedia/en/6/63/Tool_-_Lateralus.jpg', title: 'Lateralus', artist: 'Tool' },
    { src: 'https://upload.wikimedia.org/wikipedia/en/2/2f/Aenima.jpg', title: 'Ænima', artist: 'Tool' },
    { src: 'https://upload.wikimedia.org/wikipedia/en/2/2a/Linkin_Park_Hybrid_Theory_Album_Cover.jpg', title: 'Hybrid Theory', artist: 'Linkin Park' },
    { src: 'https://upload.wikimedia.org/wikipedia/en/2/29/BornToDieAlbumCover.png', title: 'Born to Die', artist: 'Lana Del Rey' }
];

// Utility function to shuffle and select a subset of albums
const getRandomAlbums = (count) => {
    return albumsList
        .sort(() => Math.random() - 0.5)
        .slice(0, count);
};

/**
 * Sidebar with Inline Navigation.
 *
 * @returns {object}
 */
const SidebarMenu = () => (
    Div({ class: 'pb-12 hidden lg:block p-6 border-r bg-sidebar h-full' }, [
        new InlineNavigation({
            options: [
                { label: 'Listen Now', href: `${PAGE_URL}/listen-now`, icon: Icons.playing },
                { label: 'Browse', href: `${PAGE_URL}/browse`, icon: Icons.square.grid },
                { label: 'Radio', href: `${PAGE_URL}/radio`, icon: Icons.signal },
                {
                    group: 'Library',
                    options: [
                        { label: 'Playlists', href: `${PAGE_URL}/playlists`, icon: Icons.list.down },
                        { label: 'Songs', href: `${PAGE_URL}/songs`, icon: Icons.music },
                        { label: 'Made for You', href: `${PAGE_URL}/made-for-you`, icon: Icons.user.default },
                        { label: 'Artists', href: `${PAGE_URL}/artists`, icon: Icons.speaker.default },
                        { label: 'Albums', href: `${PAGE_URL}/albums`, icon: Icons.square.stack }
                    ]
                }
            ]
        })
    ])
);

/**
 * LargeAlbumSkeleton
 *
 * A skeleton placeholder for large album cards.
 *
 * @returns {object}
 */
const LargeAlbumSkeleton = () => (
    Div({ class: 'space-y-2 w-[180px] md:w-[250px]' }, [
        Skeleton({ width: 'w-full', height: 'h-[300px]', shape: 'rectangle', class: 'rounded-md' }),
        Skeleton({ width: 'w-3/4', height: 'h-4', class: 'mt-2' }), // Placeholder for title
        Skeleton({ width: 'w-1/2', height: 'h-[14px]' }) // Placeholder for artist
    ])
);

/**
 * SmallAlbumSkeleton
 *
 * A skeleton placeholder for small album cards.
 *
 * @returns {object}
 */
const SmallAlbumSkeleton = () => (
    Div({ class: 'space-y-2 w-[150px]' }, [
        Skeleton({ width: 'w-full', height: 'h-[150px]', shape: 'square', class: 'rounded-md' }),
        Skeleton({ width: 'w-3/4', height: 'h-4', class: 'mt-2' }), // Placeholder for title
        Skeleton({ width: 'w-1/2', height: 'h-[14px]' }) // Placeholder for artist
    ])
);

/**
 * This will create an album card with a large cover image.
 *
 * @param {object} props
 * @returns {object}
 */
const LargeAlbumCard = ({ src, title, artist }) => (
    Div({ class: 'space-y-3 w-[180px] md:w-[250px]' }, [
        Div({
            class: 'overflow-hidden rounded-md'
        }, [
            A({ href: `${PAGE_URL}/album/${title.replace(/\s+/g, '-').toLowerCase()}` }, [
                Img({
                    src,
                    alt: title,
                    class: 'h-[300px] w-auto object-cover transition-all hover:scale-105 aspect-[3/4]'
                })
            ])
        ]),
        Div({ class: 'space-y-1 text-sm' }, [
            H3({ class: 'font-medium leading-none' }, title),
            P({ class: 'text-xs text-muted-foreground' }, artist)
        ])
    ])
);

/**
 * This will create an album card with a large cover image.
 *
 * @param {object} props
 * @returns {object}
 */
const SmallAlbumCard = ({ src, title, artist }) => (
    Div({ class: 'space-y-3 w-[150px]' }, [
        Div({
            class: 'overflow-hidden rounded-md'
        }, [
            A({ href: `${PAGE_URL}/album/${title.replace(/\s+/g, '-').toLowerCase()}` }, [
                Img({
                    src,
                    alt: title,
                    class: 'h-[150px] w-auto object-cover transition-all hover:scale-105 aspect-square'
                })
            ])
        ]),
        Div({ class: 'space-y-1 text-sm' }, [
            H3({ class: 'font-medium leading-none' }, title),
            P({ class: 'text-xs text-muted-foreground' }, artist)
        ])
    ])
);

/**
 * AlbumCardWithSkeleton
 *
 * Displays the skeleton placeholder while the album image loads.
 *
 * @class
 */
const AlbumCardWithSkeleton = Jot(
{
    state: { loaded: false },

    /**
     * This will load the image and set the loaded state to true.
     *
     * @returns {void}
     */
    loadImage()
    {
        const img = new Image();
        img.src = this.src;
        //img.onload = () => this.state.loaded = true
    },

    render()
    {
        const { src, title, artist, skeleton, albumCard } = this;
        this.loadImage();

        return Div({
            onState: ['loaded', (loaded) =>
            {
                if (!loaded)
                {
                    return skeleton();
                }

                return albumCard({
                    src,
                    title,
                    artist
                })
            }]
        });
    }
});

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
                albums.map(album => new AlbumCardWithSkeleton({
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
                ]),
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