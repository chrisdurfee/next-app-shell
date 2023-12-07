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
     * @return {string}
     */
    getOverlayType()
    {
        return 'overlay inline ' + this.type;
    }
}