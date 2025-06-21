import { Div } from "@base-framework/atoms";
import { Icons } from "@base-framework/ui/icons";
import { SummaryCard } from "./summary-card.js";

/**
 * SummaryCards
 *
 * A section displaying summary cards.
 *
 * @returns {object}
 */
export const SummaryCards = () => (
	Div({ class: 'hidden md:flex flex-auto overflow-x-auto -mx-6 px-6 pb-2' }, [
		Div({ class: 'inline-flex flex-auto space-x-4 ml-[-24px] pl-6' }, [
			SummaryCard({
				title: 'Total Clients',
				value: '1,200',
				change: '+5.4% from last month',
				icon: Icons.user.group
			}),
			SummaryCard({
				title: 'New Clients',
				value: '350',
				change: '+12% from last month',
				icon: Icons.user.plus
			}),
			SummaryCard({
				title: 'Lost Clients',
				value: '25',
				change: '-3% from last month',
				icon: Icons.user.minus
			}),
			SummaryCard({
				title: 'Total Revenue',
				value: '$145,678.00',
				change: '+10% from last month',
				icon: Icons.currency.dollar
			}),
		])
	])
);

export default SummaryCards;