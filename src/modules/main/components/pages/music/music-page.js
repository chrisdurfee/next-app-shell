import { Div, H2, H3, Img, P, Span } from "@base-framework/atoms";
import { Atom } from "@base-framework/base";
import { Button } from "@components/atoms/buttons/buttons.js";
import { Icons } from "@components/icons/icons.js";
import { InlineNavigation } from "@components/organisms/navigation/inline-navigation.js";
import { ButtonTab } from "@components/organisms/tabs/button-tab.js";
import { FullPage } from "@components/pages/full-page.js";

const PAGE_URL = 'music';

/**
 * Sidebar with Inline Navigation
 *
 * This component displays the sidebar using the InlineNavigation component.
 */
const SidebarMenu = () => (
    Div({ class: 'pb-12 hidden lg:block p-6 border-r bg-sidebar h-full' }, [
        new InlineNavigation({
            options: [
                {
                    group: 'Discover',
                    options: [
                        { label: 'Listen Now', href: `${PAGE_URL}/listen-now`, icon: Icons.playing },
                        { label: 'Browse', href: `${PAGE_URL}/browse`, icon: Icons.square.grid },
                        { label: 'Radio', href: `${PAGE_URL}/radio`, icon: Icons.signal }
                    ]
                },
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
 */
const AlbumCard = ({ src, title, artist }) => (
    Div({ class: 'space-y-3 w-[250px]' }, [
        Div({ class: 'overflow-hidden rounded-md' }, [
            Img({ src, alt: title, class: 'h-auto w-auto object-cover transition-all hover:scale-105 aspect-[3/4]' }),
        ]),
        Div({ class: 'space-y-1 text-sm' }, [
            H3({ class: 'font-medium leading-none' }, title),
            P({ class: 'text-xs text-muted-foreground' }, artist)
        ])
    ])
);

/**
 * MusicSection
 *
 * Displays a section of music albums or playlists in a responsive grid.
 */
const MusicSection = ({ title, description, albums }) => (
    Div({ class: 'mb-8' }, [
        H2({ class: 'text-2xl font-semibold tracking-tight' }, title),
        P({ class: 'text-sm text-muted-foreground mb-4' }, description),
        Div({ class: 'flex space-x-4 pb-4' }, // Adjusted gap for spacing consistency
            albums.map(album => AlbumCard(album))
        )
    ])
);

/**
 * TabContent Component
 *
 * A simple container for the tab content.
 */
const TabContent = Atom((props, children) => (
    Div({ class: 'py-4' }, children)
));

/**
 * MusicPage
 *
 * The main page layout combining sidebar, tabs, and content sections.
 */
export const MusicPage = () => (
    new FullPage({ title: 'Music' }, [
        Div({ class: 'grid grid-cols-1 lg:grid-cols-5 h-full border-t' }, [
            SidebarMenu(),
            Div({ class: 'col-span-4 p-6 lg:border-l bg-background overflow-y-auto' }, [
                // ButtonTab for Music, Podcasts, and Live
                new ButtonTab({
                    class: 'mb-6',
                    options: [
                        {
                            label: 'Music',
                            value: 'music',
                            layout: TabContent({}, [
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
                                    albums: [
                                        { src: 'https://images.unsplash.com/photo-1615247001958-f4bc92fa6a4a?w=300&dpr=2&q=80', title: 'Thinking Components', artist: 'Lena Logic' },
                                        { src: 'https://images.unsplash.com/photo-1513745405825-efaf9a49315f?w=300&dpr=2&q=80', title: 'Functional Fury', artist: 'Beth Binary' },
                                        { src: 'https://images.unsplash.com/photo-1614113489855-66422ad300a4?w=300&dpr=2&q=80', title: 'React Rendezvous', artist: 'Ethan Byte' },
                                        { src: 'https://images.unsplash.com/photo-1446185250204-f94591f7d702?w=300&dpr=2&q=80', title: 'Stateful Symphony', artist: 'Beth Binary' }
                                    ]
                                })
                            ])
                        },
                        {
                            label: 'Podcasts',
                            value: 'podcasts',
                            layout: TabContent({}, [
                                H2({ class: 'text-xl font-semibold text-foreground mb-2' }, 'Popular Podcasts'),
                                P({ class: 'text-sm text-muted-foreground mb-4' }, 'Listen to popular podcasts, updated weekly.')
                            ])
                        },
                        {
                            label: 'Live',
                            value: 'live',
                            layout: TabContent({}, [
                                H2({ class: 'text-xl font-semibold text-foreground mb-2' }, 'Live Shows'),
                                P({ class: 'text-sm text-muted-foreground mb-4' }, 'Join live shows and interact with hosts.')
                            ])
                        }
                    ]
                }),
                // Add music button
                Button({ variant: 'ghost', class: 'text-muted-foreground mb-8' }, [
                    Span({ class: 'mr-2' }, '+'),
                    'Add music'
                ])
            ])
        ])
    ])
);

export default MusicPage;