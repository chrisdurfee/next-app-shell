import { Div, P } from "@base-framework/atoms";
import { Atom } from "@base-framework/base";
import { List } from "@base-framework/organisms";
import { Card, Icon } from "@base-framework/ui/atoms";
import { Icons } from "@base-framework/ui/icons";
import { Avatar } from "@base-framework/ui/molecules";

/**
 * This will get the icon for the call status.
 *
 * @param {string} status - The call status.
 * @return {string} - The icon for the call status.
 */
const CallIcon = (status) =>
{
	switch (status)
	{
		case "Missed":
			return Icons.phone.missed;
		case "Incoming":
			return Icons.phone.inbound;
		case "Outgoing":
			return Icons.phone.oubound;
		default:
			return Icons.phone.default;
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
	Card({ class: "flex items-center justify-between p-4 hover:bg-muted/10", margin: "m-2" }, [
		Div({ class: "flex items-center space-x-4" }, [
			Avatar({ src: call.avatar, alt: call.contactName, fallbackText: call.contactName, size: "sm" }),
			Div({ class: "flex flex-col" }, [
				P({ class: "font-medium" }, call.contactName),
				P({ class: "text-sm text-muted-foreground" }, call.time),
				P({ class: "text-sm text-muted-foreground" }, `Duration: ${call.duration}`)
			])
		]),
		Icon(CallIcon(call.status))
	])
);

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
		new List({ cache: "calls", key: "id", items: calls || [], role: "list", rowItem: CallItem })
	])
);