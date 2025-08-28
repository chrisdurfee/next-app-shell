import { A, Div, H2, P, Span } from "@base-framework/atoms";
import { List } from "@base-framework/organisms";
import { Button, Card } from "@base-framework/ui/atoms";
import { Icons } from "@base-framework/ui/icons";
import { Avatar } from "@base-framework/ui/molecules";
import { MEETINGS } from "./meetings.js";

/**
 * This renders the header section for the 1-1 meeting page.
 *
 * @returns {object}
 */
const Header = () =>
(
	Div({ class: "flex items-center justify-between mb-6 py-2" }, [
		Div({ class: "flex flex-auto justify-between items-center gap-x-4" }, [
			H2({ class: "text-2xl font-semibold" }, `1:1 Meetings`),
			Button({
                variant: "withIcon",
				class: "primary",
				onClick: () => console.log("New meeting clicked"),
                icon: Icons.circlePlus
			}, "New meeting")
		])
	])
);

/**
 * This renders a single meeting section for the meeting list.
 *
 * @param {object} meeting - The meeting data
 * @returns {object}
 */
const MeetingItem = (meeting) =>
(
	A({
		href: `/directory/user/${meeting.userId}/one-on-one/${meeting.id}`,
	}, [
		Card({ margin: "mb-3 gap-y-4", hover: true }, [
			Div({ class: "px-4 pt-4" }, [
				Div({ class: "flex items-center mb-2" }, [
					Div({ class: "flex flex-auto items-center justify-between" }, [
						Div({ class: 'flex gap-x-2 items-center' },[
							Span({ class: "w-4 h-4 bg-accent rounded-full mr-2" }),
							P({ class: "font-medium" },  `${meeting.title}`)
						]),
						P({ class: "text-muted-foreground" },  `${meeting.date}`),
					])
				])
			]),
			Div({ class: "flex items-center gap-x-4 ml-4" }, [
				Avatar({ src: meeting.avatar, alt: meeting.userName, fallbackText: meeting.userName, size: "sm" }),
				Div({ class: "flex flex-col" }, [
					P({ class: "font-medium" }, meeting.userName),
					P({ class: "text-sm text-muted-foreground" }, meeting.userTitle || "Manager")
				])
			]),
			Div({ class: "px-4 pb-4 text-base text-muted-foreground" }, `${meeting.description || "No description provided."}`)
		])
	])
);

/**
 * This renders the topics section for the 1-1 meeting.
 *
 * @param {Array<object>} meetings - The meeting data
 * @returns {object}
 */
const Meetings = (meetings) =>
(
	Div({ class: "mb-6" }, [
		new List({
			cache: "meetings",
			key: "id",
			items: meetings || [],
			role: "list",
			rowItem: MeetingItem
		})
	])
);

/**
 * MeetingsListPage
 *
 * Renders the meetings list.
 *
 * @returns {object}
 */
export const MeetingsListPage = () =>
{
	return Div({ class: "flex flex-col contained" }, [
		Header(),
		Meetings(MEETINGS)
	]);
};

export default MeetingsListPage;
