import { Div } from "@base-framework/atoms";
import { Button, Fieldset, Input } from "@base-framework/ui/atoms";
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
            class: 'max-w-[500px]',
            submit: (data) => console.log("Profile Settings:", data)
        }, [
            Fieldset({ legend: 'Profile Information' }, [
                Div({ class: 'space-y-6' }, [
                    // Username
                    new FormField({
                        name: "username",
                        label: "Username",
                        description: "This is your public display name."
                    }, [
                        Input({ placeholder: "e.g. john_doe", required: true })
                    ]),

                    // Email
                    new FormField({
                        name: "email",
                        label: "Email",
                        description: "Select a verified email to display."
                    }, [
                        Input({ type: "email", placeholder: "e.g. john_doe@example.com", required: true })
                    ]),
                ]),
                Button({ class: 'mt-4' }, "Update Profile")
            ])
        ])
    ]))
);

export default ProfileSettings;