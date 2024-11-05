import { Button, Div, I, Li, Span, Ul } from '@base-framework/atoms';
import { Data, Jot } from '@base-framework/base';
import { Icons } from '../../icons/icons.js';

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
        class: `
            relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5
            text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground
            focus:bg-accent focus:text-accent-foreground
        `,
        click: () => onClick(props),
    }, [
        props.icon && Span({ class: 'flex w-4 h-4', html: props.icon }),
        Span({ class: 'flex-auto' }, props.label),
        props.shortcut && Span({ class: 'ml-auto text-xs tracking-widest opacity-60' }, props.shortcut),
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
        Ul({
            class: 'max-h-60 overflow-y-auto p-1 grid gap-2',
            for: ['items', (item) => DropdownItem(item, onSelect)]
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
            items: this.items || []  // Default to empty array if no items are provided
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
        this.state.open = !this.state.open;
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
        return Div({ class: 'relative w-[200px]' }, [
            // Dropdown Toggle Button
            Button({
                class: `inline-flex items-center justify-between w-full rounded-md border border-input
                    bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground
                    focus:outline-none transition duration-150 ease-in-out`,
                click: () => this.toggleDropdown(),
            }, [
                Span(this.label || 'Open Menu'),  // Button label
                I({ html: Icons.chevron.down })   // Icon to indicate dropdown
            ]),

            // Dropdown Menu (conditionally rendered)
            Div({
                class: 'mt-2',
                onState: ['open', (isOpen) => isOpen ? Dropdown(this.handleSelect.bind(this)) : null]
            })
        ]);
    }
});
