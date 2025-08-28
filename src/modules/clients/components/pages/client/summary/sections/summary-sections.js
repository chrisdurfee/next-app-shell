import { A, Div, H2, Header, P } from "@base-framework/atoms";
import { Atom } from "@base-framework/base";
import { List } from "@base-framework/organisms";
import { Card, Icon } from "@base-framework/ui";
import { Badge } from "@base-framework/ui/atoms";
import { Icons } from "@base-framework/ui/icons";
import { Avatar } from "@base-framework/ui/molecules";
import { ClientSummaryCard } from "./client-summary-card.js";

/**
 * ProfileSection
 *
 * Generic section wrapper.
 *
 * @param {object} props - Properties for the section.
 * @returns {object}
 */
const ProfileSection = Atom((props, children) =>
	Div({ class: "space-y-6" }, [
		Header({ class: "flex flex-col space-y-2" }, [
			H2({ class: "text-xl font-semibold" }, props.title),
			props.description && P({ class: "text-sm text-muted-foreground" }, props.description)
		]),
		...children
	])
);

/**
 * ClientAvatarSection
 *
 * Shows the client logo/avatar, long name + code, contact name, and status
 * laid out exactly as in the design.
 *
 * @param {object} props
 * @param {object} props.client
 * @returns {object}
 */
export const ClientAvatarSection = Atom(({ client }) =>
	Div({ class: "flex items-center space-x-4 my-0" }, [
		Avatar({
			src: client.avatar,
			alt: client.name,
			fallbackText: client.name,
			size: "lg"
		}),
		Div({ class: "flex flex-col space-y-1" }, [
			Div({ class: "flex items-baseline space-x-2" }, [
				H2({ class: "text-2xl font-semibold text-foreground" }, client.name),
				P({ class: "text-sm text-muted-foreground" }, client.code)
			]),
			Div({ class: "flex items-center space-x-2" }, [
				P({ class: "text-sm text-muted-foreground" }, client.contactName),
				Badge({
					variant: client.status === "Active" ? "primary" : "secondary"
				}, client.status)
			])
		])
	])
);

/**
 * ClientSummaryCardsSection
 *
 * Horizontal scrollable cards at the top of the client page.
 *
 * @param {object} props
 * @param {object} props.client
 * @returns {object}
 */
export const ClientSummaryCardsSection = Atom(({ client }) =>
	Div({ class: "relative -mx-6 pl-6" }, [
		Div({
			class:
				"pointer-events-none absolute top-0 left-0 h-full w-6 " +
				"bg-linear-to-r from-background to-transparent"
		}),
		Div({ class: "flex flex-auto overflow-x-auto -ml-6 mr-0 px-6" }, [
			Div({ class: "flex space-x-4 pb-4 max-w-xs" }, [
				ClientSummaryCard({
					title: "Payment Amount",
					value: `$${client.payment}`,
					icon: Icons.creditCard,
					url: `clients/client/${client.id}/billing/payments`
				}),
				ClientSummaryCard({
					title: "Package",
					value: client.package,
					icon: Icons.cube,
					url: `clients/client/${client.id}/billing/orders`
				}),
				ClientSummaryCard({
					title: "Next Due Date",
					value: client.nextDue,
					icon: Icons.calendar.default,
					url: `clients/client/${client.id}/billing/payments`
				}),
				ClientSummaryCard({
					title: "Secret Passphrase",
					value: client.passphrase,
					icon: Icons.locked
				}),
				ClientSummaryCard({
					title: "Client Since",
					value: client.since,
					icon: Icons.clock
				})
			])
		]),
		Div({
			class:
				"pointer-events-none absolute top-0 right-0 h-full w-16 " +
				"bg-linear-to-l from-background to-transparent"
		})
	])
);

/**
 * AboutSection
 *
 * Simple header + paragraph, no card.
 *
 * @param {object} props
 * @param {string} props.about - User about text.
 * @returns {object}
 */
export const AboutSection = ({ about }) =>
	ProfileSection({ title: "About"}, [
		P({ class: "text-base text-muted-foreground max-w-[800px]" }, about)
	]);


/**
 * ContractSection
 *
 * Displays contract expiration and add-ons.
 *
 * @param {object} props - Properties for the section.
 * @returns {object}
 */
