import { Div, Span } from "@base-framework/atoms";
import { Atom, Jot } from "@base-framework/base";
import { Button } from "@components/atoms/buttons/buttons.js";
import { Card } from "@components/atoms/cards/card.js";
import { Input } from "@components/atoms/form/input.js";
import { Select } from "@components/atoms/form/select.js";
import { Icon } from "@components/atoms/icon.js";
import { Icons } from "@components/icons/icons.js";
import { Form, FormField } from "@components/molecules/form/form.js";
import { CardHeader } from "./card-atoms.js";

/**
 * This will create a state button.
 *
 * @param {object} props
 * @returns {object}
 */
const MethodButton = Atom(({ value, label, icon }) => (
	Button({
		class: 'inline-flex flex-auto items-center justify-center whitespace-nowrap rounded-md px-8 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow',
		onState: ['method', { active: value}],
		dataSet: ['method', ['state', value, 'active']],
		click: (e, {state}) => state.performance = value
	}, [
        Icon(icon),
        Span(label)
    ])
));

/**
 * ButtonGroup
 *
 * This will create a button group.
 *
 * @class
 */
export const PaymentMethoGroup = Jot(
{
    /**
     * This will render the component.
     *
     * @returns {object}
     */
	render()
	{
		return Div({ class: 'flex flex-auto flex-col' }, [
			Div({ class: 'grid grid-cols-3 gap-4'}, [
				MethodButton({ label: 'Card', value: 'card', icon: Icons.creditCard }),
				MethodButton({ label: 'Paypal', value: 'paypal', icon: Icons.companies.paypal }),
				MethodButton({ label: 'Apple', value: 'apple', icon: Icons.companies.apple })
			])
		]);
	},

    /**
     * This will setup the states.
     *
     * @returns {object}
     */
	state()
	{
		return {
			method: null
		};
	}
});

/**
 * PaymentMethodSelector
 *
 * Creates the payment method selection buttons.
 *
 * @returns {object}
 */
const PaymentMethodSelector = () => (
    Div({ class: "flex items-center justify-center gap-4" }, [
        new PaymentMethoGroup()
    ])
);

/**
 * PaymentForm
 *
 * Creates the form for payment details (Name, Card number, Expiry, Year, CVC).
 *
 * @returns {object}
 */
const PaymentForm = () => (
    Form({ submit: (e) => { e.preventDefault(); console.log("Payment method added"); } }, [
        // Name on Card field
        new FormField({
            name: "name",
            label: "Name",
        }, [
            Input({
                type: "text",
                placeholder: "First Last",
                required: true,
                class: "border p-2 rounded-md w-full bg-background placeholder-muted-foreground text-foreground"
            })
        ]),

        // Card Number field
        new FormField({
            name: "card_number",
            label: "Card number",
        }, [
            Input({
                type: "text",
                placeholder: "1234 5678 9012 3456",
                required: true,
                class: "border p-2 rounded-md w-full bg-background placeholder-muted-foreground text-foreground"
            })
        ]),

        // Expiry Date, Year, and CVC
        Div({ class: "flex gap-4 mt-4" }, [
            // Expiry Month
            new FormField({ name: "month", label: "Expires" }, [
                Select({
                    required: true,
                    class: "border p-2 rounded-md w-full bg-background text-foreground",
                    options: [
                        { value: "", label: "Month", disabled: true },
                        ...Array.from({ length: 12 }, (_, i) => ({
                            value: `${i + 1}`,
                            label: `${i + 1}`.padStart(2, "0")
                        }))
                    ]
                })
            ]),

            // Expiry Year
            new FormField({ name: "year", label: "Year" }, [
                Select({
                    required: true,
                    class: "border p-2 rounded-md w-full bg-background text-foreground",
                    options: [
                        { value: "", label: "Year", disabled: true },
                        ...Array.from({ length: 10 }, (_, i) => ({
                            value: `${new Date().getFullYear() + i}`,
                            label: `${new Date().getFullYear() + i}`
                        }))
                    ]
                })
            ]),

            // CVC
            new FormField({ name: "cvc", label: "CVC" }, [
                Input({
                    type: "text",
                    placeholder: "CVC",
                    required: true,
                    class: "border p-2 rounded-md w-full bg-background placeholder-muted-foreground text-foreground"
                })
            ])
        ]),

        // Submit button
        Button({
            type: "submit",
            class: "w-full mt-4 py-2 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition"
        }, "Continue")
    ])
);

/**
 * PaymentCard
 *
 * This component creates a card for adding a new payment method.
 *
 * @returns {object}
 */
export const PaymentCard = () => (
    Card({ class: "w-full max-w-md mx-auto p-8 bg-card space-y-6" }, [
        CardHeader({ title: "Payment Method", description: "Add a new payment method to your account." }),
        PaymentMethodSelector(),

        Div({ class: "space-y-4" }, [
            PaymentForm()
        ])
    ])
);

export default PaymentCard;