import { Div, Footer, H2, Header } from "@base-framework/atoms";
import { Atom } from "@base-framework/base";
import { Form } from "@components/molecules/form/form.js";
import { Button } from "../../atoms/buttons/buttons.js";
import { Icon } from "../../atoms/icon.js";
import { Icons } from "../../icons/icons.js";

/**
 * This will create a dialog header.
 *
 * @param {object} props
 * @returns {object}
 */
const ModalHeader = ({ title, description, back, icon }) => (
    Header({ class: 'modal-header flex items-center pt-4 px-6' }, [

		/**
		 * Back Button
		 */
        back && Button({ variant: 'icon', icon: Icons.arrows.left, class: 'mr-2 p-0 flex sm:hidden', click: (e, parent) => parent.close() }),

		/**
		 * Icon
		 */
		icon && Div({ class: 'mr-2 w-12 h-12 rounded-full bg-muted flex items-center justify-center' }, [ Icon(icon) ]),

		/**
		 * Title and Description
		 */
        Div({ class: 'flex flex-auto flex-col ml-2' }, [
			H2({ class: 'text-lg font-semibold m-0' }, title),
			description && Div({ class: 'text-sm text-muted-foreground' }, description)
		])
    ])
);

/**
 * This will create a dialog component.
 *
 * @param {object} props
 * @param {array} children
 * @returns {object}
 */
export const ModalContainer = Atom((props, children) => (
    Div({
            popover: 'manual',
            class: `modal m-auto top-0 right-0 bottom-0 left-0 fixed z-20 grid w-full h-full gap-4 lg:border bg-background text-foreground shadow-xl break-words overflow-hidden p-0 ${props.class}`,
            pointerdown: (e, parent) =>
            {
                const isClickOutside = (e.target === parent.panel);
                if (isClickOutside)
                {
                    e.preventDefault();
                    e.stopPropagation();

                    parent.state.open = false; // Close the modal
                }
            }
        }, [
        Form({ class: 'modal-content relative bg-background z-[1] flex flex-auto flex-col', submit: (e) => (props.onSubmit && props.onSubmit()) }, [
            ModalHeader(props),
            Div({ class: 'modal-body flex flex-auto flex-col overflow-y-auto py-0 px-6' }, children),
            Footer({ class: 'modal-footer flex justify-between pb-4 px-6' }, props.buttons)
        ])
    ])
));