import { Div, Footer, H2, Header, Dialog as MainDialog } from "@base-framework/atoms";
import { Atom, Component } from "@base-framework/base";
import { Form } from "@components/molecules/form/form.js";
import "../../css/components/molecules/modals/modal.css";
import { Button } from "../atoms/buttons/buttons.js";
import { Icon } from "../atoms/icon.js";
import { Icons } from "../icons/icons";
import { Dialog } from "./dialogs/dialog.js";

/**
 * This will create a dialog header.
 *
 * @param {object} props
 * @returns {object}
 */
const ModalHeader = ({ title, description, back, icon }) => (
    Header({ class: 'modal-header flex items-center pt-4 px-6' }, [

		/**
		 * Back Button
		 */
        back && Button({ variant: 'icon', icon: Icons.arrows.left, class: 'mr-2 p-0 flex sm:hidden', click: (e, parent) => parent.close() }),

		/**
		 * Icon
		 */
		icon && Div({ class: 'mr-2 w-12 h-12 rounded-full bg-muted flex items-center justify-center' }, [ Icon(icon) ]),

		/**
		 * Title and Description
		 */
        Div({ class: 'flex flex-auto flex-col ml-2' }, [
			H2({ class: 'text-lg font-semibold m-0' }, title),
			description && Div({ class: 'text-sm text-muted-foreground' }, description)
		])
    ])
);

/**
 * This will create a dialog component.
 *
 * @param {object} props
 * @param {array} children
 * @returns {object}
 */
export const ModalContainer = Atom((props, children) => (
    MainDialog({ class: `modal m-auto fixed z-20 grid w-full h-full gap-4 lg:border bg-background text-foreground shadow-xl break-words overflow-hidden p-0 ${props.class}`, click: props.click}, [
        Form({ class: 'modal-content flex flex-auto flex-col', submit: (e) => (props.onSubmit && props.onSubmit()) }, [
            ModalHeader(props),
            Div({ class: 'modal-body flex flex-auto flex-col overflow-y-auto py-0 px-6' }, children),
            Footer({ class: 'modal-footer flex justify-between pb-4 px-6' }, props.buttons)
        ])
    ])
));

/**
 * Modal
 *
 * This will create a modal component.
 *
 * @export
 * @class Modal
 * @extends {Component}
 */
export class Modal extends Dialog
{
	/**
	 * This will render the modal component.
	 *
	 * @returns {object}
	 */
	render()
	{
        const click = (event) => { if (event.target === this.panel) this.close() };
		const className = this.getMainClass();
		const title = this.title || '';
		const description = this.description || null;

        return ModalContainer({
				class: className,
				click,
				title,
				description,
				buttons: this.getButtons(),
				onSubmit: this.submit,
				icon: this.icon,
				back: this.back ?? false,
				aria: { expanded: ['open']}
			},
			this.children
		);
	}

    /**
     * This will get the buttons for the modal.
     *
     * @returns {array}
     */
    getButtons()
    {
        return [
            Button({ variant: 'outline', click: () => this.close() }, 'Cancel'),
            Button({ variant: 'primary', type: 'submit' }, 'Save')
        ];
    }

	/**
	 * This will get the size class.
	 *
	 * @returns {string}
	 */
	getSizeClass()
	{
		switch (this.size)
		{
			// case 'sm':
			// 	return 'sm max-w-[646px]';
			case 'lg':
				return 'lg max-w-[900px]';
			case 'xl':
				return 'xl max-w-[1400px]';
			default:
				return 'md max-w-[760px]';
		}
	}

	/**
	 * This will get the type class.
	 *
	 * @returns {string}
	 */
	getTypeClass()
	{
		switch (this.type)
		{
			case 'right':
				return 'right right-0';
			case 'left':
				return 'left left-0';
			default:
				return '';
		}
	}

	/**
	 * This will get the modal class.
	 *
	 * @returns {string}
	 */
	getMainClass()
	{
		return this.getSizeClass() + ' ' + this.getTypeClass();
	}
}