import { Builder, Component } from "@base-framework/base";
import { Button } from "../../atoms/buttons/buttons.js";
import { DialogContainer } from "./dialog-container.js";

/**
 * This will render the modal component.
 *
 * @param {object} component
 * @returns {object}
 */
const render = (component) => { return Builder.render(component, app.appShell.panel); };

/**
 * Dialog
 *
 * This will create a dialog component.
 *
 * @export
 * @class Dialog
 * @extends {Component}
 */
export class Dialog extends Component
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
        const title = this.title || 'Dialog Title';

        return DialogContainer({ class: className, title, click, description: this.description, buttons: this.getButtons() }, this.children);
	}

    /**
     * This will get the buttons for the modal.
     *
     * @returns {array}
     */
    getButtons()
    {
        return [
            Button({ variant: 'outline', click: () => this.close() }, 'Close')
        ];
    }

    /**
     * This will setup the states.
     *
     * @returns {object}
     */
    setupStates()
    {
        return {
            open: false
        };
    }

    /**
	 * This will get the modal class.
	 *
	 * @returns {string}
	 */
	getMainClass()
	{
		return '';
	}

	/**
	 * This will open the modal.
	 *
	 * @returns {void}
	 */
	open()
	{
		render(this);
		this.panel.showModal();
        this.state.open = true;
	}

	/**
	 * This will close the modal.
	 *
	 * @returns {void}
	 */
	close()
	{
        this.state.open = false;
		this.panel.close();
		this.destroy();
	}
}