import { Div, H1, Header } from "@base-framework/atoms";
import { Button } from "@components/atoms/buttons/buttons.js";
import { Icons } from "@components/icons/icons.js";
import { DatePicker } from "@components/molecules/date-time/date-picker.js";
import { TabGroup } from "@components/organisms/tabs/tab-group.js";
import { DashboardSummaryCards } from "./dashboard-summary-cards.js";
import { OverviewCard } from "./overview-card.js";
import { RecentSalesCard } from "./recent-sales-card.js";

/**
 * This will create the DashboardHeader molecule.
 *
 * @returns {object}
 */
const DashboardHeader = () => (
    Header({ class: 'flex items-center justify-between' }, [
        H1({ class: 'text-3xl font-bold' }, 'Dashboard'),
        Div({ class: 'flex items-center gap-2' }, [
            new DatePicker({ label: 'Pick a date', icon: Icons.calendar }),
            Button({ variant: 'default' }, 'Download')
        ])
    ])
);

/**
 * This will create the DashboardOverview molecule.
 *
 * @returns {object}
 */
export const DashboardOverview = () => (
    Div({ class: 'flex flex-col p-6 lg:p-8 space-y-4' }, [

        DashboardHeader(),

        Div({ class: 'justify-between flex flex-auto items-center' }, [
            new TabGroup({
                options: [
                    { label: 'Overview', value: 'overview' },
                    { label: 'Analytics', value: 'analytics' },
                    { label: 'Reports', value: 'reports', disabled: true },
                    { label: 'Notifications', value: 'notifications' },
                ],
                onSelect: (value) => console.log("Selected tab:", value)
            }),
        ]),

        Div({ class: 'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 space-y-4' }, [

            DashboardSummaryCards(),

            Div({ class: 'grid gap-4 md:grid-cols-2 lg:grid-cols-7' }, [
                OverviewCard(),
                RecentSalesCard(),
            ])
        ])
    ])
);