import { Button, Div, H1, Img, Li, P, Span } from "@base-framework/atoms";
import { Skeleton } from "@components/atoms/skeleton.js";
import { Icons } from "@components/icons/icons.js";
import { Overlay } from "@components/organisms/overlay.js";
import { getAlbumByTitle } from "./albums.js";

/**
 * Skeleton for Album Cover while loading.
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
 * TrackListItem
 *
 * A single track in the album song list.
 *
 * @param {object} track - Track details.
 * @returns {object}
 */
const TrackListItem = ({ title, plays, duration }) => (
    Li({ class: 'flex justify-between items-center py-3 px-2 hover:bg-muted rounded-md' }, [
        Div({ class: 'flex flex-col' }, [
            Span({ class: 'text-base font-semibold' }, title),
            P({ class: 'text-xs text-muted-foreground' }, `${plays} plays`)
        ]),
        P({ class: 'text-sm text-muted-foreground' }, duration)
    ])
);

/**
 * TrackList
 *
 * Displays the list of tracks in the album.
 *
 * @param {array} tracks - Array of track objects.
 * @returns {object}
 */
const TrackList = ({ tracks }) => (
    Div({ class: 'flex flex-col divide-y divide-border mt-6' }, [
        ...tracks.map(track => TrackListItem(track))
    ])
);

/**
 * AlbumDetails
 *
 * Displays the album title, artist, and additional information.
 *
 * @param {object} album - Album details.
 * @returns {object}
 */
const AlbumDetails = ({ album }) => (
    Div({ class: 'space-y-2 mt-4' }, [
        H1({ class: 'text-3xl font-bold' }, album.title),
        P({ class: 'text-sm text-muted-foreground' }, `Album • ${album.year} • ${album.tracks.length} songs • ${album.duration}`),
        Div({ class: 'flex space-x-4 mt-4' }, [
            Button({ variant: 'icon', icon: Icons.play, label: 'Play' }),
            Button({ variant: 'icon', icon: Icons.download, label: 'Download' }),
            Button({ variant: 'icon', icon: Icons.heart, label: 'Favorite' }),
            Button({ variant: 'icon', icon: Icons.more, label: 'More' })
        ])
    ])
);

/**
 * AlbumPageContent
 *
 * Main content of the album overlay page.
 *
 * @returns {object}
 */
const AlbumPageContent = () =>
{
    const album = getAlbumByTitle('How to Be a Human Being');

    return Div({ class: 'p-6 space-y-8 lg:flex lg:space-x-8' }, [
        Div({ class: 'w-full lg:w-1/3' }, [
            AlbumCover({ src: album.src, title: album.title })
            //album.loading ? AlbumCoverSkeleton() : AlbumCover({ src: album.cover, title: album.title })
        ]),
        Div({ class: 'flex-1 space-y-4' }, [
            AlbumDetails({ album }),
            TrackList({ tracks: album.tracks })
        ])
    ]);
};

/**
 * AlbumPage
 *
 * Main page structure that uses AlbumPage.
 *
 * @returns {object}
 */
export const AlbumPage = () => (
    new Overlay([
        AlbumPageContent()
    ])
);

export default AlbumPage;