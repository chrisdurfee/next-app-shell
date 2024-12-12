import { Button, Div, I, OnState, Span } from '@base-framework/atoms';
import { Component, Data } from '@base-framework/base';
import { PopOver } from '../popover.js';
import { Dropdown } from './dropdown.js';

/**
 * This will render a dropdown button.
 *
 * @param {object} props
 * @returns {object}
 */
const DropdownButton = ({ label, icon, toggleDropdown }) => (
    Button({
        cache: 'button',
        class: `inline-flex items-center justify-between rounded-md border border-input
            bg-background px-2 py-2 text-sm font-medium hover:bg-muted
            focus:outline-none transition duration-150 ease-in-out`,
        click: toggleDropdown
    }, [
        label && Span(label),
        icon && I({ html: icon })
    ])
);

/**
 * This will render a dropdown container.
 *
 * @param {object} props
 * @returns {object}
 */
const DropdownContainer = ({ onSelect }) => (
    Div([
        OnState('open', (isOpen, ele, parent) => (!isOpen)
            ? null
            : new PopOver({
                cache: 'dropdown',
                parent: parent,
                button: parent.button,
            }, [
                Dropdown(onSelect)
            ])
        )
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
export class DropdownMenu extends Component
{
    /**
     * Initializes component data.
     *
     * @returns {Data}
     */
    setData()
    {
        return new Data({
            groups: this.groups || []
        });
    }

    /**
     * Initializes the component state.
     *
     * @returns {object}
     */
    setupStates()
    {
        return {
            open: false,
            selectedItem: null
        };
    }

    /**
     * Toggles the dropdown open state.
     *
     * @returns {void}
     */
    toggleDropdown()
    {
        this.state.toggle('open');
    }

    /**
     * Handles item selection within the dropdown.
     *
     * @param {object} item - The selected item object
     * @returns {void}
     */
    handleSelect(item)
    {
        this.state.selectedItem = item;
        this.state.open = false;

        if (typeof this.onSelect === 'function')
        {
            this.onSelect(item);
        }
    }

    /**
     * Renders the Dropdown component.
     *
     * @returns {object}
     */
    render()
    {
        return Div({ class: 'relative' }, [
            DropdownButton({
                label: this.label,
                icon: this.icon,
                toggleDropdown: this.toggleDropdown.bind(this)
            }),
            DropdownContainer({ onSelect: this.handleSelect.bind(this) })
        ]);
    }
}
