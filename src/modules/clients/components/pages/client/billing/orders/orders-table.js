import { A, Div, P, Td, Thead, Tr } from "@base-framework/atoms";
import { Checkbox } from "@base-framework/ui/atoms";
import { CheckboxCol, DataTable, HeaderCol } from "@base-framework/ui/organisms";

/**
 * Helper function to get the badge color for order status
 *
 * @param {string} status - The order status
 * @return {string} - The badge color variant CSS classes
 */
const getStatusBadgeColor = (status) =>
{
	switch (status)
	{
		case "Completed":
			return "bg-green-50 text-green-700 ring-1 ring-inset ring-green-600/20";
		case "In Progress":
		case "Processing":
			return "bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-700/10";
		case "Pending":
			return "bg-yellow-50 text-yellow-700 ring-1 ring-inset ring-yellow-600/20";
		case "Cancelled":
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
 * This will render a header row for the orders table.
 *
 * @returns {object}
 */
const HeaderRow = () => (
	Thead([
		Tr({ class: 'text-muted-foreground border-b' }, [
			CheckboxCol({ class: 'hidden md:table-cell' }),
			HeaderCol({ key: 'orderNumber', label: 'Order #'}),
			HeaderCol({ key: 'date', label: 'Date', class: 'hidden md:table-cell' }),
			HeaderCol({ key: 'customer', label: 'Customer', class: 'hidden md:table-cell' }),
			HeaderCol({ key: 'status', label: 'Status' }),
			HeaderCol({ key: 'trackingNumber', label: 'Tracking #', class: 'hidden md:table-cell' }),
			HeaderCol({ key: 'amount', label: 'Amount', align: 'justify-end' })
		])
	])
);

/**
 * This will render an order row.
 *
 * @param {object} row - Row data containing the order entry
 * @param {function} onSelect - Selection callback
 * @returns {object}
 */
export const OrderRow = (row, onSelect) => (
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
				href: `order/${row.id}`,
				class: 'no-underline text-inherit hover:text-primary',
			}, [
				P({ class: 'text-base font-semibold leading-6 m-0' }, row.orderNumber),
				P({ class: 'truncate text-sm leading-5 text-muted-foreground m-0' }, `${row.items?.length || 0} items`)
			])
		]),
		Td({ class: 'p-4 hidden md:table-cell' }, [
			A({
				href: `order/${row.id}`,
				class: 'no-underline text-inherit hover:text-primary',
			}, formatDate(row.date))
		]),
		Td({ class: 'p-4 hidden md:table-cell' }, [
			A({
				href: `order/${row.id}`,
				class: 'no-underline text-inherit hover:text-primary',
			}, row.customer?.name || '-')
		]),
		Td({ class: 'p-4' }, [
			Div({
				class: `inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${getStatusBadgeColor(row.status)}`
			}, row.status)
		]),
		Td({ class: 'p-4 hidden md:table-cell' }, [
			A({
				href: `order/${row.id}`,
				class: 'no-underline text-inherit hover:text-primary',
			}, row.trackingNumber || '-')
		]),
		Td({ class: 'p-4 text-right justify-end' }, [
			A({
				href: `order/${row.id}`,
				class: 'no-underline text-inherit hover:text-primary',
			}, formatCurrency(row.amount))
		])
	])
);

/**
 * This will create an orders table displaying client orders.
 *
 * @param {object} props - Component properties
 * @param {Array<object>} props.orders - List of order entries
 * @returns {object}
 */
export const OrdersTable = ({ orders }) => (
	new DataTable({
		cache: 'orders',
		customHeader: HeaderRow(),
		rows: orders,
		rowItem: OrderRow,
		key: 'id',
	})
);
