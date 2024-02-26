import { Dialog, Div, Footer, H2, Header } from "@base-framework/atoms";
import { Builder, Component } from "@base-framework/base";
import { } from "../../css/molecules/modal.css";

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
		return Dialog({ class: 'modal right' }, [
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
		modal.panel.showModal();
	}

	close()
	{
		this.panel.close();
		this.destroy();
	}
}