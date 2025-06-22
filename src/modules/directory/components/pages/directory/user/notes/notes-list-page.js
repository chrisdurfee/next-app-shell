import { Div, H2, Img, P, Span } from "@base-framework/atoms";
import { List } from "@base-framework/organisms";
import { Button } from "@base-framework/ui/atoms";
import { Icons } from "@base-framework/ui/icons";
import { Avatar } from "@base-framework/ui/molecules";
import { NOTES } from "./notes.js";

/**
 * This renders the header section for the 1-1 meeting page.
 *
 * @returns {object}
 */
const Header = () =>
(
	Div({ class: "flex items-center justify-between mb-6 py-2" }, [
		Div({ class: "flex flex-auto justify-between items-center space-x-4" }, [
			H2({ class: "text-2xl font-semibold" }, `Notes`),
			Button({
                variant: "withIcon",
				class: "primary",
				onClick: () => console.log("New note clicked"),
                icon: Icons.circlePlus
			}, "New note")
		])
	])
);

/**
 * This renders a single note section for the notes list.
 *
 * @param {object} note - The note data
 * @returns {object}
 */
const NoteItem = (note) =>
(
	Div({ class: "flex space-x-3 px-6 py-4 hover:bg-muted/50 rounded" }, [
		Avatar({ src: note.avatar, alt: note.user, fallbackText: note.user, size: "md" }),
		Div({ class: "flex-1 space-y-1" }, [
			P({ class: "text-base font-medium" }, note.user),
			P({ class: "text-sm text-muted-foreground" }, note.text),
			note.attachments &&
				Div({ class: "flex space-x-2 mt-2" }, [
					note.attachments.map((att) =>
						Img({ src: att.src, alt: att.name, class: "w-16 h-16 rounded" })
					)
				])
		])
	])
);

/**
 * DateDivider
 *
 * Renders a date divider between messages.
 *
 * @param {string} date
 * @returns {object}
 */
const DateDivider = (date) =>
	Div({ class: "flex justify-center mt-4" }, [
		Span(
			{ class: "text-xs text-muted-foreground bg-background p-2" },
			date.split("T")[0]
		)
	]);

/**
 * This renders the topics section for the notes.
 *
 * @param {Array<object>} notes - The notes data
 * @returns {object}
 */
const Notes = (notes) =>
(
	Div({ class: "mb-6" }, [
		new List({
			cache: "notes",
			key: "id",
			items: notes || [],
			role: "list",
			divider: {
				itemProperty: "date",
				layout: DateDivider,
				customCompare: (a, b) => a.split("T")[0] !== b.split("T")[0]
			},
			rowItem: NoteItem
		})
	])
);

/**
 * NotesListPage
 *
 * Renders the notes list.
 *
 * @returns {object}
 */
export const NotesListPage = () =>
{
	return Div({ class: "flex flex-col contained" }, [
		Header(),
		Notes(NOTES)
	]);
};

export default NotesListPage;
