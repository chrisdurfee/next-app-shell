import { Button } from "../../../../../../../components/atoms/buttons/buttons.js";
import { Dialog } from "../../../../../../../components/molecules/dialogue.js";
import { DocSection } from "../../../../molecules/doc-section.js";
import { DocPage } from '../../../doc-page.js';

/**
 * This will create a dialog button.
 *
 * @param {object} props
 * @returns {object}
 */
const DialogButton = (props) => Button({
	text: 'Open',
	class: `m-1`,
	click: () => new Dialog(props).open()
});

/**
 * DialogPage
 *
 * This will create a dialog page.
 *
 * @param {object} props
 * @param {object} children
 * @returns {DocPage}
 */
export const DialogPage = () => (
	DocPage(
        {
            title: 'Dialog',
            description: 'Displays a dialog or a component that looks like a dialog.'
        },
        [
            DocSection({
                title: 'Usage',
                description: 'Import the dialog atom and use it in your components.',
                preview: [
                    DialogButton({
                        title: 'Are you absoultely sure?',
                        description: 'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
                        confirmed: () => console.log('Confirmed!')
                    })
                ],
                code: `import { Button } from '../components/molecules/dialogue.js';

new Dialog({
    title: 'Are you absoultely sure?',
    description: 'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
    confirmed: () => console.log('Confirmed!')
}).open()`
            })
        ]
    )
);

export default DocPage;