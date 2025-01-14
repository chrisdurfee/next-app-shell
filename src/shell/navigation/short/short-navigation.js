import { Nav, Ul } from "@base-framework/atoms";
import { Component, Jot } from "@base-framework/base";
import { MobileLink } from "../mobile/mobile-link.js";

/**
 * This will flatten the options to a single array.
 *
 * @param {Array<object>} options
 * @param {Array<object>} navOptions
 * @returns {void}
 */
const flattenOptions = (options, navOptions = []) =>
{
	if (!options || !options.length)
	{
		return;
	}

	options.forEach(option =>
	{
		if (option.options)
		{
			flattenOptions(option.options, navOptions);
			return;
		}

		navOptions.push(option);
	});
};

/**
 * @constant {string} maxHeight
 */
const maxHeight = 'max-h-[64px]';

/**
 * This will create a list of options for the navigation.
 *
 * @param {Array<object>} options
 * @returns {Array<object>}
 */
const createOptions = (options) =>
{
	const navOptions = [];
	flattenOptions(options, navOptions);

	return navOptions.map(option =>
	{
		option.maxHeight = maxHeight;
		return MobileLink(option);
	});
};

/**
 * ShortNavigation
 *
 * A short navigation component that displays a list of links.
 *
 * @class
 * @extends Component
 */
export const ShortNavigation = Jot(
{
	/**
	 * Renders the navigation component.
	 *
	 * @returns {object}
	 */
	render()
	{
		const options = this.options || [];

		return Nav({ class: 'short-navigation flex flex-auto flex-col w-full h-full z-50' }, [
			Ul({ class: 'flex flex-auto m-0 p-0 list-none flex-col' }, createOptions(options))
		]);
	}
});