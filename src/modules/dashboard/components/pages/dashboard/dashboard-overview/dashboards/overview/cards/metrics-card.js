import { Div, H3, Header, P, Span } from "@base-framework/atoms";
import { Card } from "@base-framework/ui/atoms";

/**
 * MetricItem
 *
 * Renders a single metric with label, value, and change indicator.
 *
 * @param {object} props
 * @returns {object}
 */
const MetricItem = ({ label, value, change, isPositive = true }) => (
	Div({ class: 'flex flex-col space-y-1' }, [
		Span({ class: 'text-sm font-medium text-muted-foreground' }, label),
		Div({ class: 'flex items-center' }, [
			Span({ class: 'text-2xl font-bold' }, value),
			Span({
				class: `ml-2 text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`
			}, [
				Span({ class: 'inline-block mr-1' }, isPositive ? '↑' : '↓'),
				change
			])
		])
	])
);

/**
 * This will create the MetricsCard molecule.
 *
 * @returns {object}
 */
export const MetricsCard = () => (
	Card({ padding: 'p-6', margin: 'm-0', class: 'col-span-4' }, [
		Header({ class: 'flex flex-col space-y-1.5 mb-4' }, [
			H3({ class: 'font-semibold leading-none tracking-tight' }, 'Business Metrics'),
			P({ class: 'text-sm text-muted-foreground' }, 'Key performance indicators for this period.'),
		]),
		Div({ class: 'grid grid-cols-2 gap-6 md:grid-cols-4 mt-8' }, [
			MetricItem({
				label: 'Conversion Rate',
				value: '3.2%',
				change: '12%',
				isPositive: true
			}),
			MetricItem({
				label: 'Avg. Order Value',
				value: '$58.39',
				change: '7%',
				isPositive: true
			}),
			MetricItem({
				label: 'Customer Churn',
				value: '1.8%',
				change: '0.5%',
				isPositive: false
			}),
			MetricItem({
				label: 'Monthly Recurring',
				value: '$12.5K',
				change: '9%',
				isPositive: true
			})
		])
	])
);

export default MetricsCard;
