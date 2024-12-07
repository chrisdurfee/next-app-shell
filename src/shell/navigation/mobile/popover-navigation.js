import { Div, Ul } from "@base-framework/atoms";
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
            class: `absolute inset-auto fadeIn bottom-full left-0 w-full bg-background/80 backdrop-blur-md shadow-md rounded-md text-inherit r z-50`,
            popover: 'auto',
            toggle: (e, { state }) => (e.newState === 'closed')? state.open = false : null,
        }, [
            Ul({ class: 'flex flex-row flex-wrap justify-start m-0 p-4 list-none' }, options.map(option => MobileLink(option)))
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