import { Div, Span } from '@base-framework/atoms';
import { Atom } from '@base-framework/base';

/**
 * @type {object} POSITION_CLASSES
 * @constant
 */
const POSITION_CLASSES = {
    top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
    'top-right': 'bottom-full left-full transform -translate-x-1 mb-2',
    'top-left': 'bottom-full right-full transform translate-x-1 mb-2',
    bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-2',
    'bottom-right': 'top-full left-full transform -translate-x-1 mt-2',
    'bottom-left': 'top-full right-full transform translate-x-1 mt-2',
    left: 'top-1/2 right-full transform -translate-y-1/2 mr-2',
    right: 'top-1/2 left-full transform -translate-y-1/2 ml-2'
};

/**
 * This will return the position class.
 *
 * @param {string|null} position
 * @returns {string}
 */
const getPositionClass = (position) => POSITION_CLASSES[position] || POSITION_CLASSES.top;

/**
 * Tooltip Component
 *
 * A customizable tooltip that can be positioned around a target element.
 *
 * @param {object} props
 * @param {string} props.position - The position of the tooltip relative to the target ('top', 'top-right', 'top-left', 'bottom', 'bottom-right', 'bottom-left')
 * @param {string} props.text - The text content of the tooltip.
 * @param {array} children - The children
 * @returns {object}
 */
export const Tooltip = Atom(({ position = 'top', content }, children) =>
{
    const positionClasses = getPositionClass(position);
    if (Array.isArray(children) === false)
    {
        children = [children];
    }

    return Div({ class: 'relative group inline-block' }, [
        ...children,

        // Tooltip box
        Span({
            class: `
                absolute z-20 px-2 py-1 border text-sm bg-background rounded shadow-md opacity-0 whitespace-nowrap
                group-hover:opacity-100 transition-opacity duration-200 ${positionClasses} pointer-events-none
            `
        }, content)
    ]);
});
