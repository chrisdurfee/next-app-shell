import { Button, Div, H2, Input, P } from "@base-framework/atoms";
import { Form, FormField } from "@components/molecules/form/form.js";

/**
 * ProfileSettings
 *
 * Settings form for updating profile information.
 *
 * @returns {object}
 */
export const ProfileSettings = () => (
    Div({ class: 'space-y-6' }, [
        H2({ class: 'text-xl font-semibold' }, 'Profile'),
        P({ class: 'text-muted-foreground' }, 'This is how others will see you on the site.'),

        Form({ submit: (e) => { console.log("Profile form submitted!"); } }, [
            new FormField({
                name: "username",
                label: "Username",
                description: "This is your public display name."
            }, [
                Input({ placeholder: "e.g. john_doe", required: true })
            ]),

            new FormField({
                name: "email",
                label: "Email",
                description: "Select a verified email to display."
            }, [
                Input({ type: "email", placeholder: "e.g. john_doe@example.com", required: true })
            ]),

            new FormField({
                name: "bio",
                label: "Bio",
                description: "A short description about yourself."
            }, [
                Input({ type: "text", placeholder: "I love coding!" })
            ]),

            Button({ type: "submit", class: "mt-4" }, "Update Profile")
        ])
    ])
);