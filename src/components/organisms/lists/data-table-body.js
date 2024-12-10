import { TableBody } from '@base-framework/organisms';
import { CheckboxCol, HeaderCol, TableHeader } from './table-header.js';
export { CheckboxCol, HeaderCol, TableHeader };

/**
 * This will creatw the table body.
 *
 * @param {object} props
 * @returns {object}
 */
export const DataTableBody = ({ key, rows, selectRow, rowItem }) => (
    new TableBody({
        cache: 'table',
        key,
        items: rows,
        rowItem: (row) => rowItem(row, selectRow),
        class: 'divide-y divide-border'
    })
);
