import { Div } from "@base-framework/atoms";
import { Icons } from "@base-framework/ui/icons";
import { SummaryCard } from "./summary-card.js";

/**
 * Calculates summary statistics from invoice data.
 *
 * @param {Array<object>} invoices - List of invoice data
 * @returns {object} Object containing calculated statistics
 */
const calculateSummaryStats = (invoices) =>
{
	// Calculate total amount billed
	const totalAmount = invoices.reduce((sum, invoice) => sum + invoice.amount, 0);

	// Calculate amount paid
	const paidInvoices = invoices.filter(invoice => invoice.status === 'Paid');
	const paidAmount = paidInvoices.reduce((sum, invoice) => sum + invoice.amount, 0);

	// Calculate pending amount
	const pendingInvoices = invoices.filter(invoice => invoice.status === 'Pending');
	const pendingAmount = pendingInvoices.reduce((sum, invoice) => sum + invoice.amount, 0);

	// Calculate overdue amount
	const dueInvoices = invoices.filter(invoice => invoice.status === 'Due');
	const dueAmount = dueInvoices.reduce((sum, invoice) => sum + invoice.amount, 0);
		// Calculate most recent invoice date
	let latestInvoiceDate = "N/A";
	if (invoices.length > 0)
    {
		const sortedInvoices = [...invoices].sort((a, b) =>
        {
			return new Date(b.date).getTime() - new Date(a.date).getTime();
		});
		const latestDate = new Date(sortedInvoices[0].date);
		latestInvoiceDate = latestDate.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'short',
			day: 'numeric'
		});
	}

	return {
		totalAmount: new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD'
		}).format(totalAmount),
		paidAmount: new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD'
		}).format(paidAmount),
		pendingAmount: new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD'
		}).format(pendingAmount),
		dueAmount: new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD'
		}).format(dueAmount),
		latestInvoiceDate
	};
};

/**
 * Summary cards component for invoices dashboard.
 *
 * @param {object} props - Component properties
 * @param {Array<object>} props.invoices - List of invoice entries
 * @returns {object}
 */
export const SummaryCards = ({ invoices }) =>
{
	const stats = calculateSummaryStats(invoices);

	return Div({ class: 'hidden md:flex flex-auto overflow-x-auto -mx-6 px-6 pb-2' }, [
		Div({ class: 'inline-flex flex-auto gap-x-4 ml-[-24px] pl-6' }, [
			SummaryCard({
				title: 'Total Billed',
				value: stats.totalAmount,
				change: `Latest: ${stats.latestInvoiceDate}`,
				icon: Icons.document.default
			}),
			SummaryCard({
				title: 'Paid Invoices',
				value: stats.paidAmount,
				change: 'Received payment',
				icon: Icons.check
			}),
			SummaryCard({
				title: 'Pending Invoices',
				value: stats.pendingAmount,
				change: 'Awaiting payment',
				icon: Icons.clock
			}),
			SummaryCard({
				title: 'Due Amount',
				value: stats.dueAmount,
				change: 'Need attention',
				icon: Icons.warning
			}),
		])
	]);
};
