import { Fieldset as BaseFieldset, Div } from '@base-framework/atoms';
import { Atom } from '@base-framework/base';
import { Legend } from './legend.js';

/**
 * This will create a select component.
 *
 * @param {object} props
 * @param {array} children
 * @returns {object}
 */
export const Fieldset = Atom((props, children) =>
{
    const border = props.border === 'full' ? 'border rounded-md' : 'border-t';
    return BaseFieldset({
        ...props,
        class: `p-6 ${border} ${props.class || ''}`,
    }, [
        props.legend && Legend(props.legend),
        Div({ class: 'flex flex-auto flex-col space-y-6' }, children)
    ])
});
