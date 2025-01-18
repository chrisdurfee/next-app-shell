import { Div, Img } from "@base-framework/atoms";
import { Component, Jot } from "@base-framework/base";
import { Skeleton } from "@base-framework/ui/atoms";

/**
 * Skeleton for Album Cover while loading.
 *
 * @returns {object}
 */
const AlbumCoverSkeleton = () => (
	Div({ class: 'aspect-square w-full rounded-lg bg-muted' }, [
		Skeleton({ width: 'w-full', height: 'h-full', shape: 'square' })
	])
);

/**
 * AlbumCover component
 *
 * @param {object} props - Album cover image source
 * @returns {object}
 */
const AlbumCover = ({ src, title }) => (
	Img({ src, alt: title, class: 'w-full h-auto object-cover rounded-lg' })
);

/**
 * This will load the image and set the loaded state to true.
 *
 * @param {string} src
 * @param {(event: Event) => void} onLoaded
 * @returns {void}
 */
const loadImage = (src, onLoaded) =>
{
	const img = new Image();
	img.src = src;
	img.onload = onLoaded;
};

/**
 * AlbumCard
 *
 * Displays the skeleton placeholder while the album image loads.
 *
 * @type {typeof Component}
 */
export const AlbumCard = Jot(
{
	/**
	 * This will set up the state.
	 *
	 * @returns {object}
	 */
	state: { loaded: false },

	/**
	 * This will render the AlbumCard component.
	 *
	 * @returns {object}
	 */
	render()
	{
		// @ts-ignore
		const { src, title } = this;

		/**
		 * This will load the image and set the loaded state to true
		 * when the image is loaded. This will swap the skeleton
		 * with the album card.
		 */
		// @ts-ignore
		loadImage(src, () => this.state.loaded = true);

		return Div({
			class: 'aspect-square m-auto w-[75%] rounded-lg bg-muted',
			onState: ['loaded', (loaded) =>
			{
				return (!loaded)
				?
					AlbumCoverSkeleton()
				:
					AlbumCover({
						src,
						title
					});
			}]
		});
	}
});