import { Div } from '@base-framework/atoms';
import { Component, Data } from '@base-framework/base';

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
    const rect = button ? button.getBoundingClientRect() : { top: 0, bottom: 0, left: 0 };
    const containerRect = container.getBoundingClientRect();

    const PADDING = 10;
    const scrollX = window.scrollX;
    const scrollY = window.scrollY;

    // Initial position of the dropdown
    let x = rect.left + scrollX;
    let y = rect.bottom + scrollY;

    // Space above and below the button
    const spaceBelow = window.innerHeight - rect.bottom;
    const spaceAbove = rect.top;

    // Adjust position if dropdown overflows on the right of the viewport
    if (x + containerRect.width > window.innerWidth)
    {
        x = window.innerWidth - containerRect.width - PADDING;
    }

    // Adjust position based on available space
    if (spaceBelow < containerRect.height && spaceAbove > spaceBelow)
    {
        // Move the dropdown above the button
        y = rect.top + scrollY - containerRect.height - PADDING;
    }
    else if (spaceBelow < containerRect.height)
    {
        // If there's not enough space, force it to fit below
        y = rect.bottom + scrollY - (containerRect.height - spaceBelow) - PADDING;
    }

    return { x, y };
};

/**
 * PopOver
 *
 * This will create a absolute cotnainer component.
 *
 * @export
 * @class PopOver
 * @extends {Component}
 */
export class PopOver extends Component
{
    /**
     * This will set up the data.
     *
     * @returns {object}
     */
    setData()
    {
        const data = this.parent.data || new Data();
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
            case 'fit':
                return 'w-fit';
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
            class: `absolute inset-auto fadeIn mt-2 rounded-md p-0 shadow-lg bg-popover min-h-12 backdrop:bg-transparent text-inherit r z-30 ${size}`,
            popover: 'auto',
            toggle: (e, { state }) => (e.newState === 'closed')? state.open = false : null,
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
        this.panel.showPopover();
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
            }],
            ['resize', window, (e) => this.updatePosition()],
            ['scroll', document, (e) => this.updatePosition()],
        ];
    }

    /**
     * This will override the set up to use the app shell.
     *
     * @param {object} container
     */
    setContainer(container)
    {
        this.container = app.root;
    }

    /**
     * This will hide the popover before destroying.
     *
     * @returns {void}
     */
    beforeDestroy()
    {
        this.panel.hidePopover();
    }
}
