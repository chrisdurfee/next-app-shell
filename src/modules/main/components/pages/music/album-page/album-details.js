import { Div, H1, P } from "@base-framework/atoms";
import { Button } from "@components/atoms/buttons/buttons.js";
import { Icons } from "@components/icons/icons.js";

/**
 * AlbumDetails
 *
 * Displays the album title, artist, and additional information.
 *
 * @param {object} album - Album details.
 * @returns {object}
 */
export const AlbumDetails = ({ album }) => (
    Div({ class: 'space-y-2 mt-4' }, [
        H1({ class: 'text-2xl md:text-3xl font-bold text-center' }, album.title),
        P({ class: 'text-sm text-muted-foreground text-center' }, `Album • ${album.year} • ${album.tracks.length} songs • ${album.duration}`),
        Div({ class: 'flex flex-auto items-center justify-center' }, [
            Div({ class: 'flex space-x-4 mt-4' }, [
                Button({ variant: 'icon', class: 'primary', icon: Icons.play, label: 'Play' }),
                Button({ variant: 'icon', icon: Icons.download, label: 'Download' }),
                Button({ variant: 'icon', icon: Icons.heart, label: 'Favorite' }),
                Button({ variant: 'icon', icon: Icons.ellipsis.vertical, label: 'More' })
            ])
        ])
    ])
);