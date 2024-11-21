import { Div, I, Span, Table, Th, Thead, Tr } from '@base-framework/atoms';
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
                if (header.label === 'checkbox')
                {
                    return Th({ class: 'cursor-pointer py-3 px-4 text-base' }, [
                        new Checkbox({ class: 'mr-2', onChange: props.toggle }),
                    ]);
                }

                const align = header.align || 'items-center justify-start';
                return Th({
                    class: 'cursor-pointer py-3 px-4 text-base',
                    click: header.sortable && (() => props.sort(header.key))
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
 * @param {object} props
 * @returns {object}
 */
const Body = ({ key, rows, selectRow, rowItem }) => (
    new TableBody({
        cache: 'table',
        key,
        items: rows,
        rowItem: (row) => rowItem(row, selectRow),
        class: 'divide-y divide-border'
    })
);

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
            selectedRows: []
        });
    },

    /**
     * This will toggle all selected rows.
     *
     * @returns {void}
     */
    toggleAllSelectedRows()
    {
        const tableRows = this.table.getRows();
        const select = this.data.selectedRows.length === tableRows.length;
        const selectedRows = select
            ? []
            : tableRows;

        this.data.selectedRows = selectedRows;

        this.updateTable(!select);
    },

    /**
     * This will update the table rows.
     *
     * @protected
     * @param {boolean} selected
     * @returns {void}
     */
    updateTable(selected)
    {
        const rows = this.table.getRows();
        rows.forEach(row => row.selected = selected);
        this.table.setRows(rows);
    },

    /**
     * Handles row selection.
     *
     * @param {object} row
     */
    selectRow(row)
    {
        const isSelected = row.selected ?? false;
        row.selected = !isSelected;

        const previouslySelected = this.data.get('selectedRows');
        const selectedRows = row.selected
            ? [...previouslySelected, row]
            : previouslySelected.filter(selected => selected !== row);

        this.data.selectedRows = selectedRows;
    },

    /**
     * Renders the DataTable component.
     *
     * @returns {object}
     */
    render()
    {
        const currentRows = this.rows;

        return Div({ class: 'w-full' }, [
            Div({ class: 'w-full rounded-md border' }, [
                Table({ class: 'w-full' }, [
                    this.headers && TableHeader({ headers: this.headers, sort: (key) => this.sortRows(key), toggle: () => this.toggleAllSelectedRows() }),
                    Body({
                        key: this.key,
                        rows: currentRows,
                        selectRow: this.selectRow.bind(this),
                        rowItem: this.rowItem
                    })
                ])
            ])
        ]);
    },

    /**
     * This will remove items from the list.
     *
     * @public
     * @param {array} items
     * @returns {void}
     */
    remove(items)
    {
        this.table.remove(items);
    },

    /**
     * This will set the items in the list.
     *
     * @public
     * @param {array} rows
     * @returns {void}
     */
    setRows(rows)
    {
        this.table.setRows(rows);
    },

    /**
     * This will append items to the list.
     *
     * @public
     * @param {array|object} items
     * @returns {void}
     */
    append(items)
    {
        this.table.append(items);
    },

    /**
     * This will mingle the new items with the old items.
     *
     * @public
     * @param {Array<Object>} newItems
     * @param {boolean} withDelete
     * @returns {void}
     */
    mingle(newItems, withDelete = false)
    {
        this.table.mingle(newItems, withDelete);
    },

    /**
     * This will prepend items to the list.
     *
     * @public
     * @param {array|object} items
     * @returns {void}
     */
    prepend(items)
    {
        this.table.prepend(items);
    }
});
