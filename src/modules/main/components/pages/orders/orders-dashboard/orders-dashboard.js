import { A, Div, H1, H2, P, Td, Thead, Tr } from '@base-framework/atoms';
import { Button } from '@components/atoms/buttons/buttons.js';
import { Card } from '@components/atoms/cards/card.js';
import { Checkbox } from "@components/atoms/form/checkbox.js";
import { Icon } from '@components/atoms/icon.js';
import { Icons } from '@components/icons/icons.js';
import { Avatar } from "@components/molecules/avatars/avatar.js";
import { Breadcrumb } from '@components/molecules/breadcrumb/breadcrumb.js';
import { DataTable } from '@components/organisms/lists/data-table';
import { CheckboxCol, HeaderCol } from "@components/organisms/lists/data-table.js";
import { TabNavigation } from '@components/organisms/tabs/tab-navigation.js';
import { BlankPage } from '@components/pages/blank-page.js';

/**
 * This will render a header row in the orders table.
 *
 * @returns {object}
 */
const OrdersHeaderRow = () => (
    Thead([
        Tr({ class: 'text-muted-foreground border-b' }, [
            CheckboxCol({ class: 'hidden md:table-cell' }),
            HeaderCol({ key: 'customerName', label: 'Customer', class: 'w-1/4' }),
            HeaderCol({ key: 'type', label: 'Type', class: 'hidden md:table-cell' }),
            HeaderCol({ key: 'status', label: 'Status', class: 'hidden md:table-cell' }),
            HeaderCol({ key: 'date', label: 'Date', class: 'hidden md:table-cell' }),
            HeaderCol({ key: 'amount', label: 'Amount', align: 'justify-end' })
        ])
    ])
);

/**
 * This will render a row in the orders table.
 *
 * @param {object} order - Row data
 * @param {function} onSelect - Selection callback
 * @returns {object}
 */
const OrdersRow = (order, onSelect) => (
    Tr({ class: 'items-center px-4 py-2 hover:bg-muted/50' }, [
        Td({ class: 'p-4 hidden md:table-cell' }, [
            new Checkbox({
                checked: order.selected,
                class: 'mr-2',
                onChange: () => onSelect(order)
            })
        ]),
        Td({ class: 'p-4' }, [
            A({
                href: `orders/${order.id}`,
                class: 'flex items-center gap-x-4 no-underline text-inherit hover:text-primary',
            }, [
                Avatar({
                    src: order.image || '',
                    alt: order.customerName,
                    fallbackText: order.customerName
                }),
                Div({ class: 'min-w-0 flex-auto' }, [
                    P({ class: 'text-base font-semibold leading-6 m-0' }, order.customerName),
                    P({ class: 'truncate text-sm leading-5 text-muted-foreground m-0' }, order.email)
                ])
            ])
        ]),
        Td({ class: 'p-4 hidden md:table-cell' }, [
            A({
                href: `orders/${order.id}`,
                class: 'no-underline text-inherit hover:text-primary',
            }, order.type)
        ]),
        Td({ class: `p-4 hidden md:table-cell font-medium ${order.status === 'Fulfilled' ? 'text-green-500' : 'text-red-500'}` }, [
            A({
                href: `orders/${order.id}`,
                class: 'no-underline text-inherit hover:text-primary',
            }, order.status)
        ]),
        Td({ class: 'p-4 hidden md:table-cell' }, [
            A({
                href: `orders/${order.id}`,
                class: 'no-underline text-inherit hover:text-primary',
            }, order.date)
        ]),
        Td({ class: 'p-4 text-right justify-end' }, [
            A({
                href: `orders/${order.id}`,
                class: 'no-underline text-inherit hover:text-primary',
            }, `$${order.amount.toFixed(2)}`)
        ])
    ])
);

/**
 * This will create an orders table for the orders page.
 *
 * @param {array} orders - List of orders
 * @returns {object}
 */
export const RecentOrdersTable = ({ orders }) => (
    new DataTable({
        cache: 'list',
        customHeader: OrdersHeaderRow(),
        rows: orders,
        rowItem: OrdersRow,
        key: 'id',
    })
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
			Div({ class: 'flex flex-auto flex-row justify-between items-center' }, [
				DashboardTabs(),
				Div({ class: 'flex gap-2'}, [
					Button({ variant: 'withIcon', class: 'outline', icon: Icons.download }, 'Download'),
					Button({ variant: 'withIcon', class: 'outline', icon: Icons.funnel }, 'Filter'),
				])
			]),
            Div({ class: 'border rounded-md shadow-md pt-4 p-4' }, [
                H1({ class: 'text-lg font-semibold' }, 'Orders'),
                P({ class: 'text-sm text-muted-foreground mb-6' }, 'Recent orders from your store.'),
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