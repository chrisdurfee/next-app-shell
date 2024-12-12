import { Fieldset as BaseFieldset, Div } from '@base-framework/atoms';
import { Atom } from '@base-framework/base';
import { Legend } from './legend';

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
        class: `p-6 border rounded-md ${props.class || ''}`,
    }, [
        props.legend && Legend(props.legend),
        Div({ class: 'flex flex-auto flex-col space-y-6' }, children)
    ])
});
