import { Overlay } from './overlay.js';

/**
 * InlineOverlay
 *
 * This will create an inline overlay.
 *
 * @class
 * @extends Overlay
 */
export class InlineOverlay extends Overlay
{
    /**
     * This will get the overlay type.
     *
     * @returns {string}
     */
    getClassName()
    {
        return 'overlay relative inline top-[0px] left-0 bottom-0 right-0 flex-col bg-background z-20 lg:left-[64px] lg:top-0 will-change-contents ' + (this.class || '');
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
}