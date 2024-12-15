import { Div, H1, H2, Header, P } from '@base-framework/atoms';
import { Button } from '@components/atoms/buttons/buttons.js';
import { Card } from '@components/atoms/cards/card.js';
import { Icon } from '@components/atoms/icon.js';
import { Icons } from '@components/icons/icons.js';
import { Breadcrumb } from '@components/molecules/breadcrumb/breadcrumb.js';
import { TabNavigation } from '@components/organisms/tabs/tab-navigation.js';
import { BlankPage } from '@components/pages/blank-page.js';
import { orders } from './orders.js';
import { RecentOrdersTable } from './table/recent-orders-table.js';

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
    Div({ class: 'flex flex-auto overflow-x-auto -mx-6 px-6 md:mb-12' }, [
        Div({ class: 'inline-flex flex-auto space-x-4 ml-[-24px] pl-6 mr-6 lg:mr-0' }, [
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

/**
 * This will create the DashboardTabs molecule.
 *
 * @returns {object}
 */
export const DashboardTabs = () => (
    Div({ class: 'flex justify-between items-center w-full md:w-auto' }, [
        new TabNavigation({
			class: 'w-full md:w-auto',
            options: [
                { label: 'Week', href: 'orders/orders-dashboard/week', exact: true },
                { label: 'Month', href: 'orders/orders-dashboard/month' },
                { label: 'Year', href: 'orders/orders-dashboard/year' }
            ],
            onSelect: (value) => console.log("Selected tab:", value)
        }),
    ])
);

/**
 * This will create the DashboardHeader molecule.
 *
 * @returns {object}
 */
export const DashboardHeader = () => (
	Div({ class: 'flex items-center justify-between ml-2 mb-8' }, [
		new Breadcrumb({
			items: [
				{ href: "orders/orders-dashboard", label: "Orders" },
				{ href: 'orders/orders-dashboard', label: 'Dashboard' },
				{ label: 'Recent' }
			]
		})
	])
);

export const OrderOptions = () => (
	Div({ class: 'flex flex-auto flex-row justify-between items-center' }, [
		DashboardTabs(),
		Div({ class: 'hidden md:flex gap-2'}, [
			Button({ variant: 'withIcon', class: 'outline', icon: Icons.download }, 'Download'),
			Button({ variant: 'withIcon', class: 'outline', icon: Icons.funnel }, 'Filter'),
		])
	])
);

/**
 * Main Dashboard Content
 *
 * @returns {object}
 */
export const DashboardContent = () => {
    return Div({ class: 'flex flex-auto flex-col pt-0 px-6 pb-6 md:p-6' }, [
        DashboardHeader(),
        Div({ class: 'space-y-4' }, [
            DashboardCards(),
			OrderOptions(),
            Div({ class: 'border rounded-md shadow-md p-4 md:p-6' }, [
                Header({ class: 'flex flex-auto flex-col pl-4 md:pl-0' }, [
					H1({ class: 'text-lg font-semibold' }, 'Orders'),
                	P({ class: 'text-sm text-muted-foreground mb-6' }, 'Recent orders from your store.'),
				]),
                RecentOrdersTable({ orders })
            ])
        ])
    ]);
};

/**
 * Orders Dashboard Page
 *
 * This is the main orders dashboard page.
 *
 * @returns {object}
 */
export const OrdersDashboard = () => (
    new BlankPage([
        Div({ class: 'grid grid-cols-1 relative w-full max-w-7xl mx-auto' }, [
            DashboardContent()
        ])
    ])
);

export default OrdersDashboard;