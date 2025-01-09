import { getRandomAlbums } from "../../../albums.js";
import { MusicSection } from "../music-section.js";
import { QuickPicksSection } from "./quick-picks-section.js";

/**
 * This will create the music sections.
 *
 * @returns {object}
 */
export const MusicSections = () => (
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
);

export default MusicSections;