import { Div, H1, H2 } from "@base-framework/atoms";
import { Card } from "@base-framework/ui/atoms";

/**
 * Creates a simple sparkline chart
 *
 * @param {HTMLElement} container - The HTML element to append the chart to
 * @param {Array} data - Array of data points for the sparkline
 * @param {string} color - Color of the sparkline
 */
function createSparkline(container, data, color = '#4F46E5')
{
	const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

	const width = 300; // 👈 Stretch this to control how wide the viewBox is
	const height = 40;

	svg.setAttribute('width', '100%'); // will scale to fit container
	svg.setAttribute('height', `${height}`);
	svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
	svg.setAttribute('preserveAspectRatio', 'none'); // 👈 important

	const min = Math.min(...data);
	const max = Math.max(...data);
	const range = max - min || 1;

	let pathData = '';
	data.forEach((point, i) =>
	{
		const x = (i / (data.length - 1)) * width;
		const y = height - (((point - min) / range) * 30 + 5); // Y position with top/bottom padding
		pathData += (i === 0) ? `M ${x},${y}` : ` L ${x},${y}`;
	});

	const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
	path.setAttribute('d', pathData);
	path.setAttribute('fill', 'none');
	path.setAttribute('stroke', color);
	path.setAttribute('stroke-width', '2');

	svg.appendChild(path);
	container.appendChild(svg);
}

/**
 * KPI Card component
 *
 * @param {Object} props - Component properties
 * @returns {Object} - Card component
 */
export const KpiCard = ({ title, value, change = null, isPositive = true, chartData = [] }) =>
{
	const onCreated = (element) =>
	{
		if (chartData && chartData.length > 0)
		{
			createSparkline(element, chartData, isPositive ? '#10B981' : '#EF4444');
		}
	};

	return Card({
		padding: 'p-6',
		margin: 'm-0',
		class: 'flex flex-col relative overflow-hidden'
	}, [
		H2({ class: 'text-sm font-medium text-muted-foreground' }, title),
		Div({ class: 'flex items-center justify-between' }, [
			H1({ class: 'text-3xl font-bold mt-2' }, value),
			change && Div({ class: `text-sm font-medium ${isPositive ? 'text-green-500' : 'text-red-500'}` }, [
				isPositive ? '+' : '',
				change,
				Div({ class: 'text-xs text-muted-foreground' }, 'from last month')
			])
		]),
		Div({ class: 'spark-container flex flex-auto w-full h-16 my-4', onCreated })
	]);
};

/**
 * Creates a row of KPI cards
 *
 * @returns {Object} - Row of KPI cards
 */
export const KpiCardsRow = () => (
	Div({ class: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4' }, [
		KpiCard({
			title: 'Revenue',
			value: '$125,231',
			change: '20.1%',
			isPositive: true,
			chartData: [20, 45, 30, 50, 25, 40, 45]
		}),
		KpiCard({
			title: 'Sales',
			value: '20K',
			change: '1.7%',
			isPositive: false,
			chartData: [45, 35, 55, 35, 30, 45, 40]
		}),
		KpiCard({
			title: 'New Customers',
			value: '3602',
			change: '36.5%',
			isPositive: true,
			chartData: [30, 45, 65, 50, 40, 30, 55, 60]
		}),
		KpiCard({
			title: 'Active Users',
			value: '1,289',
			change: '12.3%',
			isPositive: true,
			chartData: [25, 30, 35, 40, 45, 35, 25, 40]
		})
	])
);

export default KpiCardsRow;
