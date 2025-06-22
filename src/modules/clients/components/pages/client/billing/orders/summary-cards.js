import { Div } from "@base-framework/atoms";
import { Icons } from "@base-framework/ui/icons";
import { SummaryCard } from "./summary-card.js";

/**
 * Calculates summary statistics from orders data.
 *
 * @param {Array<object>} orders - List of order data
 * @returns {object} Object containing calculated statistics
 */
const calculateSummaryStats = (orders) =>
{
	// Calculate total orders amount
	const totalAmount = orders.reduce((sum, order) => sum + order.amount, 0);

	// Calculate completed orders amount
	const completedOrders = orders.filter(order => order.status === 'Completed');
	const completedAmount = completedOrders.reduce((sum, order) => sum + order.amount, 0);

	// Calculate in progress amount
	const inProgressOrders = orders.filter(order => ['In Progress', 'Processing'].includes(order.status));
	const inProgressAmount = inProgressOrders.reduce((sum, order) => sum + order.amount, 0);

	// Calculate pending amount
	const pendingOrders = orders.filter(order => order.status === 'Pending');
	const pendingAmount = pendingOrders.reduce((sum, order) => sum + order.amount, 0);

	// Calculate most recent order date
	let latestOrderDate = "N/A";
	if (orders.length > 0)
	{
		const sortedOrders = [...orders].sort((a, b) =>
		{
			return new Date(b.date).getTime() - new Date(a.date).getTime();
		});
		const latestDate = new Date(sortedOrders[0].date);
		latestOrderDate = latestDate.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'short',
			day: 'numeric'
		});
	}

	// Calculate order count by status
	const orderCounts = {
		total: orders.length,
		completed: completedOrders.length,
		inProgress: inProgressOrders.length,
		pending: pendingOrders.length
	};

	return {
		totalAmount: new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD'
		}).format(totalAmount),
		completedAmount: new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD'
		}).format(completedAmount),
		inProgressAmount: new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD'
		}).format(inProgressAmount),
		pendingAmount: new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD'
		}).format(pendingAmount),
		latestOrderDate,
		orderCounts
	};
};

/**
 * Summary cards component for orders dashboard.
 *
 * @param {object} props - Component properties
 * @param {Array<object>} props.orders - List of order entries
 * @returns {object}
 */
export const SummaryCards = ({ orders }) =>
{
	const stats = calculateSummaryStats(orders);

	return Div({ class: 'hidden md:flex flex-auto overflow-x-auto -mx-6 px-6 pb-2' }, [
		Div({ class: 'inline-flex flex-auto space-x-4 ml-[-24px] pl-6' }, [
			SummaryCard({
				title: 'Total Orders',
				value: stats.orderCounts.total.toString(),
				change: `Latest: ${stats.latestOrderDate}`,
				icon: Icons.shoppingBag
			}),
			SummaryCard({
				title: 'Completed Orders',
				value: stats.completedAmount,
				change: `${stats.orderCounts.completed} orders`,
				icon: Icons.check
			}),
			SummaryCard({
				title: 'In Progress',
				value: stats.inProgressAmount,
				change: `${stats.orderCounts.inProgress} orders`,
				icon: Icons.loader
			}),
			SummaryCard({
				title: 'Pending Orders',
				value: stats.pendingAmount,
				change: `${stats.orderCounts.pending} orders`,
				icon: Icons.clock
			}),
		])
	]);
};
