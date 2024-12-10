import { Div, I, Span, Th } from '@base-framework/atoms';
import { Icons } from '../../icons/icons.js';

/**
 * HeaderCol Atom
 *
 * Renders a header column for the table.
 *
 * @param {object} props
 * @returns {object}
 */
export const HeaderCol = ({ align, sortable, key, label, sort, class: className}) =>
{
    const alignClass = align || 'justify-start';
    return Th({
        class: `cursor-pointer py-3 px-4 text-base ${className || ''}`,
        click: sortable && (() => sort(key))
    }, [
        Div({ class: `flex flex-auto w-full items-center ${alignClass}` }, [
            Span(label),
            sortable && I({ class: 'ml-2', html: Icons.arrows.upDown })
        ])
    ]);
};
