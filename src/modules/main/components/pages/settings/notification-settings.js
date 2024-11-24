import { Button, Div, H2, P } from "@base-framework/atoms";
import { Toggle } from "@components/molecules/toggle/toggle.js";

/**
 * NotificationSettings
 *
 * Settings for configuring notification preferences.
 *
 * @returns {object}
 */
export const NotificationSettings = () => (
    Div({ class: 'space-y-6' }, [
        H2({ class: 'text-xl font-semibold' }, 'Notifications'),
        P({ class: 'text-muted-foreground' }, 'Manage your notification preferences.'),

        Div({ class: 'space-y-4' }, [
            Div({ class: 'flex items-center justify-between' }, [
                P({ class: 'text-sm font-medium' }, 'Email Notifications'),
                new Toggle({ active: true, onChange: (active) => console.log("Email Notifications:", active) })
            ]),

            Div({ class: 'flex items-center justify-between' }, [
                P({ class: 'text-sm font-medium' }, 'Push Notifications'),
                new Toggle({ active: false, onChange: (active) => console.log("Push Notifications:", active) })
            ]),
        ]),

        Button({ class: "mt-4" }, "Save Preferences")
    ])
);