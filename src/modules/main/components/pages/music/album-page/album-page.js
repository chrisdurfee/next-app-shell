import { Div, H1, H2, Header, P } from "@base-framework/atoms";
import { Button } from "@components/atoms/buttons/buttons.js";
import { Icons } from "@components/icons/icons.js";
import { BackButton, Overlay } from "@components/organisms/overlay.js";
import { getAlbumByTitle } from "../albums.js";
import { AlbumCard } from "./album-card.js";
import { EmptyState } from "./empty-state.js";
import { TrackList } from "./track-list.js";

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
        Div({ class: 'flex flex-auto items-center justify-center lg:justify-start' }, [
            Div({ class: 'flex space-x-4 mt-4' }, [
                Button({ variant: 'icon', icon: Icons.play, label: 'Play' }),
                Button({ variant: 'icon', icon: Icons.download, label: 'Download' }),
                Button({ variant: 'icon', icon: Icons.heart, label: 'Favorite' }),
                Button({ variant: 'icon', icon: Icons.ellipsis.vertical, label: 'More' })
            ])
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
    return Div({
        class: 'p-6 space-y-8 lg:flex 2xl:mx-auto 2xl:max-w-[1600px]',

        /**
         * This will get the parent object that has access to the route
         * and use it to get the album details.
         */
        useParent({ route })
        {
            return Div({ class: 'flex flex-auto lg:space-x-8', onSet: [route, 'album', (title) =>
            {
                const album = getAlbumByTitle(title);
                if (!album)
                {
                    return EmptyState();
                }

                return [
                    Div({ class: 'w-full lg:w-1/3' }, [
                        Header({ class: 'flex flex-auto items-center mb-2' }, [
                            BackButton(),
                            H2({ class: 'text-2xl font-bold tracking-tight' }, album.artist),
                        ]),
                        new AlbumCard({ src: album.src, title: album.title }),
                        AlbumDetails({ album }),
                    ]),
                    Div({ class: 'flex-1 space-y-4' }, [
                        TrackList({ tracks: album.tracks })
                    ])
                ];
            }]})
        }
    });
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