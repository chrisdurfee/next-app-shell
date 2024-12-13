import { Builder, Component } from "@base-framework/base";
import "../../../css/components/molecules/modals/modal.css";
import { Button } from "../../atoms/buttons/buttons.js";
import { ModalContainer } from "./modal-container.js";

/**
 * This will render the modal component.
 *
 * @param {object} component
 * @returns {object}
 */
const render = (component) => { return Builder.render(component, app.appShell.panel); };

/**
 * Modal
 *
 * This will create a modal component.
 *
 * @export
 * @class Modal
 * @extends {Component}
 */
export class Modal extends Component
{
	/**
	 * This will render the modal component.
	 *
	 * @returns {object}
	 */
	render()
	{
		const className = this.getMainClass();
		const title = this.title || '';
		const description = this.description || null;

        return ModalContainer({
				class: className,
				title,
				description,
				buttons: this.getButtons(),
				onSubmit: () =>
				{
					if (this.onSubmit)
					{
						this.onSubmit();
					}

					this.close();
				},
				icon: this.icon,
				back: this.back ?? false,
				aria: { expanded: ['open']}
			},
			this.children
		);
	}

	/**
     * This will setup the states.
     *
     * @returns {object}
     */
    setupStates()
    {
        return {
            open: {
				state: false,
				callBack: (state) =>
				{
					if (!state)
					{
						this.close();
					}
				}
			}
        };
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
     * This will check if the click was outside the component.
     *
     * @param {object} element
     * @returns {boolean}
     */
    isOutsideClick(element)
    {
        return (!this.panel.contains(element));
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

	/**
	 * This will open the modal.
	 *
	 * @returns {void}
	 */
	open()
	{
		render(this);
		this.panel.showPopover();
        this.state.open = true;

		/**
		 * This will prevent the body from scrolling when the modal is open.
		 */
		//document.documentElement.style.overflowY = 'hidden';
	}

	/**
	 * This will close the modal.
	 *
	 * @returns {void}
	 */
	close()
	{
        this.state.open = false;
		this.panel.hidePopover();
		this.destroy();

		/**
		 * This will allow the body to scroll when the modal is closed.
		 */
		//document.documentElement.style.overflowY = 'auto';
	}
}