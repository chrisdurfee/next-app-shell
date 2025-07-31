import { Div } from "@base-framework/atoms";
import { Button, Card, Fieldset, FormGroup, Input, NumberInput } from "@base-framework/ui/atoms";
import { FormField } from "@base-framework/ui/molecules";
import { Page } from "@base-framework/ui/pages";
import { SettingsSection } from "../atoms/settings-section.js";

/**
 * ProfileSettings
 *
 * Settings form for updating profile information.
 *
 * @returns {object}
 */
export const ProfileSettings = () => (
    new Page(([
        SettingsSection({
            title: 'Profile',
            description: 'This is how others will see you on the site.',
            class: 'max-w-[1300px] mx-auto',
            submit: (data) => console.log("Profile Settings:", data)
        }, [
            Card({ margin: 'm-0' }, [
                FormGroup({ label: 'Public Settings', description: 'Choose how you are seen on the site.' }, [
                    Div({ class: 'space-y-6 md:pr-8' }, [
                        new FormField({
                            name: "displayName",
                            label: "Display Name",
                            description: "This is your public display name."
                        }, [
                            Input({ placeholder: "e.g. john_doe", required: true })
                        ])
                    ])
                ]),
            ]),
            Card({ margin: 'm-0' }, [
                FormGroup({ label: 'Contact Settings', description: 'Manage the way we contact you.' }, [
                    Div({ class: 'space-y-6 md:pr-8' }, [
                        new FormField({
                            name: "firstName",
                            label: "First Name",
                            description: "This is your public first name."
                        }, [
                            Input({ placeholder: "e.g. john", required: true })
                        ]),

                        new FormField({
                            name: "lastName",
                            label: "Last Name",
                            description: "This is your public last name."
                        }, [
                            Input({ placeholder: "e.g. doe", required: true })
                        ]),

                        new FormField({
                            name: "mobile",
                            label: "Mobile",
                            description: "This is your public mobile number."
                        }, [
                            NumberInput({ placeholder: "e.g. +1234567890", required: true })
                        ]),

                        new FormField({
                            name: "email",
                            label: "Email",
                            description: "Select a verified email to display."
                        }, [
                            Input({ type: "email", placeholder: "e.g. john_doe@example.com", required: true })
                        ]),
                    ])
                ])
            ]),
            Fieldset({ legend: 'Profile Settings' }, [
                FormGroup({ label: 'Public Settings', description: 'Choose how you are seen on the site.' }, [
                    Div({ class: 'space-y-6' }, [
                        new FormField({
                            name: "displayName",
                            label: "Display Name",
                            description: "This is your public display name."
                        }, [
                            Input({ placeholder: "e.g. john_doe", required: true })
                        ])
                    ])
                ]),
                FormGroup({ label: 'Contact Settings', description: 'Manage the way we contact you.' }, [
                    Div({ class: 'space-y-6' }, [
                        new FormField({
                            name: "firstName",
                            label: "First Name",
                            description: "This is your public first name."
                        }, [
                            Input({ placeholder: "e.g. john", required: true })
                        ]),

                        new FormField({
                            name: "lastName",
                            label: "Last Name",
                            description: "This is your public last name."
                        }, [
                            Input({ placeholder: "e.g. doe", required: true })
                        ]),

                        new FormField({
                            name: "mobile",
                            label: "Mobile",
                            description: "This is your public mobile number."
                        }, [
                            NumberInput({ placeholder: "e.g. +1234567890", required: true })
                        ]),

                        new FormField({
                            name: "email",
                            label: "Email",
                            description: "Select a verified email to display."
                        }, [
                            Input({ type: "email", placeholder: "e.g. john_doe@example.com", required: true })
                        ]),
                    ])
                ]),
            ]),
            Div({ class: 'mt-4 flex flex-auto justify-end' }, [
                Button({ class: 'mt-4 mr-4' }, "Update Profile")
            ])
        ])
    ]))
);

export default ProfileSettings;