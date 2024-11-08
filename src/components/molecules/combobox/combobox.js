import { Button, Div, I, Input, Li, Span, Ul } from '@base-framework/atoms';
import { Data, Jot } from '@base-framework/base';
import { Icons } from '../../icons/icons.js';
import { AbsoluteContainer, getPosition } from '../absolute-container.js';

/**
 * This will create the dropdown button.
 *
 * @param {object} props
 * @returns {object}
 */
const DropdownButton = ({ toggleDropdown }) => (
    Button({
        cache: 'button',
        class: 'relative z-[2] inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 justify-between',
        click: toggleDropdown,
        addEvent: ['click', document, (e, { state, panel }) =>
        {
            if (isOutsideClick(e.target, panel))
            {
                state.open = false;
            }
        }]
    },
    [
        Span({ onState: ['selectedLabel', (value) => value || 'Select item...'] }),
        I({ html: Icons.chevron.upDown })
    ])
);

/**
 * ComboboxItem Atom
 *
 * @param {object} item
 * @param {function} onSelect
 * @returns {object}
 */
const ComboboxItem = (item, onSelect) => {
    return Li({
        class: 'flex flex-auto items-center cursor-pointer p-2 hover:bg-secondary rounded-sm',
        click: () => onSelect(item),
        onState: ['selectedValue', { 'bg-secondary': item.value }]
    }, [
        item.icon && Span({ class: 'mr-2 flex items-baseline' }, [I({ class: 'flex w-4 h-4', html: item.icon})]),
        Span(item.label),
    ]);
};

/**
 * ComboboxDropdown Atom
 *
 * @param {function} handleSelect
 * @returns {object}
 */
const ComboboxDropdown = (handleSelect) => (
    Div({ class: 'w-full' }, [
        Ul({ class: 'max-h-60 overflow-y-auto p-2 grid gap-1', for: ['items', (item) => ComboboxItem(item, handleSelect) ] }),
    ])
);

/**
 * This will render a dropdown container.
 *
 * @param {object} props
 * @returns {object}
 */
const DropdownContainer = ({ onSelect }) => (
    Div({
        class: 'flex flex-auto flex-col',
        onState: ['open', (isOpen, ele, parent) =>
        {
            if (isOpen)
            {
                return new AbsoluteContainer({
                    cache: 'dropdown',
                    parent: parent,
                    button: parent.button,
                }, [
                    ComboboxDropdown(onSelect)
                ]);
            }
        }]
    })
);

/**
 * This will check if the element clicked was in the
 * component of the button.
 *
 * @param {object} element
 * @param {object} panel
 * @returns {boolean}
 */
const isOutsideClick = (element, panel) => (!panel.contains(element));

/**
 * Combobox Atom
 *
 * @param {object} props
 * @param {array} children
 * @returns {object}
 */
export const Combobox = Jot(
{
    /**
     * This will set up the data.
     *
     * @returns {Data}
     */
    setData()
    {
        return new Data({
            items: this.items || [],
            position: { y: 0, x: 0 }
        });
    },

    /**
     * This will set up the states.
     *
     * @returns {object}
     */
    state: {
        open: false,
        selectedLabel: '',
        selectedValue: ''
    },

    /**
     * Updates the dropdown position.
     *
     * @returns {void}
     */
    updatePosition()
    {
        const button = this.button;
        const dropdown = this.dropdown.panel;
        const position = getPosition(button, dropdown);

        this.data.position = position;
    },

    /**
     * Handles the selection of an item.
     *
     * @param {object} item
     * @returns {void}
     */
    handleSelect(item)
    {
        const state = this.state;
        state.selectedValue = item.value;
        state.selectedLabel = item.label;
        state.open = false;

        if (typeof this.onSelect === 'function')
        {
            this.onSelect(item);
        }
    },

    /**
     * Toggles the dropdown open state.
     */
    toggleDropdown()
    {
        this.state.toggle('open');

        if (this.state.open)
        {
            this.updatePosition();
        }
    },

    /**
     * This will render the component.
     *
     * @returns {object}
     */
    render()
    {
        const handleSelect = (item) => {
            const state = this.state;
            state.selectedValue = item.value;
            state.selectedLabel = item.label;
            state.open = false;
        };

        return Div({ class: 'relative w-full flex flex-auto flex-col max-w-[250px]' }, [
            DropdownButton({ toggleDropdown: this.toggleDropdown.bind(this) }),
            DropdownContainer({ onSelect: handleSelect }),

            // Hidden required input for form validation
            this.required &&
            Input({
                class: 'opacity-0 absolute top-0 left-0 z-[1]',
                type: 'text',
                name: this.name,
                required: true,
                value: ['[[selectedValue]]', this.state]
            })
        ]);
    }
});
