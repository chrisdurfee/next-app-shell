import { Div } from "@base-framework/atoms";
import { Atom } from "@base-framework/base";
import { Button } from "@components/atoms/buttons/buttons.js";
import { Input } from "@components/atoms/form/input.js";
import { Icons } from "@components/icons/icons.js";
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
 * ShareLink Component
 *
 * Renders the shareable link with a copy button.
 *
 * @param {object} props - share link information.
 * @returns {object} - Share link element.
 */
const ShareLink = ({ link }) => (
    Div({ class: "flex items-center gap-4 py-2" }, [
        Input({
            type: "text",
            value: link,
            readOnly: true,
            class: "border p-2 rounded-md w-full bg-background text-foreground"
        }),
        Button({
            variant: 'secondary',
            class: "px-4 py-2",
            click: () => {
                navigator.clipboard.writeText(link);
                app.notify({
                    title: "Link copied",
                    description: "The link has been copied to your clipboard.",
                    icon: Icons.clipboard.checked
                })
            }
        }, "Copy Link")
    ])
);

/**
 * This will create a confirmation button.
 *
 * @param {object} props
 * @returns {object}
 */
const ShareButton = (props) => Button({
	text: 'Open',
	class: `m-1`,
	click: () => new Dialog(props, [
        ShareLink({ link: 'https://example.com' })
    ]).open()
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
            title: 'Dialogs',
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
            }),

            DocSection({
                title: 'Share Link',
                description: 'Displays a dialog with a shareable link.',
                preview: [
                    ShareButton({
                        title: 'Share Link',
                        description: 'Share this link with others.',
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