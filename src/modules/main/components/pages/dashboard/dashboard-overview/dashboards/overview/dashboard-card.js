import { Div, H1, H2, P } from "@base-framework/atoms";
import { Card } from "@components/atoms/cards/card.js";
import { Icon } from "@components/atoms/icon.js";

/**
 * DashboardCard
 *
 * Reusable card for displaying statistics.
 *
 * @param {object} props
 * @returns {object}
 */
export const DashboardCard = ({ title, value, change, icon }) => (
    Card({ padding: 'p-0', margin: 'm-0', class: 'flex flex-auto flex-col min-w-[300px] hover:bg-muted transition-colors' }, [
        Div({ class: 'p-6 flex flex-row items-center justify-between space-y-0 pb-2' }, [
            H2({ class: 'text-lg font-semibold' }, title),
            Icon(icon),
        ]),
        Div({ class: 'p-6 pt-0' }, [
            H1({ class: 'text-3xl font-bold text-primary' }, value),
            P({ class: 'text-sm text-muted-foreground' }, change)
        ])
    ])
);

export default DashboardCard;