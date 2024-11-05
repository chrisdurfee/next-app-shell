import { Button, Div, I, Li, Span, Ul } from '@base-framework/atoms';
import { Data, Jot } from '@base-framework/base';
import { Icons } from '../../icons/icons.js';

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
 * DropdownItem Component
 *
 * A single item within the dropdown menu. It renders any content passed as `children`.
 *
 * @param {object} props
 * @param {function} onClick - Click handler for the dropdown item
 * @returns {object}
 */
const DropdownItem = (props, onClick) =>
{
    return Li({
        class: `relative flex cursor-default hover:bg-accent hover:text-accent-foreground select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0`,
        click: () => onClick(props),
    }, [
        props.icon && Icon(props.icon),
        Label(props.label),
        props.shortcut && Shortcut(props.shortcut),
    ]);
};

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
 * Dropdown Component
 *
 * Renders a list of items within the dropdown menu.
 *
 * @param {function} onSelect - Function to handle item selection
 * @returns {object}
 */
const Dropdown = (onSelect) => (
    Div({ class: `absolute mt-2 w-full border rounded-md shadow-lg bg-background z-10` }, [
        Div({
            class: 'max-h-60 overflow-y-auto p-1 grid gap-2 divide-y divide-border',
            for: ['groups', (group) => Group(group, onSelect)]
        })
    ])
);

/**
 * Dropdown Component
 *
 * A generic dropdown component that allows for customizable items.
 *
 * @param {object} props
 * @param {array} children - Dropdown button content
 * @returns {object}
 */
export const DropdownMenu = Jot(
{
    /**
     * Initializes component data.
     *
     * @returns {Data}
     */
    setData()
    {
        return new Data({
            groups: this.groups || []  // Default to empty array if no items are provided
        });
    },

    /**
     * Initializes the component state.
     *
     * @returns {object}
     */
    state: {
        open: false,
        selectedItem: null
    },

    /**
     * Toggles the dropdown open state.
     */
    toggleDropdown()
    {
        this.state.toggle('open');
    },

    /**
     * Handles item selection within the dropdown.
     *
     * @param {object} item - The selected item object
     */
    handleSelect(item)
    {
        this.state.selectedItem = item;
        this.state.open = false;  // Close the dropdown after selection
        if (typeof this.onSelect === 'function')
        {
            this.onSelect(item);  // Trigger external selection handler if provided
        }
    },

    /**
     * Renders the Dropdown component.
     *
     * @returns {object}
     */
    render()
    {
        return Div({ class: 'relative w-full max-w-[300px]' }, [

            // Dropdown Button
            Button({
                class: `inline-flex items-center justify-between w-full rounded-md border border-input
                    bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground
                    focus:outline-none transition duration-150 ease-in-out`,
                click: () => this.toggleDropdown(),
            }, [
                Span(this.label || 'Open Menu'),  // Button label
                I({ html: Icons.chevron.down })   // Icon to indicate dropdown
            ]),

            // Dropdown (conditionally rendered)
            Div({
                class: 'mt-2',
                onState: ['open', (isOpen) => isOpen ? Dropdown(this.handleSelect.bind(this)) : null]
            })
        ]);
    }
});
