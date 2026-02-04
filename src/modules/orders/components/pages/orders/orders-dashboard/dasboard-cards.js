import { Div, H1, H2, P } from '@base-framework/atoms';
import { Card, Icon } from "@base-framework/ui/atoms";

/**
 * DashboardCard
 *
 * Reusable card for displaying statistics.
 *
 * @param {object} props
 * @returns {object}
 */
export const DashboardCard = ({ title, value, change, icon }) => (
    Card({ padding: 'p-0', margin: 'm-0', class: 'flex flex-col min-w-[250px] hover:bg-muted transition-colors' }, [
        Div({ class: 'p-6 flex flex-row items-center justify-between pb-2' }, [
            H2({ class: 'text-lg font-semibold' }, title),
            icon && Icon(icon),
        ]),
        Div({ class: 'p-6 pt-0' }, [
            H1({ class: 'text-3xl font-bold text-primary' }, value),
            P({ class: 'text-sm text-muted-foreground' }, change)
        ])
    ])
);

/**
 * Dashboard Cards Component
 *
 * @returns {object}
 */
export const DashboardCards = () => (
    Div({ class: 'flex flex-auto overflow-x-auto -mx-6 px-6 pb-6 md:mb-6' }, [
        Div({ class: 'inline-flex flex-auto gap-x-4 -ml-6 pl-6 mr-6 lg:mr-0' }, [
            DashboardCard({
                title: 'This Week',
                value: '$1,329',
                change: '+25% from last week',
            }),
            DashboardCard({
                title: 'This Month',
                value: '$5,329',
                change: '+10% from last month',
            }),
            DashboardCard({
                title: 'Total Revenue',
                value: '$12,329',
                change: '+15% overall',
            }),
            DashboardCard({
                title: 'New Orders',
                value: '452',
                change: '+12% increase',
            })
        ])
    ])
);