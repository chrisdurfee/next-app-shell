import { Th, UseParent } from '@base-framework/atoms';
import { Checkbox } from '../../atoms/form/checkbox.js';

/**
 * CheckboxCol Atom
 *
 * Renders a checkbox column for the table.
 *
 * @param {object} props
 * @returns {object}
 */
export const CheckboxCol = (props) => (
    Th({ class: `cursor-pointer py-3 px-4 text-base w-10 ${props.class || '' }` }, [
        UseParent((parent) => new Checkbox({ class: 'mr-2', onChange: () => parent.toggleAllSelectedRows() })),
    ])
);
