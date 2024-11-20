import { Div, H1, Header } from "@base-framework/atoms";
import { Button } from "@components/atoms/buttons/buttons.js";
import { Icons } from "@components/icons/icons.js";
import { DatePicker } from "@components/molecules/date-time/date-picker.js";
import { Panel } from "@components/organisms/panel.js";
import { TabNavigation } from "@components/organisms/tabs/tab-navigation.js";
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
                { label: 'Analytics', href: 'dashboard/overview/analytics' },
                { label: 'Reports', href: 'dashboard/overview/reports' },
                { label: 'Notifications', href: 'dashboard/overview/notifications' },
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
                { uri: 'dashboard/overview/analytics', component: SubRoute(AnalyticsEmptyState()) },
                // { uri: 'reports', component: Div({ class: 'flex flex-auto flex-col' }, 'Reports') },
                // { uri: 'notifications', component: Div({ class: 'flex flex-auto flex-col' }, 'Notifications') },
            ]
        })
    ])
);