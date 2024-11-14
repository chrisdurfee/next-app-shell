import { Div, Li, Ul } from '@base-framework/atoms';
import { Atom, Component, Data, Jot } from '@base-framework/base';
import { Input } from "../../atoms/form/input.js";

/**
 * This will create a search input.
 *
 * @param {object} props - The properties of the component.
 * @returns {object} - The search input component.
 */
const SearchInput = Atom((props) => (
	Input({
		type: 'text',
		placeholder: props.placeholder ?? 'Search...',
		bind: [props.state, 'searchQuery'],
		keyup: (e, { state }) =>
		{
			state.isOpen = true;

			if (typeof props.filterOptions === 'function')
			{
				props.filterOptions();
			}
		},
		focus: (e, { state }) => (state.isOpen = true),
		blur: (e, { state }) => setTimeout(() => (state.isOpen = false), 100),
		keydown: (e) => (typeof props.handleKeyDown === 'function') && props.handleKeyDown(e),
	})
));

/**
 * This will create a list item.
 *
 * @param {object} props - The properties of the component.
 * @returns {object} - The list item component.
 */
const ListItem = Atom(( {index, click }, children) => (
	Li({
		class: `p-2 cursor-pointer hover:bg-accent hover:text-accent-foreground`,
		onState: [
			['selectedIndex', {
				'bg-accent': index,
				'text-white': index
			}],
		],
		click
	}, children)
));

/**
 * This will create a dropdown.
 *
 * @param {object} props - The properties of the component.
 * @returns {object} - The dropdown component.
 */
const Dropdown = Atom((props) => (
	Div({
		class: `flex fle-auto flex-col`,
		onState: ['isOpen', (isOpen) =>
		{
			if (!isOpen)
			{
				return null;
			}

			return Ul({
				class: 'absolute top-full left-0 right-0 mt-2 bg-popover border rounded-md shadow-lg z-10 transition list-none m-0 p-0',
				for: ['filteredOptions', (option, index) =>
				ListItem({ index, click: () => props.selectOption(index) }, option)]
			});
		}]
	})
));

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
			isOpen: false,
		};
	},

	/**
	 * This will filter the options.
	 *
	 * @returns {void}
	 */
	filterOptions()
	{
		const query = this.state.searchQuery.toLowerCase();
		console.log(query === '', query.length === 0)
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
		this.state.searchQuery = this.data.filteredOptions[index];
		this.state.isOpen = false;
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

			Dropdown({
				selectOption: this.selectOption.bind(this),
			}),
		]);
	},
});

export default SearchDropdown;