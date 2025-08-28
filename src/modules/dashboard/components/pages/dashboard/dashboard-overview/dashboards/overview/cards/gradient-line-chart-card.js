import { Div, H3, Header } from "@base-framework/atoms";
import { Card } from "@base-framework/ui/atoms";
import * as d3 from "d3";

/**
 * Creates a responsive two-line chart with downward gradient styling.
 *
 * @param {HTMLElement} container - The HTML element to append the chart to.
 * @param {Array} data - The data for the line chart.
 */
export function createStyledLineChartWithAxes(container, data) {
	const margin = { top: 20, right: 20, bottom: 30, left: 40 };
	const width = 600 - margin.left - margin.right;
	const height = 250 - margin.top - margin.bottom;

	const svg = d3
		.select(container)
		.append("svg")
		.attr(
			"viewBox",
			`0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`
		)
		.classed("w-full h-full", true)
		.append("g")
		.attr("transform", `translate(${margin.left},${margin.top})`);

	const FONT_SIZE = '6px';

	// Define Scales
	const x = d3
		.scaleTime()
		.domain(d3.extent(data, (d) => d.date))
		.range([0, width]);

	const y = d3
		.scaleLinear()
		.domain([0, d3.max(data, (d) => Math.max(d.mobile, d.desktop))])
		.range([height, 0]);

	// Add X Axis
	svg.append("g")
		.attr("transform", `translate(0,${height})`)
		.call(d3.axisBottom(x).tickSize(0)) // No tick lines
		.selectAll("text")
		.attr("font-size", FONT_SIZE)
		.classed("text-muted-foreground", true);

	// Add Y Axis
	svg.append("g")
		.call(d3.axisLeft(y).ticks(5).tickSize(0))
		.selectAll("text")
		.attr("font-size", FONT_SIZE)
		.classed("text-muted-foreground", true);

	// Remove Y axis path (line on the edge)
	svg.selectAll('.domain').remove();

	// Remove Y axis path (line on the edge)
	svg.selectAll('.domain').remove();

	// Gradient Definitions
	const defs = svg.append("defs");

	// Mobile Gradient
	const gradientMobile = defs
		.append("linearGradient")
		.attr("id", "mobile-gradient-area")
		.attr("x1", "0%")
		.attr("x2", "0%")
		.attr("y1", "0%")
		.attr("y2", "100%");
	gradientMobile
		.append("stop")
		.attr("offset", "0%")
		.attr("stop-color", "#ff4f4f")
		.attr("stop-opacity", 0.4);
	gradientMobile
		.append("stop")
		.attr("offset", "100%")
		.attr("stop-color", "#ff4f4f")
		.attr("stop-opacity", 0);

	// Desktop Gradient
	const gradientDesktop = defs
		.append("linearGradient")
		.attr("id", "desktop-gradient-area")
		.attr("x1", "0%")
		.attr("x2", "0%")
		.attr("y1", "0%")
		.attr("y2", "100%");
	gradientDesktop
		.append("stop")
		.attr("offset", "0%")
		.attr("stop-color", "#4f83ff")
		.attr("stop-opacity", 0.4);
	gradientDesktop
		.append("stop")
		.attr("offset", "100%")
		.attr("stop-color", "#4f83ff")
		.attr("stop-opacity", 0);

	// Line and Area Generators
	const line = d3
		.line()
		.x((d) => x(d.date))
		.y((d) => y(d.value))
		.curve(d3.curveBasis);

	const area = d3
		.area()
		.x((d) => x(d.date))
		.y0(height)
		.y1((d) => y(d.value))
		.curve(d3.curveBasis);

	// Add Mobile Area
	svg.append("path")
		.datum(data.map((d) => ({ date: d.date, value: d.mobile })))
		.attr("d", area)
		.attr("fill", "url(#mobile-gradient-area)");

	// Add Mobile Line
	svg.append("path")
		.datum(data.map((d) => ({ date: d.date, value: d.mobile })))
		.attr("d", line)
		.attr("fill", "none")
		.attr("stroke", "#ff4f4f")
		.attr("stroke-width", 1);

	// Add Desktop Area
	svg.append("path")
		.datum(data.map((d) => ({ date: d.date, value: d.desktop })))
		.attr("d", area)
		.attr("fill", "url(#desktop-gradient-area)");

	// Add Desktop Line
	svg.append("path")
		.datum(data.map((d) => ({ date: d.date, value: d.desktop })))
		.attr("d", line)
		.attr("fill", "none")
		.attr("stroke", "#4f83ff")
		.attr("stroke-width", 1);
}

// Example Data (with more fluctuation)
const styledLineChartData = [
	{ date: new Date(2023, 3, 1), mobile: 100, desktop: 50 },
	{ date: new Date(2023, 3, 10), mobile: 400, desktop: 250 },
	{ date: new Date(2023, 3, 20), mobile: 300, desktop: 150 },
	{ date: new Date(2023, 3, 30), mobile: 600, desktop: 500 },
	{ date: new Date(2023, 4, 10), mobile: 200, desktop: 450 },
	{ date: new Date(2023, 4, 20), mobile: 800, desktop: 600 },
];

/**
 * This will create the GradientLineChartCard molecule with axes.
 *
 * @returns {object}
 */
export const GradientLineChartCard = () => (
	Card({ padding: "p-0", margin: "m-0", class: "col-span-5 flex flex-auto flex-col" }, [
		Header({ class: "flex flex-col gap-y-1.5 p-6" }, [
			H3({ class: "font-semibold leading-none tracking-tight" }, "Interactive Area Chart"),
		]),
		Div({ class: "flex flex-auto flex-col p-6 pt-0" }, [
			Div({
				class: "flex flex-auto flex-col rounded-md",
				onCreated(ele) {
					createStyledLineChartWithAxes(ele, styledLineChartData);
				},
			}),
		]),
	])
);
