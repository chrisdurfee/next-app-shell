import { Div } from "@base-framework/atoms";
import { NavigationMenu } from "@components/organisms/navigation/navigation-menu/navigation-menu.js";
import { BlankPage } from "@components/pages/blank-page.js";
import { DashboardOverview } from "./dashboard-overview/dashboard-overview.js";


/**
 * This will create the MainPageMenu molecule.
 *
 * @returns {object}
 */
const MainPageMenu = () => (
    Div({ class: 'flex h-16 items-center px-4 border-b' }, [
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
        DashboardOverview(),
    ])
);

export default DashboardPage;