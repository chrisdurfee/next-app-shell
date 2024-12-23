import { Div } from "@base-framework/atoms";
import { Atom } from "@base-framework/base";
import { Button } from "@components/atoms/buttons/buttons.js";
import { Checkbox } from '@components/atoms/form/checkbox.js';
import { Fieldset } from "@components/atoms/form/fieldset.js";
import { EmailInput, Input, TelInput, Textarea } from "@components/atoms/form/input.js";
import { RangeSlider } from '@components/atoms/form/range-slider.js';
import { Select } from "@components/atoms/form/select.js";
import { Combobox } from "@components/molecules/combobox/combobox.js";
import { Form, FormField } from "@components/molecules/form/form.js";
import Toggle from "@components/molecules/toggle/toggle.js";
import { DocSection } from "../../../molecules/doc-section.js";
import { DocPage } from '../../doc-page.js';

/**
 * This will create an input preview.
 *
 * @param {object} props
 * @param {object} children
 * @returns {object}
 */
const FormPreview = Atom((props, children) => (
    Div({ ...props, class: 'flex flex-auto items-center justify-center w-full py-4 space-y-8 max-w-[450px]' }, children)
));

const frameworks = [
    { value: 'next.js', label: 'Next.js' },
    { value: 'sveltekit', label: 'SvelteKit' },
    { value: 'nuxt.js', label: 'Nuxt.js' },
    { value: 'remix', label: 'Remix' },
    { value: 'astro', label: 'Astro' },
];

/**
 * Example 1: Profile Form with Text and Email Input
 */
export const ProfileForm = () => (
    Form({ submit: (e) => { console.log("Profile Form submitted"); } }, [
        Fieldset({ legend: 'Profile' }, [
            new FormField({
                name: "username",
                label: "Username",
                description: "This is your public display name."
            }, [
                Input({ placeholder: "e.g. username", required: true })
            ]),

            new FormField({
                name: "email",
                label: "Email Address",
                description: "We'll use this to contact you."
            }, [
                EmailInput({ placeholder: "e.g. email@address.com", required: true })
            ]),

            Button({ type: "submit" }, "Submit")
        ])
    ])
);

/**
 * Example 2: Preferences Form with Select and Checkbox
 */
export const PreferencesForm = () => (
    Form({ submit: (e) => { console.log("Preferences Form submitted"); } }, [
        Fieldset({ legend: 'Preferences' }, [
            new FormField({
                name: "framework",
                label: "Favorite Framework",
                description: "Select your preferred framework."
            }, [
                Select({ options: frameworks, required: true })
            ]),

            new FormField({
                name: "newsletter",
                label: "Subscribe to Newsletter",
                description: "Stay updated with our latest news."
            }, [
                new Checkbox({ label: "Yes, sign me up!", required: true, onChange: (checked) => console.log("Newsletter checked:", checked) })
            ]),

            Button({ type: "submit" }, "Save Preferences")
        ])
    ])
);

/**
 * Example 3: Contact Form with Textarea and Phone Input
 */
export const ContactForm = () => (
    Form({ submit: (e) => { console.log("Contact Form submitted"); } }, [
        Fieldset({ legend: 'Contact Us' }, [
            new FormField({
                name: "phone",
                label: "Phone Number",
                description: "We may contact you at this number."
            }, [
                TelInput({ placeholder: "e.g. +1234567890", required: true })
            ]),

            new FormField({
                name: "message",
                label: "Your Message",
                description: "Let us know how we can help you."
            }, [
                Textarea({ placeholder: "Type your message here...", required: true })
            ]),

            new FormField({
                name: "message",
                label: "Select Framework",
                description: "Select your preferred framework."
            }, [
                new Combobox({
                    required: true,
                    items: [
                        { value: 'next.js', label: 'Next.js' },
                        { value: 'sveltekit', label: 'SvelteKit' },
                        { value: 'nuxt.js', label: 'Nuxt.js' },
                        { value: 'remix', label: 'Remix' },
                        { value: 'astro', label: 'Astro' },
                    ],
                })
            ]),

            Button({ type: "submit" }, "Send Message")
        ])
    ])
);

/**
 * Example 4: Settings Form with Toggle and Range Slider
 */
export const SettingsForm = () => (
    Form({ submit: (e) => { console.log("Settings Form submitted"); } }, [
        Fieldset({ legend: 'Settings' }, [
            new FormField({
                name: "notifications",
                label: "Enable Notifications",
                description: "Toggle to enable or disable notifications."
            }, [
                new Toggle({ active: true, required: true })
            ]),

            new FormField({
                name: "volume",
                label: "Volume Level",
                description: "Set your preferred volume level."
            }, [
                new RangeSlider({ min: 0, max: 100, value: 50 })
            ]),

            Button({ type: "submit" }, "Save Settings")
        ])
    ])
);

/**
 * FormPage
 *
 * This will create a form page with various form examples.
 *
 * @param {object} props
 * @param {object} children
 * @returns {DocPage}
 */
