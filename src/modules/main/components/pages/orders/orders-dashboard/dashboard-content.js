import { Div, H1, Header, P } from '@base-framework/atoms';
import { Button } from '@components/atoms/buttons/buttons.js';
import { Icons } from '@components/icons/icons.js';
import { Breadcrumb } from '@components/molecules/breadcrumb/breadcrumb.js';
import { DashboardCards } from './dasboard-cards.js';
import { OrderOptions } from './order-options.js';
import { orders } from './orders.js';
import { RecentOrdersTable } from './table/recent-orders-table.js';

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
		}),
        Div({ class: 'hidden md:flex gap-2'}, [
            Button({ variant: 'withIcon', class: 'primary', icon: Icons.circlePlus }, 'Add Order'),
        ])
	])
);

/**
 * This will create the DashboardContent molecule.
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