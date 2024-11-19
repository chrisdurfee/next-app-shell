import { Div, H2, Header, P, Section } from "@base-framework/atoms";
import { AlbumCard } from "./album-cards.js";

/**
 * This will create a section header.
 *
 * @param {object} props
 * @returns {object}
 */
const SectionHeader = ({ title, description }) => (
    Header([
        H2({ class: 'text-2xl font-semibold tracking-tight' }, title),
        P({ class: 'text-sm text-muted-foreground mb-4' }, description)
    ])
);

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
    return Section({ class: 'my-8' }, [
        SectionHeader({ title, description }),
        Div({ class: 'overflow-x-auto lg:overflow-x-none -ml-6 pl-6' }, [
            Div({
                class: 'inline-flex space-x-4 pb-4 mr-6 lg:mr-0',
                map: [albums, (album) => new AlbumCard({
                    src: album.src,
                    title: album.title,
                    artist: album.artist,
                    cardType
                })]
            })
        ])
    ]);
};