export const ContractSection = Atom(({client}) =>
	ProfileSection({ title: "Packages and Contract" }, [
		Card({ class: "p-6", margin: "m-0", hover: true }, [
			Div({ class: "grid grid-cols-1 sm:grid-cols-2 gap-6" }, [
				// left side
				Div({ class: "space-y-12" }, [
					// expiration row
					Div({ class: "space-y-1" }, [
						P({ class: "text-sm text-muted-foreground" }, "Contract expiration in 8 months"),
						Div({ class: "flex items-center space-x-2" }, [
							P({ class: "font-medium text-foreground" }, client.contractExpires),
							Badge({ variant: "secondary" }, client.contractStatus)
						])
					]),
					// billing row
					Div({ class: "space-y-1" }, [
						P({ class: "text-sm text-muted-foreground" }, "Billing"),
						P({ class: "font-medium text-foreground" },
							`${client.package} (ID: ${client.contractId}), $${client.payment} monthly`
						)
					])
				]),
				// right side
				Div({ class: "space-y-12" }, [
					Div({ class: "space-y-1" }, [
						P({ class: "text-sm text-muted-foreground" }, "Upgrades"),
						Div({ class: "flex flex-wrap gap-2" },
							client.addOns && client.addOns.map(a => Badge({ variant: "outline" }, a))
						)
					]),
					Div({ class: "space-y-1" }, [
						P({ class: "text-sm text-muted-foreground" }, "Sales Agent"),
						P({ class: "font-medium text-foreground" }, client.salesAgent || "Not Assigned")
					])
				])
			])
		])
	])
);

/**
 * TicketIcon
 *
 * @param {string} priority - The priority of the ticket.
 * @returns {string} - The icon svg
 */
const TicketIcon = (priority) =>
{
	switch (priority)
	{
		case "high":
			return Icons.chevron.up;
		case "low":
			return Icons.chevron.down;
		default:
			return Icons.check;
	}
};

/**
 * TicketListItem
 *
 * Renders a single ticket as a row in the list.
 *
 * @param {object} ticket
 * @returns {object}
 */
const TicketListItem = Atom(ticket =>
	Card({ class: "flex items-center justify-between p-4 cursor-pointer", margin: "m-2", hover: true }, [
		Div({ class: "flex items-center space-x-4" }, [
			Icon(TicketIcon(ticket.priority)),
			Div({ class: "flex flex-col" }, [
				P({ class: "font-medium" }, ticket.subject),
				P({ class: "text-sm text-muted-foreground" }, ticket.owner)
			])
		]),
		Badge({ variant: ticket.status === "Open" ? "primary" : "secondary" }, ticket.status)
	])
);

/**
 * TicketsSection
 *
 * Shows recent tickets in a list.
 *
 * @param {object} props
 * @param {object} props.client
 * @returns {object}
 */
export const TicketsSection = Atom(({ client }) =>
	ProfileSection({ title: "Tickets" }, [
		new List({
			cache: "tickets",
			key: "id",
			items: client.tickets,
			role: "list",
			rowItem: TicketListItem
		})
	])
);

/**
 * InvoiceListItem
 *
 * Renders a single invoice as a row in the list.
 *
 * @param {object} client
 * @returns {function}
 */
const InvoiceListItem = (client) => (
	Atom((invoice) =>
		A({ href: `clients/client/${client.id}/billing/invoices/${invoice.id}` }, [
			Card({ class: "flex items-center justify-between cursor-pointer p-4", margin: "m-2", hover: true }, [
				Div({ class: "flex items-center space-x-4" }, [
					Icon(Icons.document.default),
					Div({ class: "flex flex-col" }, [
						P({ class: "font-medium" }, invoice.number),
						P({ class: "text-sm text-muted-foreground" }, invoice.date)
					])
				]),
				Div({ class: "flex items-center space-x-4" }, [
					P({ class: "font-medium text-foreground" }, invoice.amount),
					Badge({ variant: invoice.status === "Paid" ? "secondary" : "outline" }, invoice.status)
				])
			])
		])
	)
);

/**
 * InvoicesSection
 *
 * Displays a list of previous invoices.
 *
 * @param {object} props
 * @param {object} props.client - The client object containing invoice data.
 * @returns {object}
 */
export const InvoicesSection = Atom(({ client }) =>
	ProfileSection({ title: "Previous Invoices" }, [
		new List({
			cache: "invoices",
			key: "id",
			items: [
				{ id: 1, number: "INV-1001", date: "May 1, 2024", amount: "$200.00", status: "Paid" },
				{ id: 2, number: "INV-1002", date: "Jun 1, 2024", amount: "$150.00", status: "Overdue" },
				{ id: 3, number: "INV-1003", date: "Jul 1, 2024", amount: "$175.00", status: "Paid" }
			],
			role: "list",
			rowItem: InvoiceListItem(client)
		})
	])
);
