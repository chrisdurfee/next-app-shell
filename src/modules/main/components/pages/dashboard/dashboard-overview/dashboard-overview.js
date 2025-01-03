import { Div, H1, Header } from "@base-framework/atoms";
import { Button } from "@base-framework/ui/atoms";
import { Icons } from "@base-framework/ui/icons";
import { DatePicker } from "@base-framework/ui/molecules";
import { Panel, TabNavigation } from "@base-framework/ui/organisms";
import { AnalyticsEmptyState } from "./dashboards/analytics/analytics-dashboard.js";
import { OverviewDashboard } from "./dashboards/overview/overview-dashboard.js";

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
            Div({ class: 'hidden md:flex items-center gap-2' }, [
                Button({ variant: 'default' }, 'Download')
            ])
        ])
    ])
);

/**
 * This will create the DashboardTabs molecule.
 *
 * @returns {object}
 */
const DashboardTabs = () => (
    Div({ class: 'justify-between flex flex-auto items-center' }, [
        new TabNavigation({
            options: [
                { label: 'Overview', href: 'dashboard', exact: true },
                { label: 'Analytics', href: 'dashboard/overview/analytics' }
            ],
            onSelect: (value) => console.log("Selected tab:", value)
        }),
    ])
);

/**
 * This will wrap the atom in a panel.
 *
 * @param {object} atom
 * @returns {object}
 */
const SubRoute = (atom) => new Panel(atom);

/**
 * This will create the DashboardOverview molecule.
 *
 * @returns {object}
 */
export const DashboardOverview = () => (
    Div({ class: 'grid grid-cols-1 p-6 pt-0 md:pt-6 lg:p-8 space-y-4' }, [

        DashboardHeader(),
        DashboardTabs(),

        Div({
            switch: [
                { uri: 'dashboard', component: SubRoute(OverviewDashboard()) },
                { uri: 'dashboard/overview/analytics', component: SubRoute(AnalyticsEmptyState()) }
            ]
        })
    ])
);