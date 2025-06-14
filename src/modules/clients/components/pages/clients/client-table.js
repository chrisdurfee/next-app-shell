import { A, Div, P, Td, Thead, Tr } from "@base-framework/atoms";
import { Checkbox } from "@base-framework/ui/atoms";
import { Avatar } from "@base-framework/ui/molecules";
import { CheckboxCol, DataTable, HeaderCol } from "@base-framework/ui/organisms";

/**
 * This will render a header row in the clients table.
 *
 * @returns {object}
 */
const ClientHeaderRow = () => (
    Thead([
        Tr({ class: 'text-muted-foreground border-b' }, [
            CheckboxCol({ class: 'hidden md:table-cell' }),
            HeaderCol({ key: 'name', label: 'Name'}),
            HeaderCol({ key: 'status', label: 'Status', class: 'hidden md:table-cell'  }),
            HeaderCol({ key: 'role', label: 'Role', class: 'hidden md:table-cell'  }),
            HeaderCol({ key: 'totalAmount', label: 'Total', align: 'justify-end' })
        ])
    ])
);

/**
 * This will render a row in the clients table.
 *
 * @param {object} row - Row data
 * @param {function} onSelect - Selection callback
 * @returns {object}
 */
export const ClientRow = (row, onSelect) => (
    Tr({ class: 'items-center px-4 py-2 hover:bg-muted/50' }, [
        Td({ class: 'p-4 hidden md:table-cell' }, [
            new Checkbox({
                checked: row.selected,
                class: 'mr-2',
                onChange: () => onSelect(row)
            })
        ]),
        Td({ class: 'p-4' }, [
            A({
                href: `clients/client/${row.id}`,
                class: 'flex items-center gap-x-4 no-underline text-inherit hover:text-primary',
            }, [
                Avatar({ src: row.image, alt: row.name, fallbackText: row.name }),
                Div({ class: 'min-w-0 flex-auto' }, [
                    P({ class: 'text-base font-semibold leading-6 m-0' }, row.name),
                    P({ class: 'truncate text-sm leading-5 text-muted-foreground m-0' }, row.email)
                ])
            ])
        ]),
        Td({ class: 'p-4 hidden md:table-cell' }, [
            A({
                href: `clients/${row.id}`,
                class: 'no-underline text-inherit hover:text-primary',
            }, row.status)
        ]),
        Td({ class: 'p-4 hidden md:table-cell' }, [
            A({
                href: `clients/${row.id}`,
                class: 'no-underline text-inherit hover:text-primary',
            }, row.role)
        ]),
        Td({ class: 'p-4 text-right justify-end' }, [
            A({
                href: `clients/${row.id}`,
                class: 'no-underline text-inherit hover:text-primary',
            }, `$${row.totalAmount}`)
        ])
    ])
);

/**
 * This will create a client table for the clients page.
 *
 * @param {object} clients - List of clients
 * @returns {object}
 */
export const ClientTable = ({ clients }) => (
    new DataTable({
        cache: 'list',
        customHeader: ClientHeaderRow(),
        rows: clients,
        rowItem: ClientRow,
        key: 'id',
    })
);