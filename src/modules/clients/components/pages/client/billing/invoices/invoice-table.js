import { A, Div, P, Td, Thead, Tr } from "@base-framework/atoms";
import { Checkbox } from "@base-framework/ui/atoms";
import { CheckboxCol, DataTable, HeaderCol } from "@base-framework/ui/organisms";

/**
 * Helper function to get the badge color for invoice status
 *
 * @param {string} status - The invoice status
 * @return {string} - The badge color variant
 */
const getStatusBadgeColor = (status) =>
{
	switch (status)
	{
		case "Paid":
			return "bg-green-50 text-green-700 ring-1 ring-inset ring-green-600/20";
		case "Due":
			return "bg-yellow-50 text-yellow-700 ring-1 ring-inset ring-yellow-600/20";
		case "Pending":
			return "bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-700/10";
		case "Overdue":
			return "bg-red-50 text-red-700 ring-1 ring-inset ring-red-600/20";
		default:
			return "bg-gray-50 text-gray-700 ring-1 ring-inset ring-gray-600/20";
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
 * Format date string to a readable format
 *
 * @param {string} dateString - The date string to format
 * @return {string} - Formatted date string
 */
const formatDate = (dateString) =>
{
	if (!dateString) return '';
	const date = new Date(dateString);
	return date.toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'short',
		day: 'numeric'
	});
};

/**
 * This will render a header row for the invoices table.
 *
 * @returns {object}
 */
const HeaderRow = () => (
	Thead([
		Tr({ class: 'text-muted-foreground border-b' }, [
			CheckboxCol({ class: 'hidden md:table-cell' }),
			HeaderCol({ key: 'invoiceNumber', label: 'Invoice #'}),
			HeaderCol({ key: 'date', label: 'Date', class: 'hidden md:table-cell' }),
			HeaderCol({ key: 'dueDate', label: 'Due Date', class: 'hidden md:table-cell' }),
			HeaderCol({ key: 'status', label: 'Status' }),
			HeaderCol({ key: 'paymentMethod', label: 'Payment Method', class: 'hidden md:table-cell' }),
			HeaderCol({ key: 'amount', label: 'Amount', align: 'justify-end' })
		])
	])
);

/**
 * This will render an invoice row.
 *
 * @param {object} row - Row data containing the invoice entry
 * @param {function} onSelect - Selection callback
 * @returns {object}
 */
export const InvoiceRow = (row, onSelect) => (
	Tr({ class: 'items-center px-4 py-2 hover:bg-muted/50' }, [
		Td({ class: 'p-4 hidden md:table-cell' }, [
			new Checkbox({
				checked: row.selected,
				class: 'mr-2',
				onChange: () => onSelect(row)
			})
		]),
		Td({ class: 'p-4' }, [
			A({
				href: `invoice/${row.id}`,
				class: 'no-underline text-inherit hover:text-primary',
			}, [
				P({ class: 'text-base font-semibold leading-6 m-0' }, row.invoiceNumber),
				P({ class: 'truncate text-sm leading-5 text-muted-foreground m-0' }, `${row.items?.length || 0} items`)
			])
		]),
		Td({ class: 'p-4 hidden md:table-cell' }, [
			A({
				href: `invoice/${row.id}`,
				class: 'no-underline text-inherit hover:text-primary',
			}, formatDate(row.date))
		]),
		Td({ class: 'p-4 hidden md:table-cell' }, [
			A({
				href: `invoice/${row.id}`,
				class: 'no-underline text-inherit hover:text-primary',
			}, formatDate(row.dueDate))
		]),
		Td({ class: 'p-4' }, [
			Div({
				class: `inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${getStatusBadgeColor(row.status)}`
			}, row.status)
		]),
		Td({ class: 'p-4 hidden md:table-cell' }, [
			A({
				href: `invoice/${row.id}`,
				class: 'no-underline text-inherit hover:text-primary',
			}, row.paymentMethod || '-')
		]),
		Td({ class: 'p-4 text-right justify-end' }, [
			A({
				href: `invoice/${row.id}`,
				class: 'no-underline text-inherit hover:text-primary',
			}, formatCurrency(row.amount))
		])
	])
);

/**
 * This will create an invoice table displaying client invoices.
 *
 * @param {object} props - Component properties
 * @param {Array<object>} props.invoices - List of invoice entries
 * @returns {object}
 */
export const InvoiceTable = ({ invoices }) => (
	new DataTable({
		cache: 'invoices',
		customHeader: HeaderRow(),
		rows: invoices,
		rowItem: InvoiceRow,
		key: 'id',
	})
);
