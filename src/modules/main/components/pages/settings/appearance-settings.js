import { Button, Div, H2, P, Select } from "@base-framework/atoms";

/**
 * AppearanceSettings
 *
 * Settings for customizing the app’s appearance.
 *
 * @returns {object}
 */
export const AppearanceSettings = () => (
    Div({ class: 'space-y-6' }, [
        H2({ class: 'text-xl font-semibold' }, 'Appearance'),
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
                Div({ class: 'flex gap-4 items-center' }, [
                    Button({ class: 'flex-1 border rounded p-4 text-center', click: () => console.log("Light theme selected") }, "Light"),
                    Button({ class: 'flex-1 border rounded p-4 text-center', click: () => console.log("Dark theme selected") }, "Dark"),
                ])
            ]),
        ]),

        Button({ class: 'mt-4' }, "Update Preferences")
    ])
);