import { Ul } from "../../atoms/atoms.js";
import { Component } from "../../libs/base/base.js";
import { MainLink } from "./main-link.js";
import { Nav, NavigationGroup } from "./navigation-atoms.js";

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
	 * @return {object}
	 */
	render()
	{
		/**
		 * This will get the options.
		 */
		const map = this.mapOptions(this.options);

		return Nav({ class: 'navigation' }, [
			Ul(map),
			...this.addSubs()
		]);
	}

	/**
	 * This will get the options.
	 *
	 * @param {array} options
	 * @return {array}
	 */
	mapOptions(options)
	{
		const items = this.map(options, (option) =>
		{
			if (!option.group)
			{
				return this.addLink(option);
			}

			return this.addGroup(option);
		});

		return [items, (item) => item];
	}

	/**
	 * This will get the subs.
	 *
	 * @return {array}
	 */
	addSubs()
	{
		return [];
	}

	/**
	 * This will add a group.
	 *
	 * @param {object} option
	 * @return {object}
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
	 * @return {object}
	 */
	addLink(option)
	{
		return new MainLink(option);
	}
}
