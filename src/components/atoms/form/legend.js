import { Legend as BaseLegend } from '@base-framework/atoms';
import { Atom } from '@base-framework/base';

/**
 * This will create a select component.
 *
 * @param {object} props
 * @param {array} children
 * @returns {object}
 */
export const Legend = Atom((props, children) =>
{
    return BaseLegend({
        ...props,
        class: `text-sm font-medium text-foreground bg-background -mt-4 px-4 py-2 ${props.class || ''}`,
    }, children)
});
