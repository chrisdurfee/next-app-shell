import { Div, H1, H2, P, Table, Td, Tr } from '@base-framework/atoms';
import { Card } from '@components/atoms/cards/card.js';
import { Icon } from '@components/atoms/icon.js';
import { Breadcrumb } from '@components/molecules/breadcrumb/breadcrumb.js';
import { DataTable } from '@components/organisms/lists/data-table';
import { TabNavigation } from '@components/organisms/tabs/tab-navigation.js';
import { BlankPage } from '@components/pages/blank-page.js';

/**
 * Recent Orders Table Row Component
 *
 * @param {object} order
 * @returns {object}
 */
const OrderRow = (order) => (
    Tr({
        class: 'hover:bg-muted/50 cursor-pointer'
    }, [
        Td({ class: 'font-medium' }, order.customerName),
        Td({ class: 'text-sm text-muted-foreground' }, order.email),
        Td(order.type),
        Td({
            class: `font-medium ${order.status === 'Fulfilled' ? 'text-green-500' : 'text-red-500'}`
        }, order.status),
        Td(order.date),
        Td({ class: 'text-right' }, `$${order.amount.toFixed(2)}`),
    ])
);

/**
 * Recent Orders Table
 *
 * @param {array} orders
 * @returns {object}
 */
const RecentOrdersTable = ({ orders }) => (
    Table({
        class: 'w-full text-sm text-left border-spacing-0 border-collapse'
    }, [
        new DataTable({
            cache: 'list',
            headers: [
                'Customer Name',
                'Email',
                'Type',
                'Status',
                'Date',
                'Amount'
            ],
            rows: orders,
            rowItem: OrderRow,
            key: 'id',
        })
    ])
);

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
const DashboardCards = () => (
    Div({ class: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4' }, [
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
);

/**
 * This will create the DashboardTabs molecule.
 *
 * @returns {object}
 */
const DashboardTabs = () => (
    Div({ class: 'flex justify-between items-center mt-4' }, [
        new TabNavigation({
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
 * Main Dashboard Content
 *
 * @returns {object}
 */
const DashboardContent = () => {
    const orders = [
        {
            id: 1,
            customerName: 'Liam Johnson',
            email: 'liam@example.com',
            type: 'Sale',
            status: 'Fulfilled',
            date: '2023-06-23',
            amount: 250
        },
        {
            id: 2,
            customerName: 'Olivia Smith',
            email: 'olivia@example.com',
            type: 'Refund',
            status: 'Declined',
            date: '2023-06-24',
            amount: 150
        },
        {
            id: 3,
            customerName: 'Noah Williams',
            email: 'noah@example.com',
            type: 'Subscription',
            status: 'Fulfilled',
            date: '2023-06-25',
            amount: 350
        },
        {
            id: 4,
            customerName: 'Emma Brown',
            email: 'emma@example.com',
            type: 'Sale',
            status: 'Fulfilled',
            date: '2023-06-26',
            amount: 450
        }
    ];

    return Div({ class: 'p-6 space-y-4' }, [
        new Breadcrumb({
            items: [
                { href: '/dashboard', label: 'Dashboard' },
                { label: 'Recent Orders' }
            ]
        }),
        Div({ class: 'space-y-4' }, [
            DashboardCards(),
            DashboardTabs(),
            Div({ class: 'border-t pt-4' }, [
                H1({ class: 'text-lg font-semibold' }, 'Orders'),
                RecentOrdersTable({ orders })
            ])
        ])
    ]);
};

/**
 * Orders Dashboard Page
 *
 * @returns {object}
 */
export const OrdersDashboard = () => (
    new BlankPage([
        Div({ class: 'relative w-full max-w-7xl mx-auto' }, [
            DashboardContent()
        ])
    ])
);

export default OrdersDashboard;