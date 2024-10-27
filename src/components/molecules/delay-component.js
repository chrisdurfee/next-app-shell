import { base, Component, Dom, Html } from "@base-framework/base";

/**
 * DelayComponent
 *
 * A component that adds a delay before removing itself from the DOM.
 *
 * @property {string} removingClass - The class name to be added before destruction.
 *
 * @class
 * @extends Component
 */
export class DelayComponent extends Component
{
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

        Dom.addClass(panel, className);
        base.on('animationend', panel, (e) => Html.removeElement(panel));
    }
}