import { Div, Span, Ul } from "@base-framework/atoms";
import { Component } from "@base-framework/base";
import { MobileLink } from "./mobile-link.js";

/**
 * PopOverNavigation
 *
 * This will create a absolute popover navigation component.
 *
 * @export
 * @class PopOverNavigation
 * @extends {Component}
 */
export class PopOverNavigation extends Component
{
    /**
	 * This will render the modal component.
	 *
	 * @returns {object}
	 */
	render()
	{
        const options = this.options || [];
        return Div({
            class: `
                fixed bottom-[56px] w-full min-h-80 left-0 right-0 z-50 inset-auto
                bg-background/80 backdrop-blur-md rounded-t-lg shadow-lg
                border border-border-light
                p-4 space-y-3 text-sm text-inherit
            `,
            popover: 'auto',
            toggle: (e, { state }) => (e.newState === 'closed' ? state.open = false : null),
        }, [
            Span({ class: 'text-muted-foreground font-medium mb-2 block' }, 'More Options'),
            Ul({
                class: 'grid grid-cols-5 gap-4 list-none p-0 m-0',
            }, options.map(option => MobileLink(option)))
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
     * This will run after the setup.
     *
     * @returns {void}
     */
    afterSetup()
    {
        this.panel.showPopover();
    }

    /**
     * This will check if the element clicked was in the
     * component of the button.
     *
     * @param {object} element
     * @returns {boolean}
     */
    isOutsideClick(element)
    {
        return (!this.panel.contains(element) && (this.button && !this.button.contains(element)));
    }

    /**
     * This will set up the events.
     *
     * @returns {array}
     */
    setupEvents()
    {
        return [
            ['click', document, (e) =>
            {
                if (this.isOutsideClick(e.target))
                {
                    this.state.open = false;
                }
            }]
        ];
    }

    /**
     * This will override the set up to use the app shell.
     *
     * @param {object} container
     */
    setup(container)
    {
        this.container = app.appShell.panel;
        this.initialize();
    }

    /**
     * This will hide the popover before destroying.
     *
     * @returns {void}
     */
    beforeDestroy()
    {
        this.panel.hidePopover();
    }
}