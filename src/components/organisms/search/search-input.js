import { Div } from '@base-framework/atoms';
import { Atom } from '@base-framework/base';
import { Input } from "../../atoms/form/input.js";
import { Icon } from "../../atoms/icon.js";

const CLOSE_DELAY = 100;

/**
 * This will create a search input.
 *
 * @param {object} props - The properties of the component.
 * @returns {object} - The search input component.
 */
export const SearchInput = Atom((props) => (
	Div({ class: 'relative flex items-center' }, [
		Input({
			cache: 'input',
			placeholder: props.placeholder ?? 'Search...',
			bind: [props.state, 'searchQuery'],
			keyup: (e, parent) =>
			{
				parent.state.open = true;
				if (typeof props.filterOptions === 'function')
				{
					props.filterOptions();
				}

				parent.dropdown.updatePosition();
			},
			pointerup: (e, parent) => parent.toggleDropdown(),
			blur: (e, { state }) => setTimeout(() => (state.open = false), CLOSE_DELAY),
			keydown: (e) => (typeof props.handleKeyDown === 'function') && props.handleKeyDown(e),
		}),
		props.icon && Div({ class: 'absolute right-0 mr-2' }, [
			Icon(props.icon)
		])
	])
));