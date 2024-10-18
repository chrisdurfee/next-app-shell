import { Button } from "../../../../../../../components/atoms/atoms.js";
import { Modal } from "../../../../../../../components/molecules/modal.js";
import { DocSection } from "../../../../molecules/doc-section.js";
import { DocPage } from '../../../doc-page.js';

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
		label: 'Extra Large',
		buttonStyle: 'outline',
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
		size,
		type
	}).open()
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
                title: 'Large Modal',
                description: 'This is a large modal.',
                preview: [
                    ModalButton(Modals[0])
                ],
                code: `
import { Modal } from "../components/molecules/modal.js";
import { Button } from "../components/atoms/atoms.js";

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
		size: 'lg'
	}).open()
});`
            }),

            DocSection({
                title: 'Small Modal',
                preview: [
                    ModalButton(Modals[1])
                ],
                code: `
import { Modal } from "../components/molecules/modal.js";
import { Button } from "../components/atoms/atoms.js";

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
		size: 'sm'
	}).open()
});`
            }),

            DocSection({
                title: 'Medium Modal',
                preview: [
                    ModalButton(Modals[2])
                ],
                code: `
import { Modal } from "../components/molecules/modal.js";
import { Button } from "../components/atoms/atoms.js";

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
		size: 'md'
	}).open()
});`
            })
        ]
    )
);

export default DocPage;