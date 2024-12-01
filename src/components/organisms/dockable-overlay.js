import { Div } from "../atoms/atoms.js";
import { Overlay } from "./overlay.js";

/**
 * DockableOverlay
 *
 * This will create an dockable overlay.
 *
 * @class
 * @extends Overlay
 */
export class DockableOverlay extends Overlay
{
    /**
     * This will stop presistence.
     *
     * @returns {void}
     */
    beforeSetup()
    {
        this.persist = false;
        this.dockSize = this.maxSize || 1024;
    }

    /**
     * This will render the component.
     *
     * @returns {object}
     */
    render()
    {
        const originalContainer = this.container;

        return Div(
            {
                onState: [
                    ['loading', {
                        loading: true,
                    }],
                    ['docked', (docked, ele) =>
                    {
                        if (docked)
                        {
                            ele.className = this.getDockedClassName();
                            originalContainer.appendChild(ele);
                        }
                        else
                        {
                            ele.className = this.getClassName();
                            app.appShell.panel.appendChild(ele);
                        }
                    }]
                ]
            },
            [
                this.addBody()
            ]
        );
    }

    /**
     * This will get the docked className.
     *
     * @returns {string}
     */
    getDockedClassName()
    {
        return 'flex flex-auto flex-col bg-background flex will-change-contents ' + (this.class || '');
    }

    /**
	 * This will setup and render the component.
	 *
	 * @param {object} container
	 * @returns {void}
	 */
	setup(container)
	{
		this.container = container;
		this.initialize();
	}

    /**
     * This will setup the overlay states.
     *
     * @returns {object}
     */
    setupStates()
    {
        return {
            loading: false,
            docked: false
        };
    }

    /**
     * This will check the dock size.
     *
     * @returns {void}
     */
    afterSetup()
    {
        this.onResize();
    }

    /**
     * This will setup the overlay events.
     *
     * @returns {array<object>}
     */
    setupEvents()
    {
        return [
            ['resize', window, () => this.onResize()]
        ];
    }

    /**
     * This will handle the overlay resize.
     *
     * @returns {void}
     */
    onResize()
    {
        this.state.docked = window.innerWidth >= this.dockSize;
    }
}

export default Overlay;