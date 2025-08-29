import { Div, H1, P } from "@base-framework/atoms";
import { Tooltip } from "@base-framework/ui";
import { Button } from "@base-framework/ui/atoms";
import { Icons } from "@base-framework/ui/icons";

/**
 * AlbumDetails
 *
 * Displays the album title, artist, and additional information.
 *
 * @param {object} album - Album details.
 * @returns {object}
 */
export const AlbumDetails = ({ album }) => (
	Div({ class: 'flex flex-col gap-y-2 mt-4' }, [
		H1({ class: 'text-2xl md:text-3xl font-bold text-center' }, album.title),
		P({ class: 'text-sm text-muted-foreground text-center' }, `Album • ${album.year} • ${album.tracks.length} songs • ${album.duration}`),
		Div({ class: 'flex flex-auto items-center justify-center' }, [
			Div({ class: 'flex gap-x-4 mt-4' }, [
				Tooltip({ content: 'Play' }, [
					Button({ variant: 'icon', class: 'primary', icon: Icons.play, label: 'Play' })
				]),
				Tooltip({ content: 'Download' }, [
					Button({ variant: 'icon', icon: Icons.download, label: 'Download' })
				]),
				Tooltip({ content: 'Favorite' }, [
					Button({ variant: 'icon', icon: Icons.heart, label: 'Favorite' })
				]),
				Tooltip({ content: 'More' }, [
					Button({ variant: 'icon', icon: Icons.ellipsis.vertical, label: 'More' })
				])
			])
		])
	])
);