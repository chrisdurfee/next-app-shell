import { Div, H3, P, Span } from "@base-framework/atoms";
import { DateTime } from "@base-framework/base";
import { Icons } from "@components/icons/icons.js";
import { DropdownMenu } from '@components/molecules/dropdowns/dropdown-menu.js';
import { DetailBody, DetailSection, SplitRow } from "@components/molecules/modals/atoms.js";
import { Modal } from "@components/molecules/modals/modal.js";
import { getOrderById } from "../orders.js";

/**
 * Renders all the ordered items as a series of SplitRow's.
 *
 * @param {Array} items - An array of { label, price }.
 * @returns {Array}
 */
const ItemLines = (items) =>
    items.map((item) =>
        SplitRow(item.label, `$${item.price.toFixed(2)}`)
    );

/**
 * Renders cost breakdown lines (subtotal/shipping/tax) and total.
 *
 * @param {number} subtotal
 * @param {number} shipping
 * @param {number} tax
 * @param {number} total
 * @returns {Array}
 */
const CostBreakdown = (subtotal, shipping, tax, total) => [
    SplitRow('Subtotal', `$${subtotal.toFixed(2)}`),
    SplitRow('Shipping', `$${shipping.toFixed(2)}`),
    SplitRow('Tax', `$${tax.toFixed(2)}`),
    Div({ class: 'flex justify-between font-semibold text-primary' }, [
        Span('Total'),
        Span(`$${total.toFixed(2)}`)
    ])
];

/**
 * Renders shipping + billing information side by side.
 *
 * @param {object} shippingInfo
 * @param {object} billingInfo
 * @returns {object}
 */
const ShippingBilling = (shippingInfo, billingInfo) =>
    Div({ class: 'flex flex-col md:flex-row gap-4 pb-4 pt-6' }, [
        // Shipping
        Div({ class: 'flex flex-auto flex-col' }, [
            H3({ class: 'text-sm font-semibold mb-1' }, 'Shipping Information'),
            P({ class: 'text-sm whitespace-pre-line text-muted-foreground' },
                `${shippingInfo.name}\n${shippingInfo.address}`
            )
        ]),
        // Billing
        Div({ class: 'flex flex-auto flex-col' }, [
            H3({ class: 'text-sm font-semibold mb-1' }, 'Billing Information'),
            P({ class: 'text-sm text-muted-foreground' }, billingInfo.name)
        ])
    ]);

/**
 * Renders the customer info section.
 *
 * @param {string} orderId
 * @param {string} date
 * @param {object} customerInfo - { name, email, phone }
 * @returns {object}
 */
const CustomerInfo = (orderId, date, customerInfo) =>
    Div({ class: 'pb-4' }, [
        H3({ class: 'text-sm font-semibold mb-3 pt-6' }, 'Customer Information'),
        Div({ class: 'text-sm space-y-3' }, [
            SplitRow('Customer ID', orderId),
            SplitRow('Date', date),
            SplitRow('Customer', customerInfo.name),
            SplitRow('Email', customerInfo.email)
        ])
    ]);

/**
 * Renders payment info (just a single row in this design).
 *
 * @param {string} paymentMethod
 * @returns {object}
 */
const PaymentInfo = (paymentMethod) =>
    Div({ class: 'pb-2' }, [
        H3({ class: 'text-sm font-semibold mb-3 pt-6' }, 'Payment Information'),
        SplitRow('Payment Method', paymentMethod)
    ]);

/**
 * Header options for the modal.
 *
 * @returns {Array}
 */
const HeaderOptions = () => [
    new DropdownMenu({
        icon: Icons.ellipsis.vertical,
        groups: [
            [
                { icon: Icons.mapPin, label: 'Track Order', value: 'track-order' },
                { icon: Icons.trash, label: 'Delete Order', value: 'delete-order' }
            ]
        ],
        onSelect: (item) =>
        {
            console.log("Selected item:", item);
            // Handle selected item
        },
    })
];

/**
 * OrderDetailsModal
 *
 * A read-only modal showing summarized order details, pulling from your `getOrderById(orderId)`.
 *
 * @param {object} props
 * @returns {object}
 */
export const OrderDetailsModal = (props) =>
{
    // Retrieve the order object from your data source
    const order = getOrderById(props.orderId);

    // Extract data with default fallbacks
    const {
        orderId = "Oe31b70H",
        date = order.date || "2023-06-23",
        items = [
            { label: "Glimmer Lamps x 2", price: 250.00 },
            { label: "Aqua Filters x 1", price: 49.00 }
        ],
        subtotal = 299.00,
        shipping = 5.00,
        tax = 25.00,
        total = 329.00,
        shippingInfo = {
            name: order.customerName || "Liam Johnson",
            address: order.address || "1234 Main St.\nAnytown, CA 12345"
        },
        billingInfo = { name: "Same as shipping address" },
        customerInfo = {
            name: order.customerName || "Liam Johnson",
            email: order.email || "liam@acme.com",
            phone: "+1 234 567 890"
        },
        paymentMethod = "Visa **** **** **** 4532"
    } = order;

    const formattedDate = DateTime.format('standard', date);

    const modal = new Modal({
        title: `Order ID: ${orderId}`,
        icon: Icons.shoppingCart,
        description: `Date: ${formattedDate}`,
        size: 'md',
        type: 'right',
        showClose: true,
        hidePrimaryButton: true,

        /**
         * Header options for the modal.
         */
        headerOptions: HeaderOptions,

        /**
         * This will modal is being created by a route
         * so we need to show it after setup.
         *
         * @returns {void}
         */
        afterSetup()
        {
            this.showModal();
        },

        /**
         * This will navigate back to the orders dashboard.
         *
         * @returns {void}
         */
        onClose: () => app.navigate('orders/orders-dashboard')
    },
    [
        DetailBody([

            // Order Details Section
            DetailSection({ title: 'Order Details' }, [
                ...ItemLines(items),
                Div({ class: 'my-2 border-t' }),
                ...CostBreakdown(subtotal, shipping, tax, total)
            ]),

            // Shipping / Billing Info
            ShippingBilling(shippingInfo, billingInfo),

            // Customer Info
            CustomerInfo(orderId, formattedDate, customerInfo),

            // Payment Info
            PaymentInfo(paymentMethod)
        ])
    ]);

    return modal;
};