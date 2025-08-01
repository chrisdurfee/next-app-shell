import { Div } from "@base-framework/atoms";
import { Button, Input, NumberInput } from "@base-framework/ui/atoms";
import { Icons } from "@base-framework/ui/icons";
import { FormCard, FormCardGroup, FormField } from "@base-framework/ui/molecules";
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
            class: 'max-w-5xl mx-auto',
            submit: (data) => console.log("Profile Settings:", data)
        }, [
            FormCard({ title: 'Public Settings', description: 'These settings control your public profile and will be visible to other users. Your display name must meet our terms of service.' }, [
				FormCardGroup({ label: 'Display Name', description: '', border: true }, [
					new FormField({
							name: "displayName",
							label: "",
							description: "This is your public display name."
						}, [
							Div({ class: 'flex flex-auto space-x-2' }, [
								Input({ placeholder: "e.g. john_doe", required: true }),
								Button({ variant: 'icon', class: 'outline', icon: Icons.clipboard.document.default })
						])
					])
				])
			]),
            FormCard({ title: 'User Settings' }, [
				FormCardGroup({ label: 'Contact Settings', description: 'Manage the way we contact you.', border: true }, [
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
				]),
                FormCardGroup({ label: 'Address', description: 'This should be your mailing address.', border: true }, [
					new FormField({
                        name: "streetAddress1",
                        label: "Street Address 1",
                        description: "This is your public street address."
                    }, [
                        Input({ placeholder: "e.g. 123 Main St", required: true })
                    ]),

                    new FormField({
                        name: "streetAddress2",
                        label: "Street Address 2",
                        description: "This is your public street address."
                    }, [
                        Input({ placeholder: "e.g. Apt 4B", required: true })
                    ]),

                    Div({ class: 'grid grid-cols-1 sm:grid-cols-3 gap-4' }, [

                        new FormField({
                            name: "city",
                            label: "City",
                            description: "This is your public city."
                        }, [
                            Input({ placeholder: "e.g. Springfield", required: true })
                        ]),

                        new FormField({
                            name: "state",
                            label: "State",
                            description: "This is your public state."
                        }, [
                            Input({ placeholder: "e.g. CA", required: true })
                        ]),

                        new FormField({
                            name: "postalCode",
                            label: "Postal Code",
                            description: "This is your public postal code."
                        }, [
                            NumberInput({ placeholder: "e.g. 12345", required: true })
                        ]),
                    ])
				])
			])
        ])
    ]))
);

export default ProfileSettings;