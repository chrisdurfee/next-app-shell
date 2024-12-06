import { Div, I, Span, Table, Th, Thead, Tr, UseParent } from '@base-framework/atoms';
import { Data, Jot } from '@base-framework/base';
import { TableBody } from '@base-framework/organisms';
import { Checkbox } from '../../atoms/form/checkbox.js';
import { Icons } from '../../icons/icons.js';

/**
 * CheckboxCol Atom
 *
 * Renders a checkbox column for the table.
 *
 * @param {object} props
 * @returns {object}
 */
export const CheckboxCol = (props) => (
    Th({ class: 'cursor-pointer py-3 px-4 text-base w-10' }, [
        UseParent((parent) => new Checkbox({ class: 'mr-2', onChange: () => parent.toggleAllSelectedRows() })),
    ])
);

/**
 * HeaderCol Atom
 *
 * Renders a header column for the table.
 *
 * @param {object} props
 * @returns {object}
 */
export const HeaderCol = ({ align, sortable, key, label, sort}) =>
{
    const alignClass = align || 'justify-start';
    return Th({
        class: 'cursor-pointer py-3 px-4 text-base',
        click: sortable && (() => sort(key))
    }, [
        Div({ class: `flex flex-auto w-full items-center ${alignClass}` }, [
            Span(label),
            sortable && I({ class: 'ml-2', html: Icons.arrows.upDown })
        ])
    ]);
};

/**
 * TableHeader Atom
 *
 * Renders the table headers with sorting capability.
 *
 * @param {object} props
 * @returns {object}
 */
export const TableHeader = (props) =>
{
    return Thead([
        Tr({ class: 'text-muted-foreground border-b', map: [props.headers, header =>
            {
                if (header.label === 'checkbox')
                {
                    return CheckboxCol({ toggle: props.toggle });
                }

                return HeaderCol({
                    align: header.align,
                    sortable: header.sortable,
                    key: header.key,
                    label: header.label,
                    sort: props.sort
                });
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
            selectedRows: [],
            selected: false
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
        const selectedRows = select ? [] : tableRows;
        this.data.selectedRows = selectedRows;

        this.updateSelected();
        this.updateTable(!select);
    },

    /**
     * This will update the selected state.
     *
     * @returns {void}
     */
    updateSelected()
    {
        const selectedRows = this.data.get('selectedRows');
        this.data.selected = (selectedRows.length > 0);
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

            // This will add the row to the selected rows.
            ? [...previouslySelected, row]

            // This will remove the row from the selected rows.
            : previouslySelected.filter(selected => selected !== row);

        this.data.selectedRows = selectedRows;
        this.updateSelected();
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
            Div({ class: 'w-full rounded-md border overflow-x-auto' }, [
                Table({ class: 'w-full' }, [
                    this.headers && TableHeader({ headers: this.headers, sort: (key) => this.sortRows(key) }),
                    this.customHeader ?? null,
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
    },

    /**
     * This will remove the selected rows.
     *
     * @returns {void}
     */
    beforeDestroy()
    {
        this.data.selectedRows = [];
    }
});
