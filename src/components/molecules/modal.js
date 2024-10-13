import { Button, Dialog, Div, Footer, H2, Header, Span } from "@base-framework/atoms";
import { Builder, Component } from "@base-framework/base";
import "../../css/components/molecules/modal.css";
import { Icons } from "../icons";

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
		return Dialog({ class: 'modal right shadow-xl fixed top-[10vh] left-0 right-0 m-auto z-20 flex flex-col w-full max-w-[646px] base-primary border-none', click: (event) =>
			{
				if (event.target === this.panel)
				{
					this.close();
				}
			}}, [
			Div({ class: 'modal-content flex flex-auto flex-col' }, [
				Header({ class: 'modal-header flex items-center' }, [
					Span([
						Button({ class: 'bttn-icon mr-2', click: () => this.close() }, {
							html: Icons.arrows.left
						})
					]),
					H2({ class: 'modal-title m-0' }, 'Modal Title')
				]),
				Div({ class: 'modal-body flex flex-auto' }, 'Modal Body'),
				Footer({ class: 'modal-footer flex' }, 'Modal Footer')
			])
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