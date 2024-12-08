import { Div, Span, Ul } from "@base-framework/atoms";
import { Component } from "@base-framework/base";
import { MobileLink } from "./mobile-link.js";
import { checkTypeBySize, getTypeClass } from "./utils.js";

/**
 * This will create a backdrop for the popover.
 *
 * @returns {object}
 */
const Backdrop = () => (
    Div({
        class: `
            absolute inset-0 bg-black/40 z-[-1] fadeIn
            transition-opacity duration-200
        `,
        click: (e, { state }) => state.open = false
    })
);

/**
 * This will create a popover content.
 *
 * @param {object} props
 * @returns {object}
 */
const PopOverContent = ({ options }) => (
    Div({
        class: `
            absolute pullUpIn bottom-0 sm:top-0 w-full sm:max-w-96 min-h-80 left-0 right-0 z-50 inset-auto
            bg-background/80 backdrop-blur-md rounded-t-lg sm:rounded-t-none sm:rounded-r-md shadow-lg border
            p-4 space-y-3 text-sm text-inherit
        `,
    }, [
        Span({ class: 'text-muted-foreground font-medium mb-2 block' }, 'More Options'),
        Ul({
            class: 'grid grid-cols-5 gap-4 list-none p-0 m-0',
            map: [options, MobileLink]
        })
    ])
);

/**
 * This will create a popover molecule.
 *
 * @param {object} props
 * @returns {object}
 */
const PopOver = ({ options }) => (
    Div({
        class: `mobile-popover-navigation fixed inset-0 z-50 flex lg:hidden`,
        style: '[[typeClass]]'
    }, [
        Backdrop(),
        PopOverContent({ options })
    ])
);

/**
 * PopOverNavigation
 *
 * This will create a fixed popover navigation component with a custom backdrop.
 *
 * @export
 * @class PopOverNavigation
 * @extends {Component}
 */
export class PopOverNavigation extends Component
{
    /**
     * Renders the PopOverNavigation component.
     *
     * @returns {object}
     */
    render()
    {
        const options = this.options || [];
        return PopOver({ options });
    }

    /**
     * Sets up the states.
     *
     * @returns {object}
     */
    setupStates()
    {
        const parent = this.parent;
        const id = parent.getId();
        const type = checkTypeBySize();

        return {
            type: {
				state: type,
				callBack: (type) =>
				{
					this.state.typeClass = getTypeClass(type);
				}
			},
			typeClass: getTypeClass(type),
            open: {
                id,
                callBack: (state) =>
                {
                    if (state === false)
                    {
                        this.destroy();
                    }
                }
            }
        };
    }

    /**
     * Sets up the events.
     *
     * @returns {array}
     */
    setupEvents()
    {
        return [
            ['resize', window, () => this.state.type = checkTypeBySize()]
        ];
    }

    /**
     * Sets up the container for the popover in the app shell.
     *
     * @param {HTMLElement} container
     */
    setup(container)
    {
        this.container = app.appShell.panel;
        this.initialize();
    }
}