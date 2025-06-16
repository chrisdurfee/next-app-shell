import { Div, P } from "@base-framework/atoms";
import { Atom } from "@base-framework/base";
import { List } from "@base-framework/organisms";
import { Badge, Card } from "@base-framework/ui/atoms";
import { Avatar } from "@base-framework/ui/molecules";

/**
 * ContactItem
 *
 * Renders a single contact row as a card.
 *
 * @param {object} contact
 * @param {string} contact.name
 * @param {string} contact.email
 * @param {string} contact.phone
 * @param {string} contact.role
 * @returns {object}
 */
const ContactItem = Atom(contact =>
	Card({ class: "flex items-center justify-between p-4 hover:bg-muted/10", margin: "m-2" }, [
		Div({ class: "flex items-center space-x-4" }, [
			Avatar({ src: contact.avatar, alt: contact.name, fallbackText: contact.name, size: "sm" }),
			Div({ class: "flex flex-col" }, [
				P({ class: "font-medium" }, contact.name),
				P({ class: "text-sm text-muted-foreground" }, contact.email),
				P({ class: "text-sm text-muted-foreground" }, contact.phone)
			])
		]),
		Badge({ variant: contact.role === "Primary" ? "primary" : "outline" }, contact.role)
	])
);

/**
 * ContactList
 *
 * Lists all of a client's contacts.
 *
 * @param {object} props
 * @param {Array} props.contacts
 * @returns {object}
 */
export const ContactList = Atom(({ contacts }) =>
	Div({ class: "space-y-6 mt-12" }, [
		new List({
			cache: "contacts",
			key: "id",
			items: contacts || [],
			role: "list",
			rowItem: ContactItem
		})
	])
);
