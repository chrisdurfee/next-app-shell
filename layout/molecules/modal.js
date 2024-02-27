import { Dialog, Div, Footer, H2, Header } from "@base-framework/atoms";
import { Builder, Component } from "@base-framework/base";
import "../../css/molecules/modal.css";

/**
 * Modal
 *
 * This will be a modal component.
 *
 * @export
 * @class Modal
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
		return Dialog({ class: 'modal right', open: false }, [
			Header([
				H2('Title')
			]),
			Div({ class: 'modal-body' }, [

			]),
			Footer({ class: 'modal-footer'}, [

			])
		]);
	}

	open()
	{
		const container = document.body;
		const modal = new Modal();
		Builder.render(modal, container);

		const dialog = modal.panel;
		dialog.showModal();

		dialog.addEventListener('click', (event) =>
		{
			// Check if the click was on the dialog directly, not its children
			if (event.target === dialog)
			{
				dialog.close();
			}
		});
	}

	close()
	{
		this.panel.close();
		this.destroy();
	}
}