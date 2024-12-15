import { Div, H2, H3, P, Span } from "@base-framework/atoms";
import { Icons } from "@components/icons/icons.js";
import { Modal } from "@components/molecules/modals/modal.js";
import { getOrderById } from "../orders";

/**
 * This will create a split detail row.
 *
 * @param {string} label
 * @param {string} value
 * @returns {object}
 */
export const SplitDetailRow = (label, value) => (
    Div({ class: 'flex justify-between' }, [
        Span({ class: 'text-muted-foreground' }, label),
        Span(value)
    ])
);

/**
 * OrderDetailsModal
 *
 * A read-only modal showing summarized order details:
 * - Order ID, Date
 * - Items & Pricing
 * - Shipping / Billing / Customer info
 * - Payment method
 *
 * @param {object} props
 * @returns {object} A new modal instance
 */
export const OrderDetailsModal = (props) =>
{
    const order = getOrderById(props.orderId);
    const {
        orderId = "Oe31b70H",
        date = "November 23, 2023",
        items = [
            { label: "Glimmer Lamps x 2", price: 250.00 },
            { label: "Aqua Filters x 1", price: 49.00 }
        ],
        subtotal = 299.00,
        shipping = 5.00,
        tax = 25.00,
        total = 329.00,
        shippingInfo = {
            name: "Liam Johnson",
            address: "1234 Main St.\nAnytown, CA 12345"
        },
        billingInfo = {
            name: "Same as shipping address"
        },
        customerInfo = {
            name: "Liam Johnson",
            email: "liam@acme.com",
            phone: "+1 234 567 890"
        },
        paymentMethod = "Visa **** **** **** 4532"
    } = order;

    // Create a line item for each ordered item
    const itemLines = items.map((item, idx) =>
        SplitDetailRow(item.label, `$${item.price.toFixed(2)}`)
    );

    return new Modal({
        title: `Order ID: ${orderId}`,
        icon: Icons.shoppingCart,
        description: `Date: ${date}`,
        size: 'md',
        type: 'right',   // or 'center' if you prefer
        showClose: true, // optionally show an X close button
        closeOnOutsideClick: true,
        hidePrimaryButton: true,
        onClose: () => app.navigate('/orders/orders-dashboard')
    }, [
        Div({ class: 'space-y-6 p-4 md:p-6 bg-card text-card-foreground divide divide-y' }, [

            // Order Details
            Div({ class: 'space-y-3 pb-4' }, [
                H2({ class: 'font-semibold' }, 'Order Details'),
                ...itemLines, // lines for each purchased item

                Div({ class: 'my-2 border-t' }),

                SplitDetailRow('Subtotal', `$${subtotal.toFixed(2)}`),
                SplitDetailRow('Shipping', `$${shipping.toFixed(2)}`),
                SplitDetailRow('Tax', `$${tax.toFixed(2)}`),
                Div({ class: 'flex justify-between font-semibold text-primary' }, [
                    Span('Total'),
                    Span(`$${total.toFixed(2)}`)
                ])
            ]),

            // Shipping / Billing Info
            Div({ class: 'flex flex-auto flex-col md:flex-row gap-4 pb-4 pt-6' }, [
                Div({ class: 'flex flex-auto flex-col' }, [
                    H3({ class: 'text-sm font-semibold mb-1' }, 'Shipping Information'),
                    P({ class: 'text-sm whitespace-pre-line text-muted-foreground' }, `${shippingInfo.name}\n${shippingInfo.address}`)
                ]),
                Div({ class: 'flex flex-auto flex-col' }, [
                    H3({ class: 'text-sm font-semibold mb-1' }, 'Billing Information'),
                    P({ class: 'text-sm text-muted-foreground' }, billingInfo.name)
                ])
            ]),

            // Customer Info
            Div({ class: 'pb-4' }, [
                H3({ class: 'text-sm font-semibold mb-3 pt-6' }, 'Customer Information'),
                Div({ class: 'text-sm space-y-3' }, [
                    SplitDetailRow('Customer ID', orderId),
                    SplitDetailRow('Date', date),
                    SplitDetailRow('Customer', customerInfo.name),
                    SplitDetailRow('Email', customerInfo.email),
                ])
            ]),

            // Payment Info
            Div({ class: 'pb-2' }, [
                H3({ class: 'text-sm font-semibold mb-3 pt-6' }, 'Payment Information'),
                SplitDetailRow('Payment Method', paymentMethod)
            ])
        ])
    ]);
};