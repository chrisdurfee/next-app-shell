import { Li, Span } from '@base-framework/atoms';

/**
 * This will create a shortcut span.
 *
 * @param {string} shortcut
 * @returns {object}
 */
const Shortcut = (shortcut) => Span({ class: 'ml-auto text-xs tracking-widest opacity-60' }, shortcut);

/**
 * This will create an icon span.
 *
 * @param {string} icon
 * @returns {object}
 */
const Icon = (icon) => Span({ class: 'flex w-4 h-4', html: icon });

/**
 * This will create a label span.
 *
 * @param {string} label
 * @returns {object}
 */
const Label = (label) => Span({ class: 'flex-auto' }, label);

/**
 * DropdownItem
 *
 * A single item within the dropdown menu. It renders any content passed as `children`.
 *
 * @param {object} props
 * @param {function} onClick - Click handler for the dropdown item
 * @returns {object}
 */
export const DropdownItem = (props, onClick) =>
{
    return Li({
        class: `relative flex cursor-pointer hover:bg-muted/50 select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0`,
        click: () => onClick(props),
    }, [
        props.icon && Icon(props.icon),
        Label(props.label),
        props.shortcut && Shortcut(props.shortcut),
    ]);
};
