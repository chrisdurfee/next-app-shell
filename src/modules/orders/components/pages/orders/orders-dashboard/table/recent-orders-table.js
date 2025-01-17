import { Thead, Tr } from '@base-framework/atoms';
import { CheckboxCol, DataTable, HeaderCol } from "@base-framework/ui/organisms";
import { OrdersRow } from './orders-row.js';

/**
 * This will render a header row in the orders table.
 *
 * @returns {object}
 */
export const OrdersHeaderRow = () => (
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
 * This will create an orders table for the orders page.
 *
 * @param {object} props
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