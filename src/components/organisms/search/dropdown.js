import { Li, Ul } from '@base-framework/atoms';
import { Atom } from '@base-framework/base';

/**
 * This will create a list item.
 *
 * @param {object} props - The properties of the component.
 * @returns {object} - The list item component.
 */
const ListItem = Atom(({ index, click, state }, children) => (
	Li({
		class: `p-2 cursor-pointer hover:bg-muted/50`,
		onState: [
			[state, 'selectedIndex', {
				'bg-accent': index,
				'text-white': index
			}]
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
export const Dropdown = Atom(({ selectOption, state }) => (
	Ul({
		class: 'border rounded-md list-none m-0 p-0 max-h-[400px] overflow-y-auto',
		for: ['filteredOptions', (option, index) =>
		ListItem({ index, click: selectOption, state }, option.label)]
	})
));

export default Dropdown;