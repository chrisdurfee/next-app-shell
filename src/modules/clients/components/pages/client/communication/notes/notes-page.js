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
 * NotesPage
 *
 * Renders the 1-1 meeting page with goals and topics sections.
 *
 * @returns {object}
 */
export const NotesPage = () =>
{
	return Div({
        class: 'flex flex-auto flex-col p-4',
        switch: [
            Page(`/directory/user/:userId/notes`, () => import('./notes-list-page.js'))
        ]
    });
};

export default NotesPage;
