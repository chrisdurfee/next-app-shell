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
 * MeetingsPage
 *
 * Renders the 1-1 meeting page with goals and topics sections.
 *
 * @returns {object}
 */
export const MeetingsPage = () =>
{
	return Div({
        class: 'flex flex-auto flex-col',
        switch: [
            Page(`/directory/user/:userId?/one-on-one/meeting/:meetingId`, () => import('./one-on-one-page.js')),
            Page(`/directory/user/:userId?/:page?`, () => import('./meetings-list-page.js'))
        ]
    });
};

export default MeetingsPage;
