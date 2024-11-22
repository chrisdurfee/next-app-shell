import { Component } from "@base-framework/base";
import "../../../css/components/molecules/modals/modal.css";
import { Button } from "../../atoms/buttons/buttons.js";
import { Dialog } from "../dialogs/dialog.js";
import { ModalContainer } from "./modal-container.js";

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
				title,
				click,
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