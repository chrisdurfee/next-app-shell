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
 * DocumentPage
 *
 * Renders the 1-1 meeting page with goals and topics sections.
 *
 * @returns {object}
 */
export const DocumentPage = () =>
{
	return Div({
		class: 'flex flex-auto flex-col',
		switch: [
			Page(`/directory/user/:userId/documents/:documentId`, () => import('./document-page.js')),
			Page(`/directory/user/:userId/documents`, () => import('./documents-list-page.js'))
		]
	});
};

export default DocumentPage;
