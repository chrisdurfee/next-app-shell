import { Builder, Component } from "@base-framework/base";
import { Button } from "../../atoms/buttons/buttons.js";
import "./css/modal.css";
import { ModalContainer } from "./modal-container.js";

/**
 * This will render the modal component.
 *
 * @param {object} component
 * @returns {object}
 */
const render = (component) => { return Builder.render(component, app.root); };

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
				options: this.headerOptions(),
				buttons: this.getButtons(),
				onSubmit: () =>
				{
					if (this.onSubmit)
					{
						this.onSubmit();
					}

					this.destroy();
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
						this.destroy();
					}
				}
			}
        };
    }

	/**
	 * This will get the header options.
	 *
	 * @returns {array<object>}
	 */
	headerOptions()
	{
		return [];
	}

	/**
     * This will get the buttons for the modal.
     *
     * @returns {array}
     */
    getButtons()
    {
        return [
            Button({ variant: 'outline', click: () => this.destroy() }, 'Cancel'),
            this.hidePrimaryButton !== true && Button({ variant: 'primary', type: 'submit' }, 'Save')
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
     * This will override the set up to use the app shell.
     *
     * @param {object} container
     */
    setContainer(container)
    {
        this.container = app.root;
    }

	/**
	 * This will open the modal.
	 *
	 * @returns {void}
	 */
	open()
	{
		render(this);
		this.showModal();
	}

	/**
	 * This will show the modal.
	 *
	 * @protected
	 * @returns {void}
	 */
	showModal()
	{
		/**
		 * This will delay calling to show modal to make sure
		 * it is added to the DOM.
		 */
		const DELAY = 10;
		window.setTimeout(() => this.panel.showPopover(), DELAY);
        this.state.open = true;

		/**
		 * This will prevent the body from scrolling when the modal is open.
		 */
		document.documentElement.style.overflowY = 'hidden';
	}

	/**
	 * This will hide the modal.
	 *
	 * @protected
	 * @returns {void}
	 */
	beforeDestroy()
	{
		this.panel.hidePopover();
		this.state.open = false;

		if (typeof this.onClose === 'function')
		{
			this.onClose();
		}

		/**
		 * This will allow the body to scroll when the modal is closed.
		 */
		document.documentElement.style.overflowY = 'auto';
	}
}