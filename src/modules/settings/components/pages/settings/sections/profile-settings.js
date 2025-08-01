import { Div } from "@base-framework/atoms";
import { Button, Input, NumberInput, Select, Textarea } from "@base-framework/ui/atoms";
import {
    FormCard,
    FormCardContent,
    FormCardGroup,
    FormField,
    LogoUploader,
    Toggle
} from "@base-framework/ui/molecules";
import { Page } from "@base-framework/ui/pages";
import { SettingsSection } from "../atoms/settings-section.js";

/**
 * ProfileSettings
 *
 * Settings form for updating all user-editable fields.
 *
 * @returns {object}
 */
export const ProfileSettings = () => (
    new Page([
        SettingsSection({
            title: "Profile",
            description: "Update your personal and contact information. Some fields are managed by the platform and cannot be changed here.",
            class: "max-w-5xl mx-auto space-y-6",
            submit: (data) => console.log("Profile Settings:", data)
        }, [

            // Public Profile
            FormCard({
                title: "Public Profile",
                description: "These fields control how you appear to other users."
            }, [
                FormCardGroup({ label: "Display Name", description: "", border: true }, [
                    new FormField({
                        name: "displayName",
                        label: "",
                        description: "Your public display name (must meet our terms of service)."
                    }, [
                        Input({ placeholder: "e.g. john_doe", required: true })
                    ])
                ]),
                FormCardGroup({ label: "Profile Image", description: "", border: true }, [
                    new FormField({
                        name: "image",
                        label: "",
                        description: "Your avatar, shown on your profile."
                    }, [
                        new LogoUploader({
                            src: "",
                            onChange: (file, parent) => console.log("Avatar file:", file, parent)
                        })
                    ])
                ]),
                FormCardGroup({ label: "Cover Image", description: "", border: true }, [
                    new FormField({
                        name: "coverImageUrl",
                        label: "",
                        description: "A banner image for your profile."
                    }, [
                        new LogoUploader({
                            src: "",
                            onChange: (file, parent) => console.log("Cover image file:", file, parent)
                        })
                    ])
                ]),
                FormCardGroup({ label: "Bio", description: "", border: true }, [
                    new FormField({
                        name: "bio",
                        label: "",
                        description: "A short biography or description."
                    }, [
                        Textarea({ placeholder: "Tell us about yourself" })
                    ])
                ])
            ]),

            // Personal Information
            FormCard({ title: "Personal Information" }, [
                FormCardGroup({ label: "Name", description: "", border: true }, [
                    new FormField({
                        name: "firstName",
                        label: "First Name",
                        description: "Your given name."
                    }, [
                        Input({ placeholder: "e.g. John", required: true })
                    ]),
                    new FormField({
                        name: "lastName",
                        label: "Last Name",
                        description: "Your family name."
                    }, [
                        Input({ placeholder: "e.g. Doe", required: true })
                    ])
                ]),
                FormCardGroup({ label: "Date of Birth", description: "", border: true }, [
                    new FormField({
                        name: "dob",
                        label: "",
                        description: "Your birth date."
                    }, [
                        Input({ type: "date", required: true })
                    ])
                ]),
                FormCardGroup({ label: "Gender", description: "", border: true }, [
                    new FormField({
                        name: "gender",
                        label: "",
                        description: "Your gender identity."
                    }, [
                        Select({
                            options: [
                                { value: "male", label: "Male" },
                                { value: "female", label: "Female" },
                                { value: "other", label: "Other" },
                                { value: "prefer_not", label: "Prefer not to say" }
                            ]
                        })
                    ])
                ])
            ]),

            // Contact & Location
            FormCard({ title: "Contact & Location" }, [
                FormCardGroup({ label: "Email Address", description: "", border: true }, [
                    new FormField({
                        name: "email",
                        label: "",
                        description: "Your primary email."
                    }, [
                        Input({ type: "email", placeholder: "e.g. you@example.com", required: true })
                    ])
                ]),
                FormCardGroup({ label: "Mobile Phone", description: "", border: true }, [
                    new FormField({
                        name: "mobile",
                        label: "",
                        description: "Your mobile number."
                    }, [
                        Input({ placeholder: "e.g. +1234567890" })
                    ])
                ]),
                FormCardGroup({ label: "Mailing Address", description: "", border: true }, [
                    new FormField({
                        name: "street1",
                        label: "Street Address 1",
                        description: "House number and street name."
                    }, [
                        Input({ placeholder: "e.g. 123 Main St" })
                    ]),
                    new FormField({
                        name: "street2",
                        label: "Street Address 2",
                        description: "Apartment, suite, etc. (optional)."
                    }, [
                        Input({ placeholder: "e.g. Apt 4B" })
                    ]),
                    Div({ class: "grid grid-cols-1 sm:grid-cols-3 gap-4" }, [
                        new FormField({
                            name: "city",
                            label: "City",
                            description: ""
                        }, [
                            Input({ placeholder: "e.g. Springfield" })
                        ]),
                        new FormField({
                            name: "state",
                            label: "State",
                            description: ""
                        }, [
                            Input({ placeholder: "e.g. CA" })
                        ]),
                        new FormField({
                            name: "postalCode",
                            label: "Postal Code",
                            description: ""
                        }, [
                            NumberInput({ placeholder: "e.g. 12345" })
                        ])
                    ]),
                ]),

                FormCardGroup({ label: "Locale", description: "", border: true }, [
                    new FormField({
                        name: "language",
                        label: "Language",
                        description: ""
                    }, [
                        Select({
                            options: [
                                { value: "en", label: "English" },
                                { value: "es", label: "Spanish" }
                                // add more languages...
                            ]
                        })
                    ]),
                    new FormField({
                        name: "timezone",
                        label: "Timezone",
                        description: ""
                    }, [
                        Select({
                            options: [
                                { value: "UTC−08:00", label: "Pacific Time (US & Canada)" },
                                { value: "UTC+00:00", label: "UTC" }
                                // add more timezones...
                            ]
                        })
                    ]),
                    new FormField({
                        name: "currency",
                        label: "Currency",
                        description: ""
                    }, [
                        Select({
                            options: [
                                { value: "USD", label: "USD" },
                                { value: "EUR", label: "EUR" }
                                // add more currencies...
                            ]
                        })
                    ])
                ])
            ]),

            // Preferences
            FormCard({ title: "Preferences" }, [
                FormCardGroup({ label: "Marketing Opt-In", description: "", border: true }, [
                    new FormField({
                        name: "marketingOptIn",
                        label: "",
                        description: "Receive marketing emails and updates."
                    }, [
                        new Toggle({
                            active: false,
                            change: (val) => console.log("Marketing Opt-In:", val)
                        })
                    ])
                ])
            ]),

            // Save button
            FormCardContent({ border: true }, [
                Div({ class: "mt-4 flex justify-end" }, [
                    Button({ variant: "primary" }, "Save Profile")
                ])
            ])

        ])
    ])
);

export default ProfileSettings;
