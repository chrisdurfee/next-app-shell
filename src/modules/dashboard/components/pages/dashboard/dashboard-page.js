import { Div } from "@base-framework/atoms";
import { NavigationMenu } from "@base-framework/ui/organisms";
import { BlankPage } from "@base-framework/ui/pages";
import { DashboardCustomersEmptyState } from "./customers/dashboard-customers.js";
import { DashboardOverview } from "./dashboard-overview/dashboard-overview.js";


/**
 * This will create the MainPageMenu molecule.
 *
 * @returns {object}
 */
const MainPageMenu = () => (
    Div({ class: 'hidden md:flex h-16 items-center px-4 border-b' }, [
        new NavigationMenu({
            options: [
                { label: 'Overview', href: 'dashboard', exact: true },
                { label: 'Customers', href: 'dashboard/customers' },
                { label: 'Products', href: 'dashboard/products' },
                { label: 'Settings', href: 'dashboard/settings' }
            ]
        })
    ])
);

/**
 * DashboardPage
 *
 * Main dashboard layout.
 *
 * @returns {object}
 */
export const DashboardPage = () => (
    new BlankPage([
        MainPageMenu(),

        Div({
            switch: [
                { uri: 'dashboard/', component: DashboardOverview },
                { uri: 'dashboard/customers', component: DashboardCustomersEmptyState },
            ]
        })
    ])
);

export default DashboardPage;