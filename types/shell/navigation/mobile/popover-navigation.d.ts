/**
 * PopOverNavigation
 *
 * This will create a fixed popover navigation component with a custom backdrop.
 *
 * @export
 * @class
 * @extends Component
 */
export class PopOverNavigation extends Component {
    /**
     * Renders the PopOverNavigation component.
     *
     * @returns {object}
     */
    render(): object;
    /**
     * Sets up the states.
     *
     * @returns {object}
     */
    setupStates(): object;
    /**
     * Sets up the events.
     *
     * @returns {array}
     */
    setupEvents(): any[];
    /**
     * Sets up the container for the popover in the app shell.
     *
     * @param {HTMLElement} container
     */
    setContainer(container: HTMLElement): void;
}
import { Component } from "@base-framework/base";
