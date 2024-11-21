import { Div, H3, Header } from "@base-framework/atoms";
import { Card } from "@components/atoms/cards/card.js";
import * as d3 from 'd3';

/**
 * Creates a responsive bar chart in the specified container.
 * @param {string} container - The CSS selector of the container for the chart.
 * @param {Array} data - The data for the bar chart.
 */
export function createBarChart(container, data) {
    const margin = { top: 20, right: 30, bottom: 30, left: 40 };
    const width = 600 - margin.left - margin.right; // Adjust size to fit your gray area
    const height = 400 - margin.top - margin.bottom;

    const svg = d3
        .select(container)
        .append('svg')
        .attr('viewBox', `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`)
        .classed('w-full h-full', true) // Tailwind utility classes for responsiveness
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

    // X Scale
    const x = d3
        .scaleBand()
        .domain(data.map(d => d.label))
        .range([0, width])
        .padding(0.2);

    // Y Scale
    const y = d3
        .scaleLinear()
        .domain([0, d3.max(data, d => d.value)])
        .nice()
        .range([height, 0]);

    // Add X axis
    svg
        .append('g')
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom(x).tickSizeOuter(0))
        .classed('text-muted-foreground', true); // Tailwind theme class

    // Add Y axis
    svg
        .append('g')
        .call(d3.axisLeft(y).ticks(5))
        .classed('text-muted-foreground', true); // Tailwind theme class

    // Bars
    svg
        .selectAll('.bar')
        .data(data)
        .enter()
        .append('rect')
        .attr('x', d => x(d.label))
        .attr('y', d => y(d.value))
        .attr('width', x.bandwidth())
        .attr('height', d => height - y(d.value))
        .classed('fill-primary bg-primary', true); // Tailwind theme classes

    // Add labels to bars
    svg
        .selectAll('.bar-label')
        .data(data)
        .enter()
        .append('text')
        .attr('x', d => x(d.label) + x.bandwidth() / 2)
        .attr('y', d => y(d.value) - 5)
        .attr('text-anchor', 'middle')
        .text(d => d.value)
        .classed('text-xs text-muted-foreground', true); // Tailwind theme class
}

// Example Usage:
const chartData = [
    { label: 'Jan', value: 1500 },
    { label: 'Feb', value: 3000 },
    { label: 'Mar', value: 4500 },
    { label: 'Apr', value: 2000 },
    { label: 'May', value: 3500 },
    { label: 'Jun', value: 6000 },
    { label: 'Jul', value: 4000 },
    { label: 'Aug', value: 3000 },
    { label: 'Sep', value: 1500 },
    { label: 'Oct', value: 4500 },
    { label: 'Nov', value: 5000 },
    { label: 'Dec', value: 2500 },
];

/**
 * This will create the OverviewCard molecule.
 *
 * @returns {object}
 */
export const OverviewCard = () => (
    Card({ padding: 'p-0', margin: 'm-0', class: 'col-span-4 flex flex-auto flex-col' }, [
        Header({ class: 'flex flex-col space-y-1.5 p-6' }, [
            H3({ class: 'font-semibold leading-none tracking-tight' }, 'Overview')
        ]),
        Div({ class: 'flex flex-auto flex-col p-6 pt-0' }, [
            Div({
                class: 'flex flex-auto flex-col min-h-64 rounded-md',
                onCreated(ele)
                {
                    createBarChart(ele, chartData);
                }
            })
        ])
    ])
);