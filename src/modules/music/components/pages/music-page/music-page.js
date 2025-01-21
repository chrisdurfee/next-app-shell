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
		Div({ class: 'flex flex-auto flex-col lg:flex-row max-w-[100vw] h-full' }, [
			SidebarMenu(),
			Div({
				class: 'flex flex-auto flex-col',
				switch: [
					{
						uri: 'music',
						import: import('./listen/listen-page.js'),
						persist: true
					},
					{
						uri: 'music/browse',
						import: () => import('./browse/browse-page.js'),
						persist: true
					}
				]
			})
		])
	])
);

export default MusicPage;