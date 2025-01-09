import { Div } from "@base-framework/atoms";
import { getRandomAlbums } from "../../albums.js";
import { MusicSection } from "./music-section.js";

/**
 * This will create a podcast section.
 *
 * @returns {object}
 */
export const PodcastSections = () => (
    Div({ class: 'w-full' }, [
        MusicSection({
            title: 'Latest Podcasts',
            description: 'Listen to the latest podcasts from your favorite creators.',
            albums: getRandomAlbums(5),
            cardType: 'large'
        })
    ])
);

export default PodcastSections;