import { Checkbox } from "@components/atoms/form/checkbox.js";
import { EmailInput, FileInput, Input, TelInput, Textarea } from "@components/atoms/form/input.js";
import { RangeSlider } from '@components/atoms/form/range-slider.js';
import { Select } from "@components/atoms/form/select.js";
import DatePicker from "@components/molecules/date-time/date-picker.js";
import { DocSection } from "../../../molecules/doc-section.js";
import { DocPage } from '../../doc-page.js';

const frameworks = [
    { value: 'next.js', label: 'Next.js' },
    { value: 'sveltekit', label: 'SvelteKit' },
    { value: 'nuxt.js', label: 'Nuxt.js' },
    { value: 'remix', label: 'Remix' },
    { value: 'astro', label: 'Astro' },
];

/**
 * InputPage
 *
 * This will create a input page.
 *
 * @param {object} props
 * @param {object} children
 * @returns {DocPage}
 */
export const InputPage = () => (
	DocPage(
        {
            title: 'Inputs',
            description: 'Inputs are essential for gathering user data in forms.',
        },
        [
            DocSection({
                title: 'Usage',
                description: 'Import the input atom and use it in your components. The input can be of various types: text, password, email, etc.',
                preview: [
                    Input({
                        type: 'text',
                        placeholder: 'Enter your text here...',
                        change: (e) => console.log(e.target.value)
                    })
                ],
                code: `import { Button } from '@components/atoms/form/input.js';

Input({
    type: 'text',
    placeholder: 'Enter your text here...',
    change: (e) => console.log(e.target.value)
})`
            }),

            DocSection({
                title: 'File Input',
                description: 'This is a file input.',
                preview: [
                    FileInput({
                        multiple: true,
                        change: (e) => console.log(e.target.files)
                    })
                ],
                code: `import { EmailInput, FileInput, Input, TelInput, Textarea } from "@components/atoms/form/input.js";

FileInput({
    multiple: true,
    change: (e) => console.log(e.target.files)
})`
            }),

            DocSection({
                title: 'Text Input',
                description: 'This is a text input.',
                preview: [
                    Input({
                        type: 'text',
                        placeholder: 'Enter your text here...'
                    })
                ],
                code: `
import { EmailInput, FileInput, Input, TelInput, Textarea } from "@components/atoms/form/input.js";

Input({
    type: 'text',
    placeholder: 'Enter your text here...'
})`
            }),

            DocSection({
                title: 'Tel Input',
                description: 'This is a phone input.',
                preview: [
                    TelInput({
                    })
                ],
                code: `
import { EmailInput, FileInput, Input, TelInput, Textarea } from "@components/atoms/form/input.js";

TelInput({
})`
            }),

            DocSection({
                title: 'Email Input',
                description: 'This is a email input.',
                preview: [
                    EmailInput({

                    })
                ],
                code: `
import { EmailInput, FileInput, Input, TelInput, Textarea } from "@components/atoms/form/input.js";

EmailInput({

})`
            }),

            DocSection({
                title: 'Checkbox',
                description: 'This is a checkbox input.',
                preview: [
                    new Checkbox({
                        label: 'Check me',
                        check: (checked) => console.log(checked)
                    })
                ],
                code: `
import { Checkbox } from '@components/atoms/form/checkbox.js';

new Checkbox({
    label: 'Check me',
    check: (checked) => console.log(checked)
})`
            }),

            DocSection({
                title: 'Select',
                description: 'This is a select input.',
                preview: [
                    Select({
                        options: frameworks,
                        change: (e) => console.log(e.target.value)
                    })
                ],
                code: `
import { EmailInput, FileInput, Input, TelInput, Textarea } from "@components/atoms/form/input.js";

Input({
    type: 'text',
    placeholder: 'Enter your text here...'
})`
            }),

            DocSection({
                title: 'Textarea',
                description: 'This is a textarea input.',
                preview: [
                    Textarea({
                        placeholder: 'Enter your text here...'
                    })
                ],
                code: `
import { EmailInput, FileInput, Input, TelInput, Textarea } from "@components/atoms/form/input.js";

Textarea({
    placeholder: 'Enter your text here...'
})`
            }),

            DocSection({
                title: 'Date Picker',
                description: 'This is a date picker input.',
                preview: [
                    new DatePicker({
                        selectedDate: '2022-01-01',
                    })
                ],
                code: `
import DatePicker from "@components/molecules/date-time/date-picker.js";

new DatePicker()`
            }),

            DocSection({
                title: 'Range Slider',
                description: 'This is a range slider input.',
                preview: [
                    new RangeSlider({
                        min: 0,
                        max: 100,
                        value: 50,
                        change: (value) => console.log(value)
                    })
                ],
                code: `
import { RangeSlider } from '@components/atoms/form/range-slider.js';

new RangeSlider({
    min: 0,
    max: 100,
    value: 50,
    change: (value) => console.log(value)
})`
            })
        ]
    )
);

export default InputPage;