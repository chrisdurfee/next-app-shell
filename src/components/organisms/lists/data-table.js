import { Div, I, Span, Table, Td, Th, Thead, Tr } from '@base-framework/atoms';
import { Data, Jot } from '@base-framework/base';
import { TableBody } from '@base-framework/organisms';
import { Checkbox } from '../../atoms/form/checkbox.js';
import { Icons } from '../../icons/icons.js';

/**
 * TableHeader Atom
 *
 * Renders the table headers with sorting capability.
 *
 * @param {object} props
 * @returns {object}
 */
const TableHeader = (props) =>
{
    return Thead([
        Tr({ class: 'text-muted-foreground border-b', map: [props.headers, header =>
            {
                const align = header.align || 'items-center justify-start';
                return Th({
                    class: 'cursor-pointer py-3 px-4 text-base',
                    click: header.sortable ? () => props.sort(header.key) : null
                }, [
                    Div({ class: `flex flex-auto w-full items-center ${align}` }, [
                        Span(header.label),
                        header.sortable && I({ class: 'ml-2', html: Icons.arrows.upDown })
                    ])
                ]);
            }]
        })
    ]);
};

/**
 * This will creatw the table body.
 *
 * @param {props} param0
 * @returns {object}
 */
const Body = ({ rows, selectRow }) => (
    new TableBody({
        items: rows,
        rowItem: (row) => DataTableRow(row, selectRow),
        class: 'divide-y divide-border'
    })
);

/**
 * DataTableRow Atom
 *
 * Represents a row in the data table.
 *
 * @param {object} row - Row data
 * @param {function} onSelect - Callback to handle row selection
 * @returns {object}
 */
const DataTableRow = (row, onSelect) =>
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
        Td({ class: 'p-4 text-right' }, `$${row.amount.toFixed(2)}`)
    ]);
};

/**
 * DataTable Component
 *
 * Manages data, filtering, pagination, and selection within a table.
 *
 * @param {object} props
 * @returns {object}
 */
export const DataTable = Jot(
{
    /**
     * Initializes component data.
     *
     * @returns {Data}
     */
    setData()
    {
        return new Data({
            rows: this.rows || [],
            selectedRows: []
        });
    },

    /**
     * Handles row selection.
     *
     * @param {object} row
     */
    selectRow(row)
    {
        const selectedRows = this.data.selectedRows.includes(row)
            ? this.data.selectedRows.filter(selected => selected !== row)
            : [...this.data.selectedRows, row];

        this.data.selectedRows = selectedRows;
    },

    /**
     * Renders the DataTable component.
     *
     * @returns {object}
     */
    render()
    {
        const currentRows = this.data.rows;

        return Div({ class: 'w-full' }, [
            Div({ class: 'w-full rounded-md border' }, [
                Table({ class: 'w-full' }, [
                    this.headers && TableHeader({ headers: this.headers, sort: (key) => this.sortRows(key) }),
                    Body({ rows: currentRows, selectRow: this.selectRow.bind(this) })
                ])
            ])
        ]);
    }
});
