import { Atom, Component } from "@base-framework/base";
import { A, Div } from "../../components/atoms/atoms.js";
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
			Logo(),
			Div({ class: 'nav-container' }, [
				this.addPrimaryNav()
			])
		]);
	}

	/**
	 * This will create the primary navigation.
	 *
	 * @returns {object}
	 */
	addPrimaryNav()
	{
		return new InlineNavigation(
		{
			options: this.options,
			appNav: this.parent.panel
		});
	}
}