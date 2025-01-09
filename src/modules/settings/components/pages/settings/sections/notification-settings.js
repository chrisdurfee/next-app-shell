import { Div, H4, P } from "@base-framework/atoms";
import { Button } from "@base-framework/ui/atoms";
import { Toggle } from "@base-framework/ui/molecules";
import { Page } from "@base-framework/ui/pages";
import { SettingsSection } from "../atoms/settings-section.js";

/**
 * NotificationToggle
 *
 * A component for rendering a toggle switch with a label and description.
 *
 * @param {object} props
 * @returns {object}
 */
const NotificationToggle = ({ label, description, active, onChange }) => (
    Div({ class: 'flex items-center justify-between p-4 border rounded-md bg-muted/10 border-muted-foreground/20 mb-4' }, [
        Div({ class: 'flex flex-col pr-8' }, [
            H4({ class: 'font-semibold' }, label),
            P({ class: 'text-sm text-muted-foreground' }, description)
        ]),
        new Toggle({
            active,
            change: onChange
        })
    ])
);

/**
 * NotificationSettings
 *
 * Settings for configuring notification preferences.
 *
 * @returns {object}
 */
export const NotificationSettings = () => (
    new Page([
        SettingsSection({
            title: 'Notifications',
            description: 'Manage your notification preferences.',
            submit: (data) => console.log("Notification Settings:", data),
        },
        [
            Div({ class: 'space-y-4' }, [
                // Email Notifications
                NotificationToggle({
                    label: 'Email Notifications',
                    description: 'Receive email notifications for important updates.',
                    active: true,
                    onChange: (active) => console.log("Email Notifications:", active)
                }),

                // Push Notifications
                NotificationToggle({
                    label: 'Push Notifications',
                    description: 'Receive push notifications for important updates.',
                    active: false,
                    onChange: (active) => console.log("Push Notifications:", active)
                }),

                // SMS Notifications
                NotificationToggle({
                    label: 'SMS Notifications',
                    description: 'Receive SMS notifications for important updates.',
                    active: true,
                    onChange: (active) => console.log("SMS Notifications:", active)
                })
            ]),

            Button({ class: "mt-4" }, "Save Preferences")
        ])
    ])
);