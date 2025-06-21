
/**
 * Mock data for notes.
 *
 * @type {Array<object>} NOTES
 */
export const NOTES = [
	{
		id: 1,
		date: "2025-06-01T09:15:00Z",
		user: "Alice Johnson",
		avatar: `https://i.pravatar.cc/150?img=47`,
		text: "Hi team, just checking in on the recent performance report.",
		attachments: []
	},
	{
		id: 2,
		date: "2025-06-01T10:00:00Z",
		user: "Bob Smith",
		avatar: `https://i.pravatar.cc/150?img=48`,
		text: "Looks good to me! No further changes needed.",
		attachments: []
	},
	{
		id: 3,
		date: "2025-06-02T08:30:00Z",
		user: "Alice Johnson",
		avatar: `https://i.pravatar.cc/150?img=47`,
		text: "Here is the updated file with the latest metrics.",
		attachments: [
			{
				name: "report.pdf",
				src: "https://via.placeholder.com/64"
			}
		]
	}
];

/**
 * Finds a note by its ID.
 *
 * @param {string} noteId - The ID of the note to fetch.
 * @returns {object|null}
 */
export const getNoteById = (noteId) => NOTES.find((note) => note.id.toString() === noteId) || null;
