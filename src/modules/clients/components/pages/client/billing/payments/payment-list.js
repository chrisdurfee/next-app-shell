import { Div, P, Span } from "@base-framework/atoms";
import { Atom, DateTime } from "@base-framework/base";
import { List } from "@base-framework/organisms";
import { Badge, Card } from "@base-framework/ui/atoms";

/**
 * Helper function to get the badge color for payment status
 *
 * @param {string} status - The payment status
 * @return {string} - The badge color variant
 */
const getStatusBadgeColor = (status) =>
{
	switch (status)
	{
		case "Completed":
			return "success";
		case "Partial":
			return "warning";
		case "Pending":
			return "secondary";
		case "Failed":
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
const formatCurrency = (amount) =>
{
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD'
	}).format(amount);
};

/**
 * PaymentItem
 *
 * Renders a single payment row as a card.
 *
 * @param {object} payment
 * @returns {object}
 */
const PaymentItem = Atom((payment) =>
	Card({ class: "flex items-center justify-between p-4 hover:bg-muted/10", margin: "m-2" }, [
		Div({ class: "flex flex-1 flex-col md:flex-row md:items-center md:justify-between" }, [
			// Left column - Payment number and date
			Div({ class: "flex flex-col mb-2 md:mb-0" }, [
				P({ class: "font-medium" }, payment.paymentNumber),
				P({ class: "text-sm text-muted-foreground" },
					`Date: ${DateTime.format('standard', payment.date.split(" ")[0])}`
				),
				P({ class: "text-sm text-muted-foreground" },
					payment.description
				)
			]),

			// Middle column - Amount and method details
			Div({ class: "flex flex-col mb-2 md:mb-0 md:ml-8" }, [
				P({ class: "font-medium" }, formatCurrency(payment.amount)),
				Div({ class: "flex items-center text-sm text-muted-foreground" }, [
					`Method: ${payment.method}`
				]),
				payment.last4 ?
					P({ class: "text-sm text-muted-foreground" },
						`**${payment.last4}`
					) : null
			]),

			// Right column - Status badge
			Div({ class: "flex items-center" }, [
				Badge({ variant: getStatusBadgeColor(payment.status) }, payment.status)
			])
		])
	])
);

/**
 * DateDivider
 *
 * Renders a month divider between payments.
 *
 * @param {string} date
 * @returns {object}
 */
const DateDivider = (date) =>
	Div({ class: "flex mt-4" }, [
		Span({ class: "text-base text-muted-foreground bg-background p-2 pl-2" },
			DateTime.format('month-year', date.split(" ")[0])
		)
	]);

/**
 * PaymentList
 *
 * Lists all of a client's payments.
 *
 * @param {object} props
 * @param {Array<object>} props.payments
 * @returns {object}
 */
export const PaymentList = Atom(({ payments }) =>
	Div({ class: "space-y-6 mt-12" }, [
		new List({
			cache: "payments",
			key: "id",
			items: payments || [],
			divider: {
				itemProperty: 'date',
				layout: DateDivider
			},
			role: "list",
			rowItem: PaymentItem
		})
	])
);
