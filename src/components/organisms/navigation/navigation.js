import { Component } from "@base-framework/base";
import { Nav, Ul } from "../../atoms/atoms.js";
import { MainLink } from "./main-link.js";
import { NavigationGroup } from "./navigation-atoms.js";

/**
 * Navigation
 *
 * This will create a navigation component.
 * @class
 */
export class Navigation extends Component
{
	/**
	 * This will render the component.
	 *
	 * @returns {object}
	 */
	render()
	{
		/**
		 * This will get the options.
		 */
		const map = this.mapOptions(this.options);

		return Nav({ class: `navigation` }, [
			Ul({
				class: 'relative group flex flex-col gap-2 py-2 px-2',
				map
			}),
			...this.addSubs()
		]);
	}

	/**
	 * This will get the options.
	 *
	 * @param {array} options
	 * @returns {array}
	 */
	mapOptions(options)
	{
		const items = options.map(option => option.group ? this.addGroup(option) : this.addLink(option));
		return [items, (item) => item];
	}

	/**
	 * This will get the subs.
	 *
	 * @returns {array}
	 */
	addSubs()
	{
		return [];
	}

	/**
	 * This will add a group.
	 *
	 * @param {object} option
	 * @returns {object}
	 */
	addGroup(option)
	{
		const map = this.mapOptions(option.options);
		return NavigationGroup({ map }, option.group);
	}

	/**
	 * This will add a link.
	 *
	 * @param {object} option
	 * @returns {object}
	 */
	addLink(option)
	{
		return new MainLink(option);
	}
}
