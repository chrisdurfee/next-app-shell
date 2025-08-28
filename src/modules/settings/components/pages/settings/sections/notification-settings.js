import { Div, H4, P } from "@base-framework/atoms";
import { Button } from "@base-framework/ui/atoms";
import { FormCard, FormCardContent, FormCardGroup, Toggle } from "@base-framework/ui/molecules";
import { Page } from "@base-framework/ui/pages";
import { SettingsSection } from "../atoms/settings-section.js";

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
            class: 'max-w-5xl mx-auto',
            submit: (data) => console.log("Notification Settings:", data)
        }, [

            // Notification toggles wrapped in a FormCard
            FormCard({ title: 'Notification Preferences' }, [

                // Each toggle in its own FormCardGroup for consistent spacing/border
                FormCardGroup({ label: 'Allowed Notifications', description: '', border: true }, [
                    Div({ class: 'gap-y-4' }, [

                        // Email Notifications
                        Div({ class: 'flex items-center justify-between p-4 bg-muted/10 border border-muted-foreground/20 rounded-md' }, [
                            Div({ class: 'flex flex-col pr-8' }, [
                                H4({ class: 'font-semibold' }, 'Email Notifications'),
                                P({ class: 'text-sm text-muted-foreground' }, 'Receive email notifications for important updates.')
                            ]),
                            new Toggle({
                                active: true,
                                change: (active) => console.log("Email Notifications:", active)
                            })
                        ]),

                        // Push Notifications
                        Div({ class: 'flex items-center justify-between p-4 bg-muted/10 border border-muted-foreground/20 rounded-md' }, [
                            Div({ class: 'flex flex-col pr-8' }, [
                                H4({ class: 'font-semibold' }, 'Push Notifications'),
                                P({ class: 'text-sm text-muted-foreground' }, 'Receive push notifications for important updates.')
                            ]),
                            new Toggle({
                                active: false,
                                change: (active) => console.log("Push Notifications:", active)
                            })
                        ]),

                        // SMS Notifications
                        Div({ class: 'flex items-center justify-between p-4 bg-muted/10 border border-muted-foreground/20 rounded-md' }, [
                            Div({ class: 'flex flex-col pr-8' }, [
                                H4({ class: 'font-semibold' }, 'SMS Notifications'),
                                P({ class: 'text-sm text-muted-foreground' }, 'Receive SMS notifications for important updates.')
                            ]),
                            new Toggle({
                                active: true,
                                change: (active) => console.log("SMS Notifications:", active)
                            })
                        ])

                    ])
                ]),

                // Save button
                FormCardContent({ border: true }, [
                    Div({ class: 'mt-4 flex justify-end' }, [
                        Button({ variant: 'primary' }, 'Save Preferences')
                    ])
                ])

            ])

        ])
    ])
);

export default NotificationSettings;
