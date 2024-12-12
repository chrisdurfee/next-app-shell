import { Fieldset as BaseFieldset } from '@base-framework/atoms';
import { Atom } from '@base-framework/base';

/**
 * This will create a select component.
 *
 * @param {object} props
 * @param {array} children
 * @returns {object}
 */
export const Fieldset = Atom((props, children) =>
{
    return BaseFieldset({
        ...props,
        class: `text-sm font-medium text-foreground ${props.class || ''}`,
    }, children)
});
