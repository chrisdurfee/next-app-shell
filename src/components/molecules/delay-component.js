import { base, Component, Html } from "@base-framework/base";

/**
 * DelayComponent
 *
 * A component that adds a delay before removing itself from the DOM.
 *
 * @class
 * @extends Component
 */
export class DelayComponent extends Component
{
    /**
     * @param {string} removingClass This is the class name that will be added
     * before being destroyed.
     */
    removingClass = '';

    /**
     * This will remove the component from the DOM after a delay.
     *
     * @returns {void}
     */
    remove()
    {
        this.prepareDestroy();
		this.removeContext();

        const panel = this.panel,
        className = this.removingClass;
        if (!className)
        {
            Html.removeElement(panel);
            return;
        }

        base.addClass(panel, className);
        base.on('animationend', panel, (e) => Html.removeElement(panel));
    }
}