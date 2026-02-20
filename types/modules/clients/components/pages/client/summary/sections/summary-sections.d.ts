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
export const ClientAvatarSection: (...args: any[]) => object;
/**
 * ClientSummaryCardsSection
 *
 * Horizontal scrollable cards at the top of the client page.
 *
 * @param {object} props
 * @param {object} props.client
 * @returns {object}
 */
export const ClientSummaryCardsSection: (...args: any[]) => object;
export function AboutSection({ about }: {
    about: string;
}): object;
/**
 * ContractSection
 *
 * Displays contract expiration and add-ons.
 *
 * @param {object} props - Properties for the section.
 * @returns {object}
 */
export const ContractSection: (...args: any[]) => object;
/**
 * TicketsSection
 *
 * Shows recent tickets in a list.
 *
 * @param {object} props
 * @param {object} props.client
 * @returns {object}
 */
export const TicketsSection: (...args: any[]) => object;
/**
 * InvoicesSection
 *
 * Displays a list of previous invoices.
 *
 * @param {object} props
 * @param {object} props.client - The client object containing invoice data.
 * @returns {object}
 */
export const InvoicesSection: (...args: any[]) => object;
