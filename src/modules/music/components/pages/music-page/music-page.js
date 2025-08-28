import { Div } from "@base-framework/atoms";
import { BlankPage } from "@base-framework/ui/pages";
import { SidebarMenu } from "./sidebar-menu.js";

/**
 * MusicPage
 *
 * The main page layout combining sidebar, tabs, and content sections.
 *
 * @returns {object}
 */
export const MusicPage = () => (
	new BlankPage([
		Div({ class: 'flex flex-auto flex-col lg:flex-row max-w-screen sm:max-w-[90vw] lg:max-w-screen h-full' }, [
			SidebarMenu(),
			Div({
				class: 'flex flex-auto flex-col lg:w-[70vw] min-w-0"',
				switch: [
					{
						uri: 'music',
						import: import('./listen/listen-page.js')
					},
					{
						uri: 'music/browse',
						import: () => import('./browse/browse-page.js')
					}
				]
			})
		])
	])
);

export default MusicPage;