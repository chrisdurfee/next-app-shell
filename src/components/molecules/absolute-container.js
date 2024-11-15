import { Div } from '@base-framework/atoms';
import { Component } from '@base-framework/base';

/**
 * This will get the position of the element and
 * use the position and container to determine the
 * position of the container.
 *
 * @param {object} button
 * @param {object} container
 * @returns {object}
 */
export const getPosition = (button, container) =>
{
    const rect = (button)? button.getBoundingClientRect() : { top: 0, bottom: 0, left: 0 };
    const containerRect = container.getBoundingClientRect();

    let x = rect.left + window.scrollX;
    let y = rect.bottom + window.scrollY;
    const PADDING = 10;

    // Adjust position if dropdown overflows on the right of the viewport
    if (x + containerRect.width > window.innerWidth)
    {
        x = window.innerWidth - containerRect.width - PADDING;
    }

    // Adjust position if dropdown overflows at the bottom of the viewport
    if (y + containerRect.height > window.innerHeight)
    {
        y = rect.top + window.scrollY - containerRect.height - PADDING;
    }

    return { x, y };
}

/**
 * AbsoluteContainer
 *
 * This will create a absolute cotnainer component.
 *
 * @export
 * @class AbsoluteContainer
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
        const data = this.parent.data;
        data.set({
            position: { x: 0, y: 0 }
        });
        return data;
    }

    /**
     * This will get the class size.
     *
     * @returns {string}
     */
    getSize()
    {
        const size = this.size || 'lg';
        switch (size)
        {
            case 'sm':
                return 'w-48';
            case 'md':
                return 'w-64';
            case 'lg':
                return 'w-[250px]';
            case 'xl':
                return 'w-96';
            case '2xl':
                return 'w-[400px]';
            case 'full':
                return 'w-full';
        }
    }

	/**
	 * This will render the modal component.
	 *
	 * @returns {object}
	 */
	render()
	{
        const size = this.getSize();
        return Div({
            class: `absolute mt-2 border rounded-md shadow-lg bg-popover min-h-12 r z-30 ${size}`,
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
                id,
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

    /**
     * Updates the dropdown position.
     *
     * @returns {void}
     */
    updatePosition()
    {
        const input = this.button ?? null;
        const dropdown = this.panel;
        const position = getPosition(input, dropdown);

        this.data.position = position;
    }

    /**
     * This will run after the setup.
     *
     * @returns {void}
     */
    afterSetup()
    {
        this.updatePosition();
    }

    /**
     * This will check if the element clicked was in the
     * component of the button.
     *
     * @param {object} element
     * @returns {boolean}
     */
    isOutsideClick(element)
    {
        return (!this.panel.contains(element) && (this.button && !this.button.contains(element)));
    }

    /**
     * This will set up the events.
     *
     * @returns {array}
     */
    setupEvents()
    {
        return [
            ['click', document, (e) =>
            {
                if (this.isOutsideClick(e.target))
                {
                    this.state.open = false;
                }
            }]
        ];
    }

    /**
     * This will override the set up to use the body.
     *
     * @param {object} container
     */
    setup(container)
    {
        this.container = app.appShell.panel;
        this.initialize();
    }
}
