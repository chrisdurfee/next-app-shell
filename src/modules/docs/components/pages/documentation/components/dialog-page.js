import { Atom } from "@base-framework/base";
import { Button } from "@components/atoms/buttons/buttons.js";
import { Confirmation } from "@components/molecules/dialogs/confirmation.js";
import { Dialog } from "@components/molecules/dialogs/dialog.js";
import { DocSection } from "../../../molecules/doc-section.js";
import { DocPage } from '../../doc-page.js';

/**
 * This will create a dialog button.
 *
 * @param {object} props
 * @returns {object}
 */
const DialogButton = Atom((props, children) => Button({
	text: 'Open',
	class: `m-1`,
	click: () => new Dialog(props, children).open()
}));

/**
 * This will create a confirmation button.
 *
 * @param {object} props
 * @returns {object}
 */
const ConfirmationButton = (props) => Button({
	text: 'Open',
	class: `m-1`,
	click: () => new Confirmation(props).open()
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
            description: 'Displays a dialog or a component that looks like a dialog. Dialogs can be opened and closed. They will be closed if the user clicks outside of the dialog or if the user clicks the close button.',
        },
        [
            DocSection({
                title: 'Usage',
                description: 'Import the dialog atom and use it in your components.',
                preview: [
                    DialogButton({
                        title: 'Title',
                        description: 'this is the description.'
                    }, [

                    ])
                ],
                code: `import { Dialog } from '@components/molecules/dialogue.js';

new Dialog({
    title: '',
    description: ''
}, [

]).open()`
            }),

            DocSection({
                title: 'Confirmation',
                description: 'Displays a confirmation dialog.',
                preview: [
                    ConfirmationButton({
                        title: 'Are you absoultely sure?',
                        description: 'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
                        confirmTextLabel: 'Save',
                        confirmed: () => console.log('Confirmed!')
                    })
                ],
                code: `import { Confirmation } from '@components/molecules/dialogs/confirmation.js';

new Confirmation({
    title: 'Are you absoultely sure?',
    description: 'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
    confirmTextLabel: 'Save',
    confirmed: () => console.log('Confirmed!')
}).open()`
            })
        ]
    )
);

export default DocPage;