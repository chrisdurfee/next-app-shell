import { A, Div, P, Td, Tr } from '@base-framework/atoms';
import { Checkbox } from "@components/atoms/form/checkbox.js";
import { Avatar } from "@components/molecules/avatars/avatar.js";

/**
 * This will render a row in the orders table.
 *
 * @param {object} order - Row data
 * @param {function} onSelect - Selection callback
 * @returns {object}
 */
export const OrdersRow = (order, onSelect) => (
    Tr({ class: 'items-center px-4 py-2 hover:bg-muted/50' }, [
        Td({ class: 'p-4 hidden md:table-cell' }, [
            new Checkbox({
                checked: order.selected,
                class: 'mr-2',
                onChange: () => onSelect(order)
            })
        ]),
        Td({ class: 'p-4' }, [
            A({
                href: `orders/orders-dashboard/${order.id}`,
                'data-prevent-scroll': true,
                class: 'flex items-center gap-x-4 no-underline text-inherit hover:text-primary',
            }, [
                Avatar({
                    src: order.image || '',
                    alt: order.customerName,
                    fallbackText: order.customerName
                }),
                Div({ class: 'min-w-0 flex-auto' }, [
                    P({ class: 'text-base font-semibold leading-6 m-0' }, order.customerName),
                    P({ class: 'truncate text-sm leading-5 text-muted-foreground m-0' }, order.email)
                ])
            ])
        ]),
        Td({ class: 'p-4 hidden md:table-cell' }, [
            A({
                'data-prevent-scroll': true,
                href: `orders/orders-dashboard/${order.id}`,
                class: 'no-underline text-inherit hover:text-primary',
            }, order.type)
        ]),
        Td({ class: `p-4 hidden md:table-cell font-medium ${order.status === 'Fulfilled' ? 'text-green-500' : 'text-red-500'}` }, [
            A({
                'data-prevent-scroll': true,
                href: `orders/orders-dashboard/${order.id}`,
                class: 'no-underline text-inherit hover:text-primary',
            }, order.status)
        ]),
        Td({ class: 'p-4 hidden md:table-cell' }, [
            A({
                'data-prevent-scroll': true,
                href: `orders/orders-dashboard/${order.id}`,
                class: 'no-underline text-inherit hover:text-primary',
            }, order.date)
        ]),
        Td({ class: 'p-4 text-right justify-end' }, [
            A({
                'data-prevent-scroll': true,
                href: `orders/orders-dashboard/${order.id}`,
                class: 'no-underline text-inherit hover:text-primary',
            }, `$${order.amount.toFixed(2)}`)
        ])
    ])
);