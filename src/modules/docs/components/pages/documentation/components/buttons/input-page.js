import { Input, TelInput } from "@components/atoms/form/input.js";
import { Select } from "@components/atoms/form/select.js";
import { DocSection } from "../../../../molecules/doc-section.js";
import { DocPage } from '../../../doc-page.js';

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
                title: 'Text Input',
                description: 'This is a text input.',
                preview: [
                    Input({
                        type: 'text',
                        placeholder: 'Enter your text here...'
                    })
                ],
                code: `
import { Button } from '@components/atoms/form/input.js';

Input({
    type: 'text',
    placeholder: 'Enter your text here...'
})`
            }),

            DocSection({
                title: 'Tel Input',
                description: 'This is a text input.',
                preview: [
                    TelInput({
                    })
                ],
                code: `
import { Button } from '@components/atoms/form/input.js';

Input({
    type: 'text',
    placeholder: 'Enter your text here...'
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
import { Button } from '@components/atoms/form/input.js';

Input({
    type: 'text',
    placeholder: 'Enter your text here...'
})`
            })
        ]
    )
);

export default InputPage;