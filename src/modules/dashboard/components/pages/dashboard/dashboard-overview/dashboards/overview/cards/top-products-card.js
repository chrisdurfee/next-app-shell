import { Div, H3, Header, P } from "@base-framework/atoms";
import { Card } from "@base-framework/ui/atoms";
import * as d3 from 'd3';

/**
 * Creates a horizontal bar chart to display top products
 *
 * @param {HTMLElement} container - The HTML element to append the chart to.
 * @param {Array} data - The data for the horizontal bar chart.
 */
export function createHorizontalBarChart(container, data)
{
	const margin = { top: 20, right: 30, bottom: 20, left: 90 };
	const width = 500 - margin.left - margin.right;
	const height = 200 - margin.top - margin.bottom;

	const svg = d3
		.select(container)
		.append('svg')
		.attr('viewBox', `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`)
		.classed('w-full h-full', true)
		.append('g')
		.attr('transform', `translate(${margin.left},${margin.top})`);

	// X Scale
	const x = d3
		.scaleLinear()
		.domain([0, d3.max(data, d => d.value)])
		.nice()
		.range([0, width]);

	// Y Scale
	const y = d3
		.scaleBand()
		.domain(data.map(d => d.label))
		.range([0, height])
		.padding(0.2);

	const FONT_SIZE = '10px';

	// Add Y axis (product names)
	svg
		.append('g')
		.call(d3.axisLeft(y).tickSize(0))
		.selectAll('text')
		.attr('font-size', FONT_SIZE)
		.classed('text-muted-foreground font-medium', true);

	// Remove all axis lines
	svg
		.selectAll('.domain, .tick line')
		.remove();

	// Create horizontal bars
	svg
		.selectAll('.bar')
		.data(data)
		.enter()
		.append('rect')
		.attr('y', d => y(d.label))
		.attr('height', y.bandwidth())
		.attr('x', 0)
		.attr('width', d => x(d.value))
		.attr('rx', 4) // rounded corners
		.attr('opacity', 0.8)
		.classed('fill-primary bg-primary', true);

	// Add value labels at the end of each bar
	svg
		.selectAll('.value-label')
		.data(data)
		.enter()
		.append('text')
		.attr('x', d => x(d.value) + 5)
		.attr('y', d => y(d.label) + y.bandwidth() / 2)
		.attr('dy', '0.35em')
		.attr('font-size', FONT_SIZE)
		.classed('fill-primary text-muted-foreground font-medium', true)
		.text(d => `$${d.value.toLocaleString()}`);
}

/**
 * This will create the TopProductsCard molecule.
 *
 * @returns {object}
 */
export const TopProductsCard = () =>
{
	// Component mounted callback to initialize the chart
	const onCreated = (element) =>
	{
		const productData = [
			{ label: 'Premium Headphones', value: 12500 },
			{ label: 'Bluetooth Speaker', value: 8700 },
			{ label: 'Wireless Earbuds', value: 7200 },
			{ label: 'Smart Watch', value: 5900 },
			{ label: 'Phone Charger', value: 3200 }
		];

		// Create chart inside component once it's mounted
		createHorizontalBarChart(element, productData);
	};

	return Card({
		padding: 'p-6',
		margin: 'm-0',
		class: 'col-span-3'
	}, [
		Header({ class: 'flex flex-col space-y-1.5 mb-4' }, [
			H3({ class: 'font-semibold leading-none tracking-tight' }, 'Top Products'),
			P({ class: 'text-sm text-muted-foreground' }, 'Top selling products by revenue.'),
		]),
		Div({ class: 'flex flex-auto flex-col h-[200px]', onCreated })
	]);
};

export default TopProductsCard;
