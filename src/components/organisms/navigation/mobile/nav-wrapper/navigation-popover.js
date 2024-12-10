import { H3 } from "@base-framework/atoms";
import { Component } from "@base-framework/base";
import { Div } from "../../../../atoms/atoms.js";
import { Button } from "../../../../atoms/buttons/buttons.js";
import { Icons } from "../../../../icons/icons.js";

/**
 * This will create a title element.
 *
 * @param {string} title
 * @returns {object}
 */
const Title = (title) => H3({ class: 'text-lg ml-2' }, title);

/**
 * This will create a popup header for the mobile navigation.
 *
 * @param {object} props
 * @returns {object}
 */
const PopupHeader = (props) => (
    Div({ class: 'sticky flex flex-auto flex-row items-center bg-popover lg:hidden top-0 z-10 border-0 border-b' }, [
        Button({
			variant: 'icon',
			class: 'm-2',
			click: (e, { state }) => state.toggle('open'),
			icon: Icons.arrows.left,
		}),
        props.title && Title(props.title)
    ])
);

/**
 * This will create a backdrop for the popover.
 *
 * @returns {object}
 */
export const Backdrop = () => (
    Div({
        class: `
            absolute inset-0 bg-black/40 z-[-1] fadeIn
            transition-opacity duration-200
        `,
        click: (e, { state }) => state.open = false
    })
);

/**
 * PopOver
 *
 * This will create a absolute cotnainer component.
 *
 * @export
 * @class PopOver
 * @extends {Component}
 */
export class NavigationPopover extends Component
{
    /**
	 * This will render the modal component.
	 *
	 * @returns {object}
	 */
	render()
	{
		return Div({
            class: `fixed inset-0 z-50`,
            style: '[[typeClass]]'
        }, [
            Backdrop(),

            // Popover Content
            Div({
                class: `
                    absolute popIn w-auto p-0 shadow-lg bg-popover m-auto top-0 bottom-0 left-2 right-2 max-h-[85vh] text-inherit block
                `,
				dataSet: ['open', ['expanded', true, 'true']]
            }, [
                Div({ class: 'flex flex-auto flex-col w-full overflow-y-auto max-h-[85vh] rounded-md bg-popover border' }, [
					PopupHeader({ title: this.title }),
					Div({ class: 'flex flex-auto flex-col' }, this.children)
				])
            ])
        ]);
	}

    /**
     * This will setup the states.
     *
     * @returns {object}
     */
    setupStates()
    {
        const parent = this.parent;
        const id = parent.getId();

        return {
			open: {
                id,
                callBack: (state) =>
                {
                    if (this.state.open === false)
                    {
                        this.destroy();
                    }
                }
            }
        };
    }

	/**
     * This will override the set up to use the body.
     *
     * @param {object} container
     */
    setup(container)
    {
        this.container = app.appShell.panel;
        this.initialize();
    }
}