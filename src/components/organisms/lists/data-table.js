import { Div, I, Span, Table, Td, Th, Thead, Tr } from '@base-framework/atoms';
import { Data, Jot } from '@base-framework/base';
import { TableBody } from '@base-framework/organisms';
import { Button } from '../../atoms/buttons/buttons.js';
import { Checkbox } from '../../atoms/form/checkbox.js';
import { Input } from '../../atoms/form/input.js';
import { Icons } from '../../icons/icons.js';

/**
 * TableHeader Atom
 *
 * Renders the table headers with sorting capability.
 *
 * @param {function} toggleSort - Callback to handle column sorting
 * @returns {object}
 */
const TableHeader = (toggleSort) =>
{
    const headers = [
        { label: '', key: 'select' },
        { label: 'Status', key: 'status' },
        { label: 'Email', key: 'email', sortable: true },
        { label: 'Amount', key: 'amount', sortable: true }
    ];

    return Thead([
        Tr({ class: 'grid grid-cols-4 p-4 font-semibold text-muted-foreground border-b' }, [
            ...headers.map(header =>
                Th({
                    class: 'flex items-center cursor-pointer',
                    click: header.sortable ? () => toggleSort(header.key) : null
                }, [
                    Span(header.label),
                    header.sortable && I({ html: Icons.sort }) // Sort icon for sortable columns
                ])
            )
        ])
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
    return Tr({ class: 'grid grid-cols-4 items-center px-4 py-2 hover:bg-muted' }, [
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
            filteredRows: this.rows || [],
            selectedRows: []
        });
    },

    /**
     * The initial state of the DataTable.
     *
     * @returns {object}
     */
    state()
    {
        return {
            searchQuery: '',
            sortKey: null,
            sortOrder: 'asc', // Can be 'asc' or 'desc'
            currentPage: 1
        };
    },

    /**
     * Filters rows based on search input.
     *
     * @param {string} query
     */
    filterRows(query)
    {
        const filteredRows = this.state.rows.filter(row =>
            row.email.toLowerCase().includes(query.toLowerCase())
        );

        this.state.searchQuery = query;
        this.state.filteredRows = filteredRows;
        this.state.currentPage = 1;
    },

    /**
     * Sorts rows by a specified key.
     *
     * @param {string} key
     */
    sortRows(key)
    {
        const sortOrder = this.state.sortKey === key && this.state.sortOrder === 'asc' ? 'desc' : 'asc';
        const sortedRows = [...this.data.filteredRows].sort((a, b) => {
            const comparison = a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0;
            return sortOrder === 'asc' ? comparison : -comparison;
        });

        this.state.sortKey = key;
        this.state.sortOrder = sortOrder;
        this.data.filteredRows = sortedRows;
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
        const startIdx = (this.state.currentPage - 1) * this.state.rowsPerPage;
        const endIdx = startIdx + this.state.rowsPerPage;
        //const currentRows = this.data.filteredRows.slice(startIdx, endIdx);
        const currentRows = this.data.filteredRows;

        return Div({ class: 'w-full' }, [

            /**
             * This will set up the table controls and search.
             */
            Div({ class: 'flex items-center justify-between p-4' }, [
                Input({
                    type: 'text',
                    placeholder: 'Filter emails...',
                    value: this.state.searchQuery,
                    class: 'border px-2 py-1 rounded-md w-1/3',
                    input: (e) => this.filterRows(e.target.value)
                }),
                Button({
                    variant: 'outline',
                    class: 'px-4 py-1 flex items-center',
                    click: () => {/* Open columns menu */ }
                }, [
                    Span('Columns'),
                    I({ class: 'ml-2', html: Icons.chevron.single.down })
                ])
            ]),

            Div({ class: 'w-full rounded-md border' }, [
                Table({ class: 'w-full' }, [
                    TableHeader((key) => this.sortRows(key)),
                    Body({ rows: currentRows, selectRow: this.selectRow.bind(this) })
                ])
            ]),

            /**
             * This will set up the table footer.
             */
            Div({ class: 'flex items-center justify-between p-4' }, [
                Span(`${this.data.selectedRows.length} of ${this.data.filteredRows.length} row(s) selected`),
                Div({ class: 'flex items-center gap-2' }, [
                    Button({
                        variant: 'outline',
                        class: 'px-3 py-1',
                        disabled: this.state.currentPage === 1,
                        click: () => this.state.currentPage = Math.max(1, this.state.currentPage - 1)
                    }, 'Previous'),
                    Button({
                        variant: 'outline',
                        class: 'px-3 py-1',
                        disabled: endIdx >= this.data.filteredRows.length,
                        click: () => this.state.currentPage += 1
                    }, 'Next')
                ])
            ])
        ]);
    }
});
