import { Button, Div, Footer, H2, Header, Dialog as MainDialog } from "@base-framework/atoms";
import { Atom, Component } from "@base-framework/base";
import "../../css/components/molecules/modals/modal.css";
import { Icons } from "../icons/icons";
import { Dialog } from "./dialogue.js";

/**
 * This will create a dialog header.
 *
 * @param {object} props
 * @returns {object}
 */
const ModalHeader = (props) => (
    Header({ class: 'modal-header flex items-center' }, [
        Button({ class: 'bttn icon mr-2 p-0 bg-transparent sm:hidden hover:bg-transparent', click: (e, parent) => parent.close() }, {
            html: Icons.arrows.left
        }),
        H2({ class: 'modal-title m-0' }, 'Modal Title')
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
    MainDialog({ class: `modal m-auto fixed z-50 grid w-full gap-4 border bg-background p-6 shadow-lg ${props.class}`, click: props.click}, [
        Div({ class: 'modal-content flex flex-auto flex-col' }, [
            ModalHeader(),
            Div({ class: 'modal-body flex flex-auto' }, children),
            Footer({ class: 'modal-footer flex justify-between' }, props.buttons)
        ])
    ])
));

/**
 * Dialog
 *
 * This will create a dialog component.
 *
 * @export
 * @class Dialog
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
        return ModalContainer({ class: className, click, buttons: this.getButtons() }, [
            Div({ class: '' }, '')
        ]);
	}

    /**
     * This will get the buttons for the modal.
     *
     * @returns {array}
     */
    getButtons()
    {
        return [
            Button({ class: 'bttn outline', click: () => this.close() }, 'Cancel'),
            Button({ class: 'bttn primary', click: () => this.close() }, 'Save')
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
			case 'sm':
				return 'sm max-w-[646px]';
			case 'lg':
				return 'lg max-w-[900px]';
			case 'xl':
				return 'xl max-w-[1400px]';
			default:
				return 'medium max-w-[760px]';
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