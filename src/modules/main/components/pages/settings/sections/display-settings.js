import { Div } from "@base-framework/atoms";
import { Button } from "@components/atoms/buttons/buttons.js";
import { Checkbox } from "@components/atoms/form/checkbox.js";
import { SettingsSection } from "../atoms/settings-section.js";

/**
 * DisplaySettings
 *
 * Settings for managing what items are displayed in the app sidebar.
 *
 * @returns {object}
 */
export const DisplaySettings = () => (
    SettingsSection({
        title: 'Display',
        description: 'Turn items on or off to control what\'s displayed in the app.',
        class: 'max-w-[500px]',
        submit: (data) => console.log("Display Settings:", data)
    }, [
        Div({ class: 'space-y-4' }, [
            // Sidebar Items
            Div({ class: 'flex flex-col space-y-2' }, [
                new Checkbox({ label: 'Recents', checked: true, onChange: (checked) => console.log('Recents:', checked) }),
                new Checkbox({ label: 'Home', checked: true, onChange: (checked) => console.log('Home:', checked) }),
                new Checkbox({ label: 'Applications', checked: false, onChange: (checked) => console.log('Applications:', checked) }),
                new Checkbox({ label: 'Desktop', checked: false, onChange: (checked) => console.log('Desktop:', checked) }),
                new Checkbox({ label: 'Downloads', checked: false, onChange: (checked) => console.log('Downloads:', checked) }),
                new Checkbox({ label: 'Documents', checked: false, onChange: (checked) => console.log('Documents:', checked) }),
            ]),
        ]),

        Button({ class: 'mt-4' }, "Update Display")
    ])
);