export const FormPage = () => (
    DocPage(
        {
            title: 'Forms',
            description: 'Forms are used to collect user data and submit it to the server.',
        },
        [
            DocSection({
                title: 'Profile Form',
                description: 'A simple profile form with username and email fields.',
                preview: [
                    FormPreview([
                        ProfileForm()
                    ])
                ],
                code: `import { Button, Input, EmailInput } from "@components/atoms/form/input.js";
import { Form, FormField } from "@components/molecules/form/form.js";
import { Div } from "@base-framework/atoms";
import { Atom } from "@base-framework/base";
import { Fieldset } from "@components/atoms/form/fieldset.js";
import { Button } from "@components/atoms/buttons/buttons.js";

Fieldset({ legend: 'Profile' }, [
    new FormField({
        name: "username",
        label: "Username",
        description: "This is your public display name."
    }, [
        Input({ placeholder: "e.g. username", required: true })
    ]),

    new FormField({
        name: "email",
        label: "Email Address",
        description: "We'll use this to contact you."
    }, [
        EmailInput({ placeholder: "e.g. email@address.com", required: true })
    ]),

    Button({ type: "submit" }, "Submit")
])`
            }),

            DocSection({
                title: 'Preferences Form',
                description: 'A preferences form with a select input and a checkbox.',
                preview: [
                    FormPreview([
                        PreferencesForm()
                    ])
                ],
                code: `import { Button, Checkbox, Select } from "@components/atoms/form/input.js";
import { Form, FormField } from "@components/molecules/form/form.js";
import { Div } from "@base-framework/atoms";
import { Atom } from "@base-framework/base";
import { Fieldset } from "@components/atoms/form/fieldset.js";
import { Button } from "@components/atoms/buttons/buttons.js";

Form({ submit: (e) => { console.log("Preferences Form submitted"); } }, [
    Fieldset({ legend: 'Preferences' }, [
        new FormField({
            name: "framework",
            label: "Favorite Framework",
            description: "Select your preferred framework."
        }, [
            Select({ options: frameworks, required: true })
        ]),

        new FormField({
            name: "newsletter",
            label: "Subscribe to Newsletter",
            description: "Stay updated with our latest news."
        }, [
            new Checkbox({ label: "Yes, sign me up!", required: true, onChange: (checked) => console.log("Newsletter checked:", checked) })
        ]),

        Button({ type: "submit" }, "Save Preferences")
    ])
])`
            }),

            DocSection({
                title: 'Contact Form',
                description: 'A contact form with a phone input and a textarea for messages.',
                preview: [
                    FormPreview([
                        ContactForm()
                    ])
                ],
                code: `import { Button, TelInput, Textarea } from "@components/atoms/form/input.js";
import { Form, FormField } from "@components/molecules/form/form.js";
import { Div } from "@base-framework/atoms";
import { Atom } from "@base-framework/base";
import { Fieldset } from "@components/atoms/form/fieldset.js";
import { Button } from "@components/atoms/buttons/buttons.js";
import { Combobox } from "@components/molecules/combobox/combobox.js";

Form({ submit: (e) => { console.log("Contact Form submitted"); } }, [
    Fieldset({ legend: 'Contact Us' }, [
        new FormField({
            name: "phone",
            label: "Phone Number",
            description: "We may contact you at this number."
        }, [
            TelInput({ placeholder: "e.g. +1234567890", required: true })
        ]),

        new FormField({
            name: "message",
            label: "Your Message",
            description: "Let us know how we can help you."
        }, [
            Textarea({ placeholder: "Type your message here...", required: true })
        ]),

        new FormField({
            name: "message",
            label: "Select Framework",
            description: "Select your preferred framework."
        }, [
            new Combobox({
                required: true,
                items: [
                    { value: 'next.js', label: 'Next.js' },
                    { value: 'sveltekit', label: 'SvelteKit' },
                    { value: 'nuxt.js', label: 'Nuxt.js' },
                    { value: 'remix', label: 'Remix' },
                    { value: 'astro', label: 'Astro' },
                ],
            })
        ]),

        Button({ type: "submit" }, "Send Message")
    ])
])`
            }),

            DocSection({
                title: 'Settings Form',
                description: 'A settings form with a toggle and a range slider.',
                preview: [
                    FormPreview([
                        SettingsForm()
                    ])
                ],
                code: `import { Button, Toggle, RangeSlider } from "@components/atoms/form/input.js";
import { Form, FormField } from "@components/molecules/form/form.js";
import { Div } from "@base-framework/atoms";
import { Atom } from "@base-framework/base";
import { Fieldset } from "@components/atoms/form/fieldset.js";
import { Button } from "@components/atoms/buttons/buttons.js";
import { Toggle } from "@components/molecules/toggle/toggle.js";
import { RangeSlider } from '@components/atoms/form/range-slider.js';

Form({ submit: (e) => { console.log("Settings Form submitted"); } }, [
    Fieldset({ legend: 'Settings' }, [
        new FormField({
            name: "notifications",
            label: "Enable Notifications",
            description: "Toggle to enable or disable notifications."
        }, [
            new Toggle({ active: true, required: true })
        ]),

        new FormField({
            name: "volume",
            label: "Volume Level",
            description: "Set your preferred volume level."
        }, [
            new RangeSlider({ min: 0, max: 100, value: 50 })
        ]),

        Button({ type: "submit" }, "Save Settings")
    ])
])`
            })
        ]
    )
);

export default FormPage;