import { Div } from "@base-framework/atoms";
import { Button } from "@components/atoms/buttons/buttons.js";
import { Input } from "@components/atoms/form/input.js";
import { FormField } from "@components/molecules/form/form.js";
import { SettingsSection } from "../atoms/settings-section.js";

/**
 * ProfileSettings
 *
 * Settings form for updating profile information.
 *
 * @returns {object}
 */
export const ProfileSettings = () => (
    SettingsSection({
        title: 'Profile',
        description: 'This is how others will see you on the site.',
        class: 'max-w-[500px]',
        submit: (data) => console.log("Profile Settings:", data)
    }, [
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
);