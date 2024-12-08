import { P, Span, Td, Tr } from '@base-framework/atoms';
import { Checkbox } from '@components/atoms/form/checkbox.js';
import { DataTable } from "@components/organisms/lists/data-table.js";
import { DocSection } from "../../../../molecules/doc-section.js";
import { DocPage } from '../../../doc-page.js';
import { CustomHeaderTable } from './custom-header-table.js';

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
 * This will create a data table page.
 *
 * @param {object} props
 * @param {object} children
 * @returns {DocPage}
 */
export const DataTablePage = () => (
	DocPage(
        {
            title: 'Data Tables',
            description: 'Data tables are used to display data in a structured format. They can be used to display a list of items, a grid of items, or a table of items.',
        },
        [
            DocSection({
                title: 'Usage',
                description: 'The data table component is used to display data in a structured format. It can be used to display a list of items, a grid of items, or a table of items.',
                preview: [
                    new DataTable({ headers, rows, rowItem, key: 'id' }),
                ],
                code: `import { DataTable } from "@components/organisms/lists/data-table.js";
import { Div, I, Span, Table, Td, Th, Thead, Tr } from '@base-framework/atoms';
import { Checkbox } from '@components/atoms/form/checkbox.js';

new DataTable({
    key: 'id',
    headers: [
        { label: 'checkbox', key: '' },
        { label: 'Status', key: 'status' },
        { label: 'Email', key: 'email' },
        { label: 'Amount', key: 'amount', align: 'justify-end' }
    ],
    rows: [
        { id: 1, status: 'Success', email: 'ken99@yahoo.com', amount: 316.00, selected: false },
        { id: 2, status: 'Success', email: 'abe45@gmail.com', amount: 242.00, selected: false },
        { id: 3, status: 'Processing', email: 'monserrat44@gmail.com', amount: 837.00, selected: false },
        { id: 4, status: 'Success', email: 'silas22@gmail.com', amount: 874.00, selected: false },
        { id: 5, status: 'Failed', email: 'carmella@hotmail.com', amount: 721.00, selected: false },
        // Add more rows as needed
    ],
    rowItem: (row, onSelect) =>
    {
        return Tr({ class: 'items-center px-4 py-2 hover:bg-muted' }, [
            Td({ class: 'p-4 ' }, [
                new Checkbox({
                    checked: row.selected,
                    class: 'mr-2',
                    click: () => onSelect(row)
                })
            ]),
            Td({ class: 'p-4 ' }, [
                Span({ class: 'text-muted-foreground' }, row.status)
            ]),
            Td({ class: 'p-4 ' }, row.email),
            Td({ class: 'p-4 text-right' }, \`$\${row.amount.toFixed(2)}\`)
        ]);
    }
})`
            }),

            DocSection({
                title: 'Custom Header Data Table',
                description: 'This demonstrates a data table with custom headers and row rendering using the DataTable component.',
                preview: [
                    CustomHeaderTable()
                ],
                code: `import { Div, Table, Td, Thead, Tr } from '@base-framework/atoms';
import { Checkbox } from '@components/atoms/form/checkbox.js';
import { CheckboxCol, DataTable, HeaderCol } from "@components/organisms/lists/data-table.js";

/**
 * CustomHeaderTable Component
 *
 * Demonstrates a data table with a custom header row and custom rows using existing components.
 *
 * @param {object} props
 * @returns {object}
 */
export const CustomHeaderTable = () =>
{
    // Define row data
    const customRows = [
        { id: 1, status: 'Active', email: 'user1@example.com', amount: 500.50 },
        { id: 2, status: 'Inactive', email: 'user2@example.com', amount: 250.75 },
        { id: 3, status: 'Active', email: 'user3@example.com', amount: 300.00 },
    ];

    /**
     * Custom Header Row using HeaderCol and CheckboxCol
     *
     * @returns {object}
     */
    const customHeaderRow = () =>
    {
        return Thead([
            Tr({ class: 'text-muted-foreground border-b' }, [
                CheckboxCol({}),
                HeaderCol({ key: 'status', label: 'Custom Status'}),
                HeaderCol({ key: 'email', label: 'User Email' }),
                HeaderCol({ key: 'amount', label: 'Amount (USD)', align: 'justify-end' })
            ])
        ]);
    };

    /**
     * Renders a row item.
     *
     * @param {object} row - Row data
     * @param {function} onSelect - Callback to handle row selection
     * @returns {object}
     */
    const rowItem = (row, onSelect) =>
    {
        return Tr({ class: 'items-center px-4 py-2 hover:bg-muted' }, [
            Td({ class: 'p-4' }, [
                new Checkbox({
                    checked: row.selected,
                    class: 'mr-2',
                    click: () => onSelect(row)
                })
            ]),
            Td({ class: 'p-4 justify-center' }, row.status),
            Td({ class: 'p-4' }, row.email),
            Td({ class: 'p-4 text-right' }, \`$\${row.amount.toFixed(2)}\`)
        ]);
    };

    return Div({ class: 'w-full mt-4' }, [
        Div({ class: 'w-full rounded-md border overflow-x-auto' }, [
            Table({ class: 'w-full' }, [
                new DataTable({
                    key: 'id',
                    customHeader: customHeaderRow(),
                    rows: customRows,
                    rowItem: rowItem
                })
            ])
        ])
    ]);
};`
            }),

            P({ class: 'text-muted-foreground' }, 'The Data Table allows items to be selected. The selected elements can be retrieved by calling the "getSelectedRows" method on the DataTable instance. The method returns an array of selected rows.')
        ]
    )
);

export default DataTablePage;