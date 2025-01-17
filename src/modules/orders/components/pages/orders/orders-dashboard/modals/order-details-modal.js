import { Div, H3, P, Span } from "@base-framework/atoms";
import { Data, DateTime } from "@base-framework/base";
import { Icons } from "@base-framework/ui/icons";
import { DetailBody, DetailSection, DropdownMenu, Modal, SplitRow } from "@base-framework/ui/molecules";
import { getOrderById } from "../orders.js";

/**
 * Renders all the ordered items as a series of SplitRow's.
 *
 * @returns {object}
 */
const ItemLines = () =>
    Div({
        class: 'fex flex-auto flex-col space-y-3',
        for: ['items', (item) =>
            SplitRow(item.label, `$${item.price.toFixed(2)}`)
        ]
    });

/**
 * Renders cost breakdown lines (subtotal/shipping/tax) and total.
 *
 * @returns {object}
 */
const CostBreakdown = () =>
    Div({ class: 'flex flex-auto flex-col space-y-3' }, [
        SplitRow('Subtotal', `$[[subtotal]]`),
        SplitRow('Shipping', `$[[shipping]]`),
        SplitRow('Tax', `$[[tax]]`),
        Div({ class: 'flex justify-between font-semibold text-primary' }, [
            Span('Total'),
            Span(`$[[total]]`)
        ])
    ]);

/**
 * Renders shipping + billing information side by side.
 *
 * @returns {object}
 */
const ShippingBilling = () =>
    Div({ class: 'flex flex-col md:flex-row gap-4 pb-4 pt-6' }, [
        // Shipping
        Div({ class: 'flex flex-auto flex-col' }, [
            H3({ class: 'text-sm font-semibold mb-1' }, 'Shipping Information'),
            P({ class: 'text-sm whitespace-pre-line text-muted-foreground' },
                `[[shippingInfo.name]]\n[[shippingInfo.address]]`
            )
        ]),
        // Billing
        Div({ class: 'flex flex-auto flex-col' }, [
            H3({ class: 'text-sm font-semibold mb-1' }, 'Billing Information'),
            P({ class: 'text-sm text-muted-foreground' }, '[[billingInfo.name]]')
        ])
    ]);

/**
 * Renders the customer info section.
 *
 * @returns {object}
 */
const CustomerInfo = () =>
    Div({ class: 'pb-4' }, [
        H3({ class: 'text-sm font-semibold mb-3 pt-6' }, 'Customer Information'),
        Div({ class: 'text-sm space-y-3' }, [
            SplitRow('Customer ID', '[[orderId]]'),
            SplitRow('Date', '[[date]]'),
            SplitRow('Customer', '[[customerInfo.name]]'),
            SplitRow('Email', '[[customerInfo.email]]')
        ])
    ]);

/**
 * Renders payment info (just a single row in this design).
 *
 * @returns {object}
 */
const PaymentInfo = () =>
    Div({ class: 'pb-2' }, [
        H3({ class: 'text-sm font-semibold mb-3 pt-6' }, 'Payment Information'),
        SplitRow('Payment Method', '[[paymentMethod]]')
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
 * Retrieves order details by ID.
 *
 * @param {string} orderId
 * @returns {object}
 */
const getOrderDetails = (orderId) =>
{
    const order = getOrderById(orderId);
    const date = order.date;

    // Extract data with default fallbacks
    return Object.assign({}, {
        orderId: "Oe31b70H",
        date,
        formattedDate: DateTime.format('standard', date),
        items: [
            { label: "Glimmer Lamps x 2", price: 250.00 },
            { label: "Aqua Filters x 1", price: 49.00 }
        ],
        subtotal: 299.00,
        shipping: 5.00,
        tax: 25.00,
        total: 329.00,
        shippingInfo: {
            name: order.customerName || "Liam Johnson",
            address: order.address || "1234 Main St.\nAnytown, CA 12345"
        },
        billingInfo: { name: "Same as shipping address" },
        customerInfo: {
            name: order.customerName || "Liam Johnson",
            email: order.email || "liam@acme.com",
            phone: "+1 234 567 890"
        },
        paymentMethod: "Visa **** **** **** 4532"
    }, order);
};

/**
 * OrderDetailsModal
 *
 * A read-only modal showing summarized order details, pulling from your `getOrderById(orderId)`.
 *
 * @returns {object}
 */
export const OrderDetailsModal = () =>
{
    return new Modal({
        title: `Order ID: [[orderId]]`,
        icon: Icons.shoppingCart,
        description: `Date: [[formattedDate]]`,
        size: 'md',
        type: 'right',
        hidePrimaryButton: true,

        /**
         * This will setup the data for the modal.
         *
         * @returns {Data}
         */
        setData()
        {
            return new Data();
        },

        /**
         * This will set the order details before setup.
         *
         * @returns {void}
         */
        beforeSetup()
        {
            const orderId = this.route.orderId;
            const order = getOrderDetails(orderId);
            this.data.set(order);
        },

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
                ItemLines(),
                Div({ class: 'my-2 border-t' }),
                CostBreakdown()
            ]),

            // Shipping / Billing Info
            ShippingBilling(),

            // Customer Info
            CustomerInfo(),

            // Payment Info
            PaymentInfo()
        ])
    ]);

};