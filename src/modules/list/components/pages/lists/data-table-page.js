import { Div, P, Span, Td, Tr } from "@base-framework/atoms";
import { Atom } from "@base-framework/base";
import { Button, Checkbox } from "@base-framework/ui/atoms";
import { Avatar } from "@base-framework/ui/molecules";
import { DataTable } from "@base-framework/ui/organisms";
import { Page } from "@base-framework/ui/pages";

const headers = [
    { label: 'checkbox', key: '' },
    { label: 'Name', key: 'name' },
    { label: 'Status', key: 'status' },
    { label: 'Email', key: 'email' },
    { label: 'Amount', key: 'amount', align: 'justify-end' }
];

const rows = [
    {
        id: 1,
        status: 'Success',
        email: 'leslie.alexander@example.com',
        amount: 316.00,
        selected: false,
        name: 'Leslie Alexander',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        role: 'Co-Founder / CEO'
    },
    {
        id: 2,
        status: 'Success',
        email: 'michael.foster@example.com',
        amount: 242.00,
        selected: false,
        name: 'Michael Foster',
        image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        role: 'Co-Founder / CTO'
    },
    {
        id: 3,
        status: 'Processing',
        email: 'dries.vincent@example.com',
        amount: 837.00,
        selected: false,
        name: 'Dries Vincent',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        role: 'Business Relations'
    },
    {
        id: 4,
        status: 'Success',
        email: 'leslie.alexander@example.com',
        amount: 874.00,
        selected: false,
        name: 'Leslie Alexander',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        role: 'Co-Founder / CEO'
    },
    {
        id: 5,
        status: 'Failed',
        email: 'michael.foster@example.com',
        amount: 721.00,
        selected: false,
        name: 'Michael Foster',
        image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        role: 'Co-Founder / CTO'
    },
];

const additionalRows = [
    {
        id: 6,
        status: 'Success',
        email: 'dries.vincent@example.com',
        amount: 0.00,
        selected: false,
        name: 'Dries Vincent',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        role: 'Business Relations'
    },
    {
        id: 7,
        status: 'Success',
        email: 'leslie.alexander@example.com',
        amount: 0.00,
        selected: false,
        name: 'Leslie Alexander',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        role: 'Co-Founder / CEO'
    },
    {
        id: 8,
        status: 'Processing',
        email: 'michael.foster@example.com',
        amount: 0.00,
        selected: false,
        name: 'Michael Foster',
        image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        role: 'Co-Founder / CTO'
    },
    {
        id: 9,
        status: 'Success',
        email: 'dries.vincent@example.com',
        amount: 0.00,
        selected: false,
        name: 'Dries Vincent',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        role: 'Business Relations'
    },
    {
        id: 10,
        status: 'Failed',
        email: 'leslie.alexander@example.com',
        amount: 0.00,
        selected: false,
        name: 'Leslie Alexander',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        role: 'Co-Founder / CEO'
    },
];

/**
 * User Info Atom
 *
 * @param {object} props
 * @returns {object}
 */
const UserInfo = Atom(({ name, email }) =>
{
    return Div({ class: 'min-w-0 flex-auto' }, [
        P({ class: 'text-base font-semibold leading-6 m-0' }, name),
        P({ class: 'truncate text-sm leading-5 text-muted-foreground m-0' }, email)
    ]);
});

/**
 * This will create a row item.
 *
 * @param {object} row - Row data
 * @param {function} onSelect - Callback to handle row selection
 * @returns {object}
 */
const rowItem = (row, onSelect) =>
{
    return Tr({ class: 'items-center px-4 py-2 hover:bg-muted/50' }, [
        Td({ class: 'p-4 ' }, [
            new Checkbox({
                checked: row.selected,
                class: 'mr-2',
                onChange: () => onSelect(row)
            })
        ]),
        Td({ class: 'p-4 ' }, [
            Div({ class: 'flex min-w-0 gap-x-4' }, [
                Avatar({ src: row.image, alt: row.name, fallbackText: row.name }),
                UserInfo(row)
            ])
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
 * @returns {Page}
 */
export const DataTablePage = () => (
	new Page([
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
    ])
);

export default DataTablePage;