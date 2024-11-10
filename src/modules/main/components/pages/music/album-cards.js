import { A, Div, H3, Img, P } from "@base-framework/atoms";
import { Jot } from "@base-framework/base";
import { Skeleton } from "@components/atoms/skeleton.js";

const PAGE_URL = 'music';

/**
 * LargeAlbumSkeleton
 *
 * A skeleton placeholder for large album cards.
 *
 * @returns {object}
 */
export const LargeAlbumSkeleton = () => (
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
export const SmallAlbumSkeleton = () => (
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
export const LargeAlbumCard = ({ src, title, artist }) => (
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
export const SmallAlbumCard = ({ src, title, artist }) => (
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
        const { src, title, artist, skeleton, albumCard } = this;
        loadImage(src, () => this.state.loaded = true);

        return Div({
            onState: ['loaded', (loaded) =>
            {
                return (!loaded)
                ?
                    skeleton()
                :
                    albumCard({
                        src,
                        title,
                        artist
                    });
            }]
        });
    }
});