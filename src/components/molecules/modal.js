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
		return Dialog({ class: `modal m-auto fixed z-50 grid w-full max-w-lg gap-4 border bg-background p-6 shadow-lg ${className}`, click: (event) =>
			{
				if (event.target === this.panel)
				{
					this.close();
				}
			}}, [
			Div({ class: 'modal-content flex flex-auto flex-col' }, [
				Header({ class: 'modal-header flex items-center' }, [
					Button({ class: 'bttn icon mr-2 p-0 bg-transparent sm:hidden hover:bg-transparent', click: () => this.close() }, {
						html: Icons.arrows.left
					}),
					H2({ class: 'modal-title m-0' }, 'Modal Title')
				]),
				Div({ class: 'modal-body flex flex-auto' }, ''),
				Footer({ class: 'modal-footer flex justify-between' }, [
					Button({ class: 'bttn ghost', click: () => this.close() }, 'Cancel'),
					Button({ class: 'bttn primary', click: () => this.close() }, 'Save')
				])
			])
		]);
	}

	getSizeClass()
	{
		switch (this.size)
		{
			case 'sm':
				return 'sm max-w-[646px]';
			case 'lg':
				return 'lg max-w-[900px]';
			case 'xl':
				return 'xl max-w-[1400px]';
			default:
				return 'medium max-w-[760px]';
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