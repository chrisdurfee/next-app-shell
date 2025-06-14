import { Div, H2, Header, P } from "@base-framework/atoms";
import { Atom } from "@base-framework/base";
import { Card } from "@base-framework/ui";
import { Badge, Button } from "@base-framework/ui/atoms";
import { Icons } from "@base-framework/ui/icons";
import { Avatar } from "@base-framework/ui/molecules";
import { DataTable } from "@base-framework/ui/organisms";
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
	Div({ class: "flex items-center space-x-4 mt-6" }, [
		Avatar({
			src: client.avatar,
			alt: client.name,
			fallbackText: client.name,
			size: "xl"
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
	Div({ class: "hidden md:flex overflow-x-auto -mx-6 px-6 pb-4" },
		Div({ class: "inline-flex flex-auto space-x-4 ml-[-24px] pl-6" }, [
			ClientSummaryCard({
				title: "Payment Amount",
				value: `$${client.payment}`,
				icon: Icons.creditCard
			}),
			ClientSummaryCard({
				title: "Package",
				value: client.package,
				icon: Icons.cube
			}),
			ClientSummaryCard({
				title: "Next Due Date",
				value: client.nextDue,
				icon: Icons.calendar.default
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
	)
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
export const ContractSection = Atom((props) =>
	ProfileSection({ title: "Packages and Contract" }, [
		Card({ class: "p-6", margin: "m-0" }, [
			Div({ class: "grid grid-cols-1 sm:grid-cols-2 gap-6" }, [
				Div({ class: "space-y-1" }, [
					P({ class: "text-sm text-muted-foreground" }, "Expires"),
					P({ class: "font-medium text-foreground" }, props.client.contractExpires),
					P({ class: "text-sm text-muted-foreground" }, props.client.contractStatus)
				]),
				Div({ class: "space-y-1" }, [
					P({ class: "text-sm text-muted-foreground" }, "Add-Ons"),
					Div({ class: "flex flex-wrap gap-2" }, props.client.addOns.map(a => Badge({ variant: "outline" }, a)))
				])
			])
		])
	])
);

/**
 * TicketsSection
 *
 * Shows recent support tickets.
 *
 * @param {object} props - Properties for the section.
 * @returns {object}
 */
export const TicketsSection = Atom((props) =>
	ProfileSection({ title: "Tickets" }, [
		Div({ class: "overflow-x-auto" }, [
			new DataTable({
				key: "id",
				headers: [
					{ label: "", key: "priority" },
					{ label: "Subject", key: "subject" },
					{ label: "Owner", key: "owner" },
					{ label: "Status", key: "status" }
				],
				rows: props.client.tickets,
				rowItem: (ticket) => Div({ class: "flex items-center justify-between p-2 hover:bg-muted/50 rounded" }, [
					Div({ class: "flex items-center space-x-3" }, [
						//Icon({ class: "text-lg" }, Icons.arrow[ticket.priority]),
						Div({ class: "flex flex-col" }, [
							P({ class: "font-medium" }, ticket.subject),
							P({ class: "text-sm text-muted-foreground" }, ticket.owner)
						])
					]),
					Badge({ variant: ticket.status === "Open" ? "primary" : "secondary" }, ticket.status)
				])
			})
		]),
		Div({ class: "text-right" }, Button({ variant: "ghost", label: "View more…" }))
	])
);
