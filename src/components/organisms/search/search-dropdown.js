import { Div, Li, Ul } from '@base-framework/atoms';
import { Atom, Component, Data, Jot } from '@base-framework/base';
import { Input } from "../../atoms/form/input.js";
import { AbsoluteContainer, getPosition } from "../../molecules/absolute-container.js";

/**
 * This will create a search input.
 *
 * @param {object} props - The properties of the component.
 * @returns {object} - The search input component.
 */
const SearchInput = Atom((props) => (
	Input({
		cache: 'input',
		placeholder: props.placeholder ?? 'Search...',
		bind: [props.state, 'searchQuery'],
		keyup: (e, { state }) =>
		{
			if (typeof props.filterOptions === 'function')
			{
				props.filterOptions();
			}
		},
		focus: (e, parent) => parent.toggleDropdown(),
		blur: (e, { state }) => setTimeout(() => (state.open = false), 100),
		keydown: (e) => (typeof props.handleKeyDown === 'function') && props.handleKeyDown(e),
	})
));

/**
 * This will create a list item.
 *
 * @param {object} props - The properties of the component.
 * @returns {object} - The list item component.
 */
const ListItem = Atom(({ index, click, state }, children) => (
	Li({
		class: `p-2 cursor-pointer hover:bg-accent hover:text-accent-foreground`,
		onState: [
			[state, 'selectedIndex', {
				'bg-accent': index,
				'text-white': index
			}],
		],
		pointerdown: () => click(index)
	}, children)
));

/**
 * This will create a dropdown.
 *
 * @param {object} props - The properties of the component.
 * @returns {object} - The dropdown component.
 */
const Dropdown = Atom(({ selectOption, state }) => (
	Ul({
		class: 'list-none m-0 p-0',
		for: ['filteredOptions', (option, index) =>
		ListItem({ index, click: selectOption, state }, option)]
	})
));

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
				return new AbsoluteContainer({
                    cache: 'dropdown',
                    parent: parent,
                    button: parent.input,
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
			filteredOptions: options,
			position: { y: 0, x: 0 }
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
		const { searchQuery } = this.state;
		const index = filteredOptions.findIndex(option => option === searchQuery);
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
			option.toLowerCase().includes(query)
		);
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
		this.state.searchQuery = this.data.filteredOptions[index];
		this.state.open = false;

		if (typeof this.onSelect === 'function')
		{
			this.onSelect(this.state.searchQuery);
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
            this.updatePosition();
        }
    },

	/**
     * Updates the dropdown position.
     *
     * @returns {void}
     */
    updatePosition()
    {
        const input = this.input;
        const dropdown = this.dropdown.panel;
        const position = getPosition(input, dropdown);

        this.data.position = position;
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
				placeholder: this.placeholder,
				filterOptions: this.filterOptions.bind(this),
				handleKeyDown: this.handleKeyDown.bind(this),
			}),

			DropdownContainer({
				state: this.state,
				updatePosition: this.updatePosition.bind(this),
				setSelected: this.setSelectedIndexByQuery.bind(this),
				selectOption: this.selectOption.bind(this),
			}),
		]);
	},
});

export default SearchDropdown;