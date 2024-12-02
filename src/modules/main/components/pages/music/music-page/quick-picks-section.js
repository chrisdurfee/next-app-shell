import { Div, H2, Img, P, Section } from "@base-framework/atoms";
import { getRandomTracks } from "../albums.js";

/**
 * TrackItem
 *
 * Displays a single track item.
 *
 * @param {object} track
 * @returns {object}
 */
const TrackItem = (track) => (
    Div({ class: "flex flex-auto items-center space-x-4 w-full max-w-[380px]" }, [
        // Album Cover
        Img({
            src: track.src,
            alt: track.albumTitle,
            class: "w-12 h-12 object-cover rounded",
        }),
        // Track Details
        Div({ class: "flex flex-col" }, [
            P({ class: "text-sm font-medium" }, track.title),
            P({ class: "text-xs text-muted-foreground" }, `${track.artist} • ${track.albumTitle}`),
            P({ class: "text-xs text-muted-foreground" }, track.duration),
        ])
    ])
);

/**
 * This will create a grid layout for displaying random tracks.
 *
 * @returns {object}
 */
const QuickPickGrid = () =>
{
    // 10 albums, 1-2 tracks each
    const tracks = getRandomTracks();

    const columnNumber = 5;
    const rowNumber = 3;

    return Div({ class: "grid grid-cols-5 gap-4" }, [
        // Map tracks into columns
        ...Array.from({ length: columnNumber }).map((_, columnIndex) =>
        {
            const columnTracks = tracks.slice(columnIndex * rowNumber, (columnIndex + 1) * rowNumber);
            return Div({ class: "space-y-4", map: [columnTracks, TrackItem] });
        })
    ]);
};

/**
 * This will create a title for the "Quick Picks" section.
 *
 * @returns {object}
 */
const Title = () => (
    Div({ class: "flex justify-between items-center mb-4" }, [
        H2({ class: "text-2xl font-semibold tracking-tight" }, "Quick Picks"),
    ])
);

/**
 * QuickPicksSection
 *
 * Displays a "Quick Picks" section with random tracks.
 *
 * @returns {object}
 */
export const QuickPicksSection = () => (
    Section([
        Title(),
        Div({ class: 'overflow-x-auto lg:overflow-x-none -mx-6 pl-6' }, [
            QuickPickGrid()
        ])
    ])
);

export default QuickPicksSection;