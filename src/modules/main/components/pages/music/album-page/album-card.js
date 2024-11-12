import { Div, Img } from "@base-framework/atoms";
import { Jot } from "@base-framework/base";
import { Skeleton } from "@components/atoms/skeleton.js";

/**
 * Skeleton for Album Cover while loading.
 *
 * @returns {object}
 */
const AlbumCoverSkeleton = () => (
    Div({ class: 'aspect-square w-full rounded-lg bg-muted' }, [
        Skeleton({ width: 'w-full', height: 'h-full', shape: 'square' })
    ])
);

/**
 * AlbumCover component
 *
 * @param {string} src - Album cover image source
 * @returns {object}
 */
const AlbumCover = ({ src, title }) => (
    Img({ src, alt: title, class: 'w-full h-auto object-cover rounded-lg' })
);

/**
 * This will load the image and set the loaded state to true.
 *
 * @param {string} src
 * @param {function} onLoaded
 * @returns {void}
 */
const loadImage = (src, onLoaded) =>
{
    const img = new Image();
    img.src = src;
    img.onload = onLoaded;
};

/**
 * AlbumCard
 *
 * Displays the skeleton placeholder while the album image loads.
 *
 * @class
 */
export const AlbumCard = Jot(
{
    /**
     * This will set up the state.
     *
     * @returns {object}
     */
    state: { loaded: false },

    /**
     * This will render the AlbumCard component.
     *
     * @returns {object}
     */
    render()
    {
        const { src, title } = this;

        /**
         * This will load the image and set the loaded state to true
         * when the image is loaded. This will swap the skeleton
         * with the album card.
         */
        loadImage(src, () => this.state.loaded = true);

        return Div({
            onState: ['loaded', (loaded) =>
            {
                return (!loaded)
                ?
                    AlbumCoverSkeleton()
                :
                    AlbumCover({
                        src,
                        title
                    });
            }]
        });
    }
});