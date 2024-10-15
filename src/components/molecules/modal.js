import { Button, Dialog, Div, Footer, H2, Header } from "@base-framework/atoms";
import { Builder, Component } from "@base-framework/base";
import "../../css/components/molecules/modals/modal.css";
import { Icons } from "../icons/icons";

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
		const className = this.getModalClass();
		return Dialog({ class: `modal shadow-xl fixed m-auto z-20 flex flex-col w-full bg-background border-none ${className}`, click: (event) =>
			{
				if (event.target === this.panel)
				{
					this.close();
				}
			}}, [
			Div({ class: 'modal-content flex flex-auto flex-col' }, [
				Header({ class: 'modal-header flex items-center' }, [
					Button({ class: 'bttn-icon mr-2 p-0 bg-transparent sm:hidden hover:bg-transparent', click: () => this.close() }, {
						html: Icons.arrows.left
					}),
					H2({ class: 'modal-title m-0' }, 'Modal Title')
				]),
				Div({ class: 'modal-body flex flex-auto' }, 'Modal Body'),
				Footer({ class: 'modal-footer flex' }, 'Modal Footer')
			])
		]);
	}

	getSizeClass()
	{
		switch (this.size)
		{
			case 'sm':
				return 'small max-w-[646px]';
			case 'lg':
				return 'large max-w-[646px]';
			case 'xl':
				return 'xl max-w-[646px]';
			default:
				return 'medium max-w-[646px]';
		}
	}

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

	getModalClass()
	{
		return this.getSizeClass() + ' ' + this.getTypeClass();
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