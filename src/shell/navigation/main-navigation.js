import { Atom, Component } from "@base-framework/base";
import { A, Div } from "../../components/atoms/atoms.js";
import { Icons } from "../../components/icons.js";
import { InlineNavigation } from "../../components/organisms/navigation/inline-navigation.js";

/**
 * This will create the main navigation.
 *
 * @param {object} props
 * @param {array} children
 * @returns {object}
 */
const Navigation = Atom((props, children) =>
{
	props.class = 'main-navigation nav-container hidden sm:flex flex-col h-full z-10 overflow-y-auto overscroll-none base-sub';

	return {
		...props,
		children
	};
});

/**
 * This will create a logo.
 *
 * @param {object} props
 * @returns {object}
 */
const Logo = Atom((props, children) =>
{
	return A(
	{
		class: 'logo w-[32px] h-[32px] m-[16px] block',
		href: './',
		...props,
		children
	});
});

/**
 * This will create a pin icon.
 *
 * @param {object} props
 * @returns {object}
 */
const PinIcon = (pinned) =>
{
	if (pinned)
	{
		return Icons.unlocked;
	}
	return Icons.locked;
};

/**
 * This will create a pin button
 *
 * @param {object} props
 * @param {array} children
 * @returns {object}
 */
const PinButton = Atom((props, children) =>
{
	return {
		class: 'pin w-[32px] h-[32px] m-[16px] block cursor-pointer',
		onState: ['pinned', (val) => (PinIcon(val))],
		...props,
		children
	};
});

/**
 * This will create the primary navigation.
 *
 * @param {object} props
 * @returns {object}
 */
const PrimaryNavigation = ({ options, parent}) =>
{
	return new InlineNavigation(
	{
		options,
		appNav: parent
	});
};

/**
 * MainNavigation
 *
 * This will create the main navigation.
 *
 * @class
 * @extends Component
 */
export class MainNavigation extends Component
{
	/**
	 * This will render the component.
	 *
	 * @returns {object}
	 */
	render()
	{
		return Navigation([
			Div({ class: 'flex flex-row justify-between min-w-[330px]'}, [
				Logo(),
				PinButton({ click: () => this.state.toggle('pinned') })
			]),
			Div({ class: 'nav-container' }, [
				PrimaryNavigation({
					options: this.options,
					parent: this.parent.panel
				})
			])
		]);
	}

	/**
	 * This will link the pinned state to the app control.
	 *
	 * @returns {object}
	 */
	setupStates()
	{
		return {
			pinned: {
				id: 'app-control'
			}
		};
	}
}