import { Div, H2, P, Section } from "@base-framework/atoms";
import { AlbumCard, LargeAlbumCard, LargeAlbumSkeleton, SmallAlbumCard, SmallAlbumSkeleton } from "./album-cards.js";

/**
 * MusicSection
 *
 * Displays a section of music albums with skeleton placeholders.
 *
 * @param {object} props
 * @returns {object}
 */
export const MusicSection = ({ title, description, albums, cardType = 'large' }) =>
{
    const skeletonComponent = cardType === 'large' ? LargeAlbumSkeleton : SmallAlbumSkeleton;
    const albumCard = cardType === 'large' ? LargeAlbumCard : SmallAlbumCard;

    return Section({ class: 'my-8' }, [
        H2({ class: 'text-2xl font-semibold tracking-tight' }, title),
        P({ class: 'text-sm text-muted-foreground mb-4' }, description),
        Div({ class: 'overflow-x-auto lg:overflow-x-none' }, [
            Div({
                class: 'inline-flex space-x-4 pb-4',
                map: [albums, (album) => new AlbumCard({
                    src: album.src,
                    title: album.title,
                    artist: album.artist,
                    skeleton: skeletonComponent,
                    albumCard: albumCard
                })]
            })
        ])
    ]);
};