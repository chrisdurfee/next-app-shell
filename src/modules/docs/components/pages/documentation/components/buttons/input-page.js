import { Input } from "@components/atoms/form/input.js";
import { DocSection } from "../../../../molecules/doc-section.js";
import { DocPage } from '../../../doc-page.js';

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
            })
        ]
    )
);

export default InputPage;