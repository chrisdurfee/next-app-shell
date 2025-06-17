import { Div, H2, Header, Img, P, Span } from "@base-framework/atoms";
import { Atom } from "@base-framework/base";
import { List } from "@base-framework/organisms";
import { Avatar } from "@base-framework/ui/molecules";
import { ThreadComposer } from "./thread-composer.js";

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
 * ConversationListItem
 *
 * Renders a single conversation entry with avatar, text, and attachments.
 *
 * @param {object} msg
 * @returns {object}
 */
const ConversationListItem = Atom((msg) =>
	Div({ class: "flex space-x-3 px-6 py-4 hover:bg-muted/10 rounded" }, [
		Avatar({ src: msg.avatar, alt: msg.user, fallbackText: msg.user, size: "sm" }),
		Div({ class: "flex-1 space-y-1" }, [
			P({ class: "text-sm font-medium" }, msg.user),
			P({ class: "text-sm text-foreground" }, msg.text),
			msg.attachments &&
				Div({ class: "flex space-x-2 mt-2" }, [
					msg.attachments.map((att) =>
						Img({ src: att.src, alt: att.name, class: "w-16 h-16 rounded" })
					)
				])
		])
	])
);

/**
 * ConversationSection
 *
 * Displays conversation history and composer.
 *
 * @param {object} props
 * @param {object} props.client
 * @returns {object}
 */
export const ConversationSection = Atom(({ client }) =>
	Div({ class: "flex flex-auto flex-col h-full space-y-4 p-0" }, [
		Header({ class: "flex flex-col space-y-2 p-6" }, [
			H2({ class: "text-lg text-muted-foreground" }, "Conversation")
		]),
		Div({ class: "flex-1 overflow-y-auto space-y-2" }, [
			new List({
				cache: "conversation",
				key: "id",
				items: client.conversation,
				role: "list",
				class: "flex flex-col",
				divider: {
					itemProperty: "date",
					layout: DateDivider,
					customCompare: (a, b) => a.split("T")[0] !== b.split("T")[0]
				},
				rowItem: ConversationListItem
			})
		]),
		new ThreadComposer({ placeholder: "Add a comment...", add: (msg, { parent }) =>
			{
				/**
				 * This is a placeholder for adding a new message to the thread.
				 */
				const timeStamp = new Date().toISOString();
				const row = {
					id: Math.random() * 1000,
					date: timeStamp,
					user: 'You',
					avatar: 'https://github.com/shadcn.png',
					text: msg
				};

				parent.conversation.append(row);
			}
		})
	])
);
