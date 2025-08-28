import { Div, H2, Header, OnRoute } from "@base-framework/atoms";
import { BackButton, Overlay } from "@base-framework/ui/organisms";
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
const AlbumPageContent = () => (
	Div({ class: 'p-6 pt-0 2xl:mx-auto w-full 2xl:max-w-[1600px]' }, [
		Div({ class: 'flex flex-auto flex-col lg:flex-row lg:gap-x-8'}, [
			OnRoute('album', (title) =>
			{
				const album = getAlbumByTitle(title);
				return (!album)
				? EmptyState()
				: [
					Div({ class: 'w-full lg:w-1/3' }, [
						Header({ class: 'flex flex-auto items-center mb-2' }, [
							BackButton({
								backUrl: 'music',
								allowHistory: true
							}),
							H2({ class: 'text-lg md:text-2xl font-bold tracking-tight' }, album.artist),
						]),
						new AlbumCard({ src: album.src, title: album.title }),
						AlbumDetails({ album }),
					]),
					Div({ class: 'flex-1 gap-y-4' }, [
						TrackList({ tracks: album.tracks })
					])
				];
			})
		])
	])
);

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