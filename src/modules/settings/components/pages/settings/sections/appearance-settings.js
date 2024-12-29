import { Div, P } from "@base-framework/atoms";
import {  Button  } from "@base-framework/ui/atoms";
import {  Fieldset  } from "@base-framework/ui/atoms";
import {  Select  } from "@base-framework/ui/atoms";
import {  ThemeToggle  } from "@base-framework/ui/molecules";
import { SettingsSection } from "../atoms/settings-section.js";

/**
 * AppearanceSettings
 *
 * Settings for customizing the app’s appearance.
 *
 * @returns {object}
 */
export const AppearanceSettings = () => (
    SettingsSection({
        title: 'Appearance',
        description: 'Customize the appearance of the app. Automatically switch between day and night themes.',
        class: 'max-w-[500px]',
        submit: (data) => console.log("Appearance Settings:", data)
    }, [
        Fieldset({ legend: 'Appearance Settings' }, [
            Div({ class: 'space-y-6' }, [
                // Font Selection
                Div({ class: 'space-y-2' }, [
                    P({ class: 'text-sm font-medium' }, 'Font'),
                    Select({
                        options: [
                            { value: "inter", label: "Inter" },
                            { value: "roboto", label: "Roboto" },
                            { value: "system-ui", label: "System UI" },
                        ]
                    }),
                ]),

                // Theme Selection
                Div({ class: 'space-y-2' }, [
                    P({ class: 'text-sm font-medium' }, 'Theme'),
                    new ThemeToggle()
                ]),
            ]),

            Button({ class: 'mt-4' }, "Update Preferences")
        ])
    ])
);