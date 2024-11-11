import { Div, Li, P, Span } from "@base-framework/atoms";

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
export const TrackList = ({ tracks }) => (
    Div({ class: 'flex flex-col divide-y divide-border mt-6' }, [
        ...tracks.map(track => TrackListItem(track))
    ])
);

export default TrackList;