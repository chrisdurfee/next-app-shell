import { Div } from "@base-framework/atoms";

/**
 * Helper function to create a page that uses dynamic imports.
 *
 * @param {string} uri The URI (route) for this page
 * @param {Function} importCallback A function returning the dynamic import
 * @returns {object}
 */
const Page = (uri, importCallback) => ({
	uri,
	import: importCallback,
});

/**
 * This will create a dockable page.
 *
 * @returns {object}
 */
const ContentPage = () => (
	Div({
		class: 'flex flex-auto flex-col p-4 lg:p-6',
		switch: [
			Page(`/directory/user/:userId`, () => import('./profile/sections/profile-page.js')),
			Page(`/directory/user/:userId/notes`, () => import('./notes/notes-page.js')),
			Page(`/directory/user/:userId/documents/:documentId?`, () => import('./documents/documents-page.js')),
			Page(`/directory/user/:userId/one-on-one/:meetingId?`, () => import('./one-on-one/meetings-page.js')),
		]
	})
);

/**
 * This will create the Content Section.
 *
 * @param {object} props
 * @returns {object}
 */
export const ContentSection = (props) => (
	Div({ class: 'flex flex-auto flex-col' }, [
		ContentPage()
	])
);