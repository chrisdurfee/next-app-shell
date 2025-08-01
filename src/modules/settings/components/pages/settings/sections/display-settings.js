import { Div } from "@base-framework/atoms";
import { Button, Checkbox } from "@base-framework/ui/atoms";
import { FormCard, FormCardContent, FormCardGroup } from "@base-framework/ui/molecules";
import { Page } from "@base-framework/ui/pages";
import { SettingsSection } from "../atoms/settings-section.js";

/**
 * DisplaySettings
 *
 * Settings for managing what items are displayed in the app sidebar,
 * converted to the new FormCard layout (no JSX).
 *
 * @returns {object}
 */
export const DisplaySettings = () => (
    new Page([
        SettingsSection({
            title: "Display",
            description: "Turn items on or off to control what's displayed in the app.",
            class: "max-w-5xl mx-auto",
            submit: (data) => console.log("Display Settings:", data)
        }, [
            FormCard({ title: "Sidebar Items" }, [

                // Group of toggles/checkboxes
                FormCardGroup({ label: "Viewable Items", description: "Select which items are visible in the sidebar.", border: true }, [
                    Div({ class: "flex flex-col space-y-2" }, [
                        new Checkbox({
                            label: "Recents",
                            checked: true,
                            onChange: (checked) => console.log("Recents:", checked)
                        }),
                        new Checkbox({
                            label: "Home",
                            checked: true,
                            onChange: (checked) => console.log("Home:", checked)
                        }),
                        new Checkbox({
                            label: "Applications",
                            checked: false,
                            onChange: (checked) => console.log("Applications:", checked)
                        }),
                        new Checkbox({
                            label: "Desktop",
                            checked: false,
                            onChange: (checked) => console.log("Desktop:", checked)
                        }),
                        new Checkbox({
                            label: "Downloads",
                            checked: false,
                            onChange: (checked) => console.log("Downloads:", checked)
                        }),
                        new Checkbox({
                            label: "Documents",
                            checked: false,
                            onChange: (checked) => console.log("Documents:", checked)
                        })
                    ])
                ]),

                // Save button aligned right
                FormCardContent({ border: true }, [
                    Div({ class: "mt-4 flex justify-end" }, [
                        Button({ variant: "primary" }, "Update Display")
                    ])
                ])

            ])
        ])
    ])
);

export default DisplaySettings;
