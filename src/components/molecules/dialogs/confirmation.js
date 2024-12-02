import { Button } from "../../atoms/buttons/buttons.js";
import { Dialog } from "./dialog.js";

/**
 * Confirmation
 *
 * This will create a confirmation dialog component.
 *
 * @export
 * @class Dialog
 * @extends {Dialog}
 */
export class Confirmation extends Dialog
{
	/**
     * This will get the buttons for the modal.
     *
     * @returns {array}
     */
    getButtons()
    {
        const confirmTextLabel = this.confirmTextLabel || 'Confirm';
        return [
            Button({ variant: 'outline', click: () => this.close() }, 'Cancel'),
            Button({ variant: 'primary', click: () => this.confirm() }, confirmTextLabel)
        ];
    }

    /**
     * This will confirm the action.
     *
     * @returns {void}
     */
    confirm()
    {
        this.confirmed && this.confirmed();
        this.close();
    }
}

export default Confirmation;