import { Dialog, Div, Footer, H2, Header } from "@base-framework/atoms";
import { Builder, Component } from "@base-framework/base";
import "../../../public/css/components/molecules/modal.css";

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
		return Dialog({ class: 'modal right', click: (event) =>
			{
				if (event.target === this.panel)
				{
					this.close();
				}
			}}, [
			{
				class: 'modal-content',
				children:
				[
					Header({ class: 'modal-header' }, [
						H2({ class: 'modal-title' }, 'Modal Title')
					]),
					Div({ class: 'modal-body' }, 'Modal Body'),
					Footer({ class: 'modal-footer' }, 'Modal Footer')
				]
			}
		]);
	}

	open()
	{
		Builder.render(this, document.body);
		this.panel.showModal();
	}

	close()
	{
		this.panel.close();
		this.destroy();
	}
}