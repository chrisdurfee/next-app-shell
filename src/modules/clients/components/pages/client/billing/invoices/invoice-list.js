import { Div, P, Span } from "@base-framework/atoms";
import { Atom, DateTime } from "@base-framework/base";
import { List } from "@base-framework/organisms";
import { Badge, Card } from "@base-framework/ui/atoms";

/**
 * Helper function to get the badge color for invoice status
 *
 * @param {string} status - The invoice status
 * @return {string} - The badge color variant
 */
const getStatusBadgeColor = (status) => {
    switch (status) {
        case "Paid":
            return "success";
        case "Due":
            return "warning";
        case "Pending":
            return "secondary";
        case "Overdue":
            return "destructive";
        default:
            return "outline";
    }
};

/**
 * Format currency amount
 *
 * @param {number} amount - The amount to format
 * @return {string} - Formatted currency string
 */
const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
};

/**
 * InvoiceItem
 *
 * Renders a single invoice row as a card.
 *
 * @param {object} invoice
 * @returns {object}
 */
const InvoiceItem = Atom(invoice =>
    Card({ class: "flex items-center justify-between p-4 hover:bg-muted/10", margin: "m-2" }, [
        Div({ class: "flex flex-1 flex-col md:flex-row md:items-center md:justify-between" }, [
            // Left column - Invoice number and date
            Div({ class: "flex flex-col mb-2 md:mb-0" }, [
                P({ class: "font-medium" }, invoice.invoiceNumber),
                P({ class: "text-sm text-muted-foreground" },
                    `Issued: ${DateTime.format('standard', invoice.date.split(" ")[0])}`
                ),
                P({ class: "text-sm text-muted-foreground" },
                    `Due: ${DateTime.format('standard', invoice.dueDate.split(" ")[0])}`
                )
            ]),

            // Middle column - Amount and payment details
            Div({ class: "flex flex-col mb-2 md:mb-0 md:ml-8" }, [
                P({ class: "font-medium" }, formatCurrency(invoice.amount)),
                invoice.paymentDate ?
                    P({ class: "text-sm text-muted-foreground" },
                        `Paid: ${DateTime.format('standard', invoice.paymentDate.split(" ")[0])}`
                    ) : null,
                invoice.paymentMethod ?
                    P({ class: "text-sm text-muted-foreground" },
                        `Method: ${invoice.paymentMethod}`
                    ) : null
            ]),

            // Right column - Status badge
            Div({ class: "flex items-center" }, [
                Badge({ variant: getStatusBadgeColor(invoice.status) }, invoice.status)
            ])
        ])
    ])
);

/**
 * DateDivider
 *
 * Renders a month divider between invoices.
 *
 * @param {string} date
 * @returns {object}
 */
const DateDivider = (date) =>
    Div({ class: "flex mt-4" }, [
        Span(
            { class: "text-base text-muted-foreground bg-background p-2 pl-2" },
            DateTime.format('month-year', date.split(" ")[0])
        )
    ]);

/**
 * InvoiceList
 *
 * Lists all of a client's invoices.
 *
 * @param {object} props
 * @param {Array<object>} props.invoices
 * @returns {object}
 */
export const InvoiceList = Atom(({ invoices }) =>
    Div({ class: "space-y-6 mt-12" }, [
        new List({
            cache: "invoices",
            key: "id",
            items: invoices || [],
            divider: {
                itemProperty: 'date',
                layout: DateDivider
            },
            role: "list",
            rowItem: InvoiceItem
        })
    ])
);
