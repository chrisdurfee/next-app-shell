import { A, Div, H3, Img, P } from "@base-framework/atoms";
import { Jot } from "@base-framework/base";
import { Skeleton } from "@base-framework/ui/atoms";

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
        Skeleton({ width: 'w-full', height: 'h-[240px] md:h-[333.33px]', shape: 'rectangle', class: 'rounded-md' }),
        Skeleton({ width: 'w-3/4', height: 'h-4', class: 'mt-2' }),
        Skeleton({ width: 'w-1/2', height: 'h-[14px]' })
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
        Skeleton({ width: 'w-3/4', height: 'h-4', class: 'mt-2' }),
        Skeleton({ width: 'w-1/2', height: 'h-[14px]' })
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
            class: 'overflow-hidden rounded-md aspect-[3/4] w-full'
        }, [
            A({ href: `${PAGE_URL}/album/${title.replace(/\s+/g, '-').toLowerCase()}` }, [
                Img({
                    src,
                    alt: title,
                    class: 'w-auto object-cover transition-all hover:scale-105 aspect-[3/4]'
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
            class: 'overflow-hidden rounded-md w-full aspect-square'
        }, [
            A({ href: `${PAGE_URL}/album/${title.replace(/\s+/g, '-').toLowerCase()}` }, [
                Img({
                    src,
                    alt: title,
                    class: 'w-auto object-cover transition-all hover:scale-105 aspect-square'
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
     * This will get the cards by type.
     *
     * @returns {object}
     */
    getCardsByType()
    {
        if (this.cardType === 'large')
        {
            return { skeleton: LargeAlbumSkeleton, albumCard: LargeAlbumCard };
        }

        return { skeleton: SmallAlbumSkeleton, albumCard: SmallAlbumCard };
    },

    /**
     * This will render the AlbumCard component.
     *
     * @returns {object}
     */
    render()
    {
        const { src, title, artist } = this;
        const { skeleton, albumCard } = this.getCardsByType();

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