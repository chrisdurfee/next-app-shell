/**
 * AppControl
 *
 * This will create the app control.
 *
 * @class
 * @extends Component
 */
export class AppControl extends Component {
    /**
     * @member {number|null} timer
     */
    timer: number;
    /**
     * This will set the app controll state to be stored in the local storage.
     *
     * @returns {Data}
     */
    afterSetup(): Data;
    /**
     * This will render the component.
     *
     * @returns {object}
     */
    render(): object;
    /**
     * This will ignore the hover.
     *
     * @returns {void}
     */
    ignoreHover(): void;
    /**
     * This will remove the ignore.
     *
     * @returns {void}
     */
    removeIgnore(): void;
    /**
     * This will setup the states.
     *
     * @returns {object}
     */
    setupStates(): object;
}
import { Component } from "@base-framework/base";
import { Data } from "@base-framework/base";
