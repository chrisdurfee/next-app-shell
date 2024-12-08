import { Div, Span, Ul } from "@base-framework/atoms";
import { Component } from "@base-framework/base";
import { MobileLink } from "./mobile-link.js";

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
        return Div({
            class: `fixed inset-0 z-50`,
            style: 'bottom: calc(56px + env(safe-area-inset-bottom));'
        }, [
            // Backdrop
            Div({
                class: `
                    absolute inset-0 bg-black/40 z-[-1] fadeIn
                    transition-opacity duration-200
                `,
                click: () => this.state.open = false
            }),

            // Popover Content
            Div({
                class: `
                    absolute pullUpIn bottom-0 w-full min-h-80 left-0 right-0 z-50 inset-auto
                    bg-background/80 backdrop-blur-md rounded-t-lg shadow-lg border
                    p-4 space-y-3 text-sm text-inherit
                `,
            }, [
                Span({ class: 'text-muted-foreground font-medium mb-2 block' }, 'More Options'),
                Ul({
                    class: 'grid grid-cols-5 gap-4 list-none p-0 m-0',
                    map: [options, MobileLink]
                })
            ])
        ]);
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

        return {
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