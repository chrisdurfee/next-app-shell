import { A, Button, Div, H2, Header, P } from "@base-framework/atoms";
import { Icon } from "@components/atoms/icon.js";
import { Icons } from "@components/icons/icons.js";
import { BackButton } from "@components/organisms/overlays/overlay.js";
import { getAlbumByTitle } from "../albums.js";
import { AlbumCard } from "./album-card.js";
import { AlbumDetails } from "./album-details.js";

/**
 * This will be the default empty state
 * recommended for when the album does not exist.
 *
 * This should be swapped out for a more dynamic
 * response for a real user.
 */
const title = 'The Suburbs';
const album = getAlbumByTitle(title);

/**
 * This will display an empty state when the album does not exist.
 *
 * @returns {object}
 */
export const EmptyState = () => (
    Div({ class: 'w-full lg:w-1/3' }, [
        Header({ class: 'flex flex-auto items-center mb-2' }, [
            BackButton(),
            H2({ class: 'text-2xl font-bold tracking-tight' }, 'Hmmm?'),
        ]),
        Div({ class: 'space-y-4 mt-4' }, [
            H2({ class: 'text-xl font-semibold text-muted-foreground' }, 'I\'m searching but that album does not exist.'),
            Div({ class: 'flex flex-auto flex-col items-center justify-center' }, [
                P('Let\'s get you back to the music. Here is something you might like.')
            ]),
            A({ href: `music/album/${title.replace(/\s+/g, '-').toLowerCase()}`, class: 'flex items-center' }, [
                Div({ class: 'relative flex flex-auto flex-col' }, [
                    Div ({ class: 'absolute top-0 left-0 right-0 bottom-0 w-10 h-10 m-auto bg-background rounded-xl' }, [
                        Button({ class: 'icon rounded-full' }, [
                            Icon(Icons.play),
                        ])
                    ]),
                    new AlbumCard({ src: album.src, title: album.title }),
                ])
            ]),
            AlbumDetails({ album }),
        ])
    ])
);

export default EmptyState;