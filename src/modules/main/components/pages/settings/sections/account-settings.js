import { Button, Fieldset, Input, Select } from "@base-framework/ui/atoms";
import { FormField } from "@base-framework/ui/molecules";
import { SettingsSection } from "../atoms/settings-section.js";

/**
 * AccountSettings
 *
 * Settings form for updating account-related information.
 *
 * @returns {object}
 */
export const AccountSettings = () => (
    SettingsSection({
        title: 'Account',
        description: 'Update your account settings, such as language and timezone.',
        class: 'max-w-[500px]',
        submit: (data) => console.log("Account Settings:", data)
    }, [
        Fieldset({ legend: 'Account Information' }, [
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