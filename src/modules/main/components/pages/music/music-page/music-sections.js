import { Div, H1, Header } from "@base-framework/atoms";
import { getRandomAlbums } from "../albums.js";
import MusicHeader from "./music-header.js";
import { MusicSection } from "./music-section.js";
import { PodcastSections } from "./podcast-sections.js";
import QuickPicksSection from "./quick-picks-section.js";

/**
 * MusicSections
 *
 * The main content sections for the music page.
 *
 * @returns {object}
 */
export const MusicSections = () => (
    Div({ class: 'mx-auto max-w-[1400px]' }, [
        Header({ class: 'sm:py-4 sm:pb-0 px-6 flex flex-col lg:hidden' }, [
            H1({ class: 'scroll-m-20 text-3xl font-bold tracking-tight' }, 'Discover'),
        ]),
        Div({ class: 'p-6 px-6 md:pr-4 py-6 lg:px-8'}, [
            MusicHeader(),
            Div({
                addState() { return { mode: 'music' }},
                onState: ['mode', (value) =>
                {
                    return (value === 'music')
                    ?
                        [
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
                            QuickPicksSection(),
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
                            })
                        ]
                    :

                    PodcastSections();
                }]
            }),
        ])
    ])
);

export default MusicSections;