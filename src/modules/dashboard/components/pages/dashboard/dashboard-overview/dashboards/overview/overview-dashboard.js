import { Div } from "@base-framework/atoms";
import { Panel } from "@base-framework/ui/organisms";
import { DashboardSummaryCards } from "./dashboard-summary-cards.js";
import { GradientLineChartCard } from "./gradient-line-chart-card.js";
import { OverviewCard } from "./overview-card.js";
import { RecentSalesCard } from "./recent-sales-card.js";
import { VisitorsCard } from "./visitors-card.js";

/**
 * This will create the OverviewDashboard molecule
 *
 * @returns {object}
 */
export const OverviewDashboard = () => (
    new Panel([
        Div({ class: 'mt-2 lg:mt-0 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 space-y-4' }, [

            DashboardSummaryCards(),
            Div({ class: 'grid md:gap-4 space-y-4 md:space-y-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-7' }, [
                OverviewCard(),
                RecentSalesCard(),
            ]),
            Div({ class: 'grid md:gap-4 space-y-4 md:space-y-0 grid-cols-1 md:grid-cols-4 lg:grid-cols-7' }, [
                VisitorsCard(),
                GradientLineChartCard(),
            ])
        ])
    ])
);

export default OverviewDashboard;