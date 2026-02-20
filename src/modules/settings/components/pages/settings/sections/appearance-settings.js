// @ts-nocheck
import { Div } from "@base-framework/atoms";
import { Button, Select } from "@base-framework/ui/atoms";
import { FormCard, FormCardContent, FormCardGroup, FormField, ThemeToggle } from "@base-framework/ui/molecules";
import { Page } from "@base-framework/ui/pages";
import { SettingsSection } from "../atoms/settings-section.js";

/**
 * AppearanceSettings
 *
 * Settings for customizing the app’s appearance, converted to new FormCard system.
 *
 * @returns {object}
 */
export const AppearanceSettings = () => (
    new Page([
        SettingsSection({
            title: 'Appearance',
            description: 'Customize the appearance of the app. Automatically switch between day and night themes.',
            class: 'max-w-5xl mx-auto',
            submit: (data) => console.log("Appearance Settings:", data)
        }, [
            FormCard({ title: '' }, [
                FormCardGroup({
                    label: 'Font',
                    description: '',
                    border: true
                }, [
                    new FormField({
                        name: 'font',
                        label: '',
                        description: ''
                    }, [
                        Select({
                            options: [
                                { value: 'inter', label: 'Inter' },
                                { value: 'roboto', label: 'Roboto' },
                                { value: 'system-ui', label: 'System UI' }
                            ],
                            required: true
                        })
                    ])
                ]),

                FormCardGroup({
                    label: 'Theme',
                    description: '',
                    border: true
                }, [
                    new FormField({
                        name: 'theme',
                        label: '',
                        description: ''
                    }, [
                        new ThemeToggle()
                    ])
                ]),

                FormCardContent({ border: true }, [
                    Div({ class: 'mt-4 flex justify-end' }, [
                        Button({ type: 'submit' }, 'Update preferences')
                    ])
                ])
            ])
        ])
    ])
);

export default AppearanceSettings;
