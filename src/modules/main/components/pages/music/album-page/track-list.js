import { Div, Li, P, Span } from "@base-framework/atoms";

/**
 * TrackListItem
 *
 * A single track in the album song list.
 *
 * @param {object} track - Track details.
 * @param {number} index - Track index
 * @returns {object}
 */
const TrackListItem = ({ title, plays, duration }, index) => (
    Li({ class: 'flex justify-between items-center py-5 px-2 hover:bg-muted/50 rounded-md' }, [
        Div({ class: 'flex flex-row' }, [
            Span({ class: 'text-sm font-bold text-muted-foreground mr-2 min-w-5' }, String(index + 1)),
            Div({ class: 'flex flex-col' }, [
                Span({ class: 'text-base font-semibold' }, title),
                P({ class: 'text-xs text-muted-foreground m-0' }, `${plays ?? 0} plays`)
            ])
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
    Div({
        class: 'flex flex-col divide-y divide-border mt-6',
        map: [tracks, (track, index) => TrackListItem(track, index)]
    })
);

export default TrackList;