import { Div, H2, Header } from "@base-framework/atoms";
import { BackButton, Overlay } from "@components/organisms/overlays/overlay.js";
import { getAlbumByTitle } from "../albums.js";
import { AlbumCard } from "./album-card.js";
import { AlbumDetails } from "./album-details.js";
import { EmptyState } from "./empty-state.js";
import { TrackList } from "./track-list.js";

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
        class: 'p-6 pt-0 2xl:mx-auto w-full 2xl:max-w-[1600px]',

        /**
         * This will get the parent object that has access to the route
         * and use it to get the album details.
         */
        useParent({ route })
        {
            return Div({ class: 'flex flex-auto flex-col lg:flex-row lg:space-x-8', onSet: [route, 'album', (title) =>
            {
                const album = getAlbumByTitle(title);
                if (!album)
                {
                    return EmptyState();
                }

                return [
                    Div({ class: 'w-full lg:w-1/3' }, [
                        Header({ class: 'flex flex-auto items-center mb-2' }, [
                            BackButton({
                                backUrl: 'music'
                            }),
                            H2({ class: 'text-lg md:text-2xl font-bold tracking-tight' }, album.artist),
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