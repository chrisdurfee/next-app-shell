import { Div } from "@base-framework/atoms";
import { NavigationMenu } from "@base-framework/ui/organisms";
import { BlankPage } from "@base-framework/ui/pages";


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
                { uri: 'dashboard/', import: import('./dashboard-overview/dashboard-overview.js'), persist: true },
                { uri: 'dashboard/customers', import: () => import('./customers/dashboard-customers.js'), persist: true },
            ]
        })
    ])
);

export default DashboardPage;