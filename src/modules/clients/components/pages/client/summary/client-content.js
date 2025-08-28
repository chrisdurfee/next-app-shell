import { Div, H2, Header, P } from "@base-framework/atoms";
import {
    AboutSection,
    ClientAvatarSection,
    ClientSummaryCardsSection,
    ContractSection,
    InvoicesSection,
    TicketsSection
} from "./sections/summary-sections.js";

/**
 * This will create the card header.
 *
 * @param {object} props
 * @returns {object}
 */
export const CardHeader = ({ title, description }) => (
	Header({ class: 'text-left' }, [
		H2({ class: "font-semibold tracking-tight text-2xl" }, title),
		P({ class: "text-sm text-muted-foreground" }, description)
	])
);

/**
 * ClientContent
 *
 * Displays the body content of the post.
 *
 * @param {object} props
 * @param {object} props.client - The client data.
 * @returns {object}
 */
export const ClientContent = ({ client }) => (
	Div({ class: "flex flex-auto flex-col gap-y-12 mt-6" }, [
		ClientAvatarSection({ client }),
		ClientSummaryCardsSection({ client }),
		AboutSection(client),
		ContractSection({ client }),
		TicketsSection({ client }),
		InvoicesSection({ client })
	])
);