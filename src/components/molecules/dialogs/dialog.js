import { Builder, Component } from "@base-framework/base";
import { Button } from "../../atoms/buttons/buttons.js";
import { DialogContainer } from "./dialog-container.js";

/**
 * This will render the modal component.
 *
 * @param {object} component
 * @returns {object}
 */
const render = (component) => { return Builder.render(component, app.root); };

/**
 * Type styles mapping for Confirmation.
 *
 * @type {object}
 */
const typeStyles = {
    info: {
        borderColor: 'border-blue-500',
        bgColor: 'bg-muted/10',
        iconColor: 'text-blue-500'
    },
    warning: {
        bgColor: 'bg-muted/10',
        borderColor: 'border-warning',
        iconColor: 'text-warning'
    },
    destructive: {
        bgColor: 'bg-muted/10',
        borderColor: 'border-destructive',
        iconColor: 'text-red-500'
    },
    success: {
        bgColor: 'bg-muted/10',
        borderColor: 'border-emerald-500',
        iconColor: 'text-emerald-500'
    },
    default: {
        borderColor: 'border',
        bgColor: 'bg-muted/10',
        iconColor: 'text-muted-foreground'
    }
};

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
		const { borderColor, bgColor, iconColor } = typeStyles[this.type] || typeStyles.default;
        const className = `${this.getMainClass()} ${bgColor} ${borderColor}`;
        const title = this.title || 'Dialog Title';

        return DialogContainer({
			class: className,
			title,
			click,
			icon: this.icon,
			iconColor,
			description: this.description,
			buttons: this.getButtons()
		}, this.children);
	}

    /**
     * This will get the buttons for the modal.
     *
     * @returns {array}
     */
    getButtons()
    {
		if (this.hideFooter)
		{
			return null;
		}

		if (this.buttons)
		{
			return this.buttons;
		}

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

        if (typeof this.onClose === 'function')
        {
            this.onClose();
        }

		this.destroy();
	}
}