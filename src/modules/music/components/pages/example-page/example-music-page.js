import { Div, H2, H3, Img, P } from "@base-framework/atoms";
import { Button, Tooltip } from "@base-framework/ui/atoms";
import { Icons } from "@base-framework/ui/icons";
import { InlineNavigation, TabGroup } from "@base-framework/ui/organisms";
import { FullPage } from "@base-framework/ui/pages";

const PAGE_URL = 'music';

/**
 * Sidebar with Inline Navigation
 *
 * This component displays the sidebar using the InlineNavigation component.
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
                },
                {
                    group: 'Playlists',
                    options: [
                        { label: 'Recently Added', href: `${PAGE_URL}/recently-added`, icon: Icons.list.down },
                        { label: 'Recently Played', href: `${PAGE_URL}/recently-played`, icon: Icons.list.down },
                        { label: 'Top Songs', href: `${PAGE_URL}/top-songs`, icon: Icons.list.down },
                        { label: 'Top Albums', href: `${PAGE_URL}/top-albums`, icon: Icons.list.down }
                    ]
                }
            ]
        })
    ])
);

/**
 * AlbumCard
 *
 * Displays an album cover with artist and title.
 *
 * @param {object} props
 * @returns {object}
 */
const LargeAlbumCard = ({ src, title, artist }) => (
    Div({ class: 'gap-y-3 w-[180px] md:w-[250px]' }, [
        Div({ class: 'overflow-hidden rounded-md' }, [
            Img({ src, alt: title, class: 'h-auto w-auto object-cover transition-all hover:scale-105 aspect-3/4' }),
        ]),
        Div({ class: 'gap-y-1 text-sm' }, [
            H3({ class: 'font-medium leading-none' }, title),
            P({ class: 'text-xs text-muted-foreground' }, artist)
        ])
    ])
);

/**
 * AlbumCard
 *
 * Displays an album cover with artist and title.
 *
 * @param {object} props
 * @returns {object}
 */
const SmallAlbumCard = ({ src, title, artist }) => (
    Div({ class: 'gap-y-3 w-[150px]' }, [
        Div({ class: 'overflow-hidden rounded-md' }, [
            Img({ src, alt: title, class: 'h-auto w-auto object-cover transition-all hover:scale-105 aspect-square' }),
        ]),
        Div({ class: 'gap-y-1 text-sm' }, [
            H3({ class: 'font-medium leading-none' }, title),
            P({ class: 'text-xs text-muted-foreground' }, artist)
        ])
    ])
);

/**
 * MusicSection
 *
 * Displays a section of music albums or playlists in a responsive grid.
 *
 * @param {object} props
 * @returns {object}
 */
const MusicSection = ({ title, description, albums, card = LargeAlbumCard }) => (
    Div({ class: 'my-8' }, [
        H2({ class: 'text-2xl font-semibold tracking-tight' }, title),
        P({ class: 'text-sm text-muted-foreground mb-4' }, description),
        Div({ class: 'overflow-x-auto lg:overflow-x-none' }, [
            Div({ class: 'inline-flex gap-x-4 pb-4' }, // Adjusted gap for spacing consistency
                albums.map(album => card(album))
            )
        ])
    ])
);

/**
 * MusicPage
 *
 * The main page layout combining sidebar, tabs, and content sections.
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
                    // Add music button
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
                    albums: [
                        { src: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80', title: 'React Rendezvous', artist: 'Ethan Byte' },
                        { src: 'https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80', title: 'Async Awakenings', artist: 'Nina Netcode' },
                        { src: 'https://images.unsplash.com/photo-1528143358888-6d3c7f67bd5d?w=300&dpr=2&q=80', title: 'The Art of Reusability', artist: 'Lena Logic' },
                        { src: 'https://images.unsplash.com/photo-1490300472339-79e4adc6be4a?w=300&dpr=2&q=80', title: 'Stateful Symphony', artist: 'Beth Binary' }
                    ]
                }),
                MusicSection({
                    title: 'Made for You',
                    description: 'Your personal playlists. Updated daily.',
                    card: SmallAlbumCard,
                    albums: [
                        { src: 'https://images.unsplash.com/photo-1615247001958-f4bc92fa6a4a?w=300&dpr=2&q=80', title: 'Thinking Components', artist: 'Lena Logic' },
                        { src: 'https://images.unsplash.com/photo-1513745405825-efaf9a49315f?w=300&dpr=2&q=80', title: 'Functional Fury', artist: 'Beth Binary' },
                        { src: 'https://images.unsplash.com/photo-1614113489855-66422ad300a4?w=300&dpr=2&q=80', title: 'React Rendezvous', artist: 'Ethan Byte' },
                        { src: 'https://images.unsplash.com/photo-1446185250204-f94591f7d702?w=300&dpr=2&q=80', title: 'Stateful Symphony', artist: 'Beth Binary' },
                        { src: 'https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80', title: 'Async Awakenings', artist: 'Nina Netcode' },
                        { src: 'https://images.unsplash.com/photo-1528143358888-6d3c7f67bd5d?w=300&dpr=2&q=80', title: 'The Art of Reusability', artist: 'Lena Logic' },
                    ]
                }),
                MusicSection({
                    title: 'Recently Played',
                    description: 'Your recently played albums and playlists.',
                    card: SmallAlbumCard,
                    albums: [
                        { src: 'https://images.unsplash.com/photo-1615247001958-f4bc92fa6a4a?w=300&dpr=2&q=80', title: 'Thinking Components', artist: 'Lena Logic' },
                        { src: 'https://images.unsplash.com/photo-1513745405825-efaf9a49315f?w=300&dpr=2&q=80', title: 'Functional Fury', artist: 'Beth Binary' },
                        { src: 'https://images.unsplash.com/photo-1614113489855-66422ad300a4?w=300&dpr=2&q=80', title: 'React Rendezvous', artist: 'Ethan Byte' },
                        { src: 'https://images.unsplash.com/photo-1446185250204-f94591f7d702?w=300&dpr=2&q=80', title: 'Stateful Symphony', artist: 'Beth Binary' },
                        { src: 'https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80', title: 'Async Awakenings', artist: 'Nina Netcode' },
                        { src: 'https://images.unsplash.com/photo-1528143358888-6d3c7f67bd5d?w=300&dpr=2&q=80', title: 'The Art of Reusability', artist: 'Lena Logic' },
                    ]
                })
            ])
        ])
    ])
);

export default MusicPage;