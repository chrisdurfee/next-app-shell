import { Div } from '@base-framework/atoms';
import { Component, Data, Jot } from '@base-framework/base';
import { PopOver } from "../../molecules/popover.js";
import { Dropdown } from "./dropdown.js";
import { SearchInput } from "./search-input.js";

/**
 * This will render a dropdown container.
 *
 * @param {object} props
 * @returns {object}
 */
const DropdownContainer = (props) => (
    Div({
		class: 'relative flex fle-auto flex-col',
        onState: ['open', (open, ele, parent) =>
        {
            if (open)
            {
				return new PopOver({
                    cache: 'dropdown',
                    parent: parent,
                    button: parent.input,
					size: 'xl'
                }, [
                    Dropdown(props)
                ]);
            }
        }]
    })
);

/**
 * SearchDropdown
 *
 * This will create a search dropdown.
 *
 * @class
 * @augments Component
 */
export const SearchDropdown = Jot(
{
	/**
	 * This will set up the data object.
	 *
	 * @returns {object} - The data object.
	 */
	setData()
	{
		const options = this.options || [];
		return new Data({
			options,
			filteredOptions: options
		});
	},

	/**
	 * This will set up the state object.
	 *
	 * @returns {object} - The state object.
	 */
	state()
	{
		return {
			searchQuery: '',
			selectedIndex: -1,
			open: false,
		};
	},

	/**
	 * This will set the selected index by query.
	 *
	 * @returns {number|null}
	 */
	setSelectedIndexByQuery()
	{
		const filteredOptions = this.data.filteredOptions;
		let { searchQuery } = this.state;
		searchQuery = searchQuery.toLowerCase();

		const index = filteredOptions.findIndex(option => option.label.toLowerCase() === searchQuery);
		if (index >= 0)
		{
			this.state.selectedIndex = index;
		}
	},

	/**
	 * This will filter the options.
	 *
	 * @returns {void}
	 */
	filterOptions()
	{
		const query = this.state.searchQuery.toLowerCase();
		if (query === '' || query.length === 0)
		{
			this.data.filteredOptions = this.data.options;
			return;
		}

		const options = this.data.get('options');
		this.data.filteredOptions = options.filter(option =>
			option.label.toLowerCase().includes(query)
		);
	},

	/**
	 * This will get the selected value.
	 *
	 * @returns {object}
	 */
	getValue()
	{
		const { selectedIndex } = this.state;
		if (selectedIndex < 0)
		{
			return null;
		}

		return this.data.get(`filteredOptions[${selectedIndex}]`);
	},

	/**
	 * This will select an option.
	 *
	 * @param {number} index - The index of the option.
	 * @returns {void}
	 */
	selectOption(index)
	{
		this.state.selectedIndex = index;
		const selection = this.data.get(`filteredOptions[${index}]`);
		this.state.searchQuery = selection.label;
		this.state.open = false;

		if (typeof this.onSelect === 'function')
		{
			this.onSelect(selection);
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
			this.setSelectedIndexByQuery();
        }
    },

	/**
	 * This will handle key down events.
	 *
	 * @param {object} event - The event object.
	 * @returns {void}
	 */
	handleKeyDown(event)
	{
		const filteredOptions = this.data.filteredOptions;
		const { selectedIndex } = this.state;
		if (event.key === 'ArrowDown')
		{
			event.preventDefault();
			this.state.selectedIndex = Math.min(selectedIndex + 1, filteredOptions.length - 1);
		}
		else if (event.key === 'ArrowUp')
		{
			event.preventDefault();
			this.state.selectedIndex = Math.max(selectedIndex - 1, 0);
		}
		else if (event.key === 'Enter' && selectedIndex >= 0)
		{
			event.preventDefault();
			this.selectOption(selectedIndex);
		}
	},

	/**
	 * This will render the component.
	 *
	 * @returns {object} - The rendered component.
	 */
	render()
	{
		return Div({ class: 'relative w-full max-w-md' }, [

			SearchInput({
				state: this.state,
				icon: this.icon,
				placeholder: this.placeholder,
				filterOptions: this.filterOptions.bind(this),
				handleKeyDown: this.handleKeyDown.bind(this),
			}),

			DropdownContainer({
				state: this.state,
				setSelected: this.setSelectedIndexByQuery.bind(this),
				selectOption: this.selectOption.bind(this),
			})
		]);
	},
});

export default SearchDropdown;