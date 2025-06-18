import { A, Div, P } from "@base-framework/atoms";
import { Button, Card, Icon } from "@base-framework/ui/atoms";
import { Icons } from "@base-framework/ui/icons";
import { MEETINGS } from "../../one-on-one/meetings.js";
import { ProfileSection } from "./profile-sections.js";

/**
 * This will create the 1-1 meeting quick summary section.
 *
 * @param {object} props - Component props
 * @param {number} props.userId - The user ID to get meetings for
 * @returns {object}
 */
export const OneOnOneSection = ({ userId }) =>
{
	const meeting = MEETINGS.find(m => m.userId === userId) || null;
	if (!meeting)
	{
		return ProfileSection({
			title: "1-1 Meetings",
		}, [
			Card({ class: "p-6", margin: 'm-0' }, [
				Div({ class: "text-center py-4" }, [
					Div({ class: "bg-accent inline-flex p-3 rounded-full mb-3" }, [
						Icon(Icons.calendar.default)
					]),
					P({ class: "text-lg font-medium mb-2" }, "No 1-1 meetings scheduled"),
					P({ class: "text-sm text-muted-foreground mb-4" },
						"Start by scheduling your first 1-1 meeting with this user."
					),
					Button({
						variant: 'withIcon',
						click: () => app.navigate(`/directory/user/${userId}/one-on-one`),
						class: "inline-flex items-center button outline",
						icon: Icons.circlePlus
					}, "Schedule first meeting")
				])
			])
		]);
	}

	const goals = meeting.goals || [];
	return ProfileSection({
		title: "1-1 Meetings",
		description: "Recent 1-1 meeting information"
	}, [
		Card({ class: "p-6", margin: 'm-0' }, [
			Div({ class: "space-y-4" }, [
				// Last meeting info
				Div({ class: "flex items-center justify-between" }, [
					P({ class: "text-sm" }, "Last meeting"),
					P({ class: "font-medium" },
						new Date(meeting.lastMeeting).toLocaleDateString()
					)
				]),

				// Goals summary
				Div({ class: "space-y-2" }, [
					P({ class: "text-sm text-muted-foreground" }, "Goals"),
					goals.map(goal =>
						Div({ class: "flex items-center space-x-2 py-1 border-b last:border-0" }, [
							Icon(Icons.check),
							P({ class: "text-sm truncate" }, goal.title)
						])
					)
				]),

				// View full details link
				Div({ class: "mt-4 pt-2" }, [
					A({
						href: `/directory/user/${userId}/one-on-one`,
						class: "inline-flex items-center text-sm"
					}, "View full details")
				])
			])
		])
	]);
};

export default OneOnOneSection;
