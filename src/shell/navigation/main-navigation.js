import { Div } from "@base-framework/atoms";
import { Atom, Component } from "@base-framework/base";
import { InlineNavigation } from "../../components/organisms/navigation/inline-navigation.js";
import { MainHeader } from "./main-header.js";

/**
 * This will create the main navigation.
 *
 * @param {object} props
 * @param {array} children
 * @returns {object}
 */
const Navigation = Atom((props, children) => ({
	...props,
	class: 'main-navigation nav-container hidden lg:flex flex-col h-full z-10 overscroll-none',
	children
}));

/**
 * This will create the primary navigation.
 *
 * @param {object} props
 * @returns {object}
 */
const PrimaryNavigation = ({ options}) => (
	new InlineNavigation({ options })
);

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
			MainHeader({ callBack: () => this.state.toggle('pinned') }),
			Div({ class: 'nav-container' }, [
				PrimaryNavigation({
					options: this.options
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
			pinned: { id: 'app-control' }
		};
	}
}