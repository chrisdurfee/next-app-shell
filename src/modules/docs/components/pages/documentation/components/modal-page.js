import { Div } from "@base-framework/atoms";
import { Button } from "@components/atoms/buttons/buttons.js";
import { Confirmation } from "@components/molecules/dialogs/confirmation.js";
import { Modal } from "@components/molecules/modal.js";
import { Icons } from "../../../../../../components/icons/icons.js";
import { DocSection } from "../../../molecules/doc-section.js";
import { DocPage } from '../../doc-page.js';

const Modals = [
	{
		label: 'Large',
		buttonStyle: 'primary',
		size: 'lg'
	},
	{
		label: 'Small',
		buttonStyle: 'secondary',
		size: 'sm'
	},
	{
		label: 'Medium',
		buttonStyle: 'destructive',
		size: 'md'
	},
	{
		label: 'XL',
		buttonStyle: 'primary',
		size: 'xl'
	},
	{
		label: 'Right',
		buttonStyle: 'ghost',
		type: 'right'
	},
	{
		label: 'Left',
		buttonStyle: 'link',
		type: 'left'
	}
];

/**
 * This will create a modal button.
 *
 * @param {object} props
 * @returns {object}
 */
const ModalButton = ({ label, buttonStyle, size, type }) => Button({
	text: label,
	class: `m-1 ${buttonStyle}`,
	click: () => new Modal({
		title: 'Are you absolutely sure?',
		size,
		type
	}, [
		Div({ class: 'flex flex-auto flex-col items-center justify-center p-4' }, [
			Button({
				click: () =>
				{
					new Confirmation({
						title: 'Are you absoultely sure?',
						description: 'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
						confirmTextLabel: 'Save',
						confirmed: () =>
						{
							app.notify({
								icon: Icons.trash,
								title: 'Account deleted',
								description: 'Your account has been successfully deleted.',
								type: 'destructive'
							})
						}
					}).open()
				}
			}, 'Confirm')
		])
	]).open()
});

/**
 * ModalPage
 *
 * This will create a modal page.
 *
 * @param {object} props
 * @param {object} children
 * @returns {DocPage}
 */
export const ModalPage = () => (
	DocPage(
        {
            title: 'Modals',
            description: 'Displays a modal or a component that looks like a modal.'
        },
        [
			DocSection({
                title: 'Extra Large Modal',
                description: 'This is an extra large modal.',
                preview: [
                    ModalButton(Modals[3])
                ],
                code: `
import { Modal } from "@components/molecules/modal.js";
import { Button } from "@components/atoms/atoms.js";

/**
 * This will create a modal button.
 *
 * @param {object} props
 * @returns {object}
 */
const ModalButton = (props, children) => Button({
	text: label,
    variant: 'primary',
	click: () => new Modal({
		size: 'xl',
		title: 'Are you absolutely sure?'
	}).open()
});`
            }),

            DocSection({
                title: 'Large Modal',
                description: 'This is a large modal.',
                preview: [
                    ModalButton(Modals[0])
                ],
                code: `
import { Modal } from "@components/molecules/modal.js";
import { Button } from "@components/atoms/atoms.js";

/**
 * This will create a modal button.
 *
 * @param {object} props
 * @returns {object}
 */
const ModalButton = (props, children) => Button({
	text: label,
    variant: 'primary',
	click: () => new Modal({
		size: 'lg',
		title: 'Are you absolutely sure?'
	}).open()
});`
            }),

            DocSection({
                title: 'Small Modal',
                preview: [
                    ModalButton(Modals[1])
                ],
                code: `
import { Modal } from "@components/molecules/modal.js";
import { Button } from "@components/atoms/atoms.js";

/**
 * This will create a modal button.
 *
 * @param {object} props
 * @returns {object}
 */
const ModalButton = (props, children) => Button({
	text: label,
    variant: 'primary',
	click: () => new Modal({
		size: 'sm',
		title: 'Are you absolutely sure?'
	}).open()
});`
            }),

            DocSection({
                title: 'Medium Modal',
                preview: [
                    ModalButton(Modals[2])
                ],
                code: `
import { Modal } from "@components/molecules/modal.js";
import { Button } from "@components/atoms/atoms.js";

/**
 * This will create a modal button.
 *
 * @param {object} props
 * @returns {object}
 */
const ModalButton = (props, children) => Button({
	text: label,
    variant: 'primary',
	click: () => new Modal({
		size: 'md',
		title: 'Are you absolutely sure?'
	}).open()
});`
            }),

			DocSection({
                title: 'Right Modal',
                preview: [
                    ModalButton(Modals[4])
                ],
                code: `
import { Modal } from "@components/molecules/modal.js";
import { Button } from "@components/atoms/atoms.js";

/**
 * This will create a modal button.
 *
 * @param {object} props
 * @returns {object}
 */
const ModalButton = (props, children) => Button({
	text: label,
    variant: 'primary',
	click: () => new Modal({
	    size: 'lg',
		type: 'right',
		title: 'Are you absolutely sure?'
	}).open()
});`
            })
        ]
    )
);

export default DocPage;