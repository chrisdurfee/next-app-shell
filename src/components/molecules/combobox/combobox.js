import { Button, Div, I, Li, Span, Ul } from '@base-framework/atoms';
import { Data, Jot } from '@base-framework/base';
import { Icons } from '../../icons/icons.js';

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
    Div({ class: 'absolute border rounded-md shadow-lg mt-1 w-full z-10' }, [
        Ul({ class: 'max-h-60 overflow-y-auto p-2', for: ['items', (item) => ComboboxItem(item, handleSelect) ] }),
    ])
);

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
        return new Data({ items: this.items || [] })
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
     * This will render the component.
     *
     * @returns {object}
     */
    render()
    {
        const toggleOpen = (e, { state }) => state.toggle('open');
        const handleSelect = (item) => {
            const state = this.state;
            state.selectedValue = item.value;
            state.selectedLabel = item.label;
            state.open = false;
        };

        return Div({ class: 'relative w-[200px]' }, [
            Button({
                class: 'inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-[200px] justify-between',
                click: toggleOpen,
            },
            [
                Span({ onState: ['selectedLabel', (value) => value || 'Select item...'] }),
                I({ html: Icons.chevron.upDown })
            ]),
            Div({ class: 'felx flex-auto flex-col', onState: ['open', (value) => (value)? ComboboxDropdown(handleSelect) : null] }),
        ]);
    }
});
