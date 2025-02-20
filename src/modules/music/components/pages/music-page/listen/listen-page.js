import { Div, H1, Header } from "@base-framework/atoms";
import { MusicHeader } from "./music-header.js";
import { MusicSections } from "./music/music-sections.js";
import { PodcastSections } from "./podcasts/podcast-section.js";

/**
 * ListenPage
 *
 * The main content sections for the listen page.
 *
 * @returns {object}
 */
export const ListenPage = () => (
	Div({ class: 'mx-auto max-w-[1400px]' }, [
		Header({ class: 'sm:py-4 sm:pb-0 px-6 flex flex-col lg:hidden' }, [
			H1({ class: 'scroll-m-20 text-3xl font-bold tracking-tight' }, 'Discover'),
		]),
		Div({ class: 'p-6 px-6 md:pr-4 py-6 lg:px-8'}, [
			MusicHeader(),
			Div({
				addState() { return { mode: 'music' }},
				onState: ['mode', (value) => (value === 'music')
					? MusicSections()
					: PodcastSections()
				]
			}),
		])
	])
);

export default ListenPage;