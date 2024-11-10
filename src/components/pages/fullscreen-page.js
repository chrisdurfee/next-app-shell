import { Div } from '@base-framework/atoms';
import { Page } from './page.js';

/**
 * FullscreenPage
 *
 * This will create a full screen page.
 *
 * @class
 * @extends Page
 */
export class FullscreenPage extends Page
{
    /**
     * This will render the page.
     *
     * @returns {object}
     */
    render()
    {
        const className = this.class ?? '';
        return Div({ class: `flex flex-col flex-auto ${className}` }, this.children);
    }
}