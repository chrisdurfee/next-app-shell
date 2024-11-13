import { Div, Footer, H2, Header, Dialog as MainDialog, P } from "@base-framework/atoms";
import { Atom, Builder, Component } from "@base-framework/base";
import "../../../css/components/molecules/modals/modal.css";
import { Button } from "../../atoms/buttons/buttons.js";

/**
 * This will render the modal component.
 *
 * @param {object} component
 * @returns {object}
 */
const render = (component) => { return Builder.render(component, app.appShell.panel); };

/**
 * This will create a dialog header.
 *
 * @param {object} props
 * @returns {object}
 */
const DialogHeader = ({ title }) => (
    Header({ class: 'flex flex-auto items-center' }, [
        H2({ class: 'text-lg font-semibold' }, title)
    ])
);

/**
 * This will create a dialog component.
 *
 * @param {object} props
 * @param {array} children
 * @returns {object}
 */
export const DialogContainer = Atom((props, children) => (
    MainDialog({ class: `fixed z-30 w-[98%] md:w-full max-w-lg gap-4 border bg-background text-foreground p-6 pb-12 md:pb-6 shadow-lg duration-200
                rounded-lg flex flex-auto flex-col
                bottom-4 top-auto md:m-auto md:bottom-auto md:top-1/2 md:left-0 md:right-0 md:-translate-y-1/2`, click: props.click, aria: { expanded: ['open']}}, [
        Div({ class: 'flex flex-auto flex-col space-y-2' }, [
            DialogHeader(props),
            props.description && P({ class: 'flex flex-auto flex-col text-sm text-muted-foreground' }, props.description),
            Div({ class: 'flex flex-auto flex-col text-sm text-muted-foreground' }, children),
        ]),
        Footer({ class: 'flex flex-col-reverse sm:flex-row sm:justify-end mt-6 gap-2 sm:gap-0 sm:space-x-2' }, props.buttons)
    ])
));

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