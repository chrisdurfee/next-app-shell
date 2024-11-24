import { Div, H3, Header, P } from "@base-framework/atoms";
import { Card } from "@components/atoms/cards/card.js";
import * as d3 from 'd3';

/**
 * Creates a responsive donut chart in the specified container.
 *
 * @param {HTMLElement} container - The HTML element to append the chart to.
 * @param {Array} data - The data for the donut chart.
 */
export function createDonutChart(container, data)
{
    const width = 300;
    const height = 300;
    const radius = Math.min(width, height) / 2;

    const svg = d3
        .select(container)
        .append('svg')
        .attr('viewBox', `0 0 ${width} ${height}`)
        .classed('w-full h-full fill-current', true)
        .append('g')
        .attr('transform', `translate(${width / 2}, ${height / 2})`);

    // Color scale
    // const color = d3
    //     .scaleOrdinal()
    //     .domain(data.map(d => d.label))
    //     .range(["#4F46E5", "#EC4899", "#FACC15", "#10B981", "#8B5CF6"]);

    // Grayscale Color scale
    const color = d3
        .scaleOrdinal()
        .domain(data.map(d => d.label))
        .range(["#333333", "#666666", "#999999", "#CCCCCC", "#E6E6E6"]); // Grayscale colors

    // Create the pie generator
    const pie = d3.pie().value(d => d.value);

    // Create the arc generator
    const arc = d3
        .arc()
        .innerRadius(radius - 70) // Donut hole size
        .outerRadius(radius);

    // Draw the arcs
    svg
        .selectAll('path')
        .data(pie(data))
        .enter()
        .append('path')
        .attr('d', arc)
        .attr('fill', d => color(d.data.label))
        .classed('hover:opacity-80 transition-opacity', true);

    // Add labels
    const total = d3.sum(data, d => d.value);
    svg
        .append('text')
        .attr('text-anchor', 'middle')
        .attr('y', -10)
        .text(total.toLocaleString())
        .classed('text-3xl font-bold fill-current', true);

    svg
        .append('text')
        .attr('text-anchor', 'middle')
        .attr('y', 20)
        .text('Visitors')
        .classed('text-sm text-muted-foreground', true);
}

// Example Usage
const donutData = [
    { label: 'Chrome', value: 275 },
    { label: 'Safari', value: 125 },
    { label: 'Firefox', value: 75 },
    { label: 'Edge', value: 50 },
    { label: 'Other', value: 100 },
];

/**
 * This will create the VisitorsCard molecule with a donut chart.
 *
 * @returns {object}
 */
export const VisitorsCard = () => (
    Card({ padding: 'p-0', margin: 'm-0', class: 'col-span-2 flex flex-auto flex-col' }, [
        Header({ class: 'flex flex-col space-y-1.5 p-6' }, [
            H3({ class: 'font-semibold leading-none tracking-tight' }, 'Visitors Overview')
        ]),
        Div({ class: 'flex flex-auto flex-col p-6 pt-0' }, [
            Div({
                class: 'flex flex-auto flex-col items-center justify-center min-h-64 rounded-md',
                onCreated(ele) {
                    createDonutChart(ele, donutData);
                }
            }),
            P({ class: 'text-center text-sm' }, 'Trending up by 5.2% this month'),
            P({ class: 'text-center text-sm text-muted-foreground' }, 'Showing total visitors for the last 6 months')
        ])
    ])
);