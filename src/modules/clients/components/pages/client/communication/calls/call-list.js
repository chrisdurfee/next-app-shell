import { Div, P, Span } from "@base-framework/atoms";
import { Atom, DateTime } from "@base-framework/base";
import { List } from "@base-framework/organisms";
import { Card, Icon } from "@base-framework/ui/atoms";
import { Icons } from "@base-framework/ui/icons";
import { Avatar } from "@base-framework/ui/molecules";

/**
 * This will get the icon for the call status.
 *
 * @param {string} status - The call status.
 * @return {object} - The icon for the call status.
 */
const CallIcon = (status) =>
{
	switch (status)
	{
		case "Missed":
			return Icon({ class: 'text-red-500' }, Icons.phone.missed);
		case "Incoming":
			return Icon({ class: 'text-blue-500' }, Icons.phone.inbound);
		case "Outgoing":
			return Icon({ class: 'text-yellow-500' }, Icons.phone.outbound);
		default:
			return Icon({ class: 'text-base' }, Icons.phone.default);
	}
};

/**
 * CallItem
 *
 * Renders a single call row as a card.
 *
 * @param {object} call
 * @param {number} call.id
 * @param {string} call.contactName
 * @param {string} call.avatar
 * @param {string} call.time
 * @param {string} call.duration
 * @param {string} call.status
 * @returns {object}
 */
const CallItem = Atom(call =>
	Card({ class: "flex items-center justify-between p-4 cursor-pointer", margin: "m-2", hover: true }, [
		Div({ class: "flex items-center space-x-4" }, [
			Avatar({ src: call.avatar, alt: call.contactName, fallbackText: call.contactName, size: "sm" }),
			Div({ class: "flex flex-col" }, [
				P({ class: "font-medium" }, call.contactName),
				P({ class: "text-sm text-muted-foreground" }, call.time),
				P({ class: "text-sm text-muted-foreground" }, `Duration: ${call.duration}`)
			])
		]),
		CallIcon(call.status)
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
	Div({ class: "flex mt-4" }, [
		Span(
			{ class: "text-base text-muted-foreground bg-background p-2 pl-2" },
			DateTime.format('standard', date.split(" ")[0])
		)
	]);

/**
 * CallList
 *
 * Lists all of a client's calls.
 *
 * @param {object} props
 * @param {Array<object>} props.calls
 * @returns {object}
 */
export const CallList = Atom(({ calls }) =>
	Div({ class: "space-y-6 mt-12" }, [
		new List({
			cache: "calls",
			key: "id",
			items: calls || [],
			divider: {
				itemProperty: 'time',
				layout: DateDivider
			},
			role: "list",
			rowItem: CallItem
		})
	])
);