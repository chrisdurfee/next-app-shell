import { Div } from '@base-framework/atoms';
import { Component } from '@base-framework/base';

/**
 * AbsoluteContainer
 *
 * This will create a absolute cotnainer component.
 *
 * @export
 * @class Dialog
 * @extends {Component}
 */
export class AbsoluteContainer extends Component
{
    /**
     * This will set up the data.
     *
     * @returns {object}
     */
    setData()
    {
        if (this.data)
        {
            return this.data;
        }

        return this.parent.data;
    }

	/**
	 * This will render the modal component.
	 *
	 * @returns {object}
	 */
	render()
	{
        return Div({
            class: 'absolute mt-2 border rounded-md shadow-lg bg-popover z-30 w-[250px]',
            style: 'top: [[position.y]]px; left: [[position.x]]px'
        }, this.children);
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
                //id,
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
}
