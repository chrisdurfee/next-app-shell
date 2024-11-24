import { Div, Span, Td, Tr } from "@base-framework/atoms";
import { Button } from '@components/atoms/buttons/buttons.js';
import { Checkbox } from '@components/atoms/form/checkbox.js';
import { DataTable } from '@components/organisms/lists/data-table.js';
import { BlankPage } from '@components/pages/blank-page.js';

const headers = [
    { label: 'checkbox', key: '' },
    { label: 'Status', key: 'status' },
    { label: 'Email', key: 'email' },
    { label: 'Amount', key: 'amount', align: 'justify-end' }
];

const rows = [
    { id: 1, status: 'Success', email: 'ken99@yahoo.com', amount: 316.00, selected: false },
    { id: 2, status: 'Success', email: 'abe45@gmail.com', amount: 242.00, selected: false },
    { id: 3, status: 'Processing', email: 'monserrat44@gmail.com', amount: 837.00, selected: false },
    { id: 4, status: 'Success', email: 'silas22@gmail.com', amount: 874.00, selected: false },
    { id: 5, status: 'Failed', email: 'carmella@hotmail.com', amount: 721.00, selected: false },
    // Add more rows as needed
];

const additionalRows = [
    { id: 6, status: 'Success', email: '', amount: 0.00, selected: false },
    { id: 7, status: 'Success', email: '', amount: 0.00, selected: false },
    { id: 8, status: 'Processing', email: '', amount: 0.00, selected: false },
    { id: 9, status: 'Success', email: '', amount: 0.00, selected: false },
    { id: 10, status: 'Failed', email: '', amount: 0.00, selected: false }
];

/**
 * This will create a row item.
 *
 * @param {object} row - Row data
 * @param {function} onSelect - Callback to handle row selection
 * @returns {object}
 */
const rowItem = (row, onSelect) =>
{
    return Tr({ class: 'items-center px-4 py-2 hover:bg-muted' }, [
        Td({ class: 'p-4 ' }, [
            new Checkbox({
                checked: row.selected,
                class: 'mr-2',
                onChange: () => onSelect(row)
            })
        ]),
        Td({ class: 'p-4 ' }, [
            Span({ class: 'text-muted-foreground' }, row.status)
        ]),
        Td({ class: 'p-4 ' }, row.email),
        Td({ class: 'p-4 text-right' }, `$${row.amount.toFixed(2)}`)
    ]);
};

/**
 * DataTablePage
 *
 * This will create an data table page.
 *
 * @returns {BlankPage}
 */
export const DataTablePage = () => (
	Div({ class: 'flex flex-auto flex-col' }, [
        Div({ class: 'flex flex-auto flex-col mb-2' }, [
            Div({ class: 'flex flex-auto flex-row gap-2' }, [
                Button({ variant: 'outline', click: (e, parent) => parent.list.prepend(additionalRows) }, 'Prepend'),
                Button({ variant: 'outline', click: (e, parent) => parent.list.append(additionalRows) }, 'Append'),
                Button({ variant: 'outline', click: (e, parent) => parent.list.mingle(additionalRows) }, 'Mingle'),
            ])
        ]),
        new DataTable({
            cache: 'list',
            headers,
            rows,
            rowItem,
            key: 'id'
        })
    ])
);

export default DataTablePage;