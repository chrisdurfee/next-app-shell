import { Div } from "@base-framework/atoms";
import { Fieldset, Input } from "@base-framework/ui/atoms";
import { Icons } from "@base-framework/ui/icons";
import { Counter, FormField, Modal } from "@base-framework/ui/molecules";

/**
 * OrderModal
 *
 * Displays a modal for creating a new order.
 *
 * @param {object} props
 * @returns {object}
 */
export const OrderModal = (props) => (
    new Modal({
        title: 'Add Order',
        icon: Icons.circlePlus,
        description: "Fill in the details for the new order.",
        size: 'sm',
        type: 'right',
        onSubmit: () => app.notify({
            type: "success",
            title: "Order Added",
            description: "The order has been successfully added.",
            icon: Icons.check
        })
    }, [
        Div({ class: 'flex flex-col lg:p-4 space-y-8' }, [
            // Row wrapper
            Div({ class: "flex flex-auto flex-col w-full gap-4" }, [
                // Customer Information
                Fieldset({ legend: "Customer Info" }, [
                    new FormField({
                        name: "customerName",
                        label: "Customer Name",
                        description: "The name of the customer."
                    }, [
                        Input({
                            type: "text",
                            placeholder: "e.g. John Doe",
                            required: true
                        })
                    ]),
                    new FormField({
                        name: "email",
                        label: "Email",
                        description: "Email address of the customer."
                    }, [
                        Input({
                            type: "email",
                            placeholder: "e.g. john@example.com",
                            required: true
                        })
                    ]),
                ]),

                // Order Details
                Fieldset({ legend: "Order Details" }, [
                    new FormField({
                        name: "type",
                        label: "Order Type",
                        description: "Sale, Subscription, or Refund."
                    }, [
                        Input({
                            type: "text",
                            placeholder: "e.g. Sale",
                            required: true
                        })
                    ]),
                    new FormField({
                        name: "status",
                        label: "Status",
                        description: "Fulfilled, Pending, or Declined."
                    }, [
                        Input({
                            type: "text",
                            placeholder: "e.g. Fulfilled",
                            required: true
                        })
                    ]),
                    new FormField({
                        name: "date",
                        label: "Date",
                        description: "The date of the order (YYYY-MM-DD)."
                    }, [
                        Input({
                            type: "date",
                            required: true
                        })
                    ]),
                    new FormField({
                        name: "amount",
                        label: "Amount",
                        description: "Total amount for this order."
                    }, [
                        Input({
                            type: "number",
                            min: 0,
                            step: "0.01",
                            placeholder: "e.g. 250.00",
                            required: true
                        })
                    ]),
                    new FormField({
                        name: "quantity",
                        label: "Quantity",
                        description: "Number of items in this order."
                    }, [
                        new Counter({
                            class: 'max-w-[300px]',
                            initialCount: 1,
                            min: 1,
                            max: 1000,
                            readonly: false,
                            bind: 'quantity',
                            change: (value) => console.log(value)
                        })
                    ]),
                ])
            ])
        ])
    ]).open()
);