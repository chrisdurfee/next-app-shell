import { Div } from "@base-framework/atoms";
import { Icons } from "@components/icons/icons.js";
import { DashboardCard } from "./dashboard-card.js";

/**
 * This will create the DashboardSummaryCards molecule.
 *
 * @returns {object}
 */
export const DashboardSummaryCards = () => (
    Div({ class: 'grid gap-4 md:grid-cols-2 lg:grid-cols-4' }, [
        DashboardCard({
            title: 'Total Revenue',
            value: '$45,231.89',
            change: '+20.1% from last month',
            icon: Icons.currency.dollar
        }),
        DashboardCard({
            title: 'Subscriptions',
            value: '+2,350',
            change: '+180.1% from last month',
            icon: Icons.user.plus
        }),
        DashboardCard({
            title: 'Sales',
            value: '+12,234',
            change: '+19% from last month',
            icon: Icons.shoppingBag
        }),
        DashboardCard({
            title: 'Active Now',
            value: '+573',
            change: '+201 since last hour',
            icon: Icons.barChart
        }),
    ])
);