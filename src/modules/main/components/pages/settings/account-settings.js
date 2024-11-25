import { Div, H2, P } from "@base-framework/atoms";
import { Button } from "@components/atoms/buttons/buttons.js";
import { Input } from "@components/atoms/form/input.js";
import { Select } from "@components/atoms/form/select.js";
import { Form, FormField } from "@components/molecules/form/form.js";

/**
 * AccountSettings
 *
 * Settings form for updating account-related information.
 *
 * @returns {object}
 */
export const AccountSettings = () => (
    Div({ class: 'space-y-6 max-w-[500px]' }, [
        H2({ class: 'text-2xl font-semibold' }, 'Account'),
        P({ class: 'text-muted-foreground' }, 'Update your account settings, such as language and timezone.'),

        Form({ submit: (e) => { console.log("Account form submitted!"); } }, [
            new FormField({
                name: "name",
                label: "Full Name",
                description: "This is the name that will appear on your profile."
            }, [
                Input({ placeholder: "e.g. John Doe", required: true })
            ]),

            new FormField({
                name: "dob",
                label: "Date of Birth",
                description: "Your date of birth helps us provide personalized recommendations."
            }, [
                Input({ type: "date", required: true })
            ]),

            new FormField({
                name: "language",
                label: "Preferred Language",
                description: "Select your preferred language for the interface."
            }, [
                Select({
                    options: [
                        { value: "en", label: "English" },
                        { value: "es", label: "Spanish" },
                        { value: "fr", label: "French" },
                    ],
                    required: true
                })
            ]),

            Button({ type: "submit", class: "mt-4" }, "Update Account")
        ])
    ])
);