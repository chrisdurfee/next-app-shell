import { Button, Div, Footer, H2, Header, Dialog as MainDialog } from "@base-framework/atoms";
import { Atom, Builder, Component } from "@base-framework/base";
import "../../css/components/molecules/modals/modal.css";

/**
 * This will render the modal component.
 *
 * @param {object} component
 * @returns {object}
 */
const render = (component) => { return Builder.render(component, document.body); };

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
    MainDialog({ class: `flex flex-auto flex-col fixed z-50 w-full max-w-lg gap-4 border bg-background text-foreground p-6 shadow-lg duration-200 sm:rounded-lg`, click: props.click, aria: { expanded: ['open']}}, [
        Div({ class: 'flex flex-auto flex-col space-y-2' }, [
            DialogHeader(props),
            Div({ class: 'flex flex-auto flex-col text-sm text-muted-foreground' }, children),
        ]),
        Footer({ class: 'flex flex-col-reverse sm:flex-row sm:justify-end mt-6 space-x-2' }, props.buttons)
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
        const title = this.title || 'Are you abosolutely sure?';

        return DialogContainer({ class: className, title, click, buttons: this.getButtons() }, this.description);
	}

    /**
     * This will get the buttons for the modal.
     *
     * @returns {array}
     */
    getButtons()
    {
        return [
            Button({ class: 'bttn outline', click: () => this.close() }, 'Cancel'),
            Button({ class: 'bttn primary', click: () => this.confirm() }, 'Save')
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
     * This will confirm the action.
     *
     * @returns {void}
     */
    confirm()
    {
        this.confirmed && this.confirmed();
        this.close();
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