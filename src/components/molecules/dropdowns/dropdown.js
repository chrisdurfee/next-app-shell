import { Div, Ul } from '@base-framework/atoms';
import { DropdownItem } from './dropdown-item.js';

/**
 * This will render a group of dropdown items.
 *
 * @param {array} group
 * @param {function} onSelect
 * @returns {object}
 */
const Group = (group, onSelect) =>
{
    return Ul({ class: 'grid gap-2' }, [
        group.map((item) => DropdownItem(item, onSelect))
    ]);
};

/**
 * Dropdown
 *
 * Renders a list of items within the dropdown menu.
 *
 * @param {function} onSelect - Function to handle item selection
 * @returns {object}
 */
export const Dropdown = (onSelect) => (
    Div({ class: `w-full z-10` }, [
        Div({
            class: 'max-h-60 overflow-y-auto p-1 grid gap-2 divide-y divide-border',
            for: ['groups', (group) => Group(group, onSelect)]
        })
    ])
);
