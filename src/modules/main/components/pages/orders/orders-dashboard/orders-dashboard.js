import { A, Div, H1, H2, Header, P, Td, Thead, Tr } from '@base-framework/atoms';
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
		border: false,
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
const DashboardTabs = () => (
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
	},
	{
		id: 5,
		customerName: 'Ava Davis',
		email: 'ava@example.com',
		type: 'Sale',
		status: 'Pending',
		date: '2023-06-27',
		amount: 120
	},
	{
		id: 6,
		customerName: 'William Garcia',
		email: 'williamg@example.com',
		type: 'Subscription',
		status: 'Fulfilled',
		date: '2023-06-28',
		amount: 399
	},
	{
		id: 7,
		customerName: 'Sophia Martinez',
		email: 'sophia@example.com',
		type: 'Refund',
		status: 'Declined',
		date: '2023-06-29',
		amount: 175
	},
	{
		id: 8,
		customerName: 'Mason Lee',
		email: 'mason@example.com',
		type: 'Sale',
		status: 'Pending',
		date: '2023-06-30',
		amount: 220
	},
	{
		id: 9,
		customerName: 'Amelia Taylor',
		email: 'amelia@example.com',
		type: 'Sale',
		status: 'Fulfilled',
		date: '2023-07-01',
		amount: 550
	},
	{
		id: 10,
		customerName: 'Benjamin Clark',
		email: 'benjamin@example.com',
		type: 'Subscription',
		status: 'Fulfilled',
		date: '2023-07-02',
		amount: 499
	},
	{
		id: 11,
		customerName: 'Charlotte Hall',
		email: 'charlotte@example.com',
		type: 'Refund',
		status: 'Declined',
		date: '2023-07-03',
		amount: 200
	},
	{
		id: 12,
		customerName: 'Ethan Adams',
		email: 'ethan@example.com',
		type: 'Sale',
		status: 'Fulfilled',
		date: '2023-07-04',
		amount: 275
	}
];

/**
 * Main Dashboard Content
 *
 * @returns {object}
 */
const DashboardContent = () => {
    return Div({ class: 'flex flex-auto flex-col pt-0 px-6 pb-6 md:p-6' }, [
        Div({ class: 'flex items-center justify-between ml-2 mb-8' }, [
			new Breadcrumb({
				items: [
					{ href: "orders/orders-dashboard", label: "Orders" },
					{ href: 'orders/orders-dashboard', label: 'Dashboard' },
					{ label: 'Recent' }
				]
			})
		]),
        Div({ class: 'space-y-4' }, [
            DashboardCards(),
			Div({ class: 'flex flex-auto flex-row justify-between items-center' }, [
				DashboardTabs(),
				Div({ class: 'hidden md:flex gap-2'}, [
					Button({ variant: 'withIcon', class: 'outline', icon: Icons.download }, 'Download'),
					Button({ variant: 'withIcon', class: 'outline', icon: Icons.funnel }, 'Filter'),
				])
			]),
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