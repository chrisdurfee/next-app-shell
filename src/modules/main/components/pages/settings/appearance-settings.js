import { Div, H2, P } from "@base-framework/atoms";
import { Button } from "@components/atoms/buttons/buttons.js";
import { Select } from "@components/atoms/form/select.js";
import { ThemeToggle } from "@components/molecules/theme-toggle.js";

/**
 * AppearanceSettings
 *
 * Settings for customizing the app’s appearance.
 *
 * @returns {object}
 */
export const AppearanceSettings = () => (
    Div({ class: 'space-y-6 max-w-[500px]' }, [
        H2({ class: 'text-2xl font-semibold' }, 'Appearance'),
        P({ class: 'text-muted-foreground' }, 'Customize the appearance of the app. Automatically switch between day and night themes.'),

        Div({ class: 'space-y-4' }, [
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
);