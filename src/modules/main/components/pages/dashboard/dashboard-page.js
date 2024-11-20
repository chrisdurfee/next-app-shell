import { Div } from "@base-framework/atoms";
import { NavigationMenu } from "@components/organisms/navigation/navigation-menu/navigation-menu.js";
import { Panel } from "@components/organisms/panel.js";
import { BlankPage } from "@components/pages/blank-page.js";
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
 * This will wrap the atom in a panel.
 *
 * @param {object} atom
 * @returns {object}
 */
const SubRoute = (atom) => new Panel(atom);

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
                { uri: 'dashboard/', component: SubRoute(DashboardOverview()) },
                { uri: 'dashboard/customers', component: SubRoute(DashboardCustomersEmptyState()) },
            ]
        })
    ])
);

export default DashboardPage;